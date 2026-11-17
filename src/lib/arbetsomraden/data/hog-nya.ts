import type { Arbetsomrade } from "../typer";

export const SKRIVA_LARA_HOG: Arbetsomrade = {
  id: "skriva-for-att-lara-och-minnas",
  titel: "Skriva för att lära och minnas",
  stadie: "hogstadiet",
  arskurs: "8",
  ingress:
    "Skrivandet som tankeverktyg i alla ämnen: eleverna lär sig anteckningsteknik, nyckelord och begreppskartor, att sammanfatta och referera lästa texter, och att skriva korta reflektionstexter som utvecklar deras resonemang. De prövar också skillnaden mellan att anteckna för hand och på dator.",
  kursplan: [
    "Skrivandet som verktyg för lärande och reflektion: att strukturera, utveckla och pröva egna tankar och resonemang.",
    "Att identifiera nyckelord, föra anteckningar och skriva korta reflektionstexter i anslutning till lärarens genomgångar.",
    "Att hämta och bearbeta innehåll ur texter, formulera det med egna ord och använda källhänvisningar.",
    "Att sammanfatta olika slags texter och använda delar av innehållet i egen muntlig och skriftlig framställning.",
  ],
  mal: ["Föra strukturerade anteckningar under genomgångar och vid läsning.", "Göra en begreppskarta som visar samband.", "Sammanfatta och referera en text med egna ord och källhänvisning.", "Skriva reflektionstexter som utvecklar ett resonemang.", "Resonera om för- och nackdelar med att anteckna för hand och digitalt."],
  begrepp: [["anteckningsteknik", "ett system för att anteckna, t.ex. två kolumner med nyckelord och anteckningar"], ["begreppskarta", "en bild som visar hur begrepp hänger ihop"], ["sammanfattning", "det viktigaste i en text, kort och med egna ord"], ["referat", "återgivning av en källas innehåll med egna ord och källhänvisning"], ["reflektionstext", "kort text där man tänker vidare om det man har lärt sig"], ["metakognition", "att tänka på sitt eget tänkande och lärande"]],
  lankar: [["Lässtrategier", "lasstrategier"], ["Källkritik", "kallkritik"], ["Elevtips", "elevtips"]],
  fortest: [
    { fraga: "Vad är syftet med anteckningar?", alternativ: ["att minnas och bearbeta innehållet", "att skriva av allt läraren säger", "att visa läraren att man lyssnar"], ratt: 0 },
    { fraga: "Vad visar en begreppskarta?", alternativ: ["hur begrepp hänger ihop", "en karta över skolan", "alla ord i en text"], ratt: 0 },
    { fraga: "Vad skiljer ett referat från ett citat?", alternativ: ["referatet är med egna ord", "referatet är ordagrant", "det finns ingen skillnad"], ratt: 0 },
    { fraga: "Vad är en reflektionstext?", alternativ: ["en kort text där man tänker vidare om det man lärt sig", "en sammanfattning av en film", "en dikt"], ratt: 0 },
    { fraga: "Vad tyder flera studier på om att anteckna för hand?", alternativ: ["att många minns bättre", "att det är sämre för minnet", "att det inte spelar någon roll alls"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Anteckningsteknik",
      mal: "Eleverna kan föra strukturerade anteckningar med tvåkolumnsmetoden.",
      upplagg: ["Förtestet (10 min).", "Visa tvåkolumnsmetoden (10 min).", "Kort genomgång i ett ämne medan eleverna antecknar (10 min).", "Eleverna formulerar frågor i vänsterkolumnen och skriver en sammanfattning längst ned (15 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Tvåkolumnsmetoden", kolumner: ["Del", "Innehåll"], rader: [["Höger kolumn (under genomgången)", "anteckningar: nyckelord, korta fraser, pilar"], ["Vänster kolumn (efteråt)", "frågor och nyckelbegrepp"], ["Längst ned", "sammanfattning i två–tre meningar"]] },
        { typ: "punkter", rubrik: "Tips", punkter: ["Skriv med egna ord – inte ordagrant.", "Använd förkortningar och tecken: → = ≠ ↑ ↓", "Gå igenom anteckningarna samma dag – då minns du mer.", "Täck över högerkolumnen och förhör dig själv med frågorna."] },
      ],
      elevtext: [{ rubrik: "Anteckna smart", stycken: ["Bra anteckningar är inte en kopia av vad läraren säger, utan ett urval. När du väljer ut och formulerar om tänker du – och då lär du dig.", "Med tvåkolumnsmetoden antecknar du i högerkolumnen under genomgången. Efteråt skriver du frågor och nyckelbegrepp i vänsterkolumnen och en kort sammanfattning längst ned. Sedan kan du förhöra dig själv genom att täcka över högerkolumnen."] }],
      uppgifter: ["Anteckna med tvåkolumnsmetoden under lärarens genomgång.", "Skriv tre frågor i vänsterkolumnen och en sammanfattning längst ned.", "Förhör en kompis med dina frågor."],
    },
    {
      titel: "Begreppskartor och nyckelord",
      mal: "Eleverna kan göra en begreppskarta som visar samband mellan begrepp.",
      upplagg: ["Visa ett exempel på begreppskarta (10 min).", "Eleverna läser en faktatext och väljer ut nyckelbegrepp (15 min).", "De gör en begreppskarta med förklarade samband (20 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Så gör du en begreppskarta", punkter: ["Skriv huvudbegreppet i mitten.", "Lägg till viktiga begrepp runt omkring.", "Dra linjer mellan begrepp som hänger ihop.", "Skriv på linjen hur de hänger ihop: orsakar, består av, är exempel på."] },
        { typ: "fraga", fraga: { fraga: "Vad skriver man på linjerna i en begreppskarta?", alternativ: ["hur begreppen hänger ihop", "sidnummer", "ingenting"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Begreppskartor", stycken: ["En begreppskarta visar hur begrepp hänger ihop. Det viktiga är inte bilden utan sambanden: när du skriver på linjen att något orsakar, består av eller är ett exempel på något annat, måste du förstå innehållet."] }],
      uppgifter: ["Gör en begreppskarta över texten du har läst med minst sex begrepp.", "Förklara tre av sambanden med hela meningar."],
    },
    {
      titel: "Sammanfatta, referera – och reflektera",
      mal: "Eleverna kan sammanfatta och referera en text och skriva en reflektionstext.",
      upplagg: ["Genomgång: sammanfattning, referat och reflektion (15 min).", "Eleverna sammanfattar en artikel med källhänvisning (20 min).", "Skriv en reflektionstext om innehållet (15 min).", "Diskussion: anteckna för hand eller på dator? Repetera inför provet."],
      bilder: [
        { typ: "jamfor", rubrik: "Tre sätt att skriva om en text", kolumner: ["Sätt", "Vad du gör"], rader: [["Sammanfattning", "det viktigaste, kort, med egna ord"], ["Referat", "återger innehållet med egna ord och anger källan: Enligt …"], ["Reflektion", "tänker vidare: Vad betyder det? Håller jag med? Vad undrar jag?"]] },
        { typ: "punkter", rubrik: "För hand eller på dator?", punkter: ["På dator kan man skriva snabbare – men frestas att skriva ordagrant.", "Flera studier tyder på att anteckningar för hand gör att många bearbetar och minns mer.", "Testa båda och se vad som fungerar för dig."] },
        { typ: "diskutera", fragor: ["Hur skriver du helst anteckningar – och varför?", "Hur kan reflektionstexter hjälpa dig inför ett prov?"] },
      ],
      elevtext: [{ rubrik: "Att skriva om det man läser", stycken: ["En sammanfattning tar med det viktigaste i en text. Ett referat återger innehållet med egna ord och talar om var det kommer ifrån: Enligt artikeln i … Ett referat är neutralt – dina egna åsikter hör inte hemma där.", "I en reflektionstext tänker du vidare. Vad betyder det du har läst? Hur hänger det ihop med det du redan vet? Vad håller du med om, och vad undrar du? Att skriva reflektioner tränar ditt resonerande och gör det lättare att minnas."] }],
      uppgifter: ["Sammanfatta artikeln i högst åtta meningar med källhänvisning.", "Skriv en reflektionstext (8–10 meningar) om artikelns innehåll.", "Skriv tre meningar om hur du helst antecknar och varför."],
      lankar: [["Källkritik", "kallkritik"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vad skriver man i vänsterkolumnen i tvåkolumnsmetoden?", alternativ: ["frågor och nyckelbegrepp", "allt läraren säger", "datum"], ratt: 0 },
      { fraga: "Vad är viktigast i en begreppskarta?", alternativ: ["sambanden mellan begreppen", "färgerna", "att den är stor"], ratt: 0 },
      { fraga: "Vilket är ett referat?", alternativ: ["Enligt Dagens Nyheter ökar elcykelförsäljningen.", "”Försäljningen ökar”, skriver Dagens Nyheter.", "Jag tycker att elcyklar är bra."], ratt: 0 },
      { fraga: "Vad hör INTE hemma i ett referat?", alternativ: ["egna åsikter", "källan", "det viktigaste innehållet"], ratt: 0 },
      { fraga: "Vad gör man i en reflektionstext?", alternativ: ["tänker vidare om det man lärt sig", "skriver av texten", "listar alla källor"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Läs texten som läraren ger dig. Gör anteckningar och skriv sedan en sammanfattning med källhänvisning.", bedomning: ["Relevant urval i anteckningarna", "Sammanfattningen tar med det viktigaste med egna ord", "Korrekt källhänvisning"] },
      { fraga: "Skriv en reflektionstext om något du har lärt dig i ett annat ämne den här veckan.", bedomning: ["Resonerar och utvecklar tankar", "Kopplar till tidigare kunskaper", "Formulerar egna frågor eller ställningstaganden"] },
    ],
  },
  tips: ["Gör anteckningsteknik till en gemensam satsning med andra ämnen.", "Låt reflektionstexter bli en återkommande avslutning på lektioner – fem minuter räcker.", "Elever med skrivsvårigheter kan kombinera anteckningar med bilder eller inspelning."],
};

export const DIGITALT_HOG: Arbetsomrade = {
  id: "digitala-texter-och-ansvar",
  titel: "Digitala och multimediala texter – skriva, läsa och ta ansvar",
  stadie: "hogstadiet",
  arskurs: "9",
  ingress:
    "Hur läser och skriver vi i digitala miljöer? Eleverna analyserar hur multimediala texter är uppbyggda, disponerar och redigerar texter digitalt, ger digital respons, resonerar om hur AI påverkar det egna skrivandet och lär sig vad yttrandefrihet och integritet innebär när man publicerar och kommunicerar.",
  kursplan: [
    "Orientering i läsning av digitala och multimediala texter: hur de är uppbyggda och hur olika verktyg påverkar läsning, kommunikation och lärande.",
    "Att disponera, skriva och redigera texter digitalt och att ge och ta emot digital respons.",
    "Hur digitala resurser för skrivande, inklusive generativ AI, kan påverka möjligheterna att utveckla självständiga skrivfärdigheter.",
    "Att uttrycka sig och kommunicera ansvarsfullt och säkert i digitala miljöer, bland annat utifrån yttrandefrihet och integritet.",
  ],
  mal: ["Analysera hur en multimedial text kombinerar text, bild, ljud och länkar.", "Disponera och redigera en text digitalt med rubriker och formatmallar.", "Ge och ta emot digital respons med kommentarer.", "Resonera om AI och självständigt skrivande.", "Förklara yttrandefrihet, integritet och ansvar när man publicerar."],
  begrepp: [["multimedial text", "text som kombinerar skrift, bild, ljud, film och länkar"], ["formatmall", "inställning för rubriker och brödtext i ordbehandlaren"], ["versionshistorik", "funktion som sparar tidigare versioner av ett dokument"], ["yttrandefrihet", "rätten att uttrycka sig, skyddad i grundlagen – med gränser, t.ex. förtal och hets mot folkgrupp"], ["integritet", "rätten att bestämma över information om sig själv"], ["förtal", "att sprida nedsättande uppgifter om någon – ett brott"]],
  lankar: [["AI i svenskan", "ai-i-svenskan"], ["Källkritik", "kallkritik"], ["Arbetsområde: Källkritik, algoritmer och AI", "arbetsomraden/kallkritik-algoritmer-och-ai"]],
  fortest: [
    { fraga: "Vad är en multimedial text?", alternativ: ["en text som kombinerar skrift, bild, ljud och länkar", "en text på flera språk", "en mycket lång text"], ratt: 0 },
    { fraga: "Vad skyddar yttrandefriheten?", alternativ: ["rätten att uttrycka sig", "rätten att säga vad som helst om vem som helst", "rätten att kopiera texter"], ratt: 0 },
    { fraga: "Är förtal tillåtet på nätet?", alternativ: ["nej, det är ett brott", "ja, nätet är fritt", "bara anonymt"], ratt: 0 },
    { fraga: "Vad är en fördel med digital respons?", alternativ: ["kommentarer kan placeras exakt där de gäller", "den är alltid anonym", "den rättar texten automatiskt"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Hur är en multimedial text byggd?",
      mal: "Eleverna kan analysera hur en multimedial text kombinerar uttrycksformer och hur det påverkar läsningen.",
      upplagg: ["Förtestet (10 min).", "Analysera tillsammans en nyhetsartikel på webben med video, bilder och länkar (15 min).", "Eleverna analyserar en egen vald multimedial text i par (20 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Multimediala texter", punkter: ["Skrift, bild, ljud, film och länkar samverkar.", "Rubrik, ingress och bild fångar uppmärksamheten – ofta läser vi bara dem.", "Länkar gör att läsningen kan hoppa – det är lätt att tappa tråden.", "Fråga: Vad säger bilden som texten inte säger – och tvärtom?"] },
        { typ: "uppgift", rubrik: "Analysera", text: "Välj en multimedial text (nyhet, reklam, informationssida):", punkter: ["Vilka uttrycksformer används?", "Hur samverkar de – förstärker de varandra eller säger de olika saker?", "Hur påverkar formen hur du läser?", "Vem är avsändaren och vad är syftet?"] },
      ],
      elevtext: [{ rubrik: "Läsa multimedialt", stycken: ["En multimedial text kombinerar skrift med bild, ljud, film och länkar. Uttrycksformerna samverkar: en bild kan förstärka texten, men också ge en annan bild än texten.", "När vi läser på skärm skummar vi ofta och hoppar mellan länkar. Forskning tyder på att det kan göra det svårare att förstå och minnas längre texter. Den som läser medvetet – och stänger av störningar – förstår mer."] }],
      uppgifter: ["Analysera en multimedial text med frågorna.", "Jämför: hur skulle samma innehåll fungera som enbart tryckt text?"],
    },
    {
      titel: "Disponera och redigera digitalt",
      mal: "Eleverna kan disponera och redigera en text digitalt med rubriker, formatmallar och versionshistorik.",
      upplagg: ["Visa formatmallar, innehållsförteckning och versionshistorik (15 min).", "Eleverna disponerar och skriver ett utkast till en utredande eller argumenterande text (30 min)."],
      bilder: [{ typ: "punkter", rubrik: "Digitala verktyg för skrivande", punkter: ["Formatmallar för rubriker ger tydlig struktur – och en automatisk innehållsförteckning.", "Skriv dispositionen som rubriker först och fyll sedan på.", "Versionshistoriken sparar tidigare versioner.", "Organisera dokumenten i mappar med tydliga namn."] }],
      elevtext: [{ rubrik: "Strukturera digitalt", stycken: ["I ordbehandlaren kan du börja med att skriva dispositionen som rubriker. Med formatmallar blir rubrikerna enhetliga, och du kan flytta hela avsnitt. Versionshistoriken gör att du kan gå tillbaka om du ångrar en ändring."] }],
      uppgifter: ["Skriv dispositionen till din text som rubriker med formatmallar.", "Skriv ett utkast och spara det med ett tydligt namn."],
    },
    {
      titel: "Digital respons – och AI",
      mal: "Eleverna kan ge och ta emot digital respons och resonera om hur AI påverkar självständigt skrivande.",
      upplagg: ["Visa hur man kommenterar och föreslår ändringar (10 min).", "Eleverna ger digital respons på en kamrats utkast (20 min).", "Diskussion om AI och skrivande (15 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Digital respons", punkter: ["Kommentera exakt där det gäller.", "Ställ frågor i stället för att skriva om: ”Vad menar du här?”", "Föreslå ändringar – låt skribenten bestämma.", "Börja och avsluta med något som fungerar."] },
        { typ: "diskutera", fragor: ["Om en AI skriver om din text – vems text är det då?", "Hur kan man använda AI utan att sluta utveckla sitt eget skrivande?", "Vilka regler har skolan – och varför?"] },
      ],
      elevtext: [{ rubrik: "Respons och AI", stycken: ["Digital respons gör att kommentarer kan placeras precis där de gäller. Bra respons är konkret och vänlig och lämnar beslutet till skribenten.", "AI-verktyg kan föreslå formuleringar och rätta språk. Men den som låter verktyget skriva tränar inte sin egen förmåga, och texten är inte längre helt ens egen. Följ skolans regler och var öppen med hur du har använt AI."] }],
      uppgifter: ["Ge digital respons på en kamrats text: tre kommentarer och en fråga.", "Bearbeta din text utifrån responsen.", "Skriv ett resonerande stycke: Hur kan AI användas i skrivandet utan att ersätta ditt eget tänkande?"],
      lankar: [["AI i svenskan", "ai-i-svenskan"]],
    },
    {
      titel: "Yttrandefrihet, integritet och ansvar",
      mal: "Eleverna kan förklara yttrandefrihet och integritet och resonera om ansvar när man publicerar och kommunicerar digitalt.",
      upplagg: ["Genomgång (15 min).", "Fallstudier i grupp: Är det tillåtet? Är det schysst? (20 min)", "Repetera inför provet."],
      bilder: [
        { typ: "punkter", rubrik: "Yttrandefrihet – med gränser", punkter: ["Yttrandefriheten skyddas i grundlagen: du får uttrycka åsikter och kritisera makthavare.", "Men vissa yttranden är brott, t.ex. förtal, olaga hot och hets mot folkgrupp.", "Integritet: andra bör få bestämma över bilder och uppgifter om sig själva – och vissa intrång, som att sprida integritetskränkande bilder, är brott.", "Publicera inte bilder på andra utan lov."] },
        { typ: "diskutera", fragor: ["Var går gränsen mellan kritik och förtal?", "Vem ansvarar för en kommentar i en gruppchatt som sprids?"] },
        { typ: "fraga", fraga: { fraga: "Vilket är ett brott även på nätet?", alternativ: ["förtal", "att kritisera en politiker", "att skriva en insändare"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Frihet och ansvar", stycken: ["I Sverige skyddas yttrandefriheten i grundlagen. Du får uttrycka dina åsikter, kritisera makthavare och delta i debatten. Men friheten har gränser: förtal, olaga hot och hets mot folkgrupp är brott – även på nätet.", "Integritet handlar om rätten att bestämma över information om sig själv. Bilder och uppgifter om andra ska inte spridas utan lov. Tänk på att det du publicerar kan spridas snabbt och finnas kvar."] }],
      uppgifter: ["Diskutera fallstudierna och skriv för varje fall: tillåtet? schysst? varför?", "Skriv ett resonerande stycke: Var går gränsen för yttrandefriheten på nätet?"],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vad kännetecknar en multimedial text?", alternativ: ["skrift kombineras med bild, ljud, film eller länkar", "den är tryckt", "den saknar rubrik"], ratt: 0 },
      { fraga: "Vad är en fördel med formatmallar?", alternativ: ["enhetliga rubriker och tydlig struktur", "de rättar stavfel", "de skriver texten"], ratt: 0 },
      { fraga: "Vad gör versionshistoriken?", alternativ: ["sparar tidigare versioner", "rättar grammatik", "publicerar texten"], ratt: 0 },
      { fraga: "Vilken kommentar är bäst som respons?", alternativ: ["Här blir det otydligt – vad menar du med ”det”?", "Dåligt.", "Skriv om allt."], ratt: 0 },
      { fraga: "Var skyddas yttrandefriheten?", alternativ: ["i grundlagen", "i skolans regler", "den skyddas inte"], ratt: 0 },
      { fraga: "Vilket är INTE skyddat av yttrandefriheten?", alternativ: ["förtal", "kritik mot regeringen", "en debattartikel"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Analysera en multimedial text: vilka uttrycksformer används och hur samverkar de?", bedomning: ["Identifierar uttrycksformerna", "Analyserar samspelet", "Kopplar till syfte och mottagare"] },
      { fraga: "Resonera: Hur kan AI påverka elevers skrivutveckling – och hur bör skolan förhålla sig?", bedomning: ["Flera perspektiv", "Konkreta exempel", "Motiverat ställningstagande"] },
      { fraga: "Förklara yttrandefrihet och integritet och ge ett exempel där de krockar.", bedomning: ["Korrekta förklaringar", "Relevant exempel", "Resonerar om gränsdragningen"] },
    ],
  },
  tips: ["Använd skolans egna digitala verktyg i lektion 2 och 3.", "Lektion 4 kan kopplas till samhällskunskap (grundlagarna).", "Följ skolans riktlinjer för AI och låt eleverna diskutera dem."],
};

export const SKONLITTERATUR_HOG: Arbetsomrade = {
  id: "skonlitteratur-hela-verk-och-klassiker",
  titel: "Skönlitteratur – noveller, romaner, lyrik, dramatik och klassiker",
  stadie: "hogstadiet",
  arskurs: "9",
  ingress:
    "Eleverna läser noveller, en ungdomsroman, lyrik, dramatik och utdrag ur klassiker från Sverige, Norden och världen. De lär sig litterära begrepp för att samtala och skriva om texterna, relaterar verken till författaren och tiden och för boksamtal om livsvillkor, identitet och relationer.",
  kursplan: [
    "Läsning av noveller, ungdomsromaner, utdrag ur klassiker, lyrik och dramatik från Sverige, Norden och övriga världen – korta utdrag och hela verk.",
    "Tema, uppbyggnad, berättarteknik och stilistiska grepp: berättarperspektiv, kronologi, tillbakablickar, parallellhandling, liknelser och metaforer, miljö- och personbeskrivningar, gestaltning och dialog.",
    "Centrala skönlitterära verk och författare från olika tider och de historiska och kulturella sammanhang där verken tillkommit.",
    "Texter som belyser livsvillkor, identitets- och livsfrågor och relationer – och läsningens estetiska dimension.",
    "Att använda litterära begrepp för att samtala och skriva om texter.",
  ],
  mal: ["Använda litterära begrepp för att analysera en text.", "Föra boksamtal om tema, personer och budskap.", "Relatera ett verk till författaren och tiden det skrevs i.", "Känna igen drag i novell, roman, lyrik och dramatik.", "Skriva en litterär analys med citat."],
  begrepp: [["tema", "det övergripande ämne eller budskap texten handlar om"], ["berättarperspektiv", "vem som berättar: jag-berättare eller tredjepersonsberättare"], ["parallellhandling", "två handlingar som berättas omväxlande"], ["gestaltning", "att visa i stället för att berätta"], ["novell", "kort berättelse, ofta med få personer och en vändpunkt"], ["dramatik", "texter skrivna för att spelas på scen, med repliker och scenanvisningar"], ["klassiker", "verk som lästs och påverkat läsare under lång tid"], ["litterär epok", "tidsperiod med gemensamma drag i litteraturen, t.ex. realism"]],
  lankar: [["Litterära begrepp", "litteraturbegrepp"], ["Litteraturhistoria", "litteraturhistoria"], ["Textbank", "textbank"]],
  fortest: [
    { fraga: "Vad är en novell?", alternativ: ["en kort berättelse", "en lång roman", "en dikt"], ratt: 0 },
    { fraga: "Vad betyder berättarperspektiv?", alternativ: ["vem som berättar historien", "var den utspelar sig", "hur lång den är"], ratt: 0 },
    { fraga: "Vad är dramatik?", alternativ: ["texter skrivna för scenen", "spännande romaner", "faktatexter"], ratt: 0 },
    { fraga: "Vem skrev Romeo och Julia?", alternativ: ["William Shakespeare", "August Strindberg", "Astrid Lindgren"], ratt: 0 },
    { fraga: "Vad är ett tema?", alternativ: ["det övergripande ämnet eller budskapet", "titeln", "första kapitlet"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Novellen och de litterära verktygen",
      mal: "Eleverna kan använda litterära begrepp för att analysera en novell.",
      upplagg: ["Förtestet (10 min).", "Läs en kort novell högt (15 min).", "Genomgång av begreppen med exempel ur novellen (10 min).", "Boksamtal i grupp med frågorna (10 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Litterära begrepp", kolumner: ["Begrepp", "Fråga till texten"], rader: [["Berättarperspektiv", "Vem berättar – och vad vet berättaren?"], ["Kronologi och tillbakablick", "I vilken ordning berättas händelserna?"], ["Parallellhandling", "Följer vi flera handlingar samtidigt?"], ["Gestaltning", "Hur visas känslor utan att de sägs rakt ut?"], ["Liknelse och metafor", "Vilka bilder används – och vad gör de?"], ["Tema", "Vad handlar texten egentligen om?"]] },
        { typ: "diskutera", fragor: ["Vad handlar novellen egentligen om – under ytan?", "Vilken vändpunkt finns i novellen?", "Varför tror du att författaren valde det här berättarperspektivet?"] },
      ],
      elevtext: [{ rubrik: "Novellen", stycken: ["En novell är en kort berättelse med få personer och ofta en tydlig vändpunkt. Den börjar ofta mitt i handlingen och slutar öppet, så att läsaren får fundera vidare.", "För att analysera en text använder vi litterära begrepp. De hjälper oss att se hur texten är byggd och hur den påverkar oss: vem som berättar, i vilken ordning, med vilka bilder och vad den egentligen handlar om."] }],
      uppgifter: ["Analysera novellen med tre av begreppen. Ge ett citat som exempel för varje.", "Formulera novellens tema i en mening.", "Skriv en egen kort novell med en tydlig vändpunkt."],
      lankar: [["Litterära begrepp", "litteraturbegrepp"]],
    },
    {
      titel: "Att läsa en hel roman – boksamtal",
      mal: "Eleverna kan föra boksamtal om en ungdomsroman: personer, relationer, livsvillkor och identitet.",
      upplagg: ["Introducera romanen och läsplanen – eleverna läser hemma och på lektionstid under några veckor.", "Läslogg: efter varje avsnitt skriver eleverna en reflektion.", "Boksamtal i grupp vid tre tillfällen med frågorna på bilden."],
      bilder: [
        { typ: "diskutera", fragor: ["Vilken person förstår du bäst – och vilken minst? Varför?", "Hur förändras huvudpersonen under berättelsen?", "Vilka livsvillkor skildras – och hur skiljer de sig från dina?", "Vilka relationer är viktiga i boken?"] },
        { typ: "punkter", rubrik: "Läslogg", punkter: ["Vad hände i avsnittet? (kort)", "Ett citat som fastnade – och varför.", "En fråga till boken.", "Hur kändes det att läsa?"] },
      ],
      elevtext: [{ rubrik: "Läsa en hel roman", stycken: ["När man läser en hel roman lever man med personerna länge. Det gör att man kan följa hur de förändras och hur relationerna utvecklas. En läslogg hjälper dig att minnas och att förbereda boksamtalen.", "I ett boksamtal finns det sällan ett rätt svar. Det viktiga är att du stöder dina tankar med exempel ur texten och lyssnar på andras tolkningar."] }],
      uppgifter: ["Skriv i läsloggen efter varje läsavsnitt.", "Förbered två frågor till boksamtalet.", "Skriv en reflektion efter boken: Vad säger romanen om att vara ung?"],
    },
    {
      titel: "Lyrik",
      mal: "Eleverna kan analysera en dikt: bildspråk, form, klang och stämning.",
      upplagg: ["Läs två dikter högt – en äldre och en modern (10 min).", "Genomgång av lyrikens verktyg (10 min).", "Analys i par (15 min) och egen dikt (10 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Lyrikens verktyg", kolumner: ["Verktyg", "Exempel"], rader: [["Bildspråk", "liknelse (som), metafor, besjälning"], ["Klang", "rim, allitteration, rytm"], ["Form", "strofer, radbrytningar, fri vers"], ["Stämning", "vilken känsla dikten väcker"]] },
        { typ: "fraga", fraga: { fraga: "Vad är fri vers?", alternativ: ["dikt utan fast rim och versmått", "en dikt som är gratis", "en dikt med rim i varje rad"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Att läsa dikter", stycken: ["En dikt säger mycket med få ord. Läs den flera gånger, gärna högt. Lägg märke till bilderna (liknelser och metaforer), ljudet (rim, rytm, allitteration) och formen (radbrytningar och strofer). Fråga dig vilken stämning dikten skapar och vad den kan betyda.", "Äldre dikter har ofta rim och fast versmått. Mycket modern lyrik är skriven på fri vers."] }],
      uppgifter: ["Analysera en dikt: bildspråk, klang, form och stämning.", "Skriv en egen dikt med minst en metafor."],
    },
    {
      titel: "Dramatik – från Shakespeare till i dag",
      mal: "Eleverna kan känna igen dramatikens drag och läsa en scen med förståelse.",
      upplagg: ["Genomgång: dramatikens drag (10 min).", "Läs en scen högt med fördelade roller, t.ex. ur Romeo och Julia eller Ett dockhem (20 min).", "Diskutera konflikten och hur scenen kan spelas (15 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Dramatik", punkter: ["Skriven för att spelas: repliker och scenanvisningar.", "Handlingen drivs av konflikt.", "William Shakespeare (England, omkring 1600): Romeo och Julia, Hamlet.", "Henrik Ibsen (Norge): Ett dockhem (1879). August Strindberg (Sverige): Fröken Julie (1888)."] },
        { typ: "diskutera", fragor: ["Vad är konflikten i scenen?", "Hur skulle du regissera scenen i dag?"] },
      ],
      elevtext: [{ rubrik: "Texter för scenen", stycken: ["Dramatik är skriven för att spelas. Texten består av repliker – det personerna säger – och scenanvisningar som beskriver hur och var. Handlingen drivs framåt av konflikter.", "Några av världens mest spelade pjäser är William Shakespeares Romeo och Julia och Hamlet, skrivna i England omkring år 1600. I Norden skrev Henrik Ibsen Ett dockhem (1879) och August Strindberg Fröken Julie (1888). Båda pjäserna väckte debatt om kvinnors och klassers villkor."] }],
      uppgifter: ["Läs scenen med fördelade roller.", "Skriv vad konflikten handlar om och hur den kan spegla sin tid.", "Skriv en kort egen scen med repliker och scenanvisningar."],
    },
    {
      titel: "Klassiker i sitt sammanhang",
      mal: "Eleverna kan relatera ett klassiskt verk till författaren och den tid det skrevs i.",
      upplagg: ["Genomgång med tidslinjen (15 min).", "Grupperna läser var sitt utdrag ur en klassiker och tar reda på mer om författaren och tiden (25 min).", "Kort redovisning och repetition inför provet."],
      bilder: [
        { typ: "jamfor", rubrik: "Några klassiker", kolumner: ["Verk", "Författare och tid"], rader: [["Röda rummet", "August Strindberg, 1879 – realism, samhällskritik"], ["Nils Holgerssons underbara resa", "Selma Lagerlöf, 1906–07 – Nobelpris 1909"], ["Kallocain", "Karin Boye, 1940 – dystopi i skuggan av diktaturerna"], ["Utvandrarna", "Vilhelm Moberg, 1949 – emigrationen till Amerika"], ["Romeo och Julia", "William Shakespeare, omkring 1595"]] },
        { typ: "punkter", rubrik: "Relatera texten till sin tid", punkter: ["När och var skrevs verket?", "Vad hände i samhället då?", "Vad ville författaren säga?", "Vad säger verket till oss i dag?"] },
      ],
      elevtext: [{ rubrik: "Klassiker", stycken: ["En klassiker är ett verk som har lästs och påverkat läsare under lång tid. För att förstå en klassiker hjälper det att veta när den skrevs och vad som hände i samhället då.", "Karin Boyes Kallocain (1940) skildrar en framtida diktatur där staten övervakar människors tankar. Romanen skrevs när diktaturerna växte i Europa. Vilhelm Mobergs Utvandrarna (1949) handlar om de svenskar som emigrerade till Amerika på 1800-talet."] }],
      uppgifter: ["Läs utdraget ur klassikern. Ta reda på tre saker om författaren och tiden.", "Skriv en litterär analys (1–2 sidor): Vad handlar texten om, hur är den skriven och hur speglar den sin tid? Använd citat."],
      lankar: [["Litteraturhistoria", "litteraturhistoria"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vad kännetecknar en novell?", alternativ: ["kort, få personer, ofta en vändpunkt", "mycket lång med många personer", "skriven för scenen"], ratt: 0 },
      { fraga: "Vad är parallellhandling?", alternativ: ["två handlingar som berättas omväxlande", "en tillbakablick", "en dialog"], ratt: 0 },
      { fraga: "Vad betyder gestaltning?", alternativ: ["att visa i stället för att berätta", "att rita bilder", "att skriva rim"], ratt: 0 },
      { fraga: "Vad består dramatik av?", alternativ: ["repliker och scenanvisningar", "bara beskrivningar", "rim och strofer"], ratt: 0 },
      { fraga: "Vem skrev Fröken Julie?", alternativ: ["August Strindberg", "Henrik Ibsen", "Selma Lagerlöf"], ratt: 0 },
      { fraga: "Vem skrev Kallocain?", alternativ: ["Karin Boye", "Vilhelm Moberg", "Astrid Lindgren"], ratt: 0 },
      { fraga: "Vad är fri vers?", alternativ: ["lyrik utan fast rim och versmått", "en novell", "en pjäs"], ratt: 0 },
      { fraga: "Vad är ett tema?", alternativ: ["det övergripande ämnet eller budskapet", "huvudpersonens namn", "miljön"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Analysera texten som läraren ger dig med minst tre litterära begrepp. Använd citat.", bedomning: ["Minst tre begrepp används korrekt", "Citat som stöd", "Resonerar om hur greppen påverkar läsaren"] },
      { fraga: "Välj ett verk ni har läst och relatera det till författaren och tiden det skrevs i.", bedomning: ["Korrekta fakta om författare och tid", "Kopplar verket till tiden", "Resonerar om vad verket säger i dag"] },
      { fraga: "Vad säger en av texterna ni har läst om livsvillkor, identitet eller relationer?", bedomning: ["Tydlig tolkning", "Stöd i texten", "Egen reflektion"] },
    ],
  },
  tips: ["Välj romanen efter gruppen – gärna med skolbibliotekarien. Läs gärna en nordisk text för att koppla till arbetsområdet om Nordens språk.", "Arbetsområdet kan delas upp över årskurs 8–10: novell och lyrik tidigt, klassiker och dramatik senare.", "Den litterära analysen i lektion 5 kan bedömas som skriftlig framställning."],
};
