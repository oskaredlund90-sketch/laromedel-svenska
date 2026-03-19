import { PenLine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skrivhjälp med AI",
  description: "Arbetsflöden för att använda AI som verktyg i skrivprocessen – brainstorming, disposition, feedback.",
};

const WORKFLOWS = [
  {
    step: "1",
    title: "Brainstorming",
    description: "Använd AI för att få igång idéerna. Be om förslag på ämnen, vinklar eller argument.",
    prompt: "Jag ska skriva en krönika om [ämne]. Ge mig fem möjliga vinklar att skriva utifrån.",
    tip: "Välj en idé som du tycker om och utveckla den med egna tankar och erfarenheter.",
  },
  {
    step: "2",
    title: "Disposition",
    description: "Be AI om hjälp att strukturera din text. En bra disposition gör skrivandet lättare.",
    prompt: "Hjälp mig göra en disposition för en argumenterande text om [ämne]. Jag vill ha inledning, tre argument och avslutning.",
    tip: "Anpassa dispositionen efter dina egna idéer. AI:ns förslag är en startpunkt, inte en färdig mall.",
  },
  {
    step: "3",
    title: "Skrivande",
    description: "Skriv din text själv! AI ska inte skriva åt dig, men kan hjälpa om du kör fast.",
    prompt: "Jag har skrivit: [din mening]. Hur kan jag formulera detta tydligare?",
    tip: "Skriv alltid ett eget första utkast innan du ber AI om hjälp. Det är din text.",
  },
  {
    step: "4",
    title: "Feedback",
    description: "Klistra in din text och be AI om specifik feedback.",
    prompt: "Läs min text och ge feedback på: 1) Argumentens styrka 2) Språklig variation 3) Styckeindelning. Var konstruktiv.",
    tip: "Be om feedback på specifika saker, inte 'gör den bättre'. Ju mer specifik fråga, desto bättre svar.",
  },
  {
    step: "5",
    title: "Språkpolering",
    description: "Använd AI som en avancerad stavningskontroll i sista steget.",
    prompt: "Kontrollera stavning, grammatik och meningsbyggnad i min text. Förklara varje ändring du föreslår.",
    tip: "Acceptera inte alla ändringar blint. Förstå varför AI föreslår en ändring innan du använder den.",
  },
];

export default function SkrivhjalpPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <PenLine className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Skrivhjälp med AI
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Fem steg för att använda AI som verktyg i skrivprocessen &ndash; utan att tappa din egen röst.
        </p>
      </div>

      <div className="space-y-6">
        {WORKFLOWS.map((workflow) => (
          <Card key={workflow.step}>
            <CardHeader className="flex-row items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 text-lg font-bold text-white dark:bg-white dark:text-neutral-900">
                {workflow.step}
              </div>
              <div>
                <CardTitle>{workflow.title}</CardTitle>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {workflow.description}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-neutral-500">
                  Exempelprompt
                </p>
                <div className="rounded-lg bg-neutral-50 p-3 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  {workflow.prompt}
                </div>
              </div>
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
                <strong>Tips:</strong> {workflow.tip}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
