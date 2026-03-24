import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type LittBegreppExerciseType = "quiz" | "match" | "analysis";

export interface LittBegreppQuiz {
  type: "quiz";
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface LittBegreppMatch {
  type: "match";
  id: string;
  instruction: string;
  pairs: { left: string; right: string }[];
}

export interface LittBegreppAnalysis {
  type: "analysis";
  id: string;
  instruction: string;
  textExcerpt: string;
  textSource: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export type LittBegreppExercise =
  | LittBegreppQuiz
  | LittBegreppMatch
  | LittBegreppAnalysis;

export interface LittBegreppExerciseSet {
  ageGroup: AgeGroup;
  exercises: LittBegreppExercise[];
}

// ---------------------------------------------------------------------------
// Data — Högstadiet (18 övningar)
// ---------------------------------------------------------------------------

const hogstadietExercises: LittBegreppExercise[] = [
  // --- Quiz (8) ---
  {
    type: "quiz",
    id: "lb-hog-q1",
    prompt: "Vad menas med berättarperspektiv i en text?",
    options: [
      "Vilken genre texten tillhör",
      "Vem som berättar och hur berättaren ser händelserna",
      "Hur många karaktärer som finns i texten",
      "Vilken tidsperiod texten utspelar sig i",
    ],
    correct: 1,
    explanation:
      "Berättarperspektivet handlar om vem som berättar historien och hur berättaren förhåller sig till det som händer. Det kan till exempel vara en jag-berättare som deltar i handlingen eller en allvetande berättare som ser allt.",
  },
  {
    type: "quiz",
    id: "lb-hog-q2",
    prompt: "Vad är skillnaden mellan tema och motiv i en litterär text?",
    options: [
      "Tema och motiv betyder samma sak",
      "Temat är textens huvudbudskap medan motivet är återkommande element som bygger upp temat",
      "Temat handlar om formen och motivet om innehållet",
      "Motivet är alltid en person och temat en plats",
    ],
    correct: 1,
    explanation:
      "Temat är textens övergripande budskap eller fråga, till exempel ensamhet eller rättvisa. Motivet är konkreta återkommande element — som en resa, ett brev eller en storm — som bidrar till att gestalta temat.",
  },
  {
    type: "quiz",
    id: "lb-hog-q3",
    prompt: "Vilken mening innehåller en metafor?",
    options: [
      "Hon sprang snabbt som en gasell.",
      "Tiden är pengar.",
      "Det regnade kraftigt hela dagen.",
      "Han log brett mot publiken.",
    ],
    correct: 1,
    explanation:
      "En metafor jämför två saker utan att använda 'som' eller 'liksom'. I 'Tiden är pengar' beskrivs tiden som om den vore pengar. 'Snabbt som en gasell' däremot är en liknelse eftersom den använder ordet 'som'.",
  },
  {
    type: "quiz",
    id: "lb-hog-q4",
    prompt: "Vilket av alternativen är en liknelse?",
    options: [
      "Havet var ett svart tält.",
      "Molnen seglade över himlen.",
      "Hennes ögon lyste som stjärnor.",
      "Sorgen dränkte honom helt.",
    ],
    correct: 2,
    explanation:
      "En liknelse är en jämförelse som använder 'som' eller 'liksom'. I 'Hennes ögon lyste som stjärnor' jämförs ögonen med stjärnor med hjälp av ordet 'som'. De andra exemplen är metaforer.",
  },
  {
    type: "quiz",
    id: "lb-hog-q5",
    prompt: "Vad innebär ironi i en litterär text?",
    options: [
      "Att texten är humoristisk",
      "Att författaren menar motsatsen till det som skrivs, eller att läsaren vet mer än karaktären",
      "Att texten innehåller överdrifter",
      "Att berättaren är opålitlig",
    ],
    correct: 1,
    explanation:
      "Ironi innebär att det finns en skillnad mellan det som sägs och det som menas, eller mellan vad en karaktär tror och vad läsaren vet. Till exempel kan en karaktär säga 'Vilken underbar dag!' när allt går fel.",
  },
  {
    type: "quiz",
    id: "lb-hog-q6",
    prompt: "Vad är en symbol i litteraturen?",
    options: [
      "Ett ord som stavas fel med flit",
      "Ett konkret föremål eller bild som representerar något abstrakt",
      "En typ av rim",
      "En synonym till tema",
    ],
    correct: 1,
    explanation:
      "En symbol är något konkret — ett föremål, en färg, ett djur — som representerar något mer abstrakt. Till exempel kan en röd ros symbolisera kärlek och en orm symbolisera ondska eller frestelse.",
  },
  {
    type: "quiz",
    id: "lb-hog-q7",
    prompt: "Vilken typ av berättarperspektiv används i meningen: 'Jag kunde inte sluta tänka på vad hon hade sagt.'?",
    options: [
      "Allvetande berättare",
      "Tredjepersonsberättare",
      "Förstapersonsberättare (jag-berättare)",
      "Andrapersonsberättare",
    ],
    correct: 2,
    explanation:
      "Ordet 'jag' visar att det är en förstapersonsberättare, ofta kallad jag-berättare. Berättaren deltar själv i handlingen och vi ser allt genom denna persons ögon.",
  },
  {
    type: "quiz",
    id: "lb-hog-q8",
    prompt: "Vad är ett vanligt motiv i litteraturen?",
    options: [
      "Typsnitt och sidbrytning",
      "Resan som förändrar huvudpersonen",
      "Antalet kapitel i boken",
      "Vilken förlag som gett ut boken",
    ],
    correct: 1,
    explanation:
      "Resan är ett av litteraturens allra vanligaste motiv. Det handlar inte bara om en fysisk resa utan ofta också om en inre utveckling — huvudpersonen lär sig något nytt om sig själv eller om världen.",
  },
  // --- Match (5) ---
  {
    type: "match",
    id: "lb-hog-m1",
    instruction: "Para ihop det litterära begreppet med rätt förklaring.",
    pairs: [
      { left: "Metafor", right: "Jämförelse utan 'som'" },
      { left: "Liknelse", right: "Jämförelse med 'som' eller 'liksom'" },
      { left: "Symbol", right: "Konkret sak som står för något abstrakt" },
      { left: "Ironi", right: "Man menar motsatsen till det som sägs" },
    ],
  },
  {
    type: "match",
    id: "lb-hog-m2",
    instruction: "Para ihop exemplet med rätt litterärt begrepp.",
    pairs: [
      { left: "Livet är en berg-och-dalbana", right: "Metafor" },
      { left: "Hon var stark som ett lejon", right: "Liknelse" },
      { left: "Den vita duvan på omslaget", right: "Symbol" },
      { left: "Vilken trevlig väderlek! (under storm)", right: "Ironi" },
    ],
  },
  {
    type: "match",
    id: "lb-hog-m3",
    instruction: "Para ihop berättarperspektivet med rätt beskrivning.",
    pairs: [
      { left: "Jag-berättare", right: "Berättaren är en del av handlingen" },
      { left: "Allvetande berättare", right: "Berättaren kan se in i alla karaktärers tankar" },
      { left: "Begränsad tredjeperson", right: "Berättaren följer en karaktär utifrån" },
      { left: "Opålitlig berättare", right: "Berättaren ger en vinklad bild av verkligheten" },
    ],
  },
  {
    type: "match",
    id: "lb-hog-m4",
    instruction: "Para ihop motivet med det tema det ofta hör ihop med.",
    pairs: [
      { left: "Resan", right: "Personlig utveckling" },
      { left: "Stormen", right: "Inre konflikt" },
      { left: "Spegeln", right: "Självkännedom" },
      { left: "Mörkret", right: "Rädsla eller okunnighet" },
    ],
  },
  {
    type: "match",
    id: "lb-hog-m5",
    instruction: "Para ihop symbolen med vad den ofta representerar i litteratur.",
    pairs: [
      { left: "Röd ros", right: "Kärlek" },
      { left: "Korsväg", right: "Vägval i livet" },
      { left: "Vatten", right: "Förändring eller rening" },
      { left: "Klocka", right: "Tiden som går" },
    ],
  },
  // --- Analysis (5) ---
  {
    type: "analysis",
    id: "lb-hog-a1",
    instruction: "Läs textutdraget och svara på frågan.",
    textExcerpt:
      "Skogen var en katedral av grönt ljus. Stammarna reste sig som pelare mot det höga lövtaket, och tystnaden vilade tung som en filt över marken.",
    textSource: "Novellutdrag (bearbetat)",
    prompt: "Vilka litterära grepp används i det här utdraget?",
    options: [
      "Bara liknelser",
      "Bara metaforer",
      "Både metaforer och liknelser",
      "Ironi",
    ],
    correct: 2,
    explanation:
      "'Skogen var en katedral' är en metafor (ingen jämförelseord). 'Stammarna reste sig som pelare' och 'tystnaden vilade tung som en filt' är liknelser (med 'som'). Utdraget blandar alltså båda greppen.",
  },
  {
    type: "analysis",
    id: "lb-hog-a2",
    instruction: "Läs textutdraget och svara på frågan.",
    textExcerpt:
      "Jag ville inte gå dit igen. Varje gång jag steg in genom dörren kände jag hur väggarna krympte runt mig, hur luften blev tjockare.",
    textSource: "Novellutdrag (bearbetat)",
    prompt: "Vilket berättarperspektiv används?",
    options: [
      "Allvetande berättare",
      "Tredjepersonsberättare",
      "Förstapersonsberättare",
      "Andrapersonsberättare",
    ],
    correct: 2,
    explanation:
      "Ordet 'jag' visar tydligt att det är en förstapersonsberättare. Vi upplever händelserna genom berättarens egna känslor och sinnesintryck — väggarna som krymper och luften som blir tjockare speglar berättarens ångest.",
  },
  {
    type: "analysis",
    id: "lb-hog-a3",
    instruction: "Läs textutdraget och svara på frågan.",
    textExcerpt:
      "Fågeln satt i sin bur och sjöng medan pojken stod vid fönstret och tittade ut mot skogen. Han hade aldrig satt sin fot utanför staketet.",
    textSource: "Novellutdrag (bearbetat)",
    prompt: "Vad symboliserar fågeln i buren troligen i det här sammanhanget?",
    options: [
      "Glädje och frihet",
      "Instängdhet och längtan efter frihet",
      "Vänskap och lojalitet",
      "Naturens skönhet",
    ],
    correct: 1,
    explanation:
      "Fågeln i buren fungerar som en symbol för pojkens egen situation — han är instängd (har aldrig lämnat staketet) och längtar efter frihet (tittar ut mot skogen). Fågelns sång kan också ses som en kontrast till pojkens begränsade tillvaro.",
  },
  {
    type: "analysis",
    id: "lb-hog-a4",
    instruction: "Läs textutdraget och svara på frågan.",
    textExcerpt:
      "Du ser ju hur bra allting går, sa pappa med ett leende. Ute regnade det, bilen hade gått sönder och grannens hund hade ätit upp middagen.",
    textSource: "Elevtext, åk 8",
    prompt: "Vilket litterärt grepp används i pappans replik?",
    options: [
      "Metafor",
      "Symbol",
      "Ironi",
      "Liknelse",
    ],
    correct: 2,
    explanation:
      "Pappan säger att allting går bra, men verkligheten visar raka motsatsen — det regnar, bilen är trasig och middagen är förstörd. Det är ett klassiskt exempel på ironi: det som sägs är motsatsen till hur det verkligen är.",
  },
  {
    type: "analysis",
    id: "lb-hog-a5",
    instruction: "Läs textutdraget och svara på frågan.",
    textExcerpt:
      "Havet låg stilla den morgonen, som en spegel av grått glas. Men under ytan rörde sig strömmarna, osynliga och envisa.",
    textSource: "Novellutdrag (bearbetat)",
    prompt: "Vilket tema antyds genom beskrivningen av havet?",
    options: [
      "Att naturen är vacker",
      "Att det finns dolda krafter under en lugn yta",
      "Att havet är farligt",
      "Att det är morgon",
    ],
    correct: 1,
    explanation:
      "Kontrasten mellan havets stilla yta och de osynliga strömmarna under ytan antyder ett tema om att det under en lugn fasad kan dölja sig starka krafter. Havet fungerar som en symbol för känslor eller konflikter som inte syns utåt.",
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet (20 övningar)
// ---------------------------------------------------------------------------

const gymnasietExercises: LittBegreppExercise[] = [
  // --- Quiz (8) ---
  {
    type: "quiz",
    id: "lb-gym-q1",
    prompt: "Vad innebär begreppet fokalisering i narratologin?",
    options: [
      "Hur snabbt berättelsen rör sig framåt",
      "Genom vems synvinkel händelserna upplevs och filtreras",
      "Vilken genre texten tillhör",
      "Hur dialogerna är uppbyggda",
    ],
    correct: 1,
    explanation:
      "Fokalisering handlar om genom vems 'filter' läsaren upplever berättelsen. Det kan vara intern fokalisering (vi ser genom en karaktärs ögon) eller extern (en utomstående observatör). Begreppet myntades av narratologen Gérard Genette.",
  },
  {
    type: "quiz",
    id: "lb-gym-q2",
    prompt: "Vad är en allegori?",
    options: [
      "En kort dikt med fast rimmönster",
      "En berättelse där karaktärer och händelser genomgående representerar abstrakta idéer",
      "Ett citat från en annan text",
      "En retorisk fråga i slutet av en text",
    ],
    correct: 1,
    explanation:
      "En allegori är en utvidgad metafor där hela berättelsen kan läsas på två plan — det bokstavliga och det symboliska. Ett klassiskt exempel är Orwells 'Djurfarmen' där djuren representerar politiska aktörer i Sovjet.",
  },
  {
    type: "quiz",
    id: "lb-gym-q3",
    prompt: "Vad innebär anafor som stilfigur?",
    options: [
      "Att man upprepar samma ord eller fras i början av flera meningar eller versrader",
      "Att man hänvisar till en annan text",
      "Att man medvetet stavar ord fel",
      "Att man använder motsatspar",
    ],
    correct: 0,
    explanation:
      "Anafor innebär att samma ord eller fras upprepas i början av flera på varandra följande satser eller rader. Greppen skapar rytm och betoning. Exempel: 'Jag ser dig. Jag hör dig. Jag förstår dig.'",
  },
  {
    type: "quiz",
    id: "lb-gym-q4",
    prompt: "Vad är en allusion i en litterär text?",
    options: [
      "En direkt citering av en annan text",
      "En dold eller indirekt hänvisning till en annan text, händelse eller person",
      "En typ av berättarperspektiv",
      "Ett annat ord för sammanfattning",
    ],
    correct: 1,
    explanation:
      "En allusion är en anspelning — en indirekt referens till något utanför texten, som en känd bok, myt eller historisk händelse. Läsaren förväntas känna igen referensen för att fullt ut förstå textens mening.",
  },
  {
    type: "quiz",
    id: "lb-gym-q5",
    prompt: "Vad innebär intertextualitet?",
    options: [
      "Att en text bara handlar om andra texter",
      "Att alla texter står i relation till andra texter och att mening skapas genom dessa kopplingar",
      "Att texten saknar sammanhang",
      "Att texten är skriven av flera författare",
    ],
    correct: 1,
    explanation:
      "Intertextualitet innebär att texter alltid förhåller sig till andra texter — genom citat, allusioner, parodi eller genrekonventioner. Julia Kristeva myntade begreppet utifrån Michail Bachtins teori om dialogism.",
  },
  {
    type: "quiz",
    id: "lb-gym-q6",
    prompt: "Vad skiljer intern fokalisering från extern fokalisering?",
    options: [
      "Intern fokalisering är skriven på vers, extern på prosa",
      "Vid intern fokalisering vet läsaren mer än karaktären, vid extern vet läsaren mindre",
      "Vid intern fokalisering upplever läsaren berättelsen genom en karaktärs medvetande, vid extern ser läsaren bara yttre handlingar",
      "Det finns ingen skillnad",
    ],
    correct: 2,
    explanation:
      "Intern fokalisering innebär att berättelsen filtreras genom en karaktärs tankar och känslor — vi är 'inne i' karaktären. Vid extern fokalisering rapporteras bara det yttre: handlingar och dialog, utan insyn i tankar. Genette kallade detta nollfokalisering respektive extern fokalisering.",
  },
  {
    type: "quiz",
    id: "lb-gym-q7",
    prompt: "Vad är typiskt för en allegorisk berättelse?",
    options: [
      "Den saknar handling",
      "Den kan läsas på två plan — bokstavligt och symboliskt — genomgående",
      "Den är alltid skriven på vers",
      "Den har alltid en lycklig utgång",
    ],
    correct: 1,
    explanation:
      "I en allegori har varje del av berättelsen en dubbel betydelse. Till skillnad från en enkel symbol, som kan förekomma på enstaka ställen, genomsyrar det symboliska planet hela verket. Dantes 'Den gudomliga komedin' är ett klassiskt exempel.",
  },
  {
    type: "quiz",
    id: "lb-gym-q8",
    prompt: "Hur skiljer sig en allusion från ett direkt citat?",
    options: [
      "En allusion är längre än ett citat",
      "En allusion är implicit och förutsätter att läsaren själv gör kopplingen, medan ett citat är explicit",
      "Det finns ingen skillnad",
      "Ett citat är alltid kortare än en allusion",
    ],
    correct: 1,
    explanation:
      "En allusion anspeler indirekt på något — läsaren måste själv förstå referensen. Ett direkt citat markerar tydligt att orden kommer från en annan källa. Allusionen kräver alltså mer av läsarens förkunskaper.",
  },
  // --- Match (5) ---
  {
    type: "match",
    id: "lb-gym-m1",
    instruction: "Para ihop det litterära begreppet med rätt förklaring.",
    pairs: [
      { left: "Allegori", right: "Berättelse med genomgående symboliskt dubbelplan" },
      { left: "Anafor", right: "Upprepning av ord i början av meningar" },
      { left: "Allusion", right: "Indirekt hänvisning till annan text eller händelse" },
      { left: "Intertextualitet", right: "Texters relation till och beroende av andra texter" },
    ],
  },
  {
    type: "match",
    id: "lb-gym-m2",
    instruction: "Para ihop begreppet med rätt teoretiker eller ursprung.",
    pairs: [
      { left: "Fokalisering", right: "Gérard Genette" },
      { left: "Intertextualitet", right: "Julia Kristeva" },
      { left: "Allegori", right: "Antikens retorik" },
      { left: "Anafor", right: "Klassisk stilistik" },
    ],
  },
  {
    type: "match",
    id: "lb-gym-m3",
    instruction: "Para ihop fokaliseringstypen med rätt beskrivning.",
    pairs: [
      { left: "Intern fokalisering", right: "Läsaren ser genom karaktärens medvetande" },
      { left: "Extern fokalisering", right: "Läsaren ser bara yttre handlingar, inga tankar" },
      { left: "Nollfokalisering", right: "Berättaren vet mer än karaktärerna" },
      { left: "Variabel fokalisering", right: "Perspektivet växlar mellan flera karaktärer" },
    ],
  },
  {
    type: "match",
    id: "lb-gym-m4",
    instruction: "Para ihop det litterära exemplet med rätt begrepp.",
    pairs: [
      { left: "Orwells Djurfarmen som bild av Sovjet", right: "Allegori" },
      { left: "'Jag kom. Jag såg. Jag segrade.'", right: "Anafor" },
      { left: "Att kalla någon en Romeo", right: "Allusion" },
      { left: "En roman som citerar och kommenterar en äldre roman", right: "Intertextualitet" },
    ],
  },
  {
    type: "match",
    id: "lb-gym-m5",
    instruction: "Para ihop det avancerade begreppet med dess funktion i texten.",
    pairs: [
      { left: "Metafor", right: "Skapar nya betydelser genom överföring" },
      { left: "Symbol", right: "Bär abstrakt mening genom konkret bild" },
      { left: "Ironi", right: "Skapar distans genom dubbelhet" },
      { left: "Fokalisering", right: "Styr läsarens tillgång till information" },
    ],
  },
  // --- Analysis (7) ---
  {
    type: "analysis",
    id: "lb-gym-a1",
    instruction: "Läs textutdraget och identifiera det litterära greppet.",
    textExcerpt:
      "Jag minns. Jag minns hur gatorna luktade efter regn. Jag minns hennes röst i telefonen. Jag minns att jag lovade att komma tillbaka.",
    textSource: "Diktexempel",
    prompt: "Vilken stilfigur dominerar i det här utdraget?",
    options: [
      "Metafor",
      "Allegori",
      "Anafor",
      "Allusion",
    ],
    correct: 2,
    explanation:
      "Upprepningen av 'Jag minns' i början av varje mening är en tydlig anafor. Stilfiguren skapar rytm, betonar minnet som tema och ger texten en nästan besvärjande karaktär.",
  },
  {
    type: "analysis",
    id: "lb-gym-a2",
    instruction: "Läs textutdraget och identifiera det litterära greppet.",
    textExcerpt:
      "Hon stod vid grinden med en kopp kaffe i handen och tittade ut över åkrarna. Erik visste inte att hon redan hade bestämt sig. Han trodde fortfarande att allting kunde bli som förut.",
    textSource: "Romanutdrag (bearbetat för undervisning)",
    prompt: "Vilken typ av fokalisering används här?",
    options: [
      "Intern fokalisering genom Eriks medvetande",
      "Extern fokalisering — vi ser bara yttre handlingar",
      "Nollfokalisering — berättaren vet mer än karaktärerna",
      "Intern fokalisering genom hennes medvetande",
    ],
    correct: 2,
    explanation:
      "Berättaren vet vad både hon har bestämt sig för och vad Erik tror. Denna allvetande position, där berättaren har tillgång till flera karaktärers tankar, kallas nollfokalisering enligt Genettes terminologi.",
  },
  {
    type: "analysis",
    id: "lb-gym-a3",
    instruction: "Läs textutdraget och identifiera det litterära greppet.",
    textExcerpt:
      "Djuren på gården bestämde att alla var lika. Men snart märkte de att grisarna fick äta vid ett eget bord, sova i mjuka sängar och fatta alla beslut utan att fråga de andra.",
    textSource: "Fabelutdrag (bearbetat)",
    prompt: "Vilket litterärt grepp dominerar i berättelsen?",
    options: [
      "Liknelse",
      "Anafor",
      "Allegori",
      "Fokalisering",
    ],
    correct: 2,
    explanation:
      "Berättelsen om djur som inför jämlikhet men där en grupp tar makten fungerar som en allegori — den kan läsas på ett bokstavligt plan (djur på en gård) och ett symboliskt plan (politisk maktkoncentration och korruption).",
  },
  {
    type: "analysis",
    id: "lb-gym-a4",
    instruction: "Läs textutdraget och identifiera det litterära greppet.",
    textExcerpt:
      "Den nye chefen log mot alla, delade ut löften som karameller och talade om transparens. Det var som att se en Caesargestalt kliva in på kontoret.",
    textSource: "Krönika (bearbetat utdrag)",
    prompt: "Vilket litterärt grepp används i den sista meningen?",
    options: [
      "Anafor",
      "Allusion",
      "Allegori",
      "Liknelse",
    ],
    correct: 1,
    explanation:
      "Referensen till en 'Caesargestalt' är en allusion — en indirekt hänvisning till Julius Caesar och den makt och det förräderi som förknippas med honom. Läsaren förväntas känna till historien för att förstå den fulla innebörden.",
  },
  {
    type: "analysis",
    id: "lb-gym-a5",
    instruction: "Läs textutdraget och identifiera det litterära greppet.",
    textExcerpt:
      "Han gick längs floden utan att veta vart den ledde. Vattnet var brunt och trött, som han själv. Ibland stannade han och lyssnade på strömmen, som om den hade ett svar att ge.",
    textSource: "Novellutdrag (bearbetat)",
    prompt: "Hur fungerar floden i det här utdraget?",
    options: [
      "Som en ren landskapsbeskrivning utan djupare mening",
      "Som en allusion till en känd text",
      "Som en symbol för livsresan och sökandet efter mening",
      "Som en anafor",
    ],
    correct: 2,
    explanation:
      "Floden fungerar som en symbol. Att den leder någonstans okänt speglar mannens livssituation. Vattnet som är 'brunt och trött' speglar hans eget tillstånd. Floden representerar livsresan och det ovetbara som ligger framför.",
  },
  {
    type: "analysis",
    id: "lb-gym-a6",
    instruction: "Läs textutdraget och identifiera det litterära greppet.",
    textExcerpt:
      "Sara satt i klassrummet och stirrade ut genom fönstret. Utanför flög en falk i stora cirklar över fältet. Hon undrade hur det skulle vara att bara kunna lyfta och försvinna.",
    textSource: "Novellutdrag (bearbetat)",
    prompt: "Vilken typ av fokalisering används i utdraget?",
    options: [
      "Extern fokalisering — vi ser bara vad som sker utifrån",
      "Nollfokalisering — berättaren är allvetande",
      "Intern fokalisering — vi upplever Saras tankar inifrån",
      "Variabel fokalisering — vi byter mellan flera perspektiv",
    ],
    correct: 2,
    explanation:
      "Vi har tillgång till Saras inre tankar — hon 'undrade hur det skulle vara' — vilket visar att berättelsen filtreras genom hennes medvetande. Det är intern fokalisering: läsaren upplever världen genom Saras sinne.",
  },
  {
    type: "analysis",
    id: "lb-gym-a7",
    instruction: "Läs textutdraget och identifiera det litterära greppet.",
    textExcerpt:
      "De möttes i en trädgård full av äppelträd. Han räckte henne ett äpple och sa att det var det bästa han kunde erbjuda. Hon tog det, bet i det och log — men kände en bitter smak.",
    textSource: "Novellutdrag (bearbetat)",
    prompt: "Vilka litterära grepp samverkar i utdraget?",
    options: [
      "Anafor och metafor",
      "Allusion (till syndafallsmyten) och symbol (äpplet)",
      "Allegori och fokalisering",
      "Ironi och liknelse",
    ],
    correct: 1,
    explanation:
      "Äpplet som erbjuds i en trädgård är en allusion till syndafallsberättelsen i Bibeln. Samtidigt fungerar äpplet som en symbol — det verkar vara en gåva men lämnar en 'bitter smak', precis som den bibliska kunskapens frukt.",
  },
];

// ---------------------------------------------------------------------------
// All exercises
// ---------------------------------------------------------------------------

const ALL_EXERCISES: LittBegreppExerciseSet[] = [
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

export function getLittBegreppExercises(
  ageGroup: AgeGroup,
): LittBegreppExercise[] {
  const exact = ALL_EXERCISES.find((s) => s.ageGroup === ageGroup);
  if (exact && exact.exercises.length > 0) return exact.exercises;

  for (const fallback of AGE_GROUP_FALLBACKS[ageGroup]) {
    const fb = ALL_EXERCISES.find((s) => s.ageGroup === fallback);
    if (fb && fb.exercises.length > 0) return fb.exercises;
  }

  return [];
}
