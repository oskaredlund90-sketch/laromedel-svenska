import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types (discriminated union)
// ---------------------------------------------------------------------------

export type SvaCategory =
  | "prepositioner"
  | "genus"
  | "ordfoljd"
  | "vanliga-fel";

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
      "Äpple är ett ett-ord. Tips: många ord som slutar på -e är ett-ord, som ett äpple, ett borde. Men inte alla!",
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
      "Förslag är ett ett-ord. Många substantiv som slutar på -slag är ett-ord: ett förslag, ett tilslag, ett utslag.",
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
];

// ---------------------------------------------------------------------------
// All exercises combined
// ---------------------------------------------------------------------------

export const SVA_EXERCISES: SvaExercise[] = [
  ...PREPOSITIONER,
  ...GENUS,
  ...ORDFOLJD,
  ...VANLIGA_FEL,
];
