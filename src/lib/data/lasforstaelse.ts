import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type QuestionLevel = "hitta" | "tolka" | "reflektera";

export interface ReadingQuestion {
  id: string;
  level: QuestionLevel;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface ReadingText {
  id: string;
  ageGroup: AgeGroup;
  title: string;
  passage: string;
  questions: ReadingQuestion[];
}

// ---------------------------------------------------------------------------
// Labels
// ---------------------------------------------------------------------------

export const LEVEL_LABELS: Record<QuestionLevel, string> = {
  hitta: "Hitta i texten",
  tolka: "Tolka och dra slutsatser",
  reflektera: "Reflektera och värdera",
};

// ---------------------------------------------------------------------------
// Data — Lågstadiet
// ---------------------------------------------------------------------------

const lagstadietTexts: ReadingText[] = [
  {
    id: "las-lag-1",
    ageGroup: "lagstadiet",
    title: "Ekorren i parken",
    passage:
      "Nora och hennes bror Albin gick till parken en solig höstdag. Löven på träden hade blivit gula och röda. " +
      "Plötsligt stannade Albin och pekade. På en stubbe satt en liten ekorre. Den höll en ekollon i sina små tassar " +
      "och åt snabbt med små rörelser. Nora tog ett steg framåt, men ekorren tittade upp och sprang iväg. " +
      "Den klättrade uppför en stor ek och försvann in i ett hål högt upp i stammen. " +
      '"Varför sprang den?" frågade Nora. ' +
      '"Den blev rädd," sa Albin. "Men titta, den kikar på oss." ' +
      "Nora tittade upp. Ekorrens lilla huvud stack ut ur hålet. Den verkade nyfiken men vågade inte komma ner. " +
      "Barnen satte sig på en bänk och väntade. Efter en lång stund kom ekorren ner igen och hämtade ett nytt ekollon. " +
      "Den tittade på dem men sprang inte iväg den här gången. " +
      '"Den börjar lita på oss," viskade Albin.',
    questions: [
      {
        id: "las-lag-1-q1",
        level: "hitta",
        prompt: "Vad höll ekorren i sina tassar?",
        options: ["En nöt", "Ett ekollon", "En pinne", "Ett löv"],
        correct: 1,
        explanation:
          "I texten står det att ekorren höll \"en ekollon i sina små tassar\". Svaret finns direkt i texten.",
      },
      {
        id: "las-lag-1-q2",
        level: "tolka",
        prompt: "Varför kom ekorren inte ner på en gång när barnen satt på bänken?",
        options: [
          "Den sov i sitt hål",
          "Den var fortfarande lite rädd för dem",
          "Den hade inga fler ekollon att hämta",
          "Albin skrämde den med ett ljud",
        ],
        correct: 1,
        explanation:
          "Ekorren gömde sig i hålet och kikade ut men vågade inte komma ner. Det visar att den fortfarande var försiktig och lite rädd.",
      },
      {
        id: "las-lag-1-q3",
        level: "reflektera",
        prompt: "Vad kan man lära sig av hur Nora och Albin betedde sig mot ekorren?",
        options: [
          "Att djur gillar att man springer mot dem",
          "Att man ska fånga djur och ta hem dem",
          "Att djur kan bli trygga om man är lugn och tålmodig",
          "Att ekorrar inte är rädda för människor",
        ],
        correct: 2,
        explanation:
          "Barnen satte sig stilla och väntade, och till slut vågade ekorren komma ner. Det visar att tålamod och lugn gör att djur kan känna sig tryggare.",
      },
    ],
  },

  {
    id: "las-lag-2",
    ageGroup: "lagstadiet",
    title: "Den nya i klassen",
    passage:
      "En dag kom det en ny elev till klass 2B. Han hette Sam och hade mörkt hår och stora bruna ögon. " +
      "Fröken sa att han hade flyttat från en annan stad. Sam sa ingenting. Han satte sig vid det tomma bordet längst bak. " +
      "På rasten stod Sam ensam vid staketet och tittade på de andra barnen som lekte. " +
      "Maja såg honom stå där. Hon sprang fram och frågade om han ville vara med och leka. " +
      "Sam skakade på huvudet och tittade ner i marken. Maja blev inte ledsen. Istället satte hon sig bredvid honom " +
      "vid staketet. De sa ingenting på en stund. " +
      '"Jag gillar din ryggsäck," sa Maja till slut. Den var blå med ett rymdskepp på. ' +
      "Sam tittade upp. Ett litet leende dök upp i hans ansikte. " +
      '"Jag gillar rymden," sa han tyst. ' +
      '"Jag med!" sa Maja. "Vill du se min bok om planeter efter rasten?" ' +
      "Sam nickade. Det var första gången han log den dagen.",
    questions: [
      {
        id: "las-lag-2-q1",
        level: "hitta",
        prompt: "Var stod Sam på rasten?",
        options: ["I sandlådan", "Vid staketet", "Vid gungan", "Inne i klassrummet"],
        correct: 1,
        explanation:
          "I texten står det att Sam stod \"ensam vid staketet\". Svaret finns direkt i texten.",
      },
      {
        id: "las-lag-2-q2",
        level: "tolka",
        prompt: "Varför sa Sam nej först när Maja frågade om han ville leka?",
        options: [
          "Han tyckte inte om Maja",
          "Han var blyg och osäker i sin nya skola",
          "Han hade ont i magen",
          "Han ville hellre läsa en bok",
        ],
        correct: 1,
        explanation:
          "Sam var ny och kände ingen. Att titta ner i marken och inte vilja vara med visar att han var blyg och osäker, inte att han var elak eller ointresserad.",
      },
      {
        id: "las-lag-2-q3",
        level: "reflektera",
        prompt: "Vad var det som gjorde att Sam till slut vågade prata?",
        options: [
          "Fröken tvingade honom",
          "Maja gav inte upp utan var vänlig och tålmodig",
          "De andra barnen kom och hämtade honom",
          "Han blev hungrig och ville ha mat",
        ],
        correct: 1,
        explanation:
          "Maja sprang inte iväg när Sam sa nej. Hon satte sig bredvid honom och hittade något att prata om. Hennes tålamod och vänlighet gjorde att Sam kände sig trygg nog att öppna sig.",
      },
    ],
  },

  {
    id: "las-lag-3",
    ageGroup: "lagstadiet",
    title: "Mormors pannkakor",
    passage:
      "Varje söndag brukade Theo åka till mormor. Det bästa med söndagarna var mormors pannkakor. " +
      "Mormor gjorde alltid smeten själv. Hon vispade mjöl, ägg och mjölk i en stor bunke medan Theo fick röra. " +
      '"Du är min bästa hjälpreda," sa mormor och klappade honom på kinden. ' +
      "Sedan stekte mormor pannkakorna i en gammal svart panna. Pannkakorna blev alltid perfekt runda och gyllene. " +
      "Theo fick ha sylt och grädde på sina. Han tog alltid tre stycken. " +
      "En söndag var mormor förkyld. Theo och mamma bestämde sig för att göra pannkakor hemma istället. " +
      "De följde mormors recept, men pannkakorna blev inte riktigt likadana. De var lite tjockare och inte lika runda. " +
      '"De smakar inte som mormors," sa Theo ledset. ' +
      "Mamma kramade honom. \"Det är för att det saknas en hemlig ingrediens,\" sa hon. " +
      '"Vilken då?" frågade Theo. ' +
      '"Mormors kärlek," sa mamma och log.',
    questions: [
      {
        id: "las-lag-3-q1",
        level: "hitta",
        prompt: "Hur många pannkakor brukade Theo äta?",
        options: ["En", "Två", "Tre", "Fyra"],
        correct: 2,
        explanation:
          "I texten står det att Theo \"tog alltid tre stycken\". Svaret finns direkt i texten.",
      },
      {
        id: "las-lag-3-q2",
        level: "tolka",
        prompt: "Varför blev inte pannkakorna likadana hemma?",
        options: [
          "De använde fel recept",
          "Mamma och Theo hade inte övat lika mycket som mormor",
          "De hade inget mjöl hemma",
          "Theo ville inte hjälpa till",
        ],
        correct: 1,
        explanation:
          "De följde samma recept, men mormor har stekt pannkakor många gånger och har övning. Det handlar också om att upplevelsen hos mormor gör att det känns speciellt.",
      },
      {
        id: "las-lag-3-q3",
        level: "reflektera",
        prompt: "Vad menade mamma med \"mormors kärlek\" som hemlig ingrediens?",
        options: [
          "Att mormor hade en hemlig krydda",
          "Att maten smakar bättre när någon man älskar lagar den med omtanke",
          "Att mormor köpte dyrare mjöl",
          "Att Theo bara fick äta pannkakor hos mormor",
        ],
        correct: 1,
        explanation:
          "Den hemliga ingrediensen är inte något man kan köpa. Mamma menar att det som gör mormors pannkakor speciella är känslan av att vara hos mormor och att mormor lagar maten med kärlek.",
      },
    ],
  },

  {
    id: "las-lag-4",
    ageGroup: "lagstadiet",
    title: "Den första snön",
    passage:
      "Astrid vaknade och det var tyst utanför fönstret. Det brukade höras bilar och fåglar, men idag var allt stilla. " +
      "Hon drog undan gardinen och flämtade till. Hela världen var vit! Snö täckte taken, gatan och trädgårdens buskar. " +
      "Det såg ut som om någon hade lagt ett stort vitt täcke över allting. " +
      "Astrid klädde på sig så fort hon kunde. Hon tog på mössa, vantar och sin tjocka jacka. " +
      "Ute var luften kall mot kinderna. Snön knarrade under hennes stövlar. " +
      "Astrid lade sig ner på rygg i snön och rörde armarna upp och ner. När hon reste sig försiktigt fanns det " +
      "en ängel i snön. Hon stod och tittade på den och log. " +
      "Grannens hund Sixten kom springande och hoppade rakt igenom snöängeln. " +
      "Astrid skrattade högt. Det var okej. Hon kunde alltid göra en ny. " +
      "Det var den bästa morgonen hela hösten.",
    questions: [
      {
        id: "las-lag-4-q1",
        level: "hitta",
        prompt: "Vad hade Astrid på sig när hon gick ut?",
        options: [
          "Shorts och t-shirt",
          "Mössa, vantar och tjock jacka",
          "Bara sin pyjamas",
          "Regnkläder och gummistövlar",
        ],
        correct: 1,
        explanation:
          "I texten står det att Astrid \"tog på mössa, vantar och sin tjocka jacka\". Svaret finns direkt i texten.",
      },
      {
        id: "las-lag-4-q2",
        level: "tolka",
        prompt: "Varför var det så tyst utanför fönstret på morgonen?",
        options: [
          "Alla sov fortfarande",
          "Snön dämpar ljud och gör allt tystare",
          "Det var mitt i natten",
          "Fönstret var stängt",
        ],
        correct: 1,
        explanation:
          "Snö absorberar ljud, och det brukar bli ovanligt tyst när det har snöat. Astrid märkte att det var tystare än vanligt, och sedan såg hon att det hade snöat.",
      },
      {
        id: "las-lag-4-q3",
        level: "reflektera",
        prompt: "Varför blev inte Astrid ledsen när hunden förstörde snöängeln?",
        options: [
          "Hon hade inte lagt ner någon möda på ängeln",
          "Hon tyckte det var roligt och visste att hon kunde göra en ny",
          "Hon var rädd för hunden",
          "Hon ville gå in och äta frukost",
        ],
        correct: 1,
        explanation:
          "Astrid skrattade istället för att bli ledsen. Hon förstod att snöänglar är enkla att göra om, och det roliga var stunden, inte att ängeln skulle vara kvar för alltid.",
      },
    ],
  },

  {
    id: "las-lag-5",
    ageGroup: "lagstadiet",
    title: "Biblioteksmysteriet",
    passage:
      "I klass 2A hade någon lämnat en hemlig present i bokhyllan. Det var en liten bok med grönt omslag och guldbokstäver. " +
      "Ingen visste vem som hade lagt den där. Inuti stod det: \"Till den som hittar mig. Läs mig och skicka mig vidare.\" " +
      "Ines hittade boken först. Hon läste den på en eftermiddag. Den handlade om en flicka som reste till månen. " +
      "Nästa dag lade Ines tillbaka boken i hyllan med en lapp: \"Jag har läst den. Nu är det din tur!\" " +
      "Sedan hittade Kevin boken. Han läste den också och skrev en egen lapp: \"Bästa boken jag läst! Vem lade den här?\" " +
      "Snart hade halva klassen läst boken. Alla lapparna låg i en hög inuti omslaget. " +
      "Till slut berättade fröken att det var hon som hade lagt dit boken. " +
      '"Jag ville visa att en bok kan resa från person till person," sa hon. "Och att läsning är roligare när man delar den."',
    questions: [
      {
        id: "las-lag-5-q1",
        level: "hitta",
        prompt: "Vem hittade boken först?",
        options: ["Kevin", "Fröken", "Ines", "Ingen vet"],
        correct: 2,
        explanation:
          "I texten står det att \"Ines hittade boken först\". Svaret finns direkt i texten.",
      },
      {
        id: "las-lag-5-q2",
        level: "tolka",
        prompt: "Varför lade Ines tillbaka boken istället för att behålla den?",
        options: [
          "Hon tyckte inte om boken",
          "Fröken sa att hon måste lämna tillbaka den",
          "Hon ville att fler skulle få läsa den, som det stod i boken",
          "Hon hade redan en likadan bok hemma",
        ],
        correct: 2,
        explanation:
          "I boken stod det \"läs mig och skicka mig vidare\". Ines följde den uppmaningen och la till en egen lapp så att nästa person skulle bli nyfiken.",
      },
      {
        id: "las-lag-5-q3",
        level: "reflektera",
        prompt: "Varför tror du att fröken valde att göra det som ett mysterium istället för att bara ge klassen boken?",
        options: [
          "Hon hade glömt att berätta",
          "Mysteriet gjorde barnen mer nyfikna och ville läsa av egen vilja",
          "Hon ville att bara en elev skulle läsa boken",
          "Hon hade inte tid att prata om boken",
        ],
        correct: 1,
        explanation:
          "Genom att göra det till ett mysterium blev barnen nyfikna och ville själva upptäcka boken. Det gjorde läsningen till ett äventyr istället för en uppgift.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Mellanstadiet
// ---------------------------------------------------------------------------

const mellanstadietTexts: ReadingText[] = [
  // -----------------------------------------------------------------------
  // 1. Äventyr/mysterium
  // -----------------------------------------------------------------------
  {
    id: "las-mel-1",
    ageGroup: "mellanstadiet",
    title: "Ljuset i fyren",
    passage:
      "Alla i byn visste att fyren på Stormudden hade varit släckt i trettio år. Ingen bodde där längre, och stigen dit var " +
      "övervuxen av björnbär och nässlor. Ändå påstod fiskaren Gustav att han sett ett ljus i fyrtornet tre nätter i rad. " +
      "\"Jag vet vad jag såg,\" sa han på affären en morgon. Folk log och skakade på huvudet. " +
      "Men tolv-åriga Saga och hennes kompis Ville kunde inte släppa tanken. En lördag packade de ficklampor, " +
      "en karta och smörgåsar i sina ryggsäckar och cyklade ut mot udden. " +
      "Stigen var precis så igenvuxen som alla sagt. De fick lämna cyklarna och klättra över omkullfallna trädstammar. " +
      "Till slut stod de framför fyren. Dörren var inte låst — den hade rostat sönder vid gångjärnen. " +
      "Innanför var det fuktigt och mörkt. Spiraltrappan uppåt knakade under deras fötter. " +
      "Längst upp, i det runda rummet med de stora glasrutorna, hittade de förklaringen. " +
      "Någon hade ställt en liten solcellslampa på fönsterbrädan. Bredvid den låg ett slitet anteckningsblock. " +
      "På första sidan stod det: \"Jag tänder ljuset åt morfar. Han var fyrvaktare här i fyrtio år. Ingen ska glömma honom.\" " +
      "Under texten fanns ett namn: Emil, 14 år. Saga och Ville tittade på varandra. " +
      "De visste inte vem Emil var, men de förstod honom. " +
      "På vägen hem stannade Saga och plockade björnbär vid stigen. " +
      "\"Ska vi berätta för Gustav?\" frågade Ville. " +
      "Saga funderade. \"Ja,\" sa hon. \"Men inte för alla andra. Vissa hemligheter mår bäst av att bara delas med dem som bryr sig.\"",
    questions: [
      {
        id: "las-mel-1-q1",
        level: "hitta",
        prompt: "Hur länge hade fyren på Stormudden varit släckt?",
        options: ["Tio år", "Tjugo år", "Trettio år", "Fyrtio år"],
        correct: 2,
        explanation:
          "I textens första mening står det att fyren hade varit släckt i trettio år.",
      },
      {
        id: "las-mel-1-q2",
        level: "hitta",
        prompt: "Vad hittade Saga och Ville längst upp i fyren?",
        options: [
          "En gammal fyrlykta som fortfarande fungerade",
          "En solcellslampa och ett slitet anteckningsblock",
          "En ficklampa och en karta",
          "En trasig radio och en sovsäck",
        ],
        correct: 1,
        explanation:
          "Texten berättar att det stod en solcellslampa på fönsterbrädan och att ett slitet anteckningsblock låg bredvid.",
      },
      {
        id: "las-mel-1-q3",
        level: "tolka",
        prompt: "Varför hade Emil ställt en lampa i fyren?",
        options: [
          "Han ville skrämma byborna",
          "Han ville hedra sin morfar som hade arbetat där",
          "Han hade gått vilse och behövde ljus",
          "Han använde fyren som hemlig klubblokal",
        ],
        correct: 1,
        explanation:
          "Emils anteckning förklarar att hans morfar var fyrvaktare i fyrtio år och att han tände ljuset för att ingen skulle glömma honom. Det handlar om att hedra ett minne.",
      },
      {
        id: "las-mel-1-q4",
        level: "reflektera",
        prompt: "Varför ville Saga bara berätta för Gustav och inte för alla andra?",
        options: [
          "Hon var rädd att de andra skulle bli arga",
          "Hon tyckte att hemligheten förtjänade att skyddas, eftersom den var personlig för Emil",
          "Hon ville ha fyren för sig själv",
          "Hon trodde inte att de andra skulle förstå vägen dit",
        ],
        correct: 1,
        explanation:
          "Saga sa att vissa hemligheter mår bäst av att delas med dem som bryr sig. Gustav brydde sig — han hade sett ljuset och undrat. De andra hade bara skrattat. Saga ville skydda Emils fina gest.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 2. Realistisk vardag
  // -----------------------------------------------------------------------
  {
    id: "las-mel-2",
    ageGroup: "mellanstadiet",
    title: "Den nya eleven",
    passage:
      "Liam märkte henne direkt när hon steg in genom dörren till klassrummet. Hon hade mörkt, lockigt hår " +
      "och bar en röd jacka som var lite för stor. Fröken Lisa sa att hon hette Amira och att hon " +
      "hade flyttat från Göteborg. Amira fick platsen bredvid Liam. " +
      "De första dagarna sa hon nästan ingenting. På rasterna satt hon på bänken vid idrottshallen " +
      "och läste en bok. Liam ville prata med henne men visste inte vad han skulle säga. " +
      "Hans kompis Oscar sa: \"Varför sitter hon alltid ensam? Det är väl bara att gå dit.\" " +
      "Men Liam mindes hur det hade känts när han själv bytte skola i trean. Han visste att det " +
      "inte räckte med att någon sa hej en gång. Man behövde bli vald, om och om igen. " +
      "Nästa dag på lunchen ställde Liam sin bricka bredvid Amiras utan att fråga. " +
      "\"Vad läser du?\" frågade han. Hon höll upp boken: det var en berättelse om en flicka som seglade " +
      "ensam runt jorden. \"Den är bra,\" sa Amira. \"Hon blir rädd ibland men hon slutar aldrig.\" " +
      "Liam nickade. \"Låter som en tuff typ.\" " +
      "De pratade inte så mycket mer den dagen. Men dagen efter satte sig Liam där igen, och dagen efter det. " +
      "Den fjärde dagen hade Amira sparat en plats åt honom. " +
      "Det var en liten sak — en plats vid ett bord i en stökig matsal. Men Liam förstod att det " +
      "betydde något stort. Det betydde att han inte bara hade sagt hej. Han hade kommit tillbaka. " +
      "Och för någon som just börjat om på nytt var det precis det som behövdes.",
    questions: [
      {
        id: "las-mel-2-q1",
        level: "hitta",
        prompt: "Varifrån hade Amira flyttat?",
        options: ["Stockholm", "Malmö", "Göteborg", "Uppsala"],
        correct: 2,
        explanation:
          "Fröken Lisa berättade att Amira hade flyttat från Göteborg. Svaret finns direkt i texten.",
      },
      {
        id: "las-mel-2-q2",
        level: "tolka",
        prompt: "Varför tyckte Liam att det inte räckte med att säga hej en gång?",
        options: [
          "Han hade själv upplevt att byta skola och visste att man behöver bli vald flera gånger",
          "Han hade läst om det i en bok",
          "Fröken Lisa hade sagt det till honom",
          "Han ville inte verka för ivrig",
        ],
        correct: 0,
        explanation:
          "Texten berättar att Liam mindes hur det kändes när han själv bytte skola i trean. Hans egen erfarenhet gav honom förståelse för vad Amira behövde.",
      },
      {
        id: "las-mel-2-q3",
        level: "tolka",
        prompt: "Vad handlade boken som Amira läste om, och varför kan det vara betydelsefullt?",
        options: [
          "En flicka som seglade runt jorden — det kan spegla Amiras egen känsla av att vara ensam men inte ge upp",
          "En flicka som seglade runt jorden — Amira vill bli seglare",
          "En flicka som seglade runt jorden — den var en skoluppgift",
          "En flicka som seglade runt jorden — den låg på bänken av en slump",
        ],
        correct: 0,
        explanation:
          "Amira valde ut att flickan \"blir rädd ibland men aldrig slutar\". Det tyder på att hon kände igen sig i karaktären — själv i en ny situation men beredd att kämpa vidare.",
      },
      {
        id: "las-mel-2-q4",
        level: "reflektera",
        prompt: "Vad menar texten med att en sparad plats \"betydde något stort\"?",
        options: [
          "Att Amira var snål med platser",
          "Att platsen var den bästa i matsalen",
          "Att Amira genom den lilla gesten visade att hon räknade med Liam — att han blivit viktig för henne",
          "Att matsalen var så full att det var svårt att hitta plats",
        ],
        correct: 2,
        explanation:
          "Att spara en plats är en handling som säger: jag vill att du ska vara här. För Amira, som just börjat om, var det ett steg från ensamhet till gemenskap.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 3. Natur/vetenskap
  // -----------------------------------------------------------------------
  {
    id: "las-mel-3",
    ageGroup: "mellanstadiet",
    title: "Bävrarna vid Lillån",
    passage:
      "I skogen bakom Korsberga by rinner en å som heter Lillån. Den är inte bred — kanske tre meter " +
      "på det smalaste stället. Men våren 2024 hände något som förändrade hela området. Bävrar flyttade in. " +
      "Först märkte ingen något. Sedan upptäckte en bonde att vattnet steg på hans åkermark. " +
      "Han gick uppströms och hittade en damm byggd av grenar, lera och stenar. " +
      "Den var nästan en meter hög och sträckte sig tvärs över ån. " +
      "Bonden blev arg. Han ringde kommunen och ville att dammen skulle rivas. Men kommunekologen Anna kom " +
      "och förklarade något oväntat: bäverdammen var faktiskt bra för naturen. " +
      "\"Bakom dammen bildas en liten sjö,\" sa Anna. \"I den sjön börjar grodor leka, trollsländor kläckas " +
      "och växter rota sig. Fiskar får lugna vatten att växa upp i. Fåglar hittar nya platser att bygga bo.\" " +
      "Anna berättade också att bäverdammar hjälper till vid torka. Vattnet lagras istället för att rinna bort, " +
      "och det renas när det sakta sipprar genom jord och växter. " +
      "Bonden var fortfarande orolig för sin åker. Kommunen hjälpte till att gräva en liten kanal som " +
      "ledde bort en del av vattnet så att åkern inte svämmades över. Dammen fick stå kvar. " +
      "Ett halvår senare hade området kring Lillån fler fågelarter än någonsin. " +
      "Det som först såg ut som ett problem visade sig vara en gåva — byggd av ett djur " +
      "som inte hade en aning om att det hjälpte hela ekosystemet.",
    questions: [
      {
        id: "las-mel-3-q1",
        level: "hitta",
        prompt: "Vad var bäverdammen byggd av?",
        options: [
          "Bara lera",
          "Grenar, lera och stenar",
          "Träplankor och spik",
          "Sand och grus",
        ],
        correct: 1,
        explanation:
          "Texten beskriver att dammen var byggd av grenar, lera och stenar.",
      },
      {
        id: "las-mel-3-q2",
        level: "tolka",
        prompt: "Varför kallar texten bäverdammen en \"gåva\"?",
        options: [
          "Bävern gav dammen till bonden",
          "Dammen skapade livsmiljöer för många arter och renade vatten — den var värdefull för hela naturen",
          "Kommunen gav dammen till byn som present",
          "Dammen var dekorativ och fin att titta på",
        ],
        correct: 1,
        explanation:
          "Ordet \"gåva\" är bildsligt. Dammen gav naturen groddammar, fiskvatten, fågelbon och vattenrening — fördelar som ingen hade planerat.",
      },
      {
        id: "las-mel-3-q3",
        level: "tolka",
        prompt: "Hur löste kommunen konflikten mellan bondens behov och naturens?",
        options: [
          "De rev dammen",
          "De flyttade bävern till en annan å",
          "De grävde en kanal som ledde bort vatten från åkern men lät dammen stå kvar",
          "De betalade bonden för att sluta odla",
        ],
        correct: 2,
        explanation:
          "Kommunen hittade en kompromiss: en kanal som skyddade åkern utan att förstöra dammen. Både bonden och naturen fick det de behövde.",
      },
      {
        id: "las-mel-3-q4",
        level: "reflektera",
        prompt: "Vad kan vi lära oss av berättelsen om bävern och bonden?",
        options: [
          "Att djur alltid vet bäst",
          "Att det som först verkar vara ett problem kan visa sig ha stora fördelar om man undersöker det noga",
          "Att bönder inte ska bo nära åar",
          "Att kommunen alltid har rätt",
        ],
        correct: 1,
        explanation:
          "Berättelsen visar att bondens första reaktion var att riva dammen, men med kunskap och samarbete hittade man en lösning som var bättre för alla. Ibland behöver vi stanna upp och förstå innan vi agerar.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 4. Historisk
  // -----------------------------------------------------------------------
  {
    id: "las-mel-4",
    ageGroup: "mellanstadiet",
    title: "Barnen i gruvan",
    passage:
      "I mitten av 1800-talet var Sverige ett fattigt land. Många familjer hade inte råd att skicka alla barn till skolan. " +
      "Istället arbetade barnen — i fabriker, på bondgårdar och i gruvor. " +
      "I Bergslagen, mitt i Sverige, fanns hundratals gruvor där man bröt järnmalm. " +
      "Barnen som arbetade där kallades gruvpojkar, fast även flickor förekom. De kunde vara så unga som åtta år. " +
      "Deras jobb var att bära malm i tunga korgar genom smala gångar djupt under jorden. " +
      "Det var mörkt, kallt och fuktigt. Det enda ljuset kom från talgljus som fästs på väggarna. " +
      "Luften var dålig och dammet la sig i lungorna. " +
      "En dag i april 1852 skrev en präst i Norberg ett brev till kungen. " +
      "Prästen hette Johan Edvard Falk och han hade besökt en gruva och blivit förfärad. " +
      "Han beskrev hur barn med krökta ryggar släpade sten i mörker tolv timmar om dagen. " +
      "\"Dessa barn har ingen barndom,\" skrev han. \"De har bytt lekens glädje mot gruvans skugga.\" " +
      "Brevet ledde inte till omedelbar förändring. Men det lästes högt i riksdagen och " +
      "fick fler människor att börja tala om barns rättigheter. " +
      "År 1881, nästan trettio år senare, kom Sveriges första lag som begränsade barnarbete. " +
      "Barn under tolv år fick inte längre arbeta i gruvor eller fabriker. " +
      "Det tog lång tid. Men det började med en person som såg, reagerade och vägrade vara tyst. " +
      "Idag har svenska barn rätt att gå i skolan, leka och vara trygga. " +
      "Det är lätt att tro att det alltid har varit så. Men det har det inte.",
    questions: [
      {
        id: "las-mel-4-q1",
        level: "hitta",
        prompt: "Hur unga kunde barnen vara som arbetade i gruvorna?",
        options: ["Sex år", "Åtta år", "Tio år", "Tolv år"],
        correct: 1,
        explanation:
          "Texten anger att barnen kunde vara så unga som åtta år.",
      },
      {
        id: "las-mel-4-q2",
        level: "hitta",
        prompt: "Vilket år kom den första lagen som begränsade barnarbete i Sverige?",
        options: ["1852", "1865", "1881", "1900"],
        correct: 2,
        explanation:
          "Texten berättar att Sveriges första lag som begränsade barnarbete kom år 1881.",
      },
      {
        id: "las-mel-4-q3",
        level: "tolka",
        prompt: "Varför skrev prästen Johan Edvard Falk sitt brev till kungen?",
        options: [
          "Han ville ha mer pengar till sin kyrka",
          "Han blev upprörd över hur barnen behandlades och ville att det skulle förändras",
          "Han ville stänga gruvan för att den var olönsam",
          "Kungen hade bett om en rapport",
        ],
        correct: 1,
        explanation:
          "Texten säger att prästen blev \"förfärad\" och beskrev barnens situation i starka ord. Han drevs av medkänsla och vilja att förändra.",
      },
      {
        id: "las-mel-4-q4",
        level: "reflektera",
        prompt: "Varför avslutar texten med att det är \"lätt att tro att det alltid har varit så\"?",
        options: [
          "Författaren vill att vi ska sluta tänka på det",
          "Författaren vill påminna oss om att rättigheter inte kommer av sig själva utan måste kämpass för",
          "Författaren tycker att barn har det för bra idag",
          "Författaren vill att vi ska vara rädda",
        ],
        correct: 1,
        explanation:
          "Avslutningen uppmanar läsaren att inte ta sina rättigheter för givna. Skolan, leken och tryggheten är resultat av människor som stred för förändring.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 5. Fantasy/saga
  // -----------------------------------------------------------------------
  {
    id: "las-mel-5",
    ageGroup: "mellanstadiet",
    title: "Flickan som bytte skugga",
    passage:
      "I en liten by vid skogens kant levde Tuva, en flicka som alltid var tyst som en mus. " +
      "Hon vågade inte räcka upp handen i skolan, hon vågade inte sjunga och hon vågade absolut inte " +
      "säga emot när de andra bestämde. Hennes skugga var blek och liten, som om den knappt orkade hänga med henne. " +
      "En kväll när Tuva gick hem genom skogen hörde hon ett prassel i buskarna. " +
      "Fram klev en varelse som såg ut som en räv men med ögon som glödde grönt. " +
      "\"Jag är Skuggväxlaren,\" sa räven. \"Jag ser att din skugga är svag. Jag kan ge dig en ny — " +
      "stor och stark. Men du måste ge mig din röst i utbyte.\" " +
      "Tuva tvekade. Hon använde ju knappt sin röst ändå. Så hon nickade. " +
      "Räven blåste på henne och plötsligt var hennes skugga enorm. Den sträckte sig långt bakom henne " +
      "och såg ut som en jätte. Men när Tuva öppnade munnen kom inget ljud. " +
      "I skolan dagen efter gick alla undan för hennes stora skugga. Ingen retades med henne, " +
      "men ingen pratade med henne heller. Hon kunde inte svara när fröken frågade. " +
      "Hon kunde inte skratta åt Eriks vitsar. Hon kunde inte ropa på sin hund när hon kom hem. " +
      "Den tredje kvällen sprang Tuva tillbaka till skogen. Räven väntade. " +
      "\"Jag vill ha tillbaka min röst,\" formade hon med läpparna. " +
      "Räven lutade huvudet. \"Då förlorar du den stora skuggan.\" " +
      "Tuva nickade utan att tveka. Räven blåste igen, och rösten strömmade tillbaka som vatten. " +
      "Skuggan krympte. Men den var inte lika blek som förut. " +
      "\"Varför?\" frågade Tuva förvånat. Hennes röst lät klarare än hon mindes. " +
      "\"För att du valde den,\" sa räven. \"En skugga som man väljer själv är starkare än en man fått av någon annan.\" " +
      "Tuva gick hem genom skogen. Hon sjöng inte. Inte ännu. Men hon visste att hon skulle kunna.",
    questions: [
      {
        id: "las-mel-5-q1",
        level: "hitta",
        prompt: "Vad fick Tuva i utbyte mot sin röst?",
        options: [
          "Osynlighet",
          "En stor och stark skugga",
          "Förmågan att flyga",
          "Ett magiskt svärd",
        ],
        correct: 1,
        explanation:
          "Räven erbjöd Tuva en ny skugga — stor och stark — i utbyte mot hennes röst.",
      },
      {
        id: "las-mel-5-q2",
        level: "tolka",
        prompt: "Varför var Tuvas skugga \"blek och liten\" i början av berättelsen?",
        options: [
          "Det var molnigt och solen lyste svagt",
          "Skuggan var en bild för Tuvas brist på självförtroende",
          "Hon var kortare än de andra barnen",
          "Det var ett magiskt förhäxande",
        ],
        correct: 1,
        explanation:
          "Skuggan är en symbol. En blek, liten skugga speglar att Tuva inte vågade ta plats eller göra sig hörd. Det är en metafor för hennes osäkerhet.",
      },
      {
        id: "las-mel-5-q3",
        level: "tolka",
        prompt: "Varför ångrade sig Tuva trots att ingen retades med henne längre?",
        options: [
          "Den stora skuggan var för tung att bära",
          "Hon insåg att en röst är mer värd än att se mäktig ut — utan röst var hon mer ensam än förut",
          "Räven hade lurat henne och skuggan var ful",
          "Fröken blev arg på henne",
        ],
        correct: 1,
        explanation:
          "Den stora skuggan gav yttre styrka men tog bort möjligheten till kontakt. Tuva kunde inte svara, skratta eller ropa — och det var värre än att bli retad.",
      },
      {
        id: "las-mel-5-q4",
        level: "reflektera",
        prompt: "Vad menar räven med att \"en skugga man väljer själv är starkare än en man fått av någon annan\"?",
        options: [
          "Att magiska skuggor alltid är tillfälliga",
          "Att verkligt självförtroende kommer inifrån, från egna val, inte från yttre makt",
          "Att rävar ger dåliga skuggor",
          "Att man aldrig ska byta saker med djur i skogen",
        ],
        correct: 1,
        explanation:
          "Rävens ord sammanfattar berättelsens budskap: att mod och självkänsla inte kan ges av någon annan. När Tuva aktivt valde sin röst tillbaka visade hon mod — och det gjorde henne starkare på riktigt.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Högstadiet
// ---------------------------------------------------------------------------

const hogstadietTexts: ReadingText[] = [
  // --- 6. Litterär fiktion ---
  {
    id: "las-hog-1",
    ageGroup: "hogstadiet",
    title: "Huset vid sjön",
    passage:
      "Sommarstugan hade stått tom i tre år när Alva äntligen vågade återvända. Grinden gnisslade " +
      "på samma sätt som förr, men ogräset hade vuxit sig högt mellan grusstenarna på gången och " +
      "de vita knutarna hade grånats av väder och vind. Hon stannade på trappen och lät blicken " +
      "vandra över sjön. Vattnet låg blankt och stilla i augustivärmen, precis som det hade gjort " +
      "den sista kvällen med farmor. De hade suttit på bryggan med fötterna i vattnet och farmor " +
      "hade berättat om krigsåren, om hur hon som sjuttonåring gömt sig i en källare i Warszawa " +
      "medan granater slog ner i gatan utanför. Alva hade lyssnat med vidöppna ögon, men inte " +
      "förstått. Inte på riktigt. Man kan inte förstå rädsla man aldrig känt, hade farmor sagt " +
      "och strukit henne över håret. Men du kan bära berättelsen vidare. Det är nog. " +
      "Nu stod Alva i hallen och kände doften av trä och gammalt tyg. Farmors yllekofta hängde " +
      "fortfarande på kroken vid dörren, som om hon bara hade gått ut för att vattna pelargonerna. " +
      "Alva tryckte ansiktet mot tyget och andades in. Lukten var svag men omistlig — lavendel, " +
      "kanel och någonting som inte hade något namn, bara en känsla av att vara hemma. På köksbordet " +
      "låg ett kuvert med hennes namn skrivet i farmors kantiga handstil. Brevet var daterat tre " +
      "veckor före hennes död, som om hon hade vetat. Alva satte sig vid bordet och lät fingrarna " +
      "följa bokstäverna innan hon öppnade det. Kära Alva, stod det. Du kommer hit när du är redo, " +
      "och då vill jag att du ska veta: det här huset är inte en plats. Det är ett minne som vägrar " +
      "försvinna. Ta hand om det, inte för min skull, utan för din egen. Världen kommer att försöka " +
      "få dig att glömma varifrån du kommer. Låt den inte lyckas. " +
      "Alva vek ihop brevet och lade det mot bröstet. Genom fönstret såg hon en häger lyfta från " +
      "vassarna vid stranden, långsamt och tungt, som om den bar hela sjöns tystnad på sina vingar. " +
      "Hon grät inte. I stället gick hon ut på bryggan, satte sig på samma plats som den där kvällen " +
      "och lät fötterna sjunka ner i det svala vattnet. Sjön tog emot henne utan frågor. Solen " +
      "sjönk sakta och himlen färgades i nyanser av koppar och lavendel. Alva tänkte att farmor " +
      "hade haft rätt: man behöver inte förstå allt man bär. Det räcker att man bär det vidare.",
    questions: [
      {
        id: "las-hog-1-q1",
        level: "tolka",
        prompt: "Vad symboliserar farmors yllekofta som fortfarande hänger på kroken?",
        options: [
          "Att ingen har städat stugan på länge",
          "Att farmors närvaro lever kvar trots hennes frånvaro",
          "Att Alva borde ta med sig koftan hem",
          "Att farmor var slarvig och glömde sina saker",
        ],
        correct: 1,
        explanation:
          "Koftan beskrivs som om farmor bara gått ut en stund. Det är en symbol för att " +
          "farmors närvaro finns kvar i huset — en bild av minne och fortsatt samhörighet trots döden.",
      },
      {
        id: "las-hog-1-q2",
        level: "reflektera",
        prompt: "Varför valde Alva att sätta sig på bryggan i slutet av texten?",
        options: [
          "Hon ville bada i sjön",
          "Hon återskapade minnet av den sista kvällen med farmor för att bearbeta sin sorg",
          "Hon väntade på att någon skulle komma och hälsa på",
          "Hon var trött efter resan och behövde vila",
        ],
        correct: 1,
        explanation:
          "Alva upprepar den sista gemensamma stunden med farmor — fötterna i vattnet, samma plats. " +
          "Det är ett sätt att knyta an till minnet och finna tröst, en del av hennes sorgeprocess.",
      },
      {
        id: "las-hog-1-q3",
        level: "tolka",
        prompt:
          "Farmor säger: \"Man kan inte förstå rädsla man aldrig känt.\" Vad menar hon?",
        options: [
          "Att Alva är för ung för att höra om kriget",
          "Att empati för andras lidande har gränser och att verklig förståelse kräver egen erfarenhet",
          "Att farmor inte vill prata om sina upplevelser",
          "Att rädsla är en känsla som bara finns i krig",
        ],
        correct: 1,
        explanation:
          "Farmor reflekterar över att det finns en skillnad mellan att höra om lidande och att ha " +
          "upplevt det. Samtidigt säger hon att det räcker att bära berättelsen vidare — man behöver " +
          "inte ha känt samma rädsla för att hålla minnet levande.",
      },
      {
        id: "las-hog-1-q4",
        level: "reflektera",
        prompt:
          "Texten avslutas med att Alva tänker att \"det räcker att man bär det vidare\". Vad betyder det i ett större sammanhang?",
        options: [
          "Att det är viktigt att ärva sommarstugor",
          "Att minnen och berättelser från tidigare generationer har värde även om vi inte fullt ut förstår dem",
          "Att man inte ska tänka på svåra saker",
          "Att Alva ska skriva en bok om farmor",
        ],
        correct: 1,
        explanation:
          "Textens centrala tema handlar om minnesbevarande och generationsöverbryggande berättande. " +
          "Man behöver inte ha levt genom samma erfarenheter för att ge dem vidare — det är " +
          "berättelsens kraft.",
      },
      {
        id: "las-hog-1-q5",
        level: "hitta",
        prompt: "Hur länge hade sommarstugan stått tom innan Alva återvände?",
        options: ["Ett år", "Två år", "Tre år", "Fem år"],
        correct: 2,
        explanation:
          "I textens första mening står det att stugan hade stått tom i tre år. Det är en uppgift " +
          "som går att hitta direkt i texten.",
      },
    ],
  },

  // --- 7. Realistisk/socialrealism ---
  {
    id: "las-hog-2",
    ageGroup: "hogstadiet",
    title: "Allt det osynliga",
    passage:
      "Varje morgon vaknade Yasmin till ljudet av grannens TV genom väggen. Lägenheten på " +
      "Bergsgatan var liten — två rum och kök — och väggarna var så tunna att hon kunde höra " +
      "när grannen hostade, när hans telefon ringde, när han pratade med sin katt. Hennes mamma " +
      "hade redan gått till sitt första jobb vid sex, det på äldreboendet, och skulle sedan gå " +
      "vidare till kvällspasset på restaurangen. De såg varandra en timme om dagen, ibland mindre. " +
      "Yasmin gjorde frukost själv — två skivor knäckebröd med margarin och en kopp te. Hon hade " +
      "lärt sig att hushålla tidigt. Pengarna räckte om man var noga, om man inte slösade, om man " +
      "inte fick för sig att önska sig saker. " +
      "I skolan satt hon längst fram i klassrummet. Inte för att hon var plugghäst, som Rasmus " +
      "brukade säga med ett snett leende, utan för att det var det enda sättet att stänga ute " +
      "bruset. Om hon satt längst fram kunde hon koncentrera sig på läraren, på orden, på det som " +
      "stod i boken. Bakom henne pågick ett ständigt mummel av skvaller, skratt och avbrott — en " +
      "social koreografi hon aldrig riktigt lärt sig stegen till. På rasterna stod hon ofta vid " +
      "fönstret i korridoren och läste. Inte för att hon inte ville ha vänner. Tvärtom. Men att " +
      "närma sig en grupp krävde en sorts lätthet som hon inte ägde. Hennes ryggsäck var för tung " +
      "av saker ingen kunde se. " +
      "En dag i november stannade Freja vid fönstret. Vad läser du, frågade hon och lutade sig " +
      "mot karmen som om det var den mest naturliga saken i världen. Yasmin visade omslaget — en " +
      "roman av Khaled Hosseini. Freja nickade och sa att hon hade läst den förra sommaren, att " +
      "den hade fått henne att gråta på tåget. De pratade i tio minuter. Det var inte mycket, men " +
      "för Yasmin var det som att någon hade öppnat ett fönster i ett rum som stått stängt för länge. " +
      "Luften strömmade in och hon märkte att hon hade hållit andan utan att veta om det. " +
      "Freja började sätta sig bredvid henne på rasterna. De pratade om böcker, ibland om annat. " +
      "Yasmin berättade inte allt — inte om mammas dubbla pass, inte om margarinskivorna, inte om " +
      "väggarna som var för tunna. Men hon berättade tillräckligt för att inte känna sig helt osynlig " +
      "längre. Och det, tänkte hon en kväll när hon satt i köket och väntade på att mamma skulle " +
      "komma hem, kanske var det viktigaste: att någon ser att man finns. Inte allt man bär. Bara " +
      "att man finns.",
    questions: [
      {
        id: "las-hog-2-q1",
        level: "tolka",
        prompt:
          "Vad menar berättaren med att Yasmins ryggsäck var \"för tung av saker ingen kunde se\"?",
        options: [
          "Att hon hade för många skolböcker",
          "Att hon bar på osynliga bördor som ekonomisk utsatthet och ensamhet",
          "Att hon hade dålig rygg",
          "Att hon gömde saker i sin väska",
        ],
        correct: 1,
        explanation:
          "Metaforen om den tunga ryggsäcken syftar på Yasmins osynliga bördor: fattigdom, ensamhet " +
          "och ansvar. Det är saker som inte syns utanpå men som påverkar hennes vardag.",
      },
      {
        id: "las-hog-2-q2",
        level: "tolka",
        prompt:
          "Varför berättar Yasmin inte allt för Freja — inte om margarinskivorna eller mammas jobb?",
        options: [
          "Hon vill inte att Freja ska tycka synd om henne eller definieras av sin ekonomiska situation",
          "Hon har glömt att berätta",
          "Hon tycker inte det är intressant",
          "Freja har redan sagt att hon inte vill höra om sådant",
        ],
        correct: 0,
        explanation:
          "Yasmin väljer medvetet vad hon delar. Det handlar om att hon vill mötas som person, inte " +
          "som ett socialt problem. Att berätta 'tillräckligt' innebär att hon styr berättelsen om sig själv.",
      },
      {
        id: "las-hog-2-q3",
        level: "reflektera",
        prompt:
          "Texten slutar med tanken att det viktigaste är \"att någon ser att man finns\". Vilken syn på gemenskap uttrycker det?",
        options: [
          "Att man måste ha många vänner för att må bra",
          "Att bli sedd och erkänd som människa är ett grundläggande behov, även utan att dela allt",
          "Att det är bäst att vara ensam",
          "Att vänskap handlar om att berätta alla sina hemligheter",
        ],
        correct: 1,
        explanation:
          "Textens avslutande reflektion pekar på att gemenskap inte kräver total öppenhet — det " +
          "räcker att bli sedd. Det uttrycker ett existentiellt behov av tillhörighet.",
      },
      {
        id: "las-hog-2-q4",
        level: "hitta",
        prompt: "Vilken bok läste Yasmin när Freja stannade vid fönstret?",
        options: [
          "En roman av Astrid Lindgren",
          "En roman av Khaled Hosseini",
          "En diktsamling av Karin Boye",
          "En deckare av Stieg Larsson",
        ],
        correct: 1,
        explanation:
          "Texten anger uttryckligen att Yasmin visade omslaget på en roman av Khaled Hosseini. " +
          "Det är en uppgift som finns direkt i texten.",
      },
      {
        id: "las-hog-2-q5",
        level: "tolka",
        prompt:
          "Bilden av att \"någon öppnat ett fönster i ett rum som stått stängt för länge\" — vad beskriver den?",
        options: [
          "Att det var varmt i korridoren",
          "Att samtalet med Freja bröt igenom Yasmins isolering och gav henne lättnad",
          "Att skolan behövde bättre ventilation",
          "Att Yasmin öppnade ett riktigt fönster",
        ],
        correct: 1,
        explanation:
          "Bilden är en metafor för hur Freja bryter Yasmins ensamhet. Det stängda rummet " +
          "representerar hennes isolering och den friska luften symboliserar kontakt och lättnad.",
      },
    ],
  },

  // --- 8. Argumenterande/debatttext ---
  {
    id: "las-hog-3",
    ageGroup: "hogstadiet",
    title: "Skärmen som stängde ute världen",
    passage:
      "Vi lever i en tid där den genomsnittliga tonåringen tillbringar mellan sex och åtta timmar " +
      "om dagen framför en skärm utanför skoltid. Sociala medier, strömningsplattformar och " +
      "mobilspel tävlar alla om vår uppmärksamhet, och de vinner. Frågan är vad vi förlorar. " +
      "Kritikerna menar att skärmtiden hotar ungas psykiska hälsa. Forskning från Karolinska " +
      "Institutet visar att ungdomar som använder sociala medier mer än tre timmar per dag löper " +
      "ökad risk för ångest och sömnstörningar. Jean Twenge, amerikansk psykolog, har i sin " +
      "forskning kopplat ökningen av smartphoneanvändning till stigande nivåer av depression bland " +
      "tonåringar sedan 2012. Sambanden är tydliga, även om orsakssambanden fortfarande debatteras. " +
      "Men bilden är inte entydig. Skärmen erbjuder också möjligheter som tidigare generationer " +
      "saknade. Ungdomar med nischade intressen — vare sig det gäller astrofysik, poesi eller " +
      "hantverkssmide — kan hitta gemenskaper på nätet som aldrig hade existerat i deras närmiljö. " +
      "HBTQ-ungdomar i mindre orter vittnar om att digitala rum var de enda platser där de kunde " +
      "vara sig själva innan de vågade vara öppna i den fysiska världen. Att avfärda all skärmtid " +
      "som skadlig är att blunda för denna verklighet. " +
      "Problemet är inte tekniken i sig utan vår relation till den. Algoritmerna på sociala medier " +
      "är konstruerade för att maximera engagemang, inte välmående. De matar oss med innehåll som " +
      "väcker starka känslor — upprördhet, avund, rädsla — eftersom det håller oss kvar längre. " +
      "En trettonåring som scrollar genom ett flöde av retuscherade bilder och iscenesatta liv " +
      "har sällan verktygen att genomskåda mekanismen. Resultatet blir en känsla av otillräcklighet " +
      "som smyger sig in utan att man ens märker det. " +
      "Lösningen ligger inte i totalförbud. Att förbjuda skärmar vore som att förbjuda böcker för " +
      "att en del av dem innehåller desinformation. I stället behöver vi digital bildning — en " +
      "undervisning som ger unga redskapen att förstå hur algoritmer fungerar, att kritiskt " +
      "granska det de ser och att medvetet välja hur de spenderar sin tid. Skolan har en nyckelroll " +
      "här. Dagens mediekunskap stannar ofta vid källkritik, men borde även omfatta algoritmförståelse, " +
      "uppmärksamhetsekonomi och personlig digital hälsa. " +
      "Vi kan inte vrida tillbaka klockan. Den digitala världen är här för att stanna och nästa " +
      "generation kommer att leva ännu mer uppkopplat än vi gör. Men vi kan bestämma oss för att " +
      "inte lämna ungdomar ensamma med teknik som är designad att utnyttja deras svagheter. " +
      "Det handlar inte om att vara teknikfientlig. Det handlar om att vara mänsklig.",
    questions: [
      {
        id: "las-hog-3-q1",
        level: "tolka",
        prompt:
          "Författaren jämför skärmförbud med att \"förbjuda böcker för att en del innehåller desinformation\". Vad vill hen visa med den jämförelsen?",
        options: [
          "Att böcker är farliga",
          "Att totalförbud är en oproportionerlig åtgärd som kastar bort det goda tillsammans med det dåliga",
          "Att skärmar och böcker är exakt samma sak",
          "Att desinformation inte är ett problem",
        ],
        correct: 1,
        explanation:
          "Jämförelsen är en analogi som syftar till att visa att ett totalförbud inte adresserar " +
          "det verkliga problemet. Precis som böcker har både bra och dåligt innehåll, har skärmar " +
          "både positiva och negativa sidor.",
      },
      {
        id: "las-hog-3-q2",
        level: "reflektera",
        prompt:
          "Texten nämner att HBTQ-ungdomar i mindre orter hittar trygghet i digitala rum. Hur förhåller sig detta argument till textens huvudtes?",
        options: [
          "Det motsäger hela texten",
          "Det är irrelevant för ämnet",
          "Det nyanserar argumentationen genom att visa att skärmtid inte bara är negativt",
          "Det visar att alla ungdomar mår bra av sociala medier",
        ],
        correct: 2,
        explanation:
          "Exemplet fungerar som ett motargument som författaren själv lyfter fram. Det nyanserar " +
          "diskussionen och stärker trovärdigheten genom att visa att frågan inte är svartvit.",
      },
      {
        id: "las-hog-3-q3",
        level: "hitta",
        prompt:
          "Vilken lösning föreslår författaren i stället för totalförbud?",
        options: [
          "Att ungdomar slutar använda internet",
          "Att föräldrar kontrollerar allt barnen gör",
          "Digital bildning i skolan — algoritmförståelse, mediekritik och digital hälsa",
          "Att sociala medier stängs ner",
        ],
        correct: 2,
        explanation:
          "Författaren argumenterar explicit för digital bildning som inkluderar algoritmförståelse, " +
          "uppmärksamhetsekonomi och personlig digital hälsa. Lösningen finns tydligt i texten.",
      },
      {
        id: "las-hog-3-q4",
        level: "tolka",
        prompt:
          "Vad menar texten med att algoritmerna \"maximerar engagemang, inte välmående\"?",
        options: [
          "Att algoritmerna är designade för att göra användarna lyckliga",
          "Att algoritmerna prioriterar att hålla kvar användaren på plattformen, oavsett hur det påverkar dem",
          "Att engagemang och välmående alltid är samma sak",
          "Att algoritmerna inte fungerar alls",
        ],
        correct: 1,
        explanation:
          "Texten förklarar att algoritmerna är konstruerade för att maximera den tid användaren " +
          "spenderar på plattformen genom att väcka starka känslor. Det är en affärsmodell, inte " +
          "en omsorg om användarens mående.",
      },
    ],
  },

  // --- 9. Faktabaserad/populärvetenskap ---
  {
    id: "las-hog-4",
    ageGroup: "hogstadiet",
    title: "Djupt under isen",
    passage:
      "Under Antarktis istäcke, dolt av kilometertjocka lager av frusen årtusenden, gömmer sig " +
      "en värld som forskarna länge trodde var omöjlig. Subglaciala sjöar — vattendrag som " +
      "existerar i flytande form trots att de omges av is — har de senaste decennierna förändrat " +
      "vår bild av livet på jorden och öppnat dörren till en av de mest fascinerande frågorna i " +
      "modern vetenskap: kan liv finnas på andra planeter? " +
      "Den mest kända av dessa sjöar är Vostoksjön, som ligger under nästan fyra kilometer is i " +
      "östra Antarktis. Den är ungefär lika stor som Vänern och har varit avskuren från resten " +
      "av världen i uppskattningsvis femton miljoner år. Trots den totala avsaknaden av solljus " +
      "och det enorma trycket från istäcket ovan har forskare hittat spår av DNA från tusentals " +
      "olika organismer i prover från sjöns iskanal. Några av dessa organismer tycks vara " +
      "extremofiler — livsformer som trivs under förhållanden som skulle döda de flesta andra. " +
      "Hur kan liv överleva under sådana omständigheter? En nyckel är geotermisk värme. Jordens " +
      "inre producerar ständigt värme genom radioaktivt sönderfall, och denna värme sipprar uppåt " +
      "genom berggrunden. Vid sjöns botten kan temperaturen vara strax ovanför fryspunkten, " +
      "tillräckligt för att hålla vattnet flytande. Dessutom kan kemiska processer i berggrunden " +
      "frigöra näringsämnen som enkla organismer kan utnyttja som energikälla, helt utan solljus. " +
      "Det kallas kemolitotrofi — ett sätt att leva som utmanar vår vardagliga föreställning om " +
      "vad liv behöver. " +
      "Upptäckten har direkta kopplingar till rymdforskningen. Jupiters måne Europa och Saturnus " +
      "måne Enceladus har båda underjordiska hav av flytande vatten under istäcken. Om liv kan " +
      "uppstå och bestå under Antarktis is, utan solljus och isolerat från atmosfären, då är det " +
      "inte längre orimligt att tänka sig att liknande ekosystem kan finnas på dessa himlakroppar. " +
      "NASA:s kommande Europa Clipper-uppdrag, planerat att nå Jupiter-systemet under 2030-talet, " +
      "ska bland annat undersöka sammansättningen av det vatten som sprutar ut genom sprickor i " +
      "Europas yta. " +
      "Men forskningen under Antarktis is är också en påminnelse om ödmjukhet. Varje gång vi " +
      "tror att vi har kartlagt livets gränser visar naturen att den har fler svar än vi har " +
      "frågor. De subglaciala sjöarna lär oss att liv är segare, mer uppfinningsrikt och mer " +
      "överraskande än vi någonsin hade föreställt oss. Och de påminner oss om att den mest " +
      "främmande världen vi känner till kanske inte ligger bland stjärnorna utan under våra egna " +
      "fötter.",
    questions: [
      {
        id: "las-hog-4-q1",
        level: "hitta",
        prompt: "Hur djupt under isen ligger Vostoksjön?",
        options: [
          "Under ungefär en kilometer is",
          "Under nästan fyra kilometer is",
          "Under tio kilometer is",
          "Direkt under ytan",
        ],
        correct: 1,
        explanation:
          "Texten anger att Vostoksjön ligger under nästan fyra kilometer is i östra Antarktis. " +
          "Det är en faktauppgift som finns direkt i texten.",
      },
      {
        id: "las-hog-4-q2",
        level: "tolka",
        prompt: "Vad innebär begreppet \"kemolitotrofi\" enligt texten?",
        options: [
          "Att organismer lever av solljus under isen",
          "Att organismer utvinner energi från kemiska processer i berggrunden, utan solljus",
          "Att organismer äter is för att överleva",
          "Att organismer odlas i laboratorium",
        ],
        correct: 1,
        explanation:
          "Texten förklarar kemolitotrofi som ett sätt att leva där organismer använder kemiska " +
          "processer i berggrunden som energikälla, helt utan solljus. Det utmanar den vanliga " +
          "bilden av att liv kräver solenergi.",
      },
      {
        id: "las-hog-4-q3",
        level: "tolka",
        prompt:
          "Varför kopplar texten samman de subglaciala sjöarna med rymdforskning?",
        options: [
          "Forskarna vill flytta sjöarna till rymden",
          "Om liv kan finnas under Antarktis is, stärker det möjligheten att liknande liv kan finnas på istäckta månar i solsystemet",
          "NASA har byggt en forskningsstation vid Vostoksjön",
          "Rymdforskning och polarforskning har samma budget",
        ],
        correct: 1,
        explanation:
          "Textens resonemang är analogiskt: om liv klarar extrema förhållanden under jordens is, " +
          "kan liknande ekosystem finnas under isen på Europa eller Enceladus. Det gör Antarktis " +
          "till ett testfall för astrobiologi.",
      },
      {
        id: "las-hog-4-q4",
        level: "reflektera",
        prompt:
          "Texten avslutas med att \"den mest främmande världen kanske inte ligger bland stjärnorna utan under våra egna fötter\". Vad vill författaren säga med det?",
        options: [
          "Att rymdforskning är onödig",
          "Att det fortfarande finns okända och häpnadsväckande miljöer på vår egen planet",
          "Att vi borde sluta utforska rymden",
          "Att Antarktis borde bli ett turistmål",
        ],
        correct: 1,
        explanation:
          "Avslutningen är en retorisk poäng om att jorden rymmer mer okänt än vi tror. Författaren " +
          "vill förmedla ödmjukhet inför naturens komplexitet och visa att upptäckarglädje inte " +
          "bara hör rymden till.",
      },
      {
        id: "las-hog-4-q5",
        level: "hitta",
        prompt: "Vilken storlek jämförs Vostoksjön med?",
        options: [
          "Mälaren",
          "Vänern",
          "Siljan",
          "Hjälmaren",
        ],
        correct: 1,
        explanation:
          "Texten anger att Vostoksjön är ungefär lika stor som Vänern. Det är en direkt jämförelse " +
          "som gör det lättare för svenska läsare att föreställa sig sjöns storlek.",
      },
    ],
  },

  // --- 10. Poesi/lyrisk prosa ---
  {
    id: "las-hog-5",
    ageGroup: "hogstadiet",
    title: "November",
    passage:
      "November kom utan förvarning, som den alltid gör. Den smög inte in — den föll som ett " +
      "tungt tyg över staden, drog för gardinerna och släckte ljuset. Träden stod nakna längs " +
      "alleerna, deras grenar som sprickiga händer sträckta mot en himmel som inte svarade. " +
      "Regnet hade ingen brådska. Det föll lodrätt och stilla, timme efter timme, som om det " +
      "hade bestämt sig för att aldrig sluta. " +
      "Det var i november jag lärde mig att tystnad kan vara högljudd. I lägenheten hördes " +
      "klockan på väggen, kylskåpets brummande, elementens klickande — ljud som under resten av " +
      "året försvann i vardagens brus men som nu steg fram och tog plats. Jag satt vid fönstret " +
      "och såg gatlyktorna tändas, en efter en, som om någon försökte räkna alla de dagar som " +
      "hade gått sedan sommaren. Ljuset var orange och svagt och nådde inte ända ner till trottoaren. " +
      "Det dröjde sig kvar i luften, hängde i dropparna, gav natten ett skimmer av gammal koppar. " +
      "Jag tänkte på alla människor som gick under de där lyktorna. De med snabba steg och hörlurar, " +
      "de som inte lyfte blicken. De med långsamma steg och tunga axlar, de som såg ut att bära " +
      "samma väder inuti sig som det var utanför. Och de som stannade, bara för en sekund, och " +
      "tittade upp mot himlen som om de väntade på något — kanske ljus, kanske svar, kanske bara " +
      "att novemberregnet skulle sluta falla. " +
      "Min farmor brukade säga att november är årets ärligaste månad. Ingen utsmyckning, ingen " +
      "glitter, inga löften. Bara det som är. Våren lovar och sommaren uppfyller, sa hon, men " +
      "november ber om ingenting och ger ingenting tillbaka. Och det finns en slags frihet i det. " +
      "När allt det vackra är borta och det enda som återstår är det nakna, det avskalade, det " +
      "grå — då finns det ingenting att leva upp till. Man kan bara vara. " +
      "Kanske hade hon rätt. Kanske finns det tröst i årets mörkaste rum, en slags vila i att " +
      "slippa förväntan. Jag satt kvar vid fönstret tills ljuset utanför blev för svagt för att " +
      "se igenom. Regnet fortsatte. Klockan tickade. Och jag märkte att jag inte kände mig ledsen, " +
      "bara stilla — som om november hade lagt handen på min axel och viskat att det var okej " +
      "att inte vara glad. Att det räcker att vara. " +
      "Jag släckte lampan och lät mörkret komma in. Det var inte otäckt. Det var som att vattnet " +
      "i en sjö blir helt stilla en sen kväll — ingenting rör sig, ingenting kräver uppmärksamhet, " +
      "och i den tystnaden kan man höra sitt eget hjärta slå. Jag andades in novembernatten och " +
      "kände att det fanns ett rum inuti mig som liknade den här månaden: avskalat, stilla och " +
      "alldeles tillräckligt.",
    questions: [
      {
        id: "las-hog-5-q1",
        level: "tolka",
        prompt:
          "Texten beskriver trädens grenar som \"sprickiga händer sträckta mot en himmel som inte svarade\". Vilken stämning skapar den bilden?",
        options: [
          "Glädje och förväntan",
          "En känsla av övergivenhet och stum vädjan",
          "Spänning och äventyr",
          "Romantik och kärlek",
        ],
        correct: 1,
        explanation:
          "Personifikationen — grenar som händer, en himmel som inte svarar — skapar en bild av " +
          "tyst bön utan gensvar. Det förstärker novembers känsla av tomhet och stilla sorg.",
      },
      {
        id: "las-hog-5-q2",
        level: "tolka",
        prompt:
          "Vad menar farmor med att november är \"årets ärligaste månad\"?",
        options: [
          "Att vädret alltid är exakt som prognosen säger",
          "Att november saknar utsmyckning och förväntningar — den visar verkligheten som den är",
          "Att alla talar sanning i november",
          "Att det är den bästa månaden att göra affärer",
        ],
        correct: 1,
        explanation:
          "Farmors utsaga handlar om att november inte förskönar tillvaron. Utan lövverk, blommor " +
          "eller sommarljus återstår bara det avskalade — och i det finns en ärlighet utan förställning.",
      },
      {
        id: "las-hog-5-q3",
        level: "reflektera",
        prompt:
          "Berättaren säger att november \"viskade att det var okej att inte vara glad\". Vad säger det om textens syn på mörker och melankoli?",
        options: [
          "Att man alltid ska vara ledsen i november",
          "Att melankoli och stillhet kan vara vilsamma tillstånd, inte bara negativa",
          "Att mörker är farligt och bör undvikas",
          "Att man inte ska bry sig om sina känslor",
        ],
        correct: 1,
        explanation:
          "Texten omvärderar melankolin — den framställs inte som något att fly ifrån utan som " +
          "ett tillstånd av vila och acceptans. Det är textens centrala budskap.",
      },
      {
        id: "las-hog-5-q4",
        level: "hitta",
        prompt:
          "Vilka vardagliga ljud beskrivs som extra tydliga i novembertystnaden?",
        options: [
          "Bilmotorer, hundskall och barnlek",
          "Klockan, kylskåpet och elementen",
          "Musik, TV och samtal",
          "Vinden, åskan och haglet",
        ],
        correct: 1,
        explanation:
          "Texten anger uttryckligen att klockan, kylskåpets brummande och elementens klickande " +
          "blev framträdande ljud som annars försvann i vardagens brus.",
      },
      {
        id: "las-hog-5-q5",
        level: "tolka",
        prompt:
          "Vilken stilfigur dominerar texten och vilken effekt har den?",
        options: [
          "Upprepning — den skapar rytm och stegrande känsla",
          "Personifikation — november framställs som en levande varelse med vilja och röst",
          "Ironi — texten menar egentligen motsatsen av det som sägs",
          "Hyperbol — texten överdriver medvetet",
        ],
        correct: 1,
        explanation:
          "November faller som ett tyg, lägger handen på berättarens axel och viskar. Genomgående " +
          "personifikation gör november till en närmast mänsklig figur, vilket skapar intimitet " +
          "och poetisk kraft.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet
// ---------------------------------------------------------------------------

const gymnasietTexts: ReadingText[] = [
  {
    id: "las-gym-1",
    ageGroup: "gymnasiet",
    title: "Glasväggarna",
    passage:
      "Det var den sortens morgon då ljuset föll snett genom fönstret och fick dammkornen att likna " +
      "små planeter i omloppsbana. Karin stod vid diskbänken med händerna i det ljumma vattnet och " +
      "kände hur det bildade en hinna runt hennes fingrar, som en andra hud. Hon hade läst någonstans " +
      "att huden är kroppens största organ, att den väger flera kilo och att den förnyas helt vart " +
      "tjugosjunde dygn. Hon undrade om det betydde att hon bokstavligen var en annan människa nu " +
      "än den som hade stått här i köket för en månad sedan och hört Anders säga att han inte längre " +
      "visste vem hon var. Orden hade landat med en egendomlig precision, som en kirurg som hittar " +
      "exakt rätt nerv, och hon hade inte kunnat svara — inte för att hon saknade ord, utan för att " +
      "alla ord hon kunde tänka sig hade känts som approximationer av något som inte hade någon " +
      "exakt benämning.\n\n" +
      "Kaffet i kannan hade kallnat. Hon hällde det i vasken och såg den bruna vätskan blanda sig med " +
      "diskskummet till en grumlig virvel. Det var något med den rörelsen, det långsamma försvinnandet " +
      "ner i avloppet, som fick henne att tänka på hur minnen fungerar. Inte som fotografier, som folk " +
      "brukar säga, utan snarare som rinnande vatten — de formas om varje gång man tar i dem, förändras " +
      "av den som minns, tills det som återstår kanske bara är ett minne av ett minne, likt en kopia av " +
      "en kopia där originalet för länge sedan har bleknat bort. Hon försökte minnas den första kvällen " +
      "med Anders, restaurangen vid hamnen, hur lamporna hade speglats i vattnet. Men bilden var suddig " +
      "nu, överlagrad av allt som hade kommit sedan dess, och hon var inte säker på om ljusen verkligen " +
      "hade varit gula eller om det var ett tillägg hennes minne hade gjort i efterhand för att scenen " +
      "skulle stämma med hur den borde ha sett ut.\n\n" +
      "Anders hade alltid haft en förmåga att fylla rummen han befann sig i. Inte med ljud, nödvändigtvis, " +
      "utan med en sorts gravitationell närvaro som fick möblerna att verka orienterade mot honom. Han " +
      "hade en vana att ställa sig i dörröppningar snarare än att gå in i rum, som om han ville behålla " +
      "möjligheten att antingen stanna eller gå, och det hade gett honom en aura av ständig övergång " +
      "som Karin i början hade förväxlat med mystik men som hon senare förstod var en form av " +
      "otillgänglighet. När han försvann blev rummen inte tomma — de blev formlösa, som om väggarna " +
      "tappat sin funktion. Karin hade märkt att hon börjat möblera om. Inte för att det behövdes, " +
      "utan för att rummen behövde en ny logik, en ny geometri som inte pekade mot en frånvaro. " +
      "Soffan stod nu med ryggen mot fönstret istället för mot väggen, och bokhyllan hade hon " +
      "flyttat från vardagsrummet till sovrummet, där den stod som en tyst väktare vid sängens fotända.\n\n" +
      "Hon torkade händerna på kökshandduken och gick ut i hallen. Jackorna hängde på sina krokar " +
      "i en ordning som hon nu bestämde själv. Hans jacka var borta, förstås, men kroken satt kvar " +
      "som en fråga utan svar. Hon kunde ta ner den, eller hänga något nytt där. Istället lät hon " +
      "den vara — inte av sentimentalitet, tänkte hon, utan av samma skäl som man ibland låter en " +
      "mening stå oavslutad: för att det oavslutade rymmer fler möjligheter än det avslutade. " +
      "Det fanns en sorts tröst i det ofärdiga, en öppenhet som det slutgiltiga aldrig kunde erbjuda. " +
      "En stängd dörr är bara en stängd dörr, men en dörr på glänt är en berättelse som inte har " +
      "bestämt sig för sitt slut.\n\n" +
      "Utanför fönstret rörde sig grannen med sin hund längs trottoaren. Hunden stannade vid varje " +
      "lyktstolpe med den sortens andäktiga uppmärksamhet som människor sällan ägnar åt sina omgivningar. " +
      "Det var den typen av vardag som pågår oberoende av vad som händer innanför glasväggarna. Karin " +
      "tyckte om det uttrycket, glasväggar, för det beskrev exakt hur det kändes: att vara synlig men " +
      "avskild, att leva i samma värld som alla andra men bakom något genomskinligt och oöverskridligt. " +
      "Man kunde se ut och andra kunde se in, men beröringen uteblev — ljudet, värmen, den fysiska " +
      "närvaron av en annan människa filtrerades bort av det osynliga skiktet. Hon visste att det " +
      "inte skulle vara så för alltid. Huden förnyades, minnena förändrades, rummen fylldes med " +
      "ny mening. Men just nu, i den sneda morgonljusets tystnad, räckte det att stå stilla och " +
      "låta dammkornen cirkla som små planeter utan bana.",
    questions: [
      {
        id: "las-gym-1-q1",
        level: "tolka",
        prompt: "Vad symboliserar den tomma jackkroken i hallen?",
        options: [
          "En praktisk detalj som visar att Anders har flyttat",
          "Karins ilska mot Anders som lämnade henne",
          "Frånvaron efter en relation och det oavslutades potential",
          "Att Karin är oordentlig och inte städar",
        ],
        correct: 2,
        explanation:
          "Karin jämför den tomma kroken med en oavslutad mening som rymmer fler möjligheter. Kroken blir en symbol för hur frånvaro inte bara är tomhet utan även potentialitet — det obestämda tillståndet mellan förlusten och det som kan komma.",
      },
      {
        id: "las-gym-1-q2",
        level: "tolka",
        prompt: "Vilken funktion fyller metaforen om dammkorn som planeter i texten?",
        options: [
          "Den visar att Karin är intresserad av astronomi",
          "Den skapar en cirkulär struktur — texten öppnar och stänger med samma bild men med förändrad innebörd",
          "Den är en slumpmässig detalj för att skapa stämning",
          "Den illustrerar att Karin behöver städa sitt hem",
        ],
        correct: 1,
        explanation:
          "Dammkornen som planeter återkommer i slutet men med tillägget \"utan bana\", vilket speglar Karins förändrade tillstånd. I inledningen har kornen omloppsbana (ordning), i slutet saknar de bana (frihet eller vilsenhet). Det skapar en cirkulär struktur med förskjuten innebörd.",
      },
      {
        id: "las-gym-1-q3",
        level: "reflektera",
        prompt: "Texten hävdar att minnen fungerar som rinnande vatten snarare än fotografier. Stämmer detta påstående?",
        options: [
          "Sant — modern minnesforskning visar att minnen omformas varje gång de återkallas",
          "Falskt — minnen lagras exakt som de upplevdes",
        ],
        correct: 0,
        explanation:
          "Textens metafor har vetenskapligt stöd: minnesforskning visar att episodiska minnen rekonstrueras vid varje återkallande och påverkas av nuvarande sinnesstämning, nya erfarenheter och berättandet självt. Minnen är alltså dynamiska processer, inte statiska avbildningar.",
      },
      {
        id: "las-gym-1-q4",
        level: "tolka",
        prompt: "Vad innebär begreppet \"glasväggar\" i textens sammanhang?",
        options: [
          "Att Karin bor i ett modernt hus med glasfasad",
          "Att hon känner sig instängd i en relation",
          "Att hon upplever en paradox: att vara del av världen men ändå oåtkomligt separerad från den",
          "Att hon tycker om att titta på grannar genom fönstret",
        ],
        correct: 2,
        explanation:
          "Glasväggarna beskriver tillståndet att vara \"synlig men avskild\" — en existentiell paradox där man befinner sig mitt i världen men ändå är åtskild av något osynligt. Det är en bild för den isolering som kan följa efter förlust.",
      },
      {
        id: "las-gym-1-q5",
        level: "reflektera",
        prompt: "Vilken berättarteknisk effekt skapar texten genom att undvika direkt handling och i stället fokusera på Karins inre tankevärld?",
        options: [
          "Den gör texten tråkig och händelselös",
          "Den tvingar läsaren att bli medskapare — det yttre (disk, kaffe, jacka) blir symboliska lager som kräver tolkning, vilket speglar hur Karin själv bearbetar sin situation genom vardagliga föremål",
          "Den visar att författaren inte kan skriva dialoger",
          "Den är typisk för barnlitteratur",
        ],
        correct: 1,
        explanation:
          "Den medvetandeströmsliknande tekniken — där yttre detaljer blir ingångar till inre reflektion — gör läsaren till aktiv medskapare. Varje vardagsföremål (diskvattnet, kaffet, jackkroken) bär symbolisk vikt, och den yttre stillheten kontrasterar mot ett intensivt inre landskap.",
      },
    ],
  },
  {
    id: "las-gym-2",
    ageGroup: "gymnasiet",
    title: "Den tysta kulturrevolutionen",
    passage:
      "Någonstans mellan 2015 och 2025 hände något med det svenska kultursamtalet som vi fortfarande " +
      "inte riktigt har förstått. Det handlade inte om en enskild händelse utan om en gradvis förskjutning " +
      "av vad som betraktades som legitima sätt att tala, tänka och skapa. Författare som tidigare hade " +
      "fått lovord för sin förmåga att gestalta moraliskt komplicerade karaktärer blev plötsligt misstänkta " +
      "för att hysa de åsikter de beskrev. Skillnaden mellan att skildra och att förespråka kollapsade, " +
      "och med den kollapsade en av litteraturens mest grundläggande funktioner: att låta oss se världen " +
      "genom ögon som inte är våra egna. Konstnären blev sammanblandad med konstverket på ett sätt " +
      "som historiskt sett hör hemma i totalitära system, där staten granskar inte bara vad som sägs " +
      "utan vem som säger det och med vilken förmodad avsikt.\n\n" +
      "Parallellt skedde en förändring i kritikens funktion. Den estetiska bedömningen — frågan om ett " +
      "verk var väl konstruerat, stilistiskt intressant eller konstnärligt nyskapande — fick stå tillbaka " +
      "för den ideologiska granskningen. En roman bedömdes inte längre främst efter hur den berättade " +
      "utan efter vad den ansågs säga, och framför allt efter vem som sa det. Identiteten blev en " +
      "hermeneutisk nyckel: författarens bakgrund avgjorde vilka berättelser som uppfattades som " +
      "autentiska och vilka som betraktades som intrång. Litteraturkritikern som frågade om en text " +
      "var vacker eller skickligt komponerad riskerade att framstå som naiv, eller värre, som medvetet " +
      "undvikande av de verkligt viktiga frågorna — som om estetiken vore ett sätt att slippa etiken.\n\n" +
      "Det finns en stark moralisk intuition bakom denna utveckling. Historien är full av exempel på " +
      "hur privilegierade grupper har talat för, om och över andra. Kravet på representativitet och " +
      "medvetenhet om maktstrukturer är inte orimligt. Att den som själv har erfarenhet av marginalisering " +
      "bör ges plats och utrymme i kulturens rum är en rättvisefråga som förtjänar att tas på allvar. " +
      "Men det finns en skillnad mellan att bredda rummet och att begränsa det. När principen att " +
      "\"bara den som har upplevt något kan berätta om det\" drivs till sin logiska slutpunkt, upphör " +
      "empati och fantasi att vara konstnärliga dygder. Kvar blir en litteratur av vittnesmål — viktig " +
      "i sig, men inte tillräcklig som ensam genre för en hel kulturs berättande. Romanen har historiskt " +
      "fungerat som ett laboratorium för empati, en plats där läsaren övar sig i att förstå den andre. " +
      "Om författaren nekas den friheten, förlorar romanen sin särskilda kraft.\n\n" +
      "Man kan invända att pendeln alltid svänger, att varje kulturell rörelse möter sin motreaktion. " +
      "Det stämmer historiskt. Men den digitala erans särskilda dynamik — algoritmernas förstärkning av " +
      "moralisk upprördhet, den sociala sanktionens hastighet, avsaknaden av nyanser i ett medium " +
      "som belönar korthet — gör att denna pendelrörelse skapar djupare spår. Konsekvenserna sprider " +
      "sig med en hastighet som saknar historiskt prejudikat. En författare som gör ett kontroversiellt " +
      "uttalande på morgonen kan vara socialt ruinerad vid lunchtid. Självcensur är inte " +
      "bara en individuell handling; den är en kulturell. När författare, konstnärer och debattörer " +
      "börjar undvika ämnen inte för att de saknar intresse utan för att risken upplevs som för stor, " +
      "förlorar kulturen inte synliga verk utan osynliga — de texter som aldrig skrivs, de samtal " +
      "som aldrig förs, de perspektiv som aldrig testas.\n\n" +
      "Den tysta kulturrevolutionen handlar ytterst om en spänning mellan två värden som båda är " +
      "behjärtansvärda: rättvisa och frihet. Utmaningen är inte att välja det ena framför det andra " +
      "utan att bygga en offentlighet som rymmer båda — en offentlighet där kritik är möjlig utan " +
      "att bli bestraffning, och där konstnärlig frihet inte används som alibi för likgiltighet inför " +
      "maktens ojämna fördelning. Det kräver något som varken algoritmer eller " +
      "upprördhet kan leverera: tålamod, och en vilja att uthärda komplexitet utan att reducera " +
      "den till slagord.",
    questions: [
      {
        id: "las-gym-2-q1",
        level: "hitta",
        prompt: "Vilken tidsperiod placerar texten den kulturella förskjutningen i?",
        options: [
          "1990–2000",
          "2000–2010",
          "2015–2025",
          "2025–2035",
        ],
        correct: 2,
        explanation:
          "Texten anger explicit att förskjutningen skedde \"någonstans mellan 2015 och 2025\". Det är en direkt faktauppgift.",
      },
      {
        id: "las-gym-2-q2",
        level: "tolka",
        prompt: "Vad menar författaren med att \"skillnaden mellan att skildra och att förespråka kollapsade\"?",
        options: [
          "Att författare blev sämre på att skriva realistiska karaktärer",
          "Att en romankaraktärs åsikter började tillskrivas författaren själv, vilket underminerade fiktionens frihet att utforska perspektiv",
          "Att alla författare blev politiska aktivister",
          "Att skönlitteratur blev förbjuden",
        ],
        correct: 1,
        explanation:
          "Textens centrala argument är att förmågan att separera gestaltning från åsikt försvagades. En författare som skrev en moraliskt problematisk karaktär riskerade att själv anklagas för dessa värderingar, vilket begränsade fiktionens utrymme att utforska mänsklig komplexitet.",
      },
      {
        id: "las-gym-2-q3",
        level: "reflektera",
        prompt: "Författaren erkänner moraliska argument för den utveckling hen kritiserar. Vilken retorisk funktion fyller det?",
        options: [
          "Det visar att författaren egentligen håller med sina meningsmotståndare",
          "Det är ett försök att undvika kritik genom att vara otydlig",
          "Det stärker textens trovärdighet genom att visa att författaren förstår och respekterar motargumenten innan hen vidareutvecklar sin kritik (concessio)",
          "Det är ett stilistiskt misstag som försvagar argumentationen",
        ],
        correct: 2,
        explanation:
          "Att erkänna motståndarens poäng (concessio) är en klassisk retorisk strategi som stärker ethos — författaren framstår som rättvis och nyanserad, vilket gör den efterföljande kritiken mer övertygande. Det är inte otydlighet utan retorisk sofistikering.",
      },
      {
        id: "las-gym-2-q4",
        level: "tolka",
        prompt: "Vad menar texten med \"de texter som aldrig skrivs\"?",
        options: [
          "Att det finns osynliga böcker i bibliotek",
          "Att självcensur skapar en osynlig kulturell förlust — verk som aldrig skapas på grund av rädsla, vilket gör skadan omöjlig att mäta",
          "Att författare har slutat skriva helt",
          "Att alla intressanta ämnen redan har behandlats",
        ],
        correct: 1,
        explanation:
          "Textens mest sofistikerade argument gäller den osynliga förlusten: självcensuren manifesteras inte i dåliga böcker utan i frånvaron av böcker som aldrig fick existera. Förlusten är per definition omöjlig att kvantifiera, vilket gör den svårare att adressera.",
      },
      {
        id: "las-gym-2-q5",
        level: "reflektera",
        prompt: "Påstående: Textens grundhållning är att representativitetskrav alltid är skadliga för konsten.",
        options: [
          "Sant",
          "Falskt — texten argumenterar för att kraven har moralisk legitimitet men att de blir problematiska när de drivs till sin yttersta konsekvens",
        ],
        correct: 1,
        explanation:
          "Texten framställer inte representativitetskrav som grundlösa. Den erkänner explicit deras historiska och moraliska berättigande. Kritiken riktas mot absolutiseringen — när principen drivs så långt att den begränsar snarare än breddar det konstnärliga rummet. Det är en fråga om grad, inte om princip.",
      },
    ],
  },
  {
    id: "las-gym-3",
    ageGroup: "gymnasiet",
    title: "Medvetandets gåta",
    passage:
      "Bland alla vetenskapliga problem som återstår att lösa intar medvetandets natur en särställning. " +
      "Det är inte bara att vi saknar svaret — vi är inte ens överens om vad frågan innebär. Filosofen " +
      "David Chalmers formulerade 1995 distinktionen mellan det \"lätta\" och det \"svåra\" problemet. " +
      "De lätta problemen — som trots namnet är enormt komplicerade — handlar om att förklara hjärnans " +
      "informationsbearbetning: hur sinnesintryck registreras, hur uppmärksamhet styrs, hur beteende " +
      "koordineras. Dessa frågor är i princip besvaringsbara med neurovetenskap och avancerad hjärnavbildning. " +
      "Det svåra problemet är annorlunda. Det frågar varför det finns en subjektiv upplevelse överhuvudtaget. " +
      "Varför känns det som något att se rött, höra musik eller smaka kaffe? Varför producerar neurala " +
      "processer inte bara funktion utan också fenomen — en inre värld av upplevelser som bara den som " +
      "har dem kan komma åt?\n\n" +
      "Filosofen Thomas Nagel berörde samma mysterium i sin berömda uppsats från 1974 med titeln " +
      "\"Hur är det att vara en fladdermus?\" Hans poäng var inte zoologisk utan filosofisk: en " +
      "fladdermus navigerar med ekolod, en sinnesmodalitet vi saknar. Vi kan studera fladdermusens " +
      "hjärna, kartlägga varje neuron och synaps, och ändå aldrig veta hur det känns inifrån att " +
      "orientera sig med ultraljud. Det subjektiva perspektivet — vad filosofer kallar qualia — tycks " +
      "vara principiellt otillgängligt för tredjepersonsbeskrivningar. Vi kan mäta våglängden för rött " +
      "ljus, beskriva vilka receptorer som aktiveras och vilka hjärnregioner som svarar, men inget av " +
      "detta förklarar den specifika upplevelsen av rödhet — det unika, omistliga, icke-reducerbara " +
      "intrycket som uppstår när du ser en vallmo i motljus.\n\n" +
      "Mot detta står de eliminativa materialisterna, företrädda av bland andra Daniel Dennett, som " +
      "hävdar att det svåra problemet är en illusion skapad av felaktig begreppsbildning. Dennett " +
      "argumenterar att medvetandet inte är ett fenomen ovanpå de neurala processerna utan identiskt " +
      "med dem. Att söka efter medvetandet bortom hjärnans aktivitet är, enligt Dennett, som att " +
      "söka efter \"livskraften\" bortom cellernas biokemi — en vitalistisk rest som vetenskapen " +
      "borde ha gjort sig av med för länge sedan. Precis som biologin visade att \"liv\" inte " +
      "kräver en mystisk ingrediens utöver kemi, borde neurovetenskapen kunna visa att \"medvetande\" " +
      "inte kräver något utöver neural aktivitet.\n\n" +
      "Men Dennetts position har en besvärlig konsekvens. Om subjektiv upplevelse reduceras till " +
      "neural aktivitet, då är min upplevelse av smärta inget utöver de C-fibrer som avfyras. " +
      "Det verkar intuitivt fel. Smärtan tycks vara mer än sina neurologiska korrelat — den har " +
      "en obehagskvalitet som inte fångas av en beskrivning av elektriska signaler och kemiska " +
      "transmittorer. Filosofen John Searle har kallat detta \"den biologiska naturalismens\" position: " +
      "medvetandet är verkligt och subjektivt men uppstår ur biologiska processer, precis som " +
      "matsmältning uppstår ur magsäckens kemi utan att vara reducerbar till enskilda molekylrörelser. " +
      "Medvetandet är, enligt Searle, en systemegenskap — något som uppstår på en högre organisationsnivå " +
      "och som inte kan förstås genom att bara studera delarna var för sig.\n\n" +
      "Debatten rör sig i cirklar, och kanske är det poängen. Medvetandet tycks vara det fenomen " +
      "där vetenskapens tredjepersonsperspektiv och det levda livets förstapersonsperspektiv möts " +
      "och finner sig ömsesidigt otillräckliga. Varje ansats att reducera medvetandet till fysik " +
      "tycks missa den kvalitativa dimensionen, och varje ansats att göra det till något icke-fysiskt " +
      "hamnar i den dualistiska fällan att förklara hur det immateriella interagerar med materia. " +
      "Kanske behöver vi inte välja mellan Chalmers och Dennett utan erkänna att medvetandet kräver " +
      "en ny begreppsapparat — ett språk som ännu inte finns. Den österrikiske filosofen Ludwig " +
      "Wittgenstein skrev att språkets gränser är världens gränser. Om det stämmer, kanske " +
      "medvetandets gåta inte är en fråga som väntar på sitt svar utan en gräns som väntar på " +
      "ett nytt språk.",
    questions: [
      {
        id: "las-gym-3-q1",
        level: "hitta",
        prompt: "Vad kallade David Chalmers för det \"svåra problemet\"?",
        options: [
          "Att kartlägga hjärnans alla neuroner",
          "Att förklara varför subjektiv upplevelse existerar överhuvudtaget",
          "Att förstå hur fladdermusar använder ekolod",
          "Att bygga artificiell intelligens",
        ],
        correct: 1,
        explanation:
          "Texten förklarar att det svåra problemet frågar \"varför det finns en subjektiv upplevelse överhuvudtaget\" — inte hur hjärnan bearbetar information (det lätta problemet) utan varför det känns som något att ha upplevelser.",
      },
      {
        id: "las-gym-3-q2",
        level: "tolka",
        prompt: "Varför jämför Dennett sökandet efter medvetande bortom hjärnaktivitet med \"livskraft\" bortom cellernas biokemi?",
        options: [
          "Dennett anser att medvetandet bokstavligen är en livskraft",
          "Analogin med vitalism visar att det vi tror är ett separat fenomen kan vara en begreppsförvirring — liksom \"livskraft\" visade sig vara vanlig kemi, kan \"medvetande\" visa sig vara vanlig neurologi",
          "Dennett vill återuppliva vitalismen som vetenskaplig teori",
          "Det är en poetisk bild utan argumentativ funktion",
        ],
        correct: 1,
        explanation:
          "Dennetts analogi är strategisk: vitalismen antog att liv kräver en speciell kraft utöver kemi, men biologin visade att cellernas processer räcker. Dennett menar att medvetandet kan vara samma typ av begreppsförvirring — vi söker något extra där det kanske bara finns neurala processer.",
      },
      {
        id: "las-gym-3-q3",
        level: "tolka",
        prompt: "Vilken funktion har Wittgenstein-citatet i textens avslutande stycke?",
        options: [
          "Det sammanfattar Dennetts position",
          "Det avfärdar hela diskussionen som meningslös",
          "Det öppnar en tredje väg: kanske är medvetandeproblemet inte olösligt utan obeskrivligt med nuvarande begrepp, vilket kräver ny begreppsapparat snarare än nya experiment",
          "Det visar att Wittgenstein löste medvetandeproblemet",
        ],
        correct: 2,
        explanation:
          "Wittgenstein-citatet tjänar som textens lösningsförslag: om språkets gränser sammanfaller med tänkandets gränser, kan medvetandets gåta vara ett symtom på begreppslig otillräcklighet snarare än ett empiriskt problem. Det pekar bortom dikotomin Chalmers–Dennett.",
      },
      {
        id: "las-gym-3-q4",
        level: "reflektera",
        prompt: "Påstående: Nagels poäng om fladdermöss innebär att vetenskap aldrig kan förklara medvetandet.",
        options: [
          "Sant — Nagel hävdar att subjektiv upplevelse är principiellt otillgänglig för vetenskapen",
          "Falskt — Nagel visar att tredjepersonsbeskrivningar har en gräns, men det utesluter inte att andra metoder kan överbrygga den",
        ],
        correct: 1,
        explanation:
          "Nagels argument visar att det finns en aspekt av medvetandet som inte fångas av objektiva beskrivningar. Men texten själv antyder att problemet kanske kräver \"ett nytt språk\" snarare än att det är principiellt olösligt. Nagels poäng markerar en begränsning, inte nödvändigtvis en omöjlighet.",
      },
      {
        id: "las-gym-3-q5",
        level: "reflektera",
        prompt: "Textens struktur presenterar flera filosofiska positioner. Vilken hållning intar författaren själv?",
        options: [
          "Författaren stöder Dennetts eliminativa materialism entydigt",
          "Författaren föredrar Chalmers dualism utan reservation",
          "Författaren intager en meta-position: debatten avslöjar att våra nuvarande begrepp är otillräckliga, och lösningen kan ligga i ny begreppsbildning snarare än i någon av de existerande positionerna",
          "Författaren anser att medvetandefrågan är irrelevant",
        ],
        correct: 2,
        explanation:
          "Genom att presentera Chalmers, Nagel, Dennett och Searle utan att entydigt ställa sig bakom någon, och genom att avsluta med Wittgensteins tanke om språkets gränser, signalerar författaren att lösningen kanske ligger bortom den befintliga begreppsramen — en meta-filosofisk position.",
      },
    ],
  },
  {
    id: "las-gym-4",
    ageGroup: "gymnasiet",
    title: "Det bekväma mörkret",
    passage:
      "Det finns ett argument som sällan uttalas men som genomsyrar vår tids politiska debatt som en " +
      "tyst bas under melodin: att sanningen ibland är för besvärlig för demokratin. Politiker vet det. " +
      "Journalister vet det. Väljare, på något plan, vet det också. Ändå upprätthåller vi kollektivt " +
      "illusionen att demokratin vilar på informerade val. Det gör den inte — den vilar på tillräckligt " +
      "informerade val, och skillnaden mellan dessa två formuleringar rymmer en avgrund. Det fullständigt " +
      "informerade valet är en fiktion, en pedagogisk idealisering som ingen stat, inget utbildningssystem " +
      "och inget medium någonsin har realiserat. Frågan har aldrig varit om medborgare ska vara " +
      "felinformerade utan i vilken grad och på vilka sätt.\n\n" +
      "Retoriken har alltid förstått detta. Aristoteles delade övertalningsmedlen i logos, ethos och " +
      "pathos, men det var pathos — det emotionella tilltalet — som han erkände som mest verkningsfullt " +
      "inför stora folkförsamlingar. Inte för att folk var dumma, utan för att känslan bearbetar " +
      "information snabbare och kraftfullare än det analytiska tänkandet. Den som kan framkalla rädsla, " +
      "hopp eller indignation har ett försprång som ingen mängd statistik kan överbrygga. Modern " +
      "kognitionsforskning bekräftar detta: Daniel Kahnemans distinktion mellan System 1 (snabbt, " +
      "intuitivt) och System 2 (långsamt, analytiskt) visar att vi fattar de flesta beslut — inklusive " +
      "politiska — med den del av hjärnan som föredrar berättelser framför statistik och anekdoter " +
      "framför data. System 2, det reflekterande tänkandet, kräver ansträngning och är dessutom " +
      "biologiskt utformat att vara lat — det aktiveras bara när System 1 stöter på något oväntat.\n\n" +
      "Den retoriska konsekvensen är brutal i sin enkelhet. Den som vill vinna en debatt bör inte " +
      "presentera den mest korrekt nyanserade bilden av verkligheten utan den mest berättelsekompatibla. " +
      "En graf som visar att brottsligheten minskat med tolv procent över tio år förlorar mot en enskild " +
      "berättelse om ett offer vars liv förstördes. Inte för att berättelsen är mer sann, utan för att " +
      "den aktiverar evolutionärt djupare lager av mänsklig kognition. Vi är narrativa varelser, " +
      "formade av hundratusentals år av berättande vid lägereldar, och statistik är bara några " +
      "hundra år gammal. Evolutionärt sett har vi knappt hunnit packa upp den. Grafen talar till " +
      "den rationella hjärnan; berättelsen talar till den urgamla, den som minns att sabeltandstigern " +
      "som åt grannens barn var viktigare att komma ihåg än den genomsnittliga sannolikheten för ett " +
      "tigeranfall.\n\n" +
      "Vad ska vi göra med denna insikt? Det finns i huvudsak tre positioner. Cyniker menar att " +
      "systemet fungerar trots — eller kanske tack vare — den retoriska manipulationen, att " +
      "demokratins mekanism med konkurrerande retoriker paradoxalt nog leder till hyfsat rimliga " +
      "utfall genom en sorts marknadens osynliga hand. Idealister hävdar att lösningen är bättre " +
      "utbildning: lär folk kritiskt tänkande och källkritik, och de genomskådar retoriken. Realister, " +
      "slutligen, argumenterar för institutionella motmedel — oberoende medier, faktakontroll, " +
      "transparens — som inte eliminerar retoriken men åtminstone höjer kostnaden för att ljuga.\n\n" +
      "Själv lutar jag åt att ingen av dessa positioner räcker ensam. Cynismen är intellektuellt " +
      "bekväm men moraliskt bankrutt — den ber oss acceptera manipulation som ett naturtillstånd. " +
      "Idealismen underskattar djupet av våra kognitiva begränsningar; kritiskt tänkande är möjligt " +
      "men kräver resurser, tid och motivation som inte är jämnt fördelade i ett samhälle. " +
      "Och realismens institutioner eroderas just nu av samma teknologiska krafter som förstärker " +
      "retoriken: algoritmerna som belönar engagemang framför sanning och plattformarna som gör " +
      "varje medborgare till en potentiell avsändare utan någon av journalistikens etiska " +
      "begränsningar. Kvar står vi med en obekväm sanning: demokrati kräver medborgare som aktivt " +
      "kämpar mot sina egna kognitiva impulser, som väljer det svåra framför det enkla, det " +
      "nyanserade framför det slagkraftiga. Det är ett högt krav. Frågan är om det är för högt.",
    questions: [
      {
        id: "las-gym-4-q1",
        level: "hitta",
        prompt: "Vilka tre övertalningsmedel nämner texten från Aristoteles?",
        options: [
          "Metafor, liknelse och ironi",
          "Logos, ethos och pathos",
          "Tes, antites och syntes",
          "Kairos, chronos och topos",
        ],
        correct: 1,
        explanation:
          "Texten nämner explicit Aristoteles indelning i logos (det logiska argumentet), ethos (talarens trovärdighet) och pathos (det emotionella tilltalet) som de tre klassiska övertalningsmedlen.",
      },
      {
        id: "las-gym-4-q2",
        level: "tolka",
        prompt: "Varför beskriver texten statistik som evolutionärt \"knappt uppackad\"?",
        options: [
          "För att statistik uppfanns nyligen i biologisk mening",
          "Metaforen visar att människans kognitiva system formades under hundratusentals år av narrativt tänkande, medan kvantitativt tänkande är så nytt att hjärnan ännu inte har anpassat sig till det",
          "För att statistik är fel som metod",
          "För att vi inte undervisar tillräckligt i matematik",
        ],
        correct: 1,
        explanation:
          "Textens evolutionära argument är att berättelsen som kognitiv form har djupare rötter än den statistiska analysen. Hjärnan bearbetar narrativ naturligt (System 1) medan statistik kräver medveten ansträngning (System 2). Det förklarar varför anekdoten slår siffran i offentlig debatt.",
      },
      {
        id: "las-gym-4-q3",
        level: "tolka",
        prompt: "Vilken retorisk strategi använder författaren genom att avsluta med frågan \"Är det för högt?\"",
        options: [
          "En retorisk fråga som tvingar läsaren att själv ta ställning, vilket speglar textens krav på aktiv medborgerlighet",
          "En fråga som visar att författaren inte vet vad hen tycker",
          "Ett stilistiskt misstag — texter bör avslutas med svar, inte frågor",
          "En uppmaning att ge upp demokratin",
        ],
        correct: 0,
        explanation:
          "Den avslutande retoriska frågan är performativ: genom att inte ge ett svar tvingar texten läsaren att göra exakt det den argumenterar för — att tänka kritiskt och bilda sig en egen uppfattning. Formen speglar innehållet.",
      },
      {
        id: "las-gym-4-q4",
        level: "reflektera",
        prompt: "Textens författare presenterar tre positioner (cynism, idealism, realism) och avfärdar alla. Är detta en svaghet eller styrka i argumentationen?",
        options: [
          "Svaghet — en text som inte erbjuder en lösning är meningslös",
          "Styrka — genom att visa otillräckligheten i varje enskild lösning framträder problemets genuina komplexitet, och texten undviker den intellektuella ohederlighet som en enkel lösning skulle innebära",
          "Varken eller — det spelar ingen roll för textens kvalitet",
          "Svaghet — författaren borde ha valt cynismen som den mest realistiska positionen",
        ],
        correct: 1,
        explanation:
          "Att inte erbjuda en enkel lösning kan vara retoriskt kraftfullt om syftet är att synliggöra ett problems komplexitet. Texten argumenterar implicit att den som erbjuder enkla lösningar på demokratins retoriska problem just har fallit i den fälla texten beskriver.",
      },
      {
        id: "las-gym-4-q5",
        level: "tolka",
        prompt: "Påstående: Texten hävdar att demokratin borde ersättas med ett expertsstyre.",
        options: [
          "Sant",
          "Falskt — texten kritiserar demokratins sårbarheter men föreslår att medborgare ska kämpa mot sina kognitiva impulser, inte att systemet ska överges",
        ],
        correct: 1,
        explanation:
          "Texten identifierar demokratins svagheter utan att föreslå att den ska avskaffas. Den avslutar med att kravet ställs på medborgarna — att aktivt motverka sina kognitiva impulser. Det är en demokratisk lösning, inte en elitistisk.",
      },
    ],
  },
  {
    id: "las-gym-5",
    ageGroup: "gymnasiet",
    title: "Novemberljus",
    passage:
      "Över de öppna fälten drev dimman i tunna sjok, och den grå himlen vilade så lågt att man " +
      "nästan kunde nå den med handen. Det var den sortens novemberdag som gör att man förstår " +
      "varför nordiska folk uppfann sina gudamyter: i mötet mellan mörker och ljus, mellan det " +
      "synliga och det fördolda, föds berättelsen som ett försvar mot det oförklarliga. Fälten " +
      "sträckte sig i alla riktningar med en enformighet som var nära besläktad med skönhet — " +
      "den sortens skönhet som kräver tålamod, som inte avslöjar sig vid första anblicken utan " +
      "långsamt träder fram för den som är villig att stanna.\n\n" +
      "Elin hade gått i nästan en timme utan att möta någon. Stigen följde åsen i en lång, svag " +
      "kurva och nedanför bredde Mälardalen ut sig i ett töcknigt panorama av åkerlappar och " +
      "dungar. Längre bort kunde man ana kyrkbyn, en samling husformer som verkade lösas upp i " +
      "dimman som socker i vatten. Hon tänkte på hur landskapet förändrades med årstiderna — inte " +
      "bara ytligt, i färg och temperatur, utan i karaktär. Sommaren var extrovert och generös, " +
      "den visade allt, dolde inget, som en människa som inte kan hålla en hemlighet. Hösten var " +
      "melankolisk och skönhetsmedveten, en estets avskedsföreställning i guld och karmosin. " +
      "Men november var introvert, en årstid som hade vänt sig inåt, och det tilltalade henne " +
      "på ett sätt som hon inte kunde ha förklarat för tio år sedan.\n\n" +
      "Hon hade tagit med sig en bok men inte öppnat den. Det var Vilhelm Mobergs \"Utvandrarna\" — " +
      "en roman hon hade skjutit framför sig i flera år, som man skjuter upp ett svårt samtal man " +
      "vet att man förr eller senare måste ta. Hennes far hade sagt att man måste vara gammal nog " +
      "att ha förlorat något för att förstå den. Hon hade fnyst åt påståendet då, för tio år sedan, " +
      "med den sorts övertygelse som bara den som ännu inte har prövats kan bära. Nu, efter " +
      "skilsmässan och flytten från huset vid sjön — huset där barnen hade tagit sina första steg " +
      "och där äppelträdet i trädgården fortfarande bar frukt som ingen längre plockade — kände " +
      "hon en oväntad respekt för faderns ord. Kanske hade han inte menat att man behövde lida " +
      "för att förstå litteratur, utan att viss litteratur kräver att läsaren bär med sig en " +
      "tyngd, en erfarenhet av att något oåterkalleligt har hänt, för att orden ska landa med " +
      "sin fulla vikt.\n\n" +
      "Vinden drog till och dimman löstes upp i ett ögonblick, som ett förhänge som drogs åt " +
      "sidan av en osynlig hand. Plötsligt låg landskapet framför henne i ett oväntat ljus — " +
      "inte sol, exakt, utan en diffus ljusning som fick varje kontur att framträda med ovanlig " +
      "skärpa. Björkarna på åsen stod nakna och svarta mot den ljusnande himlen och deras grenars " +
      "filigranarbete avtecknade sig med en precision som sommarens lövverk aldrig tillät. Det " +
      "slog henne att det kanske var poängen med november: att avskalningen inte var en förlust " +
      "utan en form av klarhet. Att det som doldes av sommarens överflöd nu framträdde just för " +
      "att det hade blivit naket. Grenarna hade alltid funnits där, men det krävdes att löven " +
      "föll för att deras mönster skulle bli synligt.\n\n" +
      "Hon satte sig på en sten vid stigkanten och tog upp boken. De första meningarna handlade " +
      "om en man som betraktade sin jord och visste att den inte längre kunde föda hans familj. " +
      "Elin kände plötsligt hela den meningen — inte bara dess ord utan dess tyngd, marken som " +
      "inte räcker till, beslutet som inte kan undvikas, blicken ut över ett landskap som är " +
      "samtidigt älskat och otillräckligt. Hon läste vidare, och orden sjönk genom henne som " +
      "rötter genom jord, långsamt och oåterkalleligt. Landskapet omkring henne hade blivit " +
      "en del av läsningen, och läsningen en del av landskapet, tills gränsen mellan bok och " +
      "verklighet var lika otydlig som gränsen mellan dimma och luft. Hon tänkte: så här ska " +
      "det alltså kännas. Det var inte glädje. Det var inte sorg. Det var den tredje saken, den " +
      "som bara november och stora romaner kan framkalla — en stilla förvissning om att allt " +
      "som går förlorat lämnar efter sig en form, och att formen, ibland, är vackrare än det " +
      "som fyllde den.",
    questions: [
      {
        id: "las-gym-5-q1",
        level: "hitta",
        prompt: "Vilken bok bär Elin med sig på sin vandring?",
        options: [
          "Doktor Glas av Hjalmar Söderberg",
          "Utvandrarna av Vilhelm Moberg",
          "Röda rummet av August Strindberg",
          "Nils Holgerssons underbara resa av Selma Lagerlöf",
        ],
        correct: 1,
        explanation:
          "Texten anger explicit att Elin hade tagit med sig Vilhelm Mobergs \"Utvandrarna\". Det är en direkt faktauppgift.",
      },
      {
        id: "las-gym-5-q2",
        level: "tolka",
        prompt: "Vad menar texten med att november är \"introvert\"?",
        options: [
          "Att det regnar mycket i november",
          "Att november saknar estetiska kvaliteter",
          "Att november som årstid präglas av avskalning och inåtvändhet — naturen visar inte upp sig utan drar sig tillbaka, vilket skapar utrymme för reflektion och inre liv",
          "Att ingen vill vara ute i november",
        ],
        correct: 2,
        explanation:
          "Personifieringen av årstiderna (sommaren som extrovert, hösten som melankolisk, november som introvert) bygger en analogi mellan naturens cykler och mänskliga temperament. Novembers introversion speglar Elins inre tillstånd och skapar förutsättningen för hennes fördjupade läsupplevelse.",
      },
      {
        id: "las-gym-5-q3",
        level: "tolka",
        prompt: "Vilken parallell dras mellan novemberlandskapet och Elins livssituation?",
        options: [
          "Båda är kalla och obehagliga",
          "Liksom träden blir nakna och tydligare utan löv, har Elins förluster (skilsmässan, flytten) skapat en klarhet och mottaglighet som inte fanns när livet var \"lövtätt\"",
          "Elin vill flytta söderut för att slippa mörkret",
          "Landskapet påminner henne om hennes barndomshem",
        ],
        correct: 1,
        explanation:
          "Textens centrala metafor är att avskalning — i naturen som i livet — inte bara är förlust utan också klarhet. Björkarnas nakna grenar framträder tydligare utan löv, och Elin kan nu förstå Moberg just för att hon har förlorat tillräckligt. Landskapet speglar den inre processen.",
      },
      {
        id: "las-gym-5-q4",
        level: "reflektera",
        prompt: "Faderns påstående att man måste \"ha förlorat något\" för att förstå Utvandrarna — stödjer texten den tanken?",
        options: [
          "Nej, texten visar att Elin fortfarande inte förstår boken",
          "Ja, men texten nyanserar det: det handlar inte om att lidande är nödvändigt utan att viss erfarenhet ger ord en resonansbotten som gör att de \"landar med sin fulla vikt\"",
          "Texten nämner faderns åsikt men tar inte ställning",
          "Nej, texten menar att alla kan förstå alla böcker oavsett livserfarenhet",
        ],
        correct: 1,
        explanation:
          "Texten bekräftar faderns intuition men omformulerar den: Elin förstår att det inte handlar om lidande som krav utan om erfarenhet som resonansbotten. Orden \"sjönk genom henne som rötter genom jord\" visar att förståelsen nu är fysisk, kroppslig — inte bara intellektuell.",
      },
      {
        id: "las-gym-5-q5",
        level: "reflektera",
        prompt: "Textens sista mening beskriver \"en form som är vackrare än det som fyllde den\". Vilken estetisk och existentiell hållning uttrycker detta?",
        options: [
          "En nihilistisk syn: ingenting har något värde",
          "En ytlig optimism: allt ordnar sig till slut",
          "En hållning nära den japanska estetiken wabi-sabi: skönhet i det ofullständiga, det förgängliga och det avskalade — förlusten skapar inte bara tomhet utan en struktur som i sig rymmer skönhet",
          "En kristen syn på lidande som nödvändig prövning",
        ],
        correct: 2,
        explanation:
          "Den avslutande insikten — att det som gått förlorat lämnar en form som kan vara vackrare än det som fyllde den — uttrycker en estetik av avskalning besläktad med wabi-sabi. Det är varken optimism eller nihilism utan en tredje position: att finna mening och skönhet i själva frånvarons kontur.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// All texts
// ---------------------------------------------------------------------------

const ALL_READING_TEXTS: ReadingText[] = [
  ...lagstadietTexts,
  ...mellanstadietTexts,
  ...hogstadietTexts,
  ...gymnasietTexts,
];

// ---------------------------------------------------------------------------
// Helper — get texts with fallback chain
// ---------------------------------------------------------------------------

const AGE_GROUP_FALLBACKS: Record<AgeGroup, AgeGroup[]> = {
  lagstadiet: [],
  mellanstadiet: ["lagstadiet"],
  hogstadiet: ["mellanstadiet", "lagstadiet"],
  gymnasiet: ["hogstadiet", "mellanstadiet", "lagstadiet"],
};

export function getReadingTexts(ageGroup: AgeGroup): ReadingText[] {
  const exact = ALL_READING_TEXTS.filter((t) => t.ageGroup === ageGroup);
  if (exact.length > 0) return exact;

  for (const fallback of AGE_GROUP_FALLBACKS[ageGroup]) {
    const texts = ALL_READING_TEXTS.filter((t) => t.ageGroup === fallback);
    if (texts.length > 0) return texts;
  }

  return [];
}
