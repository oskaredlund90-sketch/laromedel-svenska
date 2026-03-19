export type TextCategory =
  | "kronika"
  | "argumenterande"
  | "novell"
  | "historisk"
  | "utredande"
  | "berattande"
  | "faktatext";

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
];
