/**
 * Kopplar läsårsvecka 1–36 till kalenderveckor. Skolstart, höstlov, jullov,
 * sportlov och påsklov kan ställas in eftersom de skiljer sig mellan kommuner.
 */

import { ANTAL_VECKOR } from "./typer";

export interface Lasarsinstallning {
  /** Året då läsåret börjar, t.ex. 2026 för läsåret 2026/27. */
  startar: number;
  /** Kalendervecka då skolan börjar. */
  skolstart: number;
  hostlov: number;
  sportlov: number;
  pasklov: number;
}

export function standardInstallning(idag = new Date()): Lasarsinstallning {
  // Före juli räknas pågående läsår (som började förra året).
  const startar = idag.getMonth() < 6 ? idag.getFullYear() - 1 : idag.getFullYear();
  return { startar, skolstart: 34, hostlov: 44, sportlov: 9, pasklov: 15 };
}

/** ISO-vecka (måndag–söndag) för ett datum. */
export function isoVecka(d: Date): { ar: number; vecka: number } {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dag = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - dag);
  const arStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return { ar: t.getUTCFullYear(), vecka: Math.ceil(((t.getTime() - arStart.getTime()) / 86400000 + 1) / 7) };
}

/** Måndagen i en ISO-vecka. */
function mandag(ar: number, vecka: number): Date {
  const jan4 = new Date(Date.UTC(ar, 0, 4));
  const dag = jan4.getUTCDay() || 7;
  const m = new Date(jan4);
  m.setUTCDate(jan4.getUTCDate() - dag + 1 + (vecka - 1) * 7);
  return m;
}

export interface Skolvecka {
  lasarsvecka: number;
  kalendervecka: number;
  ar: number;
  /** Måndagens datum (YYYY-MM-DD). */
  mandag: string;
}

/** De 36 skolveckorna i läsåret, med lovveckor överhoppade. */
export function skolveckor(inst: Lasarsinstallning): Skolvecka[] {
  const ut: Skolvecka[] = [];
  const d = mandag(inst.startar, inst.skolstart);
  for (let i = 0; i < 60 && ut.length < ANTAL_VECKOR; i++) {
    const { ar, vecka } = isoVecka(d);
    const hostTermin = ar === inst.startar;
    const lov = hostTermin
      ? vecka === inst.hostlov || vecka >= 52
      : vecka === 1 || vecka === inst.sportlov || vecka === inst.pasklov;
    if (!lov) {
      ut.push({ lasarsvecka: ut.length + 1, kalendervecka: vecka, ar, mandag: d.toISOString().slice(0, 10) });
    }
    d.setUTCDate(d.getUTCDate() + 7);
  }
  return ut;
}

/** Läsårsveckan för ett datum, eller den närmast kommande om det är lov. */
export function aktuellLasarsvecka(inst: Lasarsinstallning, idag = new Date()): number {
  const veckor = skolveckor(inst);
  const nu = isoVecka(idag);
  const traff = veckor.find((v) => v.ar === nu.ar && v.kalendervecka === nu.vecka);
  if (traff) return traff.lasarsvecka;
  const iso = idag.toISOString().slice(0, 10);
  const nasta = veckor.find((v) => v.mandag > iso);
  return nasta ? nasta.lasarsvecka : ANTAL_VECKOR;
}
