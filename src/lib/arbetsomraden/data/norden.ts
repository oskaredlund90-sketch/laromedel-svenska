import type { Arbetsomrade } from "../typer";

export const NORDEN: Arbetsomrade = {
  id: "nordens-sprak-och-minoritetssprak",
  titel: "Nordens språk, minoritetsspråk och teckenspråk",
  stadie: "hogstadiet",
  arskurs: "9",
  ingress:
    "Svenskan har grannar. Eleverna lär sig om släktskapen mellan de nordiska språken, tränar grannspråksförståelse med norska och danska och lär sig om Sveriges nationella minoritetsspråk och svenskt teckenspråk – och varför de har en särskild ställning.",
  kursplan: [
    "Svenskans släktskap med de nordiska språken, inklusive framträdande likheter och skillnader.",
    "De nationella minoritetsspråken och det svenska teckenspråket.",
    "Att reflektera över språkens betydelse för identitet, kultur och samhälle.",
    "Läsning av texter från Norden.",
  ],
  mal: [
    "Förklara vilka språk som är nordiska och hur de är släkt med varandra.",
    "Förstå enkla texter och samtal på norska och danska och känna igen vanliga skillnader och falska vänner.",
    "Nämna de fem nationella minoritetsspråken och förklara vad det innebär att de har en särskild ställning.",
    "Beskriva svenskt teckenspråk som ett eget språk.",
    "Resonera om språkets betydelse för identitet och kultur.",
  ],
  begrepp: [
    ["nordiska språk", "svenska, norska, danska, isländska och färöiska – de nordgermanska språken"],
    ["fornnordiska", "det nordiska språket under vikingatid och tidig medeltid"],
    ["grannspråk", "språk som är så likt det egna att man kan förstå det utan att ha studerat det"],
    ["falska vänner", "ord som ser likadana ut i två språk men betyder olika saker"],
    ["bokmål och nynorska", "Norges två skriftspråk"],
    ["nationellt minoritetsspråk", "samiska, finska, meänkieli, romani chib och jiddisch – språk med särskilt skydd i lag"],
    ["förvaltningsområde", "kommun där en nationell minoritet har utökade rättigheter att använda sitt språk"],
    ["svenskt teckenspråk", "ett eget språk med egen grammatik som används av döva och hörselskadade i Sverige"],
    ["språklagen", "lag från 2009 om svenskan, minoritetsspråken och teckenspråket"],
  ],
  lankar: [
    ["Nordiska språk – elevsidan", "nordiska-sprak"],
    ["Språkhistoria", "sprakhistoria"],
    ["Svenska som andraspråk", "sva"],
  ],
  fortest: [
    { fraga: "Vilket språk är ett nordiskt språk?", alternativ: ["finska", "isländska", "estniska"], ratt: 1 },
    { fraga: "Vilket grannspråk brukar svenskar ha lättast att förstå?", alternativ: ["norska", "danska", "finska"], ratt: 0 },
    { fraga: "Hur många nationella minoritetsspråk har Sverige?", alternativ: ["tre", "fem", "tio"], ratt: 1 },
    { fraga: "Vilket språk är ett nationellt minoritetsspråk i Sverige?", alternativ: ["meänkieli", "engelska", "arabiska"], ratt: 0 },
    { fraga: "Svenskt teckenspråk är …", alternativ: ["svenska som visas med händerna, ord för ord", "ett eget språk med egen grammatik", "samma språk i hela världen"], ratt: 1 },
    { fraga: "Vad betyder ”rolig” på norska och danska?", alternativ: ["lugn", "kul", "arg"], ratt: 0 },
    { fraga: "Finska och samiska är …", alternativ: ["nordiska språk", "inte släkt med svenskan på samma sätt", "dialekter av svenska"], ratt: 1 },
  ],
  lektioner: [
    {
      titel: "Språken i Norden",
      mal: "Eleverna kan förklara vilka språk som talas i Norden och hur de är släkt med varandra.",
      upplagg: [
        "Förtestet (10 min).",
        "Genomgång med kartan i bilderna (15 min) – visa gärna en karta över Norden på tavlan.",
        "Eleverna gör uppgift 1–2.",
      ],
      bilder: [
        { typ: "jamfor", rubrik: "Språk i Norden", kolumner: ["Språkfamilj eller grupp", "Språk"], rader: [
          ["Nordgermanska (nordiska)", "svenska, norska, danska, isländska, färöiska"],
          ["Finsk-ugriska (uraliska)", "finska, samiska, meänkieli, karelska"],
          ["Inuitiska", "grönländska"],
          ["Teckenspråk (egna språk)", "svenskt, norskt, danskt, finskt och isländskt teckenspråk m.fl."],
        ] },
        { typ: "punkter", rubrik: "En gemensam rot", punkter: [
          "De nordiska språken utvecklades ur urnordiskan, som talades i hela Norden fram till vikingatiden.",
          "Svenska, norska och danska är så lika att vi ofta förstår varandra: grannspråk.",
          "Isländska och färöiska har förändrats minst och liknar det gamla nordiska språket (fornnordiskan) mest.",
          "Norge har två skriftspråk: bokmål och nynorska.",
        ] },
        { typ: "fraga", fraga: { fraga: "Vilket nordiskt språk liknar det gamla nordiska språket (fornnordiskan) mest?", alternativ: ["danska", "isländska", "svenska"], ratt: 1 } },
      ],
      elevtext: [
        { rubrik: "Nordens språk", stycken: [
          "I Norden talas många språk. Svenska, norska, danska, isländska och färöiska är nordgermanska språk. De har utvecklats ur urnordiskan, ett gemensamt språk som talades i Norden för mer än tusen år sedan.",
          "Svenska, norska och danska är så lika att vi ofta kan förstå varandra utan att ha studerat språken. De kallas därför grannspråk. Isländska och färöiska har förändrats mindre och är svårare för svenskar att förstå – men de liknar det gamla nordiska språket (fornnordiskan) mest.",
          "Finska, samiska och meänkieli tillhör en annan språkfamilj, den finsk-ugriska. På Grönland talas grönländska, ett inuitiskt språk. I alla nordiska länder finns också teckenspråk.",
        ] },
      ],
      uppgifter: [
        "Gör en tabell: språk – land – språkfamilj.",
        "Varför kan svenskar ofta förstå norska och danska men inte finska?",
        "Vad är skillnaden mellan bokmål och nynorska? Ta reda på det och skriv två meningar.",
      ],
      lankar: [["Nordiska språk – elevsidan", "nordiska-sprak"]],
    },
    {
      titel: "Grannspråk: norska och danska",
      mal: "Eleverna kan förstå enkla texter på norska och danska och känna igen falska vänner.",
      upplagg: [
        "Läs den norska och den danska meningen på bilden högt. Låt eleverna översätta.",
        "Gå igenom falska vänner (10 min).",
        "Eleverna läser en kort nyhetstext på norska och en på danska (t.ex. från NRK och DR) och svarar på frågor (20 min).",
        "Lyssna gärna på ett kort nyhetsinslag på danska – det talade språket är svårare än det skrivna.",
      ],
      bilder: [
        { typ: "jamfor", rubrik: "Förstår du?", kolumner: ["Språk", "Mening"], rader: [
          ["Norska", "Jeg har ikke tid i dag, men vi kan møtes i morgen."],
          ["Danska", "Jeg har ikke tid i dag, men vi kan ses i morgen."],
          ["Svenska", "Jag har inte tid i dag, men vi kan ses i morgon."],
        ] },
        { typ: "jamfor", rubrik: "Falska vänner", kolumner: ["Ord", "Betyder"], rader: [
          ["rolig (no, da)", "lugn"],
          ["frokost (da)", "lunch – på norska betyder frokost frukost"],
          ["glass (no)", "glas – glass heter is"],
          ["grine (da)", "skratta"],
        ] },
        { typ: "fraga", fraga: { fraga: "En dansk vän säger att middagen var ”rolig”. Vad menar hen?", alternativ: ["att den var lugn", "att den var kul", "att den var god"], ratt: 0 } },
      ],
      elevtext: [
        { rubrik: "Att förstå grannspråk", stycken: [
          "Norska och danska skrivs ofta mycket likt varandra, men uttalas olika. Därför har många svenskar lättare att läsa danska än att höra det. Norska ligger närmare svenskan i uttalet.",
          "Några ord ser likadana ut men betyder olika saker. De kallas falska vänner. Rolig betyder lugn på norska och danska. Frokost är lunch på danska men frukost på norska. Grine betyder skratta på danska.",
          "Tips när du läser grannspråk: läs hela meningen, gissa utifrån sammanhanget och tänk på ord som liknar svenska – jeg är jag, ikke är inte, hvad är vad.",
        ] },
      ],
      uppgifter: [
        "Översätt meningarna till svenska: Jeg liker å lese bøker. (norska) – Vi skal spise frokost klokken tolv. (danska)",
        "Läs en kort nyhet på nrk.no eller dr.dk. Sammanfatta den på svenska i tre meningar.",
        "Gör en lista med fem ord som är lika i svenska och norska och fem som skiljer sig.",
      ],
    },
    {
      titel: "Sveriges nationella minoritetsspråk",
      mal: "Eleverna kan nämna de fem nationella minoritetsspråken och förklara vad deras särskilda ställning innebär.",
      upplagg: [
        "Fråga: Vilka språk har talats i Sverige i hundratals år? (5 min)",
        "Genomgång med bilderna (15 min).",
        "Gruppuppgift: varje grupp tar reda på mer om ett språk och redovisar kort (25 min). Material finns på minoritet.se.",
      ],
      bilder: [
        { typ: "jamfor", rubrik: "Fem nationella minoritetsspråk", kolumner: ["Språk", "Minoritet"], rader: [
          ["samiska (flera varieteter)", "samer – Sveriges urfolk"],
          ["finska", "sverigefinnar"],
          ["meänkieli", "tornedalingar, kväner och lantalaiset"],
          ["romani chib", "romer"],
          ["jiddisch", "judar"],
        ] },
        { typ: "punkter", rubrik: "Vad innebär det?", punkter: [
          "Språken har talats i Sverige under lång tid och erkändes som nationella minoritetsspråk år 2000.",
          "Lagen om nationella minoriteter och minoritetsspråk ger rätt att använda språken och skyldighet för det allmänna att skydda och främja dem.",
          "I förvaltningsområden har man bland annat rätt att använda finska, meänkieli eller samiska hos kommunen och i förskolan.",
          "Barn som tillhör en nationell minoritet har rätt till modersmålsundervisning.",
        ] },
        { typ: "fraga", fraga: { fraga: "Vilka är Sveriges urfolk?", alternativ: ["samerna", "tornedalingarna", "sverigefinnarna"], ratt: 0 } },
      ],
      elevtext: [
        { rubrik: "Nationella minoritetsspråk", stycken: [
          "I Sverige finns fem nationella minoriteter: samer, sverigefinnar, tornedalingar, romer och judar. Deras språk – samiska, finska, meänkieli, romani chib och jiddisch – är nationella minoritetsspråk sedan år 2000. Språken har talats i Sverige under lång tid.",
          "Samerna är Sveriges urfolk. Samiska består av flera varieteter, till exempel nordsamiska, lulesamiska och sydsamiska. Meänkieli talas i Tornedalen och är nära släkt med finska.",
          "Under 1900-talet förbjöds eller motarbetades minoritetsspråken på många håll, till exempel i skolan. Många slutade därför föra språket vidare till sina barn. I dag ska det allmänna skydda och främja språken. I så kallade förvaltningsområden har man rätt att använda finska, meänkieli eller samiska i kontakt med kommunen och att få förskola på språket.",
        ] },
      ],
      uppgifter: [
        "Nämn de fem nationella minoritetsspråken och vilken minoritet som talar respektive språk.",
        "Varför tror du att många slutade föra språket vidare till sina barn under 1900-talet?",
        "Ta reda på om din kommun är förvaltningsområde för något minoritetsspråk.",
      ],
      lankar: [["Nordiska språk och minoritetsspråk", "nordiska-sprak"]],
    },
    {
      titel: "Svenskt teckenspråk – och språk och identitet",
      mal: "Eleverna kan beskriva svenskt teckenspråk som ett eget språk och resonera om språkets betydelse för identitet och kultur.",
      upplagg: [
        "Visa ett kort klipp på svenskt teckenspråk (t.ex. från SVT:s teckenspråksprogram) utan att förklara först.",
        "Genomgång (10 min).",
        "Avslutande skrivuppgift om språk och identitet (20 min) och repetition inför provet.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Svenskt teckenspråk", punkter: [
          "Svenskt teckenspråk är ett eget språk med egen grammatik – inte svenska med händerna.",
          "Ansiktsuttryck, munrörelser och var tecknen görs i rummet är en del av grammatiken.",
          "Teckenspråk skiljer sig mellan länder: svenskt och amerikanskt teckenspråk är olika språk.",
          "Enligt språklagen har det allmänna ett särskilt ansvar för att skydda och främja svenskt teckenspråk.",
        ] },
        { typ: "diskutera", fragor: ["Vad kan det betyda för en person att få använda sitt eget språk i skolan?", "Vad förloras om ett språk försvinner?"] },
        { typ: "fraga", fraga: { fraga: "Vilket språk är INTE ett nationellt minoritetsspråk?", alternativ: ["jiddisch", "romani chib", "isländska"], ratt: 2 } },
      ],
      elevtext: [
        { rubrik: "Ett eget språk", stycken: [
          "Svenskt teckenspråk används av döva, hörselskadade och många hörande i Sverige. Det är ett eget språk med egen grammatik och eget ordförråd. Ansiktsuttryck och var i rummet tecknen görs är en del av grammatiken.",
          "Teckenspråk är inte internationellt. Svenskt teckenspråk och till exempel amerikanskt teckenspråk är olika språk. Enligt språklagen har det allmänna ett särskilt ansvar för att skydda och främja svenskt teckenspråk, och döva och hörselskadade ska ha möjlighet att lära sig och använda det.",
          "Språk är mer än ett sätt att kommunicera. Det bär berättelser, sånger och sätt att tänka. När ett språk försvinner förloras också en del av en kultur.",
        ] },
      ],
      uppgifter: [
        "Förklara varför svenskt teckenspråk räknas som ett eget språk.",
        "Skriv ett resonerande stycke (8–10 meningar): Varför är det viktigt att skydda minoritetsspråk och teckenspråk?",
        "Lär dig tecknen för fem ord på svenskt teckenspråk (Teckenspråkslexikon finns på teckensprakslexikon.su.se) och visa för en kompis.",
      ],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vilka språk är nordgermanska?", alternativ: ["svenska, norska, danska, isländska, färöiska", "svenska, finska, norska, danska", "svenska, samiska, isländska"], ratt: 0 },
      { fraga: "Vilket språk tillhör den finsk-ugriska språkfamiljen?", alternativ: ["färöiska", "samiska", "danska"], ratt: 1 },
      { fraga: "Vad är grannspråk?", alternativ: ["språk som är så lika att man förstår dem utan att ha studerat dem", "språk som talas i samma stad", "dialekter av svenska"], ratt: 0 },
      { fraga: "Vad heter Norges två skriftspråk?", alternativ: ["bokmål och nynorska", "riksmål och dialekt", "norska och samiska"], ratt: 0 },
      { fraga: "Vad betyder ”frokost” på danska?", alternativ: ["lunch", "frukost", "middag"], ratt: 0 },
      { fraga: "Vad kallas ord som ser likadana ut i två språk men betyder olika saker?", alternativ: ["falska vänner", "lånord", "synonymer"], ratt: 0 },
      { fraga: "När erkändes de nationella minoritetsspråken i Sverige?", alternativ: ["1809", "2000", "2020"], ratt: 1 },
      { fraga: "Vilket språk talas av tornedalingar?", alternativ: ["meänkieli", "jiddisch", "romani chib"], ratt: 0 },
      { fraga: "Vad är ett förvaltningsområde?", alternativ: ["en kommun där en minoritet har utökade rättigheter att använda sitt språk", "ett område där bara svenska får talas", "en del av Norge"], ratt: 0 },
      { fraga: "Vilket påstående om svenskt teckenspråk stämmer?", alternativ: ["Det är ett eget språk med egen grammatik.", "Det är samma i hela världen.", "Det är svenska ord för ord med händerna."], ratt: 0 },
      { fraga: "Vilket nordiskt språk liknar det gamla nordiska språket (fornnordiskan) mest?", alternativ: ["isländska", "danska", "svenska"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Förklara varför svenskar ofta förstår norska och danska men inte finska.", bedomning: ["Släktskap genom urnordiskan", "Finska tillhör en annan språkfamilj", "Gärna exempel på lika ord"] },
      { fraga: "Beskriv de nationella minoritetsspråkens ställning i Sverige och vad den innebär.", bedomning: ["Nämner minst tre av språken", "Förklarar rättigheter (t.ex. förvaltningsområde, modersmålsundervisning)", "Kopplar till historia eller identitet"] },
      { fraga: "Resonera: Vad betyder det för en människa att få använda sitt språk?", bedomning: ["Kopplar språk till identitet och kultur", "Ger exempel", "Eget ställningstagande med motivering"] },
    ],
  },
  tips: [
    "Nordiska rådets och Nordens språkråds material om grannspråksförståelse passar bra till lektion 2.",
    "Minoritet.se (Institutet för språk och folkminnen och Sametinget) har material om de nationella minoriteterna för skolan.",
    "Var medveten om att elever kan tillhöra någon av minoriteterna – låt dem berätta om de vill, men peka inte ut någon.",
    "Lektion 3 och 4 passar för samarbete med SO (historia och samhällskunskap).",
  ],
};
