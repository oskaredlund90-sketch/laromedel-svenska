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
  // --- New mellanstadiet exercises ---
  {
    type: "credibility-rating",
    id: "kk-mel-cr3",
    ageGroup: "mellanstadiet",
    instruction: "Hur trovärdig är den här källan?",
    source: "En YouTube-video med titeln \"10 GALNA fakta om hajar!!!\"",
    description: "Videon är gjord av en 15-åring med 200 prenumeranter. Det finns inga länkar till forskning i beskrivningen, men videon har 50 000 visningar.",
    options: [
      "Hög trovärdighet — den har många visningar",
      "Låg trovärdighet — okänd avsändare, inga källor, klickbetestitel",
      "Helt trovärdig — YouTube-videor är alltid korrekta",
    ],
    correct: 1,
    explanation: "Många visningar gör inte en källa trovärdig. Titeln använder versaler och utropstecken för att locka klick, och det saknas källhänvisningar. Kontrollera fakta mot en mer pålitlig källa.",
  },
  {
    type: "credibility-rating",
    id: "kk-mel-cr4",
    ageGroup: "mellanstadiet",
    instruction: "Hur trovärdig är den här källan?",
    source: "Din NO-bok som används i skolan",
    description: "Boken är skriven av forskare och lärare, utgiven av ett känt förlag och granskad av Skolverket. Den uppdateras vart fjärde år.",
    options: [
      "Hög trovärdighet — skriven av experter, granskad och utgiven av förlag",
      "Låg trovärdighet — böcker blir gamla snabbt",
      "Osäkert — man kan aldrig lita på böcker",
    ],
    correct: 0,
    explanation: "Skolböcker skrivs av ämnesexperter, granskas noggrant och ges ut av förlag med kvalitetskontroll. Det gör dem till en av de mest trovärdiga källorna i skolan, även om informationen kan bli inaktuell med tiden.",
  },
  {
    type: "fact-check",
    id: "kk-mel-fc3",
    ageGroup: "mellanstadiet",
    instruction: "Är påståendet sant, falskt eller osäkert?",
    claim: "\"Bananer växer i träd.\"",
    options: [
      "Sant — bananer växer i stora träd",
      "Falskt — bananplantan är en ört, inte ett träd",
      "Osäkert",
    ],
    correct: 1,
    explanation: "Bananplantan ser ut som ett träd men är faktiskt världens största ört! Dess \"stam\" är inte av trä utan består av hopvikta blad.",
  },
  {
    type: "fact-check",
    id: "kk-mel-fc4",
    ageGroup: "mellanstadiet",
    instruction: "Är påståendet sant, falskt eller osäkert?",
    claim: "\"Människan använder bara 10% av hjärnan.\"",
    options: [
      "Sant — vi har massor av outnyttjad hjärnkapacitet",
      "Falskt — hjärnforskare har visat att vi använder hela hjärnan",
      "Osäkert",
    ],
    correct: 1,
    explanation: "Det är en vanlig myt! Hjärnforskare har med hjälp av hjärnskanningar visat att vi använder hela hjärnan, även om inte alla delar är aktiva samtidigt.",
  },
  {
    type: "bias-detection",
    id: "kk-mel-bd2",
    ageGroup: "mellanstadiet",
    instruction: "Är texten neutral eller vinklad?",
    text: "Det nya datorspelet CoolQuest är det BÄSTA spelet någonsin! Grafiken är helt otrolig och alla mina kompisar älskar det. Du MÅSTE köpa det! ★★★★★",
    question: "Vad bör du tänka på när du läser den här recensionen?",
    options: [
      "Den verkar pålitlig eftersom den ger fem stjärnor",
      "Den är vinklad — bara positiva ord, inga nackdelar nämns, och den försöker övertala dig att köpa",
      "Den är neutral — den beskriver spelet sakligt",
    ],
    correct: 1,
    explanation: "Recensionen använder bara positiva överdrifter som \"BÄSTA\" och \"MÅSTE\", och nämner inga nackdelar alls. En bra recension presenterar både fördelar och nackdelar.",
  },
  {
    type: "bias-detection",
    id: "kk-mel-bd3",
    ageGroup: "mellanstadiet",
    instruction: "Är texten neutral eller vinklad?",
    text: "Hemmalaget spelade en FANTASTISK match! Trots att bortalaget ledde med 2–0 kämpade våra hjältar hem en heroisk seger. Domaren gjorde flera tveksamma beslut mot oss.",
    question: "Hur är den här sporttexten skriven?",
    options: [
      "Helt neutral — den berättar vad som hände",
      "Vinklad till hemmalag​ets fördel — positiva ord om hemmalaget, negativa om domaren",
      "Vinklad till bortalagets fördel",
    ],
    correct: 1,
    explanation: "Texten kallar hemmalaget \"våra hjältar\" och segern \"heroisk\", men klagar på domaren. Det visar en tydlig partiskhet — en neutral text hade beskrivit matchen utan att ta sida.",
  },
  {
    type: "source-comparison",
    id: "kk-mel-sc1",
    ageGroup: "mellanstadiet",
    instruction: "Jämför de två källorna.",
    sourceA: {
      label: "Källa A: Artikel i Aftonbladet",
      text: "En varg observerades utanför Gävle på tisdagen. Länsstyrelsen bekräftar händelsen och uppmanar till lugn.",
    },
    sourceB: {
      label: "Källa B: Blogginlägg av \"VargJansen88\"",
      text: "DET ÄR VARGAR ÖVERALLT!!! Jag såg minst fem stycken utanför mitt hus! Staten gör INGENTING! Dela så folk vaknar!",
    },
    question: "Vilken källa ger dig den mest tillförlitliga bilden av händelsen?",
    options: [
      "Källa A — nyhetsartikel med konkreta uppgifter och myndighetskälla",
      "Källa B — personen har sett det med egna ögon",
      "Båda är lika trovärdiga",
    ],
    correct: 0,
    explanation: "Nyhetsartikeln anger specifika detaljer (var, när) och hänvisar till en myndighet. Blogginlägget använder versaler, överdrifter och saknar belägg. Att någon påstår sig ha sett något gör det inte automatiskt sant.",
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
  // --- New högstadiet exercises ---
  {
    type: "credibility-rating",
    id: "kk-hog-cr3",
    ageGroup: "hogstadiet",
    instruction: "Bedöm källans trovärdighet.",
    source: "Ett politiskt partis webbplats om invandringspolitik",
    description: "Sidan presenterar statistik om invandringens kostnader och konsekvenser. Statistiken saknar källhänvisningar och sidan avslutas med en uppmaning att rösta på partiet.",
    options: [
      "Hög trovärdighet — politiska partier har tillgång till aktuell data",
      "Låg trovärdighet — partiet har ett egenintresse, statistiken saknar källor och syftet är att få röster",
      "Medel — politisk information är alltid lite vinklad men i grunden korrekt",
    ],
    correct: 1,
    explanation: "Politiska partier vill övertyga väljare och väljer därför fakta och formuleringar som stödjer deras position. Utan källhänvisningar går det inte att verifiera siffrorna. Sök alltid oberoende statistik från t.ex. SCB.",
  },
  {
    type: "credibility-rating",
    id: "kk-hog-cr4",
    ageGroup: "hogstadiet",
    instruction: "Bedöm källans trovärdighet.",
    source: "Populärvetenskaplig artikel i Illustrerad Vetenskap",
    description: "Artikeln är skriven av en vetenskapsjournalist, hänvisar till en studie publicerad i Nature och innehåller intervju med en av forskarna bakom studien.",
    options: [
      "Hög trovärdighet — namngiven journalist, etablerad tidskrift, källhänvisningar till forskning",
      "Låg trovärdighet — populärvetenskap förenklar alltid för mycket",
      "Osäkert — man bör alltid misstro all media",
    ],
    correct: 0,
    explanation: "Illustrerad Vetenskap är en etablerad populärvetenskaplig tidskrift. Artikeln uppfyller flera trovärdighetskriterier: namngiven författare, referens till peer-reviewed forskning och direkt intervju. Man bör dock vara medveten om att förenklingar kan förekomma.",
  },
  {
    type: "source-comparison",
    id: "kk-hog-sc2",
    ageGroup: "hogstadiet",
    instruction: "Jämför de två källorna.",
    sourceA: {
      label: "Källa A: Expressen (kvällstidning)",
      text: "CHOCKHÖJNING av elpriset! Familjer riskerar att inte ha råd att värma sina hem i vinter. \"Det är en katastrof\", säger en orolig småbarnsmamma.",
    },
    sourceB: {
      label: "Källa B: Svenska Dagbladet (morgontidning)",
      text: "Elpriset steg med 15% under oktober jämfört med föregående år, enligt Energimyndigheten. Analytiker bedömer att priserna kan sjunka under våren.",
    },
    question: "Hur skiljer sig rapporteringen mellan källorna?",
    options: [
      "Källa A är mer trovärdig eftersom den visar hur vanliga människor påverkas",
      "Källa B ger en mer nyanserad bild med specifika siffror och myndighetskälla, medan källa A dramatiserar med känsloladdade ord",
      "Båda rapporterar samma sak på samma sätt",
    ],
    correct: 1,
    explanation: "Kvällstidningen använder versaler, laddade ord som \"CHOCKHÖJNING\" och \"katastrof\" och ett känsloladdat vittnesmål. Morgontidningen anger specifika siffror, namnger sin källa (Energimyndigheten) och ger en framåtblickande analys.",
  },
  {
    type: "source-comparison",
    id: "kk-hog-sc3",
    ageGroup: "hogstadiet",
    instruction: "Jämför de två källorna.",
    sourceA: {
      label: "Källa A: Wikipedia-artikel om vikingatiden",
      text: "Vikingatiden varade ca 800–1100 e.Kr. Vikingarna var handelsmän, hantverkare och bönder, men även krigare. Artikeln har 45 fotnoter till akademiska verk.",
    },
    sourceB: {
      label: "Källa B: Nationalencyklopedin (NE)",
      text: "Vikingatiden (ca 800–1100) präglas av skandinavisk expansion. Artikeln är skriven av professor i arkeologi vid Uppsala universitet.",
    },
    question: "Vilken källa är mest lämplig som referens i en skoluppgift?",
    options: [
      "Wikipedia — den har fler fotnoter",
      "NE — den är skriven av en identifierad expert och har redaktionell kvalitetskontroll",
      "Ingen av dem — man ska bara använda böcker",
    ],
    correct: 1,
    explanation: "NE har en namngiven expert som författare och en redaktion som kvalitetsgranskar. Wikipedia kan vara en bra startpunkt men kan redigeras av vem som helst. I skoluppgifter värderas NE högre, men Wikipedia:s fotnoter kan leda till bra originalkällor.",
  },
  {
    type: "bias-detection",
    id: "kk-hog-bd3",
    ageGroup: "hogstadiet",
    instruction: "Identifiera vinklingen i texten.",
    text: "Min kompis delade en artikel som säger att socker är farligt. Jag har alltid tyckt att socker är dåligt, och nu bevisar den här artikeln det! Jag behöver inte leta fler källor.",
    question: "Vilken tankefälla hamnar personen i?",
    options: [
      "Ingen — personen har rätt i att socker kan vara skadligt",
      "Bekräftelsebias (confirmation bias) — personen söker bara information som stödjer det hen redan tror",
      "Källkritiskt tänkande — personen utvärderar artikeln noggrant",
    ],
    correct: 1,
    explanation: "Bekräftelsebias innebär att man omedvetet söker och godkänner information som bekräftar det man redan tror. Personen nöjer sig med en enda källa som stödjer hens åsikt, i stället för att undersöka frågan från flera håll.",
  },
  {
    type: "bias-detection",
    id: "kk-hog-bd4",
    ageGroup: "hogstadiet",
    instruction: "Identifiera vinklingen i texten.",
    text: "Rubriken lyder: \"Ungdomar FÖRSTÖR stadskärnan\". I artikeln framkommer att en grupp ungdomar klottrade på en vägg. Polisen uppger att det rör sig om ett enstaka fall.",
    question: "Vilken typ av vinkling syns i rubriken jämfört med artikelns innehåll?",
    options: [
      "Rubriken stämmer med artikeln — ungdomar förstörde faktiskt",
      "Framing-effekt — rubriken generaliserar \"ungdomar\" och använder \"FÖRSTÖR\" i versaler för att dramatisera ett enstaka klotterfall",
      "Artikeln tonar ner ett verkligt problem",
    ],
    correct: 1,
    explanation: "Framing-effekten innebär att hur något presenteras påverkar hur vi uppfattar det. Rubriken framställer det som att ungdomar i allmänhet förstör, men artikeln handlar om ett enstaka klotterfall. Rubriken skapar en skev bild.",
  },
  {
    type: "fact-check",
    id: "kk-hog-fc2",
    ageGroup: "hogstadiet",
    instruction: "Hur bör du hantera det här meddelandet?",
    claim: "Du får ett vidarebefordrat mejl: \"VARNING! Om du dricker vatten ur plastflaskor som legat i solen får du cancer! En läkare på Karolinska har bekräftat detta. Skicka vidare till alla du bryr dig om!!!\"",
    options: [
      "Skicka vidare direkt — det är bättre att vara säker",
      "Kontrollera påståendet: sök efter studier, kolla Karolinskas webbplats, och var skeptisk mot kedjebrev med versaler och utropstecken",
      "Ignorera allt — mejl är alltid osanna",
    ],
    correct: 1,
    explanation: "Kedjebrev kännetecknas av uppmaningar att sprida vidare, vag källhänvisning (\"en läkare\"), versaler och utropstecken. Man bör alltid verifiera påståendet via trovärdiga källor innan man delar vidare.",
  },
  {
    type: "fact-check",
    id: "kk-hog-fc3",
    ageGroup: "hogstadiet",
    instruction: "Utvärdera påståendet.",
    claim: "Ett viralt TikTok-klipp påstår: \"Om du håller andan i 10 sekunder utan att hosta har du inte covid-19. Delat av en japansk läkare.\"",
    options: [
      "Trovärdigt — det låter logiskt och många har delat det",
      "Falskt — det saknar vetenskapligt stöd, och att många delat det gör det inte sant. WHO och Folkhälsomyndigheten har avfärdat påståendet",
      "Osäkert — det kan stämma för vissa",
    ],
    correct: 1,
    explanation: "Detta är ett exempel på viral desinformation. Att många delar något (social proof) gör det inte sant. Hälsopåståenden bör alltid kontrolleras mot myndigheter som WHO eller Folkhälsomyndigheten.",
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
  // --- New gymnasiet exercises ---
  {
    type: "source-comparison",
    id: "kk-gym-sc3",
    ageGroup: "gymnasiet",
    instruction: "Jämför primärkällan med den sekundära analysen.",
    sourceA: {
      label: "Källa A: Riksdagsprotokoll (primärkälla)",
      text: "Statsministern sade i debatten: \"Vi avser att utreda möjligheten att på sikt anpassa regelverket i linje med EU:s rekommendationer.\"",
    },
    sourceB: {
      label: "Källa B: Politisk kommentator i ledarartikel",
      text: "Statsministern lovade i riksdagen att Sverige ska följa EU:s krav. Det är ett historiskt löfte som binder kommande regeringar.",
    },
    question: "Hur skiljer sig den sekundära analysen från primärkällan?",
    options: [
      "Den återger citatet korrekt i kortare form",
      "Den förstärker och omtolkar: \"utreda möjligheten\" blir \"lovade\", \"anpassa\" blir \"följa krav\", och \"på sikt\" utelämnas helt",
      "Den tonar ner statsministerns uttalande",
    ],
    correct: 1,
    explanation: "Primärkällan använder försiktiga formuleringar (\"utreda möjligheten\", \"på sikt\", \"anpassa\"). Ledarartikeln omtolkar detta till ett fast löfte. Det visar varför man alltid bör kontrollera primärkällan i stället för att lita på andrahandsanalyser.",
  },
  {
    type: "source-comparison",
    id: "kk-gym-sc4",
    ageGroup: "gymnasiet",
    instruction: "Jämför den vetenskapliga studien med mediesammanfattningen.",
    sourceA: {
      label: "Källa A: Peer-reviewed studie i PNAS",
      text: "I en randomiserad kontrollstudie (n=450) fann vi att interventionsgruppen uppvisade 8% lägre stressnivåer (p=0.03). Effekten var begränsad till kvinnor över 40. Studien replikerar inte tidigare fynd för män.",
    },
    sourceB: {
      label: "Källa B: Tidningsrubrik och ingress",
      text: "\"Ny studie: meditation halverar stress!\" Forskare har nu bevisat att meditation dramatiskt minskar stress, enligt en banbrytande studie.",
    },
    question: "Vilka fel gör tidningssammanfattningen?",
    options: [
      "Den sammanfattar studien korrekt men kortfattat",
      "Den överdriver effekten (8% blir \"halverar\"), generaliserar till alla (effekten gällde bara kvinnor över 40), och använder \"bevisat\" trots att resultatet inte replikerades för alla grupper",
      "Den tonar ner den dramatiska upptäckten",
    ],
    correct: 1,
    explanation: "Tidningen gör tre klassiska fel: överdriver effektstorlek, generaliserar bortom studiens population och presenterar osäkra resultat som bevisade. Det visar varför man bör läsa originalstudien, inte bara medierapporteringen.",
  },
  {
    type: "bias-detection",
    id: "kk-gym-bd3",
    ageGroup: "gymnasiet",
    instruction: "Identifiera den metodologiska bristen.",
    text: "En studie undersöker sambandet mellan glass-försäljning och drunkningsolyckor och finner en stark korrelation. Studiens slutsats: \"Glass-försäljning bidrar till drunkningsolyckor.\"",
    question: "Vilken typ av bias eller felslut förekommer?",
    options: [
      "Ingen — korrelationen är tydlig och slutsatsen rimlig",
      "Selektionsbias (selection bias) — studien kontrollerar inte för den confounding variable som är sommarväder, vilket ökar både glassätande och bad",
      "Studien har för få deltagare",
    ],
    correct: 1,
    explanation: "Det här är ett klassiskt exempel på confounding (störfaktor). Sommarväder driver både glass-försäljning och badande. Att inte kontrollera för denna variabel leder till felaktiga kausala slutsatser. Korrelation är inte kausalitet.",
  },
  {
    type: "bias-detection",
    id: "kk-gym-bd4",
    ageGroup: "gymnasiet",
    instruction: "Identifiera den dolda påverkansstrategin.",
    text: "En ny Facebook-grupp \"Föräldrar mot E-ämnen\" har på kort tid fått 50 000 medlemmar. Gruppen säger sig vara startad av \"oroliga föräldrar\". En journalist upptäcker att gruppens administratörer är anställda av ett företag som säljer \"E-nummer-fria\" livsmedel.",
    question: "Vilken påverkansstrategi används?",
    options: [
      "Vanlig marknadsföring — företag får göra reklam",
      "Astroturfing — en kampanj som ser ut som gräsrotsengagemang men i verkligheten styrs av kommersiella intressen",
      "Whistleblowing — företagets anställda avslöjar sanningen om E-ämnen",
    ],
    correct: 1,
    explanation: "Astroturfing (från \"AstroTurf\" = konstgräs) innebär att skapa en illusion av folklig opinionsbildning som i själva verket drivs av organisationer med ekonomiska eller politiska intressen. Det är en form av dold marknadsföring som är svår att genomskåda.",
  },
  {
    type: "credibility-rating",
    id: "kk-gym-cr2",
    ageGroup: "gymnasiet",
    instruction: "Bedöm källans trovärdighet med CARS-modellen.",
    source: "En preprint-artikel om ett nytt läkemedel på medRxiv",
    description: "Artikeln är uppladdad av forskare vid ett ansett universitet men har ännu inte genomgått peer review. Resultaten är preliminära och baseras på 30 patienter. Flera medier har redan rapporterat om den som ett \"genombrott\".",
    options: [
      "Hög trovärdighet — den kommer från ett universitet",
      "Medel trovärdighet — författarna kan vara kvalificerade, men avsaknad av peer review, litet urval och preliminära resultat gör att slutsatserna bör behandlas med försiktighet",
      "Låg trovärdighet — preprints är alltid opålitliga",
    ],
    correct: 1,
    explanation: "Preprints har inte genomgått oberoende granskning. Med bara 30 patienter är den statistiska styrkan låg. Att medier kallar det ett \"genombrott\" innan peer review är problematiskt. Man bör avvakta granskade resultat med större urval.",
  },
  {
    type: "fact-check",
    id: "kk-gym-fc3",
    ageGroup: "gymnasiet",
    instruction: "Utvärdera det statistiska påståendet.",
    claim: "\"En ny studie visar att barn som äter frukost varje dag får bättre betyg. Alltså leder frukostätande till bättre skolresultat.\"",
    options: [
      "Trovärdigt — sambandet är logiskt och studien visar det",
      "Felaktigt kausalt påstående — korrelation bevisar inte kausalitet. Bakomliggande faktorer som socioekonomisk status, föräldrars engagemang och sömnvanor kan förklara båda variablerna",
      "Falskt — frukost har ingen påverkan alls",
    ],
    correct: 1,
    explanation: "Att två saker samvarierar (korrelation) bevisar inte att det ena orsakar det andra (kausalitet). Familjer med högre socioekonomisk status kanske både äter frukost oftare och ger mer skolstöd. Utan kontrollerad studie kan man inte fastställa orsakssamband.",
  },
  {
    type: "fact-check",
    id: "kk-gym-fc4",
    ageGroup: "gymnasiet",
    instruction: "Granska hur data presenteras.",
    claim: "En politisk debattör säger: \"Brottsligheten har ÖKAT med 50%!\" och visar ett diagram. Vid närmare granskning visar diagrammet anmälda brott under en femårsperiod, y-axeln börjar på 1 400 000 i stället för 0, och ökningen gäller en specifik brottstyp (bedrägeri online) — inte brottsligheten totalt.",
    options: [
      "Påståendet stämmer — diagrammet visar det tydligt",
      "Cherry-picking och vilseledande visualisering — debattören generaliserar från en brottstyp, och diagrammets kapade y-axel överdriver den visuella effekten",
      "Alla diagram visar data på samma sätt",
    ],
    correct: 1,
    explanation: "Tre manipulationer: (1) cherry-picking — att välja en specifik brottstyp och presentera det som \"brottsligheten\" totalt, (2) kapad y-axel som överdriver förändringen visuellt, (3) generaliserande formulering. Det är vanliga retoriska knep för att vilseleda med data.",
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
