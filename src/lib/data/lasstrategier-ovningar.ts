import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type LasstrategiExerciseType = "quiz" | "match" | "strategy-application";

export interface LasstrategiQuiz {
  type: "quiz";
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface LasstrategiMatch {
  type: "match";
  id: string;
  instruction: string;
  pairs: { left: string; right: string }[];
}

export interface LasstrategiApplication {
  type: "strategy-application";
  id: string;
  instruction: string;
  text: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export type LasstrategiExercise =
  | LasstrategiQuiz
  | LasstrategiMatch
  | LasstrategiApplication;

export interface LasstrategiExerciseSet {
  ageGroup: AgeGroup;
  exercises: LasstrategiExercise[];
}

// ---------------------------------------------------------------------------
// Data — Lagstadiet (10 övningar)
// ---------------------------------------------------------------------------

const lagstadietExercises: LasstrategiExercise[] = [
  // --- Quiz (5) ---
  {
    type: "quiz",
    id: "ls-lag-q1",
    prompt: "Vad betyder det att förutsäga när du läser?",
    options: [
      "Att läsa texten högt",
      "Att gissa vad som ska hända innan du läser",
      "Att skriva av texten",
      "Att läsa texten baklänges",
    ],
    correct: 1,
    explanation:
      "Att förutsäga betyder att du gissar vad texten handlar om innan du läser. Du kan titta på bilder, rubriker och omslaget för att gissa.",
  },
  {
    type: "quiz",
    id: "ls-lag-q2",
    prompt: "Vad gör du när du visualiserar en text?",
    options: [
      "Du läser texten tyst",
      "Du ritar en bild av texten",
      "Du skapar bilder i huvudet av det du läser",
      "Du skriver en sammanfattning",
    ],
    correct: 2,
    explanation:
      "Att visualisera betyder att du skapar inre bilder i huvudet medan du läser. Du föreställer dig hur platser, personer och händelser ser ut.",
  },
  {
    type: "quiz",
    id: "ls-lag-q3",
    prompt: "Varför är det bra att sammanfatta det du läst?",
    options: [
      "För att texten ska bli längre",
      "För att du ska komma ihåg det viktiga",
      "För att du ska läsa snabbare",
      "För att läraren vill det",
    ],
    correct: 1,
    explanation:
      "När du sammanfattar berättar du kort vad texten handlade om. Det hjälper dig att komma ihåg det viktiga och föreställa dig.",
  },
  {
    type: "quiz",
    id: "ls-lag-q4",
    prompt:
      "Du ser en bok med en bild på en drake på omslaget. Vilken lässtrategi använder du om du gissar vad boken handlar om?",
    options: ["Sammanfatta", "Visualisera", "Förutsäga", "Läsa om"],
    correct: 2,
    explanation:
      "När du tittar på omslaget och gissar vad boken handlar om använder du strategin att förutsäga. Bilden ger dig ledtrådar!",
  },
  {
    type: "quiz",
    id: "ls-lag-q5",
    prompt: "Vilken strategi använder du om du föreställer dig hur skogen ser ut i en säga?",
    options: [
      "Sammanfatta",
      "Förutsäga",
      "Visualisera",
      "Läsa om",
    ],
    correct: 2,
    explanation:
      "När du föreställer dig hur skogen ser ut skapar du en bild i huvudet. Det är att visualisera! Det gör läsningen roligare.",
  },
  // --- Match (3) ---
  {
    type: "match",
    id: "ls-lag-m1",
    instruction: "Para ihop lässtrategin med vad den betyder.",
    pairs: [
      { left: "Förutsäga", right: "Gissa vad som ska hända" },
      { left: "Visualisera", right: "Skapa bilder i huvudet" },
      { left: "Sammanfatta", right: "Berätta kort vad texten handlade om" },
    ],
  },
  {
    type: "match",
    id: "ls-lag-m2",
    instruction: "Para ihop frasen med rätt lässtrategi.",
    pairs: [
      { left: "Jag tror att katten kommer hitta hem", right: "Förutsäga" },
      { left: "Jag ser framför mig en stor grön skog", right: "Visualisera" },
      { left: "Boken handlade om en flicka som hittade en hund", right: "Sammanfatta" },
    ],
  },
  {
    type: "match",
    id: "ls-lag-m3",
    instruction: "Para ihop när du använder strategin.",
    pairs: [
      { left: "Innan du börjar läsa", right: "Förutsäga" },
      { left: "Medan du läser", right: "Visualisera" },
      { left: "När du läst klart", right: "Sammanfatta" },
    ],
  },
  // --- Strategy-application (2) ---
  {
    type: "strategy-application",
    id: "ls-lag-sa1",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Det var en gång en liten kanin som bodde i ett hål i marken. En dag vaknade kaninen och såg att det hade snöat under natten. Hela marken var vit.",
    prompt: "Du läser den här texten och föreställer dig den vita marken och den lilla kaninen. Vilken lässtrategi använder du?",
    options: ["Förutsäga", "Sammanfatta", "Visualisera", "Läsa om"],
    correct: 2,
    explanation:
      "När du föreställer dig hur kaninen och den vita marken ser ut använder du strategin att visualisera. Du skapar en bild i ditt huvud!",
  },
  {
    type: "strategy-application",
    id: "ls-lag-sa2",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Lisa sprang genom parken. Plötsligt stannade hon. Framför henne stöd en stor kartong med hål i. Någonting rörde sig därinne.",
    prompt: "Du undrar vad som är i kartongen och gissar att det är ett djur. Vilken lässtrategi använder du?",
    options: ["Visualisera", "Förutsäga", "Sammanfatta", "Läsa baklänges"],
    correct: 1,
    explanation:
      "När du gissar vad som ska hända härnäst använder du strategin att förutsäga. Du använder ledtrådar i texten för att gissa!",
  },
];

// ---------------------------------------------------------------------------
// Data — Mellanstadiet (12 övningar)
// ---------------------------------------------------------------------------

const mellanstadietExercises: LasstrategiExercise[] = [
  // --- Quiz (5) ---
  {
    type: "quiz",
    id: "ls-mel-q1",
    prompt: "Vad innebär det att ställa frågor till en text?",
    options: [
      "Att skriva frågor till läraren",
      "Att fråga sig vad texten handlar om, varför saker händer och vad som är viktigt",
      "Att fråga en kompis vad texten handlar om",
      "Att bara läsa frågesatserna i texten",
    ],
    correct: 1,
    explanation:
      "Att ställa frågor till texten innebär att du aktivt tänker medan du läser. Du kan fråga: Varför gör karaktären så? Vad betyder det här ordet? Vad är det viktigaste?",
  },
  {
    type: "quiz",
    id: "ls-mel-q2",
    prompt:
      "Vad innebär det att koppla texten till egna erfarenheter?",
    options: [
      "Att hitta likheter mellan texten och ditt eget liv",
      "Att skriva om texten så att den handlar om dig",
      "Att bara läsa texter som handlar om dig",
      "Att ignorera texten och tänka på ditt eget liv",
    ],
    correct: 0,
    explanation:
      "När du kopplar till egna erfarenheter tänker du: Har jag upplevt någonting liknande? Påminner det här om någonting jag vet? Det hjälper dig förstå texten bättre.",
  },
  {
    type: "quiz",
    id: "ls-mel-q3",
    prompt: "Vilken lässtrategi passar bäst när du läser en rubrik och funderar över vad texten ska handla om?",
    options: [
      "Sammanfatta",
      "Visualisera",
      "Förutsäga",
      "Ställa frågor",
    ],
    correct: 2,
    explanation:
      "När du funderar över vad texten ska handla om innan du läser använder du strategin att förutsäga. Rubriken ger dig ledtrådar.",
  },
  {
    type: "quiz",
    id: "ls-mel-q4",
    prompt: "Varför är det bra att använda flera lässtrategier tillsammans?",
    options: [
      "För att det går snabbare att läsa",
      "För att det ger bättre förståelse av texten",
      "För att läraren kräver det",
      "För att texten blir roligare",
    ],
    correct: 1,
    explanation:
      "När du kombinerar strategier får du en djupare förståelse. Till exempel kan du förutsäga, sedan läsa och visualisera, och sist sammanfatta.",
  },
  {
    type: "quiz",
    id: "ls-mel-q5",
    prompt: "Du läser en berättelse om någon som flyttar till en ny stad. Du tänker: 'Jag vet hur det känns, för jag flyttade också.' Vilken strategi använder du?",
    options: [
      "Förutsäga",
      "Visualisera",
      "Koppla till egna erfarenheter",
      "Sammanfatta",
    ],
    correct: 2,
    explanation:
      "Du kopplar texten till dina egna erfarenheter när du tänker på hur det kändes när du själv flyttade. Det hjälper dig förstå karaktärens känslor.",
  },
  // --- Match (3) ---
  {
    type: "match",
    id: "ls-mel-m1",
    instruction: "Para ihop lässtrategin med rätt beskrivning.",
    pairs: [
      { left: "Förutsäga", right: "Använda ledtrådar för att gissa vad som ska hända" },
      { left: "Visualisera", right: "Skapa bilder, ljud och känslor i huvudet" },
      { left: "Ställa frågor", right: "Fråga varför, hur och vad medan du läser" },
      { left: "Koppla till egna erfarenheter", right: "Jämföra med saker du själv upplevt" },
      { left: "Sammanfatta", right: "Återberätta det viktigaste med egna ord" },
    ],
  },
  {
    type: "match",
    id: "ls-mel-m2",
    instruction: "Para ihop tanken med rätt lässtrategi.",
    pairs: [
      { left: "Det här påminner om när jag var på semester", right: "Koppla till egna erfarenheter" },
      { left: "Varför är huvudpersonen ledsen?", right: "Ställa frågor" },
      { left: "Jag tror att hon väljer att stanna", right: "Förutsäga" },
      { left: "Jag ser en mörkt skog framför mig", right: "Visualisera" },
    ],
  },
  {
    type: "match",
    id: "ls-mel-m3",
    instruction: "Para ihop när strategin är mest användbar.",
    pairs: [
      { left: "Innan du börjar läsa", right: "Förutsäga" },
      { left: "Medan du läser en detaljrik beskrivning", right: "Visualisera" },
      { left: "När du inte förstår någonting", right: "Ställa frågor" },
      { left: "När du läst klart ett kapitel", right: "Sammanfatta" },
    ],
  },
  // --- Strategy-application (4) ---
  {
    type: "strategy-application",
    id: "ls-mel-sa1",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Elin satte sig vid fönsterplatsen på tåget. Utanför flöt landskapet förbi: gröna fält, röda stugor och en sjö som glittrade i solen. Hon tänkte på somrarna hos mormor, när de brukade båda i just en sådan sjö.",
    prompt: "Elin tänker på sina egna minnen när hon tittar ut. Vilken lässtrategi använder hon?",
    options: ["Visualisera", "Förutsäga", "Koppla till egna erfarenheter", "Ställa frågor"],
    correct: 2,
    explanation:
      "Elin kopplar det hon ser till sina egna minnen från somrarna hos mormor. Det är strategin att koppla till egna erfarenheter.",
  },
  {
    type: "strategy-application",
    id: "ls-mel-sa2",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Max öppnade dörren till det gamla huset. Det knarrade i golvet när han klev in. I hörnet stöd en gammal stol med en bok på. Boken var uppslagen och någon hade skrivit med röd penna i marginalen.",
    prompt: "Du undrar vem som skrivit i boken och varför. Vilken lässtrategi använder du?",
    options: ["Sammanfatta", "Ställa frågor", "Visualisera", "Förutsäga"],
    correct: 1,
    explanation:
      "När du undrar vem som skrivit och varför ställer du frågor till texten. Det är ett tecken på att du läser aktivt och försöker förstå.",
  },
  {
    type: "strategy-application",
    id: "ls-mel-sa3",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Kapitel 7: Stormen. Mörkret foil över byn och vinden tilltog. Trädtopparna bodde sig ner mot marken. En blixt lyste upp himlen och avslöjade en gestalt som stöd mitt på vägen.",
    prompt: "Du föreställer dig den mörka byn, blixten och gestalten på vägen. Vilken lässtrategi använder du?",
    options: ["Förutsäga", "Sammanfatta", "Ställa frågor", "Visualisera"],
    correct: 3,
    explanation:
      "När du skapar en bild av stormen, mörkret och gestalten i ditt huvud använder du strategin att visualisera.",
  },
  {
    type: "strategy-application",
    id: "ls-mel-sa4",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Sara tog ett djupt andetag och öppnade kuvertet. Hennes händer darrade lite när hon vecklade upp brevet. Hon läste förstå raden och slog handen för munnen.",
    prompt: "Du gissar att brevet innehåller överraskande nyheter. Vilken lässtrategi använder du?",
    options: ["Koppla till egna erfarenheter", "Visualisera", "Förutsäga", "Sammanfatta"],
    correct: 2,
    explanation:
      "Du använder ledtrådar i texten (darrande händer, hand för munnen) för att förutsäga att brevet innehåller någonting överraskande.",
  },
];

// ---------------------------------------------------------------------------
// Data — Hogstadiet (12 övningar)
// ---------------------------------------------------------------------------

const hogstadietExercises: LasstrategiExercise[] = [
  // --- Quiz (5) ---
  {
    type: "quiz",
    id: "ls-hog-q1",
    prompt: "Vad innebär det att övervaka sin förståelse medan man läser?",
    options: [
      "Att läsa texten så fort som möjligt",
      "Att kontrollera om man förstår det man läser och göra någonting åt det om man inte gör det",
      "Att läsa texten högt för någon annan",
      "Att markera alla ord man inte förstår",
    ],
    correct: 1,
    explanation:
      "Att övervaka sin förståelse innebär att du stannar upp och tänker: Förstår jag det här? Om inte, kan du läsa om, slå upp ord eller ställa frågor till texten.",
  },
  {
    type: "quiz",
    id: "ls-hog-q2",
    prompt: "Vilken lässtrategi är mest relevant när du läser en faktatext och möts av okända begrepp?",
    options: [
      "Förutsäga",
      "Visualisera",
      "Övervaka förståelse och ställa frågor",
      "Sammanfatta",
    ],
    correct: 2,
    explanation:
      "När du stöter på okända begrepp behövs att du övervakar din förståelse. Du kan stanna upp, slå upp ord och ställa frågor för att förstå innebörden.",
  },
  {
    type: "quiz",
    id: "ls-hog-q3",
    prompt: "Hur skiljer sig användningen av lässtrategier mellan en skönlitterär text och en faktatext?",
    options: [
      "Man använder inga strategier för skönlitteratur",
      "Visualisering är viktigare i skönlitteratur, medan övervaka förståelse är viktigare i faktatext",
      "Strategierna är exakt likadana",
      "Man använder bara sammanfatta för faktatext",
    ],
    correct: 1,
    explanation:
      "I skönlitteratur är det ofta viktigt att visualisera och känna empati, medan faktatext kräver att du övervakar din förståelse av begrepp och fakta. Goda läsare anpassar sina strategier efter texttyp.",
  },
  {
    type: "quiz",
    id: "ls-hog-q4",
    prompt: "Vad är skillnaden mellan att sammanfatta och att återberätta?",
    options: [
      "Det är samma sak",
      "Att sammanfatta innebär att välja ut det viktigaste, medan återberätta återger allt",
      "Att återberätta är kortare än en sammanfattning",
      "Sammanfatta gör man innan man läst, återberätta gör man efter",
    ],
    correct: 1,
    explanation:
      "En sammanfattning väljer ut huvudpoängerna och förmedlar det viktigaste. Att återberätta innebär att man berättar allt som händer, utan att sovra. Sammanfattning är en svårare men viktigare färdighet.",
  },
  {
    type: "quiz",
    id: "ls-hog-q5",
    prompt: "Varför kan det vara bra att förutsäga även i mitten av en text?",
    options: [
      "För att det gör texten roligare",
      "För att det hjälper dig hålla fokus och aktivt tänka på vad som ska komma",
      "För att läraren vill att du gör det",
      "För att du ska kunna hoppa över delar",
    ],
    correct: 1,
    explanation:
      "Att förutsäga mitt i texten håller dig aktiv som läsare. Du tänker framåt och kontrollerar sedan om din förutsägelse stämmer, vilket fördjupar förståelsen.",
  },
  // --- Match (3) ---
  {
    type: "match",
    id: "ls-hog-m1",
    instruction: "Para ihop lässtrategin med när den är mest användbar.",
    pairs: [
      { left: "Övervaka förståelse", right: "När du läser svara faktatexter med nya begrepp" },
      { left: "Förutsäga", right: "När du läser ett spännande berättelse och vill gissa vad som händer" },
      { left: "Visualisera", right: "När texten beskriver en plats eller en händelse" },
      { left: "Ställa frågor", right: "När du vill förstå varför en karaktär handlar på ett visst sätt" },
    ],
  },
  {
    type: "match",
    id: "ls-hog-m2",
    instruction: "Para ihop texttypen med den mest centrala lässtrategin.",
    pairs: [
      { left: "Tidningsartikel", right: "Sammanfatta och ställa frågor" },
      { left: "Roman", right: "Visualisera och förutsäga" },
      { left: "Lärobokstext", right: "Övervaka förståelse" },
      { left: "Dikt", right: "Visualisera och koppla till känslor" },
    ],
  },
  {
    type: "match",
    id: "ls-hog-m3",
    instruction: "Para ihop problemet med rätt lässtrategi.",
    pairs: [
      { left: "Jag förstår inte vad ordet betyder", right: "Övervaka förståelse och slå upp ordet" },
      { left: "Jag tapper fokus", right: "Ställa frågor till texten" },
      { left: "Jag kommer inte ihåg vad jag läst", right: "Sammanfatta efter varje stycke" },
      { left: "Jag kan inte föreställa mig händelsen", right: "Visualisera mer aktivt" },
    ],
  },
  // --- Strategy-application (4) ---
  {
    type: "strategy-application",
    id: "ls-hog-sa1",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Fotosyntes är den process där gröna växter omvandlar koldioxid och vatten till socker och syre med hjälp av solljus. Processen sker i växternas kloroplaster, som innehåller det gröna pigmentet klorofyll.",
    prompt: "Du inser att du inte riktigt förstår hur kloroplaster fungerar. Vilken lässtrategi använder du?",
    options: ["Förutsäga", "Visualisera", "Övervaka förståelse", "Koppla till egna erfarenheter"],
    correct: 2,
    explanation:
      "När du märker att du inte förstår ett begrepp övervakar du din förståelse. Nästa steg är att slå upp ordet eller läsa om stycket.",
  },
  {
    type: "strategy-application",
    id: "ls-hog-sa2",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Regnet piskar mot fönstren. Det sista tåget har gått. Maria står ensam på perrongen med sin väska i handen. Hon tänker på allt hon lämnar bakom sig, och på allt hon ännu inte vet vad det är.",
    prompt: "Du gissar att Maria är på väg bort från någonting, kanske för gott. Vilken lässtrategi använder du?",
    options: ["Övervaka förståelse", "Sammanfatta", "Förutsäga", "Ställa frågor"],
    correct: 2,
    explanation:
      "Du använder ledtrådar (sista tåget, allt hon lämnar) för att förutsäga att Maria är på väg bort. Det är en förutsägelse baserad på textens antydningar.",
  },
  {
    type: "strategy-application",
    id: "ls-hog-sa3",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Enligt FN:s klimatrapport från 2023 har den globala medeltemperaturen ökat med 1,1 grader sedan förindustriell tid. Om utsläppen fortsätter i nuvarande takt kan temperaturen stiga med ytterligare 1,5 grader till 2040.",
    prompt: "Du stannar upp och tänker: Stämmer det här verkligen? Var kommer siffrorna ifrån? Vilken lässtrategi använder du?",
    options: ["Visualisera", "Förutsäga", "Sammanfatta", "Ställa frågor"],
    correct: 3,
    explanation:
      "Du ställer frågor till texten och granskar information kritiskt. Det är en viktig strategi för att läsa faktatext och nyheter med eftertanke.",
  },
  {
    type: "strategy-application",
    id: "ls-hog-sa4",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "I novellen 'Panna' av Stig Dagerman vandrar en ung man genom regnet. Han är genomblöt och hungrig. När han kommer till ett hus och knackar på dörren är det ingen som öppnar. Han går vidare, trött men envis.",
    prompt: "Du får en känsla av uppgivenhet och trötthet när du läser om mannen. Det påminner dig om när du själv kände dig ensam. Vilken lässtrategi använder du?",
    options: ["Förutsäga", "Koppla till egna erfarenheter", "Övervaka förståelse", "Sammanfatta"],
    correct: 1,
    explanation:
      "Du kopplar textens stämning till egna upplevelser och känslor. Det fördjupar din förståelse och hjälper dig leva dig in i texten.",
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet (14 övningar)
// ---------------------------------------------------------------------------

const gymnasietExercises: LasstrategiExercise[] = [
  // --- Quiz (5) ---
  {
    type: "quiz",
    id: "ls-gym-q1",
    prompt: "Vad innebär det att syntetisera information från flera texter?",
    options: [
      "Att kopiera texterna ordagrant",
      "Att kombinera och jämföra idéer från olika källor för att bilda en ny förståelse",
      "Att läsa alla texter lika snabbt",
      "Att välja den bästa texten",
    ],
    correct: 1,
    explanation:
      "Att syntetisera innebär att du sammanfogar information från flera källor, jämför perspektiv och skapar en ny helhetsbild. Det är en central färdighet i akademisk läsning.",
  },
  {
    type: "quiz",
    id: "ls-gym-q2",
    prompt: "Vad är kritisk granskning av en text?",
    options: [
      "Att hitta stavfel i texten",
      "Att ifrågasätta textens påståenden, perspektiv, syfte och källor",
      "Att vara negativ till texten",
      "Att bara läsa texten en gång",
    ],
    correct: 1,
    explanation:
      "Kritisk granskning innebär att du analyserar textens trovärdighet: Vem har skrivit den? I vilket syfte? Vilka källor används? Finns det alternativa perspektiv? Det är inte att vara negativ, utan att vara tanktull.",
  },
  {
    type: "quiz",
    id: "ls-gym-q3",
    prompt: "Vilken lässtrategi är viktigast när du läser en vetenskaplig artikel för förstå gången?",
    options: [
      "Visualisera",
      "Koppla till egna erfarenheter",
      "Övervaka förståelse och ställa frågor till texten",
      "Sammanfatta direkt",
    ],
    correct: 2,
    explanation:
      "Vetenskapliga artiklar innehåller ofta nya begrepp och komplex argumentation. Att övervaka förståelsen och ställa frågor (Vad menar de? Hur vet de det?) är avgörande för att hänga med.",
  },
  {
    type: "quiz",
    id: "ls-gym-q4",
    prompt: "Hur kan förutsägelser hjälpa även vid läsning av argumenterande texter?",
    options: [
      "De hjälper dig gissa slutsatsen innan du läser",
      "De hjälper dig att aktivt följa argumentationskedjan och jämföra med dina förväntan",
      "De är inte användbara i argumenterande texter",
      "De hjälper dig läsa snabbare",
    ],
    correct: 1,
    explanation:
      "Genom att förutsäga vilka argument som kan komma blir du en aktiv läsare. Du jämför sedan dina förutsägelser med textens faktiska argumentation, vilket skärper din analys.",
  },
  {
    type: "quiz",
    id: "ls-gym-q5",
    prompt: "Vad är skillnaden mellan att sammanfatta och att syntetisera?",
    options: [
      "Det är samma sak",
      "Sammanfatta gäller en text, syntetisera kombinerar flera texter till en ny förståelse",
      "Syntetisera är enklare än att sammanfatta",
      "Sammanfatta gör man efter läsning, syntetisera före",
    ],
    correct: 1,
    explanation:
      "Att sammanfatta handlar om att kort återge den viktigaste informationen från en enskild text. Att syntetisera innebär att du väver ihop information från flera texter till en ny, djupare förståelse.",
  },
  // --- Match (3) ---
  {
    type: "match",
    id: "ls-gym-m1",
    instruction: "Para ihop lässtrategin med dess huvudsakliga syfte.",
    pairs: [
      { left: "Syntetisera", right: "Kombinera information från flera källor" },
      { left: "Kritisk granskning", right: "Bedöma textens trovärdighet och perspektiv" },
      { left: "Övervaka förståelse", right: "Kontrollera att man förstår och agera om man inte gör det" },
      { left: "Förutsäga", right: "Skapa förväntningar som driver aktiv läsning" },
    ],
  },
  {
    type: "match",
    id: "ls-gym-m2",
    instruction: "Para ihop den akademiska texttypen med den viktigaste lässtrategin.",
    pairs: [
      { left: "Vetenskaplig artikel", right: "Övervaka förståelse och ställa frågor" },
      { left: "Debattartikel", right: "Kritisk granskning" },
      { left: "Kurslitteratur från flera författare", right: "Syntetisera" },
      { left: "Essä med lyriska beskrivningar", right: "Visualisera" },
    ],
  },
  {
    type: "match",
    id: "ls-gym-m3",
    instruction: "Para ihop frågan med rätt lässtrategi.",
    pairs: [
      { left: "Vem är avsändaren och vad är syftet?", right: "Kritisk granskning" },
      { left: "Hur förhåller sig den här texten till den förra?", right: "Syntetisera" },
      { left: "Förstår jag vad författaren menar här?", right: "Övervaka förståelse" },
      { left: "Vad tror jag kommer hända i nästa avsnitt?", right: "Förutsäga" },
    ],
  },
  // --- Strategy-application (6) ---
  {
    type: "strategy-application",
    id: "ls-gym-sa1",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "I sin avhandling argumenterar Svensson för att digitaliseringen har förstärkt sociala klyftor i utbildningen. Däremot menar Lindqvist att digital teknik kan utjämna skillnader om den implementeras rätt. Båda forskarna hänvisar till samma OECD-rapport men drar olika slutsatser.",
    prompt: "Du vill förstå hur de två forskarnas slutsatser förhåller sig till varandra. Vilken lässtrategi använder du?",
    options: ["Visualisera", "Förutsäga", "Syntetisera", "Sammanfatta"],
    correct: 2,
    explanation:
      "När du jämför och väver ihop resultat från flera källor för att bilda dig en helhetsbild syntetiserar du. Det är avgörande när olika forskare presenterar skilda perspektiv.",
  },
  {
    type: "strategy-application",
    id: "ls-gym-sa2",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Enligt en artikel i Aftonbladet har en ny supertablett revolutionerat inlärning. Artikeln nämner inga vetenskapliga studier, men citerar en anonym läkare och en instagram-influencer som rekommenderar produkten.",
    prompt: "Du reagerar på att det saknas vetenskapliga källor. Vilken lässtrategi använder du?",
    options: ["Sammanfatta", "Kritisk granskning", "Visualisera", "Koppla till egna erfarenheter"],
    correct: 1,
    explanation:
      "Du granskar texten kritiskt genom att ifrågasätta källorna. Avsaknad av vetenskapliga studier, anonyma källor och kommersiella intressen är alla varningssignaler.",
  },
  {
    type: "strategy-application",
    id: "ls-gym-sa3",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Begreppet 'hegemonisk maskulinitet' myntades av R.W. Connell 1987 och avser det dominerande manlighetideal som legitimerar patriarkal struktur. Konceptet har sedan vidareutvecklats av Messerschmidt (2018) som betonar dess intersektionella dimensioner.",
    prompt: "Du läser begreppet för förstå gången och förstår inte riktigt vad det innebär. Vilken lässtrategi använder du?",
    options: ["Förutsäga", "Koppla till egna erfarenheter", "Övervaka förståelse", "Syntetisera"],
    correct: 2,
    explanation:
      "När du märker att du inte förstår ett centralt begrepp behövs du övervaka din förståelse: stanna upp, läsa om, slå upp begreppet eller söka efter en förklaring.",
  },
  {
    type: "strategy-application",
    id: "ls-gym-sa4",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Hon stöd vid kajen och såg hur färjan långsamt gled utmed horisonten. Dimman la sig tung över vattnet och ljuden dämpades till tystnad. Från havets djup steg en känsla av att någonting stort och okänt väntade.",
    prompt: "Du föreställer dig scenen vid kajen med dimma och tystnad. Vilken lässtrategi använder du?",
    options: ["Kritisk granskning", "Syntetisera", "Visualisera", "Övervaka förståelse"],
    correct: 2,
    explanation:
      "Du skapar inre bilder av scenen: kajen, dimman, vattnet, tystnaden. Att visualisera skönlitterära texter hjälper dig uppleva och tolka texten djupare.",
  },
  {
    type: "strategy-application",
    id: "ls-gym-sa5",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "Habermas teori om den offentliga sfären betonar att demokrati kräver fria forum för debatt. Fraser (1990) kritiserar dock Habermas för att ignorera hur marginaliserade grupper systematiskt utesluts från dessa forum.",
    prompt: "Du vill förstå hur Frasers kritik förhåller sig till Habermas ursprungliga teori. Vilken lässtrategi använder du?",
    options: ["Förutsäga", "Visualisera", "Sammanfatta", "Syntetisera"],
    correct: 3,
    explanation:
      "Du syntetiserar genom att relatera två teoretikers perspektiv till varandra och bygga en djupare förståelse av fenomenet. Det är en central akademisk färdighet.",
  },
  {
    type: "strategy-application",
    id: "ls-gym-sa6",
    instruction: "Läs texten och välj vilken lässtrategi som passar bäst.",
    text: "En populärvetenskaplig artikel påstår att 90 procent av alla människor använder bara 10 procent av sin hjärna. Artikeln anger ingen källa och påståendet saknar stöd i modern neurovetenskap.",
    prompt: "Du ifrågasätter påståendet och reflekterar över varför det saknar vetenskapligt stöd. Vilken lässtrategi använder du?",
    options: ["Visualisera", "Koppla till egna erfarenheter", "Förutsäga", "Kritisk granskning"],
    correct: 3,
    explanation:
      "Du granskar texten kritiskt genom att ifrågasätta ett påstående som saknar vetenskaplig grund. Att identifiera källbrist och felaktiga påståenden är en viktig del av kritisk läsning.",
  },
];

// ---------------------------------------------------------------------------
// All exercises
// ---------------------------------------------------------------------------

const ALL_EXERCISES: LasstrategiExerciseSet[] = [
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

export function getLasstrategiExercises(
  ageGroup: AgeGroup,
): LasstrategiExercise[] {
  const exact = ALL_EXERCISES.find((s) => s.ageGroup === ageGroup);
  if (exact && exact.exercises.length > 0) return exact.exercises;

  for (const fallback of AGE_GROUP_FALLBACKS[ageGroup]) {
    const fb = ALL_EXERCISES.find((s) => s.ageGroup === fallback);
    if (fb && fb.exercises.length > 0) return fb.exercises;
  }

  return [];
}
