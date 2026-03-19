"use client";

import { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  ArrowRight,
  BookOpen,
  PenLine,
  MessageSquare,
  Trophy,
  Zap,
} from "lucide-react";
import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type ExerciseTab = "lasforstaelse" | "ordforstaelse" | "skrivuppgift";

interface ReadingQuestion {
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface ReadingPassage {
  title: string;
  text: string;
  questions: ReadingQuestion[];
}

interface WordQuestion {
  sentence: string;
  targetWord: string;
  options: string[];
  correct: number;
}

interface WritingPrompt {
  title: string;
  description: string;
  checklist: string[];
}

interface LevelData {
  reading: ReadingPassage[];
  words: WordQuestion[];
  writing: WritingPrompt[];
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* -------------------------------------------------------------------------- */
/*  DATA: L\u00c5GSTADIET                                                          */
/* -------------------------------------------------------------------------- */

const LAGSTADIET_READING: ReadingPassage[] = [
  {
    title: "Max och kattungen",
    text: `Max hade en hund som hette Sigge. Sigge var brun och vit och hade stora, mjuka \u00f6ron. Varje dag efter skolan gick Max och Sigge till parken. D\u00e4r brukade Sigge springa efter pinnar och leka med andra hundar.

En dag hittade Sigge n\u00e5got i busken. Det var en liten kattunge! Kattungen var gr\u00e5 och s\u00e5g r\u00e4dd ut. Max tog f\u00f6rsiktigt upp den och bar hem den.

Mamma ringde till djurskyddet. "Vi tar hand om den tills vi hittar \u00e4garen," sa hon. Max var glad. Nu hade han tv\u00e5 djur att leka med!`,
    questions: [
      {
        prompt: "Vad heter hunden i ber\u00e4ttelsen?",
        options: ["Max", "Sigge", "Kansen", "Ludde"],
        correct: 1,
        explanation: "Hunden heter Sigge. Max \u00e4r pojken som \u00e4ger Sigge.",
      },
      {
        prompt: "Vad hittade Sigge i busken?",
        options: ["En boll", "En pinne", "En kattunge", "En sko"],
        correct: 2,
        explanation: "Sigge hittade en liten gr\u00e5 kattunge i busken.",
      },
      {
        prompt: "Vad gjorde mamma efter att Max kom hem med kattungen?",
        options: [
          "Hon blev arg",
          "Hon ringde till djurskyddet",
          "Hon l\u00e4mnade tillbaka kattungen",
          "Hon k\u00f6pte kattmat",
        ],
        correct: 1,
        explanation: "Mamma ringde till djurskyddet f\u00f6r att f\u00f6rs\u00f6ka hitta kattungens \u00e4gare.",
      },
    ],
  },
  {
    title: "Regnv\u00e4dret",
    text: `Det regnade hela dagen. Stora droppar slog mot f\u00f6nstret och det l\u00e5t som om n\u00e5gon trummade p\u00e5 glaset. Ali satt vid k\u00f6ksbordet och s\u00e5g ut. Han ville g\u00e5 ut och leka men det gick ju inte i det h\u00e4r v\u00e4dret.

Alis mamma kom in med en stor l\u00e5da. "Ska vi bygga n\u00e5got?" fr\u00e5gade hon. I l\u00e5dan fanns papper, lim, saxar och f\u00e4rgpennor. Ali fick en id\u00e9 \u2013 han ville bygga en b\u00e5t!

Ali och mamma jobbade hela eftermiddagen. N\u00e4r b\u00e5ten var klar hade det slutat regna. Ali sprang ut med b\u00e5ten och satte den i en stor vattenpuss. Den fl\u00f6t! Ali var j\u00e4ttestolt.`,
    questions: [
      {
        prompt: "Varf\u00f6r kunde Ali inte g\u00e5 ut och leka?",
        options: ["Han var sjuk", "Det regnade", "Han hade l\u00e4xa", "Det var m\u00f6rkt"],
        correct: 1,
        explanation: "Det regnade hela dagen s\u00e5 Ali kunde inte g\u00e5 ut.",
      },
      {
        prompt: "Vad fanns i l\u00e5dan som mamma tog fram?",
        options: ["Leksaker", "Mat", "Papper, lim, saxar och f\u00e4rgpennor", "B\u00f6cker"],
        correct: 2,
        explanation: "I l\u00e5dan fanns papper, lim, saxar och f\u00e4rgpennor.",
      },
      {
        prompt: "Vad byggde Ali?",
        options: ["Ett hus", "En b\u00e5t", "Ett flygplan", "En robot"],
        correct: 1,
        explanation: "Ali fick id\u00e9n att bygga en b\u00e5t av materialet i l\u00e5dan.",
      },
      {
        prompt: "Vad h\u00e4nde n\u00e4r b\u00e5ten var klar?",
        options: [
          "Det b\u00f6rjade regna mer",
          "Ali gick och la sig",
          "Det hade slutat regna och Ali testade b\u00e5ten ute",
          "B\u00e5ten gick s\u00f6nder",
        ],
        correct: 2,
        explanation: "N\u00e4r b\u00e5ten var klar hade det slutat regna och Ali satte b\u00e5ten i en vattenpuss.",
      },
    ],
  },
];

const LAGSTADIET_WORDS: WordQuestion[] = [
  {
    sentence: "Solen sken starkt \u00f6ver skolgarden.",
    targetWord: "sken",
    options: ["Regnade", "Lyste", "Bl\u00e5ste", "Sm\u00e4lte"],
    correct: 1,
  },
  {
    sentence: "Vi var ivriga att b\u00f6rja p\u00e5 uppgiften.",
    targetWord: "ivriga",
    options: ["Tr\u00f6tta", "Arga", "Glada och ot\u00e5liga", "Ledsna"],
    correct: 2,
  },
  {
    sentence: "Huset var gigantiskt j\u00e4mf\u00f6rt med de andra.",
    targetWord: "gigantiskt",
    options: ["Litet", "Gammalt", "J\u00e4ttestort", "Fint"],
    correct: 2,
  },
  {
    sentence: "Den modiga flickan v\u00e5gade hoppa fr\u00e5n trampolinen.",
    targetWord: "modiga",
    options: ["Glada", "R\u00e4dda", "Starka", "Orlogsr\u00e4dda"],
    correct: 0,
  },
  {
    sentence: "Hunden smyger tyst genom gr\u00e4set.",
    targetWord: "smyger",
    options: ["Springer snabbt", "G\u00e5r tyst och f\u00f6rsiktigt", "Hoppar h\u00f6gt", "Sover djupt"],
    correct: 1,
  },
];

const LAGSTADIET_WRITING: WritingPrompt[] = [
  {
    title: "Min b\u00e4sta dag",
    description: "Skriv om din b\u00e4sta dag! Vad h\u00e4nde? Var var du? Vilka var med? Varf\u00f6r var det en bra dag? Skriv minst fem meningar.",
    checklist: [
      "Har du ber\u00e4ttat vad som h\u00e4nde?",
      "Har du skrivit var du var?",
      "Har du punkt i slutet av varje mening?",
      "Har du stor bokstav i b\u00f6rjan av varje mening?",
      "Kan en kompis f\u00f6rst\u00e5 din ber\u00e4ttelse?",
    ],
  },
  {
    title: "Ett djur jag \u00f6nskar mig",
    description: "Om du fick v\u00e4lja vilket djur som helst som husdjur, vilket skulle du v\u00e4lja? Ber\u00e4tta varf\u00f6r du vill ha just det djuret och vad ni skulle g\u00f6ra tillsammans.",
    checklist: [
      "B\u00f6rja med att ber\u00e4tta vilket djur du v\u00e4ljer",
      "F\u00f6rklara varf\u00f6r",
      "Beskriv vad ni skulle g\u00f6ra ihop",
      "Anv\u00e4nd bindeord som \u201doch\u201d, \u201dmen\u201d, \u201df\u00f6r att\u201d",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  DATA: MELLANSTADIET                                                        */
/* -------------------------------------------------------------------------- */

const MELLANSTADIET_READING: ReadingPassage[] = [
  {
    title: "Klasstidningen",
    text: `Ella tittade ut genom f\u00f6nstret och suckade. Det hade regnat i tre dagar och skolg\u00e5rden var en enda stor p\u00f6l. Alla raster hade de f\u00e5tt vara inne, och det b\u00f6rjade bli tr\u00e5ngt i klassrummet.

"Vi kan v\u00e4l g\u00f6ra n\u00e5got roligt \u00e4nd\u00e5," sa hennes kompis Amir och satte sig bredvid henne. "Vi kan rita, eller spela ett spel."

"Jag vet!" sa Ella pl\u00f6tsligt. "Vi kan starta en klasstidning! Vi kan skriva om saker som h\u00e4nder p\u00e5 skolan, g\u00f6ra korsord och rita serier."

Amir t\u00e4nkte efter en stund. "Det \u00e4r faktiskt en j\u00e4ttebra id\u00e9. Jag kan skriva om fotbollsturneringen som ska vara n\u00e4sta vecka."

Under resten av rasten gick de runt och fr\u00e5gade klasskamraterna. Till slut hade de en hel lista med id\u00e9er. Lina ville g\u00f6ra en intervju med vaktm\u00e4staren, Sam ville rita en serie om skolans katt, och Felix ville skriva recensioner av maten i matsalen.

N\u00e4r fr\u00f6ken kom tillbaka s\u00e5g hon en klass full av energi och id\u00e9er. "Vad har h\u00e4nt h\u00e4r?" fr\u00e5gade hon f\u00f6rv\u00e5nat. Ella log. "Vi har hittat n\u00e5got b\u00e4ttre att g\u00f6ra \u00e4n att titta p\u00e5 regnet."`,
    questions: [
      {
        prompt: "Varf\u00f6r var eleverna inne p\u00e5 rasten?",
        options: [
          "Det var f\u00f6r kallt ute",
          "Det hade regnat i tre dagar",
          "Skolg\u00e5rden var avst\u00e4ngd",
          "De hade ett prov att plugga till",
        ],
        correct: 1,
        explanation: "Det hade regnat i tre dagar och skolg\u00e5rden var en enda stor p\u00f6l.",
      },
      {
        prompt: "Vems id\u00e9 var det att starta en klasstidning?",
        options: ["Amirs", "Fr\u00f6kens", "Ellas", "Linas"],
        correct: 2,
        explanation: "Det var Ella som pl\u00f6tsligt fick id\u00e9n att starta en klasstidning.",
      },
      {
        prompt: "Vad ville Felix g\u00f6ra i tidningen?",
        options: [
          "Rita en serie",
          "Skriva om fotbollsturneringen",
          "Intervjua vaktm\u00e4staren",
          "Skriva recensioner av skolmaten",
        ],
        correct: 3,
        explanation: "Felix ville skriva recensioner av maten i matsalen.",
      },
      {
        prompt: "Hur reagerade fr\u00f6ken n\u00e4r hon kom tillbaka?",
        options: [
          "Hon blev arg",
          "Hon blev f\u00f6rv\u00e5nad \u00f6ver all energi",
          "Hon sa att de m\u00e5ste vara tysta",
          "Hon ville g\u00e5 ut",
        ],
        correct: 1,
        explanation: "Fr\u00f6ken s\u00e5g en klass full av energi och id\u00e9er och fr\u00e5gade f\u00f6rv\u00e5nat vad som hade h\u00e4nt.",
      },
    ],
  },
  {
    title: "Vikingarna \u2013 mer \u00e4n bara krigare",
    text: `N\u00e4r m\u00e5nga h\u00f6r ordet "viking" t\u00e4nker de p\u00e5 vilda krigare med hj\u00e4lmar och sv\u00e4rd. Men det \u00e4r bara en liten del av sanningen. De flesta som levde under vikingatiden var b\u00f6nder, hantverkare och handlare.

Vikingarna var skickliga skeppsbyggare och sj\u00f6farare. Deras l\u00e5ngskepp kunde f\u00e4rdas b\u00e5de p\u00e5 \u00f6ppet hav och uppf\u00f6r smala floder. De reste till l\u00e4nder som Ryssland, Turkiet och till och med Nordamerika \u2013 l\u00e5ngt innan Columbus.

Kvinnorna hade en viktig roll i det nordiska samh\u00e4llet. De sk\u00f6tte g\u00e5rdarna n\u00e4r m\u00e4nnen var borta och kunde \u00e4ga mark och beg\u00e4ra skilsm\u00e4ssa. Vikingatiden varade fr\u00e5n ungef\u00e4r \u00e5r 800 till 1100.`,
    questions: [
      {
        prompt: "Vad var de flesta som levde under vikingatiden?",
        options: ["Bara krigare", "B\u00f6nder, hantverkare och handlare", "Kungar och drottningar", "Fiskare"],
        correct: 1,
        explanation: "Texten f\u00f6rklarar att de flesta var b\u00f6nder, hantverkare och handlare \u2013 inte bara krigare.",
      },
      {
        prompt: "Vad var speciellt med vikingarnas skepp?",
        options: [
          "De var gjorda av metall",
          "De kunde f\u00e4rdas b\u00e5de p\u00e5 hav och uppf\u00f6r floder",
          "De var j\u00e4ttestora",
          "De hade motorer",
        ],
        correct: 1,
        explanation: "Vikingarnas l\u00e5ngskepp var s\u00e5 smidiga att de kunde f\u00e4rdas b\u00e5de p\u00e5 hav och i floder.",
      },
      {
        prompt: "N\u00e4r varade vikingatiden?",
        options: ["500\u2013700", "800\u20131100", "1200\u20131500", "1500\u20131800"],
        correct: 1,
        explanation: "Vikingatiden varade fr\u00e5n ungef\u00e4r \u00e5r 800 till 1100.",
      },
    ],
  },
];

const MELLANSTADIET_WORDS: WordQuestion[] = [
  {
    sentence: "Det blev ett enormt ov\u00e4sen i korridoren.",
    targetWord: "enormt",
    options: ["Litet", "Konstigt", "Mycket stort", "Kort"],
    correct: 2,
  },
  {
    sentence: "L\u00e4raren blev f\u00f6rbluffad av svaret.",
    targetWord: "f\u00f6rbluffad",
    options: ["Arg", "Ledsen", "F\u00f6rv\u00e5nad", "Uttr\u00e5kad"],
    correct: 2,
  },
  {
    sentence: "Vi m\u00e5ste vara f\u00f6rsiktiga i trafiken.",
    targetWord: "f\u00f6rsiktiga",
    options: ["Modiga", "Snabba", "Aktsamma", "R\u00e4dda"],
    correct: 2,
  },
  {
    sentence: "Uppgiften var komplicerad och tog l\u00e5ng tid.",
    targetWord: "komplicerad",
    options: ["Enkel", "Tr\u00e5kig", "Sv\u00e5r och invecklad", "Rolig"],
    correct: 2,
  },
  {
    sentence: "St\u00e4mningen var harmonisk under middagen.",
    targetWord: "harmonisk",
    options: ["Tyst och stilla", "Trivsam och samst\u00e4mmig", "H\u00f6gljudd och glad", "Sp\u00e4nd och orolig"],
    correct: 1,
  },
];

const MELLANSTADIET_WRITING: WritingPrompt[] = [
  {
    title: "Ber\u00e4ttande: Den hemliga platsen",
    description: "Skriv en ber\u00e4ttelse om en person som hittar en hemlig plats. Vad \u00e4r det f\u00f6r plats? Hur hittade hen den? Vad h\u00e4nder d\u00e4r? Skriv minst 200 ord.",
    checklist: [
      "Har din ber\u00e4ttelse en tydlig b\u00f6rjan, mitt och slut?",
      "Har du beskrivit milj\u00f6n s\u00e5 l\u00e4saren kan se den framf\u00f6r sig?",
      "Anv\u00e4nder du styckeindelning?",
      "Har du varierat dina meningar (korta och l\u00e5nga)?",
      "Har du l\u00e4st igenom texten och r\u00e4ttat stavfel?",
    ],
  },
  {
    title: "En viktig uppfinning",
    description: "V\u00e4lj en uppfinning som du tycker \u00e4r viktig (till exempel hjulet, internet eller kylsk\u00e5pet). Skriv en text d\u00e4r du f\u00f6rklarar vad uppfinningen \u00e4r, varf\u00f6r den \u00e4r viktig och hur v\u00e5rt liv skulle vara utan den.",
    checklist: [
      "Inled med en mening som f\u00e5ngar l\u00e4sarens intresse",
      "F\u00f6rklara tydligt vad uppfinningen g\u00f6r",
      "Ge minst tv\u00e5 argument f\u00f6r varf\u00f6r den \u00e4r viktig",
      "Avsluta med en sammanfattande mening",
      "Anv\u00e4nd styckeindelning",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  DATA: H\u00d6GSTADIET                                                          */
/* -------------------------------------------------------------------------- */

const HOGSTADIET_READING: ReadingPassage[] = [
  {
    title: "Busschauff\u00f6ren",
    text: `Varje morgon klockan sex vaknar Fatima till ljudet av regn mot f\u00f6nstret. Hon bor i en liten l\u00e4genhet p\u00e5 tredje v\u00e5ningen i en stad som aldrig verkar sluta v\u00e4xa. Fr\u00e5n k\u00f6ket kan hon se kranar och byggnadsst\u00e4llningar som str\u00e4cker sig mot himlen som hungriga fingrar.

Fatima jobbar som busschauff\u00f6r och har gjort det i femton \u00e5r. Hon s\u00e4ger att hon k\u00e4nner staden b\u00e4ttre \u00e4n sin egen handflata. "Varje gata har sin historia," brukar hon s\u00e4ga till passagerarna som lyssnar.

Det som fascinerar Fatima mest \u00e4r m\u00e4nniskorna. Varje dag stiger hundratals ansikten p\u00e5 och av hennes buss. Hon har l\u00e4rt sig att l\u00e4sa st\u00e4mningar \u2013 den stressade mamman med barnvagnen, ton\u00e5ringen med h\u00f6rlurarna som en sk\u00f6ld mot v\u00e4rlden, den \u00e4ldre mannen som alltid tackar n\u00e4r han kliver av.

"Att k\u00f6ra buss handlar inte bara om att f\u00f6lja en rutt," s\u00e4ger Fatima. "Det handlar om att vara en del av andras vardag."`,
    questions: [
      {
        prompt: "Vad \u00e4r textens huvudsakliga tema?",
        options: [
          "Hur stadsplanering p\u00e5verkar milj\u00f6n",
          "En busschauff\u00f6rs relation till sin stad och dess inv\u00e5nare",
          "Problemen med att bo i en v\u00e4xande stad",
          "Fatimas barndomsminnen",
        ],
        correct: 1,
        explanation: "Texten handlar om Fatimas erfarenheter som busschauff\u00f6r och hennes relation till staden och m\u00e4nniskorna.",
      },
      {
        prompt: "Varf\u00f6r beskrivs ton\u00e5ringens h\u00f6rlurar som \"en sk\u00f6ld mot v\u00e4rlden\"?",
        options: [
          "H\u00f6rlurarna \u00e4r gjorda av metall",
          "Ton\u00e5ringen anv\u00e4nder h\u00f6rlurarna f\u00f6r att st\u00e4nga ute omgivningen",
          "Ton\u00e5ringen lyssnar p\u00e5 krigsmusik",
          "H\u00f6rlurarna skyddar mot buller fr\u00e5n trafiken",
        ],
        correct: 1,
        explanation: "Metaforen antyder att ton\u00e5ringen anv\u00e4nder h\u00f6rlurarna f\u00f6r att skapa en barri\u00e4r mellan sig och omgivningen.",
      },
      {
        prompt: "Kranar och byggnadsst\u00e4llningar beskrivs som \"hungriga fingrar\". Vilken stilfigur anv\u00e4nds?",
        options: ["Allitteration", "Liknelse", "Personifiering", "Hyperbol"],
        correct: 2,
        explanation: "Kranarna och byggnadsst\u00e4llningarna ges m\u00e4nskliga egenskaper (hungriga), vilket \u00e4r en personifiering.",
      },
      {
        prompt: "Vad menar Fatima med att hon \"k\u00e4nner staden b\u00e4ttre \u00e4n sin egen handflata\"?",
        options: [
          "Hon har d\u00e5lig syn",
          "Hon har en karta \u00f6ver alla gator",
          "Hon har mycket djup kunskap om stadens gator och platser",
          "Hon tycker inte om att titta p\u00e5 sina h\u00e4nder",
        ],
        correct: 2,
        explanation: "Det \u00e4r ett idiom som betyder att man har mycket god kunskap om n\u00e5got.",
      },
    ],
  },
  {
    title: "Algoritmer och du",
    text: `N\u00e4r du \u00f6ppnar sociala medier m\u00f6ts du av ett fl\u00f6de som verkar vara skr\u00e4ddarsytt just f\u00f6r dig. Det \u00e4r det ocks\u00e5 \u2013 bakom kulisserna arbetar avancerade algoritmer som analyserar vad du gillar, delar och tittar p\u00e5 f\u00f6r att visa inneh\u00e5ll som h\u00e5ller dig kvar l\u00e4ngre.

Dessa algoritmer skapar s\u00e5 kallade "filterbubblor", d\u00e4r du fr\u00e4mst ser \u00e5sikter och information som liknar det du redan tycker. Kritiker menar att detta g\u00f6r det sv\u00e5rare att f\u00f6rst\u00e5 andras perspektiv och att det kan f\u00f6rst\u00e4rka polarisering i samh\u00e4llet.

F\u00f6rspr\u00e5kare h\u00e4vdar dock att algoritmerna g\u00f6r internet anv\u00e4ndbart. Utan dem skulle vi dr\u00e4nkas i information. Nyckeln, menar m\u00e5nga forskare, \u00e4r att vara medveten om att det fl\u00f6de man ser \u00e4r filtrerat \u2013 och aktivt s\u00f6ka upp andra perspektiv.`,
    questions: [
      {
        prompt: "Vad \u00e4r en \"filterbubbla\" enligt texten?",
        options: [
          "En typ av skydd mot virus p\u00e5 internet",
          "N\u00e4r man fr\u00e4mst ser \u00e5sikter som liknar ens egna",
          "En app f\u00f6r att filtrera bort reklam",
          "En s\u00e4kerhetsfunktion p\u00e5 sociala medier",
        ],
        correct: 1,
        explanation: "En filterbubbla inneb\u00e4r att man fr\u00e4mst exponeras f\u00f6r \u00e5sikter och information som liknar det man redan tycker.",
      },
      {
        prompt: "Vad menar kritikerna om filterbubblor?",
        options: [
          "De \u00e4r bra f\u00f6r demokratin",
          "De g\u00f6r internet roligare",
          "De kan f\u00f6rst\u00e4rka polarisering i samh\u00e4llet",
          "De hj\u00e4lper oss att f\u00f6rst\u00e5 varandra",
        ],
        correct: 2,
        explanation: "Kritikerna menar att filterbubblor g\u00f6r det sv\u00e5rare att f\u00f6rst\u00e5 andras perspektiv och f\u00f6rst\u00e4rker polarisering.",
      },
      {
        prompt: "Vad r\u00e5der forskare oss att g\u00f6ra?",
        options: [
          "Sluta anv\u00e4nda internet",
          "Lita p\u00e5 att algoritmerna visar hela bilden",
          "Vara medveten om filtreringen och s\u00f6ka upp andra perspektiv",
          "Bara l\u00e4sa nyheter i tidningen",
        ],
        correct: 2,
        explanation: "Forskare r\u00e5der att man ska vara medveten om att fl\u00f6det \u00e4r filtrerat och aktivt s\u00f6ka upp andra perspektiv.",
      },
    ],
  },
];

const HOGSTADIET_WORDS: WordQuestion[] = [
  {
    sentence: "Debatten blev alltmer polariserad och det var sv\u00e5rt att hitta en kompromiss.",
    targetWord: "polariserad",
    options: [
      "Uppdelad i tv\u00e5 starkt motst\u00e5ende l\u00e4ger",
      "Lugn och sansad",
      "Komplicerad",
      "F\u00f6rvirrande",
    ],
    correct: 0,
  },
  {
    sentence: "Rapporten visade tydliga implikationer f\u00f6r skolans verksamhet.",
    targetWord: "implikationer",
    options: ["Problem", "F\u00f6ljder eller konsekvenser", "Regler", "F\u00f6rdelar"],
    correct: 1,
  },
  {
    sentence: "Politikern bem\u00f6tte kritiken med sakliga argument.",
    targetWord: "sakliga",
    options: ["K\u00e4nslom\u00e4ssiga", "Grundade p\u00e5 fakta och f\u00f6rnuft", "Aggressiva", "Os\u00e4kra"],
    correct: 1,
  },
  {
    sentence: "Eleverna visade p\u00e5 stor m\u00e5ngfald i sina tolkningar av dikten.",
    targetWord: "m\u00e5ngfald",
    options: ["Enighet", "Stor variation och olikhet", "Noggrannhet", "F\u00f6rvirring"],
    correct: 1,
  },
  {
    sentence: "F\u00f6rfattarens intentioner med texten har diskuterats flitigt.",
    targetWord: "intentioner",
    options: ["Avsikter och syften", "Misstag", "Stilval", "K\u00e4nslor"],
    correct: 0,
  },
];

const HOGSTADIET_WRITING: WritingPrompt[] = [
  {
    title: "Kr\u00f6nika: Sk\u00e4rmtid",
    description: "Skriv en kr\u00f6nika d\u00e4r du utg\u00e5r fr\u00e5n dina egna erfarenheter av sk\u00e4rmanv\u00e4ndning. Vad \u00e4r bra och d\u00e5ligt med att vi alltid \u00e4r uppkopplade? Anv\u00e4nd en personlig ton men st\u00f6d dina resonemang med argument.",
    checklist: [
      "B\u00f6rja med en personlig ing\u00e5ng som v\u00e4cker intresse",
      "Blanda egna upplevelser med allm\u00e4nna resonemang",
      "Visa p\u00e5 b\u00e5de f\u00f6r- och nackdelar",
      "Anv\u00e4nd retoriska grepp som fr\u00e5gor och kontraster",
      "Avsluta med en pointe som stannar hos l\u00e4saren",
      "Tydlig styckeindelning med \u00f6verg\u00e5ngar",
    ],
  },
  {
    title: "Argumenterande text: Skoluniform",
    description: "Borde svenska skolor inf\u00f6ra skoluniform? Ta st\u00e4llning och skriv en argumenterande text d\u00e4r du presenterar minst tre argument f\u00f6r din \u00e5sikt. Bem\u00f6t \u00e4ven ett motargument.",
    checklist: [
      "Ange din tes tydligt i inledningen",
      "Presentera ett argument per stycke",
      "Anv\u00e4nd exempel och j\u00e4mf\u00f6relser",
      "Bem\u00f6t minst ett motargument",
      "Sammanfatta och f\u00f6rst\u00e4rk din tes i avslutningen",
      "Anv\u00e4nd bindeord: \u201dd\u00e4rf\u00f6r\u201d, \u201ddessutom\u201d, \u201d\u00e5 andra sidan\u201d",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  DATA: GYMNASIET                                                            */
/* -------------------------------------------------------------------------- */

const GYMNASIET_READING: ReadingPassage[] = [
  {
    title: "Uppm\u00e4rksamhetsekonomin",
    text: `I en tid av st\u00e4ndig uppkoppling har begreppet "uppm\u00e4rksamhet" blivit en alltmer knapp resurs. Forskare inom kognitiv psykologi talar om uppm\u00e4rksamhetsekonomin \u2013 id\u00e9n att v\u00e5r f\u00f6rm\u00e5ga att fokusera \u00e4r begr\u00e4nsad och att f\u00f6retag, plattformar och medier konkurrerar om den.

Sociologen Georg Simmel beskrev redan i b\u00f6rjan av 1900-talet hur storstadslivet bombarderade m\u00e4nniskor med sinnesintryck och tvingade dem att utveckla en blas\u00e9 attityd \u2013 en emotionell avtrubbning som skydd mot \u00f6verbelastning. Mer \u00e4n hundra \u00e5r senare resonerar man kring om den digitala v\u00e4rlden skapar en liknande reaktion, fast i global skala.

Fr\u00e5gan \u00e4r om skyddsmekanismerna r\u00e4cker. N\u00e4r algoritmer \u00e4r konstruerade f\u00f6r att maximera engagemang snarare \u00e4n v\u00e4lm\u00e5ende, hamnar individens intresse i konflikt med plattformarnas aff\u00e4rsmodell. N\u00e5gra forskare f\u00f6resl\u00e5r att digital minimalism \u2013 ett medvetet val att begr\u00e4nsa sin sk\u00e4rmtid \u2013 kan vara ett svar.`,
    questions: [
      {
        prompt: "Vad avses med begreppet \"uppm\u00e4rksamhetsekonomi\"?",
        options: [
          "En ekonomisk teori om hur pengar f\u00f6rdelas",
          "Id\u00e9n att v\u00e5r f\u00f6rm\u00e5ga att fokusera \u00e4r begr\u00e4nsad och att akt\u00f6rer konkurrerar om den",
          "En modell f\u00f6r hur skolor b\u00f6r undervisa",
          "Ett s\u00e4tt att m\u00e4ta produktivitet p\u00e5 arbetsplatser",
        ],
        correct: 1,
        explanation: "Uppm\u00e4rksamhetsekonomin handlar om att v\u00e5r fokusf\u00f6rm\u00e5ga \u00e4r begr\u00e4nsad och att f\u00f6retag konkurrerar om den.",
      },
      {
        prompt: "Vad \u00e4r kopplingen mellan Simmels teori och den digitala v\u00e4rlden?",
        options: [
          "Det finns ingen koppling alls",
          "B\u00e5da handlar om hur \u00f6verfl\u00f6d av intryck leder till emotionell avtrubbning",
          "Simmel f\u00f6rutsp\u00e5dde internet",
          "Simmels teori motbevisar uppm\u00e4rksamhetsekonomin",
        ],
        correct: 1,
        explanation: "B\u00e5de storstadslivets sinnesintryck och den digitala v\u00e4rldens informationsfl\u00f6de kan leda till avtrubbning som skydd mot \u00f6verbelastning.",
      },
      {
        prompt: "Vilken konflikt lyfter texten fram?",
        options: [
          "Konflikten mellan l\u00e4rare och elever",
          "Konflikten mellan individens v\u00e4lm\u00e5ende och plattformarnas aff\u00e4rsmodell",
          "Konflikten mellan stad och landsbygd",
          "Konflikten mellan forskning och politik",
        ],
        correct: 1,
        explanation: "Texten beskriver hur algoritmerna \u00e4r byggda f\u00f6r engagemang, inte v\u00e4lm\u00e5ende, vilket skapar en intressekonflikt.",
      },
    ],
  },
  {
    title: "Litteratur som motst\u00e5nd",
    text: `Under 1900-talets totalit\u00e4ra regimer blev litteraturen ett av de f\u00e5 utrymmen d\u00e4r avvikande r\u00f6ster kunde g\u00f6ra sig h\u00f6rda. F\u00f6rfattare som Anna Achmatova, Aleksandr Solzjenitsyn och Herta M\u00fcller anv\u00e4nde sina texter f\u00f6r att vittna om f\u00f6rtryck, bevara minnen och skapa hopp.

Att skriva under f\u00f6rtryck kr\u00e4ver ofta att man arbetar med spr\u00e5ket p\u00e5 nya s\u00e4tt. Allegori, symbol och undertext blev verktyg f\u00f6r att kringg\u00e5 censur. L\u00e4sarna l\u00e4rde sig att l\u00e4sa mellan raderna \u2013 en f\u00e4rdighet som i sig blev en form av motst\u00e5nd.

\u00c4ven idag anv\u00e4nds litteraturen som ett medel f\u00f6r att ifr\u00e5gas\u00e4tta r\u00e5dande strukturer. I l\u00e4nder med begr\u00e4nsad yttrandefrihet publiceras texter anonymt p\u00e5 n\u00e4tet, och exilf\u00f6rfattare ger r\u00f6st \u00e5t dem som inte sj\u00e4lva kan tala. Litteraturens roll som motst\u00e5nd \u00e4r l\u00e5ngt ifr\u00e5n \u00f6verspelad.`,
    questions: [
      {
        prompt: "Vilka stilistiska verktyg anv\u00e4nde f\u00f6rfattare f\u00f6r att kringg\u00e5 censur?",
        options: [
          "Klartext och direkta anklagelser",
          "Allegori, symbol och undertext",
          "Humor och satir enbart",
          "Tekniska termer och facksprak",
        ],
        correct: 1,
        explanation: "F\u00f6rfattare anv\u00e4nde allegori, symbol och undertext f\u00f6r att kommunicera f\u00f6rbjudna budskap.",
      },
      {
        prompt: "Vad menar texten med att l\u00e4sandet blev \"en form av motst\u00e5nd\"?",
        options: [
          "Att l\u00e4sning var f\u00f6rbjuden",
          "Att f\u00f6rm\u00e5gan att tolka dolda budskap var en protest i sig",
          "Att folk v\u00e4grade l\u00e4sa statlig propaganda",
          "Att b\u00f6cker var dyra att k\u00f6pa",
        ],
        correct: 1,
        explanation: "N\u00e4r l\u00e4sare l\u00e4rde sig att l\u00e4sa mellan raderna blev det en sorts tyst protest \u2013 en f\u00f6rm\u00e5ga som censuren inte kunde kontrollera.",
      },
      {
        prompt: "Hur lever litteraturens motst\u00e5ndsroll vidare idag enligt texten?",
        options: [
          "Den g\u00f6r inte det \u2013 den \u00e4r \u00f6verspelad",
          "Genom att alla skriver b\u00f6cker",
          "Genom anonyma texter p\u00e5 n\u00e4tet och exilf\u00f6rfattare",
          "Genom statliga publiceringsprogram",
        ],
        correct: 2,
        explanation: "Texten n\u00e4mner anonyma n\u00e4tpublikationer och exilf\u00f6rfattare som moderna former av litteraturens motst\u00e5ndsroll.",
      },
    ],
  },
];

const GYMNASIET_WORDS: WordQuestion[] = [
  {
    sentence: "Politikerns retorik var skickligt anpassad f\u00f6r att appellera till v\u00e4ljarnas k\u00e4nslor.",
    targetWord: "appellera",
    options: ["V\u00e4dja till eller tilltala", "Kritisera", "Ignorera", "F\u00f6rklara"],
    correct: 0,
  },
  {
    sentence: "Texten bar tydliga sp\u00e5r av en allegorisk l\u00e4sning.",
    targetWord: "allegorisk",
    options: [
      "Bokstavlig",
      "Bildlig, d\u00e4r ber\u00e4ttelsen symboliserar n\u00e5got annat",
      "Komisk",
      "Historiskt korrekt",
    ],
    correct: 1,
  },
  {
    sentence: "F\u00f6rfattaren underminerade medvetet l\u00e4sarens f\u00f6rv\u00e4ntningar.",
    targetWord: "underminerade",
    options: ["F\u00f6rst\u00e4rkte", "F\u00f6rklarade", "F\u00f6rsvagade eller urholkade", "Ignorerade"],
    correct: 2,
  },
  {
    sentence: "Den ambivalenta hj\u00e4lten \u00e4r ett \u00e5terkommande motiv i modern litteratur.",
    targetWord: "ambivalenta",
    options: [
      "Modiga och beslutsamma",
      "Kluvna, med motstridiga k\u00e4nslor",
      "Onda och manipulativa",
      "Komiska och l\u00e4ttsinnade",
    ],
    correct: 1,
  },
  {
    sentence: "Hennes stil \u00e4r s\u00e5 distinkt att den \u00e4r om\u00f6jlig att f\u00f6rv\u00e4xla.",
    targetWord: "distinkt",
    options: ["F\u00f6rvirrande", "Tydligt s\u00e4rskiljande och unik", "Vanlig", "Gammalmodig"],
    correct: 1,
  },
];

const GYMNASIET_WRITING: WritingPrompt[] = [
  {
    title: "Ut\u00f6kad ess\u00e4: Sanning och medier",
    description: "Skriv en ut\u00f6kad ess\u00e4 d\u00e4r du resonerar kring begreppet sanning i relation till medier och information. Utg\u00e5 fr\u00e5n minst tv\u00e5 perspektiv (t.ex. filosofiskt, samh\u00e4lleligt, teknologiskt) och f\u00f6r ett sj\u00e4lvst\u00e4ndigt resonemang.",
    checklist: [
      "Formulera en tydlig fr\u00e5gest\u00e4llning eller tes",
      "Anv\u00e4nd en vetenskaplig men personlig ton",
      "Integrera referenser naturligt i texten",
      "V\u00e4xla mellan allm\u00e4nna resonemang och konkreta exempel",
      "Problematisera \u2013 visa att fr\u00e5gan inte har enkla svar",
      "Avsluta med en syntes eller \u00f6ppen reflektion",
      "Var uppm\u00e4rksam p\u00e5 spr\u00e5klig variation och precision",
    ],
  },
  {
    title: "Litteraturanalys",
    description: "V\u00e4lj en sk\u00f6nlitter\u00e4r text du har l\u00e4st och skriv en analys. Fokusera p\u00e5 minst tv\u00e5 av f\u00f6ljande aspekter: tema, ber\u00e4ttarteknik, spr\u00e5k och stil, eller samh\u00e4llskontext. Koppla din analys till relevanta litteraturvetenskapliga begrepp.",
    checklist: [
      "Presentera verket kort i inledningen",
      "V\u00e4lj en tydlig analytisk vinkel",
      "Anv\u00e4nd citat fr\u00e5n texten som st\u00f6d",
      "Koppla till litteraturvetenskapliga begrepp (t.ex. ber\u00e4ttarperspektiv, symbolik)",
      "Visa p\u00e5 samband mellan form och inneh\u00e5ll",
      "Formulera en \u00f6vergripande tolkning",
      "Akademiskt register med tydlig disposition",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Level data map                                                             */
/* -------------------------------------------------------------------------- */

const LEVEL_DATA: Record<AgeGroup, LevelData> = {
  lagstadiet: {
    reading: LAGSTADIET_READING,
    words: LAGSTADIET_WORDS,
    writing: LAGSTADIET_WRITING,
  },
  mellanstadiet: {
    reading: MELLANSTADIET_READING,
    words: MELLANSTADIET_WORDS,
    writing: MELLANSTADIET_WRITING,
  },
  hogstadiet: {
    reading: HOGSTADIET_READING,
    words: HOGSTADIET_WORDS,
    writing: HOGSTADIET_WRITING,
  },
  gymnasiet: {
    reading: GYMNASIET_READING,
    words: GYMNASIET_WORDS,
    writing: GYMNASIET_WRITING,
  },
};

/* -------------------------------------------------------------------------- */
/*  Sub-component: ReadingExercise                                             */
/* -------------------------------------------------------------------------- */

function ReadingExercise({ passages }: { passages: ReadingPassage[] }) {
  const [textIndex, setTextIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const passage = passages[textIndex];
  if (!passage) return null;

  const handleSelect = (qIndex: number, optionIndex: number) => {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
  };

  const handleCheck = () => setShowResults(true);

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  const handleNextText = () => {
    setTextIndex((i) => (i + 1) % passages.length);
    setAnswers({});
    setShowResults(false);
  };

  const correctCount = showResults
    ? passage.questions.filter((q, i) => answers[i] === q.correct).length
    : 0;

  return (
    <div className="space-y-6">
      {/* Text selector */}
      {passages.length > 1 && (
        <div className="flex gap-2">
          {passages.map((p, i) => (
            <button
              key={i}
              onClick={() => {
                setTextIndex(i);
                setAnswers({});
                setShowResults(false);
              }}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                i === textIndex
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              Text {i + 1}: {p.title}
            </button>
          ))}
        </div>
      )}

      {/* Reading passage */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h4 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
          {passage.title}
        </h4>
        <div className="whitespace-pre-line text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {passage.text}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {passage.questions.map((q, qIndex) => (
          <div
            key={qIndex}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <p className="mb-3 text-sm font-medium text-neutral-900 dark:text-white">
              {qIndex + 1}. {q.prompt}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, oIndex) => {
                let style =
                  "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800";

                if (showResults) {
                  if (oIndex === q.correct) {
                    style =
                      "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20";
                  } else if (oIndex === answers[qIndex] && oIndex !== q.correct) {
                    style =
                      "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20";
                  } else {
                    style =
                      "border-neutral-100 bg-neutral-50 opacity-50 dark:border-neutral-800 dark:bg-neutral-900";
                  }
                } else if (answers[qIndex] === oIndex) {
                  style =
                    "border-neutral-400 bg-neutral-50 dark:border-neutral-500 dark:bg-neutral-800";
                }

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleSelect(qIndex, oIndex)}
                    disabled={showResults}
                    className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${style}`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
                      {String.fromCharCode(65 + oIndex)}
                    </span>
                    <span
                      className={`flex-1 ${
                        showResults && oIndex === q.correct
                          ? "font-medium text-green-800 dark:text-green-300"
                          : showResults && oIndex === answers[qIndex] && oIndex !== q.correct
                            ? "text-red-800 line-through dark:text-red-300"
                            : "text-neutral-700 dark:text-neutral-300"
                      }`}
                    >
                      {opt}
                    </span>
                    {showResults && oIndex === q.correct && (
                      <CheckCircle className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                    )}
                    {showResults && oIndex === answers[qIndex] && oIndex !== q.correct && (
                      <XCircle className="h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation after results */}
            {showResults && answers[qIndex] !== undefined && (
              <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                {q.explanation}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        {!showResults && (
          <Button
            onClick={handleCheck}
            disabled={Object.keys(answers).length < passage.questions.length}
          >
            <CheckCircle className="h-4 w-4" />
            R\u00e4tta svaren
          </Button>
        )}
        {showResults && (
          <>
            <div className="flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-white">
              <Trophy className="h-4 w-4 text-amber-500" />
              {correctCount} av {passage.questions.length} r\u00e4tt
            </div>
            <Button onClick={handleReset} variant="outline">
              <RotateCcw className="h-4 w-4" />
              F\u00f6rs\u00f6k igen
            </Button>
            {passages.length > 1 && (
              <Button onClick={handleNextText} variant="outline">
                <ArrowRight className="h-4 w-4" />
                N\u00e4sta text
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sub-component: WordExercise                                                */
/* -------------------------------------------------------------------------- */

function WordExercise({ words: wordData }: { words: WordQuestion[] }) {
  const [questions, setQuestions] = useState<WordQuestion[]>(() =>
    shuffleArray(wordData)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentIndex];
  const finished = answered && currentIndex === questions.length - 1;

  const handleSelect = useCallback(
    (optionIndex: number) => {
      if (answered) return;
      setSelectedOption(optionIndex);
      setAnswered(true);
      if (optionIndex === question.correct) {
        setScore((s) => s + 1);
      }
    },
    [answered, question]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = useCallback(() => {
    setQuestions(shuffleArray(wordData));
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
  }, [wordData]);

  if (!question) return null;

  /* Results screen */
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
          <Trophy className="h-8 w-8 text-amber-600 dark:text-amber-400" />
        </div>
        <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
          {percentage >= 80
            ? "Utm\u00e4rkt!"
            : percentage >= 60
              ? "Bra jobbat!"
              : "Forts\u00e4tt \u00f6va!"}
        </h4>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Du fick{" "}
          <span className="font-bold text-neutral-900 dark:text-white">
            {score} av {questions.length}
          </span>{" "}
          r\u00e4tt ({percentage}%)
        </p>
        <Button onClick={handleRestart} className="mt-6">
          <RotateCcw className="h-4 w-4" />
          K\u00f6r igen
        </Button>
      </div>
    );
  }

  const isCorrect = selectedOption === question.correct;

  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Progress bar */}
      <div className="border-b border-neutral-100 px-6 py-3 dark:border-neutral-800">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500 dark:text-neutral-400">
            Ord {currentIndex + 1} / {questions.length}
          </span>
          <span className="font-medium text-neutral-900 dark:text-white">
            {score} r\u00e4tt
          </span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
          <div
            className="h-1.5 rounded-full bg-neutral-900 transition-all duration-300 dark:bg-white"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="p-6">
        {/* Context sentence */}
        <p className="mb-2 text-sm italic text-neutral-500 dark:text-neutral-400">
          &quot;{question.sentence}&quot;
        </p>
        <p className="mb-5 text-lg text-neutral-700 dark:text-neutral-300">
          Vad betyder{" "}
          <span className="font-bold text-neutral-900 dark:text-white">
            {question.targetWord}
          </span>
          ?
        </p>

        {/* Options */}
        <div className="space-y-2">
          {question.options.map((opt, i) => {
            let style =
              "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800";

            if (answered) {
              if (i === question.correct) {
                style =
                  "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20";
              } else if (i === selectedOption && !isCorrect) {
                style =
                  "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20";
              } else {
                style =
                  "border-neutral-100 bg-neutral-50 opacity-50 dark:border-neutral-800 dark:bg-neutral-900";
              }
            } else if (i === selectedOption) {
              style =
                "border-neutral-400 bg-neutral-50 dark:border-neutral-500 dark:bg-neutral-800";
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors ${style}`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
                  {String.fromCharCode(65 + i)}
                </span>
                <span
                  className={`flex-1 ${
                    answered && i === question.correct
                      ? "font-medium text-green-800 dark:text-green-300"
                      : answered && i === selectedOption && !isCorrect
                        ? "text-red-800 line-through dark:text-red-300"
                        : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {opt}
                </span>
                {answered && i === question.correct && (
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                )}
                {answered && i === selectedOption && !isCorrect && (
                  <XCircle className="h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Next button */}
        {answered && !finished && (
          <Button onClick={handleNext} className="mt-4">
            N\u00e4sta ord
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sub-component: WritingExercise                                             */
/* -------------------------------------------------------------------------- */

function WritingExercise({ prompts }: { prompts: WritingPrompt[] }) {
  const [promptIndex, setPromptIndex] = useState(0);
  const current = prompts[promptIndex];
  if (!current) return null;

  return (
    <div className="space-y-4">
      {/* Prompt selector */}
      {prompts.length > 1 && (
        <div className="flex gap-2">
          {prompts.map((p, i) => (
            <button
              key={i}
              onClick={() => setPromptIndex(i)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                i === promptIndex
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              Uppgift {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Writing prompt card */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h4 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          {current.title}
        </h4>
        <p className="mb-6 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {current.description}
        </p>

        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
          <p className="mb-3 text-sm font-medium text-neutral-900 dark:text-white">
            Checklista / skrivtips:
          </p>
          <ul className="space-y-2">
            {current.checklist.map((tip, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-neutral-300 text-xs dark:border-neutral-600">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-500">
          Skriv din text p\u00e5 papper eller i ett annat program. Den h\u00e4r uppgiften r\u00e4ttas inte
          automatiskt.
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tab config                                                                 */
/* -------------------------------------------------------------------------- */

const TABS: { key: ExerciseTab; label: string; icon: typeof BookOpen }[] = [
  { key: "lasforstaelse", label: "L\u00e4sf\u00f6rst\u00e5else", icon: BookOpen },
  { key: "ordforstaelse", label: "Ordf\u00f6rst\u00e5else", icon: MessageSquare },
  { key: "skrivuppgift", label: "Skrivuppgift", icon: PenLine },
];

/* -------------------------------------------------------------------------- */
/*  Main component                                                             */
/* -------------------------------------------------------------------------- */

interface NationellaProvOvningarProps {
  level: AgeGroup;
}

export function NationellaProvOvningar({ level }: NationellaProvOvningarProps) {
  const [activeTab, setActiveTab] = useState<ExerciseTab>("lasforstaelse");
  const data = LEVEL_DATA[level];

  if (!data) return null;

  return (
    <section className="mb-10">
      <h2 className="mb-2 text-2xl font-semibold text-neutral-900 dark:text-white">
        \u00d6vningsuppgifter
      </h2>
      <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-400">
        Tr\u00e4na p\u00e5 uppgifter som liknar de som kommer p\u00e5 nationella provet.
      </p>

      {/* Tabs */}
      <div className="mb-6 flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {activeTab === "lasforstaelse" && (
        <ReadingExercise passages={data.reading} />
      )}
      {activeTab === "ordforstaelse" && (
        <WordExercise words={data.words} />
      )}
      {activeTab === "skrivuppgift" && (
        <WritingExercise prompts={data.writing} />
      )}
    </section>
  );
}
