import Link from "next/link";
import { BookA } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grammatik",
  description: "Grammatikreferens i svenska – ordklasser, meningsbyggnad, skiljetecken och mer.",
};

const GRAMMAR_TOPICS = [
  {
    slug: "ordklasser",
    title: "Ordklasser",
    description: "Substantiv, verb, adjektiv och de andra ordklasserna",
    level: "Grund",
  },
  {
    slug: "meningsbyggnad",
    title: "Meningsbyggnad",
    description: "Huvudsatser, bisatser och hur man bygger meningar",
    level: "Medel",
  },
  {
    slug: "skiljetecken",
    title: "Skiljetecken",
    description: "Punkt, komma, semikolon och andra skiljetecken",
    level: "Grund",
  },
  {
    slug: "stavning",
    title: "Stavning",
    description: "Vanliga stavningsregler och svåra ord",
    level: "Grund",
  },
  {
    slug: "ordbildning",
    title: "Ordbildning",
    description: "Sammansättning, avledning och hur nya ord skapas",
    level: "Medel",
  },
  {
    slug: "textbindning",
    title: "Textbindning",
    description: "Sambandsord, referensbindning och hur text hänger ihop",
    level: "Avancerad",
  },
];

export default function GrammatikPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <BookA className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Grammatik
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Grammatikreferens organiserad efter svårighetsgrad. Välj ett ämne nedan.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {GRAMMAR_TOPICS.map((topic) => (
          <Link key={topic.slug} href={`/grammatik/${topic.slug}`}>
            <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{topic.title}</CardTitle>
                  <Badge variant="secondary">{topic.level}</Badge>
                </div>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
