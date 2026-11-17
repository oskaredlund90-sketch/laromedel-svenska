import type { Arbetsomrade } from "../typer";

export const LJUD_BOKSTAVER: Arbetsomrade = {
  id: "ljud-bokstaver-och-ord",
  titel: "Ljud, bokstäver och ord – att knäcka läskoden",
  stadie: "lagstadiet",
  arskurs: "1",
  ingress:
    "Systematisk läs- och skrivinlärning: eleverna leker med språkljud, kopplar ljud till bokstäver i en genomtänkt ordning, ljudar ihop ord och lär sig känna igen vanliga ord direkt. I årskurs 2: vokaler och konsonanter, korta och långa vokaler, dubbelteckning och ord som inte stavas som de låter.",
  kursplan: [
    "Fonologisk och fonemisk medvetenhet genom återkommande språklekar.",
    "Systematisk undervisning i hur bokstäver representerar språkljud och hur de kombineras till ord – från ljudenligt stavade ord till mer komplex stavning.",
    "Bokstäverna introduceras i en genomtänkt ordning: vanliga ljud som är lätta att dra ut först, x, q, w och z sist.",
    "Att känna igen högfrekventa ord direkt, t.ex. och, jag och har.",
    "Grundläggande morfologisk medvetenhet: identifiera morfem, dela upp och bygga ord. Det svenska alfabetet.",
    "Senare under årskurs 2: vokaler och konsonanter, korta och långa vokalljud, dubbelteckning och vanliga ljudstridiga ord.",
  ],
  mal: [
    "Höra och leka med ljud i ord: rim, första ljudet, dela upp ord i ljud.",
    "Koppla ljud till bokstav och ljuda ihop korta ord.",
    "Känna igen vanliga ord direkt.",
    "Skilja på vokaler och konsonanter och höra korta och långa vokaler.",
    "Kunna alfabetet.",
  ],
  begrepp: [
    ["ljud", "det vi hör när vi säger en bokstav: /s/, /a/"],
    ["bokstav", "tecknet vi skriver för ett ljud"],
    ["ljuda ihop", "att säga ljuden efter varandra så att det blir ett ord: s-o-l → sol"],
    ["rim", "ord som slutar likadant: sol – stol"],
    ["vokal", "a, o, u, å, e, i, y, ä, ö – ljud där luften strömmar fritt"],
    ["konsonant", "alla andra bokstäver, t.ex. m, s, t"],
  ],
  lankar: [["Lästräning", "lastraning"], ["Grammatik: Stavning (lågstadiet)", "grammatik/stavning"], ["Ordkunskap", "ordkunskap"]],
  fortest: [
    { fraga: "Vilket ord rimmar på ”sol”?", alternativ: ["stol", "bil", "hus"], ratt: 0 },
    { fraga: "Vilket ljud börjar ”mamma” med?", alternativ: ["/m/", "/a/", "/p/"], ratt: 0 },
    { fraga: "Hur många ljud hör du i ”ko”?", alternativ: ["1", "2", "3"], ratt: 1 },
    { fraga: "Vilken bokstav är en vokal?", alternativ: ["a", "s", "t"], ratt: 0 },
    { fraga: "Vilket ord står det: s – o – l?", alternativ: ["sol", "los", "sal"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Lek med ljud",
      mal: "Eleverna kan höra rim och första ljudet i ord och dela upp korta ord i ljud.",
      upplagg: ["Förtestet muntligt i liten grupp eller med bilder (10 min).", "Rimlek: läraren säger ett ord, eleverna hittar ord som rimmar (10 min).", "Ljudlek ”Jag ser något som börjar på /s/” (10 min).", "Klappa och dela upp korta ord i ljud med fingrarna (10 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Rimmar det?", punkter: ["sol – stol", "katt – hatt", "bil – pil", "Hitta fler ord som rimmar på hus!"] },
        { typ: "fraga", fraga: { fraga: "Vilket ord rimmar på ”katt”?", alternativ: ["hatt", "hund", "kopp"], ratt: 0 } },
        { typ: "uppgift", rubrik: "Hur många ljud?", text: "Säg ordet långsamt och håll upp ett finger för varje ljud.", punkter: ["is (2)", "sol (3)", "mus (3)", "lampa (5)"] },
      ],
      elevtext: [{ rubrik: "Ord är gjorda av ljud", stycken: ["När vi säger ett ord säger vi flera ljud efter varandra. Sol har tre ljud: /s/ – /o/ – /l/. Ord som slutar likadant rimmar: sol och stol."] }],
      uppgifter: ["Rita två saker som rimmar. Skriv eller säg orden.", "Rita tre saker som börjar på samma ljud som ditt namn."],
    },
    {
      titel: "Från ljud till bokstav",
      mal: "Eleverna kan koppla ljud till bokstäver och ljuda ihop korta ord.",
      upplagg: ["Introducera en eller två nya bokstäver: säg ljudet, visa bokstaven, skriv den i luften (10 min).", "Ljuda ihop korta ord med bokstäverna ni kan (15 min).", "Läsa och bygga ord med bokstavskort (15 min)."],
      bilder: [
        { typ: "punkter", rubrik: "I vilken ordning?", punkter: ["Börja med vanliga ljud som går att dra ut: s, a, m, r, l, o, i.", "Med få bokstäver kan man redan bygga ord: sol, mos, ris, lam.", "Ovanliga bokstäver kommer sist: x, q, w och z."] },
        { typ: "uppgift", rubrik: "Ljuda ihop", text: "Säg ljuden och dra ihop dem till ett ord:", punkter: ["s – o – l", "m – o – s", "r – i – s", "l – a – m – a"] },
        { typ: "fraga", fraga: { fraga: "m – a – t blir …", alternativ: ["mat", "tam", "mas"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Ljuden har bokstäver", stycken: ["Varje ljud har en bokstav. När du läser säger du ljuden efter varandra och drar ihop dem: s-o-l blir sol."] }],
      uppgifter: ["Ljuda och läs orden: sol, mos, ris, lam, mor.", "Bygg ett ord med bokstavskorten och läs det för en kompis."],
    },
    {
      titel: "Ord jag känner igen direkt",
      mal: "Eleverna känner igen vanliga ord direkt utan att ljuda.",
      upplagg: ["Visa ordkorten och läs dem tillsammans (10 min).", "Ordjakt: hitta orden i en bilderbok eller på väggarna (15 min).", "Memory med ordkort i par (15 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Vanliga ord", punkter: ["och · jag · är · det · att", "en · på · som · har · inte", "Vissa ord läser man så ofta att man känner igen dem direkt."] },
        { typ: "fraga", fraga: { fraga: "Vilket ord står det: ”och”?", alternativ: ["och", "ock", "oh"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Snabba ord", stycken: ["Några ord är så vanliga att du snart känner igen dem direkt, utan att ljuda: och, jag, är, det, har. Det gör att du läser snabbare."] }],
      uppgifter: ["Ringa in alla ”och” och ”jag” i en text.", "Spela memory med ordkorten."],
      lankar: [["Lästräning", "lastraning"]],
    },
    {
      titel: "Korta och långa ljud",
      mal: "Eleverna kan skilja vokaler från konsonanter, höra korta och långa vokaler och veta när det blir dubbelteckning (åk 2).",
      upplagg: ["Repetera vokaler och konsonanter (10 min).", "Lyssna: lång eller kort vokal? (10 min)", "Genomgång av dubbelteckning efter kort vokal (10 min).", "Sortera ordkort i två högar (10 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Lång eller kort?", kolumner: ["Lång vokal", "Kort vokal"], rader: [["glas", "glass"], ["tak", "tack"], ["vit", "vitt"], ["hat", "hatt"]] },
        { typ: "punkter", rubrik: "Regeln", punkter: ["Efter en kort vokal skriver man ofta två konsonanter: glass, katt, boll.", "Efter en lång vokal skriver man en: glas, tak, sol.", "Några vanliga ord stavas inte som de låter: och, är, de, mig."] },
        { typ: "fraga", fraga: { fraga: "Vilket ord har kort vokal?", alternativ: ["katt", "kat", "kal"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Två eller en?", stycken: ["Lyssna på vokalen. Är den kort skriver man oftast två konsonanter efter: glass, katt. Är den lång skriver man en: glas, tak."] }],
      uppgifter: ["Sortera orden i lång och kort vokal: sol, boll, mat, matt, hus, buss.", "Skriv tre egna ord med två lika konsonanter."],
      lankar: [["Grammatik: Stavning", "grammatik/stavning"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vilket ord rimmar på ”hus”?", alternativ: ["mus", "hund", "hav"], ratt: 0 },
      { fraga: "Vilket ljud börjar ”sol” med?", alternativ: ["/s/", "/o/", "/l/"], ratt: 0 },
      { fraga: "Vad blir r – i – s?", alternativ: ["ris", "sir", "rist"], ratt: 0 },
      { fraga: "Vilken bokstav är en konsonant?", alternativ: ["m", "o", "e"], ratt: 0 },
      { fraga: "Vilket ord har lång vokal?", alternativ: ["glas", "glass", "katt"], ratt: 0 },
      { fraga: "Vilket ord är rätt stavat?", alternativ: ["boll", "bol", "bool"], ratt: 0 },
    ],
    oppna: [{ fraga: "Läs orden högt för läraren: sol, mat, katt, och, jag.", bedomning: ["Ljudar ihop eller läser direkt", "Läser högfrekventa ord direkt", "Rätt uttal av kort och lång vokal"] }],
  },
  tips: ["Gör språklekar varje dag – korta och ofta ger mest.", "Följ en bestämd bokstavsordning och låt eleverna läsa riktiga ord så snart som möjligt.", "Kartlägg tidigt och ge extra stöd till elever som inte kommer igång."],
};

export const SKRIVA_FOR_HAND: Arbetsomrade = {
  id: "skriva-for-hand",
  titel: "Skriva för hand – och skriva för att minnas",
  stadie: "lagstadiet",
  arskurs: "2",
  ingress:
    "Pennfattning, skrivriktning och bokstävernas plats på skrivlinjen – och att skriva listor och korta anteckningar för att minnas och tänka. Eleverna övar på en läslig handstil med proportionerliga versaler och gemener.",
  kursplan: [
    "Att forma bokstäver och skriva ord och meningar tydligt för hand: pennfattning, skrivriktning och bokstävernas placering i förhållande till skrivlinjen.",
    "Att gemener och versaler är proportionerliga och rätt placerade (åk 3–4).",
    "Skrivande som verktyg för att tänka och lära: listor och enkla anteckningar.",
  ],
  mal: ["Hålla pennan med ett avslappnat grepp.", "Skriva bokstäverna åt rätt håll och på rätt plats på linjen.", "Skriva läsligt med mellanrum mellan orden.", "Skriva en lista eller anteckning för att komma ihåg."],
  begrepp: [["pennfattning", "hur man håller pennan"], ["skrivlinje", "linjen bokstäverna står på"], ["versal", "stor bokstav"], ["gemen", "liten bokstav"], ["anteckning", "kort text för att minnas"]],
  lankar: [["Grammatik: Stavning (stor och liten bokstav)", "grammatik/stavning"], ["Skrivverkstad", "skrivverkstad"]],
  fortest: [
    { fraga: "Var börjar man skriva på raden?", alternativ: ["till vänster", "till höger", "i mitten"], ratt: 0 },
    { fraga: "Vilken bokstav är en versal?", alternativ: ["A", "a", "b"], ratt: 0 },
    { fraga: "Vad ska det vara mellan orden?", alternativ: ["ett mellanrum", "en punkt", "inget"], ratt: 0 },
    { fraga: "Varför kan man skriva en lista?", alternativ: ["för att minnas", "för att det är fult", "för att slippa läsa"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Pennan och linjen",
      mal: "Eleverna håller pennan med ett bra grepp och skriver från vänster till höger på linjen.",
      upplagg: ["Förtestet muntligt (5 min).", "Visa pennfattningen: tummen och pekfingret håller, långfingret stöttar (10 min).", "Skrivövning: girlanger och linjer från vänster till höger (10 min).", "Skriv bokstäver på linjen: små bokstäver står på linjen, vissa går upp, några går ner (15 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Så håller du pennan", punkter: ["Tummen och pekfingret håller pennan.", "Långfingret stöttar under.", "Håll löst – det ska inte göra ont.", "Papperet ligger lite snett."] },
        { typ: "jamfor", rubrik: "Bokstäverna och linjen", kolumner: ["Bokstäver", "Var?"], rader: [["a, c, e, m, n, o", "står på linjen"], ["b, d, h, k, l, t", "går upp"], ["g, j, p, q, y", "går ner under linjen"]] },
      ],
      elevtext: [{ rubrik: "Skriv snyggt", stycken: ["Håll pennan löst mellan tummen och pekfingret. Börja till vänster och skriv åt höger. Små bokstäver står på linjen, några sträcker sig upp och några går ner under."] }],
      uppgifter: ["Skriv en rad med a, en rad med l och en rad med g.", "Skriv ditt namn på linjen. Börjar det med stor bokstav?"],
    },
    {
      titel: "Stora och små bokstäver",
      mal: "Eleverna skriver versaler och gemener rätt och i rätt storlek.",
      upplagg: ["Genomgång: versaler är höga, gemener har olika höjd (10 min).", "Skriv ord med stor bokstav först: namn och platser (15 min).", "Kamratkoll: är det mellanrum mellan orden? (15 min)"],
      bilder: [
        { typ: "punkter", rubrik: "Versal och gemen", punkter: ["Versal = stor bokstav: A, B, C.", "Gemen = liten bokstav: a, b, c.", "Stor bokstav i början av meningen och i namn.", "Lämna ett mellanrum, ungefär ett finger brett, mellan orden."] },
        { typ: "fraga", fraga: { fraga: "Vilken mening är rätt skriven?", alternativ: ["Lisa bor i Malmö.", "lisa bor i malmö.", "Lisabori Malmö."], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Stor och liten", stycken: ["Stora bokstäver kallas versaler och små bokstäver gemener. Meningen börjar med versal, och namn skrivs med versal. Mellan orden lämnar du ett mellanrum."] }],
      uppgifter: ["Skriv tre namn på personer du känner.", "Skriv en mening om dig själv. Kontrollera stor bokstav, mellanrum och punkt."],
    },
    {
      titel: "Skriv för att minnas",
      mal: "Eleverna kan skriva en enkel lista eller anteckning för att komma ihåg.",
      upplagg: ["Prata om när vuxna skriver listor (5 min).", "Gemensam lista: Vad behöver vi till utflykten? (10 min)", "Eleverna skriver en egen lista eller tre ord de lärt sig i dag (15 min).", "Läs upp och jämför (10 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Skriv för att komma ihåg", punkter: ["En inköpslista hjälper dig att minnas.", "Skriv ett ord per rad.", "Efter en genomgång: skriv tre ord du kommer ihåg.", "Att skriva för hand hjälper många att minnas."] },
        { typ: "diskutera", fragor: ["När skriver du eller dina föräldrar listor?", "Vad vill du komma ihåg från i dag?"] },
      ],
      elevtext: [{ rubrik: "Listor och anteckningar", stycken: ["När du skriver ned något blir det lättare att komma ihåg. En lista har ett ord på varje rad. En anteckning kan vara några ord om det du har lärt dig."] }],
      uppgifter: ["Skriv en lista: fem saker du behöver till en utflykt.", "Skriv tre ord om det du lärde dig på lektionen i dag."],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vilken bokstav går ner under linjen?", alternativ: ["g", "a", "l"], ratt: 0 },
      { fraga: "Vad kallas en stor bokstav?", alternativ: ["versal", "gemen", "vokal"], ratt: 0 },
      { fraga: "Var skriver man stor bokstav?", alternativ: ["i början av meningen och i namn", "sist i ordet", "överallt"], ratt: 0 },
      { fraga: "Varför skriver man en lista?", alternativ: ["för att minnas", "för att det blir längre", "för att slippa skriva"], ratt: 0 },
    ],
    oppna: [{ fraga: "Skriv av meningen så snyggt du kan: Elsa och Ali bor i Lund.", bedomning: ["Läslig handstil", "Bokstäverna på rätt plats på linjen", "Versaler och mellanrum rätt"] }],
  },
  tips: ["Korta skrivpass ofta är bättre än långa.", "Elever med motoriska svårigheter kan behöva greppstöd eller tjockare pennor – och mer tid.", "Kombinera med lektionerna i Ljud, bokstäver och ord."],
};

export const INSTRUKTIONER: Arbetsomrade = {
  id: "lyssna-folja-och-ge-instruktioner",
  titel: "Lyssna, följa och ge instruktioner",
  stadie: "lagstadiet",
  arskurs: "2",
  ingress:
    "Eleverna tränar att lyssna aktivt, följa muntliga instruktioner i flera steg och själva ge tydliga instruktioner – med ordningsord som först, sedan och sist.",
  kursplan: ["Att lyssna till, följa och ge enkla muntliga instruktioner.", "Att lyssna aktivt, ställa frågor och turas om i samtal.", "Ord och begrepp för att uttrycka tankar och kunskaper."],
  mal: ["Lyssna och följa en instruktion i två till fyra steg.", "Ge en tydlig instruktion med ordningsord.", "Ställa en fråga när man inte förstår."],
  begrepp: [["instruktion", "en beskrivning av hur man gör något, steg för steg"], ["ordningsord", "först, sedan, efter det, sist"], ["aktivt lyssnande", "att titta på den som pratar och tänka på vad hen säger"]],
  lankar: [["Tala, lyssna, samtala", "tala-lyssna"], ["Grammatik: Textbindning (först, sedan, till slut)", "grammatik/textbindning"]],
  fortest: [
    { fraga: "Vad gör en bra lyssnare?", alternativ: ["tittar på den som pratar", "pratar samtidigt", "tittar bort"], ratt: 0 },
    { fraga: "Vilket ord visar vad som kommer först?", alternativ: ["först", "sist", "aldrig"], ratt: 0 },
    { fraga: "Vad gör du om du inte förstår instruktionen?", alternativ: ["frågar", "gissar och skämtar", "gör något annat"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Lyssna och gör",
      mal: "Eleverna kan lyssna aktivt och följa en instruktion i flera steg.",
      upplagg: ["Förtestet muntligt (5 min).", "Prata om hur en bra lyssnare gör (5 min).", "Rita efter instruktion: läraren ger 3–4 steg (15 min).", "Jämför teckningarna och prata om varför de blev olika (10 min)."],
      bilder: [
        { typ: "punkter", rubrik: "En bra lyssnare", punkter: ["tittar på den som pratar", "är tyst och tänker", "väntar tills den andra pratat klart", "frågar om något är oklart"] },
        { typ: "uppgift", rubrik: "Rita efter instruktion", text: "Lyssna noga – läraren säger stegen en gång.", punkter: ["Först: rita ett hus mitt på papperet.", "Sedan: rita en sol uppe till höger.", "Efter det: rita ett träd till vänster om huset.", "Sist: rita en katt framför dörren."] },
      ],
      elevtext: [{ rubrik: "Att lyssna", stycken: ["När någon ger en instruktion behöver du lyssna noga. Titta på den som pratar och tänk på stegen. Fråga om du inte förstår."] }],
      uppgifter: ["Rita efter lärarens instruktion.", "Berätta för en kompis vilket steg som var svårast att komma ihåg."],
    },
    {
      titel: "Ge en tydlig instruktion",
      mal: "Eleverna kan ge en instruktion i rätt ordning med ordningsord.",
      upplagg: ["Visa ordningsorden (5 min).", "Eleverna förbereder en instruktion: hur man borstar tänderna, gör ett pappersflygplan eller ett spel (15 min).", "Par: den ena ger instruktionen, den andra gör (15 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Ordningsord", punkter: ["Först …", "Sedan …", "Efter det …", "Sist …"] },
        { typ: "uppgift", rubrik: "Din instruktion", text: "Välj något du kan göra och förklara det i fyra steg.", punkter: ["Hur man borstar tänderna", "Hur man gör en smörgås", "Hur man spelar kurragömma"] },
      ],
      elevtext: [{ rubrik: "Steg för steg", stycken: ["En bra instruktion har stegen i rätt ordning. Använd ord som först, sedan, efter det och sist. Visa gärna med händerna."] }],
      uppgifter: ["Skriv eller rita en instruktion i fyra steg.", "Ge instruktionen till en kompis. Kunde hen göra rätt?"],
      lankar: [["Tala, lyssna, samtala", "tala-lyssna"]],
    },
    {
      titel: "Fråga när du inte förstår",
      mal: "Eleverna kan ställa frågor för att förstå och turas om i ett samtal.",
      upplagg: ["Läraren ger en lite oklar instruktion med flit – vad behöver vi fråga? (10 min)", "Öva frågeord: vem, vad, var, när, hur (10 min).", "Gruppspel: turas om att ge och följa instruktioner (15 min)."],
      bilder: [{ typ: "punkter", rubrik: "Bra frågor", punkter: ["Vad ska jag göra först?", "Var ska jag lägga den?", "Hur många ska det vara?", "Kan du säga det igen?"] }, { typ: "fraga", fraga: { fraga: "Läraren säger ”Ta en.” Vad kan du fråga?", alternativ: ["En vad?", "Varför?", "Ingenting"], ratt: 0 } }],
      elevtext: [{ rubrik: "Det är bra att fråga", stycken: ["Om du inte förstår är det klokt att fråga. Använd frågeord: vem, vad, var, när och hur."] }],
      uppgifter: ["Skriv tre frågor du kan ställa när du inte förstår en instruktion.", "Spela instruktionsspelet i gruppen och turas om."],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vilket ordningsord kommer sist?", alternativ: ["sist", "först", "sedan"], ratt: 0 },
      { fraga: "Vad gör du om du inte förstår?", alternativ: ["frågar", "struntar i det"], ratt: 0 },
      { fraga: "Vad gör en bra lyssnare?", alternativ: ["väntar tills den andra pratat klart", "avbryter"], ratt: 0 },
    ],
    oppna: [{ fraga: "Ge en muntlig instruktion i fyra steg till läraren (t.ex. hur man vattnar en blomma).", bedomning: ["Stegen i rätt ordning", "Ordningsord", "Tydligt så att någon kan följa den"] }],
  },
  tips: ["Instruktionsövningar fungerar bra som korta starter på andra lektioner.", "Använd bildstöd för elever som behöver det."],
};
