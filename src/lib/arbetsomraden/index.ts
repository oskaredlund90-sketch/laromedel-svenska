import type { AgeGroup } from "@/lib/supabase/types";
import type { Arbetsomrade } from "./typer";
import { SPRAKHISTORIA } from "./data/sprakhistoria";
import { DIALEKTER } from "./data/dialekter";
import { NORDEN } from "./data/norden";
import { KALLKRITIK_HOG } from "./data/kallkritik";
import { KALLKRITIK_MEL, KALLOR_LAG, ORDENS_VARDE_MEL } from "./data/mellan-lag";
import { RETORIK_GY, SPRAKSOCIOLOGI_GY, VETENSKAPLIGT_GY } from "./data/gymnasiet";
import { INSTRUKTIONER, LJUD_BOKSTAVER, SKRIVA_FOR_HAND } from "./data/lag-nya";
import { BERATTELSER_MEL, DIGITALT_MEL, SKRIVA_LARA_MEL } from "./data/mel-nya";
import { DIGITALT_HOG, SKONLITTERATUR_HOG, SKRIVA_LARA_HOG } from "./data/hog-nya";

export const ARBETSOMRADEN: Arbetsomrade[] = [
  LJUD_BOKSTAVER,
  SKRIVA_FOR_HAND,
  INSTRUKTIONER,
  SKRIVA_LARA_MEL,
  BERATTELSER_MEL,
  DIGITALT_MEL,
  SKRIVA_LARA_HOG,
  DIGITALT_HOG,
  SKONLITTERATUR_HOG,
  KALLOR_LAG, KALLKRITIK_MEL, ORDENS_VARDE_MEL, DIALEKTER, KALLKRITIK_HOG, SPRAKHISTORIA, NORDEN, RETORIK_GY, SPRAKSOCIOLOGI_GY, VETENSKAPLIGT_GY];

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

/** Vad arbetsområdena på stadiet utgår från. */
export function underlag(stadie: AgeGroup): string {
  return stadie === "gymnasiet"
    ? "ämnesplanen i svenska för gymnasieskolan"
    : "förslaget till ny kursplan i svenska (remiss november 2026)";
}

export function arEtikett(stadie: AgeGroup, ak: string): string {
  return stadie === "gymnasiet" ? `år ${ak}` : `årskurs ${ak}`;
}
