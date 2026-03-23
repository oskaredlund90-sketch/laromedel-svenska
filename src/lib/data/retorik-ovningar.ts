import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RetorikCategory =
  | "ethos-pathos-logos"
  | "retoriska-grepp"
  | "argumentationsanalys"
  | "debatt";

export type RetorikExerciseType = "quiz" | "match" | "analysis";

export interface RetorikExerciseBase {
  id: string;
  category: RetorikCategory;
  ageGroup: AgeGroup;
  instruction: string;
}

export interface RetorikQuiz extends RetorikExerciseBase {
  type: "quiz";
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface RetorikMatch extends RetorikExerciseBase {
  type: "match";
  pairs: { left: string; right: string }[];
}

export interface RetorikAnalysis extends RetorikExerciseBase {
  type: "analysis";
  text: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export type RetorikExercise = RetorikQuiz | RetorikMatch | RetorikAnalysis;

// ---------------------------------------------------------------------------
// Labels
// ---------------------------------------------------------------------------

export const RETORIK_CATEGORY_LABELS: Record<RetorikCategory, string> = {
  "ethos-pathos-logos": "Ethos, pathos, logos",
  "retoriska-grepp": "Retoriska grepp",
  argumentationsanalys: "Argumentationsanalys",
  debatt: "Debatt",
};

// ---------------------------------------------------------------------------
// Data — Mellanstadiet
// ---------------------------------------------------------------------------

const mellanstadietExercises: RetorikExercise[] = [
  {
    type: "quiz",
    id: "ret-mel-q1",
    category: "ethos-pathos-logos",
    ageGroup: "mellanstadiet",
    instruction: "Vilken typ av argument används?",
    prompt: "\"Som läkare vet jag att motion är viktigt för barn.\"",
    options: ["Ethos (trovärdighet)", "Pathos (känsla)", "Logos (logik)"],
    correct: 0,
    explanation: "Talaren använder sin yrkesroll som läkare för att skapa trovärdighet. Det är ethos.",
  },
  {
    type: "quiz",
    id: "ret-mel-q2",
    category: "ethos-pathos-logos",
    ageGroup: "mellanstadiet",
    instruction: "Vilken typ av argument används?",
    prompt: "\"Tänk på alla ensamma barn som inte har någon att leka med på rasten.\"",
    options: ["Ethos (trovärdighet)", "Pathos (känsla)", "Logos (logik)"],
    correct: 1,
    explanation: "Talaren försöker väcka medkänsla och empati. Det är pathos — ett känsloargument.",
  },
  {
    type: "quiz",
    id: "ret-mel-q3",
    category: "ethos-pathos-logos",
    ageGroup: "mellanstadiet",
    instruction: "Vilken typ av argument används?",
    prompt: "\"Undersökningar visar att elever som läser 20 minuter om dagen förbättrar sina betyg med 15 procent.\"",
    options: ["Ethos (trovärdighet)", "Pathos (känsla)", "Logos (logik)"],
    correct: 2,
    explanation: "Talaren använder siffror och forskning som bevis. Det är logos — ett logiskt argument.",
  },
  {
    type: "quiz",
    id: "ret-mel-q4",
    category: "retoriska-grepp",
    ageGroup: "mellanstadiet",
    instruction: "Vilket retoriskt grepp används?",
    prompt: "\"Ska vi verkligen acceptera att skolmaten smakar som kartong?\"",
    options: ["Retorisk fråga", "Upprepning", "Trestegsregel"],
    correct: 0,
    explanation: "En retorisk fråga förväntar sig inget svar — den används för att få lyssnaren att tänka och hålla med.",
  },
  {
    type: "quiz",
    id: "ret-mel-q5",
    category: "retoriska-grepp",
    ageGroup: "mellanstadiet",
    instruction: "Vilket retoriskt grepp används?",
    prompt: "\"Vi vill ha rättvisa. Vi vill ha respekt. Vi vill ha förändring.\"",
    options: ["Retorisk fråga", "Upprepning (anafor)", "Överdrift"],
    correct: 1,
    explanation: "\"Vi vill ha\" upprepas tre gånger. Det kallas anafor och skapar rytm och eftertryck.",
  },
  {
    type: "match",
    id: "ret-mel-m1",
    category: "ethos-pathos-logos",
    ageGroup: "mellanstadiet",
    instruction: "Para ihop argumenttypen med rätt exempel.",
    pairs: [
      { left: "\"Jag har jobbat med barn i 20 år.\"", right: "Ethos" },
      { left: "\"Tänk på de fattiga barnen!\"", right: "Pathos" },
      { left: "\"Statistiken visar att 80% håller med.\"", right: "Logos" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Högstadiet
// ---------------------------------------------------------------------------

const hogstadietExercises: RetorikExercise[] = [
  {
    type: "quiz",
    id: "ret-hog-q1",
    category: "ethos-pathos-logos",
    ageGroup: "hogstadiet",
    instruction: "Vilken appellform dominerar?",
    prompt: "\"Professor Eriksson vid Uppsala universitet har visat att sömnbrist ökar risken för depression med 40 procent.\"",
    options: ["Ethos", "Pathos", "Logos", "Ethos + Logos"],
    correct: 3,
    explanation: "Här kombineras ethos (professorn som auktoritet) med logos (siffran 40 procent). Ofta samverkar appellformerna.",
  },
  {
    type: "quiz",
    id: "ret-hog-q2",
    category: "retoriska-grepp",
    ageGroup: "hogstadiet",
    instruction: "Vilket retoriskt grepp används?",
    prompt: "\"Antingen kämpar vi för klimatet, eller så ger vi upp framtiden.\"",
    options: ["Retorisk fråga", "Antites", "Falsk dikotomi", "Anafor"],
    correct: 2,
    explanation: "Falsk dikotomi presenterar bara två alternativ som om de vore de enda möjliga. I verkligheten finns fler alternativ.",
  },
  {
    type: "quiz",
    id: "ret-hog-q3",
    category: "retoriska-grepp",
    ageGroup: "hogstadiet",
    instruction: "Vilket retoriskt grepp används?",
    prompt: "\"Frihet och slaveri, ljus och mörker — det är vår tids kontrast.\"",
    options: ["Anafor", "Antites", "Klimax", "Retorisk fråga"],
    correct: 1,
    explanation: "Antites ställer motsatspar mot varandra (frihet/slaveri, ljus/mörker) för att skapa dramatisk effekt.",
  },
  {
    type: "quiz",
    id: "ret-hog-q4",
    category: "argumentationsanalys",
    ageGroup: "hogstadiet",
    instruction: "Identifiera argumentationsfelet.",
    prompt: "\"Alla mina kompisar tycker att filmen är bra, alltså är den bra.\"",
    options: ["Auktoritetsargument", "Majoritetsargument (ad populum)", "Känsloargument", "Halmdocka"],
    correct: 1,
    explanation: "Att många tycker något bevisar inte att det stämmer. Det kallas ad populum — att hänvisa till vad majoriteten tycker.",
  },
  {
    type: "quiz",
    id: "ret-hog-q5",
    category: "argumentationsanalys",
    ageGroup: "hogstadiet",
    instruction: "Identifiera argumentationsfelet.",
    prompt: "\"Du säger att vi borde cykla mer. Men du kör ju bil själv!\"",
    options: ["Ad hominem (personangrepp)", "Halmdocka", "Cirkelresonemang", "Majoritetsargument"],
    correct: 0,
    explanation: "Att angripa personen istället för argumentet kallas ad hominem. Att talaren kör bil säger inget om huruvida cykling är bra.",
  },
  {
    type: "analysis",
    id: "ret-hog-a1",
    category: "argumentationsanalys",
    ageGroup: "hogstadiet",
    instruction: "Läs texten och svara på frågan.",
    text: "Skoluniformer borde införas i alla svenska skolor. För det första minskar det mobbning baserad på kläder. För det andra sparar familjer pengar. Dessutom visar forskning från England att elever med uniform presterar bättre.",
    question: "Vilken argumentationsstruktur används?",
    options: [
      "Tes + ett argument",
      "Tes + numrerade argument (för det första, för det andra, dessutom)",
      "Bara känsloargument",
      "Ingen tydlig struktur",
    ],
    correct: 1,
    explanation: "Texten har en tydlig tes (skoluniformer borde införas) följd av tre numrerade argument med signalord.",
  },
  {
    type: "match",
    id: "ret-hog-m1",
    category: "argumentationsanalys",
    ageGroup: "hogstadiet",
    instruction: "Para ihop argumentationsfelet med rätt beskrivning.",
    pairs: [
      { left: "Ad hominem", right: "Angriper personen istället för argumentet" },
      { left: "Halmdocka", right: "Förvränger motståndarens argument" },
      { left: "Ad populum", right: "Hänvisar till att de flesta tycker så" },
      { left: "Falsk dikotomi", right: "Presenterar bara två alternativ" },
    ],
  },
  {
    type: "match",
    id: "ret-hog-m2",
    category: "retoriska-grepp",
    ageGroup: "hogstadiet",
    instruction: "Para ihop det retoriska greppet med rätt exempel.",
    pairs: [
      { left: "Anafor", right: "\"Jag drömmer om... Jag drömmer om...\"" },
      { left: "Retorisk fråga", right: "\"Vem vill leva i en orättvis värld?\"" },
      { left: "Klimax", right: "\"Det var dåligt, det var uselt, det var katastrof.\"" },
      { left: "Antites", right: "\"Inte hat, utan kärlek.\"" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet
// ---------------------------------------------------------------------------

const gymnasietExercises: RetorikExercise[] = [
  {
    type: "quiz",
    id: "ret-gym-q1",
    category: "ethos-pathos-logos",
    ageGroup: "gymnasiet",
    instruction: "Analysera talets retoriska strategi.",
    prompt: "\"Jag står här idag — inte som politiker, utan som förälder. Mina barn förtjänar en trygg framtid. Enligt FN:s klimatrapport har vi tio år på oss.\"",
    options: [
      "Bara ethos",
      "Bara logos",
      "Ethos → pathos → logos (alla tre i en retorisk progression)",
      "Bara pathos",
    ],
    correct: 2,
    explanation: "Talaren bygger först ethos (förälder, inte politiker), väcker sedan pathos (barnen, trygg framtid) och avslutar med logos (FN-rapport, tio år). Retorisk triangel i aktion.",
  },
  {
    type: "quiz",
    id: "ret-gym-q2",
    category: "retoriska-grepp",
    ageGroup: "gymnasiet",
    instruction: "Vilket retoriskt grepp kallas detta?",
    prompt: "\"Ask not what your country can do for you — ask what you can do for your country.\" (JFK)",
    options: ["Anafor", "Kiasm (chiasmus)", "Klimax", "Epifor"],
    correct: 1,
    explanation: "Kiasm (chiasmus) innebär att ordföljden spegelvänds: A-B blir B-A. \"Country-you\" blir \"you-country\".",
  },
  {
    type: "quiz",
    id: "ret-gym-q3",
    category: "argumentationsanalys",
    ageGroup: "gymnasiet",
    instruction: "Identifiera det logiska felet.",
    prompt: "\"Sverige har haft invandring i 50 år. Sverige har ökad brottslighet. Alltså orsakar invandring brottslighet.\"",
    options: [
      "Ad hominem",
      "Korrelation-kausalitetsfel (post hoc)",
      "Cirkelresonemang",
      "Halmdocka",
    ],
    correct: 1,
    explanation: "Att två saker sker samtidigt (korrelation) bevisar inte att det ena orsakar det andra (kausalitet). Man måste isolera andra faktorer.",
  },
  {
    type: "quiz",
    id: "ret-gym-q4",
    category: "argumentationsanalys",
    ageGroup: "gymnasiet",
    instruction: "Identifiera det logiska felet.",
    prompt: "\"Om vi tillåter eleverna att använda mobiler på rasten, kommer de snart vilja använda dem på lektionerna. Sedan kollapsar hela undervisningen.\"",
    options: [
      "Falsk dikotomi",
      "Sluttande planet (slippery slope)",
      "Ad populum",
      "Cirkelresonemang",
    ],
    correct: 1,
    explanation: "Sluttande planet innebär att man påstår att ett litet steg oundvikligen leder till en extrem konsekvens utan att bevisa kedjan.",
  },
  {
    type: "quiz",
    id: "ret-gym-q5",
    category: "debatt",
    ageGroup: "gymnasiet",
    instruction: "Vilken debatteknik används?",
    prompt: "I en debatt säger en deltagare: \"Min motståndare menar att vi ska öppna gränserna helt och släppa in alla.\" Motståndaren har dock bara föreslagit ökad kvotflyktingmottagning.",
    options: ["Halmdocka", "Ad hominem", "Whataboutism", "Rött sill"],
    correct: 0,
    explanation: "Halmdocka (straw man) innebär att man förvränger motståndarens argument till en extrem version som är lättare att bemöta.",
  },
  {
    type: "quiz",
    id: "ret-gym-q6",
    category: "debatt",
    ageGroup: "gymnasiet",
    instruction: "Vilken debatteknik används?",
    prompt: "\"Du kritiserar Sveriges klimatpolitik — men vad gör Kina då?\"",
    options: ["Halmdocka", "Ad hominem", "Whataboutism", "Falsk dikotomi"],
    correct: 2,
    explanation: "Whataboutism avleder diskussionen genom att peka på andra istället för att bemöta det ursprungliga argumentet.",
  },
  {
    type: "analysis",
    id: "ret-gym-a1",
    category: "argumentationsanalys",
    ageGroup: "gymnasiet",
    instruction: "Läs texten och analysera.",
    text: "Sociala medier borde förbjudas för barn under 16. Forskare vid Stanford visar att skärmtid ökar ångest hos unga. " +
      "Dessutom rapporterar lärare att koncentrationen sjunker. Vi kan inte offra en hel generation för teknikbolagens vinster. " +
      "Våra barn förtjänar bättre.",
    question: "Vilka appellformer används och i vilken ordning?",
    options: [
      "Bara logos genom hela texten",
      "Logos (forskning, lärare) → pathos (offra en generation, barnen förtjänar)",
      "Bara pathos",
      "Ethos → logos → pathos",
    ],
    correct: 1,
    explanation: "Texten börjar med logiska argument (forskning, lärares rapporter) och avslutar med starka känsloargument (offra en generation, barnen förtjänar bättre).",
  },
  {
    type: "analysis",
    id: "ret-gym-a2",
    category: "retoriska-grepp",
    ageGroup: "gymnasiet",
    instruction: "Läs textutdraget och identifiera de retoriska greppen.",
    text: "\"Vi ska inte ge upp. Vi ska inte vika oss. Vi ska inte vara tysta. För om vi tiger nu — vem talar sedan?\"",
    question: "Vilka retoriska grepp används?",
    options: [
      "Bara anafor",
      "Anafor (vi ska inte) + klimax (stegring) + retorisk fråga (vem talar sedan?)",
      "Bara retorisk fråga",
      "Antites + eufemism",
    ],
    correct: 1,
    explanation: "Tre grepp samverkar: anaforen (\"Vi ska inte\" × 3) bygger rytm, stegringen ökar intensiteten, och den retoriska frågan tvingar lyssnaren att reflektera.",
  },
  {
    type: "match",
    id: "ret-gym-m1",
    category: "argumentationsanalys",
    ageGroup: "gymnasiet",
    instruction: "Para ihop det logiska felet med rätt beskrivning.",
    pairs: [
      { left: "Korrelation ≠ kausalitet", right: "Att två saker samvarierar bevisar inte orsakssamband" },
      { left: "Sluttande planet", right: "Litet steg leder oundvikligen till extrem konsekvens" },
      { left: "Cirkelresonemang", right: "Slutsatsen används som premiss för sig själv" },
      { left: "Whataboutism", right: "Avleder genom att peka på andra" },
    ],
  },
  {
    type: "match",
    id: "ret-gym-m2",
    category: "retoriska-grepp",
    ageGroup: "gymnasiet",
    instruction: "Para ihop det retoriska greppet med rätt definition.",
    pairs: [
      { left: "Kiasm", right: "Spegelvänd ordföljd: A-B → B-A" },
      { left: "Asyndes", right: "Uppräkning utan bindeord" },
      { left: "Trikolon", right: "Tre parallella led i rad" },
      { left: "Epifor", right: "Upprepning i slutet av satser" },
    ],
  },
];

// ---------------------------------------------------------------------------
// All exercises + helper
// ---------------------------------------------------------------------------

const ALL_RETORIK_EXERCISES: RetorikExercise[] = [
  ...mellanstadietExercises,
  ...hogstadietExercises,
  ...gymnasietExercises,
];

const AGE_GROUP_FALLBACKS: Record<AgeGroup, AgeGroup[]> = {
  lagstadiet: [],
  mellanstadiet: [],
  hogstadiet: ["mellanstadiet"],
  gymnasiet: ["hogstadiet", "mellanstadiet"],
};

export function getRetorikExercises(
  category: RetorikCategory,
  ageGroup: AgeGroup,
): RetorikExercise[] {
  const direct = ALL_RETORIK_EXERCISES.filter(
    (e) => e.category === category && e.ageGroup === ageGroup,
  );
  if (direct.length > 0) return direct;

  for (const fb of AGE_GROUP_FALLBACKS[ageGroup]) {
    const fallback = ALL_RETORIK_EXERCISES.filter(
      (e) => e.category === category && e.ageGroup === fb,
    );
    if (fallback.length > 0) return fallback;
  }
  return [];
}

export function getAllRetorikExercises(ageGroup: AgeGroup): RetorikExercise[] {
  const direct = ALL_RETORIK_EXERCISES.filter((e) => e.ageGroup === ageGroup);
  if (direct.length > 0) return direct;

  for (const fb of AGE_GROUP_FALLBACKS[ageGroup]) {
    const fallback = ALL_RETORIK_EXERCISES.filter((e) => e.ageGroup === fb);
    if (fallback.length > 0) return fallback;
  }
  return [];
}
