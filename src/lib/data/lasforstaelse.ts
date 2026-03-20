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
      "Varje morgon gick Misse ut i tr\u00e4dg\u00e5rden f\u00f6r att jaga fj\u00e4rilar. Han smg alltid l\u00e5ngsamt genom gr\u00e4set " +
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
      "Klassen fick i uppgift att skriva en insndare om n\u00e5got de tyckte var or\u00e4ttvist. De flesta valde \u00e4mnen som l\u00e4xor, " +
      "mobilf\u00f6rbud och korta raster. Men Fatima skrev om n\u00e5got annat. Hon skrev om hur det k\u00e4nns att vara ny i ett land " +
      "och st\u00e5 i en grupp d\u00e4r alla pratar men ingen pratar med dig. Hon beskrev skolg\u00e5rden som ett hav d\u00e4r alla andra " +
      "hade b\u00e5tar, men hon fick simma. Texten var inte arg. Den var lugn, n\u00e4stan tyst, och det var just det som gjorde den s\u00e5 stark. " +
      'N\u00e4r l\u00e4raren l\u00e4ste upp den anonym blev det helt knpptyst i klassrummet. N\u00e5gon viskade "wow". ' +
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
      "v\u00e4ljer vilka sidor av oss sj\u00e4lva vi vill visa, och algoritmerna belr den version som genererar mest engagemang. " +
      "Sociologen Erving Goffman skrev redan p\u00e5 1950-talet om hur m\u00e4nniskor spelar roller i vardagen, likt akt\u00f6rer p\u00e5 en teaterscen. " +
      "Frams\u00e9ngen, det vi visar upp, och bakstaget, det privata, skiljs \u00e5t med medvetna val. Men vad h\u00e4nder n\u00e4r bakstaget krymper? " +
      "N\u00e4r vi \u00e4ven i ensamheten medvetet \"performar\" f\u00f6r en t\u00e4nkt publik? Forskare inom digital sociologi varnar f\u00f6r att gr\u00e4nsen " +
      "mellan den autentiska och den framst\u00e4llda identiteten h\u00e5ller p\u00e5 att suddas ut. Om vi aldrig sl\u00e4pper masken, " +
      "vem \u00e4r det d\u00e5 som b\u00e4r den? Frgn \u00e4r inte bara filosofisk. F\u00f6r unga m\u00e4nniskor som formar sin identitet " +
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
          "Att det \u00e4r farligt att bra fysiska masker",
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
      "I maj 2014 slog EU-domstolen fast att privatpersoner under visa omst\u00e4ndigheter har r\u00e4tt att f\u00e5 s\u00f6kresultat borttagna " +
      "fr\u00e5n s\u00f6kmotorer \u2014 den s\u00e5 kallade r\u00e4tten att bli gl\u00f6md. Beslutet v\u00e4ckte omedelbart debatt. " +
      "F\u00f6rspr\u00e5karna menade att varje m\u00e4nniska f\u00f6rtj\u00e4nar en andra chans och att f\u00f6r\u00e5ldrad, irrelevant information " +
      "inte ska f\u00f6rf\u00f6lja n\u00e5gon f\u00f6r resten av livet. En ung person som beg\u00e5tt ett misstag ska inte beh\u00f6va m\u00f6ta det " +
      "vid varje jobbans\u00f6kan. Kritikerna h\u00e4vdade d\u00e4remot att r\u00e4tten riskerade att bli ett verktyg f\u00f6r m\u00e4ktiga " +
      "att d\u00f6lja obehaglig men samh\u00e4llsrelevant information. Om en politiker eller f\u00f6retagsledare kan radera sitt digitala f\u00f6rflutna, " +
      "vad h\u00e4nder d\u00e5 med allm\u00e4nhetens r\u00e4tt att granska makten? Sp\u00e4nningen mellan integritet och transparens " +
      "\u00e4r inte ny, men digitaliseringen har sk\u00e4rpt den. I en v\u00e4rld d\u00e4r information \u00e4r permanentär fr\u00e5gan inte om vi beh\u00f6ver " +
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
