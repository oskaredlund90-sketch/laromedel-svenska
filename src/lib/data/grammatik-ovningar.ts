import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types (discriminated union)
// ---------------------------------------------------------------------------

export type GrammarExerciseType =
  | "multiple-choice"
  | "fill-in-blank"
  | "error-correction"
  | "categorization"
  | "sentence-analysis";

export interface GrammarExerciseBase {
  id: string;
  topic: string;
  ageGroup: AgeGroup;
  instruction: string;
  relatedTextSlug?: string;
}

export interface MultipleChoiceExercise extends GrammarExerciseBase {
  type: "multiple-choice";
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface FillInBlankExercise extends GrammarExerciseBase {
  type: "fill-in-blank";
  sentence: string;
  options: string[];
  correct: string;
  explanation: string;
}

export interface ErrorCorrectionExercise extends GrammarExerciseBase {
  type: "error-correction";
  sentence: string;
  correctedSentence: string;
  errorWord: string;
  correctWord: string;
  explanation: string;
}

export interface CategorizationExercise extends GrammarExerciseBase {
  type: "categorization";
  items: string[];
  categories: string[];
  correctMapping: Record<string, string>;
}

export interface SentenceAnalysisExercise extends GrammarExerciseBase {
  type: "sentence-analysis";
  sentence: string;
  parts: { text: string; role: string }[];
  roleOptions: string[];
}

export type GrammarExercise =
  | MultipleChoiceExercise
  | FillInBlankExercise
  | ErrorCorrectionExercise
  | CategorizationExercise
  | SentenceAnalysisExercise;

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

export function getExercisesForTopic(
  topic: string,
  ageGroup: AgeGroup,
): GrammarExercise[] {
  return GRAMMAR_EXERCISES.filter(
    (e) => e.topic === topic && e.ageGroup === ageGroup,
  );
}

// ---------------------------------------------------------------------------
// 1. ORDKLASSER  (~40 exercises)
// ---------------------------------------------------------------------------

const ordklasserLagstadietMC: MultipleChoiceExercise[] = [
  {
    id: "ordklasser-mc-lag-1",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    relatedTextSlug: "katten-som-rymde",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Katten *sover* i soffan.",
    options: ["Substantiv", "Verb", "Adjektiv"],
    correct: 1,
    explanation: "'Sover' är ett verb eftersom det beskriver vad katten gör.",
  },
  {
    id: "ordklasser-mc-lag-2",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Den *stora* hunden skallde.",
    options: ["Substantiv", "Verb", "Adjektiv"],
    correct: 2,
    explanation:
      "'Stora' är ett adjektiv eftersom det beskriver hur hunden ser ut.",
  },
  {
    id: "ordklasser-mc-lag-3",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    relatedTextSlug: "forsta-dagen-i-skolan",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Vi åkte till *skolan* idag.",
    options: ["Substantiv", "Verb", "Adjektiv"],
    correct: 0,
    explanation:
      "'Skolan' är ett substantiv eftersom det är namnet på en plats.",
  },
  {
    id: "ordklasser-mc-lag-4",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Pappa *lagar* mat varje dag.",
    options: ["Adjektiv", "Substantiv", "Verb"],
    correct: 2,
    explanation: "'Lagar' är ett verb eftersom det beskriver en handling.",
  },
  {
    id: "ordklasser-mc-lag-5",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Jag har en *röd* cykel.",
    options: ["Verb", "Adjektiv", "Substantiv"],
    correct: 1,
    explanation: "'Röd' är ett adjektiv som beskriver cykelns färg.",
  },
  {
    id: "ordklasser-mc-lag-6",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Min *kompis* heter Elsa.",
    options: ["Substantiv", "Verb", "Adjektiv"],
    correct: 0,
    explanation: "'Kompis' är ett substantiv eftersom det benämner en person.",
  },
  {
    id: "ordklasser-mc-lag-7",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Barnen *leker* på gården.",
    options: ["Adjektiv", "Verb", "Substantiv"],
    correct: 1,
    explanation: "'Leker' är ett verb som talar om vad barnen gör.",
  },
  {
    id: "ordklasser-mc-lag-8",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    relatedTextSlug: "vinternatten",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Det var en *kall* vinter.",
    options: ["Substantiv", "Verb", "Adjektiv"],
    correct: 2,
    explanation: "'Kall' är ett adjektiv som beskriver hur vintern var.",
  },
];

const ordklasserLagstadietCat: CategorizationExercise[] = [
  {
    id: "ordklasser-cat-lag-1",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Sortera orden i rätt ordklass.",
    items: ["hund", "springa", "glad", "bok", "sjunga", "liten"],
    categories: ["Substantiv", "Verb", "Adjektiv"],
    correctMapping: {
      hund: "Substantiv",
      springa: "Verb",
      glad: "Adjektiv",
      bok: "Substantiv",
      sjunga: "Verb",
      liten: "Adjektiv",
    },
  },
  {
    id: "ordklasser-cat-lag-2",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Sortera orden i rätt ordklass.",
    items: ["sol", "hoppa", "fin", "stol", "mata", "stor"],
    categories: ["Substantiv", "Verb", "Adjektiv"],
    correctMapping: {
      sol: "Substantiv",
      hoppa: "Verb",
      fin: "Adjektiv",
      stol: "Substantiv",
      mata: "Verb",
      stor: "Adjektiv",
    },
  },
];

const ordklasserMellanstadietMC: MultipleChoiceExercise[] = [
  {
    id: "ordklasser-mc-mel-1",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    relatedTextSlug: "skatten-i-skogen",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Flickan sprang *snabbt* över gården.",
    options: ["Adjektiv", "Adverb", "Verb", "Pronomen"],
    correct: 1,
    explanation:
      "'Snabbt' är ett adverb eftersom det beskriver hur flickan sprang.",
  },
  {
    id: "ordklasser-mc-mel-2",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "*Hon* gillar att läsa böcker.",
    options: ["Substantiv", "Pronomen", "Verb", "Adverb"],
    correct: 1,
    explanation:
      "'Hon' är ett pronomen eftersom det står i stället för ett namn.",
  },
  {
    id: "ordklasser-mc-mel-3",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Vi *aldrig* glömmer den dagen.",
    options: ["Verb", "Adjektiv", "Adverb", "Substantiv"],
    correct: 2,
    explanation:
      "'Aldrig' är ett adverb som beskriver när eller hur ofta något sker.",
  },
  {
    id: "ordklasser-mc-mel-4",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "*Deras* hus ligger vid sjön.",
    options: ["Adverb", "Adjektiv", "Pronomen", "Substantiv"],
    correct: 2,
    explanation:
      "'Deras' är ett pronomen (possessivt) som visar vem huset tillhör.",
  },
  {
    id: "ordklasser-mc-mel-5",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Pojken sprang *längre* an sin bror.",
    options: ["Adjektiv", "Adverb", "Verb", "Pronomen"],
    correct: 1,
    explanation:
      "'Längre' är ett adverb i komparativ form som beskriver hur pojken sprang.",
  },
  {
    id: "ordklasser-mc-mel-6",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Katten satt *där* hela dagen.",
    options: ["Pronomen", "Substantiv", "Adverb", "Adjektiv"],
    correct: 2,
    explanation: "'Där' är ett adverb som beskriver var katten satt.",
  },
  {
    id: "ordklasser-mc-mel-7",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "*Ingen* visste svaret på frågan.",
    options: ["Adjektiv", "Substantiv", "Pronomen", "Adverb"],
    correct: 2,
    explanation:
      "'Ingen' är ett pronomen (indefinit) som står i stället för en person.",
  },
  {
    id: "ordklasser-mc-mel-8",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Han skrattade *högt* åt skämtet.",
    options: ["Verb", "Adverb", "Adjektiv", "Pronomen"],
    correct: 1,
    explanation: "'Högt' är ett adverb som beskriver hur han skrattade.",
  },
];

const ordklasserMellanstadietCat: CategorizationExercise[] = [
  {
    id: "ordklasser-cat-mel-1",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Sortera orden i rätt ordklass.",
    items: ["han", "fort", "vacker", "springa", "hus", "alltid"],
    categories: ["Pronomen", "Adverb", "Adjektiv", "Verb", "Substantiv"],
    correctMapping: {
      han: "Pronomen",
      fort: "Adverb",
      vacker: "Adjektiv",
      springa: "Verb",
      hus: "Substantiv",
      alltid: "Adverb",
    },
  },
  {
    id: "ordklasser-cat-mel-2",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Sortera orden i rätt ordklass.",
    items: ["de", "sakta", "gammal", "skriva", "träd", "ofta"],
    categories: ["Pronomen", "Adverb", "Adjektiv", "Verb", "Substantiv"],
    correctMapping: {
      de: "Pronomen",
      sakta: "Adverb",
      gammal: "Adjektiv",
      skriva: "Verb",
      "träd": "Substantiv",
      ofta: "Adverb",
    },
  },
];

const ordklasserHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "ordklasser-mc-hog-1",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    relatedTextSlug: "nyckeln",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Boken låg *på* bordet.",
    options: ["Adverb", "Konjunktion", "Preposition", "Pronomen"],
    correct: 2,
    explanation:
      "'På' är en preposition som visar var något befinner sig i förhållande till något annat.",
  },
  {
    id: "ordklasser-mc-hog-2",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Lisa *och* Erik gick hem.",
    options: ["Preposition", "Konjunktion", "Adverb", "Pronomen"],
    correct: 1,
    explanation:
      "'Och' är en konjunktion som binder samman två delar av meningen.",
  },
  {
    id: "ordklasser-mc-hog-3",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Han sprang *mot* målet.",
    options: ["Konjunktion", "Adverb", "Pronomen", "Preposition"],
    correct: 3,
    explanation: "'Mot' är en preposition som anger riktning.",
  },
  {
    id: "ordklasser-mc-hog-4",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    relatedTextSlug: "sista-sommaren",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Jag ville gå, *men* regnet hindrade mig.",
    options: ["Preposition", "Adverb", "Konjunktion", "Pronomen"],
    correct: 2,
    explanation:
      "'Men' är en konjunktion som binder samman två satser med en kontrast.",
  },
  {
    id: "ordklasser-mc-hog-5",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Paket lag *under* julgranen.",
    options: ["Adverb", "Preposition", "Konjunktion", "Adjektiv"],
    correct: 1,
    explanation:
      "'Under' är en preposition som anger var paketen lag i förhållande till julgranen.",
  },
  {
    id: "ordklasser-mc-hog-6",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Vi äter middag *innan* vi går ut.",
    options: ["Preposition", "Adverb", "Konjunktion", "Pronomen"],
    correct: 2,
    explanation:
      "'Innan' är en konjunktion (subjunktion) som inleder en bisats.",
  },
  {
    id: "ordklasser-mc-hog-7",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Eleverna satt *bredvid* varandra.",
    options: ["Konjunktion", "Adjektiv", "Preposition", "Verb"],
    correct: 2,
    explanation: "'Bredvid' är en preposition som anger en rumslig relation.",
  },
  {
    id: "ordklasser-mc-hog-8",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Hon studerar *för att* hon vill bli läkare.",
    options: ["Preposition", "Konjunktion", "Adverb", "Pronomen"],
    correct: 1,
    explanation:
      "'För att' är en konjunktion (subjunktion) som anger orsak och inleder en bisats.",
  },
];

const ordklasserHogstadietCat: CategorizationExercise[] = [
  {
    id: "ordklasser-cat-hog-1",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Sortera orden i rätt ordklass.",
    items: ["på", "och", "under", "men", "bakom", "eller"],
    categories: ["Preposition", "Konjunktion"],
    correctMapping: {
      "på": "Preposition",
      och: "Konjunktion",
      under: "Preposition",
      men: "Konjunktion",
      bakom: "Preposition",
      eller: "Konjunktion",
    },
  },
  {
    id: "ordklasser-cat-hog-2",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Sortera orden i rätt ordklass.",
    items: ["fort", "hon", "vacker", "mot", "att", "bredvid"],
    categories: ["Adverb", "Pronomen", "Adjektiv", "Preposition", "Konjunktion"],
    correctMapping: {
      fort: "Adverb",
      hon: "Pronomen",
      vacker: "Adjektiv",
      mot: "Preposition",
      att: "Konjunktion",
      bredvid: "Preposition",
    },
  },
];

const ordklasserGymnasietMC: MultipleChoiceExercise[] = [
  {
    id: "ordklasser-mc-gym-1",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    relatedTextSlug: "granssnitt",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "*Ack*, vilken underbar utsikt!",
    options: ["Adverb", "Konjunktion", "Interjektion", "Pronomen"],
    correct: 2,
    explanation:
      "'Ack' är en interjektion, ett utrop som uttrycker en känslomässig reaktion.",
  },
  {
    id: "ordklasser-mc-gym-2",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Det var *den* bok jag sökte.",
    options: ["Pronomen", "Artikel", "Adjektiv", "Konjunktion"],
    correct: 1,
    explanation:
      "'Den' är har en artikel (bestämningsord) som pekar ut en specifik bok.",
  },
  {
    id: "ordklasser-mc-gym-3",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Hon hade *tre* katter hemma.",
    options: ["Adjektiv", "Räknord", "Adverb", "Pronomen"],
    correct: 1,
    explanation: "'Tre' är ett räknord (grundtal) som anger antalet katter.",
  },
  {
    id: "ordklasser-mc-gym-4",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Författaren använde ett *mycket* avancerat språk.",
    options: ["Adverb", "Adjektiv", "Pronomen", "Konjunktion"],
    correct: 0,
    explanation:
      "'Mycket' är ett adverb som gradbestämmer adjektivet 'avancerat'.",
  },
  {
    id: "ordklasser-mc-gym-5",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "*Ehuru* argumentet var starkt, övertygade det inte juryn.",
    options: ["Preposition", "Adverb", "Konjunktion", "Interjektion"],
    correct: 2,
    explanation:
      "'Ehuru' är en konjunktion (subjunktion) som betyder 'trots att' och inleder en bisats.",
  },
  {
    id: "ordklasser-mc-gym-6",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Det är *två* sidor av samma mynt.",
    options: ["Pronomen", "Adjektiv", "Räknord", "Adverb"],
    correct: 2,
    explanation: "'Två' är ett räknord som anger antal.",
  },
  {
    id: "ordklasser-mc-gym-7",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "*Hej*, vad roligt att träffas!",
    options: ["Adverb", "Konjunktion", "Pronomen", "Interjektion"],
    correct: 3,
    explanation:
      "'Hej' är en interjektion, ett hälsningsord som uttrycker en känslomässig reaktion.",
  },
  {
    id: "ordklasser-mc-gym-8",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhör det markerade ordet?",
    prompt: "Forskaren presenterade *sin* avhandling.",
    options: ["Artikel", "Pronomen", "Adjektiv", "Adverb"],
    correct: 1,
    explanation:
      "'Sin' är ett pronomen (possessivt reflexivt) som visar att avhandlingen tillhör forskaren.",
  },
];

const ordklasserGymnasietCat: CategorizationExercise[] = [
  {
    id: "ordklasser-cat-gym-1",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Sortera orden i rätt ordklass.",
    items: ["aj", "den", "fem", "bakom", "dock", "hennes"],
    categories: [
      "Interjektion",
      "Artikel",
      "Räknord",
      "Preposition",
      "Konjunktion",
      "Pronomen",
    ],
    correctMapping: {
      aj: "Interjektion",
      den: "Artikel",
      fem: "Räknord",
      bakom: "Preposition",
      dock: "Konjunktion",
      hennes: "Pronomen",
    },
  },
  {
    id: "ordklasser-cat-gym-2",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Sortera orden i rätt ordklass.",
    items: ["oj", "ett", "första", "genom", "således", "sig"],
    categories: [
      "Interjektion",
      "Artikel",
      "Räknord",
      "Preposition",
      "Konjunktion",
      "Pronomen",
    ],
    correctMapping: {
      oj: "Interjektion",
      ett: "Artikel",
      "första": "Räknord",
      genom: "Preposition",
      "således": "Konjunktion",
      sig: "Pronomen",
    },
  },
];

// ---------------------------------------------------------------------------
// 2. MENINGSBYGGNAD  (~24 exercises)
// ---------------------------------------------------------------------------

const meningsbyggnadMellanstadietSA: SentenceAnalysisExercise[] = [
  {
    id: "meningsbyggnad-sa-mel-1",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    relatedTextSlug: "igelkotten",
    instruction: "Markera subjekt, predikat och objekt i meningen.",
    sentence: "Hunden äter maten.",
    parts: [
      { text: "Hunden", role: "Subjekt" },
      { text: "äter", role: "Predikat" },
      { text: "maten", role: "Objekt" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt"],
  },
  {
    id: "meningsbyggnad-sa-mel-2",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    relatedTextSlug: "skatten-i-skogen",
    instruction: "Markera subjekt, predikat och objekt i meningen.",
    sentence: "Lisa läser en bok.",
    parts: [
      { text: "Lisa", role: "Subjekt" },
      { text: "läser", role: "Predikat" },
      { text: "en bok", role: "Objekt" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt"],
  },
  {
    id: "meningsbyggnad-sa-mel-3",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    instruction: "Markera subjekt, predikat och objekt i meningen.",
    sentence: "Barnen sjunger en sång.",
    parts: [
      { text: "Barnen", role: "Subjekt" },
      { text: "sjunger", role: "Predikat" },
      { text: "en sång", role: "Objekt" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt"],
  },
  {
    id: "meningsbyggnad-sa-mel-4",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    instruction: "Markera subjekt, predikat och adverbial i meningen.",
    sentence: "Vi springer i parken.",
    parts: [
      { text: "Vi", role: "Subjekt" },
      { text: "springer", role: "Predikat" },
      { text: "i parken", role: "Adverbial" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt", "Adverbial"],
  },
];

const meningsbyggnadMellanstadietMC: MultipleChoiceExercise[] = [
  {
    id: "meningsbyggnad-mc-mel-1",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    instruction: "Vad är subjektet i meningen?",
    prompt: "Katten sover på soffan.",
    options: ["sover", "Katten", "på soffan", "soffan"],
    correct: 1,
    explanation:
      "Subjektet är 'Katten' eftersom det är den som utför handlingen. Fråga: Vem sover?",
  },
  {
    id: "meningsbyggnad-mc-mel-2",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    instruction: "Vad är predikatet i meningen?",
    prompt: "Eleverna skriver en uppsats.",
    options: ["Eleverna", "en uppsats", "skriver", "uppsats"],
    correct: 2,
    explanation:
      "Predikatet är 'skriver' eftersom det är det som berättar vad subjektet gör.",
  },
  {
    id: "meningsbyggnad-mc-mel-3",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening är en fråga?",
    prompt: "Vilken mening är korrekt skriven som en frågemening?",
    options: [
      "Du gillar glass.",
      "Gillar du glass?",
      "Du gillar glass!",
      "Att du gillar glass.",
    ],
    correct: 1,
    explanation:
      "En frågemening börjar ofta med verbet före subjektet och slutar med frågetecken.",
  },
  {
    id: "meningsbyggnad-mc-mel-4",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    instruction: "Vad är objektet i meningen?",
    prompt: "Mamma bakar en kaka.",
    options: ["Mamma", "bakar", "en kaka", "en"],
    correct: 2,
    explanation:
      "Objektet är 'en kaka'. Fråga: Vad bakar mamma? Svaret är objektet.",
  },
];

const meningsbyggnadHogstadietSA: SentenceAnalysisExercise[] = [
  {
    id: "meningsbyggnad-sa-hog-1",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    relatedTextSlug: "tva-sprak",
    instruction:
      "Markera satsdelarna i meningen: subjekt, predikat, objekt och adverbial.",
    sentence: "På morgonen äter familjen frukost tillsammans.",
    parts: [
      { text: "På morgonen", role: "Adverbial" },
      { text: "äter", role: "Predikat" },
      { text: "familjen", role: "Subjekt" },
      { text: "frukost", role: "Objekt" },
      { text: "tillsammans", role: "Adverbial" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt", "Adverbial"],
  },
  {
    id: "meningsbyggnad-sa-hog-2",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Markera satsdelarna i meningen.",
    sentence: "Igår kotte eleverna en ny dikt i klassrummet.",
    parts: [
      { text: "Igår", role: "Adverbial" },
      { text: "kotte", role: "Predikat" },
      { text: "eleverna", role: "Subjekt" },
      { text: "en ny dikt", role: "Objekt" },
      { text: "i klassrummet", role: "Adverbial" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt", "Adverbial"],
  },
  {
    id: "meningsbyggnad-sa-hog-3",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Markera satsdelarna i meningen.",
    sentence: "Läraren gav eleverna en uppgift.",
    parts: [
      { text: "Läraren", role: "Subjekt" },
      { text: "gav", role: "Predikat" },
      { text: "eleverna", role: "Indirekt objekt" },
      { text: "en uppgift", role: "Direkt objekt" },
    ],
    roleOptions: [
      "Subjekt",
      "Predikat",
      "Direkt objekt",
      "Indirekt objekt",
      "Adverbial",
    ],
  },
  {
    id: "meningsbyggnad-sa-hog-4",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Markera satsdelarna i meningen.",
    sentence: "Under sommaren reste vi till Frankrike med tåget.",
    parts: [
      { text: "Under sommaren", role: "Adverbial" },
      { text: "reste", role: "Predikat" },
      { text: "vi", role: "Subjekt" },
      { text: "till Frankrike", role: "Adverbial" },
      { text: "med tåget", role: "Adverbial" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt", "Adverbial"],
  },
];

const meningsbyggnadHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "meningsbyggnad-mc-hog-1",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    relatedTextSlug: "ensam-i-storstaden",
    instruction: "Tillämpa BIFF-regeln. Var ska adverbet 'inte' placeras?",
    prompt: "Jag har ____ ätit frukost idag. (bisats: ...eftersom jag ____ har ätit frukost idag.)",
    options: [
      "Före verbet i bisats, efter verbet i huvudsats",
      "Efter verbet i både huvudsats och bisats",
      "Före verbet i både huvudsats och bisats",
      "Efter verbet i huvudsats, före verbet i bisats",
    ],
    correct: 3,
    explanation:
      "BIFF-regeln: I en Bisats kommer adverbet (Inte, aldrig, etc.) Före det Finita verbet. I huvudsats kommer adverbet efter verbet.",
  },
  {
    id: "meningsbyggnad-mc-hog-2",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Är det har en huvudsats eller en bisats?",
    prompt: "...eftersom det regnade ute.",
    options: ["Huvudsats", "Bisats"],
    correct: 1,
    explanation:
      "Det är en bisats eftersom den inleds med subjunktionen 'eftersom' och inte kan stå ensam.",
  },
  {
    id: "meningsbyggnad-mc-hog-3",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening följer BIFF-regeln korrekt i bisatsen?",
    prompt: "Välj den korrekta meningen.",
    options: [
      "Hon sa att hon hade inte tid.",
      "Hon sa att hon inte hade tid.",
      "Hon sa att inte hon hade tid.",
      "Hon sa inte att hon hade tid.",
    ],
    correct: 1,
    explanation:
      "I bisatsen 'att hon inte hade tid' står adverbet 'inte' före det finita verbet 'hade', vilket följer BIFF-regeln.",
  },
  {
    id: "meningsbyggnad-mc-hog-4",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Är det har en huvudsats eller en bisats?",
    prompt: "Vi gick hem tidigt.",
    options: ["Huvudsats", "Bisats"],
    correct: 0,
    explanation:
      "Det är en huvudsats eftersom den kan stå ensam som en fullständig mening och inleds inte med en subjunktion.",
  },
];

const meningsbyggnadGymnasietSA: SentenceAnalysisExercise[] = [
  {
    id: "meningsbyggnad-sa-gym-1",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    relatedTextSlug: "folkhemmet-dromsommar",
    instruction: "Analysera satsdelarna i denna litterära mening.",
    sentence:
      "Med en djup suck satte sig den gamla mannen i den slitna fåtöljen vid fönstret.",
    parts: [
      { text: "Med en djup suck", role: "Adverbial" },
      { text: "satte sig", role: "Predikat" },
      { text: "den gamla mannen", role: "Subjekt" },
      { text: "i den slitna fåtöljen", role: "Adverbial" },
      { text: "vid fönstret", role: "Attribut" },
    ],
    roleOptions: [
      "Subjekt",
      "Predikat",
      "Objekt",
      "Adverbial",
      "Attribut",
      "Predikativ",
    ],
  },
  {
    id: "meningsbyggnad-sa-gym-2",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    relatedTextSlug: "ai-i-utbildningen",
    instruction: "Analysera satsdelarna i denna mening.",
    sentence: "Resultatet av undersökningen ansags vara oväntat positivt av forskarlaget.",
    parts: [
      { text: "Resultatet av undersökningen", role: "Subjekt" },
      { text: "ansags vara", role: "Predikat" },
      { text: "oväntat positivt", role: "Predikativ" },
      { text: "av forskarlaget", role: "Agentadverbial" },
    ],
    roleOptions: [
      "Subjekt",
      "Predikat",
      "Objekt",
      "Adverbial",
      "Predikativ",
      "Agentadverbial",
    ],
  },
  {
    id: "meningsbyggnad-sa-gym-3",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Analysera satsdelarna i denna mening.",
    sentence: "Den beryktade författaren tilldelades Nobelpriset i litteratur är 1909.",
    parts: [
      { text: "Den beryktade författaren", role: "Subjekt" },
      { text: "tilldelades", role: "Predikat" },
      { text: "Nobelpriset i litteratur", role: "Objekt" },
      { text: "ar 1909", role: "Adverbial" },
    ],
    roleOptions: [
      "Subjekt",
      "Predikat",
      "Objekt",
      "Adverbial",
      "Predikativ",
    ],
  },
  {
    id: "meningsbyggnad-sa-gym-4",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Analysera satsdelarna i denna komplexa mening.",
    sentence:
      "Trots att vädret var dåligt beslöt gruppen att genomföra vandringen längs kusten.",
    parts: [
      { text: "Trots att vädret var dåligt", role: "Adverbial (bisats)" },
      { text: "beslöt", role: "Predikat" },
      { text: "gruppen", role: "Subjekt" },
      {
        text: "att genomföra vandringen längs kusten",
        role: "Objekt (infinitivfras)",
      },
    ],
    roleOptions: [
      "Subjekt",
      "Predikat",
      "Objekt (infinitivfras)",
      "Adverbial (bisats)",
      "Adverbial",
    ],
  },
];

const meningsbyggnadGymnasietMC: MultipleChoiceExercise[] = [
  {
    id: "meningsbyggnad-mc-gym-1",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Identifiera typen av bisats.",
    prompt: "...som vi besökte i somras.",
    options: [
      "Adverbiell bisats",
      "Relativ bisats",
      "Nominal bisats",
      "Konditionell bisats",
    ],
    correct: 1,
    explanation:
      "Det är en relativ bisats (relativsats) eftersom den inleds med relativpronomenet 'som' och ger mer information om ett substantiv.",
  },
  {
    id: "meningsbyggnad-mc-gym-2",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Identifiera typen av bisats.",
    prompt: "...om det slutar regna.",
    options: [
      "Temporal bisats",
      "Relativ bisats",
      "Konditionell bisats",
      "Kausal bisats",
    ],
    correct: 2,
    explanation:
      "Det är en konditionell bisats (villkorsbisats) som inleds med 'om' och anger ett villkor.",
  },
  {
    id: "meningsbyggnad-mc-gym-3",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening innehaller en inskjuten bisats?",
    prompt: "Välj den mening som har en inskjuten bisats.",
    options: [
      "Boken, som jag lånade, var spännande.",
      "Jag läst boken och den var spännande.",
      "Boken var spännande eftersom den hade bra handling.",
      "Den spännande boken lag på bordet.",
    ],
    correct: 0,
    explanation:
      "Mening 1 har en inskjuten relativsats 'som jag lånade' som står mellan kommatecken mitt i huvudsatsen.",
  },
  {
    id: "meningsbyggnad-mc-gym-4",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening innehaller en satsförkortning?",
    prompt: "Välj den mening som har en satsförkortning.",
    options: [
      "Han gick ut för att handla.",
      "Han gick ut och handlade.",
      "Han gick ut, och sedan handlade han.",
      "Han gick ut. Han handlade.",
    ],
    correct: 0,
    explanation:
      "'För att handla' är en satsförkortning (infinitivfras) som ersätter en hel bisats.",
  },
];

// ---------------------------------------------------------------------------
// 3. SKILJETECKEN  (~32 exercises)
// ---------------------------------------------------------------------------

const skiljeteckenLagstadietFIB: FillInBlankExercise[] = [
  {
    id: "skiljetecken-fib-lag-1",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Vilket skiljetecken saknas i slutet av meningen?",
    sentence: "Katten sover på soffan____",
    options: [".", "?", "!"],
    correct: ".",
    explanation:
      "Meningen är ett påstående och avslutas därför med en punkt.",
  },
  {
    id: "skiljetecken-fib-lag-2",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Vilket skiljetecken saknas i slutet av meningen?",
    sentence: "Vad heter du____",
    options: [".", "?", "!"],
    correct: "?",
    explanation:
      "Meningen är en fråga och avslutas därför med ett frågetecken.",
  },
  {
    id: "skiljetecken-fib-lag-3",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Vilket skiljetecken saknas i slutet av meningen?",
    sentence: "Vilken fin teckning____",
    options: [".", "?", "!"],
    correct: "!",
    explanation:
      "Meningen är ett utrop och avslutas därför med ett utropstecken.",
  },
  {
    id: "skiljetecken-fib-lag-4",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Vilket skiljetecken saknas i slutet av meningen?",
    sentence: "Har du en syster____",
    options: [".", "?", "!"],
    correct: "?",
    explanation: "Meningen börjar med 'Har du' och är en fråga.",
  },
  {
    id: "skiljetecken-fib-lag-5",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Vilket skiljetecken saknas i slutet av meningen?",
    sentence: "Akta dig____",
    options: [".", "?", "!"],
    correct: "!",
    explanation:
      "Meningen är en uppmaning med stark känsla och avslutas med utropstecken.",
  },
  {
    id: "skiljetecken-fib-lag-6",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Vilket skiljetecken saknas i slutet av meningen?",
    sentence: "Jag tycker om att rita____",
    options: [".", "?", "!"],
    correct: ".",
    explanation:
      "Meningen är ett enkelt påstående och avslutas med punkt.",
  },
];

const skiljeteckenLagstadietMC: MultipleChoiceExercise[] = [
  {
    id: "skiljetecken-mc-lag-1",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Vilket tecken används i slutet av en fråga?",
    prompt: "Vilket skiljetecken sätts i slutet av en frågemening?",
    options: ["Punkt (.)", "Frågetecken (?)", "Utropstecken (!)"],
    correct: 1,
    explanation:
      "En frågemening avslutas alltid med ett frågetecken (?). Exempel: Hur mår du?",
  },
  {
    id: "skiljetecken-mc-lag-2",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Vilken mening är korrekt skriven?",
    prompt: "Välj den mening som har rätt skiljetecken.",
    options: [
      "Var bor du.",
      "Var bor du?",
      "Var bor du!",
    ],
    correct: 1,
    explanation:
      "'Var bor du' är en fråga och ska avslutas med frågetecken.",
  },
];

const skiljeteckenMellanstadietFIB: FillInBlankExercise[] = [
  {
    id: "skiljetecken-fib-mel-1",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Vi köpte applen____ bananer och mjolk.",
    options: [".", ",", "!", "?"],
    correct: ",",
    explanation:
      "Vid uppräkningar används kommatecken mellan de uppräknade sakerna (utom före 'och').",
  },
  {
    id: "skiljetecken-fib-mel-2",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "När det regnar____ stannar vi inne.",
    options: [".", ",", "!", "?"],
    correct: ",",
    explanation:
      "Kommatecken sätts mellan bisats och huvudsats när bisatsen kommer först.",
  },
  {
    id: "skiljetecken-fib-mel-3",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilket skiljetecken saknas i slutet?",
    sentence: "Vilken fantastisk match det var____",
    options: [".", ",", "!", "?"],
    correct: "!",
    explanation:
      "Meningen uttrycker stark känsla och avslutas med utropstecken.",
  },
  {
    id: "skiljetecken-fib-mel-4",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Min bror____ som är tio ar____ går i fyran.",
    options: ["komma (,) på bada ställena", "punkt (.) på bada ställena", "frågetecken (?) på bada ställena", "inget tecken alls"],
    correct: "komma (,) på bada ställena",
    explanation:
      "Inskjutna bisatser (relativsatser) omges av kommatecken.",
  },
  {
    id: "skiljetecken-fib-mel-5",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Mamma sa: Kom in nu____",
    options: [".", "!", "?", ","],
    correct: "!",
    explanation:
      "Det är en uppmaning och avslutas med utropstecken.",
  },
  {
    id: "skiljetecken-fib-mel-6",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Ja____ det låter bra.",
    options: [".", ",", "!", "?"],
    correct: ",",
    explanation:
      "Efter ett inledande ja eller nej sätts ett kommatecken.",
  },
];

const skiljeteckenMellanstadietMC: MultipleChoiceExercise[] = [
  {
    id: "skiljetecken-mc-mel-1",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Var ska kommatecknet placeras?",
    prompt: "När vi kom hem lagade vi middag.",
    options: [
      "När vi, kom hem lagade vi middag.",
      "När vi kom hem, lagade vi middag.",
      "När vi kom hem lagade, vi middag.",
      "När vi kom hem lagade vi, middag.",
    ],
    correct: 1,
    explanation:
      "Kommatecken sätts efter bisatsen 'När vi kom hem' före huvudsatsen 'lagade vi middag'.",
  },
  {
    id: "skiljetecken-mc-mel-2",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har rätt användning av kommatecken?",
    prompt: "Välj den korrekta meningen.",
    options: [
      "Jag har en hund, en katt och en hamster.",
      "Jag har en hund en katt, och en hamster.",
      "Jag har, en hund en katt och en hamster.",
      "Jag har en hund en katt och, en hamster.",
    ],
    correct: 0,
    explanation:
      "Vid uppräkningar sätts komma mellan varje led utom före det sista ledet där 'och' används.",
  },
];

const skiljeteckenHogstadietFIB: FillInBlankExercise[] = [
  {
    id: "skiljetecken-fib-hog-1",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Hon hade två hobbyer____ läsning och målning.",
    options: [".", ",", ":", ";"],
    correct: ":",
    explanation:
      "Kolon används före en uppräkning eller ett förtydligande.",
  },
  {
    id: "skiljetecken-fib-hog-2",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Solen sken____ ändå kandes det kallt.",
    options: [",", ":", ";", "."],
    correct: ";",
    explanation:
      "Semikolon används mellan två självständiga satser som hänger ihop men inte binds av en konjunktion.",
  },
  {
    id: "skiljetecken-fib-hog-3",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Läraren förklarade____ Alla ska lämna in uppgiften på fredag.",
    options: [".", ",", ":", ";"],
    correct: ":",
    explanation:
      "Kolon används före ett citat eller direkt anföring.",
  },
  {
    id: "skiljetecken-fib-hog-4",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Vi behövde tre saker____ mod, uthållighet och tur.",
    options: [",", ";", ":", "."],
    correct: ":",
    explanation:
      "Kolon används här före uppräkningen av de tre sakerna.",
  },
  {
    id: "skiljetecken-fib-hog-5",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Taget var forsenat____ vi tog bussen istället.",
    options: [",", ";", ":", "!"],
    correct: ";",
    explanation:
      "Semikolon binder samman två nära relaterade huvudsatser utan konjunktion.",
  },
  {
    id: "skiljetecken-fib-hog-6",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Klockan var 08____ 30 när vi anlande.",
    options: [".", ",", ":", ";"],
    correct: ":",
    explanation: "Kolon används i klockslag, till exempel 08:30.",
  },
];

const skiljeteckenHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "skiljetecken-mc-hog-1",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "När används semikolon?",
    prompt: "Vilket alternativ beskriver korrekt användning av semikolon?",
    options: [
      "Före en uppräkning",
      "Mellan två närstående huvudsatser utan konjunktion",
      "Före ett citat",
      "I stället för punkt i slutet av en mening",
    ],
    correct: 1,
    explanation:
      "Semikolon används mellan två självständiga satser som har en tydlig koppling till varandra men saknar bindeord.",
  },
  {
    id: "skiljetecken-mc-hog-2",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening använder kolon korrekt?",
    prompt: "Välj rätt alternativ.",
    options: [
      "Vi behöver: mjolk, brod och smor.",
      "Vi behöver följande: mjolk, brod och smor.",
      "Vi: behöver mjolk brod och smor.",
      "Vi behöver mjolk: brod och smor.",
    ],
    correct: 1,
    explanation:
      "Kolon sätts efter ett sammanfattande ord som 'följande' före uppräkningen.",
  },
];

const skiljeteckenGymnasietFIB: FillInBlankExercise[] = [
  {
    id: "skiljetecken-fib-gym-1",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence:
      "Författaren menade____ enligt min tolkning____ att samhället behöver förnyelse.",
    options: [
      "kommatecken på bada ställena",
      "kolon på bada ställena",
      "tankstreck på bada ställena",
      "semikolon på bada ställena",
    ],
    correct: "kommatecken på bada ställena",
    explanation:
      "Inskjutna fraser som 'enligt min tolkning' omges av kommatecken.",
  },
  {
    id: "skiljetecken-fib-gym-2",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilket skiljetecken saknas före citatet?",
    sentence: 'Strindberg skriver____ "Det är synd om människorna."',
    options: [".", ",", ":", ";"],
    correct: ":",
    explanation:
      "Kolon används före ett direkt citat.",
  },
  {
    id: "skiljetecken-fib-gym-3",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence:
      "Den stilistiska analysen visade på två tendenser____ dels en ökad användning av metaforer, dels en medveten rytmisering.",
    options: [",", ";", ":", "."],
    correct: ":",
    explanation:
      "Kolon används före ett förtydligande eller specificerande tillägg.",
  },
  {
    id: "skiljetecken-fib-gym-4",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence:
      "Språket forändras standigt____ nya ord tillkommer medan andra faller ur bruk.",
    options: [",", ";", ":", "."],
    correct: ";",
    explanation:
      "Semikolon binder har samman två nära besläktade huvudsatser.",
  },
  {
    id: "skiljetecken-fib-gym-5",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence:
      "Texten innehaller flera stilfigurer____ till exempel anafor och allitteration.",
    options: [",", ":", ";", "."],
    correct: ",",
    explanation:
      "Kommatecken används före ett tillägg med 'till exempel'.",
  },
  {
    id: "skiljetecken-fib-gym-6",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence:
      "Rapporten behandlade tre omraden____ ekonomi, miljö och utbildning.",
    options: [",", ";", ":", "!"],
    correct: ":",
    explanation:
      "Kolon används före en uppräkning som specificerar 'tre områden'.",
  },
];

const skiljeteckenGymnasietMC: MultipleChoiceExercise[] = [
  {
    id: "skiljetecken-mc-gym-1",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening använder citattecken korrekt?",
    prompt: "Välj den mening som har korrekt citat.",
    options: [
      '"Jag kommer", sa hon, "om en timme."',
      '"Jag kommer, sa hon, om en timme."',
      '"Jag kommer" sa hon "om en timme."',
      '"Jag kommer sa hon om en timme."',
    ],
    correct: 0,
    explanation:
      "När ett citat avbryts av en anföringsfras omges den av kommatecken, och den andra delen av citatet får nya citattecken.",
  },
  {
    id: "skiljetecken-mc-gym-2",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilken kommateringsprincip är korrekt?",
    prompt: "När ska komma INTE användas?",
    options: [
      "Mellan huvudsats och efterställd bisats med 'att'",
      "Före inskjuten bisats",
      "Mellan satsdelar i en uppräkning",
      "Mellan bisats och efterföljande huvudsats",
    ],
    correct: 0,
    explanation:
      "Komma används normalt inte före en att-sats som är objekt i meningen: 'Jag tror att det blir bra.'",
  },
];

// ---------------------------------------------------------------------------
// 4. STAVNING  (~24 exercises)
// ---------------------------------------------------------------------------

const stavningMellanstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "stavning-ec-mel-1",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Jag tänker på minnen från somaren.",
    correctedSentence: "Jag tänker på minnen från sommaren.",
    errorWord: "somaren",
    correctWord: "sommaren",
    explanation:
      "Ordet 'sommaren' stavas med dubbelt m. Regeln är att kort vokalljud före konsonant ofta kräver dubbelteckning.",
  },
  {
    id: "stavning-ec-mel-2",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Han hadde en ny cykel.",
    correctedSentence: "Han hade en ny cykel.",
    errorWord: "hadde",
    correctWord: "hade",
    explanation:
      "'Hade' stavas med enkelt d. Inte alla ord med kort vokal har dubbelteckning.",
  },
  {
    id: "stavning-ec-mel-3",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Vi sjöng en sång i skolan.",
    correctedSentence: "Vi sjong en sång i skolan.",
    errorWord: "sjöng",
    correctWord: "sjong",
    explanation:
      "'Sjong' stavas utan prickar över o. Tänk på att 'sjunga' har u, inte ö.",
  },
  {
    id: "stavning-ec-mel-4",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Hunnen sprang över gården.",
    correctedSentence: "Hunden sprang över gården.",
    errorWord: "Hunnen",
    correctWord: "Hunden",
    explanation:
      "Ordet stavas 'hunden' med nd-ljud. Förväxla inte ng-ljud och nd-ljud.",
  },
  {
    id: "stavning-ec-mel-5",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Vi har matteprovet på onssdagen.",
    correctedSentence: "Vi har matteprovet på onsdagen.",
    errorWord: "onssdagen",
    correctWord: "onsdagen",
    explanation:
      "'Onsdagen' stavas med enkelt s. Dubbelteckning gäller inte före d har.",
  },
  {
    id: "stavning-ec-mel-6",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Kattan sover i sängen.",
    correctedSentence: "Katten sover i sängen.",
    errorWord: "Kattan",
    correctWord: "Katten",
    explanation:
      "'Katten' stavas med e, inte a. Den bestämda formen av 'katt' är 'katten'.",
  },
];

const stavningMellanstadietMC: MultipleChoiceExercise[] = [
  {
    id: "stavning-mc-mel-1",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Vilket ord är rätt stavat?",
    prompt: "Välj det korrekt stavade ordet.",
    options: ["pannkaka", "pankaka", "panncaka", "pannkakka"],
    correct: 0,
    explanation:
      "'Pannkaka' är korrekt. Dubbelt n efter kort vokal, och 'kaka' stavas med enkelt k.",
  },
  {
    id: "stavning-mc-mel-2",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Vilket ord är rätt stavat?",
    prompt: "Välj det korrekt stavade ordet.",
    options: ["längre", "langgre", "längre", "laangre"],
    correct: 2,
    explanation:
      "'Längre' är komparativformen av 'lång'. Observera att a med prickar (ä) används i komparativ.",
  },
];

const stavningHogstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "stavning-ec-hog-1",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Det är viktigt att sköta sin hygein.",
    correctedSentence: "Det är viktigt att sköta sin hygien.",
    errorWord: "hygein",
    correctWord: "hygien",
    explanation:
      "Ordet stavas 'hygien' med ie, inte ei. Många lånord har ovanlig stavning.",
  },
  {
    id: "stavning-ec-hog-2",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Maniskan är en social varelse.",
    correctedSentence: "Människan är en social varelse.",
    errorWord: "Maniskan",
    correctWord: "Människan",
    explanation:
      "'Människan' stavas med dubbelt n. Kort vokal före konsonant kräver ofta dubbelteckning.",
  },
  {
    id: "stavning-ec-hog-3",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Hon körde forbi sjukhuset på vägen hem.",
    correctedSentence: "Hon körde forbi sjukhuset på vägen hem.",
    errorWord: "körde",
    correctWord: "körde",
    explanation:
      "'Körde' stavas med ö. Sje-ljudet i 'kör' stavas med k före ö.",
  },
  {
    id: "stavning-ec-hog-4",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Eleverna diskutterade frågan länge.",
    correctedSentence: "Eleverna diskuterade frågan länge.",
    errorWord: "diskutterade",
    correctWord: "diskuterade",
    explanation:
      "'Diskuterade' stavas med enkelt t. Lanord följer inte alltid svenska dubbelteckningsregler.",
  },
  {
    id: "stavning-ec-hog-5",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "De kände sej stolta över resultatet.",
    correctedSentence: "De kände sig stolta över resultatet.",
    errorWord: "sej",
    correctWord: "sig",
    explanation:
      "I skriftsprak stavas det 'sig', inte 'sej'. 'Sej' är talsprak.",
  },
  {
    id: "stavning-ec-hog-6",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Chefen presenterade en ny strategi för företaget.",
    correctedSentence: "Chefen presenterade en ny strategi för företaget.",
    errorWord: "Chefen",
    correctWord: "Chefen",
    explanation:
      "Här är meningen korrekt. Tje-ljudet i 'chef' stavas med ch. Observera att detta sje-ljud kan stavas på många satt.",
  },
];

const stavningHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "stavning-mc-hog-1",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Vilket ord innehaller ett sje-ljud?",
    prompt: "Välj det ord som har sje-ljud.",
    options: ["kjol", "kind", "kaffe", "kall"],
    correct: 0,
    explanation:
      "'Kjol' innehaller ett sje-ljud som stavas kj. Sje-ljudet kan stavas på många satt: sj, sk, skj, stj, sch, ch, sh, ge, gi, j.",
  },
  {
    id: "stavning-mc-hog-2",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Vilket ord är rätt stavat?",
    prompt: "Välj det korrekt stavade ordet för sje-ljudet.",
    options: ["stjärna", "sjarna", "skjarna", "shjarna"],
    correct: 0,
    explanation:
      "'Stjarna' är korrekt. Sje-ljudet stavas stj i detta ord.",
  },
];

const stavningGymnasietEC: ErrorCorrectionExercise[] = [
  {
    id: "stavning-ec-gym-1",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Dom föreslog att vi skulle träffas på onsdag.",
    correctedSentence: "De föreslog att vi skulle träffas på onsdag.",
    errorWord: "Dom",
    correctWord: "De",
    explanation:
      "I formellt skriftsprak används 'de' (subjektsform) och 'dem' (objektsform), inte 'dom'.",
  },
  {
    id: "stavning-ec-gym-2",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Läraren gav dem en ny uppgift att arbeta med.",
    correctedSentence: "Läraren gav dem en ny uppgift att arbeta med.",
    errorWord: "dem",
    correctWord: "dem",
    explanation:
      "Här är 'dem' korrekt använt eftersom det står i objektsform. Testa: kan du byta ut mot 'oss'? Da är 'dem' rätt.",
  },
  {
    id: "stavning-ec-gym-3",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Det är notvandigt att alla deltar.",
    correctedSentence: "Det är nödvändigt att alla deltar.",
    errorWord: "notvandigt",
    correctWord: "nödvändigt",
    explanation:
      "'Nodvandigt' stavas med d, inte t. Den stumma bokstaven d hörs inte i uttalet.",
  },
  {
    id: "stavning-ec-gym-4",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Dem som vinner får ett pris.",
    correctedSentence: "De som vinner får ett pris.",
    errorWord: "Dem",
    correctWord: "De",
    explanation:
      "'De' är korrekt har eftersom det är subjekt i satsen. Tips: om du kan ersätta med 'vi' är det 'de', om du kan ersätta med 'oss' är det 'dem'.",
  },
  {
    id: "stavning-ec-gym-5",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Författaren beskreft samhället i sin roman.",
    correctedSentence: "Författaren beskrev samhället i sin roman.",
    errorWord: "beskreft",
    correctWord: "beskrev",
    explanation:
      "'Beskrev' stavas med v, inte ft. Den stumma bokstaven förändras inte i preteritum av 'beskriva'.",
  },
  {
    id: "stavning-ec-gym-6",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och rätta stavfelet i meningen.",
    sentence: "Prosjektet slutfördes i tid.",
    correctedSentence: "Projektet slutfördes i tid.",
    errorWord: "Prosjektet",
    correctWord: "Projektet",
    explanation:
      "'Projektet' stavas med j, inte sj. Det är ett lånord från latin (projectum) och följer inte svensk sje-ljudstavning.",
  },
];

const stavningGymnasietMC: MultipleChoiceExercise[] = [
  {
    id: "stavning-mc-gym-1",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening använder de/dem korrekt?",
    prompt: "Välj den korrekta meningen.",
    options: [
      "Dem tycker att det är roligt.",
      "De tycker att det är roligt.",
      "Dom tycker att det är roligt.",
      "Den tycker att det är roligt.",
    ],
    correct: 1,
    explanation:
      "'De' är subjektsform. Eftersom 'de' är subjekt i meningen (de tycker) är 'de' korrekt.",
  },
  {
    id: "stavning-mc-gym-2",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Vilket ord innehaller en stum bokstav?",
    prompt: "I vilket ord hörs inte alla bokstäver när man uttalar det?",
    options: ["djur", "dator", "dans", "doft"],
    correct: 0,
    explanation:
      "I 'djur' är d:et stumt — man uttalar bara j-ljudet. Stumma bokstäver är vanliga i svenska, t.ex. dj, lj, hj.",
  },
];

// ---------------------------------------------------------------------------
// 5. ORDBILDNING  (~16 exercises)
// ---------------------------------------------------------------------------

const ordbildningHogstadietCat: CategorizationExercise[] = [
  {
    id: "ordbildning-cat-hog-1",
    type: "categorization",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    relatedTextSlug: "vart-solsystem",
    instruction: "Är ordet en sammansättning eller en avledning?",
    items: ["fotboll", "vänlig", "solsken", "tänkbar", "skolbok", "modig"],
    categories: ["Sammansättning", "Avledning"],
    correctMapping: {
      fotboll: "Sammansättning",
      "vänlig": "Avledning",
      solsken: "Sammansättning",
      "tänkbar": "Avledning",
      skolbok: "Sammansättning",
      modig: "Avledning",
    },
  },
  {
    id: "ordbildning-cat-hog-2",
    type: "categorization",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Är ordet en sammansättning eller en avledning?",
    items: [
      "läsbar",
      "sommarlov",
      "försiktig",
      "bokhandel",
      "skrivelse",
      "vintertid",
    ],
    categories: ["Sammansättning", "Avledning"],
    correctMapping: {
      "läsbar": "Avledning",
      sommarlov: "Sammansättning",
      "försiktig": "Avledning",
      bokhandel: "Sammansättning",
      skrivelse: "Avledning",
      vintertid: "Sammansättning",
    },
  },
];

const ordbildningHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "ordbildning-mc-hog-1",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    relatedTextSlug: "sa-funkar-tanderna",
    instruction: "Vilket är suffixet (ändelsen) i ordet?",
    prompt: "Vilket är suffixet i ordet 'vänlig'?",
    options: ["-lig", "-ig", "-nlig", "-van"],
    correct: 0,
    explanation:
      "Suffixet är '-lig'. Grundordet är 'van' och suffixet '-lig' bildar adjektivet 'vanlig'.",
  },
  {
    id: "ordbildning-mc-hog-2",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vilka två ord bildar sammansattningen?",
    prompt: "Vilka delar bestar 'flygplats' av?",
    options: [
      "flyg + plats",
      "fly + gplats",
      "flygp + lats",
      "fl + ygplats",
    ],
    correct: 0,
    explanation:
      "'Flygplats' är en sammansättning av 'flyg' (förled) och 'plats' (efterled).",
  },
  {
    id: "ordbildning-mc-hog-3",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vilket är prefixet (förstavelsen) i ordet?",
    prompt: "Vilket är prefixet i ordet 'överraskad'?",
    options: ["över-", "overr-", "o-", "overras-"],
    correct: 0,
    explanation:
      "Prefixet är 'över-'. Det läggs före grundordet 'raskad' (från 'raska') för att bilda ett nytt ord.",
  },
  {
    id: "ordbildning-mc-hog-4",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Hur bildas ordet 'otrolig'?",
    prompt: "Vilken ordbildningsprocess har anvants?",
    options: [
      "Sammansättning",
      "Avledning med prefix",
      "Avledning med suffix",
      "Avledning med både prefix och suffix",
    ],
    correct: 3,
    explanation:
      "'Otrolig' är bildat genom avledning med både prefix (o-) och suffix (-lig) från grundordet 'tro'.",
  },
  {
    id: "ordbildning-mc-hog-5",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vad är fogemorfemet i sammansattningen?",
    prompt: "Vad är fogemorfemet i ordet 'dagstidning'?",
    options: ["-s-", "-t-", "-a-", "inget fogeelement"],
    correct: 0,
    explanation:
      "Fogemorfemet är '-s-' som binder samman 'dag' och 'tidning'. Det är ett av de vanligaste fogemorfemen i svenska.",
  },
  {
    id: "ordbildning-mc-hog-6",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass får ordet när suffixet läggs till?",
    prompt: "Om vi lägger till '-het' på adjektivet 'vacker', vilken ordklass får vi?",
    options: ["Verb", "Adverb", "Substantiv", "Adjektiv"],
    correct: 2,
    explanation:
      "Suffixet '-het' bildar substantiv av adjektiv. 'Vacker' + '-het' = 'vackerhet' (substantiv).",
  },
];

const ordbildningGymnasietCat: CategorizationExercise[] = [
  {
    id: "ordbildning-cat-gym-1",
    type: "categorization",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    relatedTextSlug: "sprakforandringar-i-svenska",
    instruction:
      "Kategorisera varje ord efter vilken typ av ordbildning det har.",
    items: [
      "omtänksamhet",
      "järnvägsstation",
      "befrielse",
      "midsommarafton",
      "förstoring",
      "nattarbetare",
    ],
    categories: ["Sammansättning", "Avledning"],
    correctMapping: {
      "omtänksamhet": "Avledning",
      "järnvägsstation": "Sammansättning",
      befrielse: "Avledning",
      midsommarafton: "Sammansättning",
      "förstoring": "Avledning",
      nattarbetare: "Sammansättning",
    },
  },
  {
    id: "ordbildning-cat-gym-2",
    type: "categorization",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    relatedTextSlug: "spraket-forandras",
    instruction: "Kategorisera varje ord som prefix-avledning eller suffix-avledning.",
    items: [
      "osäkert",
      "läsbar",
      "missförstånd",
      "vänskap",
      "återvinna",
      "handling",
    ],
    categories: ["Prefix-avledning", "Suffix-avledning"],
    correctMapping: {
      "osäkert": "Prefix-avledning",
      "läsbar": "Suffix-avledning",
      "missförstånd": "Prefix-avledning",
      "vänskap": "Suffix-avledning",
      "återvinna": "Prefix-avledning",
      handling: "Suffix-avledning",
    },
  },
];

const ordbildningGymnasietMC: MultipleChoiceExercise[] = [
  {
    id: "ordbildning-mc-gym-1",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Analysera ordets morfologiska struktur.",
    prompt: "Hur många morfem innehaller ordet 'otacksamhet'?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation:
      "'Otacksamhet' bestar av fyra morfem: o- (prefix) + tack (rot) + -sam (suffix) + -het (suffix).",
  },
  {
    id: "ordbildning-mc-gym-2",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Vilket är ett produktivt suffix för att bilda substantiv av verb?",
    prompt: "Välj det suffix som vanligen bildar substantiv av verb.",
    options: ["-lig", "-ning", "-bar", "-sam"],
    correct: 1,
    explanation:
      "Suffixet '-ning' är mycket produktivt för att bilda substantiv av verb: lösa -> lösning, bygga -> byggning.",
  },
  {
    id: "ordbildning-mc-gym-3",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Vad är ett lånord?",
    prompt: "Vilket av dessa ord är ett lånord i svenska?",
    options: ["stuga", "garage", "vatten", "skog"],
    correct: 1,
    explanation:
      "'Garage' är ett lånord från franska. De ovriga är svenska arvord.",
  },
  {
    id: "ordbildning-mc-gym-4",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Analysera sammansattningen.",
    prompt: "I sammansattningen 'barnboksförfattare', vilken är huvudleden?",
    options: ["barn", "bok", "författare", "barnbok"],
    correct: 2,
    explanation:
      "Huvudleden i en sammansättning är alltid den sista delen: 'författare'. Den bestämmer ordets ordklass och grundbetydelse.",
  },
  {
    id: "ordbildning-mc-gym-5",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Vad är skillnaden mellan avledning och böjning?",
    prompt: "Vilket är ett exempel på avledning (inte böjning)?",
    options: [
      "hund -> hundar",
      "springa -> springer",
      "glad -> gladare",
      "glad -> glädje",
    ],
    correct: 3,
    explanation:
      "'Glad -> glädje' är avledning eftersom ordklassen ändras (adjektiv -> substantiv). De ovriga är böjningar inom samma ordklass.",
  },
  {
    id: "ordbildning-mc-gym-6",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Identifiera ordbildningstypen.",
    prompt: "Hur har ordet 'bio' bildats?",
    options: [
      "Sammansättning",
      "Avledning med prefix",
      "Förkortning (kortord)",
      "Laneord",
    ],
    correct: 2,
    explanation:
      "'Bio' är en förkortning av 'biograf'. Förkortning innebar att ett ord förkortas, ofta till första stavelsen.",
  },
];

// ---------------------------------------------------------------------------
// 6. TEXTBINDNING  (~16 exercises)
// ---------------------------------------------------------------------------

const textbindningHogstadietFIB: FillInBlankExercise[] = [
  {
    id: "textbindning-fib-hog-1",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    relatedTextSlug: "klimatet-ar-vart-ansvar",
    instruction: "Välj rätt sambandsord för att binda ihop meningarna.",
    sentence: "Hon pluggade hårt ____ provet. ____ fick hon ett bra resultat.",
    options: ["Därför", "Dessutom", "Dock", "Trots det"],
    correct: "Därför",
    explanation:
      "'Därför' är ett kausalt sambandsord som visar orsak-verkan: pluggande ledde till bra resultat.",
  },
  {
    id: "textbindning-fib-hog-2",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt sambandsord.",
    sentence: "Det regnade hela dagen. ____ bestamde vi oss för att stanna inne.",
    options: ["Dessutom", "Därför", "Dock", "I stället"],
    correct: "Därför",
    explanation:
      "'Därför' visar att beslutet att stanna inne var en följd av regnet.",
  },
  {
    id: "textbindning-fib-hog-3",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    relatedTextSlug: "sociala-medier-och-sjalvbild",
    instruction: "Välj rätt sambandsord.",
    sentence: "Filmen var lång. ____ var den mycket spännande.",
    options: ["Därför", "Dessutom", "Dock", "Eftersom"],
    correct: "Dock",
    explanation:
      "'Dock' är ett adversativt sambandsord som visar en kontrast: filmen var lång MEN ändå spännande.",
  },
  {
    id: "textbindning-fib-hog-4",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt sambandsord.",
    sentence: "Först gick vi till affären. ____ åkte vi till parken.",
    options: ["Därför", "Dessutom", "Sedan", "Dock"],
    correct: "Sedan",
    explanation:
      "'Sedan' är ett temporalt sambandsord som visar tidsordning.",
  },
  {
    id: "textbindning-fib-hog-5",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt sambandsord.",
    sentence:
      "Skolan erbjuder många sportaktiviteter. ____ finns det en stor musikavdelning.",
    options: ["Dock", "Därför", "Dessutom", "Istället"],
    correct: "Dessutom",
    explanation:
      "'Dessutom' är ett additivt sambandsord som lägger till information.",
  },
  {
    id: "textbindning-fib-hog-6",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Välj rätt sambandsord.",
    sentence: "Jag ville gå på bio. ____ gick jag hem och såg en film.",
    options: ["Dessutom", "Dock", "I stället", "Därför"],
    correct: "I stället",
    explanation:
      "'I stället' visar att en annan handling valdes som alternativ.",
  },
];

const textbindningHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "textbindning-mc-hog-1",
    type: "multiple-choice",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    relatedTextSlug: "skoluniformer",
    instruction: "Vilken typ av samband uttrycker ordet 'dessutom'?",
    prompt: "Vad för slags textbindning är 'dessutom'?",
    options: [
      "Kausalt (orsak)",
      "Temporalt (tid)",
      "Additivt (tillägg)",
      "Adversativt (kontrast)",
    ],
    correct: 2,
    explanation:
      "'Dessutom' är ett additivt sambandsord som lägger till information.",
  },
  {
    id: "textbindning-mc-hog-2",
    type: "multiple-choice",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Vilken typ av samband uttrycker ordet 'dock'?",
    prompt: "Vad för slags textbindning är 'dock'?",
    options: [
      "Kausalt (orsak)",
      "Temporalt (tid)",
      "Additivt (tillägg)",
      "Adversativt (kontrast)",
    ],
    correct: 3,
    explanation:
      "'Dock' är ett adversativt sambandsord som uttrycker en kontrast eller invändning.",
  },
];

const textbindningGymnasietFIB: FillInBlankExercise[] = [
  {
    id: "textbindning-fib-gym-1",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    relatedTextSlug: "sprak-och-makt",
    instruction: "Välj det mest passande sambandsordet.",
    sentence:
      "Författaren använder ett rikt bildspråk. ____ skapar hon en nära förhållandevis personlig ton.",
    options: ["Följaktligen", "Däremot", "Likväl", "Därtill"],
    correct: "Därtill",
    explanation:
      "'Därtill' är ett formellt additivt sambandsord som lägger till ytterligare information.",
  },
  {
    id: "textbindning-fib-gym-2",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Välj det mest passande sambandsordet.",
    sentence:
      "Argumentet är logiskt uppbyggt. ____ saknar det empiriska belägg.",
    options: ["Dessutom", "Följaktligen", "Icke desto mindre", "Således"],
    correct: "Icke desto mindre",
    explanation:
      "'Icke desto mindre' är ett formellt adversativt sambandsord som visar att något ändå gäller trots det föregående.",
  },
  {
    id: "textbindning-fib-gym-3",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    relatedTextSlug: "ai-i-utbildningen",
    instruction: "Välj det mest passande sambandsordet.",
    sentence:
      "Undersokningen visar på tydliga skillnader. ____ kan man dra slutsatsen att ytterligare forskning behövs.",
    options: ["Dock", "Således", "Trots det", "Dessutom"],
    correct: "Således",
    explanation:
      "'Således' är ett kausalt-konkluderande sambandsord som drar en slutsats baserad på föregående information.",
  },
  {
    id: "textbindning-fib-gym-4",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Välj det mest passande sambandsordet.",
    sentence:
      "Den första studien visade positiva resultat. ____ gav den andra studien helt annorlunda svar.",
    options: ["Dessutom", "Således", "Däremot", "Följaktligen"],
    correct: "Däremot",
    explanation:
      "'Däremot' är ett adversativt sambandsord som tydligt kontrasterar två saker.",
  },
  {
    id: "textbindning-fib-gym-5",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Välj det mest passande sambandsordet.",
    sentence:
      "Eleverna hade arbetat intensivt med projektet. ____ var deras presentation genomtänkt och välförberedd.",
    options: ["Dock", "I stället", "Följaktligen", "Däremot"],
    correct: "Följaktligen",
    explanation:
      "'Följaktligen' är ett formellt kausalt sambandsord som visar att resultatet är en följd av det föregående.",
  },
  {
    id: "textbindning-fib-gym-6",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Välj det mest passande sambandsordet.",
    sentence:
      "Kritikerna var till en början skeptiska. ____ ändrade många av dem sin uppfattning efter premiaren.",
    options: ["Dessutom", "Således", "Sedermera", "Därtill"],
    correct: "Sedermera",
    explanation:
      "'Sedermera' är ett formellt temporalt sambandsord som anger att något hände vid en senare tidpunkt.",
  },
];

const textbindningGymnasietMC: MultipleChoiceExercise[] = [
  {
    id: "textbindning-mc-gym-1",
    type: "multiple-choice",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    relatedTextSlug: "demokratin-ar-inte-given",
    instruction: "Vilken typ av textbindning representerar 'följaktligen'?",
    prompt: "Klassificera sambandsordet 'följaktligen'.",
    options: [
      "Additiv bindning",
      "Adversativ bindning",
      "Kausal bindning",
      "Temporal bindning",
    ],
    correct: 2,
    explanation:
      "'Följaktligen' är ett kausalt (orsakssamband) sambandsord som visar att något är en följd av något annat.",
  },
  {
    id: "textbindning-mc-gym-2",
    type: "multiple-choice",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    relatedTextSlug: "spraket-forandras",
    instruction: "Vilken typ av textbindning används i exemplet?",
    prompt:
      "I meningen 'Författaren använder metaforer. Dessa skapar en poetisk känsla.' — vilken typ av bindning är 'dessa'?",
    options: [
      "Sambandsord (konnektiv)",
      "Referensbindning (syftning)",
      "Tematisk bindning",
      "Lexikal bindning",
    ],
    correct: 1,
    explanation:
      "'Dessa' är ett exempel på referensbindning — det syftar tillbaka på 'metaforer' i föregående mening.",
  },
];

// ---------------------------------------------------------------------------
// 7. STILISTIK  (~10 exercises, gymnasiet only)
// ---------------------------------------------------------------------------

const stilistikGymnasietMC: MultipleChoiceExercise[] = [
  {
    id: "stilistik-mc-gym-1",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    relatedTextSlug: "tidens-anatomi",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Livet är en resa.'",
    options: ["Liknelse", "Metafor", "Allitteration", "Anafor"],
    correct: 1,
    explanation:
      "Det är en metafor — ett direkt jämförande utan 'som' eller 'likt'. Livet beskrivs direkt som en resa.",
  },
  {
    id: "stilistik-mc-gym-2",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Hon var stark som en björn.'",
    options: ["Metafor", "Liknelse", "Hyperbol", "Besjälning"],
    correct: 1,
    explanation:
      "Det är en liknelse — ett jämförande med hjälp av 'som'. Hon jämförs med en björn.",
  },
  {
    id: "stilistik-mc-gym-3",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Peter Plansen plockade plommon på planket.'",
    options: ["Anafor", "Allitteration", "Assonans", "Eufemism"],
    correct: 1,
    explanation:
      "Det är allitteration — upprepning av samma begynnelseljud (p) i flera ord i rad.",
  },
  {
    id: "stilistik-mc-gym-4",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    relatedTextSlug: "demokratin-ar-inte-given",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Jag vill ha fred. Jag vill ha frihet. Jag vill ha rättvisa.'",
    options: ["Allitteration", "Klimax", "Anafor", "Antites"],
    correct: 2,
    explanation:
      "Det är en anafor — upprepning av samma ord eller fras i början av flera meningar ('Jag vill ha').",
  },
  {
    id: "stilistik-mc-gym-5",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    relatedTextSlug: "grans",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Vinden viskade genom träden.'",
    options: ["Metafor", "Liknelse", "Besjälning", "Hyperbol"],
    correct: 2,
    explanation:
      "Det är besjälning (personifikation) — vinden får en mänsklig egenskap (att viska).",
  },
  {
    id: "stilistik-mc-gym-6",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Jag har sagt det en miljon gånger!'",
    options: ["Liknelse", "Besjälning", "Hyperbol", "Anafor"],
    correct: 2,
    explanation:
      "Det är en hyperbol — en medveten överdrift för att förstärka ett uttryck.",
  },
  {
    id: "stilistik-mc-gym-7",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Det var ett litet steg för en människa, men ett jättekliv för mänskligheten.'",
    options: ["Anafor", "Antites", "Allitteration", "Eufemism"],
    correct: 1,
    explanation:
      "Det är en antites — två motsatta ideer ställs mot varandra för att skapa effekt (litet steg vs. jättekliv).",
  },
  {
    id: "stilistik-mc-gym-8",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Han har gått bort.' (om någon som har dött)",
    options: ["Hyperbol", "Antites", "Eufemism", "Metafor"],
    correct: 2,
    explanation:
      "Det är en eufemism — ett mildare uttryck ('gått bort') används i stället för något mer direkt ('dött').",
  },
  {
    id: "stilistik-mc-gym-9",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    relatedTextSlug: "sprak-och-makt",
    instruction: "Vilken språknivå representerar texten?",
    prompt:
      "'Hallå! Kolla, jag fixade det där till slut. Fett nice alltsa!'",
    options: [
      "Formellt språk",
      "Informellt språk",
      "Akademiskt språk",
      "Byråkratiskt språk",
    ],
    correct: 1,
    explanation:
      "Texten är skriven på informellt (vardagligt) språk med slanguttryck som 'fett nice' och 'kolla'.",
  },
  {
    id: "stilistik-mc-gym-10",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    relatedTextSlug: "upplysningstankaren",
    instruction: "Vilken språknivå representerar texten?",
    prompt:
      "'Härmed intygas att undertecknad fullgjort samtliga ålagda arbetsuppgifter i enlighet med gällande bestämmelser.'",
    options: [
      "Informellt språk",
      "Ledigt skriftsprak",
      "Formellt/byråkratiskt språk",
      "Litterart språk",
    ],
    correct: 2,
    explanation:
      "Texten är formellt/byråkratiskt språk med kännetecken som passiv form, formella uttryck ('härmed intygas', 'undertecknad') och saklig ton.",
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Ordklasser (hogstadiet & gymnasiet)
// ---------------------------------------------------------------------------

const ordklasserHogstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "ordklasser-ec-hog-1",
    type: "error-correction",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Rätta felaktigt använd ordklass i meningen.",
    sentence: "Hon sprang snabbare an jag.",
    correctedSentence: "Hon sprang snabbare an jag.",
    errorWord: "jag",
    correctWord: "jag",
    explanation:
      "Här är meningen korrekt med 'jag' (subjektsform). Vanligt fel är att skriva 'mig' efter 'an', men efter 'an' i jämförelser ska subjektsform användas.",
  },
  {
    id: "ordklasser-ec-hog-2",
    type: "error-correction",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta felet med pronomen i meningen.",
    sentence: "Dom som vill kan följa med.",
    correctedSentence: "De som vill kan följa med.",
    errorWord: "Dom",
    correctWord: "De",
    explanation:
      "I skriftsprak används 'de' (subjektsform) och 'dem' (objektsform), inte 'dom'. Här är det subjektsform som behövs.",
  },
  {
    id: "ordklasser-ec-hog-3",
    type: "error-correction",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Rätta felaktigt använd ordklass i meningen.",
    sentence: "Jag gav boken till dom.",
    correctedSentence: "Jag gav boken till dem.",
    errorWord: "dom",
    correctWord: "dem",
    explanation:
      "Efter preposition ('till') används objektsformen 'dem', inte 'dom'.",
  },
  {
    id: "ordklasser-ec-hog-4",
    type: "error-correction",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Rätta det felaktiga adjektivet i meningen.",
    sentence: "De fick en jättestor paketen.",
    correctedSentence: "De fick ett jättestort paket.",
    errorWord: "jättestor paketen",
    correctWord: "jättestort paket",
    explanation:
      "'Paket' är ett ett-ord, sa adjektivet ska vara 'jättestort' (neutrum). Dessutom ska det vara obestamd form 'paket', inte 'paketen'.",
  },
  {
    id: "ordklasser-ec-hog-5",
    type: "error-correction",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Rätta pronomenfelet i meningen.",
    sentence: "Mellan du och jag sagt är det har en hemlighet.",
    correctedSentence: "Mellan dig och mig sagt är det har en hemlighet.",
    errorWord: "du och jag",
    correctWord: "dig och mig",
    explanation:
      "Efter preposition ('mellan') används objektsformen: 'dig' och 'mig', inte 'du' och 'jag'.",
  },
];

const ordklasserGymnasietEC: ErrorCorrectionExercise[] = [
  {
    id: "ordklasser-ec-gym-1",
    type: "error-correction",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Rätta det grammatiska felet i meningen.",
    sentence: "Författaren vars bok blivit prisbelont tackade publiken.",
    correctedSentence: "Författaren vars bok blivit prisbelont tackade publiken.",
    errorWord: "prisbelont",
    correctWord: "prisbelont",
    explanation:
      "Meningen är korrekt. 'Vars' är genitiv av relativpronomenet 'som/vilken'. Notera att 'prisbelont' böjs i neutrum för att kongruera med 'bok' (ett-ord).",
  },
  {
    id: "ordklasser-ec-gym-2",
    type: "error-correction",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Rätta felet med verbkongruens.",
    sentence: "Ingen av eleverna vare sig vill eller kan lösa uppgiften.",
    correctedSentence: "Ingen av eleverna vare sig vill eller kan lösa uppgiften.",
    errorWord: "vill",
    correctWord: "vill",
    explanation:
      "Meningen är korrekt. 'Ingen' är singulart subjekt, sa verbet står i singular: 'vill' och 'kan'. Hade subjektet varit 'inga' (plural) hade verbformen ändå blivit densamma i svenska.",
  },
  {
    id: "ordklasser-ec-gym-3",
    type: "error-correction",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Rätta det felaktiga pronomenet.",
    sentence: "Uppsatsen som hen lämnade in var välskriven.",
    correctedSentence: "Uppsatsen som hen lämnade in var välskriven.",
    errorWord: "hen",
    correctWord: "hen",
    explanation:
      "Pronomenet 'hen' är ett könsneutralt pronomen som fungerar korrekt har. Det blev officiellt uppfordrat i SAOL 2015.",
  },
  {
    id: "ordklasser-ec-gym-4",
    type: "error-correction",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Rätta felaktig adjektivbojning.",
    sentence: "Den nya studenten var mycket duktig.",
    correctedSentence: "Den nye studenten var mycket duktig.",
    errorWord: "nya",
    correctWord: "nye",
    explanation:
      "Vid bestämd form singularis maskulinum av adjektiv kan formen 'nye' användas för manliga referenter: 'den nye studenten'. Dock accepteras 'nya' alltmer i modernt språk.",
  },
  {
    id: "ordklasser-ec-gym-5",
    type: "error-correction",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Rätta det felaktiga relativpronomenet.",
    sentence: "Mannen vad jag träffade igår är lärare.",
    correctedSentence: "Mannen som jag träffade igår är lärare.",
    errorWord: "vad",
    correctWord: "som",
    explanation:
      "'Vad' är ett frågeord och används inte som relativpronomen. Korrekt relativpronomen är 'som' eller 'vilken'.",
  },
];

const ordklasserHogstadietSA: SentenceAnalysisExercise[] = [
  {
    id: "ordklasser-sa-hog-1",
    type: "sentence-analysis",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Bestam ordklassen för varje markerat ord.",
    sentence: "Den lilla flickan sprang snabbt över gatan.",
    parts: [
      { text: "Den", role: "Artikel" },
      { text: "lilla", role: "Adjektiv" },
      { text: "flickan", role: "Substantiv" },
      { text: "sprang", role: "Verb" },
      { text: "snabbt", role: "Adverb" },
      { text: "över", role: "Preposition" },
      { text: "gatan", role: "Substantiv" },
    ],
    roleOptions: [
      "Substantiv",
      "Verb",
      "Adjektiv",
      "Adverb",
      "Preposition",
      "Artikel",
      "Pronomen",
      "Konjunktion",
    ],
  },
  {
    id: "ordklasser-sa-hog-2",
    type: "sentence-analysis",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Bestam ordklassen för varje markerat ord.",
    sentence: "Vi och de åkte dit eftersom vädret var fint.",
    parts: [
      { text: "Vi", role: "Pronomen" },
      { text: "och", role: "Konjunktion" },
      { text: "de", role: "Pronomen" },
      { text: "åkte", role: "Verb" },
      { text: "dit", role: "Adverb" },
      { text: "eftersom", role: "Konjunktion" },
      { text: "vädret", role: "Substantiv" },
      { text: "var", role: "Verb" },
      { text: "fint", role: "Adjektiv" },
    ],
    roleOptions: [
      "Substantiv",
      "Verb",
      "Adjektiv",
      "Adverb",
      "Pronomen",
      "Konjunktion",
      "Preposition",
    ],
  },
  {
    id: "ordklasser-sa-hog-3",
    type: "sentence-analysis",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Bestam ordklassen för varje markerat ord.",
    sentence: "Ack, vilken vacker solnedgång bakom bergen!",
    parts: [
      { text: "Ack", role: "Interjektion" },
      { text: "vilken", role: "Pronomen" },
      { text: "vacker", role: "Adjektiv" },
      { text: "solnedgång", role: "Substantiv" },
      { text: "bakom", role: "Preposition" },
      { text: "bergen", role: "Substantiv" },
    ],
    roleOptions: [
      "Substantiv",
      "Verb",
      "Adjektiv",
      "Adverb",
      "Preposition",
      "Pronomen",
      "Interjektion",
    ],
  },
];

const ordklasserGymnasietSA: SentenceAnalysisExercise[] = [
  {
    id: "ordklasser-sa-gym-1",
    type: "sentence-analysis",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Bestam ordklassen för varje ord i meningen.",
    sentence: "Den mest framgångsrika författaren hade dessutom skrivit två essaer.",
    parts: [
      { text: "Den", role: "Artikel" },
      { text: "mest", role: "Adverb" },
      { text: "framgångsrika", role: "Adjektiv" },
      { text: "författaren", role: "Substantiv" },
      { text: "hade", role: "Verb (hjalpverb)" },
      { text: "dessutom", role: "Adverb" },
      { text: "skrivit", role: "Verb (supinum)" },
      { text: "två", role: "Räknord" },
      { text: "essaer", role: "Substantiv" },
    ],
    roleOptions: [
      "Substantiv",
      "Verb (hjalpverb)",
      "Verb (supinum)",
      "Adjektiv",
      "Adverb",
      "Artikel",
      "Räknord",
      "Preposition",
    ],
  },
  {
    id: "ordklasser-sa-gym-2",
    type: "sentence-analysis",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Bestam ordklassen för varje ord.",
    sentence: "Om man inte förstår sambandet måste man läsa texten noggrant igen.",
    parts: [
      { text: "Om", role: "Konjunktion (subjunktion)" },
      { text: "man", role: "Pronomen" },
      { text: "inte", role: "Adverb" },
      { text: "förstår", role: "Verb" },
      { text: "sambandet", role: "Substantiv" },
      { text: "måste", role: "Verb (hjalpverb)" },
      { text: "man", role: "Pronomen" },
      { text: "läsa", role: "Verb (infinitiv)" },
      { text: "texten", role: "Substantiv" },
      { text: "noggrant", role: "Adverb" },
      { text: "igen", role: "Adverb" },
    ],
    roleOptions: [
      "Substantiv",
      "Verb",
      "Verb (hjalpverb)",
      "Verb (infinitiv)",
      "Adjektiv",
      "Adverb",
      "Pronomen",
      "Konjunktion (subjunktion)",
      "Preposition",
    ],
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Meningsbyggnad (hogstadiet & gymnasiet)
// ---------------------------------------------------------------------------

const meningsbyggnadHogstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "meningsbyggnad-ec-hog-1",
    type: "error-correction",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Rätta ordföljdsfelet i meningen.",
    sentence: "Igår jag gick till skolan.",
    correctedSentence: "Igår gick jag till skolan.",
    errorWord: "jag gick",
    correctWord: "gick jag",
    explanation:
      "I svenska har vi omvänd ordföljd (inversion) när meningen börjar med något annat an subjektet. Verbet ska komma på andra plats: 'Igår gick jag...'.",
  },
  {
    id: "meningsbyggnad-ec-hog-2",
    type: "error-correction",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Rätta ordföljdsfelet i bisatsen.",
    sentence: "Hon sa att hon hade inte sett filmen.",
    correctedSentence: "Hon sa att hon inte hade sett filmen.",
    errorWord: "hade inte",
    correctWord: "inte hade",
    explanation:
      "I bisatser (efter att, om, när etc.) placeras negationen 'inte' före verbet: 'att hon inte hade sett'. Detta kallas BIFF-regeln.",
  },
  {
    id: "meningsbyggnad-ec-hog-3",
    type: "error-correction",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Rätta ordföljdsfelet.",
    sentence: "På sommaren vi brukar bada i sjön.",
    correctedSentence: "På sommaren brukar vi bada i sjön.",
    errorWord: "vi brukar",
    correctWord: "brukar vi",
    explanation:
      "Omvand ordföljd: när meningen inleds med ett adverbial ('Pa sommaren') måste verbet komma före subjektet.",
  },
  {
    id: "meningsbyggnad-ec-hog-4",
    type: "error-correction",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Rätta meningsbyggnadsfelet.",
    sentence: "Boken som jag läser den är jättebra.",
    correctedSentence: "Boken som jag läser är jättebra.",
    errorWord: "läser den",
    correctWord: "läser",
    explanation:
      "Här finns en överflödig pronomenkopiering. När 'boken' redan är nämnd som subjekt och refereras via 'som', behövs inte 'den' igen.",
  },
  {
    id: "meningsbyggnad-ec-hog-5",
    type: "error-correction",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Rätta bisatsfelet.",
    sentence: "När han inte kom vi blev oroliga.",
    correctedSentence: "När han inte kom blev vi oroliga.",
    errorWord: "kom vi",
    correctWord: "kom blev vi",
    explanation:
      "Huvudsatsen efter en bisats har omvänd ordföljd. Korrekt: 'När han inte kom, blev vi oroliga.'",
  },
];

const meningsbyggnadGymnasietEC: ErrorCorrectionExercise[] = [
  {
    id: "meningsbyggnad-ec-gym-1",
    type: "error-correction",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Rätta det stilistiska meningsbyggnadsfelet.",
    sentence: "Rapporten konstaterar att klimatförändringarna går inte att ignorera.",
    correctedSentence: "Rapporten konstaterar att klimatförändringarna inte går att ignorera.",
    errorWord: "går inte",
    correctWord: "inte går",
    explanation:
      "I bisatser (efter 'att') gäller BIFF-regeln: satsadverbialet 'inte' placeras före det finita verbet.",
  },
  {
    id: "meningsbyggnad-ec-gym-2",
    type: "error-correction",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Rätta det syftningsfelet i meningen.",
    sentence: "Lisa sa till Anna att hon var dum.",
    correctedSentence: "Lisa sa till Anna att Anna var dum.",
    errorWord: "hon",
    correctWord: "Anna",
    explanation:
      "Pronomenet 'hon' har otydlig syftning — det kan syfta på både Lisa och Anna. Undvik tvetydig syftning genom att upprepat namn eller omformulera meningen.",
  },
  {
    id: "meningsbyggnad-ec-gym-3",
    type: "error-correction",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Rätta felet med satsradning.",
    sentence: "Hon var trött hon gick och la sig tidigt.",
    correctedSentence: "Hon var trött, sa hon gick och la sig tidigt.",
    errorWord: "trött hon",
    correctWord: "trött, sa hon",
    explanation:
      "Två huvudsatser kan inte bara staplas utan bindeord. Anvand konjunktion ('sa', 'och', 'därför'), semikolon eller punkt.",
  },
  {
    id: "meningsbyggnad-ec-gym-4",
    type: "error-correction",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Rätta felet med particip.",
    sentence: "Sittandes på banken betraktade han solnedgången.",
    correctedSentence: "Sittande på banken betraktade han solnedgången.",
    errorWord: "Sittandes",
    correctWord: "Sittande",
    explanation:
      "Presens particip i skriftsprak har inte s-ändelse. 'Sittande' är korrekt form; 'sittandes' är talsprak.",
  },
];

const meningsbyggnadHogstadietSAExtra: SentenceAnalysisExercise[] = [
  {
    id: "meningsbyggnad-sa-hog-5",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Markera satsdelarna i meningen.",
    sentence: "Med stor entusiasm presenterade eleven sitt projekt för klassen.",
    parts: [
      { text: "Med stor entusiasm", role: "Adverbial" },
      { text: "presenterade", role: "Predikat" },
      { text: "eleven", role: "Subjekt" },
      { text: "sitt projekt", role: "Objekt" },
      { text: "för klassen", role: "Adverbial" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt", "Adverbial"],
  },
  {
    id: "meningsbyggnad-sa-hog-6",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Markera satsdelarna i meningen med direkt och indirekt objekt.",
    sentence: "Coachen visade laget den nya strategin.",
    parts: [
      { text: "Coachen", role: "Subjekt" },
      { text: "visade", role: "Predikat" },
      { text: "laget", role: "Indirekt objekt" },
      { text: "den nya strategin", role: "Direkt objekt" },
    ],
    roleOptions: [
      "Subjekt",
      "Predikat",
      "Direkt objekt",
      "Indirekt objekt",
      "Adverbial",
    ],
  },
  {
    id: "meningsbyggnad-sa-hog-7",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Markera satsdelarna, inklusive predikativ.",
    sentence: "Filmen var otroligt spännande.",
    parts: [
      { text: "Filmen", role: "Subjekt" },
      { text: "var", role: "Predikat" },
      { text: "otroligt spännande", role: "Predikativ" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt", "Adverbial", "Predikativ"],
  },
];

const meningsbyggnadGymnasietSAExtra: SentenceAnalysisExercise[] = [
  {
    id: "meningsbyggnad-sa-gym-5",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Analysera satsdelarna i denna mening med passiv form.",
    sentence: "Förslaget har granskats grundligt av den parlamentariska kommittén.",
    parts: [
      { text: "Förslaget", role: "Subjekt" },
      { text: "har granskats", role: "Predikat" },
      { text: "grundligt", role: "Adverbial" },
      { text: "av den parlamentariska kommittén", role: "Agentadverbial" },
    ],
    roleOptions: [
      "Subjekt",
      "Predikat",
      "Objekt",
      "Adverbial",
      "Agentadverbial",
      "Predikativ",
    ],
  },
  {
    id: "meningsbyggnad-sa-gym-6",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Analysera satsdelarna med fokus på bisats.",
    sentence: "Eftersom regnet tilltagit avbröt domaren matchen efter halvtid.",
    parts: [
      { text: "Eftersom regnet tilltagit", role: "Adverbial (bisats)" },
      { text: "avbröt", role: "Predikat" },
      { text: "domaren", role: "Subjekt" },
      { text: "matchen", role: "Objekt" },
      { text: "efter halvtid", role: "Adverbial" },
    ],
    roleOptions: [
      "Subjekt",
      "Predikat",
      "Objekt",
      "Adverbial",
      "Adverbial (bisats)",
      "Predikativ",
    ],
  },
  {
    id: "meningsbyggnad-sa-gym-7",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Analysera satsdelarna i denna formella mening.",
    sentence: "De involverade parterna tilldelades ersättning av forsäkringsbolaget.",
    parts: [
      { text: "De involverade parterna", role: "Subjekt" },
      { text: "tilldelades", role: "Predikat" },
      { text: "ersättning", role: "Objekt" },
      { text: "av forsäkringsbolaget", role: "Agentadverbial" },
    ],
    roleOptions: [
      "Subjekt",
      "Predikat",
      "Objekt",
      "Adverbial",
      "Agentadverbial",
    ],
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Skiljetecken (hogstadiet & gymnasiet)
// ---------------------------------------------------------------------------

const skiljeteckenHogstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "skiljetecken-ec-hog-1",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Rätta felet med skiljetecken.",
    sentence: "Han frågade om vi ville följa med?",
    correctedSentence: "Han frågade om vi ville följa med.",
    errorWord: "med?",
    correctWord: "med.",
    explanation:
      "Indirekt frågesats (börjar med 'om') avslutas med punkt, inte frågetecken. Frågetecken används bara i direkta frågor.",
  },
  {
    id: "skiljetecken-ec-hog-2",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Rätta kommatfelet.",
    sentence: "Vi åkte till stugan som låg vid sjön, och badade hela dagen.",
    correctedSentence: "Vi åkte till stugan som låg vid sjön och badade hela dagen.",
    errorWord: "sjön,",
    correctWord: "sjön",
    explanation:
      "Komma sätts inte före 'och' när det binder ihop två verb med samma subjekt. Komma före 'och' används bara vid uppräkning eller när det binder två fullständiga huvudsatser.",
  },
  {
    id: "skiljetecken-ec-hog-3",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Lagg till saknat skiljetecken.",
    sentence: "Jag tycker om att läsa böcker tidningar och serier.",
    correctedSentence: "Jag tycker om att läsa böcker, tidningar och serier.",
    errorWord: "böcker tidningar",
    correctWord: "böcker, tidningar",
    explanation:
      "Vid uppräkning ska komma sättas mellan leden, förutom före det sista ledet där 'och' används.",
  },
  {
    id: "skiljetecken-ec-hog-4",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Rätta felet med kolon.",
    sentence: "Vi behövde kopa: mjolk, brod och smor.",
    correctedSentence: "Vi behövde kopa mjolk, brod och smor.",
    errorWord: "kopa:",
    correctWord: "kopa",
    explanation:
      "Kolon ska inte användas mitt i en mening som flyter på naturligt. Kolon används efter en hel mening som inleder en uppräkning.",
  },
  {
    id: "skiljetecken-ec-hog-5",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Rätta kommatfelet.",
    sentence: "När solen gick ner blev det kallt.",
    correctedSentence: "När solen gick ner, blev det kallt.",
    errorWord: "ner blev",
    correctWord: "ner, blev",
    explanation:
      "Komma ska sättas mellan en inledande bisats och huvudsatsen. 'När solen gick ner' är bisatsen.",
  },
];

const skiljeteckenGymnasietEC: ErrorCorrectionExercise[] = [
  {
    id: "skiljetecken-ec-gym-1",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Rätta felet med semikolon.",
    sentence: "Rapporten var tydlig, den visade på allvarliga brister.",
    correctedSentence: "Rapporten var tydlig; den visade på allvarliga brister.",
    errorWord: "tydlig,",
    correctWord: "tydlig;",
    explanation:
      "Två besläktade huvudsatser utan bindeord bor skiljas med semikolon, inte komma. Kommafel av denna typ kallas 'satsradning'.",
  },
  {
    id: "skiljetecken-ec-gym-2",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Rätta felet med tankstreck.",
    sentence: "Den berömda författaren - som levde på 1800-talet - skrev många romaner.",
    correctedSentence: "Den berömda författaren – som levde på 1800-talet – skrev många romaner.",
    errorWord: "-",
    correctWord: "–",
    explanation:
      "I inskjutna satser används tankstreck (–), inte bindestreck (-). Bindestreck är kortare och används i sammansatta ord.",
  },
  {
    id: "skiljetecken-ec-gym-3",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Rätta felet med anföring.",
    sentence: "\"Jag kommer snart\" sa hon \"vanta på mig\".",
    correctedSentence: "\"Jag kommer snart\", sa hon, \"vanta på mig\".",
    errorWord: "snart\" sa hon \"vanta",
    correctWord: "snart\", sa hon, \"vanta",
    explanation:
      "Vid delad anföring ska komma sättas efter den första anföringen och före den andra: '...snart\", sa hon, \"vanta...'.",
  },
  {
    id: "skiljetecken-ec-gym-4",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Rätta felet med apostrof.",
    sentence: "Det är Alex's bok.",
    correctedSentence: "Det är Alex bok.",
    errorWord: "Alex's",
    correctWord: "Alex",
    explanation:
      "På svenska används inte apostrof vid genitiv. Korrekt är 'Alex bok'. Apostrof används bara när namnet slutar på s, x eller z: 'Agnes' bok'.",
  },
  {
    id: "skiljetecken-ec-gym-5",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Rätta interpunktionsfelet.",
    sentence: "Det finns tre alternativ, antingen åker vi buss, tåg eller bil.",
    correctedSentence: "Det finns tre alternativ: antingen åker vi buss, tåg eller bil.",
    errorWord: "alternativ,",
    correctWord: "alternativ:",
    explanation:
      "Före en uppräkning som förklarar ett påstående används kolon, inte komma.",
  },
];

const skiljeteckenHogstadietCat: CategorizationExercise[] = [
  {
    id: "skiljetecken-cat-hog-1",
    type: "categorization",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Sortera exemplen efter vilken typ av mening de avslutas med.",
    items: [
      "Vad heter du",
      "Stanna där",
      "Det var en fin dag",
      "Vilken fantastisk utsikt",
      "När börjar filmen",
      "Spring",
    ],
    categories: ["Punkt (.)", "Frågetecken (?)", "Utropstecken (!)"],
    correctMapping: {
      "Vad heter du": "Frågetecken (?)",
      "Stanna där": "Utropstecken (!)",
      "Det var en fin dag": "Punkt (.)",
      "Vilken fantastisk utsikt": "Utropstecken (!)",
      "När börjar filmen": "Frågetecken (?)",
      "Spring": "Utropstecken (!)",
    },
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Stavning (hogstadiet & gymnasiet)
// ---------------------------------------------------------------------------

const stavningHogstadietECExtra: ErrorCorrectionExercise[] = [
  {
    id: "stavning-ec-hog-7",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Det är viktigt att skilja mellan de och dem.",
    correctedSentence: "Det är viktigt att skilja mellan de och dem.",
    errorWord: "de",
    correctWord: "de",
    explanation:
      "Meningen är korrekt. 'De' är subjektsform och 'dem' är objektsform. Många forväxlar dessa i skrift.",
  },
  {
    id: "stavning-ec-hog-8",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Han tykte att provet var svårt.",
    correctedSentence: "Han tyckte att provet var svårt.",
    errorWord: "tykte",
    correctWord: "tyckte",
    explanation:
      "Verbet 'tycka' i preteritum stavas 'tyckte' med ck, inte bara k.",
  },
  {
    id: "stavning-ec-hog-9",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Vi åt glass efter nåra timmar.",
    correctedSentence: "Vi åt glass efter några timmar.",
    errorWord: "nåra",
    correctWord: "några",
    explanation:
      "'Några' stavas med g före r. 'Nåra' är talsprak.",
  },
  {
    id: "stavning-ec-hog-10",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Hon ska bli injengör när hon blir stor.",
    correctedSentence: "Hon ska bli ingenjör när hon blir stor.",
    errorWord: "injengör",
    correctWord: "ingenjör",
    explanation:
      "'Ingenjor' stavas med ng före e och j före o. Det är ett vanligt förväxlingsord.",
  },
];

const stavningGymnasietECExtra: ErrorCorrectionExercise[] = [
  {
    id: "stavning-ec-gym-7",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Symposiumet fokuserade på medier's påverkan.",
    correctedSentence: "Symposiet fokuserade på mediers påverkan.",
    errorWord: "medier's",
    correctWord: "mediers",
    explanation:
      "På svenska används inte apostrof vid genitiv. Korrekt är 'mediers'. Dessutom stavas det 'symposiet'.",
  },
  {
    id: "stavning-ec-gym-8",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Eventuelt kan vi behöva omförhandla avtalet.",
    correctedSentence: "Eventuellt kan vi behöva omförhandla avtalet.",
    errorWord: "Eventuelt",
    correctWord: "Eventuellt",
    explanation:
      "'Eventuellt' stavas med dubbelt l. Jämför med 'aktuellt', 'virtuellt' — adverb på -ellt har dubbelt l.",
  },
  {
    id: "stavning-ec-gym-9",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Studien visar att effeckterna är betydande.",
    correctedSentence: "Studien visar att effekterna är betydande.",
    errorWord: "effeckterna",
    correctWord: "effekterna",
    explanation:
      "'Effekterna' stavas utan ck. Grundformen är 'effekt' med enbart k.",
  },
  {
    id: "stavning-ec-gym-10",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Resultat krävde en annan metodik.",
    correctedSentence: "Resultatet krävde en annan metodik.",
    errorWord: "Resultat",
    correctWord: "Resultatet",
    explanation:
      "I bestämd form singular är det 'resultatet' (ett-ord med bestämd ändelse -et).",
  },
];

const stavningHogstadietCat: CategorizationExercise[] = [
  {
    id: "stavning-cat-hog-1",
    type: "categorization",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Sortera orden: rätt eller fel stavning?",
    items: ["tyckte", "tykte", "började", "borjade", "ingenjör", "injengör", "professor", "professer"],
    categories: ["Rätt stavat", "Fel stavat"],
    correctMapping: {
      tyckte: "Rätt stavat",
      tykte: "Fel stavat",
      började: "Rätt stavat",
      borjade: "Fel stavat",
      "ingenjör": "Rätt stavat",
      injengör: "Fel stavat",
      professor: "Rätt stavat",
      professer: "Fel stavat",
    },
  },
  {
    id: "stavning-cat-hog-2",
    type: "categorization",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Sortera orden efter om de är en-ord eller ett-ord.",
    items: ["stol", "bord", "lampa", "fönster", "dörr", "tak", "bok", "hus"],
    categories: ["En-ord", "Ett-ord"],
    correctMapping: {
      stol: "En-ord",
      bord: "Ett-ord",
      lampa: "En-ord",
      "fönster": "Ett-ord",
      dörr: "En-ord",
      tak: "Ett-ord",
      bok: "En-ord",
      hus: "Ett-ord",
    },
  },
];

const stavningGymnasietCat: CategorizationExercise[] = [
  {
    id: "stavning-cat-gym-1",
    type: "categorization",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Sortera orden: skrivs de ihop eller sar?",
    items: ["idag", "i dag", "med mera", "medmera", "till exempel", "tillexempel", "i stället", "istället"],
    categories: ["Ihopskrivet (korrekt)", "Särskrivet (korrekt)"],
    correctMapping: {
      idag: "Ihopskrivet (korrekt)",
      "i dag": "Särskrivet (korrekt)",
      "med mera": "Särskrivet (korrekt)",
      medmera: "Ihopskrivet (korrekt)",
      "till exempel": "Särskrivet (korrekt)",
      tillexempel: "Ihopskrivet (korrekt)",
      "i stället": "Särskrivet (korrekt)",
      "istället": "Ihopskrivet (korrekt)",
    },
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Ordbildning (hogstadiet & gymnasiet)
// ---------------------------------------------------------------------------

const ordbildningHogstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "ordbildning-ec-hog-1",
    type: "error-correction",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Rätta särskrivningsfelet.",
    sentence: "Vi köper frukt på den nya matvarubutik affären.",
    correctedSentence: "Vi köper frukt på den nya matvarubutiksaffaren.",
    errorWord: "matvarubutik affären",
    correctWord: "matvarubutiksaffaren",
    explanation:
      "På svenska skrivs sammansatta ord ihop. 'Matvarubutiksaffaren' är ett sammansatt ord och ska inte särskrivas.",
  },
  {
    id: "ordbildning-ec-hog-2",
    type: "error-correction",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Rätta särskrivningsfelet.",
    sentence: "Vi hade en träning pass på eftermiddagen.",
    correctedSentence: "Vi hade ett träningspass på eftermiddagen.",
    errorWord: "träning pass",
    correctWord: "träningspass",
    explanation:
      "'Traningspass' är ett sammansatt ord med foge-s: träning + s + pass. Sammansatta ord skrivs ihop på svenska.",
  },
  {
    id: "ordbildning-ec-hog-3",
    type: "error-correction",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Rätta särskrivningsfelet.",
    sentence: "Han körde en brand bil.",
    correctedSentence: "Han körde en brandbil.",
    errorWord: "brand bil",
    correctWord: "brandbil",
    explanation:
      "'Brandbil' är ett sammansatt substantiv (brand + bil) och skrivs ihop. Särskrivning ändrar ibland betydelsen helt.",
  },
  {
    id: "ordbildning-ec-hog-4",
    type: "error-correction",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Rätta särskrivningsfelet.",
    sentence: "Där finns en rull trappa.",
    correctedSentence: "Där finns en rulltrappa.",
    errorWord: "rull trappa",
    correctWord: "rulltrappa",
    explanation:
      "'Rulltrappa' är sammansatt: rull + trappa. Särskriver man det får man 'en rull trappa' — en trappa som är rull?",
  },
];

const ordbildningGymnasietEC: ErrorCorrectionExercise[] = [
  {
    id: "ordbildning-ec-gym-1",
    type: "error-correction",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Rätta felet med ordbildning.",
    sentence: "Forsknings resultaten var överraskande.",
    correctedSentence: "Forskningsresultaten var överraskande.",
    errorWord: "Forsknings resultaten",
    correctWord: "Forskningsresultaten",
    explanation:
      "Sammansatta ord skrivs ihop: forskning + s + resultaten. Foge-s binder samman leden.",
  },
  {
    id: "ordbildning-ec-gym-2",
    type: "error-correction",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Rätta felet med prefix.",
    sentence: "Elevernas resultat var otillfredstallande.",
    correctedSentence: "Elevernas resultat var otillfredsställande.",
    errorWord: "otillfredstallande",
    correctWord: "otillfredsställande",
    explanation:
      "'Otillfredsstallande' stavas med dubbelt s: o + till + freds + ställande. Det är sammansatt av 'till freds' + 'ställande' med prefixet 'o-'.",
  },
  {
    id: "ordbildning-ec-gym-3",
    type: "error-correction",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Rätta det felaktiga sammansatta ordet.",
    sentence: "Det krävs en risk- och konsekvensanalys.",
    correctedSentence: "Det krävs en risk- och konsekvensanalys.",
    errorWord: "risk-",
    correctWord: "risk-",
    explanation:
      "Meningen är korrekt! Vid samordning med bindestreck behaller första ledet sitt streck: 'risk- och konsekvensanalys' (dvs. riskanalys och konsekvensanalys).",
  },
];

const ordbildningHogstadietSA: SentenceAnalysisExercise[] = [
  {
    id: "ordbildning-sa-hog-1",
    type: "sentence-analysis",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Dela upp de sammansatta orden i sina delar.",
    sentence: "fotbollsplan, skolbyggnad, bokhandel",
    parts: [
      { text: "fotbollsplan", role: "fot + bolls + plan" },
      { text: "skolbyggnad", role: "skol + byggnad" },
      { text: "bokhandel", role: "bok + handel" },
    ],
    roleOptions: [
      "fot + bolls + plan",
      "skol + byggnad",
      "bok + handel",
      "fot + boll + plan",
      "bok + hand + el",
    ],
  },
  {
    id: "ordbildning-sa-hog-2",
    type: "sentence-analysis",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Identifiera prefix och suffix i orden.",
    sentence: "olycklig, förväning, barndom",
    parts: [
      { text: "olycklig", role: "prefix: o- + lyck + suffix: -lig" },
      { text: "förväning", role: "prefix: for- + van + suffix: -ing" },
      { text: "barndom", role: "barn + suffix: -dom" },
    ],
    roleOptions: [
      "prefix: o- + lyck + suffix: -lig",
      "prefix: for- + van + suffix: -ing",
      "barn + suffix: -dom",
      "prefix: o- + lycklig",
      "forvan + suffix: -ing",
    ],
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Textbindning (hogstadiet & gymnasiet)
// ---------------------------------------------------------------------------

const textbindningHogstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "textbindning-ec-hog-1",
    type: "error-correction",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Rätta det felaktiga bindeordet.",
    sentence: "Han är trött men han vaknade tidigt.",
    correctedSentence: "Han är trött eftersom han vaknade tidigt.",
    errorWord: "men",
    correctWord: "eftersom",
    explanation:
      "'Men' uttrycker en kontrast, men har är sambandet orsak-verkan: han är trött EFTERSOM han vaknade tidigt.",
  },
  {
    id: "textbindning-ec-hog-2",
    type: "error-correction",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Rätta det felaktiga bindeordet.",
    sentence: "Vi hade planerat en utflykt. Därför regnade det hela dagen.",
    correctedSentence: "Vi hade planerat en utflykt. Däremot regnade det hela dagen.",
    errorWord: "Därför",
    correctWord: "Däremot",
    explanation:
      "'Därför' anger orsak-verkan, men har behövs en kontrast ('däremot' eller 'men'): utflykten var planerad, MEN det regnade.",
  },
  {
    id: "textbindning-ec-hog-3",
    type: "error-correction",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Förbättra textbindningen.",
    sentence: "Jag gillar fotboll. Jag gillar hockey. Jag gillar tennis.",
    correctedSentence: "Jag gillar fotboll, hockey och tennis.",
    errorWord: "Jag gillar hockey. Jag gillar tennis.",
    correctWord: "hockey och tennis.",
    explanation:
      "Upprepad meningsstruktur gör texten enformig. Samordna med komma och 'och' för bättre flyt.",
  },
];

const textbindningGymnasietEC: ErrorCorrectionExercise[] = [
  {
    id: "textbindning-ec-gym-1",
    type: "error-correction",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Rätta det felaktiga konnektivet.",
    sentence: "Forskning visar att motion förbättrar hälsan. Exempelvis bor alla träna mer.",
    correctedSentence: "Forskning visar att motion förbättrar hälsan. Därför bor alla träna mer.",
    errorWord: "Exempelvis",
    correctWord: "Därför",
    explanation:
      "'Exempelvis' inleder ett exempel, men har dras en slutsats. 'Därför' eller 'följaktligen' uttrycker slutledning.",
  },
  {
    id: "textbindning-ec-gym-2",
    type: "error-correction",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Förbättra den tematiska bindningen.",
    sentence: "Romanen skildrar fattigdom. Författaren använder många metaforer. Boken fick fina recensioner.",
    correctedSentence: "Romanen skildrar fattigdom. Författaren använder många metaforer för att gestalta denna tematik. Boken fick därför fina recensioner.",
    errorWord: "metaforer. Boken",
    correctWord: "metaforer för att gestalta denna tematik. Boken fick därför",
    explanation:
      "Texten saknar tematiska kopplingar mellan meningarna. Referensbindning ('denna tematik') och kausala konnektiv ('därför') skapar sammanhang.",
  },
];

const textbindningHogstadietCat: CategorizationExercise[] = [
  {
    id: "textbindning-cat-hog-1",
    type: "categorization",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Sortera bindeorden efter funktion.",
    items: ["därför", "men", "dessutom", "eftersom", "däremot", "även"],
    categories: ["Orsak/Följd", "Kontrast", "Tillägg"],
    correctMapping: {
      "därför": "Orsak/Följd",
      men: "Kontrast",
      dessutom: "Tillägg",
      eftersom: "Orsak/Följd",
      "däremot": "Kontrast",
      "även": "Tillägg",
    },
  },
  {
    id: "textbindning-cat-hog-2",
    type: "categorization",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Sortera bindeorden efter funktion.",
    items: ["först", "sedan", "slutligen", "samtidigt", "tidigare", "därefter"],
    categories: ["Tidsföljd", "Samtidighet"],
    correctMapping: {
      "först": "Tidsföljd",
      sedan: "Tidsföljd",
      slutligen: "Tidsföljd",
      samtidigt: "Samtidighet",
      tidigare: "Tidsföljd",
      "därefter": "Tidsföljd",
    },
  },
];

const textbindningGymnasietCat: CategorizationExercise[] = [
  {
    id: "textbindning-cat-gym-1",
    type: "categorization",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Sortera konnektiven efter logisk funktion.",
    items: [
      "sammanfattningsvis",
      "å andra sidan",
      "följaktligen",
      "emellertid",
      "därutöver",
      "med andra ord",
    ],
    categories: ["Sammanfattning", "Kontrast", "Slutledning", "Tillägg"],
    correctMapping: {
      sammanfattningsvis: "Sammanfattning",
      "å andra sidan": "Kontrast",
      "följaktligen": "Slutledning",
      emellertid: "Kontrast",
      "därutöver": "Tillägg",
      "med andra ord": "Sammanfattning",
    },
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Stilistik (hogstadiet & gymnasiet)
// ---------------------------------------------------------------------------

const stilistikHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "stilistik-mc-hog-1",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    relatedTextSlug: "hosten-kommer",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Hon var snabb som en gazell.'",
    options: ["Metafor", "Liknelse", "Hyperbol", "Besjälning"],
    correct: 1,
    explanation:
      "Det är en liknelse — en jämförelse med hjälp av 'som'. Hon jämförs med en gazell.",
  },
  {
    id: "stilistik-mc-hog-2",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    relatedTextSlug: "spegelbilden",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Havet sjong för oss den kvallen.'",
    options: ["Liknelse", "Metafor", "Besjälning", "Anafor"],
    correct: 2,
    explanation:
      "Det är besjälning (personifikation) — havet får en mänsklig egenskap (att sjunga).",
  },
  {
    id: "stilistik-mc-hog-3",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Jag dog av skratt!'",
    options: ["Liknelse", "Besjälning", "Anafor", "Hyperbol"],
    correct: 3,
    explanation:
      "Det är en hyperbol — en medveten överdrift. Man dor förstås inte bokstavligt av skratt.",
  },
  {
    id: "stilistik-mc-hog-4",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    relatedTextSlug: "stressen",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Tiden är pengar.'",
    options: ["Liknelse", "Metafor", "Hyperbol", "Allitteration"],
    correct: 1,
    explanation:
      "Det är en metafor — tid jämförs direkt med pengar utan 'som' eller 'likt'.",
  },
  {
    id: "stilistik-mc-hog-5",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    relatedTextSlug: "spraket-forandras",
    instruction: "Vilken typ av språk används i texten?",
    prompt: "'Asså bror, den var ju fett ball den filmen ju!'",
    options: ["Formellt språk", "Slang/ungdomssprak", "Akademiskt språk", "Nyhetsspråk"],
    correct: 1,
    explanation:
      "Texten innehaller slang och ungdomssprak: 'asså bror', 'fett ball'. Det är en mycket informell språknivå.",
  },
];

const stilistikHogstadietCat: CategorizationExercise[] = [
  {
    id: "stilistik-cat-hog-1",
    type: "categorization",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    relatedTextSlug: "basta-vannen",
    instruction: "Sortera exemplen efter stilfigur.",
    items: [
      "Stark som en björn",
      "Tiden är pengar",
      "Solen log mot oss",
      "Snabb som en pil",
      "Hennes blick var is",
      "Träden viskade",
    ],
    categories: ["Liknelse", "Metafor", "Besjälning"],
    correctMapping: {
      "Stark som en björn": "Liknelse",
      "Tiden är pengar": "Metafor",
      "Solen log mot oss": "Besjälning",
      "Snabb som en pil": "Liknelse",
      "Hennes blick var is": "Metafor",
      "Träden viskade": "Besjälning",
    },
  },
];

const stilistikGymnasietEC: ErrorCorrectionExercise[] = [
  {
    id: "stilistik-ec-gym-1",
    type: "error-correction",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Rätta den stilistiska inkonsekvensen.",
    sentence: "I den vetenskapliga rapporten konstateras att det är typ jätteviktigt att forska mer.",
    correctedSentence: "I den vetenskapliga rapporten konstateras att det är ytterst viktigt att forska mer.",
    errorWord: "typ jätteviktigt",
    correctWord: "ytterst viktigt",
    explanation:
      "I vetenskapligt/formellt språk passar inte vardagliga uttryck som 'typ jätteviktigt'. Anvand formella synonymer: 'ytterst viktigt', 'av stor betydelse'.",
  },
  {
    id: "stilistik-ec-gym-2",
    type: "error-correction",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Rätta den stilistiska inkonsekvensen.",
    sentence: "Hans argumentation var undermålig, men han fixade en bra slutsats.",
    correctedSentence: "Hans argumentation var undermålig, men han formulerade en övertygande slutsats.",
    errorWord: "fixade en bra",
    correctWord: "formulerade en övertygande",
    explanation:
      "'Fixade' och 'bra' är vardagliga ord som inte passar i en formell analys. Anvand mer precisa och formella uttryck.",
  },
  {
    id: "stilistik-ec-gym-3",
    type: "error-correction",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Rätta den stilistiska inkonsekvensen.",
    sentence: "Hej! Jag skriver för att informera er om att erat avtal utgår.",
    correctedSentence: "Jag skriver för att informera er om att ert avtal utgår.",
    errorWord: "Hej! Jag",
    correctWord: "Jag",
    explanation:
      "I formella brev är 'Hej!' för informellt som inledning. Dessutom är 'erat' felaktigt — korrekt possessivt pronomen är 'ert' (neutrum).",
  },
];

const stilistikGymnasietCat: CategorizationExercise[] = [
  {
    id: "stilistik-cat-gym-1",
    type: "categorization",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Sortera uttrycken efter språklig register/nivå.",
    items: [
      "Härmed meddelas",
      "Kolla in det här",
      "Undersökningen påvisar",
      "De går typ inte",
      "Resultaten indikerar",
      "Fett najs",
    ],
    categories: ["Formellt/akademiskt", "Informellt/vardagligt"],
    correctMapping: {
      "Härmed meddelas": "Formellt/akademiskt",
      "Kolla in det här": "Informellt/vardagligt",
      "Undersökningen påvisar": "Formellt/akademiskt",
      "De går typ inte": "Informellt/vardagligt",
      "Resultaten indikerar": "Formellt/akademiskt",
      "Fett najs": "Informellt/vardagligt",
    },
  },
  {
    id: "stilistik-cat-gym-2",
    type: "categorization",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Sortera stilfigurerna i rätt kategori.",
    items: [
      "Livet är en resa",
      "Stark som en lejon",
      "Jag har sagt det tusen gånger",
      "Blommorna dansade i vinden",
      "Kall som is",
      "Hon är en sol",
    ],
    categories: ["Metafor", "Liknelse", "Hyperbol", "Besjälning"],
    correctMapping: {
      "Livet är en resa": "Metafor",
      "Stark som en lejon": "Liknelse",
      "Jag har sagt det tusen gånger": "Hyperbol",
      "Blommorna dansade i vinden": "Besjälning",
      "Kall som is": "Liknelse",
      "Hon är en sol": "Metafor",
    },
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Meningsbyggnad lagstadiet
// ---------------------------------------------------------------------------

const meningsbyggnadLagstadietMC: MultipleChoiceExercise[] = [
  {
    id: "meningsbyggnad-mc-lag-1",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    relatedTextSlug: "lilla-grodan",
    instruction: "Vilken mening är korrekt?",
    prompt: "Vilken mening är rätt?",
    options: [
      "Hunden ben tuggade på.",
      "Hunden tuggade på benet.",
      "På benet hunden tuggade.",
    ],
    correct: 1,
    explanation:
      "'Hunden tuggade på benet' har rätt ordföljd: subjekt + verb + resten av meningen.",
  },
  {
    id: "meningsbyggnad-mc-lag-2",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Vilken mening är en fråga?",
    prompt: "Vilken av dessa är en fråga?",
    options: [
      "Katten sover på soffan.",
      "Var sover katten?",
      "Katten sover inte.",
    ],
    correct: 1,
    explanation:
      "'Var sover katten?' är en fråga — den börjar med ett frågeord och slutar med frågetecken.",
  },
  {
    id: "meningsbyggnad-mc-lag-3",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Vilken mening är en uppmaning?",
    prompt: "Vilken mening är en uppmaning?",
    options: [
      "Barnen leker ute.",
      "Lek försiktigt!",
      "Vill du leka?",
    ],
    correct: 1,
    explanation:
      "'Lek försiktigt!' är en uppmaning — den talar om för någon vad de ska gora och slutar med utropstecken.",
  },
  {
    id: "meningsbyggnad-mc-lag-4",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Vilken mening har rätt ordföljd?",
    prompt: "Vilken mening låter rätt?",
    options: [
      "Maja äter glass i parken.",
      "Äter Maja glass parken i.",
      "Glass Maja äter i parken.",
    ],
    correct: 0,
    explanation:
      "'Maja äter glass i parken' har rätt ordföljd: först vem (Maja), sedan vad hon gör (äter), och sist var (i parken).",
  },
  {
    id: "meningsbyggnad-mc-lag-5",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Vilken mening är korrekt?",
    prompt: "Vilken mening har rätt ordföljd?",
    options: [
      "Fisken simmar i sjön.",
      "Simmar fisken sjön i.",
      "I sjön fisken simmar.",
    ],
    correct: 0,
    explanation:
      "'Fisken simmar i sjön' är korrekt. Subjektet (fisken) kommer först, sedan verbet (simmar).",
  },
  {
    id: "meningsbyggnad-mc-lag-6",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Vad är subjektet i meningen?",
    prompt: "Vem gör något i meningen: 'Pappa lagar mat.'?",
    options: ["mat", "lagar", "Pappa"],
    correct: 2,
    explanation:
      "Subjektet är 'Pappa' — det är han som gör något (lagar mat).",
  },
  {
    id: "meningsbyggnad-mc-lag-7",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Vad är predikatet i meningen?",
    prompt: "Vad gör Ella i meningen: 'Ella målar en tavla.'?",
    options: ["Ella", "tavla", "målar"],
    correct: 2,
    explanation:
      "Predikatet är 'målar' — det är verbet som berättar vad Ella gör.",
  },
  {
    id: "meningsbyggnad-mc-lag-8",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Vilken mening är korrekt?",
    prompt: "Vilken mening låter bäst?",
    options: [
      "Regnar det ute idag.",
      "Det regnar ute idag.",
      "Ute idag det regnar.",
    ],
    correct: 1,
    explanation:
      "'Det regnar ute idag' har rätt ordföljd. Subjektet (det) kommer före verbet (regnar).",
  },
  {
    id: "meningsbyggnad-mc-lag-9",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Vilken är en hel mening?",
    prompt: "Vilken av dessa är en hel mening?",
    options: [
      "den röda bollen",
      "Bollen studsar högt.",
      "studsar och hoppar",
    ],
    correct: 1,
    explanation:
      "'Bollen studsar högt' är en hel mening. Den har ett subjekt (bollen) och ett predikat (studsar). De andra saknar antingen subjekt eller predikat.",
  },
  {
    id: "meningsbyggnad-mc-lag-10",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Vilken mening berättar vad någon gör?",
    prompt: "Vilken mening talar om vad Leo gör?",
    options: [
      "Leo är glad.",
      "Leo cyklar till skolan.",
      "Leo och hans kompis.",
    ],
    correct: 1,
    explanation:
      "'Leo cyklar till skolan' berättar vad Leo gör (cyklar). 'Leo är glad' beskriver hur Leo mår, och 'Leo och hans kompis' är inte en hel mening.",
  },
];

const meningsbyggnadLagstadietSA: SentenceAnalysisExercise[] = [
  {
    id: "meningsbyggnad-sa-lag-1",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Hitta subjektet (den som gör något) och predikatet (det som gors).",
    sentence: "Katten jagar musen.",
    parts: [
      { text: "Katten", role: "Subjekt" },
      { text: "jagar", role: "Predikat" },
      { text: "musen", role: "Objekt" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt"],
  },
  {
    id: "meningsbyggnad-sa-lag-2",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Hitta subjektet och predikatet.",
    sentence: "Mamma bakar bullar.",
    parts: [
      { text: "Mamma", role: "Subjekt" },
      { text: "bakar", role: "Predikat" },
      { text: "bullar", role: "Objekt" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt"],
  },
  {
    id: "meningsbyggnad-sa-lag-3",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Hitta subjektet och predikatet i meningen.",
    sentence: "Fågeln sjunger i trädet.",
    parts: [
      { text: "Fågeln", role: "Subjekt" },
      { text: "sjunger", role: "Predikat" },
      { text: "i trädet", role: "Platsadverbial" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Platsadverbial"],
  },
  {
    id: "meningsbyggnad-sa-lag-4",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Hitta subjektet och predikatet.",
    sentence: "Barnen leker på gården.",
    parts: [
      { text: "Barnen", role: "Subjekt" },
      { text: "leker", role: "Predikat" },
      { text: "på gården", role: "Platsadverbial" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Platsadverbial"],
  },
  {
    id: "meningsbyggnad-sa-lag-5",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Hitta subjektet, predikatet och objektet.",
    sentence: "Hunden äter maten.",
    parts: [
      { text: "Hunden", role: "Subjekt" },
      { text: "äter", role: "Predikat" },
      { text: "maten", role: "Objekt" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt"],
  },
  {
    id: "meningsbyggnad-sa-lag-6",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Hitta subjektet och predikatet.",
    sentence: "Läraren läser en bok.",
    parts: [
      { text: "Läraren", role: "Subjekt" },
      { text: "läser", role: "Predikat" },
      { text: "en bok", role: "Objekt" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt"],
  },
];

const meningsbyggnadLagstadietCat: CategorizationExercise[] = [
  {
    id: "meningsbyggnad-cat-lag-1",
    type: "categorization",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Sortera orden. Vilka är subjekt (den som gör något) och vilka är predikat (det som görs)?",
    items: ["Katten", "springer", "Ella", "sover", "Bollen", "studsar"],
    categories: ["Subjekt", "Predikat"],
    correctMapping: {
      Katten: "Subjekt",
      springer: "Predikat",
      Ella: "Subjekt",
      sover: "Predikat",
      Bollen: "Subjekt",
      studsar: "Predikat",
    },
  },
  {
    id: "meningsbyggnad-cat-lag-2",
    type: "categorization",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Sortera orden i subjekt och predikat.",
    items: ["Pappa", "lagar", "Hunden", "skäller", "Maja", "sjunger"],
    categories: ["Subjekt", "Predikat"],
    correctMapping: {
      Pappa: "Subjekt",
      lagar: "Predikat",
      Hunden: "Subjekt",
      skäller: "Predikat",
      Maja: "Subjekt",
      sjunger: "Predikat",
    },
  },
  {
    id: "meningsbyggnad-cat-lag-3",
    type: "categorization",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Sortera: Vilka är hela meningar och vilka är bara delar av meningar?",
    items: [
      "Solen skiner.",
      "den stora hunden",
      "Vi äter lunch.",
      "springer fort",
      "Fågeln flyger.",
      "röd och blå",
    ],
    categories: ["Hel mening", "Del av mening"],
    correctMapping: {
      "Solen skiner.": "Hel mening",
      "den stora hunden": "Del av mening",
      "Vi äter lunch.": "Hel mening",
      "springer fort": "Del av mening",
      "Fågeln flyger.": "Hel mening",
      "röd och blå": "Del av mening",
    },
  },
  {
    id: "meningsbyggnad-cat-lag-4",
    type: "categorization",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Sortera meningarna efter typ.",
    items: [
      "Katten sover.",
      "Var är katten?",
      "Kom hit!",
      "Jag gillar glass.",
      "Vad heter du?",
      "Spring fort!",
    ],
    categories: ["Påstående", "Fråga", "Uppmaning"],
    correctMapping: {
      "Katten sover.": "Påstående",
      "Var är katten?": "Fråga",
      "Kom hit!": "Uppmaning",
      "Jag gillar glass.": "Påstående",
      "Vad heter du?": "Fråga",
      "Spring fort!": "Uppmaning",
    },
  },
  {
    id: "meningsbyggnad-cat-lag-5",
    type: "categorization",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Sortera orden i subjekt och predikat.",
    items: ["Fågeln", "flyger", "Bebisen", "gråter", "Bilen", "kör"],
    categories: ["Subjekt", "Predikat"],
    correctMapping: {
      Fågeln: "Subjekt",
      flyger: "Predikat",
      Bebisen: "Subjekt",
      gråter: "Predikat",
      Bilen: "Subjekt",
      kör: "Predikat",
    },
  },
];

const meningsbyggnadLagstadietFIB: FillInBlankExercise[] = [
  {
    id: "meningsbyggnad-fib-lag-1",
    type: "fill-in-blank",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Välj rätt ord som saknas i meningen.",
    sentence: "____ springer i parken.",
    options: ["Hunden", "Springer", "Parken"],
    correct: "Hunden",
    explanation:
      "Meningen behöver ett subjekt — någon som springer. 'Hunden' är subjektet.",
  },
  {
    id: "meningsbyggnad-fib-lag-2",
    type: "fill-in-blank",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Välj rätt ord som saknas i meningen.",
    sentence: "Katten ____ på soffan.",
    options: ["soffan", "sover", "katten"],
    correct: "sover",
    explanation:
      "Meningen behöver ett predikat — ett verb som berättar vad katten gör. 'Sover' är verbet.",
  },
  {
    id: "meningsbyggnad-fib-lag-3",
    type: "fill-in-blank",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Välj rätt ord som saknas.",
    sentence: "Barnen ____ fotboll på rasten.",
    options: ["spelar", "fotboll", "rasten"],
    correct: "spelar",
    explanation:
      "Meningen saknar ett verb. 'Spelar' berättar vad barnen gör.",
  },
  {
    id: "meningsbyggnad-fib-lag-4",
    type: "fill-in-blank",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Välj rätt ord som saknas.",
    sentence: "____ läser en bok i sängen.",
    options: ["Boken", "Läser", "Lisa"],
    correct: "Lisa",
    explanation:
      "Meningen behöver ett subjekt — någon som läser. 'Lisa' är den som gör något.",
  },
  {
    id: "meningsbyggnad-fib-lag-5",
    type: "fill-in-blank",
    topic: "meningsbyggnad",
    ageGroup: "lagstadiet",
    instruction: "Välj rätt ord som saknas.",
    sentence: "Fågeln ____ i trädet varje morgon.",
    options: ["trädet", "sjunger", "morgon"],
    correct: "sjunger",
    explanation:
      "Meningen behöver ett verb. 'Sjunger' berättar vad fågeln gör.",
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Skiljetecken lagstadiet (extra)
// ---------------------------------------------------------------------------

const skiljeteckenLagstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "skiljetecken-ec-lag-1",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Lagg till rätt skiljetecken i slutet av meningen.",
    sentence: "Vad heter du",
    correctedSentence: "Vad heter du?",
    errorWord: "du",
    correctWord: "du?",
    explanation:
      "Frågor avslutas med frågetecken (?). 'Vad heter du' är en fråga.",
  },
  {
    id: "skiljetecken-ec-lag-2",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Lagg till rätt skiljetecken.",
    sentence: "Akta dig",
    correctedSentence: "Akta dig!",
    errorWord: "dig",
    correctWord: "dig!",
    explanation:
      "Uppmaningar och varningar avslutas med utropstecken (!).",
  },
  {
    id: "skiljetecken-ec-lag-3",
    type: "error-correction",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Rätta stort/liten bokstav-felet.",
    sentence: "jag bor i Stockholm.",
    correctedSentence: "Jag bor i Stockholm.",
    errorWord: "jag",
    correctWord: "Jag",
    explanation:
      "Alla meningar börjar med stor bokstav. 'jag' i början av meningen ska vara 'Jag'.",
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Ordbildning mellanstadiet
// ---------------------------------------------------------------------------

const ordbildningMellanstadietCat: CategorizationExercise[] = [
  {
    id: "ordbildning-cat-mel-1",
    type: "categorization",
    topic: "ordbildning",
    ageGroup: "mellanstadiet",
    relatedTextSlug: "igelkotten",
    instruction: "Sortera orden: är de sammansatta eller inte?",
    items: ["solsken", "flicka", "fotboll", "hund", "snögubben", "leka"],
    categories: ["Sammansatt ord", "Enkelt ord"],
    correctMapping: {
      solsken: "Sammansatt ord",
      flicka: "Enkelt ord",
      fotboll: "Sammansatt ord",
      hund: "Enkelt ord",
      "snögubben": "Sammansatt ord",
      leka: "Enkelt ord",
    },
  },
  {
    id: "ordbildning-cat-mel-2",
    type: "categorization",
    topic: "ordbildning",
    ageGroup: "mellanstadiet",
    instruction: "Sortera orden efter ändelse.",
    items: ["gladlig", "kunskap", "vänner", "möjlig", "vänskap", "lycklig"],
    categories: ["Ändelse -lig", "Ändelse -skap"],
    correctMapping: {
      gladlig: "Ändelse -lig",
      kunskap: "Ändelse -skap",
      "vänner": "Ändelse -lig",
      "möjlig": "Ändelse -lig",
      vänskap: "Ändelse -skap",
      lycklig: "Ändelse -lig",
    },
  },
];

const ordbildningMellanstadietMC: MultipleChoiceExercise[] = [
  {
    id: "ordbildning-mc-mel-1",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "mellanstadiet",
    instruction: "Vilka två ord bildar det sammansatta ordet?",
    prompt: "Vad bestar 'solros' av?",
    options: ["sol + ros", "so + ros", "sol + ors", "solr + os"],
    correct: 0,
    explanation:
      "'Solros' är sammansatt av 'sol' och 'ros' — en ros som vandar sig mot solen.",
  },
  {
    id: "ordbildning-mc-mel-2",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ändelse gör ett substantiv av verbet?",
    prompt: "Hur gör man ett substantiv av 'tänka'?",
    options: ["tankare", "tanke", "tankning", "Alla är korrekta"],
    correct: 3,
    explanation:
      "Alla är korrekta! '-are' (en tankare), '-e' (en tanke), '-ning' (en tankning) är alla andelser som bildar substantiv av verb.",
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Textbindning mellanstadiet
// ---------------------------------------------------------------------------

const textbindningMellanstadietFIB: FillInBlankExercise[] = [
  {
    id: "textbindning-fib-mel-1",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "mellanstadiet",
    relatedTextSlug: "hundar-ar-bast",
    instruction: "Välj rätt bindeord.",
    sentence: "Jag ville gå ut ___ det regnade.",
    options: ["och", "men", "för att"],
    correct: "men",
    explanation:
      "'Men' används för att visa kontrast: jag ville gå ut, DOCK regnade det.",
  },
  {
    id: "textbindning-fib-mel-2",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt bindeord.",
    sentence: "Vi stannade hemma ___ det var storm ute.",
    options: ["men", "eftersom", "också"],
    correct: "eftersom",
    explanation:
      "'Eftersom' anger orsak: vi stannade hemma för att det var storm.",
  },
  {
    id: "textbindning-fib-mel-3",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt bindeord.",
    sentence: "Först åkte vi till affären, ___ gick vi hem.",
    options: ["sedan", "men", "för att"],
    correct: "sedan",
    explanation:
      "'Sedan' visar tidsföljd: först hände det ena, sedan det andra.",
  },
];

const textbindningMellanstadietMC: MultipleChoiceExercise[] = [
  {
    id: "textbindning-mc-mel-1",
    type: "multiple-choice",
    topic: "textbindning",
    ageGroup: "mellanstadiet",
    instruction: "Vilket bindeord passar bast?",
    prompt: "Jag tycker om glass ___ jag tycker även om choklad.",
    options: ["men", "och", "därför"],
    correct: 1,
    explanation:
      "'Och' binder ihop två liknande påståenden (jag tycker om både glass och choklad).",
  },
];

// ---------------------------------------------------------------------------
// NEW EXERCISES – Stavning lagstadiet
// ---------------------------------------------------------------------------

const stavningLagstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "stavning-ec-lag-1",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "lagstadiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Jag har en hud hemma.",
    correctedSentence: "Jag har en hund hemma.",
    errorWord: "hud",
    correctWord: "hund",
    explanation:
      "'Hund' stavas med nd på slutet. 'Hud' är ett annat ord som betyder skinn.",
  },
  {
    id: "stavning-ec-lag-2",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "lagstadiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Vi sjonk en sång på lektionen.",
    correctedSentence: "Vi sjong en sång på lektionen.",
    errorWord: "sjonk",
    correctWord: "sjong",
    explanation:
      "'Sjong' (av sjunga) stavas med g. 'Sjonk' (av sjunka) är ett annat ord.",
  },
  {
    id: "stavning-ec-lag-3",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "lagstadiet",
    instruction: "Hitta och rätta stavfelet.",
    sentence: "Min kompis är jetstark.",
    correctedSentence: "Min kompis är jättestark.",
    errorWord: "jetstark",
    correctWord: "jättestark",
    explanation:
      "'Jattestark' stavas med atte. 'Jatte-' är ett prefix som betyder 'mycket'.",
  },
];

// ---------------------------------------------------------------------------
// Combine all exercises
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// NEW: Stilistik — Högstadiet (extra)
// ---------------------------------------------------------------------------

const stilistikHogstadietMCExtra: MultipleChoiceExercise[] = [
  {
    id: "stilistik-mc-hog-extra-1",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    relatedTextSlug: "spegeln",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Huset stirrade på oss med sina mörka fönster.'",
    options: ["Hyperbol", "Besjälning", "Liknelse", "Allitteration"],
    correct: 1,
    explanation:
      "Det är besjälning — huset får mänskliga egenskaper (att stirra). Fönstren liknas vid ögon.",
  },
  {
    id: "stilistik-mc-hog-extra-2",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    relatedTextSlug: "det-tomma-rummet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Ljuset och mörkret, lyckan och sorgen — allt hörde ihop.'",
    options: ["Anafor", "Antites", "Besjälning", "Hyperbol"],
    correct: 1,
    explanation:
      "Det är en antites — en kontrasterande ställning av motsatser (ljus/mörker, lycka/sorg) för att skapa effekt.",
  },
  {
    id: "stilistik-mc-hog-extra-3",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Solen log mot oss.'",
    options: ["Metafor", "Besjälning", "Klimax", "Liknelse"],
    correct: 1,
    explanation:
      "Det är besjälning — solen får en mänsklig egenskap (att le).",
  },
  {
    id: "stilistik-mc-hog-extra-4",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Kall som is, varm som eld.'",
    options: ["Antites med liknelser", "Bara liknelse", "Bara antites", "Hyperbol"],
    correct: 0,
    explanation:
      "Här kombineras antites (kall/varm) med liknelser (som is, som eld). Flera stilfigurer kan samverka.",
  },
  {
    id: "stilistik-mc-hog-extra-5",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Han drack. Han åt. Han somnade.'",
    options: ["Allitteration", "Hyperbol", "Asyndes", "Anafor"],
    correct: 2,
    explanation:
      "Det är asyndes — uppräkning utan bindeord (och) mellan satserna. Det ger en snabb, avskalad rytm.",
  },
];

const stilistikHogstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "stilistik-ec-hog-1",
    type: "error-correction",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    instruction: "Vilken stilfigur är felaktigt namngiven? Rätta till.",
    sentence: "Hon var stark som en björn — det är en metafor.",
    correctedSentence: "Hon var stark som en björn — det är en liknelse.",
    errorWord: "metafor",
    correctWord: "liknelse",
    explanation:
      "Jämförelser med 'som' är liknelser, inte metaforer. En metafor saknar jämförelseord.",
  },
  {
    id: "stilistik-ec-hog-2",
    type: "error-correction",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    instruction: "Vilken stilfigur är felaktigt namngiven? Rätta till.",
    sentence: "Träden dansade i vinden — det är en hyperbol.",
    correctedSentence: "Träden dansade i vinden — det är en besjälning.",
    errorWord: "hyperbol",
    correctWord: "besjälning",
    explanation:
      "När döda ting får mänskliga egenskaper (dansa) är det besjälning, inte hyperbol (överdrift).",
  },
  {
    id: "stilistik-ec-hog-3",
    type: "error-correction",
    topic: "stilistik",
    ageGroup: "hogstadiet",
    instruction: "Vilken stilfigur är felaktigt namngiven? Rätta till.",
    sentence: "Jag har väntat i hundra år — det är en liknelse.",
    correctedSentence: "Jag har väntat i hundra år — det är en hyperbol.",
    errorWord: "liknelse",
    correctWord: "hyperbol",
    explanation:
      "Det är en överdrift (hyperbol), inte en liknelse. Det finns inget jämförelseord.",
  },
];

// ---------------------------------------------------------------------------
// NEW: Stilistik — Gymnasiet (extra)
// ---------------------------------------------------------------------------

const stilistikGymnasietMCExtra: MultipleChoiceExercise[] = [
  {
    id: "stilistik-mc-gym-extra-1",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken retorisk strategi används?",
    prompt: "'Tre saker behövs: mod, vilja och uthållighet.'",
    options: ["Trikolon", "Anafor", "Klimax", "Asyndes"],
    correct: 0,
    explanation:
      "Trikolon är en uppräkning av tre parallella led. Det är ett vanligt retoriskt grepp som ger rytm och tyngd.",
  },
  {
    id: "stilistik-mc-gym-extra-2",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Det var inte bra. Det var inte ens okej. Det var en katastrof.'",
    options: ["Antites", "Asyndes", "Klimax", "Eufemism"],
    correct: 2,
    explanation:
      "Klimax innebär en stegring — från 'inte bra' via 'inte ens okej' till 'katastrof'. Effekten byggs upp gradvis.",
  },
  {
    id: "stilistik-mc-gym-extra-3",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Han gick bort' istället för 'Han dog'.",
    options: ["Hyperbol", "Eufemism", "Liknelse", "Ironi"],
    correct: 1,
    explanation:
      "Eufemism är ett mildare uttryck för något obehagligt. 'Gick bort' används istället för det mer direkta 'dog'.",
  },
  {
    id: "stilistik-mc-gym-extra-4",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    relatedTextSlug: "framtiden-kan-vanta",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Vilken fantastisk insats — du satt ju stilla hela matchen.'",
    options: ["Hyperbol", "Klimax", "Ironi", "Antites"],
    correct: 2,
    explanation:
      "Det är ironi — talaren säger motsatsen till vad hen menar. Berömmet är skenbart.",
  },
  {
    id: "stilistik-mc-gym-extra-5",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur används i exemplet?",
    prompt: "'Hela Stockholm visste om det.'",
    options: ["Metonymi", "Metafor", "Hyperbol", "Liknelse"],
    correct: 0,
    explanation:
      "Metonymi innebär att man ersätter ett begrepp med ett närliggande — 'Stockholm' står för 'Stockholms invånare'.",
  },
];

const stilistikGymnasietFIB: FillInBlankExercise[] = [
  {
    id: "stilistik-fib-gym-1",
    type: "fill-in-blank",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    relatedTextSlug: "grans",
    instruction: "Välj rätt stilfigur.",
    sentence: "Upprepning av samma inledande ord i flera satser kallas ____.",
    options: ["anafor", "allitteration", "asyndes", "epifor"],
    correct: "anafor",
    explanation:
      "Anafor är upprepning av samma ord i början av flera satser eller versrader.",
  },
  {
    id: "stilistik-fib-gym-2",
    type: "fill-in-blank",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt stilfigur.",
    sentence: "Att beskriva något obehagligt med mildare ord kallas ____.",
    options: ["hyperbol", "ironi", "eufemism", "antites"],
    correct: "eufemism",
    explanation:
      "Eufemism är ett förskönande eller mildrande uttryck, t.ex. 'gå bort' istället för 'dö'.",
  },
  {
    id: "stilistik-fib-gym-3",
    type: "fill-in-blank",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Välj rätt stilfigur.",
    sentence: "En stegring från svagt till starkt kallas ____.",
    options: ["antiklimax", "klimax", "anafor", "trikolon"],
    correct: "klimax",
    explanation:
      "Klimax är en gradvis upptrappning för retorisk effekt.",
  },
];

// ---------------------------------------------------------------------------
// NEW: Ordbildning — extra övningar
// ---------------------------------------------------------------------------

const ordbildningMellanstadietMCExtra: MultipleChoiceExercise[] = [
  {
    id: "ordbildning-mc-mel-extra-1",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "mellanstadiet",
    instruction: "Vad är ett sammansatt ord?",
    prompt: "Vilket av dessa är ett sammansatt ord?",
    options: ["springer", "fotboll", "vacker", "snabbt"],
    correct: 1,
    explanation:
      "Fotboll är sammansatt av 'fot' + 'boll'. Två ord bildar ett nytt ord.",
  },
  {
    id: "ordbildning-mc-mel-extra-2",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "mellanstadiet",
    instruction: "Vilket förled har ordet?",
    prompt: "Vad är förledet i ordet 'snögubbe'?",
    options: ["gubbe", "snö", "snög", "ubbe"],
    correct: 1,
    explanation:
      "Förledet är 'snö' och efterledet är 'gubbe'. Förledet kommer först i ett sammansatt ord.",
  },
  {
    id: "ordbildning-mc-mel-extra-3",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "mellanstadiet",
    instruction: "Vad betyder suffixet -lig?",
    prompt: "Ordet 'vänlig' har suffixet -lig. Vad gör suffixet?",
    options: [
      "Det gör ordet till ett verb",
      "Det gör ordet till ett adjektiv som beskriver en egenskap",
      "Det gör ordet till ett substantiv",
      "Det ändrar inte ordklassen",
    ],
    correct: 1,
    explanation:
      "Suffixet -lig bildar adjektiv: vän → vänlig, skada → skadlig, möjl → möjlig.",
  },
  {
    id: "ordbildning-mc-mel-extra-4",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "mellanstadiet",
    instruction: "Identifiera efterledet.",
    prompt: "Vad är efterledet i 'bokhylla'?",
    options: ["bok", "hylla", "bokh", "ylla"],
    correct: 1,
    explanation:
      "Efterledet är 'hylla'. Det bestämmer ordets betydelsekategori — en bokhylla är en sorts hylla.",
  },
];

const ordbildningHogstadietMCExtra: MultipleChoiceExercise[] = [
  {
    id: "ordbildning-mc-hog-extra-1",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vilken typ av ordbildning?",
    prompt: "Hur har ordet 'otrolig' bildats?",
    options: [
      "Sammansättning",
      "Avledning med prefix",
      "Avledning med suffix",
      "Förkortning",
    ],
    correct: 1,
    explanation:
      "Prefixet 'o-' har lagts till 'trolig' och ger motsatt betydelse. Det är avledning med prefix.",
  },
  {
    id: "ordbildning-mc-hog-extra-2",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vilken typ av ordbildning?",
    prompt: "Ordet 'IT' är en förkortning. Vilken typ?",
    options: ["Avledning", "Sammansättning", "Akronym", "Suffix"],
    correct: 2,
    explanation:
      "IT (informationsteknik) är en akronym — en förkortning som bildas av begynnelsebokstäverna.",
  },
  {
    id: "ordbildning-mc-hog-extra-3",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Hur bildas verbet av substantivet?",
    prompt: "Substantivet 'damm' ger verbet 'damma'. Vilken typ av ordbildning?",
    options: ["Sammansättning", "Avledning med suffix", "Akronym", "Lånord"],
    correct: 1,
    explanation:
      "Genom att lägga till suffixet '-a' har substantivet 'damm' blivit verbet 'damma'. Det är avledning.",
  },
  {
    id: "ordbildning-mc-hog-extra-4",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Identifiera foge-s.",
    prompt: "Var finns foge-s i ordet 'tidningsartikel'?",
    options: [
      "Mellan 'tid' och 'ning'",
      "Mellan 'tidning' och 'artikel'",
      "I slutet av ordet",
      "Det finns inget foge-s",
    ],
    correct: 1,
    explanation:
      "Foge-s sitter mellan de två leden: tidning-s-artikel. Det binder ihop leden i sammansättningen.",
  },
];

const ordbildningGymnasietMCExtra: MultipleChoiceExercise[] = [
  {
    id: "ordbildning-mc-gym-extra-1",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Vilken typ av ordbildning?",
    prompt: "Hur har ordet 'blogg' kommit in i svenska språket?",
    options: ["Avledning", "Sammansättning", "Lånord", "Förkortning"],
    correct: 2,
    explanation:
      "'Blogg' är ett lånord från engelskans 'blog' (web log). Lånord är en vanlig källa till nya ord.",
  },
  {
    id: "ordbildning-mc-gym-extra-2",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Analysera ordbildningen.",
    prompt: "Ordet 'omöjliggöra' — hur många led av ordbildning finns?",
    options: [
      "Ett (sammansättning)",
      "Två (prefix o- + suffix -göra)",
      "Tre (o- + möjlig + göra)",
      "Fyra",
    ],
    correct: 2,
    explanation:
      "Ordet byggs i tre steg: möjlig → omöjlig (prefix o-) → omöjliggöra (sammansättning med göra).",
  },
  {
    id: "ordbildning-mc-gym-extra-3",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Identifiera produktiv ordbildning.",
    prompt: "Vilken av dessa ändelser är mest produktiv i modern svenska?",
    options: ["-het", "-inna", "-skap", "-ande"],
    correct: 0,
    explanation:
      "Suffixet -het är mycket produktivt och bildar abstrakta substantiv: ensamhet, frihet, snällhet. Det kan läggas till nästan alla adjektiv.",
  },
];

const ordbildningCatExtra: CategorizationExercise[] = [
  {
    id: "ordbildning-cat-hog-extra-1",
    type: "categorization",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Sortera orden efter hur de bildats.",
    items: ["fotboll", "omöjlig", "datormus", "olycklig", "skolväska", "missförstånd"],
    categories: ["Sammansättning", "Avledning med prefix"],
    correctMapping: {
      fotboll: "Sammansättning",
      omöjlig: "Avledning med prefix",
      datormus: "Sammansättning",
      olycklig: "Avledning med prefix",
      skolväska: "Sammansättning",
      missförstånd: "Avledning med prefix",
    },
  },
];

// ---------------------------------------------------------------------------
// NEW: Textbindning — extra övningar
// ---------------------------------------------------------------------------

const textbindningMellanstadietFIBExtra: FillInBlankExercise[] = [
  {
    id: "textbindning-fib-mel-extra-1",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt bindeord.",
    sentence: "Maja ville gå ut och leka, ____ det regnade.",
    options: ["men", "och", "för att", "så"],
    correct: "men",
    explanation:
      "'Men' visar en motsättning: hon ville leka, men vädret hindrade.",
  },
  {
    id: "textbindning-fib-mel-extra-2",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt bindeord.",
    sentence: "Vi skyndade oss ____ vi inte ville missa bussen.",
    options: ["eftersom", "men", "dessutom", "eller"],
    correct: "eftersom",
    explanation:
      "'Eftersom' anger orsaken — varför vi skyndade oss.",
  },
  {
    id: "textbindning-fib-mel-extra-3",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "mellanstadiet",
    instruction: "Välj rätt bindeord.",
    sentence: "Först åt vi glass, ____ gick vi till parken.",
    options: ["sedan", "men", "trots att", "fast"],
    correct: "sedan",
    explanation:
      "'Sedan' visar tidsordning — vad som hände efter glassätandet.",
  },
];

const textbindningHogstadietFIBExtra: FillInBlankExercise[] = [
  {
    id: "textbindning-fib-hog-extra-1",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Välj det bindeord som passar bäst.",
    sentence: "Experimenten misslyckades upprepade gånger. ____ gav forskarna inte upp.",
    options: ["Likväl", "Dessutom", "Eftersom", "Alltså"],
    correct: "Likväl",
    explanation:
      "'Likväl' uttrycker att något sker trots motstånd — ett starkare alternativ till 'ändå'.",
  },
  {
    id: "textbindning-fib-hog-extra-2",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Välj det bindeord som passar bäst.",
    sentence: "Priserna steg kraftigt. ____ sjönk efterfrågan.",
    options: ["Följaktligen", "Dessutom", "Emellertid", "Exempelvis"],
    correct: "Följaktligen",
    explanation:
      "'Följaktligen' visar en logisk konsekvens — stigande priser leder till minskad efterfrågan.",
  },
  {
    id: "textbindning-fib-hog-extra-3",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Välj det bindeord som passar bäst.",
    sentence: "Boken var intressant. ____ var den ovanligt välskriven.",
    options: ["Dessutom", "Dock", "Trots det", "Alltså"],
    correct: "Dessutom",
    explanation:
      "'Dessutom' lägger till en ytterligare positiv egenskap — additivt bindeord.",
  },
];

const textbindningGymnasietFIBExtra: FillInBlankExercise[] = [
  {
    id: "textbindning-fib-gym-extra-1",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Välj det bindeord som passar bäst i akademisk text.",
    sentence: "Studien visar att stress påverkar sömnen negativt. ____ finns studier som pekar i motsatt riktning.",
    options: ["Icke desto mindre", "Dessutom", "Exempelvis", "Alltså"],
    correct: "Icke desto mindre",
    explanation:
      "'Icke desto mindre' signalerar en motbild trots tidigare påstående — formellt och nyanserat.",
  },
  {
    id: "textbindning-fib-gym-extra-2",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Välj det bindeord som passar bäst i akademisk text.",
    sentence: "Resultaten stödjer hypotesen. ____ krävs ytterligare forskning.",
    options: ["Å andra sidan", "Dock", "Dessutom", "Nämligen"],
    correct: "Dock",
    explanation:
      "'Dock' fungerar som ett formellt 'men' och signalerar en reservation.",
  },
  {
    id: "textbindning-fib-gym-extra-3",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Välj det bindeord som passar bäst i akademisk text.",
    sentence: "Flera faktorer spelar in: ____ socioekonomisk bakgrund, utbildningsnivå och tillgång till vård.",
    options: ["däremot", "å ena sidan", "bland annat", "trots detta"],
    correct: "bland annat",
    explanation:
      "'Bland annat' inleder en exemplifierande uppräkning som inte är uttömmande.",
  },
];

const textbindningCatExtra: CategorizationExercise[] = [
  {
    id: "textbindning-cat-hog-extra-1",
    type: "categorization",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Sortera bindeorden efter funktion.",
    items: ["dessutom", "dock", "alltså", "emellertid", "följaktligen", "även"],
    categories: ["Additivt (lägger till)", "Adversativt (motsätter)", "Kausalt (konsekvens)"],
    correctMapping: {
      dessutom: "Additivt (lägger till)",
      dock: "Adversativt (motsätter)",
      alltså: "Kausalt (konsekvens)",
      emellertid: "Adversativt (motsätter)",
      följaktligen: "Kausalt (konsekvens)",
      även: "Additivt (lägger till)",
    },
  },
  {
    id: "textbindning-cat-gym-extra-1",
    type: "categorization",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Sortera bindeorden efter funktion i akademisk text.",
    items: ["icke desto mindre", "vidare", "sålunda", "å andra sidan", "likaså", "därav"],
    categories: ["Additivt", "Adversativt", "Kausalt"],
    correctMapping: {
      "icke desto mindre": "Adversativt",
      vidare: "Additivt",
      sålunda: "Kausalt",
      "å andra sidan": "Adversativt",
      likaså: "Additivt",
      därav: "Kausalt",
    },
  },
];

export const GRAMMAR_EXERCISES: GrammarExercise[] = [
  // 1. Ordklasser
  ...ordklasserLagstadietMC,
  ...ordklasserLagstadietCat,
  ...ordklasserMellanstadietMC,
  ...ordklasserMellanstadietCat,
  ...ordklasserHogstadietMC,
  ...ordklasserHogstadietCat,
  ...ordklasserHogstadietEC,
  ...ordklasserHogstadietSA,
  ...ordklasserGymnasietMC,
  ...ordklasserGymnasietCat,
  ...ordklasserGymnasietEC,
  ...ordklasserGymnasietSA,

  // 2. Meningsbyggnad
  ...meningsbyggnadLagstadietMC,
  ...meningsbyggnadLagstadietCat,
  ...meningsbyggnadLagstadietSA,
  ...meningsbyggnadLagstadietFIB,
  ...meningsbyggnadMellanstadietSA,
  ...meningsbyggnadMellanstadietMC,
  ...meningsbyggnadHogstadietSA,
  ...meningsbyggnadHogstadietSAExtra,
  ...meningsbyggnadHogstadietMC,
  ...meningsbyggnadHogstadietEC,
  ...meningsbyggnadGymnasietSA,
  ...meningsbyggnadGymnasietSAExtra,
  ...meningsbyggnadGymnasietMC,
  ...meningsbyggnadGymnasietEC,

  // 3. Skiljetecken
  ...skiljeteckenLagstadietFIB,
  ...skiljeteckenLagstadietMC,
  ...skiljeteckenLagstadietEC,
  ...skiljeteckenMellanstadietFIB,
  ...skiljeteckenMellanstadietMC,
  ...skiljeteckenHogstadietFIB,
  ...skiljeteckenHogstadietMC,
  ...skiljeteckenHogstadietEC,
  ...skiljeteckenHogstadietCat,
  ...skiljeteckenGymnasietFIB,
  ...skiljeteckenGymnasietMC,
  ...skiljeteckenGymnasietEC,

  // 4. Stavning
  ...stavningLagstadietEC,
  ...stavningMellanstadietEC,
  ...stavningMellanstadietMC,
  ...stavningHogstadietEC,
  ...stavningHogstadietECExtra,
  ...stavningHogstadietMC,
  ...stavningHogstadietCat,
  ...stavningGymnasietEC,
  ...stavningGymnasietECExtra,
  ...stavningGymnasietMC,
  ...stavningGymnasietCat,

  // 5. Ordbildning
  ...ordbildningMellanstadietCat,
  ...ordbildningMellanstadietMC,
  ...ordbildningHogstadietCat,
  ...ordbildningHogstadietMC,
  ...ordbildningHogstadietEC,
  ...ordbildningHogstadietSA,
  ...ordbildningGymnasietCat,
  ...ordbildningGymnasietMC,
  ...ordbildningGymnasietEC,

  // 6. Textbindning
  ...textbindningMellanstadietFIB,
  ...textbindningMellanstadietMC,
  ...textbindningHogstadietFIB,
  ...textbindningHogstadietMC,
  ...textbindningHogstadietEC,
  ...textbindningHogstadietCat,
  ...textbindningGymnasietFIB,
  ...textbindningGymnasietMC,
  ...textbindningGymnasietEC,
  ...textbindningGymnasietCat,

  // 7. Stilistik
  ...stilistikHogstadietMC,
  ...stilistikHogstadietMCExtra,
  ...stilistikHogstadietEC,
  ...stilistikHogstadietCat,
  ...stilistikGymnasietMC,
  ...stilistikGymnasietMCExtra,
  ...stilistikGymnasietEC,
  ...stilistikGymnasietCat,
  ...stilistikGymnasietFIB,

  // 5b. Ordbildning (extra)
  ...ordbildningMellanstadietMCExtra,
  ...ordbildningHogstadietMCExtra,
  ...ordbildningCatExtra,
  ...ordbildningGymnasietMCExtra,

  // 6b. Textbindning (extra)
  ...textbindningMellanstadietFIBExtra,
  ...textbindningHogstadietFIBExtra,
  ...textbindningGymnasietFIBExtra,
  ...textbindningCatExtra,
];
