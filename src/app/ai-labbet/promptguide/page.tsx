import { MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promptguide – KRAFT-modellen",
  description: "Lär dig skriva bra promptar till AI med KRAFT-modellen: Kontext, Roll, Aufgift, Format, Ton.",
};

const KRAFT_STEPS = [
  {
    letter: "K",
    title: "Kontext",
    description: "Berätta för AI:n vad det handlar om. Vilket ämne? Vilken nivå?",
    example: "Jag går i årskurs 8 och vi jobbar med argumenterande text i svenskan.",
  },
  {
    letter: "R",
    title: "Roll",
    description: "Be AI:n anta en roll som passar uppgiften.",
    example: "Du är en svensklärare som hjälper elever att förbättra sina texter.",
  },
  {
    letter: "A",
    title: "Aufgift",
    description: "Var specifik med vad du vill ha hjälp med.",
    example: "Ge mig fem argument för och fem argument emot skoluniformer.",
  },
  {
    letter: "F",
    title: "Format",
    description: "Beskriv hur du vill att svaret ska se ut.",
    example: "Presentera argumenten i en punktlista med en mening per argument.",
  },
  {
    letter: "T",
    title: "Ton",
    description: "Ange vilken ton eller stil svaret ska ha.",
    example: "Använd ett formellt språk som passar för en debattartikel.",
  },
];

const PROMPT_EXAMPLES = [
  {
    level: "Lågstadiet",
    task: "Hitta rimord",
    prompt: "Kan du ge mig tio ord som rimmar på 'katt'? Jag går i årskurs 2 och vi övar på rim.",
  },
  {
    level: "Mellanstadiet",
    task: "Skriva en berättelse",
    prompt: "Jag ska skriva en spännande berättelse i skolan. Hjälp mig att komma på en handling med en inledning, ett problem och en lösning. Berättelsen ska handla om ett äventyr i skogen.",
  },
  {
    level: "Högstadiet",
    task: "Argumenterande text",
    prompt: "Du är en svensklärare. Jag ska skriva en argumenterande text om sociala medier och ungdomar. Ge mig en disposition med tes, tre argument med underbyggnad och en avslutning. Formellt språk.",
  },
  {
    level: "Gymnasiet",
    task: "Litteraturanalys",
    prompt: "Jag läser Svenska 2 och ska analysera ett novellutdrag. Förklara hur jag kan använda begreppen berättarperspektiv, symbolik och tema i min analys. Ge konkreta exempel på formuleringar jag kan använda.",
  },
];

export default function PromptguidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <MessageSquare className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Promptguide
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Lär dig skriva bra promptar till AI med KRAFT-modellen.
        </p>
      </div>

      {/* KRAFT Model */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
          KRAFT-modellen
        </h2>
        <div className="space-y-4">
          {KRAFT_STEPS.map((step) => (
            <Card key={step.letter}>
              <CardHeader className="flex-row items-center gap-4 pb-2">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-lg font-bold text-white dark:bg-white dark:text-neutral-900">
                  {step.letter}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-neutral-700 dark:text-neutral-300">
                  {step.description}
                </p>
                <div className="rounded-lg bg-neutral-50 p-3 text-sm italic text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                  &ldquo;{step.example}&rdquo;
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
          Exempelprompts per årskurs
        </h2>
        <div className="space-y-4">
          {PROMPT_EXAMPLES.map((example, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{example.level}</Badge>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {example.task}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-neutral-50 p-4 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  {example.prompt}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Warning */}
      <div className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
        <h3 className="font-semibold text-amber-900 dark:text-amber-200">
          Kom ihåg
        </h3>
        <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">
          AI är ett verktyg som kan hjälpa dig, men det ersätter inte ditt eget tänkande.
          Kontrollera alltid AI:ns svar, använd egna ord och var källkritisk.
          Det du lämnar in ska vara ditt eget arbete.
        </p>
      </div>
    </div>
  );
}
