import type { HafteKalla } from "../typer";
import { GY_MENINGAR, valjSatsdel } from "./grammatik-banker";

/** Övningshäften för gymnasiet – ett eller flera per kapitel i grammatikboken. */

const rader = (lista: string[]) => lista.join("\n");
/** Val-rad där rätt alternativ markeras och resten blandas in i fast ordning. */
const val = (text: string, ratt: string, fel: string[], i: number) => {
  const alla = [`*${ratt}`, ...fel];
  const n = i % alla.length;
  return `${text} {${[...alla.slice(n), ...alla.slice(0, n)].join("|")}}`;
};
const lista = (rows: [string, string, string[]][]) => rader(rows.map(([t, r, f], i) => val(t, r, f, i)));

/* ------------------------------ Ordklasser --------------------------------- */

const PRONOMEN_GY: [string, string, string[]][] = [
  ["{} kom för sent till mötet.", "De", ["Dem", "Dom"]],
  ["Jag träffade {} på bussen.", "dem", ["de", "dom"]],
  ["Vi bjöd {} som hade hjälpt oss.", "dem", ["de", "dom"]],
  ["Det var {} som vann.", "de", ["dem"]],
  ["{} flesta eleverna var nöjda.", "De", ["Dem"]],
  ["Hon gav {} varsin bok.", "dem", ["de"]],
  ["Jag vet inte om {} kommer.", "de", ["dem"]],
  ["Vi väntade på {}.", "dem", ["de"]],
  ["{} som vill får gå hem.", "De", ["Dem"]],
  ["Lärarna bad {} som var klara att vänta.", "dem", ["de"]],
  ["Hon tog {} jacka och gick. (sin egen)", "sin", ["hennes"]],
  ["Hon tog {} jacka och gick. (väninnans)", "hennes", ["sin"]],
  ["Han ringde {} mamma. (sin egen)", "sin", ["hans"]],
  ["Lisa och {} bror åkte hem. (Lisas bror)", "hennes", ["sin"]],
  ["Barnen lekte med {} hundar. (barnens egna)", "sina", ["deras"]],
  ["Vi lånade {} båt. (grannarnas)", "deras", ["sina"]],
  ["Varje elev ska ta med {} bok.", "sin", ["deras", "hans"]],
  ["Eleverna och {} lärare åkte till museet.", "deras", ["sina"]],
  ["Hon bad honom ta {} väska. (hans egen)", "sin", ["hans"]],
  ["Han gav henne {} nummer. (sitt eget)", "sitt", ["hans"]],
  ["Huset {} tak läcker ska rivas.", "vars", ["vems", "som"]],
  ["Boken, {} författare är okänd, är spännande.", "vars", ["vems", "vilken"]],
  ["Ett förslag {} vi har diskuterat länge.", "som", ["vars", "vem"]],
  ["Hon kom inte, {} förvånade alla.", "vilket", ["som", "vilken"]],
  ["Problemet, {} vi har diskuterat, kvarstår.", "vilket", ["vilken", "vilka"]],
  ["Frågan, {} ingen kunde svara på, var svår.", "vilken", ["vilket", "vilka"]],
  ["Eleverna, {} hade pluggat, klarade provet.", "vilka", ["vilket", "vilken"]],
  ["Det var {} själv som bestämde. (hon)", "hon", ["henne"]],
  ["Låt {} som vill delta anmäla sig.", "dem", ["de"]],
  ["Jag såg {} och hennes bror.", "henne", ["hon"]],
  ["Det är {} som bestämmer här.", "vi", ["oss"]],
  ["Mellan dig och {} sagt …", "mig", ["jag"]],
  ["{} och jag gick hem.", "Hon", ["Henne"]],
];

const PARTICIP: [string, string, string][] = [
  ["stänga", "en ___ dörr", "stängd"], ["stänga", "ett ___ fönster", "stängt"], ["stänga", "___ dörrar", "stängda"],
  ["måla", "ett ___ hus", "målat"], ["måla", "en ___ vägg", "målad"], ["skriva", "ett ___ brev", "skrivet"],
  ["skriva", "en ___ text", "skriven"], ["skriva", "___ texter", "skrivna"], ["bygga", "ett nyligen ___ hus", "byggt"],
  ["glömma", "en ___ nyckel", "glömd"], ["glömma", "ett ___ paraply", "glömt"], ["köpa", "en ___ bil", "köpt"],
  ["köpa", "ett ___ äpple", "köpt"], ["bjuda", "en ___ gäst", "bjuden"], ["bjuda", "___ gäster", "bjudna"],
  ["steka", "en ___ fisk", "stekt"], ["koka", "ett ___ ägg", "kokt"], ["bränna", "en ___ macka", "bränd"],
  ["springa", "en ___ hund (presens particip)", "springande"], ["le", "ett ___ barn (presens particip)", "leende"],
  ["sova", "en ___ katt (presens particip)", "sovande"], ["skrämma", "en ___ film (presens particip)", "skrämmande"],
  ["förvåna", "ett ___ resultat (presens particip)", "förvånande"], ["krossa", "ett ___ glas", "krossat"],
  ["sälja", "en ___ vara", "såld"], ["sälja", "ett ___ radhus", "sålt"], ["välja", "en ___ ledamot", "vald"],
  ["vinna", "en ___ match", "vunnen"], ["vinna", "ett ___ pris", "vunnet"], ["finna", "ett ___ föremål", "funnet"],
];

const PRONOMENTYP: [string, string][] = [
  ["min", "possessivt"], ["deras", "possessivt"], ["sig", "reflexivt"], ["sin", "reflexivt possessivt"], ["denna", "demonstrativt"],
  ["den här", "demonstrativt"], ["som (i: boken som jag läser)", "relativt"], ["vars", "relativt"], ["vem", "interrogativt"],
  ["vilken (i en fråga)", "interrogativt"], ["någon", "indefinit"], ["ingen", "indefinit"], ["man", "indefinit"], ["varje", "indefinit"],
  ["jag", "personligt"], ["honom", "personligt"], ["hen", "personligt"], ["alla", "indefinit"], ["hurdan", "interrogativt"], ["vilket (i: …, vilket förvånade)", "relativt"],
];
const PTYPER = ["personligt", "possessivt", "reflexivt", "reflexivt possessivt", "demonstrativt", "relativt", "interrogativt", "indefinit"];

const SAMMA_ORD: [string, string, string[]][] = [
  ["Hon är SNABB.", "adjektiv", ["adverb"]], ["Hon springer SNABBT.", "adverb", ["adjektiv"]], ["Jag vet ATT du kommer.", "subjunktion", ["infinitivmärke"]],
  ["Det är svårt ATT veta.", "infinitivmärke", ["subjunktion"]], ["Vi åt, SÅ vi var mätta.", "konjunktion", ["adverb"]], ["Det var SÅ kallt.", "adverb", ["konjunktion"]],
  ["Hon kom FÖR sent.", "adverb", ["preposition", "konjunktion"]], ["Tack FÖR maten.", "preposition", ["adverb", "konjunktion"]],
  ["Han log, FÖR han var glad.", "konjunktion", ["preposition", "adverb"]], ["Hon väntade UTE.", "adverb", ["preposition"]],
  ["Jag går UT.", "adverb (partikel)", ["preposition"]], ["Han gick UT ur rummet.", "adverb (partikel)", ["preposition"]], ["Hon satt PÅ stolen.", "preposition", ["adverb"]],
  ["Hon satte PÅ radion.", "adverb (partikel)", ["preposition"]], ["Det är EN bra idé.", "pronomen (artikel)", ["räkneord"]], ["Jag har EN bror och två systrar.", "räkneord", ["pronomen (artikel)"]],
  ["Jag frågade OM hon kom.", "subjunktion", ["preposition"]], ["En bok OM hästar.", "preposition", ["subjunktion"]], ["Den STÄNGDA dörren.", "particip", ["verb", "substantiv"]],
  ["Hon har STÄNGT dörren.", "verb (supinum)", ["particip", "adjektiv"]],
];

/* -------------------------------- Morfem ---------------------------------- */

const MORFEM_BETYD: [string, string, string[]][] = [
  ["bio- (biologi, biografi)", "liv", ["bok", "jord"]], ["-logi (psykologi)", "lära", ["ord", "själ"]], ["tele- (telefon)", "fjärran", ["ljud", "nära"]],
  ["-fon (telefon, mikrofon)", "ljud", ["bild", "skrift"]], ["-grafi (fotografi)", "skrift, beskrivning", ["ljus", "lära"]], ["foto- (fotografi)", "ljus", ["bild", "liv"]],
  ["geo- (geografi)", "jord", ["vatten", "liv"]], ["hydro- (hydrologi)", "vatten", ["luft", "eld"]], ["psyko- (psykologi)", "själ", ["kropp", "liv"]],
  ["demo- (demokrati)", "folk", ["styre", "stad"]], ["-krati (demokrati)", "styre, makt", ["folk", "lag"]], ["auto- (autograf)", "själv", ["bil", "snabb"]],
  ["mikro- (mikroskop)", "liten", ["stor", "nära"]], ["makro- (makroekonomi)", "stor", ["liten", "långsam"]], ["-skop (mikroskop)", "se, betrakta", ["höra", "mäta"]],
  ["-meter (termometer)", "mått", ["värme", "ljus"]], ["termo- (termometer)", "värme", ["tid", "ljus"]], ["krono- (kronologi)", "tid", ["kung", "rund"]],
  ["poly- (polygon)", "många", ["få", "en"]], ["mono- (monolog)", "en, ensam", ["två", "många"]], ["inter- (internationell)", "mellan", ["inne", "efter"]],
  ["trans- (transport)", "över, genom", ["under", "före"]], ["anti- (antibiotika)", "mot", ["för", "efter"]], ["pre- (prefix)", "före", ["efter", "mot"]],
  ["post- (postmodern)", "efter", ["före", "brev"]], ["sub- (subjekt)", "under", ["över", "utan"]], ["super- (supermakt)", "över", ["under", "liten"]],
  ["multi- (multinationell)", "många", ["en", "mot"]], ["-cid (pesticid)", "döda", ["skydda", "odla"]], ["eko- (ekologi)", "hus, miljö", ["ljud", "upprepning"]],
];

const FACKORD: [string, string][] = [
  ["läran om livet", "biologi"], ["läran om själen", "psykologi"], ["beskrivning av jorden", "geografi"], ["styre av folket", "demokrati"],
  ["en levnadsbeskrivning", "biografi"], ["instrument för att se små saker", "mikroskop"], ["instrument för att mäta värme", "termometer"],
  ["läran om tiden och händelsernas ordning", "kronologi"], ["ett tal av en enda person", "monolog"], ["ett samtal mellan två eller flera", "dialog"],
  ["mellan nationer", "internationell"], ["som verkar mot bakterier", "antibiotika"], ["läran om samspelet i naturen", "ekologi"],
  ["en egenhändig namnteckning", "autograf"], ["bild skapad med ljus", "fotografi"], ["att föra över eller genom", "transport"],
  ["styre av ämbetsverk", "byråkrati"], ["läran om språket", "lingvistik"], ["stavning enligt reglerna", "ortografi"], ["läran om hur ord böjs och bildas", "morfologi"],
  ["en figur med många hörn", "polygon"], ["läran om vädret", "meteorologi"], ["att tala till många", "retorik"], ["läran om samhället", "sociologi"],
];
const FACKORD_SVAR_ALT: Record<string, string> = { lingvistik: "lingvistik/språkvetenskap" };

const FRITT_BUNDET: [string, "fritt" | "bundet"][] = [
  ["hus", "fritt"], ["-het", "bundet"], ["o-", "bundet"], ["glad", "fritt"], ["-lig", "bundet"], ["bok", "fritt"], ["miss-", "bundet"],
  ["spring", "fritt"], ["-ar (plural)", "bundet"], ["sol", "fritt"], ["-skap", "bundet"], ["bio-", "bundet"], ["vän", "fritt"],
  ["-ning", "bundet"], ["stor", "fritt"], ["be-", "bundet"], ["-are", "bundet"], ["tro", "fritt"], ["-en (bestämd form)", "bundet"],
  ["fri", "fritt"], ["-bar", "bundet"], ["väg", "fritt"], ["åter-", "bundet"], ["mus", "fritt"], ["-ade (preteritum)", "bundet"],
];

const NOMINALISERING: [string, string][] = [
  ["utveckla", "utveckling"], ["förklara", "förklaring"], ["beskriva", "beskrivning"], ["undersöka", "undersökning"], ["analysera", "analys"],
  ["minska", "minskning"], ["öka", "ökning"], ["genomföra", "genomförande"], ["besluta", "beslut"], ["förändra", "förändring"],
  ["påverka", "påverkan"], ["diskutera", "diskussion"], ["anställa", "anställning"], ["tolka", "tolkning"], ["jämföra", "jämförelse"],
  ["producera", "produktion"], ["konsumera", "konsumtion"], ["organisera", "organisation"], ["sammanfatta", "sammanfattning"], ["bedöma", "bedömning"],
  ["argumentera", "argumentation"], ["motivera", "motivering"], ["välja", "val"], ["lösa", "lösning"], ["kritisera", "kritik"],
];

/* ------------------------------ Satsdelar ---------------------------------- */

const BISATS_SATSDEL: [string, string, string[]][] = [
  ["Att du kom gladde mig.", "subjekt", ["objekt", "adverbial"]], ["Jag tror att det blir regn.", "objekt", ["subjekt", "adverbial"]],
  ["När filmen var slut gick vi hem.", "adverbial", ["objekt", "subjekt"]], ["Problemet är att tiden inte räcker.", "predikativ", ["objekt", "subjekt"]],
  ["Hon frågade om jag var hungrig.", "objekt", ["adverbial", "subjekt"]], ["Det är synd att du inte kan komma.", "egentligt subjekt", ["objekt", "adverbial"]],
  ["Om du skyndar dig hinner du.", "adverbial", ["objekt", "subjekt"]], ["Vem som vann är oklart.", "subjekt", ["objekt", "predikativ"]],
  ["Vi vet inte varför hon slutade.", "objekt", ["adverbial", "subjekt"]], ["Eftersom det regnade stannade vi inne.", "adverbial", ["objekt", "subjekt"]],
  ["Jag hoppas att du mår bra.", "objekt", ["subjekt", "adverbial"]], ["Det förvånade alla att hon vann.", "egentligt subjekt", ["objekt", "adverbial"]],
  ["Hon log medan hon läste.", "adverbial", ["objekt", "predikativ"]], ["Frågan är om vi hinner.", "predikativ", ["objekt", "subjekt"]],
  ["Han sa att han var trött.", "objekt", ["adverbial", "subjekt"]], ["Innan vi går måste vi städa.", "adverbial", ["subjekt", "objekt"]],
  ["Att läsa är viktigt.", "subjekt", ["objekt", "adverbial"]], ["Jag undrar vad du tycker.", "objekt", ["subjekt", "adverbial"]],
  ["Trots att det var kallt badade vi.", "adverbial", ["objekt", "subjekt"]], ["Det viktiga är att alla får säga sitt.", "predikativ", ["objekt", "subjekt"]],
];

/* ---------------------------- Meningsbyggnad ------------------------------- */

const SATSRADNING: [string, boolean][] = [
  ["Det regnade, vi gick in.", true], ["Det regnade, så vi gick in.", false], ["Hon var trött, hon gick och la sig.", true],
  ["Hon var trött, men hon fortsatte.", false], ["Studien är liten, resultaten är osäkra.", true], ["Studien är liten; resultaten är därför osäkra.", false],
  ["Vi kom fram sent, affären hade stängt.", true], ["När vi kom fram, hade affären stängt.", false], ["Jag ringde, ingen svarade.", true],
  ["Jag ringde, men ingen svarade.", false], ["Priserna steg, många handlade mindre.", true], ["Priserna steg, vilket gjorde att många handlade mindre.", false],
  ["Filmen var lång, den var bra.", true], ["Filmen var lång men bra.", false], ["Eleverna protesterade, rektorn lyssnade inte.", true],
  ["Eleverna protesterade, men rektorn lyssnade inte.", false], ["Bussen var sen, jag missade provet.", true], ["Eftersom bussen var sen, missade jag provet.", false],
  ["Det är viktigt att sova, kroppen behöver vila.", true], ["Det är viktigt att sova, eftersom kroppen behöver vila.", false],
  ["Hon vann, alla jublade.", true], ["Hon vann. Alla jublade.", false], ["Texten är svår, den har många fackord.", true],
  ["Texten är svår: den har många fackord.", false], ["Vi diskuterade länge, vi kom inte fram till något.", true], ["Vi diskuterade länge utan att komma fram till något.", false],
  ["Klimatet förändras, isarna smälter.", true], ["Klimatet förändras, och isarna smälter.", false], ["Jag gillar inte fisk, jag äter det ändå.", true],
  ["Jag gillar inte fisk, men jag äter det ändå.", false],
];

const STIL_VAL: [string, string, string[]][] = [
  ["Vilken mening är skriven i verbalstil?", "Vi måste minska utsläppen.", ["En minskning av utsläppen är nödvändig."]],
  ["Vilken mening är skriven i verbalstil?", "Kommunen ska bygga en ny skola.", ["Byggandet av en ny skola ska genomföras av kommunen."]],
  ["Vilken mening är skriven i verbalstil?", "Vi utvärderade projektet i maj.", ["En utvärdering av projektet genomfördes i maj."]],
  ["Vilken mening är skriven i verbalstil?", "Eleverna diskuterade frågan.", ["En diskussion av frågan fördes av eleverna."]],
  ["Vilken mening är skriven i verbalstil?", "Företaget ökade sin försäljning.", ["En ökning av försäljningen skedde hos företaget."]],
  ["Vilken mening har slutfokus på det viktigaste – att det var ett självmål?", "Matchen avgjordes av ett självmål.", ["Ett självmål avgjorde matchen."]],
  ["Vilken mening är en utbrytning?", "Det var Anna som vann.", ["Anna vann.", "Vann gjorde Anna."]],
  ["Vilken mening betonar att det var i går det hände?", "Det var i går som hon kom.", ["Hon kom i går.", "Hon kom."]],
  ["När passar passiv form bäst?", "när den som utför handlingen är okänd eller oviktig", ["alltid i berättelser", "när man vill vara personlig"]],
  ["Vilken mening använder passiv form?", "Provet rättades under veckan.", ["Läraren rättade provet.", "Provet var svårt."]],
  ["Vilken mening använder passiv form?", "Huset revs år 2010.", ["Kommunen rev huset.", "Huset var gammalt."]],
  ["Vilken mening har formellt subjekt?", "Det finns flera skäl att ifrågasätta studien.", ["Flera skäl finns.", "Studien ifrågasätts."]],
  ["Vilken mening är ett anakoluti?", "Den boken som jag läste, den var den bra.", ["Boken som jag läste var bra.", "Jag läste en bra bok."]],
  ["Vilken mening är lättast att läsa?", "Vi bestämde att skolan ska ha längre lunch.", ["Beslutet om förlängning av lunchen fattades."]],
  ["Vad gör inversion (omvänd ordföljd)?", "lyfter fram det som står först", ["gör meningen passiv", "tar bort subjektet"]],
  ["Vilken mening har rak ordföljd?", "Hon reste till Rom i somras.", ["I somras reste hon till Rom.", "Till Rom reste hon i somras."]],
  ["Vilken mening har omvänd ordföljd?", "I somras reste hon till Rom.", ["Hon reste till Rom i somras."]],
  ["Vilken text varierar meningsbyggnaden bäst?", "Det var mörkt. Tyst. Plötsligt, när jag minst anade det, hördes ett skrik.", ["Det var mörkt. Det var tyst. Det hördes ett skrik."]],
  ["Vilken mening passar bäst i en vetenskaplig rapport?", "Resultaten tyder på ett samband mellan sömn och koncentration.", ["Sömn är sjukt viktigt för att kunna fokusera!"]],
  ["Vad kännetecknar nominalstil?", "många substantiv bildade av verb", ["många korta meningar", "många adjektiv"]],
];

const BIFF_GY: string[] = [
  "Det är oklart om regeringen kommer inte att agera. => Det är oklart om regeringen inte kommer att agera.",
  "Jag förstår varför hon svarar aldrig. => Jag förstår varför hon aldrig svarar.",
  "Studien visar att unga läser inte lika mycket som förr. => Studien visar att unga inte läser lika mycket som förr.",
  "Det är synd att du kan inte komma. => Det är synd att du inte kan komma.",
  "Han sa att han hade inte tid. => Han sa att han inte hade tid.",
  "Vi undrar om ni har redan bestämt er. => Vi undrar om ni redan har bestämt er.",
  "Eftersom urvalet var inte representativt, är slutsatserna osäkra. => Eftersom urvalet inte var representativt, är slutsatserna osäkra.",
  "Hon frågade varför jag hade inte svarat. => Hon frågade varför jag inte hade svarat.",
  "Det är tydligt att författaren vill inte ge ett enkelt svar. => Det är tydligt att författaren inte vill ge ett enkelt svar.",
  "Om man läser inte noggrant, missar man poängen. => Om man inte läser noggrant, missar man poängen.",
  "Resultatet blev sämre eftersom eleverna hade inte fått träna. => Resultatet blev sämre eftersom eleverna inte hade fått träna.",
  "Det märks att texten är inte korrekturläst. => Det märks att texten inte är korrekturläst.",
  "Han ångrade att han hade aldrig rest utomlands. => Han ångrade att han aldrig hade rest utomlands.",
  "Det är viktigt att man glömmer inte källorna. => Det är viktigt att man inte glömmer källorna.",
  "Jag vet att de har alltid stöttat mig. => Jag vet att de alltid har stöttat mig.",
  "Hon blev arg för att ingen lyssnade inte. => Hon blev arg för att ingen lyssnade.",
  "I går jag läste hela romanen. => I går läste jag hela romanen.",
  "Därför forskarna föreslår nya regler. => Därför föreslår forskarna nya regler.",
  "Sammanfattningsvis det finns flera orsaker. => Sammanfattningsvis finns det flera orsaker.",
  "Enligt rapporten utsläppen har minskat. => Enligt rapporten har utsläppen minskat.",
  "Under 1800-talet många svenskar emigrerade. => Under 1800-talet emigrerade många svenskar.",
  "Trots kritiken regeringen genomförde reformen. => Trots kritiken genomförde regeringen reformen.",
  "I texten författaren använder många metaforer. => I texten använder författaren många metaforer.",
  "Enligt forskarna klimatet förändras snabbt. => Enligt forskarna förändras klimatet snabbt.",
  "På 1600-talet Sverige var en stormakt. => På 1600-talet var Sverige en stormakt.",
  "I romanen huvudpersonen reser till Paris. => I romanen reser huvudpersonen till Paris.",
  "Det är tydligt att eleverna har inte förstått uppgiften. => Det är tydligt att eleverna inte har förstått uppgiften.",
  "Jag undrar om de kommer någonsin att förstå. => Jag undrar om de någonsin kommer att förstå.",
  "Avslutningsvis jag vill tacka alla. => Avslutningsvis vill jag tacka alla.",
  "Eftersom källan är inte trovärdig, bör den inte användas. => Eftersom källan inte är trovärdig, bör den inte användas.",
  "Därefter forskarna analyserade svaren. => Därefter analyserade forskarna svaren.",
  "Hon förklarade att hon kunde tyvärr inte komma. => Hon förklarade att hon tyvärr inte kunde komma.",
  "Om regeringen agerar inte nu, blir det för sent. => Om regeringen inte agerar nu, blir det för sent.",
  "Efter kriget många städer byggdes upp igen. => Efter kriget byggdes många städer upp igen.",
  "Han hävdar att skolan har aldrig varit bättre. => Han hävdar att skolan aldrig har varit bättre.",
];

const AKTIV_PASSIV: [string, string][] = [
  ["Polisen grep mannen.", "Mannen greps av polisen."], ["Selma Lagerlöf skrev boken.", "Boken skrevs av Selma Lagerlöf."],
  ["Styrelsen fattade beslutet.", "Beslutet fattades av styrelsen."], ["Kommunen rev huset.", "Huset revs av kommunen."],
  ["Forskarna publicerade studien.", "Studien publicerades av forskarna."], ["Läraren rättade proven.", "Proven rättades av läraren."],
  ["Brandkåren släckte branden.", "Branden släcktes av brandkåren."], ["Domaren dömde straff.", "Straff dömdes av domaren."],
  ["Eleverna planerade festen.", "Festen planerades av eleverna."], ["Regeringen lade fram förslaget.", "Förslaget lades fram av regeringen."],
  ["Juryn utsåg vinnaren.", "Vinnaren utsågs av juryn."], ["Arkitekten ritade bron.", "Bron ritades av arkitekten."],
  ["Myndigheten granskade företaget.", "Företaget granskades av myndigheten."], ["Hunden bet brevbäraren.", "Brevbäraren bets av hunden."],
  ["Publiken applåderade skådespelarna.", "Skådespelarna applåderades av publiken."],
];

/* ------------------------------- Samband ----------------------------------- */

const FORMELLA_SAMBAND: [string, string, string[]][] = [
  ["Antalet resenärer minskade ____ pandemin.", "till följd av", ["följaktligen", "förutsatt att"]],
  ["Räntan höjdes, ____ bostadspriserna sjönk.", "vilket medförde att", ["till följd av", "förutsatt att"]],
  ["Reformen kan lyckas ____ den får tillräcklig finansiering.", "förutsatt att", ["följaktligen", "till följd av"]],
  ["Forskarna fann inga skillnader. ____ förkastades hypotesen.", "Således", ["Förutsatt att", "Trots att"]],
  ["Metoden är billig. ____ har den låg tillförlitlighet.", "Å andra sidan", ["Följaktligen", "Således"]],
  ["Ökningen ____ främst den nya lagstiftningen.", "beror på", ["medför", "leder till"]],
  ["Den nya lagen ____ en kraftig ökning av ansökningar.", "medförde", ["berodde på", "orsakades av"]],
  ["____ urvalet är litet ger studien en tydlig indikation.", "Även om", ["Följaktligen", "Till följd av"]],
  ["Projektet stoppades ____ bristande finansiering.", "på grund av", ["eftersom", "således"]],
  ["Projektet stoppades ____ pengarna tog slut.", "eftersom", ["på grund av", "till följd av"]],
  ["Utsläppen måste minska. ____ riskerar vi allvarliga konsekvenser.", "Annars", ["Således", "Även om"]],
  ["Arbetslösheten steg. ____ minskade skatteintäkterna.", "Därmed", ["Trots det", "Förutsatt att"]],
  ["Studien har brister. ____ ger den värdefull kunskap.", "Icke desto mindre", ["Följaktligen", "Därmed"]],
  ["____ krisen tvingades många företag säga upp personal.", "Till följd av", ["Eftersom", "Förutsatt"]],
  ["Klimatförändringarna ____ extremväder.", "leder till", ["beror på", "trots"]],
  ["Extremvädret ____ klimatförändringarna.", "orsakas av", ["leder till", "medför"]],
  ["Reformen genomförs ____ riksdagen godkänner den.", "under förutsättning att", ["till följd av", "således"]],
  ["Priserna har stigit. Hushållen har ____ fått mindre att röra sig med.", "följaktligen", ["förutsatt att", "trots att"]],
  ["____ kostnaden är hög, anser många att investeringen är nödvändig.", "Trots att", ["Eftersom", "Därmed"]],
  ["Inga invändningar kom in. Förslaget antogs ____.", "därmed", ["trots att", "förutsatt att"]],
  ["Skolan stängdes ____ smittspridningen.", "med anledning av", ["följaktligen", "förutsatt att"]],
  ["Tåget ställdes in ____ tekniska problem.", "på grund av", ["eftersom", "således"]],
  ["____ inget görs, kommer problemet att växa.", "Om", ["Således", "Därmed"]],
  ["Hade regeringen agerat tidigare, ____ krisen kunnat undvikas.", "hade", ["har", "skulle"]],
  ["Resultatet ____ flera samverkande faktorer.", "beror på", ["leder till", "medför"]],
  ["Biblioteket stängdes ____ renovering.", "på grund av", ["eftersom", "således"]],
  ["Vi genomför studien ____ vi får tillstånd.", "under förutsättning att", ["till följd av", "således"]],
  ["Hon fick stipendiet. ____ kunde hon studera utomlands.", "Därmed", ["Trots att", "Förutsatt att"]],
  ["____ studiens brister är resultaten intressanta.", "Trots", ["Trots att", "Eftersom"]],
  ["Antalet sökande ökade ____ den nya kampanjen.", "till följd av", ["följaktligen", "förutsatt att"]],
  ["Kampanjen ____ fler sökande.", "resulterade i", ["berodde på", "orsakades av"]],
  ["____ förslaget har fördelar, finns det allvarliga risker.", "Även om", ["Eftersom", "Följaktligen"]],
  ["Ingen anmälde sig. Kursen ställdes ____ in.", "därför", ["trots att", "förutsatt att"]],
];

const SAMBANDSTYP: [string, string][] = [
  ["till följd av", "orsak"], ["beror på", "orsak"], ["orsakas av", "orsak"], ["med anledning av", "orsak"], ["på grund av", "orsak"],
  ["eftersom", "orsak"], ["då (= eftersom)", "orsak"], ["medför", "följd"], ["resulterar i", "följd"], ["således", "följd"], ["därmed", "följd"],
  ["följaktligen", "följd"], ["leder till", "följd"], ["vilket innebär att", "följd"], ["förutsatt att", "villkor"], ["under förutsättning att", "villkor"],
  ["i händelse av", "villkor"], ["såvida inte", "villkor"], ["om", "villkor"], ["annars", "villkor"], ["trots att", "medgivande"], ["även om", "medgivande"],
  ["visserligen … men", "medgivande"], ["icke desto mindre", "medgivande"], ["ändå", "medgivande"], ["trots", "medgivande"], ["ifall", "villkor"],
  ["till följd därav", "följd"], ["orsaken är", "orsak"], ["oaktat", "medgivande"],
];
const STYPER = ["orsak", "följd", "villkor", "medgivande"];

const SAMBAND_RATTA: string[] = [
  "Förseningen berodde på grund av snöovädret. => Förseningen berodde på snöovädret.",
  "Vi kom sent eftersom att tåget var försenat. => Vi kom sent eftersom tåget var försenat.",
  "Matchen ställdes in eftersom regnet. => Matchen ställdes in på grund av regnet.",
  "Trots det regnade genomfördes loppet. => Trots att det regnade genomfördes loppet.",
  "Resultaten var osäkra följaktligen eftersom urvalet var litet. => Resultaten var osäkra eftersom urvalet var litet.",
  "På grund av att priserna steg därför handlade folk mindre. => På grund av att priserna steg handlade folk mindre.",
  "Eftersom det var kallt därför tog vi på oss jackor. => Eftersom det var kallt tog vi på oss jackor.",
  "Om du inte skyndar dig så du missar bussen. => Om du inte skyndar dig, missar du bussen. || Om du inte skyndar dig missar du bussen. || Om du inte skyndar dig så missar du bussen.",
  "Ökningen beror på att på grund av den nya lagen. => Ökningen beror på den nya lagen.",
  "Även om att metoden har brister är den användbar. => Även om metoden har brister är den användbar.",
  "Till följd av att stormen ställdes flygen in. => Till följd av stormen ställdes flygen in.",
  "Han klarade provet trots han var sjuk. => Han klarade provet trots att han var sjuk.",
  "Hade jag vetat det, skulle jag har stannat. => Hade jag vetat det, skulle jag ha stannat.",
  "Förutsatt att om budgeten räcker genomförs projektet. => Förutsatt att budgeten räcker genomförs projektet.",
  ];

const KORRELATION: [string, string, string[]][] = [
  ["”Glassförsäljning och drunkningar ökar samtidigt.” Vad förklarar sambandet bäst?", "en tredje faktor – varmt väder", ["glass orsakar drunkning", "drunkning ökar glassköpen"]],
  ["Vilket påstående är mest försiktigt formulerat?", "Studien visar ett samband mellan skärmtid och sämre sömn.", ["Skärmar förstör ungas sömn.", "Alla vet att mobiler är farliga."]],
  ["Vad betyder korrelation?", "att två saker samvarierar", ["att det ena orsakar det andra", "att något är slumpmässigt"]],
  ["Vad betyder kausalitet?", "att det ena orsakar det andra", ["att två saker sker samtidigt", "att något är osäkert"]],
  ["”Elever som äter frukost har bättre betyg.” Vilken slutsats är rimligast?", "Frukost och betyg samvarierar – andra faktorer kan spela in.", ["Frukost ger bättre betyg.", "Bättre betyg gör att man äter frukost."]],
  ["Vilket ord passar för ett säkert orsakssamband?", "orsakar", ["sammanfaller med", "samvarierar med"]],
  ["Vilket ord passar när man bara sett ett samband?", "samvarierar med", ["orsakar", "leder till"]],
  ["Vad kallas en faktor som påverkar båda sakerna i ett samband?", "bakomliggande faktor", ["slutsats", "hypotes"]],
  ["Vilken formulering passar i en vetenskaplig text?", "Resultaten tyder på ett samband.", ["Resultaten bevisar att det är så.", "Det är uppenbart att det är så."]],
  ["”Länder med fler sjukhus har fler sjuka.” Varför är slutsatsen ”sjukhus gör folk sjuka” fel?", "Större befolkning ger både fler sjukhus och fler sjuka.", ["Sjukhus gör faktiskt folk sjuka.", "Det finns inget samband."]],
  ["Vad är ett kontrafaktiskt villkor?", "ett villkor som inte uppfylldes", ["ett villkor som alltid gäller", "en orsak"]],
  ["Vilken mening är kontrafaktisk?", "Om vi hade sparat, hade vi haft råd.", ["Om vi sparar, får vi råd.", "Vi sparade och fick råd."]],
  ["Vad uttrycker ”visserligen … men”?", "ett medgivande följt av ett motargument", ["en orsak", "en följd"]],
  ["Vilken mening uttrycker orsak med en nominalisering?", "Prisökningen ledde till minskade köp.", ["Priserna steg, så folk köpte mindre.", "Eftersom priserna steg, köpte folk mindre."]],
  ["Vilket uttryck är mest formellt?", "till följd av", ["pga", "för att liksom"]],
  ["Vilket uttryck visar ett villkor?", "under förutsättning att", ["till följd av", "således"]],
  ["Vilket uttryck visar en följd?", "vilket medförde att", ["förutsatt att", "även om"]],
  ["Vilket uttryck visar ett medgivande?", "visserligen … men", ["således", "till följd av"]],
  ["Vilket uttryck visar en orsak?", "med anledning av", ["därmed", "såvida inte"]],
  ["Vad är problemet med ”Sedan mobilerna kom har läsningen minskat, alltså är mobilerna skyldiga”?", "Att något händer efter något annat bevisar inte att det orsakades av det.", ["Det är inget problem.", "Meningen är för lång."]],
  ["Vilken formulering är mest exakt?", "Rökning ökar risken för lungcancer.", ["Rökning ger alltid lungcancer.", "Lungcancer beror bara på rökning."]],
  ["Vad betyder ”följaktligen”?", "som en följd av detta", ["trots detta", "under förutsättning att"]],
  ["Vad betyder ”icke desto mindre”?", "trots detta", ["som en följd av detta", "dessutom"]],
];

/* ----------------------------- Skiljetecken -------------------------------- */

const SKRIVREGLER: [string, string, string[]][] = [
  ["Räntan steg med ____.", "5 %", ["5%", "5 procent%"]], ["Det var ____ ute.", "30 °C", ["30°C", "30 ° C"]], ["Paketet väger ____.", "5 kg", ["5kg", "5 Kg"]],
  ["Mötet är ____.", "den 15 november", ["den 15:e November", "den 15 November"]], ["Datum: ____", "2026-11-15", ["15/11-2026-", "2026.11.15."]],
  ["Klockan är ____.", "14.30", ["14,30", "14 . 30"]], ["Vi har ____ elever i klassen.", "25", ["25st", "25:st"]],
  ["Hon har ____ syskon.", "tre", ["3st", "3:a"]], ["Det kostar ____.", "1 500 kronor", ["1500kr", "1,500 kronor"]], ["Befolkningen är ____.", "10,5 miljoner", ["10.5 miljoner", "10,5 Miljoner"]],
  ["Läs ____.", "s. 12–15", ["s.12-15", "sid 12 - 15"]], ["Han levde ____.", "1850–1920", ["1850-1920", "1850 - 1920"]], ["Tåget går ____.", "Stockholm–Göteborg", ["Stockholm-Göteborg", "Stockholm - Göteborg"]],
  ["Vi ses på ____.", "1900-talet", ["1900 talet", "1900–talet"]], ["Han jobbar på ____.", "FN-kontoret", ["FN kontoret", "FNkontoret"]],
  ["Skicka ett ____.", "sms", ["SMS:", "s.m.s"]], ["Det finns ____ många arter.", "t.ex.", ["t.ex", "t. ex."]],
  ["Hon har ____ läst Strindberg.", "bl.a.", ["bl.a", "bl. a."]], ["Det var ____ 200 personer.", "ca", ["ca.", "c.a"]], ["Han heter ____.", "Erik XIV", ["Erik 14", "Erik XIV:e"]],
  ["Avsnitt ____ handlar om källor.", "3.2", ["3,2", "3 . 2"]], ["Telefonnummer: ____", "08-123 45 67", ["08 1234567-", "08/1234567"]],
  ["Hon citerade: ____", "”Språket är ett verktyg.”", ["“Språket är ett verktyg.„", "'Språket är ett verktyg'"]],
  ["Uteslutning i citat: ”Språket är ____ ett verktyg.”", "[…]", ["(…)", "…."]], ["Källhänvisning: Språket förändras ____.", "(Svensson, 2020, s. 14)", ["[Svensson 2020 sid 14]", "(Svensson,2020,s14)"]],
  ["Hon kom på ____ plats.", "tredje", ["3:dje", "3e"]], ["Det hände ____.", "på 1990-talet", ["på 1990 talet", "på 90 -talet"]],
  ["Vi läste ____ av romanen.", "kapitel 3", ["kapitel tre:e", "Kap.3"]], ["Mötet varar ____.", "kl. 9–11", ["kl 9-11", "kl.9 - 11"]],
  ["Hyran är ____ i månaden.", "8 500 kronor", ["8500kr", "8.500 kronor"]], ["Andelen ökade till ____.", "12,5 %", ["12.5%", "12,5%"]],
  ["Hastigheten var ____.", "90 km/h", ["90km/h", "90 Km/h"]], ["Vi läste ____ i skolan.", "Röda rummet", ["Röda Rummet", "röda rummet"]],
  ["Han svarade: ____", "”Jag vet inte.”", ["”jag vet inte”.", "'Jag vet inte'."]], ["Vi ses ____.", "kl. 18.00", ["kl 18:00:", "kl.18,00"]],
  ["Hon föddes ____.", "den 3 maj 2001", ["den 3:e Maj 2001", "3/5-01:"]], ["Läs ____.", "kapitel 2–4", ["kapitel 2-4", "kap.2 - 4"]],
];

const STRECK: [string, "tankstreck –" | "bindestreck -"][] = [
  ["1990 _ 2020", "tankstreck –"], ["FN _ möte", "bindestreck -"], ["s. 4 _ 8", "tankstreck –"], ["e _ post", "bindestreck -"],
  ["Malmö _ Köpenhamn", "tankstreck –"], ["1800 _ talet", "bindestreck -"], ["Hon kom _ till slut.", "tankstreck –"], ["tv _ serie", "bindestreck -"],
  ["måndag _ fredag", "tankstreck –"], ["EU _ medlem", "bindestreck -"], ["Vi vann _ igen!", "tankstreck –"], ["mp3 _ spelare", "bindestreck -"],
  ["kl. 8 _ 16", "tankstreck –"], ["svensk _ engelsk ordbok", "bindestreck -"], ["Han sa _ efter en lång paus _ ja.", "tankstreck –"], ["A _ lag", "bindestreck -"],
  ["sidorna 12 _ 20", "tankstreck –"], ["cd _ skiva", "bindestreck -"], ["Stockholm _ Uppsala", "tankstreck –"], ["öst _ västlig", "bindestreck -"],
  ["matchen slutade 3 _ 1", "tankstreck –"], ["Pippi _ böckerna", "bindestreck -"], ["2010 _ 2015", "tankstreck –"], ["x _ axeln", "bindestreck -"],
];

const KOMMA_GY: [string, string, string[]][] = [
  ["Min bror ____ som är tolv år, spelar trummor.", ",", ["_"]], ["Boken ____ som jag läser är spännande.", "_", [","]],
  ["Stockholm ____ Sveriges huvudstad, ligger vid Mälaren.", ",", ["_"]], ["Hon kom inte ____ vilket förvånade alla.", ",", ["_"]],
  ["Jag vet ____ att du har rätt.", "_", [","]], ["Det regnade ____ men vi gick ut ändå.", ",", ["_"]],
  ["Vi köpte mjölk, bröd ____ och ost.", "_", [","]],
  ["Greta Thunberg ____ klimataktivisten, talade i FN.", ",", ["_"]], ["Hon frågade ____ om jag var hungrig.", "_", [","]],
  ["Studien som publicerades i går ____ visar ett samband.", "_", [","]], ["Studien ____ som publicerades i går, visar ett samband.", ",", ["_"]],
  ["Han var trött ____ så han gick och la sig.", ",", ["_"]], ["Eleverna ____ som hade pluggat, klarade provet. (alla elever hade pluggat)", ",", ["_"]],
  ["Eleverna ____ som hade pluggat klarade provet. (bara de som pluggat)", "_", [","]], ["Ja ____ jag kommer.", ",", ["_"]],
  ["Tack ____ Lisa!", ",", ["_"]], ["Tyvärr ____ kan jag inte komma.", "_", [","]],
  ["Han sa att han skulle komma ____ men han kom aldrig.", ",", ["_"]], ["Vi åkte till Rom ____ Paris och London.", ",", ["_"]],
];

const UTSKRIVNA: [string, string][] = [
  ["bl.a.", "bland annat"], ["t.ex.", "till exempel"], ["m.m.", "med mera"], ["s.k.", "så kallad/så kallat/så kallade"], ["dvs.", "det vill säga"],
  ["fr.o.m.", "från och med"], ["t.o.m.", "till och med"], ["p.g.a.", "på grund av"], ["jfr", "jämför"], ["resp.", "respektive"],
  ["o.d.", "och dylikt"], ["f.d.", "före detta"], ["inkl.", "inklusive"], ["ca", "cirka"], ["etc.", "et cetera"], ["obs.", "observera"],
  ["s.", "sidan/sida"], ["uppl.", "upplaga/upplagan"], ["red.", "redaktör/redaktörer"], ["m.fl.", "med flera"],
];

/* ------------------------------- Stavning ---------------------------------- */

const STORLITEN: [string, string, string[]][] = [
  ["Vi ses på ____.", "måndag", ["Måndag"]], ["Hon fyller år i ____.", "april", ["April"]], ["Han talar ____.", "spanska", ["Spanska"]],
  ["Hon är ____.", "norska", ["Norska"]], ["Vi firar ____.", "jul", ["Jul"]], ["Hon bor i ____.", "Göteborg", ["göteborg"]],
  ["Vi läste ____.", "Röda rummet", ["Röda Rummet", "röda rummet"]], ["Han arbetar på ____.", "Skatteverket", ["skatteverket", "SkatteVerket"]],
  ["Hon är ____.", "svensk", ["Svensk"]], ["Vi läste om ____.", "andra världskriget", ["Andra Världskriget", "Andra världskriget"]],
  ["Hon studerar vid ____.", "Lunds universitet", ["lunds universitet", "Lunds Universitet"]], ["Han heter ____.", "Karl XII", ["karl XII", "Karl xii"]],
  ["De bor vid ____.", "Medelhavet", ["medelhavet", "MedelHavet"]], ["Hon jobbar i ____.", "riksdagen", ["Riksdagen"]],
  ["Vi tittade på ____.", "Rapport", ["rapport"]], ["Han är ____.", "kristen", ["Kristen"]], ["Hon är född ____.", "i mars", ["i Mars"]],
  ["Vi åkte till ____.", "Norden", ["norden"]], ["Hon talar ____ engelska.", "amerikansk", ["Amerikansk"]], ["Vi läste ____.", "Bibeln", ["bibeln", "BIBELN"]],
  ["Han reste till ____.", "Nordamerika", ["nordamerika", "NordAmerika"]], ["De firade ____.", "midsommar", ["Midsommar"]], ["Hon arbetar i ____.", "Europeiska unionen", ["europeiska unionen", "Europeiska Unionen"]],
  ["Vi läste ____.", "Svenska Dagbladet", ["svenska dagbladet", "Svenska dagbladet"]], ["Hon tycker om ____ mat.", "thailändsk", ["Thailändsk"]],
  ["Han heter ____.", "Kalle Anka", ["kalle anka", "Kalle anka"]], ["Det är ____.", "lördag", ["Lördag"]], ["Vi ses ____.", "på nyårsafton", ["på Nyårsafton"]],
  ["Hon är ____.", "lutheran", ["Lutheran"]], ["Han bor på ____.", "Drottninggatan", ["drottninggatan", "Drottning gatan"]],
  ["Vi har lov ____.", "under påsken", ["under Påsken"]], ["Det hände under ____.", "medeltiden", ["Medeltiden"]], ["Hon läste om ____.", "Förenta nationerna", ["förenta nationerna", "Förenta Nationerna"]],
  ["Han kommer från ____.", "Östergötland", ["östergötland"]], ["Hon pratar ____.", "arabiska", ["Arabiska"]],
  ["Han är ____.", "muslim", ["Muslim"]], ["Vi åkte till ____.", "Skandinavien", ["skandinavien"]], ["Hon läste ____.", "Harry Potter och de vises sten", ["Harry Potter och De Vises Sten", "harry potter och de vises sten"]],
  ["Han tittade på ____.", "Melodifestivalen", ["melodifestivalen", "MelodiFestivalen"]], ["Det hände på ____.", "fredagen", ["Fredagen"]], ["Vi bor i ____.", "Västra Götaland", ["västra götaland", "västra Götaland"]],
];

const FORVAXLING: [string, string, string[]][] = [
  ["____ bor du?", "Var", ["Vart"]], ["____ ska du?", "Vart", ["Var"]], ["Jag vet inte ____ nyckeln är.", "var", ["vart"]],
  ["____ tog den vägen?", "Vart", ["Var"]], ["Hon frågade ____ vi skulle åka.", "vart", ["var"]],
  ["Det regnade, ____ vi gick in.", "så", ["då"]], ["Vi kom fram. ____ var affären stängd.", "Då", ["Så"]], ["____ jag var liten bodde vi i Umeå.", "När", ["Då"]],
  ["____ kom för sent.", "De", ["Dem", "Dom"]], ["Jag såg ____ i går.", "dem", ["de", "dom"]], ["____ som vill får gå.", "De", ["Dem"]],
  ["Vi bjöd ____ på fika.", "dem", ["de"]], ["Det är ____ som bestämmer.", "de", ["dem"]], ["Hon pratade med ____.", "dem", ["de"]],
  ["Jag ville ____ stanna.", "egentligen", ["igentligen", "egentlien"]], ["Det var ____ roligt.", "jätteroligt", ["jätte roligt", "jätte-roligt"]],
  ["Vi åkte ____.", "i alla fall", ["iallafall", "ialla fall"]], ["Hon är ____ duktig.", "väldigt", ["väldit", "välldigt"]], ["Det ____ bra.", "känns", ["kännts", "kens"]], ["Jag ____ honom.", "känner", ["känder", "kenner"]],
  ["Han ____ ingenting.", "sa", ["sad", "saa"]], ["Hon har ____ hela boken.", "läst", ["lässt", "läsit"]], ["Jag ____ dig.", "saknar", ["saknnar", "sakna"]], ["____ du kommer, ring mig.", "Om", ["Ifall att", "Omm"]],
  ["Hon kom ____ tidigt.", "alldeles", ["aldeles", "alldelles"]], ["Det är ____ sant.", "faktiskt", ["faktikst", "fakstiskt"]], ["Vi ____ hem.", "åkte", ["åckte", "åkkte"]],
  ["____ hon kommer vet jag inte.", "Om", ["Ifall att"]], ["Vi träffas ____ dag.", "varje", ["varge", "vare"]], ["Det var ____ kallt.", "ganska", ["gansa", "ganka"]],
  ["Han svarade ____.", "genast", ["genat", "jenast"]], ["Det hände ____.", "nyligen", ["nylingen", "nyliggen"]],
];

const BINDESTRECK: [string, string, string[]][] = [
  ["Vi hade ____.", "FN-möte", ["FN möte", "FNmöte"]], ["Skicka ett ____.", "e-postmeddelande", ["e postmeddelande", "epost meddelande"]],
  ["Han föddes på ____.", "1900-talet", ["1900 talet", "1900talet"]], ["Vi såg en ____.", "tv-serie", ["tv serie", "tvserie"]],
  ["Hon är ____.", "EU-medborgare", ["EU medborgare", "EUmedborgare"]], ["Det var en ____.", "cd-skiva", ["cd skiva", "cdskiva"]],
  ["Vi åkte ____.", "nattåg", ["nattåg-", "natt tåg"]], ["Hon köpte en ____.", "glasskål", ["glass skål", "glasskkål"]], ["Han är ____.", "tioåring", ["tio åring", "10 åring"]],
  ["Vi spelade ____.", "A-lag", ["A lag", "Alag"]], ["Ge mig ____.", "en sms-tjänst", ["en sms tjänst", "en smstjänst"]], ["Hon har ett ____.", "mp3-format", ["mp3 format", "mp3format"]],
  ["Det var en ____.", "60-årsfest", ["60 årsfest", "60års fest"]], ["Han vann ____.", "SM-guld", ["SM guld", "SMguld"]], ["Vi har ____.", "it-support", ["it support", "itsupport"]],
  ["Hon gick på ____.", "fotbollsmatch", ["fotbolls match", "fotbolls-match"]], ["Han köpte ____.", "sommarkläder", ["sommar kläder", "sommar-kläder"]], ["Det var en ____.", "lågprisbutik", ["lågpris butik", "låg prisbutik"]],
  ["Vi läste en ____.", "svensk-engelsk ordbok", ["svensk engelsk ordbok", "svenskengelsk-ordbok"]], ["Hon tittade på ____.", "x-axeln", ["x axeln", "xaxeln"]],
  ["Vi åt ____.", "lunch", ["lunsch", "lönch"]], ["Hon köpte ____.", "juice", ["jus", "djus"]],
  ["Vi ____ på kvällen.", "chattade", ["tjattade", "chatade"]], ["Hon ____ filmen.", "streamade", ["strimade", "streemade"]],
  ["Han ____ lådan.", "tejpade", ["tapeade", "tejjpade"]], ["Vi drack ____.", "läsk", ["läsck", "lesk"]], ["Hon har ett ____.", "jobb", ["job", "jåbb"]],
];

/* ------------------------------ Textbindning ------------------------------- */

const MARKORER_GY: [string, string, string[]][] = [
  ["Metoden är billig. ____ tar den lång tid.", "Å andra sidan", ["Därtill", "Följaktligen"]],
  ["Studien har tre delar. ____ beskrivs bakgrunden.", "Inledningsvis", ["Följaktligen", "Däremot"]],
  ["Utsläppen ökar. ____ minskar den biologiska mångfalden.", "Dessutom", ["Däremot", "Inledningsvis"]],
  ["Många är positiva. ____ finns det kritiker.", "Emellertid", ["Därtill", "Således"]],
  ["Inga skillnader hittades. Hypotesen kan ____ inte bekräftas.", "således", ["däremot", "inledningsvis"]],
  ["____ kan konstateras att frågan är komplex.", "Sammanfattningsvis", ["Därtill", "Inledningsvis"]],
  ["Den första orsaken är ekonomisk. ____ handlar om miljön.", "Den andra", ["Däremot", "Följaktligen"]],
  ["I det följande ____ tre perspektiv.", "diskuteras", ["sammanfattas", "avslutas"]],
  ["Forskningen visar ett tydligt samband. ____ är orsaken oklar.", "Däremot", ["Därtill", "Följaktligen"]],
  ["Priset är högt. ____ är kvaliteten god.", "Å andra sidan", ["Följaktligen", "Inledningsvis"]],
  ["Texten är välskriven. ____ saknar den källor.", "Dock", ["Därtill", "Således"]],
  ["Förslaget är billigt och enkelt. ____ är det miljövänligt.", "Därtill", ["Däremot", "Emellertid"]],
  ["Visserligen kostar reformen mycket, ____ vinsterna är större.", "men", ["således", "dessutom"]],
  ["____ vill jag tacka alla som deltagit.", "Avslutningsvis", ["Inledningsvis", "Däremot"]],
  ["Unga läser mindre. ____ har läsförståelsen försämrats.", "Samtidigt", ["Inledningsvis", "Däremot"]],
  ["Syftet är att undersöka läsvanor. ____ används en enkät.", "För detta ändamål", ["Däremot", "Emellertid"]],
  ["Svenska har många lånord, ____ från engelska.", "framför allt", ["däremot", "följaktligen"]],
  ["Problemet har flera orsaker, ____ brist på resurser.", "bland annat", ["däremot", "slutligen"]],
  ["Studien är liten. Resultaten bör ____ tolkas med försiktighet.", "därför", ["däremot", "dessutom"]],
  ["Han tränade hårt. ____ förlorade han.", "Ändå", ["Således", "Därtill"]],
  ["Först presenteras metoden. ____ redovisas resultaten.", "Därefter", ["Däremot", "Således"]],
  ["Resultaten diskuteras ____ i avsnitt 5.", "närmare", ["däremot", "således"]],
  ["Detta gäller ____ mindre kommuner.", "i synnerhet", ["däremot", "således"]],
  ["Läsningen har minskat. ____ ökar lyssnandet på ljudböcker.", "Samtidigt", ["Följaktligen", "Inledningsvis"]],
  ["Som tidigare ____ finns det tre orsaker.", "nämnts", ["sammanfattats", "avslutats"]],
  ["Detta innebär ____ att fler måste hjälpa till.", "med andra ord", ["däremot", "dessutom"]],
  ["Vissa forskare menar att skärmar skadar. ____ hävdar att effekten är liten.", "Andra", ["Dessutom", "Således"]],
  ["Frågan är politisk, ____ också etisk.", "men", ["således", "följaktligen"]],
  ["Slutligen ____ förslag på fortsatt forskning.", "ges", ["inledes", "avslutas"]],
  ["Studien har två syften. ____ att kartlägga läsvanor.", "Det första är", ["Däremot är", "Således är"]],
  ["Läsningen minskar. ____ ökar skärmtiden.", "Parallellt med detta", ["Följaktligen", "Inledningsvis"]],
  ["Teorin har fått kritik. ____ menar flera forskare att den förenklar.", "Bland annat", ["Således", "Avslutningsvis"]],
  ["Vi har nu sett tre orsaker. ____ ska följderna diskuteras.", "Härnäst", ["Däremot", "Följaktligen"]],
  ["Förslaget är dyrt. ____ är det effektivt.", "Samtidigt", ["Följaktligen", "Inledningsvis"]],
  ["Hypotesen bekräftades inte. ____ behövs mer forskning.", "Följaktligen", ["Däremot", "Inledningsvis"]],
  ["Detta avsnitt ____ hur materialet samlades in.", "beskriver", ["avslutar", "sammanfattar"]],
];

const FORTSATT_GY: [string, string, string[]][] = [
  ["Fotosyntesen sker i växternas gröna delar.", "Där omvandlas solljusets energi till socker.", ["Djur behöver också energi.", "Solen är en stjärna."]],
  ["Allt fler arbetar hemifrån.", "Denna utveckling har minskat efterfrågan på kontor.", ["Kontor kan vara stora.", "Många gillar kaffe."]],
  ["Läsförståelsen bland unga har försämrats.", "Förklaringarna till detta är flera.", ["Böcker är tunga.", "Unga gillar musik."]],
  ["Selma Lagerlöf fick Nobelpriset 1909.", "Hon var den första kvinnan som fick priset.", ["Nobel uppfann dynamiten.", "1909 var ett år."]],
  ["Havsnivån stiger och isarna smälter.", "Förändringarna hotar kustnära städer.", ["Isar är kalla.", "Havet är salt."]],
  ["Syftet med texten är att undersöka nyord.", "Inledningsvis definieras begreppet nyord.", ["Ord är roliga.", "Texten är lång."]],
  ["Plast hamnar i haven.", "Där bryts den ned till mikroplast.", ["Havet är blått.", "Plast är billigt."]],
  ["Svenskan har lånat många ord från lågtyskan.", "Lånen kom främst under Hansans tid.", ["Tyskland är stort.", "Ord är viktiga."]],
  ["Enkäten besvarades av 200 elever.", "De flesta av dem var positiva till förslaget.", ["Elever går i skolan.", "Enkäter är vanliga."]],
  ["Romanen skildrar en familj i kris.", "Krisen utlöses av faderns död.", ["Familjer är vanliga.", "Romaner har kapitel."]],
  ["Demokrati bygger på allmän rösträtt.", "Rösträtten infördes i Sverige 1921.", ["Sverige är ett land.", "Val är roliga."]],
  ["Studien har två begränsningar.", "Den första är att urvalet är litet.", ["Studier är viktiga.", "Två är ett tal."]],
  ["Antibiotika har räddat miljontals liv.", "Överanvändning har dock lett till resistens.", ["Bakterier är små.", "Liv är viktigt."]],
  ["Shakespeare skrev både komedier och tragedier.", "Bland tragedierna märks Hamlet.", ["England är ett land.", "Komedier är roliga."]],
  ["Läsningen av dagstidningar har minskat.", "Samtidigt har nyhetskonsumtionen i mobilen ökat.", ["Tidningar är av papper.", "Mobiler är dyra."]],
  ["Skogen binder koldioxid.", "Detta gör den viktig i klimatarbetet.", ["Skogen är grön.", "Svamp växer i skogen."]],
  ["Författaren använder många metaforer.", "Den mest framträdande är bilden av havet som fängelse.", ["Hav är stora.", "Författare skriver."]],
  ["Ekonomin växte snabbt under 1950-talet.", "Tillväxten möjliggjorde utbyggnaden av välfärden.", ["1950 är ett år.", "Ekonomi är svårt."]],
  ["Barn lär sig språk genom samtal.", "Därför är högläsning och samtal viktiga i förskolan.", ["Barn är små.", "Språk har ord."]],
  ["Debatten om skolmobiler har pågått länge.", "Förespråkarna för ett förbud hänvisar till koncentrationen.", ["Mobiler är vanliga.", "Debatter är långa."]],
];

const FUNKTION_GY: [string, string][] = [
  ["I det följande diskuteras tre orsaker.", "metatext"], ["Avslutningsvis sammanfattas resonemanget.", "metatext"], ["Denna utveckling är oroande.", "sammanfattande referens"],
  ["Problemet kräver samarbete.", "sammanfattande referens"], ["Hon var den första kvinnan som fick priset.", "pronomen som syftar tillbaka"], ["Dessutom minskar den biologiska mångfalden.", "sambandsmarkör"],
  ["Inledningsvis definieras begreppet.", "metatext"], ["Förändringarna hotar kustnära städer.", "sammanfattande referens"], ["Därför behövs nya regler.", "sambandsmarkör"],
  ["Den får stor betydelse.", "pronomen som syftar tillbaka"], ["Som framgår av tabellen ökar antalet.", "metatext"], ["Beslutet möttes av kritik.", "sammanfattande referens"],
  ["Emellertid finns det kritiker.", "sambandsmarkör"], ["De flesta av dem var positiva.", "pronomen som syftar tillbaka"], ["I nästa avsnitt redovisas resultaten.", "metatext"],
  ["Denna tendens syns i hela landet.", "sammanfattande referens"], ["Följaktligen förkastades hypotesen.", "sambandsmarkör"], ["Det var han som tog initiativet.", "pronomen som syftar tillbaka"],
  ["Sammanfattningsvis kan konstateras att …", "metatext"], ["Situationen förvärrades snabbt.", "sammanfattande referens"], ["Å andra sidan är metoden billig.", "sambandsmarkör"],
  ["Hennes bok blev en succé.", "pronomen som syftar tillbaka"], ["Detta faktum förklarar mycket.", "sammanfattande referens"],
  ["Därefter presenteras metoden.", "metatext"],
];
const FTYPER_GY = ["metatext", "sammanfattande referens", "pronomen som syftar tillbaka", "sambandsmarkör"];

const SAMMANFATTANDE: [string, string, string[]][] = [
  ["Utsläppen ökar och skogarna avverkas. ____ är oroande.", "Denna utveckling", ["Den", "Hon"]],
  ["Unga läser allt mindre. ____ kan bero på flera faktorer.", "Detta", ["Den", "De"]],
  ["Regeringen höjde skatten. ____ möttes av kritik.", "Beslutet", ["Regeringen", "Den"]],
  ["Priserna steg kraftigt under året. ____ drabbade främst låginkomsttagare.", "Prisökningarna", ["Priserna året", "Han"]],
  ["Hälften av eleverna svarade inte på enkäten. ____ gör resultaten osäkra.", "Det stora bortfallet", ["Eleverna", "Hon"]],
  ["Fler arbetar hemifrån och kontoren står tomma. ____ påverkar stadskärnorna.", "Förändringen", ["Kontoren", "Hemmen"]],
  ["Antalet bin minskar i hela Europa. ____ hotar livsmedelsförsörjningen.", "Bidöden", ["Europa", "De"]],
  ["Skolan införde mobilförbud. ____ ledde till lugnare lektioner.", "Förbudet", ["Mobilen", "Hon"]],
  ["Flera forskare har kritiserat metoden. ____ riktar sig främst mot urvalet.", "Kritiken", ["Forskarna", "Den metoden"]],
  ["Vattennivån steg med två meter. ____ tvingade hundratals att lämna sina hem.", "Översvämningen", ["Vattnet", "De"]],
  ["Elever som läser mycket får ett större ordförråd. ____ är välbelagt i forskningen.", "Sambandet", ["Eleverna", "Ordförrådet"]],
  ["Kommunen bygger två nya skolor. ____ beräknas kosta 400 miljoner.", "Satsningen", ["Kommunen", "De"]],
  ["Många unga upplever stress inför prov. ____ behöver tas på allvar.", "Problemet", ["Proven", "De unga"]],
  ["Riksdagen röstade nej till förslaget. ____ var väntat.", "Utfallet", ["Riksdagen", "Han"]],
  ["Språket förändras ständigt genom nyord och lån. ____ har pågått i århundraden.", "Denna process", ["Nyorden", "Den"]],
  ["Temperaturen har stigit med en grad. ____ kan verka liten men får stora följder.", "Ökningen", ["Graden", "Hon"]],
  ["Hälften av alla arter i området har försvunnit. ____ beror främst på avverkning.", "Förlusten", ["Arterna", "Området"]],
  ["Flera tåg ställdes in och resenärer blev strandsatta. ____ kritiserades hårt.", "Hanteringen", ["Tågen", "Resenärerna"]],
  ["Läraren lät eleverna välja ämne själva. ____ ökade motivationen.", "Friheten", ["Läraren", "Ämnet"]],
  ["Antalet lånade böcker har halverats. ____ oroar biblioteken.", "Minskningen", ["Böckerna", "Den"]],
];

/* ------------------------------- Stilistik --------------------------------- */

const RETORIK: [string, string][] = [
  ["Jag har en dröm. Jag har en dröm om rättvisa. Jag har en dröm om frihet.", "anafor"], ["Vem vill inte leva i fred?", "retorisk fråga"],
  ["Jag kom, jag såg, jag segrade.", "tretal"], ["sol, sand och semester", "allitteration"], ["Vilket härligt väder! (i ösregn)", "ironi"],
  ["Han har gått bort.", "eufemism"], ["Ute stormade det, inne var det stilla.", "antites"], ["Vi ska kämpa på stränderna, vi ska kämpa på fälten, vi ska kämpa i städerna.", "anafor"],
  ["Är det verkligen rimligt att barn ska betala för vuxnas misstag?", "retorisk fråga"], ["Frihet, jämlikhet, broderskap.", "tretal"], ["Stilla, stjärnklara, strålande natt", "allitteration"],
  ["Toppen, nu missade vi bussen också.", "ironi"], ["Han blev uppsagd. → Hans tjänst avvecklades.", "eufemism"], ["Rik och fattig, ung och gammal – alla drabbas.", "antites"],
  ["Inte en gång. Inte två gånger. Utan tusen gånger har vi sagt det.", "anafor"], ["Hur länge ska vi vänta?", "retorisk fråga"], ["Snabbt, enkelt och billigt.", "tretal"],
  ["Glada, gröna gräsmattor", "allitteration"],
  ["Så snällt av dig att äta upp hela kakan själv.", "ironi"], ["en äldre medborgare (i stället för en gammal person)", "eufemism"],
  ["Krig är fred. Frihet är slaveri.", "antites"], ["Varje dag. Varje timme. Varje minut tänker jag på det.", "anafor"],
  ["Kan vi verkligen blunda för detta?", "retorisk fråga"], ["Lyssna, lär och led!", "tretal"], ["Mycket mjuk mjölkchoklad", "allitteration"],
  ["Vilken tur att det regnar på vår semester.", "ironi"], ["Hon somnade in. (dog)", "eufemism"], ["Liv och död, ljus och mörker", "antites"],
  ["Han är en klippa.", "metafor"], ["Hon var snabb som en vessla.", "liknelse"], ["Vinden viskade.", "besjälning"], ["Jag har sagt det tusen gånger.", "hyperbol"],
  ["Hans ord var vassa knivar.", "metafor"], ["Det var tyst som i graven.", "liknelse"], ["Staden sov.", "besjälning"], ["Kön var en mil lång.", "hyperbol"],
  ["Det var inte helt dumt. (= det var bra)", "litotes"], ["Hon är inte direkt fattig. (= rik)", "litotes"], ["Kronan beslutade. (= kungen)", "metonymi"],
  ["Vita huset meddelade i går … (= USA:s regering)", "metonymi"],
];
const RFIGURER = ["anafor", "retorisk fråga", "tretal", "allitteration", "ironi", "eufemism", "antites", "metafor", "liknelse", "besjälning", "hyperbol", "litotes", "metonymi"];

const GENRE: [string, string][] = [
  ["Resultaten tyder på ett samband mellan sömn och koncentration (Lind, 2021).", "vetenskaplig text"], ["Stockholm (TT) Tre personer skadades i en brand i natt.", "nyhetsartikel"],
  ["Jag har länge undrat varför vi vuxna alltid ska ha rätt.", "krönika"], ["Skolan måste förbjuda mobiler – nu!", "debattartikel"],
  ["Regnet slog mot rutan. Hon visste att han aldrig skulle komma tillbaka.", "skönlitteratur"], ["Syftet med studien är att undersöka …", "vetenskaplig text"],
  ["Enligt polisen är brandorsaken ännu okänd.", "nyhetsartikel"], ["Min mormor sa alltid att man inte ska gråta över spilld mjölk. Hon hade fel.", "krönika"],
  ["Därför kräver vi att kommunen omedelbart …", "debattartikel"], ["Månen hängde som en lykta över sjön.", "skönlitteratur"],
  ["I tabell 2 redovisas fördelningen av svaren.", "vetenskaplig text"], ["Händelsen inträffade strax efter klockan 22 på tisdagskvällen.", "nyhetsartikel"],
  ["Jag erkänner: jag är en sådan som läser slutet först.", "krönika"], ["Det är dags att politikerna tar ansvar för skolan.", "debattartikel"],
  ["– Spring! skrek hon. Vi sprang.", "skönlitteratur"], ["Tidigare forskning har visat motstridiga resultat (Berg, 2018; Ali, 2020).", "vetenskaplig text"],
  ["Regeringen presenterade i dag sin budget.", "nyhetsartikel"], ["Visst är det märkligt att vi fortfarande ställer om klockan två gånger om året?", "krönika"],
  ["Tre skäl talar för en kortare skoldag.", "debattartikel"], ["Huset hade stått tomt i trettio år när vi flyttade in.", "skönlitteratur"],
  ["Urvalet bestod av 120 elever i årskurs 9.", "vetenskaplig text"], ["Branden är nu under kontroll, uppger räddningstjänsten.", "nyhetsartikel"],
  ["Ingen förbjuder oss att vara lite tråkiga ibland. Det borde vi uppskatta mer.", "krönika"], ["Vi som skriver denna artikel är lärare i Malmö.", "debattartikel"],
  ["Han log, men ögonen log inte med.", "skönlitteratur"],
];
const GENRER = ["vetenskaplig text", "nyhetsartikel", "krönika", "debattartikel", "skönlitteratur"];

const KONNOTATION: [string, "positiv" | "negativ" | "neutral"][] = [
  ["hem", "positiv"], ["bostad", "neutral"], ["kåk", "negativ"], ["bestämd", "positiv"], ["envis", "negativ"], ["målmedveten", "positiv"],
  ["sparsam", "positiv"], ["snål", "negativ"], ["ekonomisk", "neutral"], ["smal", "neutral"], ["slank", "positiv"], ["mager", "negativ"],
  ["nyfiken", "positiv"], ["snokig", "negativ"], ["äldre", "neutral"], ["gammal stofil", "negativ"], ["erfaren", "positiv"], ["barnslig", "negativ"],
  ["barnsligt förtjust", "positiv"], ["frihetskämpe", "positiv"], ["upprorsmakare", "negativ"], ["demonstrant", "neutral"], ["doft", "positiv"], ["stank", "negativ"],
];

const EUFEMISM: [string, string, string[]][] = [
  ["Vilket är en eufemism för ”dö”?", "gå bort", ["avlida plötsligt", "dö"]], ["Vilket är en eufemism för ”avskeda”?", "avveckla tjänsten", ["sparka", "kasta ut"]],
  ["Vilket är en eufemism för ”gammal”?", "till åren kommen", ["uråldrig", "gammal"]], ["Vilket är en eufemism för ”fattig”?", "ekonomiskt utsatt", ["pank", "barskrapad"]],
  ["Vilket är en eufemism för ”tjock”?", "kraftig", ["fet", "tjock"]], ["Vilket är en eufemism för ”toalett”?", "badrum", ["dass", "toa"]],
  ["Vilket är en eufemism för ”krig”?", "konflikt", ["slakt", "krig"]], ["Vilket är en eufemism för ”lögn”?", "osanning", ["lögn", "bluff"]],
  ["Vilket är en eufemism för ”arbetslös”?", "mellan två jobb", ["arbetslös", "utan jobb"]], ["Vilket är en eufemism för ”fängelse”?", "kriminalvårdsanstalt", ["finka", "fängelse"]],
  ["Vilket är en eufemism för ”dum”?", "inte den skarpaste kniven i lådan", ["korkad", "dum"]], ["Vilket är en eufemism för ”prishöjning”?", "prisjustering", ["prishöjning", "dyrare"]],
  ["Vilket är en eufemism för ”misslyckande”?", "lärdom", ["fiasko", "flopp"]], ["Vilket är en eufemism för ”full”?", "lite glad", ["packad", "full"]],
  ["Vilket är en eufemism för ”nedskärningar”?", "effektiviseringar", ["nedskärningar", "slakt"]],
];

export const HAFTEN_GY: HafteKalla[] = [
  {
    id: "ordklasser-3-pronomen-particip",
    titel: "De, dem, sin, vars",
    underrubrik: "Pronomen, particip och ordklassbyte",
    omrade: "Grammatik",
    steg: 4,
    feltyper: ["grammatik.de-dem", "grammatik.kongruens"],
    regel: [
      "De = subjektsform, dem = objektsform. Byt mot vi/oss: vi kom (de kom), de såg oss (de såg dem).",
      "Sin/sitt/sina syftar på subjektet i samma sats: Hon tog sin jacka (sin egen). Hans/hennes/deras syftar på någon annan.",
      "Relativa pronomen: som, vilken/vilket/vilka (efter komma), vars (ägande). Vilket kan syfta på en hel sats.",
      "Perfekt particip böjs som adjektiv: en stängd dörr, ett stängt fönster, stängda dörrar. Presens particip slutar på -ande/-ende.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Välj rätt pronomen.", typ: "val", rader: rader(PRONOMEN_GY.map(([m, r, fel], i) => m.replace("{}", `{${val("", r, fel, i).slice(2, -1)}}`))) },
      { rubrik: "Del B", instruktion: "Skriv participet i rätt form.", typ: "skriv", rader: rader(PARTICIP.map(([v, m, svar]) => `${m.replace("___", `{${svar}}`)} (${v})`)) },
      { rubrik: "Del C", instruktion: "Vilken sorts pronomen är det?", typ: "val", rader: rader(PRONOMENTYP.map(([o, t], i) => val(o, t, PTYPER.filter((x) => x !== t).filter((_, j) => (j + i) % 3 === 0).slice(0, 3), i))) },
      { rubrik: "Del D", instruktion: "Vilken ordklass är ordet med STORA BOKSTÄVER?", typ: "val", rader: lista(SAMMA_ORD) },
    ],
  },
  {
    id: "morfem-4-fackord",
    titel: "Bio-, -logi och -krati",
    underrubrik: "Lånmorfem, fackord och nominalisering",
    omrade: "Ordets byggstenar",
    steg: 4,
    feltyper: ["stavning.ovrigt", "ordval.precision"],
    regel: [
      "Många fackord är byggda av grekiska och latinska morfem: bio (liv) + logi (lära) = biologi.",
      "Fria morfem kan stå som egna ord (hus, glad). Bundna kan inte stå ensamma (o-, -het, -ar).",
      "Nominalisering: ett verb blir substantiv – utveckla → utveckling. Vanligt i sakprosa, men för många gör texten tung.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Vad betyder morfemet?", typ: "val", rader: lista(MORFEM_BETYD) },
      { rubrik: "Del B", instruktion: "Skriv fackordet.", typ: "skriv", rader: rader(FACKORD.map(([b, o]) => `${b} = {${FACKORD_SVAR_ALT[o] ?? o}}`)) },
      { rubrik: "Del C", instruktion: "Fritt eller bundet morfem?", typ: "val", rader: rader(FRITT_BUNDET.map(([m, t]) => `${m} {${t === "fritt" ? "*fritt|bundet" : "fritt|*bundet"}}`)) },
      { rubrik: "Del D", instruktion: "Skriv substantivet (nominaliseringen).", typ: "skriv", rader: rader(NOMINALISERING.map(([v, s]) => `${v} → {${s}}`)) },
    ],
  },
  {
    id: "satsdelar-4-fullstandig-satsanalys",
    titel: "Agent, formellt och egentligt subjekt",
    underrubrik: "Fullständig satsanalys",
    omrade: "Satsdelar",
    steg: 4,
    feltyper: ["grammatik.subjekt-verb"],
    regel: [
      "Agent: den som utför handlingen i en passiv sats, inleds med av: Boken skrevs AV SELMA LAGERLÖF.",
      "Formellt subjekt (det) fyller subjektsplatsen, egentligt subjekt är det som det handlar om: Det sitter EN FÅGEL på taket.",
      "En hel bisats kan vara subjekt, objekt, adverbial eller predikativ.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Vilken satsdel är delen med STORA BOKSTÄVER?",
        typ: "val",
        rader: valjSatsdel(GY_MENINGAR, ["S", "P", "O", "IO", "A", "PV", "AG", "FS", "ES"]),
      },
      { rubrik: "Del B", instruktion: "Vilken satsdel är bisatsen?", typ: "val", rader: lista(BISATS_SATSDEL) },
    ],
  },
  {
    id: "meningsbyggnad-6-stil-och-ordfoljd",
    titel: "Satsradning, slutfokus och passiv",
    underrubrik: "Meningsbyggnad för olika syften",
    omrade: "Meningsbyggnad",
    steg: 4,
    feltyper: ["grammatik.ordfoljd", "struktur.meningsvariation", "skiljetecken.komma"],
    regel: [
      "Satsradning: två huvudsatser med bara komma emellan. Rätta med punkt, semikolon, kolon eller ett sambandsord.",
      "BIFF: i bisatser står satsadverbialet före det finita verbet. Efter ett inledande adverbial kommer verbet på plats två.",
      "Slutfokus: det viktigaste sist. Utbrytning (det var … som) och passiv lyfter fram det du vill betona.",
      "Verbalstil är lättare att läsa än nominalstil: Vi måste minska utsläppen – inte En minskning av utsläppen är nödvändig.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Satsradning eller korrekt?", typ: "val", rader: rader(SATSRADNING.map(([m, s]) => `${m} {${s ? "*satsradning|korrekt" : "satsradning|*korrekt"}}`)) },
      { rubrik: "Del B", instruktion: "Välj rätt svar.", typ: "val", rader: lista(STIL_VAL.map(([f, r, fel]) => [f, r, fel])) },
      { rubrik: "Del C", instruktion: "Skriv om meningen med rätt ordföljd.", typ: "ratta", rader: rader(BIFF_GY) },
      { rubrik: "Del D", instruktion: "Skriv meningen i passiv form med -s och agent: Mannen greps av polisen.", typ: "ratta", rader: rader(AKTIV_PASSIV.map(([a, p]) => `${a} => ${p}`)) },
    ],
  },
  {
    id: "samband-3-formella-samband",
    titel: "Till följd av, således, förutsatt att",
    underrubrik: "Exakta samband i sakprosa",
    omrade: "Samband",
    steg: 4,
    feltyper: ["struktur.textbindning", "innehall.argumentation"],
    regel: [
      "Orsak: till följd av, med anledning av, beror på. Följd: medför, således, därmed, följaktligen.",
      "Villkor: förutsatt att, under förutsättning att, såvida inte. Medgivande: även om, trots att, visserligen … men.",
      "Samband (korrelation) är inte samma sak som orsak (kausalitet). Formulera dig försiktigt: tyder på, samvarierar med.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Välj det uttryck som passar.", typ: "val", rader: rader(FORMELLA_SAMBAND.map(([m, r, fel], i) => m.replace("____", `{${val("", r, fel, i).slice(2, -1)}}`))) },
      { rubrik: "Del B", instruktion: "Vilket samband uttrycker ordet?", typ: "val", rader: rader(SAMBANDSTYP.map(([o, t]) => `${o} {${STYPER.map((x) => (x === t ? "*" : "") + x).join("|")}}`)) },
      { rubrik: "Del C", instruktion: "Skriv om meningen så att sambandet uttrycks korrekt.", typ: "ratta", rader: rader(SAMBAND_RATTA) },
      { rubrik: "Del D", instruktion: "Samband och orsak. Välj rätt svar.", typ: "val", rader: lista(KORRELATION) },
    ],
  },
  {
    id: "skiljetecken-4-skrivregler",
    titel: "5 %, 1990–2020 och (Svensson, 2020)",
    underrubrik: "Skrivregler: siffror, tecken, citat och förkortningar",
    omrade: "Skiljetecken",
    steg: 4,
    feltyper: ["skiljetecken.komma", "skiljetecken.punkt", "innehall.kallor"],
    regel: [
      "Mellanslag före procent och enheter: 5 %, 30 °C, 5 kg. Tusental delas med mellanslag: 1 500.",
      "Tankstreck (–) betyder till: 1990–2020, s. 4–8. Bindestreck (-) i sammansättningar: FN-möte, 1800-talet.",
      "Svenska citattecken ” ”. Uteslutning i citat: […]. Källhänvisning: (Författare, år, s. X).",
      "Komma kring inskott som kan strykas: Min bror, som är tolv år, spelar trummor.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Välj den form som följer skrivreglerna.", typ: "val", rader: rader(SKRIVREGLER.map(([m, r, fel], i) => m.replace("____", `{${val("", r, fel, i).slice(2, -1)}}`))) },
      { rubrik: "Del B", instruktion: "Tankstreck eller bindestreck?", typ: "val", rader: rader(STRECK.map(([m, t]) => `${m} {${t === "tankstreck –" ? "*tankstreck –|bindestreck -" : "tankstreck –|*bindestreck -"}}`)) },
      { rubrik: "Del C", instruktion: "Ska det stå komma? (_ = inget komma)", typ: "val", rader: rader(KOMMA_GY.map(([m, r, fel], i) => m.replace("____", `{${val("", r, fel, i).slice(2, -1)}}`))) },
      { rubrik: "Del D", instruktion: "Skriv ut förkortningen.", typ: "skriv", rader: rader(UTSKRIVNA.map(([f, u]) => `${f} = {${u}}`)) },
    ],
  },
  {
    id: "stavning-10-sprakriktighet",
    titel: "Måndag, Röda rummet och FN-möte",
    underrubrik: "Språkriktighet: stor bokstav, förväxlingar och sammansättningar",
    omrade: "Stavning",
    steg: 4,
    feltyper: ["stavning.stor-bokstav", "stavning.ovrigt", "grammatik.de-dem", "stavning.sarskrivning"],
    regel: [
      "Liten bokstav: veckodagar, månader, högtider, språk, nationaliteter och religioner. Stor bokstav: namn, platser, institutioner och verk (bara första ordet: Röda rummet).",
      "Var = plats, vart = riktning. De = subjekt, dem = objekt.",
      "Bindestreck efter förkortningar och siffror i sammansättningar: FN-möte, 1900-talet. Tre likadana konsonanter blir två: nattåg.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Stor eller liten bokstav? Välj rätt.", typ: "val", rader: rader(STORLITEN.map(([m, r, fel], i) => m.replace("____", `{${val("", r, fel, i).slice(2, -1)}}`))) },
      { rubrik: "Del B", instruktion: "Välj rätt ord.", typ: "val", rader: rader(FORVAXLING.map(([m, r, fel], i) => m.replace("____", `{${val("", r, fel, i).slice(2, -1)}}`))) },
      { rubrik: "Del C", instruktion: "Välj rätt stavning.", typ: "val", rader: rader(BINDESTRECK.map(([m, r, fel], i) => m.replace("____", `{${val("", r, fel, i).slice(2, -1)}}`))) },
    ],
  },
  {
    id: "textbindning-3-rod-trad",
    titel: "Röd tråd",
    underrubrik: "Sambandsmarkörer, tema–rema, metatext och sammanfattande referenser",
    omrade: "Textbindning",
    steg: 4,
    feltyper: ["struktur.textbindning", "struktur.stycken", "struktur.inledning-avslutning"],
    regel: [
      "Sambandsmarkörer visar logiken: dessutom (tillägg), emellertid (motsats), således (följd), sammanfattningsvis (sammanfattning).",
      "Tema–rema: det nya i en mening blir utgångspunkt i nästa. Det skapar flyt.",
      "Sammanfattande referenser syftar på ett helt resonemang: denna utveckling, beslutet, problemet. Undvik ett ensamt ”detta” om det kan bli oklart.",
      "Metatext visar hur texten är byggd: inledningsvis, i det följande, avslutningsvis.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Välj den markör som passar.", typ: "val", rader: rader(MARKORER_GY.map(([m, r, fel], i) => m.replace("____", `{${val("", r, fel, i).slice(2, -1)}}`))) },
      { rubrik: "Del B", instruktion: "Vilken mening fortsätter texten bäst?", typ: "val", rader: lista(FORTSATT_GY) },
      { rubrik: "Del C", instruktion: "Vad gör den markerade meningen i texten?", typ: "val", rader: rader(FUNKTION_GY.map(([m, t]) => `${m} {${FTYPER_GY.map((x) => (x === t ? "*" : "") + x).join("|")}}`)) },
      { rubrik: "Del D", instruktion: "Välj den sammanfattande referens som passar bäst.", typ: "val", rader: rader(SAMMANFATTANDE.map(([m, r, fel], i) => m.replace("____", `{${val("", r, fel, i).slice(2, -1)}}`))) },
    ],
  },
  {
    id: "stilistik-2-retorik-och-genre",
    titel: "Anafor, ironi och krönika",
    underrubrik: "Retoriska figurer, genrestil och konnotation",
    omrade: "Stilistik",
    steg: 4,
    feltyper: ["ordval.stilniva", "ordval.precision", "innehall.syfte-mottagare"],
    regel: [
      "Anafor: samma ord inleder flera meningar. Tretal: tre led. Retorisk fråga: väntar inget svar. Antites: motsatser ställs mot varandra.",
      "Ironi säger motsatsen till det man menar. Eufemism är en mildare omskrivning. Litotes säger något genom att förneka motsatsen (inte dumt = bra).",
      "Ord har en grundbetydelse (denotation) och en klang (konnotation): hem, bostad, kåk.",
      "Varje genre har sin stil: vetenskaplig text är saklig och har källor, en krönika har en personlig röst.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Vilken stilfigur är det?", typ: "val", rader: rader(RETORIK.map(([m, f], i) => val(m, f, RFIGURER.filter((x) => x !== f).filter((_, j) => (j + i) % 4 === 0).slice(0, 3), i))) },
      { rubrik: "Del B", instruktion: "Vilken genre kommer meningen från?", typ: "val", rader: rader(GENRE.map(([m, g]) => `${m} {${GENRER.map((x) => (x === g ? "*" : "") + x).join("|")}}`)) },
      { rubrik: "Del C", instruktion: "Har ordet positiv, negativ eller neutral klang?", typ: "val", rader: rader(KONNOTATION.map(([o, k]) => `${o} {${["positiv", "negativ", "neutral"].map((x) => (x === k ? "*" : "") + x).join("|")}}`)) },
      { rubrik: "Del D", instruktion: "Välj rätt svar.", typ: "val", rader: lista(EUFEMISM) },
    ],
  },
];
