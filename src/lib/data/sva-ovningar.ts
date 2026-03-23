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
      "'Se ut' betyder att ha ett visst utseende eller verka på ett visst sätt. 'Hon ser ut glad' = hon verkar glad. 'Se på' betyder att titta på något.",
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
