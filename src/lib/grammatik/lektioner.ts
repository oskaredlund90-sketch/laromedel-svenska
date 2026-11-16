import type { AgeGroup } from "@/lib/supabase/types";
import { AMNEN, AMNEN_PER_STADIUM, PROGRESSION, type GrammatikAmne } from "./amnen";
import { ARSPLAN, arSistaAret, arskursFor, repetitionsKapitel, type Arskurs } from "./arsplan";
import { STARTPROV_FOR, haftenForKapitel } from "./bok";
import { getExercisesForTopic } from "@/lib/data/grammatik-ovningar";
import type { Hafte, Lucka } from "@/lib/haften/typer";

/**
 * Lektionerna i en årskurs – samma uppdelning som i planeringsguiden och
 * årskursboken. Varje lektion har bilder (presentationen) och material att
 * skriva ut. Allt innehåll hämtas ur bokens granskade material.
 */
export type Lektionstyp = "startprov" | "repetition" | "genomgang" | "ovning" | "text" | "kapitelprov" | "slutrepetition" | "slutprov";

export interface Lektion {
  nr: number;
  typ: Lektionstyp;
  titel: string;
  amne?: GrammatikAmne;
  /** Del av typen inom kapitlet (genomgång 1 av 2 …), 1-baserad. */
  del: number;
  av: number;
  /** Kapitel som repeteras (repetition och slutrepetition). */
  repetera?: GrammatikAmne[];
}

export const TYP_ETIKETT: Record<Lektionstyp, string> = {
  startprov: "Startprov",
  repetition: "Repetition",
  genomgang: "Genomgång",
  ovning: "Övning",
  text: "Använd i din text",
  kapitelprov: "Kapitelprov",
  slutrepetition: "Repetition inför slutprovet",
  slutprov: "Slutprov",
};

/** Lektionsupplägg för läraren. */
export function upplagg(typ: Lektionstyp, stadie: AgeGroup): string {
  const kort = stadie === "lagstadiet";
  switch (typ) {
    case "startprov":
      return "Eleverna gör provet enskilt (50 minuter). Rätta med facit och notera per del vad gruppen behöver repetera – varje del motsvarar ett kapitel.";
    case "repetition":
      return "Ingen ny genomgång. Läs reglerna högt tillsammans, låt eleverna svara på frågorna och dela sedan ut repetitionsuppgifterna.";
    case "genomgang":
      return kort
        ? "Börja med frågan på bilderna. Gå igenom en regel i taget med exemplen och låt eleverna säga svaren högt. Avsluta med en uppgift tillsammans."
        : "10 min: starta med en fråga. 20 min: gå igenom reglerna med exemplen – tänk högt när du löser dem. 15 min: Testa dig tillsammans och de första övningarna i boken.";
    case "ovning":
      return kort
        ? "Två frågor att starta med. Sedan arbetar eleverna med dagens uppgifter, gärna två och två. Gå igenom några svar tillsammans sist."
        : "Starta med frågorna. Eleverna arbetar med dagens material – på papper eller på sajten, där det rättas direkt. Gå igenom det som många missar sist.";
    case "text":
      return "Visa skrivuppgiften. Eleverna skriver och kontrollerar sedan sin text mot listan. Ge återkoppling på just kapitlets regel.";
    case "kapitelprov":
      return kort
        ? "Läs instruktionerna högt. Eleverna gör provet enskilt. Rätta med facit i lärarutskriften."
        : "Kapitelprovet tar 20–30 minuter. Skrivdelen bedöms för sig. Rätta med facit i lärarutskriften.";
    case "slutrepetition":
      return "Välj de kapitel där startprov och kapitelprov visat störst behov. Bilderna visar reglerna i korthet och frågor från flera kapitel.";
    case "slutprov":
      return "Hela boken. Jämför resultatet med startprovet för att se gruppens utveckling.";
  }
}

/** Lektionstyperna i ett kapitel med n lektioner. */
function kapitelsekvens(n: number): Lektionstyp[] {
  if (n <= 1) return ["genomgang"];
  if (n === 2) return ["genomgang", "kapitelprov"];
  if (n === 3) return ["genomgang", "ovning", "kapitelprov"];
  if (n === 4) return ["genomgang", "ovning", "text", "kapitelprov"];
  return ["genomgang", "genomgang", ...Array<Lektionstyp>(n - 4).fill("ovning"), "text", "kapitelprov"];
}

function dela<T>(lista: T[], delar: number): T[][] {
  const ut: T[][] = Array.from({ length: Math.max(delar, 1) }, () => []);
  lista.forEach((x, i) => ut[Math.floor((i * ut.length) / Math.max(lista.length, 1))].push(x));
  return ut;
}

export function lektionerFor(stadie: AgeGroup, ak: string): Lektion[] {
  const ar = arskursFor(stadie, ak);
  if (!ar) return [];
  const ut: Omit<Lektion, "nr">[] = [];
  if (STARTPROV_FOR[stadie] && startAr(stadie) === ak) ut.push({ typ: "startprov", titel: "Startprov", del: 1, av: 1 });
  const rep = repetitionsKapitel(stadie, ak);
  if (ar.repetition && rep.length) {
    dela(rep, ar.repetition).forEach((kap, i, alla) =>
      ut.push({ typ: "repetition", titel: `Repetition: ${kap.map((a) => AMNEN[a].titel).join(", ")}`, del: i + 1, av: alla.length, repetera: kap }),
    );
  }
  ar.kapitel.forEach((amne, k) => {
    const sekvens = kapitelsekvens(ar.lektioner[k] ?? 4);
    const raknare: Partial<Record<Lektionstyp, number>> = {};
    for (const typ of sekvens) {
      raknare[typ] = (raknare[typ] ?? 0) + 1;
      const av = sekvens.filter((t) => t === typ).length;
      ut.push({ typ, amne, del: raknare[typ]!, av, titel: `${AMNEN[amne].titel} – ${TYP_ETIKETT[typ].toLowerCase()}${av > 1 ? ` ${raknare[typ]}` : ""}` });
    }
  });
  if (arSistaAret(stadie, ak)) {
    const alla = AMNEN_PER_STADIUM[stadie];
    const n = ar.slutRepetition ?? 0;
    dela(alla, n).forEach((kap, i, delar) => {
      if (n) ut.push({ typ: "slutrepetition", titel: `Repetition inför slutprovet: ${kap.map((a) => AMNEN[a].titel).join(", ")}`, del: i + 1, av: delar.length, repetera: kap });
    });
    ut.push({ typ: "slutprov", titel: "Slutprov", del: 1, av: 1 });
  }
  return ut.map((l, i) => ({ ...l, nr: i + 1 }));
}

function startAr(stadie: AgeGroup): string {
  return { lagstadiet: "3", mellanstadiet: "5", hogstadiet: "8", gymnasiet: "1" }[stadie];
}

export function hittaArskurs(stadie: AgeGroup, ak: string): Arskurs | undefined {
  return ARSPLAN[stadie].find((a) => a.ak === ak);
}

/* ------------------------------ Bildernas innehåll ------------------------------ */

/** Reglerna i kapitlets övningshäften (utan dubbletter) – bildernas "Kom ihåg". */
export function reglerFor(amne: GrammatikAmne, stadie: AgeGroup): string[] {
  const sett = new Set<string>();
  const ut: string[] = [];
  for (const h of haftenForKapitel(amne, stadie))
    for (const r of h.regel)
      if (!sett.has(r)) {
        sett.add(r);
        ut.push(r);
      }
  return ut;
}

export function malFor(amne: GrammatikAmne, stadie: AgeGroup): string {
  return PROGRESSION[amne][stadie] ?? AMNEN[amne].titel;
}

export interface Fraga {
  id: string;
  instruktion?: string;
  fraga: string;
  alternativ: string[];
  ratt: number;
  forklaring?: string;
}

/** Alla flervalsfrågor till ett kapitel: bokens övningar först, sedan häftenas valuppgifter. */
export function fragorFor(amne: GrammatikAmne, stadie: AgeGroup): Fraga[] {
  const ut: Fraga[] = [];
  for (const e of getExercisesForTopic(amne, stadie)) {
    if (e.type === "multiple-choice")
      ut.push({ id: e.id, instruktion: e.instruction, fraga: e.prompt, alternativ: e.options, ratt: e.correct, forklaring: e.explanation });
    else if (e.type === "fill-in-blank" && e.options.includes(e.correct))
      ut.push({ id: e.id, instruktion: e.instruction, fraga: e.sentence, alternativ: e.options, ratt: e.options.indexOf(e.correct), forklaring: e.explanation });
  }
  for (const h of haftenForKapitel(amne, stadie))
    for (const d of h.delar) {
      if (d.typ !== "val") continue;
      for (const u of d.uppgifter) {
        if (u.typ === "ratta") continue;
        const luckor = u.bitar.filter((b): b is Lucka => typeof b !== "string");
        if (luckor.length !== 1 || !luckor[0].alternativ) continue;
        const l = luckor[0];
        const alt = l.alternativ!.map((a) => (a === "" ? "(inget tecken)" : a));
        const fraga = u.bitar.map((b) => (typeof b === "string" ? b : "____")).join("");
        ut.push({ id: `${h.id}-${u.id}`, instruktion: d.instruktion, fraga, alternativ: alt, ratt: l.alternativ!.indexOf(l.svar[0]) });
      }
    }
  return ut.filter((f) => f.ratt >= 0);
}

/** Frågorna fördelas över årets lektioner så att samma fråga inte kommer två gånger. */
export function fragorForLektion(stadie: AgeGroup, ak: string, lektion: Lektion, antal: number, amne: GrammatikAmne): Fraga[] {
  const alla = fragorFor(amne, stadie);
  if (!alla.length) return [];
  // Hur många frågor har tidigare lektioner i året använt från samma kapitel?
  const tidigare = lektionerFor(stadie, ak)
    .filter((l) => l.nr < lektion.nr)
    .reduce((s, l) => s + antalFragor(l, amne), 0);
  return Array.from({ length: Math.min(antal, alla.length) }, (_, i) => alla[(tidigare + i) % alla.length]);
}

/** Antal frågor en lektion visar från ett visst kapitel. */
export function antalFragor(l: Lektion, amne: GrammatikAmne): number {
  if (l.repetera) return l.repetera.includes(amne) ? 1 : 0;
  if (l.amne !== amne) return 0;
  return l.typ === "genomgang" ? 3 : l.typ === "ovning" ? 2 : 0;
}

/** Häftet en övningslektion använder (den första övningslektionen använder bokens övningar). */
export function hafteForOvning(amne: GrammatikAmne, stadie: AgeGroup, del: number): Hafte | undefined {
  if (del <= 1) return undefined;
  const h = haftenForKapitel(amne, stadie);
  return h.length ? h[(del - 2) % h.length] : undefined;
}
