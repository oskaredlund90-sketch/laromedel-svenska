/**
 * Läsprov med öppna frågor som rättas mot facit (/lasprov).
 *
 * Facit (från förlagets PDF, sparat lokalt i lararrum/) tolkas till texter
 * med frågor, maxpoäng och läsförmåga enligt PIRLS:
 *   H – hitta efterfrågad information
 *   D – dra enkla slutsatser
 *   S – sammanföra och tolka information och idéer samt reflektera
 *   G – granska och värdera innehåll, språk och textuella drag
 */

export type Lasformaga = "H" | "D" | "S" | "G";

export const LASFORMAGOR: Record<Lasformaga, { namn: string; kort: string; tips: string[] }> = {
  H: {
    namn: "Hitta efterfrågad information",
    kort: "Hitta",
    tips: [
      "Läs frågan först och leta efter ett nyckelord. Sök sedan efter ordet i texten.",
      "Svara inte på minnet – hitta meningen där svaret står och läs den igen.",
      "Svara på exakt det frågan frågar efter, och ge lika många exempel som frågan ber om.",
    ],
  },
  D: {
    namn: "Dra enkla slutsatser",
    kort: "Slutsatser",
    tips: [
      "Fråga dig: vad betyder det här för personen? Varför gör hen så?",
      "Kombinera två saker som står i texten till en slutsats: det står att …, alltså …",
      "Läs stycket före och efter – ledtråden finns ofta i närheten.",
    ],
  },
  S: {
    namn: "Sammanföra och tolka",
    kort: "Tolka",
    tips: [
      "Använd orden ”jag tror att … eftersom det står att …” – svara och motivera med texten.",
      "Koppla ihop information från olika delar av texten (och bilder) till en helhet.",
      "Fundera på vad orden betyder i sammanhanget, inte bara bokstavligt.",
    ],
  },
  G: {
    namn: "Granska och värdera",
    kort: "Granska",
    tips: [
      "Fråga dig vad texten vill säga och vilken sorts text det är (berättande, faktatext, argumenterande).",
      "Lägg märke till hur texten är skriven: ordval, bilder, rubriker och syfte.",
      "Ge ett eget omdöme och stöd det med ett exempel från texten.",
    ],
  },
};

export interface Fraga {
  nr: number;
  formaga: Lasformaga;
  fraga: string;
  /** Facittext: svar, exempelsvar och poängnivåer, som i förlagets facit. */
  facit: string;
  maxpoang: number;
}

export interface Lastext {
  /** t.ex. "steg1-03" */
  id: string;
  steg: string;
  titel: string;
  texttyp?: string;
  fragor: Fraga[];
}

/**
 * Tolkar facit (pdftotext -layout) till texter och frågor. En ny text börjar
 * vid en rad som börjar med FACIT följt av titeln.
 */
export function tolkaFacit(text: string, steg: string): Lastext[] {
  const texter: Lastext[] = [];
  let aktuell: Lastext | null = null;
  let fraga: Fraga | null = null;
  const avslutaFraga = () => {
    if (fraga && aktuell) {
      const poang = [...fraga.facit.matchAll(/\((\d+)\s*p\)/g)].map((m) => Number(m[1]));
      // Några frågor saknar poängmarkering i facit (sidbrytning) – vanligast är 2 poäng.
      fraga.maxpoang = poang.length ? Math.max(...poang) : 2;
      fraga.facit = fraga.facit.trim();
      aktuell.fragor.push(fraga);
    }
    fraga = null;
  };

  for (const rad of text.split("\n")) {
    const titel = rad.match(/^\s*(?:FACIT|UPPGIFTER)\s{2,}(.+?)\s*$/);
    if (titel) {
      avslutaFraga();
      const ren = titel[1]
        .replace(/\s*[-–]\s*Facit\s*$/i, "")
        .replace(/\s*\(s\.\s*\d+\)\s*/g, " ")
        .replace(/[:,]\s*$/, "")
        .trim();
      aktuell = { id: `${steg}-${String(texter.length + 1).padStart(2, "0")}`, steg, titel: ren, fragor: [] };
      texter.push(aktuell);
      continue;
    }
    // Sidfot: "Läsförståelse Steg 1 Kopiering … BERÄTTANDE TEXT · FACIT  1"
    const fot = rad.match(/Kopiering tillåten.*?\s{2,}([A-ZÅÄÖ ]+?)\s*·\s*FACIT/);
    if (fot) {
      if (aktuell && !aktuell.texttyp) aktuell.texttyp = fot[1].trim().toLowerCase();
      continue;
    }
    const ny = rad.match(/^\s*([HDSG])\s+(\d+)\.\s+(.*)$/);
    if (ny && aktuell) {
      avslutaFraga();
      // Börjar numreringen om utan ny rubrik är det en ny text i facit.
      if (Number(ny[2]) === 1 && aktuell.fragor.length > 0) {
        const del = texter.filter((t) => t.titel.startsWith(aktuell!.titel.replace(/ \(del \d+\)$/, ""))).length + 1;
        const bas = aktuell.titel.replace(/ \(del \d+\)$/, "");
        aktuell = { id: `${steg}-${String(texter.length + 1).padStart(2, "0")}`, steg, titel: `${bas} (del ${del})`, texttyp: aktuell.texttyp, fragor: [] };
        texter.push(aktuell);
      }
      fraga = { nr: Number(ny[2]), formaga: ny[1] as Lasformaga, fraga: ny[3].trim(), facit: "", maxpoang: 0 };
      continue;
    }
    if (!fraga) continue;
    const t = rad.trim();
    if (!t) continue;
    // Frågan kan fortsätta på nästa rad innan facit börjar.
    const facitBorjat = fraga.facit.length > 0 || /^(Svar|Exempelsvar|Poäng|Exempel|•)/.test(t);
    if (!facitBorjat) fraga.fraga += " " + t;
    else fraga.facit += (fraga.facit ? "\n" : "") + t;
  }
  avslutaFraga();
  return texter.filter((t) => t.fragor.length > 0);
}

/** Elevens resultat på en text – det Claude skriver efter rättningen. */
export interface Rattning {
  v: 1;
  /** Bara i lärarens fil – tas bort innan elevlänken skapas. */
  elev?: string;
  /** Visas för eleven, t.ex. "Den vackre unge mannen …" */
  titel: string;
  steg?: string;
  /** Årskurs 1–9, gymnasiet 10–12 – styr länkarna till träning. */
  arskurs?: number;
  svar: { nr: number; formaga: Lasformaga; fraga?: string; poang: number; maxpoang: number; kommentar?: string }[];
  helhet?: string;
  larare?: string;
}

export const LASRESULTAT_PREFIX = "L1.";

export function arRattning(x: unknown): x is Rattning {
  const r = x as Partial<Rattning>;
  return !!r && r.v === 1 && typeof r.titel === "string" && Array.isArray(r.svar);
}

export interface FormagaResultat {
  formaga: Lasformaga;
  poang: number;
  maxpoang: number;
  andel: number;
}

export function summera(r: Rattning): { totalt: number; max: number; perFormaga: FormagaResultat[] } {
  const perFormaga = (Object.keys(LASFORMAGOR) as Lasformaga[])
    .map((f) => {
      const svar = r.svar.filter((s) => s.formaga === f);
      const poang = svar.reduce((n, s) => n + s.poang, 0);
      const maxpoang = svar.reduce((n, s) => n + s.maxpoang, 0);
      return { formaga: f, poang, maxpoang, andel: maxpoang ? poang / maxpoang : 0 };
    })
    .filter((f) => f.maxpoang > 0);
  return {
    totalt: r.svar.reduce((n, s) => n + s.poang, 0),
    max: r.svar.reduce((n, s) => n + s.maxpoang, 0),
    perFormaga,
  };
}

export type Niva = "trana" | "pagang" | "saker";

export function nivaFor(andel: number): Niva {
  if (andel >= 0.8) return "saker";
  if (andel >= 0.5) return "pagang";
  return "trana";
}
