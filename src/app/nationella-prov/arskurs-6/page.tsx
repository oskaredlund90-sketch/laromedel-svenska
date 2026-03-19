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
  title: "Nationella prov \u2013 \u00c5rskurs 6",
  description:
    "Allt om nationella provet i svenska f\u00f6r \u00e5rskurs 6. Delprov, bed\u00f6mning, texttyper och f\u00f6rberedelsetips.",
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

export default function Arskurs6Page() {
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
          <Badge variant="secondary">Mellanstadiet</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Nationella prov &ndash; &Aring;rskurs 6
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          I &aring;rskurs 6 g&ouml;r du nationella prov i svenska f&ouml;r
          f&ouml;rsta g&aring;ngen med betygsbedömning. H&auml;r f&aring;r du
          veta vad som ing&aring;r och hur du f&ouml;rbereder dig.
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

      {/* 2. Delprov */}
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

      {/* 3. Så här bedöms du */}
      <Section title="S&aring; h&auml;r bed&ouml;ms du">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          I &aring;rskurs 6 bed&ouml;ms du med betyg fr&aring;n <strong>E</strong> till{" "}
          <strong>A</strong>. L&auml;raren anv&auml;nder en bed&ouml;mningsmatris
          f&ouml;r varje delprov. H&auml;r &auml;r vad som bed&ouml;ms i
          elevv&auml;nliga termer:
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Tala (A)</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Att du pratar tydligt och sammanhängande</li>
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
        <Tip>
          <strong>E</strong> betyder att du n&aring;r grundl&auml;ggande kunskapskrav.{" "}
          <strong>C</strong> &auml;r goda kunskaper och <strong>A</strong> &auml;r
          mycket goda kunskaper. F&ouml;r <strong>A</strong> kr&auml;vs att du
          skriver och l&auml;ser med god kvalitet och visar sj&auml;lvst&auml;ndighet.
        </Tip>
      </Section>

      {/* 4. Texttyper */}
      <Section title="Texttyper du beh&ouml;ver kunna">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                Ber&auml;ttande text
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En ber&auml;ttelse med tydlig handling, gestaltning och
                personbeskrivningar. H&auml;r f&ouml;rv&auml;ntas du anv&auml;nda
                milj&ouml;- och personbeskrivningar, dialog och en tydlig
                ber&auml;ttarkurva med inledning, komplikation och avslutning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                Argumenterande text
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En text d&auml;r du tar st&auml;llning i en fr&aring;ga och
                f&ouml;rs&ouml;ker &ouml;vertyga l&auml;saren. Vanliga format
                &auml;r ins&auml;ndare eller debattartikel. Texten ska ha en
                tydlig tes, argument och en avslutande sammanfattning.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 5. Förbered dig */}
      <Section title="F&ouml;rbered dig &ndash; tips f&ouml;r varje delprov">
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Tips f&ouml;r delprov A (tala)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; F&ouml;rbered din presentation med stödord p&aring; ett papper &ndash; l&auml;s inte innantill.</li>
                <li>&bull; &Ouml;va hemma inf&ouml;r en familjemedlem eller framf&ouml;r spegeln.</li>
                <li>&bull; Titta p&aring; dem du pratar med.</li>
                <li>&bull; I samtalet: lyssna p&aring; andra, st&auml;ll f&ouml;ljdfr&aring;gor och visa att du &auml;r intresserad.</li>
              </ul>
              <Tip>
                Det &auml;r helt normalt att vara nerv&ouml;s. Ta ett djupt
                andetag innan du b&ouml;rjar. Din l&auml;rare vet att det kan
                vara p&aring;frestande.
              </Tip>
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
              <Tip>
                Tr&auml;na l&auml;sstrategier: f&ouml;ruts&auml;g vad texten
                handlar om, st&auml;ll fr&aring;gor till texten medan du
                l&auml;ser och sammanfatta i huvudet efter varje stycke.
              </Tip>
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

      {/* 6. Vanliga frågor */}
      <Section title="Vanliga fr&aring;gor">
        <div className="space-y-4">
          {[
            {
              q: "Hur l\u00e5ng tid har jag p\u00e5 mig?",
              a: "L\u00e4sdelen tar ungef\u00e4r 80 minuter och skrivdelen ungef\u00e4r 100 minuter. Taldelen varierar beroende p\u00e5 gruppstorlek. Du f\u00e5r veta exakta tider av din l\u00e4rare.",
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
            {
              q: "Skriver jag f\u00f6r hand eller p\u00e5 dator?",
              a: "Det varierar mellan skolor. Oftast skrivs skrivdelen f\u00f6r hand, men vissa skolor anv\u00e4nder dator. Fr\u00e5ga din l\u00e4rare.",
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
                <span>Sov ordentligt. En utvilad hj&auml;rna presterar b&auml;ttre.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#127828;</span>
                <span>&Auml;t frukost och ta med vattenflaska.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#9999;&#65039;</span>
                <span>Packa pennor, suddgummi och eventuell ordlista kv&auml;llen innan.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#128218;</span>
                <span>L&auml;s g&auml;rna n&aring;got p&aring; kv&auml;llen &ndash; inte f&ouml;r att &ldquo;plugga&rdquo;, utan f&ouml;r att h&aring;lla l&auml;sningen ig&aring;ng.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#128170;</span>
                <span>P&aring;minn dig sj&auml;lv: du har &ouml;vat p&aring; det h&auml;r hela &aring;ret!</span>
              </li>
            </ul>
          </CardContent>
        </Card>
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
    </div>
  );
}
