/**
 * Övningshäften: format och tolkare.
 *
 * Uppgifterna skrivs som rader i ett kompakt format så att det går att skriva
 * hundratals uppgifter per häfte utan mycket kod:
 *
 *  val    "Jag ser {*en|ett} hund."     – välj; * markerar rätt alternativ,
 *                                          _ betyder "inget" (t.ex. inget komma)
 *  skriv  "Igår {sprang} jag. (springa)" – skriv in; flera godkända svar med /,
 *                                          en avslutande (parentes) blir ledtråd
 *  ratta  "Igår vi åt glass. => Igår åt vi glass."
 *                                        – skriv om meningen rätt; flera godkända
 *                                          svar separeras med ||
 *
 * Samma data används för webbvyn (rättas direkt, inget sparas) och för
 * utskriften (med facit sist).
 */

export type UppgiftsTyp = "val" | "skriv" | "ratta";

export interface Lucka {
  /** Godkända svar. */
  svar: string[];
  /** Alternativ att välja mellan (bara för val). */
  alternativ?: string[];
}

export type Bit = string | Lucka;

export interface LuckUppgift {
  id: string;
  typ: "val" | "skriv";
  bitar: Bit[];
  ledtrad?: string;
}

export interface RattaUppgift {
  id: string;
  typ: "ratta";
  fel: string;
  ratt: string[];
}

export type Uppgift = LuckUppgift | RattaUppgift;

export interface DelKalla {
  rubrik: string;
  instruktion: string;
  typ: UppgiftsTyp;
  /** En uppgift per rad. Tomma rader och rader som börjar med # ignoreras. */
  rader: string;
  /** Skilj på stor och liten bokstav vid rättning av skriv-uppgifter. */
  skiftlage?: boolean;
}

export interface HafteKalla {
  id: string;
  titel: string;
  /** Kort undertitel, t.ex. "en eller ett". */
  underrubrik: string;
  /** Område på indexsidan. */
  omrade: Omradesnamn;
  /** Svårighetssteg 1–4. */
  steg: 1 | 2 | 3 | 4;
  /** Feltyp-id:n (src/lib/aterkoppling/feltyper.ts) som häftet tränar. */
  feltyper: string[];
  /** Regeln/förklaringen överst i häftet. */
  regel: string[];
  delar: DelKalla[];
}

export type Omradesnamn = "Utrum och neutrum" | "Stavning" | "Grammatik" | "Skiljetecken" | "Meningsbyggnad";

export interface Del extends Omit<DelKalla, "rader"> {
  uppgifter: Uppgift[];
}

export interface Hafte extends Omit<HafteKalla, "delar"> {
  delar: Del[];
  antalUppgifter: number;
}

const LUCKA_RE = /\{([^{}]+)\}/g;

function rader(text: string): string[] {
  return text
    .split("\n")
    .map((r) => r.trim())
    .filter((r) => r && !r.startsWith("#"));
}

export function tolkaRad(rad: string, typ: UppgiftsTyp, id: string): Uppgift {
  if (typ === "ratta") {
    const [fel, ratt] = rad.split("=>").map((s) => s.trim());
    if (!fel || !ratt) throw new Error(`${id}: rätta-rad saknar "=>": ${rad}`);
    return { id, typ, fel, ratt: ratt.split("||").map((s) => s.trim()) };
  }

  let text = rad;
  let ledtrad: string | undefined;
  if (typ === "skriv") {
    const m = text.match(/\s*\(([^()]+)\)\s*$/);
    if (m) {
      ledtrad = m[1];
      text = text.slice(0, m.index).trimEnd();
    }
  }

  const bitar: Bit[] = [];
  let pos = 0;
  for (const m of text.matchAll(LUCKA_RE)) {
    if (m.index! > pos) bitar.push(text.slice(pos, m.index));
    if (typ === "val") {
      const tom = (a: string) => (a === "_" ? "" : a);
      const alternativ = m[1].split("|").map((s) => s.trim());
      const svar = alternativ.filter((a) => a.startsWith("*")).map((a) => tom(a.slice(1)));
      if (svar.length !== 1) throw new Error(`${id}: val-lucka måste ha exakt ett rätt (*): ${rad}`);
      bitar.push({ svar, alternativ: alternativ.map((a) => tom(a.replace(/^\*/, ""))) });
    } else {
      bitar.push({ svar: m[1].split("/").map((s) => s.trim()) });
    }
    pos = m.index! + m[0].length;
  }
  if (pos < text.length) bitar.push(text.slice(pos));
  if (!bitar.some((b) => typeof b !== "string")) throw new Error(`${id}: raden saknar lucka: ${rad}`);
  return { id, typ, bitar, ledtrad };
}

export function antalLuckor(u: Uppgift): number {
  return u.typ === "ratta" ? 1 : u.bitar.filter((b) => typeof b !== "string").length;
}

export function byggHafte(k: HafteKalla): Hafte {
  const delar: Del[] = k.delar.map((d, di) => ({
    rubrik: d.rubrik,
    instruktion: d.instruktion,
    typ: d.typ,
    skiftlage: d.skiftlage,
    uppgifter: rader(d.rader).map((r, i) => tolkaRad(r, d.typ, `${k.id}-${di + 1}-${i + 1}`)),
  }));
  const antalUppgifter = delar.reduce((s, d) => s + d.uppgifter.reduce((t, u) => t + antalLuckor(u), 0), 0);
  return { ...k, delar, antalUppgifter };
}

/** Jämför ett elevsvar med de godkända svaren. */
export function normalisera(s: string, skiftlage: boolean): string {
  let r = s
    .replace(/[”“„»«]/g, '"')
    .replace(/[’‘]/g, "'")
    .replace(/[—–]/g, "–")
    .replace(/\s+/g, " ")
    .trim();
  if (!skiftlage) r = r.toLowerCase();
  return r;
}

export function arRatt(svar: string, godkanda: string[], skiftlage: boolean): boolean {
  const s = normalisera(svar, skiftlage);
  return godkanda.some((g) => normalisera(g, skiftlage) === s);
}

/** Rätta-uppgifter: stor/liten bokstav och skiljetecken räknas alltid. */
export function arRattMening(svar: string, godkanda: string[]): boolean {
  // Tillåt rak bindestreck i stället för talstreck.
  const n = (s: string) => normalisera(s, true).replace(/^- /, "– ").replace(/ - /g, " – ");
  return godkanda.some((g) => n(g) === n(svar));
}

/** Ett tomt alternativ visas som "inget". */
export function visaAlternativ(a: string): string {
  return a === "" ? "inget" : a;
}

/** Text för utskrift: luckor blir streck, val visas som (a / b). */
export function utskriftsText(u: LuckUppgift): string {
  return u.bitar
    .map((b) =>
      typeof b === "string" ? b : b.alternativ ? `____ (${b.alternativ.map(visaAlternativ).join(" / ")})` : "________",
    )
    .join("");
}

export function facitText(u: Uppgift): string {
  if (u.typ === "ratta") return u.ratt[0];
  return u.bitar.map((b) => (typeof b === "string" ? b : b.svar[0])).join("");
}
