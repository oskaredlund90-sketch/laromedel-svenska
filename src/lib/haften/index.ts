import { byggHafte, type Hafte, type HafteKalla, type Omradesnamn } from "./typer";
import { GENUS_HAFTEN } from "./data/genus";
import { STAVNING_HAFTEN } from "./data/stavning";
import { GRAMMATIK_HAFTEN } from "./data/grammatik";
import { SKILJETECKEN_HAFTEN } from "./data/skiljetecken";
import { MENINGSBYGGNAD_HAFTEN } from "./data/meningsbyggnad";
import { EXTRA_GRAMMATIK } from "./data/extra-grammatik";
import { EXTRA_STAVNING } from "./data/extra-stavning";
import { PROV_LAG_MEL } from "./data/prov-lag-mel";
import { PROV_HOG_GY } from "./data/prov-hog-gy";

const KALLOR: HafteKalla[] = [
  ...STAVNING_HAFTEN,
  ...SKILJETECKEN_HAFTEN,
  ...GRAMMATIK_HAFTEN,
  ...GENUS_HAFTEN,
  ...MENINGSBYGGNAD_HAFTEN,
  ...EXTRA_GRAMMATIK,
  ...EXTRA_STAVNING,
  ...PROV_LAG_MEL,
  ...PROV_HOG_GY,
];

export const HAFTEN: Hafte[] = KALLOR.map(byggHafte);

export const OMRADEN: Omradesnamn[] = ["Grammatikprov", "Stavning", "Skiljetecken", "Grammatik", "Utrum och neutrum", "Meningsbyggnad"];

export function hamtaHafte(id: string): Hafte | undefined {
  return HAFTEN.find((h) => h.id === id);
}

/**
 * Häften som tränar en viss feltyp, lättast först. Häften där feltypen är
 * huvudsaken (först i listan) går före; övriga visas bara om inga sådana finns.
 */
export function haftenForFeltyp(feltyp: string): Hafte[] {
  // Prov är inte övningar – de föreslås aldrig som nästa steg.
  const ovningar = HAFTEN.filter((h) => h.omrade !== "Grammatikprov");
  const huvud = ovningar.filter((h) => h.feltyper[0] === feltyp);
  const traffar = huvud.length ? huvud : ovningar.filter((h) => h.feltyper.includes(feltyp));
  return traffar.sort((a, b) => a.steg - b.steg);
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
  const typer = new Set(HAFTEN.flatMap((h) => h.feltyper));
  for (const f of typer) k[f] = haftenForFeltyp(f).map((h) => ({ id: h.id, titel: h.titel, steg: h.steg }));
  return k;
}
