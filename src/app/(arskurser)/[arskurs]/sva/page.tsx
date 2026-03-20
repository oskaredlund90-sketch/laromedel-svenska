import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import {
  BookOpen,
  Languages,
  GraduationCap,
  MessageCircle,
  Mic,
  FileText,
  ArrowRight,
  Lightbulb,
  Globe,
  PenTool,
  Dumbbell,
} from "lucide-react";
import SvaOvningar from "@/components/sva-ovningar";

/* ------------------------------------------------------------------ */
/*  Age-group adapted content                                          */
/* ------------------------------------------------------------------ */

const VALID_AGE_GROUPS = AGE_GROUPS.map((g) => g.slug);

interface SvaSection {
  id: string;
  title: string;
  icon: React.ElementType;
  content: Record<AgeGroup, string[]>;
}

const SVA_INTRO: Record<AgeGroup, { heading: string; description: string }> = {
  lagstadiet: {
    heading: "Svenska som andraspråk (SVA) - Lågstadiet",
    description:
      "Välkommen till SVA för årskurs 1\u20133! Här får du hjälp att lära dig svenska på ett roligt och tryggt sätt. Vi använder bilder, lekar och enkla texter för att bygga upp ditt ordförråd och din förståelse för det svenska språket.",
  },
  mellanstadiet: {
    heading: "Svenska som andraspråk (SVA) - Mellanstadiet",
    description:
      "Välkommen till SVA för årskurs 4\u20136! Här utvecklar du din svenska med mer avancerade texter och övningar. Du lär dig att använda språket både i vardagen och i skolan, och får verktyg för att bli en säkrare läsare och skribent.",
  },
  hogstadiet: {
    heading: "Svenska som andraspråk (SVA) - Högstadiet",
    description:
      "Välkommen till SVA för årskurs 7\u20139! Här fördjupar du dina språkkunskaper inför nationella prov och vidare studier. Du tränar på akademiskt språk, argumenterande texter och kritisk läsning \u2013 allt anpassat för dig som lär dig svenska som andraspråk.",
  },
  gymnasiet: {
    heading: "Svenska som andraspråk (SVA) - Gymnasiet",
    description:
      "Välkommen till SVA för gymnasiet! Här förbereder du dig för högre studier och yrkesliv. Kurserna SVA 1\u20133 ger dig verktyg för avancerad textanalys, retorik och vetenskapligt skrivande \u2013 med särskilt stöd för flerspråkiga elever.",
  },
};

/* ------------------------------------------------------------------ */
/*  Ordförrådsbyggande                                                 */
/* ------------------------------------------------------------------ */

const VOCABULARY_CONTENT: Record<AgeGroup, string[]> = {
  lagstadiet: [
    "Lära dig nya ord med bilder och färger \u2013 vi kopplar varje nytt ord till en bild så att det blir lättare att komma ihåg.",
    "Temabaserat ordförråd: kroppen, djur, mat, kläder, skolan och familjen.",
    "Ordlekar som memory, bingo och rim-övningar hjälper dig att befästa nya ord.",
    "Enkel ordbok: slå upp ord du undrar över och se hur de används i meningar.",
    "Övningar: Rita och skriv \u2013 kombinera teckning med att skriva ord.",
    "Tips: Sjung sånger på svenska! Musik hjälper dig att minnas ord och uttal.",
  ],
  mellanstadiet: [
    "Bygg ut ditt ordförråd med mötesord (synonymer) och motsatsord (antonymer).",
    "Lär dig ämnesspecifika ord för NO, SO och matematik på svenska.",
    "Använd ordkartor och tankekartor för att organisera nya ord i teman.",
    "Kontextledtrådar: lär dig lista ut vad ord betyder från sammanhanget.",
    "Ordbildning: förstå hur förstavelser och ändelser förändrar ords betydelse (t.ex. o-mist, van-lig).",
    "Skriv egna miniordlistor och använd dem när du läser texter.",
    "Tips: Läs barnböcker på svenska \u2013 börja med tunna böcker och jobba uppåt!",
  ],
  hogstadiet: [
    "Akademiska nyckelord: lär dig ord som analysera, jämföra, motivera, redogöra.",
    "Ämnesövergripande ordförråd: vetenskapliga, samhällsvetenskapliga och litterära termer.",
    "Kollokationer: vilka ord hör ihop? (t.ex. fatta beslut, dra slutsats, ta ställning).",
    "Idiom och bildspråk: 'att kasta in handduken', 'lägga korten på bordet'.",
    "Strategier för ordkunskap på nationella provet i SVA.",
    "Använd digitala ordlistor och korpusverktyg för att utforska ordanvändning.",
    "Skapa personliga ordbanker med exempelmeningar från texter du läser.",
  ],
  gymnasiet: [
    "Avancerat akademiskt ordförråd för högskoleförberedande studier.",
    "Fackspråk inom olika ämnesområden: juridik, ekonomi, naturvetenskap, humaniora.",
    "Nyansskillnader: nära synonymer med olika stilnivå (t.ex. få/erhålla, men/dock/emellertid).",
    "Lär dig att använda Svenska Akademiens ordlista (SAOL) och Svensk ordbok (SO) effektivt.",
    "Ordförråd för retorik och argumentation: tes, antites, premiss, syllogism.",
    "Register och stilnivå: att välja rätt ord för rätt sammanhang.",
    "Utförlig läsning av facklitteratur och skönlitteratur för att utöka ordförråd naturligt.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Grammatikutmaningar för L2-inlärare                               */
/* ------------------------------------------------------------------ */

const GRAMMAR_CHALLENGES: Record<AgeGroup, string[]> = {
  lagstadiet: [
    "En eller ett? Lär dig om svenskans två genus med roliga bilder och ramsor.",
    "Verben: att vara, att ha, att gå \u2013 de vanligaste verben i presens.",
    "Ordföljd: subjekt + verb + objekt (SVO) \u2013 så bygger vi meningar på svenska.",
    "Adjektiv och färger: stor/stort/stora \u2013 när använder vi vilken form?",
    "Frågeord: vem, vad, var, när, hur, varför.",
    "Tips: Jämför med ditt eget språk! Vad är lika och vad är olika?",
  ],
  mellanstadiet: [
    "Bestämd och obestämd form: en bok / boken, ett hus / huset, böcker / böckerna.",
    "Verbformer: presens, preteritum, supinum \u2013 lär dig de fyra konjugationerna.",
    "Bisatsordföljd: varför säger vi 'att jag inte är' istället för 'att jag är inte'?",
    "Prepositioner: i, på, till, från, med, utan \u2013 vanliga prepositioner och hur de används.",
    "Pronomen: jag/mig, du/dig, han/honom, hon/henne \u2013 subjekts- och objektsform.",
    "Sammansatta ord: förstå hur 'fotbollsplan' bildas av fot + boll + plan.",
    "BIFF-regeln: bisats inuti framför finita verbet \u2013 en viktig regel!",
  ],
  hogstadiet: [
    "Satsschema och inversionsregeln: varför står verbet alltid på plats två i påståenden?",
    "Relativsatser: 'boken som jag läste' \u2013 att binda ihop meningar elegant.",
    "Passiv form: 's-passiv och bli-passiv' (boken läses / boken blir läst).",
    "Konjunktioner och subjunktioner: samordnande vs underordnande bindning.",
    "Modala hjälpverb: kan, ska, måste, bör, får, vill \u2013 nyanser i betydelse.",
    "Partikelverb: 'stå upp', 'gå ut', 'komma ihåg' \u2013 verb + partikel förändrar betydelsen.",
    "Vanliga fel att undvika: då/då, de/dem, sin/hans/hennes.",
  ],
  gymnasiet: [
    "Avancerad meningsbyggnad: nominaliseringar, satsflätor och inskjutna bisatser.",
    "Stilistisk variation: korta vs långa meningar, aktiv vs passiv form.",
    "Textbindning: tematisk och logisk bindning med sambandsord och referensbindning.",
    "Grammatisk terminologi på svenska: behärskning av begrepp för språkanalys.",
    "Kontrastiv grammatik: systematisk jämförelse mellan svenska och andra språk.",
    "Informationstäthet: att skriva koncist med nominalfraser och sammansättningar.",
    "Grammatik för vetenskapligt skrivande: opersonlig stil, hedging, citatteknik.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Modersmålet som resurs                                             */
/* ------------------------------------------------------------------ */

const FIRST_LANGUAGE_CONTENT: Record<AgeGroup, string[]> = {
  lagstadiet: [
    "Ditt hemspråk är en superkraft! Det hjälper dig att lära dig svenska snabbare.",
    "Jämför ord på ditt språk och på svenska \u2013 ibland liknar de varandra!",
    "Rita bilder och skriv ordet på båda språken för att minnas bättre.",
    "Fråga hemma: be någon förklara på ditt språk när du inte förstår på svenska.",
    "Flerspråkiga böcker: läs böcker som finns på både svenska och ditt språk.",
  ],
  mellanstadiet: [
    "Använd ditt modersmål för att planera texter innan du skriver på svenska.",
    "Tvåspråkiga ordlistor: skriv nya ord på båda språken så att du bygger ordförråd i båda.",
    "Jämför grammatik: hur fungerar verb, substantiv och adjektiv på ditt språk jämfört med svenska?",
    "Transferstrategier: vilka kunskaper från ditt modersmål kan du överföra till svenska?",
    "Internationella ord: många ord finns i både svenska och andra språk (t.ex. telefon, musik, problem).",
    "Modersmålsundervisning: om din skola erbjuder det \u2013 ta chansen! Det stärker alla dina språk.",
  ],
  hogstadiet: [
    "Kodväxling: att medvetet byta mellan språk för att tänka och lära effektivare.",
    "Använd ditt modersmål som tankeverktyg vid avancerad läsning och analys.",
    "Kontrastiv analys: identifiera systematiska skillnader mellan språken för att undvika interferensfel.",
    "Kulturell kompetens: dina språk ger dig unika perspektiv i textanalys och diskussioner.",
    "Flerspråkig identitet: styrkan i att behärska flera språk i en globaliserad värld.",
    "Akademiska ord har ofta samma rot i många språk (latin/grekiska) \u2013 utnyttja det!",
  ],
  gymnasiet: [
    "Metaspråklig medvetenhet: använd kunskapen om flera språk för djupare språkanalys.",
    "Interspråk och interlanguage: förstå din egna språkinlärningsprocess.",
    "Flerspråkighet som resurs i arbetslivet och på universitetet.",
    "Translanguaging: medveten användning av alla språk i repertoaren för lärande.",
    "Jämförande litterära analyser: texter på originalspråk vs svenska översättning.",
    "Att skriva akademiskt på ett andraspråk: strategier för att uppnå precis stilnivå.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Tips för nationella prov (hogstadiet + gymnasiet)                  */
/* ------------------------------------------------------------------ */

const NATIONAL_EXAM_TIPS: Record<"hogstadiet" | "gymnasiet", string[]> = {
  hogstadiet: [
    "Provet består av tre delar: läsa, skriva och muntligt \u2013 alla delar är lika viktiga.",
    "Läsdelen: träna på att läsa olika texttyper (fakta, argumentation, skönlitteratur) och svara på frågor.",
    "Skrivdelen: öva på att skriva både berättande och argumenterande texter med tydlig struktur.",
    "Muntliga delen: träna på att hålla korta presentationer och delta i samtal om givna ämnen.",
    "Tidsförvaltning: planera hur du fördelar tiden mellan uppgifterna.",
    "Ordlista: du får använda ordlista på provet \u2013 öva på att slå upp ord snabbt.",
    "Tidigare provuppgifter: öva med gamla nationella prov för SVA \u2013 du hittar dem på Skolverkets webbplats.",
    "Svar med egna ord: undvik att kopiera från texterna, visa att du förstår innehållet.",
  ],
  gymnasiet: [
    "SVA-provet i gymnasiet: testar avancerad läsförståelse, skriftlig förmåga och muntlig presentation.",
    "Textanalys: öva på att identifiera syfte, målgrupp, språkliga drag och argumentationsteknik.",
    "Källkritik: bedöm källors trovärdighet och relevans \u2013 en viktig del av provet.",
    "Utredande text: öva på att strukturera en utredande text med inledning, huvuddel och avslutning.",
    "Muntlig presentation: öva på att presentera ett ämne strukturerat med stöd av talar-PM.",
    "Referera och citera: lär dig att korrekt referera till källor i din text.",
    "Akademiska fraser: använd uttryck som 'enligt', 'däremot', 'sammanfattningsvis'.",
    "Bedömningsmatrisen: läs igenom Skolverkets bedömningskriterier så att du vet vad som förväntas.",
    "Skriv på rätt stilnivå: undvik talspråkliga uttryck i formella texter.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Vardagssvenska vs skolsvenska                                      */
/* ------------------------------------------------------------------ */

const REGISTER_CONTENT: Record<AgeGroup, { examples: string[]; tips: string[] }> = {
  lagstadiet: {
    examples: [
      "Vardagssvenska: 'Jag vill ha mer mat.' \u2192 Skolsvenska: 'Kan jag få mer mat, tack?'",
      "Vardagssvenska: 'Den var ju cool!' \u2192 Skolsvenska: 'Den var mycket intressant.'",
      "Vardagssvenska: 'Vi gick till affären.' \u2192 Skolsvenska: 'Vi besökte matbutiken.'",
    ],
    tips: [
      "På rasten pratar vi vardagssvenska \u2013 det är helt okej!",
      "På lektionen tränar vi på skolsvenska \u2013 det hjälper dig i skolan.",
      "Båda typerna av svenska är viktiga att kunna!",
    ],
  },
  mellanstadiet: {
    examples: [
      "Vardagssvenska: 'Kolla, den här boken är skitbra!' \u2192 Skolsvenska: 'Den här boken är mycket underhållande.'",
      "Vardagssvenska: 'Han ba sprang iväg.' \u2192 Skolsvenska: 'Han sprang plötsligt iväg.'",
      "Vardagssvenska: 'Det var nånting som häppnade.' \u2192 Skolsvenska: 'Det inträffade en händelse.'",
    ],
    tips: [
      "När du skriver i skolan: undvik slang och förkortningar.",
      "När du pratar med kompisar: vardagssvenska är naturligt och bra övning!",
      "Läs både skönlitteratur och faktatext för att se skillnaderna.",
      "Tänk på vem du skriver eller pratar till \u2013 det avgör vilken stil du väljer.",
    ],
  },
  hogstadiet: {
    examples: [
      "Informellt: 'Folk tycker att...' \u2192 Formellt: 'Många anser att...'",
      "Informellt: 'Det är ju typ omöjligt.' \u2192 Formellt: 'Det är i praktiken ogenomförbart.'",
      "Informellt: 'Sen häppnade det grejer.' \u2192 Formellt: 'Därefter inträffade flera händelser.'",
    ],
    tips: [
      "Lära dig att växla mellan register beroende på situation och målgrupp.",
      "Akademiska nyckelord höjer stilnivån: exempelvis, dock, följaktligen, sammanfattningsvis.",
      "Undvik talspråkliga uttryck i uppsatser: ju, liksom, ba, typ.",
      "Öva på att skriva formella mejl till lärare och rektorer.",
      "Läs tidningsartiklar och jämför med bloggar \u2013 lägg märke till språket.",
    ],
  },
  gymnasiet: {
    examples: [
      "Vardagligt: 'Den här grejen är skitstor.' \u2192 Akademiskt: 'Detta fenomen är av betydande omfattning.'",
      "Vardagligt: 'Man kan typ säga att...' \u2192 Akademiskt: 'Det kan konstateras att...'",
      "Vardagligt: 'Det finns massa forskning.' \u2192 Akademiskt: 'Flertalet studier visar...'",
    ],
    tips: [
      "Akademiskt skrivande kräver opersonlig stil: använd passiv form och nominaliseringar.",
      "Hedging: 'Det tycks', 'Det förefaller' \u2013 viktigt i vetenskaplig text.",
      "Stilbrott försämrar texten: håll en jämn stilnivå genom hela texten.",
      "Lär dig skillnaden mellan skönlitterärt språk, journalistiskt språk och akademiskt språk.",
      "Öva på att variera meningslängd och meningstyp för att skapa rytm i texten.",
      "Läs akademiska texter regelbundet för att internalisera stilnivån.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Uttalsövningar (lagstadiet + mellanstadiet)                       */
/* ------------------------------------------------------------------ */

const PRONUNCIATION_CONTENT: Record<"lagstadiet" | "mellanstadiet", string[]> = {
  lagstadiet: [
    "Svenska vokaler: a, o, u, å, e, i, y, ö \u2013 öva på att höra skillnaden.",
    "Svåra ljud: sj-ljudet (sjuka, skjorta), tj-ljudet (tjugo, kyrka).",
    "Lär dig 'y'-ljudet: det finns inte i många språk! Öva med ord som 'ny', 'by', 'sy'.",
    "Betoning och rytm: svenska har en speciell melodi \u2013 lyssna och härma!",
    "Långa och korta vokaler: 'tak' (långt a) vs 'tack' (kort a) \u2013 det ändrar betydelsen!",
    "Sjung svenska barnsånger för att träna uttal och rytm.",
    "Spela in dig själv och lyssna \u2013 jämför med hur läraren säger orden.",
  ],
  mellanstadiet: [
    "Prosodi: svenskans två accenter (akut accent och grav accent) ger ord olika betydelse.",
    "Exempel: 'anden' (ankan) vs 'anden' (en ande) \u2013 betoningen gör skillnaden!",
    "Konsonantkluster: str, spr, skr \u2013 öva på att säga dem i talflöde.",
    "Retroflexer: rd, rt, rn, rs, rl \u2013 typiska för svenska (örd, kart, barn).",
    "Satsmelodi: frågor går upp i tonhöjd, påståenden går ner.",
    "Minimala par: öva med ordpar där bara ett ljud skiljer sig (t.ex. bar/bår, hus/höns).",
    "Lyssna på ljudböcker och podcaster för barn för att träna hörförståelse och uttal.",
    "Tips: Läsa högt varje dag i 10 minuter förbättrar uttal märkbart!",
  ],
};

/* ------------------------------------------------------------------ */
/*  Navigation cards                                                    */
/* ------------------------------------------------------------------ */

interface NavCard {
  title: string;
  description: string;
  href: (arskurs: string) => string;
  icon: React.ElementType;
}

const NAV_CARDS: NavCard[] = [
  {
    title: "Grammatik",
    description: "Övningar och genomgångar i svensk grammatik",
    href: (a) => `/${a}/grammatik`,
    icon: PenTool,
  },
  {
    title: "Ordkunskap",
    description: "Bygg ditt ordförråd med veckans ord och övningar",
    href: (a) => `/${a}/ordkunskap`,
    icon: BookOpen,
  },
  {
    title: "Textbank",
    description: "Texter på olika nivåer för läsning och analys",
    href: (a) => `/${a}/textbank`,
    icon: FileText,
  },
  {
    title: "Kursplan SVA",
    description: "Se Skolverkets kursplan för svenska som andraspråk",
    href: (a) => `/${a}/kursplan?amne=sva`,
    icon: GraduationCap,
  },
];

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return VALID_AGE_GROUPS.map((slug) => ({ arskurs: slug }));
}

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Svenska som andraspråk (SVA) \u2013 ${group.label}`,
    description: `Svenska som andraspråk för ${group.label.toLowerCase()}. Ordförråd, grammatik, uttal och tips för flerspråkiga elever.`,
  };
}

/* ------------------------------------------------------------------ */
/*  Section component                                                   */
/* ------------------------------------------------------------------ */

function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/40">
          <Icon className="h-5 w-5 text-amber-700 dark:text-amber-300" />
        </div>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-neutral-700 dark:text-neutral-300">
          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber-400 dark:bg-amber-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RegisterExample({ example }: { example: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 font-mono text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-300">
      {example}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function SvaPage({ params }: Props) {
  const { arskurs } = await params;

  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) {
    notFound();
  }

  const age = arskurs as AgeGroup;
  const intro = SVA_INTRO[age];
  const showPronunciation = age === "lagstadiet" || age === "mellanstadiet";
  const showExamTips = age === "hogstadiet" || age === "gymnasiet";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* ---- Hero / intro ---- */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/40">
            <Languages className="h-6 w-6 text-amber-700 dark:text-amber-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {intro.heading}
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {group.description}
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          {intro.description}
        </p>
      </div>

      {/* ---- Quick-nav TOC ---- */}
      <nav className="mb-12 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Innehåll på denna sida
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          <li>
            <a href="#ordforrad" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
              Ordförrådsbyggande
            </a>
          </li>
          <li>
            <a href="#grammatik" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
              Grammatikutmaningar för SVA
            </a>
          </li>
          <li>
            <a href="#modersmal" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
              Modersmålet som resurs
            </a>
          </li>
          <li>
            <a href="#register" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
              Vardagssvenska vs skolsvenska
            </a>
          </li>
          {showPronunciation && (
            <li>
              <a href="#uttal" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
                Uttalsövningar
              </a>
            </li>
          )}
          {showExamTips && (
            <li>
              <a href="#prov" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
                Tips för nationella prov
              </a>
            </li>
          )}
        </ul>
      </nav>

      {/* ---- Main content sections ---- */}
      <div className="space-y-16">
        {/* 1. Ordförrådsbyggande */}
        <Section id="ordforrad" title="Ordförrådsbyggande" icon={BookOpen}>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            {age === "lagstadiet" &&
              "Att lära sig nya ord är som att samla skatter. Ju fler ord du kan, desto lättare blir det att förstå och göra dig förstådd på svenska."}
            {age === "mellanstadiet" &&
              "Ordförråd är nyckeln till framgång i alla skolämnen. Här får du strategier för att bygga ditt ordförråd systematiskt och effektivt."}
            {age === "hogstadiet" &&
              "Ett rikt ordförråd är avgörande för att lyckas med både nationella prov och vidare studier. Här får du verktyg för att utveckla både vardagligt och akademiskt ordförråd."}
            {age === "gymnasiet" &&
              "På gymnasienivå förväntas du behärska ett nyanserat och akademiskt ordförråd. Här får du strategier för att nå dit."}
          </p>
          <ContentList items={VOCABULARY_CONTENT[age]} />
        </Section>

        {/* 2. Grammatikutmaningar */}
        <Section id="grammatik" title="Grammatikutmaningar för SVA" icon={Lightbulb}>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            {age === "lagstadiet" &&
              "Svensk grammatik kan vara knepig, men med rätt hjälp blir det lättare! Här tittar vi på de vanligaste utmaningarna."}
            {age === "mellanstadiet" &&
              "När du lär dig svenska som andraspråk finns det särskilda grammatiska utmaningar. Här tar vi upp de viktigaste."}
            {age === "hogstadiet" &&
              "Som SVA-elev möter du särskilda grammatiska utmaningar. Att förstå dessa hjälper dig att skriva bättre och mer korrekt."}
            {age === "gymnasiet" &&
              "På gymnasienivå förväntas avancerad grammatisk kompetens. Här fokuserar vi på de områden som är särskilt utmanande för L2-inlärare."}
          </p>
          <ContentList items={GRAMMAR_CHALLENGES[age]} />
          <div className="mt-6">
            <Link
              href={`/${arskurs}/grammatik`}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 transition-colors hover:bg-amber-200 dark:bg-amber-900/40 dark:text-amber-300 dark:hover:bg-amber-900/60"
            >
              <PenTool className="h-4 w-4" />
              Gå till grammatikövningar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>

        {/* 3. Modersmålet som resurs */}
        <Section id="modersmal" title="Använda modersmålet som resurs" icon={Globe}>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            {age === "lagstadiet" &&
              "Visste du att ditt hemspråk hjälper dig att lära dig svenska? Dina språk är inte i vägen för varandra \u2013 de hjälper varandra!"}
            {age === "mellanstadiet" &&
              "Forskning visar att elever som använder sitt modersmål aktivt lär sig andraspråket bättre. Ditt modersmål är en brygga till svenskan."}
            {age === "hogstadiet" &&
              "Flerspråkighet är en styrka, inte ett hinder. Här får du strategier för att använda alla dina språk som verktyg i lärandet."}
            {age === "gymnasiet" &&
              "På gymnasienivå kan du medvetet använda din flerspråkiga kompetens för djupare språklig analys och bättre inlärning."}
          </p>
          <ContentList items={FIRST_LANGUAGE_CONTENT[age]} />
        </Section>

        {/* 4. Vardagssvenska vs skolsvenska */}
        <Section id="register" title="Vardagssvenska vs skolsvenska" icon={MessageCircle}>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            {age === "lagstadiet" &&
              "I skolan pratar och skriver vi lite annorlunda än hemma eller på rasten. Det är bra att kunna båda sätten!"}
            {age === "mellanstadiet" &&
              "Att kunna växla mellan vardagligt och formellt språk är en viktig färdighet. Här lär du dig skillnaderna."}
            {age === "hogstadiet" &&
              "Att behärska olika språkliga register är avgörande för både skolarbete och socialt umgänge. Lär dig att växla medvetet."}
            {age === "gymnasiet" &&
              "På gymnasiet och i högre studier förväntas du behärska akademisk svenska. Här är guide till de olika stilnivåerna."}
          </p>

          <div className="mb-4 space-y-3">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
              Exempel
            </h3>
            {REGISTER_CONTENT[age].examples.map((ex, i) => (
              <RegisterExample key={i} example={ex} />
            ))}
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium text-neutral-800 dark:text-neutral-200">
              Tips
            </h3>
            <ContentList items={REGISTER_CONTENT[age].tips} />
          </div>
        </Section>

        {/* 5. Uttalsövningar (lagstadiet + mellanstadiet) */}
        {showPronunciation && (
          <Section id="uttal" title="Uttalsövningar" icon={Mic}>
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              {age === "lagstadiet" &&
                "Att lära sig hur svenska låter är lika viktigt som att lära sig nya ord. Här tränar vi på ljud som kan vara svåra."}
              {age === "mellanstadiet" &&
                "Bra uttal gör det lättare för andra att förstå dig. Här fokuserar vi på de ljud och den melodi som gör svenskan speciell."}
            </p>
            <ContentList
              items={
                PRONUNCIATION_CONTENT[age as "lagstadiet" | "mellanstadiet"]
              }
            />
          </Section>
        )}

        {/* 6. Tips för nationella prov (hogstadiet + gymnasiet) */}
        {showExamTips && (
          <Section id="prov" title="Tips för nationella prov i SVA" icon={GraduationCap}>
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              {age === "hogstadiet" &&
                "De nationella proven i SVA testar din förmåga att läsa, skriva och samtala på svenska. Här får du tips för att förbereda dig så bra som möjligt."}
              {age === "gymnasiet" &&
                "Nationella provet i SVA på gymnasiet ställer höga krav på språklig medvetenhet och akademisk förmåga. Här får du konkreta strategier."}
            </p>
            <ContentList
              items={
                NATIONAL_EXAM_TIPS[age as "hogstadiet" | "gymnasiet"]
              }
            />
            <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
              <p className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300">
                <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  Kom ihåg: nationella provet är inte något man &quot;pluggar&quot; till över en
                  natt. Det testar kunskaper du byggt upp över lång tid. Börja träna tidigt
                  och jobba regelbundet!
                </span>
              </p>
            </div>
          </Section>
        )}
      </div>

      {/* ---- Kursplan-länk ---- */}
      <div className="mt-16 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Kursplan för SVA
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Läs Skolverkets kursplan för svenska som andraspråk för {group.label.toLowerCase()}.
            </p>
          </div>
        </div>
        <Link
          href={`/${arskurs}/kursplan?amne=sva`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300"
        >
          Visa kursplan
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* ---- Interactive SVA exercises ---- */}
      <div className="mt-12 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
            <Dumbbell className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Interaktiva SVA-övningar
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Träna på vanliga utmaningar för dig som lär dig svenska som andraspråk.
            </p>
          </div>
        </div>
        <SvaOvningar ageGroup={arskurs as AgeGroup} />
      </div>

      {/* ---- Navigation cards ---- */}
      <div className="mt-12">
        <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-white">
          Utforska fler områden
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {NAV_CARDS.map((card) => {
            const NavIcon = card.icon;
            return (
              <Link key={card.title} href={card.href(arskurs)} className="group">
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <NavIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                    <CardDescription className="flex items-center justify-between">
                      <span>{card.description}</span>
                      <ArrowRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1" />
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
