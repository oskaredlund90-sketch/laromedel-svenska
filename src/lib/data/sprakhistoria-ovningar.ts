import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SprakhistoriaExerciseType = "quiz" | "match" | "timeline";

export interface SprakhistoriaQuiz {
  type: "quiz";
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface SprakhistoriaMatch {
  type: "match";
  id: string;
  instruction: string;
  pairs: { left: string; right: string }[];
}

export interface SprakhistoriaTimeline {
  type: "timeline";
  id: string;
  instruction: string;
  /** Items the student must place in chronological order */
  items: { label: string; year: number }[];
}

export type SprakhistoriaExercise =
  | SprakhistoriaQuiz
  | SprakhistoriaMatch
  | SprakhistoriaTimeline;

export interface SprakhistoriaExerciseSet {
  ageGroup: AgeGroup;
  exercises: SprakhistoriaExercise[];
}

// ---------------------------------------------------------------------------
// Data — Högstadiet (18 övningar)
// ---------------------------------------------------------------------------

const hogstadietExercises: SprakhistoriaExercise[] = [
  // --- Quiz (10) ---
  {
    type: "quiz",
    id: "spr-hog-q1",
    prompt: "Vilket skriftsystem använde vikingarna?",
    options: ["Det latinska alfabetet", "Runor", "Kilskrift", "Kyrilliska bokstäver"],
    correct: 1,
    explanation:
      "Vikingarna använde runor — ett skriftsystem med raka streck som var lätt att rista i trä och sten. Det äldsta runalfabetet kallas futharken.",
  },
  {
    type: "quiz",
    id: "spr-hog-q2",
    prompt: "Vad heter det äldsta runalfabetet?",
    options: ["Yngre futharken", "Äldre futharken", "Stavlösa runor", "Medeltidsrunor"],
    correct: 1,
    explanation:
      "Äldre futharken hade 24 tecken och användes ungefär 150–800 e.Kr. Namnet kommer från de sex första runorna: F, U, Þ, A, R, K.",
  },
  {
    type: "quiz",
    id: "spr-hog-q3",
    prompt: "Under vilken period skrevs de svenska landskapslagarna?",
    options: ["Runsvenska", "Fornsvenska", "Äldre nysvenska", "Nusvenska"],
    correct: 1,
    explanation:
      "Landskapslagarna nedtecknades under fornsvensk tid (ca 1225–1526). De är bland de äldsta texterna skrivna med latinskt alfabet på svenska.",
  },
  {
    type: "quiz",
    id: "spr-hog-q4",
    prompt: "Från vilket språk lånade svenskan flest ord under medeltiden?",
    options: ["Franska", "Engelska", "Lågtyska", "Latin"],
    correct: 2,
    explanation:
      "Under medeltiden kom ett stort antal lågtyska lånord in i svenskan, bland annat genom Hansaförbundets handelsverksamhet. Ord som fönster, arbeta och betala har tyskt ursprung.",
  },
  {
    type: "quiz",
    id: "spr-hog-q5",
    prompt: "Vad är Gustav Vasas bibel och varför var den viktig?",
    options: [
      "En handskriven bibel från 1200-talet",
      "Den första tryckta svenska bibelöversättningen (1541)",
      "En barnbibel från 1700-talet",
      "En modern bibelöversättning från 1917",
    ],
    correct: 1,
    explanation:
      "Gustav Vasas bibel trycktes 1541 och var den första fullständiga bibelöversättningen till svenska. Den fick stor betydelse för att forma ett gemensamt svenskt skriftspråk.",
  },
  {
    type: "quiz",
    id: "spr-hog-q6",
    prompt: "Varför var boktryckarkonsten viktig för det svenska språket?",
    options: [
      "Den gjorde att fler lärde sig latin",
      "Den spred ett enhetligare skriftspråk till fler människor",
      "Den ersatte runorna direkt",
      "Den införde engelska lånord",
    ],
    correct: 1,
    explanation:
      "Boktryckarkonsten, som kom till Sverige på 1480-talet, gjorde det möjligt att massproducera texter. Det bidrog till att ett mer enhetligt svenskt skriftspråk växte fram.",
  },
  {
    type: "quiz",
    id: "spr-hog-q7",
    prompt: "Vilket år grundades Svenska Akademien?",
    options: ["1658", "1786", "1842", "1906"],
    correct: 1,
    explanation:
      "Svenska Akademien grundades 1786 av Gustav III med uppdraget att vårda det svenska språket. Akademien ger bland annat ut Svenska Akademiens ordlista (SAOL).",
  },
  {
    type: "quiz",
    id: "spr-hog-q8",
    prompt: "Vad innebar stavningsreformen 1906?",
    options: [
      "Man bytte till det latinska alfabetet",
      "Man ersatte hv med v och dt med t i stavningen",
      "Man införde å, ä och ö",
      "Man avskaffade runorna officiellt",
    ],
    correct: 1,
    explanation:
      "Stavningsreformen 1906 förenklarade stavningen: 'hvad' blev 'vad', 'godt' blev 'gott' och 'lefva' blev 'leva'. Syftet var att stavningen bättre skulle spegla uttalet.",
  },
  {
    type: "quiz",
    id: "spr-hog-q9",
    prompt: "Vad kallas den förändring som skedde på 1960-talet då svenskar slutade säga 'ni' till varandra?",
    options: ["Stavningsreformen", "Du-reformen", "Språkvårdslagen", "Ordreformen"],
    correct: 1,
    explanation:
      "Du-reformen på 1960-talet innebar att svenskar alltmer började tilltala varandra med 'du' i stället för titlar eller 'ni'. Det speglade en samhällsförändring mot ökad jämlikhet.",
  },
  {
    type: "quiz",
    id: "spr-hog-q10",
    prompt: "Vilken typ av lånord har ökat mest i svenskan sedan 1900-talets andra hälft?",
    options: ["Tyska lånord", "Franska lånord", "Engelska lånord", "Finska lånord"],
    correct: 2,
    explanation:
      "Sedan mitten av 1900-talet har engelska lånord dominerat. Ord som mejl, dejt, och sajt visar hur engelskan påverkar modern svenska, inte minst genom teknik och populärkultur.",
  },
  // --- Match (4) ---
  {
    type: "match",
    id: "spr-hog-m1",
    instruction: "Para ihop tidsperioden med rätt kännetecken.",
    pairs: [
      { left: "Runsvenska (800–1225)", right: "Runinskrifter på stenar och föremål" },
      { left: "Fornsvenska (1225–1526)", right: "Landskapslagar och tyska lånord" },
      { left: "Äldre nysvenska (1526–1732)", right: "Gustav Vasas bibel och boktryckarkonsten" },
      { left: "Nusvenska (1906–)", right: "Stavningsreformen och du-reformen" },
    ],
  },
  {
    type: "match",
    id: "spr-hog-m2",
    instruction: "Para ihop lånordet med det språk det kommer från.",
    pairs: [
      { left: "fönster", right: "Lågtyska" },
      { left: "restaurang", right: "Franska" },
      { left: "mejl", right: "Engelska" },
      { left: "skriva", right: "Latin" },
    ],
  },
  {
    type: "match",
    id: "spr-hog-m3",
    instruction: "Para ihop händelsen med rätt århundrade.",
    pairs: [
      { left: "Boktryckarkonsten till Sverige", right: "1400-talet" },
      { left: "Gustav Vasas bibel", right: "1500-talet" },
      { left: "Svenska Akademien grundas", right: "1700-talet" },
      { left: "Stavningsreformen", right: "1900-talet" },
    ],
  },
  {
    type: "match",
    id: "spr-hog-m4",
    instruction: "Para ihop det gamla ordet med dess moderna form.",
    pairs: [
      { left: "hvad", right: "vad" },
      { left: "godt", right: "gott" },
      { left: "lefva", right: "leva" },
      { left: "hafva", right: "hava/ha" },
    ],
  },
  // --- Timeline (4) ---
  {
    type: "timeline",
    id: "spr-hog-t1",
    instruction: "Sortera de svenska språkperioderna i kronologisk ordning.",
    items: [
      { label: "Runsvenska", year: 800 },
      { label: "Fornsvenska", year: 1225 },
      { label: "Äldre nysvenska", year: 1526 },
      { label: "Yngre nysvenska", year: 1732 },
      { label: "Nusvenska", year: 1906 },
    ],
  },
  {
    type: "timeline",
    id: "spr-hog-t2",
    instruction: "Placera händelserna i kronologisk ordning.",
    items: [
      { label: "Äldre futharken börjar användas", year: 150 },
      { label: "Yngre futharken ersätter den äldre", year: 800 },
      { label: "Latinskt alfabet börjar användas i Sverige", year: 1225 },
      { label: "Boktryckarkonsten kommer till Sverige", year: 1483 },
      { label: "Gustav Vasas bibel trycks", year: 1541 },
    ],
  },
  {
    type: "timeline",
    id: "spr-hog-t3",
    instruction: "Sortera språkhändelserna kronologiskt.",
    items: [
      { label: "Landskapslagarna nedtecknas", year: 1250 },
      { label: "Svenska Akademien grundas", year: 1786 },
      { label: "Stavningsreformen genomförs", year: 1906 },
      { label: "Du-reformen", year: 1967 },
      { label: "Språklagen antas", year: 2009 },
    ],
  },
  {
    type: "timeline",
    id: "spr-hog-t4",
    instruction: "Sortera lånordslagren efter när de kom in i svenskan.",
    items: [
      { label: "Latinska lånord (via kristendomen)", year: 1000 },
      { label: "Lågtyska lånord (via Hansan)", year: 1300 },
      { label: "Franska lånord (via hovet)", year: 1700 },
      { label: "Engelska lånord (via kultur och teknik)", year: 1950 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet (20 övningar)
// ---------------------------------------------------------------------------

const gymnasietExercises: SprakhistoriaExercise[] = [
  // --- Quiz (10) ---
  {
    type: "quiz",
    id: "spr-gym-q1",
    prompt: "Hur många tecken hade den äldre futharken jämfört med den yngre?",
    options: [
      "Äldre: 16, yngre: 24",
      "Äldre: 24, yngre: 16",
      "Båda hade 24 tecken",
      "Äldre: 29, yngre: 16",
    ],
    correct: 1,
    explanation:
      "Äldre futharken hade 24 tecken medan yngre futharken reducerades till 16 tecken runt 800 e.Kr. Paradoxalt nog ökade antalet ljud i språket samtidigt som tecknen blev färre.",
  },
  {
    type: "quiz",
    id: "spr-gym-q2",
    prompt: "Vad kännetecknar fornsvenskans grammatik jämfört med nusvenskan?",
    options: [
      "Fornsvenskan saknade verb",
      "Fornsvenskan hade ett kasussystem med fyra kasus",
      "Fornsvenskan hade ingen ordföljd",
      "Fornsvenskan saknade substantiv",
    ],
    correct: 1,
    explanation:
      "Fornsvenskan hade ett kasussystem med nominativ, genitiv, dativ och ackusativ. Ordändelserna visade vilken funktion ett ord hade i satsen. I nusvenskan har detta system i stort sett försvunnit.",
  },
  {
    type: "quiz",
    id: "spr-gym-q3",
    prompt:
      "Vilken princip låg bakom den fornsvenska ordföljden som skiljer sig från nusvenskans?",
    options: [
      "Verbet stod alltid sist (SOV-ordföljd)",
      "Subjektet stod alltid sist",
      "Ordföljden var helt fri",
      "Fornsvenskan hade samma ordföljd som nusvenskan",
    ],
    correct: 0,
    explanation:
      "Fornsvenskan hade inslag av SOV-ordföljd (subjekt–objekt–verb), liknande modern tyska i bisatser. Nusvenskan har i stället SVO-ordföljd (subjekt–verb–objekt) som huvudregel.",
  },
  {
    type: "quiz",
    id: "spr-gym-q4",
    prompt:
      "Ungefär hur stor andel av det svenska grundordförrådet uppskattas ha tyskt ursprung?",
    options: ["Cirka 5 %", "Cirka 15 %", "Cirka 30–40 %", "Över 60 %"],
    correct: 2,
    explanation:
      "Uppskattningsvis 30–40 % av det svenska ordförrådet har tyskt ursprung, med lånord inom handel (köpa, betala), hantverk (snickare, gesäll) och samhälle (borgare, fogde).",
  },
  {
    type: "quiz",
    id: "spr-gym-q5",
    prompt: "Vilken roll spelade den lutherska reformationen för det svenska skriftspråket?",
    options: [
      "Den stoppade all litteratur på svenska",
      "Den ledde till att Bibeln översattes till svenska och stärkte folkspråket",
      "Den införde latinet som enda skriftspråk",
      "Den avskaffade boktryckarkonsten",
    ],
    correct: 1,
    explanation:
      "Martin Luthers idé om att varje människa skulle kunna läsa Bibeln på sitt eget språk ledde till Gustav Vasas bibelöversättning 1541. Det stärkte svenskan som skriftspråk och skapade en gemensam språklig referenspunkt.",
  },
  {
    type: "quiz",
    id: "spr-gym-q6",
    prompt: "Vad innebar Carl Gustaf af Leopolds stavningsnorm (1801)?",
    options: [
      "Att alla texter skulle skrivas på latin",
      "Att stavningen baserades på ordets etymologi, inte uttalet",
      "Ett försök att skapa enhetlig stavning baserad på uttalet",
      "Att dialekter blev officiella skriftspråk",
    ],
    correct: 2,
    explanation:
      "Leopolds stavningsnorm från 1801 försökte skapa enhetliga regler för svensk stavning. Den utgick till stor del från uttalet men behöll vissa etymologiska drag. Normen låg till grund för vidare reformer under 1800- och 1900-talet.",
  },
  {
    type: "quiz",
    id: "spr-gym-q7",
    prompt:
      "Vilken debatt präglade svensk språkpolitik under 1800-talets andra hälft?",
    options: [
      "Om svenskan skulle ersättas av engelska",
      "Stavningsfrågan — skulle stavningen förenklas och följa uttalet?",
      "Om runskrift skulle återinföras",
      "Om danskan och svenskan skulle slås ihop",
    ],
    correct: 1,
    explanation:
      "Under 1800-talets andra hälft pågick en intensiv debatt om stavningsreform. Reformvänner som Adolf Noreen förespråkade en uttalsnärmare stavning, vilket slutligen ledde till 1906 års reform.",
  },
  {
    type: "quiz",
    id: "spr-gym-q8",
    prompt:
      "Vilken roll har Språkrådet (tidigare Svenska språknämnden) i svensk språkpolitik?",
    options: [
      "Att förbjuda lånord",
      "Att ge råd och rekommendationer om svenska språket",
      "Att bestämma vilka ord som får användas",
      "Att skriva alla svenska ordböcker",
    ],
    correct: 1,
    explanation:
      "Språkrådet, som är en del av Institutet för språk och folkminnen, ger råd och rekommendationer om svenskt språkbruk. De kan inte förbjuda ord eller bestämma hur folk ska prata, men de vägleder i språkfrågor.",
  },
  {
    type: "quiz",
    id: "spr-gym-q9",
    prompt:
      "Hur har internet och sociala medier påverkat det svenska språket sedan 1990-talet?",
    options: [
      "Språket har inte förändrats alls",
      "Bara formellt skriftspråk har påverkats",
      "Nya kommunikationsformer har suddat ut gränsen mellan tal och skrift",
      "Alla har börjat skriva på engelska i stället",
    ],
    correct: 2,
    explanation:
      "Internet och sociala medier har skapat nya texttyper där man skriver snabbt och informellt, mer likt tal. Förkortningar, emojis och kodväxling mellan svenska och engelska är vanliga drag i denna nya kommunikation.",
  },
  {
    type: "quiz",
    id: "spr-gym-q10",
    prompt: "Vad innebär språklagen (2009) för svenskans ställning?",
    options: [
      "Att alla måste tala svenska hemma",
      "Att svenska är huvudspråk i Sverige och att det allmänna har ansvar för att använda och utveckla det",
      "Att inga andra språk får talas i Sverige",
      "Att engelska är förbjudet i offentliga sammanhang",
    ],
    correct: 1,
    explanation:
      "Språklagen från 2009 fastslår att svenska är huvudspråk i Sverige. Det allmänna (stat, kommun, region) har ansvar för att svenskan används och utvecklas. Lagen erkänner även de nationella minoritetsspråken.",
  },
  // --- Match (5) ---
  {
    type: "match",
    id: "spr-gym-m1",
    instruction: "Para ihop det grammatiska draget med rätt språkperiod.",
    pairs: [
      { left: "Fyra kasus (nominativ, genitiv, dativ, ackusativ)", right: "Fornsvenska" },
      { left: "SOV-ordföljd i bisatser", right: "Fornsvenska" },
      { left: "Artiklar börjar utvecklas (en/ett, -en/-et)", right: "Äldre nysvenska" },
      { left: "Fast SVO-ordföljd som huvudregel", right: "Nusvenska" },
    ],
  },
  {
    type: "match",
    id: "spr-gym-m2",
    instruction: "Para ihop lånordsskiktet med dess historiska drivkraft.",
    pairs: [
      { left: "Latinska lånord (t.ex. kyrka, präst)", right: "Kristnandet" },
      { left: "Lågtyska lånord (t.ex. arbeta, betala)", right: "Hansahandeln" },
      { left: "Franska lånord (t.ex. möbel, parfym)", right: "Stormaktstidens hovkultur" },
      { left: "Engelska lånord (t.ex. mejl, sajt)", right: "Globaliseringen och internet" },
    ],
  },
  {
    type: "match",
    id: "spr-gym-m3",
    instruction: "Para ihop den språkpolitiska händelsen med rätt person eller institution.",
    pairs: [
      { left: "Bibelöversättningen 1541", right: "Gustav Vasa" },
      { left: "Stavningsnormen 1801", right: "Carl Gustaf af Leopold" },
      { left: "Grundandet av Svenska Akademien", right: "Gustav III" },
      { left: "Stavningsreformen 1906", right: "Riksdagsbeslut" },
    ],
  },
  {
    type: "match",
    id: "spr-gym-m4",
    instruction: "Para ihop det fornsvenska kasuset med dess funktion.",
    pairs: [
      { left: "Nominativ", right: "Subjekt i satsen" },
      { left: "Genitiv", right: "Ägande, tillhörighet" },
      { left: "Dativ", right: "Indirekt objekt" },
      { left: "Ackusativ", right: "Direkt objekt" },
    ],
  },
  {
    type: "match",
    id: "spr-gym-m5",
    instruction: "Para ihop språkdraget med dess tidsperiod.",
    pairs: [
      { left: "Runinskrifter utan ordmellanrum", right: "Runsvenska (800–1225)" },
      { left: "Tyska lånord dominerar nyorden", right: "Fornsvenska (1225–1526)" },
      { left: "Första svenska grammatikböckerna", right: "Äldre nysvenska (1526–1732)" },
      { left: "Engelska lånord och kodväxling", right: "Nusvenska (1906–)" },
    ],
  },
  // --- Timeline (5) ---
  {
    type: "timeline",
    id: "spr-gym-t1",
    instruction: "Sortera de viktiga verken och texterna kronologiskt.",
    items: [
      { label: "Rökstenen (runinskrift)", year: 800 },
      { label: "Äldre Västgötalagen (äldsta landskapslagen)", year: 1225 },
      { label: "Gustav Vasas bibel", year: 1541 },
      { label: "Leopolds stavningsnorm", year: 1801 },
      { label: "Stavningsreformen", year: 1906 },
    ],
  },
  {
    type: "timeline",
    id: "spr-gym-t2",
    instruction: "Placera lånordsskikten i kronologisk ordning efter när de hade störst inflytande.",
    items: [
      { label: "Latinska lånord via kristendomen", year: 1000 },
      { label: "Lågtyska lånord via Hansan", year: 1350 },
      { label: "Franska lånord via hovkulturen", year: 1700 },
      { label: "Engelska lånord via film och musik", year: 1950 },
      { label: "Engelska lånord via internet", year: 1995 },
    ],
  },
  {
    type: "timeline",
    id: "spr-gym-t3",
    instruction: "Sortera de språkpolitiska händelserna kronologiskt.",
    items: [
      { label: "Gustav Vasas bibelöversättning", year: 1541 },
      { label: "Svenska Akademien grundas", year: 1786 },
      { label: "Leopolds stavningsnorm", year: 1801 },
      { label: "Stavningsreformen", year: 1906 },
      { label: "Språklagen antas", year: 2009 },
    ],
  },
  {
    type: "timeline",
    id: "spr-gym-t4",
    instruction: "Placera de grammatiska förändringarna i kronologisk ordning.",
    items: [
      { label: "Kasussystemet börjar försvinna", year: 1400 },
      { label: "Fast SVO-ordföljd etableras", year: 1600 },
      { label: "Pluralformer av verb försvinner (vi gå → vi går)", year: 1950 },
      { label: "Du-reformen", year: 1967 },
      { label: "Hen införs i SAOL", year: 2015 },
    ],
  },
  {
    type: "timeline",
    id: "spr-gym-t5",
    instruction: "Sortera skriftsystemens utveckling i Sverige kronologiskt.",
    items: [
      { label: "Äldre futharken (24 runor)", year: 150 },
      { label: "Yngre futharken (16 runor)", year: 800 },
      { label: "Latinskt alfabet börjar användas", year: 1200 },
      { label: "Boktryckarkonsten introduceras", year: 1483 },
      { label: "Digitalt skrivande och emoji", year: 2000 },
    ],
  },
];

// ---------------------------------------------------------------------------
// All exercises
// ---------------------------------------------------------------------------

const ALL_EXERCISES: SprakhistoriaExerciseSet[] = [
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

export function getSprakhistoriaExercises(
  ageGroup: AgeGroup,
): SprakhistoriaExercise[] {
  const exact = ALL_EXERCISES.find((s) => s.ageGroup === ageGroup);
  if (exact && exact.exercises.length > 0) return exact.exercises;

  for (const fallback of AGE_GROUP_FALLBACKS[ageGroup]) {
    const fb = ALL_EXERCISES.find((s) => s.ageGroup === fallback);
    if (fb && fb.exercises.length > 0) return fb.exercises;
  }

  return [];
}
