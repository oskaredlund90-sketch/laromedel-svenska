import type { Arbetsomrade } from "../typer";

export const KALLKRITIK_MEL: Arbetsomrade = {
  id: "sant-eller-falskt",
  titel: "Sant eller falskt? Källkritik och AI",
  stadie: "mellanstadiet",
  arskurs: "6",
  ingress:
    "Eleverna lär sig fråga vem som står bakom en text, varför den finns och om den stämmer – och att bilder, ljud och filmer kan vara skapade eller ändrade med AI.",
  kursplan: [
    "Ett källkritiskt förhållningssätt till information som eleverna möter i vardagen.",
    "Att granska, värdera och jämföra information från olika källor: vem som står bakom, i vilket syfte, vem den riktar sig till och vad som påverkar tillförlitligheten.",
    "Att texter, bilder, ljud och filmer kan skapas eller förändras med generativ AI och framstå som trovärdiga.",
    "Introduktion till läsning av digitala texter.",
  ],
  mal: [
    "Ställa frågorna vem, varför, när och stämmer det till en källa.",
    "Skilja mellan texter som vill informera, sälja och påverka.",
    "Jämföra två källor om samma sak.",
    "Veta att bilder och filmer kan vara skapade eller ändrade med AI.",
  ],
  begrepp: [
    ["källa", "där informationen kommer ifrån"],
    ["avsändare", "den som står bakom texten"],
    ["syfte", "varför texten finns"],
    ["reklam", "text eller bild som vill att du ska köpa något"],
    ["AI", "datorprogram som kan skapa texter och bilder"],
  ],
  lankar: [
    ["Källkritik – elevsidan", "kallkritik"],
    ["AI i svenskan", "ai-i-svenskan"],
  ],
  fortest: [
    { fraga: "Vad är en källa?", alternativ: ["där informationen kommer ifrån", "en sorts sjö", "ett annat ord för rubrik"], ratt: 0 },
    { fraga: "Vem står bakom en reklamfilm?", alternativ: ["ett företag som vill sälja", "en forskare", "skolan"], ratt: 0 },
    { fraga: "Kan en bild vara skapad av en dator och ändå se äkta ut?", alternativ: ["ja", "nej"], ratt: 0 },
    { fraga: "Vad gör du om du läser något konstigt på nätet?", alternativ: ["kollar om andra säkra källor säger samma sak", "delar det direkt", "tror på det"], ratt: 0 },
    { fraga: "Vilken webbplats är troligen mest säker om väder?", alternativ: ["SMHI", "en okänd blogg", "en kommentar på sociala medier"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Vem säger det?",
      mal: "Eleverna kan ställa frågorna vem, varför och när till en källa.",
      upplagg: [
        "Förtestet (10 min).",
        "Genomgång av de fyra frågorna (10 min).",
        "Eleverna tittar på tre korta texter (en faktatext, en reklam, en insändare) och svarar på frågorna (20 min).",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Fyra frågor till varje källa", punkter: ["Vem har skrivit det?", "Varför har de skrivit det?", "När skrevs det?", "Stämmer det – säger andra samma sak?"] },
        { typ: "jamfor", rubrik: "Varför finns texten?", kolumner: ["Text", "Syfte"], rader: [
          ["Faktatext i ett uppslagsverk", "informera"],
          ["Reklam för en ny mobil", "sälja"],
          ["Insändare om en ny cykelbana", "påverka"],
          ["Serie i en tidning", "underhålla"],
        ] },
        { typ: "fraga", fraga: { fraga: "En text säger att ett godis är ”världens godaste”. Vem har troligen skrivit den?", alternativ: ["företaget som säljer godiset", "en forskare", "Livsmedelsverket"], ratt: 0 } },
      ],
      elevtext: [
        { rubrik: "Att granska en källa", stycken: [
          "En källa är där informationen kommer ifrån. Det kan vara en bok, en webbsida, en film eller en person.",
          "Bakom varje text finns någon som har skrivit den – en avsändare. Avsändaren har ett syfte: att informera, att sälja, att påverka eller att underhålla. När du vet vem som står bakom och varför blir det lättare att avgöra om du kan lita på texten.",
          "Kolla också när texten skrevs, och om andra säkra källor säger samma sak.",
        ] },
      ],
      uppgifter: [
        "Svara på de fyra frågorna för tre texter: vem, varför, när och stämmer det?",
        "Vilken av texterna skulle du använda i en faktatext? Varför?",
        "Hitta en reklam. Vilka ord visar att den vill att du ska köpa något?",
      ],
      lankar: [["Källkritik – elevsidan", "kallkritik"]],
    },
    {
      titel: "Jämför källor",
      mal: "Eleverna kan jämföra två källor om samma sak och avgöra vilken som är mest trovärdig.",
      upplagg: [
        "Visa två källor om samma ämne (t.ex. om en djurart: en naturfaktasida och ett forum).",
        "Eleverna jämför med tabellen i elevmaterialet två och två (20 min).",
        "Gemensam genomgång: vilken källa litar vi mest på och varför?",
      ],
      bilder: [
        { typ: "uppgift", rubrik: "Jämför två källor", text: "Läs två texter om samma sak och jämför:", punkter: ["Vem står bakom?", "Vad vill de?", "Vad säger de – är det samma sak?", "Vilken litar du mest på – och varför?"] },
        { typ: "diskutera", fragor: ["Kan en källa vara bra till en sak men inte till en annan?", "Varför är det bra att läsa mer än en källa?"] },
      ],
      elevtext: [
        { rubrik: "Två källor är bättre än en", stycken: [
          "Om två säkra källor säger samma sak är det troligare att uppgiften stämmer. Om de säger olika saker behöver du ta reda på mer.",
          "Myndigheter, uppslagsverk och nyhetsredaktioner granskar ofta sina uppgifter innan de publiceras. På forum och i kommentarer kan vem som helst skriva vad som helst.",
        ] },
      ],
      uppgifter: [
        "Fyll i jämförelsetabellen för två källor.",
        "Skriv tre meningar om vilken källa du litar mest på och varför.",
      ],
    },
    {
      titel: "Bilder som ljuger",
      mal: "Eleverna vet att bilder, ljud och filmer kan skapas eller ändras med AI och vet vad de kan göra för att kontrollera dem.",
      upplagg: [
        "Visa en äkta och en AI-skapad bild och låt eleverna gissa (5 min).",
        "Genomgång (10 min).",
        "Eleverna skriver tips till en kompis (15 min) och gör en affisch i grupp.",
        "Repetera inför provet.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Datorn kan skapa bilder", punkter: [
          "Med AI kan man skapa bilder, ljud och filmer som ser äkta ut.",
          "Man kan också ändra en riktig bild så att den visar något som aldrig hänt.",
          "Fråga dig: Vem har lagt ut bilden? Finns den hos fler säkra källor? Verkar den för konstig för att vara sann?",
        ] },
        { typ: "fraga", fraga: { fraga: "Vad är klokt att göra innan du delar en chockerande bild?", alternativ: ["kolla vem som lagt ut den och om fler säkra källor visar den", "dela den så fort som möjligt", "skriva en kommentar"], ratt: 0 } },
      ],
      elevtext: [
        { rubrik: "Äkta eller skapad?", stycken: [
          "AI är datorprogram som kan skapa texter, bilder, ljud och filmer. Ibland ser de helt äkta ut. Det kan vara roligt och kreativt, men det kan också användas för att lura människor.",
          "Om du ser en bild eller film som verkar konstig eller chockerande: stanna upp. Kolla vem som har lagt ut den och om fler säkra källor visar samma sak. Dela inte förrän du vet.",
        ] },
      ],
      uppgifter: [
        "Skriv fem tips till en kompis om hur man kan avslöja en falsk bild.",
        "Gör en affisch i grupp: ”Stanna – tänk – kolla”.",
      ],
      lankar: [["AI i svenskan", "ai-i-svenskan"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vad betyder avsändare?", alternativ: ["den som står bakom texten", "den som får brevet", "texten i sig"], ratt: 0 },
      { fraga: "Vilket syfte har en reklam?", alternativ: ["att sälja", "att informera neutralt", "att underhålla"], ratt: 0 },
      { fraga: "Vilket syfte har en insändare?", alternativ: ["att påverka", "att sälja", "att berätta en saga"], ratt: 0 },
      { fraga: "Vilken källa är mest trovärdig om en sjukdom?", alternativ: ["1177 Vårdguiden", "en okänd blogg", "en kommentar på sociala medier"], ratt: 0 },
      { fraga: "Varför ska man läsa mer än en källa?", alternativ: ["för att se om uppgifterna stämmer", "för att det tar längre tid", "för att det är regel"], ratt: 0 },
      { fraga: "Vad kan AI göra?", alternativ: ["skapa bilder som ser äkta ut", "bara räkna", "ingenting med bilder"], ratt: 0 },
      { fraga: "Vad gör du innan du delar en konstig bild?", alternativ: ["kollar vem som lagt ut den", "delar den direkt", "gillar den"], ratt: 0 },
      { fraga: "Varför är det viktigt att kolla när en text skrevs?", alternativ: ["uppgifterna kan vara gamla", "gamla texter är alltid fel", "det spelar ingen roll"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Granska texten som läraren ger dig med de fyra frågorna: vem, varför, när och stämmer det?", bedomning: ["Svarar på alla fyra frågorna", "Avgör syftet rätt", "Motiverar om texten går att lita på"] },
      { fraga: "Skriv tre tips till en yngre elev om hur man kan avslöja en falsk bild eller nyhet.", bedomning: ["Tre relevanta tips", "Tydligt och enkelt språk"] },
    ],
  },
  tips: [
    "Använd elevernas egna exempel från spel, sociala medier och reklam.",
    "Skolbibliotekarien kan ofta hjälpa till med lektion 2.",
    "Arbetsområdet passar inför en faktatext där eleverna använder två källor.",
  ],
};

export const ORDENS_VARDE_MEL: Arbetsomrade = {
  id: "ord-som-paverkar",
  titel: "Ord som påverkar – formellt, informellt och värdeladdat",
  stadie: "mellanstadiet",
  arskurs: "7",
  ingress:
    "Samma sak kan sägas på många sätt. Eleverna lär sig skilja på formellt och informellt språk, känna igen ords betydelsenyanser och värdeladdning och anpassa språket efter mottagare – i tal och skrift.",
  kursplan: [
    "Ords betydelsenyanser och värdeladdning.",
    "Skillnader mellan formellt och informellt språk.",
    "Att anpassa innehåll och språk till syfte och mottagare.",
    "Att samtala respektfullt och konstruktivt, argumentera och bemöta andras ståndpunkter.",
  ],
  mal: [
    "Skilja på formellt och informellt språk och välja rätt i olika situationer.",
    "Hitta ord med liknande betydelse men olika nyanser.",
    "Känna igen positiva, negativa och neutrala ord.",
    "Uttrycka en åsikt sakligt och respektfullt.",
  ],
  begrepp: [
    ["formellt språk", "språk för officiella sammanhang: fullständiga meningar, neutrala ord"],
    ["informellt språk", "vardagligt språk med vänner och familj"],
    ["synonym", "ord som betyder ungefär samma sak"],
    ["nyans", "liten skillnad i betydelse eller känsla"],
    ["värdeladdat ord", "ord som visar om något är bra eller dåligt"],
    ["mottagare", "den som ska läsa eller lyssna"],
  ],
  lankar: [
    ["Grammatik", "grammatik"],
    ["Tala och lyssna", "tala-lyssna"],
    ["Ordkunskap", "ordkunskap"],
  ],
  fortest: [
    { fraga: "Vilken hälsning passar i ett brev till kommunen?", alternativ: ["Tja!", "Hej!", "Yo!"], ratt: 1 },
    { fraga: "Vilket ord betyder ungefär samma sak som ”glad”?", alternativ: ["förtjust", "trött", "arg"], ratt: 0 },
    { fraga: "Vilket ord är negativt?", alternativ: ["nyfiken", "snokig", "intresserad"], ratt: 1 },
    { fraga: "Vad är informellt språk?", alternativ: ["vardagligt språk med vänner", "språk i lagar", "språk i nyheter"], ratt: 0 },
    { fraga: "Vem är mottagaren av ett brev?", alternativ: ["den som läser det", "den som skriver det", "brevbäraren"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Formellt eller informellt?",
      mal: "Eleverna kan skilja på formellt och informellt språk och välja rätt nivå efter mottagare.",
      upplagg: [
        "Förtestet (10 min).",
        "Visa jämförelsebilden och diskutera skillnaderna (10 min).",
        "Eleverna skriver samma meddelande till tre mottagare (20 min).",
      ],
      bilder: [
        { typ: "jamfor", rubrik: "Samma budskap", kolumner: ["Till", "Meddelande"], rader: [
          ["Kompis", "Kan inte idag, sorry! Imorn?"],
          ["Lärare", "Hej! Jag kan tyvärr inte komma i dag. Kan vi ses i morgon?"],
          ["Kommunen", "Hej! Jag vill gärna veta när den nya lekplatsen blir klar. Med vänliga hälsningar …"],
        ] },
        { typ: "punkter", rubrik: "Formellt språk", punkter: ["Hälsning och avslutning", "Hela meningar", "Inga slangord eller förkortningar", "Artigt och tydligt"] },
      ],
      elevtext: [
        { rubrik: "Rätt språk för rätt mottagare", stycken: [
          "Med kompisar pratar och skriver vi informellt. Vi använder korta meningar, slang och förkortningar. Till en lärare, en myndighet eller i en skoltext skriver vi mer formellt: med hälsning, hela meningar och vanliga ord som alla förstår.",
          "Det handlar inte om att det ena är rätt och det andra fel – utan om att välja det språk som passar mottagaren.",
        ] },
      ],
      uppgifter: [
        "Skriv samma meddelande (du vill låna en bok) till en kompis, en lärare och en bibliotekarie.",
        "Skriv om sms:et till ett formellt mejl: ”tja! glömde läxan, kan ja lämna imorn?”",
      ],
    },
    {
      titel: "Ord med nyanser",
      mal: "Eleverna kan hitta synonymer med olika nyanser och känna igen värdeladdade ord.",
      upplagg: [
        "Visa ordtrappan och låt eleverna placera fler ord (10 min).",
        "Eleverna sorterar ord i positivt, neutralt och negativt (15 min).",
        "Leta värdeladdade ord i en reklam eller insändare.",
      ],
      bilder: [
        { typ: "jamfor", rubrik: "Positivt – neutralt – negativt", kolumner: ["Neutralt", "Positivt · Negativt"], rader: [
          ["sparsam", "ekonomisk · snål"],
          ["bestämd", "målmedveten · envis"],
          ["pratsam", "social · pratig"],
          ["försiktig", "eftertänksam · feg"],
        ] },
        { typ: "fraga", fraga: { fraga: "Vilket ord är positivt?", alternativ: ["snål", "generös", "gnidig"], ratt: 1 } },
      ],
      elevtext: [
        { rubrik: "Ord har känsla", stycken: [
          "Många ord betyder ungefär samma sak men ger olika känsla. Den som är sparsam kan också kallas ekonomisk (positivt) eller snål (negativt). Sådana ord kallas värdeladdade.",
          "Reklam och insändare använder ofta värdeladdade ord för att påverka oss. I en faktatext försöker man välja neutrala ord.",
        ] },
      ],
      uppgifter: [
        "Skriv ett positivt och ett negativt ord för: noggrann, modig, lugn.",
        "Hitta tre värdeladdade ord i en reklam. Vad vill reklamen få dig att känna?",
      ],
      lankar: [["Ordkunskap", "ordkunskap"]],
    },
    {
      titel: "Säg vad du tycker – med respekt",
      mal: "Eleverna kan uttrycka en åsikt sakligt och bemöta andras åsikter respektfullt.",
      upplagg: [
        "Genomgång av fraserna på bilden (10 min).",
        "Fyrhörnsövning eller samtal i grupp om en fråga som berör eleverna (20 min).",
        "Repetera inför provet.",
      ],
      bilder: [
        { typ: "punkter", rubrik: "Bra fraser i ett samtal", punkter: ["Jag tycker att … eftersom …", "Jag håller med dig om …, men …", "Kan du förklara vad du menar med …?", "Jag förstår hur du tänker, men jag ser det så här: …"] },
        { typ: "diskutera", fragor: ["Ska mobiler vara förbjudna på rasten?", "Vad gör ett samtal respektfullt?"] },
      ],
      elevtext: [
        { rubrik: "Att samtala och argumentera", stycken: [
          "I ett bra samtal lyssnar man på varandra, bygger vidare på det andra säger och ger skäl för det man tycker. Man kan vara oense utan att vara otrevlig.",
          "Använd fraser som Jag håller med om … men … och Kan du förklara …? Undvik ord som sårar eller nedvärderar den andra.",
        ] },
      ],
      uppgifter: [
        "Skriv tre argument för och tre emot en fråga som läraren väljer.",
        "Skriv ett kort svar till en kompis som tycker annorlunda – sakligt och respektfullt.",
      ],
      lankar: [["Tala och lyssna", "tala-lyssna"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vilken mening är formell?", alternativ: ["Jag vill gärna veta mer om saken.", "Fattar noll asså.", "Ba kolla!"], ratt: 0 },
      { fraga: "Vilket ord är negativt laddat?", alternativ: ["envis", "bestämd", "målmedveten"], ratt: 0 },
      { fraga: "Vilket ord är neutralt?", alternativ: ["tjata", "påminna", "gnälla"], ratt: 1 },
      { fraga: "Vad är en synonym?", alternativ: ["ett ord som betyder ungefär samma sak", "ett ord som betyder motsatsen", "ett långt ord"], ratt: 0 },
      { fraga: "Var är informellt språk lämpligt?", alternativ: ["i ett sms till en kompis", "i en ansökan", "i ett brev till kommunen"], ratt: 0 },
      { fraga: "Vilken fras visar respekt när man inte håller med?", alternativ: ["Jag förstår hur du tänker, men …", "Du har fel.", "Det där är dumt."], ratt: 0 },
      { fraga: "Varför använder reklam ofta värdeladdade ord?", alternativ: ["för att påverka oss", "för att vara neutral", "för att det är kortare"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Skriv samma budskap till en kompis och till en lärare. Förklara vad du ändrade.", bedomning: ["Två tydligt olika stilnivåer", "Förklarar minst två skillnader"] },
      { fraga: "Skriv en kort insändare (5–7 meningar) där du säger vad du tycker om något i skolan. Använd minst två argument.", bedomning: ["Tydlig åsikt", "Minst två argument med eftersom eller därför att", "Sakligt och respektfullt språk"] },
    ],
  },
  tips: [
    "Koppla gärna lektion 1 till ett riktigt brev eller mejl som skickas – till exempel till kommunen.",
    "Lektion 3 kan förberedas med samtalsregler som klassen själv formulerar.",
  ],
};

export const KALLOR_LAG: Arbetsomrade = {
  id: "fakta-eller-pahitt",
  titel: "Fakta eller påhitt? Böcker, källor och skolbiblioteket",
  stadie: "lagstadiet",
  arskurs: "4",
  ingress:
    "Eleverna lär sig skilja på fakta och påhitt, hitta i skolbiblioteket och ställa enkla frågor till en källa – och att bilder kan vara skapade med datorer.",
  kursplan: [
    "En orientering i hur böcker och andra resurser i skolbiblioteket är organiserade.",
    "En introduktion till hur ord kan sorteras i alfabetisk ordning.",
    "Att uppmärksamma att texter, bilder, ljud och filmer kan skapas eller förändras med generativ AI.",
    "Att hämta innehåll ur texter och återge delar med egna ord.",
  ],
  mal: [
    "Skilja på skönlitteratur (påhitt) och faktatexter.",
    "Hitta en bok i skolbiblioteket med hjälp av hyllorna och alfabetisk ordning.",
    "Fråga: Vem har gjort det? Är det sant?",
    "Veta att datorer kan skapa bilder som ser äkta ut.",
  ],
  begrepp: [
    ["faktabok", "bok som berättar om sådant som är sant"],
    ["skönlitteratur", "berättelser som någon har hittat på"],
    ["författare", "den som har skrivit boken"],
    ["alfabetisk ordning", "ordning efter bokstäverna i alfabetet"],
    ["källa", "där man har hittat informationen"],
  ],
  lankar: [
    ["Lästräning", "lastraning"],
    ["Läsförståelse", "lasforstaelse"],
  ],
  fortest: [
    { fraga: "En bok om hur hajar lever är …", alternativ: ["en faktabok", "en saga"], ratt: 0 },
    { fraga: "Vilket ord kommer först i alfabetisk ordning?", alternativ: ["katt", "apa", "hund"], ratt: 1 },
    { fraga: "Vem har skrivit en bok?", alternativ: ["författaren", "bibliotekarien", "läsaren"], ratt: 0 },
    { fraga: "Kan en dator göra en bild som ser äkta ut?", alternativ: ["ja", "nej"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Fakta eller påhitt?",
      mal: "Eleverna kan skilja på faktatexter och berättelser.",
      upplagg: ["Förtestet – läs frågorna högt (10 min).", "Visa några böcker: är det fakta eller påhitt? (10 min)", "Eleverna sorterar boktitlar och bilder i två högar (15 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Fakta eller påhitt?", kolumner: ["Faktabok", "Skönlitteratur"], rader: [["berättar om sådant som är sant", "berättar något som någon har hittat på"], ["Hajar i havet", "Draken som var rädd för mörker"], ["har ofta bilder med förklaringar", "har ofta en huvudperson och ett äventyr"]] },
        { typ: "fraga", fraga: { fraga: "En bok heter ”Så fungerar en vulkan”. Vad är det?", alternativ: ["en faktabok", "en saga"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Två sorters böcker", stycken: ["En faktabok berättar om sådant som är sant, till exempel djur, rymden eller hur man bakar bröd.", "Skönlitteratur är berättelser som någon har hittat på. De kan vara spännande, roliga eller sorgliga – men de har inte hänt på riktigt."] }],
      uppgifter: ["Rita en faktabok och en saga. Skriv vad de handlar om.", "Skriv tre saker du vet om ett djur. Var har du lärt dig det?"],
    },
    {
      titel: "Hitta i skolbiblioteket",
      mal: "Eleverna kan hitta en bok i skolbiblioteket och sortera ord i alfabetisk ordning.",
      upplagg: ["Besök skolbiblioteket – gärna tillsammans med bibliotekarien.", "Visa hur skönlitteratur står efter författarens efternamn och faktaböcker efter ämne.", "Eleverna letar upp en bok var med hjälp av en ledtråd (20 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Så står böckerna", punkter: ["Berättelser står i bokstavsordning efter författarens efternamn.", "Faktaböcker står efter ämne: djur, rymden, sport …", "Fråga bibliotekarien om du inte hittar!"] },
        { typ: "fraga", fraga: { fraga: "Vilken författare står först i hyllan?", alternativ: ["Lindgren", "Bergström", "Svensson"], ratt: 1 } },
      ],
      elevtext: [{ rubrik: "Böckernas ordning", stycken: ["I biblioteket står böckerna i ordning så att man ska hitta dem. Berättelser står efter författarens efternamn, i alfabetisk ordning.", "Faktaböckerna står efter vad de handlar om. Alla böcker om djur står till exempel tillsammans."] }],
      uppgifter: ["Sortera namnen i alfabetisk ordning: Svensson, Ahmed, Lind, Berg.", "Hitta en faktabok om ett djur du gillar. Skriv titeln och två saker du lärde dig."],
      lankar: [["Lästräning", "lastraning"]],
    },
    {
      titel: "Är det sant?",
      mal: "Eleverna kan fråga vem som har gjort en text eller bild och veta att datorer kan skapa bilder.",
      upplagg: ["Visa en riktig och en datorskapad bild (5 min).", "Prata om frågorna på bilden (10 min).", "Eleverna gör en egen ”kolla-först”-lapp (15 min).", "Repetera inför provet."],
      bilder: [
        { typ: "punkter", rubrik: "Kolla först!", punkter: ["Vem har gjort det?", "Är det sant – står det samma sak i en faktabok?", "Datorer kan göra bilder som ser äkta ut.", "Fråga en vuxen om du är osäker."] },
        { typ: "fraga", fraga: { fraga: "Du ser en bild på en flygande gris. Vad gör du?", alternativ: ["frågar vem som gjort den och om den är sann", "tror direkt att den är sann"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Kolla först", stycken: ["Allt vi ser på nätet är inte sant. Datorer kan göra bilder och filmer som ser riktiga ut.", "Fråga alltid: Vem har gjort det? Är det sant? Står det samma sak i en faktabok? Fråga en vuxen om du är osäker."] }],
      uppgifter: ["Rita en ”kolla-först”-lapp med tre frågor.", "Berätta för en kompis vad du gör om du ser något konstigt på nätet."],
    },
  ],
  prov: {
    fragor: [
      { fraga: "En faktabok berättar om …", alternativ: ["sådant som är sant", "sådant som är påhittat"], ratt: 0 },
      { fraga: "Hur står berättelserna i biblioteket?", alternativ: ["efter författarens efternamn", "efter färgen på boken"], ratt: 0 },
      { fraga: "Vilket ord kommer sist i alfabetisk ordning?", alternativ: ["sol", "bok", "äpple"], ratt: 2 },
      { fraga: "Vad kan en dator göra?", alternativ: ["en bild som ser äkta ut", "ingenting med bilder"], ratt: 0 },
      { fraga: "Vem frågar du om du inte vet om något är sant?", alternativ: ["en vuxen", "ingen"], ratt: 0 },
    ],
    oppna: [{ fraga: "Skriv eller rita: Vad är skillnaden mellan en faktabok och en saga?", bedomning: ["Faktabok = sant", "Saga/berättelse = påhittat", "Ett exempel på varje"] }],
  },
  tips: ["Samarbeta med skolbibliotekarien – lektion 2 görs bäst i biblioteket.", "Läs frågorna högt för elever som behöver det."],
};
