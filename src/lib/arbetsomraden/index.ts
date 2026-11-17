import type { AgeGroup } from "@/lib/supabase/types";
import type { Arbetsomrade } from "./typer";
import { SPRAKHISTORIA } from "./data/sprakhistoria";
import { DIALEKTER } from "./data/dialekter";
import { NORDEN } from "./data/norden";
import { KALLKRITIK_HOG } from "./data/kallkritik";
import { KALLKRITIK_MEL, KALLOR_LAG, ORDENS_VARDE_MEL } from "./data/mellan-lag";

export const ARBETSOMRADEN: Arbetsomrade[] = [KALLOR_LAG, KALLKRITIK_MEL, ORDENS_VARDE_MEL, DIALEKTER, KALLKRITIK_HOG, SPRAKHISTORIA, NORDEN];

export function arbetsomradenFor(stadie: AgeGroup): Arbetsomrade[] {
  return ARBETSOMRADEN.filter((a) => a.stadie === stadie).sort((a, b) => Number(a.arskurs) - Number(b.arskurs));
}

export function hamtaArbetsomrade(stadie: AgeGroup, id: string): Arbetsomrade | undefined {
  return ARBETSOMRADEN.find((a) => a.stadie === stadie && a.id === id);
}

/** Förslag på årskurs i den tioåriga grundskolan (remissen): åk 3–4, 5–7, 8–10. */
export const STADIESPANN: Record<AgeGroup, string> = {
  lagstadiet: "åk 1–4",
  mellanstadiet: "åk 5–7",
  hogstadiet: "åk 8–10",
  gymnasiet: "gymnasiet",
};
