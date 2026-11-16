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

/**
 * Ämnen per stadium, i den ordning de bör tas: från ordet, via meningen, till
 * texten. Ordets byggstenar, ordbildning och stavning står ihop eftersom
 * stavningen bygger på morfemen.
 */
export const AMNEN_PER_STADIUM: Record<AgeGroup, GrammatikAmne[]> = {
  lagstadiet: ["ordklasser", "morfem", "stavning", "satsdelar", "meningsbyggnad", "samband", "skiljetecken", "textbindning"],
  mellanstadiet: ["ordklasser", "morfem", "ordbildning", "stavning", "satsdelar", "meningsbyggnad", "samband", "skiljetecken", "textbindning"],
  hogstadiet: ["ordklasser", "morfem", "ordbildning", "stavning", "satsdelar", "meningsbyggnad", "samband", "skiljetecken", "textbindning", "stilistik"],
  gymnasiet: ["ordklasser", "morfem", "ordbildning", "stavning", "satsdelar", "meningsbyggnad", "samband", "skiljetecken", "textbindning", "stilistik"],
};

/** Bokens tre delar. Kapitlen hamnar i den del där ämnet hör hemma. */
export const DELAR: { nr: number; titel: string; beskrivning: string; amnen: GrammatikAmne[] }[] = [
  { nr: 1, titel: "Ordet", beskrivning: "Ordklasser, ordens byggstenar och stavning", amnen: ["ordklasser", "morfem", "ordbildning", "stavning"] },
  { nr: 2, titel: "Meningen", beskrivning: "Satsdelar, meningsbyggnad, samband och skiljetecken", amnen: ["satsdelar", "meningsbyggnad", "samband", "skiljetecken"] },
  { nr: 3, titel: "Texten", beskrivning: "Textbindning, stycken och stil", amnen: ["textbindning", "stilistik"] },
];

/** Delarna med stadiets kapitel (och kapitelnummer i boken). */
export function delarForStadium(stadie: AgeGroup) {
  const alla = AMNEN_PER_STADIUM[stadie];
  return DELAR.map((d) => ({
    ...d,
    kapitel: alla.filter((a) => d.amnen.includes(a)).map((a) => ({ amne: a, nr: alla.indexOf(a) + 1 })),
  })).filter((d) => d.kapitel.length > 0);
}

export function delForAmne(amne: GrammatikAmne) {
  return DELAR.find((d) => d.amnen.includes(amne))!;
}

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

/**
 * Progressionen: vad eleven lär sig om varje ämne på varje stadium. Varje
 * stadium bygger vidare på det förra. Saknas stadiet tas ämnet inte upp där.
 */
export const PROGRESSION: Record<GrammatikAmne, Partial<Record<AgeGroup, string>>> = {
  ordklasser: {
    lagstadiet: "Substantiv, verb och adjektiv. Ental och flertal, nutid och dåtid.",
    mellanstadiet: "De vanligaste ordklasserna – även pronomen och prepositioner – och hur de böjs.",
    hogstadiet: "Alla tio ordklasser, även konjunktioner, subjunktioner och interjektioner.",
    gymnasiet: "Ordklasser i analys: particip, verbformer, och ordklassernas funktion i texten.",
  },
  morfem: {
    lagstadiet: "Sammansatta ord och ändelser som -ar, -en och -te.",
    mellanstadiet: "Rot, prefix och suffix. Stava med hjälp av roten (glad – glatt).",
    hogstadiet: "Rotmorfem, böjnings- och avledningsmorfem, sammansättning – morfologisk medvetenhet som stöd för stavning.",
    gymnasiet: "Fria och bundna morfem, allomorfer och grekiska och latinska byggstenar i fackspråk.",
  },
  satsdelar: {
    lagstadiet: "Vem gör något (subjekt) och vad som händer (predikat).",
    mellanstadiet: "Subjekt, predikat, objekt och adverbial.",
    hogstadiet: "Även indirekt objekt, predikativ och satsadverbial.",
    gymnasiet: "Fullständig satsanalys: agent, formellt och egentligt subjekt, bisatser som satsdelar.",
  },
  meningsbyggnad: {
    lagstadiet: "Hela meningar med stor bokstav och skiljetecken. Påstående, fråga och utrop.",
    mellanstadiet: "Huvudsats och bisats, verbet på plats två, variera meningsbörjan.",
    hogstadiet: "BIFF, inversion, satsradning och meningsbyggnad för olika syften.",
    gymnasiet: "Slutfokus, utbrytning, passiv, nominal- och verbalstil.",
  },
  samband: {
    lagstadiet: "Eftersom (varför), så och därför (vad som händer sedan), om (villkor).",
    mellanstadiet: "Orsak, följd och villkor – och om orsaken ska stå först eller sist.",
    hogstadiet: "Fyra sätt att uttrycka samband: bisats, sambandsord, på grund av, verb. Medgivande.",
    gymnasiet: "Exakta orsakssamband, samband vs orsak, formella markörer och kontrafaktiska villkor.",
  },
  skiljetecken: {
    lagstadiet: "Punkt, frågetecken och utropstecken.",
    mellanstadiet: "Komma vid uppräkning och dialog med talstreck eller citattecken.",
    hogstadiet: "Komma, kolon, semikolon och tankstreck.",
    gymnasiet: "Skrivregler för citat, siffror, förkortningar och källhänvisningar.",
  },
  stavning: {
    lagstadiet: "Dubbelteckning, ljud som stavas olika och stor bokstav.",
    mellanstadiet: "Sj- och tj-ljud, särskrivning och vanliga svåra ord.",
    hogstadiet: "Dubbelteckning av m och n, versaler och gemener, stavning med hjälp av morfem.",
    gymnasiet: "Språkriktighet: lånord, försvenskningar och skrivregler.",
  },
  ordbildning: {
    mellanstadiet: "Sammansättning, foge-s och avledning.",
    hogstadiet: "Avledning, förkortningar och lånord.",
    gymnasiet: "Ordbildning i fackspråk, nyord och lånordens väg in i svenskan.",
  },
  textbindning: {
    lagstadiet: "Först, sedan, till slut. Han, hon och den i stället för upprepning. Ny rad när något nytt händer.",
    mellanstadiet: "Sambandsord, ord som syftar tillbaka och styckeindelning.",
    hogstadiet: "Sambandsmarkörer, referensbindning, tematisk bindning och kärnmeningar.",
    gymnasiet: "Tema och rema, sammanfattande referenser, metatext och röd tråd.",
  },
  stilistik: {
    hogstadiet: "Stilnivå, ton och vanliga stilfigurer.",
    gymnasiet: "Stilistiska val i olika genrer och retoriska stilfigurer.",
  },
};

/** Alla ämnen i bokens ordning (oavsett stadium). */
export const ALLA_AMNEN: GrammatikAmne[] = ["ordklasser", "morfem", "ordbildning", "stavning", "satsdelar", "meningsbyggnad", "samband", "skiljetecken", "textbindning", "stilistik"];
