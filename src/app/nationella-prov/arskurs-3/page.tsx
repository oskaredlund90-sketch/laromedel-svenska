import Link from "next/link";
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
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nationella prov \u2013 \u00c5rskurs 3",
  description:
    "Allt om nationella provet i svenska f\u00f6r \u00e5rskurs 3. L\u00e4s om delproven, hur du bed\u00f6ms och f\u00e5 tips inf\u00f6r provet.",
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
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Arskurs3Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Back link */}
      <Link
        href="/nationella-prov"
        className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Alla nationella prov
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <ClipboardCheck className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
          </div>
          <Badge variant="secondary">L&aring;gstadiet</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Nationella prov &ndash; &Aring;rskurs 3
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          H&auml;r f&aring;r du veta allt om nationella provet i svenska f&ouml;r
          &aring;rskurs 3. Vad du ska g&ouml;ra, hur det g&aring;r till och hur
          du kan f&ouml;rbereda dig.
        </p>
      </div>

      {/* ================================================================ */}
      {/*  ELEVDEL                                                          */}
      {/* ================================================================ */}

      <div className="mb-6 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
        F&ouml;r dig som elev
      </div>

      {/* 1. Vad är provet? */}
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

      {/* 2. Delprov */}
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

      {/* 3. Så här bedöms du */}
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

      {/* 4. Texttyper */}
      <Section title="Texttyper du beh&ouml;ver kunna">
        <Card>
          <CardContent className="pt-6">
            <p className="mb-2 font-medium text-neutral-900 dark:text-white">
              Ber&auml;ttande text
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              En ber&auml;ttande text &auml;r en text d&auml;r du hitter p&aring;
              n&aring;got eller ber&auml;ttar om n&aring;got som h&auml;nt. Det
              kan vara en saga, en ber&auml;ttelse eller en &aring;terber&auml;ttelse.
              Det viktiga &auml;r att texten har en <strong>b&ouml;rjan</strong>{" "}
              (vad h&auml;nder f&ouml;rst?), en <strong>mitt</strong> (vad
              h&auml;nder sen?) och ett <strong>slut</strong> (hur slutar det?).
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* 5. Förbered dig */}
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

      {/* 6. Vanliga frågor */}
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

      {/* 7. Dagen före provet */}
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

      {/* ================================================================ */}
      {/*  LÄRARDEL                                                         */}
      {/* ================================================================ */}

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
    </div>
  );
}
