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
  FileText,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nationella prov \u2013 Gymnasiet",
  description:
    "Allt om nationella proven i Svenska 1 och Svenska 3 p\u00e5 gymnasiet. Delprov, PM-skrivande, retorik, litteraturanalys och tips f\u00f6r att lyckas.",
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
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function GymnasietPage() {
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
          <Badge variant="secondary">Gymnasiet</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Nationella prov &ndash; Gymnasiet
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          P&aring; gymnasiet g&ouml;rs nationella prov i Svenska 1 och
          Svenska 3. H&auml;r f&aring;r du en genomg&aring;ng av b&aring;da
          proven med fokus p&aring; vad som kr&auml;vs och hur du
          f&ouml;rbereder dig.
        </p>
      </div>

      {/* ================================================================ */}
      {/*  ELEVDEL                                                          */}
      {/* ================================================================ */}

      <div className="mb-6 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
        F&ouml;r dig som elev
      </div>

      {/* 1. Vad är provet? */}
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

      {/* ================================================================ */}
      {/*  SVENSKA 1                                                        */}
      {/* ================================================================ */}

      <div className="mb-6 mt-10 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
        Svenska 1
      </div>

      {/* 2. Delprov Svenska 1 */}
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
                inledning, huvuddel och avslutning. Du bed&ouml;ms p&aring;
                inneh&aring;ll, struktur, spr&aring;k, framf&ouml;rande och
                anpassning till syfte och mottagare.
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
                f&ouml;rm&aring;ga att tolka, analysera och j&auml;mf&ouml;ra
                texter. Du ska kunna identifiera spr&aring;kliga
                verkningsmedel, tema och budskap.
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
                fr&aring;n flera sidor. Spr&aring;ket ska vara anpassat till
                en utredande texttyp.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ================================================================ */}
      {/*  SVENSKA 3                                                        */}
      {/* ================================================================ */}

      <div className="mb-6 mt-10 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
        Svenska 3
      </div>

      {/* 2. Delprov Svenska 3 */}
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
                vara v&auml;lstrukturerad, ha ett tydligt syfte och visa att du
                kan anv&auml;nda retoriska grepp medvetet. Du ska kunna
                h&auml;nvisa till k&auml;llor och anpassa presentationen till
                mottagaren.
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
                historisk kontext. Analysen ska vara v&auml;lstrukturerad och
                anv&auml;nda relevanta litteraturvetenskapliga begrepp.
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
                Du skriver ett PM (promemoria) baserat p&aring; ett
                k&auml;llmaterial som du f&aring;r. PM:et ska vara utredande,
                sakligt och ha korrekt k&auml;llhantering. Du ska kunna
                sammanst&auml;lla information fr&aring;n flera k&auml;llor,
                j&auml;mf&ouml;ra perspektiv och formulera egna slutsatser.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ================================================================ */}
      {/*  GEMENSAM DEL: Bedömning, texttyper, tips                         */}
      {/* ================================================================ */}

      <div className="mb-6 mt-10 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
        Gemensamt f&ouml;r b&aring;da proven
      </div>

      {/* 3. Bedömning */}
      <Section title="S&aring; h&auml;r bed&ouml;ms du">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          B&aring;da proven bed&ouml;ms med betyg fr&aring;n <strong>F</strong> till{" "}
          <strong>A</strong>. L&auml;raren anv&auml;nder en analytisk
          bed&ouml;mningsmatris som v&auml;rderar flera aspekter separat:
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

      {/* 4. Texttyper */}
      <Section title="Texttyper du beh&ouml;ver kunna">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                Utredande text (Svenska 1)
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En text d&auml;r du unders&ouml;ker en fr&aring;ga fr&aring;n
                flera sidor utan att n&ouml;dv&auml;ndigtvis ta st&auml;llning.
                Strukturen &auml;r typiskt: inledning med fr&aring;gest&auml;llning,
                olika perspektiv med f&ouml;rklaringar och exempel, och en
                sammanfattande avslutning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                PM (Svenska 3)
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En utredande text baserad p&aring; k&auml;llmaterial. PM:et har
                en fast struktur: inledning med syfte/fr&aring;gest&auml;llning,
                utredande del d&auml;r du sammanst&auml;ller och j&auml;mf&ouml;r
                k&auml;llor, avslutning med egna slutsatser, samt en
                k&auml;llf&ouml;rteckning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                Retorisk analys
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Att analysera ett tal eller en argumenterande text utifr&aring;n
                retoriska begrepp: ethos (trov&auml;rdighet), pathos (k&auml;nslor),
                logos (logik), retoriska stilfigurer och hur talaren/skribenten
                anpassar sig till mottagare och situation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                Litteraturanalys
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Att analysera sk&ouml;nlitteratur utifr&aring;n tema, motiv,
                ber&auml;ttarperspektiv, symbolik, spr&aring;kliga drag och
                historisk kontext. I Svenska 3 f&ouml;rv&auml;ntas du kunna
                anv&auml;nda litteraturvetenskapliga begrepp och s&auml;tta in
                verket i ett st&ouml;rre sammanhang.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 5. Förbered dig */}
      <Section title="F&ouml;rbered dig &ndash; strategier">
        <div className="space-y-4">
          <SubSection title="Muntlig framst&auml;llning (Delprov A)">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>&bull; Strukturera talet med tydlig inledning (fånga intresse), huvuddel (2&ndash;3 huvudpunkter) och avslutning (sammanfattning + slutkl&auml;m).</li>
                  <li>&bull; Anv&auml;nd retoriska grepp medvetet: retoriska fr&aring;gor, tretal, anekdoter.</li>
                  <li>&bull; &Ouml;va p&aring; att tala fritt fr&aring;n stödord &ndash; inte manus.</li>
                  <li>&bull; Spela in dig sj&auml;lv och lyssna. Hur l&aring;ter tempot? Varierar du r&ouml;sten?</li>
                  <li>&bull; F&ouml;r Svenska 3: f&ouml;rbered dig p&aring; att h&auml;nvisa till k&auml;llor muntligt.</li>
                </ul>
              </CardContent>
            </Card>
          </SubSection>

          <SubSection title="L&auml;sf&ouml;rst&aring;else och analys (Delprov B)">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>&bull; L&auml;s noga och aktivt &ndash; str&auml;ckl&auml;s, markera och skriv stödord i marginalen.</li>
                  <li>&bull; K&auml;nn till vanliga analysbegrepp: ber&auml;ttarperspektiv (f&ouml;rsta/tredje person), berättarr&ouml;st, symbolik, metafor, ironi, kontrast, tema, motiv.</li>
                  <li>&bull; &Ouml;va p&aring; att koppla inneh&aring;ll till form: <em>vad</em> s&auml;gs och <em>hur</em> s&auml;gs det?</li>
                  <li>&bull; F&ouml;r Svenska 3: kunna relatera texter till litteraturhistoriska epoker och samh&auml;llskontext.</li>
                </ul>
                <Tip>
                  Fr&aring;ga dig: Varf&ouml;r har f&ouml;rfattaren valt just
                  dessa ord, denna struktur, detta perspektiv? Svaret brukar
                  r&auml;cka l&aring;ngt p&aring; provet.
                </Tip>
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
                  <li>&bull; B&ouml;rja med att formulera en tydlig fr&aring;gest&auml;llning.</li>
                  <li>&bull; Belys fr&aring;gan fr&aring;n minst tv&aring; sidor.</li>
                  <li>&bull; Anv&auml;nd sambandsord f&ouml;r att visa hur styckena h&auml;nger ihop.</li>
                  <li>&bull; Avsluta med en sammanfattning d&auml;r du v&auml;ger f&ouml;r och emot.</li>
                </ul>

                <p className="mb-3 mt-6 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Svenska 3 &ndash; PM:
                </p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>&bull; <strong>Inledning:</strong> Presentera &auml;mnet och formulera fr&aring;gest&auml;llning/syfte.</li>
                  <li>&bull; <strong>Utredande del:</strong> Sammanst&auml;ll k&auml;llorna. Referera, j&auml;mf&ouml;r och analysera &ndash; kopiera aldrig.</li>
                  <li>&bull; <strong>K&auml;llhantering:</strong> Anv&auml;nd korrekt referatteknik. Skriv &ldquo;enligt K&auml;lla A...&rdquo; eller &ldquo;K&auml;lla B menar att...&rdquo;. Undvik att bara citera.</li>
                  <li>&bull; <strong>Avslutning:</strong> Formulera egna slutsatser baserade p&aring; k&auml;llorna.</li>
                  <li>&bull; <strong>K&auml;llf&ouml;rteckning:</strong> Lista alla k&auml;llor i alfabetisk ordning.</li>
                </ul>

                <Warning>
                  Det vanligaste misstaget i PM-skrivande &auml;r att
                  &aring;terge k&auml;llorna en i taget utan att j&auml;mf&ouml;ra
                  eller v&auml;va samman dem. Sammanst&auml;ll &ndash; det vill
                  s&auml;ga, l&aring;t k&auml;llorna &ldquo;prata med
                  varandra&rdquo; i din text.
                </Warning>
              </CardContent>
            </Card>
          </SubSection>
        </div>
      </Section>

      {/* 6. Vanliga frågor */}
      <Section title="Vanliga fr&aring;gor">
        <div className="space-y-4">
          {[
            {
              q: "Hur l\u00e5ng tid har jag p\u00e5 mig?",
              a: "Tiderna kan variera fr\u00e5n \u00e5r till \u00e5r. Du f\u00e5r god tid p\u00e5 dig f\u00f6r b\u00e5de l\u00e4sdelen och skrivdelen. Taldelen beror p\u00e5 klass- och gruppstorlek. Din l\u00e4rare meddelar exakta tider inf\u00f6r provet.",
            },
            {
              q: "F\u00e5r jag anv\u00e4nda hj\u00e4lpmedel?",
              a: "P\u00e5 skrivdelen f\u00e5r du normalt anv\u00e4nda ordlista. I Svenska 3 f\u00e5r du k\u00e4llmaterialet som ska anv\u00e4ndas i PM:et. Inga otill\u00e5tna hj\u00e4lpmedel som internet eller AI-verktyg \u00e4r till\u00e5tna. Kolla med din l\u00e4rare.",
            },
            {
              q: "Hur p\u00e5verkar provet betyget?",
              a: "Provresultatet ska s\u00e4rskilt beaktas vid betygss\u00e4ttningen. Det \u00e4r ett tungt underlag men inte det enda. Din l\u00e4rare g\u00f6r en helbed\u00f6mning av allt du presterat under kursen.",
            },
            {
              q: "Vad \u00e4r skillnaden mellan utredande text och PM?",
              a: "B\u00e5da \u00e4r utredande, men ett PM \u00e4r baserat p\u00e5 k\u00e4llmaterial som du m\u00e5ste referera till korrekt. Den utredande texten i Svenska 1 bygger mer p\u00e5 dina egna kunskaper och resonemang.",
            },
            {
              q: "Vad h\u00e4nder om jag missar provet?",
              a: "Kontakta din l\u00e4rare direkt. Det finns m\u00f6jlighet att g\u00f6ra provet vid ett annat tillf\u00e4lle.",
            },
            {
              q: "Beh\u00f6ver jag kunna k\u00e4llf\u00f6rteckning utantill?",
              a: "Du beh\u00f6ver inte memorera exakta formalia, men du ska veta principen: f\u00f6rfattare, titel, \u00e5r, och k\u00e4lltyp. \u00d6va p\u00e5 att skriva en enkel k\u00e4llf\u00f6rteckning s\u00e5 att det sitter.",
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
                <span>Sov ordentligt. Kognitiv prestationsf&ouml;rm&aring;ga sjunker markant vid s&ouml;mnbrist.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#127828;</span>
                <span>&Auml;t frukost. Ta med vatten och n&aring;got att &auml;ta under rasten.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#9999;&#65039;</span>
                <span>Packa: pennor, suddgummi, ordlista, klocka (inte mobil).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#128214;</span>
                <span>G&aring; igenom grundstrukturen f&ouml;r den texttyp du ska skriva &ndash; inte f&ouml;r att plugga, utan f&ouml;r att k&auml;nna dig trygg.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#129504;</span>
                <span>P&aring;minn dig: du har arbetat med det h&auml;r under hela kursen. Provet &auml;r ett tillf&auml;lle att visa vad du kan.</span>
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
          Proven genomf&ouml;rs p&aring; av Skolverket fastst&auml;llda datum.
          Delprov A (tala) genomf&ouml;rs vanligtvis under en l&auml;ngre
          period f&ouml;re de skriftliga proven. Delprov B och C genomf&ouml;rs
          under provdagar med provliknande f&ouml;rh&aring;llanden. F&ouml;r
          Svenska 3, delprov C (PM), delas k&auml;llmaterialet ut enligt
          Skolverkets anvisningar. Se till att eleverna &auml;r bekanta med
          texttypen och eventuella hj&auml;lpmedelsregler i f&ouml;rv&auml;g.
        </p>
      </Section>

      <Section title="Bed&ouml;mning">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Bed&ouml;mningen &auml;r analytisk och g&ouml;rs utifr&aring;n
          Skolverkets bed&ouml;mningsmatriser. Sambed&ouml;mning &auml;r
          s&auml;rskilt viktig p&aring; gymnasieniv&aring; f&ouml;r att
          s&auml;kerst&auml;lla likv&auml;rdig bed&ouml;mning &ndash; b&aring;de
          internt p&aring; skolan och i n&auml;tverk med andra skolor.
          S&auml;rskild uppm&auml;rksamhet b&ouml;r ges &aring;t
          k&auml;llhantering och referatteknik i Svenska 3.
        </p>
      </Section>

      <Section title="Resultatrapportering">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Resultaten rapporteras till Skolverket p&aring; delprovs- och
          helhetsniv&aring;. Provresultatet ska s&auml;rskilt beaktas vid
          betygss&auml;ttning. Avvikelser mellan provbetyg och kursbetyg ska
          kunna motiveras av undervisande l&auml;rare. Resultaten anv&auml;nds
          &auml;ven som underlag f&ouml;r skolans och huvudmannens
          kvalitetsarbete.
        </p>
      </Section>
    </div>
  );
}
