import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TalaLyssnaExerciseType = "quiz" | "match";

export interface TalaLyssnaQuiz {
  type: "quiz";
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface TalaLyssnaMatch {
  type: "match";
  id: string;
  instruction: string;
  pairs: { left: string; right: string }[];
}

export type TalaLyssnaExercise = TalaLyssnaQuiz | TalaLyssnaMatch;

export interface TalaLyssnaExerciseSet {
  ageGroup: AgeGroup;
  exercises: TalaLyssnaExercise[];
}

// ---------------------------------------------------------------------------
// Data — Lågstadiet (5 övningar)
// ---------------------------------------------------------------------------

const lagstadietExercises: TalaLyssnaExercise[] = [
  {
    type: "quiz",
    id: "tl-lag-q1",
    prompt: "Vad ska du göra innan du börjar prata inför klassen?",
    options: [
      "Springa runt i klassrummet",
      "Andas lugnt och tänka på vad du ska säga",
      "Prata med kompisen bredvid",
      "Titta i taket",
    ],
    correct: 1,
    explanation:
      "Att andas lugnt och tänka igenom vad du ska säga hjälper dig att känna dig trygg och förberedd innan du pratar inför klassen.",
  },
  {
    type: "quiz",
    id: "tl-lag-q2",
    prompt: "Vad betyder det att vara en bra lyssnare?",
    options: [
      "Att prata samtidigt som någon annan",
      "Att titta på den som pratar och lyssna utan att avbryta",
      "Att leka med något under tiden",
      "Att vända sig bort från den som pratar",
    ],
    correct: 1,
    explanation:
      "En bra lyssnare tittar på den som pratar, är tyst och väntar på sin tur. Då visar man att man bryr sig om vad den andra säger.",
  },
  {
    type: "quiz",
    id: "tl-lag-q3",
    prompt: "Hur pratar du så att alla hör dig?",
    options: [
      "Du viskar så tyst du kan",
      "Du skriker så högt du kan",
      "Du pratar lagom högt och tydligt",
      "Du pratar jättesnabbt",
    ],
    correct: 2,
    explanation:
      "När du pratar lagom högt och tydligt kan alla höra vad du säger utan att det blir obehagligt. Tänk på att prata i lagom tempo också!",
  },
  {
    type: "quiz",
    id: "tl-lag-q4",
    prompt: "Vad kan du göra om du glömmer vad du ska säga?",
    options: [
      "Springa ut ur klassrummet",
      "Börja gråta",
      "Ta en paus, andas och försöka igen",
      "Säga att allt är dumt",
    ],
    correct: 2,
    explanation:
      "Alla kan glömma vad de ska säga ibland. Det är helt okej att ta en liten paus, andas lugnt och sedan försöka igen. Ingen förväntar sig att det ska vara perfekt!",
  },
  {
    type: "quiz",
    id: "tl-lag-q5",
    prompt: "Vad gör du när din kompis har berättat klart?",
    options: [
      "Du säger inget alls",
      "Du börjar prata om något helt annat",
      "Du säger något snällt om det kompisen berättade",
      "Du vänder dig bort",
    ],
    correct: 2,
    explanation:
      "Att säga något snällt eller ställa en fråga visar att du har lyssnat och bryr dig. Det kallas att ge respons och gör att den som berättat känner sig glad.",
  },
  {
    type: "quiz",
    id: "tl-lag-q6",
    prompt: "Varför är det bra att titta på den du pratar med?",
    options: [
      "Det är inte viktigt",
      "Det visar att du lyssnar och bryr dig",
      "Det är ett straff",
      "Det gör att du pratar fortare",
    ],
    correct: 1,
    explanation:
      "Ögonkontakt visar att du är intresserad av vad den andra personen säger. Det hjälper också den som pratar att känna sig trygg.",
  },
  {
    type: "quiz",
    id: "tl-lag-q7",
    prompt: "Du ska berätta om ditt husdjur inför klassen. Vad är bäst att börja med?",
    options: [
      "Berätta vad husdjuret åt igår",
      "Säga vad husdjuret heter och vad det är för djur",
      "Visa ryggen mot klassen",
      "Viska så tyst du kan",
    ],
    correct: 1,
    explanation:
      "Det är bra att börja med det viktigaste — vad djuret heter och vad det är. Då vet alla direkt vad du pratar om, och sedan kan du berätta mer detaljer.",
  },
  {
    type: "match",
    id: "tl-lag-m1",
    instruction: "Para ihop vad en bra lyssnare gör med rätt beskrivning.",
    pairs: [
      { left: "Titta på den som pratar", right: "Visa att du lyssnar" },
      { left: "Vänta på din tur", right: "Avbryt inte" },
      { left: "Nicka ibland", right: "Uppmuntra den som pratar" },
      { left: "Ställ en fråga efteråt", right: "Visa att du förstod" },
    ],
  },
  {
    type: "quiz",
    id: "tl-lag-q8",
    prompt: "Vad gör du om du inte förstår vad din kompis berättar?",
    options: [
      "Låtsas att du förstår",
      "Går därifrån",
      "Frågar: 'Kan du berätta mer?'",
      "Pratar om något annat",
    ],
    correct: 2,
    explanation:
      "Det är helt okej att inte förstå allt! Att fråga visar att du är intresserad och vill förstå. Det brukar göra den andra glad.",
  },
  {
    type: "quiz",
    id: "tl-lag-q9",
    prompt: "Vad kan hjälpa dig att komma ihåg vad du ska säga när du berättar inför klassen?",
    options: [
      "Läsa innantill från ett papper",
      "Ha bilder eller saker att visa",
      "Stå med ryggen mot klassen",
      "Prata så fort som möjligt",
    ],
    correct: 1,
    explanation:
      "Bilder och saker hjälper dig att komma ihåg vad du vill berätta. De gör det också roligare för klassen att lyssna!",
  },
];

// ---------------------------------------------------------------------------
// Data — Mellanstadiet (10 övningar)
// ---------------------------------------------------------------------------

const mellanstadietExercises: TalaLyssnaExercise[] = [
  {
    type: "quiz",
    id: "tl-mel-q1",
    prompt: "Vilka tre delar brukar en bra presentation ha?",
    options: [
      "Problem, lösning, sammanfattning",
      "Inledning, mittdel och avslutning",
      "Rubrik, brödtext och bild",
      "Fråga, svar och paus",
    ],
    correct: 1,
    explanation:
      "En bra presentation har en inledning (där du fångar lyssnarnas intresse), en mittdel (där du berättar det viktigaste) och en avslutning (där du sammanfattar och avslutar tydligt).",
  },
  {
    type: "quiz",
    id: "tl-mel-q2",
    prompt: "Vad är aktivt lyssnande?",
    options: [
      "Att lyssna medan man gör något annat",
      "Att nicka, ställa frågor och visa att man förstår",
      "Att vänta tyst utan att bry sig",
      "Att avbryta med egna åsikter",
    ],
    correct: 1,
    explanation:
      "Aktivt lyssnande innebär att du visar att du lyssnar genom att nicka, ställa frågor och ibland sammanfatta det du hört. Det hjälper både dig och den som pratar.",
  },
  {
    type: "quiz",
    id: "tl-mel-q3",
    prompt: "Vad är ett bra sätt att börja en presentation?",
    options: [
      "Titta ner i golvet och börja prata tyst",
      "Ställa en fråga till publiken eller berätta något spännande",
      "Läsa högt från ett papper utan att titta upp",
      "Säga 'Jag vet inte riktigt vad jag ska prata om'",
    ],
    correct: 1,
    explanation:
      "En bra inledning fångar lyssnarnas uppmärksamhet. Du kan ställa en fråga, berätta en kort historia eller visa en bild. Då vill alla höra mer!",
  },
  {
    type: "quiz",
    id: "tl-mel-q4",
    prompt: "Vad bör du tänka på när du ger respons till en klasskamrat?",
    options: [
      "Säga allt som var dåligt",
      "Först säga något bra, sedan ge ett förslag på förbättring",
      "Inte säga någonting alls",
      "Bara säga 'Det var bra' utan att förklara varför",
    ],
    correct: 1,
    explanation:
      "Bra respons börjar med något positivt och ger sedan ett konkret förslag. Till exempel: 'Du pratade tydligt! Nästa gång kan du försöka titta mer på publiken.' Det kallas ibland för 'två stjärnor och en önskan'.",
  },
  {
    type: "quiz",
    id: "tl-mel-q5",
    prompt: "Vilken samtalsregel är viktigast i en gruppdiskussion?",
    options: [
      "Den som pratar högst vinner",
      "Bara läraren får prata",
      "Man lyssnar på varandra och turas om att prata",
      "Man behöver inte lyssna på andras åsikter",
    ],
    correct: 2,
    explanation:
      "I en bra diskussion lyssnar alla på varandra och turas om att prata. Man visar respekt genom att inte avbryta och genom att vara intresserad av andras tankar.",
  },
  {
    type: "match",
    id: "tl-mel-m1",
    instruction: "Para ihop delen av en presentation med vad den ska innehålla.",
    pairs: [
      { left: "Inledning", right: "Fånga intresset med en fråga eller historia" },
      { left: "Huvuddel", right: "Berätta det viktigaste med tydliga exempel" },
      { left: "Avslutning", right: "Sammanfatta och avsluta med en poäng" },
      { left: "Stödord", right: "Korta påminnelser om vad du ska säga" },
    ],
  },
  {
    type: "quiz",
    id: "tl-mel-q6",
    prompt: "Din kompis verkar nervös innan hen ska presentera. Vad kan du göra?",
    options: [
      "Skratta åt hen",
      "Säga att det inte spelar någon roll",
      "Uppmuntra och säga att du tror på hen",
      "Ignorera det",
    ],
    correct: 2,
    explanation:
      "Att uppmuntra en nervös kompis hjälper hen att känna sig tryggare. Nervositet är helt vanligt — nästan alla är det innan de pratar inför andra.",
  },
  {
    type: "match",
    id: "tl-mel-m2",
    instruction: "Para ihop samtalsregeln med varför den är viktig.",
    pairs: [
      { left: "Räck upp handen", right: "Alla får komma till tals i ordning" },
      { left: "Lyssna klart", right: "Visa respekt för den som pratar" },
      { left: "Håll dig till ämnet", right: "Diskussionen blir mer fokuserad" },
      { left: "Bygg vidare på andras idéer", right: "Samtalet blir djupare" },
    ],
  },
  {
    type: "quiz",
    id: "tl-mel-q7",
    prompt: "Vad menas med 'aktivt lyssnande'?",
    options: [
      "Att lyssna medan man gör något annat",
      "Att verkligen fokusera på talaren, nicka och ställa frågor",
      "Att lyssna på musik",
      "Att vänta på sin tur att prata utan att lyssna",
    ],
    correct: 1,
    explanation:
      "Aktivt lyssnande betyder att du verkligen koncentrerar dig på den som pratar. Du visar det genom ögonkontakt, att nicka och att ställa frågor efteråt.",
  },
  {
    type: "quiz",
    id: "tl-mel-q8",
    prompt: "Vad är 'två stjärnor och en önskan'?",
    options: [
      "En lek på rasten",
      "En modell för att ge respons: två positiva saker och ett förbättringsförslag",
      "En betygsskala",
      "En typ av bokrecension",
    ],
    correct: 1,
    explanation:
      "Två stjärnor och en önskan är ett sätt att ge respons. Du berättar först två saker som var bra (stjärnor) och sedan en sak som kan bli ännu bättre (önskan).",
  },
];

// ---------------------------------------------------------------------------
// Data — Högstadiet (7 övningar)
// ---------------------------------------------------------------------------

const hogstadietExercises: TalaLyssnaExercise[] = [
  {
    type: "quiz",
    id: "tl-hog-q1",
    prompt: "Vilken del av retorikens grundpelare handlar om att anpassa språket till publiken?",
    options: ["Ethos", "Pathos", "Logos", "Aptum"],
    correct: 3,
    explanation:
      "Aptum handlar om att anpassa sitt budskap till situationen: vem man talar till, var man befinner sig och vad syftet är. Det kallas ibland 'det passande' inom retoriken.",
  },
  {
    type: "quiz",
    id: "tl-hog-q2",
    prompt: "Vad är ett motargument?",
    options: [
      "Ett argument som stöder din tes",
      "Ett argument som talar emot din tes",
      "En fråga till publiken",
      "Ett sätt att avsluta en debatt",
    ],
    correct: 1,
    explanation:
      "Ett motargument är ett argument som talar emot det du hävdar. I en bra debatt bemöter du motargument och förklarar varför din tes ändå håller. Det stärker din trovärdighet.",
  },
  {
    type: "quiz",
    id: "tl-hog-q3",
    prompt: "Vad menas med 'retoriska frågor'?",
    options: [
      "Frågor som kräver ett skriftligt svar",
      "Frågor som man ställer utan att förvänta sig svar",
      "Frågor som bara läraren får ställa",
      "Frågor som handlar om retorik",
    ],
    correct: 1,
    explanation:
      "En retorisk fråga är en fråga som talaren ställer för att väcka eftertanke, inte för att få svar. Till exempel: 'Vill vi verkligen ha en värld utan böcker?' Det är ett effektivt retoriskt grepp.",
  },
  {
    type: "quiz",
    id: "tl-hog-q4",
    prompt: "Vad innebär ethos i ett tal?",
    options: [
      "Att man använder starka känslor",
      "Att man visar sin trovärdighet och kunskap",
      "Att man använder logiska argument",
      "Att man pratar snabbt",
    ],
    correct: 1,
    explanation:
      "Ethos handlar om talarens trovärdighet. Du stärker ditt ethos genom att visa att du kan ämnet, vara ärlig och uppträda professionellt. Publiken lyssnar mer på någon de litar på.",
  },
  {
    type: "quiz",
    id: "tl-hog-q5",
    prompt: "Vilken strategi hjälper dig att hantera nervositet inför ett tal?",
    options: [
      "Undvika att förbereda sig",
      "Lära sig talet utantill ord för ord",
      "Öva flera gånger och ha stödord på ett kort",
      "Prata så snabbt som möjligt så att det är över fort",
    ],
    correct: 2,
    explanation:
      "Att öva flera gånger och ha stödord gör att du känner dig trygg utan att låsa dig vid ett manus. Du kan prata mer naturligt och har en säkerhet om du tappar tråden.",
  },
  {
    type: "match",
    id: "tl-hog-m1",
    instruction: "Para ihop det retoriska begreppet med rätt beskrivning.",
    pairs: [
      { left: "Ethos", right: "Talarens trovärdighet" },
      { left: "Pathos", right: "Känsloargument som berör publiken" },
      { left: "Logos", right: "Logiska argument och fakta" },
      { left: "Aptum", right: "Anpassning till situation och publik" },
    ],
  },
  {
    type: "match",
    id: "tl-hog-m2",
    instruction: "Para ihop presentationsdelen med vad den innehåller.",
    pairs: [
      { left: "Inledning", right: "Fånga intresse och presentera ämnet" },
      { left: "Argumentation", right: "Framföra och stödja din tes" },
      { left: "Bemötande", right: "Hantera motargument" },
      { left: "Avslutning", right: "Sammanfatta och avsluta med kraft" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet (8 övningar)
// ---------------------------------------------------------------------------

const gymnasietExercises: TalaLyssnaExercise[] = [
  {
    type: "quiz",
    id: "tl-gym-q1",
    prompt: "Vad innebär den retoriska arbetsprocessen 'dispositio'?",
    options: [
      "Att hitta argument och material",
      "Att ordna och strukturera talet",
      "Att öva på framförandet",
      "Att anpassa språket stilistiskt",
    ],
    correct: 1,
    explanation:
      "Dispositio är det andra steget i den klassiska retoriken och handlar om att organisera materialet i en effektiv ordning. En genomtänkt disposition gör att talet blir logiskt och lätt att följa.",
  },
  {
    type: "quiz",
    id: "tl-gym-q2",
    prompt: "Vilken funktion har visuella hjälpmedel i en akademisk presentation?",
    options: [
      "De ersätter det talade innehållet",
      "De ska vara så texttunga som möjligt",
      "De förstärker och förtydligar budskapet",
      "De är bara till för att fylla tid",
    ],
    correct: 2,
    explanation:
      "Visuella hjälpmedel som bilder, diagram och nyckelord förstärker det du säger. De ska stödja ditt tal, inte ersätta det. En bra tumregel: bilderna ska väcka intresse, inte innehålla allt du säger.",
  },
  {
    type: "quiz",
    id: "tl-gym-q3",
    prompt: "Vad kännetecknar ett seminarium till skillnad från en debatt?",
    options: [
      "I ett seminarium försöker man vinna över motståndaren",
      "I ett seminarium utforskar man ett ämne tillsammans genom dialog",
      "I ett seminarium får bara en person prata",
      "I ett seminarium behöver man inte förbereda sig",
    ],
    correct: 1,
    explanation:
      "Ett seminarium bygger på gemensamt utforskande. Deltagarna lyssnar, ställer frågor och bygger vidare på varandras tankar. Målet är fördjupad förståelse, inte att någon ska 'vinna'.",
  },
  {
    type: "quiz",
    id: "tl-gym-q4",
    prompt: "Vilket retoriskt grepp använder talaren som säger: 'Jag kom, jag såg, jag segrade'?",
    options: [
      "Anafor (upprepning i början)",
      "Klimax (stegring)",
      "Trikolon (tretal)",
      "Alla tre ovanstående",
    ],
    correct: 3,
    explanation:
      "Det berömda citatet använder anafor (upprepning av 'jag'), klimax (stegring från att komma till att segra) och trikolon (tre parallella led). Retoriska grepp samverkar ofta.",
  },
  {
    type: "quiz",
    id: "tl-gym-q5",
    prompt: "Vad bör du fokusera på vid en kritisk analys av ett tal?",
    options: [
      "Bara om talaren verkar trevlig",
      "Enbart fakta och statistik",
      "Hur talaren använder ethos, pathos och logos samt vilka retoriska grepp som syns",
      "Bara hur lång tid talet tar",
    ],
    correct: 2,
    explanation:
      "En retorisk analys undersöker hur talaren bygger trovärdighet (ethos), väcker känslor (pathos) och använder logik (logos), samt vilka stilistiska grepp som förstärker budskapet.",
  },
  {
    type: "match",
    id: "tl-gym-m1",
    instruction: "Para ihop den retoriska arbetsprocessens steg med rätt beskrivning.",
    pairs: [
      { left: "Inventio", right: "Hitta material och argument" },
      { left: "Dispositio", right: "Ordna och strukturera innehållet" },
      { left: "Elocutio", right: "Formulera och välja stilnivå" },
      { left: "Actio", right: "Framföra talet med röst och kropp" },
    ],
  },
  {
    type: "match",
    id: "tl-gym-m2",
    instruction: "Para ihop det retoriska greppet med rätt exempel.",
    pairs: [
      { left: "Anafor", right: "'Vi kan. Vi vill. Vi ska.'" },
      { left: "Retorisk fråga", right: "'Är inte alla barn värda en chans?'" },
      { left: "Trikolon", right: "'Snabbt, enkelt och effektivt.'" },
      { left: "Allitteration", right: "'Blod, blåmärken och brännskador'" },
    ],
  },
  {
    type: "match",
    id: "tl-gym-m3",
    instruction: "Para ihop samtalsformatet med dess huvudsakliga syfte.",
    pairs: [
      { left: "Debatt", right: "Argumentera för sin ståndpunkt och vinna stöd" },
      { left: "Seminarium", right: "Utforska ett ämne genom gemensam dialog" },
      { left: "Paneldiskussion", right: "Flera experter belyser ett ämne från olika håll" },
      { left: "Förhandling", right: "Nå en kompromiss eller överenskommelse" },
    ],
  },
];

// ---------------------------------------------------------------------------
// All exercises
// ---------------------------------------------------------------------------

const ALL_EXERCISES: TalaLyssnaExerciseSet[] = [
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

export function getTalaLyssnaExercises(
  ageGroup: AgeGroup,
): TalaLyssnaExercise[] {
  const exact = ALL_EXERCISES.find((s) => s.ageGroup === ageGroup);
  if (exact && exact.exercises.length > 0) return exact.exercises;

  for (const fallback of AGE_GROUP_FALLBACKS[ageGroup]) {
    const fb = ALL_EXERCISES.find((s) => s.ageGroup === fallback);
    if (fb && fb.exercises.length > 0) return fb.exercises;
  }

  return [];
}
