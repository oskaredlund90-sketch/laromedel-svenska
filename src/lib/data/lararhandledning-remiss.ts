/**
 * Lärarhandledningarnas koppling till förslaget till ny kursplan i svenska
 * (remiss november 2026, tioårig grundskola) och hänvisningar till sajtens
 * arbetsområden och grammatik. Sökvägarna är relativa till stadiet.
 */
export interface Handledningstillagg {
  remiss: string[];
  fortsatt: [string, string][];
}

export const HANDLEDNING_TILLAGG: Record<string, Handledningstillagg> = {
  // Lågstadiet (åk 1–4 i förslaget)
  "hoglasning-och-boksamtal": {
    remiss: ["Högläsning av och samtal om skönlitteratur och sakprosa, så att eleverna möter mer avancerade texter än de själva kan läsa.", "Läsningens estetiska dimension: upplevelse, inlevelse, fantasi och reflektion.", "Att göra enkla inferenser och relatera texten till egna erfarenheter.", "Nya ord och uttryck introduceras och används så att ordförrådet växer."],
    fortsatt: [["Arbetsområde: Fakta eller påhitt?", "arbetsomraden/fakta-eller-pahitt"], ["Lästräning", "lastraning"]],
  },
  "bokstaver-och-ljud": {
    remiss: ["Fonologisk och fonemisk medvetenhet genom språklekar.", "Bokstäverna i en genomtänkt ordning: vanliga, lätta ljud först – x, q, w och z sist.", "Att känna igen högfrekventa ord direkt."],
    fortsatt: [["Arbetsområde: Ljud, bokstäver och ord", "arbetsomraden/ljud-bokstaver-och-ord"], ["Arbetsområde: Skriva för hand", "arbetsomraden/skriva-for-hand"]],
  },
  "skriv-en-saga": {
    remiss: ["Att planera, formulera och bygga ut meningar och sammanfoga dem till korta texter.", "Berättande texter med enkel och tydlig struktur (åk 3–4).", "Att skriva läsligt för hand."],
    fortsatt: [["Grammatik: Meningsbyggnad", "grammatik/meningsbyggnad"], ["Arbetsområde: Skriva för hand", "arbetsomraden/skriva-for-hand"]],
  },
  "sagor-och-berattande": {
    remiss: ["Högläsning av och samtal om skönlitteratur, däribland sagor.", "Muntligt berättande och att återge innehåll.", "Att lyssna aktivt och turas om i samtal."],
    fortsatt: [["Arbetsområde: Lyssna, följa och ge instruktioner", "arbetsomraden/lyssna-folja-och-ge-instruktioner"]],
  },
  "ordkunskap-genom-lek": {
    remiss: ["Nya ord och uttryck introduceras, förklaras och används så att eleverna utökar sitt ordförråd.", "Ords betydelse, användning och släktskap.", "Grundläggande morfologisk medvetenhet: dela upp och bygga ord."],
    fortsatt: [["Grammatik: Ordets byggstenar", "grammatik/morfem"], ["Ordkunskap", "ordkunskap"]],
  },
  "att-skriva-sin-forsta-text": {
    remiss: ["Att skriva enkla meningar med rak ordföljd (åk 2) och korta sammanhängande texter (åk 3–4).", "Versaler, gemener, punkt, frågetecken och utropstecken.", "Att forma bokstäver: pennfattning, skrivriktning och placering på skrivlinjen."],
    fortsatt: [["Arbetsområde: Skriva för hand", "arbetsomraden/skriva-for-hand"], ["Grammatik: Skiljetecken", "grammatik/skiljetecken"]],
  },
  // Mellanstadiet (åk 5–7 i förslaget)
  "lasstrategier-i-grupp": {
    remiss: ["Textnära arbete under lärarens ledning: förstå, tolka och samtala om texter.", "Inferenser, att urskilja huvudidéer och detaljer och sammanfatta.", "Att använda ordböcker som stöd för ordförståelse."],
    fortsatt: [["Arbetsområde: Skriva för att lära", "arbetsomraden/skriva-for-att-lara"], ["Läsförståelse", "lasforstaelse"]],
  },
  "faktatexter-och-kallkritik": {
    remiss: ["Att hämta och bearbeta innehåll ur texter och skilja mellan egna och andras tankar.", "Källkritiskt förhållningssätt: vem står bakom, syfte, mottagare och tillförlitlighet.", "Att texter och bilder kan skapas eller förändras med generativ AI."],
    fortsatt: [["Arbetsområde: Sant eller falskt?", "arbetsomraden/sant-eller-falskt"], ["Arbetsområde: Skriva för att lära", "arbetsomraden/skriva-for-att-lara"]],
  },
  "kamratrespons-pa-texter": {
    remiss: ["Skrivprocessens delar: utveckla idéer, planera, formulera, granska och bearbeta.", "Att börja öva på att ge och ta emot respons på ett konstruktivt sätt."],
    fortsatt: [["Arbetsområde: Skriva och läsa digitalt", "arbetsomraden/skriva-och-lasa-digitalt"], ["Skrivverkstad", "skrivverkstad"]],
  },
  "muntlig-framstallning": {
    remiss: ["Muntliga presentationer med enkel och tydlig struktur: inledning, innehåll och avslutning.", "Taltempo, kroppsspråk, stödord och bilder som stöd.", "Att som åhörare lyssna aktivt och visa intresse."],
    fortsatt: [["Tala, lyssna, samtala", "tala-lyssna"], ["Arbetsområde: Ord som påverkar", "arbetsomraden/ord-som-paverkar"]],
  },
  "dikter-och-poesi": {
    remiss: ["Läsning av skönlitteratur, däribland lyrik.", "Läsningens estetiska dimension och samtal om språkliga drag.", "Att pröva språkliga val och reflektera över hur de påverkar uttrycket."],
    fortsatt: [["Arbetsområde: Berättelsens byggstenar", "arbetsomraden/berattelsens-byggstenar"]],
  },
  "mediakritik-och-reklam": {
    remiss: ["Hur sakprosa är uppbyggd och hur språket används för att informera och påverka.", "Ords betydelsenyanser och värdeladdning.", "Källkritik och generativ AI."],
    fortsatt: [["Arbetsområde: Ord som påverkar", "arbetsomraden/ord-som-paverkar"], ["Arbetsområde: Sant eller falskt?", "arbetsomraden/sant-eller-falskt"]],
  },
  // Högstadiet (åk 8–10 i förslaget)
  "argumenterande-text": {
    remiss: ["Argumenterande texter där innehåll och språk anpassas till syfte, mottagare och sammanhang.", "Att framföra åsikter med underbyggda argument och sakligt bemöta andras perspektiv.", "Hur orsaks-, konsekvens- och villkorssamband kan uttryckas."],
    fortsatt: [["Grammatik: Orsak, följd och villkor", "grammatik/samband"], ["Arbetsområde: Källkritik, algoritmer och AI", "arbetsomraden/kallkritik-algoritmer-och-ai"]],
  },
  litteraturanalys: {
    remiss: ["Tema, uppbyggnad, berättarteknik och stilistiska grepp: berättarperspektiv, kronologi, tillbakablickar, parallellhandling, liknelser och metaforer.", "Att använda litterära begrepp för att samtala och skriva om texter.", "Att relatera texter till författare och tid."],
    fortsatt: [["Arbetsområde: Skönlitteratur – noveller, romaner, lyrik, dramatik och klassiker", "arbetsomraden/skonlitteratur-hela-verk-och-klassiker"], ["Litterära begrepp", "litteraturbegrepp"]],
  },
  "kritisk-lasning-av-medier": {
    remiss: ["Att urskilja texters syfte, avsändare och sammanhang och bedöma tillförlitlighet och relevans.", "Hur digitala sökverktyg och algoritmer påverkar sökresultat.", "Digitala och multimediala texter."],
    fortsatt: [["Arbetsområde: Källkritik, algoritmer och AI", "arbetsomraden/kallkritik-algoritmer-och-ai"], ["Arbetsområde: Digitala och multimediala texter", "arbetsomraden/digitala-texter-och-ansvar"]],
  },
  "debatt-och-argumentation": {
    remiss: ["Att framföra åsikter med underbyggda argument och sakligt bemöta andras perspektiv.", "Ords betydelsenyanser och värdeladdning.", "Språkets betydelse för att utöva inflytande."],
    fortsatt: [["Arbetsområde: Dialekter och språklig variation", "arbetsomraden/dialekter-och-sprakbruk"]],
  },
  "kreativt-skrivande": {
    remiss: ["Att pröva berättartekniska och stilistiska drag från skönlitteraturen.", "Gestaltning, miljö- och personbeskrivningar och dialog.", "Skrivprocessen och respons."],
    fortsatt: [["Arbetsområde: Skönlitteratur", "arbetsomraden/skonlitteratur-hela-verk-och-klassiker"], ["Grammatik: Stilistik", "grammatik/stilistik"]],
  },
  "sprakhistoria-och-sprakforandring": {
    remiss: ["Det svenska språkets ursprung och utveckling, samhällsutveckling, språkkontakt och lånord.", "Hur digital teknik med AI kan påverka språkets utveckling."],
    fortsatt: [["Arbetsområde: Svenskans historia", "arbetsomraden/svenskans-historia"], ["Språkhistoria", "sprakhistoria"]],
  },
  // Gymnasiet – förslaget gäller grundskolan; här hänvisningar till arbetsområden
  "vetenskapligt-skrivande": { remiss: [], fortsatt: [["Arbetsområde: Vetenskapligt skrivande och källhantering", "arbetsomraden/vetenskapligt-skrivande"]] },
  retorikanalys: { remiss: [], fortsatt: [["Arbetsområde: Retorik och argumentation", "arbetsomraden/retorik-och-argumentation"], ["Retorik", "retorik"]] },
  litteraturhistoria: { remiss: [], fortsatt: [["Litteraturhistoria", "litteraturhistoria"]] },
  essaskrivning: { remiss: [], fortsatt: [["Arbetsområde: Vetenskapligt skrivande och källhantering", "arbetsomraden/vetenskapligt-skrivande"]] },
  "textanalys-med-litteraturvetenskapliga-begrepp": { remiss: [], fortsatt: [["Litterära begrepp", "litteraturbegrepp"]] },
  "sprak-och-makt": { remiss: [], fortsatt: [["Arbetsområde: Språk, identitet och makt", "arbetsomraden/sprak-identitet-och-makt"]] },
};
