import { notFound } from "next/navigation";
import { Eye, Lightbulb, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { getLasstrategiExercises } from "@/lib/data/lasstrategier-ovningar";
import { LasstrategierOvningar } from "@/components/lasstrategier-ovningar";

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

function StrategyCard({
  name,
  description,
  example,
  color,
}: {
  name: string;
  description: string;
  example: string;
  color: string;
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className={`absolute left-0 top-0 h-full w-1 ${color}`} />
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800/50">
          <p className="text-sm italic text-neutral-700 dark:text-neutral-300">
            <strong className="not-italic">Exempel:</strong> {example}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Strategy data per age group                                        */
/* ------------------------------------------------------------------ */

const LAGSTADIET_STRATEGIES = [
  {
    name: "Förutsäga",
    description:
      "Innan du börjar läsa tittar du på bilder, rubriker och omslaget. Sedan gissar du vad texten handlar om. Det gör dig nyfiken och redo att läsa!",
    example:
      "Du ser en bok med en bild på en drake. Du gissar: 'Den här boken handlar nog om en drake som kan flyga!'",
    color: "bg-sky-400",
  },
  {
    name: "Visualisera",
    description:
      "Medan du läser skapar du bilder i huvudet. Du föreställer dig hur platser, personer och händelser ser ut. Det är som en film i ditt huvud!",
    example:
      "Du läser om en mörk skog och föreställer dig stora träd, mossa på marken och en uggla som hoar.",
    color: "bg-emerald-400",
  },
  {
    name: "Sammanfatta",
    description:
      "När du har läst klart berättar du kort vad texten handlade om. Du väljer det viktigaste och berättar med egna ord.",
    example:
      "Efter att ha läst en saga säger du: 'Boken handlade om en katt som rymde hemifrån men sedan hittade tillbaka.'",
    color: "bg-amber-400",
  },
];

const MELLANSTADIET_STRATEGIES = [
  ...LAGSTADIET_STRATEGIES,
  {
    name: "Ställa frågor",
    description:
      "Medan du läser ställer du frågor till texten: Varför gör karaktären så? Vad betyder det här ordet? Vad är det viktigaste? Frågorna hjälper dig tänka aktivt.",
    example:
      "Du läser om en pojke som ljuger för sin kompis och tänker: 'Varför ljuger han? Vad kommer hända när kompisen får reda på sanningen?'",
    color: "bg-violet-400",
  },
  {
    name: "Koppla till egna erfarenheter",
    description:
      "Du jämför det du läser med saker du själv har upplevt. Det hjälper dig förstå texten bättre och leva dig in i berättelsen.",
    example:
      "Du läser om någon som är nervös inför ett prov och tänker: 'Jag vet precis hur det känns! Jag var jättenervös inför matteprovet förra veckan.'",
    color: "bg-rose-400",
  },
];

const HOGSTADIET_STRATEGIES = [
  {
    name: "Förutsäga",
    description:
      "Använd ledtrådar i rubriker, bilder och textens inledning för att förutsäga vad som kommer hända eller vad texten kommer handla om. Kontrollera sedan dina förutsägelser medan du läser.",
    example:
      "Rubriken är 'Klimatförändringar hotar Arktis'. Du förutsäger att texten kommer ta upp issmelting, hotade djurarter och temperaturhöjningar.",
    color: "bg-sky-400",
  },
  {
    name: "Visualisera",
    description:
      "Skapa levande inre bilder av det du läser. Föreställ dig inte bara hur saker ser ut, utan även ljud, dofter och känslor. Det är särskilt viktigt i skönlitterära texter.",
    example:
      "I en novell beskrivs ett stormigt hav. Du föreställer dig vågornas brus, saltstänket och den kalla vinden.",
    color: "bg-emerald-400",
  },
  {
    name: "Stäla frågor",
    description:
      "Ställ kritiska frågor till texten: Varför? Hur? Vad menar författaren? Stämmer det här? Frågorna håller dig aktiv och hjälper dig nå djupare förståelse.",
    example:
      "Du läser en nyhetsartikel och frågar dig: 'Vilka källor bygger artikeln på? Finns det andra perspektiv?'",
    color: "bg-violet-400",
  },
  {
    name: "Sammanfatta",
    description:
      "Välj ut det viktigaste från texten och formulera det med egna ord. En bra sammanfattning är kortare än originaltexten men fångar huvudpoängen.",
    example:
      "Efter att ha läst ett kapitel om franska revolutionen skriver du: 'Kapitlet handlade om hur ekonomisk kris och ojämlikhet ledde till revolution 1789.'",
    color: "bg-amber-400",
  },
  {
    name: "Övervaka förståelse",
    description:
      "Stanna upp regelbundet och fråga dig: Förstår jag det jag läser? Om inte, läs om stycket, slå upp ord eller be om hjälp. Det är en metakognitiv strategi som gör dig till en bättre läsare.",
    example:
      "Du läser en text om fotosyntes och inser att du inte förstår vad 'kloroplaster' betyder. Du stannar upp och slår upp ordet innan du fortsätter.",
    color: "bg-rose-400",
  },
  {
    name: "Koppla till egna erfarenheter",
    description:
      "Relatera texten till ditt eget liv, andra texter du läst eller saker du vet om världen. Dessa kopplingar fördjupar din förståelse.",
    example:
      "Du läser en novell om ensamhet och tänker på en period då du själv kände dig utanför. Det hjälper dig förstå karaktärens känslor.",
    color: "bg-orange-400",
  },
];

const GYMNASIET_STRATEGIES = [
  ...HOGSTADIET_STRATEGIES,
  {
    name: "Syntetisera",
    description:
      "Kombinera information från flera olika källor och skapa en ny helhetsbild. Det handlar om att se samband, jämföra perspektiv och dra egna slutsatser baserade på flera texter.",
    example:
      "Du läser tre artiklar om AI i skolan — en positiv, en kritisk och en forskningsrapport. Du väver ihop informationen och formulerar din egen ståndpunkt.",
    color: "bg-cyan-400",
  },
  {
    name: "Kritisk granskning",
    description:
      "Ifrågasätt textens trovärdighet: Vem är avsändaren? Vad är syftet? Vilka källor används? Finns det dolda antaganden eller perspektiv som saknas? Kritisk granskning är central i akademisk läsning.",
    example:
      "En debattartikel hävdar att 'alla forskare är överens'. Du granskar källorna och upptäcker att artikeln bara refererar till en enda studie.",
    color: "bg-pink-400",
  },
];

/* ------------------------------------------------------------------ */
/*  Level descriptions                                                 */
/* ------------------------------------------------------------------ */

const LEVEL_DESCRIPTIONS: Record<string, string> = {
  lagstadiet:
    "Lär dig tre viktiga lässtrategier som hjälper dig förstå och njuta av det du läser: förutsäga, visualisera och sammanfatta.",
  mellanstadiet:
    "Fem lässtrategier som gör dig till en bättre och mer aktiv läsare. Lär dig ställa frågor till texten och koppla den till ditt eget liv.",
  hogstadiet:
    "Lässtrategier för olika texttyper — från skönlitteratur till faktatext. Lär dig övervaka din förståelse och läsa kritiskt.",
  gymnasiet:
    "Avancerade lässtrategier för akademiska texter, kritisk granskning och syntes av flera källor. Förbered dig för högre studier.",
};

/* ------------------------------------------------------------------ */
/*  Content per age group                                              */
/* ------------------------------------------------------------------ */

function LagstadietContent() {
  return (
    <>
      <Section title="Tre lässtrategier">
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          En lässtrategi är ett smart knep som hjälper dig förstå det du läser.
          Här lär du dig tre strategier som du kan använda varje gång du läser!
        </p>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
          {LAGSTADIET_STRATEGIES.map((s) => (
            <StrategyCard key={s.name} {...s} />
          ))}
        </div>
      </Section>

      <Tip>
        <strong>Tips!</strong> Innan du börjar läsa en ny bok, titta på omslaget
        och gissa vad boken handlar om. Medan du läser, skapa bilder i huvudet.
        När du läst klart, berätta för en kompis vad boken handlade om!
      </Tip>
    </>
  );
}

function MellanstadietContent() {
  return (
    <>
      <Section title="Fem lässtrategier">
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          Goda läsare använder flera strategier samtidigt. Här lär du dig fem
          strategier som hjälper dig att förstå texter bättre och tänka djupare.
        </p>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {MELLANSTADIET_STRATEGIES.map((s) => (
            <StrategyCard key={s.name} {...s} />
          ))}
        </div>
      </Section>

      <Section title="När använder jag vilken strategi?">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Innan du läser</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  Förutsäga utifrån rubrik och bilder
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  Tänka: Vad vet jag redan om ämnet?
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Medan du läser</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  Visualisera händelser och platser
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  Ställa frågor till texten
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  Förutsäga vad som händer härnäst
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Efter du läst</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  Sammanfatta det viktigaste
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  Koppla till egna erfarenheter
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Tip>
        <strong>Tips!</strong> Prova att använda alla fem strategier nästa gång du
        läser en bok. Börja med att förutsäga, ställ frågor medan du läser, och
        sammanfatta när du är klar. Ju mer du övar, desto naturligare blir det!
      </Tip>
    </>
  );
}

function HogstadietContent() {
  return (
    <>
      <Section title="Lässtrategier för olika texttyper">
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          En god läsare anpassar sina strategier efter vilken sorts text hen läser.
          Skönlitteratur kräver inlevelse och visualisering, medan faktatexter
          kräver att du övervakar din förståelse och ställer kritiska frågor.
        </p>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {HOGSTADIET_STRATEGIES.map((s) => (
            <StrategyCard key={s.name} {...s} />
          ))}
        </div>
      </Section>

      <Section title="Strategier för olika texttyper">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-neutral-500" />
                <CardTitle className="text-base">Skönlitteratur</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                <strong className="text-neutral-800 dark:text-neutral-200">Visualisera</strong> scener, platser och karaktärer. Lev dig in i berättelsen.
              </p>
              <p>
                <strong className="text-neutral-800 dark:text-neutral-200">Förutsäga</strong> vad som ska hända baserat på ledtrådar i texten.
              </p>
              <p>
                <strong className="text-neutral-800 dark:text-neutral-200">Koppla till egna erfarenheter</strong> för att förstå karaktärernas känslor och motiv.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-neutral-500" />
                <CardTitle className="text-base">Faktatext och nyheter</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                <strong className="text-neutral-800 dark:text-neutral-200">Övervaka förståelse</strong> — stanna upp vid okända begrepp och slå upp dem.
              </p>
              <p>
                <strong className="text-neutral-800 dark:text-neutral-200">Ställa frågor</strong> — är informationen trovärdig? Vilka källor används?
              </p>
              <p>
                <strong className="text-neutral-800 dark:text-neutral-200">Sammanfatta</strong> varje avsnitt med egna ord för att befästa det du lärt dig.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Tip>
        <strong>Metakognition:</strong> Att tänka på sitt eget tänkande kallas
        metakognition. När du övervakar din förståelse utövar du metakognition —
        du reflekterar över om du förstår texten och bestämmer vad du ska göra om
        du inte gör det. Det är en av de viktigaste färdigheterna en god läsare
        kan ha.
      </Tip>
    </>
  );
}

function GymnasietContent() {
  return (
    <>
      <Section title="Avancerade lässtrategier">
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          I gymnasiet möter du akademiska texter, vetenskapliga artiklar och
          komplexa argumentationer. Utöver de grundläggande strategierna behöver
          du kunna syntetisera information från flera källor och kritiskt granska
          textens trovärdighet.
        </p>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {GYMNASIET_STRATEGIES.map((s) => (
            <StrategyCard key={s.name} {...s} />
          ))}
        </div>
      </Section>

      <Section title="Akademisk läsning i praktiken">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Att läsa vetenskapliga artiklar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                Vetenskapliga artiklar har en fast struktur: abstrakt, inledning,
                metod, resultat och diskussion. Använd denna struktur som stöd
                för din läsning.
              </p>
              <ol className="list-inside list-decimal space-y-1">
                <li>Läs abstraktet och förutsäg artikelns huvudpoäng</li>
                <li>Ställ frågor: Vad vill forskarna visa? Hur har de gått tillväga?</li>
                <li>Övervaka din förståelse av centrala begrepp och metoder</li>
                <li>Sammanfatta resultaten med egna ord</li>
                <li>Granska kritiskt: Är metoderna tillförlitliga? Stöder data slutsatserna?</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Att syntetisera flera källor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                I uppsatser och fördjupningsarbeten måste du ofta kombinera
                information från många källor. Syntes handlar inte om att bara
                lista vad varje källa säger, utan att väva ihop dem till en ny
                förståelse.
              </p>
              <ol className="list-inside list-decimal space-y-1">
                <li>Identifiera gemensamma teman och centrala frågor</li>
                <li>Jämför och kontrastera olika forskares perspektiv</li>
                <li>Hitta samband och motsättningar mellan källorna</li>
                <li>Formulera din egen slutsats baserad på helhetsbilden</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Kritisk granskning av argumenterande text
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                Alla texter har en avsändare med ett syfte. Kritisk granskning
                innebär att du identifierar och ifrågasätter detta.
              </p>
              <ul className="space-y-1">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  <strong className="text-neutral-800 dark:text-neutral-200">Avsändare:</strong> Vem har skrivit texten? Vilken bakgrund och vilka intressen har hen?
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  <strong className="text-neutral-800 dark:text-neutral-200">Syfte:</strong> Vill texten informera, övertyga, underhålla eller sälja?
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  <strong className="text-neutral-800 dark:text-neutral-200">Bevis:</strong> Vilka belägg och källor anges? Är de trovärdiga?
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  <strong className="text-neutral-800 dark:text-neutral-200">Perspektiv:</strong> Vilka röster saknas? Finns det alternativa tolkningar?
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Tip>
        <strong>Akademisk läsning</strong> skiljer sig från vardagsläsning. Du
        förväntas inte bara förstå vad texten säger utan också kunna analysera
        hur den säger det och varför. Att kombinera lässtrategier med
        källkritiskt tänkande är en nyckelkompetens i högre studier.
      </Tip>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({
    arskurs: g.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Lässtrategier \u2013 ${group.label}`,
    description: `Lässtrategier anpassade för ${group.label.toLowerCase()}.`,
  };
}

export default async function LasstrategierPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;
  const level = arskurs as AgeGroup;
  const exercises = getLasstrategiExercises(level);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Eye className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Lässtrategier
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {LEVEL_DESCRIPTIONS[level]}
        </p>
      </div>

      {/* Age-group-specific content */}
      {level === "lagstadiet" && <LagstadietContent />}
      {level === "mellanstadiet" && <MellanstadietContent />}
      {level === "hogstadiet" && <HogstadietContent />}
      {level === "gymnasiet" && <GymnasietContent />}

      {/* Exercises */}
      {exercises.length > 0 && (
        <div className="mt-12">
          <Section title="Övningar">
            <p className="mb-6 text-neutral-600 dark:text-neutral-400">
              Testa dina kunskaper om lässtrategier med dessa övningar. Välj rätt
              svar och lär dig av förklaringarna.
            </p>
            <LasstrategierOvningar exercises={exercises} />
          </Section>
        </div>
      )}
    </div>
  );
}
