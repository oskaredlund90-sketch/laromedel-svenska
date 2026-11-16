import type { HafteKalla } from "../typer";

/**
 * Övningshäften som fyller luckor i grammatikboken: lågstadiet (ordklasser,
 * hela meningar, textbindning) och högstadiet (alla ordklasser, ordbildning,
 * stilistik).
 */

const rader = (lista: string[]) => lista.join("\n");

/* ------------------------------- Lågstadiet ------------------------------ */

const ORD_LAG: [string, "substantiv" | "verb" | "adjektiv"][] = [
  ["hund", "substantiv"], ["springa", "verb"], ["glad", "adjektiv"], ["bok", "substantiv"], ["hoppa", "verb"], ["stor", "adjektiv"],
  ["katt", "substantiv"], ["äta", "verb"], ["röd", "adjektiv"], ["skola", "substantiv"], ["sova", "verb"], ["snabb", "adjektiv"],
  ["boll", "substantiv"], ["skriva", "verb"], ["liten", "adjektiv"], ["mamma", "substantiv"], ["leka", "verb"], ["mjuk", "adjektiv"],
  ["äpple", "substantiv"], ["simma", "verb"], ["kall", "adjektiv"], ["cykel", "substantiv"], ["sjunga", "verb"], ["arg", "adjektiv"],
  ["blomma", "substantiv"], ["rita", "verb"], ["varm", "adjektiv"], ["häst", "substantiv"], ["läsa", "verb"], ["trött", "adjektiv"],
  ["stol", "substantiv"], ["dansa", "verb"], ["blå", "adjektiv"], ["fågel", "substantiv"], ["skratta", "verb"], ["lång", "adjektiv"],
];

const PLURAL_LAG: [string, string][] = [
  ["bil", "bilar"], ["katt", "katter"], ["boll", "bollar"], ["flicka", "flickor"], ["pojke", "pojkar"], ["hund", "hundar"],
  ["stol", "stolar"], ["blomma", "blommor"], ["äpple", "äpplen"], ["hus", "hus"], ["bok", "böcker"], ["fot", "fötter"],
  ["hand", "händer"], ["mus", "möss"], ["gås", "gäss"], ["sko", "skor"], ["fisk", "fiskar"], ["säng", "sängar"],
  ["lampa", "lampor"], ["dag", "dagar"], ["barn", "barn"], ["tand", "tänder"], ["get", "getter"], ["nyckel", "nycklar"],
];

const DATID_LAG: [string, string][] = [
  ["leker", "lekte"], ["hoppar", "hoppade"], ["springer", "sprang"], ["äter", "åt"], ["sover", "sov"], ["ritar", "ritade"],
  ["läser", "läste"], ["skriver", "skrev"], ["simmar", "simmade"], ["sjunger", "sjöng"], ["dansar", "dansade"], ["går", "gick"],
  ["ser", "såg"], ["dricker", "drack"], ["cyklar", "cyklade"], ["bakar", "bakade"], ["kastar", "kastade"], ["sitter", "satt"],
  ["kommer", "kom"], ["skrattar", "skrattade"],
];

const JAMFOR_LAG: [string, string, string][] = [
  ["stor", "större", "störst"], ["glad", "gladare", "gladast"], ["snabb", "snabbare", "snabbast"], ["liten", "mindre", "minst"],
  ["lång", "längre", "längst"], ["kall", "kallare", "kallast"], ["varm", "varmare", "varmast"], ["god", "bättre", "bäst"],
  ["mjuk", "mjukare", "mjukast"], ["tung", "tyngre", "tyngst"], ["söt", "sötare", "sötast"], ["ung", "yngre", "yngst"],
];

const HELA: [string, boolean][] = [
  ["Hunden skäller.", true], ["Skäller högt.", false], ["Vi åker till stranden.", true], ["Till stranden.", false],
  ["Mamma bakar bullar.", true], ["Bakar bullar i köket.", false], ["Katten sover.", true], ["Den lilla katten.", false],
  ["Jag läser en bok.", true], ["En spännande bok.", false], ["Barnen leker.", true], ["På rasten i skolan.", false],
  ["Solen skiner.", true], ["Skiner på himlen.", false], ["Pappa lagar cykeln.", true], ["Min pappas gamla cykel.", false],
  ["Fåglarna sjunger.", true], ["Sjunger i träden.", false], ["Lisa ritar en drake.", true], ["En stor grön drake.", false],
  ["Vi badar i sjön.", true], ["I sjön på sommaren.", false], ["Det snöar.", true], ["Mycket snö.", false],
  ["Hästen springer.", true], ["Springer över ängen.", false], ["Jag är hungrig.", true], ["Hungrig och trött.", false],
  ["Omar vann loppet.", true], ["Efter loppet.", false], ["Bussen kommer.", true], ["Den röda bussen.", false],
  ["Morfar fiskar.", true], ["Vid bryggan i går.", false], ["Vi skrattar.", true],
];

const FRAGA_LAG: [string, string, string][] = [
  ["Vill du", "Du vill", "leka med mig"], ["Har du", "Du har", "en hund"], ["Ska vi", "Vi ska", "gå ut"], ["Kan du", "Du kan", "simma"],
  ["Är du", "Du är", "trött"], ["Gillar du", "Du gillar", "glass"], ["Bor du", "Du bor", "här"], ["Kommer du", "Du kommer", "i morgon"],
  ["Får jag", "Jag får", "låna pennan"], ["Hinner vi", "Vi hinner", "till bussen"], ["Sover katten", "Katten sover", "nu"], ["Regnar det", "Det regnar", "ute"],
  ["Ska du", "Du ska", "följa med"], ["Har ni", "Ni har", "läxor i dag"], ["Leker de", "De leker", "i parken"], ["Vet du", "Du vet", "vad klockan är"],
  ["Kan jag", "Jag kan", "få en kaka"], ["Är det", "Det är", "lördag i dag"], ["Vill ni", "Ni vill", "ha saft"], ["Fryser du", "Du fryser", "om fötterna"],
];

const UTAN_STOR: string[] = [
  "hunden springer i parken", "vi åker till mormor", "katten sover i soffan", "jag gillar glass", "lisa har en röd cykel",
  "pappa lagar mat", "det regnar i dag", "barnen leker på gården", "omar bor i malmö", "vi har en ny lärare",
  "solen skiner", "mormor bakar bullar", "jag läser en bok", "fåglarna sjunger", "elsa har en hund som heter sigge",
  "vi badar i sjön", "min bror heter sam", "i dag är det fredag", "hästen äter hö", "vi åker till stockholm",
  "jag har ont i magen", "klockan är tre", "ali spelar fotboll", "det snöar ute", "vi bakar pepparkakor",
];

const stor = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const NAMN = ["lisa", "malmö", "elsa", "sigge", "sam", "omar", "ali", "stockholm"];
const ratt = (s: string) => stor(s.split(" ").map((o) => (NAMN.includes(o) ? stor(o) : o)).join(" ")) + ".";

const SAKNAS: [string, string, string[]][] = [
  ["____ springer.", "Hunden", ["Springer", "Fort"]], ["____ sover i sängen.", "Bebisen", ["Sover", "Mjuk"]], ["Katten ____.", "jamar", ["katt", "grå"]],
  ["____ äter glass.", "Vi", ["Glass", "Kall"]], ["Mamma ____ mat.", "lagar", ["mat", "god"]], ["____ skiner.", "Solen", ["Varm", "Gul"]],
  ["Fåglarna ____.", "sjunger", ["fåglar", "små"]], ["____ läser en bok.", "Jag", ["Bok", "Rolig"]], ["Barnen ____ i parken.", "leker", ["park", "glada"]],
  ["____ skäller.", "Hunden", ["Skäller", "Arg"]], ["Pappa ____ cykeln.", "lagar", ["cykel", "trasig"]], ["____ ritar en bild.", "Elsa", ["Bild", "Fin"]],
  ["Vi ____ till skolan.", "går", ["skola", "glada"]], ["____ regnar.", "Det", ["Regn", "Blött"]], ["Hästen ____ fort.", "springer", ["häst", "brun"]],
  ["____ bakar bullar.", "Mormor", ["Bullar", "Goda"]], ["Ali ____ fotboll.", "spelar", ["boll", "snabb"]], ["____ simmar i sjön.", "Fisken", ["Simma", "Våt"]],
  ["Jag ____ hungrig.", "är", ["mat", "hunger"]], ["____ ringer.", "Telefonen", ["Ringa", "Hög"]],
];

/** Korta berättelser i tre steg – en lucka i taget. */
const BERATTELSER: string[][] = [
  ["åt vi frukost", "borstade vi tänderna", "gick vi till skolan"],
  ["packade vi väskan", "åkte vi till stranden", "badade vi hela dagen"],
  ["tog vi fram mjöl och ägg", "vispade vi en smet", "stekte vi pannkakor"],
  ["satte jag på mig jackan", "tog jag på mig skorna", "gick jag ut"],
  ["grävde vi ett hål", "satte vi ner ett frö", "vattnade vi jorden"],
  ["hittade vi en karta", "följde vi stigen", "hittade vi skatten"],
  ["vaknade björnen", "kröp den ut ur idet", "letade den efter mat"],
  ["blåste vi upp ballongerna", "dukade vi bordet", "kom gästerna"],
  ["byggde vi en snögubbe", "gav vi den en morot till näsa", "frös vi om händerna"],
  ["läste fröken en saga", "ritade vi en bild", "berättade vi om bilderna"],
  ["klev vi på bussen", "åkte vi i en timme", "var vi framme hos mormor"],
  ["öppnade jag paketet", "såg jag en liten valp", "blev jag jätteglad"],
  ["tvättade vi bilen", "torkade vi den", "glänste den i solen"],
  ["gick vi till biblioteket", "lånade vi böcker", "läste vi i soffan hela kvällen"],
  ["städade vi rummet", "dammsög vi golvet", "fick vi glass"],
];
const ORDNING = ["Först", "Sedan", "Till slut"];
const berattelseRader = () =>
  BERATTELSER.flatMap((b) =>
    [0, 1, 2].map((pos) =>
      b
        .map((del, i) => {
          if (i === pos) return `{${ORDNING.map((o, j) => (j === i ? "*" : "") + o).join("|")}} ${del}.`;
          return `${ORDNING[i]} ${del}.`;
        })
        .join(" "),
    ),
  );

/** Mening, rätt pronomen, felaktiga alternativ och en fortsättning som passar just den meningen. */
const PRONOMEN_LAG: [string, string, string[], string][] = [
  ["Pelle har fått en present.", "Han", ["Hon", "Den"], "öppnar den direkt."],
  ["Lisa har ont i magen.", "Hon", ["Han", "Det"], "stannar hemma i dag."],
  ["Vi har en katt.", "Den", ["Han", "Det"], "heter Misse."],
  ["Vi har ett marsvin.", "Det", ["Den", "Hon"], "äter morötter."],
  ["Omar och Ali spelar fotboll.", "De", ["Han", "Den"], "vinner med 3–1."],
  ["Mormor ringde i dag.", "Hon", ["Han", "De"], "kommer på besök i morgon."],
  ["Morfar har en båt.", "Han", ["Hon", "Det"], "fiskar varje helg."],
  ["Jag har en ny cykel.", "Den", ["Det", "Han"], "är röd."],
  ["Jag har ett nytt pussel.", "Det", ["Den", "Hon"], "har hundra bitar."],
  ["Barnen är ute.", "De", ["Den", "Hon"], "leker i snön."],
  ["Bebisen gråter.", "Den", ["De", "Han"], "är hungrig."],
  ["Elsa och jag är kompisar.", "Vi", ["De", "Hon"], "går i samma klass."],
  ["Hunden skäller.", "Den", ["Det", "De"], "vill gå ut."],
  ["Huset är gult.", "Det", ["Den", "Han"], "ligger vid sjön."],
  ["Fröken läser en saga.", "Hon", ["Han", "Det"], "läser högt."],
  ["Sam är min bror.", "Han", ["Hon", "Den"], "är tio år."],
  ["Fåglarna sjunger.", "De", ["Den", "Det"], "sitter i trädet."],
  ["Äpplet är rött.", "Det", ["Den", "De"], "smakar gott."],
  ["Bollen är borta.", "Den", ["Det", "De"], "ligger kanske under soffan."],
  ["Pappa och mamma lagar mat.", "De", ["Han", "Hon"], "gör pannkakor."],
];

const PRONOMEN_LAG_2: [string, string, string[], string][] = [
  ["Lisa och Ali bygger en koja.", "De", ["Hon", "Han"], "använder pinnar och löv."],
  ["Min mormor heter Rut.", "Hon", ["Han", "Den"], "bor i Umeå."],
  ["Kalle har en ny jacka.", "Han", ["Hon", "De"], "har den på sig i dag."],
  ["Vi köpte en glass.", "Den", ["Det", "De"], "smakade jordgubb."],
  ["Vi köpte ett paket.", "Det", ["Den", "Han"], "var till mormor."],
  ["Pappa och jag fiskar.", "Vi", ["De", "Han"], "sitter på bryggan."],
  ["Kaninen hoppar.", "Den", ["Det", "Han"], "har långa öron."],
  ["Lammet bräker.", "Det", ["Den", "De"], "letar efter sin mamma."],
  ["Mina kusiner kommer på besök.", "De", ["Hon", "Den"], "stannar i två dagar."],
  ["Läraren skriver på tavlan.", "Hon", ["Det", "De"], "skriver dagens datum."],
  ["Sara spelar fiol.", "Hon", ["Han", "Den"], "övar varje dag."],
  ["Bollen rullar.", "Den", ["Det", "Han"], "stannar vid staketet."],
  ["Trädet är högt.", "Det", ["Den", "Han"], "är över hundra år gammalt."],
  ["Morfar och mormor dansar.", "De", ["Han", "Hon"], "har kul tillsammans."],
  ["Leo är sju år.", "Han", ["Hon", "Det"], "går i ettan."],
  ["Glassen smälter.", "Den", ["Det", "Hon"], "droppar på bordet."],
  ["Huset är rött.", "Det", ["Den", "De"], "har vita fönster."],
  ["Barnen badar.", "De", ["Den", "Hon"], "simmar till bryggan."],
  ["Elsa och jag ritar.", "Vi", ["De", "Hon"], "ritar en drake."],
  ["Bilen är snabb.", "Den", ["Det", "Han"], "kör förbi oss."],
  ["Brevet kom i dag.", "Det", ["Den", "Hon"], "var från farmor."],
  ["Ugglan sover på dagen.", "Den", ["Det", "Hon"], "jagar på natten."],
  ["Kusinerna leker.", "De", ["Den", "Han"], "leker kurragömma."],
  ["Pojken skrattar.", "Han", ["Hon", "Den"], "tycker att filmen är rolig."],
  ["Flickan sjunger.", "Hon", ["Han", "Det"], "sjunger i kören."],
];
const pronomenRader = () => PRONOMEN_LAG.map(([m, r, fel, forts]) => `${m} {*${r}|${fel.join("|")}} ${forts}`);

/* -------------------------------- Högstadiet ------------------------------ */

const ORDKLASS_HOG: [string, string, string[]][] = [
  ["Hon sprang SNABBT hem.", "adverb", ["adjektiv", "verb", "preposition"]],
  ["Det var en SNABB löpare.", "adjektiv", ["adverb", "substantiv", "verb"]],
  ["Katten gömde sig UNDER bordet.", "preposition", ["adverb", "konjunktion", "pronomen"]],
  ["Jag ville gå ut, MEN det regnade.", "konjunktion", ["subjunktion", "preposition", "adverb"]],
  ["Vi stannade inne EFTERSOM det regnade.", "subjunktion", ["konjunktion", "preposition", "adverb"]],
  ["AJ, det gjorde ont!", "interjektion", ["adverb", "pronomen", "verb"]],
  ["TRE elever saknades.", "räkneord", ["adjektiv", "pronomen", "substantiv"]],
  ["Hon kom på FÖRSTA plats.", "räkneord", ["adjektiv", "adverb", "substantiv"]],
  ["VI åkte till Skåne.", "pronomen", ["substantiv", "räkneord", "adverb"]],
  ["Han gav MIG en bok.", "pronomen", ["substantiv", "adverb", "preposition"]],
  ["GLÄDJEN var stor.", "substantiv", ["adjektiv", "verb", "adverb"]],
  ["Hon SKRATTADE länge.", "verb", ["adverb", "adjektiv", "substantiv"]],
  ["Vi har INTE ätit.", "adverb", ["verb", "pronomen", "konjunktion"]],
  ["Jag tror ATT du har rätt.", "subjunktion", ["konjunktion", "preposition", "pronomen"]],
  ["Vill du ha te ELLER kaffe?", "konjunktion", ["subjunktion", "preposition", "adverb"]],
  ["Boken ligger PÅ bordet.", "preposition", ["adverb", "konjunktion", "verb"]],
  ["Det var MYCKET kallt.", "adverb", ["adjektiv", "pronomen", "räkneord"]],
  ["Vilken VACKER solnedgång!", "adjektiv", ["adverb", "substantiv", "interjektion"]],
  ["Hon blev glad NÄR hon fick brevet.", "subjunktion", ["konjunktion", "adverb", "preposition"]],
  ["HURRA, vi vann!", "interjektion", ["adverb", "verb", "pronomen"]],
  ["Vi går DIT i morgon.", "adverb", ["preposition", "pronomen", "verb"]],
  ["Det är DERAS hus.", "pronomen", ["adjektiv", "substantiv", "adverb"]],
  ["Hon har bott här i TJUGO år.", "räkneord", ["substantiv", "adjektiv", "adverb"]],
  ["Barnen LEKTE i parken.", "verb", ["substantiv", "adverb", "adjektiv"]],
  ["Hon är LÄRARE.", "substantiv", ["verb", "adjektiv", "pronomen"]],
  ["Han är både snäll OCH rolig.", "konjunktion", ["subjunktion", "adverb", "preposition"]],
  ["Vi badade FAST vattnet var kallt.", "subjunktion", ["konjunktion", "adverb", "preposition"]],
  ["Hon kommer KANSKE i morgon.", "adverb", ["verb", "konjunktion", "adjektiv"]],
  ["Han gick UTAN jacka.", "preposition", ["konjunktion", "adverb", "pronomen"]],
  ["INGEN förstod frågan.", "pronomen", ["substantiv", "adverb", "räkneord"]],
  ["Vi åt en GOD middag.", "adjektiv", ["adverb", "substantiv", "verb"]],
  ["Middagen smakade GOTT.", "adverb", ["adjektiv", "substantiv", "verb"]],
  ["Hon BÖRJADE skolan i augusti.", "verb", ["substantiv", "adverb", "preposition"]],
  ["Vi träffas EFTER skolan.", "preposition", ["subjunktion", "adverb", "konjunktion"]],
  ["Vi går när du har ätit, INNAN det blir mörkt.", "subjunktion", ["preposition", "konjunktion", "adverb"]],
  ["OJ, vad stort!", "interjektion", ["adverb", "pronomen", "adjektiv"]],
  ["Hennes SYSTER heter Mira.", "substantiv", ["pronomen", "verb", "adjektiv"]],
  ["De bor i ett GAMMALT hus.", "adjektiv", ["adverb", "substantiv", "räkneord"]],
  ["Han kom HEM sent.", "adverb", ["substantiv", "preposition", "verb"]],
  ["Jag stannar OM du vill.", "subjunktion", ["konjunktion", "preposition", "adverb"]],
  ["Hon sjunger, FÖR hon är glad.", "konjunktion", ["subjunktion", "preposition", "adverb"]],
  ["Vi har TVÅ katter.", "räkneord", ["adjektiv", "pronomen", "substantiv"]],
  ["DENNA bok är bäst.", "pronomen", ["adjektiv", "räkneord", "substantiv"]],
  ["Hon log MOT honom.", "preposition", ["adverb", "konjunktion", "subjunktion"]],
  ["Han ÄR trött.", "verb", ["adjektiv", "adverb", "pronomen"]],
  ["SÄKERT kommer hon snart.", "adverb", ["adjektiv", "verb", "konjunktion"]],
  ["Han svarade INTE på frågan.", "adverb", ["konjunktion", "verb", "pronomen"]],
  ["Vi åkte till FJÄLLEN.", "substantiv", ["adjektiv", "preposition", "verb"]],
  ["Vädret var DÅLIGT.", "adjektiv", ["adverb", "substantiv", "verb"]],
  ["Hon SKA åka till Paris.", "verb", ["adverb", "konjunktion", "preposition"]],
];

const KONJ_SUBJ: [string, "konjunktion" | "subjunktion"][] = [
  ["Jag gillar te OCH kaffe.", "konjunktion"], ["Vi gick hem EFTERSOM det var sent.", "subjunktion"], ["Hon ville, MEN hon kunde inte.", "konjunktion"],
  ["Jag vet ATT du har rätt.", "subjunktion"], ["Vill du stanna ELLER gå?", "konjunktion"], ["Ring mig NÄR du är framme.", "subjunktion"],
  ["Han var trött, SÅ han gick och la sig.", "konjunktion"], ["Vi badade FAST det var kallt.", "subjunktion"], ["Hon sjöng MEDAN hon diskade.", "subjunktion"],
  ["Han skrattade, FÖR det var roligt.", "konjunktion"], ["OM du vill, kan du följa med.", "subjunktion"], ["Han är snäll OCH rolig.", "konjunktion"],
  ["Jag undrar OM hon kommer.", "subjunktion"], ["Vi väntade TILLS regnet slutade.", "subjunktion"], ["Hon tränar mycket, MEN hon är aldrig trött.", "konjunktion"],
  ["Läs boken INNAN du ser filmen.", "subjunktion"], ["Jag kan inte komma, UTAN du får gå själv.", "konjunktion"], ["Han blev glad DÅ han fick brevet.", "subjunktion"],
  ["Vi kan cykla ELLER gå.", "konjunktion"], ["Boken SOM jag läser är spännande.", "subjunktion"], ["Hon stannade hemma, EFTERSOM hon var sjuk.", "subjunktion"],
  ["Jag ringde, MEN ingen svarade.", "konjunktion"], ["TROTS ATT det regnade, gick vi ut.", "subjunktion"], ["Han åt SÅ ATT han blev mätt.", "subjunktion"],
  ["Vi sjöng OCH dansade hela kvällen.", "konjunktion"], ["SEDAN du kom har allt varit bättre.", "subjunktion"], ["Jag frågade VARFÖR hon grät.", "subjunktion"],
  ["Hon log, FÖR hon visste svaret.", "konjunktion"], ["Han sprang FÖR ATT hinna med bussen.", "subjunktion"], ["Det var mörkt OCH kallt.", "konjunktion"],
];

const TEMPUS_HOG: [string, string, string][] = [
  ["skriver", "perfekt", "har skrivit"], ["skriver", "pluskvamperfekt", "hade skrivit"], ["springer", "preteritum", "sprang"],
  ["springer", "perfekt", "har sprungit"], ["äter", "preteritum", "åt"], ["äter", "perfekt", "har ätit"], ["går", "preteritum", "gick"],
  ["går", "pluskvamperfekt", "hade gått"], ["sitter", "perfekt", "har suttit"], ["dricker", "preteritum", "drack"], ["dricker", "perfekt", "har druckit"],
  ["säljer", "preteritum", "sålde"], ["väljer", "perfekt", "har valt"], ["gör", "preteritum", "gjorde"], ["gör", "perfekt", "har gjort"],
  ["ligger", "preteritum", "låg"], ["ligger", "perfekt", "har legat"], ["lägger", "preteritum", "lade/la"], ["flyger", "perfekt", "har flugit"],
  ["vet", "preteritum", "visste"], ["tar", "pluskvamperfekt", "hade tagit"], ["får", "perfekt", "har fått"],
];

const FORKORTNINGAR: [string, string][] = [
  ["t.ex.", "till exempel"], ["bl.a.", "bland annat"], ["m.m.", "med mera"], ["s.k.", "så kallad"], ["osv.", "och så vidare"],
  ["dvs.", "det vill säga"], ["fr.o.m.", "från och med"], ["t.o.m.", "till och med"], ["p.g.a.", "på grund av"], ["ca", "cirka"],
  ["kl.", "klockan"], ["s.", "sidan"], ["nr", "nummer"], ["f.d.", "före detta"], ["o.d.", "och dylikt"], ["e.Kr.", "efter Kristus"],
  ["f.Kr.", "före Kristus"], ["obs.", "observera"], ["resp.", "respektive"], ["jfr", "jämför"], ["t.v.", "till vänster"],
  ["t.h.", "till höger"], ["inkl.", "inklusive"], ["exkl.", "exklusive"], ["fm", "förmiddag"],
];

const LANORD: [string, string][] = [
  ["frukost", "lågtyska"], ["handel", "lågtyska"], ["betala", "lågtyska"], ["fönster", "lågtyska"], ["borgmästare", "lågtyska"], ["krydda", "lågtyska"],
  ["restaurang", "franska"], ["paraply", "franska"], ["trottoar", "franska"], ["möbel", "franska"], ["byrå", "franska"], ["parfym", "franska"],
  ["balkong", "franska"], ["garage", "franska"], ["jobb", "engelska"], ["mejl", "engelska"], ["dejt", "engelska"], ["streama", "engelska"],
  ["tejp", "engelska"], ["fotboll", "engelska"], ["skola", "latin"], ["kyrka", "grekiska"], ["biologi", "grekiska"], ["demokrati", "grekiska"],
  ["präst", "latin"], ["tegel", "latin"], ["sms:a", "engelska"], ["chaufför", "franska"], ["kök", "latin"],
];
const SPRAK = ["lågtyska", "franska", "engelska", "latin", "grekiska"];
const lanordRader = () =>
  LANORD.map(([ord, sprak], i) => {
    const andra = SPRAK.filter((s) => s !== sprak);
    const fel = [andra[i % andra.length], andra[(i + 2) % andra.length]];
    return `${ord} {*${sprak}|${fel.join("|")}}`;
  });

const FOGAR: [string, string, string][] = [
  ["arbete", "plats", "arbetsplats"], ["tidning", "artikel", "tidningsartikel"], ["fotboll", "plan", "fotbollsplan"], ["skola", "gård", "skolgård"],
  ["gata", "sten", "gatsten"], ["kyrka", "gård", "kyrkogård"], ["barn", "vård", "barnavård"], ["gata", "belysning", "gatubelysning"],
  ["hälsa", "kontroll", "hälsokontroll"], ["dag", "ljus", "dagsljus"], ["sol", "sken", "solsken"], ["kväll", "mat", "kvällsmat"],
  ["mat", "säck", "matsäck"], ["ålder", "grupp", "åldersgrupp"], ["regering", "beslut", "regeringsbeslut"], ["fågel", "sång", "fågelsång"],
  ["vinter", "jacka", "vinterjacka"], ["sjukdom", "tid", "sjukdomstid"], ["land", "väg", "landsväg"], ["hand", "boll", "handboll"],
  ["lärare", "rum", "lärarrum"], ["frihet", "kamp", "frihetskamp"], ["vatten", "glas", "vattenglas"], ["tåg", "station", "tågstation"],
  ["semester", "resa", "semesterresa"], ["rätt", "skrivning", "rättskrivning"], ["köpman", "skap", "köpmanskap"],
];

const FORKORTNINGSTYP: [string, string][] = [
  ["SVT", "initialord"], ["FN", "initialord"], ["EU", "initialord"], ["tv", "initialord"], ["sms", "initialord"], ["IKEA", "akronym"],
  ["Nato", "akronym"], ["Unicef", "akronym"], ["Saab", "akronym"], ["bil (automobil)", "kortord"], ["kilo (kilogram)", "kortord"],
  ["foto (fotografi)", "kortord"], ["bio (biograf)", "kortord"], ["t.ex.", "förkortning med punkt"], ["bl.a.", "förkortning med punkt"],
  ["osv.", "förkortning med punkt"], ["mc (motorcykel)", "initialord"], ["prao (praktisk arbetslivsorientering)", "akronym"],
  ["lok (lokomotiv)", "kortord"], ["m.m.", "förkortning med punkt"],
];
const FTYP = ["initialord", "akronym", "kortord", "förkortning med punkt"];

const STILNIVA: [string, "informellt" | "formellt"][] = [
  ["Det var skitbra!", "informellt"], ["Resultatet var utmärkt.", "formellt"], ["Kolla in det här!", "informellt"], ["Granska följande uppgifter.", "formellt"],
  ["Typ alla var där.", "informellt"], ["Nästan samtliga deltagare var närvarande.", "formellt"], ["Hen var asarg.", "informellt"], ["Hon blev mycket upprörd.", "formellt"],
  ["Vi snackade om det.", "informellt"], ["Frågan diskuterades på mötet.", "formellt"], ["Det funkar inte.", "informellt"], ["Metoden fungerar inte.", "formellt"],
  ["Jag fattar ingenting.", "informellt"], ["Jag förstår inte resonemanget.", "formellt"], ["Det är sjukt dyrt.", "informellt"], ["Priset är mycket högt.", "formellt"],
  ["Ses sen!", "informellt"], ["Med vänliga hälsningar", "formellt"], ["Tjena alla!", "informellt"], ["Bästa kollegor,", "formellt"],
  ["Det blev lite kaos.", "informellt"], ["Situationen blev oöverskådlig.", "formellt"], ["Vi kör på det!", "informellt"], ["Vi beslutar att genomföra förslaget.", "formellt"],
  ["Han är grym på fotboll.", "informellt"], ["Han är en skicklig fotbollsspelare.", "formellt"], ["pga regnet", "informellt"], ["till följd av regnet", "formellt"],
  ["Mega bra film!", "informellt"], ["Filmen är sevärd.", "formellt"],
];

const STILFIGURER: [string, string][] = [
  ["Hon var snabb som en vessla.", "liknelse"], ["Han är en klippa.", "metafor"], ["Vinden viskade i träden.", "besjälning"], ["Jag har sagt det tusen gånger.", "överdrift"],
  ["Hans röst var som sammet.", "liknelse"], ["Livet är en resa.", "metafor"], ["Solen log mot oss.", "besjälning"], ["Jag är så hungrig att jag kan äta en häst.", "överdrift"],
  ["Hon sov som en stock.", "liknelse"], ["Klassrummet var en djungel.", "metafor"], ["Huset suckade i stormen.", "besjälning"], ["Väskan vägde ett ton.", "överdrift"],
  ["Han var stark som en björn.", "liknelse"], ["Hennes ögon var två stjärnor.", "metafor"], ["Bilen vägrade starta.", "besjälning"], ["Kön var en kilometer lång.", "överdrift"],
  ["Det var kallt som i en frys.", "liknelse"], ["Tiden är pengar.", "metafor"], ["Regnet trummade otåligt på taket.", "besjälning"], ["Jag har väntat i en evighet.", "överdrift"],
  ["Hon svarade blixtsnabbt som en kobra.", "liknelse"], ["Staden är en myrstack.", "metafor"], ["Klockan tickade hånfullt.", "besjälning"], ["Det fanns en miljon människor där.", "överdrift"],
  ["Ute stormade det, inne var det stilla.", "kontrast"], ["Hon var rik, han var fattig.", "kontrast"], ["Vi kämpar. Vi kämpar varje dag.", "upprepning"],
  ["Aldrig, aldrig, aldrig ska jag ge upp.", "upprepning"], ["Dagen var ljus, natten mörk.", "kontrast"], ["Spring, spring, spring!", "upprepning"],
  ["Hon var tyst som en mus.", "liknelse"], ["Hans hjärta var av sten.", "metafor"], ["Skogen vaknade.", "besjälning"], ["Jag dör av skratt.", "överdrift"],
  ["Ung och gammal, rik och fattig – alla kom.", "kontrast"],
];
const FIGURER = ["liknelse", "metafor", "besjälning", "överdrift", "kontrast", "upprepning"];
const figurRader = (lista: [string, string][], alla: string[]) =>
  lista.map(([m, f], i) => {
    const andra = alla.filter((x) => x !== f);
    return `${m} {*${f}|${andra[i % andra.length]}|${andra[(i + 1) % andra.length]}|${andra[(i + 2) % andra.length]}}`;
  });

const FORMELLT_VAL: [string, string, string][] = [
  ["Vi måste ____ saken.", "undersöka", "kolla upp"], ["Mötet ____ klockan nio.", "inleds", "drar igång"], ["Vi ____ att du kommer.", "förväntar oss", "räknar typ med"],
  ["Projektet ____ inte.", "fungerade", "funkade"], ["Eleverna ____ uppgiften.", "slutförde", "fixade klart"], ["Det är ____ dyrt.", "mycket", "sjukt"],
  ["Han ____ med sin chef.", "samtalade", "snackade"], ["Vi ____ om ursäkt.", "ber", "sorry:ar"], ["Hon ____ beslutet.", "ifrågasatte", "dissade"],
  ["Resultaten ____ förvånande.", "var", "var typ"], ["Vi ____ hjälp.", "behöver", "måste ha liksom"], ["Rapporten ____ tre delar.", "består av", "har typ"],
  ["Han ____ sig sjuk.", "anmälde", "sa att han var dålig och"], ["Kommunen ____ en ny skola.", "planerar", "ska fixa"], ["Det ____ ett problem.", "utgör", "är liksom"],
  ["Försöket ____.", "misslyckades", "floppade"], ["Hon ____ sitt förslag.", "presenterade", "drog"], ["Vi ____ dig.", "kontaktar", "hör av oss till"],
  ["Han ____ klassen.", "informerade", "berättade typ för"], ["Ni ____ före fredag.", "ska svara", "får typ svara"],
];

const VARDELADDAT: [string, "neutralt" | "värdeladdat"][] = [
  ["Han är sparsam.", "neutralt"], ["Han är snål.", "värdeladdat"], ["en demonstration", "neutralt"], ["ett upplopp", "värdeladdat"],
  ["Hon är bestämd.", "neutralt"], ["Hon är envis som synden.", "värdeladdat"], ["en äldre man", "neutralt"], ["en gubbstrutt", "värdeladdat"],
  ["Huset är litet.", "neutralt"], ["Huset är ett råttbo.", "värdeladdat"], ["politiker", "neutralt"], ["pampar", "värdeladdat"],
  ["Hon är smal.", "neutralt"], ["Hon är benig.", "värdeladdat"], ["en bil", "neutralt"], ["en skrothög", "värdeladdat"],
  ["Han pratar mycket.", "neutralt"], ["Han babblar.", "värdeladdat"], ["en ny regel", "neutralt"], ["ett tvångsförbud", "värdeladdat"],
];

export const HAFTEN_LAG_HOG: HafteKalla[] = [
  {
    id: "ordklasser-1-substantiv-verb-adjektiv",
    titel: "Hund, springa, glad",
    underrubrik: "Substantiv, verb och adjektiv",
    omrade: "Grammatik",
    steg: 1,
    feltyper: ["grammatik.bojning"],
    regel: [
      "Substantiv – saker, djur och namn. Testa: en eller ett framför? En hund.",
      "Verb – det man gör. Testa: jag framför? Jag springer.",
      "Adjektiv – beskriver. Testa: en ___ sak? En glad sak.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Vilken ordklass är ordet?", typ: "val", rader: rader(ORD_LAG.map(([o, k]) => `${o} {${["substantiv", "verb", "adjektiv"].map((x) => (x === k ? "*" : "") + x).join("|")}}`)) },
      { rubrik: "Del B", instruktion: "Skriv ordet i flertal.", typ: "skriv", rader: rader(PLURAL_LAG.map(([e, f]) => `${e} – två {${f}}`)) },
      { rubrik: "Del C", instruktion: "Skriv verbet i dåtid.", typ: "skriv", rader: rader(DATID_LAG.map(([nu, da]) => `I dag ${nu} jag. I går {${da}} jag.`)) },
      { rubrik: "Del D", instruktion: "Jämför adjektivet.", typ: "skriv", rader: rader(JAMFOR_LAG.map(([a, b, c]) => `${a} – {${b}} – {${c}}`)) },
    ],
  },
  {
    id: "meningsbyggnad-5-hela-meningar",
    titel: "En hel mening",
    underrubrik: "Stor bokstav, punkt och någon som gör något",
    omrade: "Meningsbyggnad",
    steg: 1,
    feltyper: ["grammatik.subjekt-verb", "skiljetecken.punkt", "stavning.stor-bokstav"],
    regel: [
      "En hel mening har någon som gör något och något som händer: Hunden skäller.",
      "Den börjar med stor bokstav och slutar med punkt, frågetecken eller utropstecken.",
      "I en fråga kommer verbet ofta först: Vill du leka?",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Är det en hel mening?", typ: "val", rader: rader(HELA.map(([m, hel]) => `${m} {${hel ? "*hel mening|inte hel" : "hel mening|*inte hel"}}`)) },
      { rubrik: "Del B", instruktion: "Välj början så att det blir en fråga.", typ: "val", rader: rader(FRAGA_LAG.map(([f, p, rest]) => `{*${f}|${p}} ${rest}?`)) },
      { rubrik: "Del C", instruktion: "Skriv meningen med stor bokstav och punkt. Namn ska också ha stor bokstav.", typ: "ratta", rader: rader(UTAN_STOR.map((m) => `${m} => ${ratt(m)}`)) },
      { rubrik: "Del D", instruktion: "Vilket ord fattas?", typ: "val", rader: rader(SAKNAS.map(([m, r, fel]) => m.replace("____", `{*${r}|${fel.join("|")}}`))) },
    ],
  },
  {
    id: "textbindning-0-forst-sedan",
    titel: "Först, sedan, till slut",
    underrubrik: "Ordningsord och ord som pekar tillbaka",
    omrade: "Textbindning",
    steg: 1,
    feltyper: ["struktur.textbindning", "ordval.upprepning"],
    regel: [
      "Först, sedan och till slut visar i vilken ordning saker händer.",
      "Skriv han, hon, den, det eller de i stället för att upprepa: Lisa har en katt. Den heter Misse.",
      "Han = en pojke eller man. Hon = en flicka eller kvinna. Den/det = en sak eller ett djur. De = flera.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Välj först, sedan eller till slut.", typ: "val", rader: rader(berattelseRader()) },
      { rubrik: "Del B", instruktion: "Välj det ord som pekar tillbaka rätt.", typ: "val", rader: rader(pronomenRader()) },
      {
        rubrik: "Del C",
        instruktion: "Välj det ord som pekar tillbaka rätt.",
        typ: "val",
        rader: rader(PRONOMEN_LAG_2.map(([m, r, fel, forts], i) => `${m} {${[`*${r}`, ...fel].slice(i % 3).concat([`*${r}`, ...fel].slice(0, i % 3)).join("|")}} ${forts}`)),
      },
      {
        rubrik: "Del D",
        instruktion: "Skriv om så att du inte upprepar ordet. Använd han, hon, den, det eller de.",
        typ: "ratta",
        rader: rader([
          "Lisa har en katt. Lisa matar katten. => Lisa har en katt. Hon matar den.",
          "Pelle har en hund. Hunden heter Bus. => Pelle har en hund. Den heter Bus.",
          "Mormor bakar. Mormor bakar bullar. => Mormor bakar. Hon bakar bullar.",
          "Vi har ett hus. Huset är gult. => Vi har ett hus. Det är gult.",
          "Ali och Sam leker. Ali och Sam är glada. => Ali och Sam leker. De är glada.",
          "Morfar har en båt. Morfar fiskar från båten. => Morfar har en båt. Han fiskar från den.",
          "Elsa har en cykel. Cykeln är ny. => Elsa har en cykel. Den är ny.",
          "Barnen bygger en koja. Barnen leker i kojan. => Barnen bygger en koja. De leker i den.",
          "Jag har ett pussel. Pusslet är svårt. => Jag har ett pussel. Det är svårt.",
          "Sam har en bror. Brodern heter Leo. => Sam har en bror. Han heter Leo.",
        ]),
      },
    ],
  },
  {
    id: "ordklasser-2-alla-tio",
    titel: "Alla tio ordklasser",
    underrubrik: "Ordklass, konjunktion eller subjunktion och tempus",
    omrade: "Grammatik",
    steg: 3,
    feltyper: ["grammatik.bojning", "grammatik.tempus"],
    regel: [
      "De tio ordklasserna: substantiv, verb, adjektiv, adverb, pronomen, prepositioner, konjunktioner, subjunktioner, räkneord och interjektioner.",
      "Avgör ordklassen efter vad ordet gör i meningen: en snabb löpare (adjektiv) – hon sprang snabbt (adverb).",
      "Konjunktioner binder ihop likvärdiga led (och, men, eller, för, så). Subjunktioner inleder bisatser (att, eftersom, när, om).",
      "Tempus: presens (skriver), preteritum (skrev), perfekt (har skrivit), pluskvamperfekt (hade skrivit), futurum (ska skriva).",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Vilken ordklass är ordet med STORA BOKSTÄVER?", typ: "val", rader: rader(ORDKLASS_HOG.map(([m, r, fel]) => `${m} {*${r}|${fel.join("|")}}`)) },
      { rubrik: "Del B", instruktion: "Konjunktion eller subjunktion?", typ: "val", rader: rader(KONJ_SUBJ.map(([m, k]) => `${m} {${k === "konjunktion" ? "*konjunktion|subjunktion" : "konjunktion|*subjunktion"}}`)) },
      { rubrik: "Del C", instruktion: "Skriv verbet i rätt tempus.", typ: "skriv", rader: rader(TEMPUS_HOG.map(([v, t, svar]) => `Jag ${v}. (${t}) Jag {${svar}}.`)) },
    ],
  },
  {
    id: "ordbildning-1-forkortningar-lanord",
    titel: "T.ex., frukost och arbetsplats",
    underrubrik: "Förkortningar, lånord och sammansättningar",
    omrade: "Ordbildning",
    steg: 3,
    feltyper: ["stavning.sarskrivning", "stavning.ovrigt"],
    regel: [
      "Förkortningar med punkt: t.ex., bl.a., m.m. Initialord läses bokstav för bokstav (SVT), akronymer som ett ord (Nato), kortord är avkortade ord (bil).",
      "Lånord har kommit från latin och grekiska, lågtyska (Hansan), franska (1700-talet) och engelska (i dag).",
      "Sammansatta ord skrivs ihop. Ibland behövs ett foge-s: arbetsplats. Ibland kortas förleden: skolgård.",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Skriv ut förkortningen.", typ: "skriv", rader: rader(FORKORTNINGAR.map(([f, u]) => `${f} = {${u}}`)) },
      { rubrik: "Del B", instruktion: "Varifrån kommer lånordet?", typ: "val", rader: rader(lanordRader()) },
      { rubrik: "Del C", instruktion: "Sätt ihop orden. Tänk på fogen.", typ: "skriv", rader: rader(FOGAR.map(([a, b, c]) => `${a} + ${b} = {${c}}`)) },
      {
        rubrik: "Del D",
        instruktion: "Vilken typ av förkortning är det?",
        typ: "val",
        rader: rader(FORKORTNINGSTYP.map(([f, t]) => `${f} {${FTYP.map((x) => (x === t ? "*" : "") + x).join("|")}}`)),
      },
    ],
  },
  {
    id: "stilistik-1-stilniva-bildsprak",
    titel: "Formellt, informellt och bildspråk",
    underrubrik: "Stilnivå, ordval och stilfigurer",
    omrade: "Stilistik",
    steg: 3,
    feltyper: ["ordval.stilniva", "ordval.precision"],
    regel: [
      "Anpassa stilnivån efter mottagare och syfte: ett sms till en kompis är informellt, en insändare eller rapport är formell.",
      "Värdeladdade ord visar vad skribenten tycker: snål (negativt) – sparsam (neutralt).",
      "Liknelse har som (snabb som en vessla). Metafor saknar som (han är en klippa). Besjälning ger saker mänskliga egenskaper (vinden viskade).",
    ],
    delar: [
      { rubrik: "Del A", instruktion: "Formellt eller informellt?", typ: "val", rader: rader(STILNIVA.map(([m, s]) => `${m} {${s === "formellt" ? "*formellt|informellt" : "formellt|*informellt"}}`)) },
      { rubrik: "Del B", instruktion: "Vilken stilfigur är det?", typ: "val", rader: rader(figurRader(STILFIGURER, FIGURER)) },
      { rubrik: "Del C", instruktion: "Välj det ord som passar i en formell text.", typ: "val", rader: rader(FORMELLT_VAL.map(([m, f, i], n) => m.replace("____", n % 2 ? `{${i}|*${f}}` : `{*${f}|${i}}`))) },
      { rubrik: "Del D", instruktion: "Neutralt eller värdeladdat?", typ: "val", rader: rader(VARDELADDAT.map(([m, v]) => `${m} {${v === "neutralt" ? "*neutralt|värdeladdat" : "neutralt|*värdeladdat"}}`)) },
    ],
  },
];
