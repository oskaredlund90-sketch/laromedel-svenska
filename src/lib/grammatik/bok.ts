import type { AgeGroup } from "@/lib/supabase/types";
import { HAFTEN } from "@/lib/haften";
import type { Hafte } from "@/lib/haften/typer";
import { HAFTEN_PER_AMNE, type GrammatikAmne } from "./amnen";

/** Vilka svårighetssteg (1–4) som passar varje stadium. */
export const STEG_PER_STADIUM: Record<AgeGroup, number[]> = {
  lagstadiet: [1],
  mellanstadiet: [1, 2],
  hogstadiet: [2, 3],
  gymnasiet: [2, 3, 4],
};

/** Övningshäften som hör till ett kapitel, för ett stadium (lättast först). */
export function haftenForKapitel(amne: GrammatikAmne, stadie: AgeGroup): Hafte[] {
  const prefix = HAFTEN_PER_AMNE[amne] ?? [];
  return HAFTEN.filter(
    (h) => h.omrade !== "Grammatikprov" && prefix.some((p) => h.id === p || h.id.startsWith(p)) && STEG_PER_STADIUM[stadie].includes(h.steg),
  ).sort((a, b) => a.steg - b.steg);
}
