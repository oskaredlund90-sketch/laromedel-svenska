import { byggHafte, type Hafte, type HafteKalla, type Omradesnamn } from "./typer";
import { GENUS_HAFTEN } from "./data/genus";
import { STAVNING_HAFTEN } from "./data/stavning";
import { GRAMMATIK_HAFTEN } from "./data/grammatik";
import { SKILJETECKEN_HAFTEN } from "./data/skiljetecken";
import { MENINGSBYGGNAD_HAFTEN } from "./data/meningsbyggnad";

const KALLOR: HafteKalla[] = [
  ...STAVNING_HAFTEN,
  ...SKILJETECKEN_HAFTEN,
  ...GRAMMATIK_HAFTEN,
  ...GENUS_HAFTEN,
  ...MENINGSBYGGNAD_HAFTEN,
];

export const HAFTEN: Hafte[] = KALLOR.map(byggHafte);

export const OMRADEN: Omradesnamn[] = ["Stavning", "Skiljetecken", "Grammatik", "Utrum och neutrum", "Meningsbyggnad"];

export function hamtaHafte(id: string): Hafte | undefined {
  return HAFTEN.find((h) => h.id === id);
}

/** Häften som tränar en viss feltyp, lättast först. */
export function haftenForFeltyp(feltyp: string): Hafte[] {
  return HAFTEN.filter((h) => h.feltyper.includes(feltyp)).sort((a, b) => a.steg - b.steg);
}

export interface HaftesInfo {
  id: string;
  titel: string;
  steg: number;
}

/** Feltyp → häften (bara metadata), för sidor som inte ska ladda alla uppgifter. */
export type HaftesKatalog = Record<string, HaftesInfo[]>;

export function haftesKatalog(): HaftesKatalog {
  const k: HaftesKatalog = {};
  for (const h of [...HAFTEN].sort((a, b) => a.steg - b.steg)) {
    for (const f of h.feltyper) (k[f] ??= []).push({ id: h.id, titel: h.titel, steg: h.steg });
  }
  return k;
}
