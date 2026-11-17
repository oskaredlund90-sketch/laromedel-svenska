import type { Arbetsomrade } from "../typer";

export const SPRAKHISTORIA: Arbetsomrade = {
  id: "svenskans-historia",
  titel: "Svenskans historia",
  stadie: "hogstadiet",
  arskurs: "9",
  ingress:
    "Från runor till chattbottar: varifrån svenskan kommer, hur den har förändrats och varför. Eleverna ser hur samhällsutveckling och kontakt med andra språk har format språket – och funderar på hur digital teknik och AI kan påverka det framöver.",
  kursplan: [
    "Översiktligt det svenska språkets ursprung och utveckling över tid.",
    "Hur samhällsutveckling, kontakt med andra språk och lånord har påverkat och format svenskan.",
    "Hur digital teknik som bygger på artificiell intelligens kan påverka språkets utveckling.",
    "Läsning av sakprosa som behandlar språkets struktur, utveckling och variation.",
    "Att återge, förklara och samtala om språk – och använda innehåll ur lästa texter i en muntlig presentation.",
  ],
  mal: [
    "Placera svenskan i den indoeuropeiska språkfamiljen och den germanska grenen.",
    "Beskriva svenskans perioder: urnordiska, runsvenska, fornsvenska, nysvenska och nusvenska.",
    "Ge exempel på lånord från latin och grekiska, lågtyska, franska och engelska – och förklara varför de kom.",
    "Förklara hur boktryck, bibelöversättning, stavningsreformer och språklagen har påverkat svenskan.",
    "Resonera om hur digital teknik och AI kan påverka språket.",
  ],
  begrepp: [
    ["språkfamilj", "språk som har ett gemensamt ursprung, t.ex. de indoeuropeiska språken"],
    ["urnordiska", "det gemensamma språket i Norden ca 200–800"],
    ["runor", "de tecken som användes för att skriva innan det latinska alfabetet kom"],
    ["fornsvenska", "svenskan ca 1225–1526, t.ex. i landskapslagarna"],
    ["kasus", "böjning som visar ordets roll i meningen; fornsvenskan hade fyra kasus"],
    ["lånord", "ord som har lånats in från ett annat språk"],
    ["nysvenska", "svenskan från 1526, då Nya testamentet trycktes på svenska"],
    ["stavningsreform", "officiell ändring av stavningen, t.ex. 1906 då hv blev v"],
    ["språkvård", "arbete för att språket ska vara begripligt och användbart, t.ex. Språkrådets"],
    ["nusvenska", "svenskan från omkring 1900 till i dag"],
    ["nyord", "ord som nyligen har kommit in i språket"],
  ],
  lankar: [
    ["Språkhistoria – elevsidan", "sprakhistoria"],
    ["Nordiska språk", "nordiska-sprak"],
    ["Ordbildning: lånord och förkortningar (grammatikboken)", "grammatik/ordbildning"],
  ],
  fortest: [
    { fraga: "Vilken språkfamilj tillhör svenskan?", alternativ: ["den finsk-ugriska", "den indoeuropeiska", "den semitiska"], ratt: 1 },
    { fraga: "Vilket språk är svenskan närmast släkt med?", alternativ: ["finska", "norska", "estniska"], ratt: 1 },
    { fraga: "Vad användes för att skriva i Norden under vikingatiden?", alternativ: ["runor", "latinska bokstäver", "hieroglyfer"], ratt: 0 },
    { fraga: "Ordet ”jeans” är ett lånord från …", alternativ: ["franskan", "engelskan", "tyskan"], ratt: 1 },
    { fraga: "Ordet ”fåtölj” är ett lånord från …", alternativ: ["franskan", "latinet", "engelskan"], ratt: 0 },
    { fraga: "Vad hände med svenskan när kristendomen kom?", alternativ: ["Runorna ersattes efterhand av det latinska alfabetet.", "Svenskan började skrivas med kyrilliska bokstäver.", "Ingenting – språket påverkades inte."], ratt: 0 },
    { fraga: "Varför ändras ett språk?", alternativ: ["Bara för att språkexperter bestämmer det.", "Samhället förändras och människor möter andra språk.", "Språk ändras aldrig."], ratt: 1 },
    { fraga: "Vad är ett nyord?", alternativ: ["ett ord som nyligen har kommit in i språket", "ett ord som bara används av unga", "ett ord som är felstavat"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Varifrån kommer svenskan?",
      mal: "Eleverna kan placera svenskan i den indoeuropeiska språkfamiljen och känna igen släktskapen i vanliga ord.",
      upplagg: [
        "Förtestet (10 min) – visa frågorna på bilderna och låt eleverna svara på papper. Spara resultaten.",
        "Genomgång: språkfamiljer och svenskans plats (15 min).",
        "Par: jämför orden i tabellen och leta mönster (10 min).",
        "Avsluta med diskussionsfrågan.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Svenskan har släktingar", punkter: [
          "Svenskan är ett indoeuropeiskt språk – samma språkfamilj som engelska, tyska, franska, ryska, persiska och hindi.",
          "Inom familjen hör svenskan till den germanska grenen, tillsammans med bland annat engelska, tyska och nederländska.",
          "Närmast släkt är norska, danska, isländska och färöiska – de nordiska språken.",
          "Finska, samiska och estniska hör till en helt annan språkfamilj: den finsk-ugriska (uraliska).",
        ] },
        { typ: "jamfor", rubrik: "Ser du släktskapen?", kolumner: ["Svenska", "Engelska · Tyska · Latin"], rader: [
          ["mor (äldre: moder)", "mother · Mutter · mater"],
          ["tre", "three · drei · tres"],
          ["natt", "night · Nacht · nox (noctis)"],
          ["fot", "foot · Fuß · pes (pedis)"],
        ] },
        { typ: "diskutera", fragor: ["Varför liknar orden varandra, fast språken talas långt ifrån varandra?", "Vilka språk kan du som har ord som liknar svenska?"] },
      ],
      elevtext: [
        { rubrik: "En stor språkfamilj", stycken: [
          "För flera tusen år sedan talades ett språk som forskarna kallar urindoeuropeiska. Ingen vet säkert var det talades. När människor flyttade och grupper skildes åt utvecklades språket åt olika håll. Så uppstod många av dagens språk i Europa och Asien.",
          "Svenskan hör till den germanska grenen av den indoeuropeiska språkfamiljen. Därför liknar många svenska ord engelska och tyska ord: moder – mother – Mutter.",
          "Finskan, samiskan och estniskan är inte släkt med svenskan på samma sätt. De hör till den finsk-ugriska språkfamiljen. Men eftersom språken har talats sida vid sida i Norden i århundraden har de lånat ord av varandra.",
        ] },
      ],
      uppgifter: [
        "Skriv tre ord på svenska och samma ord på engelska och tyska (eller ett annat språk du kan). Vad är likt?",
        "Förklara med egna ord: varför liknar svenska och engelska varandra mer än svenska och finska?",
        "Rita ett enkelt språkträd med indoeuropeiska överst, den germanska grenen och svenskan.",
      ],
      lankar: [["Språkhistoria – elevsidan", "sprakhistoria"]],
    },
    {
      titel: "Runor, vikingar och fornsvenska",
      mal: "Eleverna kan beskriva urnordiska, runsvenska och fornsvenska och förklara hur kristendomen och handeln påverkade språket.",
      upplagg: [
        "Repetera förra lektionen med en fråga.",
        "Genomgång med tidslinjen på bilderna (15 min).",
        "Läs elevtexten två och två och svara på frågorna (20 min).",
        "Visa en bild på Rökstenen (sök på Riksantikvarieämbetets webbplats) och låt eleverna gissa vad den berättar.",
      ],
      bilder: [
        { typ: "jamfor", rubrik: "Svenskans tidiga perioder", kolumner: ["Period", "Kännetecken"], rader: [
          ["Urnordiska ca 200–800", "Ett gemensamt språk i Norden. Den äldre runraden med 24 runor."],
          ["Runsvenska ca 800–1225", "Vikingatiden. Den yngre runraden med 16 runor. Runstenar."],
          ["Fornsvenska ca 1225–1526", "Latinska alfabetet. Landskapslagarna skrivs ned. Fyra kasus."],
        ] },
        { typ: "punkter", rubrik: "Vad förändrade språket?", punkter: [
          "Kristendomen: kyrkan kom med det latinska alfabetet och ord som kyrka, präst, skola och brev.",
          "Hansan: tyska köpmän dominerade handeln på 1300- och 1400-talen. Många lågtyska ord kom in: betala, handla, fru, borgmästare.",
          "Även ändelser och förstavelser lånades: -het, -bar, be- och för-.",
        ] },
        { typ: "fraga", fraga: { fraga: "Varför kom så många lågtyska ord in i svenskan under medeltiden?", alternativ: ["Tyska köpmän i Hansan styrde mycket av handeln.", "Svenska kungar talade bara tyska.", "Tyskan var kyrkans språk."], ratt: 0, forklaring: "Hansan var ett förbund av tyska handelsstäder. Köpmännen bodde i svenska städer som Visby och Stockholm." } },
      ],
      elevtext: [
        { rubrik: "Från runor till landskapslagar", stycken: [
          "Det äldsta språket vi känner till i Norden kallas urnordiska. Det skrevs med runor, ofta på stenar eller föremål. Den äldre runraden hade 24 tecken. Under vikingatiden, från omkring 800, användes en kortare runrad med 16 tecken. Språket kallas då runsvenska.",
          "En av världens mest kända runstenar är Rökstenen i Östergötland. Den restes på 800-talet och har den längsta runinskrift som finns bevarad.",
          "När kristendomen kom till Sverige kom också det latinska alfabetet. Från 1200-talet skrevs lagar ned på pergament, till exempel Västgötalagen. Språket kallas nu fornsvenska. Det hade fyra kasus, alltså böjningsformer som visade ordets roll i meningen – ungefär som tyskan har i dag.",
          "Under 1300- och 1400-talen styrde tyska köpmän i Hansan handeln i Östersjön. Därför kom hundratals lågtyska ord in i svenskan, till exempel betala, handla och borgmästare.",
        ] },
      ],
      uppgifter: [
        "Gör en tidslinje med urnordiska, runsvenska och fornsvenska. Skriv ett kännetecken för varje period.",
        "Varför försvann runorna? Förklara med två meningar.",
        "Ge två exempel på lånord från kyrkans tid och två från Hansans tid.",
        "Fornsvenskan hade fyra kasus. Vilka språk som du känner till har kasus i dag? (Tips: svenskan har kvar en del, t.ex. jag – mig.)",
      ],
      lankar: [["Språkhistoria – tidslinje", "sprakhistoria"]],
    },
    {
      titel: "Boktryck, bibel och franska ord",
      mal: "Eleverna kan förklara hur boktrycket och bibelöversättningen gjorde svenskan mer enhetlig och varför franska ord kom in.",
      upplagg: [
        "Fråga på bilderna som start.",
        "Genomgång: nysvenska (15 min).",
        "Sortera lånorden i elevmaterialet efter språk (15 min) – gå sedan igenom tillsammans.",
        "Exit: varje elev skriver ett lånord och dess ursprung på en lapp.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Nysvenska – från 1526", punkter: [
          "1526 trycktes Nya testamentet på svenska. Det räknas som början på nysvenskan.",
          "1541 kom hela Bibeln, Gustav Vasas bibel. Den lästes i hela riket och gjorde skriftspråket mer enhetligt.",
          "Boktrycket gjorde att samma text kunde spridas i många exemplar.",
        ] },
        { typ: "punkter", rubrik: "Fint att tala franska", punkter: [
          "Under 1700-talet var franska överklassens och hovets språk i Europa.",
          "Många franska ord kom in, ofta om mode, mat och boende: byrå, fåtölj, trottoar, paraply, parfym.",
          "1786 grundade Gustav III Svenska Akademien för att vårda svenskan.",
        ] },
        { typ: "fraga", fraga: { fraga: "Varför blev skriftspråket mer enhetligt på 1500-talet?", alternativ: ["Bibeln trycktes och lästes i hela riket.", "Alla började skriva med runor igen.", "Kungen förbjöd dialekter."], ratt: 0, forklaring: "Gustav Vasas bibel (1541) blev en förebild för hur svenska skulle skrivas." } },
      ],
      elevtext: [
        { rubrik: "Nysvenska", stycken: [
          "På 1400-talet uppfanns boktryckarkonsten i Europa. Nu kunde samma text tryckas i många exemplar. År 1526 trycktes Nya testamentet på svenska, och 1541 kom hela Bibeln. Den kallas Gustav Vasas bibel efter kungen som lät översätta den.",
          "Bibeln lästes i kyrkor i hela landet. Stavningen och böjningen i den blev en förebild, och skriftspråket blev mer enhetligt. Därför räknas 1526 som början på den period som kallas nysvenska.",
          "Under 1700-talet var franska det fina språket i Europa. Den svenska överklassen talade gärna franska, och många franska ord kom in i svenskan, till exempel byrå, fåtölj, trottoar och paraply. Ofta har stavningen försvenskats: bureau blev byrå.",
          "År 1786 grundade kung Gustav III Svenska Akademien. Den skulle arbeta för svenska språkets ”renhet, styrka och höghet”. Akademien ger fortfarande ut Svenska Akademiens ordlista, SAOL.",
        ] },
      ],
      uppgifter: [
        "Varför räknas 1526 som ett viktigt år för svenskan?",
        "Sortera orden efter språket de kommer från (latin, lågtyska, franska, engelska): skola, betala, fåtölj, weekend, brev, handla, paraply, mejl.",
        "Franska ord har ofta fått svensk stavning (bureau → byrå). Hitta ett annat exempel och förklara hur stavningen ändrats.",
      ],
      lankar: [["Ordbildning: lånord (grammatikboken)", "grammatik/ordbildning"]],
    },
    {
      titel: "1900-talet: reformer och engelska",
      mal: "Eleverna kan beskriva hur stavningen, verbböjningen och tilltalet förändrades under 1900-talet och hur engelskan påverkar svenskan.",
      upplagg: [
        "Visa jämförelsebilden och låt eleverna gissa vad som ändrats (10 min).",
        "Genomgång: reformer och engelskans inflytande (15 min).",
        "Diskussion i grupp: är engelska lånord ett problem? (15 min)",
      ],
      bilder: [
        { typ: "jamfor", rubrik: "Före och efter", kolumner: ["Förr", "Nu"], rader: [
          ["Hvad säger du?", "Vad säger du? (stavningsreformen 1906)"],
          ["Vi äro trötta. De gingo hem.", "Vi är trötta. De gick hem. (verbens pluralformer försvann)"],
          ["Vill professorn ha kaffe?", "Vill du ha kaffe? (du-reformen på 1960-talet)"],
        ] },
        { typ: "punkter", rubrik: "Engelskan i svenskan", punkter: [
          "Efter andra världskriget har de flesta nya lånorden kommit från engelskan: jeans, mejl, chatt, weekend.",
          "Många ord försvenskas med tiden: e-mail blev mejl.",
          "Ibland blandas språken mitt i en mening. Det kallas kodväxling.",
          "Språkrådet följer utvecklingen och ger råd – till exempel om att skriva svenska ord där de finns.",
        ] },
        { typ: "diskutera", fragor: ["Är det bra eller dåligt att svenskan lånar ord från engelskan?", "Finns det situationer där engelska ord gör det svårare att förstå?"] },
      ],
      elevtext: [
        { rubrik: "Nusvenska – från ca 1900", stycken: [
          "Från omkring 1900 kallas språket nusvenska. År 1906 kom en stavningsreform. Bland annat skrevs hv och fv om till v: hvad blev vad och hafva blev hava. Under 1900-talets första hälft försvann också verbens pluralformer ur skriftspråket. I dag skriver vi vi är, inte vi äro.",
          "På 1960-talet slutade de flesta att säga ni eller titlar till varandra och började säga du. Det kallas du-reformen. Den visar att språket förändras när samhället blir mindre hierarkiskt.",
          "Efter andra världskriget har engelskan blivit det språk svenskan lånar mest ifrån. Det beror på film, musik, internet och att många använder engelska i arbetet. Många ord får svensk stavning efter ett tag: e-mail blev mejl.",
          "År 2009 kom språklagen. Där står att svenska är huvudspråk i Sverige och att språket i offentlig verksamhet ska vara vårdat, enkelt och begripligt.",
        ] },
      ],
      uppgifter: [
        "Skriv om meningen till nusvenska: Hvad gjorde I, när I kommo hem?",
        "Ge tre engelska lånord du använder. Finns det ett svenskt ord som betyder samma sak?",
        "Varför tror du att du-reformen kom just på 1960-talet?",
        "Vad säger språklagen om språket i offentlig verksamhet? Ge ett exempel på en text där det är viktigt.",
      ],
    },
    {
      titel: "Lånordsdetektiven",
      mal: "Eleverna kan ta reda på ett ords ursprung och förklara varför ordet kom in i svenskan.",
      upplagg: [
        "Visa hur man slår upp ett ords ursprung på svenska.se (Svensk ordbok har ofta uppgift om när ordet först belagts och varifrån det kommer).",
        "Eleverna arbetar två och två med fem ord var (25 min).",
        "Paren presenterar ett ord var för klassen (15 min).",
      ],
      bilder: [
        { typ: "uppgift", rubrik: "Bli lånordsdetektiv", text: "Välj fem ord ur listan. Ta reda på vilket språk de kommer från och ungefär när de kom in i svenskan.", punkter: [
          "Ord: kudde, fönster, gurka, spegel, socker, bank, fotboll, schack, kaffe, robot.",
          "Använd svenska.se eller en etymologisk ordbok.",
          "Förklara varför ordet kom in just då: handel, religion, mode, teknik?",
        ] },
        { typ: "punkter", rubrik: "Svenskans lånord i korthet", punkter: [
          "Latin och grekiska: religion, skola och vetenskap.",
          "Lågtyska: handel och hantverk under medeltiden.",
          "Franska: mode, mat och boende på 1700-talet.",
          "Engelska: teknik, nöje och arbetsliv efter 1945.",
        ] },
      ],
      elevtext: [
        { rubrik: "Så hittar du ett ords ursprung", stycken: [
          "På svenska.se finns Svenska Akademiens ordböcker. I Svensk ordbok står ofta när ordet först finns belagt i svenskan och vilket språk det kommer från.",
          "Ett ord kan ha vandrat genom flera språk. Kaffe kommer till exempel från arabiskan och har kommit till svenskan via turkiska och andra europeiska språk.",
        ] },
      ],
      uppgifter: [
        "Fyll i tabellen för fem ord: ord – ursprungsspråk – ungefär när – varför kom ordet?",
        "Välj ett av orden och skriv en kort text (5–7 meningar) om ordets resa till svenskan.",
        "Presentera ditt ord för klassen på högst en minut.",
      ],
    },
    {
      titel: "Språket i dag – och i morgon",
      mal: "Eleverna kan resonera om hur digital teknik och AI påverkar språket och sammanfatta arbetsområdet.",
      upplagg: [
        "Visa några ord från Språkrådets senaste nyordslista (finns på isof.se) och låt eleverna gissa betydelsen.",
        "Diskussion: hur påverkar AI och mobiler hur vi skriver? (15 min)",
        "Repetera inför provet med frågorna på bilderna.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Digital teknik och AI", punkter: [
          "Nya ord kommer snabbt, ofta från engelskan: chattbot, deepfake, att googla.",
          "Rättstavning och ordförslag i mobilen påverkar hur vi skriver.",
          "AI kan översätta och skriva texter. Det kan göra det lättare att förstå andra språk – men också göra språket mer likformigt om alla använder samma verktyg.",
          "Den som själv kan läsa och skriva väl kan granska vad en AI skriver.",
        ] },
        { typ: "diskutera", fragor: ["Hur tror du att svenskan har förändrats om 100 år?", "Vad kan hända med ett språk om allt fler texter skrivs av AI?"] },
        { typ: "fraga", fraga: { fraga: "Vilken period räknas från 1526?", alternativ: ["fornsvenska", "nysvenska", "runsvenska"], ratt: 1 } },
        { typ: "fraga", fraga: { fraga: "Vilket språk lånar svenskan flest nya ord från i dag?", alternativ: ["franska", "engelska", "lågtyska"], ratt: 1 } },
      ],
      elevtext: [
        { rubrik: "Svenskan i den digitala tiden", stycken: [
          "Varje år samlar Språkrådet nya ord i en nyordslista. Många handlar om teknik, samhälle och klimat. En del försvinner snabbt, andra blir kvar.",
          "Mobiler och datorer föreslår ord och rättar stavningen. AI-verktyg kan översätta och skriva hela texter. Det kan hjälpa oss att förstå andra språk, men det påverkar också vilka ord och vilken stil som blir vanliga. Därför är det viktigt att själv kunna läsa och skriva väl – och granska det en AI skriver.",
        ] },
      ],
      uppgifter: [
        "Hitta tre ord från Språkrådets nyordslista. Förklara vad de betyder och varför de kan ha kommit.",
        "Skriv ett resonerande stycke (8–10 meningar): Hur kan AI påverka svenskan? Ta upp både fördelar och risker.",
        "Sammanfatta svenskans historia i fem punkter.",
      ],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Svenskan tillhör den … grenen av den indoeuropeiska språkfamiljen.", alternativ: ["romanska", "germanska", "slaviska"], ratt: 1 },
      { fraga: "Vilket språk hör INTE till samma språkfamilj som svenskan?", alternativ: ["tyska", "finska", "engelska"], ratt: 1 },
      { fraga: "Hur många runor hade den yngre runraden?", alternativ: ["16", "24", "29"], ratt: 0 },
      { fraga: "Vad räknas som början på nysvenskan?", alternativ: ["att Rökstenen restes", "att Nya testamentet trycktes på svenska 1526", "stavningsreformen 1906"], ratt: 1 },
      { fraga: "Fornsvenskan hade fyra …", alternativ: ["kasus", "tempus", "dialekter"], ratt: 0 },
      { fraga: "Vilka ord kom från lågtyskan under medeltiden?", alternativ: ["betala, handla, borgmästare", "fåtölj, paraply, byrå", "jeans, mejl, chatt"], ratt: 0 },
      { fraga: "Varför kom många franska ord in under 1700-talet?", alternativ: ["Franska var hovets och överklassens språk.", "Sverige erövrade Frankrike.", "Bibeln översattes från franska."], ratt: 0 },
      { fraga: "Vem grundade Svenska Akademien 1786?", alternativ: ["Gustav Vasa", "Gustav III", "Karl XII"], ratt: 1 },
      { fraga: "Vad hände i stavningsreformen 1906?", alternativ: ["hv och fv blev v, t.ex. hvad → vad", "runorna förbjöds", "alla franska ord fick svensk stavning"], ratt: 0 },
      { fraga: "Vad säger språklagen (2009) om språket i offentlig verksamhet?", alternativ: ["Det ska vara vårdat, enkelt och begripligt.", "Det ska skrivas på engelska.", "Det får bara innehålla svenska ord."], ratt: 0 },
      { fraga: "Vad kallas det när man blandar två språk i samma samtal eller mening?", alternativ: ["kodväxling", "kasus", "stavningsreform"], ratt: 0 },
      { fraga: "Vilket påstående stämmer?", alternativ: ["Språk förändras när samhället förändras.", "Svenskan har varit likadan sedan vikingatiden.", "Lånord gör alltid språket sämre."], ratt: 0 },
    ],
    oppna: [
      { fraga: "Välj två perioder i svenskans historia. Beskriv vad som kännetecknar språket och vad i samhället som påverkade det.", bedomning: ["Två perioder namnges korrekt", "Ett språkligt kännetecken per period", "En samhällsorsak per period (t.ex. kristendom, handel, boktryck)"] },
      { fraga: "Förklara med exempel varför svenskan har lånat ord från olika språk under olika tider.", bedomning: ["Minst tre språk med exempel på lånord", "Kopplar lånen till handel, religion, mode, teknik eller liknande", "Tydligt orsakssamband (eftersom, därför att, ledde till)"] },
      { fraga: "Hur kan digital teknik och AI påverka svenskan i framtiden? Resonera och ge både en möjlig fördel och en möjlig risk.", bedomning: ["En fördel med motivering", "En risk med motivering", "Ett eget, underbyggt ställningstagande"] },
    ],
  },
  tips: [
    "Lägg gärna arbetsområdet i samband med historieämnet (vikingatid, medeltid, reformationen).",
    "Låt elever med andra modersmål jämföra med sitt språks historia och lånord – det ger perspektiv på svenskan.",
    "Den sista öppna provfrågan passar också som muntlig redovisning i grupp.",
    "För elever som behöver mer stöd: ge tidslinjen ifylld och låt dem lägga till ett exempel per period.",
  ],
};
