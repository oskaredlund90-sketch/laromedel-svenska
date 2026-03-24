import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type NordiskaSprakExerciseType = "quiz" | "match" | "reading-comprehension";

export interface NordiskaSprakQuiz {
  type: "quiz";
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface NordiskaSprakMatch {
  type: "match";
  id: string;
  instruction: string;
  pairs: { left: string; right: string }[];
}

export interface NordiskaSprakReadingComp {
  type: "reading-comprehension";
  id: string;
  instruction: string;
  text: string;
  language: "danska" | "norska";
  questions: {
    prompt: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
}

export type NordiskaSprakExercise =
  | NordiskaSprakQuiz
  | NordiskaSprakMatch
  | NordiskaSprakReadingComp;

export interface NordiskaSprakExerciseSet {
  ageGroup: AgeGroup;
  exercises: NordiskaSprakExercise[];
}

// ---------------------------------------------------------------------------
// Data — Högstadiet (20 övningar)
// ---------------------------------------------------------------------------

const hogstadietExercises: NordiskaSprakExercise[] = [
  // --- Quiz (6) ---
  {
    type: "quiz",
    id: "ns-hog-q1",
    prompt: "Vilka språk tillhör den nordiska (nordgermanska) språkfamiljen?",
    options: [
      "Svenska, danska, norska, finska och isländska",
      "Svenska, danska, norska, isländska och färöiska",
      "Svenska, danska, norska, tyska och engelska",
      "Svenska, finska, samiska, romani chib och jiddisch",
    ],
    correct: 1,
    explanation:
      "De nordiska språken (nordgermanska) är svenska, danska, norska, isländska och färöiska. Finska tillhör en helt annan språkfamilj — de finsk-ugriska språken.",
  },
  {
    type: "quiz",
    id: "ns-hog-q2",
    prompt: "Hur många nationella minoritetsspråk har Sverige?",
    options: ["Tre", "Fyra", "Fem", "Sex"],
    correct: 2,
    explanation:
      "Sverige har fem nationella minoritetsspråk: finska, meänkieli, samiska, romani chib och jiddisch. De skyddas av lag sedan år 2000.",
  },
  {
    type: "quiz",
    id: "ns-hog-q3",
    prompt: "Vilket av de nordiska språken är mest likt svenska?",
    options: ["Isländska", "Färöiska", "Norska", "Finska"],
    correct: 2,
    explanation:
      "Norska (särskilt bokmål) är det nordiska språk som ligger närmast svenska. Svenskar och norrmän kan ofta förstå varandra utan tolk, även om det finns skillnader i uttal och ordförråd.",
  },
  {
    type: "quiz",
    id: "ns-hog-q4",
    prompt: "Vilket minoritetsspråk talas främst i norra Sverige och har gamla rötter i Norden?",
    options: ["Romani chib", "Jiddisch", "Samiska", "Meänkieli"],
    correct: 2,
    explanation:
      "Samiska har talats i norra Skandinavien sedan långt före vikingatiden. Det finns flera samiska varieteter och språket tillhör den finsk-ugriska språkfamiljen, inte den germanska.",
  },
  {
    type: "quiz",
    id: "ns-hog-q5",
    prompt: "Vad betyder det danska ordet 'dreng'?",
    options: ["Dröm", "Pojke", "Kung", "Dryck"],
    correct: 1,
    explanation:
      "Det danska ordet 'dreng' betyder 'pojke' på svenska. Trots att svenska och danska är besläktade finns det ord som ser annorlunda ut eller har annan betydelse.",
  },
  {
    type: "quiz",
    id: "ns-hog-q6",
    prompt: "Vad kallas det när talare av olika skandinaviska språk kan förstå varandra?",
    options: [
      "Språkbyte",
      "Ömsesidig begriplighet",
      "Kodväxling",
      "Dialektutjämning",
    ],
    correct: 1,
    explanation:
      "Ömsesidig begriplighet (mutual intelligibility) innebär att talare av besläktade språk kan förstå varandra utan att ha lärt sig varandras språk. Graden varierar — svenskar förstår norska bättre än danska.",
  },
  // --- Match (4) ---
  {
    type: "match",
    id: "ns-hog-m1",
    instruction: "Para ihop det svenska ordet med dess danska motsvarighet.",
    pairs: [
      { left: "rolig", right: "sjov" },
      { left: "gata", right: "gade" },
      { left: "pojke", right: "dreng" },
      { left: "trevlig", right: "hyggelig" },
    ],
  },
  {
    type: "match",
    id: "ns-hog-m2",
    instruction: "Para ihop det svenska ordet med dess norska motsvarighet.",
    pairs: [
      { left: "tokig", right: "gal" },
      { left: "fönster", right: "vindu" },
      { left: "kul", right: "gøy" },
      { left: "frukost", right: "frokost" },
    ],
  },
  {
    type: "match",
    id: "ns-hog-m3",
    instruction: "Para ihop minoritetsspråket med den region där det traditionellt talas mest.",
    pairs: [
      { left: "Finska", right: "Tornedalen och Mälardalen" },
      { left: "Meänkieli", right: "Tornedalen" },
      { left: "Samiska", right: "Norra Sverige (Sápmi)" },
      { left: "Jiddisch", right: "Spritt över hela Sverige (inget kärnområde)" },
    ],
  },
  {
    type: "match",
    id: "ns-hog-m4",
    instruction: "Para ihop språket med rätt språkfamilj.",
    pairs: [
      { left: "Svenska", right: "Nordgermanska (indoeuropeiska)" },
      { left: "Finska", right: "Finsk-ugriska (uraliska)" },
      { left: "Samiska", right: "Finsk-ugriska (uraliska)" },
      { left: "Romani chib", right: "Indoariska (indoeuropeiska)" },
    ],
  },
  // --- Reading comprehension (4) ---
  {
    type: "reading-comprehension",
    id: "ns-hog-rc1",
    instruction: "Läs den danska texten och svara på frågorna.",
    language: "danska",
    text: "Min familie bor i en lille by tæt på havet. Hver morgen går min far ned til stranden med vores hund. Han kan godt lide at se solen stå op over vandet. Min mor arbejder på et bibliotek i byen, og hun tager cyklen hver dag. Om aftenen spiser vi sammen og taler om dagen.",
    questions: [
      {
        prompt: "Var bor familjen?",
        options: [
          "I en stor stad vid havet",
          "I en liten by nära havet",
          "På en bondgård långt från havet",
          "I en förort till Köpenhamn",
        ],
        correct: 1,
        explanation:
          "'En lille by tæt på havet' betyder 'en liten by nära havet'. 'Tæt på' är danska för 'nära'.",
      },
      {
        prompt: "Vad gör pappan varje morgon?",
        options: [
          "Han cyklar till jobbet",
          "Han går till stranden med hunden",
          "Han lagar frukost",
          "Han läser tidningen",
        ],
        correct: 1,
        explanation:
          "'Går ned til stranden med vores hund' betyder att han går ner till stranden med deras hund. 'Vores' är danska för 'vår/våra'.",
      },
    ],
  },
  {
    type: "reading-comprehension",
    id: "ns-hog-rc2",
    instruction: "Läs den danska texten och svara på frågorna.",
    language: "danska",
    text: "I skolen lærer vi mange fag. Dansk er mit yndlingsfag, fordi jeg elsker at læse bøger. Min ven Peter kan bedst lide matematik. Han siger at tal er som et sprog man kan lære. Vores lærer fortæller os at det er vigtigt at være god til flere fag.",
    questions: [
      {
        prompt: "Vilket är berättarens favoritämne?",
        options: ["Matematik", "Danska", "Historia", "Engelska"],
        correct: 1,
        explanation:
          "'Dansk er mit yndlingsfag' betyder 'danska är mitt favoritämne'. 'Yndlingsfag' är danska för 'favoritämne'.",
      },
      {
        prompt: "Varför gillar Peter matematik?",
        options: [
          "Han vill bli ingenjör",
          "Han tycker att tal är som ett språk man kan lära sig",
          "Hans pappa är matematiklärare",
          "Det är det lättaste ämnet",
        ],
        correct: 1,
        explanation:
          "'Tal er som et sprog man kan lære' betyder 'tal är som ett språk man kan lära sig'. Danska 'sprog' motsvarar svenska 'språk'.",
      },
    ],
  },
  {
    type: "reading-comprehension",
    id: "ns-hog-rc3",
    instruction: "Läs den norska texten och svara på frågorna.",
    language: "norska",
    text: "I helgen dro vi til hytta i fjellet. Det var kaldt ute, men inne var det varmt og koselig. Vi lagde ved på peisen og drakk varm kakao. Barna lekte i snøen hele dagen. Om kvelden lagde mor en god middag med fisk og poteter.",
    questions: [
      {
        prompt: "Vart åkte familjen i helgen?",
        options: [
          "Till stranden",
          "Till stugan i fjällen",
          "Till staden",
          "Till farmor och farfar",
        ],
        correct: 1,
        explanation:
          "'Til hytta i fjellet' betyder 'till stugan i fjällen'. Norskt 'hytta' motsvarar svenskt 'stugan' och 'fjellet' är 'fjällen'.",
      },
      {
        prompt: "Vad åt familjen till middag?",
        options: [
          "Kött och ris",
          "Pizza",
          "Fisk och potatis",
          "Pannkakor",
        ],
        correct: 2,
        explanation:
          "'Fisk og poteter' betyder 'fisk och potatis'. Norskt 'poteter' motsvarar svenskt 'potatis'.",
      },
    ],
  },
  {
    type: "reading-comprehension",
    id: "ns-hog-rc4",
    instruction: "Läs den norska texten och svara på frågorna.",
    language: "norska",
    text: "Bestefar forteller alltid historier fra da han var ung. Han vokste opp på en gård langt nord i Norge. Der hadde de mange dyr: kuer, sauer og hester. Om vinteren var det mørkt nesten hele dagen. Bestefar sier at livet var hardt, men at de alltid hadde det gøy sammen.",
    questions: [
      {
        prompt: "Var växte farfar upp?",
        options: [
          "I en stad i södra Norge",
          "På en gård långt norrut i Norge",
          "I en fiskeby vid kusten",
          "I Oslo",
        ],
        correct: 1,
        explanation:
          "'På en gård langt nord i Norge' betyder 'på en gård långt norrut i Norge'. 'Langt nord' är norskt för 'långt norrut'.",
      },
      {
        prompt: "Hur beskriver farfar livet på gården?",
        options: [
          "Det var lätt och bekvämt",
          "Det var tråkigt och ensamt",
          "Det var hårt men roligt tillsammans",
          "Det var rikt och lyxigt",
        ],
        correct: 2,
        explanation:
          "'Livet var hardt, men at de alltid hadde det gøy sammen' betyder att livet var hårt men att de alltid hade roligt tillsammans. 'Gøy' är norskt för 'kul/roligt'.",
      },
    ],
  },
  // --- Additional Quiz about minority languages (2) ---
  {
    type: "quiz",
    id: "ns-hog-q7",
    prompt: "Vilket av de nationella minoritetsspråken är ett germanskt språk med hebreiska och slaviska inslag?",
    options: ["Meänkieli", "Romani chib", "Jiddisch", "Samiska"],
    correct: 2,
    explanation:
      "Jiddisch är ett germanskt språk som uppstod bland judar i Centraleuropa under medeltiden. Det har en grund av medelhögtyska men innehåller betydande inslag av hebreiska, arameiska och slaviska språk.",
  },
  {
    type: "quiz",
    id: "ns-hog-q8",
    prompt: "Vad är meänkieli och hur förhåller det sig till finska?",
    options: [
      "Det är ett helt orelaterat språk",
      "Det är en varietet av finska som talats i Tornedalen och som erkändes som eget språk år 2000",
      "Det är det samiska ordet för finska",
      "Det är en dialekt av romani chib",
    ],
    correct: 1,
    explanation:
      "Meänkieli ('vårt språk') är en finsk varietet som talats i Tornedalen i hundratals år. Det skiljer sig från riksfinska genom egna ordformer och lånord från svenska. År 2000 erkändes det som ett eget nationellt minoritetsspråk.",
  },
  // --- Additional Match exercises (2) ---
  {
    type: "match",
    id: "ns-hog-m5",
    instruction: "Para ihop minoritetsspråket med den geografiska region där det traditionellt har flest talare.",
    pairs: [
      { left: "Samiska", right: "Fjällområden i Norrbotten och Västerbotten" },
      { left: "Meänkieli", right: "Tornedalen vid finska gränsen" },
      { left: "Romani chib", right: "Spritt över hela Sverige, ingen specifik region" },
      { left: "Finska", right: "Tornedalen, Stockholm och Mälardalen" },
    ],
  },
  {
    type: "match",
    id: "ns-hog-m6",
    instruction: "Para ihop det svenska ordet med dess danska och norska motsvarighet.",
    pairs: [
      { left: "sjukhus", right: "sygehus (da) / sykehus (no)" },
      { left: "glass", right: "is (da) / iskrem (no)" },
      { left: "morgonmål", right: "morgenmad (da) / frokost (no)" },
      { left: "mysig", right: "hyggelig (da) / koselig (no)" },
    ],
  },
  // --- Additional Reading comprehension (2) ---
  {
    type: "reading-comprehension",
    id: "ns-hog-rc5",
    instruction: "Läs den norska texten om skolelivet och svara på frågorna.",
    language: "norska",
    text: "På skolen vår har vi et prosjekt som heter «Språkvenner». Elevene i tiende klasse hjelper yngre elever med leksene sine. Læreren vår sier at vi lærer best når vi forklarer ting til andre. Hver onsdag møtes vi i biblioteket etter skoletid. Det er gøy å jobbe sammen, og mange av de yngre elevene sier at de forstår fagene bedre nå.",
    questions: [
      {
        prompt: "Vad handlar projektet 'Språkvenner' om?",
        options: [
          "Elever lär sig främmande språk",
          "Äldre elever hjälper yngre elever med läxorna",
          "Elever skriver brev till vänner i andra länder",
          "Lärare undervisar extra på kvällarna",
        ],
        correct: 1,
        explanation:
          "'Elevene i tiende klasse hjelper yngre elever med leksene sine' betyder att elever i tionde klass hjälper yngre elever med sina läxor. 'Leksene' är norskt för 'läxorna'.",
      },
      {
        prompt: "När och var träffas eleverna?",
        options: [
          "Varje måndag i klassrummet",
          "Varje onsdag i biblioteket efter skoltid",
          "Varje fredag i matsalen",
          "Varje dag före skolan",
        ],
        correct: 1,
        explanation:
          "'Hver onsdag møtes vi i biblioteket etter skoletid' betyder 'varje onsdag träffas vi i biblioteket efter skoltid'. 'Etter' är norskt för 'efter'.",
      },
      {
        prompt: "Vad säger läraren om att lära sig saker?",
        options: [
          "Att man lär sig bäst genom prov",
          "Att man lär sig bäst när man förklarar för andra",
          "Att man bör läsa mer hemma",
          "Att man lär sig bäst ensam",
        ],
        correct: 1,
        explanation:
          "'Vi lærer best når vi forklarer ting til andre' betyder 'vi lär oss bäst när vi förklarar saker för andra'. 'Forklarer' är norskt för 'förklarar'.",
      },
    ],
  },
  {
    type: "reading-comprehension",
    id: "ns-hog-rc6",
    instruction: "Läs den danska texten om naturen och svara på frågorna.",
    language: "danska",
    text: "Danmark er et fladt land med mange øer. Den største ø er Sjælland, hvor hovedstaden København ligger. Langs kysten kan man finde smukke sandstrande og klitter. Om foråret blomstrer markerne med gule rapsblomster. Mange danskere holder af at gå ture i naturen og samle svampe om efteråret.",
    questions: [
      {
        prompt: "Hur beskrivs Danmarks landskap i texten?",
        options: [
          "Bergigt med djupa dalar",
          "Platt med många öar",
          "Skogigt med stora sjöar",
          "Öken med lite vegetation",
        ],
        correct: 1,
        explanation:
          "'Et fladt land med mange øer' betyder 'ett platt land med många öar'. 'Fladt' är danska för 'platt' och 'øer' för 'öar'.",
      },
      {
        prompt: "Vad gör många danskar gärna på hösten?",
        options: [
          "Badar i havet",
          "Går på tur i naturen och plockar svamp",
          "Åker skidor i bergen",
          "Planterar blommor i trädgården",
        ],
        correct: 1,
        explanation:
          "'Gå ture i naturen og samle svampe om efteråret' betyder 'gå på tur i naturen och plocka svamp på hösten'. 'Efteråret' är danska för 'hösten'.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet (16 övningar)
// ---------------------------------------------------------------------------

const gymnasietExercises: NordiskaSprakExercise[] = [
  // --- Quiz (6) ---
  {
    type: "quiz",
    id: "ns-gym-q1",
    prompt: "Varför förstår svenskar generellt norska bättre än danska?",
    options: [
      "Norska har fler lånord från svenska",
      "Danskt uttal skiljer sig mer från skriftbilden, medan norskt uttal ligger närmare svenskt",
      "Norska och svenska har samma grammatik",
      "Danska är ett helt annat språk som inte är besläktat med svenska",
    ],
    correct: 1,
    explanation:
      "Danskt uttal har genomgått stora förändringar (t.ex. 'det mjuka d', reduktion av konsonanter) som gör det svårare att förstå för svenskar. Norskt uttal, särskilt prosodi och vokalljud, ligger närmare svenskt. Skriftbilden i danska och norska bokmål är däremot mycket lika.",
  },
  {
    type: "quiz",
    id: "ns-gym-q2",
    prompt: "Vad innebär asymmetrisk begriplighet mellan de skandinaviska språken?",
    options: [
      "Att alla skandinaver förstår varandra lika bra",
      "Att vissa språkpar förstår varandra bättre i en riktning än den andra",
      "Att bara vuxna kan förstå grannspråken",
      "Att begripligheten beror helt på utbildningsnivå",
    ],
    correct: 1,
    explanation:
      "Asymmetrisk begriplighet innebär att t.ex. norrmän generellt förstår svenska och danska bättre än vad svenskar och danskar förstår varandra. Norrmän exponeras mer för grannspråken via media och ligger geografiskt och språkligt mellan svenska och danska.",
  },
  {
    type: "quiz",
    id: "ns-gym-q3",
    prompt: "Vilken lag skyddar de nationella minoritetsspråken i Sverige?",
    options: [
      "Grundlagen",
      "Språklagen (2009) och lagen om nationella minoriteter och minoritetsspråk (2009)",
      "Skollagen",
      "Tryckfrihetsförordningen",
    ],
    correct: 1,
    explanation:
      "Sedan 2009 fastslår språklagen att svenska är huvudspråk och att de fem nationella minoritetsspråken ska skyddas och främjas. Lagen om nationella minoriteter ger talare rätt att använda sina språk i kontakt med myndigheter inom förvaltningsområden.",
  },
  {
    type: "quiz",
    id: "ns-gym-q4",
    prompt: "Varför har norska två officiella skriftspråk (bokmål och nynorsk)?",
    options: [
      "De kommer från två olika dialektgrupper i Norge",
      "Bokmål utvecklades ur danskt skriftspråk under unionen, medan nynorsk skapades av Ivar Aasen baserat på norska dialekter",
      "Norge har två olika folk med olika språk",
      "Det var ett krav från EU",
    ],
    correct: 1,
    explanation:
      "Under den danska unionen (1380–1814) användes danskt skriftspråk i Norge. Bokmål är en gradvis förnorskad version av detta. Nynorsk skapades på 1800-talet av Ivar Aasen som samlade in norska dialekter för att skapa ett genuint norskt skriftspråk.",
  },
  {
    type: "quiz",
    id: "ns-gym-q5",
    prompt: "Vad menas med 'skandinavism' i språkpolitisk kontext?",
    options: [
      "Att alla skandinaver bör tala engelska med varandra",
      "Att de skandinaviska länderna bör värna om den inbördes språkförståelsen",
      "Att skandinaviska språk bör slås samman till ett språk",
      "Att Skandinavien bör bli ett land",
    ],
    correct: 1,
    explanation:
      "I språkpolitisk kontext syftar skandinavism på att bevara och stärka möjligheten att använda sitt eget skandinaviska språk i kontakt med grannländerna, i stället för att byta till engelska. Nordiska ministerrådet arbetar aktivt med detta.",
  },
  {
    type: "quiz",
    id: "ns-gym-q6",
    prompt: "Vilken status har isländska jämfört med övriga nordiska språk?",
    options: [
      "Isländska är det mest talade nordiska språket",
      "Isländska har bevarat flest drag från fornnordiskan och är svårförståeligt för skandinaver",
      "Isländska är en dialekt av norska",
      "Isländska och svenska är ömsesidigt begripliga",
    ],
    correct: 1,
    explanation:
      "Isländska har genomgått betydligt färre förändringar än fastlandsspråken sedan vikingatiden. Islänningar kan fortfarande läsa medeltida sagor i original. Språket är dock inte ömsesidigt begripligt med svenska, danska eller norska.",
  },
  // --- Match (4) ---
  {
    type: "match",
    id: "ns-gym-m1",
    instruction: "Para ihop det svenska ordet med dess danska och norska motsvarigheter.",
    pairs: [
      { left: "sjukhus (sv)", right: "sygehus (da) / sykehus (no)" },
      { left: "rolig (sv)", right: "sjov (da) / morsom (no)" },
      { left: "frukost (sv)", right: "morgenmad (da) / frokost (no)" },
      { left: "glass (sv)", right: "is (da) / iskrem (no)" },
    ],
  },
  {
    type: "match",
    id: "ns-gym-m2",
    instruction: "Para ihop minoritetsspråket med ett centralt faktum om det.",
    pairs: [
      { left: "Finska", right: "Ca 200 000–250 000 talare i Sverige, störst av minoritetsspråken" },
      { left: "Meänkieli", right: "Tornedalsfinsk varietet, erkänt som eget språk år 2000" },
      { left: "Samiska", right: "Ursprungsfolkets språk med flera varieteter (nord-, lule-, sydsam.)" },
      { left: "Jiddisch", right: "Germanskt språk med hebreiska och slaviska inslag" },
    ],
  },
  {
    type: "match",
    id: "ns-gym-m3",
    instruction: "Para ihop det språkpolitiska begreppet med rätt förklaring.",
    pairs: [
      { left: "Förvaltningsområde", right: "Kommun där minoritetsspråk har särskilda rättigheter" },
      { left: "Språklagen", right: "Lag som slår fast att svenska är huvudspråk i Sverige" },
      { left: "Nordiska språkkonventionen", right: "Avtal om rätt att använda sitt nordiska språk i grannländerna" },
      { left: "Språkbyte (language shift)", right: "När en grupp går över från sitt ursprungliga språk till majoritetsspråket" },
    ],
  },
  {
    type: "match",
    id: "ns-gym-m4",
    instruction: "Para ihop det falska vänskapet (falskt kognater) med rätt förklaring.",
    pairs: [
      { left: "rolig (da) = lugn, stilla", right: "Inte samma som svenska 'rolig' (= kul)" },
      { left: "rar (da/no) = söt, snäll", right: "Inte samma som svenska 'rar' (= udda, konstig)" },
      { left: "grine (da) = gråta", right: "Inte samma som svenska 'grina' (= le/skratta)" },
      { left: "by (no) = stad", right: "Inte samma som svenska 'by' (= liten ort)" },
    ],
  },
  // --- Reading comprehension (6) ---
  {
    type: "reading-comprehension",
    id: "ns-gym-rc1",
    instruction: "Läs den danska texten och svara på frågorna.",
    language: "danska",
    text: "København er Danmarks hovedstad og den største by i landet. Byen ligger på øen Sjælland ved Øresund. Mange turister besøger byen for at se Den Lille Havfrue, Tivoli og de farverige huse ved Nyhavn. Københavnerne er kendt for at cykle overalt, og byen har et af verdens bedste cykelnetværk. Om vinteren kan det være koldt og mørkt, men byens caféer og restauranter giver en varm stemning.",
    questions: [
      {
        prompt: "Var ligger Köpenhamn?",
        options: [
          "På halvön Jylland",
          "På ön Själland vid Öresund",
          "På ön Fyn",
          "Vid Nordsjön",
        ],
        correct: 1,
        explanation:
          "'Øen Sjælland ved Øresund' betyder 'ön Själland vid Öresund'. Danskans 'ø' motsvarar svenskans 'ö'.",
      },
      {
        prompt: "Vad är köpenhamnare kända för enligt texten?",
        options: [
          "Att åka tunnelbana",
          "Att cykla överallt",
          "Att springa maraton",
          "Att åka färja",
        ],
        correct: 1,
        explanation:
          "'At cykle overalt' betyder 'att cykla överallt'. Danskans 'overalt' är samma ord som svenskans 'överallt'.",
      },
      {
        prompt: "Vad ger en 'varm stemning' på vintern?",
        options: [
          "Julgranarna i parkerna",
          "Stadens kaféer och restauranger",
          "Värmelamporna på torgen",
          "De varma källorna",
        ],
        correct: 1,
        explanation:
          "'Stemning' är danska för 'stämning'. Kafé- och restaurangkulturen beskrivs som det som ger värme under de kalla vintermånaderna.",
      },
    ],
  },
  {
    type: "reading-comprehension",
    id: "ns-gym-rc2",
    instruction: "Läs den danska texten och svara på frågorna.",
    language: "danska",
    text: "Mange unge danskere vælger at bruge engelsk i stedet for dansk, når de taler med svenskere og nordmænd. Det bekymrer sprogforskere, som mener at den nordiske sprogforståelse er ved at forsvinde. Undersøgelser viser at unge skandinaver forstår hinanden dårligere end tidligere generationer. Nogle forskere foreslår at skolerne bør undervise mere i nabosprog for at bevare den fælles nordiske kultur.",
    questions: [
      {
        prompt: "Vad oroar språkforskarna enligt texten?",
        options: [
          "Att danska håller på att dö ut",
          "Att den nordiska språkförståelsen håller på att försvinna",
          "Att engelskan förbjuds i Norden",
          "Att unga inte lär sig skriva",
        ],
        correct: 1,
        explanation:
          "'Den nordiske sprogforståelse er ved at forsvinde' betyder 'den nordiska språkförståelsen håller på att försvinna'. 'Ved at' är danskans sätt att uttrycka 'håller på att'.",
      },
      {
        prompt: "Vad föreslår forskarna som lösning?",
        options: [
          "Att alla skandinaver ska lära sig engelska bättre",
          "Att skolorna bör undervisa mer i grannspråk",
          "Att man inför ett gemensamt skandinaviskt språk",
          "Att man förbjuder engelska i skolan",
        ],
        correct: 1,
        explanation:
          "'Undervise mere i nabosprog' betyder 'undervisa mer i grannspråk'. 'Nabosprog' är danska för 'grannspråk' (nabo = granne, sprog = språk).",
      },
    ],
  },
  {
    type: "reading-comprehension",
    id: "ns-gym-rc3",
    instruction: "Läs den danska texten och svara på frågorna.",
    language: "danska",
    text: "Det danske sprog har gennemgået store forandringer i udtalen de sidste hundrede år. Mange konsonanter er blevet svagere eller er helt forsvundet. Det gælder for eksempel det bløde 'd', som ikke findes i svensk eller norsk. Forskere kalder det 'det store konsonantfald'. Disse ændringer er en vigtig årsag til at danskere er sværere at forstå for svenskere end nordmænd er.",
    questions: [
      {
        prompt: "Vilken förändring har danskan genomgått enligt texten?",
        options: [
          "Danskan har fått fler vokaler",
          "Många konsonanter har försvagats eller försvunnit",
          "Danskan har blivit mer lik svenska",
          "Danskan har lånat in fler ord från engelska",
        ],
        correct: 1,
        explanation:
          "'Mange konsonanter er blevet svagere eller er helt forsvundet' beskriver hur danskt uttal har förändrats genom att konsonanter försvagats eller fallit bort helt.",
      },
      {
        prompt: "Varför är danskar svårare att förstå för svenskar än norrmän?",
        options: [
          "Danskar talar för snabbt",
          "Uttalssförändringarna har gjort danskan mer olik svenska",
          "Danskar använder för många engelska ord",
          "Danskan har helt annan grammatik",
        ],
        correct: 1,
        explanation:
          "Texten pekar på att konsonantförändringarna ('det store konsonantfald') är en viktig orsak till att danskan blivit svårare att förstå för svenskar.",
      },
    ],
  },
  {
    type: "reading-comprehension",
    id: "ns-gym-rc4",
    instruction: "Läs den norska texten och svara på frågorna.",
    language: "norska",
    text: "Norge har to offisielle skriftspråk: bokmål og nynorsk. Bokmål utviklet seg fra dansk skriftspråk, som ble brukt i Norge da landet var i union med Danmark. Nynorsk ble skapt av Ivar Aasen på 1800-tallet. Han reiste rundt i landet og samlet inn dialekter for å lage et skriftspråk som var basert på norsk talemål. I dag bruker omtrent 85 prosent av befolkningen bokmål som sitt hovedskriftspråk.",
    questions: [
      {
        prompt: "Varför har Norge två skriftspråk?",
        options: [
          "Norge har två officiella talade språk",
          "Bokmål kommer från danskan och nynorsk skapades ur norska dialekter",
          "Nynorsk är ett forntida norskt språk",
          "EU krävde att Norge skulle ha två skriftspråk",
        ],
        correct: 1,
        explanation:
          "Texten förklarar att bokmål utvecklades ur danskt skriftspråk under unionen, medan Ivar Aasen skapade nynorsk genom att samla in norska dialekter.",
      },
      {
        prompt: "Hur stor andel av norrmännen använder bokmål?",
        options: [
          "Ungefär 50 procent",
          "Ungefär 65 procent",
          "Ungefär 85 procent",
          "Ungefär 95 procent",
        ],
        correct: 2,
        explanation:
          "'Omtrent 85 prosent' betyder 'ungefär 85 procent'. Norskt 'omtrent' motsvarar svenskt 'ungefär'.",
      },
    ],
  },
  {
    type: "reading-comprehension",
    id: "ns-gym-rc5",
    instruction: "Läs den norska texten och svara på frågorna.",
    language: "norska",
    text: "Samene er et urfolk som har levd i nordlige deler av Norge, Sverige, Finland og Russland i tusenvis av år. Det samiske språket har mange ord for snø og reinsdyr som ikke finnes på norsk eller svensk. I dag kjemper mange samer for å bevare språket sitt, fordi færre unge lærer det som morsmål. Flere kommuner i Nord-Norge har samisk som offisielt språk ved siden av norsk.",
    questions: [
      {
        prompt: "I vilka länder bor det samer enligt texten?",
        options: [
          "Bara i Norge och Sverige",
          "I Norge, Sverige, Finland och Ryssland",
          "I alla nordiska länder",
          "Bara i norra Norge",
        ],
        correct: 1,
        explanation:
          "'Norge, Sverige, Finland og Russland' — texten nämner alla fyra länder där samer traditionellt har bott.",
      },
      {
        prompt: "Vilket hot mot samiska nämns i texten?",
        options: [
          "Att språket förbjuds av myndigheterna",
          "Att färre unga lär sig det som modersmål",
          "Att det inte finns skriftspråk för samiska",
          "Att samiskan påverkas för mycket av engelska",
        ],
        correct: 1,
        explanation:
          "'Færre unge lærer det som morsmål' betyder 'färre unga lär sig det som modersmål'. Detta är ett hot mot alla minoritetsspråk — om barnen inte lär sig språket riskerar det att dö ut.",
      },
      {
        prompt: "Vilken ställning har samiska i vissa norska kommuner?",
        options: [
          "Det är förbjudet i skolan",
          "Det är officiellt språk vid sidan av norska",
          "Det talas bara i hemmet",
          "Det ersätter norska helt",
        ],
        correct: 1,
        explanation:
          "'Samisk som offisielt språk ved siden av norsk' betyder att samiska är officiellt språk vid sidan av norska i flera nordnorska kommuner.",
      },
    ],
  },
  {
    type: "reading-comprehension",
    id: "ns-gym-rc6",
    instruction: "Läs den norska texten och svara på frågorna.",
    language: "norska",
    text: "Når skandinaver møtes, oppstår det noen ganger morsomme misforståelser. Det svenske ordet 'rolig' betyr 'morsom' på norsk, men på dansk betyr 'rolig' det samme som 'lugn'. En nordmann som sier at noe er 'gøy' kan forvirre en danske, fordi ordet ikke finnes på dansk. Disse falske vennene mellom språkene viser at selv nært beslektede språk kan ha viktige forskjeller.",
    questions: [
      {
        prompt: "Vad kallas de ord som ser lika ut men betyder olika saker på grannspråken?",
        options: [
          "Lånord",
          "Falska vänner",
          "Dialektord",
          "Nyord",
        ],
        correct: 1,
        explanation:
          "'Falske vennene mellom språkene' — texten talar om 'falska vänner' (false friends), ord som ser lika ut men har olika betydelse i besläktade språk.",
      },
      {
        prompt: "Vad illustrerar texten om nordisk språkförståelse?",
        options: [
          "Att skandinaver aldrig missförstår varandra",
          "Att även nära besläktade språk kan ha viktiga skillnader",
          "Att alla bör lära sig engelska i stället",
          "Att missförstånden beror på dålig utbildning",
        ],
        correct: 1,
        explanation:
          "'Selv nært beslektede språk kan ha viktige forskjeller' — texten visar att trots den nära släktskapen finns det betydelsefulla skillnader som kan leda till missförstånd.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// All exercises
// ---------------------------------------------------------------------------

const ALL_EXERCISES: NordiskaSprakExerciseSet[] = [
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

export function getNordiskaSprakExercises(
  ageGroup: AgeGroup,
): NordiskaSprakExercise[] {
  const exact = ALL_EXERCISES.find((s) => s.ageGroup === ageGroup);
  if (exact && exact.exercises.length > 0) return exact.exercises;

  for (const fallback of AGE_GROUP_FALLBACKS[ageGroup]) {
    const fb = ALL_EXERCISES.find((s) => s.ageGroup === fallback);
    if (fb && fb.exercises.length > 0) return fb.exercises;
  }

  return [];
}
