import type { AgeGroup } from "@/lib/supabase/types";
import SIDNUMMER from "./sidnummer.json";

/**
 * Sidnummer för innehållsförteckningen i hela boken. Skapas av
 * scripts/bok-pdf.ts när PDF:erna byggs, så att de stämmer med PDF:en.
 */
export function sidnummerFor(stadie: AgeGroup, larare: boolean): Record<string, number> {
  return (SIDNUMMER as Record<string, Record<string, number>>)[`${stadie}-${larare ? "larare" : "elev"}`] ?? {};
}
