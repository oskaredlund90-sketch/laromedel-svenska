import { kapitelprov as p } from "./kapitelprov-bygg";

export const KAPITELPROV_HOG_GY = [
  /* ================================ Högstadiet ============================== */
  p("hogstadiet", "ordklasser", [
    {
      i: "Vilken ordklass är ordet med STORA BOKSTÄVER?",
      t: "val",
      r: `
        Hon sjöng VACKERT. {adjektiv|*adverb|verb|substantiv}
        Det var en VACKER sång. {*adjektiv|adverb|verb|substantiv}
        PANG, sa det. {adverb|*interjektion|verb|pronomen}
        Vi bor BREDVID skolan. {adverb|konjunktion|*preposition|subjunktion}
        Jag stannar MEDAN du handlar. {konjunktion|*subjunktion|preposition|adverb}
        Te ELLER kaffe? {*konjunktion|subjunktion|preposition|adverb}
        De kom på ANDRA plats. {adjektiv|*räkneord|adverb|substantiv}
        NÅGON har tagit min penna. {substantiv|räkneord|*pronomen|adverb}
        MODET svek honom. {*substantiv|adjektiv|verb|adverb}
        Hon HADE glömt nyckeln. {*verb|adverb|pronomen|substantiv}
      `,
    },
    {
      i: "Konjunktion eller subjunktion?",
      t: "val",
      r: `
        Vi stannade, FÖR det regnade. {*konjunktion|subjunktion}
        Vi stannade EFTERSOM det regnade. {konjunktion|*subjunktion}
        Jag vet inte OM han kommer. {konjunktion|*subjunktion}
        Han är trött MEN glad. {*konjunktion|subjunktion}
        Ring NÄR du kan. {konjunktion|*subjunktion}
      `,
    },
    {
      i: "Skriv verbet i rätt tempus.",
      t: "skriv",
      r: `
        Jag simmar. (perfekt) Jag {har simmat}.
        Hon bär väskan. (preteritum) Hon {bar} väskan.
        Vi sjunger. (pluskvamperfekt) Vi {hade sjungit}.
        De slåss. (preteritum) De {slogs}.
        Han ger upp. (perfekt) Han {har gett/har givit} upp.
      `,
    },
  ]),
  p("hogstadiet", "morfem", [
    {
      i: "Böjning (ny form) eller avledning (nytt ord)?",
      t: "val",
      r: `
        stol → stolarna {*böjning|avledning}
        mörk → mörker {böjning|*avledning}
        ljus → ljusare {*böjning|avledning}
        bygga → byggare {böjning|*avledning}
        bygga → byggde {*böjning|avledning}
        hjälte → hjältinna {böjning|*avledning}
        smart → smartast {*böjning|avledning}
        läka → läkning {böjning|*avledning}
      `,
    },
    {
      i: "Skriv roten.",
      t: "skriv",
      r: `
        oläslig – roten är {läs}
        tröttheten – roten är {trött}
        omålad – roten är {mål}
        vänskapen – roten är {vän}
        förklaringar – roten är {klar}
        ofarlig – roten är {far/fara}
      `,
    },
    {
      i: "Skriv rätt form. Tänk på roten och dubbelteckningen.",
      t: "skriv",
      r: `
        Han {glömde} sin jacka. (glömma, dåtid)
        Hon är {känd} i hela världen. (känna)
        Jag {tänkte} på dig. (tänka, dåtid)
        Vi {fyllde} glasen. (fylla, dåtid)
        Dörren var {stängd}. (stänga)
        Han {spände} bågen. (spänna, dåtid)
      `,
    },
  ]),
  p("hogstadiet", "satsdelar", [
    {
      i: "Vilken satsdel är delen med STORA BOKSTÄVER?",
      t: "val",
      r: `
        Rektorn gav ELEVERNA en extra rast. {objekt|*indirekt objekt|predikativ|adverbial}
        Rektorn gav eleverna EN EXTRA RAST. {*objekt|indirekt objekt|predikativ|adverbial}
        Soppan var för SALT. {objekt|indirekt objekt|*predikativ|adverbial}
        Min syster blev SJUKSKÖTERSKA. {objekt|indirekt objekt|*predikativ|subjekt}
        Min syster träffade EN SJUKSKÖTERSKA. {*objekt|indirekt objekt|predikativ|subjekt}
        Vi skickade FARFAR en bild. {objekt|*indirekt objekt|predikativ|subjekt}
        Han har TYVÄRR glömt det. {objekt|predikat|predikativ|*adverbial}
        Vädret verkade OSTADIGT. {objekt|indirekt objekt|*predikativ|adverbial}
        I GÅR KVÄLL var det fest. {subjekt|objekt|predikativ|*adverbial}
        Hon VISADE oss vägen. {subjekt|*predikat|objekt|predikativ}
        Hon visade OSS vägen. {objekt|*indirekt objekt|subjekt|predikativ}
        Hon visade oss VÄGEN. {*objekt|indirekt objekt|subjekt|predikativ}
        VÅRA GRANNAR har köpt en båt. {*subjekt|objekt|predikativ|adverbial}
        Båten heter MÅSEN. {objekt|subjekt|*predikativ|adverbial}
        Jag har INTE sett filmen. {objekt|predikat|predikativ|*adverbial}
        Jag HAR inte SETT filmen. Predikatet är {har|sett|*har sett}
      `,
    },
    {
      i: "Välj rätt svar.",
      t: "val",
      r: `
        Efter vilka verb kan ett predikativ stå? {*vara, bli, heta, verka|äta, springa, läsa|ge, skicka, visa}
        Vad är ett indirekt objekt? {*mottagaren av något|den som utför handlingen|en tidsbestämning}
        Vilken mening har ett predikativ? {Hon köpte en klänning.|*Klänningen var dyr.|Hon gav mig klänningen.}
        Vilket ord är ett satsadverbial? {*aldrig|snabbt|hemma}
      `,
    },
  ]),
  p("hogstadiet", "meningsbyggnad", [
    {
      i: "Skriv om bisatsen så att den följer BIFF-regeln.",
      t: "ratta",
      r: `
        Jag förstår att du vill inte. => Jag förstår att du inte vill.
        Hon sa att hon hade aldrig varit där. => Hon sa att hon aldrig hade varit där.
        Vi undrar varför ni kom inte. => Vi undrar varför ni inte kom.
        Det är bra att du ger inte upp. => Det är bra att du inte ger upp.
        Han berättade att han kan inte simma. => Han berättade att han inte kan simma.
        Jag hoppas att det regnar inte i morgon. => Jag hoppas att det inte regnar i morgon.
        Läraren märkte att eleverna lyssnade inte. => Läraren märkte att eleverna inte lyssnade.
        Om du har inte tid, kan vi ses senare. => Om du inte har tid, kan vi ses senare.
      `,
    },
    {
      i: "Skriv om meningen med rätt ordföljd.",
      t: "ratta",
      r: `
        Varje morgon jag springer en runda. => Varje morgon springer jag en runda.
        Efter matchen spelarna firade. => Efter matchen firade spelarna.
        Plötsligt telefonen ringde. => Plötsligt ringde telefonen.
        Därför vi måste spara energi. => Därför måste vi spara energi.
        När filmen slutade vi gick hem. => När filmen slutade gick vi hem.
        Till slut hon hittade nyckeln. => Till slut hittade hon nyckeln.
      `,
    },
    {
      i: "Satsradning eller korrekt?",
      t: "val",
      r: `
        Jag var hungrig, jag åt en macka. {*satsradning|korrekt}
        Jag var hungrig, så jag åt en macka. {satsradning|*korrekt}
        Det snöade, skolan stängde. {*satsradning|korrekt}
      `,
    },
    {
      i: "Vilken version passar bäst för syftet?",
      t: "val",
      r: `
        En instruktion: {*Vispa äggen. Häll i mjölet. Rör om.|Äggen, som först ska vispas, blandas sedan med mjölet medan man rör.}
        En spänningsscen: {*Det knarrade. Någon var där. Jag höll andan.|Det knarrade i trappan, vilket fick mig att tro att någon kanske var där.}
        En förklaring: {*Isen smälter eftersom temperaturen stiger.|Isen smälter. Temperaturen. Den stiger.}
      `,
    },
  ]),
  p("hogstadiet", "samband", [
    {
      i: "Välj det uttryck som passar.",
      t: "val",
      r: `
        Tåget var försenat {eftersom|*på grund av} stormen.
        Tåget var försenat {*eftersom|på grund av} det stormade.
        Hon vann loppet {eftersom|*trots att} hon hade ont i foten.
        Han var trött. {Därför|*Ändå} tränade han.
        Fler cyklar till jobbet, {*vilket leder till att|eftersom} luften blir renare.
        {*Om|Därför|Följaktligen} fler cyklade, skulle luften bli renare.
        Vi måste spara. {*Annars|Eftersom|Trots det} räcker inte pengarna.
        {Trots att|*Trots} kylan badade vi.
        Det har regnat mycket. {*Följaktligen|Trots det|Eftersom} är marken blöt.
        Förseningen {*berodde på|ledde till} en olycka.
      `,
    },
    {
      i: "Skriv om meningen rätt.",
      t: "ratta",
      r: `
        Vi var sena eftersom att bussen inte kom. => Vi var sena eftersom bussen inte kom.
        Eftersom det var mörkt vi tände lampan. => Eftersom det var mörkt tände vi lampan.
        Hon stannade hemma eftersom hon mådde inte bra. => Hon stannade hemma eftersom hon inte mådde bra.
        Trots det var kallt gick vi ut. => Trots att det var kallt gick vi ut.
        Skolan stängde eftersom snöstormen. => Skolan stängde på grund av snöstormen.
        Om du har inte gjort läxan, får du göra den nu. => Om du inte har gjort läxan, får du göra den nu.
      `,
    },
    {
      i: "Vilket samband uttrycker meningen?",
      t: "val",
      r: `
        Hade jag vetat det, hade jag kommit. {orsak|följd|*villkor|medgivande}
        Även om det regnade, spelade vi. {orsak|följd|villkor|*medgivande}
        Utsläppen leder till uppvärmning. {orsak|*följd|villkor|medgivande}
        Uppvärmningen beror på utsläppen. {*orsak|följd|villkor|medgivande}
      `,
    },
  ]),
  p("hogstadiet", "skiljetecken", [
    {
      i: "Ska det stå komma? (_ = inget komma)",
      t: "val",
      r: `
        Min moster{*,|_} som bor i Kiruna, kommer på besök.
        Boken{,|*_} som ligger på bordet är min.
        Det regnade{*,|_} så vi stannade inne.
        Jag vet{,|*_} att du har rätt.
        Hon kom inte{*,|_} vilket ingen förstod.
        Vi åt{*,|_} drack och dansade.
        Jag tror{,|*_} att hon kommer.
        Han ville gå{*,|_} men det var för sent.
        Astrid Lindgren{*,|_} författaren till Pippi, föddes 1907.
        Han frågade{,|*_} om jag ville följa med.
      `,
    },
    {
      i: "Välj rätt tecken.",
      t: "val",
      r: `
        Kalle gillar fotboll{*;|,|:} Lisa gillar handboll.
        Hon behövde tre saker{;|*:|–} mjöl, socker och ägg.
        Han kom till slut {;|:|*–} två timmar för sent.
        Vägen Malmö{-|*–}Lund var avstängd.
        Vi träffades på ett FN{*-|–}möte.
        Läs sidorna 10{-|*–}15.
      `,
    },
    {
      i: "Skriv repliken rätt med talstreck.",
      t: "ratta",
      r: `
        Var är du sa mamma. => – Var är du? sa mamma.
        Jag är här svarade Leo. => – Jag är här, svarade Leo.
        Vänta ropade hon. => – Vänta! ropade hon.
        Det är kallt sa han och frös. => – Det är kallt, sa han och frös.
      `,
    },
  ]),
  p("hogstadiet", "stavning", [
    {
      i: "De eller dem?",
      t: "val",
      r: `
        {*De|Dem} har gått hem.
        Jag ringde {de|*dem} i går.
        Vi hjälpte {de|*dem} med flytten.
        Det var {*de|dem} som vann.
        {*De|Dem} flesta tyckte om filmen.
        Hon pratade med {de|*dem} som var nya.
      `,
    },
    {
      i: "Tänk på roten. Vilket ord är rätt stavat?",
      t: "val",
      r: `
        Det var ett {*glatt|gladt} gäng.
        Hon {*kände|kännde} igen honom direkt.
        Vi {*tänkte|tänkde} på dig.
        Det han sa var {*sant|sannt}.
      `,
    },
    {
      i: "Stor eller liten bokstav?",
      t: "val",
      r: `
        Hon pratar {*franska|Franska}.
        Vi ses på {*fredag|Fredag}.
        Han kommer från {*Finland|finland}.
        Vi firar {*påsk|Påsk} i april.
        Hon är {*dansk|Dansk}.
        Vi läste {*Bröderna Lejonhjärta|Bröderna lejonhjärta|bröderna lejonhjärta}.
      `,
    },
    {
      i: "Ett eller två m/n?",
      t: "val",
      r: `
        Vi badade i en {*damm|dam} i parken.
        Hon tog {*fram|framm} boken.
        Vi går {*hem|hemm}.
        Han är en {*man|mann} på trettio år.
      `,
    },
  ]),
  p("hogstadiet", "ordbildning", [
    {
      i: "Skriv ut förkortningen.",
      t: "skriv",
      r: `
        dvs. = {det vill säga}
        s.k. = {så kallad/så kallat/så kallade}
        fr.o.m. = {från och med}
        p.g.a. = {på grund av}
        f.d. = {före detta}
        obs. = {observera}
      `,
    },
    {
      i: "Från vilket språk har svenskan lånat ordet?",
      t: "val",
      r: `
        frisör {lågtyska|*franska|engelska}
        köpman {*lågtyska|franska|engelska}
        blogg {lågtyska|franska|*engelska}
        fåtölj {lågtyska|*franska|engelska}
        borgmästare {*lågtyska|franska|engelska}
        hobby {lågtyska|franska|*engelska}
      `,
    },
    {
      i: "Vilken typ av förkortning är det?",
      t: "val",
      r: `
        SMHI {*initialord|akronym|kortord}
        Unesco {initialord|*akronym|kortord}
        moppe (moped) {initialord|akronym|*kortord}
        KTH {*initialord|akronym|kortord}
      `,
    },
    {
      i: "Sätt ihop orden. Tänk på fogen.",
      t: "skriv",
      r: `
        gata + kök = {gatukök}
        kyrka + klocka = {kyrkklocka}
        fotboll + tränare = {fotbollstränare}
        hav + vik = {havsvik}
      `,
    },
  ]),
  p("hogstadiet", "textbindning", [
    {
      i: "Välj den sambandsmarkör som passar.",
      t: "val",
      r: `
        Mobiler kan störa. {*Å andra sidan|Dessutom|Därför} kan de vara ett hjälpmedel.
        Läxor ger träning. {*Dessutom|Däremot|Först} lär man sig planera.
        Det var halt. {*Därför|Däremot|Dessutom} gick vi försiktigt.
        {*För det första|Däremot|Avslutningsvis} är det dyrt.
        {Först|Däremot|*Sammanfattningsvis} finns det både för- och nackdelar.
        Han tränade varje dag. {Därför|*Ändå|Dessutom} förlorade han.
        Vintern var kall. Sommaren {*däremot|därför|dessutom} var varm.
        Vi åt middag. {*Därefter|Däremot|Därför} gick vi ut.
      `,
    },
    {
      i: "Vad syftar ordet med STORA BOKSTÄVER på?",
      t: "val",
      r: `
        Isarna smälter och havet stiger. FÖRÄNDRINGARNA är oroande. {*att isarna smälter och havet stiger|isarna|havet}
        Greta började strejka. HENNES exempel spreds. {*Gretas|strejkens|ingens}
        Vi köpte bord och stolar. MÖBLERNA var dyra. {*borden och stolarna|stolarna|en ny möbel}
        Rektorn förbjöd mobiler. BESLUTET kritiserades. {*förbudet mot mobiler|rektorn|mobilerna}
        Hunden skällde och katten fräste. DJUREN var oroliga. {*hunden och katten|katten|hunden}
        Ali och Moa vann. DE fick en pokal. {*Ali och Moa|Moa|pokalen}
      `,
    },
    {
      i: "Vilken mening fortsätter texten bäst?",
      t: "val",
      r: `
        Vi besökte en gammal fyr. {*Fyren byggdes 1890.|Glass är gott.|Det var tisdag.}
        Många unga sover för lite. {Fotboll är kul.|*Sömnbristen påverkar skolarbetet.|Hus är stora.}
        Bin är viktiga för naturen. {*De pollinerar många växter.|Honung är sött.|Jag gillar maj.}
        Klimatet blir varmare. {*Uppvärmningen leder till extremväder.|Det är kallt i Kiruna.|Jag har en jacka.}
        Plast hamnar i havet. {*Där skadar den fåglar och fiskar.|Havet är salt.|Plast är billigt.}
        Elin fick ett brev. {*Det var från hennes farmor.|Brev är gamla.|Posten kommer tidigt.}
      `,
    },
  ]),
  p("hogstadiet", "stilistik", [
    {
      i: "Vilken stilfigur är det?",
      t: "val",
      r: `
        Han var listig som en räv. {*liknelse|metafor|besjälning|överdrift}
        Skolan är ett fängelse. {liknelse|*metafor|besjälning|överdrift}
        Dörren knarrade surt. {liknelse|metafor|*besjälning|överdrift}
        Jag har ringt hundra gånger. {liknelse|metafor|besjälning|*överdrift}
      `,
    },
    {
      i: "Vilken stilfigur är det?",
      t: "val",
      r: `
        Vi vill ha trygghet. Vi vill ha frihet. Vi vill ha framtid. {*anafor|antites|klimax|asyndes}
        Rik och fattig, ung och gammal – alla drabbas. {anafor|*antites|klimax|asyndes}
        Det var bra, det var fantastiskt, det var det bästa jag sett. {anafor|antites|*klimax|asyndes}
        Han åt, drack, somnade. {anafor|antites|klimax|*asyndes}
      `,
    },
    {
      i: "Välj det som passar i en formell text.",
      t: "val",
      r: `
        Mötet {*avslutades|tog slut typ} klockan tre.
        Vi {*anser|tycker liksom} att förslaget är bra.
        Det är {*mycket|sjukt} viktigt.
        Eleverna {*diskuterade|snackade om} frågan.
        Resultatet blev {*bättre än väntat|asbra}.
        Kommunen bör {*undersöka|kolla} saken.
      `,
    },
    {
      i: "Neutralt eller värdeladdat?",
      t: "val",
      r: `
        Hon är försiktig. {*neutralt|värdeladdat}
        Hon är feg. {neutralt|*värdeladdat}
        en gammal bil {*neutralt|värdeladdat}
        en rostig skrothög {neutralt|*värdeladdat}
        Han pratar tydligt. {*neutralt|värdeladdat}
        Han tjatar jämt. {neutralt|*värdeladdat}
      `,
    },
  ]),

  /* ================================ Gymnasiet =============================== */
  p("gymnasiet", "ordklasser", [
    {
      i: "Välj rätt pronomen.",
      t: "val",
      r: `
        Jag bad {de|*dem} att vänta.
        {*De|Dem} som anmält sig får plats.
        Hon hälsade på {*sin|hennes} mormor. (sin egen)
        Han och {*hans|sin} fru flyttade. (hans fru)
        Eleverna tog med {*sina|deras} böcker. (egna)
        Läraren bad eleverna ta fram {*sina|deras} böcker. (elevernas egna)
        Kommunen, {*vars|vems} budget är ansträngd, sparar.
        Hon missade bussen, {*vilket|vilken} gjorde henne sen.
      `,
    },
    {
      i: "Skriv participet i rätt form.",
      t: "skriv",
      r: `
        en {målad} vägg (måla)
        ett {stulet} armband (stjäla)
        {brutna} löften (bryta)
        en {leende} flicka (le, presens particip)
        ett {förvånande} svar (förvåna, presens particip)
        ett {översatt} brev (översätta)
      `,
    },
    {
      i: "Vilken ordklass är ordet med STORA BOKSTÄVER?",
      t: "val",
      r: `
        Det var SÅ kallt. {*adverb|konjunktion}
        Jag var trött, SÅ jag sov. {adverb|*konjunktion}
        Hon önskade ATT han stannade. {*subjunktion|infinitivmärke}
        Hon önskade ATT få stanna. {subjunktion|*infinitivmärke}
        En SKRATTANDE publik. {verb|*particip|substantiv}
        Han slog AV teven. {preposition|*adverb (partikel)}
      `,
    },
  ]),
  p("gymnasiet", "morfem", [
    {
      i: "Vad betyder morfemet?",
      t: "val",
      r: `
        tele- (television) {*fjärran|bild|ljud}
        mikro- (mikroskop) {*liten|stor|många}
        bio- (biografi) {*liv|bok|skrift}
        geo- (geologi) {vatten|*jord|luft}
        poly- (polygon) {*många|få|stor}
        -skop (teleskop) {höra|*se|mäta}
        mono- (monolog) {många|*en|två}
        -logi (sociologi) {*lära|samhälle|ord}
      `,
    },
    {
      i: "Skriv substantivet (nominaliseringen).",
      t: "skriv",
      r: `
        förbättra → {förbättring}
        redovisa → {redovisning}
        tillverka → {tillverkning}
        försvinna → {försvinnande}
        använda → {användning}
        ansöka → {ansökan}
      `,
    },
    {
      i: "Fritt eller bundet morfem?",
      t: "val",
      r: `
        sten {*fritt|bundet}
        -dom {fritt|*bundet}
        anti- {fritt|*bundet}
        gå {*fritt|bundet}
        -isera {fritt|*bundet}
        hav {*fritt|bundet}
      `,
    },
  ]),
  p("gymnasiet", "satsdelar", [
    {
      i: "Vilken satsdel är delen med STORA BOKSTÄVER?",
      t: "val",
      r: `
        DET ligger en bok på bordet. {subjekt|*formellt subjekt|egentligt subjekt|objekt}
        Det ligger EN BOK på bordet. {subjekt|formellt subjekt|*egentligt subjekt|objekt}
        Romanen skrevs AV EN ANONYM FÖRFATTARE. {adverbial|*agent|objekt|subjekt}
        Fönstret krossades I NATT. {*adverbial|agent|objekt|subjekt}
        Det är farligt ATT CYKLA UTAN HJÄLM. {objekt|adverbial|*egentligt subjekt|predikativ}
        Det är FARLIGT att cykla utan hjälm. {objekt|adverbial|egentligt subjekt|*predikativ}
        Hon utsågs TILL KAPTEN. {objekt|adverbial|*predikativ|agent}
        Läraren gav KLASSEN en utmaning. {objekt|*indirekt objekt|agent|predikativ}
        Han har FÖRMODLIGEN missförstått. {*adverbial|predikat|objekt|predikativ}
        Planen godkändes AV STYRELSEN. {adverbial|*agent|objekt|subjekt}
        DET snöar. {subjekt|*formellt subjekt|egentligt subjekt|objekt}
        Det finns FLERA LÖSNINGAR. {subjekt|formellt subjekt|*egentligt subjekt|objekt}
        Problemet ÄR svårt. {*predikat|predikativ|objekt|agent}
        Problemet är SVÅRT. {predikat|*predikativ|objekt|agent}
      `,
    },
    {
      i: "Vilken satsdel är bisatsen?",
      t: "val",
      r: `
        Att hon slutade förvånade alla. {*subjekt|objekt|adverbial|predikativ}
        Jag misstänker att något har hänt. {subjekt|*objekt|adverbial|predikativ}
        Medan vi väntade började det regna. {subjekt|objekt|*adverbial|predikativ}
        Sanningen är att ingen vet. {subjekt|objekt|adverbial|*predikativ}
        Hon frågade vem som hade ringt. {subjekt|*objekt|adverbial|predikativ}
        Om det blir sol, grillar vi. {subjekt|objekt|*adverbial|predikativ}
      `,
    },
  ]),
  p("gymnasiet", "meningsbyggnad", [
    {
      i: "Skriv om meningen med rätt ordföljd.",
      t: "ratta",
      r: `
        Det är troligt att priserna kommer inte att sjunka. => Det är troligt att priserna inte kommer att sjunka.
        Forskarna konstaterar att metoden har aldrig prövats. => Forskarna konstaterar att metoden aldrig har prövats.
        Enligt rapporten arbetslösheten har ökat. => Enligt rapporten har arbetslösheten ökat.
        Under medeltiden kyrkan hade stor makt. => Under medeltiden hade kyrkan stor makt.
        Jag tvivlar på att de har verkligen läst texten. => Jag tvivlar på att de verkligen har läst texten.
        I novellen berättaren avslöjar sanningen först i slutet. => I novellen avslöjar berättaren sanningen först i slutet.
        Hon menade att man bör inte dra förhastade slutsatser. => Hon menade att man inte bör dra förhastade slutsatser.
        Trots protesterna ledningen fattade beslutet. => Trots protesterna fattade ledningen beslutet.
      `,
    },
    {
      i: "Välj rätt svar.",
      t: "val",
      r: `
        Vilken mening är en utbrytning? {*Det var regeringen som bar ansvaret.|Regeringen bar ansvaret.|Ansvaret bar regeringen.}
        Vilken mening är skriven i verbalstil? {*Vi ska förenkla reglerna.|En förenkling av reglerna ska genomföras.}
        Vad innebär slutfokus? {*Det viktigaste placeras sist.|Meningen avslutas med punkt.|Det viktigaste placeras först.}
        Vilken mening har passiv form? {*Avtalet undertecknades i går.|Parterna undertecknade avtalet.|Avtalet var långt.}
        När är passiv form lämplig? {*När den som utför handlingen är okänd eller oviktig.|Alltid i dialog.|Aldrig i sakprosa.}
        Vilken mening har formellt subjekt? {*Det råder brist på lärare.|Lärare saknas.|Bristen är stor.}
      `,
    },
    {
      i: "Skriv meningen i passiv form med -s och agent.",
      t: "ratta",
      r: `
        Polisen stoppade bilen. => Bilen stoppades av polisen.
        Kommunen bygger skolan. => Skolan byggs av kommunen.
        Eleverna skrev rapporten. => Rapporten skrevs av eleverna.
        Läkaren undersökte patienten. => Patienten undersöktes av läkaren.
        Juryn belönade filmen. => Filmen belönades av juryn.
        Riksdagen antog lagen. => Lagen antogs av riksdagen.
      `,
    },
  ]),
  p("gymnasiet", "samband", [
    {
      i: "Välj det uttryck som passar.",
      t: "val",
      r: `
        Flyget ställdes in {*till följd av|förutsatt att|således} askmolnet.
        Askmolnet {*medförde|berodde på} att flyget ställdes in.
        Avtalet gäller {*under förutsättning att|till följd av|således} båda parter godkänner det.
        Ingen invände. Förslaget antogs {*därmed|trots att|förutsatt att}.
        {*Även om|Eftersom|Således} metoden är omdiskuterad, används den ofta.
        Urvalet är litet. Resultaten bör {*följaktligen|däremot|trots att} tolkas försiktigt.
        Tillväxten {*beror på|leder till} flera faktorer.
        Reformen är dyr. {*Icke desto mindre|Följaktligen|Därmed} är den nödvändig.
        {*Hade|Har|Om hade} vi vetat det, hade vi agerat annorlunda.
        Projektet läggs ned {*såvida inte|till följd av|därmed} nya pengar tillförs.
      `,
    },
    {
      i: "Vilket samband uttrycker ordet?",
      t: "val",
      r: `
        med anledning av {*orsak|följd|villkor|medgivande}
        följaktligen {orsak|*följd|villkor|medgivande}
        såvida inte {orsak|följd|*villkor|medgivande}
        icke desto mindre {orsak|följd|villkor|*medgivande}
        resulterar i {orsak|*följd|villkor|medgivande}
        i händelse av {orsak|följd|*villkor|medgivande}
      `,
    },
    {
      i: "Välj rätt svar.",
      t: "val",
      r: `
        ”Städer med fler poliser har fler brott.” Vilken slutsats är rimligast? {*Större städer har både fler poliser och fler brott.|Poliser orsakar brott.|Brott orsakar poliser.}
        Vilken formulering passar för ett samband som inte är bevisat som orsak? {*samvarierar med|orsakar|leder alltid till}
        Vad är ett kontrafaktiskt villkor? {*ett villkor som inte uppfylldes|ett villkor som alltid gäller|en orsak}
        Vilken mening uttrycker medgivande? {*Visserligen är det dyrt, men det lönar sig.|Det är dyrt, så vi avstår.|Om det blir dyrt, avstår vi.}
      `,
    },
  ]),
  p("gymnasiet", "skiljetecken", [
    {
      i: "Välj den form som följer skrivreglerna.",
      t: "val",
      r: `
        Ökningen var {*7 %|7%|7 procent %}.
        Temperaturen var {*–5 °C|-5°C|–5 ° C}.
        Biljetten kostar {*2 400 kronor|2400kr|2.400 kronor}.
        Hon föddes {*den 4 juli 1998|den 4:e Juli 1998|4/7-98:}.
        Hon citerade: {*”Kunskap är makt.”|'Kunskap är makt.'|“Kunskap är makt.„}
        Han levde {*1809–1882|1809-1882|1809 - 1882}.
        Läs {*s. 30–42|s.30-42|sid 30 - 42}.
        Källan anges {*(Holm, 2019, s. 8)|[Holm 2019 sid 8]|(Holm,2019,s8)}.
        Mötet börjar {*kl. 13.15|kl 13:15:|kl.13,15}.
        Ta med {*t.ex.|t.ex|t. ex.} frukt eller smörgåsar.
      `,
    },
    {
      i: "Tankstreck eller bindestreck?",
      t: "val",
      r: `
        1914 _ 1918 {*tankstreck –|bindestreck -}
        EU _ projekt {tankstreck –|*bindestreck -}
        Göteborg _ Oslo {*tankstreck –|bindestreck -}
        1700 _ talet {tankstreck –|*bindestreck -}
        Hon tvekade _ och sa nej. {*tankstreck –|bindestreck -}
      `,
    },
    {
      i: "Ska det stå komma? (_ = inget komma)",
      t: "val",
      r: `
        Mina föräldrar{*,|_} som båda är lärare, arbetar på samma skola.
        Studenter{,|*_} som pluggar mycket får bättre betyg. (bara de som pluggar)
        Rapporten{*,|_} som publicerades i maj, väckte debatt.
        Hon sa{,|*_} att hon var trött.
        Jag ville{*,|_} men jag hann inte.
      `,
    },
  ]),
  p("gymnasiet", "stavning", [
    {
      i: "Välj rätt stavning.",
      t: "val",
      r: `
        Vi läste {*Hemsöborna|Hemsö borna|hemsöborna} av Strindberg.
        Hon arbetar på {*Socialstyrelsen|socialstyrelsen|Social Styrelsen}.
        Han är {*buddhist|Buddhist}.
        Vi firade {*nationaldagen|Nationaldagen} den 6 juni.
        Hon talar {*persiska|Persiska}.
        De bor i {*Mellanöstern|mellanöstern|Mellan Östern}.
        Han reste till {*Sydostasien|sydostasien|Syd Ostasien}.
        Vi läste om {*renässansen|Renässansen}.
      `,
    },
    {
      i: "Välj rätt stavning.",
      t: "val",
      r: `
        Vi hade ett {*FN-möte|FN möte|FNmöte}.
        Han föddes på {*1980-talet|1980 talet|1980–talet}.
        Hon tog {*nattåget|natt tåget|natttåget}.
        Vi beställde {*e-böcker|e böcker|eböcker}.
        Det var en {*tv-sänd|tv sänd|tvsänd} debatt.
        Han har {*it-kunskaper|it kunskaper|itkunskaper}.
      `,
    },
    {
      i: "Välj rätt ord.",
      t: "val",
      r: `
        {*Vart|Var} tog tiden vägen?
        Jag frågade {*var|vart} toaletten låg.
        Det var {de|*dem} vi pratade om.
        Låt {de|*dem} som vill bestämma.
        Vi ringde {*då|så} vi kom fram.
        Det regnade, {då|*så} vi tog bussen.
      `,
    },
  ]),
  p("gymnasiet", "ordbildning", [
    {
      i: "Hur har ordet bildats?",
      t: "val",
      r: `
        smog (smoke + fog) {*teleskopord|låneöversättning|konversion|akronym}
        skyskrapa (skyscraper) {teleskopord|*låneöversättning|konversion|akronym}
        att mejla (av mejl) {teleskopord|låneöversättning|*konversion|akronym}
        Nato {teleskopord|låneöversättning|konversion|*akronym}
        motell (motor + hotell) {*teleskopord|låneöversättning|konversion|akronym}
        fotboll (football) {teleskopord|*låneöversättning|konversion|akronym}
        att googla {teleskopord|låneöversättning|*konversion|akronym}
        laser {teleskopord|låneöversättning|konversion|*akronym}
      `,
    },
    {
      i: "Från vilket språk och vilken tid kommer ordet?",
      t: "val",
      r: `
        skomakare {*lågtyska, medeltiden|franska, 1700-talet|engelska, 1900-talet}
        salong {lågtyska, medeltiden|*franska, 1700-talet|engelska, 1900-talet}
        tejp {lågtyska, medeltiden|franska, 1700-talet|*engelska, 1900-talet}
        ateljé {lågtyska, medeltiden|*franska, 1700-talet|engelska, 1900-talet}
        stövel {*lågtyska, medeltiden|franska, 1700-talet|engelska, 1900-talet}
        pop {lågtyska, medeltiden|franska, 1700-talet|*engelska, 1900-talet}
      `,
    },
    {
      i: "Skriv ut förkortningen.",
      t: "skriv",
      r: `
        jfr = {jämför}
        m.fl. = {med flera}
        resp. = {respektive}
        o.d. = {och dylikt}
        etc. = {et cetera}
        inkl. = {inklusive}
      `,
    },
  ]),
  p("gymnasiet", "textbindning", [
    {
      i: "Välj den markör som passar.",
      t: "val",
      r: `
        Teorin har stöd i forskningen. {*Emellertid|Därtill|Inledningsvis} finns det kritiker.
        {*Inledningsvis|Följaktligen|Däremot} presenteras bakgrunden.
        Metoden är snabb. {*Därtill|Däremot|Emellertid} är den billig.
        Inga skillnader hittades. Hypotesen kan {*således|däremot|inledningsvis} avfärdas.
        {*Avslutningsvis|Inledningsvis|Därtill} sammanfattas resultaten.
        Resultaten är tydliga. {*Däremot|Därtill|Följaktligen} är orsakerna oklara.
        I det följande {*diskuteras|avslutas|sammanfattades} tre teorier.
        Detta gäller {*i synnerhet|däremot|således} storstäderna.
      `,
    },
    {
      i: "Välj den sammanfattande referens som passar bäst.",
      t: "val",
      r: `
        Antalet elever per lärare har ökat. {*Denna utveckling|Den|Läraren} oroar facket.
        Regeringen sänkte skatten. {*Sänkningen|Regeringen|Hon} kritiserades.
        Skogarna brinner och torkan förvärras. {*Situationen|Skogarna|De} är allvarlig.
        Hälften av deltagarna hoppade av. {*Bortfallet|Deltagarna|Hälften} påverkar resultaten.
        Många unga läser allt mindre. {*Tendensen|De unga|Den} syns i flera länder.
        Styrelsen avgick i protest. {*Avgången|Styrelsen|Protesten den} väckte uppmärksamhet.
      `,
    },
    {
      i: "Vad gör meningen i texten?",
      t: "val",
      r: `
        I nästa avsnitt redovisas metoden. {*metatext|sammanfattande referens|sambandsmarkör}
        Denna förändring har flera orsaker. {metatext|*sammanfattande referens|sambandsmarkör}
        Följaktligen måste reglerna ändras. {metatext|sammanfattande referens|*sambandsmarkör}
        Avslutningsvis diskuteras resultaten. {*metatext|sammanfattande referens|sambandsmarkör}
        Problemet kräver nya lösningar. {metatext|*sammanfattande referens|sambandsmarkör}
        Däremot ökade läsningen av e-böcker. {metatext|sammanfattande referens|*sambandsmarkör}
      `,
    },
  ]),
  p("gymnasiet", "stilistik", [
    {
      i: "Vilken stilfigur är det?",
      t: "val",
      r: `
        Vi behöver mod. Vi behöver hopp. Vi behöver handling. {*anafor|ironi|eufemism|litotes}
        Vem vill egentligen leva utan musik? {anafor|*retorisk fråga|eufemism|metonymi}
        Snabbt, säkert och enkelt. {anafor|ironi|*tretal|litotes}
        Hon är inte helt obegåvad. {anafor|ironi|eufemism|*litotes}
        Han somnade in stilla. (dog) {anafor|ironi|*eufemism|metonymi}
        Härligt med regn på midsommar! {anafor|*ironi|eufemism|tretal}
        Pennan är mäktigare än svärdet. {anafor|ironi|eufemism|*metonymi}
        Stora, starka, stolta stammar {anafor|*allitteration|eufemism|litotes}
        Krig och fred, kärlek och hat. {*antites|ironi|eufemism|litotes}
        Han är en sten. {*metafor|liknelse|tretal|anafor}
      `,
    },
    {
      i: "Vilken genre kommer meningen från?",
      t: "val",
      r: `
        Denna studie undersöker sambandet mellan … {*vetenskaplig text|nyhetsartikel|krönika|skönlitteratur}
        Två personer greps i natt, uppger polisen. {vetenskaplig text|*nyhetsartikel|krönika|skönlitteratur}
        Jag har aldrig förstått mig på folk som gillar november. {vetenskaplig text|nyhetsartikel|*krönika|skönlitteratur}
        Hon stängde dörren. Bakom henne slocknade ljuset. {vetenskaplig text|nyhetsartikel|krönika|*skönlitteratur}
        Därför kräver vi att regeringen omedelbart … {vetenskaplig text|nyhetsartikel|*debattartikel|skönlitteratur}
      `,
    },
    {
      i: "Har ordet positiv, negativ eller neutral klang?",
      t: "val",
      r: `
        nyckfull {positiv|*negativ|neutral}
        spontan {*positiv|negativ|neutral}
        bostadsområde {positiv|negativ|*neutral}
        ghetto {positiv|*negativ|neutral}
        hemtrevlig {*positiv|negativ|neutral}
      `,
    },
  ]),
];
