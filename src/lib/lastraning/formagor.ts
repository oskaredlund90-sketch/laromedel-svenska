/**
 * Lästräning utan AI och utan lagring: respons per läsförmåga utifrån poäng,
 * urval av texter till läsförståelsetestet, riktvärden för läshastighet och
 * en läsplan för läskondition, flyt, sammanfattning och resonemang.
 */

import type { AgeGroup } from "@/lib/supabase/types";
import type { QuestionLevel, ReadingText } from "@/lib/data/lasforstaelse";

export type Niva = "trana" | "pagang" | "saker";

export const NIVA_ETIKETT: Record<Niva, string> = {
  trana: "Behöver träna",
  pagang: "På god väg",
  saker: "Säker",
};

export function nivaFor(ratt: number, totalt: number): Niva {
  if (!totalt) return "pagang";
  const andel = ratt / totalt;
  if (andel >= 0.8) return "saker";
  if (andel >= 0.5) return "pagang";
  return "trana";
}

export interface Formaga {
  id: QuestionLevel;
  namn: string;
  /** Vad förmågan innebär, i elevvänligt språk. */
  beskrivning: string;
  respons: Record<Niva, string>;
  /** Så tränar du – konkreta strategier. */
  tips: string[];
}

export const FORMAGOR: Formaga[] = [
  {
    id: "hitta",
    namn: "Hitta i texten",
    beskrivning: "Att hitta information som står direkt i texten.",
    respons: {
      saker: "Du hittar snabbt det som står i texten. Fortsätt så – och utmana dig med längre texter.",
      pagang: "Du hittar ofta rätt, men ibland missar du detaljer. Gå tillbaka till texten innan du svarar.",
      trana: "Du missar en del som står i texten. Det är lätt att svara på minnet – men svaret finns oftast att hitta igen.",
    },
    tips: [
      "Läs frågan först och leta efter ett nyckelord. Sök sedan efter ordet i texten.",
      "Svara inte på minnet. Hitta meningen där svaret står och läs den en gång till.",
      "Läs rubrik och första mening i varje stycke, så vet du var saker står.",
    ],
  },
  {
    id: "tolka",
    namn: "Tolka och dra slutsatser",
    beskrivning: "Att förstå det som inte står rakt ut – läsa mellan raderna.",
    respons: {
      saker: "Du läser mellan raderna och förstår varför personer gör som de gör. Starkt!",
      pagang: "Du drar ofta rätt slutsatser. Träna på att använda ledtrådar i texten för att stödja det du tror.",
      trana: "Det som inte står rakt ut är svårare för dig just nu. Leta efter ledtrådar: vad gör, säger och känner personerna?",
    },
    tips: [
      "Fråga dig: Varför gör personen så? Vad känner hen? Vilka ord i texten visar det?",
      "Stanna efter varje stycke och gissa vad som ska hända. Stämde det?",
      "Säg det med egna ord: \"Jag tror att … eftersom det står att …\"",
    ],
  },
  {
    id: "reflektera",
    namn: "Reflektera och värdera",
    beskrivning: "Att fundera över texten som helhet, budskapet och hur den är skriven.",
    respons: {
      saker: "Du ser helheten och förstår vad texten vill säga. Du kan resonera om texten på ett moget sätt.",
      pagang: "Du förstår ofta budskapet. Träna på att koppla det du läser till dig själv och omvärlden.",
      trana: "Att se helheten och budskapet är svårt för dig just nu. Fråga dig efter läsningen: vad ville författaren säga?",
    },
    tips: [
      "Sammanfatta texten i en mening: \"Texten handlar om … och vill visa att …\"",
      "Koppla texten till dig själv, till andra texter och till världen.",
      "Fundera på varför författaren valde just det slutet, den titeln eller de orden.",
    ],
  },
];

/**
 * Väljer texter till testet så att varje förmåga får minst `minPerFormaga`
 * frågor. `slump` gör urvalet testbart.
 */
export function valjTesttexter(texter: ReadingText[], minPerFormaga = 3, slump: () => number = Math.random): ReadingText[] {
  const blandade = [...texter].sort(() => slump() - 0.5);
  const valda: ReadingText[] = [];
  const antal: Record<QuestionLevel, number> = { hitta: 0, tolka: 0, reflektera: 0 };
  const klart = () => valda.length >= 2 && Object.values(antal).every((n) => n >= minPerFormaga);

  for (const t of blandade) {
    if (klart() || valda.length >= 4) break;
    valda.push(t);
    for (const q of t.questions) antal[q.level]++;
  }
  return valda;
}

/** Ungefärliga riktvärden för tyst läsning (ord per minut) per stadie. */
export const HASTIGHET: Record<AgeGroup, { min: number; max: number; text: string }> = {
  lagstadiet: { min: 60, max: 110, text: "I lågstadiet läser många mellan 60 och 110 ord per minut." },
  mellanstadiet: { min: 110, max: 160, text: "I mellanstadiet läser många mellan 110 och 160 ord per minut." },
  hogstadiet: { min: 150, max: 220, text: "I högstadiet läser många mellan 150 och 220 ord per minut." },
  gymnasiet: { min: 180, max: 260, text: "På gymnasiet läser många mellan 180 och 260 ord per minut." },
};

export function raknaOrd(text: string): number {
  return (text.match(/[\p{L}\p{N}]+(?:[-'’][\p{L}\p{N}]+)*/gu) ?? []).length;
}

export function ordPerMinut(ord: number, millisekunder: number): number {
  if (millisekunder <= 0) return 0;
  return Math.round(ord / (millisekunder / 60000));
}

export interface Planvecka {
  vecka: number;
  fokus: string;
  syfte: string;
  aktiviteter: string[];
}

/** Minuter läsning per dag, vecka 1 → vecka 6. */
export const MINUTER: Record<AgeGroup, number[]> = {
  lagstadiet: [10, 10, 12, 12, 15, 15],
  mellanstadiet: [15, 15, 20, 20, 25, 25],
  hogstadiet: [20, 20, 25, 30, 30, 35],
  gymnasiet: [25, 25, 30, 35, 40, 45],
};

export function lasplan(stadie: AgeGroup): Planvecka[] {
  const ung = stadie === "lagstadiet";
  return [
    {
      vecka: 1,
      fokus: "Läsvana",
      syfte: "Hitta en bok du gillar och gör läsningen till en vana.",
      aktiviteter: [
        "Välj en bok som känns lagom svår: högst 5 okända ord på en sida.",
        "Läs varje dag på samma tid, till exempel innan du somnar.",
        "Mät din läshastighet en gång i veckan med verktyget här ovanför – spara siffran själv.",
      ],
    },
    {
      vecka: 2,
      fokus: "Läsflyt",
      syfte: "Läsa jämnt, utan att hacka, med rätt betoning.",
      aktiviteter: [
        "Upprepad läsning: läs samma stycke högt tre gånger. Märker du att det går lättare?",
        ung ? "Ekoläsning: en vuxen läser en mening, du läser samma mening efter." : "Läs en replik eller dikt högt med inlevelse – som en skådespelare.",
        "Pausa vid punkt och komma. Låt rösten gå upp vid frågetecken.",
      ],
    },
    {
      vecka: 3,
      fokus: "Läshastighet",
      syfte: "Läsa lite snabbare – utan att tappa förståelsen.",
      aktiviteter: [
        ung ? "Följ raden med fingret så att blicken inte hoppar." : "Läs med en penna eller ett kort under raden för att hålla tempot.",
        "Läs ett stycke på tid, svara på frågorna, läs igen och jämför.",
        "Läs inte varje ord högt i huvudet – försök ta in flera ord i taget.",
      ],
    },
    {
      vecka: 4,
      fokus: "Sammanfatta",
      syfte: "Kunna berätta det viktigaste med egna ord.",
      aktiviteter: [
        ung
          ? "Efter läsningen: berätta för någon vem, var, vad som hände och hur det slutade."
          : "Efter varje läspass: skriv 3–5 meningar om det viktigaste, med egna ord.",
        "Berättande text: Vem? Var? Vilket problem? Hur löstes det?",
        "Faktatext: skriv huvudtanken i en mening och tre viktiga detaljer.",
      ],
    },
    {
      vecka: 5,
      fokus: "Resonera",
      syfte: "Fundera över texten och koppla den till dig själv och världen.",
      aktiviteter: [
        "Använd meningsstartare: \"Jag tror att … eftersom …\", \"Det påminner mig om …\".",
        "Välj en person i boken. Hade du gjort samma val? Varför/varför inte?",
        ung ? "Rita det viktigaste som hände och berätta varför det var viktigt." : "Vad vill författaren säga? Håller du med? Ge ett skäl.",
      ],
    },
    {
      vecka: 6,
      fokus: "Allt tillsammans",
      syfte: "Använd allt du tränat och se hur långt du har kommit.",
      aktiviteter: [
        "Mät din läshastighet igen och jämför med vecka 1.",
        "Gör läsförståelsetestet här på sidan. Vilken förmåga har blivit starkare?",
        "Tipsa en kompis om din bok: sammanfatta utan att avslöja slutet, och säg vad du tyckte.",
      ],
    },
  ];
}
