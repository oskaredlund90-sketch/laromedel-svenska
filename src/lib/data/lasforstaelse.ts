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
    title: "Den röda bollen",
    passage:
      "Maja hittade en röd boll i parken. Den var stor och blank. Hon studsade bollen på gången och den hoppade högt. " +
      "Plötsligt kom en hund springande och tog bollen i munnen. Maja blev ledsen. " +
      "Men hundens ägare, en äldre dam, kom fram och sa: \"Förlåt! Buster älskar bollar.\" " +
      "Damen tog bollen från hunden och gav den tillbaka till Maja. " +
      "\"Vill du kasta bollen åt Buster?\" frågade damen. Maja nickade och kastade bollen. " +
      "Buster sprang som en raket och hämtade den. Maja och Buster lekte hela eftermiddagen.",
    questions: [
      {
        id: "las-lag-3-q1",
        level: "hitta",
        prompt: "Var hittade Maja bollen?",
        options: ["I skolan", "I parken", "Hemma i trädgården", "På stranden"],
        correct: 1,
        explanation:
          "I första meningen står det att Maja hittade bollen i parken.",
      },
      {
        id: "las-lag-3-q2",
        level: "hitta",
        prompt: "Vad hette hunden?",
        options: ["Buster", "Fansen", "Ludde", "Bella"],
        correct: 0,
        explanation:
          "Damen säger \"Buster älskar bollar\", så hunden heter Buster.",
      },
      {
        id: "las-lag-3-q3",
        level: "tolka",
        prompt: "Varför blev Maja glad igen?",
        options: [
          "Hon hittade en ny boll",
          "Hunden gick hem",
          "Hon fick tillbaka bollen och en ny lekkompis",
          "Damen köpte glass åt henne",
        ],
        correct: 2,
        explanation:
          "Damen gav tillbaka bollen och Maja fick leka med Buster hela eftermiddagen. Ledsamheten försvann när det blev kul igen.",
      },
      {
        id: "las-lag-3-q4",
        level: "reflektera",
        prompt: "Vad lär oss berättelsen om oväntade möten?",
        options: [
          "Man ska aldrig gå till parken",
          "Hundar är alltid farliga",
          "Något som verkar tråkigt kan bli roligt",
          "Man ska inte prata med främlingar",
        ],
        correct: 2,
        explanation:
          "Först blev Maja ledsen, men det oväntade mötet med Buster ledde till en rolig eftermiddag. Ibland kan saker vända till det bättre.",
      },
    ],
  },
  {
    id: "las-lag-4",
    ageGroup: "lagstadiet",
    title: "Snöflingan",
    passage:
      "Det var vinter och Sara tittade ut genom fönstret. Det snöade! Stora vita flingor dansade ner från himlen. " +
      "Sara tog på sig jackan, mössan och vantarna och sprang ut. Hon öppnade handen och fångade en snöflinga. " +
      "Den var så liten och vacker med små mönster. Men snöflingan smälte snabbt i hennes varma hand. " +
      "\"Mamma, varför försvinner snöflingorna?\" frågade Sara. " +
      "\"För att din hand är varm,\" sa mamma. \"Värme gör att snön blir till vatten.\" " +
      "Sara tyckte det var lite sorgligt, men sedan lade hon märke till att det kom nya flingor hela tiden. " +
      "Då log hon och började bygga en snögubbe.",
    questions: [
      {
        id: "las-lag-4-q1",
        level: "hitta",
        prompt: "Vad tog Sara på sig innan hon gick ut?",
        options: [
          "Bara jackan",
          "Jackan, mössan och vantarna",
          "Regnjackan och stövlarna",
          "Mössan och skidorna",
        ],
        correct: 1,
        explanation:
          "Texten säger att Sara tog på sig \"jackan, mössan och vantarna\".",
      },
      {
        id: "las-lag-4-q2",
        level: "tolka",
        prompt: "Varför smälte snöflingan?",
        options: [
          "Det regnade",
          "Solen sken",
          "Saras hand var varm",
          "Sara kramade den för hårt",
        ],
        correct: 2,
        explanation:
          "Mamma förklarar att Saras hand är varm och att värme gör att snö smälter till vatten.",
      },
      {
        id: "las-lag-4-q3",
        level: "reflektera",
        prompt: "Varför log Sara till slut fast snöflingan försvann?",
        options: [
          "Hon hittade en leksak",
          "Hon insåg att det kom nya snöflingor hela tiden",
          "Mamma gav henne godis",
          "Solen kom fram",
        ],
        correct: 1,
        explanation:
          "Sara var först ledsen, men blev glad igen när hon såg att det snöade och snöade. Det fanns massor av snö att leka med!",
      },
    ],
  },
  {
    id: "las-lag-5",
    ageGroup: "lagstadiet",
    title: "Nattfjärilen",
    passage:
      "En kväll satt Albin vid sitt fönster. Det var mörkt ute men lampan lyste i hans rum. " +
      "Plötsligt fladdrade en stor fjäril mot fönstret. Den hade bruna vingar med prickar som såg ut som ögon. " +
      "\"Mamma, det är en jättefjäril!\" ropade Albin. Mamma kom in och tittade. " +
      "\"Det är en nattfjäril,\" sa mamma. \"De flyger på natten och dras till ljus.\" " +
      "Albin tyckte det var konstigt att en fjäril var vaken på natten. " +
      "\"Sover den på dagen då?\" frågade han. \"Ja, precis,\" sa mamma. " +
      "Albin tittade på fjärilen en lång stund. Sedan släckte han lampan försiktigt " +
      "så att fjärilen kunde flyga vidare ut i natten.",
    questions: [
      {
        id: "las-lag-5-q1",
        level: "hitta",
        prompt: "Vad hade nattfjärilen på sina vingar?",
        options: [
          "Ränder i regnbågens färger",
          "Bruna vingar med prickar som såg ut som ögon",
          "Glittrande guldmönster",
          "Vita prickar",
        ],
        correct: 1,
        explanation:
          "Texten beskriver att fjärilen hade \"bruna vingar med prickar som såg ut som ögon\".",
      },
      {
        id: "las-lag-5-q2",
        level: "tolka",
        prompt: "Varför fladdrade fjärilen mot Albins fönster?",
        options: [
          "Den ville komma in och sova",
          "Den drogs till ljuset från lampan",
          "Den var rädd för mörkret",
          "Den letade efter mat",
        ],
        correct: 1,
        explanation:
          "Mamma förklarar att nattfjärilar \"dras till ljus\". Det var lampan i Albins rum som lockade fjärilen.",
      },
      {
        id: "las-lag-5-q3",
        level: "reflektera",
        prompt: "Varför släckte Albin lampan i slutet?",
        options: [
          "Han var trött och ville sova",
          "Mamma sa åt honom att göra det",
          "Han ville hjälpa fjärilen att flyga vidare",
          "Han var rädd för fjärilen",
        ],
        correct: 2,
        explanation:
          "Albin släckte lampan \"försiktigt så att fjärilen kunde flyga vidare\". Han brydde sig om fjärilen och ville att den skulle kunna fortsätta sin nattflykt.",
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
    title: "Kommentarsfältet",
    passage:
      "Liams video hade fått tusen visningar på en dag. Han hade filmat sig själv när han spelade gitarr i sitt rum " +
      "och lagt upp det på sociala medier. De flesta kommentarerna var positiva. Men en kommentar stack ut: " +
      "\"Haha, patetiskt. Stick och lär dig spela ordentligt.\" " +
      "Liam läste den om och om igen. De hundra fina kommentarerna försvann ur hans tankar. Han kunde bara se den enda elaka. " +
      "Han bestämde sig för att ta bort videon. Men innan han hann klicka ringde hans kompis Fatima. " +
      "\"Jag såg din video! Du måste lägga upp fler!\" sa hon. " +
      "Liam berättade om kommentaren. Fatima blev tyst en stund. " +
      "\"En person av tusen tyckte illa om det,\" sa hon. \"Ska den enda personen bestämma vad du gör?\" " +
      "Liam tänkte efter. Han tog inte bort videon. Men han stängde av kommentarerna.",
    questions: [
      {
        id: "las-hog-3-q1",
        level: "hitta",
        prompt: "Hur många visningar hade Liams video fått?",
        options: ["Hundra", "Tusen", "Tiotusen", "En miljon"],
        correct: 1,
        explanation:
          "Texten säger att videon \"hade fått tusen visningar på en dag\".",
      },
      {
        id: "las-hog-3-q2",
        level: "tolka",
        prompt: "Varför försvann de positiva kommentarerna ur Liams tankar?",
        options: [
          "De raderades av plattformen",
          "Negativ kritik tenderar att ta mer plats i våra tankar än positiv",
          "De positiva kommentarerna var falska",
          "Liam kunde inte läsa dem",
        ],
        correct: 1,
        explanation:
          "Det är ett vanligt psykologiskt fenomen att negativ feedback väger tyngre än positiv. En enda elak kommentar överskuggade hundra positiva.",
      },
      {
        id: "las-hog-3-q3",
        level: "tolka",
        prompt: "Vad menade Fatima med sin fråga om \"den enda personen\"?",
        options: [
          "Att Liam borde konfrontera personen",
          "Att en enda negativ röst inte bör få bestämma över ens handlingar",
          "Att Liam borde blockera alla som kommenterar",
          "Att tusen visningar inte är mycket",
        ],
        correct: 1,
        explanation:
          "Fatima sätter den negativa kommentaren i perspektiv: en av tusen tyckte illa om det. Ska den minoriteten styra Liams beslut?",
      },
      {
        id: "las-hog-3-q4",
        level: "reflektera",
        prompt: "Vad säger Liams beslut att stänga av kommentarerna om hans strategi?",
        options: [
          "Han är feg och borde ha svarat",
          "Han hittade en kompromiss — han behöll videon men skyddade sig från negativ påverkan",
          "Han borde ha tagit bort videon ändå",
          "Han bryr sig inte om vad folk tycker",
        ],
        correct: 1,
        explanation:
          "Liam valde en medelväg: han tog inte bort sitt skapande, men satte en gräns för vad han vill utsättas för. Det visar mognad och självkännedom.",
      },
    ],
  },
  {
    id: "las-hog-4",
    ageGroup: "hogstadiet",
    title: "Brevet i boken",
    passage:
      "Amira hittade ett handskrivet brev instucket i en begagnad bok hon köpt på loppis. Brevet var daterat 1987 och skrivet av en kvinna som hette Ingrid. " +
      "Hon skrev till sin dotter Karin om hur stolt hon var över att Karin kommit in på universitetet. " +
      "\"Du är den första i vår familj som läser vidare,\" stod det. \"Din farmor kunde knappt skriva sitt namn, " +
      "och nu ska du studera litteratur. Jag önskar att hon kunde se dig nu.\" " +
      "Amira kände en klump i halsen. Hon visste ingenting om Ingrid eller Karin, men brevets värme nådde ända fram. " +
      "Hon funderade på att försöka hitta Karin och ge henne brevet. Kanske var det viktigt för henne. " +
      "Eller kanske hade Karin lagt brevet i boken med flit, som en hälsning till en främling i framtiden.",
    questions: [
      {
        id: "las-hog-4-q1",
        level: "hitta",
        prompt: "Var hittade Amira brevet?",
        options: [
          "I en låda på vinden",
          "I en begagnad bok från en loppis",
          "I ett gammalt skåp",
          "I en tidning på biblioteket",
        ],
        correct: 1,
        explanation:
          "Texten berättar att Amira hittade brevet \"instucket i en begagnad bok hon köpt på loppis\".",
      },
      {
        id: "las-hog-4-q2",
        level: "tolka",
        prompt: "Varför nämner Ingrid att farmor knappt kunde skriva sitt namn?",
        options: [
          "Hon ville kritisera farmor",
          "Hon ville visa hur stor klassresan var — från analfabetism till universitet",
          "Hon tyckte att farmor borde ha lärt sig",
          "Hon ville att Karin skulle skämmas",
        ],
        correct: 1,
        explanation:
          "Genom att nämna farmors begränsade läskunnighet framhäver Ingrid vilken enorm utveckling det innebär att Karin nu ska studera litteratur på universitetet.",
      },
      {
        id: "las-hog-4-q3",
        level: "reflektera",
        prompt: "Amira funderar på om Karin lade brevet i boken med flit. Vad säger det om Amiras tolkning?",
        options: [
          "Amira tror att Karin var slarvig",
          "Amira ser en poetisk möjlighet — att brevet var menat att hittas av någon",
          "Amira vill bara hitta en ursäkt att behålla brevet",
          "Amira tror att boken var stulen",
        ],
        correct: 1,
        explanation:
          "Amira öppnar för en romantisk tolkning: att brevet medvetet lämnades som ett slags flaskpost, en hälsning genom tid och rum till en okänd läsare.",
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
          "Han ville spy ut sin ilska",
          "Han erbjöd närvaro och närhet utan att tvinga fram ett svårt samtal",
          "Han ville bara komma ut ur huset",
          "Han ville berätta om sin egen dag",
        ],
        correct: 1,
        explanation:
          "Victor visar emotionell intelligens: istället för att konfrontera pappan med det han läst, skapar han ett tillfälle till närhet. Ibland är det viktigaste inte att prata om problemet, utan att visa att man finns där.",
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
    title: "Språkets makt över tanken",
    passage:
      "Lingvisten Benjamin Lee Whorf formulerade på 1940-talet en hypotes som fortfarande debatteras: " +
      "att det språk vi talar påverkar hur vi tänker. Hypotesen, som ibland kallas den sapir-whorfska hypotesen, " +
      "finns i en stark och en svag version. Den starka versionen hävdar att språket bestämmer tanken — " +
      "att vi bokstavligen inte kan tänka tankar som vårt språk saknar ord för. " +
      "Den svaga versionen, som har mer vetenskapligt stöd, menar att språket påverkar och underlättar vissa tankemönster. " +
      "Ett ofta citerat exempel är att inuiter påstås ha ovanligt många ord för snö, " +
      "vilket skulle ge dem en rikare perception av snötyper. Denna anekdot har dock ifrågasatts — " +
      "bland annat av lingvisten Geoffrey Pullum, som menar att påståendet bygger på missförstånd och överdrifter. " +
      "Nyare forskning har dock visat att språk faktiskt kan påverka färguppfattning: " +
      "talare av språk som har separata grundord för ljusblått och mörkblått " +
      "kan urskilja nyansskillnader snabbare än talare av språk som bara har ett ord för blått.",
    questions: [
      {
        id: "las-gym-3-q1",
        level: "hitta",
        prompt: "Vem formulerade hypotesen om språkets påverkan på tanken?",
        options: [
          "Noam Chomsky",
          "Geoffrey Pullum",
          "Benjamin Lee Whorf",
          "Ferdinand de Saussure",
        ],
        correct: 2,
        explanation:
          "Texten anger att \"Lingvisten Benjamin Lee Whorf formulerade på 1940-talet en hypotes\".",
      },
      {
        id: "las-gym-3-q2",
        level: "tolka",
        prompt: "Vad är skillnaden mellan den starka och svaga versionen av hypotesen?",
        options: [
          "Den starka handlar om skriftspråk, den svaga om talspråk",
          "Den starka säger att språk bestämmer tanken, den svaga att språk påverkar tanken",
          "Den starka stöds av forskning, den svaga inte",
          "Den starka gäller bara inuiter, den svaga alla",
        ],
        correct: 1,
        explanation:
          "Den starka versionen hävdar att språket bestämmer tanken (determinism), medan den svaga versionen menar att det påverkar och underlättar vissa tankemönster (inflytande).",
      },
      {
        id: "las-gym-3-q3",
        level: "tolka",
        prompt: "Varför nämner texten kritiken mot inuit-exemplet?",
        options: [
          "För att visa att hela hypotesen är felaktig",
          "För att visa att populära argument ibland bygger på felaktiga antaganden",
          "För att inuiters språk inte har studerats",
          "För att stärka den starka versionen av hypotesen",
        ],
        correct: 1,
        explanation:
          "Texten presenterar inuit-exemplet som en vanlig men ifrågasatt anekdot. Det visar att vetenskapliga påståenden behöver granskas kritiskt, även populära sådana.",
      },
      {
        id: "las-gym-3-q4",
        level: "reflektera",
        prompt: "Om den svaga Sapir-Whorf-hypotesen stämmer, vad kan det innebära för flerspråkiga personer?",
        options: [
          "De tänker exakt likadant på alla språk",
          "De kan ha tillgång till fler tankemönster och nyanser beroende på vilket språk de använder",
          "De förlorar förmågan att tänka klart",
          "Det påverkar bara dem som talar ovanliga språk",
        ],
        correct: 1,
        explanation:
          "Om språket påverkar tankemönster kan flerspråkiga personer potentiellt växla mellan olika kognitiva perspektiv beroende på vilket språk de tänker och kommunicerar på.",
      },
    ],
  },
  {
    id: "las-gym-4",
    ageGroup: "gymnasiet",
    title: "Den ofrivillige turisten",
    passage:
      "Sommaren 1867 steg en ung svensk kvinna ombord på ett fartyg i Göteborg. Hon hette Ulrika och var tjugotvå år gammal. " +
      "I fickan hade hon ett brev från en kusin i Minnesota som lovade arbete i en textilfabrik. " +
      "Överfarten tog sex veckor. Under den tiden dog ett barn i skarlaksfeber och en äldre man föll överbord i en storm. " +
      "Ulrika skrev i sin dagbok att havet var \"som ett grått djur som aldrig sover\". " +
      "När hon anlände till New York talade hon inte ett ord engelska. En man vid hamnen försökte ta hennes väska och sa något hon inte förstod. " +
      "En annan svensk kvinna hjälpte henne och följde henne till tågstationen. " +
      "I Minnesota visade det sig att fabriken hade stängt tre månader tidigare. Kusinen hade redan rest vidare västerut. " +
      "Ulrika stod ensam på en perrong i ett land hon inte hade valt, med en tom adress i handen. " +
      "Ändå skrev hon hem: \"Jag tänker inte återvända. Här finns i alla fall möjligheter som inte fanns hemma.\"",
    questions: [
      {
        id: "las-gym-4-q1",
        level: "hitta",
        prompt: "Varför emigrerade Ulrika till Amerika?",
        options: [
          "Hon ville studera vid ett universitet",
          "Hon hade fått löfte om arbete i en textilfabrik via sin kusin",
          "Hon flydde från kriget",
          "Hon ville bli farmer",
        ],
        correct: 1,
        explanation:
          "Texten berättar att Ulrika hade \"ett brev från en kusin i Minnesota som lovade arbete i en textilfabrik\".",
      },
      {
        id: "las-gym-4-q2",
        level: "tolka",
        prompt: "Vad förmedlar liknelsen om havet som \"ett grått djur som aldrig sover\"?",
        options: [
          "Att Ulrika tyckte havet var vackert",
          "Att havet upplevdes som hotfullt, oförutsägbart och ständigt närvarande",
          "Att det var många djur i vattnet",
          "Att resan gick snabbt",
        ],
        correct: 1,
        explanation:
          "Metaforen fångar havets obevekliga, farliga natur — det vilar aldrig och kan slå till när som helst, precis som de faror passagerarna upplevde.",
      },
      {
        id: "las-gym-4-q3",
        level: "tolka",
        prompt: "Vad symboliserar \"den tomma adressen\" i Ulrikas hand?",
        options: [
          "Att hon glömt vägen",
          "Att hennes plan rasat samman — löftet hon rest för existerar inte längre",
          "Att hon inte kunde läsa",
          "Att adressen var felstavad",
        ],
        correct: 1,
        explanation:
          "Den tomma adressen är en konkret symbol för hur hela grunden för Ulrikas emigration försvunnit. Fabriken är stängd, kusinen borta — allt hon planerat är ogiltigt.",
      },
      {
        id: "las-gym-4-q4",
        level: "reflektera",
        prompt: "Hur tolkar du Ulrikas beslut att stanna trots att allt gått fel?",
        options: [
          "Det visar desperation — hon hade inget val",
          "Det visar en kombination av realism och envishet: hon ser möjligheter som inte fanns i Sverige, trots motgångarna",
          "Det visar naivitet — hon borde ha åkt hem",
          "Det visar att hon trivdes i Amerika",
        ],
        correct: 1,
        explanation:
          "Ulrikas brev hem avslöjar att hon ser sin situation nyktert men ändå väljer framåt. De \"möjligheter som inte fanns hemma\" antyder att livet i Sverige var ännu mer begränsat. Det är en komplex bild av emigrantens verklighet.",
      },
    ],
  },
  {
    id: "las-gym-5",
    ageGroup: "gymnasiet",
    title: "Algoritmernas redaktör",
    passage:
      "År 2024 får de flesta svenskar sina nyheter via flöden som styrs av algoritmer. " +
      "Plattformar som Instagram, TikTok och Google Discover väljer vilka artiklar, videos och inlägg som visas — " +
      "inte utifrån journalistisk relevans, utan utifrån vad som sannolikt genererar klick och engagemang. " +
      "Medieforskaren Sigurd Allern har kallat detta en form av \"algoritmisk gatekeeping\": " +
      "precis som tidningarnas redaktörer en gång valde vilka nyheter som hamnade på förstasidan, " +
      "bestämmer nu datamodeller vad miljoner människor ser varje dag. " +
      "Skillnaden är att en mänsklig redaktör har ett publicistiskt ansvar och styrs av pressetiska regler, " +
      "medan en algoritm optimerar för uppmärksamhet. " +
      "Konsekvenserna syns i forskning: användare som får nyheter via sociala medier har sämre förståelse för " +
      "nyhetshändelsers sammanhang jämfört med dem som aktivt söker upp nyheter via traditionella medier. " +
      "Samtidigt argumenterar teknikförespråkare att algoritmerna demokratiserar information — " +
      "fler röster hörs, inte bara de som traditionella medier valde att lyfta.",
    questions: [
      {
        id: "las-gym-5-q1",
        level: "hitta",
        prompt: "Vad kallas det fenomen där algoritmer styr nyhetsflödet?",
        options: [
          "Digital censur",
          "Algoritmisk gatekeeping",
          "Mediemonopol",
          "Automatiserad journalistik",
        ],
        correct: 1,
        explanation:
          "Texten refererar till medieforskaren Sigurd Allern som kallat fenomenet \"algoritmisk gatekeeping\".",
      },
      {
        id: "las-gym-5-q2",
        level: "tolka",
        prompt: "Vad är huvudskillnaden mellan en mänsklig redaktör och en algoritm enligt texten?",
        options: [
          "Redaktörer är långsammare",
          "Algoritmer kan inte läsa",
          "Redaktörer styrs av pressetik, algoritmer av engagemang",
          "Redaktörer väljer bara utländska nyheter",
        ],
        correct: 2,
        explanation:
          "Texten kontrasterar redaktörens publicistiska ansvar och pressetiska regler med algoritmens optimering för uppmärksamhet och klick.",
      },
      {
        id: "las-gym-5-q3",
        level: "tolka",
        prompt: "Varför nämner texten teknikförespråkarnas argument?",
        options: [
          "För att bevisa att algoritmer är bättre",
          "För att visa att frågan har flera sidor och inte är entydig",
          "För att kritisera traditionella medier",
          "För att avsluta texten positivt",
        ],
        correct: 1,
        explanation:
          "Genom att presentera motargumentet — att algoritmer demokratiserar information — ger texten en nyanserad bild av frågan snarare än en ensidig kritik.",
      },
      {
        id: "las-gym-5-q4",
        level: "reflektera",
        prompt: "Vilken slutsats kan man dra om sambandet mellan nyhetskanal och kunskapsnivå?",
        options: [
          "Sociala medier ger alltid bättre nyhetsförståelse",
          "Passivt nyhetskonsumerande via algoritmer ger sämre sammanhang än aktivt uppsökande av nyheter",
          "Traditionella medier ljuger mindre",
          "Algoritmer ger bara underhållning, aldrig nyheter",
        ],
        correct: 1,
        explanation:
          "Forskningen som nämns visar att sättet man tar del av nyheter påverkar förståelsen. Algoritmstyrda flöden ger fragmenterad information, medan aktivt uppsökande ger bättre kontext.",
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
  {
    id: "las-mel-3",
    ageGroup: "mellanstadiet",
    title: "Tidskapseln",
    passage:
      "Klass 5B hade bestämt sig för att göra en tidskapsel. De skulle gräva ner en låda på skolgården och öppna den om fem år. " +
      "Alla fick lägga i en sak. Wilma la i en teckning av sin häst Stansen. Omar stoppade ner sin favoritserietidning. " +
      "Elsa tvekade länge men valde till slut ett foto på hela klassen. " +
      "\"Om fem år kanske vi inte ens minns varandra,\" sa hon tyst. " +
      "\"Just därför är fotot perfekt,\" sa fröken och log. " +
      "De grävde ett hål under den stora björken och la ner lådan. Sedan lade de en platt sten ovanpå som markering. " +
      "\"Fem år,\" sa Omar. \"Det känns som en evighet.\" " +
      "\"Det går fortare än du tror,\" sa fröken.",
    questions: [
      {
        id: "las-mel-3-q1",
        level: "hitta",
        prompt: "Var grävde klassen ner tidskapseln?",
        options: [
          "I klassrummet",
          "Under den stora björken på skolgården",
          "I skolans källare",
          "Vid fotbollsplanen",
        ],
        correct: 1,
        explanation:
          "Texten säger att de \"grävde ett hål under den stora björken\".",
      },
      {
        id: "las-mel-3-q2",
        level: "hitta",
        prompt: "Vad la Elsa i tidskapseln?",
        options: [
          "En teckning",
          "En serietidning",
          "Ett foto på hela klassen",
          "En dagbok",
        ],
        correct: 2,
        explanation:
          "Elsa valde till slut \"ett foto på hela klassen\" att lägga i tidskapseln.",
      },
      {
        id: "las-mel-3-q3",
        level: "tolka",
        prompt: "Varför sa Elsa att de kanske inte minns varandra om fem år?",
        options: [
          "Hon hade dåligt minne",
          "Hon visste att klasskamrater ofta tappar kontakten med tiden",
          "Hon ville inte vara kvar i klassen",
          "Hon tyckte inte om sina klasskamrater",
        ],
        correct: 1,
        explanation:
          "Elsa uttrycker en oro för att vänner ibland glömmer varandra när de går skilda vägar efter skolan.",
      },
      {
        id: "las-mel-3-q4",
        level: "reflektera",
        prompt: "Varför tyckte fröken att fotot var det perfekta valet?",
        options: [
          "Foton tar inte mycket plats",
          "Just för att de kanske glömmer — fotot hjälper dem minnas",
          "Fröken gillade att fotografera",
          "Det var det dyraste föremålet",
        ],
        correct: 1,
        explanation:
          "Elsas oro om att glömma var just anledningen till att fotot var ett bra val — det bevarar minnet av klassen precis som en tidskapsel ska göra.",
      },
    ],
  },
  {
    id: "las-mel-4",
    ageGroup: "mellanstadiet",
    title: "Räven i staden",
    passage:
      "En morgon på väg till skolan stannade Amir tvärt. Mitt på trottoaren stod en räv. Den var rödorange med en stor lurvig svans " +
      "och tittade på honom med klara ögon. Amir vågade knappt andas. " +
      "Räven verkade inte alls rädd. Den nosade på en papperskasse som låg på marken, " +
      "snappade åt sig en bit av en macka och tassade sedan lugnt in i en buske. " +
      "\"Ingen kommer tro mig,\" tänkte Amir. Men när han kom till skolan berättade hans kompis Noor att hon också sett räven. " +
      "\"Den bor under verandan på Storgatan 12,\" sa hon. \"Mamma ringde kommunen, men de sa att räven inte gör någon skada.\" " +
      "Amir tänkte att det var konstigt att ett vilt djur kunde bo mitt i stan, men samtidigt tyckte han att det var ganska häftigt.",
    questions: [
      {
        id: "las-mel-4-q1",
        level: "hitta",
        prompt: "Var bodde räven enligt Noor?",
        options: [
          "I parken",
          "Under verandan på Storgatan 12",
          "I skogen utanför stan",
          "I en hundkoja",
        ],
        correct: 1,
        explanation:
          "Noor berättar att räven \"bor under verandan på Storgatan 12\".",
      },
      {
        id: "las-mel-4-q2",
        level: "tolka",
        prompt: "Varför var räven inte rädd för Amir?",
        options: [
          "Amir var tyst som en mus",
          "Räven var van vid människor i stadsmiljön",
          "Räven kände igen Amir",
          "Det var för mörkt för räven att se honom",
        ],
        correct: 1,
        explanation:
          "En räv som bor i staden har vant sig vid människor och trafik, därför flyr den inte som en räv i skogen skulle göra.",
      },
      {
        id: "las-mel-4-q3",
        level: "reflektera",
        prompt: "Vad tyder berättelsen på om förhållandet mellan djur och stad?",
        options: [
          "Djur hör aldrig hemma i städer",
          "Vilda djur kan anpassa sig till att leva nära människor",
          "Alla djur i staden är farliga",
          "Människor borde aldrig bo nära vilda djur",
        ],
        correct: 1,
        explanation:
          "Berättelsen visar att räven har anpassat sig till stadslivet — den äter matrester och bor under en veranda utan att ställa till problem.",
      },
    ],
  },
  {
    id: "las-mel-5",
    ageGroup: "mellanstadiet",
    title: "Målvakten som inte ville",
    passage:
      "Saga hade alltid spelat mittfältare i fotbollslaget. Men en dag blev lagets målvakt sjuk precis innan en viktig match. " +
      "\"Saga, du får ställa dig i mål,\" sa tränaren. Saga protesterade. Hon hatade att vara målvakt. " +
      "Det var ensamt att stå där bak, och alla skyllde på en om man släppte in mål. " +
      "Men det fanns ingen annan, så Saga drog på sig handskarna. " +
      "De första minuterna var lugna. Sedan kom motståndarna med ett hårt skott. Saga slängde sig och fick fingrarna på bollen. " +
      "Nästa gång kom ett skott nere i hörnet. Saga dök och höll bollen. Laget jublade. " +
      "När matchen var slut hade Saga hållit nollan. \"Du var fantastisk!\" sa tränaren. " +
      "Saga log, men sa: \"Jag vill tillbaka till mittfältet nästa match.\" Alla skrattade.",
    questions: [
      {
        id: "las-mel-5-q1",
        level: "hitta",
        prompt: "Varför fick Saga stå i mål?",
        options: [
          "Hon hade alltid velat prova",
          "Den vanliga målvakten var sjuk",
          "Tränaren tyckte hon var bäst",
          "Hon hade tappat sin plats på mittfältet",
        ],
        correct: 1,
        explanation:
          "Texten berättar att \"lagets målvakt blev sjuk precis innan en viktig match\".",
      },
      {
        id: "las-mel-5-q2",
        level: "tolka",
        prompt: "Varför hatade Saga att vara målvakt?",
        options: [
          "Hon var rädd för bollen",
          "Handskarna var för stora",
          "Det var ensamt och man fick skulden om man släppte in mål",
          "Hon kunde inte se bollen på avstånd",
        ],
        correct: 2,
        explanation:
          "Saga tänker att det är \"ensamt att stå där bak\" och att \"alla skyller på en om man släpper in mål\".",
      },
      {
        id: "las-mel-5-q3",
        level: "reflektera",
        prompt: "Vad visar Sagas sista kommentar om hennes karaktär?",
        options: [
          "Hon är otacksam och gnällig",
          "Hon har humor och vet vad hon trivs med, även om hon klarade utmaningen",
          "Hon vill aldrig prova något nytt",
          "Hon tycker inte om fotboll",
        ],
        correct: 1,
        explanation:
          "Saga klarade uppgiften utmärkt men vet fortfarande vad hon föredrar. Att kunna skämta om det visar att hon har bra självkännedom och humor.",
      },
    ],
  },
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
