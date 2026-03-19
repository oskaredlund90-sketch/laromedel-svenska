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
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Katten *sover* i soffan.",
    options: ["Substantiv", "Verb", "Adjektiv"],
    correct: 1,
    explanation: "'Sover' ar ett verb eftersom det beskriver vad katten gor.",
  },
  {
    id: "ordklasser-mc-lag-2",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Den *stora* hunden skallde.",
    options: ["Substantiv", "Verb", "Adjektiv"],
    correct: 2,
    explanation:
      "'Stora' ar ett adjektiv eftersom det beskriver hur hunden ser ut.",
  },
  {
    id: "ordklasser-mc-lag-3",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Vi akte till *skolan* idag.",
    options: ["Substantiv", "Verb", "Adjektiv"],
    correct: 0,
    explanation:
      "'Skolan' ar ett substantiv eftersom det ar namnet pa en plats.",
  },
  {
    id: "ordklasser-mc-lag-4",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Pappa *lagar* mat varje dag.",
    options: ["Adjektiv", "Substantiv", "Verb"],
    correct: 2,
    explanation: "'Lagar' ar ett verb eftersom det beskriver en handling.",
  },
  {
    id: "ordklasser-mc-lag-5",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Jag har en *rod* cykel.",
    options: ["Verb", "Adjektiv", "Substantiv"],
    correct: 1,
    explanation: "'Rod' ar ett adjektiv som beskriver cykelns farg.",
  },
  {
    id: "ordklasser-mc-lag-6",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Min *kompis* heter Elsa.",
    options: ["Substantiv", "Verb", "Adjektiv"],
    correct: 0,
    explanation: "'Kompis' ar ett substantiv eftersom det benamner en person.",
  },
  {
    id: "ordklasser-mc-lag-7",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Barnen *leker* pa garden.",
    options: ["Adjektiv", "Verb", "Substantiv"],
    correct: 1,
    explanation: "'Leker' ar ett verb som talar om vad barnen gor.",
  },
  {
    id: "ordklasser-mc-lag-8",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Det var en *kall* vinter.",
    options: ["Substantiv", "Verb", "Adjektiv"],
    correct: 2,
    explanation: "'Kall' ar ett adjektiv som beskriver hur vintern var.",
  },
];

const ordklasserLagstadietCat: CategorizationExercise[] = [
  {
    id: "ordklasser-cat-lag-1",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "lagstadiet",
    instruction: "Sortera orden i ratt ordklass.",
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
    instruction: "Sortera orden i ratt ordklass.",
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
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Flickan sprang *snabbt* over garden.",
    options: ["Adjektiv", "Adverb", "Verb", "Pronomen"],
    correct: 1,
    explanation:
      "'Snabbt' ar ett adverb eftersom det beskriver hur flickan sprang.",
  },
  {
    id: "ordklasser-mc-mel-2",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "*Hon* gillar att lasa bocker.",
    options: ["Substantiv", "Pronomen", "Verb", "Adverb"],
    correct: 1,
    explanation:
      "'Hon' ar ett pronomen eftersom det star i stallet for ett namn.",
  },
  {
    id: "ordklasser-mc-mel-3",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Vi *aldrig* glommer den dagen.",
    options: ["Verb", "Adjektiv", "Adverb", "Substantiv"],
    correct: 2,
    explanation:
      "'Aldrig' ar ett adverb som beskriver nar eller hur ofta nagot sker.",
  },
  {
    id: "ordklasser-mc-mel-4",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "*Deras* hus ligger vid sjon.",
    options: ["Adverb", "Adjektiv", "Pronomen", "Substantiv"],
    correct: 2,
    explanation:
      "'Deras' ar ett pronomen (possessivt) som visar vem huset tillhor.",
  },
  {
    id: "ordklasser-mc-mel-5",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Pojken sprang *langre* an sin bror.",
    options: ["Adjektiv", "Adverb", "Verb", "Pronomen"],
    correct: 1,
    explanation:
      "'Langre' ar ett adverb i komparativ form som beskriver hur pojken sprang.",
  },
  {
    id: "ordklasser-mc-mel-6",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Katten satt *dar* hela dagen.",
    options: ["Pronomen", "Substantiv", "Adverb", "Adjektiv"],
    correct: 2,
    explanation: "'Dar' ar ett adverb som beskriver var katten satt.",
  },
  {
    id: "ordklasser-mc-mel-7",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "*Ingen* visste svaret pa fragan.",
    options: ["Adjektiv", "Substantiv", "Pronomen", "Adverb"],
    correct: 2,
    explanation:
      "'Ingen' ar ett pronomen (indefinit) som star i stallet for en person.",
  },
  {
    id: "ordklasser-mc-mel-8",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Han skrattade *hogt* at skamtet.",
    options: ["Verb", "Adverb", "Adjektiv", "Pronomen"],
    correct: 1,
    explanation: "'Hogt' ar ett adverb som beskriver hur han skrattade.",
  },
];

const ordklasserMellanstadietCat: CategorizationExercise[] = [
  {
    id: "ordklasser-cat-mel-1",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "mellanstadiet",
    instruction: "Sortera orden i ratt ordklass.",
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
    instruction: "Sortera orden i ratt ordklass.",
    items: ["de", "sakta", "gammal", "skriva", "trad", "ofta"],
    categories: ["Pronomen", "Adverb", "Adjektiv", "Verb", "Substantiv"],
    correctMapping: {
      de: "Pronomen",
      sakta: "Adverb",
      gammal: "Adjektiv",
      skriva: "Verb",
      trad: "Substantiv",
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
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Boken lag *pa* bordet.",
    options: ["Adverb", "Konjunktion", "Preposition", "Pronomen"],
    correct: 2,
    explanation:
      "'Pa' ar en preposition som visar var nagot befinner sig i forhallande till nagot annat.",
  },
  {
    id: "ordklasser-mc-hog-2",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Lisa *och* Erik gick hem.",
    options: ["Preposition", "Konjunktion", "Adverb", "Pronomen"],
    correct: 1,
    explanation:
      "'Och' ar en konjunktion som binder samman tva delar av meningen.",
  },
  {
    id: "ordklasser-mc-hog-3",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Han sprang *mot* malet.",
    options: ["Konjunktion", "Adverb", "Pronomen", "Preposition"],
    correct: 3,
    explanation: "'Mot' ar en preposition som anger riktning.",
  },
  {
    id: "ordklasser-mc-hog-4",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Jag ville ga, *men* regnet hindrade mig.",
    options: ["Preposition", "Adverb", "Konjunktion", "Pronomen"],
    correct: 2,
    explanation:
      "'Men' ar en konjunktion som binder samman tva satser med en kontrast.",
  },
  {
    id: "ordklasser-mc-hog-5",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Paket lag *under* julgranen.",
    options: ["Adverb", "Preposition", "Konjunktion", "Adjektiv"],
    correct: 1,
    explanation:
      "'Under' ar en preposition som anger var paketen lag i forhallande till julgranen.",
  },
  {
    id: "ordklasser-mc-hog-6",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Vi ater middag *innan* vi gar ut.",
    options: ["Preposition", "Adverb", "Konjunktion", "Pronomen"],
    correct: 2,
    explanation:
      "'Innan' ar en konjunktion (subjunktion) som inleder en bisats.",
  },
  {
    id: "ordklasser-mc-hog-7",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Eleverna satt *bredvid* varandra.",
    options: ["Konjunktion", "Adjektiv", "Preposition", "Verb"],
    correct: 2,
    explanation: "'Bredvid' ar en preposition som anger en rumslig relation.",
  },
  {
    id: "ordklasser-mc-hog-8",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Hon studerar *for att* hon vill bli lakare.",
    options: ["Preposition", "Konjunktion", "Adverb", "Pronomen"],
    correct: 1,
    explanation:
      "'For att' ar en konjunktion (subjunktion) som anger orsak och inleder en bisats.",
  },
];

const ordklasserHogstadietCat: CategorizationExercise[] = [
  {
    id: "ordklasser-cat-hog-1",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "hogstadiet",
    instruction: "Sortera orden i ratt ordklass.",
    items: ["pa", "och", "under", "men", "bakom", "eller"],
    categories: ["Preposition", "Konjunktion"],
    correctMapping: {
      pa: "Preposition",
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
    instruction: "Sortera orden i ratt ordklass.",
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
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "*Ack*, vilken underbar utsikt!",
    options: ["Adverb", "Konjunktion", "Interjektion", "Pronomen"],
    correct: 2,
    explanation:
      "'Ack' ar en interjektion, ett utrop som uttrycker en kanslomatig reaktion.",
  },
  {
    id: "ordklasser-mc-gym-2",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Det var *den* bok jag sokte.",
    options: ["Pronomen", "Artikel", "Adjektiv", "Konjunktion"],
    correct: 1,
    explanation:
      "'Den' ar har en artikel (bestamningsord) som pekar ut en specifik bok.",
  },
  {
    id: "ordklasser-mc-gym-3",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Hon hade *tre* katter hemma.",
    options: ["Adjektiv", "Raknord", "Adverb", "Pronomen"],
    correct: 1,
    explanation: "'Tre' ar ett raknord (grundtal) som anger antalet katter.",
  },
  {
    id: "ordklasser-mc-gym-4",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Forfattaren anvande ett *mycket* avancerat sprak.",
    options: ["Adverb", "Adjektiv", "Pronomen", "Konjunktion"],
    correct: 0,
    explanation:
      "'Mycket' ar ett adverb som gradbestammer adjektivet 'avancerat'.",
  },
  {
    id: "ordklasser-mc-gym-5",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "*Ehuru* argumentet var starkt, overtygade det inte juryn.",
    options: ["Preposition", "Adverb", "Konjunktion", "Interjektion"],
    correct: 2,
    explanation:
      "'Ehuru' ar en konjunktion (subjunktion) som betyder 'trots att' och inleder en bisats.",
  },
  {
    id: "ordklasser-mc-gym-6",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Det ar *tva* sidor av samma mynt.",
    options: ["Pronomen", "Adjektiv", "Raknord", "Adverb"],
    correct: 2,
    explanation: "'Tva' ar ett raknord som anger antal.",
  },
  {
    id: "ordklasser-mc-gym-7",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "*Hej*, vad roligt att traffas!",
    options: ["Adverb", "Konjunktion", "Pronomen", "Interjektion"],
    correct: 3,
    explanation:
      "'Hej' ar en interjektion, ett halsningsord som uttrycker en kanslomatig reaktion.",
  },
  {
    id: "ordklasser-mc-gym-8",
    type: "multiple-choice",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Vilken ordklass tillhor det markerade ordet?",
    prompt: "Forskaren presenterade *sin* avhandling.",
    options: ["Artikel", "Pronomen", "Adjektiv", "Adverb"],
    correct: 1,
    explanation:
      "'Sin' ar ett pronomen (possessivt reflexivt) som visar att avhandlingen tillhor forskaren.",
  },
];

const ordklasserGymnasietCat: CategorizationExercise[] = [
  {
    id: "ordklasser-cat-gym-1",
    type: "categorization",
    topic: "ordklasser",
    ageGroup: "gymnasiet",
    instruction: "Sortera orden i ratt ordklass.",
    items: ["aj", "den", "fem", "bakom", "dock", "hennes"],
    categories: [
      "Interjektion",
      "Artikel",
      "Raknord",
      "Preposition",
      "Konjunktion",
      "Pronomen",
    ],
    correctMapping: {
      aj: "Interjektion",
      den: "Artikel",
      fem: "Raknord",
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
    instruction: "Sortera orden i ratt ordklass.",
    items: ["oj", "ett", "forsta", "genom", "saledes", "sig"],
    categories: [
      "Interjektion",
      "Artikel",
      "Raknord",
      "Preposition",
      "Konjunktion",
      "Pronomen",
    ],
    correctMapping: {
      oj: "Interjektion",
      ett: "Artikel",
      forsta: "Raknord",
      genom: "Preposition",
      saledes: "Konjunktion",
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
    instruction: "Markera subjekt, predikat och objekt i meningen.",
    sentence: "Hunden ater maten.",
    parts: [
      { text: "Hunden", role: "Subjekt" },
      { text: "ater", role: "Predikat" },
      { text: "maten", role: "Objekt" },
    ],
    roleOptions: ["Subjekt", "Predikat", "Objekt"],
  },
  {
    id: "meningsbyggnad-sa-mel-2",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    instruction: "Markera subjekt, predikat och objekt i meningen.",
    sentence: "Lisa laser en bok.",
    parts: [
      { text: "Lisa", role: "Subjekt" },
      { text: "laser", role: "Predikat" },
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
    sentence: "Barnen sjunger en sang.",
    parts: [
      { text: "Barnen", role: "Subjekt" },
      { text: "sjunger", role: "Predikat" },
      { text: "en sang", role: "Objekt" },
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
    instruction: "Vad ar subjektet i meningen?",
    prompt: "Katten sover pa soffan.",
    options: ["sover", "Katten", "pa soffan", "soffan"],
    correct: 1,
    explanation:
      "Subjektet ar 'Katten' eftersom det ar den som utfor handlingen. Fraga: Vem sover?",
  },
  {
    id: "meningsbyggnad-mc-mel-2",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    instruction: "Vad ar predikatet i meningen?",
    prompt: "Eleverna skriver en uppsats.",
    options: ["Eleverna", "en uppsats", "skriver", "uppsats"],
    correct: 2,
    explanation:
      "Predikatet ar 'skriver' eftersom det ar det som berättar vad subjektet gor.",
  },
  {
    id: "meningsbyggnad-mc-mel-3",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening ar en fraga?",
    prompt: "Vilken mening ar korrekt skriven som en fragamening?",
    options: [
      "Du gillar glass.",
      "Gillar du glass?",
      "Du gillar glass!",
      "Att du gillar glass.",
    ],
    correct: 1,
    explanation:
      "En fragamening borjar ofta med verbet fore subjektet och slutar med fragetecken.",
  },
  {
    id: "meningsbyggnad-mc-mel-4",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "mellanstadiet",
    instruction: "Vad ar objektet i meningen?",
    prompt: "Mamma bakar en kaka.",
    options: ["Mamma", "bakar", "en kaka", "en"],
    correct: 2,
    explanation:
      "Objektet ar 'en kaka'. Fraga: Vad bakar mamma? Svaret ar objektet.",
  },
];

const meningsbyggnadHogstadietSA: SentenceAnalysisExercise[] = [
  {
    id: "meningsbyggnad-sa-hog-1",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction:
      "Markera satsdelarna i meningen: subjekt, predikat, objekt och adverbial.",
    sentence: "Pa morgonen ater familjen frukost tillsammans.",
    parts: [
      { text: "Pa morgonen", role: "Adverbial" },
      { text: "ater", role: "Predikat" },
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
    sentence: "Under sommaren reste vi till Frankrike med taget.",
    parts: [
      { text: "Under sommaren", role: "Adverbial" },
      { text: "reste", role: "Predikat" },
      { text: "vi", role: "Subjekt" },
      { text: "till Frankrike", role: "Adverbial" },
      { text: "med taget", role: "Adverbial" },
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
    instruction: "Tillämpa BIFF-regeln. Var ska adverbet 'inte' placeras?",
    prompt: "Jag har ____ ätit frukost idag. (bisats: ...eftersom jag ____ har ätit frukost idag.)",
    options: [
      "Fore verbet i bisats, efter verbet i huvudsats",
      "Efter verbet i bade huvudsats och bisats",
      "Fore verbet i bade huvudsats och bisats",
      "Efter verbet i huvudsats, fore verbet i bisats",
    ],
    correct: 3,
    explanation:
      "BIFF-regeln: I en Bisats kommer adverbet (Inte, aldrig, etc.) Fore det Finita verbet. I huvudsats kommer adverbet efter verbet.",
  },
  {
    id: "meningsbyggnad-mc-hog-2",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Ar det har en huvudsats eller en bisats?",
    prompt: "...eftersom det regnade ute.",
    options: ["Huvudsats", "Bisats"],
    correct: 1,
    explanation:
      "Det ar en bisats eftersom den inleds med subjunktionen 'eftersom' och inte kan sta ensam.",
  },
  {
    id: "meningsbyggnad-mc-hog-3",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening foljer BIFF-regeln korrekt i bisatsen?",
    prompt: "Valj den korrekta meningen.",
    options: [
      "Hon sa att hon hade inte tid.",
      "Hon sa att hon inte hade tid.",
      "Hon sa att inte hon hade tid.",
      "Hon sa inte att hon hade tid.",
    ],
    correct: 1,
    explanation:
      "I bisatsen 'att hon inte hade tid' star adverbet 'inte' fore det finita verbet 'hade', vilket foljer BIFF-regeln.",
  },
  {
    id: "meningsbyggnad-mc-hog-4",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "hogstadiet",
    instruction: "Ar det har en huvudsats eller en bisats?",
    prompt: "Vi gick hem tidigt.",
    options: ["Huvudsats", "Bisats"],
    correct: 0,
    explanation:
      "Det ar en huvudsats eftersom den kan sta ensam som en fullstandig mening och inleds inte med en subjunktion.",
  },
];

const meningsbyggnadGymnasietSA: SentenceAnalysisExercise[] = [
  {
    id: "meningsbyggnad-sa-gym-1",
    type: "sentence-analysis",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Analysera satsdelarna i denna litterara mening.",
    sentence:
      "Med en djup suck satte sig den gamla mannen i den slitna fotöljen vid fonstret.",
    parts: [
      { text: "Med en djup suck", role: "Adverbial" },
      { text: "satte sig", role: "Predikat" },
      { text: "den gamla mannen", role: "Subjekt" },
      { text: "i den slitna fotoljen", role: "Adverbial" },
      { text: "vid fonstret", role: "Attribut" },
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
    instruction: "Analysera satsdelarna i denna mening.",
    sentence: "Resultatet av undersökningen ansags vara ovantat positivt av forskarlaget.",
    parts: [
      { text: "Resultatet av undersökningen", role: "Subjekt" },
      { text: "ansags vara", role: "Predikat" },
      { text: "ovantat positivt", role: "Predikativ" },
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
    sentence: "Den beryktade forfattaren tilldelades Nobelpriset i litteratur ar 1909.",
    parts: [
      { text: "Den beryktade forfattaren", role: "Subjekt" },
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
      "Trots att vädret var daligt beslot gruppen att genomfora vandringen langs kusten.",
    parts: [
      { text: "Trots att vadret var daligt", role: "Adverbial (bisats)" },
      { text: "beslot", role: "Predikat" },
      { text: "gruppen", role: "Subjekt" },
      {
        text: "att genomfora vandringen langs kusten",
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
      "Det ar en relativ bisats (relativsats) eftersom den inleds med relativpronomenet 'som' och ger mer information om ett substantiv.",
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
      "Det ar en konditionell bisats (villkorsbisats) som inleds med 'om' och anger ett villkor.",
  },
  {
    id: "meningsbyggnad-mc-gym-3",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening innehaller en inskjuten bisats?",
    prompt: "Valj den mening som har en inskjuten bisats.",
    options: [
      "Boken, som jag lanade, var spackande.",
      "Jag last boken och den var spackande.",
      "Boken var spackande eftersom den hade bra handling.",
      "Den spackande boken lag pa bordet.",
    ],
    correct: 0,
    explanation:
      "Mening 1 har en inskjuten relativsats 'som jag lanade' som star mellan kommatecken mitt i huvudsatsen.",
  },
  {
    id: "meningsbyggnad-mc-gym-4",
    type: "multiple-choice",
    topic: "meningsbyggnad",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening innehaller en satsförkortning?",
    prompt: "Valj den mening som har en satsförkortning.",
    options: [
      "Han gick ut for att handla.",
      "Han gick ut och handlade.",
      "Han gick ut, och sedan handlade han.",
      "Han gick ut. Han handlade.",
    ],
    correct: 0,
    explanation:
      "'For att handla' ar en satsförkortning (infinitivfras) som ersatter en hel bisats.",
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
    sentence: "Katten sover pa soffan____",
    options: [".", "?", "!"],
    correct: ".",
    explanation:
      "Meningen ar ett pastaende och avslutas darfor med en punkt.",
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
      "Meningen ar en fraga och avslutas darfor med ett fragetecken.",
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
      "Meningen ar ett utrop och avslutas darfor med ett utropstecken.",
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
    explanation: "Meningen borjar med 'Har du' och ar en fraga.",
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
      "Meningen ar en uppmaning med stark kansla och avslutas med utropstecken.",
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
      "Meningen ar ett enkelt pastaende och avslutas med punkt.",
  },
];

const skiljeteckenLagstadietMC: MultipleChoiceExercise[] = [
  {
    id: "skiljetecken-mc-lag-1",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Vilket tecken anvands i slutet av en fraga?",
    prompt: "Vilket skiljetecken satts i slutet av en fragamening?",
    options: ["Punkt (.)", "Fragetecken (?)", "Utropstecken (!)"],
    correct: 1,
    explanation:
      "En fragamening avslutas alltid med ett fragetecken (?). Exempel: Hur mar du?",
  },
  {
    id: "skiljetecken-mc-lag-2",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "lagstadiet",
    instruction: "Vilken mening ar korrekt skriven?",
    prompt: "Valj den mening som har ratt skiljetecken.",
    options: [
      "Var bor du.",
      "Var bor du?",
      "Var bor du!",
    ],
    correct: 1,
    explanation:
      "'Var bor du' ar en fraga och ska avslutas med fragetecken.",
  },
];

const skiljeteckenMellanstadietFIB: FillInBlankExercise[] = [
  {
    id: "skiljetecken-fib-mel-1",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Vi kopte applen____ bananer och mjolk.",
    options: [".", ",", "!", "?"],
    correct: ",",
    explanation:
      "Vid upprakningar anvands kommatecken mellan de uppraknade sakerna (utom fore 'och').",
  },
  {
    id: "skiljetecken-fib-mel-2",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Nar det regnar____ stannar vi inne.",
    options: [".", ",", "!", "?"],
    correct: ",",
    explanation:
      "Kommatecken sätts mellan bisats och huvudsats nar bisatsen kommer forst.",
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
      "Meningen uttrycker stark kansla och avslutas med utropstecken.",
  },
  {
    id: "skiljetecken-fib-mel-4",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Min bror____ som ar tio ar____ gar i fyran.",
    options: ["komma (,) pa bada stallena", "punkt (.) pa bada stallena", "fragetecken (?) pa bada stallena", "inget tecken alls"],
    correct: "komma (,) pa bada stallena",
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
      "Det ar en uppmaning och avslutas med utropstecken.",
  },
  {
    id: "skiljetecken-fib-mel-6",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Ja____ det later bra.",
    options: [".", ",", "!", "?"],
    correct: ",",
    explanation:
      "Efter ett inledande ja eller nej satts ett kommatecken.",
  },
];

const skiljeteckenMellanstadietMC: MultipleChoiceExercise[] = [
  {
    id: "skiljetecken-mc-mel-1",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Var ska kommatecknet placeras?",
    prompt: "Nar vi kom hem lagade vi middag.",
    options: [
      "Nar vi, kom hem lagade vi middag.",
      "Nar vi kom hem, lagade vi middag.",
      "Nar vi kom hem lagade, vi middag.",
      "Nar vi kom hem lagade vi, middag.",
    ],
    correct: 1,
    explanation:
      "Kommatecken satts efter bisatsen 'Nar vi kom hem' fore huvudsatsen 'lagade vi middag'.",
  },
  {
    id: "skiljetecken-mc-mel-2",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "mellanstadiet",
    instruction: "Vilken mening har ratt anvandning av kommatecken?",
    prompt: "Valj den korrekta meningen.",
    options: [
      "Jag har en hund, en katt och en hamster.",
      "Jag har en hund en katt, och en hamster.",
      "Jag har, en hund en katt och en hamster.",
      "Jag har en hund en katt och, en hamster.",
    ],
    correct: 0,
    explanation:
      "Vid upprakningar satts komma mellan varje led utom fore det sista ledet dar 'och' anvands.",
  },
];

const skiljeteckenHogstadietFIB: FillInBlankExercise[] = [
  {
    id: "skiljetecken-fib-hog-1",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Hon hade tva hobbyer____ lasning och malning.",
    options: [".", ",", ":", ";"],
    correct: ":",
    explanation:
      "Kolon anvands fore en upprakning eller ett förtydligande.",
  },
  {
    id: "skiljetecken-fib-hog-2",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Solen sken____ anda kandes det kallt.",
    options: [",", ":", ";", "."],
    correct: ";",
    explanation:
      "Semikolon anvands mellan tva sjalvstandiga satser som hanger ihop men inte binds av en konjunktion.",
  },
  {
    id: "skiljetecken-fib-hog-3",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Lararen forklarade____ Alla ska lamna in uppgiften pa fredag.",
    options: [".", ",", ":", ";"],
    correct: ":",
    explanation:
      "Kolon anvands fore ett citat eller direkt anföring.",
  },
  {
    id: "skiljetecken-fib-hog-4",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Vi behovde tre saker____ mod, uthallighet och tur.",
    options: [",", ";", ":", "."],
    correct: ":",
    explanation:
      "Kolon anvands har fore upprakningen av de tre sakerna.",
  },
  {
    id: "skiljetecken-fib-hog-5",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Taget var forsenat____ vi tog bussen istallet.",
    options: [",", ";", ":", "!"],
    correct: ";",
    explanation:
      "Semikolon binder samman tva nara relaterade huvudsatser utan konjunktion.",
  },
  {
    id: "skiljetecken-fib-hog-6",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence: "Klockan var 08____ 30 nar vi anlande.",
    options: [".", ",", ":", ";"],
    correct: ":",
    explanation: "Kolon anvands i klockslag, till exempel 08:30.",
  },
];

const skiljeteckenHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "skiljetecken-mc-hog-1",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Nar anvands semikolon?",
    prompt: "Vilket alternativ beskriver korrekt anvandning av semikolon?",
    options: [
      "Fore en upprakning",
      "Mellan tva narstaende huvudsatser utan konjunktion",
      "Fore ett citat",
      "I stallet for punkt i slutet av en mening",
    ],
    correct: 1,
    explanation:
      "Semikolon anvands mellan tva sjalvstandiga satser som har en tydlig koppling till varandra men saknar bindeord.",
  },
  {
    id: "skiljetecken-mc-hog-2",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "hogstadiet",
    instruction: "Vilken mening anvander kolon korrekt?",
    prompt: "Valj ratt alternativ.",
    options: [
      "Vi behover: mjolk, brod och smor.",
      "Vi behover foljande: mjolk, brod och smor.",
      "Vi: behover mjolk brod och smor.",
      "Vi behover mjolk: brod och smor.",
    ],
    correct: 1,
    explanation:
      "Kolon satts efter ett sammanfattande ord som 'foljande' fore upprakningen.",
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
      "Forfattaren menade____ enligt min tolkning____ att samhallet behover fornyelse.",
    options: [
      "kommatecken pa bada stallena",
      "kolon pa bada stallena",
      "tankstreck pa bada stallena",
      "semikolon pa bada stallena",
    ],
    correct: "kommatecken pa bada stallena",
    explanation:
      "Inskjutna fraser som 'enligt min tolkning' omges av kommatecken.",
  },
  {
    id: "skiljetecken-fib-gym-2",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilket skiljetecken saknas fore citatet?",
    sentence: 'Strindberg skriver____ "Det ar synd om manniskorna."',
    options: [".", ",", ":", ";"],
    correct: ":",
    explanation:
      "Kolon anvands fore ett direkt citat.",
  },
  {
    id: "skiljetecken-fib-gym-3",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence:
      "Den stilistiska analysen visade pa tva tendenser____ dels en okad anvandning av metaforer, dels en medveten rytmisering.",
    options: [",", ";", ":", "."],
    correct: ":",
    explanation:
      "Kolon anvands fore ett förtydligande eller specificerande tillagg.",
  },
  {
    id: "skiljetecken-fib-gym-4",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence:
      "Spraket forändras standigt____ nya ord tillkommer medan andra faller ur bruk.",
    options: [",", ";", ":", "."],
    correct: ";",
    explanation:
      "Semikolon binder har samman tva nara besläktade huvudsatser.",
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
      "Kommatecken anvands fore ett tillagg med 'till exempel'.",
  },
  {
    id: "skiljetecken-fib-gym-6",
    type: "fill-in-blank",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilket skiljetecken saknas?",
    sentence:
      "Rapporten behandlade tre omraden____ ekonomi, miljo och utbildning.",
    options: [",", ";", ":", "!"],
    correct: ":",
    explanation:
      "Kolon anvands fore en upprakning som specificerar 'tre omraden'.",
  },
];

const skiljeteckenGymnasietMC: MultipleChoiceExercise[] = [
  {
    id: "skiljetecken-mc-gym-1",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening anvander citattecken korrekt?",
    prompt: "Valj den mening som har korrekt citat.",
    options: [
      '"Jag kommer", sa hon, "om en timme."',
      '"Jag kommer, sa hon, om en timme."',
      '"Jag kommer" sa hon "om en timme."',
      '"Jag kommer sa hon om en timme."',
    ],
    correct: 0,
    explanation:
      "Nar ett citat avbryts av en anföringsfras omges den av kommatecken, och den andra delen av citatet far nya citattecken.",
  },
  {
    id: "skiljetecken-mc-gym-2",
    type: "multiple-choice",
    topic: "skiljetecken",
    ageGroup: "gymnasiet",
    instruction: "Vilken kommateringsprincip ar korrekt?",
    prompt: "Nar ska komma INTE anvandas?",
    options: [
      "Mellan huvudsats och efterställd bisats med 'att'",
      "Fore inskjuten bisats",
      "Mellan satsdelar i en upprakning",
      "Mellan bisats och efterföljande huvudsats",
    ],
    correct: 0,
    explanation:
      "Komma anvands normalt inte fore en att-sats som ar objekt i meningen: 'Jag tror att det blir bra.'",
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
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Jag tanker pa minnen fran somaren.",
    correctedSentence: "Jag tanker pa minnen fran sommaren.",
    errorWord: "somaren",
    correctWord: "sommaren",
    explanation:
      "Ordet 'sommaren' stavas med dubbelt m. Regeln ar att kort vokalljud fore konsonant ofta kraver dubbelteckning.",
  },
  {
    id: "stavning-ec-mel-2",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
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
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Vi sjöng en sang i skolan.",
    correctedSentence: "Vi sjong en sang i skolan.",
    errorWord: "sjöng",
    correctWord: "sjong",
    explanation:
      "'Sjong' stavas utan prickar over o. Tänk på att 'sjunga' har u, inte ö.",
  },
  {
    id: "stavning-ec-mel-4",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Hunnen sprang over garden.",
    correctedSentence: "Hunden sprang over garden.",
    errorWord: "Hunnen",
    correctWord: "Hunden",
    explanation:
      "Ordet stavas 'hunden' med nd-ljud. Forvaxla inte ng-ljud och nd-ljud.",
  },
  {
    id: "stavning-ec-mel-5",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Vi har matteprovet pa onssdagen.",
    correctedSentence: "Vi har matteprovet pa onsdagen.",
    errorWord: "onssdagen",
    correctWord: "onsdagen",
    explanation:
      "'Onsdagen' stavas med enkelt s. Dubbelteckning galler inte fore d har.",
  },
  {
    id: "stavning-ec-mel-6",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Kattan sover i sangen.",
    correctedSentence: "Katten sover i sangen.",
    errorWord: "Kattan",
    correctWord: "Katten",
    explanation:
      "'Katten' stavas med e, inte a. Den bestamda formen av 'katt' ar 'katten'.",
  },
];

const stavningMellanstadietMC: MultipleChoiceExercise[] = [
  {
    id: "stavning-mc-mel-1",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Vilket ord ar ratt stavat?",
    prompt: "Valj det korrekt stavade ordet.",
    options: ["pannkaka", "pankaka", "panncaka", "pannkakka"],
    correct: 0,
    explanation:
      "'Pannkaka' ar korrekt. Dubbelt n efter kort vokal, och 'kaka' stavas med enkelt k.",
  },
  {
    id: "stavning-mc-mel-2",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "mellanstadiet",
    instruction: "Vilket ord ar ratt stavat?",
    prompt: "Valj det korrekt stavade ordet.",
    options: ["langre", "langgre", "längre", "laangre"],
    correct: 2,
    explanation:
      "'Langre' ar komparativformen av 'lang'. Observera att a med prickar (ä) anvands i komparativ.",
  },
];

const stavningHogstadietEC: ErrorCorrectionExercise[] = [
  {
    id: "stavning-ec-hog-1",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Det ar viktigt att skota sin hygein.",
    correctedSentence: "Det ar viktigt att skota sin hygien.",
    errorWord: "hygein",
    correctWord: "hygien",
    explanation:
      "Ordet stavas 'hygien' med ie, inte ei. Manga lanord har ovanlig stavning.",
  },
  {
    id: "stavning-ec-hog-2",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Maniskan ar en social varelse.",
    correctedSentence: "Manniskan ar en social varelse.",
    errorWord: "Maniskan",
    correctWord: "Manniskan",
    explanation:
      "'Manniskan' stavas med dubbelt n. Kort vokal fore konsonant kraver ofta dubbelteckning.",
  },
  {
    id: "stavning-ec-hog-3",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Hon korde forbi sjukhuset pa vagen hem.",
    correctedSentence: "Hon korde forbi sjukhuset pa vagen hem.",
    errorWord: "korde",
    correctWord: "körde",
    explanation:
      "'Körde' stavas med ö. Sje-ljudet i 'kör' stavas med k fore ö.",
  },
  {
    id: "stavning-ec-hog-4",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Eleverna diskutterade fragan lange.",
    correctedSentence: "Eleverna diskuterade fragan lange.",
    errorWord: "diskutterade",
    correctWord: "diskuterade",
    explanation:
      "'Diskuterade' stavas med enkelt t. Lanord foljer inte alltid svenska dubbelteckningsregler.",
  },
  {
    id: "stavning-ec-hog-5",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "De kande sej stolta over resultatet.",
    correctedSentence: "De kande sig stolta over resultatet.",
    errorWord: "sej",
    correctWord: "sig",
    explanation:
      "I skriftsprak stavas det 'sig', inte 'sej'. 'Sej' ar talsprak.",
  },
  {
    id: "stavning-ec-hog-6",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Chefen presenterade en ny strategi for foretaget.",
    correctedSentence: "Chefen presenterade en ny strategi for foretaget.",
    errorWord: "Chefen",
    correctWord: "Chefen",
    explanation:
      "Har ar meningen korrekt. Tje-ljudet i 'chef' stavas med ch. Observera att detta sje-ljud kan stavas pa manga satt.",
  },
];

const stavningHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "stavning-mc-hog-1",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Vilket ord innehaller ett sje-ljud?",
    prompt: "Valj det ord som har sje-ljud.",
    options: ["kjol", "kind", "kaffe", "kall"],
    correct: 0,
    explanation:
      "'Kjol' innehaller ett sje-ljud som stavas kj. Sje-ljudet kan stavas pa manga satt: sj, sk, skj, stj, sch, ch, sh, ge, gi, j.",
  },
  {
    id: "stavning-mc-hog-2",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "hogstadiet",
    instruction: "Vilket ord ar ratt stavat?",
    prompt: "Valj det korrekt stavade ordet for sje-ljudet.",
    options: ["stjarna", "sjarna", "skjarna", "shjarna"],
    correct: 0,
    explanation:
      "'Stjarna' ar korrekt. Sje-ljudet stavas stj i detta ord.",
  },
];

const stavningGymnasietEC: ErrorCorrectionExercise[] = [
  {
    id: "stavning-ec-gym-1",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Dom foreslog att vi skulle traffas pa onsdag.",
    correctedSentence: "De foreslog att vi skulle traffas pa onsdag.",
    errorWord: "Dom",
    correctWord: "De",
    explanation:
      "I formellt skriftsprak anvands 'de' (subjektsform) och 'dem' (objektsform), inte 'dom'.",
  },
  {
    id: "stavning-ec-gym-2",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Lararen gav dem en ny uppgift att arbeta med.",
    correctedSentence: "Lararen gav dem en ny uppgift att arbeta med.",
    errorWord: "dem",
    correctWord: "dem",
    explanation:
      "Har ar 'dem' korrekt anvant eftersom det star i objektsform. Testa: kan du byta ut mot 'oss'? Da ar 'dem' ratt.",
  },
  {
    id: "stavning-ec-gym-3",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Det ar notvandigt att alla deltar.",
    correctedSentence: "Det ar nodvandigt att alla deltar.",
    errorWord: "notvandigt",
    correctWord: "nodvandigt",
    explanation:
      "'Nodvandigt' stavas med d, inte t. Den stumma bokstaven d hors inte i uttalet.",
  },
  {
    id: "stavning-ec-gym-4",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Dem som vinner far ett pris.",
    correctedSentence: "De som vinner far ett pris.",
    errorWord: "Dem",
    correctWord: "De",
    explanation:
      "'De' ar korrekt har eftersom det ar subjekt i satsen. Tips: om du kan ersatta med 'vi' ar det 'de', om du kan ersatta med 'oss' ar det 'dem'.",
  },
  {
    id: "stavning-ec-gym-5",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Forfattaren beskreft samhallet i sin roman.",
    correctedSentence: "Forfattaren beskrev samhallet i sin roman.",
    errorWord: "beskreft",
    correctWord: "beskrev",
    explanation:
      "'Beskrev' stavas med v, inte ft. Den stumma bokstaven forandras inte i preteritum av 'beskriva'.",
  },
  {
    id: "stavning-ec-gym-6",
    type: "error-correction",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Hitta och ratta stavfelet i meningen.",
    sentence: "Prosjektet slutfordes i tid.",
    correctedSentence: "Projektet slutfordes i tid.",
    errorWord: "Prosjektet",
    correctWord: "Projektet",
    explanation:
      "'Projektet' stavas med j, inte sj. Det ar ett lanord fran latin (projectum) och foljer inte svensk sje-ljudstavning.",
  },
];

const stavningGymnasietMC: MultipleChoiceExercise[] = [
  {
    id: "stavning-mc-gym-1",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Vilken mening anvander de/dem korrekt?",
    prompt: "Valj den korrekta meningen.",
    options: [
      "Dem tycker att det ar roligt.",
      "De tycker att det ar roligt.",
      "Dom tycker att det ar roligt.",
      "Den tycker att det ar roligt.",
    ],
    correct: 1,
    explanation:
      "'De' ar subjektsform. Eftersom 'de' ar subjekt i meningen (de tycker) ar 'de' korrekt.",
  },
  {
    id: "stavning-mc-gym-2",
    type: "multiple-choice",
    topic: "stavning",
    ageGroup: "gymnasiet",
    instruction: "Vilket ord innehaller en stum bokstav?",
    prompt: "I vilket ord hors inte alla bokstaver nar man uttalar det?",
    options: ["djur", "dator", "dans", "doft"],
    correct: 0,
    explanation:
      "I 'djur' ar d:et stumt — man uttalar bara j-ljudet. Stumma bokstaver ar vanliga i svenska, t.ex. dj, lj, hj.",
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
    instruction: "Ar ordet en sammansattning eller en avledning?",
    items: ["fotboll", "vänlig", "solsken", "tankbar", "skolbok", "modig"],
    categories: ["Sammansattning", "Avledning"],
    correctMapping: {
      fotboll: "Sammansattning",
      "vänlig": "Avledning",
      solsken: "Sammansattning",
      tankbar: "Avledning",
      skolbok: "Sammansattning",
      modig: "Avledning",
    },
  },
  {
    id: "ordbildning-cat-hog-2",
    type: "categorization",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Ar ordet en sammansattning eller en avledning?",
    items: [
      "lasbar",
      "sommarlov",
      "forsiktig",
      "bokhandel",
      "skrivelse",
      "vintertid",
    ],
    categories: ["Sammansattning", "Avledning"],
    correctMapping: {
      lasbar: "Avledning",
      sommarlov: "Sammansattning",
      forsiktig: "Avledning",
      bokhandel: "Sammansattning",
      skrivelse: "Avledning",
      vintertid: "Sammansattning",
    },
  },
];

const ordbildningHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "ordbildning-mc-hog-1",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vilket ar suffixet (andelsen) i ordet?",
    prompt: "Vilket ar suffixet i ordet 'vänlig'?",
    options: ["-lig", "-ig", "-nlig", "-van"],
    correct: 0,
    explanation:
      "Suffixet ar '-lig'. Grundordet ar 'van' och suffixet '-lig' bildar adjektivet 'vanlig'.",
  },
  {
    id: "ordbildning-mc-hog-2",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vilka tva ord bildar sammansattningen?",
    prompt: "Vilka delar bestar 'flygplats' av?",
    options: [
      "flyg + plats",
      "fly + gplats",
      "flygp + lats",
      "fl + ygplats",
    ],
    correct: 0,
    explanation:
      "'Flygplats' ar en sammansattning av 'flyg' (forled) och 'plats' (efterled).",
  },
  {
    id: "ordbildning-mc-hog-3",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vilket ar prefixet (forstavelsen) i ordet?",
    prompt: "Vilket ar prefixet i ordet 'overraskad'?",
    options: ["over-", "overr-", "o-", "overras-"],
    correct: 0,
    explanation:
      "Prefixet ar 'over-'. Det laggs fore grundordet 'raskad' (fran 'raska') for att bilda ett nytt ord.",
  },
  {
    id: "ordbildning-mc-hog-4",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Hur bildas ordet 'otrolig'?",
    prompt: "Vilken ordbildningsprocess har anvants?",
    options: [
      "Sammansattning",
      "Avledning med prefix",
      "Avledning med suffix",
      "Avledning med bade prefix och suffix",
    ],
    correct: 3,
    explanation:
      "'Otrolig' ar bildat genom avledning med bade prefix (o-) och suffix (-lig) fran grundordet 'tro'.",
  },
  {
    id: "ordbildning-mc-hog-5",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vad ar fogemorfemet i sammansattningen?",
    prompt: "Vad ar fogemorfemet i ordet 'dagstidning'?",
    options: ["-s-", "-t-", "-a-", "inget fogeelement"],
    correct: 0,
    explanation:
      "Fogemorfemet ar '-s-' som binder samman 'dag' och 'tidning'. Det ar ett av de vanligaste fogemorfemen i svenska.",
  },
  {
    id: "ordbildning-mc-hog-6",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "hogstadiet",
    instruction: "Vilken ordklass far ordet nar suffixet laggs till?",
    prompt: "Om vi lagger till '-het' pa adjektivet 'vacker', vilken ordklass far vi?",
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
    instruction:
      "Kategorisera varje ord efter vilken typ av ordbildning det har.",
    items: [
      "omtanksamhet",
      "jarnvagstation",
      "befrielse",
      "midsommarafton",
      "forstoring",
      "nattarbetare",
    ],
    categories: ["Sammansattning", "Avledning"],
    correctMapping: {
      omtanksamhet: "Avledning",
      jarnvagstation: "Sammansattning",
      befrielse: "Avledning",
      midsommarafton: "Sammansattning",
      forstoring: "Avledning",
      nattarbetare: "Sammansattning",
    },
  },
  {
    id: "ordbildning-cat-gym-2",
    type: "categorization",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Kategorisera varje ord som prefix-avledning eller suffix-avledning.",
    items: [
      "osakert",
      "lasbar",
      "missforstand",
      "vanskap",
      "atervinna",
      "handling",
    ],
    categories: ["Prefix-avledning", "Suffix-avledning"],
    correctMapping: {
      osakert: "Prefix-avledning",
      lasbar: "Suffix-avledning",
      missforstand: "Prefix-avledning",
      vanskap: "Suffix-avledning",
      atervinna: "Prefix-avledning",
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
    prompt: "Hur manga morfem innehaller ordet 'otacksamhet'?",
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
    instruction: "Vilket ar ett produktivt suffix for att bilda substantiv av verb?",
    prompt: "Valj det suffix som vanligen bildar substantiv av verb.",
    options: ["-lig", "-ning", "-bar", "-sam"],
    correct: 1,
    explanation:
      "Suffixet '-ning' ar mycket produktivt for att bilda substantiv av verb: losa -> losning, bygga -> byggning.",
  },
  {
    id: "ordbildning-mc-gym-3",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Vad ar ett laneord?",
    prompt: "Vilket av dessa ord ar ett laneord i svenska?",
    options: ["stuga", "garage", "vatten", "skog"],
    correct: 1,
    explanation:
      "'Garage' ar ett laneord fran franska. De ovriga ar svenska arvord.",
  },
  {
    id: "ordbildning-mc-gym-4",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Analysera sammansattningen.",
    prompt: "I sammansattningen 'barnboksforfattare', vilken ar huvudleden?",
    options: ["barn", "bok", "forfattare", "barnbok"],
    correct: 2,
    explanation:
      "Huvudleden i en sammansattning ar alltid den sista delen: 'forfattare'. Den bestammer ordets ordklass och grundbetydelse.",
  },
  {
    id: "ordbildning-mc-gym-5",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Vad ar skillnaden mellan avledning och bojning?",
    prompt: "Vilket ar ett exempel pa avledning (inte bojning)?",
    options: [
      "hund -> hundar",
      "springa -> springer",
      "glad -> gladare",
      "glad -> gladje",
    ],
    correct: 3,
    explanation:
      "'Glad -> gladje' ar avledning eftersom ordklassen andras (adjektiv -> substantiv). De ovriga ar bojningar inom samma ordklass.",
  },
  {
    id: "ordbildning-mc-gym-6",
    type: "multiple-choice",
    topic: "ordbildning",
    ageGroup: "gymnasiet",
    instruction: "Identifiera ordbildningstypen.",
    prompt: "Hur har ordet 'bio' bildats?",
    options: [
      "Sammansattning",
      "Avledning med prefix",
      "Fortkorning (kortord)",
      "Laneord",
    ],
    correct: 2,
    explanation:
      "'Bio' ar en fortkorning av 'biograf'. Fortkorning innebar att ett ord forkortas, ofta till forsta stavelsen.",
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
    instruction: "Valj ratt sambandsord for att binda ihop meningarna.",
    sentence: "Hon pluggade hart ____ provet. ____ fick hon ett bra resultat.",
    options: ["Darfor", "Dessutom", "Dock", "Trots det"],
    correct: "Darfor",
    explanation:
      "'Darfor' ar ett kausalt sambandsord som visar orsak-verkan: pluggande ledde till bra resultat.",
  },
  {
    id: "textbindning-fib-hog-2",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Valj ratt sambandsord.",
    sentence: "Det regnade hela dagen. ____ bestamde vi oss for att stanna inne.",
    options: ["Dessutom", "Darfor", "Dock", "I stallet"],
    correct: "Darfor",
    explanation:
      "'Darfor' visar att beslutet att stanna inne var en foljd av regnet.",
  },
  {
    id: "textbindning-fib-hog-3",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Valj ratt sambandsord.",
    sentence: "Filmen var lang. ____ var den mycket spackande.",
    options: ["Darfor", "Dessutom", "Dock", "Eftersom"],
    correct: "Dock",
    explanation:
      "'Dock' ar ett adversativt sambandsord som visar en kontrast: filmen var lang MEN anda spackande.",
  },
  {
    id: "textbindning-fib-hog-4",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Valj ratt sambandsord.",
    sentence: "Forst gick vi till affaren. ____ akte vi till parken.",
    options: ["Darfor", "Dessutom", "Sedan", "Dock"],
    correct: "Sedan",
    explanation:
      "'Sedan' ar ett temporalt sambandsord som visar tidsordning.",
  },
  {
    id: "textbindning-fib-hog-5",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Valj ratt sambandsord.",
    sentence:
      "Skolan erbjuder manga sportaktiviteter. ____ finns det en stor musikavdelning.",
    options: ["Dock", "Darfor", "Dessutom", "Istallet"],
    correct: "Dessutom",
    explanation:
      "'Dessutom' ar ett additivt sambandsord som lagger till information.",
  },
  {
    id: "textbindning-fib-hog-6",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Valj ratt sambandsord.",
    sentence: "Jag ville ga pa bio. ____ gick jag hem och sag en film.",
    options: ["Dessutom", "Dock", "I stallet", "Darfor"],
    correct: "I stallet",
    explanation:
      "'I stallet' visar att en annan handling valdes som alternativ.",
  },
];

const textbindningHogstadietMC: MultipleChoiceExercise[] = [
  {
    id: "textbindning-mc-hog-1",
    type: "multiple-choice",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Vilken typ av samband uttrycker ordet 'dessutom'?",
    prompt: "Vad for slags textbindning ar 'dessutom'?",
    options: [
      "Kausalt (orsak)",
      "Temporalt (tid)",
      "Additivt (tillagg)",
      "Adversativt (kontrast)",
    ],
    correct: 2,
    explanation:
      "'Dessutom' ar ett additivt sambandsord som lagger till information.",
  },
  {
    id: "textbindning-mc-hog-2",
    type: "multiple-choice",
    topic: "textbindning",
    ageGroup: "hogstadiet",
    instruction: "Vilken typ av samband uttrycker ordet 'dock'?",
    prompt: "Vad for slags textbindning ar 'dock'?",
    options: [
      "Kausalt (orsak)",
      "Temporalt (tid)",
      "Additivt (tillagg)",
      "Adversativt (kontrast)",
    ],
    correct: 3,
    explanation:
      "'Dock' ar ett adversativt sambandsord som uttrycker en kontrast eller invandning.",
  },
];

const textbindningGymnasietFIB: FillInBlankExercise[] = [
  {
    id: "textbindning-fib-gym-1",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Valj det mest passande sambandsordet.",
    sentence:
      "Forfattaren anvander ett rikt bildsprak. ____ skapar hon en nara forhallandevis personlig ton.",
    options: ["Foljaktligen", "Daremot", "Likvali", "Dartill"],
    correct: "Dartill",
    explanation:
      "'Dartill' ar ett formellt additivt sambandsord som lagger till ytterligare information.",
  },
  {
    id: "textbindning-fib-gym-2",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Valj det mest passande sambandsordet.",
    sentence:
      "Argumentet ar logiskt uppbyggt. ____ saknar det empiriska belagg.",
    options: ["Dessutom", "Foljaktligen", "Icke desto mindre", "Saledes"],
    correct: "Icke desto mindre",
    explanation:
      "'Icke desto mindre' ar ett formellt adversativt sambandsord som visar att nagot anda galler trots det foregaende.",
  },
  {
    id: "textbindning-fib-gym-3",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Valj det mest passande sambandsordet.",
    sentence:
      "Undersokningen visar pa tydliga skillnader. ____ kan man dra slutsatsen att ytterligare forskning behovs.",
    options: ["Dock", "Saledes", "Trots det", "Dessutom"],
    correct: "Saledes",
    explanation:
      "'Saledes' ar ett kausalt-konkluderande sambandsord som drar en slutsats baserad pa foregaende information.",
  },
  {
    id: "textbindning-fib-gym-4",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Valj det mest passande sambandsordet.",
    sentence:
      "Den forsta studien visade positiva resultat. ____ gav den andra studien helt annorlunda svar.",
    options: ["Dessutom", "Saledes", "Daremot", "Foljaktligen"],
    correct: "Daremot",
    explanation:
      "'Daremot' ar ett adversativt sambandsord som tydligt kontrasterar tva saker.",
  },
  {
    id: "textbindning-fib-gym-5",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Valj det mest passande sambandsordet.",
    sentence:
      "Eleverna hade arbetat intensivt med projektet. ____ var deras presentation genomtankt och valforbered.",
    options: ["Dock", "I stallet", "Foljaktligen", "Daremot"],
    correct: "Foljaktligen",
    explanation:
      "'Foljaktligen' ar ett formellt kausalt sambandsord som visar att resultatet ar en foljd av det foregaende.",
  },
  {
    id: "textbindning-fib-gym-6",
    type: "fill-in-blank",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Valj det mest passande sambandsordet.",
    sentence:
      "Kritikerna var till en borjan skeptiska. ____ andrade manga av dem sin uppfattning efter premiaren.",
    options: ["Dessutom", "Saledes", "Sedermera", "Dartill"],
    correct: "Sedermera",
    explanation:
      "'Sedermera' ar ett formellt temporalt sambandsord som anger att nagot hande vid en senare tidpunkt.",
  },
];

const textbindningGymnasietMC: MultipleChoiceExercise[] = [
  {
    id: "textbindning-mc-gym-1",
    type: "multiple-choice",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Vilken typ av textbindning representerar 'foljaktligen'?",
    prompt: "Klassificera sambandsordet 'foljaktligen'.",
    options: [
      "Additiv bindning",
      "Adversativ bindning",
      "Kausal bindning",
      "Temporal bindning",
    ],
    correct: 2,
    explanation:
      "'Foljaktligen' ar ett kausalt (orsakssamband) sambandsord som visar att nagot ar en foljd av nagot annat.",
  },
  {
    id: "textbindning-mc-gym-2",
    type: "multiple-choice",
    topic: "textbindning",
    ageGroup: "gymnasiet",
    instruction: "Vilken typ av textbindning anvands i exemplet?",
    prompt:
      "I meningen 'Forfattaren anvander metaforer. Dessa skapar en poetisk kansla.' — vilken typ av bindning ar 'dessa'?",
    options: [
      "Sambandsord (konnektiv)",
      "Referensbindning (syftning)",
      "Tematisk bindning",
      "Lexikal bindning",
    ],
    correct: 1,
    explanation:
      "'Dessa' ar ett exempel pa referensbindning — det syftar tillbaka pa 'metaforer' i foregaende mening.",
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
    instruction: "Vilken stilfigur anvands i exemplet?",
    prompt: "'Livet ar en resa.'",
    options: ["Liknelse", "Metafor", "Allitteration", "Anafor"],
    correct: 1,
    explanation:
      "Det ar en metafor — ett direkt jamforande utan 'som' eller 'likt'. Livet beskrivs direkt som en resa.",
  },
  {
    id: "stilistik-mc-gym-2",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur anvands i exemplet?",
    prompt: "'Hon var stark som en bjorn.'",
    options: ["Metafor", "Liknelse", "Hyperbol", "Besjälning"],
    correct: 1,
    explanation:
      "Det ar en liknelse — ett jamforande med hjalp av 'som'. Hon jamfors med en bjorn.",
  },
  {
    id: "stilistik-mc-gym-3",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur anvands i exemplet?",
    prompt: "'Peter Plansen plockade plommon pa planket.'",
    options: ["Anafor", "Allitteration", "Assonans", "Eufemism"],
    correct: 1,
    explanation:
      "Det ar allitteration — upprepning av samma begynnelseljud (p) i flera ord i rad.",
  },
  {
    id: "stilistik-mc-gym-4",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur anvands i exemplet?",
    prompt: "'Jag vill ha fred. Jag vill ha frihet. Jag vill ha ratttvisa.'",
    options: ["Allitteration", "Klimax", "Anafor", "Antites"],
    correct: 2,
    explanation:
      "Det ar en anafor — upprepning av samma ord eller fras i borjan av flera meningar ('Jag vill ha').",
  },
  {
    id: "stilistik-mc-gym-5",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur anvands i exemplet?",
    prompt: "'Vinden viskade genom traden.'",
    options: ["Metafor", "Liknelse", "Besjälning", "Hyperbol"],
    correct: 2,
    explanation:
      "Det ar besjälning (personifikation) — vinden far en mansklig egenskap (att viska).",
  },
  {
    id: "stilistik-mc-gym-6",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur anvands i exemplet?",
    prompt: "'Jag har sagt det en miljon ganger!'",
    options: ["Liknelse", "Besjälning", "Hyperbol", "Anafor"],
    correct: 2,
    explanation:
      "Det ar en hyperbol — en medveten overdrift for att forstarka ett uttryck.",
  },
  {
    id: "stilistik-mc-gym-7",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur anvands i exemplet?",
    prompt: "'Det var ett litet steg for en manniska, men ett jattekliv for manskligheten.'",
    options: ["Anafor", "Antites", "Allitteration", "Eufemism"],
    correct: 1,
    explanation:
      "Det ar en antites — tva motsatta ideer ställs mot varandra for att skapa effekt (litet steg vs. jattekliv).",
  },
  {
    id: "stilistik-mc-gym-8",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken stilfigur anvands i exemplet?",
    prompt: "'Han har gatt bort.' (om nagon som har dott)",
    options: ["Hyperbol", "Antites", "Eufemism", "Metafor"],
    correct: 2,
    explanation:
      "Det ar en eufemism — ett mildare uttryck ('gatt bort') anvands i stallet for nagot mer direkt ('dott').",
  },
  {
    id: "stilistik-mc-gym-9",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken sprakniva representerar texten?",
    prompt:
      "'Halla! Kolla, jag fixade det dar till slut. Fett nice alltsa!'",
    options: [
      "Formellt sprak",
      "Informellt sprak",
      "Akademiskt sprak",
      "Byrakratiskt sprak",
    ],
    correct: 1,
    explanation:
      "Texten ar skriven pa informellt (vardagligt) sprak med slanguttryck som 'fett nice' och 'kolla'.",
  },
  {
    id: "stilistik-mc-gym-10",
    type: "multiple-choice",
    topic: "stilistik",
    ageGroup: "gymnasiet",
    instruction: "Vilken sprakniva representerar texten?",
    prompt:
      "'Harmed intygas att undertecknad fullgjort samtliga alagda arbetsuppgifter i enlighet med gaellande bestammelser.'",
    options: [
      "Informellt sprak",
      "Ledigt skriftsprak",
      "Formellt/byrakratiskt sprak",
      "Litterart sprak",
    ],
    correct: 2,
    explanation:
      "Texten ar formellt/byrakratiskt sprak med kannetecken som passiv form, formella uttryck ('harmed intygas', 'undertecknad') och saklig ton.",
  },
];

// ---------------------------------------------------------------------------
// Combine all exercises
// ---------------------------------------------------------------------------

export const GRAMMAR_EXERCISES: GrammarExercise[] = [
  // 1. Ordklasser (~40)
  ...ordklasserLagstadietMC,
  ...ordklasserLagstadietCat,
  ...ordklasserMellanstadietMC,
  ...ordklasserMellanstadietCat,
  ...ordklasserHogstadietMC,
  ...ordklasserHogstadietCat,
  ...ordklasserGymnasietMC,
  ...ordklasserGymnasietCat,

  // 2. Meningsbyggnad (~24)
  ...meningsbyggnadMellanstadietSA,
  ...meningsbyggnadMellanstadietMC,
  ...meningsbyggnadHogstadietSA,
  ...meningsbyggnadHogstadietMC,
  ...meningsbyggnadGymnasietSA,
  ...meningsbyggnadGymnasietMC,

  // 3. Skiljetecken (~32)
  ...skiljeteckenLagstadietFIB,
  ...skiljeteckenLagstadietMC,
  ...skiljeteckenMellanstadietFIB,
  ...skiljeteckenMellanstadietMC,
  ...skiljeteckenHogstadietFIB,
  ...skiljeteckenHogstadietMC,
  ...skiljeteckenGymnasietFIB,
  ...skiljeteckenGymnasietMC,

  // 4. Stavning (~24)
  ...stavningMellanstadietEC,
  ...stavningMellanstadietMC,
  ...stavningHogstadietEC,
  ...stavningHogstadietMC,
  ...stavningGymnasietEC,
  ...stavningGymnasietMC,

  // 5. Ordbildning (~16)
  ...ordbildningHogstadietCat,
  ...ordbildningHogstadietMC,
  ...ordbildningGymnasietCat,
  ...ordbildningGymnasietMC,

  // 6. Textbindning (~16)
  ...textbindningHogstadietFIB,
  ...textbindningHogstadietMC,
  ...textbindningGymnasietFIB,
  ...textbindningGymnasietMC,

  // 7. Stilistik (~10)
  ...stilistikGymnasietMC,
];
