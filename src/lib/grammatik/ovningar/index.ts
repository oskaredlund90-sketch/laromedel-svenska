import type { GrammarExercise } from "@/lib/data/grammatik-ovningar";
import { SATSDELAR } from "./satsdelar";
import { SAMBAND } from "./samband";
import { MORFEM } from "./morfem";
import { TILLAGG } from "./tillagg";

/** Övningar skrivna med byggarna i ./bygg – läggs till de äldre i grammatik-ovningar.ts. */
export const NYA_OVNINGAR: GrammarExercise[] = [...SATSDELAR, ...SAMBAND, ...MORFEM, ...TILLAGG];
