import type { AgeGroup } from "@/lib/supabase/types";
import SIDNUMMER from "./sidnummer.json";

/** Färdiga PDF:er av grammatikboken ligger i public/pdf (skapas med npm run bok:pdf). */
export function pdfSokvag(stadie: AgeGroup, larare: boolean) {
  return `/pdf/grammatik-${stadie}-${larare ? "larare" : "elev"}.pdf`;
}

/** PDF-skriptet skriver sidnummer för varje PDF det skapar – finns de, finns PDF:en. */
export function pdfFinns(sokvag: string) {
  const m = sokvag.match(/grammatik-(.+)-(elev|larare)\.pdf$/);
  return !!m && `${m[1]}-${m[2]}` in (SIDNUMMER as Record<string, unknown>);
}
