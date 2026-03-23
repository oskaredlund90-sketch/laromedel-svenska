export type TextCategory =
  | "kronika"
  | "argumenterande"
  | "novell"
  | "historisk"
  | "utredande"
  | "berattande"
  | "faktatext"
  | "poesi"
  | "recension"
  | "nyhetsartikel"
  | "reklam"
  | "brukstext";

export type DifficultyLevel =
  | "lagstadiet"
  | "mellanstadiet"
  | "hogstadiet"
  | "gymnasiet";

export interface TextEntry {
  slug: string;
  title: string;
  category: TextCategory;
  categoryLabel: string;
  difficulty: DifficultyLevel;
  difficultyLabel: string;
  content: string;
  analysisQuestions: string[];
  structure: string;
  languageFeatures: string;
  skrivverkstadLink: string;
  skrivverkstadLabel: string;
}

export const CATEGORY_LABELS: Record<TextCategory, string> = {
  kronika: "Krönika",
  argumenterande: "Argumenterande text",
  novell: "Novell / Berättande text",
  historisk: "Historisk text i modern tappning",
  utredande: "Utredande text",
  berattande: "Berättande text",
  faktatext: "Faktatext",
  poesi: "Poesi",
  recension: "Recension",
  nyhetsartikel: "Nyhetsartikel",
  reklam: "Reklam",
  brukstext: "Brukstext",
};

export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  lagstadiet: "Lågstadiet",
  mellanstadiet: "Mellanstadiet",
  hogstadiet: "Högstadiet",
  gymnasiet: "Gymnasiet",
};

export const TEXTBANK_TEXTS: TextEntry[] = [
  // ─── KRÖNIKOR ──────────────────────────────────────────────
  {
    slug: "skarmtid",
    title: "Skärmtid",
    category: "kronika",
    categoryLabel: "Krönika",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Igår kväll bestämde jag mig för att räkna. Inte pengar, inte kalorier — utan minuter. Jag ville veta exakt hur mycket tid jag spenderade framför en skärm under en vanlig tisdag.

Resultatet var, milt uttryckt, förödande. Sju timmar och fjorton minuter. Det inkluderade inte ens skoltid vid datorn. Sju timmar. Jag hade kunnat lära mig jonglera, läsa en hel bok, eller kanske till och med pratat med min lillebror om något annat än vems tur det var att välja film.

Det lustiga är att jag inte ens minns vad jag gjorde under alla de timmarna. Jag scrollade. Jag tittade på korta klipp av hundar som åkte skateboard. Jag läste kommentarsfält under inlägg om saker jag inte ens bryr mig om. Det var som att tiden rann iväg genom ett osynligt hål i fickan.

Min mormor brukar säga att tiden är det enda vi verkligen äger. Hon kanske har rätt. Men om det stämmer, så borde jag vara mångmiljonär vid det här laget — fast alla mina tillgångar verkar ha investerats i TikTok och YouTube Shorts.

Jag tänker inte sitta här och moralisera. Jag är minst lika fast som alla andra. Men ibland undrar jag vad som hade hänt om vi alla lade ner telefonerna i tio minuter och bara satt stilla. Kanske skulle vi bli uttråkade. Kanske skulle vi bli oroliga. Eller kanske, bara kanske, skulle vi komma på något riktigt bra att göra.

Ikväll ska jag försöka. Tio minuter utan skärm. Det borde vara lätt. Eller hur?`,
    analysisQuestions: [
      "Vilken ton har krönikören? Ge exempel på ställen där humorn kommer fram.",
      "Hur blandar texten personliga erfarenheter med en större samhällsfråga?",
      "Varför tror du att krönikören nämner sin mormor? Vad tillför det?",
      "Vad tycker du om slutet? Hur hade du själv avslutat krönikan?",
    ],
    structure:
      "Krönikan börjar med en konkret, personlig händelse som sedan breddas till en reflektion. Texten avslutas med en öppen fråga som bjuder in läsaren.",
    languageFeatures:
      "Personlig röst med jag-perspektiv. Korta, effektfulla meningar blandas med längre. Vardagligt språk med inslag av humor och ironi. Retoriska frågor i slutet.",
    skrivverkstadLink: "/skrivverkstad/kronika",
    skrivverkstadLabel: "Skrivverkstad: Krönika",
  },
  {
    slug: "att-vara-ny",
    title: "Att vara ny",
    category: "kronika",
    categoryLabel: "Krönika",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Det finns en speciell sorts tystnad som uppstår när du kliver in i ett klassrum där alla andra redan känner varandra. Det är inte en fientlig tystnad. Det är mer som ett vakuum — ett ögonblick där alla registrerar att något har förändrats, och sedan fortsätter som vanligt. Utom du. Du står kvar i vakuumet.

Jag bytte skola i sjuan. Mitt i terminen, dessutom, vilket kanske är det värsta tänkbara. Alla grupper var redan formade. Alla skämt hade redan etablerats. Och jag var den som inte förstod varför alla skrattade när någon sa "fiskpinnar".

De första veckorna försökte jag vara osynlig. Jag åt lunch i ett hörn och låtsades läsa en bok medan jag egentligen lyssnade på alla samtal runt omkring mig. Jag kartlade hierarkier, memorerade namn, och försökte lista ut vilka regler som gällde men aldrig sades högt.

Det tog ungefär en månad innan jag insåg att de flesta inte aktivt stängde ute mig. De tänkte helt enkelt inte på att bjuda in. Det är en viktig skillnad. Utanförskap handlar sällan om elakhet — oftare handlar det om att människor redan har fullt upp med sina egna sammanhang.

En dag frågade någon om jag ville vara med och spela kort på rasten. Bara så. Ingen stor grej. Men för mig var det som att ett fönster äntligen öppnades.

Idag, tre år senare, har jag bytt roll. Nu är det jag som ibland glömmer att se den som står ensam vid kanten. Och varje gång jag kommer på mig med det, skäms jag lite. För jag vet ju hur det känns.`,
    analysisQuestions: [
      "Hur beskriver krönikören känslan av att vara ny? Vilka liknelser och bilder används?",
      "Texten går från det personliga till det allmänna — var sker den övergången?",
      "Vad menar krönikören med att utanförskap sällan handlar om elakhet?",
      "Hur förändras berättarens roll under texten? Varför är det viktigt?",
    ],
    structure:
      "Texten följer en kronologisk linje från det första ögonblicket i nya skolan till nutid. Den personliga berättelsen vidgas till en reflektion om utanförskap i allmänhet.",
    languageFeatures:
      "Känslosamt men inte sentimentalt. Effektfulla liknelser (vakuum, fönster). Blandning av berättande och reflekterande. Korta stycken som skapar tempo.",
    skrivverkstadLink: "/skrivverkstad/kronika",
    skrivverkstadLabel: "Skrivverkstad: Krönika",
  },
  {
    slug: "perfekt-pa-sociala-medier",
    title: "Perfekt på sociala medier",
    category: "kronika",
    categoryLabel: "Krönika",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Jag vaknade klockan sex imorse. Inte för att jag ville det, utan för att jag behövde ta en bild på min frukost i rätt ljus. Naturligt morgonljus, förstår ni. Det är viktigt. Man kan inte lägga upp en bild på havregrynsgröt i lampljus. Det skriker desperation.

Gröten arrangerades i en skål jag köpt enbart för fotografering. En perfekt rund träskål med rustik känsla. Jag strödde över blåbär i ett mönster som såg ut att vara slumpmässigt men som tog fyra försök att få rätt. Sedan lade jag till ett avslappnat vikbart linneservett. Avslappnat, men medvetet.

Fjorton bilder senare hade jag en som dög. Filter? Självklart. Men ett subtilt sådant. Man vill ju inte verka som att man försöker.

Ibland undrar jag vem det är jag spelar teater för. Mina följare? De flesta av dem gör exakt samma sak. Vi är en hel generation som lagar mat vi inte vill äta, besöker platser vi inte tycker om och ler på bilder vi inte känner oss glada på. Det är som en stor kollektiv överenskommelse om att verkligheten inte räcker till.

Min kompis Emma lade ut en bild förra veckan med texten "Ingen makeup, inget filter, bara jag." Bilden hade tagits av en professionell fotograf. Jag vet, för jag var där.

Kanske borde vi starta en ny trend. Äkta bilder. Gröten som brände fast. Håret som inte ville. Ansiktet som ser ut som det faktiskt gör klockan sex på morgonen. Men vem vill se det?

Ja, precis. Alla. Alla vill se det. Vi är bara för rädda för att vara först.`,
    analysisQuestions: [
      "Hur använder krönikören ironi? Ge minst tre exempel.",
      "Vilken bild ger texten av sociala medier? Håller du med?",
      "Varför är exemplet med kompisen Emma effektfullt?",
      "Texten slutar med ett påstående. Hur fungerar det som avslutning jämfört med en fråga?",
    ],
    structure:
      "Krönikan inleds med en konkret, komisk situation som gradvis övergår i samhällskritik. Avslutningen vänder på perspektivet med en oväntad poäng.",
    languageFeatures:
      "Ironisk och sarkastisk ton genomgående. Överdrivna detaljer för komisk effekt. Korta, punchline-aktiga meningar. Direkt tilltal till läsaren.",
    skrivverkstadLink: "/skrivverkstad/kronika",
    skrivverkstadLabel: "Skrivverkstad: Krönika",
  },

  // ─── ARGUMENTERANDE TEXTER ─────────────────────────────────
  {
    slug: "skoluniformer",
    title: "Skoluniformer — för eller emot?",
    category: "argumenterande",
    categoryLabel: "Debattartikel",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Varje morgon utspelar sig samma drama i tusentals svenska hem: tonåringar står framför garderoben och försöker välja kläder som signalerar rätt saker till rätt personer. Märkeskläder kostar pengar, och den som inte har råd märks. Är det inte dags att vi tar debatten om skoluniformer på allvar?

Det starkaste argumentet för skoluniformer är att de minskar den sociala pressen. När alla bär samma kläder försvinner en av de mest synliga markörerna för ekonomisk ojämlikhet. Elever slipper bli bedömda utifrån sina sneakers, och föräldrar slipper pressen att köpa dyra märkeskläder.

Dessutom visar forskning från flera länder att uniformer kan stärka sammanhållningen på en skola. En gemensam klädsel skapar en känsla av tillhörighet, ungefär som ett lag som bär samma tröja. Det kan bidra till en starkare skolidentitet och minska konflikter.

Men motargumenten är också värda att ta på allvar. Kläder är en form av uttryck, och att ta bort den möjligheten kan kännas som en inskränkning av individens frihet. Ungdomar behöver få utforska sin identitet, och kläder är en del av den processen.

Det finns också praktiska invändningar. Vem ska betala? Om familjer måste köpa dyra uniformer utöver vanliga kläder blir det en extra kostnad, inte en besparing.

Min tes är ändå att fördelarna överväger. Skoluniformer löser inte alla problem, men de kan jämna ut spelplanen en aning. Och i en skola där vi bedöms för vad vi kan snarare än vad vi bär — där tror jag att fler elever kan trivas.`,
    analysisQuestions: [
      "Vad är skribentens tes? Var framgår den tydligast?",
      "Hur hanterar texten motargument? Varför är det viktigt i en debattartikel?",
      "Vilka typer av argument används — fakta, känslor, logik?",
      "Hur hade du argumenterat om du hade motsatt ståndpunkt?",
    ],
    structure:
      "Inledning med ett engagerande scenario, följt av argument för, sedan motargument, och avslutning med tydlig tes. Klassisk argumenterande struktur.",
    languageFeatures:
      "Sakligt men engagerande språk. Sambandsord som 'dessutom', 'men', 'ändå'. Retorisk fråga i inledningen. Modala uttryck som nyanserar påståenden.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "mer-idrott-i-skolan",
    title: "Mer idrott i skolan",
    category: "argumenterande",
    categoryLabel: "Insändare",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Till rektor och skolledning,

Jag skriver för att vi i klass 5B tycker att det borde vara mer idrott i skolan. Just nu har vi idrott två gånger i veckan, men vi sitter stilla resten av tiden. Det kan inte vara bra för oss.

För det första mår vi bättre av att röra på oss. Efter en idrottslektion är det lättare att koncentrera sig. Flera av oss har märkt att vi presterar bättre på prov som kommer efter en rast med rörelse. Det finns till och med forskning som visar att fysisk aktivitet förbättrar minnet och inlärningen.

För det andra handlar det om hälsa. Många barn rör sig för lite, och det kan leda till problem som huvudvärk, ryggont och dålig sömn. Mer idrott i skolan är ett enkelt sätt att se till att alla barn får daglig motion — inte bara de som går på fritidsaktiviteter efter skolan.

Vi förstår att det finns hinder. Det kostar pengar, och schemat är redan fullt. Men tänk om man kunde byta ut en lektion i veckan mot rörelsepass? Eller ha korta aktiva pauser mellan lektionerna? Det behöver inte vara komplicerat eller dyrt.

Till sist vill vi påminna om att barn som mår bra också lär sig bättre. En skola som satsar på rörelse satsar också på kunskap.

Vi hoppas att ni tar vårt förslag på allvar.

Med vänlig hälsning,
Klass 5B`,
    analysisQuestions: [
      "Vem riktar sig texten till? Hur anpassas språket efter mottagaren?",
      "Vilka argument använder eleverna? Rangordna dem från starkast till svagast.",
      "Hur bemöter texten tänkbara motargument?",
      "Varför är det effektfullt att avsluta med sambandet mellan hälsa och kunskap?",
    ],
    structure:
      "Insändare med tydlig avsändare och mottagare. Argument presenteras med för det första, för det andra. Motargument bemöts. Avslutning med uppmaning.",
    languageFeatures:
      "Artigt och formellt tilltal. Tydliga signalord (för det första, dessutom, till sist). Enklare meningsbyggnad som ändå argumenterar effektivt.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "borde-laxor-avskaffas",
    title: "Borde läxor avskaffas?",
    category: "argumenterande",
    categoryLabel: "Argumenterande text",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Frågan om läxor borde avskaffas har diskuterats i årtionden, men ändå tycks vi inte komma närmare ett svar. Anledningen är enkel: det finns goda argument på båda sidor.

De som vill avskaffa läxor pekar på att skolan ska vara likvärdig. Alla elever har inte samma förutsättningar hemma. En del har föräldrar som kan hjälpa, tyst arbetsro och en egen skrivbordsplats. Andra har trångt, stökigt och ingen vuxen som förstår uppgiften. Läxor riskerar alltså att förstärka de skillnader som redan finns.

Det finns också forskning som ifrågasätter nyttan av läxor, särskilt för yngre elever. Studier visar att sambandet mellan läxor och bättre resultat är svagt i lägre åldrar. Tiden kunde kanske användas bättre till lek, vila och egna intressen — saker som också är viktiga för utvecklingen.

Å andra sidan menar förespråkarna att läxor tränar ansvar och självdisciplin. Att planera sin tid och arbeta självständigt är färdigheter som behövs långt efter skolan. Dessutom ger läxor elever möjlighet att repetera och befästa det de lärt sig under dagen.

En mellanväg kan vara att behålla läxor men förändra dem. Kanske kan skolan erbjuda läxhjälp så att alla får samma stöd. Kanske kan läxorna bli mer flexibla och anpassade efter elevens nivå. Kanske borde vi helt enkelt fråga eleverna själva vad som fungerar bäst.

Debatten om läxor handlar i grunden om vad vi tycker att skolan ska vara: en plats som ger alla samma chans, eller en plats som förbereder för en verklighet som kräver eget arbete. Kanske behöver den vara båda.`,
    analysisQuestions: [
      "Texten tar inte tydligt ställning. Vad är syftet med att belysa flera sidor?",
      "Vilka argument lyfts för att avskaffa läxor? Vilka för att behålla dem?",
      "Hur fungerar den föreslagna mellanvägen? Är den övertygande?",
      "Jämför denna text med insändaren om idrott. Hur skiljer sig tonen och strukturen?",
    ],
    structure:
      "Inledning med frågan, sedan argument för avskaffande, följt av argument mot, och till sist en mellanväg. Avslutningen reflekterar över den större frågan.",
    languageFeatures:
      "Nyanserat språk med uttryck som 'å andra sidan', 'kanske', 'riskerar'. Undviker svartvita formuleringar. Retoriska frågor i slutet. Formellt men tillgängligt.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },

  // ─── NOVELLER / BERÄTTANDE TEXTER ─────────────────────────
  {
    slug: "nyckeln",
    title: "Nyckeln",
    category: "novell",
    categoryLabel: "Novell",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Nyckeln låg i en skål på hallbyrån, precis som den alltid hade gjort. Martin gick förbi den varje dag utan att tänka på den. Det var en gammal mässingsnyckel med ett ovalt handtag, lite för stor för att passa något vanligt lås.

"Den hörde till farmor," hade hans mamma sagt en gång när han frågade. "Vi vet inte riktigt vad den öppnar."

Det borde ha gjort honom nyfiken. Men sanningen var att Martin sällan tänkte på saker som inte angick honom direkt. Han hade sina rutiner: skolan, fotbollsträningen, middag klockan sex. Nyckeln var bara en del av inredningen.

Så dog farmor. Det var en tisdagsmorgon i november. Martin kände ett tryck i bröstet men fällde inga tårar. De hade aldrig stått varandra särskilt nära. Han mindes henne mest som en doft av lavendel och en röst som alltid frågade om han åt tillräckligt.

Några veckor senare var det dags att tömma hennes lägenhet. Martin fick uppdraget att gå igenom sovrummet. Det var ett litet rum med blommiga tapeter och en smal säng. Under sängen hittade han en ask i trä. Den var låst. Låset var litet, ovalt — och Martin förstod genast.

Han hämtade nyckeln från hallbyrån. Den passade perfekt.

I asken låg ett enda föremål: ett fotografi i svartvitt. En ung kvinna stod framför havet och skrattade rakt in i kameran. På baksidan stod det med blyerts: "Den lyckligaste dagen. Strömstad 1962."

Martin vände på bilden igen. Kvinnan var inte farmor. Han hade aldrig sett henne förut.

Han stod länge med fotografiet i handen och insåg att det fanns en hel människa han aldrig hade frågat om.`,
    analysisQuestions: [
      "Vad är novellens överraskande slut? Varför fungerar det?",
      "Hur används nyckeln som symbol i berättelsen?",
      "Hur gestaltas Martin som karaktär? Vad vet vi om honom — och vad vet vi inte?",
      "Vilken stämning skapar miljöbeskrivningarna? Ge exempel.",
    ],
    structure:
      "Novellen har en linjär handling med en tillbakahållande berättarteknik. Spänningen byggs upp genom detaljer som får ny betydelse vid slutet. Kort, kompakt form.",
    languageFeatures:
      "Kortfattade meningar skapar lugn, nästan kylig ton. Dialog används sparsamt men effektfullt. Sinnliga detaljer (lavendel, blommiga tapeter). Öppet slut som lämnar frågor.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },
  {
    slug: "sista-sommaren",
    title: "Sista sommaren",
    category: "novell",
    categoryLabel: "Novell",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Bryggan var varm under fötterna. Sara satte sig på kanten och lät benen dingla ner mot vattnet utan att nå det. Sjön låg blank som en spegel, och på andra sidan syntes granskog och ett rött hus som hon visste var Petterssons.

Det här var deras sommarställe. Hade alltid varit. Varje juni packade familjen bilen och körde de fyra timmarna norrut, och varje gång Sara klev ur bilen kändes det som att tiden stannade.

Men i år var något annorlunda. Kanske var det att hon hade fyllt femton. Kanske var det brevet från kommunen om att marken skulle säljas. Eller kanske var det att hon för första gången la märke till hur pappas händer darrade när han bar in matkassarna.

"Sista året kanske," hade han sagt vid middagen, och mamma hade bytt ämne.

Sara tillbringade dagarna med att göra allt hon alltid hade gjort. Hon badade från bryggan. Hon plockade blåbär i skogen bakom stugan. Hon läste böcker i hängmattan och lyssnade på hur löven prasslade. Men allt hade en ny tyngd, som om varje ögonblick visste att det var räknat.

En kväll satt hon vid bryggan med Leo, sin yngre bror. Han kastade stenar i vattnet och räknade studsarna.

"Kommer vi tillbaka nästa sommar?" frågade han.

"Jag vet inte," sa Sara.

Leo kastade en sten till. Den studsade tre gånger.

"Fyra hade varit rekord," sa han och reste sig.

Sara satt kvar. Solen sjönk bakom granarna och vattnet skiftade från guld till grått. Hon tänkte att det finns ögonblick man inte förstår värdet av förrän de redan är förbi. Och att det kanske var det som det innebar att växa upp — att börja se slutet i allting.

Hon drog upp fötterna från kanten, lade sig på rygg och stirrade upp i himlen tills den första stjärnan tändes.`,
    analysisQuestions: [
      "Hur gestaltas temat förändring i berättelsen? Ge flera exempel.",
      "Vilken roll spelar naturbeskrivningarna? Vad bidrar de med?",
      "Hur används dialogen mellan Sara och Leo? Vad säger den utan att säga det rakt ut?",
      "Vad betyder den sista meningen? Hur knyter den ihop berättelsen?",
    ],
    structure:
      "Berättelsen följer en sommardag men rymmer en större livsförändring. Tempot är långsamt och stämningsfullt. Yttre handling (sommardag) speglar inre förändring (att växa upp).",
    languageFeatures:
      "Rik miljöbeskrivning som skapar stämning. Undertext i dialogen — det viktiga sägs inte rakt ut. Symbolik (sjön, solnedgången, stjärnan). Reflekterande berättarröst.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ─── HISTORISKA TEXTER I MODERN TAPPNING ───────────────────
  {
    slug: "om-frihet",
    title: "Om frihet",
    category: "historisk",
    categoryLabel: "Historisk text i modern tappning",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Det finns ett rum i historien där hälften av mänskligheten länge var instängd. Dörren var inte alltid låst med lag, men den hölls stängd av traditioner, förväntningar och en tyst överenskommelse om vem som hade rätt att drömma.

Under 1800-talet började röster höjas — modiga, envisa röster som ifrågasatte varför en kvinna inte kunde äga sin egen inkomst, utbilda sig eller rösta om landets framtid. De möttes av motstånd och hån, men de fortsatte ändå. De visste att frihet aldrig skänks. Den måste tas.

Idag lever vi i ett annat landskap. Kvinnor röstar, arbetar och leder. Men är kampen avslutad? Statistiken berättar en annan historia. Löneskillnader består. Våld i nära relationer drabbar oproportionerligt många kvinnor. Och i samhällets vardagsrum — hemmet — fördelas arbetet fortfarande ojämnt.

Verklig frihet handlar inte bara om rättigheter på papper. Den handlar om möjligheten att bli sedd som en hel människa, med samma rätt till ambitioner, misstag och val. Den handlar om att ingen ska behöva kämpa hårdare för samma saker bara på grund av sitt kön.

Arvet från 1800-talets pionjärer påminner oss om att förändring är möjlig men aldrig självklar. Varje generation måste bestämma sig: ska vi nöja oss med hur det är, eller kämpa för hur det borde vara?`,
    analysisQuestions: [
      "Hur knyter texten ihop historiska och moderna perspektiv på jämställdhet?",
      "Vilken funktion har metaforen om det stängda rummet i inledningen?",
      "Vilka argument lyfts för att kampen inte är avslutad?",
      "Texten är inspirerad av 1800-talets jämställdhetskamp. Vad hade de tidiga förkämparna tyckt om dagens samhälle?",
    ],
    structure:
      "Texten rör sig kronologiskt från historien till nutid. Inledningens metafor återkommer implicit. Avslutningen riktar blicken framåt med en retorisk fråga.",
    languageFeatures:
      "Högtidligt men tillgängligt språk. Bildspråk och metaforer. Kontraster mellan dåtid och nutid. Retoriska frågor. Formellt stilläge med emotionell kraft.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "ensam-i-storstaden",
    title: "Ensam i storstaden",
    category: "historisk",
    categoryLabel: "Historisk text i modern tappning",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Liam steg av tåget på Centralstationen med en ryggsäck och ett kontraktnummer i telefonen. Lägenheten — om man nu kunde kalla sexton kvadratmeter med kokvrå för en lägenhet — låg i en förort han aldrig hade hört talas om. Hyran var mer än hans mamma betalade för hela huset hemma.

De första dagarna gick han genom staden som en turist. Glasfasaderna i city speglade en värld som verkade tillhöra någon annan. Människor i dyra kappor rörde sig snabbt, med blicken i telefonen, och ingen såg honom. Det var en märklig sorts ensamhet — att vara omgiven av hundratusentals människor och ändå vara helt osynlig.

Jobbet på lagret betalade precis så lite som kontraktet lovade. Liam sorterade paket åtta timmar om dagen i en byggnad utan fönster. Hans kollegor nickade åt honom men pratade sällan. De hade sitt, han hade sitt.

På kvällarna satt han i sin lilla lägenhet och åt nudlar ur en kastrull. Han scrollade genom andras liv på telefonen och undrade om alla andra visste något han inte visste. Någon hemlig kod för att höra till.

En söndag promenerade han ner till vattnet. Staden var tystare då. Han satte sig på en bänk och tittade på båtarna. En äldre man bredvid honom kommenterade vädret. De pratade i tio minuter om ingenting, och Liam gick därifrån med en värme i bröstet som han inte hade känt på veckor.

Han förstod att storstaden inte var fientlig. Den var likgiltig. Och att skillnaden mellan ensamhet och tillhörighet ibland bara var ett enda samtal.`,
    analysisQuestions: [
      "Hur skildras klassklyftor i texten? Ge konkreta exempel.",
      "Vilken funktion har kontrasten mellan Liams bakgrund och storstaden?",
      "Hur förändras stämningen i texten? Var sker vändningen?",
      "Texten är inspirerad av teman om alienation i storstaden. Känns dessa teman relevanta idag? Varför?",
    ],
    structure:
      "Berättelsen följer Liams första tid i storstaden. Stämningen börjar mörkt och ensamt men vänder med en liten, vardaglig händelse. Avslutningen sammanfattar textens tema.",
    languageFeatures:
      "Realistiskt, avskalat språk. Konkreta detaljer som bygger miljö (glasfasader, kastrull, fönsterlöst lager). Kontraster. Kort, sammanfattande slutmening som fungerar som tematisk nyckel.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },
  {
    slug: "naturen-och-manniskan",
    title: "Naturen och människan",
    category: "historisk",
    categoryLabel: "Historisk text i modern tappning",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Det sägs att skogen har ett minne. Att varje träd bär på historier från generationer av fåglar, stormar och stilla vintermorgnar. Om det stämmer, undrar jag vad skogen tänker om oss.

Min farfar var skogsarbetare i Värmland. Han brukade säga att man aldrig tar mer från skogen än vad den kan ge tillbaka. Det var inte sentimentalt — det var praktiskt. Han visste att den som skövlar sin egen skog till slut står utan ved.

Jag tänker på det ibland när jag läser om avverkningar, bränder och smältande glaciärer. Vi lever i en tid där sambandet mellan människa och natur har tunnats ut till nästan ingenting. De flesta av oss möter naturen genom en bilruta, en dokumentär eller en semesterresa. Vi har glömt att vi inte besöker naturen — vi är en del av den.

Men något håller på att förändras. Unga människor planterar träd, organiserar demonstrationer och kräver att politiker tar ansvar. De påminner oss om det min farfar redan visste: att vi inte ärver jorden av våra föräldrar, utan lånar den av våra barn.

Kanske behöver vi inte avancerad teknologi för att rädda planeten. Kanske behöver vi bara lyssna. Lyssna på skogen, på havet, på den tysta kunskapen hos de som levde före oss.

Skogen har ett minne. Frågan är om vi har det.`,
    analysisQuestions: [
      "Hur används farfaderns röst som kontrast till dagens samhälle?",
      "Vilken funktion har den poetiska inledningen och avslutningen?",
      "Texten är inspirerad av en berättartradition nära naturen. Vilka berättargrepp används?",
      "Håller du med om att sambandet mellan människa och natur har tunnats ut? Motivera.",
    ],
    structure:
      "Cirkelkomposition: texten börjar och slutar med skogens minne. Rör sig från det personliga (farfar) till det globala (klimatfrågan) och tillbaka.",
    languageFeatures:
      "Poetiskt och reflekterande. Personifiering av naturen. Korta, sentensliknande meningar blandas med längre. Muntlig berättarton. Retorisk avslutning.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ─── UTREDANDE TEXT ─────────────────────────────────────────
  {
    slug: "sociala-medier-och-sjalvbild",
    title: "Hur påverkar sociala medier ungdomars självbild?",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Sociala medier är en central del av de flesta ungdomars vardag. Plattformar som Instagram, TikTok och Snapchat används dagligen för att kommunicera, underhålla och uttrycka sig. Men hur påverkar denna ständiga uppkoppling ungdomars bild av sig själva? I denna text undersöks frågan från flera perspektiv.

Ett vanligt argument är att sociala medier skapar orealistiska ideal. Bilder retuscheras, filter förvandlar ansikten och det som visas upp är nästan alltid en polerad version av verkligheten. Undersökningar har visat att unga som spenderar mycket tid på bildbaserade plattformar oftare rapporterar missnöje med sitt utseende. Jämförelsen med andras till synes perfekta liv kan skapa en känsla av att det egna livet inte räcker till.

Från ett annat perspektiv lyfter forskare att sociala medier också kan vara en positiv kraft. För ungdomar som känner sig annorlunda eller utanför i sin vardag kan nätet erbjuda gemenskap. Intressegrupper, stödforum och kreativa plattformar ger utrymme att utforska sin identitet och hitta likasinnade. Det gäller inte minst unga hbtq-personer och ungdomar med funktionsvariationer, som ofta vittnar om att nätet gav dem en plats att vara sig själva.

Det finns alltså inte ett enkelt svar. Effekten beror på hur sociala medier används, hur mycket tid som läggs och vilka konton man följer. Medvetenhet och källkritik spelar roll — den som förstår att bilder på nätet ofta är bearbetade drabbas i lägre grad av negativa jämförelser.

Sammanfattningsvis kan sociala medier både stärka och försvaga ungdomars självbild. Nyckeln verkar ligga i medveten användning och i att vuxenvärlden — skola och föräldrar — hjälper unga att navigera en digital verklighet som är mer komplex än den ser ut.`,
    analysisQuestions: [
      "Vad är textens frågeställning? Var presenteras den?",
      "Vilka olika perspektiv lyfts? Hur balanseras de mot varandra?",
      "Hur skiljer sig denna utredande text från en argumenterande text i ton och syfte?",
      "Vilken slutsats drar texten? Är den väl underbyggd?",
    ],
    structure:
      "Klassisk utredande struktur: frågeställning i inledningen, olika perspektiv i mitten, och en sammanfattande slutsats. Texten tar inte ställning utan belyser.",
    languageFeatures:
      "Sakligt, opersonligt språk. Passiva konstruktioner ('undersökningar har visat'). Sambandsord som strukturerar (från ett annat perspektiv, sammanfattningsvis). Refererar till forskning utan att ange specifika källor.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },

  // ═══════════════════════════════════════════════════════════
  // NYA TEXTER — LÅGSTADIET
  // ═══════════════════════════════════════════════════════════

  // ─── LÅGSTADIET: BERÄTTANDE ────────────────────────────────
  {
    slug: "forsta-dagen-i-skolan",
    title: "Första dagen i skolan",
    category: "berattande",
    categoryLabel: "Berättande text",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Alma vaknade tidigt. Väckarklockan hade inte ens ringt ännu. Magen pirrade som om det satt en liten fjäril där inne.

Idag var första dagen i ettan.

Hon hade lagt fram sina kläder kvällen innan. Den röda tröjan och de nya jeansen. Ryggsäcken stod packad vid dörren med pennor, suddgummi och en vattenflaska med jordgubbar på.

"Är du redo?" frågade mamma vid frukostbordet.

Alma nickade, men egentligen var hon inte säker. Tänk om ingen ville sitta bredvid henne? Tänk om hon inte hittade till klassrummet?

Vid skolan stod det massor av barn. Några grät, andra sprang runt. En flicka med flätor stod alldeles ensam vid staketet. Hon såg lika nervös ut som Alma kände sig.

"Hej," sa Alma. "Ska du också börja ettan?"

Flickan nickade. "Jag heter Mira."

"Jag heter Alma. Vill du gå in tillsammans?"

De gick in genom den stora dörren sida vid sida. Klassrummet luktade nytt. Fröken log och sa välkomna. Alma och Mira satte sig bredvid varandra.

När Alma kom hem den eftermiddagen frågade mamma hur det hade gått.

"Bra," sa Alma. "Jag har fått en kompis."

Fjärilen i magen hade flugit sin väg.`,
    analysisQuestions: [
      "Hur känner sig Alma i början av berättelsen? Hur vet du det?",
      "Varför tror du att Alma pratar med Mira vid staketet?",
      "Vad betyder det att fjärilen i magen hade flugit sin väg?",
    ],
    structure:
      "Berättelsen har en tydlig början (morgonen hemma), en mitt (att komma till skolan) och ett slut (hemma igen). Problemet löses på ett naturligt sätt.",
    languageFeatures:
      "Korta, enkla meningar. Vardagliga ord som barn känner igen. Bildspråk som passar åldersgruppen (fjäril i magen). Dialog som driver handlingen framåt.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },
  {
    slug: "katten-som-rymde",
    title: "Katten som rymde",
    category: "berattande",
    categoryLabel: "Berättande text",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Hugo hade en katt som hette Sigge. Sigge var grå med vita tassar och han älskade att sova i soffan. Men en dag lämnade någon ytterdörren öppen, och Sigge smög ut.

"Sigge! Kom tillbaka!" ropade Hugo. Men Sigge var redan borta.

Hugo letade i trädgården. Han tittade bakom buskarna och under altanen. Ingen Sigge. Han letade hos grannen. Han kikade i garaget och bakom vedstapeln. Ingen Sigge.

Hugo satte sig på trappan. Tårarna ville komma, men han blinkade bort dem. Kanske var Sigge borta för alltid.

Då hörde han ett litet ljud. Ett mjukt, tyst "mjau". Det kom från ovan. Hugo tittade upp. Där, högt uppe i äppelträdet, satt Sigge. Han hade klättrat upp men vågade inte klättra ner.

"Vänta, Sigge! Jag hämtar hjälp!"

Hugo sprang in och hämtade pappa. Pappa tog stegen från garaget och klättrade upp. Sigge puttade sin nos mot pappas hand och lät sig bäras ner.

Hugo kramade Sigge försiktigt. Sigge spann som en liten motor.

Från den dagen kollade Hugo alltid att dörren var stängd. Och Sigge? Han var nöjd med att titta ut genom fönstret istället.`,
    analysisQuestions: [
      "Hur letar Hugo efter Sigge? På hur många ställen letar han?",
      "Hur löser sig problemet i berättelsen?",
      "Vad har Hugo lärt sig i slutet av berättelsen?",
    ],
    structure:
      "Tydlig berättelsestruktur med problem (katten rymmer), sökande (Hugo letar), lösning (pappa hjälper) och slut (lärdomen). Handlingen drivs framåt steg för steg.",
    languageFeatures:
      "Enkla, korta meningar. Ljudhärmande ord (mjau, spann). Direkt dialog som skapar närvaro. Upprepning som stilgrepp (han letade, han tittade).",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ─── LÅGSTADIET: FAKTATEXTER ──────────────────────────────
  {
    slug: "igelkotten",
    title: "Igelkotten — en taggig kompis",
    category: "faktatext",
    categoryLabel: "Faktatext",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Igelkotten är ett av Sveriges mest kända djur. Den har ungefär fem tusen taggar på ryggen. Taggarna skyddar den mot rovdjur. När igelkotten blir rädd rullar den ihop sig till en taggig boll.

Igelkottar äter insekter, sniglar och maskar. De gillar att vara ute på natten och sover på dagen. Därför kallas de nattdjur. På hösten äter igelkotten extra mycket för att bli tjock. Sen sover den hela vintern. Det kallas att gå i ide.

Igelkottar bor gärna i trädgårdar där det finns löv och buskar. Om du vill hjälpa igelkottarna kan du lämna en hög med löv i ett hörn av trädgården. Då får de ett bra ställe att sova på under vintern.

En sak som är viktig att veta: man ska aldrig ge mjölk till igelkottar. De blir sjuka av det. Vatten är mycket bättre.`,
    analysisQuestions: [
      "Vad äter igelkottar?",
      "Varför rullar igelkotten ihop sig?",
      "Hur kan du hjälpa igelkottarna? Vad ska du inte ge dem?",
    ],
    structure:
      "Faktatexten är ordnad i tydliga stycken som var och en handlar om ett ämne: utseende, mat, vintervanor och hur man kan hjälpa. Kort och lättläst.",
    languageFeatures:
      "Korta faktameningar. Förklarande stil (det kallas att gå i ide). Direkt tilltal till läsaren i slutet. Inga svåra ord utan förklaring.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },
  {
    slug: "sa-funkar-tanderna",
    title: "Så funkar tänderna",
    category: "faktatext",
    categoryLabel: "Faktatext",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Visste du att du har tjugo tänder i munnen? De kallas mjölktänder. När du blir lite äldre kommer de att lossna och nya, större tänder växer fram. De nya tänderna är dina vuxentänder, och du får trettiotvå stycken.

Tänderna har olika jobb. Framtänderna biter av maten, som när du tuggar av ett äpple. De spetsiga hörntänderna river sönder maten. Kindtänderna längst bak mal sönder maten till små bitar.

Det är viktigt att borsta tänderna varje morgon och kväll. Annars kan det bildas hål i tänderna, och det gör ont. Tandkräm hjälper till att skydda tänderna.

Visste du att krokodiler kan få nya tänder hela livet? Människor kan bara byta tänder en gång. Därför är det så viktigt att ta hand om dem!`,
    analysisQuestions: [
      "Hur många mjölktänder har ett barn?",
      "Vilka olika jobb har tänderna?",
      "Varför är det viktigt att borsta tänderna?",
    ],
    structure:
      "Texten börjar med en fråga som fångar intresset. Sedan förklaras fakta i en logisk ordning. Avslutningen innehåller en rolig jämförelse med krokodiler.",
    languageFeatures:
      "Frågor till läsaren (visste du att). Enkla jämförelser. Konkreta exempel som barn förstår. Korta stycken med tydligt innehåll.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ─── LÅGSTADIET: ARGUMENTERANDE ───────────────────────────
  {
    slug: "hundar-ar-bast",
    title: "Varför hundar är bäst",
    category: "argumenterande",
    categoryLabel: "Argumenterande text",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Jag tycker att hundar är de bästa husdjuren. Här är mina skäl.

För det första är hundar snälla. De blir glada när man kommer hem. De viftar på svansen och hoppar upp och ner. Det gör en glad även om man har haft en dålig dag.

För det andra kan man göra saker med hundar. Man kan gå på promenader, springa i parken och leka med en boll. Med en guldfisk kan man inte göra något av det.

För det tredje är hundar bra kompisar. De lyssnar när man pratar med dem. De bryr sig inte om man är ledsen eller glad. De tycker om en ändå.

En del säger att hundar är jobbiga för att man måste rasta dem och borsta dem. Det stämmer. Men det är också roligt att ta hand om någon.

Jag tycker att alla som kan borde ha en hund. Då skulle fler människor vara glada.`,
    analysisQuestions: [
      "Vad tycker skribenten? Hur vet du det?",
      "Hur många skäl ger skribenten? Vilket tycker du är starkast?",
      "Hur svarar skribenten på motargumentet om att hundar är jobbiga?",
    ],
    structure:
      "Texten börjar med en tydlig åsikt. Sedan kommer tre argument med signalorden för det första, för det andra, för det tredje. Ett motargument bemöts. Avslutningen sammanfattar.",
    languageFeatures:
      "Enkelt och rakt språk. Tydliga signalord som visar ordningen. Jag-form genomgående. Korta meningar som är lätta att följa.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },

  // ─── LÅGSTADIET: NOVELL (SAGA) ────────────────────────────
  {
    slug: "trollet-under-bron",
    title: "Trollet under bron",
    category: "novell",
    categoryLabel: "Novell",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Det var en gång ett litet troll som bodde under en bro i skogen. Trollet hette Grums och han var inte alls farlig. Han var bara väldigt, väldigt blyg.

Varje dag gick barn över bron på väg till skolan. Grums tittade på dem mellan plankorna och önskade att han kunde vara med. Men han vågade inte visa sig. Tänk om de blev rädda?

En dag tappade en flicka sin mössa i ån. Den flöt iväg med strömmen, rakt mot bron. Grums fångade den med sin stora hand. Han tvekade. Sen sträckte han upp handen genom en springa i bron.

Flickan tittade förvånat på den stora, gröna handen som höll hennes röda mössa.

"Tack!" sa hon och tog mössan. "Vem är du?"

Grums svarade inte. Han gömde sig igen. Men nästa morgon låg det en liten teckning vid bron. Flickan hade ritat en bild av ett troll med texten: "Till min nya kompis under bron."

Grums hängde upp teckningen på sin vägg. Det var det finaste han hade.

Sakta men säkert började Grums våga titta upp när flickan gick förbi. Hon vinkade alltid. Och en dag vinkade Grums tillbaka.`,
    analysisQuestions: [
      "Varför vågar inte Grums visa sig?",
      "Hur förändras berättelsen när flickan tappar sin mössa?",
      "Vad tror du händer efter berättelsen? Blir de riktiga kompisar?",
    ],
    structure:
      "Sagan har en tydlig sagoinledning (det var en gång). Handlingen följer ett mönster med problem, hjälteinsats och belöning. Öppet slut som lämnar plats för fantasi.",
    languageFeatures:
      "Enkelt sagospråk. Upprepning (väldigt, väldigt). Korta dialoger. Bildrikt men med enkla ord. Tempus i förfluten tid som i traditionella sagor.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ═══════════════════════════════════════════════════════════
  // NYA TEXTER — MELLANSTADIET
  // ═══════════════════════════════════════════════════════════

  // ─── MELLANSTADIET: KRÖNIKOR ──────────────────────────────
  {
    slug: "skolmaten",
    title: "Mysteriet med skolmaten",
    category: "kronika",
    categoryLabel: "Krönika",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Det finns saker i livet som ingen riktigt kan förklara. Bermudatriangeln. Varför strumpor försvinner i tvättmaskinen. Och skolmaten.

I måndags stod det "Pasta med grönsakssås" på menyn. Det lät helt okej. Men när jag fick tallriken framför mig såg det ut som något som min lillasyster hade blandat ihop i sandlådan. Pastan var grå. Såsen var en konstig brun färg som inte finns i naturen. Och grönsakerna? Jag hittade en bit morot. En enda bit.

Det märkliga är att skolmaten alltid ser fantastisk ut på bilden som hänger i matsalen. Där är pastan gyllene och grönsakerna lyser i alla regnbågens färger. Jag undrar vem som lagar maten på bilden. Det är i alla fall inte samma person som lagar vår mat.

Min kompis Elias äter alltid tre portioner, oavsett vad det är. "Det smakar ju mat," säger han. Jag beundrar honom. Han har en inre styrka som jag saknar.

Men ärligt talat har jag också dagar då skolmaten faktiskt är god. Pannkaksdagarna. Köttbullsdagarna. De dagarna är det som en liten fest i matsalen. Alla ler. Till och med lärarna ser gladare ut.

Kanske är det själva poängen. Man kan inte ha fest varje dag. Då slutar det att vara speciellt. Kanske behöver vi de grå pastadagarna för att uppskatta pannkakorna.

Eller så behöver vi bara en bättre kock. Det funkar också.`,
    analysisQuestions: [
      "Hur använder krönikören humor? Ge tre exempel.",
      "Vad är det roliga med att jämföra skolmaten med Bermudatriangeln?",
      "Hur ändrar sig texten i slutet — blir den mer allvarlig eller mer komisk?",
      "Skriv en egen kort krönika om något som händer i din skola.",
    ],
    structure:
      "Krönikan börjar med en humoristisk jämförelse, fortsätter med en personlig berättelse och avslutar med en liten insikt som snabbt undermineras av ett skämt. Typisk krönikestruktur.",
    languageFeatures:
      "Humoristisk och personlig ton. Överdrifter för komisk effekt. Korta, punchline-aktiga meningar. Direkt tal som gör texten levande.",
    skrivverkstadLink: "/skrivverkstad/kronika",
    skrivverkstadLabel: "Skrivverkstad: Krönika",
  },
  {
    slug: "laxan-som-forsvann",
    title: "Läxan som försvann",
    category: "kronika",
    categoryLabel: "Krönika",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Jag ska berätta något som hände mig förra veckan. Det är en sann historia. Åtminstone mest.

Vi hade fått en matteläxa. Sidan 42 till 45 i matteboken. Jag vet att det inte låter som mycket, men sidan 43 hade bråk på. Inte bråk som i att folk slåss. Bråk som i täljare och nämnare. Jag förstår mig inte på bråk. Inte den ena sorten och inte den andra heller, om jag ska vara ärlig.

Men jag satte mig vid köksbordet på söndagskvällen och räknade. Det gick långsamt. Jag suddade mer än jag skrev. Men till slut var jag klar. Jag la matteboken i ryggsäcken och kände mig nöjd.

Nästa morgon öppnade jag ryggsäcken i klassrummet. Matteboken var inte där. Jag letade. Jag vände ryggsäcken upp och ner. Pennor, ett äppelskrutt och en gammal bussiljett ramlade ut. Men ingen mattebok.

"Har du glömt läxan?" frågade fröken.

"Nej! Jag har gjort den! Den bara... försvann."

Fröken suckade. Det var den sortens suck som betyder att hon har hört den ursäkten förut. Men jag ljög faktiskt inte. Inte den här gången.

När jag kom hem hittade jag boken. Den låg under kökssoffan. Hunden hade tydligen tyckt att den var en utmärkt leksak. Det var tuggmärken på sidan 43.

Jag sa det till fröken nästa dag. Hon skrattade faktiskt. "Det är första gången någon ger mig bevis," sa hon och tittade på tuggmärkena.

Ibland är sanningen konstigare än alla ursäkter man kan hitta på.`,
    analysisQuestions: [
      "Vad gör berättelsen rolig? Peka på minst två ställen.",
      "Hur använder krönikören ordvitsen med 'bråk'? Varför fungerar den?",
      "Hur reagerar fröken? Vad säger det om henne?",
      "Har du själv varit med om något liknande? Hur hade du berättat om det?",
    ],
    structure:
      "Krönikan är uppbyggd som en berättelse med spänning — läsaren vill veta vad som hände med läxan. Det komiska avslöjandet kommer sent, följt av en kort reflektion.",
    languageFeatures:
      "Berättande stil med personlig röst. Ordlek (bråk i två betydelser). Direkt dialog som skapar scener. Parentetiska kommentarer som bryter tonen humoristiskt.",
    skrivverkstadLink: "/skrivverkstad/kronika",
    skrivverkstadLabel: "Skrivverkstad: Krönika",
  },

  // ─── MELLANSTADIET: ARGUMENTERANDE ─────────────────────────
  {
    slug: "skarmtid-for-barn",
    title: "Hur mycket skärmtid är lagom?",
    category: "argumenterande",
    categoryLabel: "Argumenterande text",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Många föräldrar oroar sig för att deras barn sitter för mycket framför skärmar. Men hur mycket är egentligen för mycket? Jag tycker att barn borde få bestämma mer själva, så länge det finns tydliga regler.

Det finns goda skäl att använda skärmar. Man kan lära sig saker genom att titta på filmer om djur, historia eller vetenskap. Man kan vara kreativ genom att rita, programmera eller göra egna filmer. Och man kan hålla kontakt med kompisar, särskilt de som bor långt bort.

Men det finns också nackdelar. Om man sitter stilla för länge kan man få ont i nacken och ryggen. Man kan bli trött i ögonen. Och ibland är det svårt att sluta, även när man vet att man borde göra något annat. Det känner nog de flesta igen.

En del vuxna säger att barn borde ha högst en timme skärmtid om dagen. Men en timme räcker knappt till en film. Och räknas det om man gör läxor på datorn? Det tycker inte jag.

Jag tror att en bra lösning är att ha regler som är rättvisa. Till exempel: man får använda skärm efter att man har gjort sina läxor och varit ute och rört på sig. Och man ska sluta minst en timme innan man ska sova.

Barn är smartare än vuxna tror. Om vi får vara med och bestämma reglerna, följer vi dem bättre också.`,
    analysisQuestions: [
      "Vad tycker skribenten? Hur framför hen sin åsikt?",
      "Vilka fördelar och nackdelar med skärmtid nämns?",
      "Hur bemöter skribenten motargumentet om en timme om dagen?",
      "Vad tycker du? Hur mycket skärmtid är lagom?",
    ],
    structure:
      "Texten börjar med en fråga, presenterar argument för och emot, och föreslår sedan en lösning. Avslutningen sammanfattar med ett starkt påstående.",
    languageFeatures:
      "Personligt och tillgängligt språk. Retorisk fråga i inledningen. Sambandsord (men, dessutom, till exempel). Direkt tilltal som engagerar läsaren.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "langre-raster",
    title: "Vi behöver längre raster!",
    category: "argumenterande",
    categoryLabel: "Argumenterande text",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Vi elever i femman tycker att rasterna borde vara längre. Just nu har vi femton minuter på morgonrasten och tjugo minuter på lunchrasten. Det räcker inte.

Det viktigaste skälet är att vi behöver röra på oss. Vi sitter stilla i nästan sex timmar om dagen. Det enda avbrottet är rasterna. Men femton minuter går fort. Man hinner knappt komma ut och starta en lek innan det ringer in igen.

Ett annat skäl är att vi behöver prata med varandra. I klassrummet ska man vara tyst och lyssna. Det är bra, men vi behöver också tid att umgås. Det är på rasterna man löser bråk, hittar nya kompisar och har kul. Om rasterna är för korta hinner man inte med det.

Några kanske tycker att längre raster betyder att man missar lektioner. Men studier visar att elever som får mer rast faktiskt lär sig bättre. Hjärnan behöver pauser för att orka ta in ny information.

Vi föreslår att morgonrasten blir tjugo minuter och lunchrasten trettio minuter. Det är bara femton minuter mer per dag. Skoldagen behöver inte bli längre — lektionerna kan bli lite kortare istället.

Tänk på det: gladare elever lär sig mer. Och längre raster gör oss gladare.`,
    analysisQuestions: [
      "Vilka argument använder skribenten? Lista dem.",
      "Hur bemöts motargumentet om att man missar lektioner?",
      "Vem riktar sig texten till? Hur märks det?",
      "Fundera: vilka andra argument kunde man använda?",
    ],
    structure:
      "Tydlig inledning med tes, följd av flera argument ordnade efter styrka. Motargument bemöts. Konkret förslag läggs fram. Slagkraftig avslutning.",
    languageFeatures:
      "Tydliga signalord (det viktigaste skälet, ett annat skäl). Sakligt men med engagemang. Vi-form skapar gemenskap. Retorisk sats i slutet.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },

  // ─── MELLANSTADIET: FAKTATEXT ──────────────────────────────
  {
    slug: "vart-solsystem",
    title: "Vårt solsystem",
    category: "faktatext",
    categoryLabel: "Faktatext",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Vårt solsystem är enormt. I mitten finns solen, en jättestor stjärna som lyser och värmer. Runt solen kretsar åtta planeter, och vår jord är en av dem.

De fyra planeterna närmast solen kallas stenplaneter. De är Merkurius, Venus, Jorden och Mars. De har fast mark, ungefär som jorden vi står på. Merkurius är närmast solen och otroligt varm på den sida som vetter mot solen. Venus har så tjocka moln av gas att den är ännu varmare, trots att den ligger längre bort.

Längre ut hittar vi gasplaneternas rike. Jupiter är störst av alla planeter — så stor att alla andra planeter skulle rymmas inuti den. Saturnus är känd för sina vackra ringar, som består av is och sten. Uranus och Neptunus är de mest avlägsna och kallaste planeterna.

Förutom planeter finns det månar, asteroider och dvärplaneter i vårt solsystem. Pluto räknades länge som den nionde planeten, men forskare bestämde år 2006 att den är för liten. Nu kallas den dvärplanet.

Ljuset från solen tar åtta minuter att nå jorden. Till Neptunus tar det över fyra timmar. Vårt solsystem är så stort att det är svårt att ens föreställa sig. Men det är bara en liten prick i vår galax, Vintergatan, som innehåller hundratals miljarder stjärnor.`,
    analysisQuestions: [
      "Vilka är de åtta planeterna? I vilken ordning från solen ligger de?",
      "Vad är skillnaden mellan stenplaneter och gasplaneter?",
      "Varför är Pluto inte längre en planet?",
      "Vilken ny sak lärde du dig av texten?",
      "Hur är texten organiserad? Varför presenteras planeterna i den ordningen?",
    ],
    structure:
      "Faktatexten är ordnad från det närmaste till det mest avlägsna, med solen i centrum. Varje stycke behandlar en grupp av himmelkroppar. Texten avslutas med perspektiv på storleken.",
    languageFeatures:
      "Informerande stil med jämförelser som gör fakta begripliga. Siffror och namn blandas med levande beskrivningar. Avslutningen skapar förundran.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },

  // ─── MELLANSTADIET: BERÄTTANDE ─────────────────────────────
  {
    slug: "skatten-i-skogen",
    title: "Skatten i skogen",
    category: "berattande",
    categoryLabel: "Berättande text",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Det började med en karta. Wilma hittade den i en gammal bok på vinden, invirad i ett tunt papper. Kartan var gulnad och skör, med handritade streck som visade stigar, ett kors och texten: "Här vilar skatten."

"Kolla vad jag hittade!" ropade hon ner till sin bror Kasper, som satt i soffan och spelade tv-spel.

Kasper var inte imponerad. "Det är säkert farmors gamla grejer. Det finns ingen skatt."

Men Wilma var redan på väg ut. Hon tog på sig stövlarna, stoppade kartan i fickan och gick mot skogen bakom huset. Efter en stund hörde hon steg bakom sig. Kasper.

"Jag följer bara med för säkerhets skull," sa han.

Kartan visade en stig som gick längs bäcken och sedan svängde mot den stora stenen som de kallade Trollstenen. Wilma jämförde hela tiden med terrängen. Det stämde förvånansvärt bra.

Vid Trollstenen pekade ett kors mot en gammal ek. Wilma räknade tjugo steg österut, precis som kartan visade. Där, bland rötterna, stack något fram ur jorden. En metallask.

Kasper glömde att han inte trodde på skatten. Han hjälpte till att gräva. Asken var rostig men hel. De öppnade den försiktigt.

Inuti låg det inga guldmynt. Istället hittade de en bunt gamla fotografier, en liten dagbok och en silverring. Dagboken tillhörde deras farfars mormor. Hon hade gömt sina mest älskade ägodelar under kriget.

"Det är ju bättre än guld," sa Wilma.

Kasper sa ingenting. Men han log.

De gick hem med asken mellan sig, och den kvällen satt hela familjen runt köksbordet och bläddrade i den gamla dagboken. Det var som att öppna en dörr till en annan tid.`,
    analysisQuestions: [
      "Hur förändras Kaspers inställning under berättelsen?",
      "Varför säger Wilma att innehållet är bättre än guld?",
      "Hur byggs spänningen upp i texten? Ge exempel.",
      "Vad berättar slutet om vad som verkligen är värdefullt?",
      "Skriv en fortsättning: Vad stod det i dagboken?",
    ],
    structure:
      "Äventyrsberättelse med tydlig uppbyggnad: upptäckt, resa, hinder (Kaspers tvivel), klimax (fyndet) och upplösning (familjen samlas). Tempot ökar mot slutet.",
    languageFeatures:
      "Berättande med dialog som driver handlingen. Korta och långa meningar blandas för att skapa tempo. Detaljer som bygger spänning (rostig ask, handritade streck). Kontraster mellan karaktärerna.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ═══════════════════════════════════════════════════════════
  // NYA TEXTER — HÖGSTADIET
  // ═══════════════════════════════════════════════════════════

  // ─── HÖGSTADIET: NOVELLER ──────────────────────────────────
  {
    slug: "spegeln",
    title: "Spegeln",
    category: "novell",
    categoryLabel: "Novell",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Varje morgon stod Noa framför spegeln i badrummet och försökte bli någon. Inte sig själv — det räckte inte. Han behövde vara den version av sig själv som passade in. Den som sa rätt saker, log vid rätt tillfällen och aldrig, aldrig visade att han var osäker.

Han hade ett system. Håret skulle sitta på ett visst sätt. Tröjan fick inte vara för fin, men inte för slarvigt heller. Ansiktsuttrycket: avslappnat, lite coolt, som om ingenting spelade någon roll. Det tog ungefär femton minuter att få till det. Ibland tjugo.

I skolan fungerade det mesta. Han skrattade åt rätt skämt. Han höll sig nära de rätta personerna. Han sa aldrig vad han egentligen tyckte om saker. Det var som att bära en rustning av normalitet.

Men ibland sprack den. Som den gången i biologin, när läraren visade en dokumentär om havet och Noa blev så fascinerad att han ställde tre frågor efter varandra. Efteråt såg han blickarna. Inte elaka, men förvånade. Han hade brutit ett osynligt kontrakt.

"Nörd," sa Olle. Han sa det med ett leende, som om det var ett skämt. Noa log tillbaka. Men inuti lade han en ny regel till listan: visa inte att du bryr dig för mycket.

En eftermiddag hittade hans syster Maja honom i badrummet. Han stod framför spegeln igen, men den här gången bara stirrade.

"Vad gör du?" frågade hon.

"Ingenting."

"Du ser ledsen ut."

"Jag ser helt normal ut."

Maja ställde sig bredvid honom. Hennes hår var tovigt och hon hade tandkräm på hakan. Hon brydde sig inte. Hon var tolv och hade fortfarande den lyxen.

"Du behöver inte vara normal," sa hon och gick.

Noa stod kvar. Han tittade på sitt ansikte i spegeln. Bakom den avslappnade masken såg han någon som var trött. Trött på att prestera en person han inte var.

Han visste inte hur man slutade. Men för första gången undrade han vad som hade hänt om han aldrig hade börjat.`,
    analysisQuestions: [
      "Vad symboliserar spegeln i berättelsen?",
      "Hur gestaltas Noas inre konflikt? Ge konkreta exempel ur texten.",
      "Vilken roll spelar systern Maja? Varför är hennes kommentar viktig?",
      "Novellen handlar om identitet och att passa in. Känner du igen temat? Diskutera.",
      "Hur fungerar det öppna slutet? Vad tror du händer sedan?",
    ],
    structure:
      "Novellen är uppbyggd kring vardagliga situationer som avslöjar en inre kamp. Berättelsen rör sig från det yttre (rutinen framför spegeln) till det inre (insikten om att han spelar en roll). Systerns replik fungerar som en vändpunkt.",
    languageFeatures:
      "Distanserad, nästan klinisk ton som speglar huvudpersonens kontroll. Korta meningar skapar spänning. Metaforer (rustning av normalitet, mask). Undertext i dialogerna.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },
  {
    slug: "tva-sprak",
    title: "Två språk",
    category: "novell",
    categoryLabel: "Novell",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Leila hade två röster. Den ena var den hon använde hemma, med mamma och mormor i köket. Arabiskan flöt mjukt mellan dem som vatten, full av ord som inte hade någon översättning. Ord för kärleksfulla tillrättavisningar, för en speciell sorts trötthet, för känslan av att sakna ett land man knappt minns.

Den andra rösten var skolrösten. Ren, tydlig svenska med Stockholmsmelodi. Den hade hon tränat i åratal, slipat bort varje ljud som inte passade in. Det var den rösten som fick lärare att säga att hon var "så bra på svenska", som om det var förvånande. Som om svenskan inte också var hennes.

Ibland krockar rösterna. Ett arabiskt ord smög sig in mitt i en svensk mening och klasskamraterna tittade upp. "Vad sa du?" Och Leila kände hur rödnan steg, som om hon hade avslöjat en hemlighet.

Det värsta var inte att byta mellan språken. Det var att det inte fanns ett språk som rymde hela henne. Arabiskan saknade ord för hennes vardagsverklighet — skola, kompisar, den svenska hösten. Svenskan saknade ord för den värme som fyllde mormorns kök.

En dag på svensklektionen skulle de skriva en dikt. "Skriv om något som är viktigt för dig," sa läraren.

Leila skrev en dikt med arabiska ord vävda in i svenska meningar. Hon tvekade innan hon lämnade in. Det var inte riktigt det läraren hade bett om.

Men läraren läste den högt för klassen. Efteråt var det tyst en stund, och sedan frågade Sofia, som satt längst bak: "Vad betyder det där ordet — habibti?"

"Det betyder ungefär 'min käraste'. Min mormor säger det till mig."

Sofia nickade. "Det är fint. Det finns inget ord på svenska som låter likadant."

"Nej," sa Leila. "Det gör det inte."

Hon log. Inte för att hon hade hittat en lösning, utan för att någon hade frågat.`,
    analysisQuestions: [
      "Vad innebär det att ha 'två röster'? Hur gestaltas det i texten?",
      "Vilken inre konflikt bär Leila på? Hur uttrycks den?",
      "Hur fungerar dikten som vändpunkt i berättelsen?",
      "Texten handlar om språk och identitet. Vilka fler teman kan du hitta?",
      "Varför är det viktigt att Sofia frågar vad 'habibti' betyder?",
    ],
    structure:
      "Novellen rör sig mellan hem och skola för att visa huvudpersonens kluvna identitet. Den kulminerar i en kreativ handling (dikten) som bygger en bro. Slutet är öppet men hoppfullt.",
    languageFeatures:
      "Poetiskt och sinnligt språk med liknelser (som vatten). Kontraster mellan de två världarna. Dialoger som bär stor vikt med få ord. Arabiska ord integreras naturligt.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ─── HÖGSTADIET: KRÖNIKOR ──────────────────────────────────
  {
    slug: "stressen",
    title: "Stressen ingen pratar om",
    category: "kronika",
    categoryLabel: "Krönika",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Jag vet inte exakt när det började, men någon gång i åttan slutade jag att sova ordentligt. Det var inte insomnia eller något dramatiskt. Jag låg bara och tänkte. På provet i matte. På redovisningen i SO. På det där jag sa till Saga på rasten som kanske lät konstigt. På framtiden, som plötsligt kändes alarmerande nära.

Vuxna säger ofta att tonåren är den bästa tiden i livet. Inga räkningar, inga ansvar, bara ungdom och frihet. Jag undrar vilka tonåren de minns.

Mina dagar ser ut så här: skola från åtta till tre. Läxor. Träning. Ibland ett prov som kräver kvällsläsning. Och någonstans däremellan förväntas jag ha ett socialt liv, hålla ordning på mitt rum och fundera ut vad jag ska bli när jag blir stor. Jag är femton. Jag vet knappt vad jag vill ha till middag.

Det som stressar mig mest är inte de enskilda sakerna. Det är känslan av att aldrig vara klar. Det finns alltid något mer. Ett prov till. En läxa till. En förväntning till. Det är som att springa på ett löpband som hela tiden ökar farten.

Jag frågade min mamma om hon var stressad i skolan. "Nej," sa hon. "Men vi hade inte sociala medier."

Det kanske är en del av det. Men jag tror att det handlar om något större. Om en kultur som mäter värde i prestationer. Om en skola som ibland glömmer att elever inte bara är resultatleverantörer utan faktiskt människor.

Jag vill inte klaga. Jag vet att det finns de som har det svårare. Men kanske behöver vi prata om att det inte är normalt att femtonåringar ligger vakna på nätterna och oroar sig. Kanske behöver vi erkänna att när så många unga mår dåligt, är det inte ungdomarnas fel. Det är systemets.`,
    analysisQuestions: [
      "Hur beskriver krönikören sin stress? Vilka konkreta exempel ges?",
      "Vad är krönikörens tes — vad vill hen egentligen säga?",
      "Hur använder texten jämförelsen med löpbandet? Varför är den effektfull?",
      "Vad tycker du om slutsatsen att det är systemets fel, inte ungdomarnas?",
    ],
    structure:
      "Personlig inledning som drar in läsaren. Varvar egna upplevelser med samhällsreflektioner. Bygger mot en slutsats. Avslutningen breddar perspektivet från det personliga till det strukturella.",
    languageFeatures:
      "Ärlig, direkt ton. Blandning av humor och allvar. Uppräkningar skapar stress i texten (ett prov till, en läxa till). Modiga påståenden som utmanar läsaren.",
    skrivverkstadLink: "/skrivverkstad/kronika",
    skrivverkstadLabel: "Skrivverkstad: Krönika",
  },
  {
    slug: "framtiden-kan-vanta",
    title: "Framtiden kan vänta",
    category: "kronika",
    categoryLabel: "Krönika",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `"Vad vill du bli när du blir stor?"

Jag har fått den frågan ungefär tre hundra gånger. Av släktingar på julafton. Av lärare på utvecklingssamtal. Av den där farbror på bussen som av någon anledning vill prata med mig.

När jag var liten var svaren enkla. Astronaut. Veterinär. Pokémonmästare. Ingen ifrågasatte det. Alla log och sa att det lät bra.

Nu är jag fjorton, och plötsligt är frågan inte söt längre. Den är allvarlig. Den kräver ett vettigt svar. Och jag har inget.

Det är inte så att jag inte har intressen. Jag gillar att rita. Jag tycker om biologi. Ibland skriver jag texter bara för att jag har något jag vill säga. Men ingen av de sakerna har jag lyckats paketera till ett snyggt svar som gör vuxna nöjda.

Mina kompisar verkar veta. Anton ska bli programmerare. Li ska bli läkare. Jag har en misstanke om att de flesta av dem gissar, precis som jag, men de gissar med mer övertygelse.

Ibland önskar jag att det fanns ett alternativ till den eviga frågan. Istället för "Vad vill du bli?" kanske man kunde fråga: "Vad tycker du om att göra?" eller "Vad gör dig nyfiken?" Det hade gett mig en chans att svara ärligt istället för att plocka ett yrke från en lista.

Jag vet inte vad jag ska bli. Men jag vet att jag gillar att fundera. Och just nu tycker jag att det borde räcka.`,
    analysisQuestions: [
      "Vad är krönikörens problem med frågan 'vad vill du bli?'",
      "Hur förändras frågan beroende på ålder? Vad säger det om samhällets förväntningar?",
      "Vilka alternativa frågor föreslår krönikören? Varför är de bättre?",
      "Hur fungerar slutet som avslutning? Är det starkt eller svagt?",
    ],
    structure:
      "Inleds med den vanliga frågan som sedan dissekeras genom personliga erfarenheter. Texten rör sig kronologiskt och avslutas med ett eget alternativ och en självaccepterande slutsats.",
    languageFeatures:
      "Vardaglig, personlig ton. Överdrifter och humor (Pokémonmästare, farbror på bussen). Korta stycken. Retoriska reflektioner. Avslutningen kontrasterar osäkerhet med trygghet.",
    skrivverkstadLink: "/skrivverkstad/kronika",
    skrivverkstadLabel: "Skrivverkstad: Krönika",
  },

  // ─── HÖGSTADIET: UTREDANDE ─────────────────────────────────
  {
    slug: "spraket-forandras",
    title: "Språket förändras — hot eller möjlighet?",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Svenska språket har alltid förändrats. Vikingar talade fornsvenska, som är nästan obegriplig för en modern svensk. Under 1600-talet lånades massvis av tyska ord in. På 1900-talet strömmade engelska in med filmer, musik och teknologi. Idag fortsätter förändringen, och som vanligt finns det de som oroar sig och de som välkomnar det.

En av de mest diskuterade förändringarna är inflödet av engelska ord i vardagsspråket. Ungdomar säger "random" istället för "slumpmässig", "cringe" istället för "pinsam" och "basic" istället för "tråkig". Kritiker menar att svenskan utarmas, att ord som en gång var levande ersätts av importerade uttryck. Varför säga "nice" när man kan säga "trevligt"?

Språkforskare pekar dock på att den här oron inte är ny. Varje generation har klagat på den yngre generationens språk. På 1700-talet kritiserades franskans inflytande. På 1950-talet var det amerikanskan. Svenskan har överlevt alla dessa vågor och faktiskt blivit rikare av dem. Ordet "fönster" kommer från tyskan, och ingen tänker på det som ett hot idag.

Förespråkare för språkförändringar menar dessutom att nya ord fyller ett behov. Ibland saknar svenskan ett ord för en känsla eller ett begrepp, och då är det naturligt att låna. Ordet "lagom" anses vara unikt för svenska — kanske har andra språk också unika uttryck som berikar vårt.

Men det finns en annan sida. Om formellt och akademiskt svenska tappar mark och alltmer ersätts av engelska i arbetslivet och forskningen, riskerar svenskan att bli ett språk som bara används privat. Det kallas domänförlust och är ett reellt hot.

Sammanfattningsvis är språkförändring varken helt bra eller helt dålig. Det avgörande är om svenskan behåller sin roll i alla delar av samhället — i klassrummet, i politiken, i forskningen. Så länge den gör det, kan den tåla att låna ett och annat ord.`,
    analysisQuestions: [
      "Vilka perspektiv på språkförändring presenteras?",
      "Vad är domänförlust och varför beskrivs det som ett hot?",
      "Hur visar texten att oron för språkförändring har funnits i alla tider?",
      "Vilken slutsats drar texten? Håller du med?",
      "Hur skiljer sig den utredande tonen från en krönika om samma ämne?",
    ],
    structure:
      "Klassisk utredande text med frågeställning, olika perspektiv ordnade tematiskt, och en sammanfattande slutsats. Varje stycke behandlar ett perspektiv.",
    languageFeatures:
      "Sakligt och opersonligt. Passiva konstruktioner. Sambandsord (dock, dessutom, å andra sidan, sammanfattningsvis). Kontraster mellan perspektiv. Undviker att ta ställning direkt.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },

  // ─── HÖGSTADIET: ARGUMENTERANDE ────────────────────────────
  {
    slug: "klimatet-ar-vart-ansvar",
    title: "Klimatet är vårt ansvar",
    category: "argumenterande",
    categoryLabel: "Argumenterande text",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Det råder ingen tvekan: klimatförändringarna är vår tids största utmaning. Temperaturerna stiger, extremväder blir vanligare och arter försvinner i en takt som inte har setts på miljoner år. Frågan är inte om vi behöver agera, utan hur — och vem som bär ansvaret.

Många pekar på att det är politikerna och de stora företagen som måste förändras. Det stämmer. De hundra största företagen i världen står för en stor del av de globala utsläppen. Ingen mängd återvinning i privathem kan kompensera för industrins utsläpp. Politiska beslut om fossilfri energi, transportinfrastruktur och industrireglering är helt avgörande.

Men det betyder inte att individens handlingar saknar betydelse. Varje val vi gör som konsumenter skickar en signal. Om vi väljer att åka tåg istället för att flyga, att äta mindre kött, att köpa begagnat, så påverkar det marknaden. Företag säljer det vi köper. Om vi ändrar våra vanor, ändrar de sina produkter.

Motargumentet att individens insats är en droppe i havet är förståeligt men farligt. Om alla tänker så, händer ingenting. Dessutom visar forskning att individuella handlingar har en spridningseffekt. Den som byter till cykelpendling inspirerar andra att göra detsamma. Förändring börjar ofta med enstaka individer som vågar gå först.

Det som behövs är inte antingen politisk förändring eller individuellt ansvar. Det behövs båda. Vi måste kräva handling av våra politiker samtidigt som vi tar ansvar för våra egna val. Att sitta och vänta på att någon annan ska lösa krisen är inte ett alternativ.

Klimatfrågan handlar i grunden om solidaritet — med dem som redan drabbas och med framtida generationer som ännu inte kan föra sin talan. Vi har kunskapen. Vi har verktygen. Det enda som saknas är viljan att använda dem.`,
    analysisQuestions: [
      "Vilken tes driver texten? Var framgår den tydligast?",
      "Hur hanteras motargumentet om att individens insats inte spelar roll?",
      "Vilka typer av argument används — etos, logos eller patos?",
      "Hur fungerar den avslutande meningen retoriskt?",
    ],
    structure:
      "Inledning med bakgrund och problemformulering. Argument presenteras i ökande styrka. Motargument bemöts mitt i texten. Avslutningen sammanfattar med retorisk kraft.",
    languageFeatures:
      "Engagerande, övertygande ton. Starka påståenden balanseras med nyansering. Retorisk triad i slutet (kunskap, verktyg, vilja). Sambandsord och kontraster.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },

  // ═══════════════════════════════════════════════════════════
  // NYA TEXTER — GYMNASIET
  // ═══════════════════════════════════════════════════════════

  // ─── GYMNASIET: UTREDANDE ──────────────────────────────────
  {
    slug: "ai-i-utbildningen",
    title: "Artificiell intelligens i utbildningen — möjligheter och risker",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Under de senaste åren har artificiell intelligens, AI, gått från att vara ett begrepp i science fiction till att bli en del av vardagen. Chattbotar skriver texter, bildgeneratorer skapar konst och språkmodeller kan besvara komplexa frågor på sekunder. Denna utveckling ställer utbildningssystemet inför en av sina mest avgörande frågor: hur ska skolan förhålla sig till AI?

Förespråkare menar att AI kan demokratisera lärandet. En elev som har svårt att förstå en text kan be en språkmodell att förklara den enklare. Den som inte har råd med privatundervisning kan få individuell handledning dygnet runt. AI-verktyg kan anpassa uppgifter efter elevens nivå och ge omedelbar återkoppling, något som en lärare med trettio elever omöjligt hinner med.

Kritiker lyfter dock allvarliga invändningar. Om elever kan få svar på alla frågor med ett knapptryck, vad händer då med förmågan att tänka själv? Skrivande är inte bara en produkt — det är en tankeprocess. Den som aldrig kämpar med att formulera sina idéer utvecklar inte heller sin analytiska förmåga. Risken är att AI-genererade texter ersätter eget tänkande snarare än stödjer det.

Det finns också rättvisefrågor. Kommersiella AI-verktyg kostar pengar, och de bästa modellerna är inte tillgängliga för alla. Om AI-användning ökar i utbildningen utan att verktygen är fritt tillgängliga, riskerar det att förstärka befintliga klyftor snarare än minska dem.

Dessutom väcker AI frågor om bedömning och akademisk hederlighet. Om en elev lämnar in en text som delvis eller helt är skriven av en AI, hur ska det bedömas? Traditionella examinationsformer kanske behöver omprövas till förmån för muntliga redovisningar, processorienterat skrivande eller samarbetsprojekt.

Sammanfattningsvis befinner sig skolan i ett brytningsskede. AI kommer inte att försvinna, och att förbjuda verktyget löser inga problem. Utmaningen ligger istället i att integrera AI på ett sätt som stärker lärandet utan att urholka det. Det kräver att lärare, elever och beslutsfattare gemensamt formulerar vad vi vill att utbildning ska vara i en tid då maskiner kan skriva uppsatser men inte tänka.`,
    analysisQuestions: [
      "Vilka möjligheter med AI i utbildningen lyfts fram?",
      "Vilka risker identifieras? Hur värderar du dem?",
      "Hur förhåller sig texten till frågan om rättvisa? Varför är det relevant?",
      "Vilken slutsats drar texten? Tycker du att den är välgrundad?",
      "Hur skiljer sig denna utredande text från en debattartikel om samma ämne?",
    ],
    structure:
      "Klassisk utredande text med inledande bakgrund, flera perspektiv som presenteras tematiskt (möjligheter, risker, rättvisa, bedömning) och en sammanfattande slutsats som pekar framåt.",
    languageFeatures:
      "Akademisk, saklig stil. Passiva konstruktioner och opersonligt tilltal. Nyanserade formuleringar med reservationer (riskerar, kanske, kan). Sambandsord som strukturerar (dock, dessutom, sammanfattningsvis).",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },
  {
    slug: "sprak-och-makt",
    title: "Språk och makt — hur ord formar verkligheten",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Språket är inte neutralt. Bakom varje ordval finns ett perspektiv, en historia och ibland en maktstruktur. Denna text undersöker hur språk används för att inkludera och exkludera, övertyga och manipulera — och varför det spelar roll vem som definierar orden.

Ett tydligt exempel är hur medier och politiker benämner samma fenomen med olika ord. En person som lämnar sitt hemland kan beskrivas som "flykting", "migrant", "invandrare" eller "nysvensk". Varje ord bär med sig olika associationer och väcker olika känslor. Valet av ord styr hur vi uppfattar verkligheten och vilka politiska lösningar som framstår som rimliga.

Inom genusforskningen har språkets makt diskuterats ingående. Svenska hade länge inget könsneutralt pronomen, vilket av kritiker ansågs spegla en binär könsuppfattning. Införandet av "hen" mötte stort motstånd men har gradvis etablerats, och studier visar att det påverkar hur vi tänker om kön och identitet. Ordet skapade inte bara ett nytt pronomen — det öppnade ett nytt tankeutrymme.

Historiskt sett har den som kontrollerat språket också kontrollerat berättelsen. Kolonialismens språk definierade andra kulturer som "primitiva" och "outvecklade", och dessa definitioner levde kvar långt efter att kolonialväldet föll. Än idag präglas läromedel, kartor och berättelser av perspektiv som en gång formulerades av makthavare.

Men språk kan också vara ett verktyg för motstånd. Sociala rörelser har alltid kämpat om rätten att definiera sig själva — från medborgarrättsrörelsen till dagens identitetspolitiska debatter. Att återta ett ord som en gång var nedsättande, eller att insistera på en ny benämning, är en politisk handling.

Slutsatsen är inte att vi ska frukta orden, utan att vi ska vara medvetna om dem. Språklig medvetenhet innebär att förstå att ord aldrig bara beskriver — de skapar. Den som behärskar språkets nyanser har ett verktyg som är mäktigare än de flesta vapen.`,
    analysisQuestions: [
      "Vilka exempel på språkets makt ges i texten?",
      "Hur påverkar ordvalet vår bild av verkligheten, enligt texten?",
      "Vad innebär det att språk kan vara ett verktyg för motstånd?",
      "Hur förhåller sig texten till begreppet 'hen'? Vilka perspektiv lyfts?",
      "Diskutera den avslutande tesen om att ord inte bara beskriver utan skapar. Håller du med?",
    ],
    structure:
      "Utredande text med tematisk disposition. Inleds med en tes om språkets makt, illustreras genom fyra perspektiv (medier, genus, kolonialism, motstånd) och avslutas med en sammanfattande reflektion.",
    languageFeatures:
      "Akademisk stil med essäistiska inslag. Precist ordval och medvetna formuleraingar. Passiva konstruktioner blandas med aktiva. Den avslutande meningen fungerar som aforism.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },

  // ─── GYMNASIET: HISTORISKA ─────────────────────────────────
  {
    slug: "upplysningstankaren",
    title: "Upplysningstänkaren",
    category: "historisk",
    categoryLabel: "Historisk text i modern tappning",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Hon satt vid det flämtande stearinljuset och skrev. Utanför fönstret låg Stockholm i vintermörker, och isen på Mälaren knakade som om den hade hemligheter. Det var 1753, och hon visste att orden hon formulerade kunde kosta henne allt.

"Tänk om," skrev hon, "vi lät varje människa bilda sig en uppfattning utifrån sin egen förmåga, snarare än utifrån sitt kön, sin börd eller sin plånbok? Tänk om vi lät förnuftet, inte traditionen, vara vår ledsagare?"

Det var farliga tankar. Inte för att de var ovanliga — i Paris och London diskuterade filosofer liknande idéer i salonger och kaffehus. Men där var det män som diskuterade. Och här, i en kall kammare i Gamla stan, var det en kvinna.

Hon visste att hennes manuskript skulle bli hånat om hon publicerade det under sitt eget namn. Därför valde hon en pseudonym, som så många kvinnliga tänkare före och efter henne. Orden fick tala för sig själva, utan besvärande koppling till ett kön.

Upplysningens ideal — förnuft, frihet, jämlikhet — hade en blind fläck. De gällde i teorin alla, men i praktiken bara halva befolkningen. Det skulle dröja mer än hundra år innan de radikala idéerna om kvinnors rätt att tänka, skriva och verka offentligt blev verklighet.

Idag kan vi läsa hennes ord fritt, om vi ens vet att de existerar. De flesta gör det inte. Historien minns filosoferna. Den glömmer dem som inte fick skriva under eget namn.

Men orden finns kvar. I arkiven, i de gulnade manuskripten. Och de frågor hon ställde ekar fortfarande: vems röst räknas? Vem får formulera verkligheten? Och vad förlorar vi när vi tystar hälften av alla tänkare?`,
    analysisQuestions: [
      "Hur kopplar texten samman upplysningens ideal med kvinnors situation?",
      "Vilken effekt har det att berättelsen är fiktionaliserad snarare än en ren faktaframställning?",
      "Vad menar texten med att upplysningens ideal hade en blind fläck?",
      "Hur fungerar de avslutande frågorna retoriskt?",
      "Jämför med texten 'Om frihet'. Vilka likheter och skillnader finns?",
    ],
    structure:
      "Historisk text med skönlitterära inslag. Inleds i scen (berättande), övergår till reflektion och analys, och avslutas med retoriska frågor som riktar sig till nutiden.",
    languageFeatures:
      "Blandning av berättande och resonerande. Historisk atmosfär skapas genom detaljer (stearinljus, Gamla stan, 1753). Kontrastverkan mellan dåtid och nutid. Högtidligt men tillgängligt stilläge.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },
  {
    slug: "folkhemmet-dromsommar",
    title: "Folkhemmets drömsommar",
    category: "historisk",
    categoryLabel: "Historisk text i modern tappning",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Sommaren 1965 var varm. I radion spelade de schlagers, och längs vägarna rullade Volvo Amazon och SAAB 96 med semesterlastade takräcken. Sverige var i full rörelse, och rörelsen pekade uppåt.

I Göteborgs förorter reste sig nya hus ur leran, etapp efter etapp. Varje lägenhet hade rinnande vatten, centralvärme och ett eget badrum — saker som en generation tidigare hade varit lyxvaror. Familjer som hade bott i fuktiga envåningshus utan toalett inomhus fick nyckeln till en trerummare med balkong. Det var inte bara bostäder. Det var löften om ett bättre liv.

Per Axel Lindqvist, som hela sitt vuxna liv hade arbetat på SKF:s kullagersfabrik, stod på sin nya balkong med en kopp kaffe och blickade ut över det som skulle bli ett helt nytt kvarter. Hans fru Inga-Britt hade nyss börjat arbeta halvtid på kontoret i stan — något som hennes egen mor aldrig hade haft möjlighet till.

Det var folkhemmets guldålder. En tid då välfärden verkade sakna gränser. Sjukvård för alla. Utbildning för alla. En framtid som kändes lika trygg som en fabriksanställning med kollektivavtal.

Men sprickorna fanns redan. De som inte passade in i den välplanerade ordningen — de som talade ett annat språk, bar en annan hudfärg eller levde utanför normen — fick inte alltid del av samma löfte. Folkhemmet var stort, men det var inte alltid rymligt.

Idag, sextio år senare, står dessa bostadskvarter kvar. Fasaderna har bleknat. Balkongerna bär på andra historier nu. Men om man lyssnar noga kan man fortfarande höra något av den optimism som en gång drev ett helt land framåt — och de frågor som aldrig riktigt fick svar.`,
    analysisQuestions: [
      "Hur skildras folkhemmet i texten? Vilka positiva aspekter lyfts?",
      "Vilka 'sprickor' nämns? Varför är de viktiga för helhetsbilden?",
      "Hur används de fiktiva personerna Per Axel och Inga-Britt för att gestalta en epok?",
      "Vad innebär det att folkhemmet var stort men inte alltid rymligt?",
      "Jämför folkhemmets löften med dagens samhälle. Vad har förändrats?",
    ],
    structure:
      "Berättande historisk text som rör sig från det konkreta (en sommardag, en balkong) till det abstrakta (folkhemmets ideal och dess begränsningar). Avslutningen knyter samman dåtid och nutid.",
    languageFeatures:
      "Realistiskt berättande med historiska detaljer (bilmärken, SKF). Nostalgi som balanseras av kritisk medvetenhet. Korta, atmosfäriska meningar. Bildspråk (löften, sprickor). Cirkulär struktur.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ─── GYMNASIET: NOVELL ─────────────────────────────────────
  {
    slug: "granssnitt",
    title: "Gränssnitt",
    category: "novell",
    categoryLabel: "Novell",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Det var inte meningen att hon skulle läsa chatten. Men telefonen låg öppen på bordet och meddelandet lyste i mörkret som en neonreklam.

"Jag fattar inte varför du hänger med henne."

Amira borde ha vänt bort blicken. Istället scrollade hon uppåt. Meddelande efter meddelande, ett helt samtal om henne. Ord som hon inte hade vetat att de tänkte. Ord som i normala fall gömdes bakom leenden och neutrala röster.

"Hon försöker för hårt."
"Alltid ska hon bevisa något."
"Det är liksom... ansträngande."

Telefonen tillhörde Sofia, som hade gått på toaletten. De hade pluggat ihop inför provet i samhällskunskap. Amira hade trott att de var vänner. Inte nära vänner, kanske, men den sortens relation där man åtminstone menar det man säger.

Hon lade tillbaka telefonen exakt som den hade legat. När Sofia kom tillbaka log Amira och fortsatte att plugga. Hon ställde frågor om statsminister och riksdag och låtsades att ingenting hade hänt. Hon hade alltid varit bra på att låtsas.

Den natten låg hon vaken och sorterade orden. "Försöker för hårt." Stämde det? Kanske. Hon hade alltid ansträngt sig — i skolan, i relationer, i allt. Hennes mamma brukade säga att man måste vara dubbelt så bra för att bli hälften så sedd. Det var inte en klyscha i deras familj. Det var en överlevnadsstrategi.

Dagarna som följde var en övning i precision. Amira log exakt lika mycket som innan. Hon svarade på meddelanden inom rimlig tid. Hon var trevlig men inte för trevlig. Inne i henne pågick en kalkyl som aldrig tog slut: hur mycket av sig själv kunde hon visa utan att bli för mycket?

En eftermiddag satt hon ensam i biblioteket. En kille från parallellklassen satte sig mittemot.

"Du läser alltid så fokuserat," sa han. "Vad läser du?"

"Sociologi," sa Amira. "Om hur människor anpassar sig till grupper."

"Och? Vad har du kommit fram till?"

Hon tvekade. Sedan sa hon sanningen: "Att priset för att passa in ofta är att försvinna."

Han nickade, långsamt, som om han kände igen det.

De sa inget mer. Men det var en tystnad som inte krävde någon mask.`,
    analysisQuestions: [
      "Vad symboliserar gränssnittet i titeln? Vilka gränssnitt finns i berättelsen?",
      "Hur gestaltas Amiras inre konflikt? Vilka stilmedel används?",
      "Vilken roll spelar mammans citat? Hur bidrar det till förståelsen av Amiras beteende?",
      "Hur fungerar den avslutande scenen i biblioteket som kontrast till resten?",
      "Diskutera novellens teman: identitet, tillhörighet och dolda spelregler.",
    ],
    structure:
      "Novellen inleds in medias res (mitt i handlingen). Berättelsen växlar mellan yttre händelser och inre reflektion. Den avslutande scenen erbjuder ett slags motbild till det som kommit tidigare.",
    languageFeatures:
      "Kontrollerat, avskalat språk som speglar huvudpersonens behov av kontroll. Korta meningar och uppräkningar skapar intensitet. Metaforer (neonreklam, mask, kalkyl). Dialoger med undertext.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ─── GYMNASIET: ARGUMENTERANDE ─────────────────────────────
  {
    slug: "demokratin-ar-inte-given",
    title: "Demokratin är inte given",
    category: "argumenterande",
    categoryLabel: "Argumenterande text",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `I en tid då auktoritära rörelser vinner mark i demokratier runt om i världen är det frestande att betrakta den svenska demokratin som en självklarhet. Vi har allmän rösträtt, yttrandefrihet, fria medier och oberoende domstolar. Men historien lär oss att ingen av dessa institutioner är permanent. De måste försvaras — inte med vapen, utan med engagemang, kunskap och vaksamhet.

Det demokratiska systemet vilar på ett antal grundpelare. En av de viktigaste är yttrandefriheten: rätten att uttrycka sina åsikter utan rädsla för repressalier. Men yttrandefrihet innebär inte bara rätten att tala. Den innebär också ansvaret att lyssna. En demokrati där alla skriker men ingen hör blir en demokrati bara till formen.

En annan grundpelare är mediernas oberoende. Fria medier granskar makten, avslöjar missförhållanden och ger medborgarna den information de behöver för att fatta kloka beslut. När medier kontrolleras eller misstänkliggörs systematiskt, förlorar medborgarna sin karta. Utan karta irrar man runt i mörkret.

Det kanske mest underskattade hotet mot demokratin är inte extremism, utan likgiltighet. I de senaste valen har valdeltagandet varit relativt högt i Sverige, men bland unga förstagångsväljare finns en växande känsla av att det inte spelar roll. Att alla partier är lika. Att ens röst inte gör skillnad. Denna apati är farligare än den ser ut, för demokratin dör inte alltid med ett brak. Ibland dör den i tystnad, när tillräckligt många slutar bry sig.

Att försvara demokratin kräver inte heroism. Det kräver att vi deltar. Att vi röstar, inte bara vart fjärde år utan i vardagen: genom att bilda oss, genom att ifrågasätta, genom att insistera på att fakta spelar roll. Demokratin är inte ett slutresultat. Den är en process som varje generation måste fullfölja.

Priset för frihet har aldrig varit att slappna av. Det har alltid varit att bry sig.`,
    analysisQuestions: [
      "Vilka hot mot demokratin identifierar texten? Vilket anses vara störst?",
      "Hur använder texten retoriska medel (etos, logos, patos)?",
      "Vad menar texten med att demokratin ibland dör i tystnad?",
      "Hur fungerar den avslutande meningen som sammanfattning av hela argumentationen?",
      "Jämför med en utredande text om demokrati. Hur skiljer sig syftet och tonen?",
    ],
    structure:
      "Inledning med kontextualisering (internationellt perspektiv). Tre argument presenteras tematiskt (yttrandefrihet, medier, likgiltighet). Varje argument underbyggs och exemplifieras. Avslutningen sammanfattar med retorisk kraft.",
    languageFeatures:
      "Högtidligt, engagerande språk. Retoriska figurer: upprepning (att vi röstar, att vi bildar oss), metaforer (karta, mörker), kontraster (brak/tystnad). Sofistikerad argumentation med ethos, logos och pathos integrerade.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },

  // ─── POESI ──────────────────────────────────────────────────

  // Lågstadiet — Poesi
  {
    slug: "lilla-grodan",
    title: "Lilla grodan",
    category: "poesi",
    categoryLabel: "Poesi",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Lilla grodan sitter still
    på sitt blad vid bäckens rand.
    Hon ser molnen vandra fritt
    över skog och över strand.

    "Kvack!" säger grodan glad,
    "Vilken härlig sommardag!
    Solen lyser, vinden blåser,
    och jag trivs precis som jag."

    Trollsländan flyger förbi,
    fjärilen dansar i vind.
    Lilla grodan hoppar glatt
    och får regndroppar på kind.`,
    analysisQuestions: [
      "Vilka djur finns med i dikten? Vad gör de?",
      "Vilka ord i dikten rimmar?",
      "Hur känner sig grodan? Hur vet du det?",
    ],
    structure:
      "Dikten har tre strofer med fyra rader i varje. Varannan rad rimmar. Enkel berättande struktur med en huvudkaraktär.",
    languageFeatures:
      "Enkel svenska med korta meningar. Rim skapar rytm och gör dikten lätt att minnas. Personifiering av grodan som talar. Naturbeskrivningar med konkreta ord.",
    skrivverkstadLink: "/skrivverkstad/poesi",
    skrivverkstadLabel: "Skrivverkstad: Poesi",
  },
  {
    slug: "vinternatten",
    title: "Vinternatten",
    category: "poesi",
    categoryLabel: "Poesi",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Snön faller tyst i natten,
    vit och mjuk som bomull.
    Taken blir till sockertoppar,
    gatan blir ett skimrande troll.

    Katten sover inomhus
    och drömmer om en mus.
    Månen lyser som en lampa
    över varje litet hus.

    Imorgon ska vi bygga,
    en snögubbe så stor.
    Med morotnäsa, stenögon
    och en halsduk som mor.`,
    analysisQuestions: [
      "Vilka jämförelser gör dikten? Vad jämförs med vad?",
      "Vad handlar dikten om? Berätta med egna ord.",
      "Vilken årstid beskrivs? Hur vet du det?",
    ],
    structure:
      "Tre strofer med fyra rader. Dikten rör sig från kvällsbild till morgonplanering. Enkel kronologisk ordning.",
    languageFeatures:
      "Liknelser (vit och mjuk som bomull, lyser som en lampa). Rim i varannan rad. Sinnesintryck: syn och känsel. Vardagsnära ordval som barn känner igen.",
    skrivverkstadLink: "/skrivverkstad/poesi",
    skrivverkstadLabel: "Skrivverkstad: Poesi",
  },

  // Mellanstadiet — Poesi
  {
    slug: "basta-vannen",
    title: "Bästa vännen",
    category: "poesi",
    categoryLabel: "Poesi",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Du var den som väntade vid grinden
    när alla andra redan gått.
    Du var den som delade sin smörgås
    fast du själv hade fått för lått.

    Vi cyklade genom somrarna,
    förbi åkrar gula av raps,
    med vinden i håret och skrattet
    som ekade genom varje klapp.

    Ibland bråkade vi om ingenting,
    som vänner brukar göra.
    Men nästa dag var allt som vanligt,
    som om inget hänt att störa.

    Nu bor du långt härifrån,
    men varje gång jag ser en cykelväg
    tänker jag på dig och ler,
    och minns vår sommar, varje steg.`,
    analysisQuestions: [
      "Vilken känsla förmedlar dikten? Ge exempel från texten.",
      "Hur används naturen i dikten?",
      "Vad berättar dikten om vänskap? Vad är viktigt i en vänskap enligt dikten?",
      "Hur förändras stämningen mellan stroferna?",
    ],
    structure:
      "Fyra strofer som följer en kronologisk båge: dåtid (minnen), nutid (saknaden). Varje strof lyfter en aspekt av vänskapen.",
    languageFeatures:
      "Direkt tilltal (du). Konkreta bilder (grinden, smörgåsen, raps). Upprepning av 'du var den som' skapar rytm. Enkel men känslosam ton.",
    skrivverkstadLink: "/skrivverkstad/poesi",
    skrivverkstadLabel: "Skrivverkstad: Poesi",
  },
  {
    slug: "hosten-kommer",
    title: "Hösten kommer",
    category: "poesi",
    categoryLabel: "Poesi",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Löven byter färg igen,
    från grönt till guld och rött.
    Sommaren har packat sina väskor
    och tyst gett sig av på stött.

    Dimman lägger sig som filtar
    över ängar, sjö och stig.
    Spindeln spinner sina nät
    och väntar tålmodigt och vig.

    Regnet trummar på fönsterblecket,
    en rytm som aldrig tröttnar.
    Kökslampan lyser varmt inifrån
    och tepåsen i koppen mörknar.

    Jag sitter vid mitt fönster,
    ser hösten sakta landa.
    Det finns en skönhet i det stilla,
    i allt som håller på att förandra.

    Snart kommer mörkret tidigare,
    snart tänds de första ljusen.
    Men just nu räcker det med regnet
    och tystnaden i husen.`,
    analysisQuestions: [
      "Vilka sinnen (syn, hörsel, känsel) används i dikten? Ge exempel.",
      "Hur beskrivs hösten? Är det positivt, negativt eller blandat?",
      "Vad betyder raden 'Det finns en skönhet i det stilla'?",
      "Hur skapar dikten stämning? Vilka ord bidrar mest?",
    ],
    structure:
      "Fem strofer med fyra rader vardera. Dikten rör sig från yttre natur till inre reflektion. Progressionen följer höstens ankomst.",
    languageFeatures:
      "Personifiering (sommaren packar väskor). Sinnesbilder: syn (färger), hörsel (regn), känsel (varmt). Lugn, meditativ ton. Metaforer och liknelser (dimman som filtar).",
    skrivverkstadLink: "/skrivverkstad/poesi",
    skrivverkstadLabel: "Skrivverkstad: Poesi",
  },

  // Högstadiet — Poesi
  {
    slug: "spegelbilden",
    title: "Spegelbilden",
    category: "poesi",
    categoryLabel: "Poesi",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Jag tittar i spegeln
och ser någon jag inte riktigt känner.
Ansiktet är mitt, men blicken
tillhör en annan version av mig —
den som fanns igår,
eller kanske den som kommer imorgon.

Alla säger att jag ska vara mig själv.
Men vilken "mig själv" menar de?
Den som skrattar högt i korridoren,
eller den som gråter tyst i duschen?
Den som räcker upp handen,
eller den som biter ihop och tiger?

Jag byter skinn som en orm,
inte av svek utan av överlevnad.
Varje rum kräver en ny mask,
varje grupp en ny dialekt.

Ibland, sent på kvällen,
när alla masker ligger på golvet
och rummet är tyst,
hittar jag något som kanske är äkta.
En röst som inte försöker behaga.
En tanke som inte är lånad.

Kanske är det där jag börjar.
Inte i spegeln.
Utan i tystnaden.`,
    analysisQuestions: [
      "Vad handlar dikten om på ett djupare plan?",
      "Hur används metaforen om masker? Vad symboliserar de?",
      "Varför är dikten skriven i fri vers? Hur påverkar det läsupplevelsen?",
      "Vad betyder de avslutande raderna? Var hittar jag-personen sig själv?",
      "Känner du igen dig i dikten? På vilket sätt?",
    ],
    structure:
      "Fri vers utan fast rimmönster. Fem stycken som rör sig från yttre iakttagelse till inre reflektion. Dikten kulminerar i en stilla insikt.",
    languageFeatures:
      "Fri vers med varierande radlängd. Metaforer (masker, skinn, dialekt). Retoriska frågor. Kontraster (skratta/gråta, räcka upp handen/bita ihop). Avskalat, ärligt språk.",
    skrivverkstadLink: "/skrivverkstad/poesi",
    skrivverkstadLabel: "Skrivverkstad: Poesi",
  },
  {
    slug: "grans",
    title: "Gräns",
    category: "poesi",
    categoryLabel: "Poesi",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Det finns en gräns jag inte ser
men alltid känner.
Den går mellan barnet jag var
och den vuxna jag förväntas bli.

På ena sidan: sandlådan,
lördagsgodis, tecknade serier,
dagarna som aldrig tog slut.
På andra sidan: ansvar,
beslut, framtidsplaner
och frågor jag inte vet svaret på.

Jag står på gränsen
med en fot på varje sida
och balanserar.

Ibland vill jag springa tillbaka
till den tid då världen var enkel
och allt löstes med ett plåster.
Ibland vill jag framåt,
till friheten som väntar,
till rätten att bestämma själv.

Men mest av allt vill jag stanna här,
i mellanlandet,
där det är okej att inte veta.
Där frågan "Vem vill du bli?"
inte behöver ett svar ännu.

Gränsen är ingen mur.
Den är en bro.
Och jag behöver inte skynda mig över.`,
    analysisQuestions: [
      "Vilken gräns talar dikten om? Är det en verklig eller symbolisk gräns?",
      "Hur kontrasteras barndom och vuxenliv? Vilka bilder används?",
      "Vad betyder 'mellanlandet'? Varför vill jag-personen stanna där?",
      "Hur tolkar du de avslutande raderna om bron?",
      "Hur speglar diktens form dess innehåll?",
    ],
    structure:
      "Fri vers med sex stycken. Dikten byggs kring en central metafor (gränsen) som utvecklas och omtolkas genom texten. Avslutningen erbjuder en ny bild (bron).",
    languageFeatures:
      "Symbolspråk (gräns, bro, mellanland). Kontraster strukturerar dikten. Uppräkningar skapar konkretion. Kort, avskalat slutstycke ger eftertryck.",
    skrivverkstadLink: "/skrivverkstad/poesi",
    skrivverkstadLabel: "Skrivverkstad: Poesi",
  },

  // Gymnasiet — Poesi
  {
    slug: "tidens-anatomi",
    title: "Tidens anatomi",
    category: "poesi",
    categoryLabel: "Poesi",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Tiden har inga händer
men den griper.
Ingen röst
men den talar genom rynkor,
genom fotografier som gulnar i lådor
ingen längre öppnar.

Jag sitter vid köksbordet en söndagsmorgon
och hör klockan ticka.
Varje slag är ett löfte och ett hot:
du har detta ögonblick,
men bara detta.

Min morfar brukade säga
att tiden inte existerar —
bara förändring gör det.
Trädet som tappar sina löv
vet ingenting om oktober.
Det bara lever.

Men vi räknar.
Vi mäter dagarna i deadlines,
veckorna i scheman,
åren i före och efter.
Vi har gjort tiden till en bur
och satt oss själva inuti.

Det finns ögonblick som vägrar lyda:
skrattet som varar längre än det borde,
samtalet som gör natten kort,
sömnen som kommer utan att man märker det.
I de ögonblicken upphör tiden —
inte för att den stannar,
utan för att vi slutar räkna.

Kanske är det hela hemligheten.
Att leva är inte att hinna.
Det är att glömma att man har bråttom.
Att sitta vid köksbordet
och låta kaffet kallna
medan morgonen bara är.`,
    analysisQuestions: [
      "Hur personifieras tiden i dikten? Vilken effekt har det?",
      "Vad menar morfadern med att tiden inte existerar? Håller du med?",
      "Hur fungerar metaforen om buren? Vad säger den om vår relation till tid?",
      "Vilken roll spelar de konkreta bilderna (köksbordet, kaffet) i en abstrakt dikt?",
      "Jämför diktens syn på tid med ditt eget förhållande till tid.",
    ],
    structure:
      "Sex stycken i fri vers. Dikten pendlar mellan det abstrakta (tid som begrepp) och det konkreta (köksbordet, morfadern). Cirkelkomposition: dikten börjar och slutar vid köksbordet.",
    languageFeatures:
      "Modernistisk stil med fri vers och varierande radlängd. Personifiering, paradoxer (löfte och hot). Filosofisk ton med vardagliga ankarpunkter. Aforistiska slutrader.",
    skrivverkstadLink: "/skrivverkstad/poesi",
    skrivverkstadLabel: "Skrivverkstad: Poesi",
  },
  {
    slug: "det-tomma-rummet",
    title: "Det tomma rummet",
    category: "poesi",
    categoryLabel: "Poesi",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Det finns ett rum i mig
som jag sällan besöker.
Det ligger bortom orden,
bortom de dagliga förhandlingarna
om vem jag ska vara
och vad jag ska tycka.

Rummet har inga möbler.
Inga tavlor på väggarna.
Bara ett fönster
som vetter mot ingenting —
eller kanske mot allting,
beroende på hur man ser.

Ibland, när världen skriker för högt,
när nyheterna blöder
och samtalen kräver ståndpunkter
jag inte äger,
flyr jag dit.
Inte av feghet.
Utan av nödvändighet.

I rummet behöver jag inte prestera.
Inte förklara. Inte försvara.
Jag kan bara finnas,
som ett träd finns,
som en sten i en bäck finns —
utan syfte, utan rättfärdigande.

Filosoferna kallar det kanske medvetande,
psykologerna inre ro,
mystikerna tomhet.
Jag kallar det hem.

Det lustiga är att det tomma rummet
rymmer mer än alla fyllda rum
jag någonsin har besökt.
Kanske för att det enda som fyller det
är det som blir kvar
när man slutar fylla.`,
    analysisQuestions: [
      "Vad symboliserar det tomma rummet? Varför är det viktigt för jag-personen?",
      "Hur kontrasteras yttre och inre världen i dikten?",
      "Vilken roll spelar paradoxen i sista stycket (det tomma rymmer mer)?",
      "Hur förhåller sig dikten till modernistisk poesi? Ge exempel på modernistiska drag.",
      "Diskutera diktens syn på existens och vara. Vilken filosofisk hållning uttrycker den?",
    ],
    structure:
      "Sex stycken i fri vers med stigande abstraktion. Inleds med en konkret bild (rummet), utvecklar metaforen, och avslutar med en paradox. Meditativ progression.",
    languageFeatures:
      "Modernistisk fri vers. Metafor som bärande princip (rummet). Uppräkningar i tretal. Paradoxer och oxymoron. Anaforer (inte... inte...). Avskalat, filosofiskt språk med existentiella undertoner.",
    skrivverkstadLink: "/skrivverkstad/poesi",
    skrivverkstadLabel: "Skrivverkstad: Poesi",
  },

  // ─── RECENSION ──────────────────────────────────────────────

  // Lågstadiet — Recension
  {
    slug: "min-favoritbok-pettson",
    title: "Min favoritbok: Pettson och Findus",
    category: "recension",
    categoryLabel: "Recension",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Jag vill berätta om min favoritbok. Den heter "Pettson får julbesök" och den handlar om en gubbe som heter Pettson och hans katt Findus. Findus är inte en vanlig katt. Han kan prata och han är väldigt busig!

I boken ska Pettson och Findus fira jul. Men det blir problem. Pettson skadar foten och kan inte gå till affären. Hur ska de få julmat? Det är spännande att läsa om hur de löser problemet.

Jag gillar boken för att bilderna är så fina. Man kan titta på dem länge och hitta nya saker varje gång. Findus är rolig och Pettson är snäll. Jag rekommenderar boken till alla som gillar roliga djur och fina bilder.`,
    analysisQuestions: [
      "Vad berättar recensenten om boken?",
      "Varför gillar recensenten boken? Ge exempel.",
      "Vem tror du boken passar för? Varför?",
    ],
    structure:
      "Enkel tredelad struktur: presentation av boken, handling, egen åsikt. Kort och tydlig.",
    languageFeatures:
      "Jag-perspektiv. Enkla meningar. Vardagligt språk. Utropstecken för att visa entusiasm. Positiva värdeord (fina, rolig, snäll).",
    skrivverkstadLink: "/skrivverkstad/recension",
    skrivverkstadLabel: "Skrivverkstad: Recension",
  },
  {
    slug: "boken-om-dogge",
    title: "Boken om Dogge",
    category: "recension",
    categoryLabel: "Recension",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Jag har läst en bok som heter "Kan du vissla Johanna" av Ulf Stark. Den handlar om två kompisar, Bansen och Ansen. Bansen har en morfar men Ansen har ingen. Då bestämmer de sig för att hitta en morfar åt Ansen.

De går till ett äldreboende och hittar en gammal man som heter Nansen. Han blir Ansens nya morfar. De gör roliga saker ihop som att klättra i träd och äta kakor.

Jag tyckte boken var bra för att den var både rolig och lite ledsen. Ibland skrattade jag och ibland blev jag lite ledsen. Det bästa var att Ansen och Nansen blev riktiga vänner. Jag ger boken fyra av fem stjärnor.`,
    analysisQuestions: [
      "Vad handlar boken om? Berätta kort.",
      "Vad tyckte recensenten om boken? Var den bara rolig?",
      "Hur betygsätter recensenten boken? Håller du med om att man kan betygsätta böcker så?",
    ],
    structure:
      "Tydlig indelning: bokfakta, handling, personlig åsikt med betyg. Enkel och strukturerad för åldern.",
    languageFeatures:
      "Korta meningar. Vardagligt språk. Konkreta exempel (klättra i träd, äta kakor). Känsloord (rolig, ledsen). Betygsättning med stjärnor.",
    skrivverkstadLink: "/skrivverkstad/recension",
    skrivverkstadLabel: "Skrivverkstad: Recension",
  },

  // Mellanstadiet — Recension
  {
    slug: "recension-broder-lejonhjarta",
    title: "Recension: Bröderna Lejonhjärta",
    category: "recension",
    categoryLabel: "Recension",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `"Bröderna Lejonhjärta" av Astrid Lindgren är en bok som handlar om bröderna Karl och Jonathan Lejon. Karl, som kallas Skoransen, är sjuk och rädd för att dö. Hans storebror Jonathan tröstar honom genom att berätta om Nangijala, en plats man kommer till efter döden.

Boken tar oss med till Nangijala, som först verkar vara ett paradis. Men snart visar det sig att det finns ondska även där. En grym ledare vid namn Tengil hotar folket, och bröderna måste kämpa för att befria landet.

Det jag gillar mest med boken är hur Lindgren skriver om svåra ämnen på ett sätt som man förstår. Döden och rädsla är tunga ämnen, men genom äventyret blir de lättare att tänka på. Karl utvecklas från en rädd pojke till en modig hjälte, och det är fint att följa.

Språket är enkelt men vackert. Lindgren använder inte svåra ord, men ändå kan hon beskriva både skrämmande och vackra scener. Slutet är omdiskuterat — vissa tycker det är hoppfullt och andra tycker det är sorgligt. Själv tycker jag att det är modigt.

Jag rekommenderar boken till alla från tio år och uppåt. Den passar både för den som gillar äventyr och för den som vill läsa om känslor.`,
    analysisQuestions: [
      "Hur beskriver recensenten bokens handling utan att avslöja för mycket?",
      "Vilka argument ger recensenten för att boken är bra?",
      "Vad säger recensenten om språket? Ge exempel.",
      "Hur avslutas recensionen? Varför är det en bra avslutning?",
    ],
    structure:
      "Fem stycken: presentation, handling, personlig reflektion, språkanalys, rekommendation. Progressionen går från fakta till åsikt.",
    languageFeatures:
      "Balans mellan referat och värdering. Konkreta exempel stödjer åsikterna. Nyanserat omdöme (omdiskuterat slut). Ålderanpassat men medvetet språk.",
    skrivverkstadLink: "/skrivverkstad/recension",
    skrivverkstadLabel: "Skrivverkstad: Recension",
  },
  {
    slug: "recension-mitt-liv-som-hund",
    title: "Filmrecension: Mitt liv som hund",
    category: "recension",
    categoryLabel: "Recension",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Filmen "Mitt liv som hund" från 1985 är regisserad av Lasse Hallström och baserad på Reidar Jönssons bok. Den handlar om Ingemar, en pojke som skickas till sina släktingar på landet när hans mamma blir sjuk.

Filmen utspelar sig på 1950-talet i en liten svensk by. Ingemar försöker anpassa sig till sitt nya liv och träffar många märkliga och underbara människor. Han blir kompis med Saga, en tjej som helst vill vara med killarna och spelar fotboll. Ingemar jämför ofta sitt liv med rymdtiken Laika, som sköts ut i rymden utan att någon frågade henne.

Det bästa med filmen är skådespeleriet. Anton Glanzelius, som spelar Ingemar, är helt fantastisk. Man tror på honom hela tiden. Filmen blandar humor och sorg på ett sätt som känns äkta. I ena stunden skrattar man, och i nästa tår man sig i ögonen.

Bilderna är vackra och visar den svenska landsbygden på ett nostalgiskt sätt. Musiken passar perfekt till stämningen. Det enda som kan vara svårt är att tempot ibland är lite långsamt, men det passar berättelsen.

Jag ger filmen fyra av fem stjärnor och rekommenderar den till alla som gillar filmer om att växa upp.`,
    analysisQuestions: [
      "Vad skiljer en filmrecension från en bokrecension?",
      "Vilka aspekter av filmen tar recensenten upp?",
      "Nämner recensenten något negativt? Varför är det viktigt i en recension?",
      "Hur används jämförelsen med Laika? Vad tillför den?",
    ],
    structure:
      "Fem stycken: bakgrund, handling, skådespeleri, teknik (bild/musik), betyg. Strukturerad genomgång av filmens olika aspekter.",
    languageFeatures:
      "Filmterminologi (regissör, skådespeleri, tempo). Balanser mellan positivt och negativt. Konkreta exempel. Jämförelser och sinnesintryck.",
    skrivverkstadLink: "/skrivverkstad/recension",
    skrivverkstadLabel: "Skrivverkstad: Recension",
  },

  // Högstadiet — Recension
  {
    slug: "recension-en-komikers-uppvaxt",
    title: "Recension: En komikers uppväxt",
    category: "recension",
    categoryLabel: "Recension",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Jonas Gardells "En komikers uppväxt" (1992) är en roman som kretsar kring Juha, en pojke som växer upp i en frikyrkomiljö i en svensk småstad på 1960- och 70-talet. Boken är den första delen i en trilogi och har blivit en modern svensk klassiker.

Juha är en känslig och intelligent pojke som tidigt märker att han inte riktigt passar in. Han observerar sin omgivning med en blick som är både humoristisk och smärtsamt skarp. Frikyrkan, med dess stränga regler och förväntningar, blir både en trygghet och ett fängelse för honom. Samtidigt kämpar han med en växande insikt om sin egen identitet som han ännu inte har ord för.

Det som gör romanen så stark är Gardells förmåga att fånga barnets perspektiv. Juha förstår inte alltid vad som händer runt omkring honom, men läsaren gör det. Denna dubbla läsning — det barnet ser och det läsaren förstår — skapar en berättelse som är både rolig och hjärtskärande.

Språkligt är boken en uppvisning i precision. Gardell kan beskriva en hel social dynamik i en enda mening. Dialogerna känns autentiska, och miljöbeskrivningarna transporterar läsaren till 1960-talets Sverige utan att det känns nostalgiskt eller sentimentalt. Tonen balanserar ständigt mellan komedi och tragedi, precis som titeln antyder.

Bokens tematik — utanförskap, identitet, religionens roll, och modet att vara sig själv — är lika relevant idag som när den skrevs. Den talar till alla som någon gång känt sig annorlunda eller ifrågasatt de normer de vuxit upp med.

Jag rekommenderar boken varmt, särskilt till unga läsare som söker berättelser om att hitta sig själv i en värld som inte alltid gör det lätt. Det är en bok som stannar kvar länge efter att man läst sista sidan.`,
    analysisQuestions: [
      "Hur balanserar recensenten referat och analys?",
      "Vad menas med 'dubbel läsning'? Varför är det en styrka?",
      "Vilka litterära aspekter lyfts fram i recensionen?",
      "Hur kopplar recensenten bokens tematik till nutid?",
      "Vad gör detta till en recension snarare än ett referat?",
    ],
    structure:
      "Sex stycken med tydlig progression: presentation, handling, litterär analys, språkanalys, tematik, rekommendation. Varje stycke har en specifik funktion.",
    languageFeatures:
      "Litterär terminologi (trilogi, dubbel läsning, tematik). Nyanserade omdömen med konkreta belägg. Sofistikerat men tillgängligt språk. Balans mellan subjektivt och analytiskt.",
    skrivverkstadLink: "/skrivverkstad/recension",
    skrivverkstadLabel: "Skrivverkstad: Recension",
  },
  {
    slug: "recension-pojkarna",
    title: "Recension: Pojkarna",
    category: "recension",
    categoryLabel: "Recension",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Jessica Schiefauers roman "Pojkarna" (2011) är en mörk och poetisk berättelse om makt, kön och förvandling. Boken belönades med Augustpriset och har sedan dess blivit ett viktigt verk i samtida svensk ungdomslitteratur.

Handlingen kretsar kring Kim, som tillsammans med sina vänner Momo och Bella upptäcker en magisk kraft: de kan förvandlas till pojkar. Det som börjar som en spännande lek utvecklas snart till något farligt. Som pojkar upplever de en ny sorts frihet — att röra sig obehindrat i det offentliga rummet, att ta plats utan att ifrågasättas — men också en lockelse att utöva makt som de inte riktigt förstår.

Schiefauer skriver med en språklig precision som gör att varje mening bär tyngd. Naturbeskrivningarna, särskilt scenerna vid sjön och i skogen, fungerar som speglingar av karaktärernas inre landskap. Sommaren, som normalt förknippas med frihet och lätthet, blir här en tid av gränsöverskridande och förlust.

Det som gör romanen så angelägen är dess utforskning av hur maktstrukturer internaliseras. Flickorna upptäcker inte bara att pojkar har mer makt i samhället — de upptäcker att makten förändrar den som utövar den. Frågan om huruvida våldet ligger i könet eller i strukturerna lämnas öppen, vilket tvingar läsaren att reflektera själv.

Boken är kort men intensiv. Den kräver en uppmärksam läsare som är beredd att stanna upp och tänka. Slutet är oroande och lämnar många frågor obesvarade, men det är en medveten strategi — Schiefauer vill inte ge enkla svar.

"Pojkarna" är en bok som borde läsas i skolan. Den öppnar för samtal om genus, makt och ansvar på ett sätt som är både intellektuellt stimulerande och känslomässigt gripande.`,
    analysisQuestions: [
      "Hur analyserar recensenten bokens tematik? Vilka teman lyfts?",
      "Vad säger recensenten om språket och naturbeskrivningarna?",
      "Varför menar recensenten att boken borde läsas i skolan?",
      "Hur hanterar recensenten bokens öppna slut? Är det en styrka eller svaghet?",
      "Jämför med en enklare recension — vad gör denna mer analytisk?",
    ],
    structure:
      "Sex stycken: kontextualisering, handling, språkanalys, tematisk analys, formmässig kommentar, rekommendation. Analytisk tyngdpunkt snarare än refererande.",
    languageFeatures:
      "Akademisk ton med litteraturvetenskapliga begrepp (internaliseras, gränsöverskridande). Konkreta textexempel. Nyanserad argumentation. Medveten balans mellan beröm och kritisk distans.",
    skrivverkstadLink: "/skrivverkstad/recension",
    skrivverkstadLabel: "Skrivverkstad: Recension",
  },

  // Gymnasiet — Recension
  {
    slug: "recension-kallocain",
    title: "Kulturkritik: Kallocain och övervakningssamhället",
    category: "recension",
    categoryLabel: "Recension",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Karin Boyes "Kallocain" (1940) är en dystopisk roman som skrevs i skuggan av andra världskrigets utbrott. Romanen utspelar sig i Världsstaten, ett totalitärt samhälle där individens tankar och känslor tillhör staten. Huvudpersonen Leo Kall, en kemist, uppfinner preparatet Kallocain — ett sanningsserum som tvingar människor att avslöja sina innersta tankar. Det som först framstår som en vetenskaplig triumf visar sig vara ett verktyg för total kontroll.

Boyes roman föregick Orwells "1984" med nio år, och jämförelsen är oundviklig. Medan Orwell fokuserar på den politiska maktens mekanismer, riktar Boye blicken inåt. Hennes fråga är inte bara hur ett totalitärt samhälle fungerar utan hur det påverkar den enskilda människans psyke. Leo Kall är ingen heroisk motståndare. Han är en medlöpare som steg för steg inser vad systemet — och han själv — är kapabla till.

Språkligt är romanen avsiktligt torr och byråkratisk, vilket speglar det samhälle den beskriver. Boye låter Leo berätta i en rapporterande ton som gradvis spricker. Bakom den kontrollerade ytan växer en desperation som är desto mer effektiv för att den aldrig fullt ut artikuleras. Det är i sprickorna mellan vad Leo säger och vad han menar som romanen får sin kraft.

I ljuset av samtida debatter om digital övervakning, datalagring och artificiell intelligens framstår "Kallocain" som mer relevant än någonsin. Boyes vision av ett samhälle där tanken själv inte längre är fri har gått från science fiction till en fråga som teknologiföretag och lagstiftare brottas med dagligen. Sanningsserumet Kallocain kan läsas som en metafor för varje teknik som lovar transparens men levererar kontroll.

Det som gör romanen till mer än en historisk kuriositet är dess psykologiska djup. Boye utforskar inte bara övervakningens mekanismer utan dess inverkan på kärlek, tillit och mänsklig värdighet. Leo och hans hustru Linda lever i ett äktenskap där intimitet är omöjligt, eftersom varje tanke potentiellt kan avlyssnas. Deras relation blir en mikrokosm av samhällets grundläggande brist: ett system som kräver total öppenhet förstör den sårbarhet som mänsklig närhet förutsätter.

"Kallocain" förtjänar en plats inte bara i litteraturhistorien utan i det samtida samtalet om integritet, teknologi och mänskliga rättigheter. Det är en roman som ställer frågor vi fortfarande inte har besvarat — och kanske aldrig kommer att besvara.`,
    analysisQuestions: [
      "Hur kombinerar recensionen litterär analys med samhällskritik?",
      "Vilken funktion fyller jämförelsen med Orwells '1984'?",
      "Hur analyseras språket i relation till romanens tematik?",
      "Varför menar recensenten att boken är mer relevant idag?",
      "Diskutera recensionens avslutande tes. Håller du med?",
    ],
    structure:
      "Sex stycken i essäform: kontextualisering, komparativ analys, språkanalys, samtidsrelevans, psykologisk analys, avslutande tes. Varje stycke har en distinkt analytisk vinkel.",
    languageFeatures:
      "Essäistisk prosa med akademisk precision. Komparativa resonemang. Metaanalys (text om text). Abstrakt och konkret i växelverkan. Retorisk medvetenhet i avslutningen.",
    skrivverkstadLink: "/skrivverkstad/recension",
    skrivverkstadLabel: "Skrivverkstad: Recension",
  },
  {
    slug: "recension-ett-halvt-ark-papper",
    title: "Essä: Strindberg och den moderna ensamheten",
    category: "recension",
    categoryLabel: "Recension",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `August Strindbergs novell "Ett halvt ark papper" (1903) är en av den svenska litteraturens mest koncentrerade texter. På bara några sidor berättar den om en man som hittar ett halvt ark papper i sin tomma lägenhet. På papperet finns anteckningar — telefonnummer, namn, adresser — som tillsammans bildar berättelsen om hans äktenskap, från den första förälskelsen till hustruns och barnets död.

Texten är ett mästerverk i litterär ekonomi. Strindberg behöver inte berätta hela historien. Varje anteckning på papperet fungerar som ett fönster in i en episod, och läsaren fyller i resten. Det är en teknik som föregår den modernistiska romanen med decennier — idén att det outsagda kan vara starkare än det sagda.

Vad som slår mig vid omläsning är hur relevant novellen känns i en tid av digital kommunikation. Vi lever alla med halvt ark papper: våra kontaktlistor, sökhistorik, meddelanden. Om någon hittade din telefon om hundra år, vilken berättelse skulle dess innehåll berätta? Strindberg påminner oss om att varje fragment bär en hel värld.

Formellt är novellen uppbyggd kring en enkel ram: mannen, rummet, papperet. Men inom denna ram ryms ett helt liv. Strindberg växlar mellan det yttre (anteckningarna) och det inre (mannens minnen och känslor) med en precision som gör texten närmast filmisk. Varje anteckning utlöser en kaskad av associationer — blomsterhandlare (bröllop), barnmorska (födelse), begravningsbyrå (död) — och läsaren upplever mannens hela emotionella resa på några minuter.

Novellen reser också frågor om berättande och minne. Är våra liv verkligen sammanhängande berättelser, eller är de fragment som vi i efterhand ordnar till en historia? Strindberg antyder det senare, och det är en insikt som känns smärtsamt modern. Vi konstruerar mening, vi hittar den inte.

Att läsa "Ett halvt ark papper" idag, i en tid av informationsöverflöd och ständig dokumentation, är att påminnas om att det viktigaste sällan är det som sägs högt. Strindbergs novell är en övning i att läsa mellan raderna — och i förlängningen en påminnelse om att det mest mänskliga ofta döljer sig i det mest vardagliga.`,
    analysisQuestions: [
      "Hur fungerar essän som både recension och kulturkritik?",
      "Vilken roll spelar samtidsanknytningen (digital kommunikation)?",
      "Hur analyseras Strindbergs berättarteknik?",
      "Diskutera essäns tes om fragment och berättande. Håller du med?",
      "Vad skiljer denna essä från en traditionell bokrecension?",
    ],
    structure:
      "Sex stycken i essäform: presentation, formanalys, samtidsanknytning, närläsning, tematisk reflektion, avslutande syntes. Rör sig fritt mellan analys, tolkning och kulturkritik.",
    languageFeatures:
      "Essäistiskt, reflekterande språk. Retoriska frågor som aktiverar läsaren. Metaforiskt tänkande (fönster, kaskad). Växling mellan akademisk analys och personlig ton. Aforistiska formuleringar.",
    skrivverkstadLink: "/skrivverkstad/recension",
    skrivverkstadLabel: "Skrivverkstad: Recension",
  },

  // ─── GAP-FYLLNAD: KRONIKA LÅGSTADIET ───────────────────────

  {
    slug: "min-hund-rufus",
    title: "Min hund Rufus",
    category: "kronika",
    categoryLabel: "Krönika",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Igår tog jag med min hund Rufus till parken. Rufus är brun och lurvig och han älskar att springa. Han springer jättefort.

I parken såg vi en ekorre. Rufus ville jaga ekorren men jag höll hårt i kopplet. Ekorren klättrade upp i ett träd och tittade ner på oss. Jag tror att ekorren skrattade åt Rufus.

På vägen hem stannade vi vid en vattenpöl. Rufus drack vatten och sedan skakade han sig så jag blev blöt. Alla som gick förbi log.

Att ha hund är det bästa jag vet. Man får motion och man skrattar varje dag. Men ibland luktar Rufus lite illa. Det säger mamma i alla fall.`,
    analysisQuestions: [
      "Vad berättar texten om Rufus? Hur är han?",
      "Vilka roliga saker händer i texten?",
      "Hur slutar krönikan? Varför är det roligt?",
    ],
    structure:
      "Kort krönika med fyra stycken: inledning, händelse, komiskt ögonblick, reflektion. Enkel kronologisk ordning.",
    languageFeatures:
      "Enkla, korta meningar. Jag-berättare. Vardagligt språk. Humor genom oväntade detaljer (ekorren skrattar, lukten).",
    skrivverkstadLink: "/skrivverkstad/kronika",
    skrivverkstadLabel: "Skrivverkstad: Krönika",
  },
  {
    slug: "varfor-maste-man-sova",
    title: "Varför måste man sova?",
    category: "kronika",
    categoryLabel: "Krönika",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Igår kväll ville jag inte sova. Jag var inte alls trött. Jag ville leka med mina leksaker och titta på min favoritfilm. Men mamma sa att det var sovdags.

Varför måste man sova egentligen? Man missar ju allt det roliga! Kanske händer det spännande saker på natten som vi aldrig får veta om. Kanske dansar leksakerna när vi sover. Det hade varit häftigt.

Min storebror säger att hjärnan behöver vila. Men min hjärna känns pigg. Det är bara benen som är trötta.

Jag somnade i alla fall till slut. Och vet ni vad? Jag drömde att jag kunde flyga. Så kanske är det lite bra att sova ändå.`,
    analysisQuestions: [
      "Vad tycker berättaren om att sova?",
      "Hur ändrar sig berättaren i slutet?",
      "Vad gör texten rolig att läsa?",
    ],
    structure:
      "Fyra korta stycken som följer en tankekedja: motstånd, fundering, argument, vändpunkt. Enkel men effektiv dramaturgi.",
    languageFeatures:
      "Barnets röst och perspektiv. Retoriska frågor. Humor genom logiska resonemang. Utropstecken för att visa känsla.",
    skrivverkstadLink: "/skrivverkstad/kronika",
    skrivverkstadLabel: "Skrivverkstad: Krönika",
  },

  // ─── GAP-FYLLNAD: ARGUMENTERANDE LÅGSTADIET ────────────────

  {
    slug: "langre-raster",
    title: "Vi borde ha längre raster",
    category: "argumenterande",
    categoryLabel: "Argumenterande text",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Jag tycker att vi borde ha längre raster i skolan. Det finns flera anledningar till det.

För det första behöver man röra på sig. Om man sitter stilla för länge blir man trött och kan inte tänka bra. Med längre raster kan alla springa och leka ordentligt.

För det andra hinner man inte leka färdigt. Ibland har man precis börjat en lek och då ringer det in. Det är tråkigt. Man behöver tid att leka klart.

Till sist tycker jag att alla barn mår bättre när de får vara ute mer. Vi blir gladare och snällare mot varandra. Längre raster gör skolan roligare. Det borde alla förstå!`,
    analysisQuestions: [
      "Hur många argument ger skribenten? Vilka är de?",
      "Vilka ord använder skribenten för att visa ordningen (först, sedan)?",
      "Håller du med? Varför eller varför inte?",
    ],
    structure:
      "Tydlig argumenterande struktur: tes, tre argument med signalord, avslutning. Anpassad för åldern men med korrekt uppbyggnad.",
    languageFeatures:
      "Signalord (för det första, för det andra, till sist). Jag-perspektiv. Korta meningar. Avslutning med utropstecken för emfas.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "alla-borde-ha-husdjur",
    title: "Alla barn borde ha husdjur",
    category: "argumenterande",
    categoryLabel: "Argumenterande text",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Jag tycker att alla barn borde få ha husdjur. Det kanske inte passar med en stor hund, men man kan ha en hamster eller en fisk.

Ett husdjur lär oss att ta ansvar. Man måste ge djuret mat och vatten varje dag. Man lär sig att tänka på någon annan och inte bara på sig själv.

Husdjur gör oss glada också. När jag kommer hem från skolan väntar min katt vid dörren. Det är skönt att någon alltid är glad att se en.

En del säger att husdjur är för dyra. Men man behöver inte ha det dyraste djuret. En guldfisk kostar inte mycket. Det viktigaste är att man tar hand om den.

Jag tror att barn som har husdjur blir snällare. De lär sig att bry sig om andra. Och det behöver vi alla.`,
    analysisQuestions: [
      "Vad är skribentens åsikt? Hur presenteras den?",
      "Hur svarar skribenten på motargumentet om pengar?",
      "Vilka argument är starkast? Varför tycker du det?",
    ],
    structure:
      "Fem stycken: tes, argument 1 (ansvar), argument 2 (glädje), motargument och bemötande, avslutning. Enkel men komplett argumenterande struktur.",
    languageFeatures:
      "Tydlig åsikt i inledningen. Motargument bemöts. Personliga erfarenheter som stöd. Enkel men övertygande ton.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },

  // ─── GAP-FYLLNAD: BERÄTTANDE MELLANSTADIET ──────────────────

  {
    slug: "nyckeln-i-skogsglanten",
    title: "Nyckeln i skogsgläntan",
    category: "berattande",
    categoryLabel: "Berättande text",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Elsa hade alltid tyckt att skogen bakom huset var tråkig. Bara vanliga träd, vanliga stenar och vanliga fåglar. Men en eftermiddag i oktober hittade hon något ovanligt.

Det låg halvt begravt i mossan vid den stora eken — en nyckel. Inte en modern nyckel med plast och siffror, utan en gammal nyckel av metall, med sirliga mönster och en grönaktig färg av ålder.

"Vems är den?" undrade Elsa högt, fast ingen hörde. Hon stoppade nyckeln i fickan och kände hur den var oväntat varm, som om den legat i solen fast det var mulet.

De följande dagarna letade hon efter ett lås som passade. Hon provade garaget, vedboden och den gamla kistan på vinden. Ingenting passade. Men varje kväll drömde hon om en dörr — en liten blå dörr mitt i skogen, täckt av murgröna.

En regnig lördag gick hon tillbaka till eken. Och där, bakom en tät gardin av hängande grenar som hon aldrig hade sett förut, stod en dörr. Liten, blå och täckt av murgröna. Precis som i drömmen.

Elsas hand darrade när hon satte nyckeln i låset. Den passade perfekt. Låset klickade till och dörren öppnades med ett svagt knirk.

Vad som fanns bakom dörren? Det är en annan historia. Men Elsa var aldrig uttråkad i skogen igen.`,
    analysisQuestions: [
      "Hur skapar författaren spänning? Ge exempel.",
      "Vad gör nyckeln speciell? Vilka detaljer ger ledtrådar?",
      "Varför slutar berättelsen som den gör? Vad hade du velat hände bakom dörren?",
      "Hur beskrivs skogen i början jämfört med slutet?",
    ],
    structure:
      "Sju stycken med tydlig berättarkurva: utgångssituation, händelse, problem, sökande, klimax, lösning, avslutning. Öppet slut som inbjuder till fantasi.",
    languageFeatures:
      "Tredjepersonsberättare. Mystiska detaljer (varm nyckel, drömmar). Kontrast (tråkigt/ovanligt). Sinnliga beskrivningar (grönaktig, knirk). Cliffhanger-teknik.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },
  {
    slug: "matchen",
    title: "Matchen",
    category: "berattande",
    categoryLabel: "Berättande text",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Milo stod vid sidlinjen och kände hur magen vred sig till en knut. Det var final i skolcupen och han hade precis blivit inbytt. Tre minuter kvar. Oavgjort.

Han hade suttit på bänken hela matchen. Tränaren hade inte ens tittat åt hans håll förrän nu. "Milo, du får ta Aksels plats. Aksel har kramp."

Milo sprang ut på planen med ben som kändes som gelé. Motståndarna var stora. Gräset var vått och halt. Publiken — mest föräldrar med termosar — ropade saker han inte hörde.

De första sekunderna var en dimma. Bollen studsade runt och Milo sprang efter utan att nå den. Hans lag pressade framåt och bollen gick från spelare till spelare. Plötsligt hamnade den framför honom.

Milo tvekade. Han hade två spelare framför sig och målvakten var redo. Han hörde lagkamraternas röster men förstod inte orden. Tiden verkade sakta ner.

Sedan sparkade han. Inte hårt, inte perfekt, men med allt han hade. Bollen gick lågt, snuddade vid en försvarares ben, ändrade riktning och rullade in i nätets nedre hörn.

Det blev tyst. Sedan exploderade allt. Lagkamraterna hoppade på honom, tränaren skrek, och Milo kände för första gången i sitt liv vad det innebar att vara i centrum av något fantastiskt.

Efteråt, på väg hem med pappa, sa han ingenting. Han behövde inte det. Leendet räckte.`,
    analysisQuestions: [
      "Hur beskrivs Milos nervositet? Vilka kroppsliga detaljer används?",
      "Vad betyder det att 'tiden verkade sakta ner'? Varför används den tekniken?",
      "Hur förändras Milos känslor genom berättelsen?",
      "Varför är det sista stycket effektivt? Vad säger det om Milo?",
    ],
    structure:
      "Åtta stycken med klassisk dramatisk kurva: exposition, stegrande handling, klimax (skottet), fallande handling. Tempot ökar mot klimax och saktar ner i slutet.",
    languageFeatures:
      "Korta, snabba meningar i spända scener. Kroppsliga beskrivningar (gelé, knut). Kontrast mellan tystnad och explosion. Sparsmakat slut som låter läsaren fylla i.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ─── GAP-FYLLNAD: BERÄTTANDE GYMNASIET ──────────────────────

  {
    slug: "stationen",
    title: "Stationen",
    category: "berattande",
    categoryLabel: "Berättande text",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Tåget skulle ha kommit klockan 14.23. Det var nu 15.47 och plattformen hade tömts. Alla andra hade hittat alternativ — bussen, en taxi, ett telefonsamtal till någon som kunde hämta. Men Sara satt kvar på bänken.

Det var inte tåget hon väntade på. Det var beslutet.

I fickan hade hon ett brev. Handskrivet, på riktigt papper med riktigt bläck, som om avsändaren försökte ge sina ord fysisk tyngd. Det var ett erbjudande. Ett nytt jobb, i en ny stad, med en ny lön som var tre gånger hennes nuvarande. Allt hon behövde göra var att skriva under.

Hon hade haft brevet i tre veckor. Deadline var idag.

Tanken på att lämna var inte skrämmande i sig. Vad som skrämde henne var hur lätt det skulle vara. Lägenheten var en hyresrätt. Jobbet var ett vikariat. Vänskapskretsarna hade glesnat sedan universitetet — inte av bråk utan av den tysta entropi som drabbar relationer man slutar underhålla.

Det enda som höll henne kvar var Jonas. Eller rättare sagt: tanken på Jonas. De hade träffats fem gånger. Druckit kaffe, delat en sallad, skrattat åt samma ställen i en podcast. Det var ingenting. Det var allt.

Sara visste hur irrationellt det var. Att stanna i en stad för fem kaffedejter och ett löfte om en sjätte. Att väga möjligheten av kärlek mot säkerheten av en karriär. Att sitta på en tom tågstation och låta en deadline passera medan höstlöven blåste över spåren.

Men rationalitet hade aldrig varit hennes starkaste sida. Det var hennes syster som hade Excel-ark. Sara hade instinkter. Och just nu sa instinkten att det fanns något i Jonas ögon — en igenkänning, en nyfikenhet, kanske bara en reflex — som var värt att utforska.

Klockan blev 16.00. Deadline hade passerats. Brevet låg kvar i fickan, osignerat.

Sara reste sig, borstade av kjolen och gick mot utgången. Inte mot kontoret. Inte mot lägenheten. Utan mot kaféet på Storgatan, där Jonas satt på torsdagar med en bok han aldrig verkade bli klar med.

Hon visste inte om hon gjorde rätt. Men hon visste att hon valde. Och det fick räcka.`,
    analysisQuestions: [
      "Hur bygger Strindberg upp berättelsen kring ett enda beslut?",
      "Vad representerar tåget och stationen symboliskt?",
      "Hur skildras Saras inre konflikt? Vilka argument ställs mot varandra?",
      "Vad menar berättaren med 'den tysta entropi som drabbar relationer'?",
      "Diskutera slutet. Vad betyder det att Sara 'valde' snarare än 'visste'?",
    ],
    structure:
      "Elva stycken med kronologisk tid (väntan) och inre tid (minnen, överväganden). Berättelsen rör sig från yttre situation till inre konflikt och tillbaka till handling. Minimalistisk plot — allt händer i huvudet.",
    languageFeatures:
      "Kontrollerad prosa med korta stycken. Abstrakt resonemang förankrat i konkreta detaljer (brevet, kaféet). Parentetiska inskott. Precis, medveten stil. Öppet slut utan resolution.",
    skrivverkstadLink: "/skrivverkstad/berattande-text",
    skrivverkstadLabel: "Skrivverkstad: Berättande text",
  },

  // ─── GAP-FYLLNAD: FAKTATEXT HÖGSTADIET ──────────────────────

  {
    slug: "norrsken",
    title: "Norrsken — ljusfenomenet i norr",
    category: "faktatext",
    categoryLabel: "Faktatext",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Norrsken, eller aurora borealis, är ett av naturens mest spektakulära fenomen. Det uppstår när elektriskt laddade partiklar från solen kolliderar med gaser i jordens atmosfär. Resultatet är ett dansande ljusspel på himlen i grönt, lila, rött och blått.

Solen skickar ständigt ut en ström av laddade partiklar, den så kallade solvinden. Normalt skyddas jorden av sitt magnetfält, som leder bort de flesta partiklarna. Men vid polerna är magnetfältet svagare, och där kan partiklarna tränga in i atmosfären. När de kolliderar med syre- och kvävemolekyler frigörs energi i form av ljus.

Färgen på norrskenet beror på vilken gas som träffas och på vilken höjd kollisionen sker. Grönt norrsken, den vanligaste färgen, uppstår när partiklarna kolliderar med syre på cirka 100–300 kilometers höjd. Rött norrsken bildas på ännu högre höjd, medan lila och blå toner kommer från kväve.

Norrsken är vanligast i ett bälte runt de magnetiska polerna, det så kallade norrskensovalet. I Sverige är chansen störst att se norrsken i norra Norrland, men under perioder av hög solaktivitet kan det synas ända ned till Mellansverige.

Historiskt har norrsken fascinerat och skrämt människor. I fornnordisk mytologi kopplades fenomenet till gudarnas aktiviteter. Samerna såg det som ett tecken som krävde respekt och tystnad. Idag lockar norrsken turister från hela världen till nordliga breddgrader.

Forskning om norrsken har också praktisk betydelse. Kraftiga solstormar som orsakar intensivt norrsken kan störa satelliter, GPS-system och elnät. Att förstå solvinden och dess effekter är därför viktigt för modern teknologi.`,
    analysisQuestions: [
      "Hur förklarar texten varför norrsken uppstår? Sammanfatta med egna ord.",
      "Vad avgör norrskens färg? Vilka faktorer spelar in?",
      "Hur kopplar texten naturvetenskap till historia och kultur?",
      "Varför är forskning om norrsken viktig idag?",
    ],
    structure:
      "Sex stycken med tematisk progression: fenomenet, orsaken, färgerna, geografin, historien, relevansen. Vetenskaplig text med kulturell breddning.",
    languageFeatures:
      "Sakligt, förklarande språk med naturvetenskapliga termer (solvind, magnetfält, molekyler). Parentetiska förtydliganden. Passiv form i vetenskapliga avsnitt. Kulturhistoriska inslag ger bredd.",
    skrivverkstadLink: "/skrivverkstad/faktatext",
    skrivverkstadLabel: "Skrivverkstad: Faktatext",
  },

  // ─── GAP-FYLLNAD: FAKTATEXT GYMNASIET ───────────────────────

  {
    slug: "sprak-och-identitet",
    title: "Språk och identitet: hur svenska förändras",
    category: "faktatext",
    categoryLabel: "Faktatext",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Svenska språket har aldrig varit statiskt. Från runsvenskans korta inskriptioner till nutidens digitala kommunikation har språket genomgått ständig förändring. Varje epok har tillfört nya ord, ny grammatik och nya sätt att uttrycka tankar. Frågan är inte om språket förändras, utan hur — och vad förändringarna säger om oss.

Den mest synliga förändringen i modern svenska är ordförrådet. Engelska lånord som "dejta", "streama" och "googla" har integrerats i vardagsspråket, ofta med svenska böjningsändelser. Samtidigt har invandringen tillfört ord från arabiska, somaliska och andra språk: "yalla", "kansen" och "habibi" hörs idag i skolkorridorer och på sociala medier. Puristerna beklagar, men språkhistoriskt är lånord det normala. Svenskan är full av tyska, franska och latinska lån som vi inte längre tänker på som främmande.

Mer subtil är den grammatiska förändringen. Det formella tilltalsordet "Ni" har återkommit i kundservice, trots att du-reformen på 1960-talet skulle avskaffa det. "De" och "dem" blandas ihop så regelbundet att Språkrådet diskuterar om "dom" borde accepteras som skriftform. Genuspronomen "hen" gick från kontroversiellt till etablerat på mindre än ett decennium.

Digitaliseringen har skapat helt nya kommunikationsformer. Emojier, förkortningar och memes bildar ett parallellt språk som ibland är mer uttrycksfullt än prosan. En tonåring som skriver "😭😭😭" uttrycker inte nödvändigtvis sorg utan kanske överväldigande skratt. Kontexten avgör, precis som i talat språk.

Språkförändring är inte bara en lingvistisk fråga — den är djupt kopplad till identitet. Att tala rikssvenska, skånska eller rinkebysvenska signalerar tillhörighet. Att välja mellan formellt och informellt register är en social handling. Språket är inte ett neutralt verktyg; det är en del av vem vi är.

Framtidens svenska är omöjlig att förutsäga. Men om historien lär oss något, är det att språket alltid anpassar sig till dem som talar det. Svenskan har överlevt vikingar, reformation och industrialisering. Den kommer att överleva internet också.`,
    analysisQuestions: [
      "Vilka typer av språkförändring beskrivs? Ge exempel på varje.",
      "Hur argumenterar texten mot språkpurism?",
      "Vad menas med att språkförändring är kopplad till identitet?",
      "Hur använder texten humor och tonalitet trots att det är en faktatext?",
      "Diskutera påståendet att emojier bildar ett 'parallellt språk'. Håller du med?",
    ],
    structure:
      "Sex stycken med tematisk indelning: inledning (historiskt perspektiv), ordförråd, grammatik, digitalisering, identitet, framtid. Progressionen går från konkret observation till abstrakt reflektion.",
    languageFeatures:
      "Akademisk men tillgänglig ton. Konkreta exempel integrerade i resonemang. Retoriska frågor. Historisk kontextualisering. Balans mellan deskriptivt och analyserande.",
    skrivverkstadLink: "/skrivverkstad/faktatext",
    skrivverkstadLabel: "Skrivverkstad: Faktatext",
  },

  // ─── GAP-FYLLNAD: UTREDANDE LÅGSTADIET ─────────────────────

  {
    slug: "varfor-ar-himlen-bla",
    title: "Varför är himlen blå?",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Har du undrat varför himlen är blå? Det är en bra fråga! Det handlar om ljus och luft.

Solens ljus ser vitt ut, men det är egentligen gjort av alla regnbågens färger. När ljuset träffar luften sprids de olika färgerna åt olika håll. Blått ljus sprids mest av allt. Det studsar runt överallt i luften.

När vi tittar upp ser vi allt det blå ljuset som studsar runt. Därför ser himlen blå ut.

På kvällen, när solen står lågt, måste ljuset resa längre genom luften. Då sprids det röda och orange ljuset mer. Det är därför solnedgångar ofta är röda och orange.

Så nästa gång du tittar på himlen vet du varför den är blå! Det är solen och luften som jobbar ihop.`,
    analysisQuestions: [
      "Vad är det som gör himlen blå? Förklara med egna ord.",
      "Varför ser solnedgångar annorlunda ut?",
      "Hur börjar och slutar texten? Varför är det bra?",
    ],
    structure:
      "Fem korta stycken: fråga, förklaring, svar, tillägg, avslutning. Fråga–svar-struktur som passar åldern.",
    languageFeatures:
      "Direkt tilltal (du). Frågor som väcker nyfikenhet. Enkla förklaringar med vardagliga jämförelser (studsar runt). Entusiastisk ton.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },
  {
    slug: "vart-tar-maten-vagen",
    title: "Vart tar maten vägen?",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `När du äter en smörgås, vart tar den vägen? Den åker på en lång resa genom din kropp!

Först tuggar du maten i munnen. Tänderna krossar den i små bitar och saliven gör den mjuk. Sedan sväljer du och maten åker ner genom matstrupen, som en rutschkana till magen.

I magen blandas maten med speciella vätskor som bryter ner den ännu mer. Det tar ungefär två till fyra timmar. Sedan åker maten vidare till tunntarmen, som är som en lång, lång slang. Där tar kroppen ut allt bra som finns i maten: vitaminer och energi.

Det som blir kvar fortsätter till tjocktarmen. Där suger kroppen upp vatten. Till slut lämnar resterna kroppen. Du vet hur!

Så varje gång du äter något, startar du en spännande resa. Och det bästa är att kroppen gör allt arbete själv. Smart, eller hur?`,
    analysisQuestions: [
      "Vilka steg går maten genom? Nämn dem i ordning.",
      "Hur gör texten svåra saker lättare att förstå?",
      "Varför tror du texten kallas utredande?",
    ],
    structure:
      "Fem stycken som följer matens resa kronologiskt: mun, mage, tunntarm, tjocktarm, avslutning. Tydlig ordning som hjälper förståelsen.",
    languageFeatures:
      "Jämförelser (rutschkana, slang). Direkt tilltal. Enkla förklaringar av svåra begrepp. Humor (Du vet hur!). Entusiastisk avslutning.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },

  // ─── GAP-FYLLNAD: HISTORISK LÅGSTADIET ──────────────────────

  {
    slug: "sa-levde-vikingarna",
    title: "Så levde vikingarna",
    category: "historisk",
    categoryLabel: "Historisk text i modern tappning",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Tänk dig att du levde för tusen år sedan. Du är ett vikingabarn i Sverige. Hur hade din dag sett ut?

Du hade vaknat tidigt i ett hus av trä. Hela familjen sov i samma rum. Det fanns ingen el och inga lampor, bara eld i en öppen härd mitt i huset. Röken steg upp genom ett hål i taket.

Till frukost hade du kanske ätit gröt eller bröd med smör. Det fanns inga affärer. All mat fick man göra själv eller byta till sig.

På dagarna hjälpte barnen till. Du kanske matade djuren, samlade ved eller lärde dig sy. Det fanns ingen skola, men du lärde dig viktiga saker av de vuxna.

Ibland berättade de äldre sagor om gudar och hjältar vid elden. Det var vikingarnas sätt att lära ut viktiga saker och underhålla varandra.

Vikingarnas liv var annorlunda, men de ville samma saker som vi: mat, trygghet och en bra berättelse att lyssna på.`,
    analysisQuestions: [
      "Hur var vikingarnas liv annorlunda mot ditt? Ge exempel.",
      "Vad är lika mellan vikingabarnens liv och ditt?",
      "Hur lärde sig vikingabarnen saker utan skola?",
    ],
    structure:
      "Sex stycken: inbjudan till fantasi, huset, maten, vardagssysslor, berättarkultur, avslutande jämförelse. Kronologisk dagstruktur.",
    languageFeatures:
      "Direkt tilltal (tänk dig, du). Jämförelser med nutid (inga lampor, inga affärer). Enkla meningar. Levandegörande detaljer.",
    skrivverkstadLink: "/skrivverkstad/historisk-text",
    skrivverkstadLabel: "Skrivverkstad: Historisk text",
  },
  {
    slug: "barnen-pa-fabriken",
    title: "Barnen på fabriken",
    category: "historisk",
    categoryLabel: "Historisk text i modern tappning",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `För ungefär 150 år sedan gick inte alla barn i skolan. Många barn jobbade istället. De arbetade i fabriker, på bondgårdar och i gruvor. Redan när de var sex eller sju år gamla.

Tänk dig att du är ett barn i en gammal fabrik. Det är mörkt, bullrigt och dammigt. Du jobbar hela dagen från tidig morgon till sen kväll. Du är trött, hungrig och längtar hem. Men du måste jobba för att din familj behöver pengarna.

Barnen fick ofta farliga jobb. De kröp in i trånga utrymmen som vuxna inte rymdes i. Många barn blev sjuka av dammet och mörkret.

Till slut förstod folk att detta inte var rätt. Det stiftades lagar som sa att barn måste få gå i skolan istället för att jobba. Det tog lång tid, men sakta blev det bättre.

Idag har alla barn i Sverige rätt att gå i skolan. Det är vi väldigt lyckliga för!`,
    analysisQuestions: [
      "Hur hade barnen det på fabrikerna? Berätta med egna ord.",
      "Vad förändrades? Varför?",
      "Varför tror du det är viktigt att vi lär oss om detta?",
    ],
    structure:
      "Fem stycken: tidsangivelse, levandegöring, faror, förändring, nutid. Progressionen går från problem till lösning.",
    languageFeatures:
      "Direkt tilltal (tänk dig). Sinnliga beskrivningar (mörkt, bullrigt, dammigt). Enkel men tydlig kronologi. Jämförelse mellan då och nu.",
    skrivverkstadLink: "/skrivverkstad/historisk-text",
    skrivverkstadLabel: "Skrivverkstad: Historisk text",
  },

  /* ------------------------------------------------------------------ */
  /*  Nyhetsartiklar                                                     */
  /* ------------------------------------------------------------------ */

  {
    slug: "nyhetsartikel-skolmat",
    title: "Ny undersökning: Elever vill ha bättre skolmat",
    category: "nyhetsartikel",
    categoryLabel: "Nyhetsartikel",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Elever på Ekbackens skola i Linköping är trötta på tråkig skolmat. Det visar en ny undersökning som elevrådet har gjort.

Av de 340 elever som svarade på enkäten tycker 78 procent att maten borde bli bättre. Många vill ha mer variation och fler vegetariska alternativ.

"Vi äter samma saker varje vecka. Det är pasta på måndag, fisk på tisdag och köttfärs på onsdag. Det blir tråkigt", säger Alva Eriksson i årskurs 5.

Skolans kock, Marcus Lindgren, förstår kritiken men förklarar att budgeten är begränsad.

"Vi har 14 kronor per portion att laga mat för. Det räcker inte alltid till de råvaror vi skulle vilja använda", säger han.

Elevrådet har nu lämnat in en lista med förslag till rektorn. Bland önskemålen finns en salladsbuffé och möjligheten att välja mellan två rätter varje dag.

Rektorn Anna Johansson lovar att titta på förslagen.

"Elevernas åsikter är viktiga. Vi ska se vad vi kan göra inom budgeten", säger hon.`,
    analysisQuestions: [
      "Vad är nyheten i artikeln? Sammanfatta i en mening.",
      "Vilka personer kommer till tals? Varför har journalisten valt just dessa?",
      "Är artikeln objektiv eller tar den ställning? Ge exempel.",
      "Vem är avsändaren och vad är syftet med texten?",
      "Vad skulle du vilja veta mer om efter att ha läst artikeln?",
    ],
    structure:
      "Klassisk nyhetsstruktur: rubrik med nyheten, ingress med det viktigaste, brödtext med citat och bakgrund. Följer den omvända pyramiden — det viktigaste först.",
    languageFeatures:
      "Korta stycken och meningar. Direkt anföring med citattecken. Siffror för trovärdighet (340, 78 procent, 14 kronor). Neutralt språk utan värderande ord.",
    skrivverkstadLink: "/skrivverkstad/faktatext",
    skrivverkstadLabel: "Skrivverkstad: Faktatext",
  },
  {
    slug: "nyhetsartikel-klimat",
    title: "Klimatförändringar hotar Östersjöns ekosystem",
    category: "nyhetsartikel",
    categoryLabel: "Nyhetsartikel",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Stigande vattentemperaturer och ökad syrebrist i Östersjön skapar allvarliga problem för havsmiljön. Det visar en ny rapport från Stockholms universitet.

Forskarna har mätt vattentemperaturen i Östersjön under de senaste 30 åren och konstaterar att medeltemperaturen har stigit med 1,5 grader. Uppvärmningen leder till att syrefattiga bottnar breder ut sig, vilket slår hårt mot bottenlevande djur som musslor och havsborstmaskar.

"Vi ser en tydlig trend. De syrefria bottenområdena har fördubblats sedan 1990-talet och utgör nu en yta stor som Danmark", säger marinbiolog Sara Henriksson vid Stockholms universitet.

Konsekvenserna sträcker sig genom hela näringskedjan. Torskbeståndet i östra Östersjön har kollapsat, delvis på grund av att fiskens ägg inte överlever i syrefattigt vatten. Även sälpopulationer påverkas när deras föda minskar.

Övergödning från jordbruk och avlopp förvärrar situationen genom att öka algtillväxten, som i sin tur förbrukar syre när algerna bryts ned.

Rapporten föreslår kraftfullare åtgärder mot utsläpp av närsalter samt en ökad satsning på marina skyddade områden. Forskarna betonar att internationellt samarbete mellan Östersjöländerna är avgörande.

"Det här är inte ett problem som Sverige kan lösa ensamt. Östersjön är ett innanhav som delas av nio länder, och alla måste bidra", understryker Henriksson.`,
    analysisQuestions: [
      "Sammanfatta artikelns huvudbudskap i två meningar.",
      "Vilka orsakssamband beskrivs i texten? Rita gärna en orsakskedja.",
      "Hur används siffror och jämförelser för att göra problemet begripligt?",
      "Är texten objektiv? Motivera med exempel från texten.",
      "Vem är avsändaren? Vilka källor används och hur trovärdiga är de?",
    ],
    structure:
      "Nyhetsartikel med vetenskaplig vinkel: rubrik, ingress, forskningsresultat, konsekvenser, orsaker, lösningsförslag. Följer den omvända pyramiden.",
    languageFeatures:
      "Facktermer (ekosystem, syrebrist, näringskedja). Konkreta siffror (1,5 grader, fördubblats). Expertcitat som auktoriserar. Sambandsmarkörer (leder till, delvis på grund av, i sin tur).",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },
  {
    slug: "nyhetsartikel-ai-skolan",
    title: "Debatt: Ska AI-verktyg tillåtas på proven?",
    category: "nyhetsartikel",
    categoryLabel: "Nyhetsartikel",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Frågan om AI-verktyg i skolan delar lärarkåren. När Lärarförbundet nyligen genomförde en enkät svarade hälften av de tillfrågade gymnasielärarna att de ser AI som ett hot mot rättvis bedömning, medan den andra hälften menar att skolan måste anpassa sig till verkligheten.

"Vi kan inte låtsas som att AI inte finns. Våra elever kommer att använda dessa verktyg i sitt yrkesliv, och då måste vi lära dem att använda dem kritiskt och ansvarsfullt", säger Sofia Andersson, svensklärare på Katedralskolan i Uppsala.

Hennes kollega Johan Bergström på samma skola har en annan uppfattning.

"Om en elev lämnar in en text som till stor del är genererad av AI, hur ska jag då bedöma elevens egna kunskaper? Det undergräver hela syftet med betyg och examination", argumenterar han.

Skolverket har ännu inte tagit ställning i frågan utan låter varje skola utforma sin egen policy. Generaldirektör Peter Fredriksson har dock konstaterat att regelverket behöver uppdateras.

I flera andra länder pågår liknande diskussioner. Finland har valt att integrera AI-kompetens i läroplanen, medan Frankrike har infört förbud mot AI-verktyg vid nationella examinationer.

Eleverna själva har delade åsikter. I en undersökning bland gymnasieelever i Stockholm uppger 62 procent att de redan använder AI-verktyg regelbundet i sitt skolarbete, men bara 23 procent anser att det borde vara tillåtet på prov.

Debatten handlar i grunden om vad kunskap är och hur den bäst mäts — en fråga som digitaliseringen ställt på sin spets.`,
    analysisQuestions: [
      "Artikeln presenterar flera perspektiv. Vilka är de och hur balanseras de?",
      "Analysera artikelns argumentationsteknik. Hur används ethos, logos och pathos?",
      "Vilka retoriska grepp använder de intervjuade personerna?",
      "Är artikeln en nyhetsartikel eller en debattartikel? Motivera med textens språkliga drag.",
      "Vem är avsändaren? Vilka intressen kan ligga bakom de olika ståndpunkterna?",
      "Hur trovärdig är informationen? Vilka ytterligare källor skulle du vilja se?",
    ],
    structure:
      "Debattrefererande artikel: rubrik som väcker fråga, presentation av motsatta ståndpunkter med citat, internationell kontext, elevperspektiv, avslutande reflektion. Balanserad presentation.",
    languageFeatures:
      "Argumenterande uttryck (menar att, argumenterar, konstaterat). Sifferunderlag för trovärdighet. Retoriska frågor. Koncessioner (dock, medan). Abstrakt avslutning som lyfter frågan.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },

  /* ------------------------------------------------------------------ */
  /*  Reklamtexter                                                       */
  /* ------------------------------------------------------------------ */

  {
    slug: "reklam-sportdryck",
    title: "AquaBoost — drycken som ger dig superkrafter!",
    category: "reklam",
    categoryLabel: "Reklam",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Känner du dig trött efter idrotten? Törstig och slut på energi? Då behöver du AquaBoost!

AquaBoost är den nya sportdrycken som ALLA pratar om. Med smak av tropiska frukter och extra vitaminer ger den dig energi för att klara hela dagen.

★ Naturliga smaker
★ Tillsatta vitaminer
★ Utan tillsatt socker*

"AquaBoost är min favoritdryck! Jag dricker den varje dag efter fotbollsträningen." — Emma, 11 år

9 av 10 barn som testade AquaBoost ville ha mer!

Köp AquaBoost i din närmaste matbutik. Bara 15 kr!

*Innehåller sötningsmedel.`,
    analysisQuestions: [
      "Hur försöker reklamen få dig att vilja köpa produkten? Ge tre exempel.",
      "Vad betyder stjärnan (*) vid 'utan tillsatt socker'? Varför står det med liten text?",
      "Är 'Emma, 11 år' en trovärdig källa? Varför eller varför inte?",
      "Vem är avsändaren och vad vill de att du ska göra?",
      "Vilka ord är valda för att låta positivt? Byt ut dem mot neutrala ord.",
    ],
    structure:
      "Klassisk reklamstruktur: problem (trött), lösning (produkten), fördelar (punktlista), socialt bevis (citat + statistik), uppmaning att köpa, pris. Asterisk i liten text.",
    languageFeatures:
      "Retoriska frågor. Versaler för betoning (ALLA). Stjärnor som grafiska element. Påstådda fakta (9 av 10). Känsloladdade ord (superkrafter, favorit). Imperativ (Köp!).",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "reklam-influencer",
    title: "Samarbete: @LivingWithLinn testar EcoGlow hudvård",
    category: "reklam",
    categoryLabel: "Reklam",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Hej finaste ni! Idag vill jag berätta om något som verkligen har förändrat min hudvårdsrutin ✨

Ni vet att jag har kämpat med torr hy hela vintern, och jag har testat typ ALLT. Men sen fick jag hem produkterna från @EcoGlow och wow, vilken skillnad!

Deras Daily Glow Serum är helt fantastiskt. Huden känns mjukare redan efter första gången och efter en vecka märkte jag verkligen skillnad. Jag använder det morgon och kväll.

Det bästa? Allt är veganskt, djurförsöksfritt och förpackningarna är gjorda av återvunnen plast 🌿 Äntligen ett märke som bryr sig om planeten!

Just nu har ni 20% rabatt med koden LINN20 — länken finns i min bio!

Har ni testat EcoGlow? Skriv i kommentarerna! 💚

#samarbete #ecoglow #hudvård #veganskhudvård #skincare #ad`,
    analysisQuestions: [
      "Hur märker du att det här är reklam och inte ett vanligt inlägg?",
      "Vilka retoriska strategier använder influencern för att skapa förtroende?",
      "Vad betyder hashtaggen #samarbete? Varför måste den finnas med?",
      "Hur skiljer sig den här texten från en traditionell reklamannons?",
      "Vem är avsändaren — influencern eller företaget? Förklara.",
      "Är informationen om produkten trovärdig? Vad saknas för att du ska kunna bedöma det?",
    ],
    structure:
      "Influencer-inlägg: personlig hälsning, problemidentifiering, lösning via produkt, fördelar, rabattkod, uppmaning till interaktion. Hashtaggar och emojis. Markering som samarbete (#samarbete, #ad).",
    languageFeatures:
      "Talspråkligt och personligt (ni, finaste, typ). Emojis som interpunktion. Versaler för betoning. Superlativ (helt fantastiskt, vilken skillnad). Imperativ (Skriv!). Blandning av svenska och engelska (#skincare).",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "reklam-kampanj",
    title: "Kommunens kampanj: Källsortera — det är inte så svårt!",
    category: "reklam",
    categoryLabel: "Reklam",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Varje svensk producerar i genomsnitt 450 kilo avfall per år. Av detta återvinns bara 34 procent. Resten hamnar på deponi eller förbränns.

Men det behöver inte vara så.

Genom att källsortera kan du göra en verklig skillnad — för klimatet, för kommande generationer och för din egen plånbok.

SÅ HÄR ENKELT ÄR DET:
■ Papper och kartong → Pappersåtervinningen
■ Glas → Glasåtervinningen (färgat och ofärgat var för sig)
■ Plast → Plastförpackningar
■ Metall → Metallförpackningar
■ Matavfall → Komposten eller det bruna kärlet

VISSTE DU ATT...
• En återvunnen aluminiumburk sparar tillräckligt med energi för att driva en TV i tre timmar?
• Svensk pappersåtervinning sparar utsläpp motsvarande 250 000 bilars årliga körning?
• Matavfall som komposteras blir biogas som kan driva bussar och bilar?

"Jag trodde det var krångligt, men det tog bara en vecka att vänja sig. Nu känns det naturligt." — Karin, 67 år, Södermalm

Tillsammans kan vi nå målet: 70 procent återvinning till 2030.

Besök malmostad.se/kallsortering för tips och sorteringsguide.

Malmö stad — tillsammans gör vi skillnad.`,
    analysisQuestions: [
      "Analysera textens argumentation. Vilka typer av argument (logos, ethos, pathos) används?",
      "Hur skiljer sig en offentlig kampanj från kommersiell reklam i syfte och språk?",
      "Vilka retoriska grepp används för att göra budskapet övertygande?",
      "Granska siffrorna: är de trovärdiga och relevanta? Hur används de retoriskt?",
      "Vem är avsändaren och vilka intressen har de? Jämför med kommersiell reklam.",
      "Vad är textens implicita norm — vad förväntas läsaren tycka och göra?",
    ],
    structure:
      "Kampanjtext: problem med siffror, enkel lösning, instruktioner, fascinerande fakta, personligt vittnesmål, gemensamt mål, avsändare. Kombinerar sakargument med känslomässig appell.",
    languageFeatures:
      "Direkt tilltal (du, vi). Imperativ form. Siffror och statistik för trovärdighet. Retoriska frågor (Visste du att...). Punktlistor för överskådlighet. Inkluderande vi-form. Slogan (tillsammans gör vi skillnad).",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },

  /* ------------------------------------------------------------------ */
  /*  Brukstexter                                                        */
  /* ------------------------------------------------------------------ */

  {
    slug: "brukstext-recept",
    title: "Recept: Snabba havregrynsbiffar",
    category: "brukstext",
    categoryLabel: "Brukstext",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Havregrynsbiffar (4 portioner)

Du behöver:
• 3 dl havregryn
• 2 dl vatten
• 1 ägg
• 1 tsk salt
• smör till stekning

Gör så här:
1. Blanda havregryn, vatten, ägg och salt i en skål.
2. Låt stå i 10 minuter så havregrynen sväller.
3. Värm smör i en stekpanna.
4. Forma små biffar med en sked och lägg dem i pannan.
5. Stek på medelvärme i 3–4 minuter på varje sida.
6. Klart! Servera med lingonsylt.

Tips! Du kan tillsätta riven morot eller hackad persilja i smeten för extra smak.`,
    analysisQuestions: [
      "Vilka delar består receptet av? Varför är det uppdelat så?",
      "Varför står stegen i nummerordning? Vad händer om du byter ordning?",
      "Vilka ord talar om vad du ska göra? (Hitta alla instruktionsord.)",
      "Vem är avsändaren? Vem är texten skriven för?",
    ],
    structure:
      "Typisk receptstruktur: rubrik med portionsangivelse, ingredienslista med mått, numrerade steg i kronologisk ordning, tips som tillägg. Tydlig uppdelning för att vara lätt att följa.",
    languageFeatures:
      "Imperativ form (blanda, låt, värm, forma). Exakta mått (3 dl, 1 tsk). Tidsangivelser (10 minuter, 3–4 minuter). Korta meningar. Punktlista och numrerad lista.",
    skrivverkstadLink: "/skrivverkstad/faktatext",
    skrivverkstadLabel: "Skrivverkstad: Faktatext",
  },
  {
    slug: "brukstext-spelregler",
    title: "Regler för Kubb",
    category: "brukstext",
    categoryLabel: "Brukstext",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Kubb — det svenska vikingaspelet

Antal spelare: 2–12 (uppdelat i två lag)
Utrustning: 10 kubbar, 6 kastpinnar, 1 kung, 4 hörnpinnar

Uppställning:
Ställ upp kubbar i två rader mitt emot varandra med kungen i mitten. Markera spelplanen med hörnpinnarna. Planen ska vara ungefär 5 × 8 meter.

Spelets gång:
1. Lag A kastar sina sex kastpinnar mot lag B:s kubbar. Man kastar underifrån.
2. Lag B samlar ihop alla kullslagna kubbar och kastar in dem på lag A:s planhalva. Där de landar ställs de upp — dessa kallas fältkubbar.
3. Lag B kastar nu sina kastpinnar mot fältkubbarna först. Fältkubbar måste slås ned innan man får sikta på baslinjen.
4. Om ett lag missar en fältkubb får motståndarlaget flytta fram sin kastlinje till den fältkubb som står närmast kungen.
5. Lagen turas om. Det lag som slagit ned alla motståndarens kubbar får försöka slå ned kungen.
6. Kungen måste slås ned sist. Om man slår ned kungen i förtid förlorar man!

Vinnare:
Det lag som slår ned kungen efter att alla kubbar är borta vinner.`,
    analysisQuestions: [
      "Texten har flera delar. Vilka är de och varför behövs alla?",
      "Varför är det viktigt att stegen kommer i rätt ordning?",
      "Jämför med ett recept — vilka likheter och skillnader finns?",
      "Hur ser man att texten vill vara tydlig och lätt att följa?",
      "Vem är avsändaren? Vem har texten skrivits för?",
    ],
    structure:
      "Regeltext: rubrik, fakta (antal, utrustning), uppställning, numrerade steg, specialregler. Uppbyggd från förberedelse till spelets slut. Logisk kronologi.",
    languageFeatures:
      "Instruktioner i presens (kastar, ställs, måste). Passiv form (ställs de upp, slås ned). Exakta mått (5 × 8 meter). Villkorssatser (Om... får...). Fet stil för nyckelord. Specialtermer (fältkubbar, baslinjen).",
    skrivverkstadLink: "/skrivverkstad/faktatext",
    skrivverkstadLabel: "Skrivverkstad: Faktatext",
  },
  {
    slug: "brukstext-manual",
    title: "Användarguide: Så skapar du en presentation i Google Slides",
    category: "brukstext",
    categoryLabel: "Brukstext",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Att skapa en presentation i Google Slides

Den här guiden hjälper dig att skapa en presentation steg för steg. Du behöver ett Google-konto och en webbläsare.

Skapa en ny presentation:
1. Gå till slides.google.com och logga in med ditt Google-konto.
2. Klicka på "Tom presentation" eller välj en mall.
3. Ge din presentation ett namn genom att klicka på "Namnlös presentation" uppe till vänster.

Lägg till innehåll:
4. Klicka på textrutan "Klicka för att lägga till en titel" och skriv din rubrik.
5. Lägg till en ny bild genom att klicka på plusknappen (+) uppe till vänster eller tryck Ctrl + M.
6. Välj en layout som passar ditt innehåll: bara titel, titel och text, eller tom bild.

Formatera:
7. Markera text och använd verktygsfältet för att ändra typsnitt, storlek och färg.
8. Infoga bilder via Infoga → Bild. Du kan ladda upp, söka på webben eller klistra in en URL.
9. Lägg till övergångar mellan bilder via Bild → Övergång.

Tips för en bra presentation:
• Använd max 6 punkter per bild — för mycket text gör den svårläst.
• Välj ett enhetligt färgschema genom hela presentationen.
• Kontrollera att text syns tydligt mot bakgrunden.
• Använd bilder som förstärker ditt budskap, inte bara dekorerar.
• Spara regelbundet — Google Slides sparar automatiskt, men kontrollera att du är online.

Dela med andra:
10. Klicka på "Dela" uppe till höger.
11. Ange e-postadresser eller kopiera en delningslänk.
12. Välj behörighet: Visningsläge, Kommentarsläge eller Redigeringsläge.`,
    analysisQuestions: [
      "Texten är en brukstext. Vilka typiska drag har den?",
      "Hur hjälper strukturen (numrering, rubriker, punktlistor) läsaren?",
      "Jämför med en instruktionstext du själv har skrivit. Vad kan du lära dig av den här textens upplägg?",
      "Vilken förkunskap förutsätts av läsaren? Hur märker man det?",
      "Vem är avsändaren och vad är textens syfte?",
      "Är texten trovärdig och aktuell? Hur kan du avgöra det?",
    ],
    structure:
      "Digital brukstext: rubrik, inledning med krav, numrerade steg grupperade under tematiska underrubriker, tips som separat avsnitt. Progressiv uppbyggnad från grundläggande till avancerat.",
    languageFeatures:
      "Imperativ (gå, klicka, välj). Exakta hänvisningar (uppe till vänster, Ctrl + M). Villkor och alternativ (eller välj en mall). Tekniska termer (URL, behörighet, delningslänk). Punktlista för tips.",
    skrivverkstadLink: "/skrivverkstad/faktatext",
    skrivverkstadLabel: "Skrivverkstad: Faktatext",
  },

  // ─── NYA ARGUMENTERANDE TEXTER ──────────────────────────────
  {
    slug: "bor-barn-ha-mobiltelefon",
    title: "Bör barn ha mobiltelefon?",
    category: "argumenterande",
    categoryLabel: "Insändare",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Många barn i vår klass har fått en egen mobiltelefon. Men bör barn verkligen ha en mobil? Det finns både fördelar och nackdelar.

En fördel är att barn kan ringa sina föräldrar om något händer. Om man missar bussen eller om träningen slutar tidigt kan man snabbt ge besked. Det gör att föräldrar känner sig trygga och att barn kan vara mer självständiga.

En annan fördel är att man kan använda mobilen för att lära sig saker. Det finns appar för att öva matte, läsa böcker och lära sig nya språk. Mobilen kan alltså vara ett bra verktyg i skolan och hemma.

Men det finns också nackdelar. Många barn tillbringar för mycket tid framför skärmen. Istället för att leka utomhus eller läsa en bok sitter man och scrollar. Det kan vara dåligt för ögonen och göra att man sover sämre.

Dessutom finns det risker på nätet. Barn kan stöta på obehagligt innehåll eller prata med personer de inte känner. Det kan vara svårt för barn att veta vad som är säkert.

Jag tycker att barn kan ha en mobiltelefon, men med regler. Föräldrarna bör bestämma hur länge man får använda den och vilka appar man får ladda ner. Då kan mobilen vara till nytta istället för att bli ett problem.`,
    analysisQuestions: [
      "Vilka argument för mobiltelefoner nämns i texten? Vilka argument emot?",
      "Hur är texten uppbyggd? I vilken ordning kommer argumenten?",
      "Vad tycker skribenten själv? Var framgår det?",
      "Vad tycker du — bör barn ha mobiltelefon? Skriv ett eget argument.",
    ],
    structure:
      "Texten inleds med en fråga, presenterar sedan argument för och emot i separata stycken, och avslutas med skribentens egen åsikt. Tydlig argumenterande struktur anpassad för mellanstadiet.",
    languageFeatures:
      "Sambandsord som 'en fördel', 'dessutom', 'men'. Enkla men tydliga meningar. Vardagsnära exempel. Avslutning med egen ståndpunkt och kompromissförslag.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "langre-raster",
    title: "Varför vi borde ha längre raster",
    category: "argumenterande",
    categoryLabel: "Insändare",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Kära rektorn,

Vi i klass 6A vill att rasterna ska bli längre. Just nu har vi bara femton minuter på förmiddagsrasten och det räcker inte. Vi hinner knappt komma ut innan det är dags att gå in igen.

Det viktigaste argumentet är att vi behöver röra på oss. Vi sitter stilla nästan hela dagen. Forskning visar att barn som rör sig mer lär sig bättre. Om rasterna var längre skulle vi kunna springa, spela fotboll och leka ordentligt.

Längre raster skulle också minska konflikter. Många bråk på rasterna beror på stress. Alla vill hinna med att spela och när tiden är kort blir det lätt tjat om vems tur det är. Med mer tid skulle det bli lugnare och roligare.

En del kanske tänker att längre raster betyder mindre tid för lektioner. Men vi tror att det är tvärtom. När vi kommer in från en lång rast är vi piggare och kan koncentrera oss bättre. Då lär vi oss mer på kortare tid.

Vi föreslår att förmiddagsrasten blir trettio minuter istället för femton. Det skulle göra stor skillnad. Vi lovar att om vi får längre raster så kommer vi att jobba extra hårt på lektionerna.

Med hopp om förändring,
Klass 6A`,
    analysisQuestions: [
      "Vem skriver texten och till vem? Hur påverkar det språket?",
      "Vilka tre huvudargument framför klassen? Vilket tycker du är starkast?",
      "Hur bemöter texten motargumentet om mindre lektionstid?",
      "Texten avslutas med ett löfte. Varför är det smart i en argumenterande text?",
    ],
    structure:
      "Brev med tydlig mottagare. Tre argument i egna stycken, ett motargument som bemöts, och ett konkret förslag. Avslutas med en personlig vädjan.",
    languageFeatures:
      "Brevform med hälsningsfras och avsändare. Sambandsord som 'det viktigaste', 'dessutom', 'en del kanske tänker'. Tydligt och rakt språk anpassat till mottagaren.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "skoluniformer-for-eller-emot",
    title: "Skoluniformer — för eller emot",
    category: "argumenterande",
    categoryLabel: "Debattartikel",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `I Sverige har vi aldrig haft tradition av skoluniformer. Ändå dyker frågan upp med jämna mellanrum, ofta driven av rapporter om mobbning kopplad till kläder och märken. Är det dags att ompröva vår inställning?

Förespråkarna lyfter framför allt den sociala aspekten. I en skola där alla klär sig likadant försvinner den visuella sorteringen i fack. Elever från ekonomiskt svaga familjer slipper den dagliga påminnelsen om att de inte har de senaste skorna. Uniformen skapar, menar förespråkarna, ett klimat där andra kvaliteter än garderob får ta plats.

Dessutom pekar internationella studier på att skolor med uniformer ofta rapporterar färre disciplinproblem. Fokus hamnar på undervisningen snarare än på utseende. Det signalerar att skolan är en arbetsplats, inte en modevisning.

Mot detta står individens rätt till personligt uttryck. Kläder är identitet, särskilt under tonåren. Att beröva unga den möjligheten riskerar att skapa en konformitet som kväver kreativitet. Kritikerna menar att uniformen behandlar symtom snarare än orsaker — den verkliga frågan handlar om normer, inte kläder.

Det finns även en klassfråga i själva uniformen. Om den kostar mer än vad familjer redan lägger på skolkläder blir effekten den motsatta. Och vem bestämmer utformningen? Risken finns att uniformen reproducerar könsnormer istället för att utmana dem.

Debatten om skoluniformer är i grunden en debatt om vad skolan ska vara: en plats för individuell frihet eller en plats för gemensamma ramar. Svaret behöver inte vara antingen eller.`,
    analysisQuestions: [
      "Hur balanserar skribenten argument för och emot? Tar texten ställning?",
      "Vilka typer av argument används — etiska, praktiska, ekonomiska?",
      "Vad menar skribenten med att uniformen 'behandlar symtom snarare än orsaker'?",
      "Hur fungerar avslutningen? Jämför med en text som tar tydligt ställning.",
    ],
    structure:
      "Inledning med kontext, två stycken med argument för, två stycken med argument emot, och en avslutning som öppnar för reflektion snarare än att slå fast en tes.",
    languageFeatures:
      "Sakligt och nyanserat. Refererar till forskning och internationella exempel. Bindeord som 'dessutom', 'mot detta står'. Opersonligt perspektiv med passivkonstruktioner.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "sociala-medier-gor-oss-ensamma",
    title: "Sociala medier gör oss ensamma",
    category: "argumenterande",
    categoryLabel: "Debattartikel",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Vi har aldrig varit mer uppkopplade, och vi har aldrig känt oss mer ensamma. Det är paradoxen i vår tid. Sociala medier utlovar gemenskap men levererar något annat: en yta där vi jämför oss med andra, söker bekräftelse i likes och mäter vårt värde i följarantal.

Forskning från Folkhälsomyndigheten visar att den psykiska ohälsan bland unga har ökat markant sedan 2010 — samma period då smartphones och sociala medier blev vardag. Sambandet behöver inte betyda orsak, men det är svårt att ignorera.

Problemet handlar inte bara om skärmtid. Det handlar om vad som ersätts. Varje timme på Instagram är en timme utan ögonkontakt, utan spontana skratt, utan den sorts tystnad som bara fungerar med riktiga vänner. Digital kommunikation saknar nyanser — det går inte att höra ton, se mimik eller känna närvaro genom en skärm.

Dessutom skapar plattformarna en illusion av social aktivitet. Man kan ha tusen följare men ingen att ringa klockan tre på natten. Man kan få hundra kommentarer på en bild men ändå känna sig osedd. Siffrorna ljuger.

Motståndarna menar att sociala medier tvärtom hjälper människor att hitta gemenskaper de saknar i sin vardag. Det är sant. Men frågan är om den digitala gemenskapen räcker, eller om den bara dämpar känslan tillfälligt utan att fylla det verkliga behovet.

Det handlar inte om att förbjuda sociala medier. Det handlar om att inse att en app aldrig kan ersätta en vän.`,
    analysisQuestions: [
      "Vad är textens huvudtes? Hur stöds den med fakta och exempel?",
      "Hur använder skribenten statistik och forskning i argumentationen?",
      "Vilka motargument nämns? Hur bemöts de?",
      "Är du övertygad av texten? Vad hade du lagt till eller ändrat?",
    ],
    structure:
      "Inledning med en paradox, tre argument som bygger på varandra, ett motargument som bemöts, och en koncis avslutning med kärnbudskapet.",
    languageFeatures:
      "Engagerande retoriska grepp som paradoxer och kontraster. Hänvisning till forskning. Konkreta exempel blandat med abstrakt reflektion. Effektfull kortmening i slutet.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "karnkraft-i-sveriges-energimix",
    title: "Borde kärnkraft vara en del av Sveriges energimix?",
    category: "argumenterande",
    categoryLabel: "Debattartikel",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Frågan om kärnkraftens roll i den svenska energimixen har åter aktualiserats i takt med klimatkrisens acceleration och det ökade elbehovet. Medan somliga betraktar kärnkraften som en nödvändig bro till ett fossilfritt samhälle, ser andra den som en riskfylld och ekonomiskt tveksam relik. Var landar argumenten?

Ur klimatperspektiv har kärnkraften låga koldioxidutsläpp under drift, jämförbara med vind- och solkraft. I ett läge där varje gram koldioxid räknas är detta signifikant. Kärnkraften levererar dessutom stabil basenergi oberoende av väder, till skillnad från sol och vind som kräver kompletterande lagring eller reservkapacitet.

Sverige har historiskt haft en framgångsrik kärnkraftsindustri. Den tekniska kompetensen finns. Nya reaktordesigner — så kallade SMR, små modulära reaktorer — lovar kortare byggtider, lägre kostnader och ökad säkerhet jämfört med traditionella storskalereaktor.

Men invändningarna är substantiella. Kärnkraftsutbyggnad tar decennier från beslut till driftstart, tid som klimatomställningen inte har. Avfallsfrågan förblir olöst i praktiken, trots tekniska lösningar som Forsmarks slutförvar. Och de ekonomiska riskerna är betydande — internationella projekt som Flamanville och Hinkley Point C har drabbats av massiva fördyringar.

Dessutom ifrågasätter kritiker behovet. Sverige har exceptionella förutsättningar för förnybar energi: vattenkraft, vindkraft och en växande solenergimarknad. Investeringar i kärnkraft riskerar att tränga ut satsningar på dessa alternativ.

I slutändan handlar frågan inte bara om teknik utan om riskbedömning, ekonomisk prioritering och tidshorisont. En ansvarsfull energipolitik kräver att alla alternativ utvärderas utifrån evidens, inte ideologi.`,
    analysisQuestions: [
      "Vilken tes driver skribenten — eller undviker texten att ta ställning? Motivera.",
      "Hur balanseras naturvetenskapliga, ekonomiska och politiska argument?",
      "Vad innebär påståendet att frågan handlar om 'riskbedömning, inte ideologi'?",
      "Analysera textens trovärdighet: vilka typer av stöd och belägg används?",
    ],
    structure:
      "Inledning med aktualisering, argument för i två stycken, argument emot i två stycken, avslutning med metaperspektiv. Balanserad debattartikel utan explicit tes.",
    languageFeatures:
      "Akademiskt register med facktermer (SMR, basenergi, koldioxidutsläpp). Nominaliseringar och passivformer. Källhänvisningar integrerade i texten. Nyanserade formuleringar som 'somliga... andra'.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },
  {
    slug: "algoritmer-och-demokrati",
    title: "Algoritmer och demokrati",
    category: "argumenterande",
    categoryLabel: "Debattartikel",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Varje gång du öppnar ett socialt medium fattar en algoritm beslut åt dig. Den väljer vilka nyheter du ser, vilka röster du hör och vilka perspektiv som hamnar i periferin. Det är inte censur i traditionell mening, men det är en form av informationsstyrning som borde oroa var och en som värnar om demokratin.

Algoritmernas grundläggande logik är engagemang: det som väcker starka känslor sprids, det som nyanserar ignoreras. Forskning vid MIT visade att falska nyheter sprids sex gånger snabbare än sanningsenlig information på sociala medier. Algoritmerna belönar alltså det sensationella på bekostnad av det korrekta.

Konsekvenserna sträcker sig bortom individen. Filterbubblor uppstår när användare matas med information som bekräftar deras befintliga uppfattningar. Den gemensamma offentligheten — den arena där medborgare möter oliktänkande och tvingas ompröva — fragmenteras. Polariseringen ökar, kompromissviljan minskar.

Förespråkarna av algoritmisk kurating invänder att användare alltid har valt informationskällor selektivt. Det stämmer. Skillnaden är skala och automatisering. Ingen tidningsredaktör har någonsin haft makt att personanpassa verklighetsbilden för miljarder människor simultant.

Lösningen handlar inte om att förbjuda algoritmer utan om att reglera dem. Transparenskrav — att användare kan se och påverka hur innehåll sorteras — vore ett första steg. EU:s DSA-lagstiftning rör sig i den riktningen, men implementeringen återstår.

Demokrati förutsätter informerade medborgare. Om de verktyg vi använder dagligen systematiskt underminerar förutsättningarna för informerat beslutsfattande, är det inte en teknisk fråga — det är en demokratifråga.`,
    analysisQuestions: [
      "Hur argumenterar skribenten för att algoritmer utgör ett demokratiproblem?",
      "Vilken funktion fyller forskningsreferensen om MIT-studien i argumentationen?",
      "Texten nämner motargument. Hur bemöts de och är bemötandet övertygande?",
      "Diskutera relationen mellan yttrandefrihet och algoritmisk reglering utifrån textens perspektiv.",
    ],
    structure:
      "Inledning med konkret situation som vidgas till principiell fråga. Tre underbyggda argument, ett motargument som bemöts med distinktion, lösningsförslag, och avslutning som återknyter till demokratitemat.",
    languageFeatures:
      "Akademisk argumentation med konkreta exempel. Facktermer (filterbubblor, algoritmisk kurating, DSA). Retoriska grepp som klimax och kontrast. Formellt register med opersonligt tilltal.",
    skrivverkstadLink: "/skrivverkstad/argumenterande-text",
    skrivverkstadLabel: "Skrivverkstad: Argumenterande text",
  },

  // ─── NYA UTREDANDE TEXTER ───────────────────────────────────
  {
    slug: "hur-fungerar-minnet",
    title: "Hur fungerar minnet?",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Har du någonsin undrat varför du minns din bästa födelsedag men glömmer vad du åt till lunch igår? Det beror på hur vårt minne fungerar. Minnet är som en superdator i hjärnan, men det fungerar inte riktigt som en vanlig dator.

Forskare brukar dela in minnet i tre delar. Först finns korttidsminnet. Det håller kvar information i ungefär trettio sekunder. Det är korttidsminnet du använder när du ska komma ihåg ett telefonnummer precis så länge att du hinner slå det.

Sedan finns arbetsminnet. Det hjälper dig att tänka och lösa problem. När du räknar ut ett mattetal i huvudet är det arbetsminnet som jobbar. De flesta kan hålla ungefär sju saker i arbetsminnet samtidigt.

Till sist finns långtidsminnet. Där sparas saker du lärt dig ordentligt, som att cykla eller ditt namn. Långtidsminnet kan lagra enorma mängder information under hela livet.

Men hur hamnar saker i långtidsminnet? Det viktigaste är upprepning. Ju fler gånger du övar något, desto starkare blir minnet. Det hjälper också att koppla ny information till saker du redan kan. Om du ska lära dig att huvudstaden i Australien heter Canberra kan du till exempel tänka på en kanna som bärgar — kan-bärra.

Känslor spelar också roll. Vi minns saker som gör oss glada, rädda eller förvånade mycket bättre än saker som är tråkiga. Därför minns du din bästa födelsedag men inte gårdagens lunch.`,
    analysisQuestions: [
      "Hur förklarar texten svåra begrepp på ett enkelt sätt? Ge exempel.",
      "Vilka jämförelser och exempel används? Varför är de effektiva?",
      "Hur är texten uppbyggd? I vilken ordning presenteras informationen?",
      "Vad lärde du dig av texten? Skriv tre saker du inte visste förut.",
    ],
    structure:
      "Inledning med fråga som väcker nyfikenhet. Tre typer av minne presenteras i ordning. Sedan fördjupning om hur minnet fungerar. Avrundning som knyter an till inledningen.",
    languageFeatures:
      "Direkt tilltal med 'du'. Jämförelser som gör abstrakt konkret (superdator, telefonnummer). Enkla sambandsord: 'först', 'sedan', 'till sist'. Vardagsnära exempel.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },
  {
    slug: "varfor-forsvinner-djur",
    title: "Varför försvinner djur?",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `Just nu försvinner djurarter snabbare än någon gång under de senaste miljontals åren. Forskare kallar det för den sjätte massutrotningen. Men varför händer det och vad kan vi göra?

Den största orsaken är att djurens hem försvinner. Skogar huggs ner för att ge plats åt jordbruk och städer. Våtmarker dikas ut och ängar blir parkeringsplatser. När livsmiljöerna krymper har djuren ingenstans att bo och hitta mat.

Klimatförändringarna spelar också stor roll. När temperaturen stiger klarar många djur inte av de nya förhållandena. Isbjörnen behöver havsis för att jaga, men isen smälter. Korallerna i havet dör när vattnet blir för varmt, och med dem försvinner alla fiskar som lever där.

Föroreningar är ett tredje hot. Plast i haven skadar sköldpaddor och sjöfåglar. Bekämpningsmedel dödar insekter som bin, vilka behövs för att pollinera våra grödor. Gift sprider sig genom näringskedjorna och påverkar djur långt från föroreningskällan.

Invasiva arter — djur och växter som människor har spridit till nya platser — tränger också undan inhemska arter. I Australien har införda katter och rävar orsakat att flera små däggdjur nästan utrotats.

Men det finns hopp. Naturreservat skyddar livsmiljöer. Avel i fångenskap har räddat arter som pilgrimsfalken. Och varje gång vi återplanterar skog, minskar plastanvändning eller väljer hållbar mat gör vi skillnad.`,
    analysisQuestions: [
      "Vilka fyra orsaker till artutrotning nämner texten?",
      "Hur gör texten problemet begripligt med konkreta exempel?",
      "Varför är det viktigt att texten avslutas med hopp och lösningar?",
      "Välj ett av hoten och skriv en egen fördjupande text om det.",
    ],
    structure:
      "Inledning som fastslår problemet, fyra orsaker presenterade i egna stycken med exempel, och avslutning med hopp och handlingsmöjligheter.",
    languageFeatures:
      "Enkelt men informativt språk. Konkreta exempel kopplade till varje orsak. Sambandsord som 'den största orsaken', 'också', 'ett tredje hot'. Aktivt tilltal i slutet.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },
  {
    slug: "ungdomars-somnvanor",
    title: "Ungdomars sömnvanor",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Sömnforskare är eniga: svenska ungdomar sover för lite. Enligt Folkhälsomyndigheten uppger en av tre högstadieelever att de sover mindre än åtta timmar per natt, trots att rekommendationen för tonåringar är åtta till tio timmar. Vad ligger bakom denna sömnbrist och vilka konsekvenser får den?

En central faktor är den biologiska klockans förskjutning. Under puberteten förändras dygnsrytmen så att kroppen vill somna senare och vakna senare. Detta är inte lathet utan fysiologi — hormonet melatonin börjar utsöndras ungefär två timmar senare hos tonåringar jämfört med barn och vuxna.

Skärmanvändning förstärker problemet. Blått ljus från telefoner och datorer signalerar till hjärnan att det fortfarande är dag, vilket ytterligare fördröjer melatoninfrisättningen. Studier visar att ungdomar som använder skärm den sista timmen före sänggåendet har signifikant sämre sömnkvalitet.

Skolans tidiga start krockar med tonåringens biologi. När lektionerna börjar klockan åtta har en genomsnittlig femtonåring fått för lite sömn, oavsett hur disciplinerad hen försöker vara. Forskning vid Karolinska Institutet visar att senare skolstart förbättrar både sömn och skolresultat.

Konsekvenserna av sömnbrist är väldokumenterade: försämrad koncentration, ökad ångest, nedsatt immunförsvar och sämre skolprestationer. Det finns även samband mellan kronisk sömnbrist och ökad risk för depression hos unga.

Lösningarna kräver insatser på flera nivåer. Individen kan begränsa skärmtid kvällstid. Skolan kan överväga senarelagd start. Och samhället behöver erkänna att ungdomars sömn inte är en privat fråga utan en folkhälsofråga.`,
    analysisQuestions: [
      "Hur använder texten vetenskapliga belägg för att stärka sina påståenden?",
      "Vilka orsaker till sömnbrist identifieras? Hur hänger de ihop?",
      "Texten föreslår lösningar på tre nivåer. Vilka är de och varför är det effektivt?",
      "Jämför texten med en argumenterande text i samma ämne. Vad skiljer den utredande ansatsen?",
    ],
    structure:
      "Inledning med fakta som etablerar problemet. Tre orsaker analyserade i tur och ordning. Konsekvenser samlas i eget stycke. Avslutning med lösningar på tre nivåer.",
    languageFeatures:
      "Sakligt och informativt. Hänvisning till forskning och myndigheter. Facktermer som melatonin och dygnsrytm förklaras i kontext. Passivkonstruktioner och nominaliseringar.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },
  {
    slug: "sprakforandringar-i-svenska",
    title: "Språkförändringar i svenska",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Det svenska språket har förändrats genom hela sin historia, och det fortsätter att förändras idag. Ord som var vardagliga för hundra år sedan har försvunnit, medan nya tillkommer varje år. Men vad driver dessa förändringar och hur påverkar de hur vi kommunicerar?

Lånord är en av de mest synliga förändringarna. Under medeltiden lånade svenskan in tusentals ord från tyskan, som 'arbete', 'handel' och 'borgare'. Under 1700-talet kom franska ord som 'restaurang' och 'parfym'. Idag dominerar engelskan med ord som 'mejl', 'streama' och 'content'.

Grammatiken förändras också, om än långsammare. Svenskan har gradvis blivit enklare i sin böjning. Vi har tappat kasusformer som fornsvenskan hade, och tempussystemet har förenklats. Pronomenreformen med 'hen' som könsneutralt alternativ till 'han' och 'hon' är ett nutida exempel på grammatisk förändring.

Nya kommunikationsformer driver innovation. SMS och sociala medier har gett upphov till förkortningar, emojier och nya textgenrer. 'Haha' som skriftlig markör för humor eller 'asså' som diskurspartikel i text är fenomen som knappt existerade för tjugo år sedan.

Språkforskare betonar att förändring inte innebär förfall. Varje generation upplever att språket försämras, men det handlar snarare om att normer skiftar. Ungdomars språk, som ofta kritiseras, har visat sig vara en viktig motor för innovation som med tiden absorberas i standardspråket.

Språket är en levande organism. Försök att frysa det i ett idealiskt tillstånd har aldrig lyckats — och språkets förmåga att anpassa sig är kanske dess viktigaste egenskap.`,
    analysisQuestions: [
      "Vilka typer av språkförändringar tar texten upp? Ange minst fyra.",
      "Hur bemöter texten uppfattningen att språkförändring är negativt?",
      "Ge egna exempel på ord eller uttryck som nyligen kommit in i svenskan.",
      "Texten kallar språket en 'levande organism'. Diskutera om det är en bra jämförelse.",
    ],
    structure:
      "Inledning som etablerar temat med perspektiv bakåt och framåt. Fyra typer av förändring i egna stycken. Motargument bemöts. Avslutning med metafor som sammanfattar.",
    languageFeatures:
      "Formellt men tillgängligt. Historiska exempel ger tyngd. Facktermer som kasusformer och diskurspartikel integreras naturligt. Avslutande metafor som binder ihop texten.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },
  {
    slug: "artificiell-intelligens-i-samhallet",
    title: "Artificiell intelligens i samhället",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Artificiell intelligens, AI, har under det senaste decenniet gått från att vara ett specialiserat forskningsfält till att genomsyra vardagen. Vi möter AI i allt från prediktiv textinmatning på telefonen till avancerade diagnostikverktyg i sjukvården. Denna genomgripande förändring väcker frågor som sträcker sig bortom tekniken — in i ekonomi, etik och samhällsstruktur.

Inom sjukvården visar AI-system redan kapacitet att identifiera cancer i röntgenbilder med träffsäkerhet som överträffar erfarna radiologer. Algoritmer analyserar patientdata för att förutsäga sjukdomsförlopp och optimera behandlingar. Potentialen att rädda liv och effektivisera resurser är betydande.

Arbetsmarknaden genomgår samtidigt en transformation. Rutinmässiga kognitiva uppgifter — bokföring, dokumentsammanställning, enklare juridisk analys — automatiseras i snabb takt. Ekonomer vid Oxfords universitet uppskattar att nästan hälften av alla arbetsuppgifter riskerar att påverkas under de kommande decennierna. Samtidigt skapas nya yrkesroller: AI-tränare, etikgranskare och promptingenjörer.

De etiska dimensionerna är komplexa. AI-system tränade på historisk data riskerar att reproducera och förstärka befintliga fördomar. Ansiktsienkänningsteknologi har uppvisat betydligt sämre träffsäkerhet för mörkhyade individer. Frågan om ansvar när ett autonomt system fattar felaktiga beslut saknar ännu entydiga juridiska svar.

Dessutom aktualiserar AI frågor om transparens och makt. De mest avancerade modellerna utvecklas av en handfull teknikföretag med enorm datamängd och beräkningskapacitet. Demokratisk insyn i hur dessa system fungerar och vilka värderingar de kodifierar är begränsad.

Samhällets förmåga att hantera AI:s potential och risker beror inte på tekniken i sig, utan på de institutioner, regelverk och värderingar vi väljer att omge den med.`,
    analysisQuestions: [
      "Vilka samhällsområden behandlar texten och hur hänger de ihop?",
      "Analysera textens objektivitet. Finns det implicita värderingar trots den sakliga tonen?",
      "Vad menar skribenten med att frågan sträcker sig 'bortom tekniken'?",
      "Jämför textens perspektiv med debatten om AI i svensk media. Vilka aspekter saknas?",
    ],
    structure:
      "Inledning som kontextualiserar AI:s genomslag. Fyra perspektiv — sjukvård, arbetsmarknad, etik, maktkoncentration — i egna stycken. Avslutning med syntes som betonar mänskligt ansvar.",
    languageFeatures:
      "Akademiskt register med nominaliseringar och passivformer. Facktermer integrerade med förklaringar. Opersonligt perspektiv. Komplexa meningar med bisatser och inskott. Källhänvisningar integrerade.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },
  {
    slug: "klimatforandringarnas-ekonomiska-konsekvenser",
    title: "Klimatförändringarnas ekonomiska konsekvenser",
    category: "utredande",
    categoryLabel: "Utredande text",
    difficulty: "gymnasiet",
    difficultyLabel: "Gymnasiet",
    content: `Klimatförändringarna framställs ofta som en miljöfråga, men de är i lika hög grad en ekonomisk realitet. Stigande temperaturer, extremväder och höjda havsnivåer påverkar redan nu globala värdekedjor, försäkringsmarknader och statliga budgetar. Denna text undersöker de ekonomiska konsekvenserna ur flera perspektiv.

De direkta kostnaderna för extremväder ökar dramatiskt. Enligt återförsäkringsbolaget Munich Re uppgick de globala förlusterna från naturkatastrofer till rekordsummor under 2020-talet. Översvämningar, torka och orkaner slår mot infrastruktur, jordbruk och fastighetsmarknader. Kostnaden bärs av försäkringsbolag, skattebetalare och drabbade individer — ofta de som har minst resurser.

Jordbruket står inför särskilt stora utmaningar. Förändrade nederbördsmönster och längre torrperioder hotar skördar i regioner som försörjer miljarder människor. FN:s livsmedelsorganisation, FAO, varnar för att den globala matproduktionen kan minska med upp till tjugofem procent fram till seklets slut om utsläppen inte begränsas kraftigt.

Omställningen till fossilfri ekonomi medför också kostnader, men de bör ses som investeringar. Internationella energiorganet, IEA, beräknar att varje krona investerad i ren energi ger mångfaldigt tillbaka i form av minskade hälsokostnader, energisäkerhet och skapade arbetstillfällen.

Fördelningen av konsekvenserna är djupt ojämlik. Länder i det globala syd — som bidragit minst till utsläppen — drabbas hårdast. Denna asymmetri ställer frågor om klimaträttvisa och internationellt ansvar som inte enbart kan lösas med ekonomiska modeller.

Det är inte längre frågan om klimatförändringarna kommer att kosta — utan vem som betalar, och huruvida vi investerar i förebyggande åtgärder eller reparationer i efterhand.`,
    analysisQuestions: [
      "Vilka ekonomiska konsekvenser lyfter texten? Kategorisera dem som direkta och indirekta.",
      "Hur integrerar texten källor och data i argumentationen? Ge exempel.",
      "Vad menas med att klimatfrågan också är en fråga om rättvisa?",
      "Diskutera textens avslutande fråga: är förebyggande åtgärder mer lönsamma än reparationer?",
    ],
    structure:
      "Inledning som omdefinierar klimatfrågan som ekonomisk. Fyra perspektiv: extremväder, jordbruk, omställning och rättvisa. Avslutning med retorisk fråga som öppnar för vidare diskussion.",
    languageFeatures:
      "Akademisk sakprosa med källhänvisningar (Munich Re, FAO, IEA). Nominaliseringar och komplexa nominalfraser. Opersonligt perspektiv med distanserade formuleringar. Ekonomisk terminologi.",
    skrivverkstadLink: "/skrivverkstad/utredande-text",
    skrivverkstadLabel: "Skrivverkstad: Utredande text",
  },

  // ─── NYA FAKTATEXTER ───────────────────────────────────────
  {
    slug: "var-narmaste-stjarna",
    title: "Vår närmaste stjärna",
    category: "faktatext",
    categoryLabel: "Faktatext",
    difficulty: "lagstadiet",
    difficultyLabel: "Lågstadiet",
    content: `Solen är en stjärna. Den är den stjärna som är närmast jorden. Utan solen skulle det inte finnas något liv på vår planet.

Solen är jättestor. Det skulle gå att fylla den med mer än en miljon jordklot. Men solen ser liten ut på himlen för att den är så långt bort. Ljuset från solen tar åtta minuter att nå oss.

Solen är väldigt het. På ytan är den ungefär sex tusen grader varm. I mitten är den ännu hetare — femton miljoner grader! Det är så varmt att man inte ens kan föreställa sig det.

Solen ger oss ljus och värme. Tack vare solen kan växter växa. Växter behöver solljus för att göra mat åt sig själva. Djur äter växter, och vi äter både växter och djur. Allt börjar med solen.

Solen hjälper oss också att veta vad klockan är. Förr i tiden använde man solur. Solen går upp i öster och ner i väster. Det tar ungefär tolv timmar.

Ibland kan man se fläckar på solen. De kallas solfläckar. De är lite kallare ställen, men de är fortfarande mycket heta. Ibland skickar solen ut stora eldslungor som kallas solstormar.

Solen har funnits i ungefär fem miljarder år. Forskare tror att den kommer att lysa i fem miljarder år till. Det är ganska länge!`,
    analysisQuestions: [
      "Vilka fakta om solen lärde du dig? Skriv tre saker.",
      "Hur gör texten stora tal begripliga? Ge ett exempel.",
      "Varför är solen viktig för allt liv på jorden?",
      "Rita en bild av solen och skriv tre fakta bredvid den.",
    ],
    structure:
      "Kort inledning som presenterar ämnet. Varje stycke tar upp en egenskap hos solen. Enkel och logisk ordning från storlek till betydelse. Avslutning med perspektiv på tid.",
    languageFeatures:
      "Mycket korta och enkla meningar. Vardagliga jämförelser (en miljon jordklot). Upprepning av 'solen' som subjekt. Utropstecken för att uttrycka förundran. Enkla sambandsord.",
    skrivverkstadLink: "/skrivverkstad/faktatext",
    skrivverkstadLabel: "Skrivverkstad: Faktatext",
  },
  {
    slug: "vikingarna-reste-langt",
    title: "Vikingarna reste långt",
    category: "faktatext",
    categoryLabel: "Faktatext",
    difficulty: "mellanstadiet",
    difficultyLabel: "Mellanstadiet",
    content: `För drygt tusen år sedan gav sig vikingarna ut på långa resor från Skandinavien. De var inte bara krigare, som många tror. De var också handelsmän, hantverkare och upptäcktsresande som nådde platser som få européer hade sett.

Vikingarna byggde snabba och starka skepp som kunde segla både på öppet hav och i grunda floder. Långskeppet, som var smalt och hade en drake i fören, användes för krigsresor. Knarren var bredare och användes för att frakta varor och människor.

Österut reste vikingar från nuvarande Sverige längs Rysslands floder ända till Konstantinopel, som idag heter Istanbul. Där handlade de med siden, kryddor och silver. En del blev livvakter åt den bysantinske kejsaren och kallades varjager.

Västerut seglade vikingar från Norge och Danmark till Island, Grönland och till och med Nordamerika. Det var Leif Eriksson som runt år 1000 nådde en plats han kallade Vinland, troligen i nuvarande Kanada. Det var nästan fem hundra år innan Columbus kom till Amerika.

Vikingarna tog med sig mer än varor hem. De spred sin kultur, sitt språk och sina hantverk. Många engelska ord har nordiskt ursprung, och i Frankrike gav vikingarna namn åt Normandie — 'nordmännens land'.

Men vikingatiden tog slut runt år 1100. Skandinavien blev kristet, kungadömen växte fram och de stora resorna upphörde. Men arvet lever kvar i språk, ortsnamn och berättelser runt hela världen.`,
    analysisQuestions: [
      "Vilka olika roller hade vikingarna enligt texten?",
      "Hur långt reste vikingarna? Nämn platser åt öster och väster.",
      "Texten säger att vikingarna nådde Amerika före Columbus. Varför är det viktigt?",
      "Jämför texten med en annan faktatext. Vad är lika och vad skiljer sig?",
    ],
    structure:
      "Inledning som utmanar vanliga föreställningar. Stycken om skepp, östliga resor, västliga resor, kulturellt arv och avslutning med vikingatagens slut. Kronologiskt och geografiskt organiserad.",
    languageFeatures:
      "Berättande stil blandat med fakta. Förklarande parenteser (som idag heter Istanbul). Tidsangivelser och geografiska hänvisningar. Sambandsord som 'men', 'dessutom'. Lagom komplexitet för mellanstadiet.",
    skrivverkstadLink: "/skrivverkstad/faktatext",
    skrivverkstadLabel: "Skrivverkstad: Faktatext",
  },
  {
    slug: "regnskog-jordens-lungor",
    title: "Regnskog — jordens lungor",
    category: "faktatext",
    categoryLabel: "Faktatext",
    difficulty: "hogstadiet",
    difficultyLabel: "Högstadiet",
    content: `Tropiska regnskogar täcker cirka sex procent av jordens yta men hyser mer än hälften av alla kända arter. De producerar syre, binder koldioxid och reglerar globala vädermönster. Metaforen 'jordens lungor' är ingen överdrift — regneskogarna spelar en nyckelroll för planetens klimat och biologiska mångfald.

De mest kända regnskogsområdena finns i Amazonas, Kongobäckenet och Sydostasien. Amazonas regnskog ensam producerar ungefär tjugo procent av jordens syre och innehåller tio procent av alla arter på planeten. Ekosystemet är så komplext att forskare uppskattar att miljoner arter ännu inte har identifierats.

Regnskogens struktur är uppdelad i skikt. Kronlagret högst upp fångar det mesta av solljuset. Under det finns mellanskiktet med mindre träd och klätterväxter. Markskiktet är mörkt och fuktigt, hem för svampar, insekter och nedbrytare. Varje skikt bildar sin egen ekologisk nisch med anpassade arter.

Avskogningen är det mest akuta hotet. Varje minut försvinner regnskog motsvarande ungefär trettio fotbollsplaner, huvudsakligen till förmån för boskapsuppfödning, sojaplantager och palmolja. När skogen försvinner frigörs bunden koldioxid, lokala nederbördsmönster rubbas och arter utrotas.

Urfolk som levt i regnskogen i årtusenden besitter ovärderlig kunskap om ekosystemen. Forskning visar att områden som förvaltas av urbefolkningar har lägre avskogningstakt. Ändå hotas dessa gruppers markrättigheter av ekonomiska intressen.

Att bevara regnskogen handlar inte om altruism — det handlar om självbevarelsedrift. Ett klimat i balans och biologisk mångfald är förutsättningar som hela mänskligheten är beroende av.`,
    analysisQuestions: [
      "Vilka funktioner fyller regnskogen enligt texten? Lista minst fyra.",
      "Hur använder texten siffror och jämförelser för att göra fakta konkreta?",
      "Varför nämner texten urfolk? Vilken koppling har det till regnksogens bevarande?",
      "Diskutera avslutningens påstående att bevarande handlar om 'självbevarelsedrift'. Håller du med?",
    ],
    structure:
      "Inledning med fakta och metafor. Geografisk överblick, biologisk struktur, hot, urfolksperspektiv och avslutning med argumenterande inslag. Progression från beskrivning till problemanalys.",
    languageFeatures:
      "Informativt med inslag av argumentation. Siffror och jämförelser (trettio fotbollsplaner). Facktermer som ekologisk nisch och kronlager. Sambandsord som strukturerar. Retorisk avslutning.",
    skrivverkstadLink: "/skrivverkstad/faktatext",
    skrivverkstadLabel: "Skrivverkstad: Faktatext",
  },
];
