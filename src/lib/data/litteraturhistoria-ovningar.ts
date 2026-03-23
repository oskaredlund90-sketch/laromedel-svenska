import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type LitExerciseType = "quiz" | "match" | "timeline";

export interface QuizExercise {
  type: "quiz";
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface MatchExercise {
  type: "match";
  id: string;
  instruction: string;
  pairs: { left: string; right: string }[];
}

export interface TimelineExercise {
  type: "timeline";
  id: string;
  instruction: string;
  /** Items the student must place in chronological order */
  items: { label: string; year: number }[];
}

export type LitExercise = QuizExercise | MatchExercise | TimelineExercise;

export interface LitExerciseSet {
  ageGroup: AgeGroup;
  exercises: LitExercise[];
}

// ---------------------------------------------------------------------------
// Data — Lågstadiet
// ---------------------------------------------------------------------------

const lagstadietExercises: LitExercise[] = [
  {
    type: "quiz",
    id: "lit-lag-q1",
    prompt: "Vem skrev om Pippi Långstrump?",
    options: ["Elsa Beskow", "Astrid Lindgren", "Sven Nordqvist", "Barbro Lindgren"],
    correct: 1,
    explanation: "Astrid Lindgren skapade Pippi Långstrump, en av världens mest kända barnbokskaraktärer.",
  },
  {
    type: "quiz",
    id: "lit-lag-q2",
    prompt: "Vilken författare skapade Pettson och Findus?",
    options: ["Gunilla Bergström", "Astrid Lindgren", "Sven Nordqvist", "Elsa Beskow"],
    correct: 2,
    explanation: "Sven Nordqvist är mannen bakom den gamle uppfinnaren Pettson och hans pratiga katt Findus.",
  },
  {
    type: "quiz",
    id: "lit-lag-q3",
    prompt: "Vad handlar Elsa Beskows böcker ofta om?",
    options: ["Rymden", "Naturen och sagor", "Bilar och tåg", "Datorer"],
    correct: 1,
    explanation: "Elsa Beskow är känd för sina naturinspirerade sagor som Puttes äventyr i blåbärsskogen och Tomtebobarnen.",
  },
  {
    type: "quiz",
    id: "lit-lag-q4",
    prompt: "Vilken karaktär skapade Gunilla Bergström?",
    options: ["Emil", "Alfons Åberg", "Findus", "Nils Holgersson"],
    correct: 1,
    explanation: "Gunilla Bergström skapade Alfons Åberg — en pojke som många barn känner igen sig i.",
  },
  {
    type: "match",
    id: "lit-lag-m1",
    instruction: "Para ihop författaren med rätt karaktär.",
    pairs: [
      { left: "Astrid Lindgren", right: "Pippi Långstrump" },
      { left: "Sven Nordqvist", right: "Pettson och Findus" },
      { left: "Gunilla Bergström", right: "Alfons Åberg" },
      { left: "Barbro Lindgren", right: "Loranga" },
    ],
  },
  {
    type: "match",
    id: "lit-lag-m2",
    instruction: "Para ihop boken med rätt författare.",
    pairs: [
      { left: "Bröderna Lejonhjärta", right: "Astrid Lindgren" },
      { left: "Tomtebobarnen", right: "Elsa Beskow" },
      { left: "Max-serien", right: "Barbro Lindgren" },
      { left: "Alfons och odjuret", right: "Gunilla Bergström" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Mellanstadiet
// ---------------------------------------------------------------------------

const mellanstadietExercises: LitExercise[] = [
  {
    type: "quiz",
    id: "lit-mel-q1",
    prompt: "Vad kallas den litterära perioden mellan cirka 1810 och 1850?",
    options: ["Realismen", "Romantiken", "Modernismen", "Medeltiden"],
    correct: 1,
    explanation: "Romantiken (ca 1810–1850) präglades av fantasi, känsla och nationalromantik.",
  },
  {
    type: "quiz",
    id: "lit-mel-q2",
    prompt: "Vem skrev Nils Holgerssons underbara resa?",
    options: ["August Strindberg", "Selma Lagerlöf", "Vilhelm Moberg", "Hjalmar Söderberg"],
    correct: 1,
    explanation: "Selma Lagerlöf fick i uppdrag att skriva en läsebok om Sverige och skapade berättelsen om Nils som flyger med vildgässen.",
  },
  {
    type: "quiz",
    id: "lit-mel-q3",
    prompt: "Vad betyder 'det moderna genombrottet' inom litteraturen?",
    options: [
      "Att man började skriva på datorer",
      "Att författare började skriva om verkliga samhällsproblem istället för romantiska ideal",
      "Att alla böcker fick bilder",
      "Att man slutade skriva böcker",
    ],
    correct: 1,
    explanation: "Det moderna genombrottet (ca 1880-talet) innebar att litteraturen vände sig mot verkligheten och behandlade samhällsfrågor som klass, kön och religion.",
  },
  {
    type: "quiz",
    id: "lit-mel-q4",
    prompt: "Under vilken period skrevs de flesta runstenar i Sverige?",
    options: ["1800-talet", "Medeltiden och vikingatiden", "1900-talet", "Romantiken"],
    correct: 1,
    explanation: "Runstenar hör till den äldsta litterära kulturen i Norden, från vikingatiden och tidig medeltid.",
  },
  {
    type: "match",
    id: "lit-mel-m1",
    instruction: "Para ihop epoken med rätt beskrivning.",
    pairs: [
      { left: "Romantiken", right: "Känsla, fantasi och nationalromantik" },
      { left: "Realismen", right: "Verkliga samhällsproblem skildras" },
      { left: "Medeltiden", right: "Runstenar, saga och legend" },
      { left: "1900-talet", right: "Nya uttryck och experiment" },
    ],
  },
  {
    type: "match",
    id: "lit-mel-m2",
    instruction: "Para ihop författaren med rätt tidsperiod.",
    pairs: [
      { left: "Selma Lagerlöf", right: "Sekelskiftet 1900" },
      { left: "August Strindberg", right: "Det moderna genombrottet" },
      { left: "Astrid Lindgren", right: "1900-talets mitt" },
      { left: "Esaias Tegnér", right: "Romantiken" },
    ],
  },
  {
    type: "timeline",
    id: "lit-mel-t1",
    instruction: "Sortera perioderna i rätt ordning, från äldst till nyast.",
    items: [
      { label: "Medeltiden", year: 1200 },
      { label: "Romantiken", year: 1810 },
      { label: "Realismen", year: 1850 },
      { label: "Vår tid", year: 1950 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Högstadiet
// ---------------------------------------------------------------------------

const hogstadietExercises: LitExercise[] = [
  {
    type: "quiz",
    id: "lit-hog-q1",
    prompt: "Vilken författare är mest förknippad med det moderna genombrottet i svensk litteratur?",
    options: ["Erik Axel Karlfeldt", "August Strindberg", "Selma Lagerlöf", "Tomas Tranströmer"],
    correct: 1,
    explanation: "August Strindberg var en central figur i det moderna genombrottet med verk som Röda rummet (1879).",
  },
  {
    type: "quiz",
    id: "lit-hog-q2",
    prompt: "Vad utmärker modernismen inom litteraturen?",
    options: [
      "Fokus på nationell stolthet och traditioner",
      "Experiment med form, inre monolog och fragmentariskt berättande",
      "Strikt rim och meter i all poesi",
      "Enbart realistiska skildringar av vardagslivet",
    ],
    correct: 1,
    explanation: "Modernismen (ca 1900–1940) bröt med traditionella former och använde nya tekniker som inre monolog och fri vers.",
  },
  {
    type: "quiz",
    id: "lit-hog-q3",
    prompt: "Vilken roman anses vara den första moderna svenska romanen?",
    options: ["Gösta Berlings saga", "Röda rummet", "Utvandrarna", "Doktor Glas"],
    correct: 1,
    explanation: "August Strindbergs Röda rummet (1879) brukar ses som startskottet för modern svensk litteratur.",
  },
  {
    type: "quiz",
    id: "lit-hog-q4",
    prompt: "Vad handlar Vilhelm Mobergs Utvandrarserie om?",
    options: [
      "Svensk adel under stormaktstiden",
      "Den svenska utvandringen till Amerika på 1800-talet",
      "En detektivhistoria i Stockholm",
      "Vikingarnas resor",
    ],
    correct: 1,
    explanation: "Vilhelm Mobergs Utvandrarna-svit (1949–1959) skildrar svenska bönders emigration till Minnesota.",
  },
  {
    type: "quiz",
    id: "lit-hog-q5",
    prompt: "Vad präglade efterkrigslitteraturen i Sverige?",
    options: [
      "Glada och optimistiska berättelser",
      "Existentiell ångest, samhällskritik och folkhemsbygge",
      "Enbart fantasy och science fiction",
      "Fokus på antikens litteratur",
    ],
    correct: 1,
    explanation: "Efterkrigslitteraturen (ca 1940–1970) präglades av existentiella frågor, kritik av samhället och folkhemsprojektets ideal.",
  },
  {
    type: "match",
    id: "lit-hog-m1",
    instruction: "Para ihop verket med rätt författare.",
    pairs: [
      { left: "Röda rummet", right: "August Strindberg" },
      { left: "Gösta Berlings saga", right: "Selma Lagerlöf" },
      { left: "Utvandrarna", right: "Vilhelm Moberg" },
      { left: "Doktor Glas", right: "Hjalmar Söderberg" },
    ],
  },
  {
    type: "match",
    id: "lit-hog-m2",
    instruction: "Para ihop epoken med dess ungefärliga tidsperiod.",
    pairs: [
      { left: "Medeltiden", right: "ca 1200–1500" },
      { left: "Romantiken", right: "ca 1810–1850" },
      { left: "Modernismen", right: "ca 1890–1940" },
      { left: "Efterkrigstiden", right: "ca 1940–1970" },
    ],
  },
  {
    type: "timeline",
    id: "lit-hog-t1",
    instruction: "Placera verken i kronologisk ordning.",
    items: [
      { label: "Röda rummet (Strindberg)", year: 1879 },
      { label: "Gösta Berlings saga (Lagerlöf)", year: 1891 },
      { label: "Doktor Glas (Söderberg)", year: 1905 },
      { label: "Utvandrarna (Moberg)", year: 1949 },
    ],
  },
  {
    type: "timeline",
    id: "lit-hog-t2",
    instruction: "Sortera epokerna i kronologisk ordning.",
    items: [
      { label: "Medeltiden", year: 1200 },
      { label: "Stormaktstiden", year: 1600 },
      { label: "Romantiken", year: 1810 },
      { label: "Det moderna genombrottet", year: 1880 },
      { label: "Modernismen", year: 1910 },
      { label: "Efterkrigstiden", year: 1945 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet
// ---------------------------------------------------------------------------

const gymnasietExercises: LitExercise[] = [
  {
    type: "quiz",
    id: "lit-gym-q1",
    prompt: "Vilken litteraturteoretisk inriktning studerar berättandets strukturer (berättare, fokalisering, tid)?",
    options: ["Genusteori", "Narratologi", "Postkolonialism", "Receptionsteori"],
    correct: 1,
    explanation: "Narratologi är studiet av berättandets strukturer, inklusive berättarperspektiv, fokalisering och tidshantering.",
  },
  {
    type: "quiz",
    id: "lit-gym-q2",
    prompt: "Vad menar receptionsestetiken med att läsaren är 'medskapare' av textens mening?",
    options: [
      "Att läsaren skriver delar av texten",
      "Att textens mening skapas i mötet mellan text och läsare — olika läsare tolkar olika",
      "Att författaren inte har någon roll",
      "Att alla texter betyder samma sak",
    ],
    correct: 1,
    explanation: "Receptionsteori (bl.a. Wolfgang Iser) menar att texten har 'tomrum' som läsaren fyller med egna erfarenheter, vilket gör varje läsning unik.",
  },
  {
    type: "quiz",
    id: "lit-gym-q3",
    prompt: "Vilket av dessa verk tillhör den svenska modernismen?",
    options: [
      "Röda rummet (1879)",
      "Gösta Berlings saga (1891)",
      "Aniara (1956)",
      "Utvandrarna (1949)",
    ],
    correct: 2,
    explanation: "Harry Martinsons Aniara (1956) är ett modernistiskt rymd-epos i versform och ett av den svenska modernismens mest kända verk.",
  },
  {
    type: "quiz",
    id: "lit-gym-q4",
    prompt: "Vilken dansk kritiker var central för det moderna genombrottet i Norden?",
    options: ["Søren Kierkegaard", "Georg Brandes", "Hans Christian Andersen", "Karen Blixen"],
    correct: 1,
    explanation: "Georg Brandes höll föreläsningar 1871 där han uppmanade nordisk litteratur att 'sätta problem under debatt', vilket blev startskottet för det moderna genombrottet.",
  },
  {
    type: "quiz",
    id: "lit-gym-q5",
    prompt: "Vad innebär en postkolonial läsning av en text?",
    options: [
      "Att analysera texten enbart utifrån dess språkliga stil",
      "Att undersöka hur maktstrukturer, kolonialism och representation av 'den andre' framträder",
      "Att jämföra texten med dess filmatisering",
      "Att studera hur texten trycktes och distribuerades",
    ],
    correct: 1,
    explanation: "Postkolonial litteraturteori granskar hur koloniala maktrelationer och stereotyper påverkar och genomsyrar litterära texter.",
  },
  {
    type: "quiz",
    id: "lit-gym-q6",
    prompt: "Vilken svensk författare fick Nobelpriset i litteratur 2011?",
    options: ["Selma Lagerlöf", "Harry Martinson", "Tomas Tranströmer", "Per Olov Enquist"],
    correct: 2,
    explanation: "Tomas Tranströmer fick Nobelpriset 2011 för sin kondenserade, bildrika poesi.",
  },
  {
    type: "match",
    id: "lit-gym-m1",
    instruction: "Para ihop det litteraturteoretiska perspektivet med dess fokus.",
    pairs: [
      { left: "Narratologi", right: "Berättandets struktur" },
      { left: "Receptionsteori", right: "Läsarens roll i tolkningen" },
      { left: "Genusteori", right: "Könets konstruktion i text" },
      { left: "Postkolonialism", right: "Maktstrukturer och representation" },
    ],
  },
  {
    type: "match",
    id: "lit-gym-m2",
    instruction: "Para ihop den internationella författaren med rätt svensk epok-parallell.",
    pairs: [
      { left: "Lord Byron (England)", right: "Romantiken" },
      { left: "Henrik Ibsen (Norge)", right: "Det moderna genombrottet" },
      { left: "Franz Kafka (Tjeckien)", right: "Modernismen" },
      { left: "Virginia Woolf (England)", right: "Modernismen" },
    ],
  },
  {
    type: "match",
    id: "lit-gym-m3",
    instruction: "Para ihop Nobelpristagaren med rätt verk.",
    pairs: [
      { left: "Selma Lagerlöf (1909)", right: "Gösta Berlings saga" },
      { left: "Harry Martinson (1974)", right: "Aniara" },
      { left: "Tomas Tranströmer (2011)", right: "Det vilda torget" },
      { left: "Eyvind Johnson (1974)", right: "Krilon-trilogin" },
    ],
  },
  {
    type: "timeline",
    id: "lit-gym-t1",
    instruction: "Sortera de svenska Nobelpristagarna kronologiskt.",
    items: [
      { label: "Selma Lagerlöf", year: 1909 },
      { label: "Verner von Heidenstam", year: 1916 },
      { label: "Pär Lagerkvist", year: 1951 },
      { label: "Harry Martinson & Eyvind Johnson", year: 1974 },
      { label: "Tomas Tranströmer", year: 2011 },
    ],
  },
  {
    type: "timeline",
    id: "lit-gym-t2",
    instruction: "Placera verken i kronologisk ordning.",
    items: [
      { label: "Fritjofs saga (Tegnér)", year: 1825 },
      { label: "Röda rummet (Strindberg)", year: 1879 },
      { label: "Doktor Glas (Söderberg)", year: 1905 },
      { label: "Aniara (Martinson)", year: 1956 },
      { label: "Det vilda torget (Tranströmer)", year: 1983 },
    ],
  },
];

// ---------------------------------------------------------------------------
// All exercises
// ---------------------------------------------------------------------------

const ALL_EXERCISES: LitExerciseSet[] = [
  { ageGroup: "lagstadiet", exercises: lagstadietExercises },
  { ageGroup: "mellanstadiet", exercises: mellanstadietExercises },
  { ageGroup: "hogstadiet", exercises: hogstadietExercises },
  { ageGroup: "gymnasiet", exercises: gymnasietExercises },
];

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const AGE_GROUP_FALLBACKS: Record<AgeGroup, AgeGroup[]> = {
  lagstadiet: [],
  mellanstadiet: ["lagstadiet"],
  hogstadiet: ["mellanstadiet", "lagstadiet"],
  gymnasiet: ["hogstadiet", "mellanstadiet", "lagstadiet"],
};

export function getLitExercises(ageGroup: AgeGroup): LitExercise[] {
  const exact = ALL_EXERCISES.find((s) => s.ageGroup === ageGroup);
  if (exact && exact.exercises.length > 0) return exact.exercises;

  for (const fallback of AGE_GROUP_FALLBACKS[ageGroup]) {
    const fb = ALL_EXERCISES.find((s) => s.ageGroup === fallback);
    if (fb && fb.exercises.length > 0) return fb.exercises;
  }

  return [];
}
