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
  title: "Skrivhjälp med AI",
  description:
    "Använd AI som ett stöd i skrivprocessen utan att tappa din egen röst.",
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
          Skrivhjälp med AI
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          AI kan vara ett kraftfullt stöd i din skrivprocess &mdash; men det är
          du som är författaren. Lär dig använda AI på ett sätt som stärker ditt
          eget skrivande.
        </p>
      </div>

      {/* 1. AI som brainstormingverktyg */}
      <Section title="AI som brainstormingverktyg">
        <div className="flex items-start gap-3 mb-4">
          <Brain className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            En av de bästa användningarna av AI i skrivandet är att använda det
            för brainstorming. När du sitter fast eller behöver inspiration kan
            AI hjälpa dig att komma igång utan att det tar över ditt skrivande.
          </p>
        </div>

        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hitta infallsvinklar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                När du ska skriva om ett ämne kan AI ge dig många olika
                infallsvinklar att välja mellan. Du bestämmer sedan vilken
                vinkel som passar dig bäst.
              </p>
              <div className="mt-3 rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Jag ska skriva en krönika om stress bland unga. Ge mig
                  tio olika vinklar jag kan välja mellan. Blanda personliga,
                  samhällskritiska och humoristiska perspektiv.&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Tankekarta med AI-stöd
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Be AI skapa en tankekarta eller lista kopplingar till ditt ämne.
                Använd det som startpunkt och bygg vidare med egna idéer.
              </p>
              <div className="mt-3 rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Skapa en tankekarta med kopplingar till ämnet
                  'identitet'. Inkludera minst fyra huvudgrenar med
                  underämnen.&quot;
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
                Om du har svårt att börja skriva kan AI ge dig en startmening
                eller ett scenario att bygga vidare på. Det viktiga är att du
                sedan gör texten till din egen.
              </p>
              <div className="mt-3 rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Ge mig fem olika första meningar för en novell med
                  temat 'övergivenhet'. Använd olika stilar: en dramatisk, en
                  lugn, en frågebaserad, en dialog och en beskrivande.&quot;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tip>
          <strong>Kom ihåg:</strong> Brainstorming med AI är som att diskutera
          med en klasskompis. Du får idéer, men det är du som väljer, anpassar
          och utvecklar dem till något eget.
        </Tip>
      </Section>

      {/* 2. Få feedback på din text */}
      <Section title="Få feedback på din text">
        <div className="flex items-start gap-3 mb-4">
          <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            AI kan ge dig snabb och detaljerad feedback på din text. Det
            ersätter inte lärarens feedback, men det är ett bra komplement
            &mdash; särskilt när du vill få feedback innan du lämnar in.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
            Olika typer av feedback du kan be om
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Språk och stil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  &quot;Granska min text med fokus på språklig variation,
                  ordval och meningsbyggnad. Ge konkreta förslag på
                  förbättringar.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Struktur och uppbyggnad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  &quot;Analysera strukturen i min text. Finns det en röd
                  träd? Hänger styckena ihop? Ge förslag på bättre
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
                  &quot;Utvärdera argumenten i min text. Är de övertygande? Finns
                  det logiska luckor? Föreslå motargument jag bör
                  bemöta.&quot;
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
                  &quot;Min text riktar sig till ungdomar. Är språket
                  anpassat för målgruppen? Är tonen rätt? Vad bör
                  ändras?&quot;
                </p>
              </CardContent>
            </Card>
          </div>

          <Tip>
            <strong>Viktigt:</strong> Be alltid AI:n att förklara VARFÖR den
            föreslår en ändring. Då lär du dig något, istället för att bara
            följa förslag blint.
          </Tip>
        </div>
      </Section>

      {/* 3. Utveckla argument */}
      <Section title="Utveckla argument">
        <div className="flex items-start gap-3 mb-4">
          <Swords className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            När du skriver argumenterande text kan AI hjälpa dig att skärpa
            dina argument och se fler perspektiv. Här är strategier för att
            använda AI i argumentationsprocessen.
          </p>
        </div>

        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Djupanalys av argument</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                Be AI granska styrkan i dina argument och hjälpa dig fördjupa
                dem.
              </p>
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Här är mitt argument för att skoluniformer borde
                  införas: [ditt argument]. Hjälp mig förstärkningen det genom att:
                  1) ge stödjande fakta, 2) förklara logiken tydligare, 3)
                  föreslå ett konkret exempel.&quot;
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
                Starkt skrivande innebär att du bemöter motargument. Låt AI
                spela djav&auml;lens advokat.
              </p>
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Jag argumenterar för att sociala medier bör förbjudas
                  för barn under 13. Ge mig de tre starkaste motargumenten och
                  förklara hur jag kan bemöta vart och ett.&quot;
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
                Se en fråga från flera sidor för att skriva en mer nyanserad
                text.
              </p>
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  &quot;Beskriv frågan om läxtråd på skolan från tre
                  perspektiv: en elev, en lärare och en föräldrar. Vilka
                  argument är viktigast för varje grupp?&quot;
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
            Det är viktigt att förstå skillnaden mellan att använda AI som
            stöd och att plagiera. Här är regler och riktlinjer du måste
            följa.
          </p>
        </div>

        <Warning>
          <strong>Grundregeln:</strong> Om du lämnar in text som AI har skrivit
          och presenterar den som din egen, är det plagiering. Det gäller oavsett
          om texten är helt AI-genererad eller till stor del omskrivna av AI.
        </Warning>

        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">
              När är det OK att använda AI?
            </h3>
            <ul className="ml-4 list-disc space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
              <li>För att brainstorma och få idéer</li>
              <li>För att få feedback på text du själv har skrivit</li>
              <li>För att förstå grammatikregler och språkliga begrepp</li>
              <li>För att öva på att skriva (när det inte är en bedömd uppgift)</li>
              <li>När läraren uttryckligen tillåter det</li>
            </ul>
          </div>

          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
            <h3 className="mb-2 font-semibold text-red-900 dark:text-red-200">
              När är det INTE OK?
            </h3>
            <ul className="ml-4 list-disc space-y-1 text-sm text-red-800 dark:text-red-300">
              <li>Att kopiera AI-genererad text och lämna in som sin egen</li>
              <li>Att låta AI skriva hela eller stora delar av en uppgift</li>
              <li>Att använda AI på prov eller examinationer (om inte tillåtet)</li>
              <li>Att dölja att du använt AI när läraren frågar</li>
            </ul>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">
              Integritet och personuppgifter
            </h3>
            <ul className="ml-4 list-disc space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                <strong>Dela aldrig personuppgifter</strong> med AI-verktyg.
                Inga fullständiga namn, personnummer, adresser eller andra
                känsliga uppgifter.
              </li>
              <li>
                <strong>Skriv inte om andra personer</strong> med detaljer som
                kan identifiera dem. AI-företag kan använda dina konversationer
                för att träna framtida modeller.
              </li>
              <li>
                <strong>Var försiktig med skolmaterial.</strong> Klistra inte
                in provsvar eller provfrågor i AI-verktyg.
              </li>
              <li>
                <strong>Använd skolan godkända verktyg.</strong> Många skolor
                har regler för vilka AI-verktyg som får användas.
              </li>
            </ul>
          </div>
        </div>

        <Warning>
          <strong>Tips:</strong> Var alltid öppen med hur du har använt AI. Om
          du är osäker på vad som är tillåtet, fråga din lärare. Transparens är
          nyckeln.
        </Warning>
      </Section>

      {/* 5. Steg-för-steg-guide */}
      <Section title="Steg-för-steg: använd AI i skrivprocessen">
        <div className="flex items-start gap-3 mb-6">
          <ListOrdered className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            Här är en komplett guide för hur du kan använda AI som stöd genom
            hela skrivprocessen &mdash; från ide till färdigt text.
          </p>
        </div>

        <div className="space-y-0">
          <StepCard
            step={1}
            title="Brainstorma"
            description="Börja med att använda AI för att utforska ditt ämne och hitta infallsvinklar. Skriv ner de idéer som tilltalar dig mest."
            prompt="Ge mig åtta olika infallsvinklar för en krönika om [ditt ämne]. Blanda seriösa och lite oväntade perspektiv."
          />
          <StepCard
            step={2}
            title="Planera och strukturera"
            description="När du valt din vinkel, be AI hjälpa dig med en disposition. Anpassa den efter dina egna tankar."
            prompt="Hjälp mig skapa en disposition för min argumenterande text om [ämne]. Jag vill ha inledning, tre argument, ett motargument och avslutning."
          />
          <StepCard
            step={3}
            title="Skriv själv"
            description="Nu skriver du! Använd din disposition och dina egna ord. Det är här din röst och dina tankar ska synas."
            prompt="(Inga promptar i detta steg &mdash; du skriver själv!)"
          />
          <StepCard
            step={4}
            title="Få feedback"
            description="När du har ett första utkast, be AI om feedback. Var specifik med vad du vill ha hjälp med."
            prompt="Här är mitt utkast [klistra in]. Ge feedback på: 1) den röda tråden, 2) språklig variation, 3) argumentens styrka. Föreslå förbättringar men skriv inte om texten."
          />
          <StepCard
            step={5}
            title="Bearbeta och finslipa"
            description="Använd feedbacken för att göra egna förbättringar. Du kan be AI förklara specifika förslag närmare."
            prompt="Du föreslog att jag ska variera meningslängden mer. Ge mig tre konkreta exempel på hur jag kan skriva om denna mening på olika sätt: [din mening]."
          />
        </div>

        <Tip>
          <strong>Gyllene regeln:</strong> AI är din assistent, inte din
          ghostwriter. Varje ord i din sluttext ska vara något du förstår, står
          bakom och kan förklara. Om du inte förstår varför något är bra, har du
          inte lärt dig något.
        </Tip>
      </Section>

      {/* Summary */}
      <section className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          Sammanfattning
        </h2>
        <ul className="ml-4 list-disc space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            Använd AI för <strong>brainstorming och idéer</strong>, inte för
            att skriva åt dig.
          </li>
          <li>
            Be om <strong>specifik feedback</strong> och be AI förklara sina
            förslag.
          </li>
          <li>
            Använd AI för att <strong>utveckla och testa argument</strong> genom
            att utforska motargument och perspektivbyten.
          </li>
          <li>
            <strong>Plagiera aldrig.</strong> Texten du lämnar in ska vara din
            egen.
          </li>
          <li>
            Följ <strong>steg-för-steg-guiden</strong> för att integrera AI
            naturligt i din skrivprocess.
          </li>
        </ul>
      </section>
    </div>
  );
}
