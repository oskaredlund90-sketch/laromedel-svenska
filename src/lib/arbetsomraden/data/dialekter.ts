import type { Arbetsomrade } from "../typer";

export const DIALEKTER: Arbetsomrade = {
  id: "dialekter-och-sprakbruk",
  titel: "Dialekter och språklig variation",
  stadie: "hogstadiet",
  arskurs: "8",
  ingress:
    "Ingen talar ”bara svenska” – vi talar svenska från en plats, i en grupp och i en situation. Eleverna lär sig om svenska dialekter, sociolekter och ungdomsspråk, hur språket anpassas efter situation och mottagare, och hur språk hänger ihop med identitet och inflytande.",
  kursplan: [
    "Översiktligt svenska dialekter och språklig variation i Sverige.",
    "Skillnader mellan formellt och informellt språk.",
    "Hur språkbruk varierar beroende på situation, syfte och social kontext.",
    "Språkets betydelse för identitet, kultur och samhälle – och för att utöva inflytande.",
    "Ords betydelsenyanser och värdeladdning, och hur språket kan anpassas efter syfte, mottagare och sammanhang.",
  ],
  mal: [
    "Förklara skillnaden mellan dialekt, sociolekt, etnolekt och standardspråk.",
    "Nämna svenska dialektområden och ge exempel på hur dialekter skiljer sig åt i uttal, ord och grammatik.",
    "Ge exempel på hur samma person anpassar språket efter situation och mottagare.",
    "Resonera om attityder till dialekter och ungdomsspråk och om språkets betydelse för identitet.",
    "Förklara varför språket är viktigt för att kunna påverka i samhället.",
  ],
  begrepp: [
    ["dialekt", "en variant av ett språk som talas inom ett visst geografiskt område"],
    ["standardspråk", "den variant som används i skrift, i nyheter och i skolan – även kallad standardsvenska"],
    ["regionalt standardspråk", "standardspråk med drag från en region, t.ex. i uttal och melodi"],
    ["sociolekt", "språk som är typiskt för en social grupp, t.ex. en yrkesgrupp eller åldersgrupp"],
    ["etnolekt / multietniskt ungdomsspråk", "språkvariant som har vuxit fram bland unga i flerspråkiga miljöer"],
    ["kodväxling", "att växla mellan språk eller språkvarianter i samma samtal"],
    ["tonaccent", "skillnad i tonfall som kan skilja ord åt: anden (fågeln) – anden (spöket)"],
    ["register", "den stilnivå vi väljer efter situation, t.ex. formell eller informell"],
    ["värdeladdat ord", "ord som visar en positiv eller negativ värdering"],
  ],
  lankar: [
    ["Nordiska språk och minoritetsspråk", "nordiska-sprak"],
    ["Språkhistoria", "sprakhistoria"],
    ["Stilistik: formellt och informellt (grammatikboken)", "grammatik/stilistik"],
    ["Tala och lyssna", "tala-lyssna"],
  ],
  fortest: [
    { fraga: "Vad är en dialekt?", alternativ: ["ett språk som talas inom ett visst område", "en variant av ett språk som talas inom ett visst område", "ett felaktigt sätt att tala"], ratt: 1 },
    { fraga: "I vilken del av Sverige uttalas r ofta längre bak i munnen (skorrande r)?", alternativ: ["i södra Sverige", "i Norrland", "i Stockholm"], ratt: 0 },
    { fraga: "Vad kallas språk som är typiskt för en viss social grupp?", alternativ: ["dialekt", "sociolekt", "kasus"], ratt: 1 },
    { fraga: "Vilken mening passar bäst i ett mejl till rektorn?", alternativ: ["Tja, kan vi snacka?", "Hej! Kan vi boka ett möte?", "Yo rektorn, vi måste prata!!"], ratt: 1 },
    { fraga: "Vad betyder det att växla kod?", alternativ: ["att byta lösenord", "att växla mellan språk eller språkvarianter", "att tala långsammare"], ratt: 1 },
    { fraga: "Vilket ord är negativt laddat?", alternativ: ["sparsam", "snål", "ekonomisk"], ratt: 1 },
    { fraga: "Finlandssvenska är …", alternativ: ["svenska som talas i Finland", "en blandning av finska och svenska", "ett eget språk som inte är svenska"], ratt: 0 },
    { fraga: "Vilket påstående stämmer?", alternativ: ["Alla talar standardsvenska hemma.", "De flesta anpassar sitt språk efter situationen.", "Dialekter finns bara på landsbygden."], ratt: 1 },
  ],
  lektioner: [
    {
      titel: "Vad är en dialekt?",
      mal: "Eleverna kan förklara begreppen dialekt, standardspråk och regionalt standardspråk och nämna några dialektområden.",
      upplagg: [
        "Förtestet (10 min).",
        "Starta med frågan: Hur hörs det var någon kommer ifrån? Samla elevernas exempel på tavlan.",
        "Genomgång med bilderna (15 min).",
        "Eleverna läser elevtexten och gör uppgift 1–2.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Alla talar en variant", punkter: [
          "En dialekt är en variant av ett språk som talas inom ett visst område.",
          "Standardsvenska är den variant som används i skrift, i nyheter och i skolan.",
          "De flesta svenskar talar i dag regionalt standardspråk: standardsvenska med uttal och melodi från sin region.",
          "Traditionella dialekter lever kvar starkast på vissa orter, till exempel i Dalarna och på Gotland.",
        ] },
        { typ: "jamfor", rubrik: "Svenska dialektområden (förenklat)", kolumner: ["Område", "Var?"], rader: [
          ["Sydsvenska mål", "Skåne, Blekinge, södra Halland"],
          ["Götamål", "Västergötland, Värmland, Bohuslän, Dalsland, norra Halland, Öland, delar av Småland och Östergötland"],
          ["Sveamål", "Uppland, Södermanland, Västmanland, Närke och delar av Dalarna"],
          ["Norrländska mål", "Norrland (utom Gästrikland och södra Hälsingland, som räknas till sveamål)"],
          ["Gotländska mål", "Gotland"],
          ["Östsvenska mål", "Svenskan i Finland och tidigare i Estland"],
        ] },
        { typ: "diskutera", fragor: ["Har du en dialekt? Hur vet du det?", "Varför tror du att de traditionella dialekterna har blivit svagare?"] },
      ],
      elevtext: [
        { rubrik: "Dialekt och standardspråk", stycken: [
          "En dialekt är en variant av ett språk som talas inom ett visst geografiskt område. Dialekter skiljer sig åt i uttal, melodi, ord och ibland grammatik. Alla som talar svenska talar någon variant – det finns ingen svenska som är ”utan dialekt”.",
          "Standardsvenska (rikssvenska) är den variant som används i skrift, i nyheter och i skolan. De flesta svenskar talar i dag ett regionalt standardspråk. Det betyder att de använder standardsvenskans ord och grammatik men har uttal och melodi från sin region.",
          "Förr var skillnaderna mellan dialekterna mycket större. När människor flyttade till städerna, när alla gick i skola och när radio och tv kom blev språket mer enhetligt. På vissa orter lever traditionella dialekter kvar. Älvdalska i Dalarna skiljer sig så mycket från standardsvenskan att många forskare kallar det ett eget språk.",
          "Svenska talas också i Finland. Finlandssvenska är svenska, men med egna drag i uttal och ordförråd.",
        ] },
      ],
      uppgifter: [
        "Förklara skillnaden mellan dialekt, standardspråk och regionalt standardspråk med egna ord.",
        "Vilket dialektområde bor du i? Skriv två saker som du tror är typiska för hur man pratar där.",
        "Varför har dialekterna blivit mer lika varandra? Ge två orsaker.",
      ],
      lankar: [["Språkhistoria", "sprakhistoria"]],
    },
    {
      titel: "Hur låter dialekterna?",
      mal: "Eleverna kan beskriva några skillnader i uttal, melodi och ord mellan svenska dialekter.",
      upplagg: [
        "Lyssna på dialektinspelningar från Institutet för språk och folkminnen (isof.se) – välj 3–4 orter i olika delar av landet.",
        "Eleverna antecknar vad de hör i tabellen i elevmaterialet (20 min).",
        "Genomgång av uttalsdragen på bilderna och jämför med det eleverna hörde.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Så skiljer sig dialekterna", punkter: [
          "R-ljudet: i södra Sverige uttalas r ofta längre bak i munnen (skorrande r). I resten av landet tungspets-r.",
          "Melodin: svenskan har två ordaccenter. De skiljer anden (fågeln) från anden (spöket). Melodin låter olika i olika delar av landet, och finlandssvenskan saknar för det mesta skillnaden.",
          "Vokaler: i många skånska dialekter glider vokalerna, så kallade diftonger.",
          "Ord: samma sak kan ha olika namn i olika delar av landet.",
        ] },
        { typ: "uppgift", rubrik: "Lyssna och anteckna", text: "Lyssna på inspelningarna. Skriv för varje ort:", punkter: [
          "Hur låter r-ljudet?",
          "Hur låter melodin – går den upp eller ner i slutet av orden?",
          "Hör du några ord du inte känner igen?",
        ] },
        { typ: "fraga", fraga: { fraga: "Vad skiljer anden (fågeln) från anden (spöket) i uttalet?", alternativ: ["tonaccenten – melodin i ordet", "r-ljudet", "stavningen"], ratt: 0 } },
      ],
      elevtext: [
        { rubrik: "Uttal, melodi och ord", stycken: [
          "Det man oftast lägger märke till i en dialekt är uttalet. I södra Sverige uttalas r ofta längre bak i munnen – ett så kallat skorrande r. I många skånska dialekter glider vokalerna, så att ett ord kan få två vokalljud i följd.",
          "Svenskan har två ordaccenter. Det är därför anden (fågeln) och anden (spöket) låter olika fast de stavas likadant. Hur accenterna låter skiljer sig mellan dialekterna, och det är en stor del av det vi kallar dialektens melodi.",
          "Dialekterna skiljer sig också i ordförråd. Ett och samma föremål kan ha olika namn i olika delar av landet. Institutet för språk och folkminnen samlar inspelningar och ord från hela Sverige.",
        ] },
      ],
      uppgifter: [
        "Fyll i tabellen för de orter ni lyssnade på: ort – r-ljud – melodi – ord jag inte kände igen.",
        "Fråga en äldre person i din närhet om ord eller uttryck de använde som barn. Skriv ned tre och förklara dem.",
        "Varför tror du att människor ibland har fördomar om vissa dialekter?",
      ],
    },
    {
      titel: "Sociolekter, etnolekter och ungdomsspråk",
      mal: "Eleverna kan förklara begreppen sociolekt, etnolekt och kodväxling och resonera om attityder till språkvarianter.",
      upplagg: [
        "Fråga: Pratar du likadant med kompisar, familj och lärare? (5 min)",
        "Genomgång (15 min).",
        "Gruppdiskussion med frågorna på bilden (15 min). Var uppmärksam på att samtalet håller sig respektfullt.",
        "Uppgift 2 som skrivuppgift.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Språk och grupp", punkter: [
          "En sociolekt är språk som är typiskt för en social grupp: en yrkesgrupp, en åldersgrupp eller en samhällsklass.",
          "Bland unga i flerspråkiga miljöer har nya språkvarianter vuxit fram, ibland kallade multietniskt ungdomsspråk eller etnolekt. Ord som len (kompis) och aina (polis) har spridit sig långt utanför de miljöerna.",
          "Den som talar flera språk eller varianter växlar ofta mellan dem efter situation. Det kallas kodväxling och är en färdighet.",
          "Ungdomar har alltid haft egna ord – många av dem har blivit vanlig svenska efter några decennier.",
        ] },
        { typ: "diskutera", fragor: ["Varför har grupper egna ord och uttryck?", "Vad kan hända när någon döms efter hur de pratar?", "Vilka ord som du använder skulle dina föräldrar inte förstå?"] },
      ],
      elevtext: [
        { rubrik: "Språk visar vilka vi är", stycken: [
          "Vi pratar olika beroende på var vi kommer ifrån, men också beroende på vilka grupper vi tillhör. Språk som är typiskt för en social grupp kallas sociolekt. Läkare, gamers och fotbollsspelare har till exempel ord som andra inte använder.",
          "I områden där många talar flera språk har det vuxit fram nya sätt att tala svenska bland unga. Forskare kallar det ibland multietniskt ungdomsspråk eller etnolekt. Det har egna ord, ofta lånade från andra språk, och ett eget uttal och en egen rytm.",
          "Den som behärskar flera språk eller språkvarianter växlar ofta mellan dem. Det kallas kodväxling. Att kunna anpassa sitt språk är en styrka.",
          "Människor bedömer ofta varandra efter hur de pratar. Sådana attityder säger mer om den som bedömer än om språket. Alla språkvarianter har regler och fungerar i sina sammanhang.",
        ] },
      ],
      uppgifter: [
        "Förklara begreppen sociolekt, etnolekt och kodväxling med ett exempel var.",
        "Skriv ett stycke (6–8 meningar): Är det bra eller dåligt att unga har egna ord? Använd minst två argument.",
        "Leta upp ett ord som var ungdomsspråk för 30–50 år sedan och som i dag är vanlig svenska.",
      ],
    },
    {
      titel: "Rätt språk i rätt situation",
      mal: "Eleverna kan anpassa språket efter situation, syfte och mottagare och känna igen värdeladdade ord.",
      upplagg: [
        "Visa jämförelsebilden och låt eleverna avgöra mottagaren (10 min).",
        "Skrivövning: samma budskap till tre mottagare (20 min).",
        "Gå igenom värdeladdade ord och låt eleverna hitta exempel i en nyhetsartikel.",
      ],
      bilder: [
        { typ: "jamfor", rubrik: "Samma budskap – olika mottagare", kolumner: ["Mottagare", "Budskap"], rader: [
          ["Kompis (sms)", "Kan inte i kväll, sorry! Ses imorn?"],
          ["Tränaren", "Hej! Jag kan tyvärr inte komma på träningen i kväll."],
          ["Kommunen", "Jag vill framföra synpunkter på att träningstiderna har ändrats utan förvarning."],
        ] },
        { typ: "punkter", rubrik: "Ord har värde", punkter: [
          "Ord kan betyda ungefär samma sak men ge olika känsla: snål – sparsam – ekonomisk.",
          "Värdeladdade ord visar vad skribenten tycker. De är vanliga i reklam, debatt och politik.",
          "I en saklig text väljer man så neutrala ord som möjligt.",
        ] },
        { typ: "fraga", fraga: { fraga: "Vilket ord är mest neutralt?", alternativ: ["skvallra", "berätta", "tjalla"], ratt: 1 } },
      ],
      elevtext: [
        { rubrik: "Att anpassa språket", stycken: [
          "Alla anpassar språket efter situationen, ofta utan att tänka på det. Med kompisar är språket informellt, med korta meningar och vardagliga ord. I ett mejl till en myndighet eller i en uppsats är språket formellt, med fullständiga meningar och neutrala ord.",
          "Att välja rätt nivå handlar om respekt för mottagaren – och om att bli förstådd och tagen på allvar.",
          "Ord kan betyda ungefär samma sak men ge olika känsla. Snål är negativt, sparsam är neutralt och ekonomisk är positivt. Sådana ord kallas värdeladdade. De är bra att känna igen när man läser reklam, debattinlägg och nyheter.",
        ] },
      ],
      uppgifter: [
        "Skriv samma budskap (du vill byta tid för ett möte) till en kompis, en lärare och en myndighet.",
        "Skriv ett negativt, ett neutralt och ett positivt ord för: envis, pratsam, försiktig.",
        "Hitta tre värdeladdade ord i en reklamtext eller ett debattinlägg. Vad vill skribenten åstadkomma med dem?",
      ],
      lankar: [["Stilistik i grammatikboken", "grammatik/stilistik"]],
    },
    {
      titel: "Språk, identitet och inflytande",
      mal: "Eleverna kan resonera om språkets betydelse för identitet och för möjligheten att påverka i samhället.",
      upplagg: [
        "Diskussion i helklass: Vad säger språket om vem vi är? (10 min)",
        "Genomgång: språk och inflytande (10 min).",
        "Eleverna skriver ett resonerande stycke eller förbereder en kort muntlig presentation (25 min).",
        "Repetera inför provet med frågorna på bilderna.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Språk och makt", punkter: [
          "Den som kan uttrycka sig i tal och skrift kan delta i samhället: skriva till kommunen, debattera, söka jobb.",
          "Språklagen säger att språket i offentlig verksamhet ska vara vårdat, enkelt och begripligt – så att alla ska förstå.",
          "Ord kan forma hur vi ser på saker. Därför väljer politiker och reklamskapare sina ord noga.",
          "Dialekt och modersmål är också en del av identiteten. Många är stolta över sitt sätt att tala.",
        ] },
        { typ: "fraga", fraga: { fraga: "Vad är en sociolekt?", alternativ: ["språk som är typiskt för en social grupp", "en dialekt från Skåne", "ett formellt språk"], ratt: 0 } },
        { typ: "fraga", fraga: { fraga: "Vilket dialektområde hör Uppland till?", alternativ: ["götamål", "sveamål", "norrländska mål"], ratt: 1 } },
      ],
      elevtext: [
        { rubrik: "Språket ger inflytande", stycken: [
          "För att kunna påverka i ett demokratiskt samhälle behöver man kunna läsa, förstå och uttrycka sig. Den som kan skriva en tydlig insändare, argumentera på ett möte eller förstå ett beslut från en myndighet har större möjlighet att få sin röst hörd.",
          "Därför säger språklagen att språket i offentlig verksamhet ska vara vårdat, enkelt och begripligt. Det kallas ofta klarspråk.",
          "Språket är också en del av vår identitet. Dialekten kan visa var vi kommer ifrån och modersmålet kan knyta oss till familj och kultur. Att få använda sitt språk är en viktig del av att känna sig hemma.",
        ] },
      ],
      uppgifter: [
        "Förklara med ett exempel varför språket är viktigt för att kunna påverka i samhället.",
        "Skriv ett resonerande stycke (8–10 meningar): Vad betyder ditt sätt att tala för vem du är?",
        "Hitta en text från en kommun eller myndighet. Är den skriven på klarspråk? Motivera.",
      ],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vad är ett regionalt standardspråk?", alternativ: ["standardsvenska med uttal och melodi från en region", "en traditionell dialekt", "ett språk som bara skrivs"], ratt: 0 },
      { fraga: "Vilket dialektområde hör Skåne till?", alternativ: ["sydsvenska mål", "sveamål", "götamål"], ratt: 0 },
      { fraga: "Var talas östsvenska mål?", alternativ: ["i Finland", "i Norrland", "på Gotland"], ratt: 0 },
      { fraga: "Vad är typiskt för uttalet i södra Sverige?", alternativ: ["skorrande (bakre) r", "inga vokaler", "kortare ord"], ratt: 0 },
      { fraga: "Vad kallas skillnaden i melodi mellan anden (fågeln) och anden (spöket)?", alternativ: ["tonaccent", "kasus", "kodväxling"], ratt: 0 },
      { fraga: "Varför har dialekterna blivit mer lika varandra?", alternativ: ["Skola, flytt till städer, radio och tv", "En lag förbjöd dialekter", "De har aldrig skilt sig åt"], ratt: 0 },
      { fraga: "Vad är en sociolekt?", alternativ: ["språk som är typiskt för en social grupp", "språk från ett visst landskap", "ett gammalt språk"], ratt: 0 },
      { fraga: "Vad är kodväxling?", alternativ: ["att växla mellan språk eller varianter i samma samtal", "att byta dialekt för alltid", "ett stavfel"], ratt: 0 },
      { fraga: "Vilken mening är mest formell?", alternativ: ["Jag vill framföra synpunkter på beslutet.", "Asså, det där beslutet suger.", "Fattar inte varför ni bestämde så."], ratt: 0 },
      { fraga: "Vilket ord är positivt laddat?", alternativ: ["snål", "tjurig", "målmedveten"], ratt: 2 },
      { fraga: "Vad säger språklagen om språket i offentlig verksamhet?", alternativ: ["vårdat, enkelt och begripligt", "formellt och svårt", "bara på engelska"], ratt: 0 },
      { fraga: "Vilket påstående stämmer?", alternativ: ["Alla språkvarianter har regler.", "Bara standardsvenska är riktig svenska.", "Ungdomsspråk saknar grammatik."], ratt: 0 },
    ],
    oppna: [
      { fraga: "Förklara skillnaden mellan dialekt och sociolekt och ge ett exempel på varje.", bedomning: ["Korrekt förklaring av båda begreppen", "Ett relevant exempel på varje", "Tydligt formulerat med egna ord"] },
      { fraga: "Skriv samma budskap till två olika mottagare och förklara vad du har ändrat och varför.", bedomning: ["Två tydligt olika stilnivåer", "Förklarar ordval, meningsbyggnad eller ton", "Kopplar valen till mottagare och syfte"] },
      { fraga: "Resonera om varför det är viktigt att kunna uttrycka sig väl i ett demokratiskt samhälle.", bedomning: ["Minst två skäl med exempel", "Kopplar till inflytande eller delaktighet", "Ett eget ställningstagande"] },
    ],
  },
  tips: [
    "Var lyhörd för att dialekter och ungdomsspråk är en del av elevernas identitet – utgå från nyfikenhet, inte rätt och fel.",
    "Institutet för språk och folkminnen (isof.se) har dialektinspelningar och material om ungdomsspråk.",
    "Lektion 4 kan kopplas till ett argumenterande skrivande: samma budskap i en insändare och ett sms.",
    "Låt flerspråkiga elever berätta om dialekter i sina modersmål – variation finns i alla språk.",
  ],
};
