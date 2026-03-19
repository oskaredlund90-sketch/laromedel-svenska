import { BookOpen, Lightbulb, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Litteraturhistoria",
  description:
    "Svensk litteraturhistoria fran medeltiden till idag. Epoker, forfattare och viktiga verk for hogstadiet och gymnasiet.",
};

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
        {/* Context */}
        <div>
          <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
            Historisk kontext
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {context}
          </p>
        </div>

        {/* Characteristics */}
        <div>
          <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
            Litterara drag
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

        {/* Authors */}
        <div>
          <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
            Viktiga forfattare och verk
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

        {/* Connection to today */}
        <Tip>
          <strong>Koppling till idag:</strong> {connection}
        </Tip>
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Period data                                                        */
/* ------------------------------------------------------------------ */

const PERIODS = [
  {
    title: "Medeltiden",
    years: "ca 1200\u20131500",
    badgeLabel: "Epok 1",
    context:
      "Sverige var ett kristet bondeland med starkt kyrkligt inflytande. De flesta texter skrevs pa latin av munkar, men mot slutet av perioden borjade man ocksa skriva pa svenska.",
    characteristics: [
      "Religiosa texter och predikningar dominerade",
      "Folkliga ballader och visor traderades muntligt",
      "Landskapslagar skrevs ner pa fornsvenska",
      "Rimkronikor berattar kungarnas historia",
    ],
    authors: [
      {
        name: "Erikskronikan",
        description:
          "Rimkronika fran 1320-talet som skildrar svensk historia och maktkamp.",
      },
      {
        name: "Landskapslagarna",
        description:
          "De aldsta svenska lagtexterna, skrivna pa folkspraken i olika landskap.",
      },
      {
        name: "Heliga Birgitta",
        description:
          "Mystiker och forfattare vars Uppenbarelser spreds over hela Europa.",
      },
    ],
    connection:
      "Medeltidens texter lade grunden for det svenska skriftspraket. Var lagstiftningstradition har rotter i landskapslagarna, och de folkliga balladerna lever kvar i sanger vi sjunger an idag.",
  },
  {
    title: "Stormaktstiden och 1700-talet",
    years: "ca 1600\u20131800",
    badgeLabel: "Epok 2",
    context:
      "Sverige vaxte till en stormakt under 1600-talet med starkt fokus pa religion och plikt. Under 1700-talet kom upplysningens ideer och intresset for foernuft, satir och samhallskritik.",
    characteristics: [
      "Religiosa psalmer och andlig diktning under stormaktstiden",
      "Upplysningstiden bar med sig satirisk och pedagogisk litteratur",
      "Viskonsten blomstrade, sarskilt med Bellman",
      "Tidskrifter och press vaxte fram som nya medier",
    ],
    authors: [
      {
        name: "Carl Michael Bellman",
        description:
          "1700-talets stora vispoet som skildrade Stockholmslivet med humor, musik och djup kanslighet.",
      },
      {
        name: "Olof von Dalin",
        description:
          "Publicist och satiriker som med tidskriften Then Swanska Argus grundade modern svensk press.",
      },
      {
        name: "Anna Maria Lenngren",
        description:
          "Poet och satiriker som med skarp humor kritiserade samhallets konventioner och kansroller.",
      },
    ],
    connection:
      "Upplysningens ideal om tryckfrihet och kritiskt tankande ar grundstenar i var demokrati. Bellmans visor sjungs fortfarande vid midsommar och hogtider.",
  },
  {
    title: "Romantiken",
    years: "ca 1810\u20131850",
    badgeLabel: "Epok 3",
    context:
      "Som reaktion mot upplysningens fornuftstro svangde pendeln mot kanslor, fantasi och nationalism. Det var en tid av nationalromantik dar man sokte det typiskt svenska i folktraditioner och natur.",
    characteristics: [
      "Kanslor, fantasi och intuition vades framfor fornuft",
      "Naturen som inspirationskallla och symbol",
      "Intresse for folklore, myter och historia",
      "Gotiska inslag med mystik och skrack",
    ],
    authors: [
      {
        name: "Esaias Tegner",
        description:
          "Biskop och skald vars Frithiofs saga blev en av Sveriges mest lasta verk internationellt.",
      },
      {
        name: "Erik Gustaf Geijer",
        description:
          "Historiker, poet och kompositior som med dikter som Vikingen formade bilden av det svenska.",
      },
      {
        name: "C.J.L. Almqvist",
        description:
          "Mangsidig forfattare vars Det gar an utmanade tidens syn pa aktenskap och konventioner.",
      },
    ],
    connection:
      "Romantikens nationalsanger och dikter praglar fortfarande var kultur. Gotiken lever vidare som genre i bocker och film, och tanken att naturen ar central for den svenska identiteten har rotter har.",
  },
  {
    title: "Realismen",
    years: "ca 1850\u20131890",
    badgeLabel: "Epok 4",
    context:
      "Industrialiseringen forandrade Sverige fran ett jordbrukssamhalle. Klasskillnader, fattigdom och kvinnors stallning blev brannande fragor. Litteraturen ville skildra verkligheten som den var.",
    characteristics: [
      "Verklighetstrogen skildring av samhallet",
      "Social kritik och debatt om klass, kon och makt",
      "Det moderna genombrottet: litteraturen skulle satta problem under debatt",
      "Dramatik och romaner som utmanade normer",
    ],
    authors: [
      {
        name: "August Strindberg",
        description:
          "Normbrytrande dramatiker och romanforfattare vars Roda rummet och Froken Julie blev milstopar i svensk litteratur.",
      },
      {
        name: "Victoria Benedictsson",
        description:
          "Realistisk forfattare som under pseudonymen Ernst Ahlgren kritiserade kvinnors villkor i romanen Pengar.",
      },
      {
        name: "Georg Brandes",
        description:
          "Dansk kritiker vars forelasningar om det moderna genombrottet inspirerade hela Nordens litteratur.",
      },
    ],
    connection:
      "Realismens ideal att litteraturen ska spegla och ifragasatta samhallet lever starkt an idag. Strindberg spelas fortfarande pa teatrar varlden over, och debattromanen ar en levande genre.",
  },
  {
    title: "Sekelskiftet och modernismen",
    years: "ca 1890\u20131940",
    badgeLabel: "Epok 5",
    context:
      "Kring sekelskiftet praglade oro och framtidstro samhallet parallellt. Forsta varldskriget chockade Europa. Nya konstformer experimenterade med form och spraak, och arbetarklassens roster hordes allt mer.",
    characteristics: [
      "Experimentella former: fri vers, medvetandestrom, fragmentering",
      "Inre liv, kanslor och symbolism i fokus",
      "Proletarlitteratur: arbetarklassens egna berattelser",
      "Kvinnliga forfattare brot ny mark",
    ],
    authors: [
      {
        name: "Selma Lagerlof",
        description:
          "Forsta kvinnan att fa Nobelpriset i litteratur (1909), kand for Nils Holgerssons underbara resa och Gosta Berlings saga.",
      },
      {
        name: "Hjalmar Soderberg",
        description:
          "Stockholmsskildrare vars Doktor Glas ar en klassiker om moraliska dilemman.",
      },
      {
        name: "Karin Boye",
        description:
          "Poet och romanforfattare vars dystopi Kallocain och kanslostarka dikter laser an idag.",
      },
      {
        name: "Harry Martinson & Vilhelm Moberg",
        description:
          "Martinson fick Nobelpriset och Moberg skrev Utvandrarsviten som definerade bilden av den svenska emigrationen.",
      },
    ],
    connection:
      "Modernismens experimenterande har format all samtida litteratur. Proletarlitteraturens tradition lever i dag hos forfattare som skriver om utanforskap. Lagerlof och Moberg ar fortfarande bland de mest lasta svenska forfattarna.",
  },
  {
    title: "Efterkrigstiden",
    years: "ca 1940\u20131970",
    badgeLabel: "Epok 6",
    context:
      "Sverige forblev neutralt under andra varldskriget och byggde upp folkhemsmodellen. Valfarden vaxte, men existentiella fragor och internationellt engagemang praglade kulturen.",
    characteristics: [
      "Existentialism: fragor om livets mening och manniskans villkor",
      "Politiskt engagemang och samhallskritik",
      "Barn- och ungdomslitteraturen fick en guldalder",
      "Poesi med bade experimentella och folkliga drag",
    ],
    authors: [
      {
        name: "Astrid Lindgren",
        description:
          "Varldens mest oversatta svenska forfattare, skapare av Pippi Langstrump, Emil och Brorderna Lejonhjarta.",
      },
      {
        name: "Tomas Transtromer",
        description:
          "Nobelpristagare (2011) vars bildrika, koncentrerade poesi oversatts till over 60 sprak.",
      },
      {
        name: "Lars Noren",
        description:
          "Dramatiker som med brutal arlighet skildrade familjerelationer och psykisk utsatthet.",
      },
    ],
    connection:
      "Astrid Lindgrens inflytande pa barnkulturen ar oovertraffat. Transtromers poesi laser hela varlden. Periodens fragor om rattvisaa och manniskors lika varde praglar fortfarande svensk politik och kultur.",
  },
  {
    title: "Nutida litteratur",
    years: "ca 1970\u2013nu",
    badgeLabel: "Epok 7",
    context:
      "Globalisering, invandring och digitalisering har forandrat Sverige och den svenska litteraturen. Nya roster och perspektiv har vidgat vilka berattelser som far plats.",
    characteristics: [
      "Mangfald i teman, perspektiv och genrer",
      "Genreblandning: fiktion moter sjalvbiografi, reportage moter poesi",
      "Autofiktion: forfattare som anvander sitt eget liv som material",
      "Stark barn- och ungdomslitteratur med samhallsrelevans",
    ],
    authors: [
      {
        name: "Henning Mankell",
        description:
          "Deckarforfattare vars Wallander-serie satte svensk kriminallitteratur pa varldskartan.",
      },
      {
        name: "Jonas Hassen Khemiri",
        description:
          "Flersprakig och formnytankande forfattare som utforskar identitet och utanforskap.",
      },
      {
        name: "Sara Stridsberg",
        description:
          "Prisbelont forfattare vars poetiska prosa blandar verklighet och fantasi.",
      },
      {
        name: "Fredrik Backman",
        description:
          "Internationellt bestsaljande forfattare kand for varma berattelser som En man som heter Ove.",
      },
    ],
    connection:
      "Dagens litteratur speglar det mangkulturella Sverige och nar lasare varlden over. Deckare, autofiktion och ungdomsromaner ar genrer dar svenska forfattare ligger i framkant internationellt.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function LitteraturhistoriaPage() {
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
          Svensk litteratur fran medeltiden till idag. En oversikt over epoker,
          forfattare och stromningar for hogstadiet och gymnasiet.
        </p>
      </div>

      {/* Visual timeline overview */}
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

      {/* Summary tip */}
      <div className="mt-12">
        <Section title="Tips for studier">
          <Tip>
            <strong>Sa anvander du den har sidan:</strong> Borja med tidslinjen
            hogst upp for att fa en oversikt. Klicka pa en epok for att hoppa
            dit. Nar du laser om en period, fokusera forst pa den historiska
            kontexten och de litterara dragen innan du fordjupar dig i enskilda
            forfattare.
          </Tip>
          <Tip>
            <strong>Fordjupning:</strong> For att forsta en epok pa djupet, las
            minst ett verk fran perioden. Manga av de namnda verken finns
            tillgangliga gratis via biblioteken eller som e-bocker.
          </Tip>
        </Section>
      </div>
    </div>
  );
}
