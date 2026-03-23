import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types (discriminated union)
// ---------------------------------------------------------------------------

export type OrdsprakExerciseType = "quiz" | "match" | "fill-in-blank";

/** Quiz: "Vad betyder detta uttryck?" */
export interface OrdsprakQuiz {
  type: "quiz";
  id: string;
  ageGroup: AgeGroup;
  expression: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

/** Match: para ihop uttryck med betydelser */
export interface OrdsprakMatch {
  type: "match";
  id: string;
  ageGroup: AgeGroup;
  instruction: string;
  pairs: { left: string; right: string }[];
}

/** Fill-in-blank: fyll i det saknade ordet */
export interface OrdsprakFillIn {
  type: "fill-in-blank";
  id: string;
  ageGroup: AgeGroup;
  sentence: string;
  options: string[];
  correct: string;
  explanation: string;
}

export type OrdsprakExercise = OrdsprakQuiz | OrdsprakMatch | OrdsprakFillIn;

// ---------------------------------------------------------------------------
// Data — Lågstadiet (~10 exercises)
// ---------------------------------------------------------------------------

const lagstadietExercises: OrdsprakExercise[] = [
  {
    type: "quiz",
    id: "ord-lag-q1",
    ageGroup: "lagstadiet",
    expression: "Tyst som en mus",
    prompt: "Vad betyder \"tyst som en mus\"?",
    options: [
      "Att vara väldigt tyst och stilla",
      "Att vara rädd för möss",
      "Att vara liten som en mus",
      "Att springa snabbt",
    ],
    correct: 0,
    explanation:
      "\"Tyst som en mus\" betyder att man är väldigt tyst och stilla, precis som en liten mus som smyger fram.",
  },
  {
    type: "quiz",
    id: "ord-lag-q2",
    ageGroup: "lagstadiet",
    expression: "Hungrig som en varg",
    prompt: "Vad betyder \"hungrig som en varg\"?",
    options: [
      "Att vara lite hungrig",
      "Att vara jättehungrig",
      "Att äta som ett djur",
      "Att vara elak",
    ],
    correct: 1,
    explanation:
      "\"Hungrig som en varg\" betyder att man är väldigt, väldigt hungrig — precis som en varg som inte har ätit på länge.",
  },
  {
    type: "quiz",
    id: "ord-lag-q3",
    ageGroup: "lagstadiet",
    expression: "Alla bäckar små",
    prompt: "Vad betyder \"alla bäckar små\" (gör en stor å)?",
    options: [
      "Att bäckar är fina",
      "Att många små saker tillsammans blir något stort",
      "Att man ska bada i bäckar",
      "Att stora åar är bättre",
    ],
    correct: 1,
    explanation:
      "\"Alla bäckar små\" betyder att många små insatser tillsammans kan bli något riktigt stort, precis som små bäckar bildar en stor å.",
  },
  {
    type: "quiz",
    id: "ord-lag-q4",
    ageGroup: "lagstadiet",
    expression: "Stark som en björn",
    prompt: "Vad betyder \"stark som en björn\"?",
    options: [
      "Att man bor i skogen",
      "Att man gillar björnar",
      "Att man är jättestark",
      "Att man sover mycket",
    ],
    correct: 2,
    explanation:
      "\"Stark som en björn\" betyder att man är väldigt stark, för björnar är kända för sin stora styrka.",
  },
  {
    type: "match",
    id: "ord-lag-m1",
    ageGroup: "lagstadiet",
    instruction: "Para ihop uttrycket med vad det betyder.",
    pairs: [
      { left: "Tyst som en mus", right: "Väldigt tyst" },
      { left: "Stark som en björn", right: "Jättestark" },
      { left: "Hungrig som en varg", right: "Väldigt hungrig" },
      { left: "Slug som en räv", right: "Väldigt smart och listig" },
    ],
  },
  {
    type: "match",
    id: "ord-lag-m2",
    ageGroup: "lagstadiet",
    instruction: "Para ihop uttrycket med rätt betydelse.",
    pairs: [
      { left: "Alla bäckar små", right: "Små saker blir stora tillsammans" },
      { left: "Snäll som en ängel", right: "Väldigt snäll" },
      { left: "Modig som ett lejon", right: "Väldigt modig" },
      { left: "Lat som en katt", right: "Gillar att ta det lugnt" },
    ],
  },
  {
    type: "fill-in-blank",
    id: "ord-lag-f1",
    ageGroup: "lagstadiet",
    sentence: "Tyst som en ____",
    options: ["varg", "mus", "björn", "räv"],
    correct: "mus",
    explanation:
      "\"Tyst som en mus\" — möss är kända för att vara väldigt tysta och smyga fram.",
  },
  {
    type: "fill-in-blank",
    id: "ord-lag-f2",
    ageGroup: "lagstadiet",
    sentence: "Hungrig som en ____",
    options: ["mus", "katt", "varg", "fågel"],
    correct: "varg",
    explanation:
      "\"Hungrig som en varg\" — vargar jagar för att de är hungriga, och uttrycket betyder att man är jättehungrig.",
  },
  {
    type: "fill-in-blank",
    id: "ord-lag-f3",
    ageGroup: "lagstadiet",
    sentence: "Stark som en ____",
    options: ["mus", "björn", "kanin", "fisk"],
    correct: "björn",
    explanation:
      "\"Stark som en björn\" — björnar är ett av de starkaste djuren i skogen.",
  },
  // --- nya övningar ---
  {
    type: "quiz",
    id: "ord-lag-q5",
    ageGroup: "lagstadiet",
    expression: "Surt sa räven om rönnbären",
    prompt: "Vad betyder \"surt sa räven om rönnbären\"?",
    options: [
      "Att rävar gillar sura bär",
      "Att man låtsas att något man inte kan få ändå inte är bra",
      "Att rönnbär smakar surt",
      "Att rävar inte kan klättra i träd",
    ],
    correct: 1,
    explanation:
      "\"Surt sa räven om rönnbären\" betyder att man låtsas förakta det man inte kan få tag i. Räven i fabeln kunde inte nå bären och sa därför att de var sura.",
  },
  {
    type: "quiz",
    id: "ord-lag-q6",
    ageGroup: "lagstadiet",
    expression: "Den som väntar på något gott väntar aldrig för länge",
    prompt: "Vad betyder \"den som väntar på något gott väntar aldrig för länge\"?",
    options: [
      "Man ska aldrig vänta",
      "Bra saker är värda att vänta på",
      "Man ska skynda sig",
      "Väntan är alltid tråkig",
    ],
    correct: 1,
    explanation:
      "\"Den som väntar på något gott väntar aldrig för länge\" betyder att om resultatet blir bra så är det värt att ha tålamod och vänta.",
  },
  {
    type: "match",
    id: "ord-lag-m3",
    ageGroup: "lagstadiet",
    instruction: "Para ihop uttrycket med vad det betyder.",
    pairs: [
      { left: "Surt sa räven", right: "Man låtsas inte vilja ha det man inte kan få" },
      { left: "Den som väntar på något gott", right: "Bra saker är värda att vänta på" },
      { left: "Slug som en räv", right: "Väldigt smart och listig" },
      { left: "Modig som ett lejon", right: "Väldigt modig" },
    ],
  },
  {
    type: "fill-in-blank",
    id: "ord-lag-f4",
    ageGroup: "lagstadiet",
    sentence: "Tomma ____ skramlar mest",
    options: ["burkar", "tunnor", "lådor", "hinkar"],
    correct: "tunnor",
    explanation:
      "\"Tomma tunnor skramlar mest\" betyder att den som pratar mest och högst ofta vet minst. En tom tunna låter mer än en full.",
  },
  {
    type: "fill-in-blank",
    id: "ord-lag-f5",
    ageGroup: "lagstadiet",
    sentence: "Bättre ____ än aldrig",
    options: ["nu", "sent", "snabbt", "fort"],
    correct: "sent",
    explanation:
      "\"Bättre sent än aldrig\" betyder att det är bättre att göra något sent än att inte göra det alls.",
  },
];

// ---------------------------------------------------------------------------
// Data — Mellanstadiet (~15 exercises)
// ---------------------------------------------------------------------------

const mellanstadietExercises: OrdsprakExercise[] = [
  {
    type: "quiz",
    id: "ord-mel-q1",
    ageGroup: "mellanstadiet",
    expression: "Morgonstund har guld i mund",
    prompt: "Vad betyder \"morgonstund har guld i mund\"?",
    options: [
      "Man hittar guld på morgonen",
      "Det är bra att stiga upp tidigt",
      "Man ska äta guld på morgonen",
      "Morgonen är den finaste tiden",
    ],
    correct: 1,
    explanation:
      "\"Morgonstund har guld i mund\" betyder att det lönar sig att stiga upp tidigt och börja arbeta — morgontimmarna är värdefulla.",
  },
  {
    type: "quiz",
    id: "ord-mel-q2",
    ageGroup: "mellanstadiet",
    expression: "Övning ger färdighet",
    prompt: "Vad betyder \"övning ger färdighet\"?",
    options: [
      "Man ska bara öva en gång",
      "Att öva är tråkigt",
      "Ju mer man övar, desto bättre blir man",
      "Bara vissa kan bli bra",
    ],
    correct: 2,
    explanation:
      "\"Övning ger färdighet\" betyder att man blir bättre och skickligare ju mer man tränar och övar.",
  },
  {
    type: "quiz",
    id: "ord-mel-q3",
    ageGroup: "mellanstadiet",
    expression: "Borta bra men hemma bäst",
    prompt: "Vad betyder \"borta bra men hemma bäst\"?",
    options: [
      "Man ska aldrig resa",
      "Det är trevligt att resa men allra bäst hemma",
      "Hemmet är tråkigt",
      "Man ska alltid vara borta",
    ],
    correct: 1,
    explanation:
      "\"Borta bra men hemma bäst\" betyder att det kan vara roligt att vara på andra ställen, men att man trivs allra bäst hemma.",
  },
  {
    type: "quiz",
    id: "ord-mel-q4",
    ageGroup: "mellanstadiet",
    expression: "Den som gapar efter mycket mister ofta hela stycket",
    prompt: "Vad betyder \"den som gapar efter mycket mister ofta hela stycket\"?",
    options: [
      "Man ska gapa stort när man äter",
      "Den som vill ha för mycket riskerar att förlora allt",
      "Man ska aldrig vilja ha något",
      "Gapande är ohövligt",
    ],
    correct: 1,
    explanation:
      "\"Den som gapar efter mycket mister ofta hela stycket\" betyder att om man är för girig och vill ha för mycket kan man förlora allt.",
  },
  {
    type: "match",
    id: "ord-mel-m1",
    ageGroup: "mellanstadiet",
    instruction: "Para ihop ordspråket med dess betydelse.",
    pairs: [
      { left: "Övning ger färdighet", right: "Man blir bättre av att träna" },
      { left: "Morgonstund har guld i mund", right: "Det lönar sig att vara uppe tidigt" },
      { left: "Borta bra men hemma bäst", right: "Hemma är det allra bäst" },
      { left: "Bättre fly än illa fäkta", right: "Bättre att dra sig undan än att misslyckas" },
      { left: "Bränt barn skyr elden", right: "Man lär sig av sina misstag" },
    ],
  },
  {
    type: "match",
    id: "ord-mel-m2",
    ageGroup: "mellanstadiet",
    instruction: "Para ihop uttrycket med rätt förklaring.",
    pairs: [
      { left: "Skrattar bäst som skrattar sist", right: "Den som vinner till slut är den riktiga vinnaren" },
      { left: "Äpplet faller inte långt från trädet", right: "Barn liknar sina föräldrar" },
      { left: "Liten tuva stjälper ofta stort lass", right: "Små saker kan orsaka stora problem" },
      { left: "Tal är silver, tiga är guld", right: "Ibland är det bäst att vara tyst" },
    ],
  },
  {
    type: "fill-in-blank",
    id: "ord-mel-f1",
    ageGroup: "mellanstadiet",
    sentence: "Morgonstund har ____ i mund",
    options: ["silver", "guld", "brons", "koppar"],
    correct: "guld",
    explanation:
      "\"Morgonstund har guld i mund\" — guld symboliserar att morgontimmarna är extra värdefulla.",
  },
  {
    type: "fill-in-blank",
    id: "ord-mel-f2",
    ageGroup: "mellanstadiet",
    sentence: "Bättre ____ än illa fäkta",
    options: ["stå", "fly", "gå", "slå"],
    correct: "fly",
    explanation:
      "\"Bättre fly än illa fäkta\" betyder att det ibland är klokare att dra sig tillbaka än att kämpa och misslyckas.",
  },
  {
    type: "fill-in-blank",
    id: "ord-mel-f3",
    ageGroup: "mellanstadiet",
    sentence: "Äpplet faller inte långt från ____",
    options: ["marken", "huset", "trädet", "vägen"],
    correct: "trädet",
    explanation:
      "\"Äpplet faller inte långt från trädet\" betyder att barn ofta liknar sina föräldrar.",
  },
  {
    type: "quiz",
    id: "ord-mel-q5",
    ageGroup: "mellanstadiet",
    expression: "Bränt barn skyr elden",
    prompt: "Vad betyder \"bränt barn skyr elden\"?",
    options: [
      "Barn ska inte leka med eld",
      "Man undviker saker som har gjort en illa förut",
      "Barn är rädda för allt",
      "Man ska aldrig laga mat",
    ],
    correct: 1,
    explanation:
      "\"Bränt barn skyr elden\" betyder att den som har blivit skadad av något undviker det i fortsättningen — man lär sig av sina misstag.",
  },
  {
    type: "quiz",
    id: "ord-mel-q6",
    ageGroup: "mellanstadiet",
    expression: "Liten tuva stjälper ofta stort lass",
    prompt: "Vad betyder \"liten tuva stjälper ofta stort lass\"?",
    options: [
      "Små saker kan orsaka stora problem",
      "Man ska inte köra med stora lass",
      "Tuvor är farliga",
      "Stora saker är alltid bäst",
    ],
    correct: 0,
    explanation:
      "\"Liten tuva stjälper ofta stort lass\" betyder att även något litet och obetydligt kan orsaka stora problem.",
  },
  // --- nya övningar ---
  {
    type: "quiz",
    id: "ord-mel-q7",
    ageGroup: "mellanstadiet",
    expression: "Att ha fjärilar i magen",
    prompt: "Vad betyder \"att ha fjärilar i magen\"?",
    options: [
      "Att ha ätit fjärilar",
      "Att vara nervös eller förälskad",
      "Att ha ont i magen",
      "Att gilla fjärilar",
    ],
    correct: 1,
    explanation:
      "\"Att ha fjärilar i magen\" beskriver den pirriga känslan man får i magen när man är nervös, spänd eller förälskad.",
  },
  {
    type: "quiz",
    id: "ord-mel-q8",
    ageGroup: "mellanstadiet",
    expression: "Att vara på bettet",
    prompt: "Vad betyder \"att vara på bettet\"?",
    options: [
      "Att vara arg och redo att bråka",
      "Att vara hungrig",
      "Att bita i något",
      "Att vara trött",
    ],
    correct: 0,
    explanation:
      "\"Att vara på bettet\" betyder att vara på dåligt humör och redo att säga ifrån eller bråka, ungefär som ett djur som visar tänderna.",
  },
  {
    type: "quiz",
    id: "ord-mel-q9",
    ageGroup: "mellanstadiet",
    expression: "Sila mygg och svälja kameler",
    prompt: "Vad betyder \"sila mygg och svälja kameler\"?",
    options: [
      "Att äta konstiga saker",
      "Att bry sig om småsaker men missa de stora problemen",
      "Att vara petig med mat",
      "Att vara duktig på att sortera saker",
    ],
    correct: 1,
    explanation:
      "\"Sila mygg och svälja kameler\" betyder att man fäster sig vid småsaker men inte ser de stora problemen. Uttrycket har bibliskt ursprung.",
  },
  {
    type: "match",
    id: "ord-mel-m3",
    ageGroup: "mellanstadiet",
    instruction: "Para ihop uttrycket med den situation där man skulle använda det.",
    pairs: [
      { left: "Att ha fjärilar i magen", right: "Du är nervös inför ett tal" },
      { left: "Övning ger färdighet", right: "Någon vill ge upp för att det är svårt" },
      { left: "Bränt barn skyr elden", right: "Någon undviker något efter en dålig upplevelse" },
      { left: "Borta bra men hemma bäst", right: "Du längtar hem efter en resa" },
    ],
  },
  {
    type: "match",
    id: "ord-mel-m4",
    ageGroup: "mellanstadiet",
    instruction: "Vilken situation passar till uttrycket?",
    pairs: [
      { left: "Att vara på bettet", right: "Någon är sur och irriterad" },
      { left: "Sila mygg och svälja kameler", right: "Klagar på småsaker men ignorerar stora problem" },
      { left: "Liten tuva stjälper stort lass", right: "Något litet orsakar stora bekymmer" },
      { left: "Morgonstund har guld i mund", right: "Att stiga upp tidigt lönar sig" },
    ],
  },
  {
    type: "fill-in-blank",
    id: "ord-mel-f4",
    ageGroup: "mellanstadiet",
    sentence: "Den som ____ sig i leken får leken tåla",
    options: ["ger", "tar", "sätter", "ser"],
    correct: "ger",
    explanation:
      "\"Den som ger sig i leken får leken tåla\" betyder att om man frivilligt deltar i något måste man också acceptera konsekvenserna.",
  },
  {
    type: "fill-in-blank",
    id: "ord-mel-f5",
    ageGroup: "mellanstadiet",
    sentence: "Lika barn ____ bäst",
    options: ["leka", "leker", "springer", "trivs"],
    correct: "leka",
    explanation:
      "\"Lika barn leka bäst\" betyder att människor som liknar varandra brukar trivas ihop och ha roligt tillsammans.",
  },
];

// ---------------------------------------------------------------------------
// Data — Högstadiet (~15 exercises)
// ---------------------------------------------------------------------------

const hogstadietExercises: OrdsprakExercise[] = [
  {
    type: "quiz",
    id: "ord-hog-q1",
    ageGroup: "hogstadiet",
    expression: "Att kasta pärlor för svin",
    prompt: "Vad betyder \"att kasta pärlor för svin\"?",
    options: [
      "Att ge bort smycken",
      "Att erbjuda något värdefullt till någon som inte kan uppskatta det",
      "Att mata grisar med pärlor",
      "Att vara slösaktig med pengar",
    ],
    correct: 1,
    explanation:
      "\"Att kasta pärlor för svin\" betyder att ge något fint eller värdefullt till någon som inte förstår att uppskatta det. Uttrycket har bibliskt ursprung.",
  },
  {
    type: "quiz",
    id: "ord-hog-q2",
    ageGroup: "hogstadiet",
    expression: "Att ha en räv bakom örat",
    prompt: "Vad betyder \"att ha en räv bakom örat\"?",
    options: [
      "Att ha öronvärk",
      "Att vara listig och ha en hemlig plan",
      "Att gilla rävar",
      "Att lyssna dåligt",
    ],
    correct: 1,
    explanation:
      "\"Att ha en räv bakom örat\" betyder att vara slug och listig, ofta med en hemlig plan eller baktanke.",
  },
  {
    type: "quiz",
    id: "ord-hog-q3",
    ageGroup: "hogstadiet",
    expression: "Att göra en höna av en fjäder",
    prompt: "Vad betyder \"att göra en höna av en fjäder\"?",
    options: [
      "Att vara duktig på hantverk",
      "Att överdriva och göra något litet till något stort",
      "Att plocka fjädrar från en höna",
      "Att vara rädd för hönor",
    ],
    correct: 1,
    explanation:
      "\"Att göra en höna av en fjäder\" betyder att överdriva kraftigt — att göra en stor sak av något som egentligen är obetydligt.",
  },
  {
    type: "quiz",
    id: "ord-hog-q4",
    ageGroup: "hogstadiet",
    expression: "Att lägga näsan i blöt",
    prompt: "Vad betyder \"att lägga näsan i blöt\"?",
    options: [
      "Att doppa näsan i vatten",
      "Att vara förkyld",
      "Att lägga sig i andras angelägenheter",
      "Att snoka i kylskåpet",
    ],
    correct: 2,
    explanation:
      "\"Att lägga näsan i blöt\" betyder att lägga sig i saker som inte angår en — att vara nyfiken på andras saker.",
  },
  {
    type: "match",
    id: "ord-hog-m1",
    ageGroup: "hogstadiet",
    instruction: "Para ihop idiomet med dess betydelse.",
    pairs: [
      { left: "Att ha rent mjöl i påsen", right: "Att ha gott samvete och inget att dölja" },
      { left: "Att kasta pärlor för svin", right: "Att ge något värdefullt till den som inte uppskattar det" },
      { left: "Att ha en räv bakom örat", right: "Att vara listig med en hemlig plan" },
      { left: "Att göra en höna av en fjäder", right: "Att överdriva något obetydligt" },
      { left: "Att lägga näsan i blöt", right: "Att lägga sig i andras angelägenheter" },
    ],
  },
  {
    type: "match",
    id: "ord-hog-m2",
    ageGroup: "hogstadiet",
    instruction: "Vilket idiom passar till beskrivningen?",
    pairs: [
      { left: "Att dra alla över en kam", right: "Att behandla alla likadant utan hänsyn till skillnader" },
      { left: "Att slå huvudet på spiken", right: "Att säga exakt rätt sak" },
      { left: "Att gå som katten kring het gröt", right: "Att undvika att ta tag i något" },
      { left: "Att sopa något under mattan", right: "Att dölja ett problem istället för att lösa det" },
    ],
  },
  {
    type: "fill-in-blank",
    id: "ord-hog-f1",
    ageGroup: "hogstadiet",
    sentence: "Att ha rent ____ i påsen",
    options: ["mjöl", "guld", "socker", "vatten"],
    correct: "mjöl",
    explanation:
      "\"Att ha rent mjöl i påsen\" betyder att man inte har något att dölja och har gott samvete. Uttrycket kommer från en tid då oärliga mjölnare blandade ut mjölet.",
  },
  {
    type: "fill-in-blank",
    id: "ord-hog-f2",
    ageGroup: "hogstadiet",
    sentence: "Att göra en ____ av en fjäder",
    options: ["ko", "höna", "anka", "gås"],
    correct: "höna",
    explanation:
      "\"Att göra en höna av en fjäder\" — en fjäder är en liten del av en höna, och uttrycket handlar om att överdriva och göra något litet till något stort.",
  },
  {
    type: "fill-in-blank",
    id: "ord-hog-f3",
    ageGroup: "hogstadiet",
    sentence: "Att gå som katten kring het ____",
    options: ["mat", "gröt", "soppa", "mjölk"],
    correct: "gröt",
    explanation:
      "\"Att gå som katten kring het gröt\" betyder att man går runt och undviker att ta tag i något viktigt, precis som en katt som cirklar runt varm mat utan att våga äta.",
  },
  {
    type: "quiz",
    id: "ord-hog-q5",
    ageGroup: "hogstadiet",
    expression: "Att dra alla över en kam",
    prompt: "Vad betyder \"att dra alla över en kam\"?",
    options: [
      "Att kamma allas hår",
      "Att behandla alla likadant utan att se skillnader",
      "Att vara orättvis",
      "Att samla alla på ett ställe",
    ],
    correct: 1,
    explanation:
      "\"Att dra alla över en kam\" betyder att man behandlar alla likadant utan att ta hänsyn till individuella skillnader.",
  },
  {
    type: "quiz",
    id: "ord-hog-q6",
    ageGroup: "hogstadiet",
    expression: "Att slå huvudet på spiken",
    prompt: "Vad betyder \"att slå huvudet på spiken\"?",
    options: [
      "Att göra sig illa",
      "Att bygga något",
      "Att säga precis rätt sak",
      "Att vara klumpig",
    ],
    correct: 2,
    explanation:
      "\"Att slå huvudet på spiken\" betyder att man träffar helt rätt — att säga exakt det som behöver sägas.",
  },
  // --- nya övningar ---
  {
    type: "quiz",
    id: "ord-hog-q7",
    ageGroup: "hogstadiet",
    expression: "Att slå mynt av något",
    prompt: "Vad betyder \"att slå mynt av något\"?",
    options: [
      "Att tillverka pengar",
      "Att utnyttja en situation till sin egen fördel",
      "Att slösa pengar",
      "Att vara snål",
    ],
    correct: 1,
    explanation:
      "\"Att slå mynt av något\" betyder att dra nytta av eller tjäna på en situation, ofta på ett beräknande sätt.",
  },
  {
    type: "quiz",
    id: "ord-hog-q8",
    ageGroup: "hogstadiet",
    expression: "Att dra en lans för",
    prompt: "Vad betyder \"att dra en lans för någon\"?",
    options: [
      "Att attackera någon",
      "Att försvara eller stödja någon eller något",
      "Att vara riddare",
      "Att bära vapen",
    ],
    correct: 1,
    explanation:
      "\"Att dra en lans för\" betyder att öppet försvara eller stödja någon. Uttrycket kommer från riddartidens turneringar.",
  },
  {
    type: "quiz",
    id: "ord-hog-q9",
    ageGroup: "hogstadiet",
    expression: "Att vända kappan efter vinden",
    prompt: "Vad betyder \"att vända kappan efter vinden\"?",
    options: [
      "Att klä sig efter vädret",
      "Att ändra åsikt beroende på vad som gynnar en mest",
      "Att vara flexibel",
      "Att vara rädd för blåst",
    ],
    correct: 1,
    explanation:
      "\"Att vända kappan efter vinden\" betyder att anpassa sina åsikter efter vad som för tillfället lönar sig, att vara opålitlig i sina ståndpunkter.",
  },
  {
    type: "match",
    id: "ord-hog-m3",
    ageGroup: "hogstadiet",
    instruction: "Para ihop idiomet med dess ursprung.",
    pairs: [
      { left: "Att kasta pärlor för svin", right: "Bibeln (Matteusevangeliet)" },
      { left: "Att dra en lans för", right: "Riddartidens turneringar" },
      { left: "Att ha rent mjöl i påsen", right: "Oärliga mjölnare som blandade ut mjölet" },
      { left: "Att gå som katten kring het gröt", right: "Katter som cirklar runt varm mat" },
    ],
  },
  {
    type: "match",
    id: "ord-hog-m4",
    ageGroup: "hogstadiet",
    instruction: "Para ihop idiomet med dess historia.",
    pairs: [
      { left: "Att vända kappan efter vinden", right: "Att byta sida efter omständigheterna" },
      { left: "Att slå mynt av något", right: "Myntprägling — att göra pengar av metall" },
      { left: "Att slå huvudet på spiken", right: "Att träffa rätt med hammaren" },
      { left: "Att sopa under mattan", right: "Att gömma smuts istället för att städa ordentligt" },
    ],
  },
  {
    type: "fill-in-blank",
    id: "ord-hog-f4",
    ageGroup: "hogstadiet",
    sentence: "Man ska inte ____ skinnet förrän björnen är skjuten",
    options: ["sälja", "garva", "klippa", "bära"],
    correct: "sälja",
    explanation:
      "\"Man ska inte sälja skinnet förrän björnen är skjuten\" betyder att man inte ska räkna med vinsten innan man faktiskt har lyckats.",
  },
  {
    type: "fill-in-blank",
    id: "ord-hog-f5",
    ageGroup: "hogstadiet",
    sentence: "Ingen rök utan ____",
    options: ["eld", "ved", "rör", "vind"],
    correct: "eld",
    explanation:
      "\"Ingen rök utan eld\" betyder att rykten ofta har en kärna av sanning — där det finns rök (rykten) finns det vanligtvis eld (en orsak).",
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet (~15 exercises)
// ---------------------------------------------------------------------------

const gymnasietExercises: OrdsprakExercise[] = [
  {
    type: "quiz",
    id: "ord-gym-q1",
    ageGroup: "gymnasiet",
    expression: "Att gå över ån efter vatten",
    prompt: "Vad betyder \"att gå över ån efter vatten\"?",
    options: [
      "Att behöva vatten",
      "Att krångla till något som egentligen är enkelt",
      "Att vara törstig",
      "Att vandra långt",
    ],
    correct: 1,
    explanation:
      "\"Att gå över ån efter vatten\" betyder att man gör något onödigt komplicerat — varför gå över ån när man redan står vid vatten?",
  },
  {
    type: "quiz",
    id: "ord-gym-q2",
    ageGroup: "gymnasiet",
    expression: "Den som sår vind skördar storm",
    prompt: "Vad betyder \"den som sår vind skördar storm\"?",
    options: [
      "Att väder är oförutsägbart",
      "Den som skapar små problem får stora tillbaka",
      "Att stormar är farliga",
      "Att man ska så på vindstilla dagar",
    ],
    correct: 1,
    explanation:
      "\"Den som sår vind skördar storm\" betyder att den som orsakar problem eller bråk kommer att drabbas av ännu värre konsekvenser. Uttrycket har bibliskt ursprung (Hosea 8:7).",
  },
  {
    type: "quiz",
    id: "ord-gym-q3",
    ageGroup: "gymnasiet",
    expression: "Att bita i det sura äpplet",
    prompt: "Vad betyder \"att bita i det sura äpplet\"?",
    options: [
      "Att äta omogen frukt",
      "Att vara modig",
      "Att acceptera och ta tag i något obehagligt",
      "Att klaga på maten",
    ],
    correct: 2,
    explanation:
      "\"Att bita i det sura äpplet\" betyder att man måste göra något man inte vill men som är nödvändigt — att ta sig igenom det obehagliga.",
  },
  {
    type: "quiz",
    id: "ord-gym-q4",
    ageGroup: "gymnasiet",
    expression: "Skam den som ger sig",
    prompt: "Vad betyder \"skam den som ger sig\"?",
    options: [
      "Man ska skämmas om man förlorar",
      "Man ska aldrig ge upp",
      "Skam är en viktig känsla",
      "Man ska ge sig ibland",
    ],
    correct: 1,
    explanation:
      "\"Skam den som ger sig\" är en uppmaning att inte ge upp, att kämpa vidare. Den som ger sig borde skämmas.",
  },
  {
    type: "match",
    id: "ord-gym-m1",
    ageGroup: "gymnasiet",
    instruction: "Para ihop uttrycket med dess betydelse.",
    pairs: [
      { left: "Att vara ute på hal is", right: "Att befinna sig i en riskabel situation" },
      { left: "Att gå över ån efter vatten", right: "Att krångla till något onödigt" },
      { left: "Den som sår vind skördar storm", right: "Små provokationer ger stora konsekvenser" },
      { left: "Att bita i det sura äpplet", right: "Att ta tag i något obehagligt men nödvändigt" },
      { left: "Att komma på skam", right: "Att bli avslöjad eller förödmjukad" },
    ],
  },
  {
    type: "match",
    id: "ord-gym-m2",
    ageGroup: "gymnasiet",
    instruction: "Vilket uttryck hör ihop med vilken förklaring?",
    pairs: [
      { left: "Ingen rök utan eld", right: "Rykten har ofta en kärna av sanning" },
      { left: "Man ska inte sälja skinnet förrän björnen är skjuten", right: "Räkna inte med något innan det är klart" },
      { left: "Att ha is i magen", right: "Att kunna hålla sig lugn under press" },
      { left: "Att spela någon ett spratt", right: "Att lura eller skoja med någon" },
    ],
  },
  {
    type: "fill-in-blank",
    id: "ord-gym-f1",
    ageGroup: "gymnasiet",
    sentence: "Den som sår ____ skördar storm",
    options: ["regn", "vind", "snö", "hagel"],
    correct: "vind",
    explanation:
      "\"Den som sår vind skördar storm\" — vinden växer till storm, precis som små problem kan växa till stora katastrofer.",
  },
  {
    type: "fill-in-blank",
    id: "ord-gym-f2",
    ageGroup: "gymnasiet",
    sentence: "Man ska inte sälja ____ förrän björnen är skjuten",
    options: ["köttet", "skinnet", "pälsen", "hornen"],
    correct: "skinnet",
    explanation:
      "\"Man ska inte sälja skinnet förrän björnen är skjuten\" — man ska inte räkna med vinsten innan man faktiskt lyckats.",
  },
  {
    type: "fill-in-blank",
    id: "ord-gym-f3",
    ageGroup: "gymnasiet",
    sentence: "Ingen ____ utan eld",
    options: ["rök", "aska", "värme", "gnista"],
    correct: "rök",
    explanation:
      "\"Ingen rök utan eld\" — om det finns rykten (rök) finns det ofta en orsak (eld). Uttrycket antyder att rykten brukar ha en kärna av sanning.",
  },
  {
    type: "quiz",
    id: "ord-gym-q5",
    ageGroup: "gymnasiet",
    expression: "Att ha is i magen",
    prompt: "Vad betyder \"att ha is i magen\"?",
    options: [
      "Att ha ätit glass",
      "Att kunna hålla sig lugn och behärskad under press",
      "Att vara kall och okänslig",
      "Att vara frisk trots kylan",
    ],
    correct: 1,
    explanation:
      "\"Att ha is i magen\" betyder att vara kall och behärskad, att inte låta sig stressas utan kunna behålla lugnet i svåra situationer.",
  },
  {
    type: "quiz",
    id: "ord-gym-q6",
    ageGroup: "gymnasiet",
    expression: "Att vara ute på hal is",
    prompt: "Vad betyder \"att vara ute på hal is\"?",
    options: [
      "Att åka skridskor",
      "Att befinna sig i en farlig eller riskfylld situation",
      "Att frysa",
      "Att vara dålig på att åka skridsko",
    ],
    correct: 1,
    explanation:
      "\"Att vara ute på hal is\" betyder att befinna sig i en vansklig eller riskfylld situation där man lätt kan \"halka\" och göra fel.",
  },
  {
    type: "quiz",
    id: "ord-gym-q7",
    ageGroup: "gymnasiet",
    expression: "Att komma på skam",
    prompt: "Vad betyder \"att komma på skam\"?",
    options: [
      "Att bli förödmjukad eller avslöjad",
      "Att skämmas inombords",
      "Att komma ihåg något pinsamt",
      "Att hitta skammen",
    ],
    correct: 0,
    explanation:
      "\"Att komma på skam\" betyder att bli avslöjad eller förödmjukad, ofta för att ens planer eller påståenden visar sig vara felaktiga.",
  },
  // --- nya övningar ---
  {
    type: "quiz",
    id: "ord-gym-q8",
    ageGroup: "gymnasiet",
    expression: "Pyrrhusseger",
    prompt: "Vad är en \"pyrrhusseger\"?",
    options: [
      "En stor och övertygande seger",
      "En seger som kostat så mycket att den i praktiken är en förlust",
      "En seger i ett antikt krig",
      "En seger som vunnits genom fusk",
    ],
    correct: 1,
    explanation:
      "En \"pyrrhusseger\" är en seger som kostat så mycket att den knappt är värd att fira. Uttrycket kommer från kung Pyrrhus av Epirus som vann mot romarna men förlorade så många soldater att han sa: \"Ännu en sådan seger och vi är förlorade.\"",
  },
  {
    type: "quiz",
    id: "ord-gym-q9",
    ageGroup: "gymnasiet",
    expression: "Damoklessvärd",
    prompt: "Vad syftar man på med ett \"damoklessvärd\"?",
    options: [
      "Ett väldigt skarpt svärd",
      "Ett hot som ständigt hänger över en",
      "En antik vapen",
      "En symbol för rättvisa",
    ],
    correct: 1,
    explanation:
      "Ett \"damoklessvärd\" är ett ständigt överhängande hot. Uttrycket kommer från den antika berättelsen om Damokles som fick sitta på kungens tron med ett svärd hängande i ett hårstrå ovanför sig.",
  },
  {
    type: "quiz",
    id: "ord-gym-q10",
    ageGroup: "gymnasiet",
    expression: "Att rensa Augias stall",
    prompt: "Vad betyder \"att rensa Augias stall\"?",
    options: [
      "Att göra rent i ett stall",
      "Att göra sig av med gammal smuts och oordning, ofta i en organisation",
      "Att utföra en enkel uppgift",
      "Att fly från problem",
    ],
    correct: 1,
    explanation:
      "\"Att rensa Augias stall\" betyder att röja upp i långvarig oordning eller korruption. Det kommer från den grekiska myten där Herakles fick i uppdrag att rengöra kung Augias enorma stall som inte hade städats på trettio år.",
  },
  {
    type: "match",
    id: "ord-gym-m3",
    ageGroup: "gymnasiet",
    instruction: "Para ihop det klassiska uttrycket med dess ursprung.",
    pairs: [
      { left: "Pyrrhusseger", right: "Kung Pyrrhus av Epirus krig mot Rom" },
      { left: "Damoklessvärd", right: "Berättelsen om Damokles vid kungens bord" },
      { left: "Augias stall", right: "Herakles tolv stordåd i grekisk myt" },
      { left: "Den som sår vind skördar storm", right: "Bibeln (Hosea 8:7)" },
    ],
  },
  {
    type: "fill-in-blank",
    id: "ord-gym-f4",
    ageGroup: "gymnasiet",
    sentence: "Kriget blev en ren ____ — segern kostade mer än förlusten hade gjort",
    options: ["pyrrhusseger", "triumf", "katastrof", "tragedi"],
    correct: "pyrrhusseger",
    explanation:
      "En \"pyrrhusseger\" beskriver perfekt en seger vars kostnad överstiger vinsten, uppkallad efter kung Pyrrhus vars segrar decimerade hans egen armé.",
  },
  {
    type: "fill-in-blank",
    id: "ord-gym-f5",
    ageGroup: "gymnasiet",
    sentence: "Hotet om uppsägning hängde som ett ____ över de anställda",
    options: ["damoklessvärd", "moln", "hot", "mörker"],
    correct: "damoklessvärd",
    explanation:
      "\"Damoklessvärd\" används för att beskriva ett ständigt närvarande hot som kan slå till när som helst, precis som svärdet i berättelsen om Damokles.",
  },
];

// ---------------------------------------------------------------------------
// Exercise sets + helper
// ---------------------------------------------------------------------------

interface OrdsprakExerciseSet {
  ageGroup: AgeGroup;
  exercises: OrdsprakExercise[];
}

const ALL_EXERCISES: OrdsprakExerciseSet[] = [
  { ageGroup: "lagstadiet", exercises: lagstadietExercises },
  { ageGroup: "mellanstadiet", exercises: mellanstadietExercises },
  { ageGroup: "hogstadiet", exercises: hogstadietExercises },
  { ageGroup: "gymnasiet", exercises: gymnasietExercises },
];

const AGE_GROUP_FALLBACKS: Record<AgeGroup, AgeGroup[]> = {
  lagstadiet: [],
  mellanstadiet: ["lagstadiet"],
  hogstadiet: ["mellanstadiet", "lagstadiet"],
  gymnasiet: ["hogstadiet", "mellanstadiet", "lagstadiet"],
};

export function getOrdsprakExercises(ageGroup: AgeGroup): OrdsprakExercise[] {
  const exact = ALL_EXERCISES.find((s) => s.ageGroup === ageGroup);
  if (exact && exact.exercises.length > 0) return exact.exercises;

  for (const fallback of AGE_GROUP_FALLBACKS[ageGroup]) {
    const fb = ALL_EXERCISES.find((s) => s.ageGroup === fallback);
    if (fb && fb.exercises.length > 0) return fb.exercises;
  }

  return [];
}
