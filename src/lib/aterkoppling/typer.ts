/**
 * Formatet för en återkoppling. Claude skriver det som JSON, lärarskriptet
 * kontrollerar det och packar in det i elevlänken (efter #, så att inget
 * skickas till eller sparas på servern).
 */

import type { Omrade } from "./feltyper";

export interface TextKommentar {
  /** Exakt textutdrag ur elevtexten som kommentaren gäller. */
  citat: string;
  /** Vilken förekomst av citatet (1 = första). Standard 1. */
  forekomst?: number;
  /** Feltyp-id från feltyper.ts, t.ex. "stavning.dubbelteckning". */
  typ?: string;
  /** Kommentar till eleven. */
  kommentar: string;
  /** Rättat förslag, t.ex. "komma". */
  forslag?: string;
}

export interface Punkt {
  omrade: Omrade;
  text: string;
  /** Feltyp-id – ger övningslänkar under "Nästa steg". */
  typ?: string;
}

export interface Aterkoppling {
  v: 1;
  /** Årskurs 1–9, gymnasiet 10–12. */
  arskurs: number;
  titel?: string;
  uppgift?: string;
  text: string;
  kommentarer: TextKommentar[];
  bra: Punkt[];
  nasta: Punkt[];
  /** Egna synonymförslag för ord eleven överanvänder (utöver de uträknade). */
  synonymer?: { ord: string; forslag: string[] }[];
  /** Kort helhetskommentar/hälsning till eleven. */
  helhet?: string;
  larare?: string;
}

export interface PlaceradKommentar extends TextKommentar {
  index: number;
  start: number;
  slut: number;
}

/**
 * Hittar var i texten varje kommentar hör hemma. Kommentarer som inte hittas
 * eller överlappar en tidigare returneras i `saknas`.
 */
export function placeraKommentarer(
  text: string,
  kommentarer: TextKommentar[],
): { placerade: PlaceradKommentar[]; saknas: TextKommentar[] } {
  const kandidater: PlaceradKommentar[] = [];
  const saknas: TextKommentar[] = [];

  kommentarer.forEach((k, index) => {
    const n = Math.max(1, k.forekomst ?? 1);
    let pos = -1;
    for (let i = 0; i < n; i++) {
      pos = text.indexOf(k.citat, pos + 1);
      if (pos === -1) break;
    }
    if (!k.citat || pos === -1) saknas.push(k);
    else kandidater.push({ ...k, index, start: pos, slut: pos + k.citat.length });
  });

  kandidater.sort((a, b) => a.start - b.start || b.slut - a.slut);
  const placerade: PlaceradKommentar[] = [];
  let slut = 0;
  for (const k of kandidater) {
    if (k.start < slut) saknas.push(k);
    else {
      placerade.push(k);
      slut = k.slut;
    }
  }
  return { placerade, saknas };
}

export type Segment = { text: string; kommentar?: PlaceradKommentar };

export function delaISegment(text: string, placerade: PlaceradKommentar[]): Segment[] {
  const segment: Segment[] = [];
  let pos = 0;
  for (const k of placerade) {
    if (k.start > pos) segment.push({ text: text.slice(pos, k.start) });
    segment.push({ text: text.slice(k.start, k.slut), kommentar: k });
    pos = k.slut;
  }
  if (pos < text.length) segment.push({ text: text.slice(pos) });
  return segment;
}

export function arAterkoppling(x: unknown): x is Aterkoppling {
  if (!x || typeof x !== "object") return false;
  const a = x as Partial<Aterkoppling>;
  return (
    a.v === 1 &&
    typeof a.arskurs === "number" &&
    typeof a.text === "string" &&
    Array.isArray(a.kommentarer) &&
    Array.isArray(a.bra) &&
    Array.isArray(a.nasta)
  );
}
