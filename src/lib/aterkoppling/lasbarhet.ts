/**
 * Läsbarhetsprofil för elevtexter.
 *
 * Klassiskt LIX = meningslängd + andel långa ord (%). För elevtexter blandar
 * det ihop två saker som pekar åt olika håll:
 *  - Ordförråd (långa ord, ordvariation) – högre är oftast en styrka.
 *  - Meningsbyggnad (ord per mening) – högt kan betyda att punkter saknas.
 * Därför redovisas de var för sig och jämförs med ett spann per årskurs.
 *
 * Ren TypeScript utan beroenden – används både av elevsidan och av
 * lärarskriptet (scripts/aterkoppling.ts).
 */

export interface Spann {
  min: number;
  max: number;
}

export interface Referens {
  meningslangd: Spann;
  langaOrd: Spann;
  ovix: Spann;
  lix: Spann;
}

export type Bedomning = "under" | "inom" | "over";

export interface LasbarhetsProfil {
  antalOrd: number;
  antalMeningar: number;
  lix: number;
  meningslangd: number;
  langaOrdProcent: number;
  /** null när texten är för kort (< MIN_ORD_OVIX ord) för att måttet ska vara pålitligt. */
  ovix: number | null;
  langstaMening: number;
  langaMeningar: number;
  referens: Referens;
  bedomning: {
    meningslangd: Bedomning;
    langaOrd: Bedomning;
    ovix: Bedomning;
  };
}

/**
 * Preliminära spann för elevtexter per årskurs (10–12 = gymnasiet).
 * Grovt uppskattade – ska kalibreras mot riktiga elevtexter över tid.
 */
const REFERENS: Record<number, Referens> = {
  1: ref([5, 9], [6, 14], [30, 50]),
  2: ref([6, 10], [8, 15], [32, 52]),
  3: ref([7, 11], [9, 17], [35, 55]),
  4: ref([8, 12], [11, 19], [38, 58]),
  5: ref([9, 13], [12, 21], [40, 60]),
  6: ref([10, 14], [14, 23], [42, 62]),
  7: ref([10, 15], [15, 25], [44, 64]),
  8: ref([11, 16], [17, 27], [46, 66]),
  9: ref([11, 17], [18, 29], [48, 68]),
  10: ref([12, 18], [20, 31], [50, 70]),
  11: ref([12, 19], [21, 33], [52, 72]),
  12: ref([13, 20], [22, 35], [54, 74]),
};

function ref(menings: [number, number], langa: [number, number], ovix: [number, number]): Referens {
  return {
    meningslangd: { min: menings[0], max: menings[1] },
    langaOrd: { min: langa[0], max: langa[1] },
    ovix: { min: ovix[0], max: ovix[1] },
    lix: { min: menings[0] + langa[0], max: menings[1] + langa[1] },
  };
}

export function referensFor(arskurs: number): Referens {
  const ak = Math.min(12, Math.max(1, Math.round(arskurs)));
  return REFERENS[ak];
}

/** OVIX är opålitligt för korta texter. */
export const MIN_ORD_OVIX = 50;

/** Meningar som är längre än så här markeras som möjliga "rinnande" meningar. */
export const LANG_MENING = 30;

const ORD_RE = /[\p{L}\p{N}]+(?:[-'’][\p{L}\p{N}]+)*/gu;

export function delaIOrd(text: string): string[] {
  return text.match(ORD_RE) ?? [];
}

/**
 * Delar text i meningar. Radbrytningar räknas också som gräns om raden inte
 * slutar med skiljetecken (rubriker, dikter), annars skulle de klumpas ihop.
 */
export function delaIMeningar(text: string): string[] {
  return text
    .split(/(?<=[.!?…:])\s+|\n\s*\n|\n(?=\s*[-–—"”»A-ZÅÄÖ])/u)
    .map((s) => s.trim())
    .filter((s) => delaIOrd(s).length > 0);
}

function bedom(varde: number, spann: Spann): Bedomning {
  if (varde < spann.min) return "under";
  if (varde > spann.max) return "over";
  return "inom";
}

function avrunda(n: number, dec = 1): number {
  const f = 10 ** dec;
  return Math.round(n * f) / f;
}

export function lasbarhetsprofil(text: string, arskurs: number): LasbarhetsProfil {
  const ord = delaIOrd(text);
  const meningar = delaIMeningar(text);
  const antalOrd = ord.length;
  const antalMeningar = Math.max(1, meningar.length);

  const langa = ord.filter((o) => o.replace(/[-'’]/g, "").length > 6).length;
  const meningslangd = antalOrd / antalMeningar;
  const langaOrdProcent = antalOrd ? (langa / antalOrd) * 100 : 0;

  const typer = new Set(ord.map((o) => o.toLowerCase())).size;
  // OVIX (ordvariationsindex). Odefinierat när alla ord är unika.
  let ovix: number | null = null;
  if (antalOrd >= MIN_ORD_OVIX) {
    ovix = typer < antalOrd ? Math.log(antalOrd) / Math.log(2 - Math.log(typer) / Math.log(antalOrd)) : 100;
  }

  const langder = meningar.map((m) => delaIOrd(m).length);
  const referens = referensFor(arskurs);

  return {
    antalOrd,
    antalMeningar: meningar.length,
    lix: avrunda(meningslangd + langaOrdProcent, 0),
    meningslangd: avrunda(meningslangd),
    langaOrdProcent: avrunda(langaOrdProcent),
    ovix: ovix === null ? null : avrunda(ovix, 0),
    langstaMening: Math.max(0, ...langder),
    langaMeningar: langder.filter((l) => l > LANG_MENING).length,
    referens,
    bedomning: {
      meningslangd: bedom(meningslangd, referens.meningslangd),
      langaOrd: bedom(langaOrdProcent, referens.langaOrd),
      ovix: ovix === null ? "inom" : bedom(ovix, referens.ovix),
    },
  };
}

/** Elevvänlig tolkning av profilen. */
export function tolkaProfil(p: LasbarhetsProfil): { ordforrad: string; meningar: string } {
  const ordforrad =
    p.bedomning.langaOrd === "under" && p.bedomning.ovix !== "over"
      ? "Du använder mest korta och vanliga ord. Pröva att byta ut några ord mot mer exakta eller beskrivande ord."
      : p.bedomning.langaOrd === "over" || p.bedomning.ovix === "over"
        ? "Du har ett rikt och varierat ordförråd för din årskurs. Bra!"
        : "Ditt ordförråd ligger på en bra nivå för din årskurs.";

  const meningar =
    p.langaMeningar > 0 || p.bedomning.meningslangd === "over"
      ? `Några meningar är väldigt långa (den längsta har ${p.langstaMening} ord). Kolla om du har glömt punkt eller kan dela upp dem.`
      : p.bedomning.meningslangd === "under"
        ? "Dina meningar är ganska korta. Pröva att binda ihop några med ord som eftersom, men, när eller som."
        : "Dina meningar har en lagom längd för din årskurs.";

  return { ordforrad, meningar };
}
