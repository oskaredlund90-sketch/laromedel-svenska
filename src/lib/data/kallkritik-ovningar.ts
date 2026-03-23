import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type KallkritikExerciseType =
  | "credibility-rating"
  | "source-comparison"
  | "fact-check"
  | "bias-detection";

export interface KallkritikExerciseBase {
  id: string;
  ageGroup: AgeGroup;
  instruction: string;
}

export interface CredibilityRating extends KallkritikExerciseBase {
  type: "credibility-rating";
  source: string;
  description: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface SourceComparison extends KallkritikExerciseBase {
  type: "source-comparison";
  sourceA: { label: string; text: string };
  sourceB: { label: string; text: string };
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface FactCheck extends KallkritikExerciseBase {
  type: "fact-check";
  claim: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface BiasDetection extends KallkritikExerciseBase {
  type: "bias-detection";
  text: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export type KallkritikExercise =
  | CredibilityRating
  | SourceComparison
  | FactCheck
  | BiasDetection;

// ---------------------------------------------------------------------------
// Labels
// ---------------------------------------------------------------------------

export const KALLKRITIK_TYPE_LABELS: Record<KallkritikExerciseType, string> = {
  "credibility-rating": "Bedöm trovärdighet",
  "source-comparison": "Jämför källor",
  "fact-check": "Faktagranskning",
  "bias-detection": "Hitta vinkling",
};

// ---------------------------------------------------------------------------
// Data — Mellanstadiet
// ---------------------------------------------------------------------------

const mellanstadietExercises: KallkritikExercise[] = [
  {
    type: "credibility-rating",
    id: "kk-mel-cr1",
    ageGroup: "mellanstadiet",
    instruction: "Hur trovärdig är den här källan?",
    source: "Wikipedia-artikel om dinosaurier",
    description: "En Wikipedia-artikel med källor längst ner och senast uppdaterad förra månaden.",
    options: ["Helt otrovärdig", "Ganska trovärdig — bra start men kontrollera källorna", "Helt trovärdig utan undantag"],
    correct: 1,
    explanation: "Wikipedia kan vara en bra startpunkt, men vem som helst kan redigera. Kontrollera alltid källorna som anges längst ner i artikeln.",
  },
  {
    type: "credibility-rating",
    id: "kk-mel-cr2",
    ageGroup: "mellanstadiet",
    instruction: "Hur trovärdig är den här källan?",
    source: "En klasskompis säger: \"Jag hörde att man kan andas under vatten om man dricker tillräckligt mycket vatten.\"",
    description: "Muntlig uppgift från en jämnårig utan hänvisning till forskning.",
    options: ["Helt trovärdig — kompisar ljuger inte", "Inte trovärdig — det stämmer inte och ingen källa anges", "Ganska trovärdig"],
    correct: 1,
    explanation: "Bara för att en kompis säger något behöver det inte stämma. Utan källa bör man vara skeptisk, och detta påstående är faktiskt felaktigt.",
  },
  {
    type: "fact-check",
    id: "kk-mel-fc1",
    ageGroup: "mellanstadiet",
    instruction: "Är påståendet sant, falskt eller osäkert?",
    claim: "\"Guldliskar har bara tre sekunders minne.\"",
    options: ["Sant", "Falskt — forskning visar att fiskar kan minnas saker i månader", "Osäkert"],
    correct: 1,
    explanation: "Det är en vanlig myt! Forskare har visat att guldfiskar kan minnas saker i flera månader och till och med lära sig tricks.",
  },
  {
    type: "fact-check",
    id: "kk-mel-fc2",
    ageGroup: "mellanstadiet",
    instruction: "Är påståendet sant, falskt eller osäkert?",
    claim: "\"Kinesiska muren syns från rymden.\"",
    options: ["Sant", "Falskt — astronauter har bekräftat att den inte syns med blotta ögat", "Osäkert"],
    correct: 1,
    explanation: "Det är en myt. Astronauter har bekräftat att Kinesiska muren inte går att se med blotta ögat från rymden — den är för smal.",
  },
  {
    type: "bias-detection",
    id: "kk-mel-bd1",
    ageGroup: "mellanstadiet",
    instruction: "Är texten neutral eller vinklad?",
    text: "Den fantastiska nya lekplatsen har allt barn kan drömma om! Alla borde besöka den direkt!",
    question: "Hur skulle du beskriva den här texten?",
    options: [
      "Neutral och saklig",
      "Vinklad positivt — använder överdrifter och uppmaningar",
      "Vinklad negativt",
    ],
    correct: 1,
    explanation: "Ord som \"fantastiska\", \"allt barn kan drömma om\" och \"borde direkt\" är värdeladdade och försöker påverka läsaren positivt.",
  },
];

// ---------------------------------------------------------------------------
// Data — Högstadiet
// ---------------------------------------------------------------------------

const hogstadietExercises: KallkritikExercise[] = [
  {
    type: "credibility-rating",
    id: "kk-hog-cr1",
    ageGroup: "hogstadiet",
    instruction: "Bedöm källans trovärdighet.",
    source: "En blogg skriven av en anonym person om hälsokost",
    description: "Bloggen saknar författarnamn, har inga hänvisningar till forskning och säljer egna kosttillskott.",
    options: [
      "Trovärdig — bloggar är alltid pålitliga",
      "Låg trovärdighet — anonym, inga källor, kommersiellt intresse",
      "Hög trovärdighet — hälsokost är naturligt",
    ],
    correct: 1,
    explanation: "Tre varningsflaggor: anonymitet, avsaknad av källor, och ekonomiskt intresse (säljer produkter). Kombinationen gör källan opålitlig.",
  },
  {
    type: "credibility-rating",
    id: "kk-hog-cr2",
    ageGroup: "hogstadiet",
    instruction: "Bedöm källans trovärdighet.",
    source: "Artikel i Dagens Nyheter av en namngiven journalist",
    description: "Publicerad i en rikstäckande dagstidning, innehåller intervjuer med forskare och hänvisar till studier.",
    options: [
      "Hög trovärdighet — namngiven journalist, etablerad tidning, källor angivna",
      "Låg trovärdighet — tidningar ljuger alltid",
      "Osäkert — alla medier är lika opålitliga",
    ],
    correct: 0,
    explanation: "En namngiven journalist i en etablerad tidning med källhänvisningar uppfyller flera kriterier för trovärdighet. Det betyder inte att allt stämmer, men grundkraven är uppfyllda.",
  },
  {
    type: "source-comparison",
    id: "kk-hog-sc1",
    ageGroup: "hogstadiet",
    instruction: "Jämför de två källorna.",
    sourceA: {
      label: "Källa A: Naturvårdsverkets webbplats",
      text: "Enligt Naturvårdsverkets data har Sveriges koldioxidutsläpp minskat med 27% sedan 1990.",
    },
    sourceB: {
      label: "Källa B: Inlägg på sociala medier",
      text: "Sverige gör INGENTING för klimatet!! Vi släpper ut mer än någonsin!! #klimatkris",
    },
    question: "Vilken källa är mest tillförlitlig angående utsläppsdata?",
    options: [
      "Källa A — myndighetsdata med specifik siffra",
      "Källa B — starkare känsla visar engagemang",
      "Båda är lika trovärdiga",
    ],
    correct: 0,
    explanation: "Naturvårdsverket är en statlig myndighet med tillgång till officiell statistik. Sociala medier-inlägget saknar källa och använder generaliseringar och versaler för effekt.",
  },
  {
    type: "fact-check",
    id: "kk-hog-fc1",
    ageGroup: "hogstadiet",
    instruction: "Vilken är den bästa strategin för att faktagranska ett påstående?",
    claim: "\"En artikel påstår att mobilstrålning orsakar cancer.\"",
    options: [
      "Lita på artikeln om den ser professionell ut",
      "Kolla vem som publicerat det, sök efter peer-reviewed studier, kontrollera om andra trovärdiga medier rapporterar samma sak",
      "Dela artikeln och fråga kompisar",
      "Ignorera den helt",
    ],
    correct: 1,
    explanation: "Triangulering — att kolla källa, söka vetenskaplig forskning och jämföra med andra medier — är den bästa strategin för faktagranskning.",
  },
  {
    type: "bias-detection",
    id: "kk-hog-bd1",
    ageGroup: "hogstadiet",
    instruction: "Identifiera vinklingen i texten.",
    text: "Den omstridda reformen har mött massiv kritik från experter. Trots löften om förbättring vittnar anställda om kaos och förvirring. Regeringen vägrar kommentera.",
    question: "Hur är texten vinklad?",
    options: [
      "Helt neutral rapportering",
      "Negativt vinklad — ord som 'massiv kritik', 'kaos', 'vägrar' skapar negativ bild",
      "Positivt vinklad",
    ],
    correct: 1,
    explanation: "Ordvalen 'omstridda', 'massiv kritik', 'kaos och förvirring', 'vägrar' skapar alla en negativ bild. En neutral text hade kunnat formulera det annorlunda.",
  },
  {
    type: "bias-detection",
    id: "kk-hog-bd2",
    ageGroup: "hogstadiet",
    instruction: "Vilken typ av vinkling finns?",
    text: "Den nya satsningen på skolan har redan gett resultat. Lärare vittnar om ökad motivation och eleverna trivs bättre än någonsin.",
    question: "Vilken signal bör väcka din misstanke?",
    options: [
      "Texten nämner lärare — det är alltid trovärdigt",
      "\"Bättre än någonsin\" och inga siffror — positiva generaliseringar utan belägg",
      "Texten handlar om skolan — skoltexter är alltid neutrala",
    ],
    correct: 1,
    explanation: "Uttryck som \"bättre än någonsin\" utan specifika data är ett tecken på positiv vinkling. Saknas konkreta siffror bör man vara skeptisk.",
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet
// ---------------------------------------------------------------------------

const gymnasietExercises: KallkritikExercise[] = [
  {
    type: "credibility-rating",
    id: "kk-gym-cr1",
    ageGroup: "gymnasiet",
    instruction: "Bedöm källans trovärdighet med CARS-modellen (Credibility, Accuracy, Reasonableness, Support).",
    source: "Forskningsartikel i The Lancet om vaccineffektivitet",
    description: "Peer-reviewed medicinsk tidskrift, namngivna forskare, statistisk metod redovisad, finansiering angiven.",
    options: [
      "Hög trovärdighet — uppfyller alla CARS-kriterier",
      "Medel — tidskriften är bra men man bör läsa metoden noggrant",
      "Låg — medicinsk forskning ändras hela tiden",
    ],
    correct: 0,
    explanation: "The Lancet är en av världens mest ansedda medicinska tidskrifter med strikt peer review. Alla CARS-kriterier uppfylls: trovärdiga författare, korrekt metod, rimliga slutsatser, stöd i data.",
  },
  {
    type: "source-comparison",
    id: "kk-gym-sc1",
    ageGroup: "gymnasiet",
    instruction: "Jämför källorna och analysera perspektivskillnaden.",
    sourceA: {
      label: "Källa A: Teknikföretagets pressmeddelande",
      text: "Vår AI-plattform revolutionerar utbildningen och har visat 40% bättre resultat i pilotprojekt.",
    },
    sourceB: {
      label: "Källa B: Oberoende utvärdering av universitetsforskare",
      text: "Pilotprojektet med AI-plattformen visade viss förbättring i specifika ämnen (12-18%), men effekten varierade kraftigt mellan skolor och socioekonomiska grupper.",
    },
    question: "Varför skiljer sig siffrorna åt?",
    options: [
      "Forskarna har fel — företaget har mer data",
      "Företaget har ett kommersiellt intresse av höga siffror, medan forskarna nyanserar med variation och kontext",
      "Båda säger samma sak på olika sätt",
    ],
    correct: 1,
    explanation: "Företagets pressmeddelande väljer den mest positiva siffran (40%) utan kontext. Forskarna rapporterar en lägre siffra (12-18%) med viktig nyansering om variationen. Avsändarens intresse påverkar framställningen.",
  },
  {
    type: "fact-check",
    id: "kk-gym-fc1",
    ageGroup: "gymnasiet",
    instruction: "Vilken princip för faktagranskning tillämpas?",
    claim: "En journalist bekräftar en uppgift med tre oberoende källor innan publicering.",
    options: [
      "Triangulering — att verifiera med flera oberoende källor",
      "Confirmation bias — att söka bekräftelse",
      "Peer review — att låta kollegor granska",
      "Auktoritetsprincipen — att lita på den mest kända källan",
    ],
    correct: 0,
    explanation: "Triangulering innebär att man verifierar information med minst tre oberoende källor. Det är en grundprincip inom journalistik och akademisk forskning.",
  },
  {
    type: "fact-check",
    id: "kk-gym-fc2",
    ageGroup: "gymnasiet",
    instruction: "Utvärdera påståendets trovärdighet.",
    claim: "\"En studie visar att choklad förebygger hjärtsjukdom.\" Studien finansierades av en chokladtillverkare.",
    options: [
      "Trovärdigt — en studie har visat det",
      "Intressekonflikt — finansiärens ekonomiska intresse underminerar objektiviteten, studera oberoende replikationer",
      "Falskt — choklad kan inte vara hälsosamt",
    ],
    correct: 1,
    explanation: "En studie finansierad av en intressent med ekonomiskt motiv att få positiva resultat har en intressekonflikt. Det gör inte resultatet automatiskt falskt, men man bör söka oberoende replikationer.",
  },
  {
    type: "bias-detection",
    id: "kk-gym-bd1",
    ageGroup: "gymnasiet",
    instruction: "Identifiera de retoriska och kognitiva mekanismerna.",
    text: "\"Enligt en RAPPORT (som mainstreammedier INTE vill att du ska se) avslöjas sanningen om 5G. Dela innan det censureras!\"",
    question: "Vilka manipulativa tekniker används?",
    options: [
      "Bara versaler för betoning — det är normalt",
      "Flera: versaler för auktoritet, konspirationstänk ('vill inte att du ser'), urgency ('dela innan censur'), och vagt källhänvisande ('en rapport')",
      "Texten är saklig men passionerad",
    ],
    correct: 1,
    explanation: "Texten använder flera manipulativa tekniker: urgency (brådska), konspirationstänk (censur-hot), vag källhänvisning och versaler. Dessa är vanliga i desinformation.",
  },
  {
    type: "bias-detection",
    id: "kk-gym-bd2",
    ageGroup: "gymnasiet",
    instruction: "Analysera perspektivet.",
    text: "Medan förespråkare av fri marknad betonar innovationens drivkraft, varnar kritiker för ökande ojämlikhet. Forskning ger stöd åt båda sidorna: BNP-tillväxt korrelerar med avreglering, men Gini-koefficienten stiger i samma länder.",
    question: "Hur hanterar texten frågan?",
    options: [
      "Den är positivt vinklad mot fri marknad",
      "Den presenterar båda perspektiven med empiriskt stöd och låter läsaren dra slutsatser",
      "Den är negativt vinklad mot fri marknad",
    ],
    correct: 1,
    explanation: "Texten balanserar två perspektiv med data (BNP, Gini-koefficient) och använder signalord som \"medan\" och \"men\" för att markera kontrast utan att ta ställning.",
  },
  {
    type: "source-comparison",
    id: "kk-gym-sc2",
    ageGroup: "gymnasiet",
    instruction: "Analysera de två texternas trovärdighet.",
    sourceA: {
      label: "Källa A: Populärvetenskaplig artikel",
      text: "Ny forskning visar att en kopp kaffe om dagen kan förlänga livet med upp till fem år, enligt forskare vid ett amerikanskt universitet.",
    },
    sourceB: {
      label: "Källa B: Originalstudiens abstract",
      text: "I en kohortstudie (n=12 000) observerades en korrelation mellan måttlig kaffekonsumtion och lägre all-cause mortality (HR 0.88, 95% CI 0.82–0.94). Kausalitet kan ej fastställas.",
    },
    question: "Hur har populärartikeln förändrat originalresultatet?",
    options: [
      "Den har återgett det korrekt",
      "Den har förvandlat en korrelation till en kausalitet, överdrivit effekten och utelämnat osäkerheten",
      "Den har tonat ner resultaten",
    ],
    correct: 1,
    explanation: "Originalstudien anger korrelation (ej kausalitet), en specifik effektstorlek med konfidensintervall. Populärartikeln gör om det till \"kan förlänga livet med fem år\" — en dramatisk förenkling som vilseleder.",
  },
];

// ---------------------------------------------------------------------------
// All exercises + helper
// ---------------------------------------------------------------------------

const ALL_EXERCISES: KallkritikExercise[] = [
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

export function getKallkritikExercises(ageGroup: AgeGroup): KallkritikExercise[] {
  const direct = ALL_EXERCISES.filter((e) => e.ageGroup === ageGroup);
  if (direct.length > 0) return direct;

  for (const fb of AGE_GROUP_FALLBACKS[ageGroup]) {
    const fallback = ALL_EXERCISES.filter((e) => e.ageGroup === fb);
    if (fallback.length > 0) return fallback;
  }
  return [];
}
