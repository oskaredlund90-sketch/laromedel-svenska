import type { Arbetsomrade } from "../typer";

export const KALLKRITIK_HOG: Arbetsomrade = {
  id: "kallkritik-algoritmer-och-ai",
  titel: "Källkritik, algoritmer och AI",
  stadie: "hogstadiet",
  arskurs: "8",
  ingress:
    "Hur vet man vad som är sant? Eleverna lär sig granska avsändare, syfte och sammanhang, förstå hur sökmotorer och flöden väljer vad vi ser och upptäcka innehåll som är skapat eller förändrat med AI – och använder information ansvarsfullt i egna texter.",
  kursplan: [
    "Att söka, välja och värdera information från olika källor.",
    "Att urskilja texters syfte, avsändare och sammanhang.",
    "Hur källors tillförlitlighet och relevans kan bedömas och hur information kan användas ansvarsfullt.",
    "Hur digitala sökverktyg och algoritmer påverkar sökresultat.",
    "Att digitalt innehåll kan skapas eller förändras med generativ AI och framstå som trovärdigt.",
    "Att citera och referera till källor och använda källhänvisningar i egna texter.",
  ],
  mal: [
    "Granska en källa utifrån avsändare, syfte, tid och om uppgifterna bekräftas av andra.",
    "Förklara hur algoritmer, annonser och filterbubblor påverkar vad vi ser.",
    "Känna igen tecken på AI-skapade eller manipulerade bilder och texter och veta hur man kontrollerar dem.",
    "Citera, referera och skriva källhänvisningar i egna texter.",
  ],
  begrepp: [
    ["källa", "det ställe där en uppgift kommer ifrån"],
    ["avsändare", "den person eller organisation som står bakom en text"],
    ["syfte", "varför texten finns: informera, sälja, påverka, underhålla"],
    ["tendens", "att en källa har ett intresse av att framställa något på ett visst sätt"],
    ["förstahandskälla", "någon som själv har varit med eller undersökt saken"],
    ["algoritm", "en beräkning som till exempel väljer vilka inlägg eller sökträffar du ser"],
    ["filterbubbla", "när du mest ser innehåll som liknar det du redan gillar"],
    ["generativ AI", "AI som skapar texter, bilder, ljud eller film"],
    ["lateral läsning", "att lämna sidan och kontrollera avsändaren i andra källor"],
    ["källhänvisning", "uppgift om var informationen kommer ifrån"],
  ],
  lankar: [
    ["Källkritik – elevsidan", "kallkritik"],
    ["AI i svenskan", "ai-i-svenskan"],
    ["Skiljetecken: citat och källhänvisningar (grammatikboken)", "grammatik/skiljetecken"],
  ],
  fortest: [
    { fraga: "Vad är en avsändare?", alternativ: ["den som står bakom en text", "den som läser texten", "ett annat ord för rubrik"], ratt: 0 },
    { fraga: "Varför visar sociala medier olika inlägg för olika personer?", alternativ: ["slumpen", "algoritmer väljer utifrån vad du har tittat på", "alla ser samma sak"], ratt: 1 },
    { fraga: "Vilken källa är troligen mest tillförlitlig om en ny lag?", alternativ: ["riksdagens webbplats", "en okänd blogg", "ett inlägg i en chattgrupp"], ratt: 0 },
    { fraga: "Vad kan generativ AI göra?", alternativ: ["bara rätta stavfel", "skapa texter och bilder som ser äkta ut", "ingenting som kan påverka nyheter"], ratt: 1 },
    { fraga: "Vad är ett bra första steg om du är osäker på en uppgift?", alternativ: ["dela den så att fler kan avgöra", "kontrollera om andra trovärdiga källor säger samma sak", "lita på den om den har många likes"], ratt: 1 },
    { fraga: "Vad är en filterbubbla?", alternativ: ["när du mest ser sådant som liknar det du redan gillar", "ett skydd mot virus", "en typ av annons"], ratt: 0 },
    { fraga: "Vad är en källhänvisning?", alternativ: ["uppgift om var informationen kommer ifrån", "en sammanfattning av texten", "ett citat utan citattecken"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Vem säger det – och varför?",
      mal: "Eleverna kan granska en källa utifrån avsändare, syfte, tid och tendens.",
      upplagg: [
        "Förtestet (10 min).",
        "Genomgång av granskningsfrågorna (15 min).",
        "Eleverna granskar tre webbsidor om samma ämne (t.ex. energidrycker: en myndighet, en tillverkare, ett forum) med frågorna i elevmaterialet (20 min).",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Fem frågor till varje källa", punkter: [
          "Vem är avsändaren? Finns ett namn, en organisation, kontaktuppgifter?",
          "Varför finns texten? Informera, sälja, påverka eller underhålla?",
          "När skrevs den? Är uppgifterna fortfarande aktuella?",
          "Är det en förstahandskälla – eller återberättar någon?",
          "Säger andra trovärdiga källor samma sak?",
        ] },
        { typ: "jamfor", rubrik: "Samma ämne – olika syften", kolumner: ["Avsändare", "Troligt syfte"], rader: [
          ["Livsmedelsverket", "informera om hälsa"],
          ["Ett företag som säljer energidryck", "sälja"],
          ["En intresseorganisation", "påverka"],
          ["En influencer med sponsrat inlägg", "sälja – reklam ska vara märkt"],
        ] },
        { typ: "fraga", fraga: { fraga: "Ett företag skriver att deras dryck ”ger mer energi än alla andra”. Vilket ord beskriver källan?", alternativ: ["den har tendens – den vill sälja", "neutral", "förstahandskälla utan intresse"], ratt: 0 } },
      ],
      elevtext: [
        { rubrik: "Att granska en källa", stycken: [
          "En källa är det ställe där en uppgift kommer ifrån: en webbsida, en bok, en person eller en video. Alla källor har en avsändare, och avsändaren har ett syfte. En myndighet vill oftast informera, ett företag vill sälja och en intresseorganisation vill påverka.",
          "När en källa har ett intresse av att visa något på ett visst sätt säger man att den har tendens. Det betyder inte att allt den säger är fel – men du behöver kontrollera uppgifterna någon annanstans.",
          "Tänk också på tiden. En text om mobiltelefoner från 2012 kan vara helt riktig – för 2012. Och fråga dig om källan själv har varit med eller undersökt saken, eller om den bara återberättar.",
        ] },
      ],
      uppgifter: [
        "Granska tre källor om samma ämne med de fem frågorna. Fyll i tabellen: avsändare – syfte – tid – tendens – bekräftas av andra?",
        "Vilken av källorna skulle du använda i en faktatext? Motivera.",
        "Förklara begreppet tendens med ett eget exempel.",
      ],
      lankar: [["Källkritik – elevsidan", "kallkritik"]],
    },
    {
      titel: "Algoritmer, annonser och filterbubblor",
      mal: "Eleverna kan förklara hur sökmotorer och flöden väljer innehåll och hur det påverkar vad vi tror är sant.",
      upplagg: [
        "Låt två elever söka på samma ord på sina mobiler och jämför de första träffarna (5 min).",
        "Genomgång (15 min).",
        "Diskussion i grupp (15 min).",
        "Uppgift 2 som skrivuppgift.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Vem väljer vad du ser?", punkter: [
          "Sökmotorer och sociala medier använder algoritmer: beräkningar som väljer vad du ser.",
          "Algoritmerna utgår från vad du har klickat på, gillat och tittat länge på.",
          "Annonsörer betalar för att synas högt upp. Sponsrade träffar är märkta – men lätta att missa.",
          "Den som mest ser sådant som bekräftar det hen redan tycker hamnar i en filterbubbla.",
          "Innehåll som väcker starka känslor sprids ofta snabbast.",
        ] },
        { typ: "diskutera", fragor: ["Hur kan algoritmer påverka vad du tycker om en fråga?", "Hur kan du ta dig ur din filterbubbla?"] },
        { typ: "fraga", fraga: { fraga: "Vad är en filterbubbla?", alternativ: ["när algoritmer mest visar sådant du redan gillar", "en reklamkampanj", "ett sätt att söka snabbare"], ratt: 0 } },
      ],
      elevtext: [
        { rubrik: "Algoritmerna bestämmer – nästan", stycken: [
          "När du söker eller scrollar väljer en algoritm vad du ser. Den räknar ut vad du sannolikt vill klicka på utifrån vad du har gjort tidigare. Därför kan två personer som söker på samma ord få olika resultat.",
          "Det kan vara praktiskt, men det innebär också att du kan hamna i en filterbubbla – där du mest möter åsikter och nyheter som liknar dem du redan har. Innehåll som gör oss arga eller rädda sprids ofta mest, eftersom vi reagerar på det.",
          "Annonsörer betalar för att synas. Sponsrade sökträffar och inlägg ska vara märkta som reklam. Tänk på att det första du ser inte alltid är det mest tillförlitliga.",
        ] },
      ],
      uppgifter: [
        "Förklara med egna ord vad en algoritm gör i ett socialt medium.",
        "Skriv ett resonerande stycke (8–10 meningar): Är filterbubblor ett problem för demokratin?",
        "Ge tre konkreta tips på hur man kan få en bredare bild av en nyhet.",
      ],
    },
    {
      titel: "Äkta eller AI?",
      mal: "Eleverna kan känna igen tecken på AI-skapat eller manipulerat innehåll och kontrollera det med lateral läsning och bildsökning.",
      upplagg: [
        "Visa två bilder – en äkta och en AI-skapad – och låt eleverna gissa (5 min). Använd exempel från en faktagranskande redaktion.",
        "Genomgång: varningstecken och kontrollmetoder (15 min).",
        "Eleverna kontrollerar ett påstående eller en bild med omvänd bildsökning och lateral läsning (20 min).",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Generativ AI", punkter: [
          "Generativ AI kan skapa texter, bilder, röster och filmer som ser äkta ut.",
          "Det kan användas kreativt – men också för att lura, till exempel med falska bilder av kända personer (deepfakes).",
          "Det går inte alltid att se med blotta ögat. Kontrollera därför källan, inte bara bilden.",
        ] },
        { typ: "uppgift", rubrik: "Så kontrollerar du", text: "Lateral läsning: lämna sidan och ta reda på vem som står bakom.", punkter: [
          "Sök på avsändarens namn – vad säger andra om den?",
          "Gör en omvänd bildsökning: var har bilden publicerats tidigare?",
          "Finns nyheten hos flera etablerade nyhetsredaktioner?",
          "Var särskilt försiktig om något väcker starka känslor och uppmanar dig att dela snabbt.",
        ] },
        { typ: "fraga", fraga: { fraga: "Vad är lateral läsning?", alternativ: ["att lämna sidan och kontrollera avsändaren i andra källor", "att läsa texten från höger till vänster", "att läsa bara rubrikerna"], ratt: 0 } },
      ],
      elevtext: [
        { rubrik: "Bilder och texter som inte är vad de ser ut att vara", stycken: [
          "Med generativ AI kan vem som helst skapa en bild, en röst eller en film som ser äkta ut. Det används i reklam, film och konst – men också för att sprida falska nyheter.",
          "Förr kunde man ofta se felen i AI-bilder, till exempel konstiga händer eller text. I dag blir bilderna allt bättre. Därför är det viktigare att granska källan än att granska pixlarna.",
          "Faktagranskare använder lateral läsning. I stället för att läsa en sida noggrant lämnar de den direkt och tar reda på vad andra källor säger om avsändaren. En omvänd bildsökning visar var en bild har publicerats tidigare och om den har använts i ett annat sammanhang.",
        ] },
      ],
      uppgifter: [
        "Gör en omvänd bildsökning på en bild som läraren ger dig. Var publicerades den först?",
        "Kontrollera ett påstående med lateral läsning. Beskriv stegen du tog och vad du kom fram till.",
        "Skriv en kort instruktion till en yngre elev: Så avslöjar du en falsk nyhet.",
      ],
      lankar: [["AI i svenskan", "ai-i-svenskan"]],
    },
    {
      titel: "Använd källor i din egen text",
      mal: "Eleverna kan citera, referera och skriva källhänvisningar och använda AI-verktyg ansvarsfullt.",
      upplagg: [
        "Genomgång: citat, referat och källhänvisning (15 min).",
        "Eleverna skriver ett stycke med ett citat och ett referat från en text du delar ut (20 min).",
        "Diskutera: när är det okej att använda AI i skolarbetet? Följ skolans riktlinjer.",
        "Repetera inför provet.",
      ],
      bilder: [
        { typ: "jamfor", rubrik: "Citat eller referat?", kolumner: ["Sätt", "Exempel"], rader: [
          ["Citat – exakta ord", "”Många unga sover för lite”, skriver Sömnforum (2024). (påhittat exempel)"],
          ["Referat – med egna ord", "Enligt Sömnforum (2024) får många unga för lite sömn."],
          ["Källförteckning", "Sömnforum (2024). Titel på texten. Hämtad från webbadressen."],
        ] },
        { typ: "punkter", rubrik: "Ansvarsfullt", punkter: [
          "Skriv alltid varifrån informationen kommer – annars ser det ut som om tankarna är dina.",
          "Om du använder ett AI-verktyg: kontrollera fakta i riktiga källor, eftersom AI kan hitta på uppgifter.",
          "Följ skolans regler för när och hur AI får användas.",
        ] },
        { typ: "fraga", fraga: { fraga: "Vad är ett referat?", alternativ: ["att återge innehållet med egna ord och ange källan", "att kopiera en text exakt", "en lista över alla källor"], ratt: 0 } },
      ],
      elevtext: [
        { rubrik: "Citat, referat och källhänvisning", stycken: [
          "När du använder andras information i en text måste du visa var den kommer ifrån. Ett citat är någons exakta ord inom citattecken. Ett referat återger innehållet med dina egna ord. I båda fallen skriver du källan, till exempel efter en signalfras: Enligt Folkhälsomyndigheten …",
          "Sist i texten kan du ha en källförteckning med de källor du har använt. Där står avsändare, år, titel och var texten finns.",
          "AI-verktyg kan hjälpa till att förstå ett ämne, men de kan också hitta på uppgifter och källor som inte finns. Kontrollera därför alltid fakta i riktiga källor, och följ skolans regler för hur AI får användas.",
        ] },
      ],
      uppgifter: [
        "Skriv ett stycke om ett ämne du väljer med ett citat och ett referat från två olika källor.",
        "Gör en källförteckning för de två källorna.",
        "Varför kan det vara riskabelt att använda en AI-chatt som enda källa?",
      ],
      lankar: [["Skrivregler för citat och källor", "grammatik/skiljetecken"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vilken fråga hjälper dig att avgöra en källas syfte?", alternativ: ["Varför har texten skrivits?", "Hur lång är texten?", "Vilket typsnitt används?"], ratt: 0 },
      { fraga: "Vad betyder det att en källa har tendens?", alternativ: ["den har ett intresse av att framställa något på ett visst sätt", "den är alltid falsk", "den är gammal"], ratt: 0 },
      { fraga: "Vilken är en förstahandskälla?", alternativ: ["en forskare som själv har gjort undersökningen", "en kompis som läst om undersökningen", "ett inlägg som delats tio gånger"], ratt: 0 },
      { fraga: "Varför kan två personer få olika sökresultat?", alternativ: ["algoritmer anpassar resultaten efter användaren", "internet är trasigt", "sökmotorer visar slumpmässiga träffar"], ratt: 0 },
      { fraga: "Vilket innehåll sprids ofta snabbast?", alternativ: ["innehåll som väcker starka känslor", "långa faktatexter", "innehåll utan bilder"], ratt: 0 },
      { fraga: "Vad är en deepfake?", alternativ: ["en falsk bild, film eller röst skapad med AI", "en djup analys", "en typ av algoritm"], ratt: 0 },
      { fraga: "Vad gör man vid en omvänd bildsökning?", alternativ: ["söker var en bild har publicerats tidigare", "vänder bilden upp och ned", "söker efter bilder som liknar en text"], ratt: 0 },
      { fraga: "Vad är lateral läsning?", alternativ: ["att kontrollera avsändaren i andra källor", "att läsa snabbt", "att läsa samma text två gånger"], ratt: 0 },
      { fraga: "Vilket är ett referat?", alternativ: ["Enligt SCB har befolkningen ökat.", "”Befolkningen har ökat”, skriver SCB.", "SCB (2024). Befolkningsstatistik."], ratt: 0 },
      { fraga: "Varför ska man kontrollera fakta från en AI-chatt?", alternativ: ["AI kan hitta på uppgifter och källor", "AI skriver alltid för långt", "det behöver man inte"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Granska källan som läraren ger dig med hjälp av minst fyra granskningsfrågor. Skulle du använda den i en faktatext?", bedomning: ["Minst fyra relevanta granskningsfrågor besvaras", "Avsändare och syfte identifieras korrekt", "Motiverad slutsats"] },
      { fraga: "Förklara hur algoritmer kan påverka vad människor tror är sant. Ge ett exempel.", bedomning: ["Förklarar vad en algoritm gör", "Kopplar till filterbubblor eller spridning av känslomässigt innehåll", "Relevant exempel"] },
      { fraga: "Ge råd till en yngre elev om hur man kan avslöja AI-skapade eller falska bilder och nyheter.", bedomning: ["Minst tre konkreta metoder", "Förklarar varför metoderna fungerar", "Anpassat språk för mottagaren"] },
    ],
  },
  tips: [
    "Använd aktuella exempel från faktagranskande redaktioner – eleverna minns dem bättre.",
    "Myndigheten för psykologiskt försvar och Internetstiftelsen har lärarmaterial om källkritik och desinformation.",
    "Lektion 4 passar inför ett utredande eller argumenterande skrivande.",
    "Följ skolans riktlinjer för AI och låt eleverna diskutera dem.",
  ],
};
