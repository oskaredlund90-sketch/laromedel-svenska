import type { HafteKalla } from "../typer";

export const PROV_HOG_GY: HafteKalla[] = [
  {
    id: "prov-hogstadiet",
    titel: "Grammatikprov – högstadiet",
    underrubrik: "Ordklasser, satsdelar, verbformer, skiljetecken och stil (åk 7–9)",
    omrade: "Grammatikprov",
    steg: 3,
    feltyper: [
      "grammatik.ordfoljd",
      "grammatik.verbform",
      "grammatik.de-dem",
      "grammatik.genus",
      "grammatik.bojning",
      "skiljetecken.komma",
      "struktur.textbindning",
      "ordval.stilniva",
    ],
    regel: [
      "Provet har tio delar, en för varje moment. Varje lucka eller mening ger 1 poäng – totalt 100 poäng.",
      "Ord i VERSALER är de ord som frågan gäller. Läs instruktionen till varje del noga innan du svarar.",
      "I rätta-uppgifterna skriver du om hela meningen rätt, med stor bokstav och skiljetecken.",
    ],
    delar: [
      {
        rubrik: "Del 1: Ordklasser",
        instruktion: "Vilken ordklass hör ordet i VERSALER till?",
        typ: "val",
        rader: `
          Vi åt GOTT bröd. → {verb|*adjektiv|adverb|substantiv}
          Hon sjunger VACKERT. → {adjektiv|*adverb|verb|preposition}
          Katten låg UNDER bordet. → {adverb|konjunktion|*preposition|pronomen}
          Jag och DU går hem. → {*pronomen|substantiv|räkneord|interjektion}
          Hon köpte TRE äpplen. → {adjektiv|*räkneord|pronomen|adverb}
          Vi gick hem, MEN det regnade. → {subjunktion|preposition|*konjunktion|adverb}
          Jag stannar inne EFTERSOM det regnar. → {konjunktion|*subjunktion|preposition|adverb}
          AJ, det gör ont! → {adverb|pronomen|*interjektion|verb}
          LYCKAN var stor. → {*substantiv|adjektiv|verb|adverb}
          De har LÄST boken. → {substantiv|adjektiv|räkneord|*verb}
          Hon kommer OFTA hit. → {preposition|*adverb|adjektiv|konjunktion}
          Jag vet ATT du har rätt. → {konjunktion|pronomen|*subjunktion|preposition}
          Det var den FÖRSTA snön. → {adjektiv|*räkneord|adverb|substantiv}
          Vi badade i den KALLA sjön. → {adverb|substantiv|verb|*adjektiv}
          Det är MIN cykel. → {adjektiv|substantiv|*pronomen|räkneord}
          Vill du ha te ELLER kaffe? → {subjunktion|*konjunktion|preposition|adverb}
        `,
      },
      {
        rubrik: "Del 2: Satsdelar",
        instruktion: "Vilken satsdel är ordet eller orden i VERSALER?",
        typ: "val",
        rader: `
          HUNDEN skällde på brevbäraren. → {*subjekt|direkt objekt|predikat|adverbial}
          Hunden SKÄLLDE på brevbäraren. → {subjekt|*predikat|adverbial|predikativ}
          Elsa köpte EN NY JACKA. → {indirekt objekt|subjekt|*direkt objekt|predikativ}
          Elsa gav SIN BROR en present. → {direkt objekt|*indirekt objekt|subjekt|adverbial}
          Vi träffas I MORGON. → {direkt objekt|predikativ|subjekt|*adverbial}
          Min syster är LÄKARE. → {direkt objekt|*predikativ|subjekt|adverbial}
          Maten blev KALL. → {adverbial|direkt objekt|*predikativ|predikat}
          I PARKEN spelade barnen fotboll. → {subjekt|*adverbial|direkt objekt|predikativ}
          I parken spelade BARNEN fotboll. → {direkt objekt|adverbial|*subjekt|predikativ}
          I parken spelade barnen FOTBOLL. → {*direkt objekt|subjekt|predikativ|indirekt objekt}
          Läraren visade ELEVERNA kartan. → {direkt objekt|subjekt|adverbial|*indirekt objekt}
          Han har ALDRIG varit i Spanien. → {predikat|*adverbial|subjekt|predikativ}
        `,
      },
      {
        rubrik: "Del 3: Huvudsats, bisats och BIFF-regeln",
        instruktion:
          "Avgör om delen i VERSALER är huvudsats eller bisats, eller välj rätt ordföljd. BIFF: i bisatser står inte, aldrig och liknande ord före det böjda verbet.",
        typ: "val",
        rader: `
          NÄR DET BLEV MÖRKT tände vi lampan. → {huvudsats|*bisats}
          När det blev mörkt TÄNDE VI LAMPAN. → {*huvudsats|bisats}
          Jag vet att han {*inte kommer|kommer inte} i dag.
          Hon sa att hon {ville inte|*inte ville} följa med.
          Vi blev förvånade eftersom vi {*aldrig hade|hade aldrig} sett snö förut.
          Det är filmen som jag {såg inte|*inte såg}.
          Om du {*inte hinner|hinner inte} i dag kan du ringa i morgon.
          Vilket ord inleder bisatsen i meningen ”Hon log när hon såg brevet”? → {hon|log|*när|såg}
        `,
      },
      {
        rubrik: "Del 4: Verbformer",
        instruktion: "Skriv verbet i rätt form. Ledtråden säger vilket verb och ibland vilken form.",
        typ: "skriv",
        rader: `
          I går {skrev} jag ett brev. (skriva, preteritum)
          Jag har {skrivit} ett brev. (skriva, supinum)
          Brevet är {skrivet} för hand. (skriva, perfekt particip)
          Hon {springer} till skolan varje dag. (springa, presens)
          {Stäng} dörren! (stänga, imperativ)
          Jag vill {sova} nu. (sova, infinitiv)
          Vi har {sovit} länge. (sova, supinum)
          Han {gick} hem tidigt i går. (gå, preteritum)
          Ett {leende} barn vinkade. (le, presens particip)
          Huset {byggdes} år 1920. (bygga, passiv preteritum)
          Maten {lagas} av kocken varje kväll. (laga, passiv presens)
          Böckerna har {lånats} av eleverna. (låna, passiv supinum)
        `,
      },
      {
        rubrik: "Del 5: Substantiv – genus och böjning",
        instruktion: "Skriv substantivet i rätt form, eller skriv en eller ett.",
        typ: "skriv",
        rader: `
          en bil – flera {bilar} (obestämd form plural)
          ett hus – alla {husen} (bestämd form plural)
          en flicka – {flickan} (bestämd form singular)
          ett äpple – två {äpplen} (obestämd form plural)
          en mus – många {möss} (obestämd form plural)
          en bok – flera {böcker} (obestämd form plural)
          ett museum – {museet} (bestämd form singular)
          en sko – {skorna} (bestämd form plural)
          Det heter {ett} paraply. (en eller ett)
          Det heter {en} gurka. (en eller ett)
        `,
      },
      {
        rubrik: "Del 6: De eller dem",
        instruktion: "Välj de eller dem. Tips: byt mot vi/oss – vi motsvarar de, oss motsvarar dem.",
        typ: "val",
        rader: `
          {*De|Dem} spelar fotboll varje dag.
          Jag såg {de|*dem} på bion.
          {Dem|*De} som vill får gå hem.
          Vi hjälpte {de|*dem} som hade gått vilse.
          Ge boken till {*dem|de}.
          {*De|Dem} nya eleverna kom i dag.
          Jag gillar {dem|*de} röda skorna.
          Läraren bad {*dem|de} att vara tysta.
        `,
      },
      {
        rubrik: "Del 7: Skiljetecken",
        instruktion: "Skriv om meningen med rätt skiljetecken (komma, kolon, semikolon eller tankstreck).",
        typ: "ratta",
        rader: `
          Jag köpte mjölk ägg och smör. => Jag köpte mjölk, ägg och smör.
          Ta med följande saker; penna, sudd och linjal. => Ta med följande saker: penna, sudd och linjal.
          – Jag kommer snart sa hon. => – Jag kommer snart, sa hon.
          Stockholm Sveriges huvudstad ligger vid Mälaren. => Stockholm, Sveriges huvudstad, ligger vid Mälaren.
          Ja det vill jag gärna. => Ja, det vill jag gärna.
          Kom hit Lisa! => Kom hit, Lisa!
          Klockan var mycket, alla hade gått hem. => Klockan var mycket; alla hade gått hem. || Klockan var mycket. Alla hade gått hem.
          Regeln är enkel ingen får fuska. => Regeln är enkel: ingen får fuska. || Regeln är enkel – ingen får fuska.
          Han hade glömt det viktigaste nycklarna. => Han hade glömt det viktigaste – nycklarna. || Han hade glömt det viktigaste: nycklarna.
          Hon köpte äpplen, päron, och bananer. => Hon köpte äpplen, päron och bananer.
        `,
      },
      {
        rubrik: "Del 8: Ordbildning",
        instruktion: "Välj rätt svar om hur orden är bildade.",
        typ: "val",
        rader: `
          Ordet fotbollsplan är en {avledning|*sammansättning|förkortning}.
          Ordet vänlighet är en {sammansättning|förkortning|*avledning}.
          I ordet olycklig är o- ett {*prefix|suffix|efterled}.
          I ordet läsbar är -bar ett {prefix|förled|*suffix}.
          Vilket ord är en sammansättning? → {skrivare|*skrivbord|oskriven}
          Vilket ord är en avledning? → {tandläkare|*sjukdom|bilväg}
          Vilken del bestämmer vad sammansättningen äppelträd betyder (huvudordet)? → {äppel|*träd}
          Vilket ord är rätt bildat? → {arbetedag|arbetdag|*arbetsdag}
        `,
      },
      {
        rubrik: "Del 9: Textbindning och sambandsord",
        instruktion: "Välj det sambandsord som gör att texten hänger ihop logiskt.",
        typ: "val",
        rader: `
          Det regnade hela dagen. {Dessutom|*Därför|Däremot} ställdes matchen in.
          Bilar är bekväma. {*Däremot|Därför|Alltså} släpper de ut mycket koldioxid.
          Han tränade hårt, {*så|men|trots att} han blev uttagen till laget.
          Tåget var försenat. {Därför|Dessutom|*Ändå} hann vi i tid.
          Först skalar du potatisen. {Därför|*Sedan|Däremot} kokar du den.
          Skolan bör ha längre raster. {*För det första|Däremot|Trots det} orkar eleverna mer då.
          Hon var sjuk. {Därför|*Trots det|Följaktligen} gick hon till jobbet.
          Läxor ger mer träning. {Därför|Alltså|*Å andra sidan} tar de tid från fritiden.
        `,
      },
      {
        rubrik: "Del 10: Stilnivå",
        instruktion: "Välj det ord eller uttryck som passar bäst i en formell text, till exempel en debattartikel.",
        typ: "val",
        rader: `
          Många ungdomar {*anser|tycker typ|känner liksom} att skoldagen är för lång.
          Resultatet var {asbra|*mycket bra|skitbra}.
          Det finns {sjukt många|hur mycket som helst|*många} skäl att cykla.
          Forskarna {kollade|*undersökte|spanade på} hur eleverna sov.
          Politikerna borde {*förbättra|fixa till|snygga till} kollektivtrafiken.
          Sammanfattningsvis är {det typ klart|*det tydligt|det ju klockrent} att mer forskning behövs.
          Eleverna {snackade om|tjötade om|*diskuterade} frågan.
          Skolan måste {dra ner på typ|*minska|kapa rejält} stressen hos eleverna.
        `,
      },
    ],
  },
  {
    id: "prov-gymnasiet",
    titel: "Grammatikprov – gymnasiet",
    underrubrik: "Satsanalys, bisatser, kongruens, skrivregler och stilistik",
    omrade: "Grammatikprov",
    steg: 4,
    feltyper: [
      "grammatik.kongruens",
      "grammatik.de-dem",
      "grammatik.verbform",
      "stavning.sarskrivning",
      "stavning.stor-bokstav",
      "ordval.stilniva",
      "ordval.precision",
    ],
    regel: [
      "Provet har tio delar, en för varje moment. Varje lucka eller mening ger 1 poäng – totalt 100 poäng.",
      "Ord i VERSALER är de ord som frågan gäller. Följ svensk skriftspråksnorm (Svenska skrivregler).",
      "I rätta-uppgifterna skriver du om hela meningen rätt, med stor bokstav och skiljetecken.",
    ],
    delar: [
      {
        rubrik: "Del 1: Satsanalys",
        instruktion: "Vilken satsdel eller satsdelsled är orden i VERSALER?",
        typ: "val",
        rader: `
          Den RÖDA bilen stod parkerad. → {adverbial|*attribut|predikativ|subjekt}
          Bilen var RÖD. → {*predikativ|attribut|adverbial|direkt objekt}
          Beslutet fattades AV STYRELSEN. → {adverbial|indirekt objekt|*agent|subjekt}
          Boken PÅ BORDET är min. → {adverbial|*attribut|agent|predikativ}
          Hon lade boken PÅ BORDET. → {attribut|*adverbial|predikativ|direkt objekt}
          Vi valde Lisa TILL ORDFÖRANDE. → {direkt objekt|attribut|*predikativ|adverbial}
          Bostadsbristen I STORSTÄDERNA har ökat. → {adverbial|agent|subjekt|*attribut}
          Läraren gav ELEVERNA nya uppgifter. → {direkt objekt|*indirekt objekt|agent|attribut}
          Läraren gav eleverna NYA uppgifter. → {*attribut|predikativ|adverbial|direkt objekt}
          Matchen sköts upp PÅ GRUND AV REGNET. → {agent|*adverbial|attribut|indirekt objekt}
          Huset målades AV MIN MORFAR. → {*agent|adverbial|subjekt|attribut}
          Hennes bror är EN SKICKLIG PIANIST. → {direkt objekt|attribut|subjekt|*predikativ}
        `,
      },
      {
        rubrik: "Del 2: Modus och aspekt",
        instruktion: "Välj rätt form, eller avgör vilket modus verbet i VERSALER står i eller vilken mening som uttrycker rätt aspekt.",
        typ: "val",
        rader: `
          {Lever|*Leve|Levde} kungen!
          Gud {bevarar|bevarade|*bevare} oss!
          Om jag {*vore|är|blir} du skulle jag tacka ja.
          STÄNG fönstret! → {indikativ|konjunktiv|*imperativ}
          Hon STÄNGDE fönstret. → {*indikativ|konjunktiv|imperativ}
          Det VORE synd om ni missade tåget. → {indikativ|*konjunktiv|imperativ}
          Vilken mening uttrycker att handlingen pågår? → {Hon läste ut boken.|*Hon satt och läste.|Hon har läst boken.}
          Vilken mening uttrycker att handlingen är avslutad? → {Han höll på att skriva.|Han satt och skrev.|*Han skrev färdigt uppsatsen.}
        `,
      },
      {
        rubrik: "Del 3: Nominalisering",
        instruktion: "Skriv om med ett substantiv i stället för verbet eller adjektivet (nominalisering).",
        typ: "skriv",
        rader: `
          Priserna ökade kraftigt. → Den kraftiga {ökningen} av priserna. (öka)
          Regeringen beslutade. → Regeringens {beslut}. (besluta)
          Forskarna analyserade materialet. → Forskarnas {analys} av materialet. (analysera)
          Eleverna deltog aktivt. → Elevernas aktiva {deltagande}. (delta)
          Utsläppen minskade. → {Minskningen} av utsläppen. (minska)
          Tåget försenades. → Tågets {försening}. (försena)
          Hon var ärlig. → Hennes {ärlighet}. (ärlig)
          Vattnet var djupt. → Vattnets {djup}. (djup)
          Kommunen planerade. → Kommunens {planering/planer/plan}. (planera)
          Vi jämförde texterna. → {Jämförelsen/En jämförelse} av texterna. (jämföra)
        `,
      },
      {
        rubrik: "Del 4: Bisatstyper",
        instruktion: "Vilken typ av bisats är delen i VERSALER, och vilken funktion har den?",
        typ: "val",
        rader: `
          Jag hoppas ATT DU KOMMER. → {relativsats|*att-sats|adverbiell bisats|frågebisats}
          Boken SOM JAG LÄSTE var spännande. → {*relativsats|att-sats|adverbiell bisats|frågebisats}
          Vi stannade inne EFTERSOM DET REGNADE. → {relativsats|att-sats|*adverbiell bisats|frågebisats}
          Jag undrar OM HON HAR RINGT. → {adverbiell bisats|att-sats|relativsats|*frågebisats}
          OM DET REGNAR stannar vi inne. → {frågebisats|*adverbiell bisats|att-sats|relativsats}
          Staden DÄR JAG VÄXTE UPP har förändrats. → {adverbiell bisats|frågebisats|*relativsats|att-sats}
          Det är viktigt ATT ALLA FÅR KOMMA TILL TALS. → {*att-sats|relativsats|adverbiell bisats|frågebisats}
          Han ringde INNAN HAN KOM. → {relativsats|att-sats|frågebisats|*adverbiell bisats}
          Jag hoppas ATT DU KOMMER. Bisatsen fungerar som {*direkt objekt|subjekt|adverbial|attribut}.
          Boken SOM JAG LÄSTE var spännande. Bisatsen fungerar som {adverbial|*attribut|direkt objekt|predikativ}.
        `,
      },
      {
        rubrik: "Del 5: Syftning och kongruens",
        instruktion: "Välj den form som kongruerar (stämmer överens), eller den mening som har tydlig syftning.",
        typ: "val",
        rader: `
          Huset är {*målat|målad|målade} i rött.
          Fönstren var {öppen|öppet|*öppna}.
          Ett av barnen var {sjuk|*sjukt|sjuka}.
          Var och en av eleverna fick {*sin|sina|deras} bok.
          Både Anna och Erik är {glad|*glada|glatt} över beskedet.
          Alla gäster är {välkommen|*välkomna|välkommet}.
          Breven var {skriven|skrivet|*skrivna} för hand.
          Det {*sålda|sålt|såld} huset låg vid sjön.
          Vilken mening har tydlig syftning? → {Lisa sa till Emma att hon hade vunnit.|*Lisa berättade för Emma att Emma hade vunnit.}
          Vilken mening har tydlig syftning? → {*Erik ringde Johan när Johan kom hem.|Erik ringde Johan när han kom hem.}
        `,
      },
      {
        rubrik: "Del 6: Skrivregler",
        instruktion:
          "Skriv om meningen enligt Svenska skrivregler: siffror och tal, förkortningar, citat samt stor och liten bokstav.",
        typ: "ratta",
        rader: `
          Det kom 7 personer till mötet. => Det kom sju personer till mötet.
          Hon kom hem 10 minuter för sent. => Hon kom hem tio minuter för sent.
          Staden har 25000 invånare. => Staden har 25 000 invånare.
          Hela 45% svarade ja. => Hela 45 % svarade ja. || Hela 45 procent svarade ja.
          Det hände på 1990 talet. => Det hände på 1990-talet.
          Ta med penna, sudd, linjal, osv. => Ta med penna, sudd, linjal osv.
          Vi läste t ex två romaner. => Vi läste t.ex. två romaner. || Vi läste till exempel två romaner.
          Hon sa: ”Jag kommer i morgon”. => Hon sa: ”Jag kommer i morgon.”
          Vi firar Jul i december. => Vi firar jul i december.
          I Måndags åkte vi till göteborg. => I måndags åkte vi till Göteborg.
          Har du läst Röda Rummet av Strindberg? => Har du läst Röda rummet av Strindberg?
          Jag läser Svenska och Engelska på gymnasiet. => Jag läser svenska och engelska på gymnasiet.
        `,
      },
      {
        rubrik: "Del 7: Ordbildning och lånord",
        instruktion: "Välj rätt svar om ordbildning och lånord.",
        typ: "val",
        rader: `
          Den försvenskade stavningen av engelskans e-mail är {mail|*mejl|meil}.
          Vilket ord är ett lånord från franska? → {hus|vatten|*trottoar}
          Vilket ord är ett lånord från engelska? → {*mejla|skriva|läsa}
          en app – flera {apps|*appar|appsen}
          Vilket ord är bildat genom avledning? → {*läsbarhet|läsebok|läsår}
          Ordet miljövänlig är en {avledning|*sammansättning|förkortning}.
          Vilket ord är rätt bildat? → {rättfall|*rättsfall|rättefall}
          Ordet bil är en kortform av {*automobil|bilaga|biljett}.
        `,
      },
      {
        rubrik: "Del 8: Särskrivning",
        instruktion: "Välj rätt skrivning. Sammansatta ord skrivs ihop på svenska.",
        typ: "val",
        rader: `
          Vi köpte en {kött bit|*köttbit|kött-bit} till middag.
          Hon är {engelsk lärare|*engelsklärare|engelsk-lärare} (lärare i engelska).
          Här är det {*rökfritt|rök fritt|rök-fritt}.
          Han fick en {sjuk skrivning|sjuk-skrivning|*sjukskrivning}.
          Vi åt {kyckling lever|*kycklinglever|kyckling-lever}.
          Hon bor i ett {*hyreshus|hyres hus|hyres-hus}.
          Vi pratade om ett {tv program|*tv-program|tvprogram}.
          Där står en {brun hårig|brun-hårig|*brunhårig} kvinna.
        `,
      },
      {
        rubrik: "Del 9: Språkriktighet",
        instruktion: "Välj rätt form: de/dem, vilken/vilket/vilka eller sin/hans/hennes.",
        typ: "val",
        rader: `
          Jag har pratat med {de|*dem} som arrangerar festen.
          {*De|Dem} som vill får stanna kvar.
          Vi bjöd in {de|*dem} vi kände.
          {Dem|*De} flesta eleverna klarade provet.
          Huset, {vilken|*vilket|vilka} byggdes 1920, ska rivas.
          Han kom inte, {vilken|*vilket|vilka} förvånade alla.
          Eleverna, {vilken|vilket|*vilka} hade pluggat, klarade provet.
          Den metod {*vilken|vilket|vilka} vi använde var enkel.
          Erik lånade {hans|*sin} brors cykel.
          Erik och {*hans|sin} bror spelar fotboll.
          Lisa tycker att {sin|*hennes} lägenhet är för liten.
          Varje elev ska ta med {*sin|hans|deras} egen dator.
        `,
      },
      {
        rubrik: "Del 10: Stilistik och register",
        instruktion: "Välj det alternativ som stämmer bäst.",
        typ: "val",
        rader: `
          I en vetenskaplig rapport: Studien {kollar upp|*påvisar|snackar om} ett tydligt samband.
          Vilket uttryck är en kliché? → {i Sverige år 2024|*i dagens samhälle|bland svenska tonåringar}
          ”Hon var en klippa” är en {liknelse|*metafor|besjälning|allitteration}.
          ”Han var stark som en björn” är en {*liknelse|metafor|besjälning|allitteration}.
          ”Vinden viskade i träden” är en {metafor|liknelse|*besjälning|allitteration}.
          ”Jag har sagt det tusen gånger” är en {*överdrift|liknelse|besjälning|allitteration}.
          Vilket ord är mest formellt? → {få|kamma hem|*erhålla}
          Vilket ord är mest vardagligt? → {anskaffa|köpa|*fixa}
          Vilken mening har aktiv form och tydlig aktör? → {Beslut har fattats.|*Rektorn fattade beslutet.|Ett beslut fattades.}
          Vilken formulering passar bäst i en saklig utredning? → {*Många elever upplever stress.|Alla elever är sjukt stressade.|Typ alla är stressade.}
        `,
      },
    ],
  },
];
