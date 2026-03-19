import Link from "next/link";
import { BookOpen, GraduationCap, Lightbulb, Sparkles, PenLine, BookA, ClipboardCheck, Dumbbell, Globe } from "lucide-react";
import { VeckansOrd } from "@/components/veckans-ord";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { AGE_GROUPS } from "@/lib/skolverket/constants";

const AGE_GROUP_ICONS = {
  lagstadiet: BookOpen,
  mellanstadiet: BookA,
  hogstadiet: GraduationCap,
  gymnasiet: Sparkles,
} as const;

const FEATURE_SECTIONS = [
  {
    title: "AI-labbet",
    description: "Lär dig använda AI-verktyg i svenskundervisningen med praktiska exempel och promptmallar.",
    href: "/ai-labbet",
    icon: Lightbulb,
  },
  {
    title: "Grammatik",
    description: "Grammatikreferens organiserad efter svårighetsgrad med tydliga förklaringar.",
    href: "/grammatik",
    icon: BookA,
  },
  {
    title: "Skrivverkstad",
    description: "Skrivmallar och verktyg för berättande, argumenterande och utredande texter.",
    href: "/skrivverkstad",
    icon: PenLine,
  },
  {
    title: "Nationella prov",
    description: "Info om nationella proven i svenska för alla årskurser – delprov, bedömning och strategier.",
    href: "/nationella-prov",
    icon: ClipboardCheck,
  },
  {
    title: "Övningar",
    description: "Interaktiva övningar i ordklasser, sambandsord, skiljetecken och stavning.",
    href: "/ovningar",
    icon: Dumbbell,
  },
  {
    title: "SVA (andraspråk)",
    description: "Tips och resurser för dig som läser svenska som andraspråk – ordförråd, grammatik och nationella prov.",
    href: "/sva",
    icon: Globe,
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-16 text-center sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Läromedel i Svenska
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Ett öppet digitalt läromedel i svenska och svenska som andraspråk.
          Kursplaner, lärarhandledningar, elevtips och AI-verktyg
          &ndash; allt samlat på ett ställe, utan inloggning.
        </p>
      </section>

      {/* Veckans Ord */}
      <VeckansOrd />

      {/* Age Groups */}
      <section className="pb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-neutral-900 dark:text-white">
          Välj årskurs
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AGE_GROUPS.map((group) => {
            const Icon = AGE_GROUP_ICONS[group.slug];
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
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Kursplan, lärarhandledningar, elevtips och AI-verktyg
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-neutral-200 py-16 dark:border-neutral-800">
        <h2 className="mb-8 text-center text-2xl font-semibold text-neutral-900 dark:text-white">
          Utforska resurser
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_SECTIONS.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.href} href={feature.href}>
                <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-neutral-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
