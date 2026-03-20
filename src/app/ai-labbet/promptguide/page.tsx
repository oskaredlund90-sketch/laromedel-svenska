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
    "Lar dig skriva bra promptar for att fa hjalp med svenska fran AI-verktyg.",
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
          Lar dig skriva effektiva promptar sa att AI-verktyg ger dig battre och
          mer anvandbar hjalp i svenskamnet.
        </p>
      </div>

      {/* 1. Vad ar en prompt? */}
      <Section title="Vad ar en prompt?">
        <p className="text-neutral-700 dark:text-neutral-300">
          En <strong>prompt</strong> ar den text du skriver till ett AI-verktyg
          for att ge det en uppgift. Tankt pa det som en instruktion eller en
          fraga. Ju tydligare din prompt ar, desto battre svar far du.
        </p>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          AI-verktyg som ChatGPT, Copilot och liknande ar sprakmodeller. De
          genererar text baserat pa monster i enorma mangder textdata. De
          &quot;forstar&quot; inte pa samma satt som en manniska, men de kan ge
          mycket anvandbar hjalp om du ger dem ratt instruktioner.
        </p>
        <Tip>
          <strong>Tankesatt:</strong> Forestall dig att du ger instruktioner
          till en mycket kunnig men bokstavlig assistent. Ju mer specifik du ar,
          desto battre resultat far du.
        </Tip>
      </Section>

      {/* 2. Grundregler */}
      <Section title="Grundregler for bra promptar">
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
                Skriv exakt vad du vill ha. Istallet for &quot;hjalp mig med
                min text&quot; kan du skriva &quot;ge feedback pa
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
                Beratta vem du ar, vad uppgiften gar ut pa och vilken niva
                du arbetar pa. &quot;Jag gar i arskurs 8 och ska
                skriva en kronika&quot; ger battre svar an bara &quot;skriv
                en kronika&quot;.
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
                Beratta hur du vill ha svaret: en punktlista, en
                sammanfattning pa tre meningar, en tabell, forslag med
                forklaringar. Formatet paverkar kvaliteten.
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
              exempel &quot;Agera som en svensklarare och ge feedback pa min
              text.&quot;
            </li>
            <li>
              <strong>Dela upp i steg:</strong> Gor komplexa uppgifter i
              delsteg. Forst brainstorma, sedan strukturera, sedan
              skriva.
            </li>
            <li>
              <strong>Ge exempel:</strong> Om du vill ha en viss typ av svar,
              ge ett exempel pa hur det kan se ut.
            </li>
            <li>
              <strong>Iterera:</strong> Om svaret inte ar perfekt, foljd upp
              med &quot;Kan du gora det kortare?&quot; eller &quot;Fokusera mer
              pa argumenten.&quot; Du behover inte borja om fran borjan.
            </li>
            <li>
              <strong>Begr&auml;nsningar:</strong> Ange vad du INTE vill ha.
              &quot;Ge mig inte hela texten, bara forslag pa
              forbattringar.&quot;
            </li>
          </ul>
        </div>
      </Section>

      {/* 3. Bra vs daliga promptar */}
      <Section title="Bra vs daliga promptar &mdash; med exempel">
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          Har ar konkreta jamforelser som visar hur en sma forandringar i din
          prompt kan ge mycket battre resultat.
        </p>

        {/* Example 1 */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-medium text-neutral-900 dark:text-white">
            Exempel 1: Skrivhjalp
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <PromptExample
              type="bad"
              label="Vag prompt"
              prompt="Hjalp mig med min text."
            />
            <PromptExample
              type="good"
              label="Specifik prompt"
              prompt="Jag skriver en argumenterande text om huruvida mobiltelefoner bor vara tillatna i klassrummet. Ge mig tre starka argument for varje sida och forklara varfor de ar overtygande."
            />
          </div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Den specifika prompten anger amne, texttyp och exakt vilken hjalp
            som onskas.
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
              prompt="Forklara grammatik."
            />
            <PromptExample
              type="good"
              label="Specifik prompt"
              prompt="Forklara skillnaden mellan huvudsats och bisats pa ett satt som en elev i arskurs 7 forstar. Ge tre exempel pa varje och markera verbet i varje sats."
            />
          </div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Kontext (arskurs), format (exempel) och specifikt amne gor svaret
            mycket mer anvandbart.
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
              prompt="Ar det har bra? [klistrar in text]"
            />
            <PromptExample
              type="good"
              label="Specifik prompt"
              prompt="Har ar min kronika (300 ord). Ge feedback pa: 1) sprak och stil 2) struktur 3) tonlaget. Ge konkreta forslag pa forbattringar men skriv inte om texten at mig."
            />
          </div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Numrerade fokusomraden och en tydlig begransning (&quot;skriv inte
            om texten&quot;) ger riktad feedback.
          </p>
        </div>

        {/* Example 4 */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-medium text-neutral-900 dark:text-white">
            Exempel 4: Kallsokning
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <PromptExample
              type="bad"
              label="Vag prompt"
              prompt="Beratta om Astrid Lindgren."
            />
            <PromptExample
              type="good"
              label="Specifik prompt"
              prompt="Ge en sammanfattning pa fem punkter om Astrid Lindgrens betydelse for svensk barnlitteratur. Inkludera specifika verk och artal. Ange om det finns nagon information du ar osaker pa."
            />
          </div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Genom att be om specifik form och att AI:n markerar osakerheter far
            du ett mer trovardigt svar.
          </p>
        </div>
      </Section>

      {/* 4. Tips per anvandningsomrade */}
      <Section title="Tips per anvandningsomrade">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <PenLine className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                <CardTitle className="text-base">Skrivhjalp</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  Be om ideer och brainstorming innan du borjar skriva. &quot;Ge
                  mig tio infallsvinklar for en kronika om ensamhet.&quot;
                </li>
                <li>
                  Anvand AI for att forbattra, inte for att skriva at dig.
                  &quot;Har ar min text. Vad kan bli battre?&quot;
                </li>
                <li>
                  Be om hjalp med specifika delar: &quot;Ge mig tre alternativa
                  inledningar till min text.&quot;
                </li>
                <li>
                  Fragata efter forklaringar: &quot;Varfor ar denna mening
                  otydlig?&quot;
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                <CardTitle className="text-base">Kallsokning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  Be alltid AI:n att ange kallor eller markera nar den ar
                  osaker.
                </li>
                <li>
                  Dubbelkolla fakta i en annan kalla. AI kan &quot;hallucinera&quot;
                  &mdash; hitta pa fakta som later troliga.
                </li>
                <li>
                  Anvand prompten &quot;Vad vet du sakert och vad ar du osaker
                  pa?&quot; for att fa arligare svar.
                </li>
                <li>
                  Be om specifika hanvisningar: &quot;Vilka forskare har studerat
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
                  Be om forklaringar, inte bara rattningar: &quot;Ratta mina
                  grammatikfel och forklara regeln bakom varje rattning.&quot;
                </li>
                <li>
                  Anvand AI for att lara dig monster: &quot;Ge mig fem ovningar
                  pa BIFF-regeln med facit.&quot;
                </li>
                <li>
                  Kontrollera svaret &mdash; AI gor ibland fel pa svenska
                  grammatik, sarskilt med ordfoljd och kommatering.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 5. Ovningsuppgifter */}
      <Section title="Ovningsuppgifter">
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          Testa dina kunskaper genom att ova pa att skriva promptar. For varje
          ovning: skriv din prompt, prova den i ett AI-verktyg, och utvardera
          resultatet.
        </p>

        <div className="space-y-3">
          <ExerciseCard
            number={1}
            title="Forbattra den vaga prompten"
            description="Skriv om denna prompt sa att den blir mer effektiv: 'Beratta om bocker.' Tankt pa att lagga till amne, malgrupp, format och begransning."
          />
          <ExerciseCard
            number={2}
            title="Skriv en feedbackprompt"
            description="Du har skrivit en insandare om skolmaten. Skriv en prompt som ber AI:n om konstruktiv feedback pa din text utan att skriva om den."
          />
          <ExerciseCard
            number={3}
            title="Brainstorming med AI"
            description="Du ska skriva en novell med temat 'overraskningar'. Skriv en prompt som ger dig kreativa ideer utan att AI:n skriver hela berattelsen."
          />
          <ExerciseCard
            number={4}
            title="Prompt med roll"
            description="Skriv en prompt dar du ber AI:n att agera som en bibliotekarie som rekommenderar bocker for en elev i din alder. Var specifik om dina intressen."
          />
          <ExerciseCard
            number={5}
            title="Iterera och forbattra"
            description="Borja med en enkel prompt om skiljetecken. Skriv sedan tre uppfoljningsfragor som gor svaret allt mer anvandbart. Dokumentera hur svaret forbattras med varje steg."
          />
          <ExerciseCard
            number={6}
            title="Kritisk prompt"
            description="Skriv en prompt som ber AI:n att forklara nagonting om svensk sprakhistoria, och som uppmanar den att markera vad den ar osaker pa. Utvardera sedan svaret mot en trovarding kalla."
          />
        </div>

        <Tip>
          <strong>Extrautmaning:</strong> Byt promptar med en klasskompis.
          Ger er promptar lika bra resultat? Diskutera vad som fungerare bra och
          vad som kan forbattras.
        </Tip>
      </Section>

      {/* Summary */}
      <section className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          Sammanfattning
        </h2>
        <ol className="ml-4 list-decimal space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Var specifik</strong> &mdash; ju mer detaljer, desto battre
            svar.
          </li>
          <li>
            <strong>Ge kontext</strong> &mdash; beratta vem du ar och vad
            uppgiften handlar om.
          </li>
          <li>
            <strong>Ange format</strong> &mdash; bestam hur svaret ska se ut.
          </li>
          <li>
            <strong>Iterera</strong> &mdash; foljd upp och forfina dina fragor.
          </li>
          <li>
            <strong>Granska alltid svaret</strong> &mdash; AI ar ett verktyg,
            inte en sanning.
          </li>
        </ol>
      </section>
    </div>
  );
}
