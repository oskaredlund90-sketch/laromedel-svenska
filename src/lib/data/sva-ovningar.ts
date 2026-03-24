import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types (discriminated union)
// ---------------------------------------------------------------------------

export type SvaCategory =
  | "prepositioner"
  | "genus"
  | "ordfoljd"
  | "vanliga-fel"
  | "partikelverb"
  | "utokad-ordfoljd";

export interface SvaExerciseBase {
  id: string;
  category: SvaCategory;
  ageGroup: AgeGroup;
  instruction: string;
}

export interface SvaMultipleChoice extends SvaExerciseBase {
  type: "multiple-choice";
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface SvaFillInBlank extends SvaExerciseBase {
  type: "fill-in-blank";
  sentence: string; // contains "____" placeholder
  options: string[];
  correct: string;
  explanation: string;
}

export type SvaExercise = SvaMultipleChoice | SvaFillInBlank;

// ---------------------------------------------------------------------------
// Category labels
// ---------------------------------------------------------------------------

export const SVA_CATEGORY_LABELS: Record<SvaCategory, string> = {
  prepositioner: "Prepositioner",
  genus: "En eller ett",
  ordfoljd: "Ordföljd",
  "vanliga-fel": "Vanliga fel",
  partikelverb: "Partikelverb",
  "utokad-ordfoljd": "Utökad ordföljd",
} as const;

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

export function getSvaExercises(
  category: SvaCategory,
  ageGroup: AgeGroup,
): SvaExercise[] {
  const direct = SVA_EXERCISES.filter(
    (e) => e.category === category && e.ageGroup === ageGroup,
  );

  if (direct.length > 0) return direct;

  // Fallback chain — higher levels fall back to lower ones
  const fallbacks: Record<AgeGroup, AgeGroup[]> = {
    lagstadiet: [],
    mellanstadiet: ["lagstadiet"],
    hogstadiet: ["mellanstadiet", "lagstadiet"],
    gymnasiet: ["hogstadiet", "mellanstadiet", "lagstadiet"],
  };

  for (const fb of fallbacks[ageGroup]) {
    const fallback = SVA_EXERCISES.filter(
      (e) => e.category === category && e.ageGroup === fb,
    );
    if (fallback.length > 0) return fallback;
  }

  return [];
}

// ---------------------------------------------------------------------------
// Exercises — Prepositioner
// ---------------------------------------------------------------------------

const PREPOSITIONER: SvaExercise[] = [
  // --- lagstadiet ---
  {
    id: "prep-lag-1",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "lagstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Jag bor ____ Sverige.",
    options: ["i", "på", "till"],
    correct: "i",
    explanation:
      "Man bor I ett land eller en stad. 'I' används för platser där man befinner sig, till exempel: i Sverige, i Stockholm, i huset.",
  },
  {
    id: "prep-lag-2",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "lagstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Vi går ____ skolan.",
    options: ["till", "på", "i"],
    correct: "till",
    explanation:
      "När man rör sig mot en plats använder man 'till'. Man går TILL skolan, men man är I skolan när man är där.",
  },
  // --- mellanstadiet ---
  {
    id: "prep-mel-1",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt preposition.",
    sentence: "Boken ligger ____ bordet.",
    options: ["på", "i", "vid"],
    correct: "på",
    explanation:
      "När något ligger ovanpå en yta använder man 'på'. Boken ligger PÅ bordet, koppen står PÅ hyllan.",
  },
  {
    id: "prep-mel-2",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening använder rätt preposition?",
    prompt: "Vilken mening är korrekt?",
    options: [
      "Jag läste om det i tidningen.",
      "Jag läste om det på tidningen.",
      "Jag läste om det till tidningen.",
    ],
    correct: 0,
    explanation:
      "Man läser något I tidningen. 'I' används för tryckt text: i boken, i tidningen, i artikeln.",
  },
  // --- hogstadiet ---
  {
    id: "prep-hog-1",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt preposition.",
    sentence: "Hon är intresserad ____ musik.",
    options: ["av", "för", "om"],
    correct: "av",
    explanation:
      "På svenska är man intresserad AV något. Det är en fast kombination: intresserad + av. Jämför: glad för, bra på, rädd för.",
  },
  {
    id: "prep-hog-2",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Vilken preposition passar bäst?",
    prompt: "Vi pratade ____ problemet i två timmar.",
    options: ["om", "för", "med"],
    correct: 0,
    explanation:
      "Man pratar OM ett ämne eller problem. 'Om' används när man diskuterar något: prata om, berätta om, läsa om.",
  },
  // --- gymnasiet ---
  {
    id: "prep-gym-1",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt preposition i den akademiska meningen.",
    prompt: "Rapporten baseras ____ data från tre studier.",
    options: ["på", "av", "i"],
    correct: 0,
    explanation:
      "Något baseras PÅ något. I akademiskt språk är fasta prepositionsuttryck vanliga: baseras på, bestå av, bero på, leda till.",
  },
];

// ---------------------------------------------------------------------------
// Exercises — Genus (en/ett)
// ---------------------------------------------------------------------------

const GENUS: SvaExercise[] = [
  // --- lagstadiet ---
  {
    id: "gen-lag-1",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "lagstadiet",
    instruction: "Fyll i 'en' eller 'ett'.",
    sentence: "Jag ser ____ hund.",
    options: ["en", "ett"],
    correct: "en",
    explanation:
      "Hund är ett en-ord. De flesta djur är en-ord: en katt, en hund, en häst. Man måste lära sig om varje ord är en-ord eller ett-ord.",
  },
  {
    id: "gen-lag-2",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "lagstadiet",
    instruction: "Fyll i 'en' eller 'ett'.",
    sentence: "____ äpple ligger på bordet.",
    options: ["Ett", "En"],
    correct: "Ett",
    explanation:
      "Äpple är ett ett-ord. Tips: många ord som slutar på -e är ett-ord, som ett äpple, ett bord. Men inte alla!",
  },
  // --- mellanstadiet ---
  {
    id: "gen-mel-1",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "mellanstadiet",
    instruction: "Välj 'en' eller 'ett'.",
    sentence: "Det är ____ barn på gården.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Barn är ett ett-ord. Vanliga ett-ord att komma ihåg: ett barn, ett hus, ett bord, ett äpple, ett öga.",
  },
  {
    id: "gen-mel-2",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "mellanstadiet",
    instruction: "Välj 'en' eller 'ett'.",
    sentence: "Vi köpte ____ nytt bord.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Bord är ett ett-ord, därför heter det 'ett nytt bord'. Adjektivet får -t när substantivet är ett-ord: en fin stol, ETT finT bord.",
  },
  {
    id: "sva-gen-mel-1",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i 'en' eller 'ett'.",
    sentence: "Vi bor i ____ stort hus.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Hus är ett ett-ord. Adjektivet får -t i ett-ord: ett storT hus. Jämför: en stor bil.",
  },
  {
    id: "sva-gen-mel-2",
    type: "multiple-choice",
    category: "genus",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt alternativ.",
    prompt: "Vilken regel stämmer om genus i svenska?",
    options: [
      "De flesta svenska ord är en-ord.",
      "De flesta svenska ord är ett-ord.",
      "Det finns lika många en-ord som ett-ord.",
    ],
    correct: 0,
    explanation:
      "Ungefär 75 % av alla svenska substantiv är en-ord. Det betyder att om du gissar 'en' har du oftast rätt — men du måste ändå lära dig de vanligaste ett-orden.",
  },
  {
    id: "sva-gen-mel-3",
    type: "multiple-choice",
    category: "genus",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt alternativ.",
    prompt: "Vilket av dessa ord är ett ett-ord?",
    options: ["brev", "stol", "lampa"],
    correct: 0,
    explanation:
      "Brev är ett ett-ord: ett brev. Stol är en-ord (en stol) och lampa är en-ord (en lampa).",
  },
  {
    id: "sva-gen-mel-4",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i 'en' eller 'ett'.",
    sentence: "Kan du ge mig ____ glas vatten?",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Glas är ett ett-ord: ett glas. Andra vanliga ett-ord i köket: ett glas, ett fat, ett lock.",
  },
  {
    id: "sva-gen-mel-5",
    type: "multiple-choice",
    category: "genus",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt alternativ.",
    prompt: "Ord som slutar på -tion (station, nation, lektion) är oftast …",
    options: ["en-ord", "ett-ord", "det varierar"],
    correct: 0,
    explanation:
      "Ord som slutar på -tion är nästan alltid en-ord: en station, en nation, en lektion, en information. Det är ett bra mönster att komma ihåg!",
  },
  {
    id: "sva-gen-mel-6",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i 'en' eller 'ett'.",
    sentence: "Hon fick ____ ny telefon i present.",
    options: ["en", "ett"],
    correct: "en",
    explanation:
      "Telefon är ett en-ord: en telefon. Adjektivet böjs utan -t i en-ord: en ny telefon. Jämför: ett nyTT hus.",
  },
  // --- hogstadiet ---
  {
    id: "gen-hog-1",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt artikel.",
    sentence: "Hon har ____ öga som är blått.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Öga är ett ett-ord, trots att det är vanligt att göra fel. Notera: ett öga, men ögon (plural). Adjektivet böjs också: 'ett blått öga'.",
  },
  {
    id: "gen-hog-2",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt artikel.",
    sentence: "Vi fick ____ nytt förslag av läraren.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Förslag är ett ett-ord. Många substantiv som slutar på -slag är ett-ord: ett förslag, ett tillslag, ett utslag.",
  },
  {
    id: "sva-gen-hog-1",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt artikel.",
    sentence: "Det var ____ intressant samtal om politik.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Samtal är ett ett-ord: ett samtal. Ord som slutar på -tal är ofta ett-ord: ett samtal, ett antal, ett förhållningssätt — men en berättelse.",
  },
  {
    id: "sva-gen-hog-2",
    type: "multiple-choice",
    category: "genus",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt alternativ.",
    prompt: "Lånord från engelskan (t.ex. mejl, jobb, test) är oftast …",
    options: [
      "en-ord — de flesta lånord får genus 'en'",
      "ett-ord — alla lånord blir automatiskt 'ett'",
      "det beror helt på ordets längd",
    ],
    correct: 0,
    explanation:
      "De flesta lånord från engelska blir en-ord i svenska: en mejl, en blogg, en podcast, en trend. Men det finns undantag, till exempel ett jobb, ett test.",
  },
  {
    id: "sva-gen-hog-3",
    type: "multiple-choice",
    category: "genus",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt alternativ.",
    prompt: "Vilket av dessa påståenden stämmer?",
    options: [
      "Ord som slutar på -ande/-ende är oftast ett-ord (ett meddelande, ett påstående).",
      "Ord som slutar på -ande/-ende är oftast en-ord.",
      "Ord som slutar på -ande/-ende kan aldrig vara ett-ord.",
    ],
    correct: 0,
    explanation:
      "Substantiv som slutar på -ande/-ende är ett-ord: ett meddelande, ett påstående, ett uttalande, ett erbjudande. Det är ett pålitligt mönster!",
  },
  {
    id: "sva-gen-hog-4",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt artikel.",
    sentence: "Läraren gav oss ____ bra betyg.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Betyg är ett ett-ord: ett betyg. Adjektivet 'bra' böjs inte, men med andra adjektiv: ett högt betyg, en hög poäng.",
  },
  {
    id: "sva-gen-hog-5",
    type: "multiple-choice",
    category: "genus",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt alternativ.",
    prompt: "Vilket ord är INTE ett ett-ord?",
    options: ["problem (en problem)", "beslut (ett beslut)", "samhälle (ett samhälle)"],
    correct: 0,
    explanation:
      "Problem är faktiskt ett ett-ord: ett problem. Alla tre alternativen är ett-ord! Men frågan testar att du kan identifiera felaktig form — 'en problem' är fel, det ska vara 'ett problem'.",
  },
  {
    id: "sva-gen-hog-6",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt artikel.",
    sentence: "Vi har ____ möte klockan tre.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Möte är ett ett-ord: ett möte. Ord som slutar på -e och är bildade av verb är ofta ett-ord: ett möte (möta), ett försök (försöka), ett minne (minnas).",
  },
  // --- gymnasiet ---
  {
    id: "gen-gym-1",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt artikel i den formella meningen.",
    sentence: "Studien presenterar ____ nytt perspektiv på frågan.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Perspektiv är ett ett-ord. I akademiskt språk är det viktigt med rätt genus: ett perspektiv, ett fenomen, ett resultat, ett argument.",
  },
  {
    id: "sva-gen-gym-1",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt artikel.",
    sentence: "Rapporten bygger på ____ grundligt genomförd analys.",
    options: ["en", "ett"],
    correct: "en",
    explanation:
      "Analys är ett en-ord: en analys. Ord som slutar på -ys är en-ord: en analys, en syntes. Adjektivet böjs i en-form: en grundlig analys.",
  },
  {
    id: "sva-gen-gym-2",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt artikel.",
    sentence: "Forskaren lade fram ____ övertygande argument.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Argument är ett ett-ord: ett argument. I akademisk svenska: ett argument, ett resultat, ett påstående, ett perspektiv — alla är ett-ord.",
  },
  {
    id: "sva-gen-gym-3",
    type: "multiple-choice",
    category: "genus",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt alternativ.",
    prompt: "Abstrakta substantiv som slutar på -skap (vänskap, kunskap, vetenskap) är …",
    options: ["en-ord", "ett-ord", "ibland en, ibland ett"],
    correct: 0,
    explanation:
      "Ord som slutar på -skap är en-ord: en vänskap, en kunskap, en vetenskap, en gemenskap. Det gäller alla ord med denna ändelse.",
  },
  {
    id: "sva-gen-gym-4",
    type: "multiple-choice",
    category: "genus",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt alternativ.",
    prompt: "Vilken genusmönsterregel är korrekt?",
    options: [
      "Ord som slutar på -um (museum, centrum, gymnasium) är ett-ord.",
      "Ord som slutar på -um är alltid en-ord.",
      "Ord som slutar på -um kan vara antingen en eller ett.",
    ],
    correct: 0,
    explanation:
      "Ord med latinskt -um-suffix är ett-ord: ett museum, ett centrum, ett gymnasium, ett medium. Det beror på att de kommer från latinska neutrumord.",
  },
  {
    id: "sva-gen-gym-5",
    type: "fill-in-blank",
    category: "genus",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt artikel i den akademiska meningen.",
    sentence: "Studien undersöker ____ komplext fenomen inom sociolingvistik.",
    options: ["ett", "en"],
    correct: "ett",
    explanation:
      "Fenomen är ett ett-ord (från grekiskan). I akademisk text: ett fenomen, ett dilemma, ett paradigm — många lärda ord från grekiska och latin är ett-ord.",
  },
  {
    id: "sva-gen-gym-6",
    type: "multiple-choice",
    category: "genus",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt alternativ.",
    prompt: "Vilket påstående om genus och sammansatta ord stämmer?",
    options: [
      "Det sista ledet bestämmer genus: en skol-bok (bok = en-ord).",
      "Det första ledet bestämmer genus alltid.",
      "Sammansatta ord har alltid samma genus som det längsta ledet.",
    ],
    correct: 0,
    explanation:
      "I sammansatta substantiv bestämmer det sista ledet genus: en skolbok (bok = en-ord), ett sovrum (rum = ett-ord). Det är en mycket nyttig regel att komma ihåg!",
  },
];

// ---------------------------------------------------------------------------
// Exercises — Ordfoljd (word order)
// ---------------------------------------------------------------------------

const ORDFOLJD: SvaExercise[] = [
  // --- lagstadiet ---
  {
    id: "ord-lag-1",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "lagstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Vilken mening låter bäst?",
    options: ["Jag gillar glass.", "Gillar jag glass.", "Glass jag gillar."],
    correct: 0,
    explanation:
      "På svenska kommer verbet (gillar) oftast på plats två i meningen. Normal ordföljd: Jag (subjekt) + gillar (verb) + glass (objekt).",
  },
  {
    id: "ord-lag-2",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "lagstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj rätt mening.",
    options: [
      "Igår gick jag till skolan.",
      "Igår jag gick till skolan.",
      "Igår till skolan jag gick.",
    ],
    correct: 0,
    explanation:
      "När meningen börjar med ett annat ord än subjektet (till exempel 'igår'), kommer verbet fortfarande på plats två. Det kallas V2-regeln: Igår (1) + gick (2) + jag (3).",
  },
  // --- mellanstadiet ---
  {
    id: "ord-mel-1",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening följer V2-regeln?",
    prompt: "Vilken mening är korrekt?",
    options: [
      "Ibland spelar vi fotboll.",
      "Ibland vi spelar fotboll.",
      "Vi ibland spelar fotboll.",
    ],
    correct: 0,
    explanation:
      "V2-regeln: verbet ska alltid stå på plats 2. När 'ibland' står först måste verbet (spelar) komma direkt efter: Ibland (1) + spelar (2) + vi (3).",
  },
  {
    id: "ord-mel-2",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj meningen med rätt ordföljd.",
    options: [
      "Sedan gick han hem.",
      "Sedan han gick hem.",
      "Han sedan gick hem.",
    ],
    correct: 0,
    explanation:
      "När meningen börjar med ett tidsuttryck (sedan, igår, idag, imorgon) måste verbet komma på plats 2: Sedan (1) + gick (2) + han (3).",
  },
  {
    id: "sva-ord-mel-1",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj den korrekta meningen.",
    options: [
      "På sommaren åker vi till landet.",
      "På sommaren vi åker till landet.",
      "Vi på sommaren åker till landet.",
    ],
    correct: 0,
    explanation:
      "V2-regeln gäller igen: På sommaren (1) + åker (2) + vi (3). Verbet måste stå på plats 2, även när meningen börjar med en plats- eller tidsbestämning.",
  },
  {
    id: "sva-ord-mel-2",
    type: "fill-in-blank",
    category: "ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt ordföljd i bisatsen.",
    sentence: "Jag vet att hon ____ simma.",
    options: ["inte kan", "kan inte"],
    correct: "inte kan",
    explanation:
      "BIFF-regeln: i Bisatser står Inte Före det Finita verbet. Bisatsen börjar med 'att', så 'inte' kommer före 'kan': att hon inte kan simma.",
  },
  {
    id: "sva-ord-mel-3",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj den korrekta meningen.",
    options: [
      "Varje dag läser hon en bok.",
      "Varje dag hon läser en bok.",
      "Hon varje dag läser en bok.",
    ],
    correct: 0,
    explanation:
      "V2-regeln: Varje dag (1) + läser (2) + hon (3). Subjektet (hon) flyttar till efter verbet när något annat än subjektet står först. Det kallas inversion.",
  },
  {
    id: "sva-ord-mel-4",
    type: "fill-in-blank",
    category: "ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt ordföljd i bisatsen.",
    sentence: "Vi stannade hemma eftersom det ____ ute.",
    options: ["inte var varmt", "var inte varmt"],
    correct: "inte var varmt",
    explanation:
      "I bisatser (efter eftersom, att, om, när) gäller BIFF-regeln: 'inte' placeras före verbet. Eftersom det inte var varmt ute.",
  },
  // --- hogstadiet ---
  {
    id: "ord-hog-1",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken bisats har rätt ordföljd?",
    prompt: "Välj bisatsen med korrekt ordföljd.",
    options: [
      "...att jag inte kan komma.",
      "...att jag kan inte komma.",
      "...att inte jag kan komma.",
    ],
    correct: 0,
    explanation:
      "I bisatser (efter att, om, när, eftersom) kommer negationen (inte) FÖRE verbet. Kom ihåg BIFF-regeln: i Bisatser står Inte Före det Finita verbet.",
  },
  {
    id: "ord-hog-2",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening är korrekt?",
    prompt: "Välj den korrekta meningen.",
    options: [
      "Jag vet att hon aldrig har varit där.",
      "Jag vet att hon har aldrig varit där.",
      "Jag vet att aldrig hon har varit där.",
    ],
    correct: 0,
    explanation:
      "I bisatser kommer satsadverb (aldrig, inte, alltid) före alla verb. BIFF-regeln gäller: att hon ALDRIG har varit där. I huvudsats skulle det vara: Hon har aldrig varit där.",
  },
  {
    id: "sva-ord-hog-1",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj den korrekta meningen med bisats.",
    options: [
      "Om du inte hade ringt, hade jag gått hem.",
      "Om du hade inte ringt, hade jag gått hem.",
      "Om du inte hade ringt, jag hade gått hem.",
    ],
    correct: 0,
    explanation:
      "Två regler: (1) I bisatsen 'om du inte hade ringt' gäller BIFF — 'inte' före verbet. (2) I huvudsatsen gäller V2 — verbet (hade) kommer före subjektet (jag) eftersom bisatsen står först.",
  },
  {
    id: "sva-ord-hog-2",
    type: "fill-in-blank",
    category: "ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt ordföljd.",
    sentence: "Hon berättade att hon ____ boken förra veckan.",
    options: ["redan hade läst", "hade redan läst"],
    correct: "redan hade läst",
    explanation:
      "I bisatser placeras satsadverbet (redan, aldrig, inte) före det finita verbet. BIFF-regeln: att hon REDAN hade läst. I huvudsats: Hon hade redan läst.",
  },
  {
    id: "sva-ord-hog-3",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Var ska adverbialet placeras?",
    prompt: "Vilken mening har rätt placering av 'förmodligen'?",
    options: [
      "Han har förmodligen glömt sin väska.",
      "Han förmodligen har glömt sin väska.",
      "Förmodligen han har glömt sin väska.",
    ],
    correct: 0,
    explanation:
      "I huvudsatser placeras satsadverb (förmodligen, antagligen, kanske) efter det finita verbet: Han har (finit verb) + förmodligen + glömt sin väska.",
  },
  {
    id: "sva-ord-hog-4",
    type: "fill-in-blank",
    category: "ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt ordföljd i bisatsen.",
    sentence: "Läraren frågade varför eleven ____ sina läxor.",
    options: ["aldrig gjorde", "gjorde aldrig"],
    correct: "aldrig gjorde",
    explanation:
      "Bisats (inledd av 'varför'): BIFF-regeln gäller, satsadverbet 'aldrig' placeras före verbet 'gjorde'. Jämför huvudsats: Eleven gjorde aldrig sina läxor.",
  },
  // --- gymnasiet ---
  {
    id: "ord-gym-1",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Analysera ordföljden i dessa komplexa meningar.",
    prompt: "Vilken mening har korrekt ordföljd i både huvudsats och bisats?",
    options: [
      "Eftersom hon inte hade tid, bestämde hon sig för att avboka.",
      "Eftersom hon hade inte tid, bestämde hon sig för att avboka.",
      "Eftersom hon inte hade tid, hon bestämde sig för att avboka.",
    ],
    correct: 0,
    explanation:
      "Två regler samverkar: (1) Bisatsen 'eftersom hon inte hade tid' följer BIFF-regeln med 'inte' före verbet. (2) Huvudsatsen som följer har omvänd ordföljd (V2) eftersom bisatsen står först: bestämde (verb) + hon (subjekt).",
  },
  {
    id: "sva-ord-gym-1",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Analysera ordföljden i den akademiska meningen.",
    prompt: "Vilken mening har korrekt topikalisering (framflyttning)?",
    options: [
      "Detta resultat kan dock ifrågasättas med tanke på metodvalet.",
      "Dock detta resultat kan ifrågasättas med tanke på metodvalet.",
      "Detta resultat dock kan ifrågasättas med tanke på metodvalet.",
    ],
    correct: 0,
    explanation:
      "I akademisk svenska placeras konjunktionella adverb (dock, emellertid, dessutom) efter det finita verbet i huvudsatser. 'Kan dock' följer mönstret: finit verb + satsadverb.",
  },
  {
    id: "sva-ord-gym-2",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt ordföljd.",
    prompt: "Vilken mening är korrekt?",
    options: [
      "Med utgångspunkt i dessa data drar författaren slutsatsen att hypotesen bekräftas.",
      "Med utgångspunkt i dessa data författaren drar slutsatsen att hypotesen bekräftas.",
      "Författaren med utgångspunkt i dessa data drar slutsatsen att hypotesen bekräftas.",
    ],
    correct: 0,
    explanation:
      "Topikalisering: en lång bestämning (med utgångspunkt i dessa data) placeras först, följt av verbet (drar) och sedan subjektet (författaren). V2-regeln gäller även i akademisk text.",
  },
  {
    id: "sva-ord-gym-3",
    type: "fill-in-blank",
    category: "ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt ordföljd.",
    sentence: "Forskaren menar att resultaten ____ hypotesen.",
    options: ["inte stöder", "stöder inte"],
    correct: "inte stöder",
    explanation:
      "Bisats inledd av 'att': BIFF-regeln gäller även i akademisk text. Negationen 'inte' placeras före verbet: att resultaten inte stöder. I huvudsats: Resultaten stöder inte hypotesen.",
  },
  {
    id: "sva-ord-gym-4",
    type: "multiple-choice",
    category: "ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Analysera ordföljden.",
    prompt: "Vilken mening använder korrekt ordföljd med inskjuten bisats?",
    options: [
      "Den studie som nyligen publicerades visar att sambandet är starkt.",
      "Den studie som publicerades nyligen visar att är sambandet starkt.",
      "Den studie som nyligen publicerades visar att sambandet starkt är.",
    ],
    correct: 0,
    explanation:
      "Inskjuten relativsats: 'som nyligen publicerades' — adverbet 'nyligen' placeras före verbet i bisatsen. Resten av meningen följer normal ordföljd. I att-satsen gäller också rak ordföljd: att sambandet är starkt.",
  },
  {
    id: "sva-ord-gym-5",
    type: "fill-in-blank",
    category: "ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt ordföljd i den formella meningen.",
    sentence: "Utifrån den genomförda analysen ____ att metoden behöver revideras.",
    options: ["kan konstateras", "konstateras kan"],
    correct: "kan konstateras",
    explanation:
      "V2-regeln: när en lång bestämning (utifrån den genomförda analysen) inleder meningen, kommer det finita verbet (kan) på plats 2. Passiv konstruktion med 'kan konstateras' är vanlig i akademisk svenska.",
  },
];

// ---------------------------------------------------------------------------
// Exercises — Vanliga fel (common errors)
// ---------------------------------------------------------------------------

const VANLIGA_FEL: SvaExercise[] = [
  // --- lagstadiet ---
  {
    id: "vanl-lag-1",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "lagstadiet",
    instruction: "Välj rätt ord.",
    sentence: "Vi gick ____ igår.",
    options: ["dit", "där"],
    correct: "dit",
    explanation:
      "DÄR = på en plats (stillastående). DIT = till en plats (rörelse). Eftersom 'gick' visar rörelse använder vi 'dit': Vi gick DIT.",
  },
  {
    id: "vanl-lag-2",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "lagstadiet",
    instruction: "Välj rätt ord.",
    sentence: "Katten sitter ____ i trädet.",
    options: ["där", "dit"],
    correct: "där",
    explanation:
      "Katten sitter stilla, det är ingen rörelse. Därför använder vi 'där'. DÄR = på platsen. DIT = till platsen.",
  },
  // --- mellanstadiet ---
  {
    id: "vanl-mel-1",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "mellanstadiet",
    instruction: "Välj 'de' eller 'dem'.",
    sentence: "Jag såg ____ på gatan.",
    options: ["dem", "de"],
    correct: "dem",
    explanation:
      "DE = subjektsform (de spelar). DEM = objektsform (jag såg dem). Tips: om du kan byta ut mot 'vi' är det 'de', om du kan byta mot 'oss' är det 'dem'. Jag såg oss = jag såg dem.",
  },
  {
    id: "vanl-mel-2",
    type: "multiple-choice",
    category: "vanliga-fel",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening är korrekt?",
    prompt: "Välj rätt mening.",
    options: [
      "De lekte på gården.",
      "Dem lekte på gården.",
      "Dom lekte på gården.",
    ],
    correct: 0,
    explanation:
      "Här är 'de' subjekt (de som utför handlingen), därför ska det vara 'de'. Tips: byt ut mot 'vi' — 'Vi lekte på gården' fungerar, alltså 'de'.",
  },
  {
    id: "sva-vanl-mel-1",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "mellanstadiet",
    instruction: "Välj 'mig' eller 'jag'.",
    sentence: "Det var ____ som vann tävlingen.",
    options: ["jag", "mig"],
    correct: "jag",
    explanation:
      "Efter 'det var' används subjektsformen 'jag'. Det var JAG som vann. Tips: om du kan ersätta med 'han/hon' är det 'jag', om med 'honom/henne' är det 'mig'.",
  },
  {
    id: "sva-vanl-mel-2",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt form.",
    sentence: "Läraren gav ____ en bok.",
    options: ["mig", "jag"],
    correct: "mig",
    explanation:
      "Här behövs objektsformen 'mig' (den som tar emot). Läraren gav MIG. Tips: byt ut mot 'honom' — 'Läraren gav honom' fungerar, alltså 'mig'.",
  },
  {
    id: "sva-vanl-mel-3",
    type: "multiple-choice",
    category: "vanliga-fel",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening är korrekt?",
    prompt: "Välj den korrekta meningen.",
    options: [
      "Det stora huset ligger vid sjön.",
      "Den stora huset ligger vid sjön.",
      "De stora huset ligger vid sjön.",
    ],
    correct: 0,
    explanation:
      "Hus är ett ett-ord, och i bestämd form med adjektiv används 'det': DET stora huset. En-ord: DEN stora bilen. Plural: DE stora husen. Det kallas dubbel bestämdhet.",
  },
  {
    id: "sva-vanl-mel-4",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "mellanstadiet",
    instruction: "Välj 'de' eller 'dem'.",
    sentence: "Kan du hjälpa ____ med läxan?",
    options: ["dem", "de"],
    correct: "dem",
    explanation:
      "Objektsform: Kan du hjälpa DEM. Tips: byt ut mot 'oss' — 'Kan du hjälpa oss' fungerar, alltså 'dem'.",
  },
  // --- hogstadiet ---
  {
    id: "vanl-hog-1",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt pronomen: sin/hans/hennes.",
    sentence: "Anna tog ____ väska och gick.",
    options: ["sin", "hennes"],
    correct: "sin",
    explanation:
      "SIN används när subjektet äger föremålet. Anna (subjekt) tog sin (Annas egen) väska. Om vi skriver 'hennes' betyder det någon annan kvinnas väska. Regeln: sin/sitt/sina syftar tillbaka på subjektet.",
  },
  {
    id: "vanl-hog-2",
    type: "multiple-choice",
    category: "vanliga-fel",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening har rätt pronomen?",
    prompt: "Erik ringde sin mamma. Vilken mening är korrekt?",
    options: [
      "Erik ringde sin mamma. (Eriks egen mamma)",
      "Erik ringde hans mamma. (Eriks egen mamma)",
    ],
    correct: 0,
    explanation:
      "När subjektet (Erik) äger något i samma sats använder vi sin/sitt/sina. 'Hans mamma' skulle betyda en annan mans mamma. Det här är ett vanligt fel för andraspråksinlärare.",
  },
  {
    id: "sva-vanl-hog-1",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt pronomen.",
    sentence: "Barnen tog med ____ böcker hem.",
    options: ["sina", "deras"],
    correct: "sina",
    explanation:
      "Barnen (subjekt) äger böckerna, därför: sina böcker. 'Deras böcker' skulle betyda att böckerna tillhör andra barn. Sin/sitt/sina syftar tillbaka på subjektet i samma sats.",
  },
  {
    id: "sva-vanl-hog-2",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt preposition.",
    sentence: "Hon är bra ____ matematik.",
    options: ["på", "i", "med"],
    correct: "på",
    explanation:
      "I svenska säger man 'bra PÅ' ett ämne eller en aktivitet: bra på matte, bra på att simma. Det är ett vanligt fel att använda 'i' (som i engelskans 'good in/at').",
  },
  {
    id: "sva-vanl-hog-3",
    type: "multiple-choice",
    category: "vanliga-fel",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening har rätt preposition?",
    prompt: "Välj den korrekta meningen.",
    options: [
      "Jag är intresserad av historia.",
      "Jag är intresserad i historia.",
      "Jag är intresserad för historia.",
    ],
    correct: 0,
    explanation:
      "I svenska: intresserad AV (inte 'i' eller 'för'). Vanliga prepositionsuttryck: intresserad av, bra på, rädd för, nöjd med, ledsen över.",
  },
  {
    id: "sva-vanl-hog-4",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt pronomen.",
    sentence: "Lisa berättade för Maria om ____ resa till Italien.",
    options: ["sin", "hennes"],
    correct: "sin",
    explanation:
      "Lisa (subjekt) berättar om Lisas egen resa, alltså 'sin resa'. Om vi menar Marias resa skriver vi 'hennes resa'. Reflexiva pronomen syftar alltid tillbaka på subjektet.",
  },
  // --- gymnasiet ---
  {
    id: "vanl-gym-1",
    type: "multiple-choice",
    category: "vanliga-fel",
    ageGroup: "gymnasiet",
    instruction: "Analysera pronomenvalet i formellt språk.",
    prompt: "Vilken mening använder rätt reflexivt pronomen?",
    options: [
      "Författaren framför sina argument tydligt.",
      "Författaren framför hans argument tydligt.",
      "Författaren framför dess argument tydligt.",
    ],
    correct: 0,
    explanation:
      "Författaren (subjekt) äger argumenten, därför använder vi 'sina'. I akademisk svenska är korrekt reflexivt pronomen (sin/sitt/sina) särskilt viktigt för tydlighet.",
  },
  {
    id: "sva-vanl-gym-1",
    type: "multiple-choice",
    category: "vanliga-fel",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt register i den formella meningen.",
    prompt: "Vilken formulering passar bäst i en formell uppsats?",
    options: [
      "Resultaten visar att det finns ett samband.",
      "Resultaten visar att det finns nåt samband.",
      "Det visar sig att det finns typ ett samband.",
    ],
    correct: 0,
    explanation:
      "I formell och akademisk svenska undviker man talspråk som 'nåt' (något), 'typ' (som utfyllnadsord), 'dom' (de/dem). Använd fullständiga former: något, ett, de/dem.",
  },
  {
    id: "sva-vanl-gym-2",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt böjningsform av lånordet.",
    sentence: "Hon fick flera ____ från olika företag.",
    options: ["mejl", "mejlar", "mejls"],
    correct: "mejl",
    explanation:
      "Mejl (från engelskans 'mail') böjs som ett ett-ord utan ändelse i plural: ett mejl, flera mejl. Lånord som slutar på konsonant får ofta ingen pluraländelse. Inte engelska -s!",
  },
  {
    id: "sva-vanl-gym-3",
    type: "multiple-choice",
    category: "vanliga-fel",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt alternativ.",
    prompt: "Vilken böjning av lånordet 'team' är korrekt i svensk plural?",
    options: [
      "Vi har flera team på avdelningen.",
      "Vi har flera teams på avdelningen.",
      "Vi har flera teamer på avdelningen.",
    ],
    correct: 0,
    explanation:
      "Många engelska lånord som slutar på konsonant får ingen extra pluraländelse i svenska: ett team, flera team. Undvik engelska plural-s: inte 'teams'. Jämför: ett mail, flera mail.",
  },
  {
    id: "sva-vanl-gym-4",
    type: "multiple-choice",
    category: "vanliga-fel",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt register.",
    prompt: "Vilken formulering är korrekt i formell svenska?",
    options: [
      "Studien genomfördes under hösten 2024.",
      "Studien genomfördes under hösten 2024 liksom.",
      "Man genomförde studien under hösten 2024 typ.",
    ],
    correct: 0,
    explanation:
      "I formell svenska undviks talspråksmarkörer som 'liksom', 'typ', 'ba', 'asså'. Passiv form ('genomfördes') är vanligt i akademisk text och undviker det informella 'man'.",
  },
  {
    id: "sva-vanl-gym-5",
    type: "fill-in-blank",
    category: "vanliga-fel",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt böjning av lånordet.",
    sentence: "Företaget anlitade en ny ____ för projektet.",
    options: ["coach", "coacher", "coachs"],
    correct: "coach",
    explanation:
      "I singular obestämd form: en coach. Plural: coacher (med svensk pluraländelse -er, inte engelska -es eller -s). Här frågas dock efter singularformen: en coach.",
  },
];

// ---------------------------------------------------------------------------
// Exercises — Partikelverb (phrasal/particle verbs)
// ---------------------------------------------------------------------------

const PARTIKELVERB: SvaExercise[] = [
  // --- mellanstadiet (8) ---
  {
    id: "part-mel-1",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att stå upp'?",
    options: [
      "Att kliva ur sängen på morgonen",
      "Att stå på en stol",
      "Att vara tyst",
    ],
    correct: 0,
    explanation:
      "Partikelverbet 'stå upp' betyder att vakna och kliva ur sängen. Partikeln 'upp' ändrar betydelsen av 'stå'. Jämför: 'stå' (vara stående) och 'stå upp' (vakna/gå upp ur sängen).",
  },
  {
    id: "part-mel-2",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Jag kan inte ____ vad hon heter.",
    options: ["komma ihåg", "komma på", "komma till"],
    correct: "komma ihåg",
    explanation:
      "'Komma ihåg' betyder att minnas något man redan vet. 'Komma på' betyder att få en ny idé. Här försöker personen minnas ett namn, alltså 'komma ihåg'.",
  },
  {
    id: "part-mel-3",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att ta på sig jackan'?",
    options: [
      "Att klä på sig jackan",
      "Att ta bort jackan",
      "Att köpa en jacka",
    ],
    correct: 0,
    explanation:
      "'Ta på sig' betyder att klä på sig ett plagg. Partikeln 'på' och reflexivet 'sig' ändrar betydelsen helt. Motsatsen är 'ta av sig' (klä av sig).",
  },
  {
    id: "part-mel-4",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt partikel.",
    sentence: "Vi ska gå ____ och leka på gården.",
    options: ["ut", "på", "i"],
    correct: "ut",
    explanation:
      "'Gå ut' betyder att gå från inomhus till utomhus. Partikeln 'ut' visar riktning inifrån och ut. Motsatsen är 'gå in'.",
  },
  {
    id: "part-mel-5",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att slå upp ett ord i ordboken'?",
    options: [
      "Att leta efter och hitta ordet",
      "Att slå på ordboken",
      "Att skriva ett ord",
    ],
    correct: 0,
    explanation:
      "'Slå upp' betyder att söka efter information i en bok eller ordbok. Det har ingenting med att slå (fysiskt) att göra — partikeln 'upp' ger verbet en helt ny betydelse.",
  },
  {
    id: "part-mel-6",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Hon ____ glad idag.",
    options: ["ser ut", "ser på", "ser till"],
    correct: "ser ut",
    explanation:
      "'Se ut' betyder att ha ett visst utseende eller verka på ett visst sätt. 'Hon ser glad ut' = hon verkar glad. 'Se på' betyder att titta på något.",
  },
  {
    id: "part-mel-7",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening använder rätt partikelverb?",
    prompt: "Vilken mening är korrekt?",
    options: [
      "Kan du ta på dig skorna?",
      "Kan du ta i dig skorna?",
      "Kan du ta upp dig skorna?",
    ],
    correct: 0,
    explanation:
      "'Ta på sig' är rätt partikelverb för att klä på sig kläder och skor. Partikeln 'på' + 'sig' hör ihop med verbet 'ta'.",
  },
  {
    id: "part-mel-8",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt partikel.",
    sentence: "Läraren sa att vi ska komma ____ svaret.",
    options: ["ihåg", "på", "ut"],
    correct: "ihåg",
    explanation:
      "'Komma ihåg' betyder att minnas. Läraren vill att eleverna ska minnas svaret. 'Komma på' skulle betyda att hitta ett nytt svar.",
  },
  // --- mellanstadiet nya (5) ---
  {
    id: "part-mel-9",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att lägga till'?",
    options: [
      "Att lägga ner något",
      "Att lägga ihop eller addera något",
      "Att lägga sig och sova",
    ],
    correct: 1,
    explanation:
      "'Lägga till' betyder att addera eller lägga ihop, till exempel att lägga till ett ord eller en sak. Partikeln 'till' ger betydelsen av att något extra tillförs.",
  },
  {
    id: "part-mel-10",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Kan du ____ tv:n? Programmet börjar snart.",
    options: ["sätta på", "sätta av", "sätta in"],
    correct: "sätta på",
    explanation:
      "'Sätta på' betyder att slå på en apparat som tv, radio eller dator. Motsatsen är 'stänga av'. 'Sätta av' används inte om apparater.",
  },
  {
    id: "part-mel-11",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att stänga av datorn'?",
    options: [
      "Att slå av datorn så den slutar fungera",
      "Att stänga datorns lock",
      "Att gömma datorn",
    ],
    correct: 0,
    explanation:
      "'Stänga av' betyder att göra så att en apparat slutar vara igång. Partikeln 'av' visar att något upphör. Motsatsen är 'sätta på' eller 'slå på'.",
  },
  {
    id: "part-mel-12",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Du måste ____ de gamla sakerna ur lådan.",
    options: ["ta bort", "ta på", "ta till"],
    correct: "ta bort",
    explanation:
      "'Ta bort' betyder att avlägsna eller ta undan något. Partikeln 'bort' visar att något ska försvinna härifrån.",
  },
  {
    id: "part-mel-13",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Glöm inte att ____ ditt namn på papperet.",
    options: ["fylla i", "fylla på", "fylla ut"],
    correct: "fylla i",
    explanation:
      "'Fylla i' betyder att skriva i ett fält, t.ex. på ett formulär eller prov. 'Fylla på' betyder att lägga till mer av en vätska.",
  },
  // --- hogstadiet (12) ---
  {
    id: "part-hog-1",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att stå ut med något'?",
    options: [
      "Att tåla eller acceptera något jobbigt",
      "Att stå utanför",
      "Att resa sig upp",
    ],
    correct: 0,
    explanation:
      "'Stå ut med' betyder att tolerera eller tåla något obehagligt. Exempel: 'Jag kan inte stå ut med oljudet.' Det är ett tredels partikelverb (verb + partikel + preposition).",
  },
  {
    id: "part-hog-2",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Han ____ en bra idé till projektet.",
    options: ["kom på", "kom ihåg", "kom till"],
    correct: "kom på",
    explanation:
      "'Komma på' betyder att få en ny idé eller plötsligt tänka ut något. 'Komma ihåg' hade betytt att minnas en idé man redan hade.",
  },
  {
    id: "part-hog-3",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att bryta ut'?",
    options: [
      "Att börja plötsligt (t.ex. ett krig bryter ut)",
      "Att bryta sönder något",
      "Att avbryta någon",
    ],
    correct: 0,
    explanation:
      "'Bryta ut' betyder att något börjar plötsligt och oväntat. Ett krig, en brand eller en pandemi kan bryta ut. Det används ofta i nyheter och formellt språk.",
  },
  {
    id: "part-hog-4",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Till slut bestämde hon sig för att ____ försöken.",
    options: ["ge upp", "ge ut", "ge till"],
    correct: "ge upp",
    explanation:
      "'Ge upp' betyder att sluta försöka, att acceptera att man inte kan lyckas. 'Ge ut' betyder att publicera (t.ex. en bok).",
  },
  {
    id: "part-hog-5",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att slå igenom'?",
    options: [
      "Att bli framgångsrik och känd",
      "Att slå sönder något",
      "Att slå på en dörr",
    ],
    correct: 0,
    explanation:
      "'Slå igenom' betyder att nå framgång, ofta inom konst, musik eller affärer. 'Artisten slog igenom med sin debutsingel.' Partikeln 'igenom' ger en helt ny betydelse.",
  },
  {
    id: "part-hog-6",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Jag ____ helt med dig, det var en bra film.",
    options: ["håller med", "håller på", "håller ut"],
    correct: "håller med",
    explanation:
      "'Hålla med' betyder att ha samma åsikt som någon annan. 'Hålla på' betyder att syssla med något just nu. 'Hålla ut' betyder att orka/tåla.",
  },
  {
    id: "part-hog-7",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening använder partikelverbet rätt?",
    prompt: "Vilken mening är korrekt?",
    options: [
      "Vi måste ta reda på vad som hänt.",
      "Vi måste ta reda vad som hänt.",
      "Vi måste ta på reda vad som hänt.",
    ],
    correct: 0,
    explanation:
      "'Ta reda på' är ett fast partikelverb som betyder att undersöka eller ta reda på fakta. Det består av tre delar: ta + reda + på. Alla tre behövs.",
  },
  {
    id: "part-hog-8",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Kan du ____ att alla kommer i tid?",
    options: ["se till", "se ut", "se på"],
    correct: "se till",
    explanation:
      "'Se till' betyder att se till att något händer, att ansvara för att det blir gjort. 'Se ut' = verka/ha ett utseende. 'Se på' = titta på.",
  },
  {
    id: "part-hog-9",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Vad betyder partikelverbet i meningen?",
    prompt: "Vad betyder 'bryta ut i skratt'?",
    options: [
      "Att plötsligt börja skratta",
      "Att sluta skratta",
      "Att skratta tyst",
    ],
    correct: 0,
    explanation:
      "'Bryta ut i' anger att något plötsligt börjar. Man kan bryta ut i skratt, gråt eller applåder. Det visar att känslouttrycket kommer oväntat.",
  },
  {
    id: "part-hog-10",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt partikel.",
    sentence: "Kriget bröt ____ 1939.",
    options: ["ut", "in", "av"],
    correct: "ut",
    explanation:
      "'Bryta ut' används när något dramatiskt och oväntat inträffar: krig, bränder och epidemier bryter ut.",
  },
  {
    id: "part-hog-11",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt partikel.",
    sentence: "Hon gav aldrig ____, trots att det var svårt.",
    options: ["upp", "ut", "in"],
    correct: "upp",
    explanation:
      "'Ge upp' betyder att sluta försöka. Partikeln 'upp' ger en metaforisk betydelse av att lämna ifrån sig sina ansträngningar.",
  },
  {
    id: "part-hog-12",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Vilken partikel passar bäst?",
    prompt: "Bandet slog ____ med sin tredje singel.",
    options: ["igenom", "upp", "av"],
    correct: 0,
    explanation:
      "'Slå igenom' betyder att bli framgångsrik. Det är vanligt att använda om artister, författare och uppfinnare som plötsligt blir kända.",
  },
  // --- hogstadiet nya (5) ---
  {
    id: "part-hog-13",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att ställa in ett möte'?",
    options: [
      "Att avboka eller avlysa mötet",
      "Att planera ett möte",
      "Att flytta mötet till en annan plats",
    ],
    correct: 0,
    explanation:
      "'Ställa in' betyder att avboka eller avlysa något som var planerat. Det kan gälla möten, evenemang och resor. Det är ett vanligt förväxlingsord — det betyder INTE att planera in.",
  },
  {
    id: "part-hog-14",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Kan du ____ hur mycket det kostar sammanlagt?",
    options: ["räkna ut", "räkna med", "räkna på"],
    correct: "räkna ut",
    explanation:
      "'Räkna ut' betyder att beräkna och komma fram till ett svar. 'Räkna med' betyder att förvänta sig. 'Räkna på' kan betyda att göra beräkningar men är mindre specifikt.",
  },
  {
    id: "part-hog-15",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att peka ut någon'?",
    options: [
      "Att identifiera och utse någon, ofta negativt",
      "Att peka med fingret åt ett håll",
      "Att visa vägen för någon",
    ],
    correct: 0,
    explanation:
      "'Peka ut' betyder att identifiera och framhäva en specifik person, ofta i negativ bemärkelse (t.ex. 'peka ut som skyldig'). Det kan också betyda att utse någon.",
  },
  {
    id: "part-hog-16",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Samtalet ____ av ett telefonsamtal mitt i meningen.",
    options: ["bröts av", "bröts ut", "bröts in"],
    correct: "bröts av",
    explanation:
      "'Bryta av' i passiv form ('brytas av') betyder att avbryta. Här avbröts samtalet av ett telefonsamtal. 'Bryta ut' betyder att starta plötsligt.",
  },
  {
    id: "part-hog-17",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening använder partikelverbet rätt?",
    prompt: "Vilken mening är korrekt?",
    options: [
      "Vi måste dra igång projektet innan sommarlovet.",
      "Vi måste dra på projektet innan sommarlovet.",
      "Vi måste dra in projektet innan sommarlovet.",
    ],
    correct: 0,
    explanation:
      "'Dra igång' betyder att starta eller sätta igång något. Det är synonymt med 'sätta igång' men mer vardagligt. 'Dra in' betyder att ta tillbaka eller spara in på.",
  },
  // --- gymnasiet (10) ---
  {
    id: "part-gym-1",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Vad betyder partikelverbet i akademiskt sammanhang?",
    prompt: "Vad betyder 'att föra fram ett argument'?",
    options: [
      "Att presentera och argumentera för en ståndpunkt",
      "Att flytta något framåt",
      "Att prata högt",
    ],
    correct: 0,
    explanation:
      "'Föra fram' i akademiskt språk betyder att presentera eller lyfta en synpunkt. Det är vanligt i uppsatser och debatter: 'Författaren för fram tesen att...'",
  },
  {
    id: "part-gym-2",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "I debatten måste man ____ till frågan om klimatförändringar.",
    options: ["ta ställning", "ta hand", "ta upp"],
    correct: "ta ställning",
    explanation:
      "'Ta ställning' betyder att bestämma sig och uttrycka en åsikt. I argumenterande texter förväntas man ta ställning till den fråga man diskuterar.",
  },
  {
    id: "part-gym-3",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening använder partikelverbet korrekt?",
    prompt: "Vilken mening är korrekt?",
    options: [
      "Forskaren drar slutsatsen att metoden fungerar.",
      "Forskaren drar på slutsatsen att metoden fungerar.",
      "Forskaren drar ut slutsatsen att metoden fungerar.",
    ],
    correct: 0,
    explanation:
      "'Dra slutsats' (eller 'dra slutsatsen') är ett fast uttryck i akademisk svenska som betyder att komma fram till en slutsats baserat på bevis eller argument.",
  },
  {
    id: "part-gym-4",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Nu ska vi ____ arbetet med grupprojektet.",
    options: ["sätta igång", "sätta upp", "sätta av"],
    correct: "sätta igång",
    explanation:
      "'Sätta igång' betyder att påbörja eller starta något. Det används ofta i både vardagligt och formellt språk: 'sätta igång en process', 'sätta igång ett projekt'.",
  },
  {
    id: "part-gym-5",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att slå fast'?",
    options: [
      "Att fastställa eller konstatera något",
      "Att slå hårt",
      "Att stänga en dörr",
    ],
    correct: 0,
    explanation:
      "'Slå fast' i formellt och akademiskt språk betyder att fastställa, konstatera eller bestämma något. Exempel: 'Domstolen slog fast att lagen gäller.'",
  },
  {
    id: "part-gym-6",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Man borde inte ____ sig så dumt i formella sammanhang.",
    options: ["bära sig åt", "bära ut", "bära på"],
    correct: "bära sig åt",
    explanation:
      "'Bära sig åt' betyder att bete sig eller uppföra sig. Det har ofta en negativ klang: 'Hur bär du dig åt?' (vad håller du på med?). I formella texter kan det användas mer neutralt.",
  },
  {
    id: "part-gym-7",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Vilken partikel passar bäst i det akademiska sammanhanget?",
    prompt: "Rapporten ____ att resultaten stämmer överens med hypotesen.",
    options: ["slår fast", "slår upp", "slår igenom"],
    correct: 0,
    explanation:
      "'Slå fast' används i akademisk och formell svenska för att konstatera eller fastställa något med auktoritet. Det är vanligt i rapporter och vetenskapliga texter.",
  },
  {
    id: "part-gym-8",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Debattören ____ sina argument på ett övertygande sätt.",
    options: ["förde fram", "förde ut", "förde på"],
    correct: "förde fram",
    explanation:
      "'Föra fram' i preteritum blir 'förde fram'. Det betyder att presentera, lyfta eller argumentera för något. Vanligt i analyser av debatter och argumenterande texter.",
  },
  {
    id: "part-gym-9",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening har korrekt partikelverb?",
    prompt: "Vilken mening är korrekt i akademisk stil?",
    options: [
      "Eleverna satte igång projektet med en litteraturstudie.",
      "Eleverna satte på projektet med en litteraturstudie.",
      "Eleverna satte in projektet med en litteraturstudie.",
    ],
    correct: 0,
    explanation:
      "'Sätta igång' är det korrekta partikelverbet för att starta eller påbörja. 'Sätta på' betyder oftast att slå på en apparat, och 'sätta in' betyder att placera in något.",
  },
  {
    id: "part-gym-10",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Utifrån datamaterialet kan man ____ att teorin stämmer.",
    options: ["dra slutsatsen", "dra fram", "dra ut"],
    correct: "dra slutsatsen",
    explanation:
      "'Dra slutsatsen' är ett centralt akademiskt uttryck som används i uppsatser och rapporter. Det betyder att utifrån bevis formulera en konklusion.",
  },
  // --- gymnasiet nya (5) ---
  {
    id: "part-gym-11",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Vad betyder partikelverbet i formellt sammanhang?",
    prompt: "Vad betyder 'att lägga fram ett förslag'?",
    options: [
      "Att presentera ett förslag för diskussion",
      "Att lägga ner ett förslag",
      "Att skjuta upp ett förslag",
    ],
    correct: 0,
    explanation:
      "'Lägga fram' i formell svenska betyder att presentera och föreslå. Det är vanligt i politiska och akademiska sammanhang: 'Regeringen lade fram en proposition.'",
  },
  {
    id: "part-gym-12",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Partiet valde att ____ den nya lagen.",
    options: ["ställa sig bakom", "ställa sig mot", "ställa sig in"],
    correct: "ställa sig bakom",
    explanation:
      "'Ställa sig bakom' betyder att stödja och stå bakom något, t.ex. ett beslut eller förslag. Det är vanligt i politisk debatt och formellt språk.",
  },
  {
    id: "part-gym-13",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening använder partikelverbet korrekt?",
    prompt: "Vilken mening är korrekt i formell stil?",
    options: [
      "Styrelsen beslutade att se över reglerna.",
      "Styrelsen beslutade att se ut reglerna.",
      "Styrelsen beslutade att se in reglerna.",
    ],
    correct: 0,
    explanation:
      "'Se över' betyder att granska, utvärdera eller revidera. Det är vanligt i formella sammanhang: 'se över budgeten', 'se över rutinerna'.",
  },
  {
    id: "part-gym-14",
    type: "fill-in-blank",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt partikelverb.",
    sentence: "Informationen ska ____ till nästa instans för granskning.",
    options: ["föras vidare", "föras fram", "föras ut"],
    correct: "föras vidare",
    explanation:
      "'Föra vidare' betyder att skicka eller förmedla information eller ärenden till nästa steg i en process. Det är vanligt i myndighets- och organisationsspråk.",
  },
  {
    id: "part-gym-15",
    type: "multiple-choice",
    category: "partikelverb",
    ageGroup: "gymnasiet",
    instruction: "Vad betyder partikelverbet?",
    prompt: "Vad betyder 'att ta sig an en uppgift'?",
    options: [
      "Att börja arbeta med och åta sig en uppgift",
      "Att tacka nej till en uppgift",
      "Att delegera en uppgift till någon annan",
    ],
    correct: 0,
    explanation:
      "'Ta sig an' betyder att åta sig och börja arbeta med något, ofta med engagemang. Det är formellt och vanligt i arbets- och utbildningssammanhang: 'Hon tog sig an utmaningen.'",
  },
];

// ---------------------------------------------------------------------------
// Exercises — Utökad ordföljd (advanced word order)
// ---------------------------------------------------------------------------

const UTOKAD_ORDFOLJD: SvaExercise[] = [
  // --- mellanstadiet (6) ---
  {
    id: "uord-mel-1",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj meningen med korrekt ordföljd.",
    options: [
      "Igår gick vi till skolan.",
      "Igår vi gick till skolan.",
      "Vi igår gick till skolan.",
    ],
    correct: 0,
    explanation:
      "När meningen börjar med ett tidsord (igår, idag, imorgon) måste verbet stå på plats två. Det kallas omvänd ordföljd eller inversion: Igår (1) + gick (2) + vi (3).",
  },
  {
    id: "uord-mel-2",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj rätt mening.",
    options: [
      "På sommaren åker vi till landet.",
      "På sommaren vi åker till landet.",
      "Vi på sommaren åker till landet.",
    ],
    correct: 0,
    explanation:
      "Inversion: när ett annat led än subjektet börjar meningen måste verbet fortfarande vara på plats 2. På sommaren (1) + åker (2) + vi (3).",
  },
  {
    id: "uord-mel-3",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt ordföljd efter 'Ibland'.",
    sentence: "Ibland ____ jag till biblioteket.",
    options: ["går", "jag går", "gick"],
    correct: "går",
    explanation:
      "Efter tidsord som 'ibland' kommer verbet direkt (plats 2), sedan subjektet: Ibland + går + jag. Verbet 'går' ska stå direkt efter 'ibland'.",
  },
  {
    id: "uord-mel-4",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj meningen med korrekt ordföljd.",
    options: [
      "Hemma hos mormor finns det alltid kakor.",
      "Hemma hos mormor det finns alltid kakor.",
      "Det hemma hos mormor finns alltid kakor.",
    ],
    correct: 0,
    explanation:
      "Platsadverbialet 'Hemma hos mormor' börjar meningen, så verbet 'finns' måste komma på plats 2: Hemma hos mormor (1) + finns (2) + det (3).",
  },
  {
    id: "uord-mel-5",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt ord för att få korrekt ordföljd.",
    sentence: "Förra veckan ____ vi en ny film.",
    options: ["såg", "vi såg", "har sett"],
    correct: "såg",
    explanation:
      "V2-regeln: verbet ska alltid stå på plats 2. 'Förra veckan' tar plats 1, sedan kommer verbet 'såg' direkt (plats 2), och subjektet 'vi' hamnar på plats 3.",
  },
  {
    id: "uord-mel-6",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj rätt mening.",
    options: [
      "I parken leker barnen varje dag.",
      "I parken barnen leker varje dag.",
      "Barnen i parken leker varje dag.",
    ],
    correct: 0,
    explanation:
      "Platsadverbialet 'I parken' står först, så verbet 'leker' måste komma på plats 2, och subjektet 'barnen' hamnar efter: I parken (1) + leker (2) + barnen (3).",
  },
  // --- mellanstadiet nya (5) ---
  {
    id: "uord-mel-7",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj meningen med korrekt ordföljd.",
    options: [
      "Varje morgon springer han till skolan.",
      "Varje morgon han springer till skolan.",
      "Han varje morgon springer till skolan.",
    ],
    correct: 0,
    explanation:
      "Tidsadverbialet 'Varje morgon' tar plats 1, och verbet 'springer' måste stå på plats 2 (inversion): Varje morgon (1) + springer (2) + han (3).",
  },
  {
    id: "uord-mel-8",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt ordföljd efter 'Där borta'.",
    sentence: "Där borta ____ min kompis.",
    options: ["bor", "min kompis bor", "borta bor"],
    correct: "bor",
    explanation:
      "Platsadverbialet 'Där borta' tar plats 1, så verbet 'bor' måste komma direkt (plats 2), sedan subjektet 'min kompis': Där borta (1) + bor (2) + min kompis (3).",
  },
  {
    id: "uord-mel-9",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj rätt mening.",
    options: [
      "Nästa vecka ska vi åka till farmor.",
      "Nästa vecka vi ska åka till farmor.",
      "Vi nästa vecka ska åka till farmor.",
    ],
    correct: 0,
    explanation:
      "Tidsadverbialet 'Nästa vecka' tar plats 1. Verbet 'ska' måste stå på plats 2: Nästa vecka (1) + ska (2) + vi (3) + åka till farmor.",
  },
  {
    id: "uord-mel-10",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt ordföljd efter 'Efter skolan'.",
    sentence: "Efter skolan ____ vi fotboll.",
    options: ["spelar", "vi spelar", "spelat"],
    correct: "spelar",
    explanation:
      "Tidsadverbialet 'Efter skolan' tar plats 1, så verbet 'spelar' kommer direkt efter (plats 2): Efter skolan (1) + spelar (2) + vi (3).",
  },
  {
    id: "uord-mel-11",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj meningen med korrekt ordföljd.",
    options: [
      "Under rasten lekte alla barn ute.",
      "Under rasten alla barn lekte ute.",
      "Alla barn under rasten lekte ute.",
    ],
    correct: 0,
    explanation:
      "Tidsadverbialet 'Under rasten' tar plats 1, verbet 'lekte' på plats 2 och subjektet 'alla barn' på plats 3: Under rasten (1) + lekte (2) + alla barn (3).",
  },
  // --- hogstadiet (10) ---
  {
    id: "uord-hog-1",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken bisats har rätt ordföljd?",
    prompt: "Välj bisatsen med korrekt ordföljd.",
    options: [
      "...att han inte kunde komma på festen.",
      "...att han kunde inte komma på festen.",
      "...att inte han kunde komma på festen.",
    ],
    correct: 0,
    explanation:
      "BIFF-regeln: i bisatser (efter 'att', 'om', 'när') står negationen 'inte' FÖRE det finita verbet. Rätt: 'att han inte kunde komma'. Fel: 'att han kunde inte komma'.",
  },
  {
    id: "uord-hog-2",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening har korrekt inversion?",
    prompt: "Välj meningen med rätt ordföljd efter bisatsen.",
    options: [
      "Eftersom det regnade, stannade vi inne.",
      "Eftersom det regnade, vi stannade inne.",
      "Eftersom det regnade, inne stannade vi.",
    ],
    correct: 0,
    explanation:
      "När en bisats (eftersom det regnade) står först i meningen, räknas hela bisatsen som plats 1. Verbet i huvudsatsen måste stå på plats 2: stannade (2) + vi (3).",
  },
  {
    id: "uord-hog-3",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt ordföljd i bisatsen.",
    sentence: "Jag vet att hon ____ brukar gå dit.",
    options: ["inte", "brukar inte", "inte brukar"],
    correct: "inte",
    explanation:
      "I bisatser placeras 'inte' före verbet (BIFF). 'Att hon inte brukar gå dit' — negationen 'inte' kommer före 'brukar'.",
  },
  {
    id: "uord-hog-4",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj korrekt mening.",
    options: [
      "Trots regnet gick vi ut.",
      "Trots regnet vi gick ut.",
      "Vi trots regnet gick ut.",
    ],
    correct: 0,
    explanation:
      "Prepositionsfraser som 'Trots regnet' tar plats 1, så verbet måste stå på plats 2: Trots regnet (1) + gick (2) + vi (3).",
  },
  {
    id: "uord-hog-5",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt ordföljd.",
    sentence: "Om du ____ vill komma, kan du stanna hemma.",
    options: ["inte", "vill inte", "inte vill"],
    correct: "inte",
    explanation:
      "BIFF-regeln: i bisatsen 'om du inte vill komma' står 'inte' före verbet 'vill'. I bisatser placeras alltid satsadverb (inte, aldrig, alltid) före det finita verbet.",
  },
  {
    id: "uord-hog-6",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj korrekt mening med inversion.",
    options: [
      "Sällan ser man en så fin solnedgång.",
      "Sällan man ser en så fin solnedgång.",
      "Man sällan ser en så fin solnedgång.",
    ],
    correct: 0,
    explanation:
      "Adverbet 'Sällan' på plats 1 kräver inversion: Sällan (1) + ser (2) + man (3). Det är ett vanligt mönster med frekvensadverb i början.",
  },
  {
    id: "uord-hog-7",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt ordföljd.",
    sentence: "Jag berättade att vi ____ aldrig hade varit där förut.",
    options: ["aldrig", "hade aldrig", "vi aldrig"],
    correct: "aldrig",
    explanation:
      "I bisatsen 'att vi aldrig hade varit där' placeras satsadverbet 'aldrig' före hjälpverbet 'hade' (BIFF-regeln).",
  },
  {
    id: "uord-hog-8",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening har rätt ordföljd i bisatsen?",
    prompt: "Välj korrekt mening.",
    options: [
      "Hon frågade om jag redan hade ätit.",
      "Hon frågade om jag hade redan ätit.",
      "Hon frågade om redan jag hade ätit.",
    ],
    correct: 0,
    explanation:
      "'Redan' är ett satsadverb och placeras i bisatser (efter 'om') före verbet: 'om jag redan hade ätit'. I huvudsats hade det hetat: 'Jag hade redan ätit.'",
  },
  {
    id: "uord-hog-9",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Välj korrekt mening.",
    options: [
      "Med stor glädje tog vi emot beskedet.",
      "Med stor glädje vi tog emot beskedet.",
      "Vi med stor glädje tog emot beskedet.",
    ],
    correct: 0,
    explanation:
      "Prepositionsfrasen 'Med stor glädje' tar plats 1, och verbet måste stå direkt efter (plats 2): tog (2) + vi (3).",
  },
  {
    id: "uord-hog-10",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt satsadverb på rätt plats.",
    sentence: "Hon sa att hon ____ kanske skulle åka till Paris.",
    options: ["kanske", "skulle kanske", "kanske skulle"],
    correct: "kanske",
    explanation:
      "I bisatsen placeras satsadverbet 'kanske' före det finita verbet: 'att hon kanske skulle åka'. BIFF-regeln gäller alla satsadverb: inte, aldrig, alltid, kanske, nog.",
  },
  // --- hogstadiet nya (5) ---
  {
    id: "uord-hog-11",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening har rätt ordföljd med relativsats?",
    prompt: "Välj meningen med korrekt ordföljd.",
    options: [
      "Boken som jag läste var spännande.",
      "Boken som läste jag var spännande.",
      "Boken jag som läste var spännande.",
    ],
    correct: 0,
    explanation:
      "I en relativsats (som inleds med 'som') gäller rak ordföljd: 'som jag läste'. Subjektet 'jag' kommer före verbet 'läste' precis som i en vanlig bisats.",
  },
  {
    id: "uord-hog-12",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt ordföljd med formellt subjekt.",
    sentence: "____ sitter en katt på taket.",
    options: ["Det", "Där", "En"],
    correct: "Det",
    explanation:
      "'Det' används som formellt subjekt (platshållare) när det egentliga subjektet ('en katt') kommer senare i meningen: Det (formellt subjekt) + sitter (verb) + en katt (egentligt subjekt).",
  },
  {
    id: "uord-hog-13",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening använder formellt subjekt 'det' korrekt?",
    prompt: "Välj korrekt mening.",
    options: [
      "Det finns många skäl att läsa mer.",
      "Finns det många skäl att läsa mer.",
      "Många skäl det finns att läsa mer.",
    ],
    correct: 0,
    explanation:
      "'Det finns' är en fast konstruktion med formellt subjekt. 'Det' är en platshållare och det egentliga subjektet ('många skäl') kommer efter verbet.",
  },
  {
    id: "uord-hog-14",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt ordföljd i relativsatsen.",
    sentence: "Läraren som ____ oss i matte är snäll.",
    options: ["undervisar", "oss undervisar", "undervisar oss"],
    correct: "undervisar",
    explanation:
      "I relativsatsen 'som undervisar oss' kommer verbet 'undervisar' direkt efter 'som'. Objektet 'oss' är redan del av resten. 'Som' ersätter subjektet, och verbet följer direkt.",
  },
  {
    id: "uord-hog-15",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening har rätt ordföljd med 'det' som formellt subjekt?",
    prompt: "Välj korrekt mening.",
    options: [
      "Det regnar ute idag.",
      "Regnar det ute idag.",
      "Ute det regnar idag.",
    ],
    correct: 0,
    explanation:
      "'Det regnar' är en opersonlig konstruktion där 'det' fungerar som formellt subjekt. Väderbeskrivningar i svenska kräver 'det': det regnar, det snöar, det blåser.",
  },
  // --- gymnasiet (9) ---
  {
    id: "uord-gym-1",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Analysera ordföljden i den komplexa meningen.",
    prompt: "Vilken mening har korrekt ordföljd?",
    options: [
      "Inte bara argumenterade hon övertygande, utan hon presenterade också nya bevis.",
      "Inte bara hon argumenterade övertygande, utan hon presenterade också nya bevis.",
      "Inte bara argumenterade övertygande hon, utan hon presenterade också nya bevis.",
    ],
    correct: 0,
    explanation:
      "Konstruktionen 'Inte bara...utan också' kräver inversion i första ledet: Inte bara (1) + argumenterade (2) + hon (3). Det är en emfatisk konstruktion vanlig i formell text.",
  },
  {
    id: "uord-gym-2",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt platshållare.",
    sentence: "____ är viktigt att alla förstår reglerna.",
    options: ["Det", "Att", "Där"],
    correct: "Det",
    explanation:
      "Formellt subjekt 'det' (platshållare) används när det egentliga subjektet ('att alla förstår reglerna') står senare i meningen. Det kallas utbrytning och är vanligt i formell svenska.",
  },
  {
    id: "uord-gym-3",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening använder formellt subjekt korrekt?",
    prompt: "Välj den mest korrekta formella meningen.",
    options: [
      "Det framgår av rapporten att utsläppen minskar.",
      "Att utsläppen minskar framgår av rapporten det.",
      "Framgår det av rapporten att utsläppen minskar.",
    ],
    correct: 0,
    explanation:
      "'Det' fungerar som formellt subjekt (platshållare) i början av meningen. Den egentliga informationen ('att utsläppen minskar') kommer sist. Det är en typisk struktur i akademisk text.",
  },
  {
    id: "uord-gym-4",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt ordföljd i den formella meningen.",
    sentence: "Av resultaten kan ____ att hypotesen stämmer.",
    options: ["man dra slutsatsen", "dra man slutsatsen", "slutsatsen dra man"],
    correct: "man dra slutsatsen",
    explanation:
      "Prepositionsfrasen 'Av resultaten' tar plats 1, hjälpverbet 'kan' tar plats 2, sedan subjektet 'man': Av resultaten (1) + kan (2) + man (3) + dra slutsatsen.",
  },
  {
    id: "uord-gym-5",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening har bäst ordföljd i formellt skriftspråk?",
    prompt: "Välj den formellt korrekta meningen.",
    options: [
      "Det kan konstateras att metoden ger tillförlitliga resultat.",
      "Att metoden ger tillförlitliga resultat det kan konstateras.",
      "Konstateras det kan att metoden ger tillförlitliga resultat.",
    ],
    correct: 0,
    explanation:
      "Formellt subjekt 'det' + passiv form ('kan konstateras') + att-sats är en klassisk akademisk konstruktion. Det formella subjektet ger meningen en objektiv och vetenskaplig ton.",
  },
  {
    id: "uord-gym-6",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt ord.",
    sentence: "____ bör noteras att studien har vissa begränsningar.",
    options: ["Det", "Här", "Att"],
    correct: "Det",
    explanation:
      "'Det bör noteras att...' är en vanlig akademisk fras med formellt subjekt. 'Det' är en platshållare för bisatsen 'att studien har vissa begränsningar'.",
  },
  {
    id: "uord-gym-7",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Analysera ordföljden i den komplexa konstruktionen.",
    prompt: "Vilken mening har korrekt ordföljd med dubbla bisatser?",
    options: [
      "Om man inte hade investerat i forskning, skulle resultaten inte ha blivit så bra.",
      "Om man hade inte investerat i forskning, skulle resultaten inte ha blivit så bra.",
      "Om man inte hade investerat i forskning, resultaten skulle inte ha blivit så bra.",
    ],
    correct: 0,
    explanation:
      "Två regler samverkar: (1) bisatsen ('om man inte hade investerat') följer BIFF med 'inte' före verbet, och (2) huvudsatsen har inversion ('skulle resultaten') eftersom bisatsen står först.",
  },
  {
    id: "uord-gym-8",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt konstruktion.",
    sentence: "Enligt forskarna ____ att klimatförändringarna accelererar.",
    options: ["är det tydligt", "det är tydligt", "tydligt är det"],
    correct: "är det tydligt",
    explanation:
      "'Enligt forskarna' tar plats 1, så verbet 'är' måste stå på plats 2 (inversion): Enligt forskarna (1) + är (2) + det (3) + tydligt.",
  },
  {
    id: "uord-gym-9",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening har korrekt formell ordföljd?",
    prompt: "Välj den mest formellt korrekta meningen.",
    options: [
      "Vad som dock bör understrykas är att resultaten varierar.",
      "Vad som dock bör understrykas, resultaten varierar.",
      "Dock bör understrykas vad som resultaten varierar.",
    ],
    correct: 0,
    explanation:
      "'Vad som...är att...' är en komplex emfatisk konstruktion vanlig i akademisk text. Hela vad-satsen fungerar som subjekt, och 'är' som verb. Det ger tyngd åt det som framhävs.",
  },
  // --- gymnasiet nya (5) ---
  {
    id: "uord-gym-10",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening har korrekt passiv ordföljd?",
    prompt: "Välj meningen med korrekt ordföljd.",
    options: [
      "Boken skrevs av en okänd författare på 1800-talet.",
      "Boken av en okänd författare skrevs på 1800-talet.",
      "Skrevs boken av en okänd författare på 1800-talet.",
    ],
    correct: 0,
    explanation:
      "I passiva påståendesatser gäller samma V2-regel: Subjektet 'Boken' (1) + passivt verb 'skrevs' (2) + agent 'av en okänd författare' + tidsadverbial.",
  },
  {
    id: "uord-gym-11",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt konstruktion för en klyvningssats.",
    sentence: "____ var hon som vann tävlingen.",
    options: ["Det", "Hon", "Vem"],
    correct: "Det",
    explanation:
      "Klyvningssatser (cleft sentences) inleds med 'Det var...som...'. De används för att framhäva en viss del av meningen: 'Det var hon som vann' betonar att det var just hon.",
  },
  {
    id: "uord-gym-12",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Vilken klyvningssats har korrekt ordföljd?",
    prompt: "Välj den korrekta klyvningssatsen.",
    options: [
      "Det är i den här frågan som åsikterna går isär.",
      "I den här frågan det är som åsikterna går isär.",
      "Som åsikterna går isär det är i den här frågan.",
    ],
    correct: 0,
    explanation:
      "Klyvningssatsen 'Det är...som...' lyfter fram det viktiga ledet. Här framhävs 'i den här frågan': Det är (verb) + i den här frågan (fokus) + som (bisatsinledare) + åsikterna går isär.",
  },
  {
    id: "uord-gym-13",
    type: "fill-in-blank",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt ordföljd i den passiva konstruktionen.",
    sentence: "Resultaten ____ av forskarna vid Lunds universitet.",
    options: ["presenterades", "presenterade", "har presenteras"],
    correct: "presenterades",
    explanation:
      "Passiv form med s-passiv: 'presenterades' (preteritum passiv av 'presentera'). I akademisk text är passiv konstruktion vanlig för att skapa objektivitet.",
  },
  {
    id: "uord-gym-14",
    type: "multiple-choice",
    category: "utokad-ordfoljd",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening har korrekt ordföljd med passiv och inversion?",
    prompt: "Välj meningen med korrekt ordföljd.",
    options: [
      "Av flera forskare har det hävdats att teorin är felaktig.",
      "Av flera forskare det har hävdats att teorin är felaktig.",
      "Har det hävdats av flera forskare att teorin är felaktig.",
    ],
    correct: 0,
    explanation:
      "Prepositionsfrasen 'Av flera forskare' tar plats 1. Hjälpverbet 'har' måste stå på plats 2 (inversion), sedan det formella subjektet 'det': Av flera forskare (1) + har (2) + det (3) + hävdats.",
  },
];

// ---------------------------------------------------------------------------
// Exercises — Fler prepositioner
// ---------------------------------------------------------------------------

const FLER_PREPOSITIONER: SvaExercise[] = [
  // --- mellanstadiet (8) ---
  {
    id: "prep2-mel-1",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt preposition för tid.",
    sentence: "Vi har lektion ____ måndag.",
    options: ["på", "i", "till"],
    correct: "på",
    explanation:
      "Man säger PÅ + veckodagar: på måndag, på tisdag, på fredag. Men: I morgon, I maj, I somras. Veckodagar använder alltid 'på'.",
  },
  {
    id: "prep2-mel-2",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Skolan börjar ____ augusti.",
    options: ["i", "på", "till"],
    correct: "i",
    explanation:
      "Man säger I + månader: i januari, i februari, i augusti. Men: PÅ + veckodagar, PÅ + morgonen/kvällen.",
  },
  {
    id: "prep2-mel-3",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "mellanstadiet",
    instruction: "Vilken preposition är rätt?",
    prompt: "Vi bor ____ Storgatan 5.",
    options: ["på", "i", "vid"],
    correct: 0,
    explanation:
      "Man bor PÅ en gata: på Storgatan, på Kungsgatan. Men man bor I en stad eller ett land: i Stockholm, i Sverige.",
  },
  {
    id: "prep2-mel-4",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Jag ska resa ____ Spanien i sommar.",
    options: ["till", "på", "i"],
    correct: "till",
    explanation:
      "Man reser TILL ett land (rörelse mot en plats): till Spanien, till skolan, till Stockholm. Man är I ett land (befinner sig där): i Spanien.",
  },
  {
    id: "prep2-mel-5",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Mötet börjar ____ klockan tre.",
    options: ["klockan", "på", "vid"],
    correct: "klockan",
    explanation:
      "På svenska kan man säga 'klockan tre' utan preposition, eller 'vid klockan tre'. Man säger INTE 'på klockan tre'. Enklast: 'Mötet börjar klockan tre.'",
  },
  {
    id: "prep2-mel-6",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening är korrekt?",
    prompt: "Välj rätt mening.",
    options: [
      "Vi spelar fotboll på lördagar.",
      "Vi spelar fotboll i lördagar.",
      "Vi spelar fotboll till lördagar.",
    ],
    correct: 0,
    explanation:
      "PÅ + veckodagar (både enstaka och regelbundna): på lördag, på lördagar. Det gäller alla veckodagar.",
  },
  {
    id: "prep2-mel-7",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Barnen leker ____ gården.",
    options: ["på", "i", "till"],
    correct: "på",
    explanation:
      "Man är PÅ en öppen yta: på gården, på gatan, på stranden. Man är I ett slutet rum: i huset, i klassrummet.",
  },
  {
    id: "prep2-mel-8",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "mellanstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Pappa arbetar ____ sjukhuset.",
    options: ["på", "i", "till"],
    correct: "på",
    explanation:
      "Man arbetar PÅ en arbetsplats: på sjukhuset, på kontoret, på skolan. 'På' används för de flesta institutioner och arbetsplatser.",
  },
  // --- hogstadiet (9) ---
  {
    id: "prep2-hog-1",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Vi diskuterade ____ framtiden i flera timmar.",
    options: ["om", "för", "på"],
    correct: "om",
    explanation:
      "Man diskuterar OM ett ämne. 'Om' används med kommunikationsverb: prata om, berätta om, diskutera om, skriva om.",
  },
  {
    id: "prep2-hog-2",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Hon är rädd ____ spindlar.",
    options: ["för", "av", "om"],
    correct: "för",
    explanation:
      "Man är rädd FÖR något. Det är en fast prepositionskombination. Andra liknande: glad för, tacksam för, ansvarig för.",
  },
  {
    id: "prep2-hog-3",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Vilken preposition passar?",
    prompt: "Boken handlar ____ en ung tjej som reser världen runt.",
    options: ["om", "för", "med"],
    correct: 0,
    explanation:
      "Något handlar OM något. 'Om' är den rätta prepositionen med verbet 'handla' när det gäller innehåll: filmen handlar om, boken handlar om.",
  },
  {
    id: "prep2-hog-4",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Han drömmer ____ att bli läkare.",
    options: ["om", "för", "av"],
    correct: "om",
    explanation:
      "Man drömmer OM något (önskedröm): 'drömma om att bli läkare'. Man kan också 'drömma om' på natten. I båda fallen: drömma + om.",
  },
  {
    id: "prep2-hog-5",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Vi åkte dit ____ bil.",
    options: ["med", "i", "på"],
    correct: "med",
    explanation:
      "Man reser MED ett fordon: med bil, med tåg, med buss, med flyg. Prepositionen 'med' anger sättet man reser på.",
  },
  {
    id: "prep2-hog-6",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Vilken preposition är rätt?",
    prompt: "Huset är byggt ____ trä.",
    options: ["av", "med", "i"],
    correct: 0,
    explanation:
      "Något är gjort AV ett material: av trä, av sten, av glas. 'Av' visar vad materialet är. 'Med' anger ett verktyg: byggt med hammare.",
  },
  {
    id: "prep2-hog-7",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Hon är bra ____ matte.",
    options: ["på", "i", "med"],
    correct: "på",
    explanation:
      "Man är bra PÅ ett ämne eller en aktivitet: bra på matte, bra på att simma, bra på fotboll. Det är en fast kombination: bra + på.",
  },
  {
    id: "prep2-hog-8",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Läraren blev arg ____ eleven som stökade.",
    options: ["på", "för", "med"],
    correct: "på",
    explanation:
      "Man blir arg PÅ en person: arg på honom, arg på eleven. Men man blir arg ÖVER en situation: arg över beslutet. Person = på, situation = över.",
  },
  {
    id: "prep2-hog-9",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "hogstadiet",
    instruction: "Vilken preposition passar?",
    prompt: "Jag är nöjd ____ mitt betyg.",
    options: ["med", "av", "för"],
    correct: 0,
    explanation:
      "Man är nöjd MED något: nöjd med betyget, nöjd med resultatet. 'Med' anger det man är nöjd över.",
  },
  // --- gymnasiet (8) ---
  {
    id: "prep2-gym-1",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt akademiskt prepositionsuttryck.",
    sentence: "Beslutet fattades ____ gällande lagstiftning.",
    options: ["i enlighet med", "med avseende på", "i förhållande till"],
    correct: "i enlighet med",
    explanation:
      "'I enlighet med' betyder 'i överensstämmelse med' och används i formella sammanhang. Beslutet följde lagen, alltså fattades det 'i enlighet med' lagstiftningen.",
  },
  {
    id: "prep2-gym-2",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt prepositionsuttryck.",
    prompt: "Resultatet var bra ____ de förutsättningar som fanns.",
    options: [
      "med tanke på",
      "i enlighet med",
      "med avseende på",
    ],
    correct: 0,
    explanation:
      "'Med tanke på' betyder 'om man tänker på / tar hänsyn till'. Det anger att bedömningen görs i ljuset av vissa omständigheter.",
  },
  {
    id: "prep2-gym-3",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt prepositionsuttryck.",
    sentence: "Kostnaderna har ökat ____ förra året.",
    options: ["i förhållande till", "i enlighet med", "med avseende på"],
    correct: "i förhållande till",
    explanation:
      "'I förhållande till' anger en jämförelse: kostnaderna nu jämfört med förra året. Det är vanligt i akademisk och ekonomisk text.",
  },
  {
    id: "prep2-gym-4",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening använder prepositionsuttrycket korrekt?",
    prompt: "Vilken mening är korrekt?",
    options: [
      "Med avseende på hållbarhet är metod A att föredra.",
      "I avseende på hållbarhet är metod A att föredra.",
      "Med avseende för hållbarhet är metod A att föredra.",
    ],
    correct: 0,
    explanation:
      "'Med avseende på' är det korrekta uttrycket, som betyder 'vad gäller' eller 'angående'. Det används i formell och akademisk text för att specificera vilken aspekt som diskuteras.",
  },
  {
    id: "prep2-gym-5",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt prepositionsuttryck.",
    sentence: "Analysen genomfördes ____ etablerade metoder.",
    options: ["i enlighet med", "i förhållande till", "med tanke på"],
    correct: "i enlighet med",
    explanation:
      "'I enlighet med' anger att något gjordes enligt eller i överensstämmelse med något. Analysen följde de etablerade metoderna.",
  },
  {
    id: "prep2-gym-6",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt preposition.",
    sentence: "Studien bidrar ____ ökad förståelse av fenomenet.",
    options: ["till", "med", "för"],
    correct: "till",
    explanation:
      "Något bidrar TILL något. I akademisk text: 'bidra till kunskap', 'bidra till förståelse', 'bidra till utveckling'. 'Till' anger resultatet av bidraget.",
  },
  {
    id: "prep2-gym-7",
    type: "multiple-choice",
    category: "prepositioner",
    ageGroup: "gymnasiet",
    instruction: "Vilken preposition passar i det akademiska sammanhanget?",
    prompt: "Resultaten visar ____ att fler studier behövs.",
    options: ["på", "till", "om"],
    correct: 0,
    explanation:
      "'Visa på' i akademisk text betyder att indikera eller peka mot. 'Resultaten visar på att...' anger att det finns tecken som tyder på något.",
  },
  {
    id: "prep2-gym-8",
    type: "fill-in-blank",
    category: "prepositioner",
    ageGroup: "gymnasiet",
    instruction: "Fyll i rätt prepositionsuttryck.",
    sentence: "Teorin utvecklades ____ tidigare forskning inom området.",
    options: ["på grundval av", "i enlighet med", "med avseende på"],
    correct: "på grundval av",
    explanation:
      "'På grundval av' betyder 'baserat på' och anger att något bygger på eller utgår ifrån något annat. Det är vanligt i akademiska texter: 'på grundval av data', 'på grundval av forskning'.",
  },
];

// ---------------------------------------------------------------------------
// All exercises combined
// ---------------------------------------------------------------------------

export const SVA_EXERCISES: SvaExercise[] = [
  ...PREPOSITIONER,
  ...GENUS,
  ...ORDFOLJD,
  ...VANLIGA_FEL,
  ...PARTIKELVERB,
  ...UTOKAD_ORDFOLJD,
  ...FLER_PREPOSITIONER,
];
