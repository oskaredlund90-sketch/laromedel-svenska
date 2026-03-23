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
  reflektera: "Reflektera och v\u00e4rdera",
};

// ---------------------------------------------------------------------------
// Data — L\u00e5gstadiet
// ---------------------------------------------------------------------------

const lagstadietTexts: ReadingText[] = [
  {
    id: "las-lag-1",
    ageGroup: "lagstadiet",
    title: "Ellas f\u00f6rsta skoldag",
    passage:
      "Ella vaknade tidigt p\u00e5 m\u00e5ndagen. Solen sken genom f\u00f6nstret och f\u00e5glarna sj\u00f6ng utanf\u00f6r. " +
      "Idag skulle hon b\u00f6rja i f\u00f6rsta klass! Hon tog p\u00e5 sig sin nya bl\u00e5 kl\u00e4nning och sprang ner till k\u00f6ket. " +
      'Pappa hade gjort pannkakor. "Grattis p\u00e5 f\u00f6rsta skoldagen!" sa han och kramade henne. ' +
      "Ella \u00e5t tv\u00e5 pannkakor med bl\u00e5b\u00e4rssylt. P\u00e5 v\u00e4gen till skolan h\u00f6ll hon pappas hand h\u00e5rt. " +
      "N\u00e4r de kom fram stod hennes l\u00e4rare vid d\u00f6rren och log. " +
      '"V\u00e4lkommen, Ella!" sa l\u00e4raren. D\u00e5 sl\u00e4ppte Ella pappas hand och gick in.',
    questions: [
      {
        id: "las-lag-1-q1",
        level: "hitta",
        prompt: "Vad hade pappa gjort till frukost?",
        options: ["Gr\u00f6t", "Pannkakor", "Mackor", "Yoghurt"],
        correct: 1,
        explanation:
          'I texten st\u00e5r det att "Pappa hade gjort pannkakor." Det \u00e4r ett faktum som g\u00e5r att hitta direkt i texten.',
      },
      {
        id: "las-lag-1-q2",
        level: "hitta",
        prompt: "Vilken f\u00e4rg var Ellas kl\u00e4nning?",
        options: ["R\u00f6d", "Gr\u00f6n", "Bl\u00e5", "Gul"],
        correct: 2,
        explanation:
          'Texten ber\u00e4ttar att Ella tog p\u00e5 sig "sin nya bl\u00e5 kl\u00e4nning". Svaret finns direkt i texten.',
      },
      {
        id: "las-lag-1-q3",
        level: "tolka",
        prompt: "Varf\u00f6r h\u00f6ll Ella pappas hand h\u00e5rt p\u00e5 v\u00e4gen till skolan?",
        options: [
          "Hon var arg",
          "Hon var nervs\u00f6s eller lite r\u00e4dd",
          "Hon ville springa",
          "Det var halt p\u00e5 v\u00e4gen",
        ],
        correct: 1,
        explanation:
          "Texten s\u00e4ger inte rakt ut att Ella var nervs\u00f6s, men att h\u00e5lla n\u00e5gons hand h\u00e5rt visar att man k\u00e4nner sig os\u00e4ker eller r\u00e4dd. Det \u00e4r en slutsats man kan dra.",
      },
      {
        id: "las-lag-1-q4",
        level: "reflektera",
        prompt: "Vad tror du Ella k\u00e4nde n\u00e4r hon gick in i skolan?",
        options: [
          "Hon var fortfarande livr\u00e4dd",
          "Hon k\u00e4nde sig modigare eftersom l\u00e4raren var v\u00e4nlig",
          "Hon ville g\u00e5 hem direkt",
          "Hon t\u00e4nkte inte p\u00e5 n\u00e5gonting alls",
        ],
        correct: 1,
        explanation:
          'Ella sl\u00e4ppte pappas hand och gick in sj\u00e4lv efter att l\u00e4raren h\u00e4lsade v\u00e4lkomnande. Det tyder p\u00e5 att hon k\u00e4nde sig tryggare. H\u00e4r f\u00e5r du t\u00e4nka p\u00e5 hur du sj\u00e4lv hade k\u00e4nt dig i samma situation.',
      },
    ],
  },
  {
    id: "las-lag-2",
    ageGroup: "lagstadiet",
    title: "Katten Misse",
    passage:
      "Misse var en liten svart katt med vita tassar. Han bodde hos familjen Lindgren p\u00e5 en g\u00e5rd p\u00e5 landet. " +
      "Varje morgon gick Misse ut i tr\u00e4dg\u00e5rden f\u00f6r att jaga fj\u00e4rilar. Han sm\u00f6g alltid l\u00e5ngsamt genom gr\u00e4set " +
      "och v\u00e4ntade t\u00e5lmodigt. Men han f\u00e5ngade aldrig n\u00e5gon fj\u00e4ril. En dag hittade han en liten igelkott under busken. " +
      "Misse nosade f\u00f6rsiktigt p\u00e5 igelkotten och hoppade bakl\u00e4nges n\u00e4r den rullade ihop sig. " +
      "Fr\u00e5n den dagen gick Misse aldrig under den busken igen.",
    questions: [
      {
        id: "las-lag-2-q1",
        level: "hitta",
        prompt: "Hur s\u00e5g Misse ut?",
        options: [
          "Vit med svarta tassar",
          "Svart med vita tassar",
          "Randig och stor",
          "Gr\u00e5 och fluffig",
        ],
        correct: 1,
        explanation:
          'Texten b\u00f6rjar med att Misse var "en liten svart katt med vita tassar". Svaret st\u00e5r i f\u00f6rsta meningen.',
      },
      {
        id: "las-lag-2-q2",
        level: "tolka",
        prompt: "Varf\u00f6r gick Misse aldrig under busken igen?",
        options: [
          "Busken hade tagits bort",
          "Han var r\u00e4dd f\u00f6r igelkotten",
          "Han hittade en b\u00e4ttre plats",
          "Familjen Lindgren f\u00f6rbj\u00f6d det",
        ],
        correct: 1,
        explanation:
          "Misse hoppade bakl\u00e4nges n\u00e4r igelkotten rullade ihop sig. Det visar att han blev skr\u00e4md, och d\u00e4rf\u00f6r undvek han busken efter det.",
      },
      {
        id: "las-lag-2-q3",
        level: "reflektera",
        prompt: "Vad ber\u00e4ttar texten om hur Misse \u00e4r som katt?",
        options: [
          "Han \u00e4r modig och stark",
          "Han \u00e4r nyfiken men f\u00f6rsiktig",
          "Han \u00e4r lat och ointresserad",
          "Han \u00e4r elak mot andra djur",
        ],
        correct: 1,
        explanation:
          "Misse jagar fj\u00e4rilar och nosar p\u00e5 igelkotten, vilket visar nyfikenhet. Men han g\u00f6r det f\u00f6rsiktigt och blir r\u00e4dd, s\u00e5 han \u00e4r ocks\u00e5 f\u00f6rsiktig. H\u00e4r beh\u00f6ver du sammanfatta intrycket av Misse.",
      },
    ],
  },
    {
    id: "las-lag-3",
    ageGroup: "lagstadiet",
    title: "Huset vid skogen",
    passage:
      "Varje sommar åkte Wilma till mormors hus vid skogen. Huset var rött med vita knutar och hade en veranda " +
      "där mormor brukade sitta och läsa. Bakom huset fanns en stig som ledde ner till en bäck. " +
      "Wilma älskade att vada i bäcken och leta efter stenar med glittrande fläckar. " +
      "En dag hittade hon en sten som var alldeles rund och slät. Den var grå med ett vitt streck runt om, som ett bälte. " +
      '"Mormor, titta!" ropade Wilma. Mormor tog stenen och höll den mot ljuset. ' +
      '"Det där är en lyckosten," sa mormor. "Man hittar dem bara om man letar utan att stressa." ' +
      "Wilma stoppade stenen i fickan. Resten av sommaren letade hon efter fler, men hittade aldrig någon lika fin. " +
      "Kanske hade mormor rätt. Man hittar de bästa sakerna när man inte jagar efter dem.",
    questions: [
      {
        id: "las-lag-3-q1",
        level: "hitta",
        prompt: "Hur såg mormors hus ut?",
        options: ["Gult med blå dörr", "Rött med vita knutar", "Vitt med grönt tak", "Brunt och litet"],
        correct: 1,
        explanation:
          "I texten står det att huset var \"rött med vita knutar\".",
      },
      {
        id: "las-lag-3-q2",
        level: "hitta",
        prompt: "Vad hittade Wilma i bäcken?",
        options: ["En fisk", "En rund sten med ett vitt streck", "En snäcka", "En gammal nyckel"],
        correct: 1,
        explanation:
          "Texten beskriver stenen som \"alldeles rund och slät\" med \"ett vitt streck runt om, som ett bälte\".",
      },
      {
        id: "las-lag-3-q3",
        level: "tolka",
        prompt: "Vad menade mormor med att man hittar lyckostenar \"bara om man letar utan att stressa\"?",
        options: [
          "Att man måste springa fort",
          "Att fina saker händer när man tar det lugnt och är uppmärksam",
          "Att stenar bara finns på sommaren",
          "Att mormor inte gillade att Wilma sprang",
        ],
        correct: 1,
        explanation:
          "Mormor menar att de bästa upplevelserna kommer när man inte stressar utan tar sig tid att vara nyfiken.",
      },
      {
        id: "las-lag-3-q4",
        level: "reflektera",
        prompt: "Varför hittade Wilma aldrig en lika fin sten igen, tror du?",
        options: [
          "Stenarna tog slut i bäcken",
          "Hon letade för intensivt istället för att bara njuta",
          "Mormor hade gömt alla stenar",
          "Det var för kallt i vattnet",
        ],
        correct: 1,
        explanation:
          "Texten antyder att Wilma sedan letade aktivt istället för att bara vada och utforska fritt. Poängen är att de finaste upptäckterna ofta kommer av sig själva.",
      },
    ],
  },
  {
    id: "las-lag-4",
    ageGroup: "lagstadiet",
    title: "Fågelungen",
    passage:
      "Lucas hittade en liten fågelunge på marken under det stora äppelträdet. Den var nästan naken, utan riktiga fjädrar, " +
      "och den pep svagt. Lucas ville ta upp den och bära hem den. " +
      '"Vänta," sa pappa som stod bredvid. "Titta uppåt." ' +
      "Lucas tittade. Högt uppe i trädet satt ett bo. Och på en gren alldeles intill satt en fågel och tittade ner på dem med " +
      "huvudet på sned. " +
      '"Det är mamman," viskade pappa. "Hon väntar på att vi ska gå, så hon kan hjälpa sin unge." ' +
      "Lucas ville stanna och titta, men pappa sa att det bästa de kunde göra var att gå därifrån. " +
      "Nästa dag gick Lucas tillbaka till trädet. Fågelungen var borta. Han tittade upp mot boet och log.",
    questions: [
      {
        id: "las-lag-4-q1",
        level: "hitta",
        prompt: "Var hittade Lucas fågelungen?",
        options: ["I en buske", "På marken under äppelträdet", "I ett fågelhus", "Vid sjön"],
        correct: 1,
        explanation:
          "Texten säger att Lucas hittade fågelungen \"på marken under det stora äppelträdet\".",
      },
      {
        id: "las-lag-4-q2",
        level: "tolka",
        prompt: "Varför ville pappa att de skulle gå därifrån?",
        options: [
          "Han var rädd för fåglarna",
          "Om de gick kunde fågelmamman komma ner och ta hand om ungen",
          "Det var dags att äta middag",
          "Fågelungen var redan död",
        ],
        correct: 1,
        explanation:
          "Pappa förstod att fågelmamman inte vågade komma ner så länge människor stod intill. Djur behöver ibland att vi håller avstånd.",
      },
      {
        id: "las-lag-4-q3",
        level: "reflektera",
        prompt: "Varför log Lucas när fågelungen var borta nästa dag?",
        options: [
          "Han var glad att fågelungen var borta",
          "Han förstod att mamman hade räddat sin unge tillbaka till boet",
          "Han hittade en ny fågelunge",
          "Han var ledsen men låtsades le",
        ],
        correct: 1,
        explanation:
          "Lucas log för att han förstod att det goda hade hänt — fågelmamman hade tagit hand om sin unge. Ibland är det bästa man kan göra att låta naturen sköta sig.",
      },
    ],
  },
  {
    id: "las-lag-5",
    ageGroup: "lagstadiet",
    title: "Mormors händer",
    passage:
      "Mormors händer var skrynkliga och bruna av solen. De hade blåa ådror som slingrade sig som små floder under huden. " +
      "Alva brukade sitta i soffan och följa ådrorna med fingret medan mormor berättade. " +
      "De händerna hade plockat jordgubbar i femtio somrar. De hade stuckit den tjockaste tröjan Alva någonsin sett. " +
      "De hade lagat tusen pannkakor och torkat lika många tårar. " +
      '"Dina händer kan allt, mormor," sa Alva. ' +
      "Mormor skrattade. \"Inte allt. Jag kan inte spela gitarr. Men jag kan hålla din hand, och det räcker gott.\" " +
      "Alva kramade mormors hand lite hårdare. Den var varm och mjuk, fast den såg skrovlig ut.",
    questions: [
      {
        id: "las-lag-5-q1",
        level: "hitta",
        prompt: "Vad brukade Alva göra när de satt i soffan?",
        options: [
          "Titta på TV",
          "Följa ådrorna på mormors händer med fingret",
          "Läsa en bok",
          "Äta godis",
        ],
        correct: 1,
        explanation:
          "Texten berättar att Alva brukade \"följa ådrorna med fingret medan mormor berättade\".",
      },
      {
        id: "las-lag-5-q2",
        level: "tolka",
        prompt: "Vad berättar texten egentligen om genom att beskriva mormors händer?",
        options: [
          "Att mormor behöver handkräm",
          "Att mormor har levt ett långt liv fullt av arbete, omsorg och kärlek",
          "Att mormor är gammal och trött",
          "Att Alva tycker mormors händer är konstiga",
        ],
        correct: 1,
        explanation:
          "Händerna är en bild för hela mormors liv — alla jordgubbar, tröjor, pannkakor och torkade tårar representerar omsorg och erfarenhet.",
      },
      {
        id: "las-lag-5-q3",
        level: "reflektera",
        prompt: "Varför säger mormor att det \"räcker gott\" att kunna hålla Alvas hand?",
        options: [
          "Hon vill inte lära sig gitarr",
          "Hon menar att närheten till Alva är det viktigaste av allt",
          "Hon skämtar bara",
          "Hon är för gammal för att göra andra saker",
        ],
        correct: 1,
        explanation:
          "Mormor visar att det viktigaste inte är att kunna allt, utan att finnas där för dem man älskar. Att hålla någons hand är ett sätt att visa kärlek.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Mellanstadiet
// ---------------------------------------------------------------------------

const mellanstadietTexts: ReadingText[] = [
  {
    id: "las-mel-1",
    ageGroup: "mellanstadiet",
    title: "Stormen vid sj\u00f6n",
    passage:
      "Leo och Mira brukade cykla till Ekesj\u00f6n varje sommar. D\u00e4r hade de en hemlig koja bakom de stora ekarnas rader vid strandkanten. " +
      "En eftermiddag i juli m\u00f6rknade himlen pl\u00f6tsligt och vinden tilltog. Tr\u00e4den b\u00f6rjade svajs f\u00f6r vinden och v\u00e5gorna p\u00e5 sj\u00f6n blev h\u00f6ga och vita. " +
      '"Vi m\u00e5ste g\u00e5 h\u00e4rifr\u00e5n!" ropade Mira. Men Leo ville stanna. Han tyckte stormen var sp\u00e4nnande att titta p\u00e5. ' +
      "En kraftig vindby fick ett stort tr\u00e4d att knaka. D\u00e5 f\u00f6rstod \u00e4ven Leo att de m\u00e5ste fly. " +
      "De sprang s\u00e5 fort de kunde l\u00e4ngs stigen. N\u00e4r de kom hem var de genombl\u00f6ta men glada att vara i s\u00e4kerhet. " +
      '"N\u00e4sta g\u00e5ng lyssnar jag p\u00e5 dig direkt," sa Leo och log mot Mira.',
    questions: [
      {
        id: "las-mel-1-q1",
        level: "hitta",
        prompt: "Var l\u00e5g Leo och Miras koja?",
        options: [
          "P\u00e5 en kulle",
          "Bakom ekarna vid strandkanten",
          "Inne i skogen",
          "P\u00e5 en \u00f6 i sj\u00f6n",
        ],
        correct: 1,
        explanation:
          'Texten ber\u00e4ttar att de hade "en hemlig koja bakom de stora ekarnas rader vid strandkanten". Informationen st\u00e5r direkt i texten.',
      },
      {
        id: "las-mel-1-q2",
        level: "tolka",
        prompt: "Varf\u00f6r \u00e4ndrade Leo uppfattning och ville fly?",
        options: [
          "Mira b\u00f6rjade gr\u00e5ta",
          "Han h\u00f6rde att ett tr\u00e4d knakade och ins\u00e5g faran",
          "Det b\u00f6rjade bl\u00e5sa mindre",
          "Han beh\u00f6vde cykla hem till middagen",
        ],
        correct: 1,
        explanation:
          "Texten s\u00e4ger att det knakande tr\u00e4det fick Leo att f\u00f6rst\u00e5. Det var det konkreta hotet som fick honom att ta situationen p\u00e5 allvar.",
      },
      {
        id: "las-mel-1-q3",
        level: "reflektera",
        prompt: "Vad l\u00e4rde sig Leo av h\u00e4ndelsen?",
        options: [
          "Att stormar alltid \u00e4r farliga",
          "Att man b\u00f6r lyssna p\u00e5 andra n\u00e4r de k\u00e4nner fara",
          "Att man aldrig ska cykla till sj\u00f6n",
          "Att ek\u00e4r \u00e4r svaga tr\u00e4d",
        ],
        correct: 1,
        explanation:
          'Leo sa sj\u00e4lv att han n\u00e4sta g\u00e5ng ska lyssna direkt. Ber\u00e4ttelsens budskap handlar om att ta andras oro p\u00e5 allvar, inte om att undvika naturen helt.',
      },
    ],
  },
  {
    id: "las-mel-2",
    ageGroup: "mellanstadiet",
    title: "Det mystiska brevet",
    passage:
      "En tisdag i november hittade Amir ett kuvert p\u00e5 sitt skrivbord n\u00e4r han kom hem fr\u00e5n skolan. " +
      'Det var ljusbl\u00e5tt och p\u00e5 framsidan stod det "Till Amir" skrivet med sn\u00f6rklig stil. Det fanns inget frim\u00e4rke och ingen avs\u00e4ndare. ' +
      "Inuti l\u00e5g ett papper med en karta ritad f\u00f6r hand. Kartan visade deras tr\u00e4dg\u00e5rd med ett kryss vid den gamla stenmuren. " +
      "Amir drog p\u00e5 sig jackan och gick ut. Vid muren hittade han en liten tr\u00e4ask med hans namn ingraverat p\u00e5 locket. " +
      "Inuti l\u00e5g en kompass i m\u00e4ssing och en lapp: \"Den h\u00e4r tillh\u00f6rde din farfar. Nu \u00e4r det din tur att utforska.\" " +
      'Amir k\u00e4nde igen mormors handstil. Hans \u00f6gon fylldes av t\u00e5rar \u2014 farfar hade \u00e4lskat att vandra i skogen.',
    questions: [
      {
        id: "las-mel-2-q1",
        level: "hitta",
        prompt: "Vad hittade Amir i tr\u00e4asken?",
        options: [
          "En bok och en penna",
          "En kompass i m\u00e4ssing och en lapp",
          "Pengar och ett foto",
          "En nyckel och en karta",
        ],
        correct: 1,
        explanation:
          'Texten s\u00e4ger tydligt att det "l\u00e5g en kompass i m\u00e4ssing och en lapp" i asken.',
      },
      {
        id: "las-mel-2-q2",
        level: "tolka",
        prompt: "Varf\u00f6r fylldes Amirs \u00f6gon av t\u00e5rar?",
        options: [
          "Han var r\u00e4dd f\u00f6r kompassen",
          "Han var besviken p\u00e5 g\u00e5van",
          "Han blev r\u00f6rd \u00f6ver minnessakerna efter farfar",
          "Han slog sig p\u00e5 stenmuren",
        ],
        correct: 2,
        explanation:
          "Farfar hade \u00e4lskat att vandra, och nu fick Amir hans kompass. T\u00e5rarna visar att Amir blev emotionellt ber\u00f6rd av att f\u00e5 n\u00e5got som p\u00e5minde om farfar.",
      },
      {
        id: "las-mel-2-q3",
        level: "tolka",
        prompt: "Vem hade skrivit brevet och g\u00f6mt asken?",
        options: ["Farfar", "En kompis", "Mormor", "En ok\u00e4nd person"],
        correct: 2,
        explanation:
          'Amir "k\u00e4nde igen mormors handstil", vilket visar att det var mormor som planerat \u00f6verraskningen.',
      },
      {
        id: "las-mel-2-q4",
        level: "reflektera",
        prompt:
          "Varf\u00f6r tror du att mormor valde att ge g\u00e5van p\u00e5 det h\u00e4r s\u00e4ttet, i st\u00e4llet f\u00f6r att bara r\u00e4cka \u00f6ver den?",
        options: [
          "Hon ville g\u00f6ra det till ett \u00e4ventyr s\u00e5 att det k\u00e4ndes extra speciellt",
          "Hon hade gl\u00f6mt att ge den f\u00f6rut",
          "Hon ville inte att Amir skulle se henne",
          "Hon visste inte var Amir bodde",
        ],
        correct: 0,
        explanation:
          "Genom att g\u00f6ra det till en skattkarta och ett mysterium skapade mormor en upplevelse som passade temat: utforskande och \u00e4ventyr, precis som farfar tyckte om.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — H\u00f6gstadiet
// ---------------------------------------------------------------------------

const hogstadietTexts: ReadingText[] = [
  {
    id: "las-hog-1",
    ageGroup: "hogstadiet",
    title: "Den tomma stolen",
    passage:
      "N\u00e4r Nora kom tillbaka till skolan efter sommarlovet var Jens b\u00e4nk tom. Ingen n\u00e4mnde hans namn p\u00e5 uppropet " +
      "och l\u00e4raren gick snabbt vidare. P\u00e5 rasten fr\u00e5gade Nora sina klasskompisar, men de ryckte bara p\u00e5 axlarna. " +
      '"Han flyttade v\u00e4l," sa n\u00e5gon. Nora t\u00e4nkte p\u00e5 alla g\u00e5nger Jens hade suttit ensam i matsalen. ' +
      "Hon mindes hur hon hade t\u00e4nkt g\u00e5 och s\u00e4tta sig bredvid honom men aldrig gjort det. Det hade alltid funnits en urs\u00e4kt: " +
      "kompisarna v\u00e4ntade, klockan var f\u00f6r lite, det k\u00e4ndes awkward. Nu k\u00e4ndes alla de urs\u00e4kterna sm\u00e5 och tomma. " +
      "Nora skrev ett meddelande till Jens p\u00e5 kv\u00e4llen. Hon fick inget svar p\u00e5 flera dagar. N\u00e4r svaret till slut kom stod det bara: " +
      '"Tack. Det beh\u00f6vde jag h\u00f6ra." Nora lovade sig sj\u00e4lv att aldrig mer v\u00e4nta med att vara sn\u00e4ll.',
    questions: [
      {
        id: "las-hog-1-q1",
        level: "hitta",
        prompt: "Vad hade h\u00e4nt med Jens plats n\u00e4r terminen b\u00f6rjade?",
        options: [
          "N\u00e5gon annan satt d\u00e4r",
          "Den var tom och han n\u00e4mndes inte p\u00e5 uppropet",
          "L\u00e4raren ber\u00e4ttade att han var sjuk",
          "Han satt l\u00e4ngst bak i klassrummet",
        ],
        correct: 1,
        explanation:
          "Texten fastsl\u00e5r att b\u00e4nken var tom och att l\u00e4raren hoppade \u00f6ver hans namn. B\u00e5da detaljerna finns direkt i texten.",
      },
      {
        id: "las-hog-1-q2",
        level: "tolka",
        prompt:
          "Vad inneb\u00e4r det att Noras urs\u00e4kter k\u00e4ndes \u201csm\u00e5 och tomma\u201d?",
        options: [
          "Att hon \u00e5ngrade att hon aldrig tog steget att vara v\u00e4nlig mot Jens",
          "Att hon var arg p\u00e5 sina kompisar",
          "Att hon tyckte skolan var tr\u00e5kig",
          "Att hon inte f\u00f6rstod varf\u00f6r Jens hade flyttat",
        ],
        correct: 0,
        explanation:
          "Nora ins\u00e5g i efterhand att hennes sk\u00e4l att inte agera hade varit obetydliga j\u00e4mf\u00f6rt med vad det hade betytt f\u00f6r Jens. Det \u00e4r en tolkning av hennes skuldkl\u00e4nda reflektion.",
      },
      {
        id: "las-hog-1-q3",
        level: "tolka",
        prompt: "Vad antyder texten om Jens situation f\u00f6re flytten?",
        options: [
          "Han var popul\u00e4r och trivdes",
          "Han k\u00e4nde sig utanf\u00f6r och ensam",
          "Han hade m\u00e5nga v\u00e4nner utanf\u00f6r skolan",
          "Han var den b\u00e4sta eleven i klassen",
        ],
        correct: 1,
        explanation:
          "Att Jens ofta satt ensam i matsalen och att hans korta svar visar tacksamhet tyder p\u00e5 att han k\u00e4nde sig isolerad.",
      },
      {
        id: "las-hog-1-q4",
        level: "reflektera",
        prompt:
          "Vilket tema eller budskap \u00e4r centralt i ber\u00e4ttelsen?",
        options: [
          "Att man alltid ska flytta till en ny skola",
          "Att sm\u00e5 v\u00e4nliga handlingar kan g\u00f6ra stor skillnad och att man inte b\u00f6r v\u00e4nta",
          "Att l\u00e4rare borde ta mer ansvar",
          "Att sommarlov \u00e4r d\u00e5ligt f\u00f6r v\u00e4nskaper",
        ],
        correct: 1,
        explanation:
          "Ber\u00e4ttelsens k\u00e4rna \u00e4r att Nora \u00e5ngrar sin passivitet. Budskapet handlar om att inte skjuta upp v\u00e4nlighet, f\u00f6r man vet inte hur l\u00e4nge tillf\u00e4llet finns.",
      },
    ],
  },
  {
    id: "las-hog-2",
    ageGroup: "hogstadiet",
    title: "N\u00e4r tystnaden talar",
    passage:
      "Klassen fick i uppgift att skriva en ins\u00e4ndare om n\u00e5got de tyckte var or\u00e4ttvist. De flesta valde \u00e4mnen som l\u00e4xor, " +
      "mobilf\u00f6rbud och korta raster. Men Fatima skrev om n\u00e5got annat. Hon skrev om hur det k\u00e4nns att vara ny i ett land " +
      "och st\u00e5 i en grupp d\u00e4r alla pratar men ingen pratar med dig. Hon beskrev skolg\u00e5rden som ett hav d\u00e4r alla andra " +
      "hade b\u00e5tar, men hon fick simma. Texten var inte arg. Den var lugn, n\u00e4stan tyst, och det var just det som gjorde den s\u00e5 stark. " +
      'N\u00e4r l\u00e4raren l\u00e4ste upp den anonymt blev det helt kn\u00e4pptyst i klassrummet. N\u00e5gon viskade "wow". ' +
      "Efter lektionen gick tre elever fram till Fatima. De sa ingenting avancerat, bara: \"Vill du h\u00e4nga med p\u00e5 rasten?\" " +
      "Det var f\u00f6rsta g\u00e5ngen n\u00e5gon hade fr\u00e5gat.",
    questions: [
      {
        id: "las-hog-2-q1",
        level: "hitta",
        prompt: "Vilken typ av text fick klassen skriva?",
        options: [
          "En novell",
          "En ins\u00e4ndare om n\u00e5got or\u00e4ttvist",
          "En dikt om naturen",
          "En bokrecension",
        ],
        correct: 1,
        explanation:
          'Texten s\u00e4ger direkt att klassen fick "skriva en ins\u00e4ndare om n\u00e5got de tyckte var or\u00e4ttvist".',
      },
      {
        id: "las-hog-2-q2",
        level: "tolka",
        prompt:
          'Vad inneb\u00e4r j\u00e4mf\u00f6relsen att skolg\u00e5rden var "ett hav d\u00e4r alla andra hade b\u00e5tar, men hon fick simma"?',
        options: [
          "Fatima gillade att simma",
          "Skolg\u00e5rden l\u00e5g n\u00e4ra havet",
          "Alla andra hade f\u00f6ruts\u00e4ttningar att klara sig socialt, men Fatima saknade det st\u00f6det",
          "Det var en lek p\u00e5 rasten",
        ],
        correct: 2,
        explanation:
          "Metaforen visar att de andra eleverna hade trygghet (\"b\u00e5tar\") i form av v\u00e4nner och spr\u00e5k, medan Fatima k\u00e4mpade ensam. Det \u00e4r ett bildligt uttryck f\u00f6r utanf\u00f6rskap.",
      },
      {
        id: "las-hog-2-q3",
        level: "reflektera",
        prompt:
          "Varf\u00f6r tror du att Fatimas text p\u00e5verkade klasskompisarna s\u00e5 starkt?",
        options: [
          "F\u00f6r att den var l\u00e5ng och detaljerad",
          "F\u00f6r att den var rolig",
          "F\u00f6r att den lugna tonen och den personliga bilden fick dem att verkligen k\u00e4nna hur det var",
          "F\u00f6r att l\u00e4raren tvingade dem att lyssna",
        ],
        correct: 2,
        explanation:
          "Texten betonar att det var den lugna, n\u00e4stan tysta tonen som gjorde texten stark. N\u00e4r n\u00e5gon delar en personlig upplevelse utan aggressivitet kan det n\u00e5 fram djupare.",
      },
    ],
  },
    {
    id: "las-hog-3",
    ageGroup: "hogstadiet",
    title: "Ljudet av ingenting",
    passage:
      "Selma hade inte märkt det förrän strömmen gick. Plötsligt var allt tyst. Inte bara tyst — stumt. " +
      "Kylen slutade brumma. Fläkten i datorn dog. Det eviga surret från lamporna försvann. " +
      "Hon satt kvar vid skrivbordet i mörkret och lyssnade. Det var som att höra ett rum andas för första gången. " +
      "Utanför fönstret hördes vinden i björken och någonstans längre bort en hund som skällde. " +
      "Selma insåg att hon aldrig upplevt äkta tystnad. Hela hennes liv hade fyllts av ett elektroniskt brus som hon slutat lägga märke till. " +
      "Det var som att ha gått med en tung ryggsäck så länge att man glömt att den fanns — tills någon lyfte av den. " +
      "Strömmen kom tillbaka efter tjugo minuter. Kylskåpet började brumma, fläkten snurrade igång, lamporna surrade. " +
      "Selma kände hur ljudet la sig som ett lock över allting igen. " +
      "Hon gick till fönstret och öppnade det. Björken prasslade fortfarande. Hunden hade tystnat. " +
      "Men nu hörde Selma dem — de ljud som alltid funnits där bakom bruset.",
    questions: [
      {
        id: "las-hog-3-q1",
        level: "hitta",
        prompt: "Vad orsakade tystnaden?",
        options: ["Selma satte in öronproppar", "Strömmen gick", "Det var mitt i natten", "Hon stängde av allt själv"],
        correct: 1,
        explanation:
          "Texten inleds med att \"strömmen gick\" och alla elektroniska ljud försvann.",
      },
      {
        id: "las-hog-3-q2",
        level: "tolka",
        prompt: "Vad innebär jämförelsen med ryggsäcken?",
        options: [
          "Att Selma hade ryggont",
          "Att det elektroniska bruset var en börda hon vant sig vid utan att veta om det",
          "Att hon hade glömt sin väska i skolan",
          "Att tystnaden var tung att bära",
        ],
        correct: 1,
        explanation:
          "Liknelsen med ryggsäcken visar att man kan vänja sig vid något belastande till den grad att man glömmer att det finns — tills det tas bort och man känner lättnaden.",
      },
      {
        id: "las-hog-3-q3",
        level: "tolka",
        prompt: "Vad menar texten med att ljudet la sig \"som ett lock\"?",
        options: [
          "Att rummet blev varmare",
          "Att det elektroniska bruset döljer naturliga ljud och skärmar av oss",
          "Att Selma satte på en skiva",
          "Att kylen var trasig",
        ],
        correct: 1,
        explanation:
          "Metaforen \"lock\" antyder att det elektriska bruset lägger sig ovanpå och täcker de ljud som egentligen finns — fågelkvitter, vind, det levande. Vi lyssnar men hör inte.",
      },
      {
        id: "las-hog-3-q4",
        level: "reflektera",
        prompt: "Vad vill texten säga om vårt förhållande till ljud och teknik?",
        options: [
          "Att vi borde slänga alla elektriska apparater",
          "Att vi omges av ljud vi inte längre är medvetna om, och att det finns en värld av naturliga ljud under bruset",
          "Att hunden störde Selma",
          "Att strömavbrott alltid är positiva",
        ],
        correct: 1,
        explanation:
          "Texten reflekterar över hur tekniken skapar ett konstant brus vi normaliserat. Poängen är inte att tekniken är ond, utan att vi förlorat kontakten med det som finns bakom — naturen, tystnaden, oss själva.",
      },
    ],
  },
  {
    id: "las-hog-4",
    ageGroup: "hogstadiet",
    title: "Arvet",
    passage:
      "Morfar hade alltid haft smutsiga naglar. Inte för att han var slarvig — tvärtom. Han tvättade händerna noggrant " +
      "varje kväll med en borste vid diskbänken. Men jorden satt i sprickorna och vägrade släppa. " +
      "Det var trädgården som ägde hans händer. I fyrtio år hade han grävt, planterat och vattnat samma rabatt. " +
      "Tomaterna vid söderväggen. Rosorna vid grinden. De vilda jordgubbarna som kröp längre utåt för varje år. " +
      "När morfar dog ärvde Ali huset. Han stod i trädgården den första morgonen och visste inte var han skulle börja. " +
      "Ogräset hade redan börjat krypa in. Tomaterna hängde tunga och övergivna på sina käppar. " +
      "Ali böjde sig ner och drog upp ett ogräs. Jorden var fuktig och mörk. Den luktade som morfar. " +
      "Inte hans raklödder eller hans kaffe, utan något djupare — som tidiga morgnar och tålmodigt arbete. " +
      "Ali drog upp ett ogräs till. Och ett till. " +
      "När solen gick ner hade han rensat halva rabatten. Hans naglar var svarta av jord. " +
      "Han tittade på dem och log.",
    questions: [
      {
        id: "las-hog-4-q1",
        level: "hitta",
        prompt: "Hur länge hade morfar skött trädgården?",
        options: ["Tio år", "Tjugo år", "Fyrtio år", "Hela sitt liv"],
        correct: 2,
        explanation:
          "Texten anger att morfar \"i fyrtio år hade grävt, planterat och vattnat samma rabatt\".",
      },
      {
        id: "las-hog-4-q2",
        level: "tolka",
        prompt: "Vad symboliserar de smutsiga naglarna?",
        options: [
          "Att morfar var fattig",
          "Att morfar var orenlig",
          "Engagemang och kärlek till trädgården — ett livsverk som satt i händerna",
          "Att trädgården var för stor att sköta",
        ],
        correct: 2,
        explanation:
          "Naglarna representerar hur djupt morfars relation till trädgården gick — den satt bokstavligt i hans kropp. Det är en bild för livslång hängivenhet.",
      },
      {
        id: "las-hog-4-q3",
        level: "tolka",
        prompt: "Varför beskrivs jordens lukt som \"tidiga morgnar och tålmodigt arbete\"?",
        options: [
          "För att jord luktar kaffe",
          "För att lukten förknippas med morfars livsstil och karaktär snarare än med en specifik doft",
          "För att Ali inte gillade lukten",
          "För att jord luktar konstigt på morgonen",
        ],
        correct: 1,
        explanation:
          "Lukten är emotionell snarare än bokstavlig — den väcker minnen av vem morfar var. Att beskriva en lukt med abstrakta begrepp visar hur sinnesintryck och minnen sammanflätas.",
      },
      {
        id: "las-hog-4-q4",
        level: "reflektera",
        prompt: "Varför log Ali när han såg sina svarta naglar?",
        options: [
          "Han tyckte det var äckligt",
          "Han insåg att han höll på att ta över morfars livsverk — och att det kändes rätt",
          "Han skrattade åt sig själv",
          "Han ville visa sina händer för någon",
        ],
        correct: 1,
        explanation:
          "Naglarna kopplar tillbaka till textens öppning om morfar. Ali har omedvetet tagit vid där morfar slutade. Leendet visar att arvet inte bara är ett hus — det är en relation till jorden.",
      },
    ],
  },
  {
    id: "las-hog-5",
    ageGroup: "hogstadiet",
    title: "Köket efter midnatt",
    passage:
      "Varje natt efter midnatt satte sig Victors pappa vid köksbordet och skrev. Victor hade upptäckt det av en slump " +
      "när han gick upp för att hämta vatten. Pappan satt böjd över ett anteckningsblock med en kopp kallt kaffe bredvid sig. " +
      "Han skrev snabbt, nästan febrilt, och märkte inte att Victor stod i dörröppningen. " +
      "Victor frågade inte om det. Inte den natten, och inte de nätter som följde. " +
      "Ibland hörde han pappan sucka tungt. Ibland hörde han honom riva ut sidor och bolla ihop dem. " +
      "En morgon låg anteckningsblocket framme på köksbordet, öppet. Victor såg en rad: " +
      "\"Jag vet inte hur man berättar för sina barn att man är rädd.\" " +
      "Victor stängde blocket och sa ingenting. Men den kvällen frågade han pappan om de kunde gå en promenad tillsammans. " +
      "Pappan tittade förvånat på honom, men sa ja.",
    questions: [
      {
        id: "las-hog-5-q1",
        level: "hitta",
        prompt: "Vad gjorde Victors pappa efter midnatt?",
        options: [
          "Han tittade på TV",
          "Han satt vid köksbordet och skrev",
          "Han ringde telefonsamtal",
          "Han lagade mat",
        ],
        correct: 1,
        explanation:
          "Texten berättar att pappan \"satte sig vid köksbordet och skrev\" varje natt efter midnatt.",
      },
      {
        id: "las-hog-5-q2",
        level: "tolka",
        prompt: "Varför frågade Victor aldrig pappan om skrivandet?",
        options: [
          "Han var ointresserad",
          "Han förstod att det var något privat och känsligt",
          "Mamma hade förbjudit det",
          "Han glömde bort det varje morgon",
        ],
        correct: 1,
        explanation:
          "Victor observerar pappans tunga suckar och rivna sidor. Han förstår intuitivt att detta är något personligt som pappan behöver bearbeta på egen hand.",
      },
      {
        id: "las-hog-5-q3",
        level: "tolka",
        prompt: "Vad avslöjar raden Victor läser i anteckningsblocket?",
        options: [
          "Att pappan skriver en roman",
          "Att pappan kämpar med att vara öppen om sina känslor inför barnen",
          "Att pappan planerar att flytta",
          "Att pappan är arg på Victor",
        ],
        correct: 1,
        explanation:
          "Raden \"Jag vet inte hur man berättar för sina barn att man är rädd\" visar en förälder som brottas med sårbarhet och inte vet hur han ska kommunicera det.",
      },
      {
        id: "las-hog-5-q4",
        level: "reflektera",
        prompt: "Varför bjöd Victor in till en promenad istället för att prata om det han läst?",
        options: [
          "Han ville distrahera pappan",
          "Han erbjöd närvaro och närhet utan att tvinga fram ett svårt samtal",
          "Han ville komma ut ur huset",
          "Han ville berätta om sin egen dag",
        ],
        correct: 1,
        explanation:
          "Victor visar emotionell intelligens: istället för att konfrontera pappan med det han läst skapar han ett tillfälle till närhet. Ibland är det viktigaste inte att prata om problemet, utan att visa att man finns där.",
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
    title: "Masken och m\u00e4nniskan",
    passage:
      "Vi lever i en tid d\u00e4r sj\u00e4lvpresentation har blivit en konstform. Sociala medier erbjuder en sc\u00e9n d\u00e4r vi " +
      "v\u00e4ljer vilka sidor av oss sj\u00e4lva vi vill visa, och algoritmerna bel\u00f6nar den version som genererar mest engagemang. " +
      "Sociologen Erving Goffman skrev redan p\u00e5 1950-talet om hur m\u00e4nniskor spelar roller i vardagen, likt akt\u00f6rer p\u00e5 en teaterscen. " +
      "Framscenen, det vi visar upp, och bakstaget, det privata, skiljs \u00e5t med medvetna val. Men vad h\u00e4nder n\u00e4r bakstaget krymper? " +
      "N\u00e4r vi \u00e4ven i ensamheten medvetet \"performar\" f\u00f6r en t\u00e4nkt publik? Forskare inom digital sociologi varnar f\u00f6r att gr\u00e4nsen " +
      "mellan den autentiska och den framst\u00e4llda identiteten h\u00e5ller p\u00e5 att suddas ut. Om vi aldrig sl\u00e4pper masken, " +
      "vem \u00e4r det d\u00e5 som b\u00e4r den? Fr\u00e5gan \u00e4r inte bara filosofisk. F\u00f6r unga m\u00e4nniskor som formar sin identitet " +
      "mitt i detta digitala ljus kan konsekvenserna vara h\u00f6gst konkreta: \u00e5ngest, prestationspress och en k\u00e4nsla av att aldrig r\u00e4cka till.",
    questions: [
      {
        id: "las-gym-1-q1",
        level: "hitta",
        prompt: "Vilken sociolog n\u00e4mns i texten?",
        options: [
          "Pierre Bourdieu",
          "Erving Goffman",
          "Max Weber",
          "Zygmunt Bauman",
        ],
        correct: 1,
        explanation:
          "Texten n\u00e4mner Erving Goffman och hans teori om roller i vardagen fr\u00e5n 1950-talet. Det \u00e4r en direkt faktauppgift.",
      },
      {
        id: "las-gym-1-q2",
        level: "tolka",
        prompt:
          'Vad menar f\u00f6rfattaren med fr\u00e5gan "Om vi aldrig sl\u00e4pper masken, vem \u00e4r det d\u00e5 som b\u00e4r den?"',
        options: [
          "Att vi borde sluta anv\u00e4nda sociala medier",
          "Att det \u00e4r farligt att b\u00e4ra fysiska masker",
          "Att om den framst\u00e4llda identiteten tar \u00f6ver finns det ingen autentisk person kvar bakom",
          "Att alla m\u00e4nniskor \u00e4r l\u00f6gnare",
        ],
        correct: 2,
        explanation:
          "Fr\u00e5gan \u00e4r retorisk och pekar p\u00e5 risken att den \u201c\u00e4kta\u201d identiteten f\u00f6rsvinner om vi st\u00e4ndigt agerar en roll \u2014 \u00e4ven n\u00e4r ingen ser oss.",
      },
      {
        id: "las-gym-1-q3",
        level: "tolka",
        prompt:
          "Vilken retorisk strategi anv\u00e4nder f\u00f6rfattaren f\u00f6r att g\u00f6ra sin po\u00e4ng?",
        options: [
          "Upprepning av samma argument",
          "Koppling fr\u00e5n akademisk teori till konkret verklighet f\u00f6r unga",
          "Personliga anekdoter fr\u00e5n f\u00f6rfattarens liv",
          "Statistik och siffror",
        ],
        correct: 1,
        explanation:
          "Texten b\u00f6rjar med en teoretisk referens (Goffman), st\u00e4ller retoriska fr\u00e5gor och landar i konkreta konsekvenser f\u00f6r unga. Det \u00e4r en medveten r\u00f6relse fr\u00e5n abstrakt till konkret.",
      },
      {
        id: "las-gym-1-q4",
        level: "reflektera",
        prompt:
          "H\u00e5ller du med om att gr\u00e4nsen mellan v\u00e5rt \u201d\u00e4kta jag\u201d och den digitala identiteten h\u00e5ller p\u00e5 att suddas ut?",
        options: [
          "Ja, f\u00f6r alla ljuger p\u00e5 n\u00e4tet",
          "Nej, m\u00e4nniskor har alltid spelat roller och detta \u00e4r inget nytt",
          "Det beror p\u00e5 \u2014 texten har en po\u00e4ng om prestationspress, men m\u00e5nga \u00e4r medvetna om skillnaden",
          "Det spelar ingen roll, f\u00f6r identitet finns inte",
        ],
        correct: 2,
        explanation:
          "En reflekterande fr\u00e5ga kr\u00e4ver ett nyanserat svar. Alternativet som v\u00e4ger b\u00e5de f\u00f6r och emot visar f\u00f6rm\u00e5ga att v\u00e4rdera ett argument utan att okritiskt acceptera eller f\u00f6rkasta det.",
      },
    ],
  },
  {
    id: "las-gym-2",
    ageGroup: "gymnasiet",
    title: "R\u00e4tten att gl\u00f6mmas",
    passage:
      "I maj 2014 slog EU-domstolen fast att privatpersoner under vissa omst\u00e4ndigheter har r\u00e4tt att f\u00e5 s\u00f6kresultat borttagna " +
      "fr\u00e5n s\u00f6kmotorer \u2014 den s\u00e5 kallade r\u00e4tten att bli gl\u00f6md. Beslutet v\u00e4ckte omedelbart debatt. " +
      "F\u00f6rspr\u00e5karna menade att varje m\u00e4nniska f\u00f6rtj\u00e4nar en andra chans och att f\u00f6r\u00e5ldrad, irrelevant information " +
      "inte ska f\u00f6rf\u00f6lja n\u00e5gon f\u00f6r resten av livet. En ung person som beg\u00e5tt ett misstag ska inte beh\u00f6va m\u00f6ta det " +
      "vid varje jobbans\u00f6kan. Kritikerna h\u00e4vdade d\u00e4remot att r\u00e4tten riskerade att bli ett verktyg f\u00f6r m\u00e4ktiga " +
      "att d\u00f6lja obehaglig men samh\u00e4llsrelevant information. Om en politiker eller f\u00f6retagsledare kan radera sitt digitala f\u00f6rflutna, " +
      "vad h\u00e4nder d\u00e5 med allm\u00e4nhetens r\u00e4tt att granska makten? Sp\u00e4nningen mellan integritet och transparens " +
      "\u00e4r inte ny, men digitaliseringen har sk\u00e4rpt den. I en v\u00e4rld d\u00e4r information \u00e4r permanent \u00e4r fr\u00e5gan inte om vi beh\u00f6ver " +
      "en r\u00e4tt att gl\u00f6mmas, utan hur den ska begr\u00e4nsas s\u00e5 att den skyddar individen utan att skada demokratin.",
    questions: [
      {
        id: "las-gym-2-q1",
        level: "hitta",
        prompt: "N\u00e4r slog EU-domstolen fast r\u00e4tten att bli gl\u00f6md?",
        options: [
          "2010",
          "2014",
          "2018",
          "2020",
        ],
        correct: 1,
        explanation:
          'Texten anger direkt att beslutet kom "i maj 2014".',
      },
      {
        id: "las-gym-2-q2",
        level: "tolka",
        prompt:
          "Vad \u00e4r f\u00f6rfattarens h\u00e5llning till r\u00e4tten att bli gl\u00f6md?",
        options: [
          "Helt positiv \u2014 den borde ut\u00f6kas",
          "Helt negativ \u2014 den borde avskaffas",
          "Nyanserad \u2014 principen \u00e4r viktig men den m\u00e5ste begr\u00e4nsas",
          "Likgiltig \u2014 f\u00f6rfattaren tar inte st\u00e4llning",
        ],
        correct: 2,
        explanation:
          "F\u00f6rfattaren presenterar b\u00e5da sidor och landar i att fr\u00e5gan handlar om hur r\u00e4tten ska begr\u00e4nsas, inte om den beh\u00f6vs. Det visar en nyanserad position.",
      },
      {
        id: "las-gym-2-q3",
        level: "tolka",
        prompt:
          "Vilket argument anv\u00e4nder kritikerna mot r\u00e4tten att bli gl\u00f6md?",
        options: [
          "Att internet \u00e4r f\u00f6r snabbt",
          "Att det kostar f\u00f6r mycket pengar",
          "Att m\u00e4ktiga kan d\u00f6lja samh\u00e4llsrelevant information",
          "Att s\u00f6kmotorer inte fungerar s\u00e5",
        ],
        correct: 2,
        explanation:
          "Kritikerna befarar att r\u00e4tten blir ett verktyg f\u00f6r makthavare att radera information som allm\u00e4nheten beh\u00f6ver f\u00f6r att granska dem.",
      },
      {
        id: "las-gym-2-q4",
        level: "reflektera",
        prompt:
          "Hur v\u00e4ger man b\u00e4st individens integritet mot allm\u00e4nhetens r\u00e4tt till information?",
        options: [
          "Integriteten ska alltid g\u00e5 f\u00f6re",
          "Transparensen ska alltid g\u00e5 f\u00f6re",
          "Det beror p\u00e5 om personen \u00e4r en offentlig person med makt eller en privatperson",
          "Det spelar ingen roll eftersom allt \u00e4nd\u00e5 finns kvar p\u00e5 internet",
        ],
        correct: 2,
        explanation:
          "En reflektion som tar h\u00e4nsyn till kontext \u2014 att skillnaden mellan offentliga och privata personer \u00e4r avg\u00f6rande \u2014 visar f\u00f6rm\u00e5ga att v\u00e4rdera olika perspektiv och till\u00e4mpa dem p\u00e5 konkreta fall.",
      },
    ],
  },
    {
    id: "las-gym-3",
    ageGroup: "gymnasiet",
    title: "Det försvunna språket",
    passage:
      "År 2010 dog Boa Senior, den sista talaren av det andamanesiska språket bo. Med hennes sista andetag försvann " +
      "inte bara ett ordförråd, utan ett helt sätt att förstå världen. " +
      "Språkforskare brukar jämföra ett utdöende språk med en bränd biblioteksavdelning: det som försvinner " +
      "är inte bara ord utan kunskap, berättelser och tankemönster som aldrig dokumenterats på något annat vis. " +
      "Idag finns cirka 7 000 språk i världen. Hälften beräknas vara borta inom hundra år. " +
      "Det innebär att ett språk dör ungefär varannan vecka. " +
      "Men betyder det att vi förlorar något? Kritiker menar att språkdöd är en naturlig process — " +
      "latin dog, fornnordiska dog, och världen gick vidare. " +
      "Lingvisten Nicholas Evans invänder: \"Det är skillnad på ett språk som utvecklas till nya former " +
      "och ett som utplånas utan arvtagare. Latin lever vidare i franska, spanska och italienska. " +
      "Bo lever ingenstans.\" " +
      "Frågan handlar i grunden om vad vi menar med mångfald. Om biologisk mångfald är värd att skydda " +
      "för att den gör ekosystem robustare, kan samma logik tillämpas på språklig mångfald? " +
      "Varje språk kodar erfarenheter som andra saknar ord för. Yupik-språken har dussintals termer för snöförhållanden " +
      "som engelskans vocabulary inte kan fånga. Hopi-språket saknar grammatiska tempus och uttrycker tid på sätt " +
      "som utmanar vår mest grundläggande uppfattning om vad tid är. " +
      "Att rädda ett språk handlar därför inte om nostalgi. Det handlar om att bevara mänsklighetens kognitiva repertoar.",
    questions: [
      {
        id: "las-gym-3-q1",
        level: "hitta",
        prompt: "Hur många språk finns det idag enligt texten?",
        options: ["Cirka 3 000", "Cirka 5 000", "Cirka 7 000", "Cirka 10 000"],
        correct: 2,
        explanation:
          "Texten anger att det \"idag finns cirka 7 000 språk i världen\".",
      },
      {
        id: "las-gym-3-q2",
        level: "tolka",
        prompt: "Vad menar Nicholas Evans med distinktionen mellan latin och bo?",
        options: [
          "Att latin var ett bättre språk",
          "Att latin utvecklades till nya språk medan bo försvann helt utan efterföljare",
          "Att bo hade färre talare",
          "Att alla språk dör förr eller senare",
        ],
        correct: 1,
        explanation:
          "Evans poäng är kvalitativ: latin \"dog\" men fortsatte genom romanska språk. Bo utplånades utan att lämna spår. Det är skillnaden mellan transformation och total förlust.",
      },
      {
        id: "las-gym-3-q3",
        level: "tolka",
        prompt: "Varför nämner texten biologisk mångfald?",
        options: [
          "För att byta ämne",
          "För att argumentera genom analogi: om biologisk mångfald stärker ekosystem, kan språklig mångfald stärka mänskligheten",
          "För att visa att språk är samma sak som djurarter",
          "För att kritisera miljörörelsen",
        ],
        correct: 1,
        explanation:
          "Texten använder biologisk mångfald som analogiargument. Om variation gör naturen mer motståndskraftig, kan samma princip gälla för mänsklig kunskap och kognition.",
      },
      {
        id: "las-gym-3-q4",
        level: "reflektera",
        prompt: "Textens avslutande mening säger att språkbevarande handlar om \"mänsklighetens kognitiva repertoar\". Vad innebär det?",
        options: [
          "Att vi behöver fler ord i svenska",
          "Att varje språk representerar unika sätt att tänka och förstå verkligheten, och att förlora dem minskar mänsklighetens samlade intellektuella kapacitet",
          "Att alla borde lära sig fler språk",
          "Att forskning om språk borde få mer pengar",
        ],
        correct: 1,
        explanation:
          "Texten argumenterar för att språk inte bara är kommunikationsverktyg utan tankesystem. Varje utdött språk tar med sig perspektiv som inget annat språk kan ersätta — det handlar om hela mänsklighetens förmåga att begreppsliggöra världen.",
      },
    ],
  },
  {
    id: "las-gym-4",
    ageGroup: "gymnasiet",
    title: "Fotografiets paradox",
    passage:
      "Susan Sontag skrev att fotografera innebär att delta i en annan människas dödlighet och sårbarhet. " +
      "Varje fotografi fryser ett ögonblick som aldrig återkommer. I samma sekund som slutaren klickar " +
      "har ögonblicket redan passerat. Fotografiet blir ett bevis på det som inte längre finns. " +
      "Men Sontag pekade på en djupare paradox: ju fler bilder vi tar, desto mindre ser vi. " +
      "Turisten som fotograferar varje monument upplever det genom en skärm istället för med egna ögon. " +
      "Föräldern som filmar barnets första steg ser det i repris — aldrig i realtid. " +
      "I den digitala eran har denna paradox fördjupats. Vi tar uppskattningsvis 1,4 biljoner fotografier per år. " +
      "De allra flesta betraktas aldrig igen. De lagras i molntjänster som digitala sediment — " +
      "lager på lager av ögonblick som ingen återvänder till. " +
      "Ändå fortsätter vi att fotografera. Kanske för att kameran ger en illusion av kontroll: " +
      "om jag fångar detta moment bevarar jag det. Men bevarar vi verkligen minnet, eller ersätter vi det? " +
      "Neurologisk forskning antyder att den som fotograferar en händelse minns den sämre än den som bara var närvarande. " +
      "Kameran minns åt oss, och vi glömmer. " +
      "Sontag skulle kanske ha sagt att vi har blivit ett samhälle av samlare — av bilder, inte av upplevelser.",
    questions: [
      {
        id: "las-gym-4-q1",
        level: "hitta",
        prompt: "Hur många fotografier tas per år enligt texten?",
        options: ["1,4 miljarder", "1,4 biljoner", "14 miljarder", "140 miljoner"],
        correct: 1,
        explanation:
          "Texten anger att vi tar \"uppskattningsvis 1,4 biljoner fotografier per år\".",
      },
      {
        id: "las-gym-4-q2",
        level: "tolka",
        prompt: "Vad är den \"djupare paradox\" Sontag pekar på?",
        options: [
          "Att kameror är dyra",
          "Att fotograferande kan göra att vi upplever mindre av det vi försöker bevara",
          "Att bilder aldrig blir bra",
          "Att turisterna inte gillar monument",
        ],
        correct: 1,
        explanation:
          "Paradoxen är att akten att dokumentera — som syftar till att bevara — samtidigt distanserar oss från upplevelsen. Vi ser genom skärmen istället för med våra sinnen.",
      },
      {
        id: "las-gym-4-q3",
        level: "tolka",
        prompt: "Vad menar texten med \"digitala sediment\"?",
        options: [
          "Att bilder förstörs med tiden",
          "Att foton lagras i lager som geologiska avlagringar — ackumulerade men obearbetade och obetraktade",
          "Att molntjänster är miljöskadliga",
          "Att bilder blir vackrare med tiden",
        ],
        correct: 1,
        explanation:
          "Metaforen sediment pekar på passiv ackumulation: precis som geologiska lager avsätts utan medveten process, samlas våra bilder i molnet utan att vi granskar eller sorterar dem.",
      },
      {
        id: "las-gym-4-q4",
        level: "reflektera",
        prompt: "Texten hävdar att \"kameran minns åt oss, och vi glömmer\". Håller du med? Varför eller varför inte?",
        options: [
          "Ja, helt — vi borde sluta fotografera",
          "Delvis — forskningen stödjer att fotografering minskar minnesbildning, men foton kan också trigga minnen vi annars förlorat",
          "Nej — foton hjälper alltid minnet",
          "Det spelar ingen roll — minnen är oviktiga",
        ],
        correct: 1,
        explanation:
          "Frågan är medvetet öppen. Den neurologiska forskningen stödjer Sontags tes, men fotografier kan också fungera som minnestriggare. Den nyanserade positionen erkänner båda sidorna.",
      },
    ],
  },
  {
    id: "las-gym-5",
    ageGroup: "gymnasiet",
    title: "Rättvisans vågskål",
    passage:
      "I rättssalen sitter inte bara en anklagad och en målsägande. Där sitter hela samhällets föreställning om rättvisa. " +
      "Den svenska rättsprincipen om att hellre fria tio skyldiga än fälla en oskyldig har djupa rötter. " +
      "Den bottnar i insikten att statens makt över individen är så enorm att varje felaktig fällande dom " +
      "utgör ett svek mot själva grunden för rättsstaten. " +
      "Men principen krockar ibland med den folkliga rättskänslan. " +
      "När en uppenbart skyldig person frias på grund av otillräcklig bevisning känner sig brottsoffret — " +
      "och ofta allmänheten — svikna. Medier förstärker känslan med rubriker som \"Gick fri trots allt\". " +
      "Rättsfilosofen Ronald Dworkin har argumenterat för att rättvisa aldrig kan vara perfekt " +
      "utan handlar om att välja det minst onda misstaget. Att fria en skyldig är ett ont. " +
      "Att fälla en oskyldig är ett större ont. Rättssystemet måste välja. " +
      "Beviskravets höjd — att åklagaren måste bevisa skuld \"bortom rimligt tvivel\" — " +
      "är samhällets svar på detta dilemma. Det är inte en brist i systemet utan en medveten konstruktion. " +
      "Frågan som kvarstår är om allmänheten har tålamod med ett system som, för att skydda alla, " +
      "ibland måste acceptera att enskilda brott förblir ostraffade.",
    questions: [
      {
        id: "las-gym-5-q1",
        level: "hitta",
        prompt: "Vilken rättsprincip diskuteras i texten?",
        options: [
          "Ögat för ögat",
          "Hellre fria tio skyldiga än fälla en oskyldig",
          "Alla är skyldiga tills motsatsen bevisas",
          "Straffet ska vara proportionellt",
        ],
        correct: 1,
        explanation:
          "Texten utgår från principen att \"hellre fria tio skyldiga än fälla en oskyldig\" som grund för resonemanget.",
      },
      {
        id: "las-gym-5-q2",
        level: "tolka",
        prompt: "Varför beskriver texten beviskravet som en \"medveten konstruktion\" snarare än en brist?",
        options: [
          "För att jurister vill skydda sina jobb",
          "För att det höga beviskravet är designat att skydda individen från statens makt, inte att låta skyldiga gå fria",
          "För att det är omöjligt att bevisa något",
          "För att lagen aldrig kan ändras",
        ],
        correct: 1,
        explanation:
          "Texten argumenterar för att beviskravet \"bortom rimligt tvivel\" inte är en olycklig konsekvens utan ett aktivt val — systemet prioriterar skyddet av oskyldiga framför bestraffningen av skyldiga.",
      },
      {
        id: "las-gym-5-q3",
        level: "tolka",
        prompt: "Vad menar Dworkin med att rättvisa handlar om att \"välja det minst onda misstaget\"?",
        options: [
          "Att domare alltid gör fel",
          "Att inget rättssystem kan vara felfritt, men vi kan välja vilken typ av fel vi hellre accepterar",
          "Att rättvisa inte existerar",
          "Att det minst onda är att inte ha domstolar alls",
        ],
        correct: 1,
        explanation:
          "Dworkins poäng är pragmatisk: perfekt rättvisa är ouppnåelig. Valet står mellan att ibland fria skyldiga (typ 1-fel) eller att ibland fälla oskyldiga (typ 2-fel). Samhället har valt att acceptera det förstnämnda.",
      },
      {
        id: "las-gym-5-q4",
        level: "reflektera",
        prompt: "Texten avslutas med frågan om allmänheten har tålamod med systemet. Vad tror du?",
        options: [
          "Tålamodet minskar i takt med medierapportering och sociala medier som förstärker den folkliga rättskänslan",
          "Alla förstår och accepterar systemet",
          "Folk bryr sig inte om rättvisa",
          "Bara jurister tänker på sådana frågor",
        ],
        correct: 0,
        explanation:
          "Frågan är öppen och texten ger inga definitiva svar. Men den antyder en spänning: i en medievärld där \"Gick fri trots allt\" skapar upprördhet utmanas det tålmodiga förnuftets principer av den omedelbara känslan.",
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

  return [  {
    id: "las-mel-3",
    ageGroup: "mellanstadiet",
    title: "Kartan i källaren",
    passage:
      "Inez och hennes bror Kasper hittade en vikbar karta i en gammal resväska i källaren. Kartan var gulnad och luktade fukt. " +
      "I ett hörn stod det skrivet med blyerts: \"Sommaren 1978. Ö. utanför Nynäshamn.\" " +
      "Några ställen på kartan var inringade med rött. Bredvid en av ringarna stod det \"bästa stället\". " +
      "De tog kartan till mamma. Hon blev alldeles tyst. Sedan sa hon: \"Det där är farmors karta. " +
      "Hon och farfar brukade ro ut till en ö och tälta varje sommar innan jag föddes.\" " +
      "Mamma satte sig vid köksbordet och strök med fingret över kartan. \"Jag visste inte att den fanns kvar,\" sa hon. " +
      "Inez tittade på de röda ringarna och tänkte på en farmor hon aldrig träffat som en gång paddlat till en ö med en röd ring på en karta. " +
      "Det kändes som om farmor plötsligt blev en verklig person och inte bara ett namn.",
    questions: [
      {
        id: "las-mel-3-q1",
        level: "hitta",
        prompt: "Var hittade barnen kartan?",
        options: ["På vinden", "I en gammal resväska i källaren", "I ett bibliotek", "I en byrålåda"],
        correct: 1,
        explanation: "Texten berättar att de hittade kartan \"i en gammal resväska i källaren\".",
      },
      {
        id: "las-mel-3-q2",
        level: "hitta",
        prompt: "Vad stod skrivet i kartans hörn?",
        options: ["Farmors namn", "Sommaren 1978. Ö. utanför Nynäshamn.", "En hemlig kod", "Adressen till huset"],
        correct: 1,
        explanation: "På kartan stod det \"Sommaren 1978. Ö. utanför Nynäshamn.\"",
      },
      {
        id: "las-mel-3-q3",
        level: "tolka",
        prompt: "Varför blev mamma tyst när hon såg kartan?",
        options: [
          "Hon var arg att barnen gått igenom saker i källaren",
          "Kartan väckte minnen och känslor om hennes egen mamma",
          "Hon visste inte vad det var för karta",
          "Hon var trött och ville inte prata",
        ],
        correct: 1,
        explanation: "Mamma blev berörd av att se farmors karta — den väckte känslor kopplade till föräldern hon förlorat.",
      },
      {
        id: "las-mel-3-q4",
        level: "reflektera",
        prompt: "Vad menar texten med att farmor \"plötsligt blev en verklig person och inte bara ett namn\"?",
        options: [
          "Att Inez trodde att farmor var påhittad",
          "Att kartan gav farmor en historia och en personlighet som Inez kunde föreställa sig",
          "Att farmor faktiskt levde och de inte visste om det",
          "Att Inez inte visste att hon hade en farmor",
        ],
        correct: 1,
        explanation: "Föremål kan göra döda släktingar mer levande. Kartan gav Inez en konkret bild av en kvinna som paddlade till öar och ringade in favoritplatser.",
      },
    ],
  },
  {
    id: "las-mel-4",
    ageGroup: "mellanstadiet",
    title: "Glaset som rann över",
    passage:
      "Det hade börjat med en liten sak. Noel hade glömt sitt gympakläder hemma. Det var inte hela världen, " +
      "men fröken suckade och sa: \"Igen, Noel?\" " +
      "Sedan hade Sara tagit hans plats i matsalen, fast hon visste att han alltid satt där. " +
      "På eftermiddagen missade han ett mål i fotbollen och kompisen Hugo sa: \"Hade du ens ögonen öppna?\" " +
      "Var för sig var ingen av sakerna särskilt stor. Men tillsammans fyllde de en osynlig bägare inuti honom, " +
      "droppe för droppe, tills det rann över. " +
      "När mamma frågade hur dagen hade varit sa Noel \"bra\" och gick raka vägen till sitt rum. " +
      "Han la sig på sängen och tittade i taket. Det var inte så att han ville gråta. " +
      "Han kände sig bara som en ballong som sakta tappat all sin luft. " +
      "Efter en stund knackade mamma på dörren med en kopp varm choklad. Hon sa inget. Hon bara satt där. " +
      "Och det var precis vad Noel behövde.",
    questions: [
      {
        id: "las-mel-4-q1",
        level: "hitta",
        prompt: "Vad hade Noel glömt hemma?",
        options: ["Mattelexan", "Gympakläder", "Pennan", "Nyckeln"],
        correct: 1,
        explanation: "I textens inledning framgår att Noel \"hade glömt sitt gympakläder hemma\".",
      },
      {
        id: "las-mel-4-q2",
        level: "tolka",
        prompt: "Vad menar texten med \"en osynlig bägare\" som fylldes droppe för droppe?",
        options: [
          "Att Noel drack för mycket vatten",
          "Att varje liten besvikelse lade sig ovanpå de andra tills han inte orkade mer",
          "Att han hade ett glas som gick sönder",
          "Att det regnade hela dagen",
        ],
        correct: 1,
        explanation: "Bägaren är en metafor för Noels tålamod. Varje motgång var liten, men tillsammans blev de för mycket.",
      },
      {
        id: "las-mel-4-q3",
        level: "reflektera",
        prompt: "Varför var det viktigt att mamma \"sa inget\" utan bara satt där?",
        options: [
          "Hon visste inte vad hon skulle säga",
          "Ibland är närvaro viktigare än ord — Noel behövde veta att någon fanns där",
          "Hon var arg och ville inte prata",
          "Hon hade inte hört vad som hänt",
        ],
        correct: 1,
        explanation: "Mamma visade Noel att han inte var ensam, utan att kräva förklaringar. Tyst närvaro kan vara den bästa trösten.",
      },
    ],
  },
  {
    id: "las-mel-5",
    ageGroup: "mellanstadiet",
    title: "Trädet som stannade",
    passage:
      "Mitt på skolgården stod en gammal ek. Den hade stått där längre än skolan själv — kanske i tvåhundra år. " +
      "Varje höst tappade den tusentals löv som vaktmästaren muttrade över. " +
      "En dag kom rektorn och berättade att eken skulle tas ner. Rötterna hade vuxit in i avloppet under skolan. " +
      "\"Det blir för dyrt att fixa,\" sa rektorn. " +
      "Ella tyckte att det lät fel. Ett träd som levt i tvåhundra år skulle tas bort för att rör kostade pengar. " +
      "Hon skrev en insändare till lokaltidningen och samlade 147 namnunderskrifter. " +
      "Kommunen beslutade att dra om rören runt trädet istället. Det kostade mer, men eken fick stanna. " +
      "Ella gick förbi den varje morgon efter det. Ibland la hon handen mot barken. Den var varm av solen och grov under fingrarna. " +
      "Tvåhundra år, tänkte hon. Och nu kanske tvåhundra till.",
    questions: [
      {
        id: "las-mel-5-q1",
        level: "hitta",
        prompt: "Varför skulle eken tas ner?",
        options: [
          "Den var sjuk och farlig",
          "Rötterna hade vuxit in i avloppet",
          "Skolgården skulle byggas om",
          "Löven var för många att städa",
        ],
        correct: 1,
        explanation: "Rektorn förklarar att rötterna hade vuxit in i avloppet och att det blev för dyrt att fixa.",
      },
      {
        id: "las-mel-5-q2",
        level: "tolka",
        prompt: "Varför tyckte Ella att det lät fel att ta ner trädet?",
        options: [
          "Hon var allergisk mot avloppslukt",
          "Hon kände att ett tvåhundra år gammalt levande träd var värt mer än pengar",
          "Hon ville inte att skolgården skulle bli solig",
          "Hon var rädd för motorsågar",
        ],
        correct: 1,
        explanation: "Ella reagerade på att ekonomi vägde tyngre än ett levande träds historia.",
      },
      {
        id: "las-mel-5-q3",
        level: "reflektera",
        prompt: "Vad visar berättelsen om vad en enskild person kan åstadkomma?",
        options: [
          "Att barn inte kan förändra något",
          "Att en persons engagemang kan sätta igång en förändring som påverkar fler",
          "Att vuxna alltid lyssnar på barn",
          "Att insändare inte spelar någon roll",
        ],
        correct: 1,
        explanation: "Ella agerade ensam men fick med sig 147 elever. Berättelsen visar att en person som vågar ta initiativ kan göra skillnad.",
      },
    ],
  },
];
}
