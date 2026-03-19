import { notFound } from "next/navigation";
import { BookOpen, Lightbulb, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";

/* ------------------------------------------------------------------ */
/*  Helper components                                                  */
/* ------------------------------------------------------------------ */

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
      <div className="text-sm text-neutral-700 dark:text-neutral-300">
        {children}
      </div>
    </div>
  );
}

function TimelineBadge({ years }: { years: string }) {
  return (
    <div className="flex items-center gap-2">
      <Clock className="h-4 w-4 text-neutral-400" />
      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {years}
      </span>
    </div>
  );
}

function PeriodCard({
  title,
  years,
  badgeLabel,
  context,
  characteristics,
  authors,
  connection,
}: {
  title: string;
  years: string;
  badgeLabel: string;
  context: string;
  characteristics: string[];
  authors: { name: string; description: string }[];
  connection: string;
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1 bg-neutral-300 dark:bg-neutral-700" />
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <TimelineBadge years={years} />
          </div>
          <Badge variant="secondary">{badgeLabel}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
            Historisk kontext
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {context}
          </p>
        </div>

        <div>
          <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
            Litterära drag
          </h4>
          <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            {characteristics.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
            Viktiga författare och verk
          </h4>
          <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            {authors.map((a) => (
              <li key={a.name} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                <span>
                  <strong className="text-neutral-800 dark:text-neutral-200">
                    {a.name}
                  </strong>{" "}
                  &ndash; {a.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Tip>
          <strong>Koppling till idag:</strong> {connection}
        </Tip>
      </CardContent>
    </Card>
  );
}

function SimplePeriodCard({
  title,
  years,
  description,
  authors,
}: {
  title: string;
  years: string;
  description: string;
  authors: { name: string; description: string }[];
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          <TimelineBadge years={years} />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
          {authors.map((a) => (
            <li key={a.name} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
              <span>
                <strong className="text-neutral-800 dark:text-neutral-200">
                  {a.name}
                </strong>{" "}
                &ndash; {a.description}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Period data (full version for hogstadiet / gymnasiet)              */
/* ------------------------------------------------------------------ */

const PERIODS = [
  {
    title: "Medeltiden",
    years: "ca 1200\u20131500",
    badgeLabel: "Epok 1",
    context:
      "Sverige var ett kristet bondeland med starkt kyrkligt inflytande. De flesta texter skrevs på latin av munkar, men mot slutet av perioden började man också skriva på svenska.",
    characteristics: [
      "Religiösa texter och predikningar dominerade",
      "Folkliga ballader och visor traderades muntligt",
      "Landskapslagar skrevs ner på fornsvenska",
      "Rimkrönikor berättar kungarnas historia",
    ],
    authors: [
      {
        name: "Erikskrönikan",
        description:
          "Rimkrönika från 1320-talet som skildrar svensk historia och maktkamp.",
      },
      {
        name: "Landskapslagarna",
        description:
          "De äldsta svenska lagtexterna, skrivna på folkspråken i olika landskap.",
      },
      {
        name: "Heliga Birgitta",
        description:
          "Mystiker och författare vars Uppenbarelser spreds över hela Europa.",
      },
    ],
    connection:
      "Medeltidens texter lade grunden för det svenska skriftspråket. Vår lagstiftningstradition har rötter i landskapslagarna, och de folkliga balladerna lever kvar i sånger vi sjunger än idag.",
  },
  {
    title: "Stormaktstiden och 1700-talet",
    years: "ca 1600\u20131800",
    badgeLabel: "Epok 2",
    context:
      "Sverige växte till en stormakt under 1600-talet med starkt fokus på religion och plikt. Under 1700-talet kom upplysningens idéer och intresset för förnuft, satir och samhällskritik.",
    characteristics: [
      "Religiösa psalmer och andlig diktning under stormaktstiden",
      "Upplysningstiden bar med sig satirisk och pedagogisk litteratur",
      "Viskonsten blomstrade, särskilt med Bellman",
      "Tidskrifter och press växte fram som nya medier",
    ],
    authors: [
      {
        name: "Carl Michael Bellman",
        description:
          "1700-talets stora vispoet som skildrade Stockholmslivet med humor, musik och djup känslighet.",
      },
      {
        name: "Olof von Dalin",
        description:
          "Publicist och satiriker som med tidskriften Then Swanska Argus grundade modern svensk press.",
      },
      {
        name: "Anna Maria Lenngren",
        description:
          "Poet och satiriker som med skarp humor kritiserade samhällets konventioner och könsroller.",
      },
    ],
    connection:
      "Upplysningens ideal om tryckfrihet och kritiskt tänkande är grundstenar i vår demokrati. Bellmans visor sjungs fortfarande vid midsommar och högtider.",
  },
  {
    title: "Romantiken",
    years: "ca 1810\u20131850",
    badgeLabel: "Epok 3",
    context:
      "Som reaktion mot upplysningens förnuftstro svängde pendeln mot känslor, fantasi och nationalism. Det var en tid av nationalromantik där man sökte det typiskt svenska i folktraditioner och natur.",
    characteristics: [
      "Känslor, fantasi och intuition värderades framför förnuft",
      "Naturen som inspirationskälla och symbol",
      "Intresse för folklore, myter och historia",
      "Gotiska inslag med mystik och skräck",
    ],
    authors: [
      {
        name: "Esaias Tegnér",
        description:
          "Biskop och skald vars Frithiofs saga blev en av Sveriges mest lästa verk internationellt.",
      },
      {
        name: "Erik Gustaf Geijer",
        description:
          "Historiker, poet och kompositör som med dikter som Vikingen formade bilden av det svenska.",
      },
      {
        name: "C.J.L. Almqvist",
        description:
          "Mångsidig författare vars Det går an utmanade tidens syn på äktenskap och konventioner.",
      },
    ],
    connection:
      "Romantikens nationalsånger och dikter präglar fortfarande vår kultur. Gotiken lever vidare som genre i böcker och film, och tanken att naturen är central för den svenska identiteten har rötter här.",
  },
  {
    title: "Realismen",
    years: "ca 1850\u20131890",
    badgeLabel: "Epok 4",
    context:
      "Industrialiseringen förändrade Sverige från ett jordbrukssamhälle. Klasskillnader, fattigdom och kvinnors ställning blev brännande frågor. Litteraturen ville skildra verkligheten som den var.",
    characteristics: [
      "Verklighetstrogen skildring av samhället",
      "Social kritik och debatt om klass, kön och makt",
      "Det moderna genombrottet: litteraturen skulle sätta problem under debatt",
      "Dramatik och romaner som utmanade normer",
    ],
    authors: [
      {
        name: "August Strindberg",
        description:
          "Normbrytrande dramatiker och romanförfattare vars Röda rummet och Fröken Julie blev milstolpar i svensk litteratur.",
      },
      {
        name: "Victoria Benedictsson",
        description:
          "Realistisk författare som under pseudonymen Ernst Ahlgren kritiserade kvinnors villkor i romanen Pengar.",
      },
      {
        name: "Georg Brandes",
        description:
          "Dansk kritiker vars föreläsningar om det moderna genombrottet inspirerade hela Nordens litteratur.",
      },
    ],
    connection:
      "Realismens ideal att litteraturen ska spegla och ifrågasätta samhället lever starkt än idag. Strindberg spelas fortfarande på teatrar världen över, och debattromanen är en levande genre.",
  },
  {
    title: "Sekelskiftet och modernismen",
    years: "ca 1890\u20131940",
    badgeLabel: "Epok 5",
    context:
      "Kring sekelskiftet präglade oro och framtidstro samhället parallellt. Första världskriget chockade Europa. Nya konstformer experimenterade med form och språk, och arbetarklassens röster hördes allt mer.",
    characteristics: [
      "Experimentella former: fri vers, medvetandeström, fragmentering",
      "Inre liv, känslor och symbolism i fokus",
      "Proletärlitteratur: arbetarklassens egna berättelser",
      "Kvinnliga författare bröt ny mark",
    ],
    authors: [
      {
        name: "Selma Lagerlöf",
        description:
          "Första kvinnan att få Nobelpriset i litteratur (1909), känd för Nils Holgerssons underbara resa och Gösta Berlings saga.",
      },
      {
        name: "Hjalmar Söderberg",
        description:
          "Stockholmsskildrare vars Doktor Glas är en klassiker om moraliska dilemman.",
      },
      {
        name: "Karin Boye",
        description:
          "Poet och romanförfattare vars dystopi Kallocain och känslostarka dikter läses än idag.",
      },
      {
        name: "Harry Martinson & Vilhelm Moberg",
        description:
          "Martinson fick Nobelpriset och Moberg skrev Utvandrarsvitten som definierade bilden av den svenska emigrationen.",
      },
    ],
    connection:
      "Modernismens experimenterande har format all samtida litteratur. Proletärlitteraturens tradition lever i dag hos författare som skriver om utanförskap. Lagerlöf och Moberg är fortfarande bland de mest lästa svenska författarna.",
  },
  {
    title: "Efterkrigstiden",
    years: "ca 1940\u20131970",
    badgeLabel: "Epok 6",
    context:
      "Sverige förblev neutralt under andra världskriget och byggde upp folkhemsmodellen. Välfärden växte, men existentiella frågor och internationellt engagemang präglade kulturen.",
    characteristics: [
      "Existentialism: frågor om livets mening och människans villkor",
      "Politiskt engagemang och samhällskritik",
      "Barn- och ungdomslitteraturen fick en guldålder",
      "Poesi med både experimentella och folkliga drag",
    ],
    authors: [
      {
        name: "Astrid Lindgren",
        description:
          "Världens mest översatta svenska författare, skapare av Pippi Långstrump, Emil och Bröderna Lejonhjärta.",
      },
      {
        name: "Tomas Tranströmer",
        description:
          "Nobelpristagare (2011) vars bildrika, koncentrerade poesi översatts till över 60 språk.",
      },
      {
        name: "Lars Norén",
        description:
          "Dramatiker som med brutal ärlighet skildrade familjerelationer och psykisk utsatthet.",
      },
    ],
    connection:
      "Astrid Lindgrens inflytande på barnkulturen är oöverträffat. Tranströmers poesi läses hela världen. Periodens frågor om rättvisa och människors lika värde präglar fortfarande svensk politik och kultur.",
  },
  {
    title: "Nutida litteratur",
    years: "ca 1970\u2013nu",
    badgeLabel: "Epok 7",
    context:
      "Globalisering, invandring och digitalisering har förändrat Sverige och den svenska litteraturen. Nya röster och perspektiv har vidgat vilka berättelser som får plats.",
    characteristics: [
      "Mångfald i teman, perspektiv och genrer",
      "Genreblandning: fiktion möter självbiografi, reportage möter poesi",
      "Autofiktion: författare som använder sitt eget liv som material",
      "Stark barn- och ungdomslitteratur med samhällsrelevans",
    ],
    authors: [
      {
        name: "Henning Mankell",
        description:
          "Deckarförfattare vars Wallander-serie satte svensk kriminallitteratur på världskartan.",
      },
      {
        name: "Jonas Hassen Khemiri",
        description:
          "Flerspråkig och formnytänkande författare som utforskar identitet och utanförskap.",
      },
      {
        name: "Sara Stridsberg",
        description:
          "Prisbelönt författare vars poetiska prosa blandar verklighet och fantasi.",
      },
      {
        name: "Fredrik Backman",
        description:
          "Internationellt bästsäljande författare känd för varma berättelser som En man som heter Ove.",
      },
    ],
    connection:
      "Dagens litteratur speglar det mångkulturella Sverige och når läsare världen över. Deckare, autofiktion och ungdomsromaner är genrer där svenska författare ligger i framkant internationellt.",
  },
];

/* ------------------------------------------------------------------ */
/*  Mellanstadiet: simplified periods                                  */
/* ------------------------------------------------------------------ */

const MELLANSTADIET_PERIODS = [
  {
    title: "Den äldsta litteraturen",
    years: "ca 1200\u20131800",
    description:
      "För länge sedan skrevs de första texterna på svenska. Det var mest religiösa texter, lagar och visor. På 1700-talet skrev Carl Michael Bellman sina berömda visor om livet i Stockholm.",
    authors: [
      {
        name: "Heliga Birgitta",
        description:
          "Levde på medeltiden och skrev religiösa texter som blev kända i hela Europa.",
      },
      {
        name: "Carl Michael Bellman",
        description:
          "Skrev roliga och vackra visor om livet i Stockholm på 1700-talet.",
      },
    ],
  },
  {
    title: "Romantiken",
    years: "ca 1810\u20131850",
    description:
      "Under romantiken skrev författarna om känslor, natur och gamla myter. Man var stolt över Sverige och intresserad av vikingatiden och folksagor.",
    authors: [
      {
        name: "Esaias Tegnér",
        description:
          "Skrev Frithiofs saga, en spännande berättelse inspirerad av vikingatiden.",
      },
    ],
  },
  {
    title: "Realismen och det moderna genombrottet",
    years: "ca 1850\u20131900",
    description:
      "Nu ville författarna skriva om hur livet verkligen såg ut. De skrev om orättvisor i samhället och ville förändring.",
    authors: [
      {
        name: "August Strindberg",
        description:
          "En av Sveriges mest kända författare, som skrev både romaner och pjäser.",
      },
      {
        name: "Selma Lagerlöf",
        description:
          "Första kvinnan att få Nobelpriset i litteratur. Skrev Nils Holgerssons underbara resa.",
      },
    ],
  },
  {
    title: "1900-talet och vår tid",
    years: "ca 1900\u2013nu",
    description:
      "Under 1900-talet förändrades litteraturen mycket. Nya författare skrev om arbetarnas liv, om barns rättigheter, och om hela världen. Idag skrivs böcker i alla genrer.",
    authors: [
      {
        name: "Astrid Lindgren",
        description:
          "Skapade Pippi Långstrump, Emil, Ronja och många fler älskade figurer.",
      },
      {
        name: "Tomas Tranströmer",
        description:
          "Nobelpristagare som skrev vackra dikter som läses över hela världen.",
      },
      {
        name: "Henning Mankell",
        description:
          "Skrev spännande deckare som blev berömda internationellt.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Lagstadiet: famous children's book authors                         */
/* ------------------------------------------------------------------ */

const LAGSTADIET_AUTHORS = [
  {
    name: "Astrid Lindgren",
    description:
      "Har du läst om Pippi Långstrump, Emil i Lönneberga eller Bröderna Lejonhjärta? Astrid Lindgren är Sveriges mest älskade barnboksförfattare!",
  },
  {
    name: "Elsa Beskow",
    description:
      "Elsa Beskow skrev och ritade vackra sagor om naturen, som Puttes äventyr i blåbärsskogen och Tomtebobarnen.",
  },
  {
    name: "Sven Nordqvist",
    description:
      "Han är författaren bakom Pettson och Findus - den gamle mannen och hans roliga katt.",
  },
  {
    name: "Gunilla Bergström",
    description:
      "Skapade Alfons Åberg, en pojke som många barn känner igen sig i.",
  },
  {
    name: "Barbro Lindgren",
    description:
      "Skrev böcker som Loranga, Masansen och Dartansen och den älskade Max-serien för de allra minsta.",
  },
];

/* ------------------------------------------------------------------ */
/*  Gymnasiet: extra analysis sections                                 */
/* ------------------------------------------------------------------ */

const LITERARY_THEORY_INTRO = [
  {
    title: "Narratologi",
    description:
      "Studiet av berättandets strukturer: berättare, fokalisering, tid och rum. Vem berättar? Varför just så?",
  },
  {
    title: "Receptionsteori",
    description:
      "Läsaren är medskapare av textens mening. En text får olika betydelser beroende på vem som läser och när.",
  },
  {
    title: "Genusteori och litteratur",
    description:
      "Hur konstrueras kön i litteraturen? Vilka röster får höras, och vilka tystas?",
  },
  {
    title: "Postkolonial läsning",
    description:
      "Att läsa texter med blick för maktstrukturer, kolonialism och representation av 'den andre'.",
  },
];

const INTERNATIONAL_CONTEXT = [
  {
    period: "Romantiken",
    description:
      "Den svenska romantiken inspirerades av tyska (Goethe, Schiller) och engelska (Byron, Shelley) författare. Jämför Tegnérs nationalism med Byrons kosmopolitism.",
  },
  {
    period: "Realismen",
    description:
      "Det moderna genombrottet var en nordisk rörelse. Ibsens dramatik (Norge) och Brandes kritik (Danmark) var lika viktiga som Strindbergs verk.",
  },
  {
    period: "Modernismen",
    description:
      "Internationella influenser från Kafka, Joyce och Woolf präglade den svenska modernismen. Jämför Söderbergs stockholmsskildringar med Joyces Dublin.",
  },
  {
    period: "Nutida litteratur",
    description:
      "Globaliseringen har suddat ut nationella gränser. Khemiris språk ekar Salman Rushdie, och nordisk noir är en internationell genre.",
  },
];

/* ------------------------------------------------------------------ */
/*  Level descriptions                                                 */
/* ------------------------------------------------------------------ */

const LEVEL_DESCRIPTIONS: Record<AgeGroup, string> = {
  lagstadiet:
    "Kända författare som skrivit böcker för barn. Känner du igen någon?",
  mellanstadiet:
    "En första introduktion till svensk litteraturhistoria. Från de äldsta texterna till böcker som skrivs idag.",
  hogstadiet:
    "Svensk litteratur från medeltiden till idag. En översikt över epoker, författare och strömningar.",
  gymnasiet:
    "Fördjupad litteraturhistoria med internationell kontext och introduktion till litteraturvetenskapliga perspektiv.",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Litteraturhistoria - ${group.label}`,
    description: `Svensk litteraturhistoria anpassad för ${group.label.toLowerCase()}.`,
  };
}

export default async function LitteraturhistoriaPage({ params }: Props) {
  const { arskurs } = await params;

  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) {
    notFound();
  }

  const level = arskurs as AgeGroup;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <BookOpen className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Litteraturhistoria
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {LEVEL_DESCRIPTIONS[level]}
        </p>
      </div>

      {/* ---- Lagstadiet ---- */}
      {level === "lagstadiet" && (
        <>
          <Section title="Kända barnboksförfattare">
            <p className="mb-6 text-neutral-600 dark:text-neutral-400">
              Här är några författare som skrivit böcker som barn i Sverige älskar.
              Kanske har du läst någon av deras böcker?
            </p>
            <div className="space-y-4">
              {LAGSTADIET_AUTHORS.map((author) => (
                <Card key={author.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{author.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {author.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Tips">
            <Tip>
              <strong>Läs en bok!</strong> Fråga din lärare eller på biblioteket
              om du vill låna en bok av någon av dessa författare.
            </Tip>
            <Tip>
              <strong>Visste du?</strong> Astrid Lindgrens böcker har översatts
              till över 100 språk. Barn i hela världen läser om Pippi!
            </Tip>
          </Section>
        </>
      )}

      {/* ---- Mellanstadiet ---- */}
      {level === "mellanstadiet" && (
        <>
          <Section title="Epoker i svensk litteratur">
            <p className="mb-6 text-neutral-600 dark:text-neutral-400">
              Svensk litteratur har förändrats mycket genom historien. Här får du
              en översikt över de viktigaste perioderna och författarna.
            </p>
            <div className="space-y-6">
              {MELLANSTADIET_PERIODS.map((period) => (
                <SimplePeriodCard key={period.title} {...period} />
              ))}
            </div>
          </Section>

          <Section title="Tips för studier">
            <Tip>
              <strong>Läs någon bok!</strong> Börja med en bok av Astrid
              Lindgren eller Selma Lagerlöf. Det är det bästa sättet att förstå
              litteraturhistoria.
            </Tip>
            <Tip>
              <strong>Gör en tidslinje!</strong> Rita en tidslinje på ett stort
              papper och placera ut författarna och deras viktigaste verk. Det
              hjälper dig att minnas.
            </Tip>
          </Section>
        </>
      )}

      {/* ---- Hogstadiet ---- */}
      {level === "hogstadiet" && (
        <>
          {/* Timeline overview */}
          <Section title="Tidslinje">
            <div className="mb-8 flex flex-wrap gap-2">
              {PERIODS.map((p) => (
                <a
                  key={p.title}
                  href={`#${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm transition-all hover:border-neutral-400 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
                >
                  <Badge variant="secondary">{p.badgeLabel}</Badge>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {p.title}
                  </span>
                  <span className="text-neutral-400 dark:text-neutral-500">
                    {p.years}
                  </span>
                </a>
              ))}
            </div>
          </Section>

          {/* Period cards */}
          <div className="space-y-8">
            {PERIODS.map((period) => (
              <div
                key={period.title}
                id={period.title.toLowerCase().replace(/\s+/g, "-")}
              >
                <PeriodCard {...period} />
              </div>
            ))}
          </div>

          {/* Study tips */}
          <div className="mt-12">
            <Section title="Tips för studier">
              <Tip>
                <strong>Så använder du den här sidan:</strong> Börja med
                tidslinjen högst upp för att få en översikt. Klicka på en epok
                för att hoppa dit. När du läser om en period, fokusera först på
                den historiska kontexten och de litterära dragen innan du
                fördjupar dig i enskilda författare.
              </Tip>
              <Tip>
                <strong>Fördjupning:</strong> För att förstå en epok på djupet,
                läs minst ett verk från perioden. Många av de nämnda verken
                finns tillgängliga gratis via biblioteken eller som e-böcker.
              </Tip>
            </Section>
          </div>
        </>
      )}

      {/* ---- Gymnasiet ---- */}
      {level === "gymnasiet" && (
        <>
          {/* Timeline overview */}
          <Section title="Tidslinje">
            <div className="mb-8 flex flex-wrap gap-2">
              {PERIODS.map((p) => (
                <a
                  key={p.title}
                  href={`#${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm transition-all hover:border-neutral-400 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
                >
                  <Badge variant="secondary">{p.badgeLabel}</Badge>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {p.title}
                  </span>
                  <span className="text-neutral-400 dark:text-neutral-500">
                    {p.years}
                  </span>
                </a>
              ))}
            </div>
          </Section>

          {/* Period cards */}
          <div className="space-y-8">
            {PERIODS.map((period) => (
              <div
                key={period.title}
                id={period.title.toLowerCase().replace(/\s+/g, "-")}
              >
                <PeriodCard {...period} />
              </div>
            ))}
          </div>

          {/* International context */}
          <div className="mt-12">
            <Section title="Internationell kontext">
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Svensk litteratur har aldrig existerat i isolation. Här är
                kopplingar till den internationella litteraturen för varje
                period.
              </p>
              <div className="space-y-4">
                {INTERNATIONAL_CONTEXT.map((item) => (
                  <Card key={item.period}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.period}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          </div>

          {/* Literary theory */}
          <div className="mt-12">
            <Section title="Introduktion till litteraturteori">
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Litteraturvetenskap handlar inte bara om <em>vad</em> en text
                säger utan <em>hur</em> den säger det, och <em>varför</em> vi
                tolkar den som vi gör. Här är några centrala perspektiv.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {LITERARY_THEORY_INTRO.map((item) => (
                  <Card key={item.title}>
                    <CardHeader>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          </div>

          {/* Study tips */}
          <div className="mt-12">
            <Section title="Tips för studier">
              <Tip>
                <strong>Så använder du den här sidan:</strong> Börja med
                tidslinjen högst upp för att få en översikt. Klicka på en epok
                för att hoppa dit. Använd sedan avsnitten om internationell
                kontext och litteraturteori för att fördjupa din analys.
              </Tip>
              <Tip>
                <strong>Fördjupning:</strong> För att förstå en epok på djupet,
                läs minst ett verk från perioden. Jämför det med ett
                internationellt verk från samma tid. Många av de nämnda verken
                finns tillgängliga gratis via biblioteken eller som e-böcker.
              </Tip>
              <Tip>
                <strong>Litteraturvetenskaplig analys:</strong> Välj en roman
                och analysera den från två olika teoretiska perspektiv (t.ex.
                narratologiskt och genusteoretiskt). Hur förändras din läsning?
              </Tip>
            </Section>
          </div>
        </>
      )}
    </div>
  );
}
