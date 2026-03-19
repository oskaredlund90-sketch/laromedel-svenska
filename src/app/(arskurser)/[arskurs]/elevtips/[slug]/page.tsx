import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { ELEVTIPS } from "@/lib/content/elevtips-data";
import type { AgeGroup } from "@/lib/supabase/types";

interface Props {
  params: Promise<{ arskurs: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { arskurs: string; slug: string }[] = [];
  for (const group of AGE_GROUPS) {
    const tips = ELEVTIPS[group.slug] ?? [];
    for (const tip of tips) {
      params.push({ arskurs: group.slug, slug: tip.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { arskurs, slug } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const tips = ELEVTIPS[arskurs as AgeGroup] ?? [];
  const tip = tips.find((t) => t.slug === slug);
  if (!group || !tip) return {};
  return {
    title: `${tip.title} – Elevtips ${group.label}`,
    description: tip.summary,
  };
}

export default async function ElevtipsDetailPage({ params }: Props) {
  const { arskurs, slug } = await params;

  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) notFound();

  const tips = ELEVTIPS[arskurs as AgeGroup] ?? [];
  const tip = tips.find((t) => t.slug === slug);
  if (!tip) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Back link */}
      <Link
        href={`/${arskurs}/elevtips`}
        className="mb-8 inline-flex items-center text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Tillbaka till elevtips
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 text-4xl">{tip.emoji}</div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          {tip.title}
        </h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
          {tip.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tip.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="mb-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
        <p className="text-base leading-relaxed">{tip.intro}</p>
      </div>

      {/* Steps */}
      <div className="mb-10 space-y-6">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Steg för steg
        </h2>
        {tip.steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white dark:bg-white dark:text-neutral-900">
                  {index + 1}
                </span>
                <div>
                  <CardTitle className="mb-2">{step.title}</CardTitle>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {step.body}
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Exercise */}
      <div className="rounded-xl border-2 border-neutral-900 bg-neutral-900 p-6 text-white dark:border-white dark:bg-white dark:text-neutral-900">
        <div className="mb-3 flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          <h2 className="text-lg font-bold">{tip.exercise.title}</h2>
        </div>
        <p className="leading-relaxed">{tip.exercise.description}</p>
      </div>

      {/* Navigation to other tips */}
      <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Fler elevtips
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {tips
            .filter((t) => t.slug !== tip.slug)
            .map((otherTip) => (
              <Link key={otherTip.slug} href={`/${arskurs}/elevtips/${otherTip.slug}`}>
                <Card className="group transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                  <CardContent className="flex items-center gap-3 p-4">
                    <span className="text-xl">{otherTip.emoji}</span>
                    <span className="text-sm font-medium text-neutral-700 transition-colors group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-white">
                      {otherTip.title}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
