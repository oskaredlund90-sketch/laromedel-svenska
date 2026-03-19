import { ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Källkritik och AI",
  description: "Lär dig granska AI-genererad text kritiskt – identifiera felaktigheter och hallucineringar.",
};

const PRINCIPLES = [
  {
    title: "AI kan ha fel",
    description: "AI-modeller genererar text baserat på mönster, inte fakta. De kan producera övertygande text som innehåller felaktigheter – så kallade hallucineringar.",
  },
  {
    title: "Kontrollera alltid fakta",
    description: "Dubbelkolla viktiga påståenden mot trovärdiga källor. Om AI hänvisar till en källa, kontrollera att den existerar och säger det AI påstår.",
  },
  {
    title: "AI saknar egna åsikter",
    description: "AI har inga egna tankar eller känslor. Den genererar text som ser rimlig ut baserat på träningsdata. Var kritisk till formuleringar som låter som åsikter.",
  },
  {
    title: "Var uppmärksam på bias",
    description: "AI:ns svar kan vara färgade av vilken data den tränats på. Olika perspektiv och röster kan saknas eller vara underrepresenterade.",
  },
];

const EXERCISES = [
  {
    title: "Hitta felet",
    instruction: "Be AI att skriva en kort text om ett ämne du kan väl. Läs texten och markera allt som inte stämmer eller som du inte kan verifiera.",
    difficulty: "Alla nivåer",
  },
  {
    title: "Källkontroll",
    instruction: "Be AI att lista fem fakta om ett historiskt ämne med källhänvisningar. Kontrollera om källorna finns och om de verkligen säger det AI påstår.",
    difficulty: "Högstadiet & Gymnasiet",
  },
  {
    title: "Perspektivanalys",
    instruction: "Ställ samma fråga till AI på olika sätt och jämför svaren. Ändras innehållet beroende på hur du frågar? Vilka perspektiv saknas?",
    difficulty: "Gymnasiet",
  },
];

export default function KallkritikPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <ShieldCheck className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Källkritik och AI
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          AI-genererad text kan vara övertygande men inte alltid korrekt.
          Här lär du dig att granska den kritiskt.
        </p>
      </div>

      {/* Principles */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
          Grundprinciper
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((principle, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-base">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Exercises */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
          Övningar
        </h2>
        <div className="space-y-4">
          {EXERCISES.map((exercise, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{exercise.title}</CardTitle>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {exercise.difficulty}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {exercise.instruction}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
