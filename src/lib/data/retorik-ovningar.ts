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
  // --- New mellanstadiet exercises ---
  {
    type: "quiz",
    id: "ret-mel-q6",
    category: "ethos-pathos-logos",
    ageGroup: "mellanstadiet",
    instruction: "Vilken typ av argument används?",
    prompt: "\"Som lagkapten i fotbollslaget vill jag säga att vi måste träna mer som grupp.\"",
    options: ["Ethos (trovärdighet)", "Pathos (känsla)", "Logos (logik)"],
    correct: 0,
    explanation: "Talaren hänvisar till sin roll som lagkapten för att skapa trovärdighet. Det är ethos.",
  },
  {
    type: "quiz",
    id: "ret-mel-q7",
    category: "ethos-pathos-logos",
    ageGroup: "mellanstadiet",
    instruction: "Vilken typ av argument används?",
    prompt: "\"I en klassrumsdebatt säger Lina: 'Skolbiblioteket har 500 böcker, men bara 3 handlar om rymden. Det är alldeles för lite!'\"",
    options: ["Ethos (trovärdighet)", "Pathos (känsla)", "Logos (logik)"],
    correct: 2,
    explanation: "Lina använder konkreta siffror (500 böcker, bara 3 om rymden) för att stödja sitt argument. Det är logos.",
  },
  {
    type: "quiz",
    id: "ret-mel-q8",
    category: "ethos-pathos-logos",
    ageGroup: "mellanstadiet",
    instruction: "Vilken typ av argument används?",
    prompt: "\"Köp vår choklad — och ge ett barn i Afrika en chans att gå i skolan!\"",
    options: ["Ethos (trovärdighet)", "Pathos (känsla)", "Logos (logik)"],
    correct: 1,
    explanation: "Reklamen försöker väcka medkänsla för barn som inte kan gå i skolan. Det är pathos — ett känsloargument.",
  },
  {
    type: "quiz",
    id: "ret-mel-q9",
    category: "retoriska-grepp",
    ageGroup: "mellanstadiet",
    instruction: "Vilket retoriskt grepp används?",
    prompt: "\"Vi behöver bättre mat, bättre raster och bättre lärare.\"",
    options: ["Retorisk fråga", "Trestegsregel (trikolon)", "Överdrift"],
    correct: 1,
    explanation: "Tre saker räknas upp i rad med samma mönster ('bättre...'). Det kallas trestegsregel eller trikolon och gör argumentet mer slagkraftigt.",
  },
  {
    type: "quiz",
    id: "ret-mel-q10",
    category: "retoriska-grepp",
    ageGroup: "mellanstadiet",
    instruction: "Vilket retoriskt grepp används?",
    prompt: "\"Jag har sagt det tusen gånger — läxorna tar hela kvällen!\"",
    options: ["Retorisk fråga", "Trestegsregel (trikolon)", "Överdrift (hyperbol)"],
    correct: 2,
    explanation: "\"Tusen gånger\" och \"hela kvällen\" är överdrifter (hyperboler). Man säger något starkare än det egentligen är för att skapa effekt.",
  },
  {
    type: "match",
    id: "ret-mel-m2",
    category: "retoriska-grepp",
    ageGroup: "mellanstadiet",
    instruction: "Para ihop det retoriska greppet med rätt exempel.",
    pairs: [
      { left: "Retorisk fråga", right: "\"Vem tycker egentligen att det är okej?\"" },
      { left: "Upprepning (anafor)", right: "\"Alla barn, alla familjer, alla skolor.\"" },
      { left: "Överdrift (hyperbol)", right: "\"Det tar typ hundra år att bli klar!\"" },
      { left: "Trestegsregel", right: "\"Snabbt, enkelt och billigt.\"" },
    ],
  },
  {
    type: "analysis",
    id: "ret-mel-a1",
    category: "argumentationsanalys",
    ageGroup: "mellanstadiet",
    instruction: "Läs texten och svara på frågan.",
    text: "Vi borde ha längre raster i skolan. Elever som rör sig mer presterar bättre på proven. Dessutom mår alla bättre av frisk luft. Låt oss ge eleverna den tid de behöver!",
    question: "Vilka typer av argument finns i texten?",
    options: [
      "Bara känsloargument (pathos)",
      "Logos (forskning, frisk luft) och pathos (ge eleverna tid)",
      "Bara logiska argument (logos)",
      "Bara trovärdighetsargument (ethos)",
    ],
    correct: 1,
    explanation: "Texten blandar logiska argument (bättre resultat, frisk luft) med ett känsloargument i slutet (ge eleverna den tid de behöver).",
  },
  {
    type: "analysis",
    id: "ret-mel-a2",
    category: "argumentationsanalys",
    ageGroup: "mellanstadiet",
    instruction: "Läs texten och svara på frågan.",
    text: "Klassens representant säger i skolrådet: \"Vi i klass 5B har diskuterat detta länge. Alla 24 elever vill ha fler böcker om djur i biblioteket. Forskning visar att barn läser mer när de får välja ämne själva.\"",
    question: "Hur försöker klassrepresentanten övertyga?",
    options: [
      "Genom att skrämma skolrådet",
      "Genom att visa att hela klassen står bakom (ethos) och använda forskning (logos)",
      "Bara genom att vara arg",
      "Genom att berätta en ledsen historia (pathos)",
    ],
    correct: 1,
    explanation: "Klassrepresentanten bygger trovärdighet genom att visa att alla 24 elever står bakom (ethos) och stödjer detta med forskning (logos).",
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
  // --- New högstadiet exercises ---
  {
    type: "quiz",
    id: "ret-hog-q6",
    category: "argumentationsanalys",
    ageGroup: "hogstadiet",
    instruction: "Identifiera argumentationsfelet.",
    prompt: "\"Skolmaten är bra, för alla vet att den mat som serveras i skolan håller hög kvalitet.\"",
    options: ["Ad hominem", "Cirkelresonemang", "Halmdocka", "Falsk dikotomi"],
    correct: 1,
    explanation: "Cirkelresonemang innebär att slutsatsen ('skolmaten är bra') används som bevis för sig själv ('håller hög kvalitet' = samma sak omformulerat).",
  },
  {
    type: "quiz",
    id: "ret-hog-q7",
    category: "argumentationsanalys",
    ageGroup: "hogstadiet",
    instruction: "Identifiera argumentationsfelet.",
    prompt: "\"Du kan inte lita på Emmas åsikt om klimatet — hennes pappa jobbar ju på ett oljebolag.\"",
    options: ["Halmdocka", "Genetisk falasi", "Ad populum", "Sluttande planet"],
    correct: 1,
    explanation: "Genetisk falasi innebär att man bedömer ett argument utifrån dess ursprung istället för dess innehåll. Emmas pappas jobb säger inget om kvaliteten på hennes argument.",
  },
  {
    type: "quiz",
    id: "ret-hog-q8",
    category: "retoriska-grepp",
    ageGroup: "hogstadiet",
    instruction: "Vilket retoriskt grepp används?",
    prompt: "\"Ja, det är verkligen en fantastisk idé att lägga ner skolbiblioteket. Vem behöver böcker i en skola?\"",
    options: ["Antites", "Ironi", "Klimax", "Eufemism"],
    correct: 1,
    explanation: "Talaren menar motsatsen till det som sägs. Genom ironi framgår det att hen tycker det är en dålig idé att lägga ner biblioteket.",
  },
  {
    type: "quiz",
    id: "ret-hog-q9",
    category: "retoriska-grepp",
    ageGroup: "hogstadiet",
    instruction: "Vilket retoriskt grepp används?",
    prompt: "\"Företaget genomförde en personaloptimering.\" (Istället för: Företaget sparkade anställda.)",
    options: ["Ironi", "Eufemism", "Anafor", "Retorisk fråga"],
    correct: 1,
    explanation: "Eufemism är ett mildare uttryck som ersätter ett obehagligt eller negativt ord. 'Personaloptimering' låter bättre än 'sparkning'.",
  },
  {
    type: "analysis",
    id: "ret-hog-a2",
    category: "argumentationsanalys",
    ageGroup: "hogstadiet",
    instruction: "Läs textutdraget och svara på frågan.",
    text: "\"Vi måste agera nu. Klimatförändringarna hotar inte bara isbjörnarna — de hotar våra barn, våra samhällen, vår framtid. Varje grad av uppvärmning kostar miljarder. Vetenskapen är tydlig. Frågan är: har vi modet att lyssna?\"",
    question: "Vilka retoriska strategier används i detta politiska tal?",
    options: [
      "Bara logos (siffror)",
      "Pathos (hot mot barn), trikolon (barn/samhällen/framtid), logos (miljarder, vetenskapen) och retorisk fråga",
      "Bara retorisk fråga",
      "Bara ethos",
    ],
    correct: 1,
    explanation: "Talet kombinerar känsloargument (hot mot barn), trestegsregel (barn/samhällen/framtid), logiska argument (miljarder, vetenskap) och avslutar med en retorisk fråga.",
  },
  {
    type: "analysis",
    id: "ret-hog-a3",
    category: "argumentationsanalys",
    ageGroup: "hogstadiet",
    instruction: "Läs texten och svara på frågan.",
    text: "I en ledarartikel skriver tidningen: \"Det är hög tid att höja lärarlönerna. Utan kompetenta lärare faller hela utbildningssystemet. Finland, som betalar sina lärare väl, toppar PISA-mätningarna. Är det inte dags att vi lär oss av grannlandet?\"",
    question: "Vilken typ av argument dominerar i ledartexten?",
    options: [
      "Bara känsloargument",
      "Logos (Finland-jämförelse, PISA) kombinerat med retorisk fråga",
      "Bara ethos",
      "Halmdocka",
    ],
    correct: 1,
    explanation: "Ledarskribenten använder främst logiska argument (jämförelse med Finland, PISA-data) och avslutar med en retorisk fråga som uppmanar till handling.",
  },
  {
    type: "match",
    id: "ret-hog-m3",
    category: "argumentationsanalys",
    ageGroup: "hogstadiet",
    instruction: "Para ihop argumenttypen med rätt exempel.",
    pairs: [
      { left: "Sakargument", right: "\"Studier visar att motion förbättrar inlärning.\"" },
      { left: "Värdeargument", right: "\"Alla elever har rätt till en trygg skolgång.\"" },
      { left: "Analogiargument", right: "\"Att förbjuda sociala medier är som att förbjuda telefonen på 1900-talet.\"" },
      { left: "Auktoritetsargument", right: "\"Enligt Folkhälsomyndigheten bör barn sova minst 9 timmar.\"" },
    ],
  },
  {
    type: "match",
    id: "ret-hog-m4",
    category: "argumentationsanalys",
    ageGroup: "hogstadiet",
    instruction: "Para ihop argumentationsfelet med ett vardagligt exempel.",
    pairs: [
      { left: "Cirkelresonemang", right: "\"Jag har rätt, för det jag säger stämmer.\"" },
      { left: "Genetisk falasi", right: "\"Han är rik — hans åsikter om fattigdom är värdelösa.\"" },
      { left: "Tu quoque", right: "\"Du kan inte klaga på att jag fuskar — du fuskade ju förra året!\"" },
      { left: "Rött sill", right: "\"Betyg? Kan vi prata om skolmaten istället?\"" },
    ],
  },
  {
    type: "quiz",
    id: "ret-hog-q10",
    category: "debatt",
    ageGroup: "hogstadiet",
    instruction: "Vilken debatteknik används?",
    prompt: "\"Du säger att vi borde ha fler prov. Men du fick ju själv dåligt på senaste provet — varför ska vi lyssna på dig?\"",
    options: ["Halmdocka", "Tu quoque", "Rött sill", "Eufemism"],
    correct: 1,
    explanation: "Tu quoque ('du med!') innebär att man avfärdar någons argument genom att peka på att personen själv inte lever upp till det. Det bemöter inte sakfrågan.",
  },
  {
    type: "quiz",
    id: "ret-hog-q11",
    category: "debatt",
    ageGroup: "hogstadiet",
    instruction: "Vilken debatteknik används?",
    prompt: "I en debatt om betygssystemet säger en elev plötsligt: \"Men det viktigaste problemet i skolan är ju mobbningen. Borde vi inte prata om det istället?\"",
    options: ["Ad hominem", "Halmdocka", "Rött sill (red herring)", "Falsk dikotomi"],
    correct: 2,
    explanation: "Rött sill (red herring) innebär att man drar in ett nytt ämne för att avleda från den pågående diskussionen. Mobbning är viktigt, men det besvarar inte frågan om betyg.",
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
  // --- New gymnasiet exercises ---
  {
    type: "analysis",
    id: "ret-gym-a3",
    category: "argumentationsanalys",
    ageGroup: "gymnasiet",
    instruction: "Läs reklamtexten och analysera den retoriska strategin.",
    text: "\"Du förtjänar det bästa. Våra produkter är utvecklade av ledande forskare vid Karolinska Institutet. 94% av användarna rapporterar synliga resultat efter bara 14 dagar. Ge dig själv den omsorgen du är värd.\"",
    question: "Hur använder reklamen de tre appellformerna?",
    options: [
      "Bara pathos",
      "Bara logos (siffror)",
      "Pathos (du förtjänar) → ethos (Karolinska) → logos (94%, 14 dagar) → pathos (omsorgen du är värd)",
      "Bara ethos (forskare)",
    ],
    correct: 2,
    explanation: "Reklamen följer en genomtänkt strategi: den börjar med en känsloappell, bygger trovärdighet via auktoritet, presenterar siffror och avslutar med ännu en känsloappell. Alla tre appellformerna samverkar.",
  },
  {
    type: "analysis",
    id: "ret-gym-a4",
    category: "argumentationsanalys",
    ageGroup: "gymnasiet",
    instruction: "Läs textutdraget och analysera argumentationen.",
    text: "I en vetenskaplig debattartikel skriver forskaren: \"Studien visar ett signifikant samband (p < 0.05). Det bör dock noteras att urvalet var begränsat till 120 deltagare, samtliga från samma region. Vidare forskning med bredare urval behövs innan generella slutsatser kan dras.\"",
    question: "Vad kännetecknar denna typ av argumentation?",
    options: [
      "Känsloargument med pathos",
      "Saklig argumentation med reservation och hedging — typiskt för akademiskt skrivande",
      "Cirkelresonemang",
      "Halmdocka",
    ],
    correct: 1,
    explanation: "Akademisk argumentation kännetecknas av reservationer ('bör dock noteras', 'vidare forskning behövs') och hedging. Forskaren undviker att dra för stora slutsatser, vilket stärker trovärdigheten.",
  },
  {
    type: "quiz",
    id: "ret-gym-q7",
    category: "retoriska-grepp",
    ageGroup: "gymnasiet",
    instruction: "Vilket retoriskt begrepp beskrivs?",
    prompt: "En talare väljer att ta upp flyktingfrågan exakt den dag en ny rapport om integration publiceras, för att argumenten ska få maximal genomslagskraft.",
    options: ["Ethos", "Kairos", "Klimax", "Asyndes"],
    correct: 1,
    explanation: "Kairos handlar om timing — att välja rätt ögonblick för sitt budskap. Genom att anpassa talet till en aktuell händelse ökar genomslagskraften.",
  },
  {
    type: "quiz",
    id: "ret-gym-q8",
    category: "retoriska-grepp",
    ageGroup: "gymnasiet",
    instruction: "Vilken dispositionsmodell beskrivs?",
    prompt: "Ett debattinlägg börjar med att erkänna motståndarens starkaste poäng, bemöter dem sedan punkt för punkt, och avslutar med den egna positionen.",
    options: [
      "Kronologisk disposition",
      "Rogeriansk argumentation (erkänna motargument först)",
      "Klimaxdisposition (svagast till starkast)",
      "Antiklimax (starkast först)",
    ],
    correct: 1,
    explanation: "Rogeriansk argumentation (efter Carl Rogers) inleder med att visa förståelse för motparten innan man framför sin egen ståndpunkt. Det bygger ethos och gör motparten mer öppen.",
  },
  {
    type: "match",
    id: "ret-gym-m3",
    category: "retoriska-grepp",
    ageGroup: "gymnasiet",
    instruction: "Para ihop den antika retorikens fem delar med rätt beskrivning.",
    pairs: [
      { left: "Inventio", right: "Finna argument och material" },
      { left: "Dispositio", right: "Ordna och strukturera talet" },
      { left: "Elocutio", right: "Formulera och utsmycka språkligt" },
      { left: "Memoria", right: "Memorera talet" },
      { left: "Actio", right: "Framföra talet med röst och kroppsspråk" },
    ],
  },
  {
    type: "quiz",
    id: "ret-gym-q9",
    category: "debatt",
    ageGroup: "gymnasiet",
    instruction: "Vilken debatteknik beskrivs?",
    prompt: "En debattör börjar lugnt, ökar sedan intensiteten med varje argument, och avslutar med ett kraftfullt upprop som får publiken att applådera.",
    options: ["Whataboutism", "Stegring (klimax i debatt)", "Halmdocka", "Rött sill"],
    correct: 1,
    explanation: "Stegring i debatt innebär att man medvetet ökar intensiteten under sitt anförande. Genom att spara det starkaste till sist skapas maximal retorisk effekt.",
  },
  {
    type: "quiz",
    id: "ret-gym-q10",
    category: "debatt",
    ageGroup: "gymnasiet",
    instruction: "Vilken retorisk strategi beskrivs?",
    prompt: "I en löneförhandling säger arbetstagaren: \"Jag förstår företagets ekonomiska situation. Samtidigt visar branschstatistiken att min lön ligger 15% under medianen. Jag föreslår en stegvis höjning över 12 månader — det gynnar oss båda.\"",
    options: [
      "Halmdocka",
      "Förhandlingsretorik: erkännande + fakta + kompromissförslag",
      "Ad hominem",
      "Whataboutism",
    ],
    correct: 1,
    explanation: "Effektiv förhandlingsretorik kombinerar empati (förstår situationen), logos (branschstatistik) och en konkret kompromiss. Genom att visa hänsyn till motparten skapas en win-win-ram.",
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
