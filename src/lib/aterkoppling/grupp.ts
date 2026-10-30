/**
 * Sammanställning av en grupps texter (/gruppanalys).
 *
 * Claude skriver en analys per text (vilka fel, styrkor, nästa steg). Allt som
 * räknas – vilka fel som finns i flera texter, feltyper per elev, läsbarhet –
 * görs här, utan AI, så att siffrorna blir exakta och samma varje gång.
 */

import { hamtaFeltyp, type Omrade } from "./feltyper";
import { lasbarhetsprofil, type LasbarhetsProfil } from "./lasbarhet";
import type { Punkt } from "./typer";

export interface Fel {
  /** Så som eleven skrev, t.ex. "komade". */
  fel: string;
  /** Rätt form, t.ex. "kom". */
  ratt: string;
  typ: string;
}

export interface TextAnalys {
  /** Alias eller initialer – aldrig fullständigt namn. */
  elev: string;
  arskurs: number;
  text: string;
  fel: Fel[];
  styrkor: Punkt[];
  nasta: Punkt[];
}

export interface VanligtFel {
  ratt: string;
  typ: string;
  /** Felvarianter och hur många gånger var och en förekommer. */
  varianter: { fel: string; antal: number }[];
  /** Elever (alias) som har felet. */
  elever: string[];
  forekomster: number;
}

export interface FeltypRad {
  typ: string;
  omrade: Omrade;
  etikett: string;
  /** Antal fel per elev (alias → antal). */
  perElev: Record<string, number>;
  antalTexter: number;
  forekomster: number;
}

export interface Sammanstallning {
  antalTexter: number;
  arskurs: number;
  /** Stavfel (stavning.*) som finns i minst `minTexter` texter. */
  vanligaStavfel: VanligtFel[];
  /** Övriga språkfel med rätt form som finns i minst `minTexter` texter. */
  vanligaSprakfel: VanligtFel[];
  feltyper: FeltypRad[];
  profiler: { elev: string; profil: LasbarhetsProfil }[];
  /** Medianvärden för gruppen. */
  median: { lix: number; meningslangd: number; langaOrdProcent: number; ovix: number | null; antalOrd: number };
  /** Hur många elever som har en styrka resp. ett nästa steg inom varje område/typ. */
  styrkorPerOmrade: Record<Omrade, number>;
  /** Elever grupperade efter gemensamt nästa steg – underlag för genomgångar. */
  nastaPerTyp: { typ: string; elever: string[] }[];
}

function normalisera(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

function median(v: number[]): number {
  if (!v.length) return 0;
  const s = [...v].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  const r = s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
  return Math.round(r * 10) / 10;
}

function vanligaFel(analyser: TextAnalys[], urval: (f: Fel) => boolean, minTexter: number): VanligtFel[] {
  const perRatt = new Map<string, { typ: string; varianter: Map<string, number>; elever: Set<string>; forekomster: number }>();
  for (const a of analyser) {
    for (const f of a.fel) {
      if (!urval(f) || !f.ratt || normalisera(f.fel) === normalisera(f.ratt)) continue;
      const nyckel = normalisera(f.ratt);
      const post = perRatt.get(nyckel) ?? { typ: f.typ, varianter: new Map(), elever: new Set(), forekomster: 0 };
      const fel = normalisera(f.fel);
      post.varianter.set(fel, (post.varianter.get(fel) ?? 0) + 1);
      post.elever.add(a.elev);
      post.forekomster++;
      perRatt.set(nyckel, post);
    }
  }
  return [...perRatt.entries()]
    .filter(([, p]) => p.elever.size >= minTexter)
    .map(([ratt, p]) => ({
      ratt,
      typ: p.typ,
      varianter: [...p.varianter.entries()].map(([fel, antal]) => ({ fel, antal })).sort((a, b) => b.antal - a.antal),
      elever: [...p.elever].sort(),
      forekomster: p.forekomster,
    }))
    .sort((a, b) => b.elever.length - a.elever.length || b.forekomster - a.forekomster || a.ratt.localeCompare(b.ratt, "sv"));
}

/** @param minTexter Hur många texter ett fel måste finnas i för att räknas som vanligt (standard 3 = "fler än 2"). */
export function sammanstall(analyser: TextAnalys[], minTexter = 3): Sammanstallning {
  const arStavning = (f: Fel) => f.typ.startsWith("stavning.");
  const arOvrigtSprak = (f: Fel) => !arStavning(f) && (hamtaFeltyp(f.typ)?.omrade ?? "sprak") === "sprak";

  const typer = new Map<string, FeltypRad>();
  for (const a of analyser) {
    for (const f of a.fel) {
      const ft = hamtaFeltyp(f.typ);
      const rad =
        typer.get(f.typ) ??
        ({ typ: f.typ, omrade: ft?.omrade ?? "sprak", etikett: ft?.etikett ?? f.typ, perElev: {}, antalTexter: 0, forekomster: 0 } as FeltypRad);
      rad.perElev[a.elev] = (rad.perElev[a.elev] ?? 0) + 1;
      rad.forekomster++;
      typer.set(f.typ, rad);
    }
  }
  const feltyper = [...typer.values()]
    .map((r) => ({ ...r, antalTexter: Object.keys(r.perElev).length }))
    .sort((a, b) => b.antalTexter - a.antalTexter || b.forekomster - a.forekomster);

  const profiler = analyser.map((a) => ({ elev: a.elev, profil: lasbarhetsprofil(a.text, a.arskurs) }));
  const p = profiler.map((x) => x.profil);

  const styrkorPerOmrade: Record<Omrade, number> = { sprak: 0, struktur: 0, innehall: 0 };
  for (const a of analyser) for (const o of new Set(a.styrkor.map((s) => s.omrade))) styrkorPerOmrade[o]++;

  const nastaTyper = new Map<string, string[]>();
  for (const a of analyser) {
    for (const t of new Set(a.nasta.map((n) => n.typ).filter((t): t is string => !!t))) {
      nastaTyper.set(t, [...(nastaTyper.get(t) ?? []), a.elev]);
    }
  }

  return {
    antalTexter: analyser.length,
    arskurs: median(analyser.map((a) => a.arskurs)),
    vanligaStavfel: vanligaFel(analyser, arStavning, minTexter),
    vanligaSprakfel: vanligaFel(analyser, arOvrigtSprak, minTexter),
    feltyper,
    profiler,
    median: {
      lix: median(p.map((x) => x.lix)),
      meningslangd: median(p.map((x) => x.meningslangd)),
      langaOrdProcent: median(p.map((x) => x.langaOrdProcent)),
      ovix: p.some((x) => x.ovix !== null) ? median(p.flatMap((x) => (x.ovix === null ? [] : [x.ovix]))) : null,
      antalOrd: median(p.map((x) => x.antalOrd)),
    },
    styrkorPerOmrade,
    nastaPerTyp: [...nastaTyper.entries()]
      .map(([typ, elever]) => ({ typ, elever: elever.sort() }))
      .sort((a, b) => b.elever.length - a.elever.length),
  };
}

/**
 * Gör om en /aterkoppling-fil till en textanalys, så att redan gjorda
 * återkopplingar kan återanvändas i gruppanalysen.
 */
export function franAterkoppling(u: {
  elev?: string;
  aterkoppling: { arskurs: number; text: string; kommentarer: { citat: string; typ?: string; forslag?: string }[]; bra: Punkt[]; nasta: Punkt[] };
}, reservnamn: string): TextAnalys {
  const a = u.aterkoppling;
  return {
    elev: u.elev ?? reservnamn,
    arskurs: a.arskurs,
    text: a.text,
    fel: a.kommentarer
      .filter((k): k is typeof k & { typ: string } => !!k.typ)
      .map((k) => ({ fel: k.citat, ratt: k.forslag ?? "", typ: k.typ })),
    styrkor: a.bra,
    nasta: a.nasta,
  };
}
