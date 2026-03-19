import Link from "next/link";
import {
  BookOpen,
  BookA,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { VeckansOrd } from "@/components/veckans-ord";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { getWordsWithFallback } from "@/lib/supabase/words";

const AGE_GROUP_ICONS = {
  lagstadiet: BookOpen,
  mellanstadiet: BookA,
  hogstadiet: GraduationCap,
  gymnasiet: Sparkles,
} as const;

const AGE_GROUP_HIGHLIGHTS: Record<string, string[]> = {
  lagstadiet: ["Kursplan", "Grammatik", "Skrivverkstad", "Ordkunskap"],
  mellanstadiet: [
    "Kursplan",
    "Grammatik",
    "Skrivverkstad",
    "Nationella prov",
  ],
  hogstadiet: [
    "Kursplan",
    "Grammatik",
    "Skrivverkstad",
    "Textbank",
    "Nationella prov",
  ],
  gymnasiet: [
    "Kursplan",
    "Litteraturhistoria",
    "Skrivverkstad",
    "Nationella prov",
  ],
};

const AGE_GROUP_LABELS: Record<AgeGroup, string> = {
  lagstadiet: "Lågstadiet",
  mellanstadiet: "Mellanstadiet",
  hogstadiet: "Högstadiet",
  gymnasiet: "Gymnasiet",
};

export default async function HomePage() {
  // Fetch one set of words per age group for Veckans ord
  const wordsByGroup = await Promise.all(
    (["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"] as AgeGroup[]).map(
      async (ag) => ({ ageGroup: ag, words: await getWordsWithFallback(ag) })
    )
  );
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-16 text-center sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          L&auml;romedel i Svenska
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Ett &ouml;ppet digitalt l&auml;romedel i svenska och svenska som andraspr&aring;k.
          Kursplaner, grammatik, skrivverkstad, &ouml;vningar och mer &ndash; allt
          anpassat efter din &aring;rskurs.
        </p>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
          V&auml;lj ditt stadie nedan f&ouml;r att b&ouml;rja.
        </p>
      </section>

      {/* Age Groups */}
      <section className="pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {AGE_GROUPS.map((group) => {
            const Icon =
              AGE_GROUP_ICONS[group.slug as keyof typeof AGE_GROUP_ICONS];
            const highlights = AGE_GROUP_HIGHLIGHTS[group.slug] ?? [];
            return (
              <Link key={group.slug} href={`/${group.slug}`}>
                <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-neutral-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{group.label}</CardTitle>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-sm font-medium text-neutral-900 dark:text-white">
                      Utforska
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Veckans ord — ett per stadie */}
      <section className="pb-16">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Veckans ord
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {wordsByGroup.map(({ ageGroup, words }) => (
            <div key={ageGroup}>
              <h3 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {AGE_GROUP_LABELS[ageGroup]}
              </h3>
              <VeckansOrd words={words} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
