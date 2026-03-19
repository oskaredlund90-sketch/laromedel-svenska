import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ClipboardCheck,
  BookOpen,
  PenLine,
  MessageSquare,
  Lightbulb,
  AlertTriangle,
  HelpCircle,
  ArrowLeft,
  Users,
  FileText,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

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

function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-xl font-semibold text-neutral-800 dark:text-neutral-100">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
      <div className="text-sm text-neutral-700 dark:text-neutral-300">{children}</div>
    </div>
  );
}

function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
      <div className="text-sm text-neutral-700 dark:text-neutral-300">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Config per age group                                               */
/* ------------------------------------------------------------------ */

const LEVEL_CONFIG: Record<string, {
  badge: string;
  heading: string;
  intro: string;
}> = {
  lagstadiet: {
    badge: "L\u00e5gstadiet",
    heading: "Nationella prov \u2013 \u00c5rskurs 3",
    intro: "H\u00e4r f\u00e5r du veta allt om nationella provet i svenska f\u00f6r \u00e5rskurs 3. Vad du ska g\u00f6ra, hur det g\u00e5r till och hur du kan f\u00f6rbereda dig.",
  },
  mellanstadiet: {
    badge: "Mellanstadiet",
    heading: "Nationella prov \u2013 \u00c5rskurs 6",
    intro: "I \u00e5rskurs 6 g\u00f6r du nationella prov i svenska f\u00f6r f\u00f6rsta g\u00e5ngen med betygsbed\u00f6mning. H\u00e4r f\u00e5r du veta vad som ing\u00e5r och hur du f\u00f6rbereder dig.",
  },
  hogstadiet: {
    badge: "H\u00f6gstadiet",
    heading: "Nationella prov \u2013 \u00c5rskurs 9",
    intro: "Det nationella provet i \u00e5rskurs 9 \u00e4r det sista i grundskolan. Resultatet spelar en viktig roll f\u00f6r ditt slutbetyg. H\u00e4r f\u00e5r du koll p\u00e5 vad som g\u00e4ller och hur du lyckas.",
  },
  gymnasiet: {
    badge: "Gymnasiet",
    heading: "Nationella prov \u2013 Gymnasiet",
    intro: "P\u00e5 gymnasiet g\u00f6rs nationella prov i Svenska 1 och Svenska 3. H\u00e4r f\u00e5r du en genomg\u00e5ng av b\u00e5da proven med fokus p\u00e5 vad som kr\u00e4vs och hur du f\u00f6rbereder dig.",
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const config = LEVEL_CONFIG[arskurs];
  if (!config) return {};
  return {
    title: config.heading,
    description: `Allt om nationella provet i svenska f\u00f6r ${config.badge.toLowerCase()}. Delprov, bed\u00f6mning, texttyper och f\u00f6rberedelsetips.`,
  };
}

export default async function NationellaProvArskursPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const config = LEVEL_CONFIG[arskurs] ?? LEVEL_CONFIG.hogstadiet;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Back link */}
      <Link
        href={`/${arskurs}`}
        className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Tillbaka
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <ClipboardCheck className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
          </div>
          <Badge variant="secondary">{config.badge}</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {config.heading}
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {config.intro}
        </p>
      </div>

      {/* General intro about national tests */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
          Vad &auml;r nationella prov?
        </h2>
        <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
          <p>
            Nationella prov &auml;r prov som alla elever i Sverige g&ouml;r vid
            vissa &aring;rskurser. Proven &auml;r framtagna av universitet p&aring;
            uppdrag av Skolverket och &auml;r samma f&ouml;r alla skolor i hela
            landet.
          </p>
          <p>
            Syftet med proven &auml;r att st&ouml;dja en r&auml;ttvis och likv&auml;rdig
            bed&ouml;mning och betygss&auml;ttning. Proven ska ocks&aring; ge
            underlag f&ouml;r att analysera om utbildningens m&aring;l uppn&aring;s
            p&aring; skolniv&aring; och nationell niv&aring;.
          </p>
        </div>
      </section>

      {/* Level-specific content */}
      {arskurs === "lagstadiet" && <Lagstadiet />}
      {arskurs === "mellanstadiet" && <Mellanstadiet />}
      {arskurs === "hogstadiet" && <Hogstadiet />}
      {arskurs === "gymnasiet" && <Gymnasiet />}
    </div>
  );
}

/* ================================================================== */
/*  LAGSTADIET (Arskurs 3)                                            */
/* ================================================================== */

function Lagstadiet() {
  return (
    <>
      <div className="mb-6 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
        F&ouml;r dig som elev
      </div>

      <Section title="Vad &auml;r provet?">
        <p className="text-neutral-600 dark:text-neutral-400">
          I &aring;rskurs 3 g&ouml;r du ett nationellt prov i svenska. Provet
          best&aring;r av flera delar som du g&ouml;r vid olika tillf&auml;llen
          &ndash; du g&ouml;r allts&aring; inte allt p&aring; en dag! Provet
          testar saker du redan &ouml;vat p&aring; i skolan: att l&auml;sa, att
          skriva och att ber&auml;tta muntligt.
        </p>
        <Tip>
          Provet &auml;r inget du beh&ouml;ver vara r&auml;dd f&ouml;r. Det
          handlar om att visa vad du redan kan!
        </Tip>
      </Section>

      <Section title="Delprov">
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <BookOpen className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <CardTitle className="text-base">L&auml;sa &ndash; L&auml;sf&ouml;rst&aring;else</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du l&auml;ser texter och svarar p&aring; fr&aring;gor om dem.
                Fr&aring;gorna handlar om vad som h&auml;nder i texten, vad ord
                betyder och vad du tror att texten vill s&auml;ga. Vissa
                fr&aring;gor har svarsalternativ och p&aring; andra skriver du
                svaret sj&auml;lv.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <PenLine className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <CardTitle className="text-base">Skriva &ndash; Ber&auml;ttande text</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du skriver en ber&auml;ttande text, till exempel en saga eller en
                ber&auml;ttelse. Texten ska ha en b&ouml;rjan, en mitt och ett
                slut. Du f&aring;r ofta en bild eller ett &auml;mne som
                hj&auml;lp att komma ig&aring;ng.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <MessageSquare className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <CardTitle className="text-base">Tala &ndash; Muntlig uppgift</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du ber&auml;ttar n&aring;got muntligt, till exempel &aring;terber&auml;ttar
                en saga eller pratar om ett &auml;mne. Ibland pratar du med en
                kompis och ibland inf&ouml;r en liten grupp. L&auml;raren
                lyssnar och skriver ner hur det g&aring;r.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="S&aring; h&auml;r bed&ouml;ms du">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          I &aring;rskurs 3 f&aring;r du inget bokstavsbetyg. Ist&auml;llet
          bed&ouml;ms du med <strong>Godk&auml;nt</strong> eller{" "}
          <strong>Ej godk&auml;nt</strong> p&aring; varje del. L&auml;raren
          tittar p&aring;:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">L&auml;sa</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Att du f&ouml;rst&aring;r vad du l&auml;ser</li>
                <li>&bull; Att du kan svara p&aring; fr&aring;gor om texten</li>
                <li>&bull; Att du kan f&ouml;rklara vad ord betyder</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Skriva</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Att din ber&auml;ttelse har b&ouml;rjan, mitt och slut</li>
                <li>&bull; Att texten g&aring;r att l&auml;sa och f&ouml;rst&aring;</li>
                <li>&bull; Att du anv&auml;nder stor bokstav och punkt</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Tala</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Att du kan ber&auml;tta s&aring; andra f&ouml;rst&aring;r</li>
                <li>&bull; Att du h&aring;ller dig till &auml;mnet</li>
                <li>&bull; Att du kan lyssna och svara p&aring; fr&aring;gor</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="F&ouml;rbered dig &ndash; tips f&ouml;r varje del">
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Tips f&ouml;r l&auml;sdelen</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; L&auml;s fr&aring;gan noga innan du svarar.</li>
                <li>&bull; L&auml;s texten mer &auml;n en g&aring;ng om du beh&ouml;ver.</li>
                <li>&bull; Om du inte f&ouml;rst&aring;r ett ord, l&auml;s meningen runt ordet &ndash; d&aring; kan du ofta lista ut vad det betyder.</li>
                <li>&bull; Det &auml;r okej att stryka under i texten.</li>
              </ul>
              <Tip>
                Tr&auml;na hemma genom att l&auml;sa b&ouml;cker och prata om
                vad du l&auml;st med n&aring;gon vuxen. Det g&ouml;r stor
                skillnad!
              </Tip>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Tips f&ouml;r skrivdelen</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; T&auml;nk p&aring; vad som ska h&auml;nda i din ber&auml;ttelse innan du b&ouml;rjar skriva.</li>
                <li>&bull; Skriv en b&ouml;rjan, en mitt och ett slut.</li>
                <li>&bull; Anv&auml;nd stor bokstav och punkt.</li>
                <li>&bull; L&auml;s igenom din text n&auml;r du &auml;r klar. L&aring;ter det bra?</li>
              </ul>
              <Tip>
                Du kan anv&auml;nda &ldquo;f&ouml;rst&rdquo;, &ldquo;sedan&rdquo;
                och &ldquo;till slut&rdquo; f&ouml;r att visa vad som h&auml;nder
                i din ber&auml;ttelse.
              </Tip>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Tips f&ouml;r taldelen</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Prata lugnt och tydligt.</li>
                <li>&bull; Det &auml;r okej att t&auml;nka efter innan du svarar.</li>
                <li>&bull; Lyssna p&aring; vad andra s&auml;ger.</li>
                <li>&bull; Du beh&ouml;ver inte vara perfekt &ndash; det viktiga &auml;r att du f&ouml;rs&ouml;ker!</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Vanliga fr&aring;gor">
        <div className="space-y-4">
          {[
            {
              q: "Hur l\u00e5ng tid har jag p\u00e5 mig?",
              a: "Det finns ingen exakt tidsgr\u00e4ns f\u00f6r varje del. L\u00e4raren ser till att du f\u00e5r den tid du beh\u00f6ver. De olika delarna g\u00f6rs p\u00e5 olika dagar.",
            },
            {
              q: "F\u00e5r jag anv\u00e4nda ordlista?",
              a: "Nej, i \u00e5rskurs 3 anv\u00e4nds normalt ingen ordlista. Men om du inte f\u00f6rst\u00e5r en fr\u00e5ga f\u00e5r du be l\u00e4raren f\u00f6rklara.",
            },
            {
              q: "Vad h\u00e4nder om jag \u00e4r sjuk p\u00e5 provdagen?",
              a: "D\u00e5 f\u00e5r du g\u00f6ra provet en annan dag. Prata med din l\u00e4rare s\u00e5 ordnar det sig.",
            },
            {
              q: "\u00c4r det ett betyg?",
              a: "Nej, du f\u00e5r inte n\u00e5got bokstavsbetyg i \u00e5rskurs 3. L\u00e4raren bed\u00f6mer om du n\u00e5tt kunskapskraven eller inte.",
            },
            {
              q: "Vad h\u00e4nder om jag inte klarar provet?",
              a: "D\u00e5 f\u00e5r du extra hj\u00e4lp och st\u00f6d f\u00f6r att utvecklas vidare. Provet \u00e4r till f\u00f6r att visa var du beh\u00f6ver mer \u00f6vning.",
            },
          ].map((faq) => (
            <Card key={faq.q}>
              <CardHeader className="flex-row items-start gap-3 pb-2">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400" />
                <CardTitle className="text-base">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent className="pl-14">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Dagen f&ouml;re provet">
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex gap-2">
                <span className="text-lg">&#128564;</span>
                <span>Sov ordentligt &ndash; l&auml;gg dig i tid s&aring; att du &auml;r utvilad.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#127828;</span>
                <span>&Auml;t en bra frukost p&aring; morgonen.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#9999;&#65039;</span>
                <span>Ta med pennor och suddgummi till skolan.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#128522;</span>
                <span>Kom ih&aring;g: det &auml;r bara att g&ouml;ra sitt b&auml;sta. Ingen beh&ouml;ver vara perfekt!</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Tip>
          Forts&auml;tt g&ouml;ra det du brukar g&ouml;ra kv&auml;llen innan.
          L&auml;s en bok, lek eller koppla av. Du beh&ouml;ver inte
          &ldquo;plugga&rdquo;.
        </Tip>
      </Section>

      {/* Larardel */}
      <div className="mb-6 mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <Users className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            F&ouml;r l&auml;rare
          </h2>
        </div>
      </div>

      <Section title="Genomf&ouml;rande">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Provet genomf&ouml;rs under en l&auml;ngre period, normalt mellan
          oktober och mars, och best&aring;r av flera delprov som g&ouml;rs vid
          olika tillf&auml;llen. Proven f&ouml;ruts&auml;tter normal
          klassrumsmilj&ouml; och b&ouml;r inte presenteras som n&aring;got
          on&ouml;digt laddat f&ouml;r eleverna. L&auml;raren l&auml;ser ibland
          texterna h&ouml;gt f&ouml;r eleverna, s&auml;rskilt f&ouml;r elever
          som beh&ouml;ver det.
        </p>
      </Section>

      <Section title="Bed&ouml;mning">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Bed&ouml;mning g&ouml;rs utifr&aring;n Skolverkets
          bed&ouml;mningsanvisningar som f&ouml;ljer med proven. Sambed&ouml;mning
          &ndash; d&auml;r tv&aring; eller flera l&auml;rare bed&ouml;mer
          samma elevarbete &ndash; rekommenderas f&ouml;r att &ouml;ka
          likv&auml;rdigheten. Resultatet rapporteras som uppn&aring;dd eller
          ej uppn&aring;dd kunskapsniv&aring;.
        </p>
      </Section>

      <Section title="Resultatrapportering">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Resultaten rapporteras till Skolverket via rektor. Varje elevs
          resultat dokumenteras p&aring; delprovsniv&aring;. Resultaten
          anv&auml;nds b&aring;de f&ouml;r att st&ouml;dja l&auml;rarens
          bed&ouml;mning av eleven och f&ouml;r nationell uppf&ouml;ljning av
          kunskapsresultat. I &aring;rskurs 3 finns inga betyg &ndash; provet
          ger ist&auml;llet information om elevens kunskapsutveckling.
        </p>
      </Section>
    </>
  );
}

/* ================================================================== */
/*  MELLANSTADIET (Arskurs 6)                                         */
/* ================================================================== */

function Mellanstadiet() {
  return (
    <>
      <div className="mb-6 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
        F&ouml;r dig som elev
      </div>

      <Section title="Vad &auml;r provet?">
        <p className="text-neutral-600 dark:text-neutral-400">
          Det nationella provet i &aring;rskurs 6 best&aring;r av tre delprov
          som testar tre centrala f&auml;rdigheter: att tala, att l&auml;sa och
          att skriva. Proven g&ouml;rs p&aring; olika dagar under v&aring;ren.
          Ditt resultat anv&auml;nds av l&auml;raren som ett av flera underlag
          n&auml;r hen s&auml;tter ditt betyg.
        </p>
        <Tip>
          Provet testar saker du redan jobbar med i skolan. Det b&auml;sta
          s&auml;ttet att f&ouml;rbereda dig &auml;r att vara aktiv p&aring;
          lektionerna.
        </Tip>
      </Section>

      <Section title="Delprov">
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <MessageSquare className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov A</Badge>
                <CardTitle className="text-base">Tala</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du h&aring;ller en kort muntlig presentation och deltar i ett
                samtal. Presentationen f&ouml;rbereds i f&ouml;rv&auml;g
                &ndash; du vet vad du ska prata om innan. Samtalet sker i en
                liten grupp d&auml;r ni diskuterar ett &auml;mne tillsammans.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <BookOpen className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov B</Badge>
                <CardTitle className="text-base">L&auml;sa</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du l&auml;ser b&aring;de sk&ouml;nlitter&auml;ra texter
                (ber&auml;ttelser, dikter) och sakprosatexter (fakta,
                artiklar). Sedan svarar du p&aring; fr&aring;gor som testar om
                du f&ouml;rst&aring;r inneh&aring;llet, kan dra slutsatser och
                tolka budskapet.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <PenLine className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov C</Badge>
                <CardTitle className="text-base">Skriva</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du skriver en l&auml;ngre text. Uppgiften kan vara att skriva
                en ber&auml;ttande text eller en argumenterande text (till
                exempel en ins&auml;ndare). Du f&aring;r ett &auml;mne och
                instruktioner att f&ouml;lja.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="S&aring; h&auml;r bed&ouml;ms du">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          I &aring;rskurs 6 bed&ouml;ms du med betyg fr&aring;n <strong>E</strong> till{" "}
          <strong>A</strong>. L&auml;raren anv&auml;nder en bed&ouml;mningsmatris
          f&ouml;r varje delprov.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Tala (A)</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Att du pratar tydligt och sammanh&auml;ngande</li>
                <li>&bull; Att du anpassar dig till &auml;mnet och lyssnaren</li>
                <li>&bull; Att du kan diskutera och bygga vidare p&aring; andras tankar</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">L&auml;sa (B)</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Att du f&ouml;rst&aring;r b&aring;de det utsagda och det underf&ouml;rst&aring;dda</li>
                <li>&bull; Att du kan j&auml;mf&ouml;ra och reflektera &ouml;ver texter</li>
                <li>&bull; Att du anv&auml;nder egna ord n&auml;r du svarar</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Skriva (C)</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Att texten har tydlig struktur och r&ouml;d tr&aring;d</li>
                <li>&bull; Att du anpassar spr&aring;ket till texttypen</li>
                <li>&bull; Att du anv&auml;nder varierat spr&aring;k och r&auml;tt skiljetecken</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="F&ouml;rbered dig &ndash; tips f&ouml;r varje delprov">
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Tips f&ouml;r delprov A (tala)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; F&ouml;rbered din presentation med st&ouml;dord p&aring; ett papper &ndash; l&auml;s inte innantill.</li>
                <li>&bull; &Ouml;va hemma inf&ouml;r en familjemedlem eller framf&ouml;r spegeln.</li>
                <li>&bull; Titta p&aring; dem du pratar med.</li>
                <li>&bull; I samtalet: lyssna p&aring; andra, st&auml;ll f&ouml;ljdfr&aring;gor och visa att du &auml;r intresserad.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Tips f&ouml;r delprov B (l&auml;sa)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; L&auml;s texterna noggrant. Skumma inte.</li>
                <li>&bull; L&auml;s fr&aring;gorna f&ouml;rst s&aring; vet du vad du ska leta efter.</li>
                <li>&bull; G&aring; tillbaka till texten n&auml;r du svarar &ndash; svara inte bara fr&aring;n minnet.</li>
                <li>&bull; Svara med hela meningar och motivera dina svar.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Tips f&ouml;r delprov C (skriva)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Planera din text innan du b&ouml;rjar skriva. G&ouml;r en tankekarta eller punktlista.</li>
                <li>&bull; F&ouml;lj instruktionen &ndash; skriv den typ av text som efterfr&aring;gas.</li>
                <li>&bull; Dela in texten i stycken med tydliga styckebyten.</li>
                <li>&bull; Anv&auml;nd sambandsord (dessutom, d&auml;rf&ouml;r, trots att).</li>
                <li>&bull; L&auml;s igenom texten n&auml;r du &auml;r klar och r&auml;tta stavfel.</li>
              </ul>
              <Warning>
                Vanligt misstag: att b&ouml;rja skriva direkt utan plan.
                L&auml;gg 5&ndash;10 minuter p&aring; att planera &ndash; det
                ger en b&auml;ttre text!
              </Warning>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Vanliga fr&aring;gor">
        <div className="space-y-4">
          {[
            {
              q: "Hur l\u00e5ng tid har jag p\u00e5 mig?",
              a: "Tiderna kan variera fr\u00e5n \u00e5r till \u00e5r. Du f\u00e5r god tid p\u00e5 dig f\u00f6r b\u00e5de l\u00e4sdelen och skrivdelen. Taldelen varierar beroende p\u00e5 gruppstorlek. Din l\u00e4rare meddelar exakta tider inf\u00f6r provet.",
            },
            {
              q: "F\u00e5r jag anv\u00e4nda ordlista?",
              a: "Ja, du f\u00e5r normalt anv\u00e4nda en ordlista under skrivdelen. Fr\u00e5ga din l\u00e4rare vilka hj\u00e4lpmedel som g\u00e4ller.",
            },
            {
              q: "P\u00e5verkar provet mitt betyg?",
              a: "Ja, provet \u00e4r ett viktigt underlag f\u00f6r betygss\u00e4ttningen, men det \u00e4r inte det enda. Din l\u00e4rare v\u00e4ger ihop provresultatet med allt du visat under terminen.",
            },
            {
              q: "Vad h\u00e4nder om jag \u00e4r sjuk?",
              a: "Du g\u00f6r provet vid ett annat tillf\u00e4lle. Kontakta din l\u00e4rare s\u00e5 snart som m\u00f6jligt.",
            },
          ].map((faq) => (
            <Card key={faq.q}>
              <CardHeader className="flex-row items-start gap-3 pb-2">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400" />
                <CardTitle className="text-base">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent className="pl-14">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Larardel */}
      <div className="mb-6 mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <Users className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            F&ouml;r l&auml;rare
          </h2>
        </div>
      </div>

      <Section title="Genomf&ouml;rande">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Proven genomf&ouml;rs under v&aring;rterminen p&aring; datum som
          Skolverket fastst&auml;ller. Delprov A (tala) genomf&ouml;rs normalt
          f&ouml;re de skriftliga proven. Proven kr&auml;ver en lugn milj&ouml;
          och att eleverna har tillg&aring;ng till de hj&auml;lpmedel som anges
          i l&auml;rarinformationen. Se till att alla elever k&auml;nner till
          provformatet i f&ouml;rv&auml;g.
        </p>
      </Section>

      <Section title="Bed&ouml;mning">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Bed&ouml;mning g&ouml;rs med hj&auml;lp av Skolverkets
          bed&ouml;mningsanvisningar och matriser f&ouml;r varje delprov.
          Sambed&ouml;mning med kollegor rekommenderas starkt, s&auml;rskilt
          f&ouml;r delprov C (skriva). Varje delprov ger ett delprovsbetyg
          (E&ndash;A eller F). Helhetsbed&ouml;mningen v&auml;ger samman alla
          delprov.
        </p>
      </Section>

      <Section title="Resultatrapportering">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Resultaten rapporteras till Skolverket p&aring;
          delprovs- och helhetsniv&aring;. Provresultatet ska beaktas vid
          betygss&auml;ttning men &auml;r inte ensamt avg&ouml;rande.
          L&auml;raren g&ouml;r en samlad bed&ouml;mning d&auml;r provresultatet
          &auml;r ett av underlagen. Avvikelser mellan provbetyg och slutbetyg
          ska kunna motiveras.
        </p>
      </Section>
    </>
  );
}

/* ================================================================== */
/*  HOGSTADIET (Arskurs 9)                                            */
/* ================================================================== */

function Hogstadiet() {
  return (
    <>
      <div className="mb-6 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
        F&ouml;r dig som elev
      </div>

      <Section title="Vad &auml;r provet?">
        <p className="text-neutral-600 dark:text-neutral-400">
          Det nationella provet i &aring;rskurs 9 &auml;r uppbyggt kring ett
          &ouml;vergripande tema som alla texter och uppgifter kretsar kring.
          Provet best&aring;r av tre delprov: tala, l&auml;sa och skriva.
          Delprov A (muntlig framst&auml;llning) genomf&ouml;rs under
          h&ouml;stterminen, medan delprov B och C genomf&ouml;rs p&aring;
          fastlagda provdatum i mars. Provresultatet &auml;r ett viktigt
          underlag n&auml;r din l&auml;rare s&auml;tter ditt slutbetyg i svenska.
        </p>
      </Section>

      <Section title="Delprov">
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <MessageSquare className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov A</Badge>
                <CardTitle className="text-base">Tala &ndash; Muntlig framst&auml;llning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du h&aring;ller ett f&ouml;rberett anf&ouml;rande och deltar
                sedan i en gruppdiskussion. I anf&ouml;randet ska du kunna
                anpassa dig till syfte och mottagare. I diskussionen
                f&ouml;rv&auml;ntas du lyssna aktivt, bygga vidare p&aring;
                andras argument och st&auml;lla relevanta f&ouml;ljdfr&aring;gor.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <BookOpen className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov B</Badge>
                <CardTitle className="text-base">L&auml;sa &ndash; L&auml;sf&ouml;rst&aring;else</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du f&aring;r ett texth&auml;fte med texter kopplade till
                &aring;rets tema. F&ouml;rst l&auml;ser du texterna p&aring; egen
                hand i en l&auml;stid utan tillg&aring;ng till uppgifterna.
                D&auml;refter har du god tid p&aring; dig att besvara uppgifterna.
                Det finns b&aring;de flervalsuppgifter och &ouml;ppna uppgifter.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <PenLine className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov C</Badge>
                <CardTitle className="text-base">Skriva &ndash; Skriftlig framst&auml;llning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du f&aring;r v&auml;lja en av tre skrivuppgifter. Texttypen kan
                vara kr&ouml;nika, debattartikel, ins&auml;ndare eller
                argumenterande text. En av uppgifterna kr&auml;ver att du
                anv&auml;nder k&auml;llor med k&auml;llh&auml;nvisningar.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="S&aring; h&auml;r bed&ouml;ms du">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Varje delprov bed&ouml;ms med en matris fr&aring;n <strong>F</strong> till{" "}
          <strong>A</strong>. De viktigaste aspekterna:
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Tala (A)</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Tydlig struktur i anf&ouml;randet</li>
                <li>&bull; Anpassning till syfte och mottagare</li>
                <li>&bull; Engagerar lyssnarna</li>
                <li>&bull; Bygger vidare p&aring; andras inl&auml;gg</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">L&auml;sa (B)</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; F&ouml;rst&aring;r explicit och implicit inneh&aring;ll</li>
                <li>&bull; Kan analysera spr&aring;kliga verkningsmedel</li>
                <li>&bull; Kan j&auml;mf&ouml;ra texter och dra slutsatser</li>
                <li>&bull; Motiverar tolkningar med textbevis</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Skriva (C)</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Tydlig disposition och r&ouml;d tr&aring;d</li>
                <li>&bull; V&auml;lutvecklade argument med underbyggnad</li>
                <li>&bull; Varierat och korrekt spr&aring;k</li>
                <li>&bull; Anpassat till texttyp och mottagare</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Tip>
          <strong>S&aring; p&aring;verkar provet betyget:</strong> Provresultatet
          ska s&auml;rskilt beaktas vid betygss&auml;ttning. Provet &auml;r
          viktigt, men inte det enda som r&auml;knas.
        </Tip>
      </Section>

      <Section title="Texttyper du beh&ouml;ver kunna">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">Kr&ouml;nika</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En personlig text d&auml;r du utg&aring;r fr&aring;n en
                vardaglig h&auml;ndelse och kopplar den till en st&ouml;rre
                fr&aring;ga. Blanda ber&auml;ttande med reflektion.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">Debattartikel / Ins&auml;ndare</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En argumenterande text med tydlig tes, v&auml;lutvecklade
                argument och bem&ouml;tande av motargument.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">Argumenterande / utredande text</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En text d&auml;r du argumenterar f&ouml;r en st&aring;ndpunkt eller
                belyser en fr&aring;ga fr&aring;n flera sidor.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">Svarsinl&auml;gg</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du l&auml;ser en artikel eller debatttext och skriver ett svar.
                Referera till k&auml;llan och skilja p&aring; andras &aring;sikter
                och dina egna.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="F&ouml;rbered dig &ndash; strategier f&ouml;r att lyckas">
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Delprov A &ndash; Muntlig framst&auml;llning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Strukturera ditt anf&ouml;rande med inledning, huvuddel och avslutning.</li>
                <li>&bull; Anv&auml;nd st&ouml;dord &ndash; l&auml;s aldrig innantill.</li>
                <li>&bull; T&auml;nk p&aring; kroppsspr&aring;k: &ouml;gonkontakt, tempo och r&ouml;stl&auml;ge.</li>
                <li>&bull; I diskussionen: lyssna noga, h&auml;nvisa till vad andra sagt.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Delprov B &ndash; L&auml;sf&ouml;rst&aring;else</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; L&auml;s texterna flera g&aring;nger under l&auml;stiden.</li>
                <li>&bull; Stryk under viktiga ord och begrepp.</li>
                <li>&bull; L&auml;s fr&aring;gorna noga &ndash; svara p&aring; allt fr&aring;gan undrar om.</li>
                <li>&bull; Anv&auml;nd uteslutningsmetoden p&aring; kryssfr&aring;gor.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Delprov C &ndash; Skriftlig framst&auml;llning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; L&auml;s hela uppgiftsinstruktionen noga innan du b&ouml;rjar skriva.</li>
                <li>&bull; F&ouml;lj instruktionen: de fetstilta orden talar om vad du m&aring;ste g&ouml;ra.</li>
                <li>&bull; T&auml;nk p&aring; vilken texttyp du skriver &ndash; anpassa spr&aring;k och ton.</li>
                <li>&bull; Planera: g&ouml;r en kort disposition innan du b&ouml;rjar skriva.</li>
                <li>&bull; Variera meningsbyggnad och anv&auml;nd sambandsord.</li>
              </ul>
              <Warning>
                Tidsplanering &auml;r avg&ouml;rande. Dela upp tiden i tre delar:
                planering, skrivande och &ouml;verl&auml;sning.
              </Warning>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Vanliga fr&aring;gor">
        <div className="space-y-4">
          {[
            {
              q: "Hur l\u00e5ng tid har jag p\u00e5 mig?",
              a: "P\u00e5 delprov B f\u00e5r du en l\u00e4stid f\u00f6ljd av tid f\u00f6r att besvara uppgifterna. Delprov C \u00e4r ett l\u00e4ngre skrivpass. Din l\u00e4rare meddelar exakta tider.",
            },
            {
              q: "F\u00e5r jag anv\u00e4nda ordlista?",
              a: "P\u00e5 skrivdelen f\u00e5r du normalt anv\u00e4nda ordlista. P\u00e5 l\u00e4sdelen \u00e4r det vanligtvis inga hj\u00e4lpmedel.",
            },
            {
              q: "Hur mycket p\u00e5verkar provet mitt slutbetyg?",
              a: "Provresultatet ska \u201ds\u00e4rskilt beaktas\u201d vid betygss\u00e4ttning. Det \u00e4r ett tungt underlag men inte det enda.",
            },
          ].map((faq) => (
            <Card key={faq.q}>
              <CardHeader className="flex-row items-start gap-3 pb-2">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400" />
                <CardTitle className="text-base">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent className="pl-14">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Larardel */}
      <div className="mb-6 mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <Users className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            F&ouml;r l&auml;rare
          </h2>
        </div>
      </div>

      <Section title="Genomf&ouml;rande">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Proven genomf&ouml;rs p&aring; Skolverkets fastst&auml;llda datum
          under v&aring;rterminen. Delprov A (tala) genomf&ouml;rs vanligen
          f&ouml;re de skriftliga proven. Proven kr&auml;ver provliknande
          f&ouml;rh&aring;llanden: tyst milj&ouml;, inga mobiltelefoner, och
          inga otill&aring;tna hj&auml;lpmedel.
        </p>
      </Section>

      <Section title="Bed&ouml;mning">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Bed&ouml;mningen g&ouml;rs med Skolverkets matriser och
          bed&ouml;mningsanvisningar. Sambed&ouml;mning rekommenderas starkt.
          Bed&ouml;mningen ska vara analytisk &ndash; varje aspekt bed&ouml;ms
          separat innan en helhetsbed&ouml;mning g&ouml;rs.
        </p>
      </Section>

      <Section title="Resultatrapportering">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Resultaten rapporteras till Skolverket b&aring;de p&aring;
          delprovsniv&aring; och som ett sammanv&auml;gt provbetyg.
          Provresultatet ska s&auml;rskilt beaktas vid betygss&auml;ttning.
          Vid avvikelse mellan provbetyg och slutbetyg ska l&auml;raren kunna
          motivera sitt beslut.
        </p>
      </Section>
    </>
  );
}

/* ================================================================== */
/*  GYMNASIET                                                          */
/* ================================================================== */

function Gymnasiet() {
  return (
    <>
      <div className="mb-6 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
        F&ouml;r dig som elev
      </div>

      <Section title="Vad &auml;r proven?">
        <p className="text-neutral-600 dark:text-neutral-400">
          P&aring; gymnasiet g&ouml;rs nationella prov i tv&aring; av
          svenskkurserna: <strong>Svenska 1</strong> och <strong>Svenska 3</strong>.
          B&aring;da proven best&aring;r av tre delprov: muntlig framst&auml;llning,
          l&auml;sning och skrivande. Kraven h&ouml;js fr&aring;n Svenska 1
          till Svenska 3 &ndash; i Svenska 3 f&ouml;rv&auml;ntas ett mer
          vetenskapligt f&ouml;rh&aring;llningss&auml;tt med k&auml;llhantering
          och analytiskt skrivande.
        </p>
      </Section>

      {/* Svenska 1 */}
      <div className="mb-6 mt-10 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
        Svenska 1
      </div>

      <Section title="Delprov &ndash; Svenska 1">
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <MessageSquare className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov A</Badge>
                <CardTitle className="text-base">Muntlig framst&auml;llning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du h&aring;ller ett f&ouml;rberett tal inf&ouml;r din klass
                eller en mindre grupp. Talet ska vara v&auml;lstrukturerat med
                inledning, huvuddel och avslutning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <BookOpen className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov B</Badge>
                <CardTitle className="text-base">L&auml;sf&ouml;rst&aring;else och textanalys</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du l&auml;ser ett texth&auml;fte med b&aring;de
                sk&ouml;nlitteratur och sakprosa. Fr&aring;gorna testar din
                f&ouml;rm&aring;ga att tolka, analysera och j&auml;mf&ouml;ra texter.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <PenLine className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov C</Badge>
                <CardTitle className="text-base">Skriftlig framst&auml;llning &ndash; Utredande text</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du skriver en utredande text utifr&aring;n ett givet &auml;mne.
                Texten ska ha en tydlig fr&aring;gest&auml;llning, vara
                v&auml;lstrukturerad och visa att du kan belysa en fr&aring;ga
                fr&aring;n flera sidor.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Svenska 3 */}
      <div className="mb-6 mt-10 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
        Svenska 3
      </div>

      <Section title="Delprov &ndash; Svenska 3">
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <MessageSquare className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov A</Badge>
                <CardTitle className="text-base">Muntlig presentation med vetenskaplig f&ouml;rankring</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du h&aring;ller en muntlig presentation d&auml;r du redovisar
                ett &auml;mne med st&ouml;d av k&auml;llor. Presentationen ska
                vara v&auml;lstrukturerad och visa att du kan anv&auml;nda
                retoriska grepp medvetet.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <BookOpen className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov B</Badge>
                <CardTitle className="text-base">L&auml;sa och analysera sk&ouml;nlitteratur</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du l&auml;ser sk&ouml;nlitter&auml;ra texter och skriver en
                litteraturanalys. Du f&ouml;rv&auml;ntas kunna analysera
                ber&auml;ttarteknik, tematik, spr&aring;kliga drag och
                historisk kontext.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <FileText className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Delprov C</Badge>
                <CardTitle className="text-base">Vetenskapligt skrivande &ndash; PM</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du skriver ett PM baserat p&aring; ett k&auml;llmaterial. PM:et
                ska vara utredande, sakligt och ha korrekt k&auml;llhantering.
                Du ska kunna sammanst&auml;lla information fr&aring;n flera
                k&auml;llor och formulera egna slutsatser.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Gemensamt */}
      <div className="mb-6 mt-10 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
        Gemensamt f&ouml;r b&aring;da proven
      </div>

      <Section title="S&aring; h&auml;r bed&ouml;ms du">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          B&aring;da proven bed&ouml;ms med betyg fr&aring;n <strong>F</strong> till{" "}
          <strong>A</strong>. L&auml;raren anv&auml;nder en analytisk
          bed&ouml;mningsmatris.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Muntlig del (A)</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Inneh&aring;ll och relevans</li>
                <li>&bull; Disposition och struktur</li>
                <li>&bull; Spr&aring;k och stil</li>
                <li>&bull; Framf&ouml;rande och kontakt med publiken</li>
                <li>&bull; Anpassning till syfte och situation</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">L&auml;sdel (B)</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Texttolkning och f&ouml;rst&aring;else</li>
                <li>&bull; Analys av spr&aring;kliga verkningsmedel</li>
                <li>&bull; F&ouml;rm&aring;ga att j&auml;mf&ouml;ra och relatera</li>
                <li>&bull; Litteraturvetenskapliga begrepp (Sv 3)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Skrivdel (C) &ndash; Svenska 1</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Textens inneh&aring;ll och relevans</li>
                <li>&bull; Struktur och disposition</li>
                <li>&bull; Spr&aring;klig kvalitet och variation</li>
                <li>&bull; Anpassning till utredande texttyp</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Skrivdel (C) &ndash; Svenska 3</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Sammanst&auml;llning av k&auml;llmaterial</li>
                <li>&bull; Saklighet och objektivitet</li>
                <li>&bull; K&auml;llhantering och referatteknik</li>
                <li>&bull; Egna slutsatser och sj&auml;lvst&auml;ndighet</li>
                <li>&bull; Spr&aring;klig korrekthet och vetenskaplig stil</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Texttyper du beh&ouml;ver kunna">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">Utredande text (Svenska 1)</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En text d&auml;r du unders&ouml;ker en fr&aring;ga fr&aring;n
                flera sidor. Strukturen: inledning med fr&aring;gest&auml;llning,
                olika perspektiv, och sammanfattande avslutning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">PM (Svenska 3)</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En utredande text baserad p&aring; k&auml;llmaterial med
                inledning, utredande del, avslutning med egna slutsatser
                och k&auml;llf&ouml;rteckning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">Retorisk analys</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Analysera tal eller argumenterande text utifr&aring;n
                ethos, pathos, logos och retoriska stilfigurer.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">Litteraturanalys</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Analysera sk&ouml;nlitteratur utifr&aring;n tema, motiv,
                ber&auml;ttarperspektiv, symbolik och historisk kontext.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="F&ouml;rbered dig &ndash; strategier">
        <div className="space-y-4">
          <SubSection title="Muntlig framst&auml;llning (Delprov A)">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>&bull; Strukturera talet med tydlig inledning, huvuddel och avslutning.</li>
                  <li>&bull; Anv&auml;nd retoriska grepp medvetet: retoriska fr&aring;gor, tretal, anekdoter.</li>
                  <li>&bull; &Ouml;va p&aring; att tala fritt fr&aring;n st&ouml;dord.</li>
                  <li>&bull; F&ouml;r Svenska 3: f&ouml;rbered dig p&aring; att h&auml;nvisa till k&auml;llor muntligt.</li>
                </ul>
              </CardContent>
            </Card>
          </SubSection>

          <SubSection title="Skrivande (Delprov C)">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Svenska 1 &ndash; Utredande text:
                </p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>&bull; Formulera en tydlig fr&aring;gest&auml;llning.</li>
                  <li>&bull; Belys fr&aring;gan fr&aring;n minst tv&aring; sidor.</li>
                  <li>&bull; Anv&auml;nd sambandsord.</li>
                  <li>&bull; Avsluta med en sammanfattning.</li>
                </ul>

                <p className="mb-3 mt-6 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Svenska 3 &ndash; PM:
                </p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>&bull; <strong>Inledning:</strong> Presentera &auml;mnet och formulera fr&aring;gest&auml;llning.</li>
                  <li>&bull; <strong>Utredande del:</strong> Sammanst&auml;ll k&auml;llorna &ndash; referera, j&auml;mf&ouml;r och analysera.</li>
                  <li>&bull; <strong>K&auml;llhantering:</strong> Anv&auml;nd korrekt referatteknik.</li>
                  <li>&bull; <strong>Avslutning:</strong> Formulera egna slutsatser baserade p&aring; k&auml;llorna.</li>
                  <li>&bull; <strong>K&auml;llf&ouml;rteckning:</strong> Lista alla k&auml;llor i alfabetisk ordning.</li>
                </ul>

                <Warning>
                  Det vanligaste misstaget i PM-skrivande &auml;r att
                  &aring;terge k&auml;llorna en i taget utan att j&auml;mf&ouml;ra
                  dem. Sammanst&auml;ll &ndash; l&aring;t k&auml;llorna
                  &ldquo;prata med varandra&rdquo; i din text.
                </Warning>
              </CardContent>
            </Card>
          </SubSection>
        </div>
      </Section>

      <Section title="Vanliga fr&aring;gor">
        <div className="space-y-4">
          {[
            {
              q: "Hur l\u00e5ng tid har jag p\u00e5 mig?",
              a: "Tiderna varierar. Du f\u00e5r god tid p\u00e5 dig f\u00f6r b\u00e5de l\u00e4sdelen och skrivdelen. Din l\u00e4rare meddelar exakta tider inf\u00f6r provet.",
            },
            {
              q: "F\u00e5r jag anv\u00e4nda hj\u00e4lpmedel?",
              a: "P\u00e5 skrivdelen f\u00e5r du normalt anv\u00e4nda ordlista. I Svenska 3 f\u00e5r du k\u00e4llmaterialet. Inga otill\u00e5tna hj\u00e4lpmedel som internet eller AI-verktyg.",
            },
            {
              q: "Hur p\u00e5verkar provet betyget?",
              a: "Provresultatet ska s\u00e4rskilt beaktas vid betygss\u00e4ttningen. Det \u00e4r ett tungt underlag men inte det enda.",
            },
            {
              q: "Vad \u00e4r skillnaden mellan utredande text och PM?",
              a: "B\u00e5da \u00e4r utredande, men ett PM \u00e4r baserat p\u00e5 k\u00e4llmaterial som du m\u00e5ste referera till korrekt.",
            },
          ].map((faq) => (
            <Card key={faq.q}>
              <CardHeader className="flex-row items-start gap-3 pb-2">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400" />
                <CardTitle className="text-base">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent className="pl-14">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Larardel */}
      <div className="mb-6 mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <Users className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            F&ouml;r l&auml;rare
          </h2>
        </div>
      </div>

      <Section title="Genomf&ouml;rande">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Proven genomf&ouml;rs p&aring; av Skolverket fastst&auml;llda datum.
          Delprov A (tala) genomf&ouml;rs vanligtvis under en l&auml;ngre
          period f&ouml;re de skriftliga proven. F&ouml;r Svenska 3, delprov C
          (PM), delas k&auml;llmaterialet ut enligt Skolverkets anvisningar.
        </p>
      </Section>

      <Section title="Bed&ouml;mning">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Bed&ouml;mningen &auml;r analytisk och g&ouml;rs utifr&aring;n
          Skolverkets bed&ouml;mningsmatriser. Sambed&ouml;mning &auml;r
          s&auml;rskilt viktig p&aring; gymnasieniv&aring;. S&auml;rskild
          uppm&auml;rksamhet b&ouml;r ges &aring;t k&auml;llhantering och
          referatteknik i Svenska 3.
        </p>
      </Section>

      <Section title="Resultatrapportering">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Resultaten rapporteras till Skolverket p&aring; delprovs- och
          helhetsniv&aring;. Provresultatet ska s&auml;rskilt beaktas vid
          betygss&auml;ttning. Avvikelser mellan provbetyg och kursbetyg ska
          kunna motiveras.
        </p>
      </Section>
    </>
  );
}
