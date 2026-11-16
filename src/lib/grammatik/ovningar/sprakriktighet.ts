import { bygg } from "./bygg";

/**
 * Språkriktighet och fördjupning som ofta saknas i grammatikböcker:
 * kongruens, sin/hans, aktiv och passiv form, partikelverb, particip,
 * fraser och attribut samt bisatsernas tre typer.
 * Serien "k" håller id:n skilda från de andra filernas.
 */

const ROLLER = ["Subjekt", "Predikat", "Objekt", "Indirekt objekt", "Adverbial", "Predikativ"];

/* ------------------------------ Mellanstadiet ------------------------------ */
const okMel = bygg("ordklasser", "mellanstadiet", "k");
okMel.r("Huset är {stor|stort}.", "Hus är ett ett-ord. Adjektivet får -t: huset är stort.");
okMel.r("Bilarna var {snabb|snabba}.", "Flera bilar – adjektivet får -a: bilarna var snabba.");
okMel.r("Vi är {glad|glada} i dag.", "Vi är flera – glada.");
okMel.r("Det var ett {rolig|roligt} spel.", "Ett spel – roligt.");
okMel.l("Äpplena är ____.", ["röd", "rött", "*röda"], "Flera äpplen – röda.");
okMel.l("Ett ____ barn satt på bänken.", ["*litet", "liten", "lilla"], "Ett barn – litet.");
okMel.v("Vilken mening är rätt?", ["Rummet var mörk.", "*Rummet var mörkt.", "Rummet var mörka."], "Ett rum – mörkt.");

const sdMel = bygg("satsdelar", "mellanstadiet", "k");
sdMel.v("Vad handlar ”den gamla cykeln i förrådet” om – vilket ord är viktigast?", ["gamla", "*cykeln", "förrådet"], "Det är cykeln det handlar om. De andra orden beskriver den.");

/* -------------------------------- Högstadiet -------------------------------- */
const okHog = bygg("ordklasser", "hogstadiet", "k");
// Kongruens
okHog.r("Huset vi bodde i var {gammal|gammalt}.", "Subjektet är huset (ett-ord) – predikativet får -t: gammalt.");
okHog.r("Eleverna blev {förvånad|förvånade} över resultatet.", "Flera elever – förvånade.");
okHog.r("Fönstret var {stängd|stängt} hela natten.", "Perfekt particip böjs som adjektiv: fönstret var stängt.");
okHog.r("De kände sig {ensam|ensamma}.", "De är flera – ensamma.");
okHog.r("Problemen är {allvarlig|allvarliga}.", "Problemen (plural) – allvarliga.");
okHog.l("Dörrarna var ____ när vi kom.", ["låst", "*låsta", "låsat"], "Flera dörrar – låsta.");
okHog.v("Vilken mening har rätt kongruens?", ["Maten var god och barnen var mätt.", "*Maten var god och barnen var mätta.", "Maten var gott och barnen var mätta."], "Maten (en-ord) – god. Barnen (plural) – mätta.");
// Sin eller hans/hennes
okHog.r("Sara lånade ut {hennes|sin} cykel till Ali.", "Det är Saras egen cykel och Sara är subjekt – då används sin.");
okHog.r("Ali och {sin|hans} syster kom sent.", "Sin kan inte stå i subjektet. Skriv Ali och hans syster.");
okHog.r("Eleverna tog med {deras|sina} böcker.", "Böckerna tillhör eleverna, som är subjekt – sina.");
okHog.r("Hon ringde till {hennes|sin} mamma.", "Hennes egen mamma – sin mamma.");
okHog.v("Vem äger boken i ”Elsa gav Moa hennes bok”?", ["Elsa", "*Moa (eller någon annan)", "Det går inte att säga"], "Hade boken varit Elsas skulle det stå sin bok. Hennes pekar på någon annan än subjektet.");
okHog.v("Varför är ”Han och sin bror spelar fotboll” fel?", ["Sin används bara om flera.", "*Sin kan inte stå i subjektet – det ska vara hans bror.", "Bror ska stå i bestämd form."], "Sin syftar tillbaka på subjektet och kan därför inte själv vara en del av subjektet.");
okHog.m("Klicka på det ord som syftar tillbaka på subjektet.", "Kalle glömde [sin] jacka i skolan.");
// Aktiv och passiv
okHog.v("Vilken mening står i passiv form?", ["Kommunen bygger en ny skola.", "*En ny skola byggs av kommunen.", "Kommunen ska bygga en ny skola."], "Passiv: det som påverkas blir subjekt, och verbet får -s eller bli + particip.");
okHog.v("Gör om till passiv: ”Polisen stoppade bilen.”", ["Bilen stoppade polisen.", "*Bilen stoppades av polisen.", "Polisen stoppades av bilen."], "Bilen blir subjekt, verbet får -s och den som gör något kommer efter av.");
okHog.v("Varför är passiv form vanlig i faktatexter?", ["*Det viktiga är vad som händer, inte vem som gör det.", "Passiv är alltid kortare.", "Aktiv form är fel i faktatexter."], "Proven analyserades – det spelar mindre roll vem som gjorde det.");
okHog.v("Vilken mening är aktiv?", ["Fönstret krossades i natt.", "Boken skrevs 1945.", "*Grannen krossade fönstret i natt."], "Aktiv: den som gör något är subjekt – grannen.");
okHog.l("Vägen ____ i somras.", ["*asfalterades", "asfalterade", "asfalterat"], "Vägen gjorde inget själv – passiv: asfalterades.");
okHog.l("Mötet ____ till nästa vecka.", ["flyttade", "*har flyttats", "har flyttat"], "Mötet flyttar inte sig självt – passiv: har flyttats.");
okHog.k("Aktiv eller passiv form?", { Aktiv: ["Hon skrev brevet.", "Vi målade huset.", "Läraren rättade proven."], Passiv: ["Brevet skrevs av henne.", "Huset målades.", "Proven rättades i går."] });
// Partikelverb
okHog.v("I vilken mening är ”om” en betonad partikel?", ["Han berättade om resan.", "*Jag tycker om glass.", "Vi pratade om filmen."], "Tycka om är ett partikelverb – om är betonat och hör ihop med verbet.");
okHog.m("Klicka på partiklarna – de betonade småorden som hör ihop med verbet.", "Hon gav [upp] efter en timme, men han höll [ut] och kom [fram].");
okHog.r("Kan du {avstänga|stänga av} datorn?", "Stänga av är partikelverbet. Avstänga betyder något annat (stänga av någon från ett uppdrag).");
// Particip
okHog.v("Vilket ord är ett presens particip?", ["stängd", "*skrattande", "skrattade"], "Presens particip slutar på -ande eller -ende: skrattande, gående.");
okHog.v("Vilket ord är ett perfekt particip?", ["*målad", "målande", "målar"], "Perfekt particip: målad, stängd, skriven. Det böjs som ett adjektiv.");
okHog.l("Ett ____ fönster släpper in kyla.", ["öppnad", "*öppnat", "öppnade"], "Ett fönster – perfekt particip i neutrum: öppnat.");
okHog.m("Klicka på alla particip.", "Det [gråtande] barnet satt på den [nymålade] bänken bredvid en [trasig] cykel.", "Trasig är ett vanligt adjektiv. Gråtande och nymålade kommer av verb.");

const sdHog = bygg("satsdelar", "hogstadiet", "k");
sdHog.v("Vilket är huvudordet i nominalfrasen ”min äldsta bror i Göteborg”?", ["min", "äldsta", "*bror", "Göteborg"], "Huvudordet är det frasen handlar om. Resten är attribut.");
sdHog.v("Vilket attribut står efter huvudordet i ”en tröja med långa ärmar”?", ["en", "tröja", "*med långa ärmar"], "Attribut kan stå efter huvudordet – ofta en prepositionsfras eller en relativsats.");
sdHog.v("Hur många ord är subjektet i ”Den lilla röda stugan vid sjön brann ner.”?", ["1", "3", "*6"], "Hela nominalfrasen är subjekt: Den lilla röda stugan vid sjön.");
sdHog.m("Klicka på alla attribut till ordet hund.", "En [stor] [svart] hund [med vit nos] låg i hallen.", "Attribut beskriver huvudordet: stor, svart och med vit nos.");
sdHog.m("Klicka på huvudordet i varje fras.", "Den gamla [läraren] gav de nya [eleverna] en svår [uppgift].");
sdHog.k("Står attributet före eller efter huvudordet?", { "Före huvudordet": ["en spännande film", "tre katter", "Lisas cykel"], "Efter huvudordet": ["huset på hörnet", "en film som skrämde alla", "boken om rymden"] });
sdHog.s("Gör en satsanalys. Hela nominalfrasen är en satsdel.", "Min äldsta syster:Subjekt | köpte:Predikat | en begagnad bil:Objekt | i somras:Adverbial", ROLLER);

const mbHog = bygg("meningsbyggnad", "hogstadiet", "k");
mbHog.v("Vilken sorts bisats är ”som bor bredvid oss” i ”Familjen som bor bredvid oss har en häst”?", ["att-sats", "*relativsats", "adverbiell bisats"], "Relativsatsen beskriver ett ord (familjen) – den börjar ofta med som.");
mbHog.v("Vilken sorts bisats är ”att det var sent”?", ["*att-sats", "relativsats", "adverbiell bisats"], "Att-satser fungerar ofta som objekt: Jag märkte att det var sent.");
mbHog.v("Vilken sorts bisats är ”eftersom det regnade”?", ["att-sats", "relativsats", "*adverbiell bisats"], "Adverbiella bisatser berättar när, varför, på vilket villkor – som ett adverbial.");
mbHog.k("Sortera bisatserna.", { "Att-sats": ["att hon kommer", "att det är för sent"], Relativsats: ["som jag läste", "där vi bodde"], "Adverbiell bisats": ["när det blev mörkt", "om du vill", "trots att det regnade"] });
mbHog.m("Klicka på relativsatsen.", "Boken [som jag lånade i går] var spännande.");
mbHog.m("Klicka på den adverbiella bisatsen.", "Vi gick hem [när filmen var slut].");
mbHog.r("Hon fick A på provet, {som|vilket} gjorde henne glad.", "Vilket syftar på hela satsen före. Som syftar på ett enskilt ord.");
mbHog.r("Flickan {vilken|som} vann loppet heter Ella.", "Som är det vanliga relativa pronomenet om personer.");

/* -------------------------------- Gymnasiet -------------------------------- */
const okGy = bygg("ordklasser", "gymnasiet", "k");
okGy.r("Varje elev ska ta med {deras|sin} dator.", "Subjektet är varje elev (singular) – sin.");
okGy.r("Resultaten av undersökningen var {oväntad|oväntade}.", "Huvudordet är resultaten (plural) – oväntade. Låt dig inte luras av undersökningen.");
okGy.r("Antalet sökande har {ökad|ökat} kraftigt.", "Har + supinum: ökat. Ökad är particip: en ökad risk.");
okGy.r("Ett av förslagen {antogos|antogs}.", "Pluralformerna på -o (antogos) är ålderdomliga. Skriv antogs.");
okGy.v("Vilken mening har en utsatt agent?", ["Beslutet fattades i går.", "*Beslutet fattades av styrelsen.", "Styrelsen fattade beslutet."], "Agenten är den som utför handlingen i en passiv mening: av styrelsen.");
okGy.v("Varför kan passiv vara problematiskt i en debattartikel?", ["*Den som ansvarar för handlingen kan döljas.", "Passiv är grammatiskt fel i debattartiklar.", "Passiv gör texten alltid längre."], "Misstag har begåtts – av vem? Passiv kan dölja ansvar.");
okGy.v("Vilken s-form är INTE passiv?", ["Huset byggdes 1920.", "*Vi ses i morgon.", "Proven rättas i helgen."], "Ses är ett deponens- eller reciprokt verb – vi ser varandra. Det är inte passiv.");
okGy.l("Det ____ förslaget godkändes av alla.", ["omarbeta", "*omarbetade", "omarbetat"], "Bestämd form: det omarbetade förslaget.");
okGy.m("Klicka på alla verb i passiv form.", "Lagen [antogs] 2019 men [har kritiserats] sedan dess. Nu ska den [ses över].", "Ses över är passiv av partikelverbet se över.");

const mbGy = bygg("meningsbyggnad", "gymnasiet", "k");
mbGy.v("Vilken funktion har bisatsen i ”Att klimatet förändras är ställt utom allt tvivel”?", ["*subjekt", "objekt", "adverbial"], "Att-satsen är meningens subjekt: Vad är ställt utom allt tvivel?");
mbGy.v("Vad syftar ”vilket” på i ”Räntan höjdes, vilket drabbade många”?", ["räntan", "*hela satsen före", "många"], "Vilket kan syfta på en hel sats. Som kan bara syfta på ett ord.");
mbGy.r("Studien, {vilket|som} publicerades i maj, väckte debatt.", "Studien är ett en-ord, så vilket passar inte. Skriv som (eller vilken). Vilket används om ett ett-ord eller en hel sats.");
mbGy.k("Vilken satsdel är bisatsen?", { Subjekt: ["Att du kom gladde mig.", "Vem som vann är oklart."], Objekt: ["Jag vet att du har rätt.", "Hon undrade om vi kom."], Adverbial: ["När det blev mörkt gick vi hem.", "Vi stannar om det regnar."] });

export const SPRAKRIKTIGHET = [
  ...okMel.ovningar,
  ...sdMel.ovningar,
  ...okHog.ovningar,
  ...sdHog.ovningar,
  ...mbHog.ovningar,
  ...okGy.ovningar,
  ...mbGy.ovningar,
];
