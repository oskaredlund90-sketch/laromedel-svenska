/**
 * Grammatikens progression – vilka ämnen som tas upp på varje stadium och i
 * vilken ordning. Används av grammatiköversikten, ämnessidorna och
 * återkopplingens övningslänkar, så att de alltid stämmer överens.
 */

import type { AgeGroup } from "@/lib/supabase/types";

export type GrammatikAmne =
  | "ordklasser"
  | "meningsbyggnad"
  | "skiljetecken"
  | "stavning"
  | "ordbildning"
  | "textbindning"
  | "stilistik";

export const AMNEN: Record<GrammatikAmne, { titel: string; beskrivning: string }> = {
  ordklasser: { titel: "Ordklasser", beskrivning: "Ordens olika sorter – från substantiv och verb till alla tio ordklasser" },
  meningsbyggnad: { titel: "Meningsbyggnad", beskrivning: "Hur en mening är byggd: subjekt, verb, huvudsats, bisats och BIFF" },
  skiljetecken: { titel: "Skiljetecken", beskrivning: "Punkt, frågetecken, komma, kolon och dialog" },
  stavning: { titel: "Stavning", beskrivning: "Stavningsregler och vanliga fallgropar" },
  ordbildning: { titel: "Ordbildning", beskrivning: "Sammansatta ord, avledningar och lånord" },
  textbindning: { titel: "Textbindning", beskrivning: "Sambandsord som håller ihop texten" },
  stilistik: { titel: "Stilistik", beskrivning: "Stilnivå, ton och stilfigurer" },
};

/** Ämnen per stadium, i den ordning de bör tas. */
export const AMNEN_PER_STADIUM: Record<AgeGroup, GrammatikAmne[]> = {
  lagstadiet: ["ordklasser", "meningsbyggnad", "skiljetecken", "stavning"],
  mellanstadiet: ["ordklasser", "meningsbyggnad", "skiljetecken", "stavning", "ordbildning", "textbindning"],
  hogstadiet: ["ordklasser", "meningsbyggnad", "skiljetecken", "stavning", "ordbildning", "textbindning", "stilistik"],
  gymnasiet: ["ordklasser", "meningsbyggnad", "skiljetecken", "stavning", "ordbildning", "textbindning", "stilistik"],
};

/** Vad eleven ska kunna efter stadiet – kort, för progressionsöversikten. */
export const MAL_PER_STADIUM: Record<AgeGroup, string[]> = {
  lagstadiet: [
    "Känna igen substantiv, verb och adjektiv",
    "Skriva meningar med stor bokstav och punkt, frågetecken eller utropstecken",
    "Böja substantiv i ental och flertal och verb i nutid och dåtid",
    "Stava vanliga ord, även med dubbelteckning",
  ],
  mellanstadiet: [
    "Känna igen de vanligaste ordklasserna och böja dem",
    "Hitta subjekt och predikat och skilja på huvudsats och bisats",
    "Använda komma vid uppräkning och skriva dialog",
    "Skriva ihop sammansatta ord och använda sambandsord",
  ],
  hogstadiet: [
    "Alla tio ordklasser och satsdelarna",
    "BIFF-regeln och varierad meningsbyggnad",
    "Skiljetecken: komma, kolon, semikolon och tankstreck",
    "Anpassa stilnivån och binda ihop längre texter",
  ],
  gymnasiet: [
    "Fullständig satsanalys och språkriktighet",
    "Skrivregler för citat, källor, siffror och förkortningar",
    "Ordbildning, lånord och stilistiska val",
    "Skriva vetenskapligt och argumenterande med säker grammatik",
  ],
};

export function finnsPaStadium(amne: string, stadie: AgeGroup): boolean {
  return (AMNEN_PER_STADIUM[stadie] as string[]).includes(amne);
}
