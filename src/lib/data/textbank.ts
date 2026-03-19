export type TextCategory =
  | "kronika"
  | "argumenterande"
  | "novell"
  | "historisk"
  | "utredande";

export type DifficultyLevel = "mellanstadiet" | "hogstadiet" | "gymnasiet";

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
};

export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
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
];
