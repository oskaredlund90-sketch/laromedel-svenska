import type { Metadata } from "next";
import { type ReactNode } from "react";
import {
  PenLine,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  Brain,
  MessageCircle,
  Swords,
  ShieldAlert,
  ListOrdered,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Skrivhjalp med AI",
  description:
    "Anvand AI som ett stod i skrivprocessen utan att tappa din egen rost.",
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

function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
      <div className="text-sm text-amber-900 dark:text-amber-200">
        {children}
      </div>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
  prompt,
}: {
  step: number;
  title: string;
  description: string;
  prompt: string;
}) {
  return (
    <div className="relative flex gap-4">
      {/* Step number */}
      <div className="flex flex-col items-center">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700 dark:bg-green-900 dark:text-green-300">
          {step}
        </span>
        {step < 5 && (
          <div className="mt-1 h-full w-px bg-neutral-200 dark:bg-neutral-700" />
        )}
      </div>
      {/* Content */}
      <div className="pb-8">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="mt-2 rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Exempelprompt
          </p>
          <p className="mt-1 font-mono text-sm text-neutral-800 dark:text-neutral-200">
            {prompt}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SkrivhjalpPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
          <PenLine className="h-6 w-6 text-green-700 dark:text-green-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Skrivhjalp med AI
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          AI kan vara ett kraftfullt stod i din skrivprocess &mdash; men det ar
          du som ar forfattaren. Lar dig anvanda AI pa ett satt som starker ditt
          eget skrivande.
        </p>
      </div>

      {/* 1. AI som brainstormingverktyg */}
      <Section title="AI som brainstormingverktyg">
        <div className="flex items-start gap-3 mb-4">
          <Brain className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            En av de basta anvandningarna av AI i skrivandet ar att anvanda det
            for brainstorming. Nar du sitter fast eller behover inspiration kan
            AI hjalpa dig att komma igang utan att det tar over ditt skrivande.
          </p>
        </div>

        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hitta infallsvinklar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Nar du ska skriva om ett amne kan AI ge dig manga olika
                infallsvinklar att valja mellan. Du bestammer sedan vilken
                vinkel som passar dig bast.
              </p>
              <div className="mt-3 rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Jag ska skriva en kronika om stress bland unga. Ge mig
                  tio olika vinklar jag kan valja mellan. Blanda personliga,
                  samhallskritiska och humoristiska perspektiv.&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Tankekarta med AI-stod
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Be AI skapa en tankekarta eller lista kopplingar till ditt amne.
                Anvand det som startpunkt och bygg vidare med egna ideer.
              </p>
              <div className="mt-3 rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Skapa en tankekarta med kopplingar till amnet
                  'identitet'. Inkludera minst fyra huvudgrenar med
                  underamnen.&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Bryt skrivkrampen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Om du har svart att borja skriva kan AI ge dig en startmening
                eller ett scenario att bygga vidare pa. Det viktiga ar att du
                sedan gor texten till din egen.
              </p>
              <div className="mt-3 rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Ge mig fem olika forsta meningar for en novell med
                  temat 'overgivenhet'. Anvand olika stilar: en dramatisk, en
                  lugn, en fragebaserad, en dialog och en beskrivande.&quot;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tip>
          <strong>Kom ihag:</strong> Brainstorming med AI ar som att diskutera
          med en klasskompis. Du far ideer, men det ar du som valjer, anpassar
          och utvecklar dem till nagot eget.
        </Tip>
      </Section>

      {/* 2. Fa feedback pa din text */}
      <Section title="Fa feedback pa din text">
        <div className="flex items-start gap-3 mb-4">
          <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            AI kan ge dig snabb och detaljerad feedback pa din text. Det
            ersatter inte lararens feedback, men det ar ett bra komplement
            &mdash; sarskilt nar du vill fa feedback innan du lamnar in.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
            Olika typer av feedback du kan be om
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Sprak och stil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  &quot;Granska min text med fokus pa spraklig variation,
                  ordval och meningsbyggnad. Ge konkreta forslag pa
                  forbattringar.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Struktur och uppbyggnad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  &quot;Analysera strukturen i min text. Finns det en rod
                  trad? Hanger styckena ihop? Ge forslag pa battre
                  styckeindelning.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Argumentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  &quot;Utvardera argumenten i min text. Ar de overtygande? Finns
                  det logiska luckor? Foreslat motargument jag bor
                  bemota.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Mottagaranpassning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  &quot;Min text riktar sig till ungdomar. Ar spraaket
                  anpassat for malgruppen? Ar tonen ratt? Vad bor
                  andras?&quot;
                </p>
              </CardContent>
            </Card>
          </div>

          <Tip>
            <strong>Viktigt:</strong> Be alltid AI:n att forklara VARFOR den
            foreslaar en andring. Da lar du dig nagot, istallet for att bara
            folja forslag blint.
          </Tip>
        </div>
      </Section>

      {/* 3. Utveckla argument */}
      <Section title="Utveckla argument">
        <div className="flex items-start gap-3 mb-4">
          <Swords className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            Nar du skriver argumenterande text kan AI hjalpa dig att skarpa
            dina argument och se fler perspektiv. Har ar strategier for att
            anvanda AI i argumentationsprocessen.
          </p>
        </div>

        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Djupanalys av argument</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                Be AI granska styrkan i dina argument och hjalpa dig fordjupa
                dem.
              </p>
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Har ar mitt argument for att skoluniformer borde
                  inforas: [ditt argument]. Hjalp mig forstarkan det genom att:
                  1) ge stodjandd fakta, 2) forklara logiken tydligare, 3)
                  foreslat ett konkret exempel.&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Hitta motargument
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                Starkt skrivande innebar att du bemotter motargument. Lat AI
                spela djav&auml;lens advokat.
              </p>
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Jag argumenterar for att sociala medier bor forbjudas
                  for barn under 13. Ge mig de tre starkaste motargumenten och
                  forklara hur jag kan bemota vart och ett.&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Perspektivbyte</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                Se en fraga fran flera sidor for att skriva en mer nyanserad
                text.
              </p>
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Beskriv fragan om laxtrad pa skolan fran tre
                  perspektiv: en elev, en larare och en foraldrer. Vilka
                  argument ar viktigast for varje grupp?&quot;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 4. Varning: plagiering och integritet */}
      <Section title="Varning: plagiering och integritet">
        <div className="flex items-start gap-3 mb-4">
          <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            Det ar viktigt att forstaa skillnaden mellan att anvanda AI som
            stod och att plagiera. Har ar regler och riktlinjer du maste
            folja.
          </p>
        </div>

        <Warning>
          <strong>Grundregeln:</strong> Om du lamnar in text som AI har skrivit
          och presenterar den som din egen, ar det plagiering. Det galler oavsett
          om texten ar helt AI-genererad eller till stor del omskrivna av AI.
        </Warning>

        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">
              Nar ar det OK att anvanda AI?
            </h3>
            <ul className="ml-4 list-disc space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
              <li>For att brainstorma och fa ideer</li>
              <li>For att fa feedback pa text du sjalv har skrivit</li>
              <li>For att forstaa grammatikregler och sprakliga begrepp</li>
              <li>For att ova pa att skriva (nar det inte ar en bedomad uppgift)</li>
              <li>Nar lararen uttryckligen tillater det</li>
            </ul>
          </div>

          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
            <h3 className="mb-2 font-semibold text-red-900 dark:text-red-200">
              Nar ar det INTE OK?
            </h3>
            <ul className="ml-4 list-disc space-y-1 text-sm text-red-800 dark:text-red-300">
              <li>Att kopiera AI-genererad text och lamna in som sin egen</li>
              <li>Att lata AI skriva hela eller stora delar av en uppgift</li>
              <li>Att anvanda AI pa prov eller examinationer (om inte tillatet)</li>
              <li>Att dolja att du anvant AI nar lararen fragar</li>
            </ul>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">
              Integritet och personuppgifter
            </h3>
            <ul className="ml-4 list-disc space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                <strong>Dela aldrig personuppgifter</strong> med AI-verktyg.
                Inga fullstandiga namn, personnummer, adresser eller andra
                kansliga uppgifter.
              </li>
              <li>
                <strong>Skriv inte om andra personer</strong> med detaljer som
                kan identifiera dem. AI-foretag kan anvanda dina konversationer
                for att trana framtida modeller.
              </li>
              <li>
                <strong>Var forsiktig med skolmaterial.</strong> Klistra inte
                in provsvar eller provfragor i AI-verktyg.
              </li>
              <li>
                <strong>Anvand skolan godkanda verktyg.</strong> Maaanga skolor
                har regler for vilka AI-verktyg som far anvandas.
              </li>
            </ul>
          </div>
        </div>

        <Warning>
          <strong>Tips:</strong> Var alltid oppen med hur du har anvant AI. Om
          du ar osaker pa vad som ar tillatet, fraga din larare. Transparens ar
          nyckeln.
        </Warning>
      </Section>

      {/* 5. Steg-for-steg-guide */}
      <Section title="Steg-for-steg: anvand AI i skrivprocessen">
        <div className="flex items-start gap-3 mb-6">
          <ListOrdered className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            Har ar en komplett guide for hur du kan anvanda AI som stod genom
            hela skrivprocessen &mdash; fran ide till fardigt text.
          </p>
        </div>

        <div className="space-y-0">
          <StepCard
            step={1}
            title="Brainstorma"
            description="Borja med att anvanda AI for att utforska ditt amne och hitta infallsvinklar. Skriv ner de ideer som tilltalar dig mest."
            prompt="Ge mig atta olika infallsvinklar for en kronika om [ditt amne]. Blanda seriosa och lite ovantade perspektiv."
          />
          <StepCard
            step={2}
            title="Planera och strukturera"
            description="Nar du valt din vinkel, be AI hjalpa dig med en disposition. Anpassa den efter dina egna tankar."
            prompt="Hjalp mig skapa en disposition for min argumenterande text om [amne]. Jag vill ha inledning, tre argument, ett motargument och avslutning."
          />
          <StepCard
            step={3}
            title="Skriv sjalv"
            description="Nu skriver du! Anvand din disposition och dina egna ord. Det ar har din rost och dina tankar ska synas."
            prompt="(Inga promptar i detta steg &mdash; du skriver sjalv!)"
          />
          <StepCard
            step={4}
            title="Fa feedback"
            description="Nar du har ett forsta utkast, be AI om feedback. Var specifik med vad du vill ha hjalp med."
            prompt="Har ar mitt utkast [klistra in]. Ge feedback pa: 1) den roda traden, 2) spraklig variation, 3) argumentens styrka. Foreslaat forbattringar men skriv inte om texten."
          />
          <StepCard
            step={5}
            title="Bearbeta och finslipa"
            description="Anvand feedbacken for att gora egna forbattringar. Du kan be AI forklara specifika forslag narmre."
            prompt="Du foreslog att jag ska variera meningslangden mer. Ge mig tre konkreta exempel pa hur jag kan skriva om denna mening pa olika satt: [din mening]."
          />
        </div>

        <Tip>
          <strong>Gyllene regeln:</strong> AI ar din assistent, inte din
          ghostwriter. Varje ord i din sluttext ska vara nagot du forstar, star
          bakom och kan forklara. Om du inte forstar varfor nagot ar bra, har du
          inte lart dig nagot.
        </Tip>
      </Section>

      {/* Summary */}
      <section className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          Sammanfattning
        </h2>
        <ul className="ml-4 list-disc space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            Anvand AI for <strong>brainstorming och ideer</strong>, inte for
            att skriva at dig.
          </li>
          <li>
            Be om <strong>specifik feedback</strong> och be AI forklara sina
            forslag.
          </li>
          <li>
            Anvand AI for att <strong>utveckla och testa argument</strong> genom
            att utforska motargument och perspektivbyten.
          </li>
          <li>
            <strong>Plagiera aldrig.</strong> Texten du lamnar in ska vara din
            egen.
          </li>
          <li>
            Folj <strong>steg-for-steg-guiden</strong> for att integrera AI
            naturligt i din skrivprocess.
          </li>
        </ul>
      </section>
    </div>
  );
}
