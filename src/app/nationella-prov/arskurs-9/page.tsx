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
  title: "Nationella prov \u2013 \u00c5rskurs 9",
  description:
    "Allt om nationella provet i svenska f\u00f6r \u00e5rskurs 9. Delprov, bed\u00f6mningsmatris, texttyper och strategier f\u00f6r att lyckas.",
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

export default function Arskurs9Page() {
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
          <Badge variant="secondary">H&ouml;gstadiet</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Nationella prov &ndash; &Aring;rskurs 9
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Det nationella provet i &aring;rskurs 9 &auml;r det sista i
          grundskolan. Resultatet spelar en viktig roll f&ouml;r ditt
          slutbetyg. H&auml;r f&aring;r du koll p&aring; vad som g&auml;ller
          och hur du lyckas.
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
          Det nationella provet i &aring;rskurs 9 &auml;r uppbyggt kring ett
          &ouml;vergripande tema som alla texter och uppgifter kretsar kring.
          Provet best&aring;r av tre delprov: tala, l&auml;sa och skriva.
          Delprov A (muntlig framst&auml;llning) genomf&ouml;rs under
          h&ouml;stterminen, medan delprov B och C genomf&ouml;rs p&aring;
          fastlagda provdatum i mars. Provresultatet &auml;r ett viktigt
          underlag n&auml;r din l&auml;rare s&auml;tter ditt slutbetyg i svenska.
        </p>
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
                <CardTitle className="text-base">Tala &ndash; Muntlig framst&auml;llning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du h&aring;ller ett f&ouml;rberett anf&ouml;rande och deltar
                sedan i en gruppdiskussion. I anf&ouml;randet ska du kunna
                anpassa dig till syfte och mottagare &ndash; du ska inte bara
                ber&auml;tta, utan ocks&aring; &ouml;vertyga, f&ouml;rklara
                eller argumentera beroende p&aring; uppgiften. I diskussionen
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
              <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                Du f&aring;r ett texth&auml;fte med texter kopplade till
                &aring;rets tema &ndash; sk&ouml;nlitteratur, sakprosatexter
                och bilder. F&ouml;rst l&auml;ser du texterna p&aring; egen
                hand i <strong>45&ndash;60 minuter</strong> utan tillg&aring;ng
                till uppgifterna. D&auml;refter har du{" "}
                <strong>140 minuter</strong> p&aring; dig att besvara{" "}
                <strong>35 uppgifter</strong>.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Det finns tv&aring; typer av uppgifter:{" "}
                <strong>flervalsuppgifter</strong> (kryssa f&ouml;r r&auml;tt
                alternativ &ndash; bara ett kryss per fr&aring;ga!) och{" "}
                <strong>&ouml;ppna uppgifter</strong> (svara med egna ord
                &ndash; ibland r&auml;cker ett ord, ibland beh&ouml;ver du
                formulera egna meningar).
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
              <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                Du f&aring;r v&auml;lja <strong>en av tre
                skrivuppgifter</strong>. Varje uppgift har en tydlig
                instruktion uppbyggd i tre stycken:
              </p>
              <ul className="mb-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; <strong>Stycke 1</strong> &ndash; Inspiration: en ing&aring;ng till &auml;mnet</li>
                <li>&bull; <strong>Stycke 2</strong> &ndash; Sammanhang: var texten &auml;r t&auml;nkt att publiceras</li>
                <li>&bull; <strong>Stycke 3</strong> &ndash; Sj&auml;lva uppgiften: de fetstilta orden talar om vad du m&aring;ste g&ouml;ra. Texttypen st&aring;r i <em>kursiv stil</em>.</li>
              </ul>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Texttypen kan vara t.ex. <em>kr&ouml;nika</em>,{" "}
                <em>debattartikel</em>, <em>ins&auml;ndare</em> eller{" "}
                <em>argumenterande text</em>. Du ska anv&auml;nda den rubrik
                som anges i instruktionen. En av uppgifterna kr&auml;ver att
                du anv&auml;nder k&auml;llor &ndash; d&aring; beh&ouml;ver du
                kunna g&ouml;ra k&auml;llh&auml;nvisningar.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 3. Så här bedöms du */}
      <Section title="S&aring; h&auml;r bed&ouml;ms du">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Varje delprov bed&ouml;ms med en matris fr&aring;n <strong>F</strong> till{" "}
          <strong>A</strong>. L&auml;raren tittar p&aring; flera aspekter
          samtidigt. H&auml;r &auml;r de viktigaste:
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-1 font-medium text-neutral-900 dark:text-white">Tala (A)</p>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Tydlig struktur i anf&ouml;randet</li>
                <li>&bull; Anpassning till syfte och mottagare</li>
                <li>&bull; Engagerar lyssnarna</li>
                <li>&bull; Bygger vidare p&aring; andras inl&auml;gg i diskussionen</li>
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
                <li>&bull; Motiverar sina tolkningar med textbevis</li>
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
          ska s&auml;rskilt beaktas vid betygss&auml;ttning. Det inneb&auml;r
          att om det finns en skillnad mellan provbetyg och &ouml;vrigt underlag
          m&aring;ste l&auml;raren kunna motivera slutbetyget. Provet &auml;r
          allts&aring; viktigt, men inte det enda som r&auml;knas.
        </Tip>
      </Section>

      {/* 4. Texttyper */}
      <Section title="Texttyper du beh&ouml;ver kunna">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          P&aring; delprov C kan du beh&ouml;va skriva n&aring;gon av dessa texttyper.
          &Ouml;va p&aring; alla &ndash; du vet inte vilka som kommer p&aring; provet.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                Kr&ouml;nika
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En personlig text d&auml;r du utg&aring;r fr&aring;n en
                vardaglig h&auml;ndelse och kopplar den till en st&ouml;rre
                fr&aring;ga. Blanda ber&auml;ttande med reflektion. Anv&auml;nd
                personlig r&ouml;st, humor eller ironi. Avsluta med en
                po&auml;ng.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                Debattartikel / Ins&auml;ndare
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En argumenterande text med tydlig tes, v&auml;lutvecklade
                argument och bem&ouml;tande av motargument. Skriv f&ouml;r en
                t&auml;nkt tidning eller webbplats. Saklig ton med engagemang.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                Argumenterande / utredande text
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En text d&auml;r du argumenterar f&ouml;r en
                st&aring;ndpunkt eller belyser en fr&aring;ga
                fr&aring;n flera sidor. Tydlig tes eller
                fr&aring;gest&auml;llning, utvecklade argument och
                sammanfattande avslutning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                Svarsinl&auml;gg / Reaktion p&aring; en text
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Du l&auml;ser en artikel eller debatttext och skriver ett svar.
                H&auml;r &auml;r det viktigt att referera till k&auml;llan,
                skilja p&aring; andras &aring;sikter och dina egna, och
                anpassa texten f&ouml;r l&auml;sare som inte l&auml;st
                originaltexten.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Begrepp du behöver kunna */}
      <Section title="Begrepp du beh&ouml;ver kunna">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          P&aring; delprov B beh&ouml;ver du f&ouml;rst&aring; dessa begrepp n&auml;r du
          l&auml;ser texterna och svarar p&aring; fr&aring;gorna:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { term: "Budskap", def: "Det f\u00f6rfattaren vill s\u00e4ga eller l\u00e4ra dig med sin text." },
            { term: "Syfte", def: "Varf\u00f6r texten \u00e4r skriven \u2013 vad f\u00f6rfattaren vill uppn\u00e5." },
            { term: "Avs\u00e4ndare", def: "Den som st\u00e5r bakom texten, t.ex. en tidning eller en person." },
            { term: "Perspektiv", def: "Hur en person eller ber\u00e4ttare ser p\u00e5 n\u00e5got." },
            { term: "Huvudid\u00e9", def: "Den viktigaste tanken i en text." },
            { term: "Konflikt", def: "Problem eller mots\u00e4ttning i en text." },
            { term: "Argument", def: "Sk\u00e4l eller bevis f\u00f6r en \u00e5sikt." },
            { term: "Motivera", def: "F\u00f6rklara varf\u00f6r du tycker n\u00e5got och ge exempel." },
            { term: "Symbol", def: "N\u00e5got i texten som st\u00e5r f\u00f6r n\u00e5got annat, t.ex. ett hj\u00e4rta f\u00f6r k\u00e4rlek." },
            { term: "Citat", def: "Exakt \u00e5tergivning av n\u00e5got som st\u00e5r i texten. Anv\u00e4nd citattecken." },
          ].map((item) => (
            <div key={item.term} className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
              <p className="text-sm font-medium text-neutral-900 dark:text-white">{item.term}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.def}</p>
            </div>
          ))}
        </div>

        <Card className="mt-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Bildspr&aring;k</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
              M&aring;nga texter anv&auml;nder bildspr&aring;k. K&auml;nn igen dessa:
            </p>
            <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p><strong>Liknelse</strong> &ndash; En j&auml;mf&ouml;relse d&auml;r
                orden <em>som</em> eller <em>liksom</em> anv&auml;nds.
                T.ex: &ldquo;Snabb som en blixt.&rdquo;</p>
              <p><strong>Metafor</strong> &ndash; En j&auml;mf&ouml;relse <em>utan</em>
                som/liksom, d&auml;r n&aring;got beskrivs som n&aring;got annat.
                T.ex: &ldquo;Han &auml;r en klippa i laget.&rdquo;</p>
            </div>
            <Tip>
              N&auml;r du st&ouml;ter p&aring; bildspr&aring;k i texten &ndash; fundera
              p&aring; <em>varf&ouml;r</em> f&ouml;rfattaren anv&auml;nder det. Vilken
              k&auml;nsla eller bild skapar det? Det &auml;r ofta den typen av
              fr&aring;gor som ger h&ouml;ga po&auml;ng.
            </Tip>
          </CardContent>
        </Card>
      </Section>

      {/* Bedömningsmatris förklarat */}
      <Section title="Vad bed&ouml;maren tittar p&aring; i delprov C">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Din text bed&ouml;ms utifr&aring;n tre aspekter. F&ouml;r varje aspekt
          kan du f&aring; 0&ndash;3 po&auml;ng. H&auml;r &auml;r vad du
          beh&ouml;ver t&auml;nka p&aring; f&ouml;r att n&aring; de h&ouml;gre
          niv&aring;erna:
        </p>
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">1. Inneh&aring;ll</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                Bed&ouml;maren tittar p&aring; <strong>hur v&auml;l du svarar p&aring; uppgiften</strong> och
                om inneh&aring;llet &auml;r anpassat till situationen (mottagare, sammanhang, texttyp).
              </p>
              <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <p><strong>Resonerande text (kr&ouml;nika, debattartikel):</strong></p>
                <ul className="space-y-1 pl-4">
                  <li>&bull; Grundniv&aring;: Du resonerar p&aring; ett enkelt s&auml;tt med n&aring;got exempel.</li>
                  <li>&bull; H&ouml;gre niv&aring;: Du resonerar <em>utvecklat</em> &ndash; tar upp flera perspektiv, f&ouml;rdjupar dina tankar.</li>
                  <li>&bull; H&ouml;gsta niv&aring;: Du resonerar <em>v&auml;lutvecklat och nyanserat</em> &ndash; v&auml;ger f&ouml;r och emot, f&ouml;rdjupar och breddar.</li>
                </ul>
                <p><strong>Ber&auml;ttande text (novell):</strong></p>
                <ul className="space-y-1 pl-4">
                  <li>&bull; Handlingen ska vara trov&auml;rdig &ndash; l&auml;saren m&aring;ste f&ouml;rst&aring; varf&ouml;r saker h&auml;nder.</li>
                  <li>&bull; Anv&auml;nd novellens typiska drag: koncentrerad handling, f&aring; personer, gestaltande beskrivningar.</li>
                  <li>&bull; H&ouml;gre niv&aring;: L&auml;saren kan f&ouml;lja med i och f&ouml;rst&aring; handlingen, k&auml;nslor gestaltas snarare &auml;n ber&auml;ttas.</li>
                </ul>
              </div>
              <Tip>
                <strong>Dina exempel beh&ouml;ver inte vara sj&auml;lvupplevda.</strong> De kan
                vara saker du sett, h&ouml;rt, l&auml;st eller upplevt. Det viktiga &auml;r att
                de passar bra i resonemanget och hj&auml;lper l&auml;saren f&ouml;rst&aring;
                vad du menar.
              </Tip>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">2. Struktur</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                Bed&ouml;maren tittar p&aring; <strong>textens uppbyggnad och textbindning</strong>.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; <strong>Grundniv&aring;:</strong> Texten &auml;r i huvudsak fungerande. Enkel textbindning.</li>
                <li>&bull; <strong>H&ouml;gre niv&aring;:</strong> Texten &auml;r fungerande med utvecklad textbindning &ndash; sambandsord som &ldquo;d&auml;remot&rdquo;, &ldquo;&aring; andra sidan&rdquo;, &ldquo;dock&rdquo;.</li>
                <li>&bull; <strong>H&ouml;gsta niv&aring;:</strong> Texten &auml;r <em>v&auml;l</em> fungerande med v&auml;lutvecklad textbindning. Bra balans mellan textens delar.</li>
              </ul>
              <Tip>
                <strong>Inledning och avslutning r&auml;knas!</strong> En bra inledning som
                skapar intresse och en avslutning som knyter ihop texten lyfter
                strukturbetyget. Anv&auml;nd konsekvent styckeindelning.
              </Tip>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">3. Spr&aring;k och stil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                Bed&ouml;maren tittar p&aring; <strong>ordval, meningsbyggnad och
                spr&aring;klig korrekthet</strong>.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; <strong>Grundniv&aring;:</strong> Viss variation i ordval. Meningsbyggnaden fungerar i huvudsak. F&ouml;ljer spr&aring;kliga normer i huvudsak.</li>
                <li>&bull; <strong>H&ouml;gre niv&aring;:</strong> Varierat och relativt passande ordval. Varierad meningsbyggnad. Stilistiskt s&auml;kra formuleringar finns.</li>
                <li>&bull; <strong>H&ouml;gsta niv&aring;:</strong> Varierat och tr&auml;ffande ordval. Spr&aring;ket &auml;r stilistiskt s&auml;kert. V&auml;l fungerande meningsbyggnad.</li>
              </ul>
              <Tip>
                <strong>Konkreta tips f&ouml;r h&ouml;gre spr&aring;kbetyg:</strong> V&auml;xla
                mellan korta och l&aring;nga meningar. Anv&auml;nd b&aring;de huvudsatser
                och bisatser. V&auml;lj tr&auml;ffande ord ist&auml;llet f&ouml;r generella
                (&ldquo;bra&rdquo; → &ldquo;effektivt&rdquo;, &ldquo;d&aring;lig&rdquo; → &ldquo;bristf&auml;llig&rdquo;).
                Anv&auml;nd g&auml;rna retoriska stilmedel som liknelser och retoriska fr&aring;gor
                i kr&ouml;nikor.
              </Tip>
              <Warning>
                Stavfel och grammatikfel &auml;r inte katastrofalt &ndash; bed&ouml;maren
                tittar p&aring; om felen <em>st&ouml;r f&ouml;rst&aring;elsen</em> av texten.
                Men f&ouml;rs&ouml;k undvika &aring;terkommande fel. L&auml;s igenom
                texten en extra g&aring;ng i slutet!
              </Warning>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Källhänvisning */}
      <Section title="S&aring; g&ouml;r du en k&auml;llh&auml;nvisning">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          En av skrivuppgifterna kr&auml;ver att du anv&auml;nder k&auml;llor.
          D&aring; m&aring;ste du visa varifrån du h&auml;mtat information
          och id&eacute;er. H&auml;r &auml;r de vanligaste s&auml;tten:
        </p>
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">H&auml;nvisa till en tidningsartikel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
                N&auml;mn tidningens namn, datum och f&ouml;rfattarens namn:
              </p>
              <div className="space-y-2 rounded-lg bg-neutral-50 p-3 text-sm italic text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                <p>I Dagens Nyheter 2024-03-15 skriver Anna Svensson om&hellip;</p>
                <p>I artikeln &ldquo;Titel p&aring; artikeln&rdquo; skriver Anna Svensson om&hellip; (Dagens Nyheter, 2024-03-15).</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">H&auml;nvisa till en bok</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
                N&auml;mn f&ouml;rfattarens namn, bokens titel och g&auml;rna utgivnings&aring;ret:
              </p>
              <div className="space-y-2 rounded-lg bg-neutral-50 p-3 text-sm italic text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                <p>Fredrik Backman beskriver i sin roman (En man som heter Ove, 2012) hur&hellip;</p>
                <p>I En man som heter Ove (2012) skildrar Backman&hellip;</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <Tip>
          <strong>Viktigast:</strong> L&auml;saren ska kunna skilja p&aring; vad k&auml;llan s&auml;ger
          och vad du tycker. Referera f&ouml;rst k&auml;llans &aring;sikt, skriv sedan din
          egen kommentar. D&aring; f&aring;r du h&ouml;gre po&auml;ng. Infoga
          k&auml;llh&auml;nvisningen <em>i l&ouml;ptexten</em> &ndash; inte bara i
          en lista i slutet.
        </Tip>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">K&auml;llh&auml;nvisning &ndash; niv&aring;er</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <p><strong>Enklaste niv&aring;n (godtagbar):</strong> Du f&ouml;rs&ouml;ker skilja
                p&aring; egna och andras tankar, t.ex. &ldquo;Hon tycker&rdquo;, &ldquo;I texten
                st&aring;r det&rdquo;. En k&auml;llf&ouml;rteckning i slutet r&auml;cker.</p>
              <p><strong>Mellaniv&aring;:</strong> N&aring;gon uppgift om k&auml;llan (tidningens
                namn, f&ouml;rfattarens namn) finns i l&ouml;ptexten. K&auml;llh&auml;nvisningen
                &auml;r relativt v&auml;l infogad.</p>
              <p><strong>H&ouml;gsta niv&aring;n:</strong> Flera uppgifter om k&auml;llan finns
                smidigt infogade i l&ouml;ptexten (t.ex. artikelns namn + f&ouml;rfattare).
                L&auml;saren stoppas aldrig upp av k&auml;llh&auml;nvisningen.</p>
            </div>
          </CardContent>
        </Card>
        <Warning>
          Skriv aldrig av fr&aring;n k&auml;llan ordagrant utan citattecken.
          &Aring;terber&auml;tta inneh&aring;llet med egna ord och l&auml;gg till dina
          egna tankar och slutsatser.
        </Warning>
      </Section>

      {/* 5. Förbered dig */}
      <Section title="F&ouml;rbered dig &ndash; strategier f&ouml;r att lyckas">
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Delprov A &ndash; Muntlig framst&auml;llning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; Strukturera ditt anf&ouml;rande med inledning, huvuddel och avslutning.</li>
                <li>&bull; Anv&auml;nd stödord &ndash; l&auml;s aldrig innantill.</li>
                <li>&bull; &Ouml;va p&aring; att tala fritt inf&ouml;r andra. Ju mer du &ouml;var, desto s&auml;krare k&auml;nns det.</li>
                <li>&bull; T&auml;nk p&aring; kroppsspr&aring;k: &ouml;gonkontakt, tempo och r&ouml;stl&auml;ge.</li>
                <li>&bull; I diskussionen: lyssna noga, h&auml;nvisa till vad andra sagt och motivera dina &aring;sikter.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Delprov B &ndash; L&auml;sf&ouml;rst&aring;else</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                Steg 1: Innan du svarar p&aring; fr&aring;gorna
              </p>
              <ul className="mb-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; L&auml;s texterna flera g&aring;nger under l&auml;stiden (45&ndash;60 min).</li>
                <li>&bull; <strong>Stryk under</strong> viktiga ord och begrepp.</li>
                <li>&bull; Fundera &ouml;ver texternas inneh&aring;ll och koppling till temat.</li>
                <li>&bull; St&auml;ll fr&aring;gor till texten: <em>Vad? Hur? Vem? N&auml;r? Varf&ouml;r?</em></li>
              </ul>

              <p className="mb-3 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                Steg 2: Strategier f&ouml;r f&ouml;rst&aring;else
              </p>
              <ul className="mb-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; <strong>Sammanfatta:</strong> Punkta ner det viktigaste eller g&ouml;r en tankekarta &ouml;ver textens inneh&aring;ll.</li>
                <li>&bull; <strong>Reda ut oklarheter:</strong> Om du inte f&ouml;rst&aring;r n&aring;got, l&auml;s om och leta efter ledtr&aring;dar i &ouml;vriga delar av texten.</li>
                <li>&bull; <strong>Leta efter sambandsord</strong> som &ldquo;men&rdquo;, &ldquo;&auml;ven om&rdquo;, &ldquo;f&ouml;r att&rdquo; &ndash; de visar hur texten h&auml;nger ihop.</li>
              </ul>

              <p className="mb-3 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                Steg 3: N&auml;r du svarar
              </p>
              <ul className="mb-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; <strong>L&auml;s fr&aring;gorna noga.</strong> Vad fr&aring;gas det verkligen om? Finns det flera led i fr&aring;gan (t.ex. <em>hur</em> och <em>varf&ouml;r</em>)?</li>
                <li>&bull; <strong>Skuml&auml;s texten</strong> efter nyckelord fr&aring;n fr&aring;gan.</li>
                <li>&bull; Kontrollera: Har du svarat p&aring; allt fr&aring;gan undrar om? Har du anv&auml;nt texten som st&ouml;d?</li>
              </ul>

              <p className="mb-3 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                Tips f&ouml;r kryss&shy;fr&aring;gor
              </p>
              <ul className="mb-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; L&auml;s <strong>alla</strong> svarsalternativ noggrant innan du v&auml;ljer.</li>
                <li>&bull; Anv&auml;nd <strong>uteslutnings&shy;teknik</strong>: stryk de alternativ du vet &auml;r fel.</li>
                <li>&bull; J&auml;mf&ouml;r alternativen med texten &ndash; hitta st&ouml;d f&ouml;r det r&auml;tta svaret.</li>
                <li>&bull; Var uppm&auml;rksam p&aring; sm&aring; detaljer: ord som &ldquo;inte&rdquo; eller &ldquo;alltid&rdquo; kan f&ouml;r&auml;ndra fr&aring;gans betydelse.</li>
                <li>&bull; Kryssa <em>bara</em> f&ouml;r <strong>ett</strong> alternativ. Fler &auml;n ett kryss = 0 po&auml;ng.</li>
                <li>&bull; Om du &auml;r os&auml;ker &ndash; g&ouml;r ett val baserat p&aring; vad du minns och f&ouml;rst&aring;r av texten.</li>
              </ul>

              <Tip>
                <strong>&Ouml;ppna uppgifter:</strong> N&auml;r du ska motivera ett svar kr&auml;vs
                det att du ger <strong>tydliga exempel ur texten</strong>. Citera eller
                h&auml;nvisa till specifika stycken. Antalet rader i svarsh&auml;ftet
                visar ungef&auml;r hur mycket du ska skriva.
              </Tip>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Delprov C &ndash; Skriftlig framst&auml;llning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>&bull; <strong>L&auml;s hela uppgiftsinstruktionen noga</strong> innan du b&ouml;rjar skriva.</li>
                <li>&bull; <strong>F&ouml;lj instruktionen:</strong> De <strong>fetstilta orden</strong> talar om exakt vad du m&aring;ste g&ouml;ra (t.ex. <em>Skriv om</em>, <em>Resonera</em>, <em>Ge exempel</em>).</li>
                <li>&bull; <strong>Anv&auml;nd den rubrik</strong> som anges i instruktionen.</li>
                <li>&bull; <strong>T&auml;nk p&aring; vilken texttyp du skriver</strong> &ndash; texttypen st&aring;r i kursiv stil. Kr&ouml;nika, debattartikel och ins&auml;ndare skrivs p&aring; olika s&auml;tt.</li>
                <li>&bull; <strong>T&auml;nk p&aring; mottagaren</strong> och det sammanhang som anges. Skriv s&aring; att ocks&aring; n&aring;gon som inte l&auml;st texterna f&ouml;rst&aring;r.</li>
                <li>&bull; <strong>K&auml;llh&auml;nvisa</strong> om det efterfr&aring;gas &ndash; se sektionen nedan.</li>
                <li>&bull; <strong>Planera:</strong> G&ouml;r en kort disposition innan du b&ouml;rjar skriva.</li>
                <li>&bull; <strong>Spr&aring;k:</strong> Variera meningsbyggnad, anv&auml;nd sambandsord och undvik talspr&aring;k.</li>
              </ul>
              <Warning>
                Tidsplanering &auml;r avg&ouml;rande. Dela upp tiden:
                planering (10 min), skrivande (60&ndash;70 min),
                &ouml;verläsning och redigering (15&ndash;20 min).
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
              a: "Delprov B: 45\u201360 minuter l\u00e4stid + 140 minuter f\u00f6r att besvara uppgifterna. Delprov C: hela skrivpasset (vanligtvis 120\u2013150 minuter). Delprov A (muntlig) varierar. Exakta tider meddelas av din l\u00e4rare.",
            },
            {
              q: "F\u00e5r jag anv\u00e4nda ordlista och andra hj\u00e4lpmedel?",
              a: "P\u00e5 skrivdelen f\u00e5r du normalt anv\u00e4nda ordlista. P\u00e5 l\u00e4sdelen \u00e4r det vanligtvis inga hj\u00e4lpmedel. Kolla med din l\u00e4rare vad som g\u00e4ller p\u00e5 er skola.",
            },
            {
              q: "Vad h\u00e4nder om jag missar provet?",
              a: "Du g\u00f6r provet vid ett annat tillf\u00e4lle. L\u00e4raren har m\u00f6jlighet att ge dig provet vid ett senare datum. Meddela skolan s\u00e5 snart du vet att du inte kan komma.",
            },
            {
              q: "Hur mycket p\u00e5verkar provet mitt slutbetyg?",
              a: "Provresultatet ska \u201ds\u00e4rskilt beaktas\u201d vid betygss\u00e4ttning. Det \u00e4r ett tungt underlag men inte det enda. Om du presterar b\u00e4ttre p\u00e5 provet \u00e4n under terminen, eller tv\u00e4rtom, kan l\u00e4raren \u00e4nd\u00e5 s\u00e4tta ett annat betyg \u2013 men det m\u00e5ste motiveras.",
            },
            {
              q: "Kan jag \u00f6verklaga provresultatet?",
              a: "Du kan inte \u00f6verklaga sj\u00e4lva provresultatet, men du kan \u00f6verklaga ditt slutbetyg till Skolinspektionen om du anser att det \u00e4r felaktigt. Prata f\u00f6rst med din l\u00e4rare.",
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
                <span>Prioritera s&ouml;mnen. En tr&ouml;tt hj&auml;rna skriver s&auml;mre texter.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#127828;</span>
                <span>&Auml;t n&aring;got ordentligt p&aring; morgonen. Ta med vatten och en frukt.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#9999;&#65039;</span>
                <span>Packa allt kv&auml;llen innan: pennor, suddgummi, ordlista, klocka.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#128214;</span>
                <span>L&auml;s g&auml;rna n&aring;got &ndash; inte f&ouml;r att plugga, utan f&ouml;r att k&auml;nna dig bekv&auml;m med text.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-lg">&#129504;</span>
                <span>P&aring;minn dig: du har f&ouml;rberett dig hela &aring;ret. Lita p&aring; det du kan.</span>
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
          Proven genomf&ouml;rs p&aring; Skolverkets fastst&auml;llda datum
          under v&aring;rterminen. Delprov A (tala) genomf&ouml;rs vanligen
          f&ouml;re de skriftliga proven. Proven kr&auml;ver provliknande
          f&ouml;rh&aring;llanden: tyst milj&ouml;, inga mobiltelefoner, och
          inga otill&aring;tna hj&auml;lpmedel. L&auml;raren ansvarar f&ouml;r
          att eleverna &auml;r v&auml;l f&ouml;rberedda p&aring; provformaten
          och vet vad som f&ouml;rv&auml;ntas.
        </p>
      </Section>

      <Section title="Bed&ouml;mning">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Bed&ouml;mningen g&ouml;rs med Skolverkets matriser och
          bed&ouml;mningsanvisningar. Sambed&ouml;mning rekommenderas starkt,
          b&aring;de internt och i n&auml;tverk med andra skolor.
          Bed&ouml;mningen ska vara analytisk &ndash; varje aspekt (inneh&aring;ll,
          struktur, spr&aring;k) bed&ouml;ms separat innan en
          helhetsbed&ouml;mning g&ouml;rs. S&auml;rskild uppm&auml;rksamhet
          b&ouml;r ges &aring;t gr&auml;nsfall mellan betygssteg.
        </p>
      </Section>

      <Section title="Resultatrapportering">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Resultaten rapporteras till Skolverket b&aring;de p&aring;
          delprovsniv&aring; och som ett sammanv&auml;gt provbetyg.
          Provresultatet ska s&auml;rskilt beaktas vid betygss&auml;ttning
          enligt Skolverkets f&ouml;reskrifter. Vid avvikelse mellan provbetyg
          och slutbetyg ska l&auml;raren kunna motivera sitt beslut.
          Resultaten anv&auml;nds &auml;ven f&ouml;r skolans systematiska
          kvalitetsarbete och nationell uppf&ouml;ljning.
        </p>
      </Section>
    </div>
  );
}
