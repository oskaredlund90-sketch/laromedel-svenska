import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Lightbulb, BookText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { getLittBegreppExercises } from "@/lib/data/litteraturbegrepp-ovningar";
import { LitteraturbegreppOvningar } from "@/components/litteraturbegrepp-ovningar";

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

function ConceptCard({
  title,
  description,
  example,
  tip,
}: {
  title: string;
  description: string;
  example: string;
  tip?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Exempel
          </p>
          <p className="mt-1 text-sm italic text-neutral-700 dark:text-neutral-300">
            {example}
          </p>
        </div>
        {tip && (
          <Tip>
            <strong>Tips:</strong> {tip}
          </Tip>
        )}
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Högstadiet concepts                                                */
/* ------------------------------------------------------------------ */

const HOGSTADIET_CONCEPTS = [
  {
    title: "Berättarperspektiv",
    description:
      "Berättarperspektivet avgör vem som berättar historien och hur mycket läsaren får veta. En jag-berättare deltar själv i handlingen. En allvetande berättare kan se in i alla karaktärers tankar. Perspektivet påverkar hur nära vi kommer karaktärerna.",
    example:
      "Jag-berättare: 'Jag visste inte vad som väntade mig bakom dörren.' — Allvetande: 'Ingen av dem anade vad den andre tänkte.'",
    tip: "Fråga dig: Vem berättar? Hur mycket vet berättaren? Kan berättaren ljuga?",
  },
  {
    title: "Tema",
    description:
      "Temat är textens övergripande budskap eller den stora fråga som texten handlar om. Det är sällan uttalat direkt utan framgår genom handlingen, karaktärerna och konflikterna. Vanliga teman: kärlek, ensamhet, rättvisa, identitet.",
    example:
      "I en berättelse där en flicka flyr från krig och försöker hitta ett nytt hem kan temat vara tillhörighet eller överlevnad.",
    tip: "Tema svarar på frågan: Vad handlar texten egentligen om — på djupet?",
  },
  {
    title: "Motiv",
    description:
      "Ett motiv är ett återkommande element i texten — en bild, situation eller händelse — som bidrar till att bygga upp temat. Vanliga motiv: resan, stormen, mörkret, spegeln.",
    example:
      "I en roman där huvudpersonen gång på gång drömmer om att flyga är flygandet ett motiv som speglar temat frihet.",
  },
  {
    title: "Metafor",
    description:
      "En metafor är en jämförelse utan jämförelseord som 'som' eller 'liksom'. Istället säger man att något ÄR något annat. Metaforen skapar nya betydelser genom att överföra egenskaper från en sak till en annan.",
    example:
      "'Tiden är pengar' — tiden jämförs med pengar utan ordet 'som'. 'Havet av sorg' — sorgen beskrivs som ett hav.",
    tip: "Saknas 'som' eller 'liksom' i jämförelsen? Då är det en metafor!",
  },
  {
    title: "Liknelse",
    description:
      "En liknelse är en jämförelse som använder jämförelseord: 'som', 'liksom', 'likt'. Den gör det tydligt att två saker jämförs, till skillnad från metaforen som gör det mer dolt.",
    example:
      "'Han var stark som ett lejon.' 'Hennes röst ljöd som en klocka i natten.'",
  },
  {
    title: "Ironi",
    description:
      "Ironi innebär att det finns en skillnad mellan det som sägs och det som menas. Verbal ironi: man säger motsatsen till vad man menar. Dramatisk ironi: läsaren vet mer än karaktären.",
    example:
      "Verbal ironi: 'Vilken underbar dag!' (när allt har gått fel). Dramatisk ironi: Läsaren vet att brevet aldrig skickades, men karaktären väntar på svar.",
    tip: "Ironi handlar om kontrast — leta efter glappet mellan ord och verklighet.",
  },
  {
    title: "Symbol",
    description:
      "En symbol är ett konkret föremål, en bild eller en handling som representerar något abstrakt. Symboler kan vara universella (ljus = hopp) eller unika för en viss text.",
    example:
      "En stängd dörr kan symbolisera utstängning eller hemligheter. En röd ros symboliserar ofta kärlek.",
    tip: "Om ett föremål nämns upprepade gånger och verkar betyda mer än det bokstavliga — kan det vara en symbol.",
  },
];

/* ------------------------------------------------------------------ */
/*  Gymnasiet: deeper concepts (includes advanced ones)                */
/* ------------------------------------------------------------------ */

const GYMNASIET_CONCEPTS = [
  {
    title: "Berättarperspektiv och fokalisering",
    description:
      "Fokalisering handlar om genom vems medvetande berättelsen filtreras. Narratologen Gérard Genette skiljer mellan intern fokalisering (vi upplever genom en karaktärs sinne), extern fokalisering (vi ser bara yttre handlingar) och nollfokalisering (berättaren vet mer än karaktärerna). Fokalisering är inte samma sak som berättarröst.",
    example:
      "Intern: 'Sara kände hur pulsen ökade.' Extern: 'Mannen gick ut genom dörren.' Nollfokalisering: 'Varken Erik eller Anna visste vad som väntade dem.'",
    tip: "Fråga: Vems tankar har vi tillgång till? Berättarröst (vem talar) och fokalisering (vem ser) kan vara olika.",
  },
  {
    title: "Tema och motiv — fördjupning",
    description:
      "Tema är den abstrakta fråga eller det budskap som genomsyrar texten. Motiv är konkreta, återkommande element som bygger upp och varierar temat. I en och samma text kan flera teman och motiv samverka. Ett motiv kan dessutom vara en typisk situation (igenkänningsscen) som går igen i många verk.",
    example:
      "I Kafkas 'Förvandlingen' är temat alienation, och motivet förvandlingen (den konkreta händelsen att Gregor blir en insekt) gestaltar temat.",
  },
  {
    title: "Metafor och liknelse — fördjupning",
    description:
      "Metaforer skapar betydelse genom överföring: en egenskap från en domän överförs till en annan. Levande metaforer överraskar, döda metaforer har blivit så vanliga att vi inte tänker på dem. Liknelsen är mer explicit och lämnar jämförelsen öppen. Kognitionsvetenskapen visar att metaforer inte bara är stil — de formar hur vi tänker.",
    example:
      "Levande metafor: 'Hennes ord var nålar.' Död metafor: 'Bordets ben.' Liknelse: 'Orden stack som nålar.'",
    tip: "Analysera varför författaren valt just den metaforen — vad överförs och vad utelämnas?",
  },
  {
    title: "Ironi — fördjupning",
    description:
      "Verbal ironi: talaren menar motsatsen. Dramatisk ironi: publiken vet mer än karaktären. Situationsironi: utfallet är motsatsen till det förväntade. Ironi skapar distans och kan vara ett verktyg för kritik, humor eller tragik.",
    example:
      "Situationsironi: En brandstation som brinner ned. Dramatisk ironi: I Sofokles Kung Oidipus söker hjälten efter brottslingen — utan att veta att det är han själv.",
  },
  {
    title: "Symbol — fördjupning",
    description:
      "Symboler kan vara konventionella (kors = kristendom), arketypiska (vatten = rening, förändring) eller textuella (skapade inom ett specifikt verk). En symbol bär alltid en viss tvetydighet — den kan tolkas på flera sätt, vilket skiljer den från en ren kod.",
    example:
      "Den gröna lampan i Fitzgeralds roman representerar Gatsbys dröm — men också det ouppnåeliga, Amerika och det förflutna. Symbolen skiftar mening i olika läsningar.",
  },
  {
    title: "Allegori",
    description:
      "En allegori är en utvidgad metafor: hela berättelsen kan läsas på två plan — det bokstavliga och det symboliska. Karaktärer, händelser och miljöer representerar genomgående abstrakta begrepp som dygder, synder eller politiska krafter.",
    example:
      "Orwells 'Djurfarmen' är en allegori över den ryska revolutionen. Dantes 'Den gudomliga komedin' är en allegori över själens resa mot frälsning.",
    tip: "I en allegori har inte bara enstaka saker symbolisk betydelse — det gäller hela berättelsen, genomgående.",
  },
  {
    title: "Anafor",
    description:
      "Anafor är en stilfigur som innebär att samma ord eller fras upprepas i början av flera på varandra följande meningar eller versrader. Upprepningen skapar rytm, betoning och en nästan besvärjande effekt. Den används i både lyrik, prosa och retorik.",
    example:
      "Martin Luther Kings tal: 'I have a dream...' upprepas i början av mening efter mening. På svenska: 'Jag ser dig. Jag hör dig. Jag bär dig.'",
  },
  {
    title: "Allusion",
    description:
      "En allusion är en indirekt hänvisning till en annan text, en historisk händelse, en myt eller en känd person. Till skillnad från ett direkt citat markeras allusionen inte explicit — läsaren förväntas själv känna igen referensen.",
    example:
      "Att kalla någon 'en Don Quijote' anspelar på Cervantes riddare som kämpar mot väderkvarnar. Att skriva om en 'förbjuden frukt' anspelar på syndafallsmyten.",
    tip: "Allusioner kräver förkunskaper. Ju fler texter du läser, desto fler allusioner upptäcker du!",
  },
  {
    title: "Intertextualitet",
    description:
      "Intertextualitet innebär att alla texter står i relation till andra texter. Mening skapas inte bara inom en enskild text utan genom kopplingar till tidigare verk, genrekonventioner och kulturella koder. Begreppet utvecklades av Julia Kristeva utifrån Bachtins teori om dialogism.",
    example:
      "En modern roman som omskriver en antik myt (t.ex. Madeline Millers 'Circe' som återberättar Odysséen ur en kvinnlig karaktärs perspektiv) är ett tydligt fall av intertextualitet.",
    tip: "Intertextualitet finns överallt — även genrekonventioner (att en deckare börjar med ett brott) är en form av det.",
  },
];

/* ------------------------------------------------------------------ */
/*  Level descriptions                                                 */
/* ------------------------------------------------------------------ */

const LEVEL_DESCRIPTIONS: Record<string, string> = {
  hogstadiet:
    "Lär dig de viktigaste litteraturbegreppen — från metafor och symbol till berättarperspektiv och ironi. Varje begrepp förklaras med exempel och tips.",
  gymnasiet:
    "Fördjupad litterär analys med begrepp som fokalisering, allegori, anafor, allusion och intertextualitet. Teori, exempel och interaktiva övningar.",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export function generateStaticParams() {
  return AGE_GROUPS.filter(
    (g) => g.slug !== "lagstadiet" && g.slug !== "mellanstadiet"
  ).map((g) => ({
    arskurs: g.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Litteraturbegrepp \u2013 ${group.label}`,
    description: `Litteraturbegrepp och litterär analys anpassad för ${group.label.toLowerCase()}.`,
  };
}

export default async function LitteraturbegreppPage({ params }: Props) {
  const { arskurs } = await params;

  if (
    !VALID_AGE_GROUPS.has(arskurs) ||
    arskurs === "lagstadiet" ||
    arskurs === "mellanstadiet"
  ) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;
  const level = arskurs as AgeGroup;
  const exercises = getLittBegreppExercises(level);
  const concepts =
    level === "gymnasiet" ? GYMNASIET_CONCEPTS : HOGSTADIET_CONCEPTS;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <BookOpen className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Litteraturbegrepp
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {LEVEL_DESCRIPTIONS[level]}
        </p>
      </div>

      {/* Quick nav */}
      <Section title="Begrepp">
        <div className="mb-8 flex flex-wrap gap-2">
          {concepts.map((c) => (
            <a
              key={c.title}
              href={`#${c.title.toLowerCase().replace(/\s+/g, "-").replace(/[åä]/g, "a").replace(/ö/g, "o")}`}
              className="group flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm transition-all hover:border-neutral-400 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <span className="font-medium text-neutral-800 dark:text-neutral-200">
                {c.title}
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Concept cards */}
      <div className="space-y-6">
        {concepts.map((concept) => (
          <div
            key={concept.title}
            id={concept.title.toLowerCase().replace(/\s+/g, "-").replace(/[åä]/g, "a").replace(/ö/g, "o")}
          >
            <ConceptCard {...concept} />
          </div>
        ))}
      </div>

      {/* Gymnasiet extra sections */}
      {level === "gymnasiet" && (
        <>
          <div className="mt-12">
            <Section title="Att analysera en text steg för steg">
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Litterär analys handlar om att systematiskt undersöka hur en text
                skapar mening. Här är en modell du kan använda.
              </p>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Steg 1</Badge>
                      <CardTitle className="text-base">
                        Berättarperspektiv och fokalisering
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Vem berättar? Genom vems ögon ser vi? Är berättaren
                      pålitlig? Hur påverkar perspektivet vår upplevelse av
                      händelserna?
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Steg 2</Badge>
                      <CardTitle className="text-base">
                        Tema och motiv
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Vilken stor fråga ställer texten? Vilka motiv
                      (återkommande bilder, situationer, symboler) bygger upp
                      temat? Finns det flera teman som samverkar?
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Steg 3</Badge>
                      <CardTitle className="text-base">
                        Stilfigurer och bildspråk
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Vilka metaforer, liknelser, symboler och stilfigurer
                      (anafor, ironi, allusion) använder författaren? Vad
                      tillför de till textens mening och känsla?
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Steg 4</Badge>
                      <CardTitle className="text-base">
                        Intertextualitet och kontext
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Vilka andra texter anspelar verket på? Hur påverkar den
                      historiska och kulturella kontexten tolkningen? Kan texten
                      läsas som allegori?
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Section>
          </div>

          <div className="mt-12">
            <Section title="Analysbegrepp i samspel">
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Litteraturbegreppen fungerar inte isolerat — de samverkar i en
                text. Här är exempel på hur begreppen kan samspela.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Allusion + ironi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      En text som anspelar på en heroisk myt men sätter den i en
                      vardaglig och komisk situation skapar ironi genom allusion.
                      Kontrasten mellan förlagan och den nya kontexten ger en
                      dubbelhet.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Symbol + fokalisering
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      En symbol kan få olika betydelse beroende på vems perspektiv
                      vi ser den genom. En stängd dörr kan symbolisera trygghet
                      för en karaktär och fångenskap för en annan.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Allegori + intertextualitet
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      En allegori bygger ofta på intertextuella kopplingar — den
                      förutsätter att läsaren känner till det som allegorin
                      refererar till. Orwells Djurfarmen kräver kunskap om
                      ryska revolutionen.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Anafor + tema
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Anaforen kan förstärka temat genom insisterande upprepning.
                      Om temat är förlust kan anaforisk upprepning av
                      minnesbilder skapa en stark känsla av saknad.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Section>
          </div>
        </>
      )}

      {/* Study tips */}
      <div className="mt-12">
        <Section title="Tips för studier">
          {level === "hogstadiet" && (
            <>
              <Tip>
                <strong>Börja med att läsa noggrant:</strong> Läs texten en
                gång för att förstå handlingen. Läs sedan en gång till och leta
                efter mönster — upprepningar, bilder och kontraster.
              </Tip>
              <Tip>
                <strong>Skriv med begreppen:</strong> Pröva att skriva en kort
                text där du medvetet använder metaforer, liknelser och symboler.
                Det hjälper dig att förstå hur de fungerar.
              </Tip>
              <Tip>
                <strong>Diskutera i grupp:</strong> Litterära texter kan tolkas
                på flera sätt. Diskutera med klasskamrater — vad ser de som du
                missade?
              </Tip>
            </>
          )}
          {level === "gymnasiet" && (
            <>
              <Tip>
                <strong>Analysmodellen:</strong> Använd steg-för-steg-modellen
                ovan som utgångspunkt. Börja med perspektiv och fokalisering,
                gå vidare till tema och motiv, sedan stilfigurer och sist
                intertextualitet.
              </Tip>
              <Tip>
                <strong>Teori och praktik:</strong> Läs teoretiska definitioner
                och tillämpa dem direkt på texter du läser. Ju fler texter du
                analyserar, desto naturligare blir begreppen.
              </Tip>
              <Tip>
                <strong>Jämför verk:</strong> Välj två texter med liknande tema
                men olika berättarperspektiv. Hur påverkar fokaliseringen din
                upplevelse av temat?
              </Tip>
              <Tip>
                <strong>Skriv analysövningar:</strong> Skriv korta analyser
                (200\u2013300 ord) av textutdrag och använd minst tre begrepp.
                Var noga med att inte bara namnge greppen utan förklara deras
                effekt.
              </Tip>
            </>
          )}
        </Section>
      </div>

      {/* Cross-link to textbank */}
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
          Analysera riktiga texter
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Använd begreppen du lärt dig för att analysera texter i textbanken.
          Varje text har analysfrågor som hjälper dig att identifiera litterära
          grepp i praktiken.
        </p>
        <Link
          href={`/${arskurs}/textbank`}
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
        >
          <BookText className="h-4 w-4" />
          Gå till textbanken
        </Link>
      </section>

      {/* Interactive exercises */}
      {exercises.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
            Övningar
          </h2>
          <LitteraturbegreppOvningar exercises={exercises} />
        </section>
      )}
    </div>
  );
}
