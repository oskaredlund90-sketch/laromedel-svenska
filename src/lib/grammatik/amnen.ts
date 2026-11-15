/**
 * Grammatikens progression – vilka ämnen som tas upp på varje stadium och i
 * vilken ordning. Används av grammatiköversikten, ämnessidorna och
 * återkopplingens övningslänkar, så att de alltid stämmer överens.
 */

import type { AgeGroup } from "@/lib/supabase/types";

export type GrammatikAmne =
  | "ordklasser"
  | "morfem"
  | "satsdelar"
  | "meningsbyggnad"
  | "samband"
  | "skiljetecken"
  | "stavning"
  | "ordbildning"
  | "textbindning"
  | "stilistik";

export const AMNEN: Record<GrammatikAmne, { titel: string; beskrivning: string }> = {
  ordklasser: { titel: "Ordklasser", beskrivning: "Ordens olika sorter – från substantiv och verb till alla tio ordklasser" },
  morfem: { titel: "Ordets byggstenar", beskrivning: "Rot, ändelser, prefix, suffix och sammansatta ord – stöd för stavning och ordförståelse" },
  satsdelar: { titel: "Satsdelar", beskrivning: "Subjekt, predikat, objekt, adverbial – och vilken roll varje del har i meningen" },
  meningsbyggnad: { titel: "Meningsbyggnad", beskrivning: "Huvudsats, bisats, ordföljd, BIFF – och hur du varierar meningarna" },
  samband: { titel: "Orsak, följd och villkor", beskrivning: "Eftersom, därför, om – hur du visar varför något händer och vad det leder till" },
  skiljetecken: { titel: "Skiljetecken", beskrivning: "Punkt, frågetecken, komma, kolon och dialog" },
  stavning: { titel: "Stavning", beskrivning: "Stavningsregler och vanliga fallgropar" },
  ordbildning: { titel: "Ordbildning", beskrivning: "Sammansatta ord, avledningar, förkortningar och lånord" },
  textbindning: { titel: "Textbindning", beskrivning: "Sambandsmarkörer, referensbindning, tematisk bindning och stycken" },
  stilistik: { titel: "Stilistik", beskrivning: "Stilnivå, ton och stilfigurer" },
};

/** Ämnen per stadium, i den ordning de bör tas. */
export const AMNEN_PER_STADIUM: Record<AgeGroup, GrammatikAmne[]> = {
  lagstadiet: ["ordklasser", "morfem", "satsdelar", "meningsbyggnad", "samband", "skiljetecken", "stavning", "textbindning"],
  mellanstadiet: ["ordklasser", "morfem", "satsdelar", "meningsbyggnad", "samband", "skiljetecken", "stavning", "ordbildning", "textbindning"],
  hogstadiet: ["ordklasser", "morfem", "satsdelar", "meningsbyggnad", "samband", "skiljetecken", "stavning", "ordbildning", "textbindning", "stilistik"],
  gymnasiet: ["ordklasser", "morfem", "satsdelar", "meningsbyggnad", "samband", "skiljetecken", "stavning", "ordbildning", "textbindning", "stilistik"],
};

/** Vad eleven ska kunna efter stadiet – kort, för progressionsöversikten. */
export const MAL_PER_STADIUM: Record<AgeGroup, string[]> = {
  lagstadiet: [
    "Känna igen substantiv, verb och adjektiv",
    "Se vem som gör något och vad som händer i en mening",
    "Skriva meningar med stor bokstav och punkt, frågetecken eller utropstecken",
    "Visa varför med eftersom och vad som händer sedan med så och därför",
    "Dela sammansatta ord och se ändelser som -ar, -en och -te",
    "Stava vanliga ord, även med dubbelteckning",
  ],
  mellanstadiet: [
    "Känna igen de vanligaste ordklasserna och böja dem",
    "Hitta subjekt, predikat, objekt och adverbial",
    "Skilja på huvudsats och bisats och sätta verbet på plats två",
    "Uttrycka orsak, följd och villkor med eftersom, därför och om",
    "Använda rot, prefix och suffix som stöd för stavning",
    "Binda ihop texten med sambandsord, syftningar och stycken",
  ],
  hogstadiet: [
    "Översikt över alla tio ordklasser",
    "Satsdelar, även indirekt objekt och predikativ",
    "BIFF-regeln och varierad meningsbyggnad för olika syften",
    "Orsaks-, konsekvens- och villkorssamband – med bisatser, sambandsord och verb",
    "Morfologisk medvetenhet: rotmorfem, böjning, prefix, suffix och sammansatta ord",
    "Textbindning: sambandsmarkörer, referensbindning och tematisk bindning",
  ],
  gymnasiet: [
    "Fullständig satsanalys – även agent och formellt subjekt",
    "Meningsbyggnad för olika syften: slutfokus, utbrytning, nominal- och verbalstil",
    "Exakta orsakssamband – och skillnaden mellan samband och orsak",
    "Morfem, lånmorfem och ordbildning i fackspråk",
    "Röd tråd: tema–rema, sammanfattande referenser och metatext",
    "Skrivregler för citat, källor, siffror och förkortningar",
  ],
};

export function finnsPaStadium(amne: string, stadie: AgeGroup): boolean {
  return (AMNEN_PER_STADIUM[stadie] as string[]).includes(amne);
}

/** Övningshäften (id eller id-prefix i src/lib/haften) som hör till varje ämne. */
export const HAFTEN_PER_AMNE: Record<GrammatikAmne, string[]> = {
  ordklasser: ["grammatik-", "genus-"],
  morfem: ["morfem-", "stavning-5-sarskrivning"],
  satsdelar: ["satsdelar-", "meningsbyggnad-3-subjekt-verb"],
  meningsbyggnad: ["meningsbyggnad-", "grammatik-3-ordfoljd"],
  samband: ["samband-", "meningsbyggnad-1-sambandsord"],
  skiljetecken: ["skiljetecken-"],
  stavning: ["stavning-", "morfem-3-rot-och-stavning"],
  ordbildning: ["morfem-2-prefix-suffix", "stavning-5-sarskrivning"],
  textbindning: ["textbindning-", "meningsbyggnad-1-sambandsord"],
  stilistik: ["meningsbyggnad-4-perspektiv"],
};
