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
// Data — Lagstadiet (10 ovningar)
// ---------------------------------------------------------------------------

const lagstadietExercises: LasstrategiExercise[] = [
  // --- Quiz (5) ---
  {
    type: "quiz",
    id: "ls-lag-q1",
    prompt: "Vad betyder det att forutsaga nar du laser?",
    options: [
      "Att lasa texten hogt",
      "Att gissa vad som ska handa innan du laser",
      "Att skriva av texten",
      "Att lasa texten baklanges",
    ],
    correct: 1,
    explanation:
      "Att forutsaga betyder att du gissar vad texten handlar om innan du laser. Du kan titta pa bilder, rubriker och omslaget for att gissa.",
  },
  {
    type: "quiz",
    id: "ls-lag-q2",
    prompt: "Vad gor du nar du visualiserar en text?",
    options: [
      "Du laser texten tyst",
      "Du ritar en bild av texten",
      "Du skapar bilder i huvudet av det du laser",
      "Du skriver en sammanfattning",
    ],
    correct: 2,
    explanation:
      "Att visualisera betyder att du skapar inre bilder i huvudet medan du laser. Du forestaller dig hur platser, personer och handelser ser ut.",
  },
  {
    type: "quiz",
    id: "ls-lag-q3",
    prompt: "Varfor ar det bra att sammanfatta det du last?",
    options: [
      "For att texten ska bli langre",
      "For att du ska komma ihag det viktiga",
      "For att du ska lasa snabbare",
      "For att lararen vill det",
    ],
    correct: 1,
    explanation:
      "Nar du sammanfattar beratar du kort vad texten handlade om. Det hjalper dig att komma ihag det viktiga och forstalla dig.",
  },
  {
    type: "quiz",
    id: "ls-lag-q4",
    prompt:
      "Du ser en bok med en bild pa en drake pa omslaget. Vilken lasstrategi anvander du om du gissar vad boken handlar om?",
    options: ["Sammanfatta", "Visualisera", "Forutsaga", "Lasa om"],
    correct: 2,
    explanation:
      "Nar du tittar pa omslaget och gissar vad boken handlar om anvander du strategin att forutsaga. Bilden ger dig ledtradar!",
  },
  {
    type: "quiz",
    id: "ls-lag-q5",
    prompt: "Vilken strategi anvander du om du forestaller dig hur skogen ser ut i en saga?",
    options: [
      "Sammanfatta",
      "Forutsaga",
      "Visualisera",
      "Lasa om",
    ],
    correct: 2,
    explanation:
      "Nar du forestaller dig hur skogen ser ut skapar du en bild i huvudet. Det ar att visualisera! Det gor lasningen roligare.",
  },
  // --- Match (3) ---
  {
    type: "match",
    id: "ls-lag-m1",
    instruction: "Para ihop lasstrategin med vad den betyder.",
    pairs: [
      { left: "Forutsaga", right: "Gissa vad som ska handa" },
      { left: "Visualisera", right: "Skapa bilder i huvudet" },
      { left: "Sammanfatta", right: "Berata kort vad texten handlade om" },
    ],
  },
  {
    type: "match",
    id: "ls-lag-m2",
    instruction: "Para ihop frasen med ratt lasstrategi.",
    pairs: [
      { left: "Jag tror att katten kommer hitta hem", right: "Forutsaga" },
      { left: "Jag ser framfor mig en stor gron skog", right: "Visualisera" },
      { left: "Boken handlade om en flicka som hittade en hund", right: "Sammanfatta" },
    ],
  },
  {
    type: "match",
    id: "ls-lag-m3",
    instruction: "Para ihop nar du anvander strategin.",
    pairs: [
      { left: "Innan du borjar lasa", right: "Forutsaga" },
      { left: "Medan du laser", right: "Visualisera" },
      { left: "Nar du last klart", right: "Sammanfatta" },
    ],
  },
  // --- Strategy-application (2) ---
  {
    type: "strategy-application",
    id: "ls-lag-sa1",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Det var en gang en liten kanin som bodde i en hal i marken. En dag vaknade kaninen och sag att det hade snott under natten. Hela marken var vit.",
    prompt: "Du laser den har texten och forestaller dig den vita marken och den lilla kaninen. Vilken lasstrategi anvander du?",
    options: ["Forutsaga", "Sammanfatta", "Visualisera", "Lasa om"],
    correct: 2,
    explanation:
      "Nar du forestaller dig hur kaninen och den vita marken ser ut anvander du strategin att visualisera. Du skapar en bild i ditt huvud!",
  },
  {
    type: "strategy-application",
    id: "ls-lag-sa2",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Lisa sprang genom parken. Plotsligt stannade hon. Framfor henne stod en stor kartong med hal i. Nagonting rorde sig darinne.",
    prompt: "Du undrar vad som ar i kartongen och gissar att det ar ett djur. Vilken lasstrategi anvander du?",
    options: ["Visualisera", "Forutsaga", "Sammanfatta", "Lasa baklanges"],
    correct: 1,
    explanation:
      "Nar du gissar vad som ska handa harnast anvander du strategin att forutsaga. Du anvander ledtradar i texten for att gissa!",
  },
];

// ---------------------------------------------------------------------------
// Data — Mellanstadiet (12 ovningar)
// ---------------------------------------------------------------------------

const mellanstadietExercises: LasstrategiExercise[] = [
  // --- Quiz (5) ---
  {
    type: "quiz",
    id: "ls-mel-q1",
    prompt: "Vad innebar det att stalla fragor till en text?",
    options: [
      "Att skriva fragor till lararen",
      "Att fraga sig vad texten handlar om, varfor saker hander och vad som ar viktigt",
      "Att fraga en kompis vad texten handlar om",
      "Att bara lasa fragesatserna i texten",
    ],
    correct: 1,
    explanation:
      "Att stalla fragor till texten innebar att du aktivt tanker medan du laser. Du kan fraga: Varfor gor karaktaren sa? Vad betyder det har ordet? Vad ar det viktigaste?",
  },
  {
    type: "quiz",
    id: "ls-mel-q2",
    prompt:
      "Vad innebar det att koppla texten till egna erfarenheter?",
    options: [
      "Att hitta likheter mellan texten och ditt eget liv",
      "Att skriva om texten sa att den handlar om dig",
      "Att bara lasa texter som handlar om dig",
      "Att ignorera texten och tanka pa ditt eget liv",
    ],
    correct: 0,
    explanation:
      "Nar du kopplar till egna erfarenheter tanker du: Har jag upplevt nagonting liknande? Paminner det har om nagonting jag vet? Det hjalper dig forsta texten battre.",
  },
  {
    type: "quiz",
    id: "ls-mel-q3",
    prompt: "Vilken lasstrategi passar bast nar du laser en rubrik och funderar over vad texten ska handla om?",
    options: [
      "Sammanfatta",
      "Visualisera",
      "Forutsaga",
      "Stalla fragor",
    ],
    correct: 2,
    explanation:
      "Nar du funderar over vad texten ska handla om innan du laser anvander du strategin att forutsaga. Rubriken ger dig ledtradar.",
  },
  {
    type: "quiz",
    id: "ls-mel-q4",
    prompt: "Varfor ar det bra att anvanda flera lasstrategier tillsammans?",
    options: [
      "For att det gar snabbare att lasa",
      "For att det ger battre forstaelse av texten",
      "For att lararen kraver det",
      "For att texten blir roligare",
    ],
    correct: 1,
    explanation:
      "Nar du kombinerar strategier far du en djupare forstaelse. Till exempel kan du forutsaga, sedan lasa och visualisera, och sist sammanfatta.",
  },
  {
    type: "quiz",
    id: "ls-mel-q5",
    prompt: "Du laser en berattelse om nagon som flyttar till en ny stad. Du tanker: 'Jag vet hur det kans, for jag flyttade ocksa.' Vilken strategi anvander du?",
    options: [
      "Forutsaga",
      "Visualisera",
      "Koppla till egna erfarenheter",
      "Sammanfatta",
    ],
    correct: 2,
    explanation:
      "Du kopplar texten till dina egna erfarenheter nar du tanker pa hur det kandes nar du sjalv flyttade. Det hjalper dig forsta karaktarens kanslor.",
  },
  // --- Match (3) ---
  {
    type: "match",
    id: "ls-mel-m1",
    instruction: "Para ihop lasstrategin med ratt beskrivning.",
    pairs: [
      { left: "Forutsaga", right: "Anvanda ledtradar for att gissa vad som ska handa" },
      { left: "Visualisera", right: "Skapa bilder, ljud och kanslor i huvudet" },
      { left: "Stalla fragor", right: "Fraga varfor, hur och vad medan du laser" },
      { left: "Koppla till egna erfarenheter", right: "Jemfora med saker du sjalv upplevt" },
      { left: "Sammanfatta", right: "Ateberata det viktigaste med egna ord" },
    ],
  },
  {
    type: "match",
    id: "ls-mel-m2",
    instruction: "Para ihop tanken med ratt lasstrategi.",
    pairs: [
      { left: "Det har paminner om nar jag var pa semester", right: "Koppla till egna erfarenheter" },
      { left: "Varfor ar huvudpersonen ledsen?", right: "Stalla fragor" },
      { left: "Jag tror att hon valjer att stanna", right: "Forutsaga" },
      { left: "Jag ser en morkt skog framfor mig", right: "Visualisera" },
    ],
  },
  {
    type: "match",
    id: "ls-mel-m3",
    instruction: "Para ihop nar strategin ar mest anvandbar.",
    pairs: [
      { left: "Innan du borjar lasa", right: "Forutsaga" },
      { left: "Medan du laser en detaljrik beskrivning", right: "Visualisera" },
      { left: "Nar du inte forstar nagonting", right: "Stalla fragor" },
      { left: "Nar du last klart ett kapitel", right: "Sammanfatta" },
    ],
  },
  // --- Strategy-application (4) ---
  {
    type: "strategy-application",
    id: "ls-mel-sa1",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Elin satte sig vid fonsterplatsen pa taget. Utanfor flot landskapet forbi: grona faltar, roda stugor och en sjo som glittrade i solen. Hon tankte pa somrarna hos mormor, nar de brukade bada i just en sadan sjo.",
    prompt: "Elin tanker pa sina egna minnen nar hon tittar ut. Vilken lasstrategi anvander hon?",
    options: ["Visualisera", "Forutsaga", "Koppla till egna erfarenheter", "Stalla fragor"],
    correct: 2,
    explanation:
      "Elin kopplar det hon ser till sina egna minnen fran somrarna hos mormor. Det ar strategin att koppla till egna erfarenheter.",
  },
  {
    type: "strategy-application",
    id: "ls-mel-sa2",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Max oppnade dorren till det gamla huset. Det knarrade i golvet nar han klev in. I hornet stod en gammal stol med en bok pa. Boken var uppslagen och nagon hade skrivit med rod penna i marginalen.",
    prompt: "Du undrar vem som skrivit i boken och varfor. Vilken lasstrategi anvander du?",
    options: ["Sammanfatta", "Stalla fragor", "Visualisera", "Forutsaga"],
    correct: 1,
    explanation:
      "Nar du undrar vem som skrivit och varfor staller du fragor till texten. Det ar ett tecken pa att du laser aktivt och forsoker forsta.",
  },
  {
    type: "strategy-application",
    id: "ls-mel-sa3",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Kapitel 7: Stormen. Morkret foil over byn och vinden tilltog. Tradtopparna boide sig ner mot marken. En blixt lyste upp himlen och avslojde en gestalt som stod mitt pa vagen.",
    prompt: "Du forestaller dig den morka byn, blixten och gestalten pa vagen. Vilken lasstrategi anvander du?",
    options: ["Forutsaga", "Sammanfatta", "Stalla fragor", "Visualisera"],
    correct: 3,
    explanation:
      "Nar du skapar en bild av stormen, morket och gestalten i ditt huvud anvander du strategin att visualisera.",
  },
  {
    type: "strategy-application",
    id: "ls-mel-sa4",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Sara tog ett djupt andetag och oppnade kuvertet. Hennes hander darrade lite nar hon vecklade upp brevet. Hon laste forsta raden och slog handen for munnen.",
    prompt: "Du gissar att brevet innehaller overraskande nyheter. Vilken lasstrategi anvander du?",
    options: ["Koppla till egna erfarenheter", "Visualisera", "Forutsaga", "Sammanfatta"],
    correct: 2,
    explanation:
      "Du anvander ledtradar i texten (darrande hander, hand for munnen) for att forutsaga att brevet innehaller nagonting overraskande.",
  },
];

// ---------------------------------------------------------------------------
// Data — Hogstadiet (12 ovningar)
// ---------------------------------------------------------------------------

const hogstadietExercises: LasstrategiExercise[] = [
  // --- Quiz (5) ---
  {
    type: "quiz",
    id: "ls-hog-q1",
    prompt: "Vad innebar det att overvaka sin forstaelse medan man laser?",
    options: [
      "Att lasa texten sa fort som mojligt",
      "Att kontrollera om man forstar det man laser och gora nagonting at det om man inte gor det",
      "Att lasa texten hogt for nagon annan",
      "Att markera alla ord man inte forstar",
    ],
    correct: 1,
    explanation:
      "Att overvaka sin forstaelse innebar att du stannar upp och tanker: Forstar jag det har? Om inte, kan du lasa om, sla upp ord eller stalla fragor till texten.",
  },
  {
    type: "quiz",
    id: "ls-hog-q2",
    prompt: "Vilken lasstrategi ar mest relevant nar du laser en faktatext och mots av okanda begrepp?",
    options: [
      "Forutsaga",
      "Visualisera",
      "Overvaka forstaelse och stalla fragor",
      "Sammanfatta",
    ],
    correct: 2,
    explanation:
      "Nar du stoter pa okanda begrepp behovs att du overvakar din forstaelse. Du kan stanna upp, sla upp ord och stalla fragor for att forsta inneborden.",
  },
  {
    type: "quiz",
    id: "ls-hog-q3",
    prompt: "Hur skiljer sig anvandningen av lasstrategier mellan en skonlitterar text och en faktatext?",
    options: [
      "Man anvander inga strategier for skenlitteratur",
      "Visualisering ar viktigare i skonlitteratur, medan overvaka forstaelse ar viktigare i faktatext",
      "Strategierna ar exakt likadana",
      "Man anvander bara sammanfatta for faktatext",
    ],
    correct: 1,
    explanation:
      "I skonlitteratur ar det ofta viktigt att visualisera och kanna empati, medan faktatext kraver att du overvakar din forstaelse av begrepp och fakta. Goda lasare anpassar sina strategier efter texttyp.",
  },
  {
    type: "quiz",
    id: "ls-hog-q4",
    prompt: "Vad ar skillnaden mellan att sammanfatta och att ateberata?",
    options: [
      "Det ar samma sak",
      "Att sammanfatta innebar att valja ut det viktigaste, medan ateberata aterger allt",
      "Att ateberata ar kortare an en sammanfattning",
      "Sammanfatta gor man innan man last, ateberata gor man efter",
    ],
    correct: 1,
    explanation:
      "En sammanfattning valjer ut huvudpoangerna och formedlar det viktigaste. Att ateberata innebar att man beratar allt som hander, utan att sovra. Sammanfattning ar en svaarare men viktigare fardighet.",
  },
  {
    type: "quiz",
    id: "ls-hog-q5",
    prompt: "Varfor kan det vara bra att forutsaga aven i mitten av en text?",
    options: [
      "For att det gor texten roligare",
      "For att det hjalper dig halla fokus och aktivt tanka pa vad som ska komma",
      "For att lararen vill att du gor det",
      "For att du ska kunna hoppa over delar",
    ],
    correct: 1,
    explanation:
      "Att forutsaga mitt i texten haller dig aktiv som lasare. Du tanker framatt och kontrollerar sedan om din forutsagelse stammer, vilket fordjupar forstaelsen.",
  },
  // --- Match (3) ---
  {
    type: "match",
    id: "ls-hog-m1",
    instruction: "Para ihop lasstrategin med nar den ar mest anvandbar.",
    pairs: [
      { left: "Overvaka forstaelse", right: "Nar du laser svara faktatexter med nya begrepp" },
      { left: "Forutsaga", right: "Nar du laser ett spannande berattelse och vill gissa vad som hander" },
      { left: "Visualisera", right: "Nar texten beskriver en plats eller en handelse" },
      { left: "Stalla fragor", right: "Nar du vill forsta varfor en karakter handlar pa ett visst satt" },
    ],
  },
  {
    type: "match",
    id: "ls-hog-m2",
    instruction: "Para ihop texttypen med den mest centrala lasstrategin.",
    pairs: [
      { left: "Tidningsartikel", right: "Sammanfatta och stalla fragor" },
      { left: "Roman", right: "Visualisera och forutsaga" },
      { left: "Larobokstext", right: "Overvaka forstaelse" },
      { left: "Dikt", right: "Visualisera och koppla till kanslor" },
    ],
  },
  {
    type: "match",
    id: "ls-hog-m3",
    instruction: "Para ihop problemet med ratt lasstrategi.",
    pairs: [
      { left: "Jag forstar inte vad ordet betyder", right: "Overvaka forstaelse och sla upp ordet" },
      { left: "Jag tapper fokus", right: "Stalla fragor till texten" },
      { left: "Jag kommer inte ihag vad jag last", right: "Sammanfatta efter varje stycke" },
      { left: "Jag kan inte forestalla mig handelsen", right: "Visualisera mer aktivt" },
    ],
  },
  // --- Strategy-application (4) ---
  {
    type: "strategy-application",
    id: "ls-hog-sa1",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Fotosyntes ar den process dar grona vaxter omvandlar koldioxid och vatten till socker och syre med hjalp av solljus. Processen sker i vaxternas kloroplaster, som innehaller det grona pigmentet klorofyll.",
    prompt: "Du inser att du inte riktigt forstar hur kloroplaster fungerar. Vilken lasstrategi anvander du?",
    options: ["Forutsaga", "Visualisera", "Overvaka forstaelse", "Koppla till egna erfarenheter"],
    correct: 2,
    explanation:
      "Nar du marker att du inte forstar ett begrepp overvakar du din forstaelse. Nasta steg ar att sla upp ordet eller lasa om stycket.",
  },
  {
    type: "strategy-application",
    id: "ls-hog-sa2",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Regnet piskar mot fonstren. Det sista taget har gatt. Maria star ensam pa perrongen med sin vaska i handen. Hon tanker pa allt hon lamnar bakom sig, och pa allt hon annu inte vet vad det ar.",
    prompt: "Du gissar att Maria ar pa vag bort fran nagonting, kanske for gott. Vilken lasstrategi anvander du?",
    options: ["Overvaka forstaelse", "Sammanfatta", "Forutsaga", "Stalla fragor"],
    correct: 2,
    explanation:
      "Du anvander ledtradar (sista taget, allt hon lamnar) for att forutsaga att Maria ar pa vag bort. Det ar en forutsagelse baserad pa textens antydningar.",
  },
  {
    type: "strategy-application",
    id: "ls-hog-sa3",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Enligt FN:s klimatrapport fran 2023 har den globala medeltemperaturen okat med 1,1 grader sedan forindustriell tid. Om utslappen fortsatter i nuvarande takt kan temperaturen stiga med ytterligare 1,5 grader till 2040.",
    prompt: "Du stannar upp och tanker: Stammer det har verkligen? Var kommer siffrorna ifran? Vilken lasstrategi anvander du?",
    options: ["Visualisera", "Forutsaga", "Sammanfatta", "Stalla fragor"],
    correct: 3,
    explanation:
      "Du staller fragor till texten och granskar information kritiskt. Det ar en viktig strategi for att lasa faktatext och nyheter med eftertanke.",
  },
  {
    type: "strategy-application",
    id: "ls-hog-sa4",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "I novellen 'Panna' av Stig Dagerman vandrar en ung man genom regnet. Han ar genomblot och hungrig. Nar han kommer till ett hus och knackar pa dorren ar det ingen som oppnar. Han gar vidare, trott men envis.",
    prompt: "Du far en kansla av uppgivenhet och trothet nar du laser om mannen. Det paminner dig om nar du sjalv kande dig ensam. Vilken lasstrategi anvander du?",
    options: ["Forutsaga", "Koppla till egna erfarenheter", "Overvaka forstaelse", "Sammanfatta"],
    correct: 1,
    explanation:
      "Du kopplar textens staining till egna upplevelser och kanslor. Det fordjupar din forstaelse och hjalper dig leva dig in i texten.",
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet (14 ovningar)
// ---------------------------------------------------------------------------

const gymnasietExercises: LasstrategiExercise[] = [
  // --- Quiz (5) ---
  {
    type: "quiz",
    id: "ls-gym-q1",
    prompt: "Vad innebar det att syntetisera information fran flera texter?",
    options: [
      "Att kopiera texterna ordagrant",
      "Att kombinera och jamfora ideer fran olika kallor for att bilda en ny forstaelse",
      "Att lasa alla texter lika snabbt",
      "Att valja den basta texten",
    ],
    correct: 1,
    explanation:
      "Att syntetisera innebar att du sammanfagar information fran flera kallor, jamfor perspektiv och skapar en ny helhetsbild. Det ar en central fardighet i akademisk lasning.",
  },
  {
    type: "quiz",
    id: "ls-gym-q2",
    prompt: "Vad ar kritisk granskning av en text?",
    options: [
      "Att hitta stavfel i texten",
      "Att ifragasatta textens pastaenden, perspektiv, syfte och kallor",
      "Att vara negativ till texten",
      "Att bara lasa texten en gang",
    ],
    correct: 1,
    explanation:
      "Kritisk granskning innebar att du analyserar textens trovaerdighet: Vem har skrivit den? I vilket syfte? Vilka kallor anvands? Finns det alternativa perspektiv? Det ar inte att vara negativ, utan att vara tanktull.",
  },
  {
    type: "quiz",
    id: "ls-gym-q3",
    prompt: "Vilken lasstrategi ar viktigast nar du laser en vetenskaplig artikel for forsta gangen?",
    options: [
      "Visualisera",
      "Koppla till egna erfarenheter",
      "Overvaka forstaelse och stalla fragor till texten",
      "Sammanfatta direkt",
    ],
    correct: 2,
    explanation:
      "Vetenskapliga artiklar innehaller ofta nya begrepp och komplex argumentation. Att overvaka forstaelsen och stalla fragor (Vad menar de? Hur vet de det?) ar avgorande for att haanga med.",
  },
  {
    type: "quiz",
    id: "ls-gym-q4",
    prompt: "Hur kan forutsagelser hjalpa aven vid lasning av argumenterande texter?",
    options: [
      "De hjalper dig gissa slutsatsen innan du laser",
      "De hjalper dig att aktivt folja argumentationskedjan och jamfora med dina forvantan",
      "De ar inte anvandbara i argumenterande texter",
      "De hjalper dig lasa snabbare",
    ],
    correct: 1,
    explanation:
      "Genom att forutsaga vilka argument som kan komma blir du en aktiv lasare. Du jamfor sedan dina forutsagelser med textens faktiska argumentation, vilket skarper din analys.",
  },
  {
    type: "quiz",
    id: "ls-gym-q5",
    prompt: "Vad ar skillnaden mellan att sammanfatta och att syntetisera?",
    options: [
      "Det ar samma sak",
      "Sammanfatta galler en text, syntetisera kombinerar flera texter till en ny forstaelse",
      "Syntetisera ar enklare an att sammanfatta",
      "Sammanfatta gor man efter lasning, syntetisera fore",
    ],
    correct: 1,
    explanation:
      "Att sammanfatta handlar om att kort aterge den viktigaste informationen fran en enskild text. Att syntetisera innebar att du vaver ihop information fran flera texter till en ny, djupare forstaelse.",
  },
  // --- Match (3) ---
  {
    type: "match",
    id: "ls-gym-m1",
    instruction: "Para ihop lasstrategin med dess huvudsakliga syfte.",
    pairs: [
      { left: "Syntetisera", right: "Kombinera information fran flera kallor" },
      { left: "Kritisk granskning", right: "Bedoma textens trovaerdighet och perspektiv" },
      { left: "Overvaka forstaelse", right: "Kontrollera att man forstar och agera om man inte gor det" },
      { left: "Forutsaga", right: "Skapa forvantningar som driver aktiv lasning" },
    ],
  },
  {
    type: "match",
    id: "ls-gym-m2",
    instruction: "Para ihop den akademiska texttypen med den viktigaste lasstrategin.",
    pairs: [
      { left: "Vetenskaplig artikel", right: "Overvaka forstaelse och stalla fragor" },
      { left: "Debattartikel", right: "Kritisk granskning" },
      { left: "Kurslitteratur fran flera forfattare", right: "Syntetisera" },
      { left: "Essav med lyriska beskrivningar", right: "Visualisera" },
    ],
  },
  {
    type: "match",
    id: "ls-gym-m3",
    instruction: "Para ihop fragan med ratt lasstrategi.",
    pairs: [
      { left: "Vem ar avsandaren och vad ar syftet?", right: "Kritisk granskning" },
      { left: "Hur forhaller sig den har texten till den forra?", right: "Syntetisera" },
      { left: "Forstar jag vad forfattaren menar har?", right: "Overvaka forstaelse" },
      { left: "Vad tror jag kommer handa i nasta avsnitt?", right: "Forutsaga" },
    ],
  },
  // --- Strategy-application (6) ---
  {
    type: "strategy-application",
    id: "ls-gym-sa1",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "I sin avhandling argumenterar Svensson for att digitaliseringen har forstarkt sociala klyftor i utbildningen. Dahremot menar Lindqvist att digital teknik kan utjamna skillnader om den implementeras ratt. Bada forskarna hanvisar till samma OECD-rapport men drar olika slutsatser.",
    prompt: "Du vill forsta hur de tva forskarnas slutsatser forhaller sig till varandra. Vilken lasstrategi anvander du?",
    options: ["Visualisera", "Forutsaga", "Syntetisera", "Sammanfatta"],
    correct: 2,
    explanation:
      "Nar du jamfor och vaver ihop resultat fran flera kallor for att bilda dig en helhetsbild syntetiserar du. Det ar avgorande nar olika forskare presenterar skilda perspektiv.",
  },
  {
    type: "strategy-application",
    id: "ls-gym-sa2",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Enligt en artikel i Aftonbladet har en ny supertablett revolutionerat inlarning. Artikeln namner inga vetenskapliga studier, men citerar en anonym lakare och en instagram-influencer som rekommenderar produkten.",
    prompt: "Du reagerar pa att det saknas vetenskapliga kallor. Vilken lasstrategi anvander du?",
    options: ["Sammanfatta", "Kritisk granskning", "Visualisera", "Koppla till egna erfarenheter"],
    correct: 1,
    explanation:
      "Du granskar texten kritiskt genom att ifragasatta kallorna. Avsaknad av vetenskapliga studier, anonyma kallor och kommersiella intressen ar alla varningssignaler.",
  },
  {
    type: "strategy-application",
    id: "ls-gym-sa3",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Begreppet 'hegemonisk maskulinitet' myntades av R.W. Connell 1987 och avser det dominerande manlighetideal som legitimerar patriarkal struktur. Konceptet har sedan vidareutvecklats av Messerschmidt (2018) som betonar dess intersektionella dimensioner.",
    prompt: "Du laser begreppet for forsta gangen och forstar inte riktigt vad det innebar. Vilken lasstrategi anvander du?",
    options: ["Forutsaga", "Koppla till egna erfarenheter", "Overvaka forstaelse", "Syntetisera"],
    correct: 2,
    explanation:
      "Nar du marker att du inte forstar ett centralt begrepp behovs du overvaka din forstaelse: stanna upp, lasa om, sla upp begreppet eller soka efter en forklaring.",
  },
  {
    type: "strategy-application",
    id: "ls-gym-sa4",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Hon stod vid kajen och sag hur farjan langsamat gled utmed horisonten. Dimman la sig tung over vattnet och ljuden dampades till tystnad. Fran havets djup steg en kansla av att nagonting stort och okant vantade.",
    prompt: "Du forestaller dig scenen vid kajen med dimma och tystnad. Vilken lasstrategi anvander du?",
    options: ["Kritisk granskning", "Syntetisera", "Visualisera", "Overvaka forstaelse"],
    correct: 2,
    explanation:
      "Du skapar inre bilder av scenen: kajen, dimman, vattnet, tystnaden. Att visualisera skonlitterara texter hjalper dig uppleva och tolka texten djupare.",
  },
  {
    type: "strategy-application",
    id: "ls-gym-sa5",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "Habermas teori om den offentliga sfaren betonar att demokrati kraver fria forum for debatt. Fraser (1990) kritiserar dock Habermas for att ignorera hur marginaliserade grupper systematiskt utesluts fran dessa forum.",
    prompt: "Du vill forsta hur Frasers kritik forhaller sig till Habermas ursprungliga teori. Vilken lasstrategi anvander du?",
    options: ["Forutsaga", "Visualisera", "Sammanfatta", "Syntetisera"],
    correct: 3,
    explanation:
      "Du syntetiserar genom att relatera tva teoretikers perspektiv till varandra och bygga en djupare forstaelse av fenomenet. Det ar en central akademisk fardighet.",
  },
  {
    type: "strategy-application",
    id: "ls-gym-sa6",
    instruction: "Las texten och valj vilken lasstrategi som passar bast.",
    text: "En popularvitenskaplig artikel pastar att 90 procent av alla manniskor anvander bara 10 procent av sin hjarna. Artikeln anger ingen kalla och pastaendet saknar stod i modern neurovetenskap.",
    prompt: "Du ifragasatter pastaendet och reflekterar over varfor det saknar vetenskapligt stod. Vilken lasstrategi anvander du?",
    options: ["Visualisera", "Koppla till egna erfarenheter", "Forutsaga", "Kritisk granskning"],
    correct: 3,
    explanation:
      "Du granskar texten kritiskt genom att ifragasatta ett pastaende som saknar vetenskaplig grund. Att identifiera kallbrist och felaktiga pastaenden ar en viktig del av kritisk lasning.",
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
