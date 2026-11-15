import type { AgeGroup } from "@/lib/supabase/types";
import { AMNEN, type GrammatikAmne } from "@/lib/grammatik/amnen";
import type { DelKalla, HafteKalla } from "../typer";

/**
 * Kapitelprov: ett prov på 20 poäng per kapitel i grammatikboken och stadium.
 * Uppgifterna är nya – de finns inte bland kapitlets övningar eller häften –
 * så att provet visar vad eleven faktiskt har lärt sig.
 */

const STEG: Record<AgeGroup, 1 | 2 | 3 | 4> = { lagstadiet: 1, mellanstadiet: 2, hogstadiet: 3, gymnasiet: 4 };
const STADIUM: Record<AgeGroup, string> = { lagstadiet: "Lågstadiet", mellanstadiet: "Mellanstadiet", hogstadiet: "Högstadiet", gymnasiet: "Gymnasiet" };

const FELTYPER: Record<GrammatikAmne, string[]> = {
  ordklasser: ["grammatik.bojning"],
  morfem: ["stavning.sarskrivning", "stavning.dubbelteckning"],
  satsdelar: ["grammatik.subjekt-verb"],
  meningsbyggnad: ["grammatik.ordfoljd", "struktur.meningsvariation"],
  samband: ["struktur.textbindning"],
  skiljetecken: ["skiljetecken.punkt", "skiljetecken.komma"],
  stavning: ["stavning.dubbelteckning", "stavning.ljud", "stavning.stor-bokstav"],
  ordbildning: ["stavning.sarskrivning"],
  textbindning: ["struktur.textbindning"],
  stilistik: ["ordval.stilniva"],
};

export const kapitelprovId = (stadie: AgeGroup, amne: GrammatikAmne) => `kapitelprov-${stadie}-${amne}`;

export function kapitelprov(stadie: AgeGroup, amne: GrammatikAmne, delar: { i: string; t: DelKalla["typ"]; r: string }[]): HafteKalla {
  return {
    id: kapitelprovId(stadie, amne),
    titel: `Kapitelprov: ${AMNEN[amne].titel}`,
    underrubrik: `${STADIUM[stadie]} · 20 poäng`,
    omrade: "Kapitelprov",
    steg: STEG[stadie],
    feltyper: FELTYPER[amne],
    regel: ["Provet har 20 uppgifter. Varje rätt svar ger 1 poäng.", "Läs instruktionen för varje del innan du börjar.", "Läs igenom dina svar när du är klar."],
    delar: delar.map((d, n) => ({ rubrik: `Del ${String.fromCharCode(65 + n)}`, instruktion: d.i, typ: d.t, rader: d.r })),
  };
}
