import type { Metadata } from "next";
import { type ReactNode } from "react";
import {
  MessageSquare,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Target,
  BookOpen,
  PenLine,
  Search,
  SpellCheck,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Promptguide",
  description:
    "Lär dig skriva bra promptar för att få hjälp med svenska från AI-verktyg.",
};

/* ------------------------------------------------------------------ */
/*  Helper components                                                  */
/* ------------------------------------------------------------------ */

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12">
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

function PromptExample({
  type,
  label,
  prompt,
}: {
  type: "good" | "bad";
  label: string;
  prompt: string;
}) {
  const isGood = type === "good";
  return (
    <div
      className={`rounded-lg border p-4 ${
        isGood
          ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950"
          : "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950"
      }`}
    >
      <div className="mb-1 flex items-center gap-1.5">
        {isGood ? (
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
        ) : (
          <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
        )}
        <span
          className={`text-xs font-semibold uppercase tracking-wide ${
            isGood
              ? "text-green-700 dark:text-green-300"
              : "text-red-700 dark:text-red-300"
          }`}
        >
          {label}
        </span>
      </div>
      <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
        {prompt}
      </p>
    </div>
  );
}

function ExerciseCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-bold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
            {number}
          </span>
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PromptguidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
          <MessageSquare className="h-6 w-6 text-blue-700 dark:text-blue-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Promptguide
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Lär dig skriva effektiva promptar så att AI-verktyg ger dig bättre och
          mer användbar hjälp i svenskämnet.
        </p>
      </div>

      {/* 1. Vad är en prompt? */}
      <Section title="Vad är en prompt?">
        <p className="text-neutral-700 dark:text-neutral-300">
          En <strong>prompt</strong> är den text du skriver till ett AI-verktyg
          för att ge det en uppgift. Tänk på det som en instruktion eller en
          fråga. Ju tydligare din prompt är, desto bättre svar får du.
        </p>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          AI-verktyg som ChatGPT, Copilot och liknande är språkmodeller. De
          genererar text baserat på mönster i enorma mängder textdata. De
          &quot;förstår&quot; inte på samma satt som en människa, men de kan ge
          mycket användbar hjälp om du ger dem rätt instruktioner.
        </p>
        <Tip>
          <strong>Tankesätt:</strong> Föreställ dig att du ger instruktioner
          till en mycket kunnig men bokstavlig assistent. Ju mer specifik du är,
          desto bättre resultat får du.
        </Tip>
      </Section>

      {/* 2. Grundregler */}
      <Section title="Grundregler för bra promptar">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <Target className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <CardTitle className="text-base">Var specifik</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Skriv exakt vad du vill ha. Istället för &quot;hjälp mig med
                min text&quot; kan du skriva &quot;ge feedback på
                inledningen till min argumenterande text om sociala
                medier&quot;.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <BookOpen className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <CardTitle className="text-base">Ge kontext</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Berätta vem du är, vad uppgiften går ut på och vilken nivå
                du arbetar på. &quot;Jag går i årskurs 8 och ska
                skriva en krönika&quot; ger bättre svar än bara &quot;skriv
                en krönika&quot;.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <PenLine className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <CardTitle className="text-base">Ange format</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Berätta hur du vill ha svaret: en punktlista, en
                sammanfattning på tre meningar, en tabell, förslag med
                förklaringar. Formatet påverkar kvaliteten.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 space-y-3">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
            Fler strategier
          </h3>
          <ul className="ml-4 list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>
              <strong>Ange roll:</strong> Be AI:n agera som en viss roll, till
              exempel &quot;Agera som en svensklärare och ge feedback på min
              text.&quot;
            </li>
            <li>
              <strong>Dela upp i steg:</strong> Gör komplexa uppgifter i
              delsteg. Först brainstorma, sedan strukturera, sedan
              skriva.
            </li>
            <li>
              <strong>Ge exempel:</strong> Om du vill ha en viss typ av svar,
              ge ett exempel på hur det kan se ut.
            </li>
            <li>
              <strong>Iterera:</strong> Om svaret inte är perfekt, följ upp
              med &quot;Kan du göra det kortare?&quot; eller &quot;Fokusera mer
              på argumenten.&quot; Du behöver inte börja om från början.
            </li>
            <li>
              <strong>Begr&auml;nsningar:</strong> Ange vad du INTE vill ha.
              &quot;Ge mig inte hela texten, bara förslag på
              förbättringar.&quot;
            </li>
          </ul>
        </div>
      </Section>

      {/* 3. Bra vs dåliga promptar */}
      <Section title="Bra vs dåliga promptar &mdash; med exempel">
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          Här är konkreta jämförelser som visar hur små förändringar i din
          prompt kan ge mycket bättre resultat.
        </p>

        {/* Example 1 */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-medium text-neutral-900 dark:text-white">
            Exempel 1: Skrivhjälp
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <PromptExample
              type="bad"
              label="Vag prompt"
              prompt="Hjälp mig med min text."
            />
            <PromptExample
              type="good"
              label="Specifik prompt"
              prompt="Jag skriver en argumenterande text om huruvida mobiltelefoner bör vara tillåtna i klassrummet. Ge mig tre stärka argument för varje sida och förklara varför de är övertygande."
            />
          </div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Den specifika prompten anger ämne, texttyp och exakt vilken hjälp
            som önskas.
          </p>
        </div>

        {/* Example 2 */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-medium text-neutral-900 dark:text-white">
            Exempel 2: Grammatik
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <PromptExample
              type="bad"
              label="Vag prompt"
              prompt="Förklara grammatik."
            />
            <PromptExample
              type="good"
              label="Specifik prompt"
              prompt="Förklara skillnaden mellan huvudsats och bisats på ett sätt som en elev i årskurs 7 förstår. Ge tre exempel på varje och markera verbet i varje sats."
            />
          </div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Kontext (årskurs), format (exempel) och specifikt ämne gör svaret
            mycket mer användbart.
          </p>
        </div>

        {/* Example 3 */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-medium text-neutral-900 dark:text-white">
            Exempel 3: Feedback
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <PromptExample
              type="bad"
              label="Vag prompt"
              prompt="Är det här bra? [klistrar in text]"
            />
            <PromptExample
              type="good"
              label="Specifik prompt"
              prompt="Här är min krönika (300 ord). Ge feedback på: 1) språk och stil 2) struktur 3) tonlaget. Ge konkreta förslag på förbättringar men skriv inte om texten åt mig."
            />
          </div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Numrerade fokusområden och en tydlig begränsning (&quot;skriv inte
            om texten&quot;) ger riktad feedback.
          </p>
        </div>

        {/* Example 4 */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-medium text-neutral-900 dark:text-white">
            Exempel 4: Källsökning
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <PromptExample
              type="bad"
              label="Vag prompt"
              prompt="Berätta om Astrid Lindgren."
            />
            <PromptExample
              type="good"
              label="Specifik prompt"
              prompt="Ge en sammanfattning på fem punkter om Astrid Lindgrens betydelse för svensk barnlitteratur. Inkludera specifika verk och årtal. Ange om det finns någon information du är osäker på."
            />
          </div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Genom att be om specifik form och att AI:n markerar osäkerheter får
            du ett mer trovärdigt svar.
          </p>
        </div>
      </Section>

      {/* 4. Tips per användningsområde */}
      <Section title="Tips per användningsområde">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <PenLine className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                <CardTitle className="text-base">Skrivhjälp</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  Be om idéer och brainstorming innan du börjar skriva. &quot;Ge
                  mig tio infallsvinklar för en krönika om ensamhet.&quot;
                </li>
                <li>
                  Använd AI för att förbättra, inte för att skriva åt dig.
                  &quot;Här är min text. Vad kan bli bättre?&quot;
                </li>
                <li>
                  Be om hjälp med specifika delar: &quot;Ge mig tre alternativa
                  inledningar till min text.&quot;
                </li>
                <li>
                  Fråga efter förklaringar: &quot;Varför är denna mening
                  otydlig?&quot;
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                <CardTitle className="text-base">Källsökning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  Be alltid AI:n att ange källor eller markera när den är
                  osäker.
                </li>
                <li>
                  Dubbelkolla fakta i en annan källa. AI kan &quot;hallucinera&quot;
                  &mdash; hitta på fakta som låter troliga.
                </li>
                <li>
                  Använd prompten &quot;Vad vet du säkert och vad är du osäker
                  på?&quot; för att få ärligare svar.
                </li>
                <li>
                  Be om specifika hänvisningar: &quot;Vilka forskare har studerat
                  detta?&quot;
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <SpellCheck className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                <CardTitle className="text-base">Grammatikkoll</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  Klistra in din text och be om specifik grammatisk feedback:
                  &quot;Kontrollera meningsbyggnad, kommatering och
                  ordval.&quot;
                </li>
                <li>
                  Be om förklaringar, inte bara rättningar: &quot;Rätta mina
                  grammatikfel och förklara regeln bakom varje rättning.&quot;
                </li>
                <li>
                  Använd AI för att lära dig mönster: &quot;Ge mig fem övningar
                  på BIFF-regeln med facit.&quot;
                </li>
                <li>
                  Kontrollera svaret &mdash; AI gör ibland fel på svenska
                  grammatik, särskilt med ordföljd och kommatering.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 5. Övningsuppgifter */}
      <Section title="Övningsuppgifter">
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          Testa dina kunskaper genom att öva på att skriva promptar. För varje
          övning: skriv din prompt, prova den i ett AI-verktyg, och utvärdera
          resultatet.
        </p>

        <div className="space-y-3">
          <ExerciseCard
            number={1}
            title="Förbättra den vaga prompten"
            description="Skriv om denna prompt så att den blir mer effektiv: 'Berätta om böcker.' Tänk på att lägga till ämne, målgrupp, format och begränsning."
          />
          <ExerciseCard
            number={2}
            title="Skriv en feedbackprompt"
            description="Du har skrivit en insändare om skolmaten. Skriv en prompt som ber AI:n om konstruktiv feedback på din text utan att skriva om den."
          />
          <ExerciseCard
            number={3}
            title="Brainstorming med AI"
            description="Du ska skriva en novell med temat 'överraskningar'. Skriv en prompt som ger dig kreativa idéer utan att AI:n skriver hela berättelsen."
          />
          <ExerciseCard
            number={4}
            title="Prompt med roll"
            description="Skriv en prompt där du ber AI:n att agera som en bibliotekarie som rekommenderar böcker för en elev i din ålder. Var specifik om dina intressen."
          />
          <ExerciseCard
            number={5}
            title="Iterera och förbättra"
            description="Börja med en enkel prompt om skiljetecken. Skriv sedan tre uppföljningsfrågor som gör svaret allt mer användbart. Dokumentera hur svaret förbättras med varje steg."
          />
          <ExerciseCard
            number={6}
            title="Kritisk prompt"
            description="Skriv en prompt som ber AI:n att förklara någonting om svensk språkhistoria, och som uppmanar den att markera vad den är osäker på. Utvärdera sedan svaret mot en trovärdig källa."
          />
        </div>

        <Tip>
          <strong>Extrautmaning:</strong> Byt promptar med en klasskompis.
          Ger er promptar lika bra resultat? Diskutera vad som fungerar bra och
          vad som kan förbättras.
        </Tip>
      </Section>

      {/* Summary */}
      <section className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          Sammanfattning
        </h2>
        <ol className="ml-4 list-decimal space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Var specifik</strong> &mdash; ju mer detaljer, desto bättre
            svar.
          </li>
          <li>
            <strong>Ge kontext</strong> &mdash; berätta vem du är och vad
            uppgiften handlar om.
          </li>
          <li>
            <strong>Ange format</strong> &mdash; bestäm hur svaret ska se ut.
          </li>
          <li>
            <strong>Iterera</strong> &mdash; följ upp och förfina dina frågor.
          </li>
          <li>
            <strong>Granska alltid svaret</strong> &mdash; AI är ett verktyg,
            inte en sanning.
          </li>
        </ol>
      </section>
    </div>
  );
}
