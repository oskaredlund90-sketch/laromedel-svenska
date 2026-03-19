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
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
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

/* Accent colors per age group */
const ACCENT_COLORS: Record<string, { icon: string; bg: string; badge: string; border: string }> = {
  lagstadiet: {
    icon: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-100 group-hover:bg-sky-200 dark:bg-sky-900/30 dark:group-hover:bg-sky-900/50",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
    border: "hover:border-sky-300 dark:hover:border-sky-700",
  },
  mellanstadiet: {
    icon: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 group-hover:bg-emerald-200 dark:bg-emerald-900/30 dark:group-hover:bg-emerald-900/50",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    border: "hover:border-emerald-300 dark:hover:border-emerald-700",
  },
  hogstadiet: {
    icon: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-100 group-hover:bg-violet-200 dark:bg-violet-900/30 dark:group-hover:bg-violet-900/50",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
    border: "hover:border-violet-300 dark:hover:border-violet-700",
  },
  gymnasiet: {
    icon: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 group-hover:bg-amber-200 dark:bg-amber-900/30 dark:group-hover:bg-amber-900/50",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    border: "hover:border-amber-300 dark:hover:border-amber-700",
  },
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
      <section className="hero-dot-pattern relative py-20 text-center sm:py-28">
        {/* Accent line */}
        <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-neutral-900 dark:bg-white animate-fade-in-up" />
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl animate-fade-in-up delay-100">
          L&auml;romedel i Svenska
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 animate-fade-in-up delay-200">
          Ett &ouml;ppet digitalt l&auml;romedel i svenska och svenska som andraspr&aring;k.
          Kursplaner, grammatik, skrivverkstad, &ouml;vningar och mer &ndash; allt
          anpassat efter din &aring;rskurs.
        </p>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500 animate-fade-in-up delay-300">
          V&auml;lj ditt stadie nedan f&ouml;r att b&ouml;rja.
        </p>
      </section>

      {/* Section divider */}
      <div className="section-divider mx-auto max-w-md" />

      {/* Age Groups */}
      <section className="py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {AGE_GROUPS.map((group, i) => {
            const Icon =
              AGE_GROUP_ICONS[group.slug as keyof typeof AGE_GROUP_ICONS];
            const highlights = AGE_GROUP_HIGHLIGHTS[group.slug] ?? [];
            const accent = ACCENT_COLORS[group.slug] ?? ACCENT_COLORS.hogstadiet;
            return (
              <AnimateOnScroll key={group.slug} delay={i * 100}>
                <Link href={`/${group.slug}`}>
                  <Card className={`group h-full hover:-translate-y-1 hover:shadow-lg ${accent.border}`}>
                    <CardHeader>
                      <div className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${accent.bg}`}>
                        <Icon className={`h-6 w-6 ${accent.icon}`} />
                      </div>
                      <CardTitle>{group.label}</CardTitle>
                      <CardDescription>{group.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {highlights.map((h) => (
                          <span
                            key={h}
                            className={`rounded-full px-2.5 py-0.5 text-xs ${accent.badge}`}
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
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider mx-auto max-w-md" />

      {/* Veckans ord — ett per stadie */}
      <section className="py-16">
        <AnimateOnScroll>
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Veckans ord
          </h2>
        </AnimateOnScroll>
        <div className="grid gap-6 sm:grid-cols-2">
          {wordsByGroup.map(({ ageGroup, words }, i) => (
            <AnimateOnScroll key={ageGroup} delay={i * 100}>
              <h3 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {AGE_GROUP_LABELS[ageGroup]}
              </h3>
              <VeckansOrd words={words} />
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
