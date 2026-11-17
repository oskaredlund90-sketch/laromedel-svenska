import type { Arbetsomrade } from "../typer";

export const RETORIK_GY: Arbetsomrade = {
  id: "retorik-och-argumentation",
  titel: "Retorik och argumentation",
  stadie: "gymnasiet",
  arskurs: "1",
  ingress:
    "Från Aristoteles till sociala medier: eleverna lär sig retorikens arbetsprocess, analyserar hur andra övertygar och håller ett eget argumenterande tal – och lär sig känna igen härskartekniker och ohederlig argumentation.",
  kursplan: [
    "Muntlig framställning inför publik: planering, disposition, framförande och anpassning till syfte, mottagare och situation.",
    "Retorikens arbetsprocess och centrala begrepp: ethos, pathos och logos.",
    "Argumentationsanalys: tes, argument, motargument och hållbarhet.",
    "Att granska hur språket används för att påverka i olika medier.",
    "Att ge och ta emot respons på muntliga framföranden.",
  ],
  mal: [
    "Använda retorikens arbetsprocess för att planera och hålla ett argumenterande tal.",
    "Förklara och känna igen ethos, pathos och logos.",
    "Analysera en argumenterande text: tes, argument, motargument och argumentens hållbarhet och relevans.",
    "Känna igen retoriska stilgrepp och ohederliga argumentationstekniker, t.ex. härskartekniker.",
    "Ge och ta emot konstruktiv respons på ett tal.",
  ],
  begrepp: [
    ["retorik", "läran om hur man talar och skriver för att övertyga"],
    ["ethos", "talarens trovärdighet och karaktär"],
    ["pathos", "att väcka känslor hos publiken"],
    ["logos", "sakliga skäl: fakta, logik och exempel"],
    ["intellectio", "att analysera situationen: syfte, publik och tid"],
    ["inventio", "att hitta stoff och argument"],
    ["dispositio", "att ordna stoffet: inledning, bakgrund, tes, argument, avslutning"],
    ["elocutio", "att formulera sig: ordval och stilgrepp"],
    ["memoria och actio", "att minnas talet och framföra det med röst och kroppsspråk"],
    ["tes", "det påstående som talaren vill få publiken att hålla med om"],
    ["härskarteknik", "sätt att trycka ned andra i ett samtal, t.ex. förlöjligande eller osynliggörande"],
  ],
  lankar: [
    ["Retorik – elevsidan", "retorik"],
    ["Tala, lyssna, samtala", "tala-lyssna"],
    ["Stilistik i grammatikboken", "grammatik/stilistik"],
  ],
  fortest: [
    { fraga: "Vad betyder retorik?", alternativ: ["läran om hur man övertygar i tal och skrift", "läran om grammatik", "läran om litteraturhistoria"], ratt: 0 },
    { fraga: "Vad är en tes?", alternativ: ["det påstående man vill övertyga om", "ett argument mot", "en avslutning"], ratt: 0 },
    { fraga: "Vilket av de tre övertygelsemedlen handlar om känslor?", alternativ: ["ethos", "pathos", "logos"], ratt: 1 },
    { fraga: "Vad är en retorisk fråga?", alternativ: ["en fråga som inte väntar på svar", "en fråga till publiken som ska besvaras", "en fråga i en intervju"], ratt: 0 },
    { fraga: "Vad ska en inledning i ett tal göra?", alternativ: ["väcka intresse och presentera ämnet", "upprepa alla argument", "bemöta motargumenten"], ratt: 0 },
    { fraga: "Vad är ett motargument?", alternativ: ["ett argument mot den egna tesen", "ett starkt argument för tesen", "ett annat ord för tes"], ratt: 0 },
    { fraga: "Vem förknippas med den klassiska retoriken och begreppen ethos, pathos och logos?", alternativ: ["Aristoteles", "Shakespeare", "Strindberg"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Vad är retorik?",
      mal: "Eleverna kan förklara vad retorik är och känna igen ethos, pathos och logos.",
      upplagg: ["Förtestet (10 min).", "Visa ett kort reklamklipp eller tal och fråga: Hur försöker de övertyga? (10 min)", "Genomgång av ethos, pathos och logos (15 min).", "Eleverna analyserar en reklam eller ett inlägg två och två (15 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Retorik", punkter: [
          "Retorik är konsten att övertyga – i tal och skrift. Den utvecklades i antikens Grekland och Rom.",
          "Aristoteles beskrev tre sätt att övertyga: ethos, pathos och logos.",
          "Retorik finns överallt: i reklam, politik, nyheter, sociala medier och i klassrummet.",
        ] },
        { typ: "jamfor", rubrik: "Tre sätt att övertyga", kolumner: ["Begrepp", "Talaren …"], rader: [
          ["Ethos", "visar att hen är trovärdig, kunnig och har goda avsikter"],
          ["Pathos", "väcker känslor: glädje, rädsla, medkänsla, ilska"],
          ["Logos", "ger sakliga skäl: fakta, statistik, exempel och logiska slutsatser"],
        ] },
        { typ: "fraga", fraga: { fraga: "”Som läkare i 20 år kan jag säga att …” – vilket övertygelsemedel används?", alternativ: ["ethos", "pathos", "logos"], ratt: 0, forklaring: "Talaren bygger trovärdighet genom sin erfarenhet." } },
        { typ: "fraga", fraga: { fraga: "”Tänk dig att det är ditt barn som står där i regnet.” – vilket övertygelsemedel används?", alternativ: ["ethos", "pathos", "logos"], ratt: 1 } },
      ],
      elevtext: [
        { rubrik: "Konsten att övertyga", stycken: [
          "Retorik betyder ungefär talekonst. I antikens Grekland och Rom var det en viktig färdighet för den som ville påverka i domstol, politik och samhälle. Filosofen Aristoteles (300-talet f.Kr.) beskrev tre sätt som en talare kan övertyga på.",
          "Ethos handlar om talarens trovärdighet. Vi lyssnar mer på någon som verkar kunnig, ärlig och välvillig. Pathos handlar om att väcka känslor hos publiken. Logos handlar om sakliga skäl: fakta, statistik och logiska resonemang.",
          "En bra talare använder alla tre. Ett tal med bara fakta kan bli torrt, och ett tal med bara känslor kan uppfattas som manipulativt.",
        ] },
      ],
      uppgifter: [
        "Välj en reklam, ett politiskt inlägg eller ett tal. Ge ett exempel på ethos, ett på pathos och ett på logos.",
        "Vilket övertygelsemedel tror du fungerar bäst på dig? Motivera.",
        "Skriv tre meningar som argumenterar för samma sak med ethos, pathos respektive logos.",
      ],
      lankar: [["Retorik – elevsidan", "retorik"]],
    },
    {
      titel: "Retorikens arbetsprocess",
      mal: "Eleverna kan använda retorikens arbetsprocess och den klassiska dispositionen för att planera ett tal.",
      upplagg: ["Genomgång av arbetsprocessen och dispositionen (15 min).", "Eleverna väljer ämne och tes för sitt tal och börjar på inventio och dispositio (30 min).", "Kamratrespons på teserna sist."],
      bilder: [
        { typ: "jamfor", rubrik: "Arbetsprocessen", kolumner: ["Steg", "Vad du gör"], rader: [
          ["Intellectio", "förstår situationen: syfte, publik och tid"],
          ["Inventio", "hittar stoff och argument"],
          ["Dispositio", "ordnar stoffet"],
          ["Elocutio", "formulerar: ordval och stilgrepp"],
          ["Memoria", "lär dig talet med stödord"],
          ["Actio", "framför: röst, tempo, blick och kroppsspråk"],
        ] },
        { typ: "jamfor", rubrik: "Den klassiska dispositionen", kolumner: ["Del", "Innehåll"], rader: [
          ["Inledning (exordium)", "väck intresse och skapa kontakt"],
          ["Bakgrund (narratio)", "beskriv läget eller problemet"],
          ["Tes (propositio)", "säg vad du vill"],
          ["Argumentation (argumentatio)", "argument för (confirmatio) – och bemöt motargument (refutatio)"],
          ["Avslutning (peroratio)", "sammanfatta och uppmana"],
        ] },
      ],
      elevtext: [
        { rubrik: "Från idé till framförande", stycken: [
          "Den klassiska retoriken delar in arbetet med ett tal i steg. Först analyserar du situationen (intellectio): vem ska lyssna, varför och hur lång tid har du? Sedan letar du stoff och argument (inventio) och ordnar dem (dispositio). Därefter formulerar du talet (elocutio), lär dig det (memoria) och framför det (actio).",
          "En vanlig disposition är: inledning, bakgrund, tes, argumentation och avslutning. Placera gärna ditt starkaste argument sist, och bemöt minst ett motargument – det stärker ditt ethos, eftersom publiken ser att du har tänkt igenom saken.",
        ] },
      ],
      uppgifter: [
        "Välj ett ämne och formulera en tydlig tes.",
        "Skriv tre argument för din tes och ett motargument som du bemöter.",
        "Gör en disposition med de fem delarna.",
      ],
    },
    {
      titel: "Stilgrepp och framförande",
      mal: "Eleverna kan använda retoriska stilgrepp och arbeta med röst och kroppsspråk.",
      upplagg: ["Genomgång av stilgrepp (15 min) – visa exempel ur kända tal.", "Eleverna skriver inledningen till sitt tal med minst två stilgrepp (20 min).", "Övning i par: framför inledningen och ge respons på röst, tempo och blick (15 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Retoriska stilgrepp", kolumner: ["Grepp", "Exempel"], rader: [
          ["Anafor", "Vi kämpar för klimatet. Vi kämpar för framtiden."],
          ["Tretal", "Snabbt, enkelt och billigt."],
          ["Retorisk fråga", "Vem vill inte leva i fred?"],
          ["Kontrast (antites)", "Kostnaden är liten, vinsten enorm."],
          ["Liknelse och metafor", "Skolan är en trädgård där …"],
        ] },
        { typ: "punkter", rubrik: "Actio – framförandet", punkter: ["Tala långsammare än du tror och gör pauser.", "Titta på publiken – inte i manuset.", "Använd stödord i stället för att läsa innantill.", "Stå stadigt och låt händerna förstärka det du säger."] },
        { typ: "fraga", fraga: { fraga: "”Kostnaden är liten, vinsten enorm.” Vilket stilgrepp?", alternativ: ["anafor", "kontrast", "tretal"], ratt: 1 } },
      ],
      elevtext: [
        { rubrik: "Att formulera och framföra", stycken: [
          "Stilgrepp gör ett tal lättare att minnas och mer slagkraftigt. Anaforen upprepar ord i början av meningar, tretalet ger rytm och den retoriska frågan får publiken att tänka. Kontraster ställer två saker mot varandra.",
          "Hur du framför talet är minst lika viktigt som vad du säger. Tala lugnt, gör pauser, titta på publiken och använd stödord. Övning gör att du kan fokusera på publiken i stället för på manuset.",
        ] },
      ],
      uppgifter: [
        "Skriv inledningen till ditt tal med minst två stilgrepp. Markera dem.",
        "Skriv stödord för hela talet på högst ett kort.",
        "Öva talet för en kamrat och be om respons på tempo och blickkontakt.",
      ],
      lankar: [["Stilistik i grammatikboken", "grammatik/stilistik"]],
    },
    {
      titel: "Argumentationsanalys och härskartekniker",
      mal: "Eleverna kan analysera en argumenterande text och känna igen ohederliga argumentationstekniker.",
      upplagg: ["Genomgång (15 min).", "Eleverna analyserar en debattartikel med modellen i elevmaterialet (25 min).", "Diskussion om härskartekniker och hur man bemöter dem (10 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Analysera en argumentation", punkter: ["Vilken är tesen?", "Vilka argument används – och är de hållbara (sanna) och relevanta (hör de till saken)?", "Bemöts motargument?", "Vilka övertygelsemedel och stilgrepp används?", "Vem är avsändaren och vad är syftet?"] },
        { typ: "jamfor", rubrik: "Härskartekniker (Berit Ås)", kolumner: ["Teknik", "Exempel"], rader: [
          ["Osynliggörande", "någon blir avbruten eller ignorerad"],
          ["Förlöjligande", "någons åsikt görs till ett skämt"],
          ["Undanhållande av information", "någon utesluts från viktig information"],
          ["Dubbelbestraffning", "hur man än gör blir det fel"],
          ["Påförande av skuld och skam", "någon får skämmas eller får skulden för något hen inte rår för"],
        ] },
        { typ: "fraga", fraga: { fraga: "Ett argument är relevant om det …", alternativ: ["har med tesen att göra", "är långt", "väcker starka känslor"], ratt: 0 } },
      ],
      elevtext: [
        { rubrik: "Att granska argument", stycken: [
          "När du analyserar en argumenterande text letar du först efter tesen. Sedan prövar du argumenten: är de hållbara, alltså sanna och väl underbyggda? Och är de relevanta, alltså har de med tesen att göra? Ett starkt argument är både hållbart och relevant.",
          "Ohederlig argumentation kan vara att angripa personen i stället för sakfrågan, att förvränga motståndarens åsikt (halmgubbe) eller att använda härskartekniker. Socialpsykologen Berit Ås beskrev fem härskartekniker: osynliggörande, förlöjligande, undanhållande av information, dubbelbestraffning samt påförande av skuld och skam.",
        ] },
      ],
      uppgifter: [
        "Analysera en debattartikel: tes, argument, motargument, övertygelsemedel och stilgrepp.",
        "Bedöm hållbarhet och relevans för två av argumenten.",
        "Ge ett exempel på en härskarteknik och hur man kan bemöta den.",
      ],
    },
    {
      titel: "Hålla tal och ge respons",
      mal: "Eleverna kan hålla ett argumenterande tal och ge konstruktiv respons.",
      upplagg: ["Eleverna håller sina tal (2–4 min) i grupper eller helklass.", "Lyssnarna ger respons med responsmallen.", "Avsluta med att eleverna skriver en kort självvärdering."],
      bilder: [
        { typ: "uppgift", rubrik: "Responsmall", text: "Ge respons på talet:", punkter: ["Var tesen tydlig?", "Vilket argument var starkast – och varför?", "Hur användes ethos, pathos och logos?", "Hur fungerade rösten, tempot och blicken?", "Ett tips till nästa gång."] },
        { typ: "punkter", rubrik: "Bra respons", punkter: ["Börja med något som fungerade.", "Var konkret: säg vad, inte bara att det var bra.", "Ge ett tips som går att använda nästa gång."] },
      ],
      elevtext: [{ rubrik: "Att ge och ta emot respons", stycken: ["Bra respons är konkret och vänlig. Börja med något som fungerade, ge sedan ett tips som talaren kan använda nästa gång. Som talare lyssnar du på responsen utan att försvara dig – välj sedan vad du tar med dig."] }],
      uppgifter: ["Håll ditt tal.", "Ge skriftlig respons på två kamraters tal med responsmallen.", "Skriv en självvärdering: Vad fungerade? Vad gör du annorlunda nästa gång?"],
      lankar: [["Tala, lyssna, samtala", "tala-lyssna"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vad betyder logos?", alternativ: ["sakliga skäl och logik", "talarens trovärdighet", "känslor"], ratt: 0 },
      { fraga: "Vilket steg i arbetsprocessen handlar om att ordna stoffet?", alternativ: ["inventio", "dispositio", "actio"], ratt: 1 },
      { fraga: "Vad är actio?", alternativ: ["framförandet", "att hitta argument", "att formulera sig"], ratt: 0 },
      { fraga: "Var placeras tesen i den klassiska dispositionen?", alternativ: ["efter inledning och bakgrund", "allra sist", "den nämns aldrig"], ratt: 0 },
      { fraga: "Varför bör man bemöta motargument?", alternativ: ["det visar att man tänkt igenom saken och stärker trovärdigheten", "för att talet ska bli längre", "det bör man inte"], ratt: 0 },
      { fraga: "”Vi vill ha trygghet. Vi vill ha frihet. Vi vill ha framtid.” Vilket stilgrepp?", alternativ: ["anafor", "kontrast", "metafor"], ratt: 0 },
      { fraga: "Ett argument är hållbart om det …", alternativ: ["är sant och väl underbyggt", "är roligt", "är kort"], ratt: 0 },
      { fraga: "Vad är ett personangrepp i en debatt?", alternativ: ["att angripa personen i stället för sakfrågan", "att ge sakliga motargument", "att citera en expert"], ratt: 0 },
      { fraga: "Vilken är en av Berit Ås härskartekniker?", alternativ: ["förlöjligande", "tretal", "inventio"], ratt: 0 },
      { fraga: "Vad är en halmgubbe?", alternativ: ["att förvränga motståndarens åsikt och angripa den förvrängda versionen", "ett starkt argument", "en retorisk fråga"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Analysera debattinlägget som läraren ger dig: tes, två argument, övertygelsemedel och ett stilgrepp. Bedöm argumentens hållbarhet och relevans.", bedomning: ["Tesen identifieras korrekt", "Argument bedöms med hållbarhet och relevans", "Övertygelsemedel och stilgrepp med citat ur texten", "Välgrundad helhetsbedömning"] },
      { fraga: "Förklara hur ethos, pathos och logos samverkar i ett bra tal. Ge exempel.", bedomning: ["Korrekta förklaringar", "Ett exempel per begrepp", "Resonerar om balansen mellan dem"] },
      { fraga: "Beskriv två härskartekniker och hur man kan bemöta dem.", bedomning: ["Två tekniker förklaras korrekt", "Konkreta motstrategier", "Exempel från verkliga situationer"] },
    ],
  },
  tips: [
    "Talet i lektion 5 kan bedömas som muntlig framställning – använd responsmallen som stöd för bedömningen.",
    "Låt eleverna välja ämnen som engagerar dem, men tesen ska gå att argumentera för och emot.",
    "Elever med talängslan kan börja i små grupper eller spela in talet.",
  ],
};

export const SPRAKSOCIOLOGI_GY: Arbetsomrade = {
  id: "sprak-identitet-och-makt",
  titel: "Språk, identitet och makt – språksociologi",
  stadie: "gymnasiet",
  arskurs: "2",
  ingress:
    "Hur hänger språk ihop med vilka vi är och vilken makt vi har? Eleverna fördjupar sig i språklig variation, attityder och normer, flerspråkighet, minoritetsspråk och engelskans ställning – och skriver en utredande text om en språksociologisk fråga.",
  kursplan: [
    "Språklig variation: dialekter, sociolekter, etnolekter och hur språket varierar med situation och sammanhang.",
    "Språkets betydelse för identitet och för makt och inflytande i samhället.",
    "Attityder till olika språk och språkvarianter.",
    "Flerspråkighet, de nationella minoritetsspråken och svenskans ställning i förhållande till engelskan.",
    "Att skriva utredande text med källhänvisningar.",
  ],
  mal: [
    "Använda språksociologiska begrepp: sociolekt, dialekt, etnolekt, register, kodväxling och domänförlust.",
    "Resonera om hur språk hänger ihop med identitet och makt.",
    "Analysera attityder till språkvarianter och vad de bygger på.",
    "Redogöra för minoritetsspråkens ställning och engelskans inflytande.",
    "Skriva en utredande text om en språksociologisk fråga med källor.",
  ],
  begrepp: [
    ["språksociologi", "studiet av hur språk och samhälle påverkar varandra"],
    ["sociolekt", "språkvariant som hör till en social grupp"],
    ["etnolekt", "språkvariant som förknippas med en etnisk grupp; om ungdomsspråk i flerspråkiga miljöer används ofta termen multietniskt ungdomsspråk"],
    ["lånord", "ord som lånats in från ett annat språk"],
    ["register", "stilnivå som väljs efter situation"],
    ["kodväxling", "växling mellan språk eller varianter i samma samtal"],
    ["prestige", "den status en språkvariant har i samhället"],
    ["språkattityd", "värderingar om ett språk eller en språkvariant och dess talare"],
    ["domänförlust", "när ett språk slutar användas inom ett område, t.ex. forskning, och ersätts av ett annat"],
    ["språkbyte", "när en grupp går över till ett annat språk och slutar föra sitt eget vidare"],
    ["revitalisering", "arbete för att väcka liv i ett hotat språk"],
  ],
  lankar: [
    ["Nordiska språk och minoritetsspråk", "nordiska-sprak"],
    ["Språkhistoria", "sprakhistoria"],
    ["Skrivverkstad", "skrivverkstad"],
  ],
  fortest: [
    { fraga: "Vad studerar språksociologi?", alternativ: ["hur språk och samhälle påverkar varandra", "ords böjning", "litteraturhistoria"], ratt: 0 },
    { fraga: "Vad är en sociolekt?", alternativ: ["språkvariant som hör till en social grupp", "språkvariant från ett visst område", "ett utdött språk"], ratt: 0 },
    { fraga: "Vad är kodväxling?", alternativ: ["att växla mellan språk eller varianter i ett samtal", "att byta lösenord", "att översätta en text"], ratt: 0 },
    { fraga: "Vilket språk är INTE ett nationellt minoritetsspråk i Sverige?", alternativ: ["meänkieli", "jiddisch", "arabiska"], ratt: 2 },
    { fraga: "Vad menas med domänförlust?", alternativ: ["att ett språk slutar användas inom ett område", "att ett ord byter betydelse", "att en dialekt försvinner"], ratt: 0 },
    { fraga: "Vad är en språkattityd?", alternativ: ["en värdering om ett språk och dess talare", "en grammatisk regel", "en stavningsregel"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Språklig variation – begreppen",
      mal: "Eleverna kan använda de centrala begreppen för språklig variation.",
      upplagg: ["Förtestet (10 min).", "Genomgång av begreppen (20 min).", "Eleverna kartlägger sitt eget språkbruk i olika situationer (20 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Variation efter …", kolumner: ["Faktor", "Begrepp"], rader: [
          ["Plats", "dialekt, regionalt standardspråk"],
          ["Social grupp", "sociolekt (t.ex. yrke, ålder, klass)"],
          ["Flerspråkig miljö", "multietniskt ungdomsspråk"],
          ["Situation", "register, stilnivå"],
          ["Individ", "idiolekt – varje persons eget språk"],
        ] },
        { typ: "diskutera", fragor: ["Hur pratar du i skolan, hemma och med kompisar?", "När byter du register utan att tänka på det?"] },
      ],
      elevtext: [{ rubrik: "Alla talar på flera sätt", stycken: [
        "Språket varierar med var vi kommer ifrån (dialekt), vilka grupper vi tillhör (sociolekt) och vilken situation vi befinner oss i (register). Varje person har dessutom sitt eget sätt att tala, en idiolekt.",
        "I flerspråkiga stadsmiljöer har nya varianter av svenska vuxit fram bland unga. Forskare kallar dem ofta multietniskt ungdomsspråk. De har egna ord, ofta från andra språk, och ett eget prosodiskt mönster.",
        "Den som behärskar flera varianter kan växla mellan dem – kodväxla – efter situation och samtalspartner. Det är en språklig resurs.",
      ] }],
      uppgifter: ["Gör en språkkarta: hur talar och skriver du i fem olika situationer? Ge exempel.", "Förklara begreppen sociolekt, etnolekt, register och idiolekt med egna exempel.", "Spela in (med tillåtelse) eller återge ett vardagssamtal. Vilka drag visar situationen och relationen?"],
    },
    {
      titel: "Attityder, normer och prestige",
      mal: "Eleverna kan analysera språkattityder och resonera om vad de bygger på.",
      upplagg: ["Matched guise-övning: spela upp samma text läst av samma person med olika uttal och låt eleverna bedöma ”talarna” anonymt (15 min).", "Genomgång (15 min).", "Diskussion och skrivuppgift (20 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Attityder till språk", punkter: [
          "Vi bedömer ofta människor efter hur de talar: intelligens, vänlighet, pålitlighet.",
          "Attityderna säger mer om sociala hierarkier än om språket – alla varianter har regler.",
          "Standardspråket har hög prestige i skrift och offentliga sammanhang.",
          "Varianter kan ha dold prestige: status inom en grupp, trots låg status utåt.",
        ] },
        { typ: "diskutera", fragor: ["Varför har vissa dialekter högre status än andra?", "Kan språkattityder leda till diskriminering, t.ex. på arbetsmarknaden?"] },
      ],
      elevtext: [{ rubrik: "Språkattityder", stycken: [
        "Undersökningar visar att människor tillskriver talare egenskaper utifrån hur de låter. I så kallade matched guise-test läser samma person en text med olika uttal, och lyssnarna bedömer ändå ”talarna” olika.",
        "Standardspråket har hög prestige i skolan och offentligheten. Men en språkvariant kan också ha dold prestige: att tala som sin grupp ger tillhörighet och status inom gruppen.",
        "Språkliga fördomar kan få konsekvenser, till exempel vid anställningar. Därför är det viktigt att känna igen dem.",
      ] }],
      uppgifter: ["Redogör för resultatet av klassens matched guise-övning. Vad kan det bero på?", "Förklara skillnaden mellan öppen och dold prestige med exempel.", "Skriv ett resonerande stycke: Hur kan språkattityder påverka människors möjligheter?"],
    },
    {
      titel: "Språk och makt",
      mal: "Eleverna kan resonera om hur språk ger och tar makt i samhället.",
      upplagg: ["Genomgång (15 min).", "Eleverna jämför en myndighetstext före och efter klarspråksbearbetning – eller skriver om en krånglig text (20 min).", "Diskussion om ord som formar verkligheten (15 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Språk och makt", punkter: [
          "Den som behärskar samhällets normerade språk har lättare att delta, påverka och få sin röst hörd.",
          "Språklagen kräver att språket i offentlig verksamhet är vårdat, enkelt och begripligt – klarspråk.",
          "Ordval formar hur vi ser på saker: ”flyktingström”, ”skattelättnad”, ”kostnad” eller ”investering”.",
          "Den som får definiera begreppen i en debatt har ofta ett övertag.",
        ] },
        { typ: "fraga", fraga: { fraga: "Vad är klarspråk?", alternativ: ["vårdat, enkelt och begripligt språk i offentlig verksamhet", "talspråk i skrift", "språk utan lånord"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Ord som formar", stycken: [
        "Språk är makt på flera sätt. Den som kan uttrycka sig i det normerade språket kan delta i demokratin, förstå sina rättigheter och påverka beslut. Därför kräver språklagen klarspråk i offentlig verksamhet.",
        "Ordval påverkar hur vi uppfattar verkligheten. Den som kallar en skattesänkning för ”skattelättnad” eller en utgift för ”investering” ramar in frågan på ett visst sätt. I politik och media är kampen om orden ofta en kamp om hur problemen ska förstås.",
      ] }],
      uppgifter: ["Skriv om ett krångligt myndighetsstycke till klarspråk. Förklara dina ändringar.", "Hitta två ord i en aktuell debatt som ramar in frågan. Vilka alternativ finns – och vilken bild ger de?", "Resonera: Vem har makten över språket i dag?"],
    },
    {
      titel: "Flerspråkighet, minoritetsspråk och engelska",
      mal: "Eleverna kan redogöra för minoritetsspråkens ställning, språkbyte och revitalisering samt engelskans inflytande.",
      upplagg: ["Genomgång (20 min).", "Grupper fördjupar sig i ett minoritetsspråk eller i engelskans ställning och redovisar (25 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Språk i Sverige", punkter: [
          "Svenska är huvudspråk. Fem nationella minoritetsspråk: samiska, finska, meänkieli, romani chib och jiddisch. Svenskt teckenspråk har en särskild ställning enligt språklagen.",
          "Hundratals andra språk talas i Sverige. Barn har rätt till modersmålsundervisning under vissa förutsättningar.",
          "Under 1900-talet ledde assimileringspolitik till språkbyte i många minoritetsfamiljer. I dag pågår revitalisering.",
          "Engelskan dominerar i vissa domäner, t.ex. forskning, delar av näringslivet och populärkultur. Risken för domänförlust är en del av bakgrunden till språklagen.",
        ] },
        { typ: "fraga", fraga: { fraga: "Vad är revitalisering?", alternativ: ["arbete för att väcka liv i ett hotat språk", "att ett språk dör ut", "att låna ord från engelskan"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Ett flerspråkigt land", stycken: [
        "Sverige har alltid varit flerspråkigt. Samiska, finska och meänkieli har talats här i århundraden, och romani chib och jiddisch har också en lång historia i landet. Sedan år 2000 är de nationella minoritetsspråk.",
        "Under stora delar av 1900-talet motarbetades minoritetsspråken. Många barn fick inte tala sitt språk i skolan, och många familjer bytte till svenska. Det kallas språkbyte. I dag arbetar minoriteterna och det allmänna med att revitalisera språken.",
        "Engelskan har stark ställning inom forskning, teknik och populärkultur, och många engelska lånord kommer in i svenskan. Om svenskan slutar användas inom ett område kallas det domänförlust. Språklagen från 2009 är delvis ett svar på den oron.",
      ] }],
      uppgifter: ["Redogör för ett minoritetsspråks historia och situation i dag. Använd minst två källor.", "Förklara begreppen språkbyte, revitalisering och domänförlust.", "Resonera: Är engelskan ett hot mot svenskan? Ta ställning och motivera."],
      lankar: [["Nordiska språk och minoritetsspråk", "nordiska-sprak"]],
    },
    {
      titel: "Utredande text om en språksociologisk fråga",
      mal: "Eleverna kan skriva en utredande text med frågeställning, källor och belysning ur flera perspektiv.",
      upplagg: ["Genomgång av den utredande textens struktur (15 min).", "Eleverna väljer frågeställning och söker källor (resten av lektionen och kommande lektioner).", "Respons på disposition och källor halvvägs."],
      bilder: [
        { typ: "uppgift", rubrik: "Skrivuppgift", text: "Skriv en utredande text (2–3 sidor) om en språksociologisk fråga.", punkter: ["Exempel: Hur påverkar engelskan svenskan? Varför har vissa dialekter högre status? Hur kan minoritetsspråk revitaliseras?", "Inledning med bakgrund och frågeställning.", "Belys frågan ur flera perspektiv med stöd i minst tre källor.", "Avslutning med sammanfattning och slutsats.", "Källhänvisningar och källförteckning."] },
      ],
      elevtext: [{ rubrik: "Den utredande texten", stycken: [
        "En utredande text undersöker en fråga och belyser den ur flera perspektiv. Den har en saklig ton och stöd i källor. Strukturen är: inledning (bakgrund och frågeställning), avhandling (perspektiv och resonemang med källor) och avslutning (sammanfattning och slutsats).",
        "Skillnaden mot en argumenterande text är att du inte driver en tes från början, utan låter slutsatsen växa fram ur utredningen.",
      ] }],
      uppgifter: ["Formulera en frågeställning och skriv en disposition.", "Hitta minst tre källor och granska dem.", "Skriv den utredande texten."],
      lankar: [["Skrivverkstad", "skrivverkstad"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vilket begrepp beskriver språk som hör till en social grupp?", alternativ: ["sociolekt", "idiolekt", "dialekt"], ratt: 0 },
      { fraga: "Vad är en idiolekt?", alternativ: ["en persons eget sätt att tala", "ett utdött språk", "en dialekt i Finland"], ratt: 0 },
      { fraga: "Vad menas med dold prestige?", alternativ: ["status inom en grupp trots låg status utåt", "status som standardspråket har", "språk som inte skrivs"], ratt: 0 },
      { fraga: "Vad visar matched guise-test?", alternativ: ["att lyssnare bedömer talare olika beroende på uttal", "hur snabbt man läser", "vilka ord som är vanligast"], ratt: 0 },
      { fraga: "Vad kräver språklagen av språket i offentlig verksamhet?", alternativ: ["att det är vårdat, enkelt och begripligt", "att det är formellt och svårt", "att det är på engelska"], ratt: 0 },
      { fraga: "Vad är språkbyte?", alternativ: ["när en grupp går över till ett annat språk", "när ett ord byter betydelse", "kodväxling"], ratt: 0 },
      { fraga: "Vad är domänförlust?", alternativ: ["när ett språk slutar användas inom ett område", "när en dialekt dör ut", "när ett ord försvinner"], ratt: 0 },
      { fraga: "Sedan när är Sveriges nationella minoritetsspråk erkända?", alternativ: ["1950", "2000", "2015"], ratt: 1 },
      { fraga: "Hur skiljer sig en utredande text från en argumenterande?", alternativ: ["den belyser en fråga ur flera perspektiv innan den drar slutsatser", "den saknar källor", "den har alltid en tes i första meningen"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Förklara med exempel hur språk kan kopplas till makt i samhället.", bedomning: ["Minst två aspekter (t.ex. normerat språk, ordval, klarspråk)", "Konkreta exempel", "Använder språksociologiska begrepp korrekt"] },
      { fraga: "Redogör för de nationella minoritetsspråkens historia och ställning i dag.", bedomning: ["Nämner språken korrekt", "Historiskt perspektiv (assimilering, språkbyte)", "Rättigheter och revitalisering i dag"] },
      { fraga: "Resonera om engelskans inflytande på svenskan. Ta ställning.", bedomning: ["Flera perspektiv belyses", "Begreppen lånord och domänförlust används", "Väl motiverat ställningstagande"] },
    ],
  },
  tips: [
    "Matched guise-övningen i lektion 2 kräver att samma person läser med flera uttal – be en kollega som kan växla mellan uttal, eller använd olika talare och diskutera då att rösten också påverkar (verbal guise).",
    "Den utredande texten i lektion 5 kan bedömas som skriftlig framställning och kopplas till källhanteringen i arbetsområdet om vetenskapligt skrivande.",
    "Var lyhörd: elevernas egna språk och varianter är en del av deras identitet.",
  ],
};

export const VETENSKAPLIGT_GY: Arbetsomrade = {
  id: "vetenskapligt-skrivande",
  titel: "Vetenskapligt skrivande och källhantering",
  stadie: "gymnasiet",
  arskurs: "3",
  ingress:
    "En förberedelse inför gymnasiearbetet och högre studier: eleverna formulerar syfte och frågeställning, söker och granskar källor, citerar och refererar enligt ett referenssystem och skriver en vetenskapligt uppbyggd text i ett sakligt språk – och lär sig använda AI-verktyg ansvarsfullt.",
  kursplan: [
    "Vetenskapligt skrivande: syfte, frågeställning, disposition och vetenskapligt språk.",
    "Informationssökning och källkritik.",
    "Citat, referat och källhänvisningar enligt ett referenssystem.",
    "Ett ansvarsfullt förhållningssätt till källor och digitala verktyg, inklusive AI.",
  ],
  mal: [
    "Formulera ett syfte och en avgränsad frågeställning.",
    "Söka, välja och granska källor med källkritiska kriterier.",
    "Citera, referera och skriva källhänvisningar och källförteckning enligt Harvardsystemet (eller Oxford).",
    "Disponera en vetenskaplig text: inledning, metod och material, resultat, diskussion.",
    "Skriva i ett sakligt, precist och opersonligt språk.",
  ],
  begrepp: [
    ["syfte", "vad undersökningen ska åstadkomma"],
    ["frågeställning", "de konkreta frågor som texten ska besvara"],
    ["avgränsning", "vad undersökningen inte tar upp"],
    ["metod", "hur undersökningen genomförs, t.ex. litteraturstudie, enkät eller intervju"],
    ["primärkälla", "ursprunglig källa, t.ex. en studie eller ett originaldokument"],
    ["sekundärkälla", "källa som återger eller tolkar andra källor"],
    ["Harvardsystemet", "referenssystem med (Efternamn år, sida) i löptexten"],
    ["Oxfordsystemet", "referenssystem med fotnoter"],
    ["referat", "återgivning av en källas innehåll med egna ord"],
    ["plagiat", "att använda någon annans text eller idéer utan att ange källan"],
  ],
  lankar: [
    ["Skiljetecken: citat och källhänvisningar (grammatikboken)", "grammatik/skiljetecken"],
    ["Meningsbyggnad: nominal- och verbalstil (grammatikboken)", "grammatik/meningsbyggnad"],
    ["Källkritik", "kallkritik"],
    ["AI i svenskan", "ai-i-svenskan"],
  ],
  fortest: [
    { fraga: "Vad är en frågeställning?", alternativ: ["de frågor en undersökning ska besvara", "en sammanfattning", "en lista med källor"], ratt: 0 },
    { fraga: "Vad är skillnaden mellan citat och referat?", alternativ: ["citat återger exakta ord, referat återger innehållet med egna ord", "det finns ingen skillnad", "referat används bara muntligt"], ratt: 0 },
    { fraga: "Vad är en primärkälla?", alternativ: ["den ursprungliga källan", "en källa som återger andra källor", "en uppslagsbok"], ratt: 0 },
    { fraga: "Vilket språk passar i en vetenskaplig text?", alternativ: ["sakligt och precist", "personligt och känslosamt", "talspråkligt"], ratt: 0 },
    { fraga: "Vad är plagiat?", alternativ: ["att använda andras text utan att ange källa", "att citera korrekt", "att skriva en sammanfattning"], ratt: 0 },
    { fraga: "Vad kan vara ett problem med AI-chattar som källa?", alternativ: ["de kan hitta på uppgifter och källor", "de är alltid för korta", "inget"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Syfte, frågeställning och avgränsning",
      mal: "Eleverna kan formulera ett syfte och en avgränsad, undersökningsbar frågeställning.",
      upplagg: ["Förtestet (10 min).", "Genomgång med exempel på bra och dåliga frågeställningar (15 min).", "Eleverna formulerar och ger varandra respons på syfte och frågeställning (25 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Bättre frågeställningar", kolumner: ["För vid", "Avgränsad"], rader: [
          ["Hur påverkar sociala medier unga?", "Hur beskriver elever i åk 3 på gymnasiet att TikTok påverkar deras sömn?"],
          ["Vad är bra med kärnkraft?", "Vilka argument för och emot kärnkraft framförs i riksdagsdebatten 2024?"],
          ["Är engelskan farlig för svenskan?", "Hur stor andel engelska lånord finns i tre svenska modebloggar?"],
        ] },
        { typ: "punkter", rubrik: "En bra frågeställning", punkter: ["går att besvara med de källor och den tid du har", "är avgränsad i tid, plats och omfång", "är öppen – inte bara ja eller nej", "hänger ihop med syftet"] },
      ],
      elevtext: [{ rubrik: "Att formulera syfte och frågeställning", stycken: [
        "Syftet beskriver vad undersökningen ska åstadkomma: ”Syftet med denna uppsats är att undersöka …” Frågeställningen är de konkreta frågor som texten ska besvara.",
        "En bra frågeställning är avgränsad. Den går att besvara med de källor och den tid du har, och den är öppen – svaret är inte bara ja eller nej. Skriv också en avgränsning: vad undersöker du inte, och varför?",
      ] }],
      uppgifter: ["Formulera ett syfte och två frågeställningar för en undersökning du skulle vilja göra.", "Skriv en avgränsning.", "Ge respons på en kamrats frågeställning: är den avgränsad och undersökningsbar?"],
    },
    {
      titel: "Sök, välj och granska källor",
      mal: "Eleverna kan söka vetenskapliga källor och granska dem källkritiskt.",
      upplagg: ["Visa sökningar i bibliotekets databaser och i en vetenskaplig sökmotor – gärna tillsammans med skolbibliotekarien (20 min).", "Eleverna söker och granskar tre källor till sin frågeställning (30 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Källkritiska kriterier", kolumner: ["Kriterium", "Fråga"], rader: [
          ["Äkthet", "Är källan vad den utger sig för att vara?"],
          ["Tid", "När skapades den – och är uppgifterna aktuella?"],
          ["Beroende", "Är det en primärkälla, eller bygger den på andra?"],
          ["Tendens", "Har avsändaren ett intresse av att framställa saken på ett visst sätt?"],
        ] },
        { typ: "punkter", rubrik: "Var hittar jag?", punkter: ["Skolbibliotekets databaser och uppslagsverk", "Vetenskapliga artiklar (granskade av andra forskare)", "Myndigheter och officiell statistik", "Använd lateral läsning för att kontrollera avsändare"] },
      ],
      elevtext: [{ rubrik: "Källor och källkritik", stycken: [
        "Vetenskapliga artiklar har oftast granskats av andra forskare innan de publicerats (så kallad referentgranskning). Myndigheter och officiell statistik är också tillförlitliga källor för fakta.",
        "Granska varje källa med de klassiska kriterierna: äkthet, tid, beroende och tendens. Skilj mellan primärkällor – den ursprungliga studien – och sekundärkällor som återger den.",
      ] }],
      uppgifter: ["Hitta tre källor till din frågeställning, minst en vetenskaplig.", "Granska dem med de fyra kriterierna i en tabell.", "Vilken källa är mest användbar för din frågeställning? Motivera."],
      lankar: [["Källkritik", "kallkritik"]],
    },
    {
      titel: "Citat, referat och referenssystem",
      mal: "Eleverna kan citera, referera och skriva källhänvisningar och källförteckning enligt Harvardsystemet.",
      upplagg: ["Genomgång (15 min).", "Eleverna övar på att citera och referera ur en text de får (20 min).", "De gör källförteckningen för sina egna källor (15 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Harvardsystemet", kolumner: ["Typ", "Exempel"], rader: [
          ["Referat", "Enligt Andersson (2021) har ... ökat."],
          ["Kort citat", "Andersson menar att ”…” (2021, s. 14)."],
          ["Källförteckning – bok", "Andersson, A. (2021). Titel. Ort: Förlag."],
          ["Källförteckning – webb", "Myndighet (år). Titel. Hämtad [datum] från webbadress."],
        ] },
        { typ: "punkter", rubrik: "Tänk på", punkter: ["Citera sparsamt – referera oftare.", "Långa citat (fler än cirka tre rader) skrivs som blockcitat utan citattecken.", "Följ ett system konsekvent – Harvard eller Oxford (fotnoter).", "Allt som inte är dina egna tankar eller allmänt känt behöver en källhänvisning."] },
        { typ: "fraga", fraga: { fraga: "Vad är plagiat?", alternativ: ["att använda någon annans text eller idéer utan källa", "att referera med källhänvisning", "att citera med citattecken"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Att hänvisa till källor", stycken: [
        "Ett referat återger innehållet i en källa med egna ord, och du anger källan med en signalfras: Enligt Andersson (2021) … Ett citat återger exakta ord inom citattecken, med sidhänvisning. Citera bara när formuleringen i sig är viktig.",
        "I Harvardsystemet skriver du författarens efternamn och årtal (och sida vid citat) i löptexten. I källförteckningen sist står alla källor i bokstavsordning. Oxfordsystemet använder i stället fotnoter.",
        "Att använda någon annans text eller idéer utan att ange källan är plagiat – även om du har skrivit om orden.",
      ] }],
      uppgifter: ["Skriv ett referat och ett citat ur den text du har fått, med korrekta källhänvisningar.", "Gör en källförteckning för dina tre källor.", "Förklara skillnaden mellan Harvard- och Oxfordsystemet."],
      lankar: [["Skrivregler för citat och källor", "grammatik/skiljetecken"]],
    },
    {
      titel: "Disposition och vetenskapligt språk",
      mal: "Eleverna kan disponera en vetenskaplig text och skriva i ett sakligt och precist språk.",
      upplagg: ["Genomgång av dispositionen (15 min).", "Språkövning: skriv om informella meningar till vetenskaplig stil (15 min).", "Eleverna skriver dispositionen för sin egen text (20 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "En vetenskaplig text", kolumner: ["Del", "Innehåll"], rader: [
          ["Inledning", "bakgrund, syfte, frågeställning, avgränsning"],
          ["Metod och material", "hur du undersökt och vilka källor eller data du använt"],
          ["Resultat", "vad du kom fram till"],
          ["Diskussion och slutsats", "tolkning, jämförelse med tidigare forskning, svar på frågeställningen"],
          ["Källförteckning", "alla källor enligt referenssystemet"],
        ] },
        { typ: "jamfor", rubrik: "Från vardag till vetenskap", kolumner: ["Vardagligt", "Vetenskapligt"], rader: [
          ["Jag tycker att det är jättedåligt att …", "Resultaten tyder på att … kan få negativa följder."],
          ["Typ alla unga använder mobilen för mycket.", "En stor andel av de tillfrågade uppgav att de använder mobilen mer än fyra timmar per dag."],
          ["Det är ju självklart att …", "Detta stöds av flera studier (Andersson 2021; Berg 2023)."],
        ] },
      ],
      elevtext: [{ rubrik: "Struktur och språk", stycken: [
        "En vetenskaplig text följer ofta en fast struktur: inledning, metod och material, resultat, diskussion och källförteckning. Läsaren ska kunna se hur du har gått till väga och kunna kontrollera dina källor.",
        "Språket är sakligt, precist och opersonligt. Undvik värdeladdade ord och talspråk. Var försiktig med generaliseringar – skriv ”tyder på” eller ”enligt” i stället för att påstå mer än du kan belägga. Nominalstil (”genomförandet av undersökningen”) är vanlig, men för mycket gör texten tung – variera med verbalstil.",
      ] }],
      uppgifter: ["Skriv om fem vardagliga meningar till vetenskaplig stil.", "Skriv dispositionen för din egen text med stödpunkter under varje rubrik.", "Skriv inledningen: bakgrund, syfte, frågeställning och avgränsning."],
      lankar: [["Nominal- och verbalstil", "grammatik/meningsbyggnad"]],
    },
    {
      titel: "AI, etik och slutbearbetning",
      mal: "Eleverna kan använda AI-verktyg ansvarsfullt och bearbeta sin text inför inlämning.",
      upplagg: ["Diskussion: när är det rimligt att använda AI i ett skrivarbete? Utgå från skolans riktlinjer (15 min).", "Genomgång av checklistan (10 min).", "Eleverna bearbetar sin text med checklistan och ger kamratrespons (25 min)."],
      bilder: [
        { typ: "punkter", rubrik: "AI i skrivarbetet", punkter: [
          "AI-chattar kan hitta på fakta och källor som inte finns. Kontrollera allt i riktiga källor.",
          "AI är ingen källa att hänvisa till för fakta – men om du använt AI ska du kunna redovisa hur, enligt skolans regler.",
          "Texten och tankarna ska vara dina egna. Den som lämnar in andras – eller en AI:s – text som sin egen fuskar.",
        ] },
        { typ: "uppgift", rubrik: "Checklista före inlämning", text: "Kontrollera din text:", punkter: ["Svarar texten på frågeställningen?", "Har alla uppgifter en källhänvisning?", "Följer källförteckningen referenssystemet?", "Är språket sakligt och precist?", "Har du läst igenom stavning och skiljetecken?"] },
      ],
      elevtext: [{ rubrik: "Ansvarsfullt skrivande", stycken: [
        "AI-verktyg kan hjälpa till att förstå ett ämne eller förbättra språket, men de kan också hitta på uppgifter och referenser. Därför är en AI aldrig en tillförlitlig källa för fakta. Följ skolans regler för när och hur AI får användas, och var öppen med hur du har använt den.",
        "Läs igenom din text flera gånger innan du lämnar in: en gång för innehållet, en gång för strukturen och källhänvisningarna och en gång för språket.",
      ] }],
      uppgifter: ["Bearbeta din text med checklistan.", "Ge respons på en kamrats text med checklistan.", "Skriv en kort reflektion: Hur har du arbetat med källor – och vad har du lärt dig?"],
      lankar: [["AI i svenskan", "ai-i-svenskan"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vad beskriver syftet i en vetenskaplig text?", alternativ: ["vad undersökningen ska åstadkomma", "vilka källor som används", "resultatet"], ratt: 0 },
      { fraga: "Vilken frågeställning är bäst avgränsad?", alternativ: ["Hur påverkar internet människor?", "Hur framställs klimatfrågan i tre svenska dagstidningars ledare under 2024?", "Är klimatet viktigt?"], ratt: 1 },
      { fraga: "Vilket källkritiskt kriterium handlar om huruvida källan är en primärkälla?", alternativ: ["beroende", "tid", "äkthet"], ratt: 0 },
      { fraga: "Hur skrivs en källhänvisning i Harvardsystemet?", alternativ: ["(Efternamn år, sida) i löptexten", "med fotnot", "bara i källförteckningen"], ratt: 0 },
      { fraga: "Vilket system använder fotnoter?", alternativ: ["Oxfordsystemet", "Harvardsystemet", "inget"], ratt: 0 },
      { fraga: "Vad hör hemma i metoddelen?", alternativ: ["hur undersökningen genomförts och vilket material som använts", "slutsatsen", "bakgrunden till ämnet"], ratt: 0 },
      { fraga: "Vilken mening är skriven i vetenskaplig stil?", alternativ: ["Resultaten tyder på ett samband.", "Det är ju uppenbart att det hänger ihop.", "Jag tycker att det är superviktigt."], ratt: 0 },
      { fraga: "Vad är referentgranskning?", alternativ: ["att andra forskare granskar en artikel före publicering", "att läraren rättar en text", "att man läser en referens"], ratt: 0 },
      { fraga: "Varför ska fakta från en AI-chatt kontrolleras?", alternativ: ["AI kan hitta på uppgifter och källor", "AI skriver alltid på engelska", "det behövs inte"], ratt: 0 },
      { fraga: "Vad är plagiat?", alternativ: ["att använda andras text eller idéer utan att ange källa", "att skriva ett referat med källhänvisning", "att ha många källor"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Formulera ett syfte, en frågeställning och en avgränsning för en undersökning om ett ämne du väljer. Motivera varför frågeställningen är undersökningsbar.", bedomning: ["Tydligt syfte", "Avgränsad och öppen frågeställning", "Relevant avgränsning", "Motivering"] },
      { fraga: "Skriv ett referat och ett citat ur texten du har fått, med korrekta källhänvisningar enligt Harvardsystemet, och gör en post i källförteckningen.", bedomning: ["Referatet är med egna ord och korrekt", "Citatet är exakt med citattecken och sida", "Källförteckningen följer systemet"] },
      { fraga: "Resonera om hur AI-verktyg kan användas ansvarsfullt i ett skrivarbete.", bedomning: ["Både möjligheter och risker", "Kopplar till källkritik och egen text", "Konkreta exempel"] },
    ],
  },
  tips: [
    "Arbetsområdet passar som förberedelse inför gymnasiearbetet – samarbeta gärna med handledarna.",
    "Skolbibliotekarien kan hålla i lektion 2.",
    "Välj ett referenssystem för hela skolan om det är möjligt, så att eleverna slipper byta mellan ämnen.",
  ],
};
