import Link from "next/link";
import { notFound } from "next/navigation";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { ELEVTIPS } from "@/lib/content/elevtips-data";
import type { AgeGroup } from "@/lib/supabase/types";

interface Props {
  params: Promise<{ arskurs: string }>;
}

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

export async function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Elevtips ${group.label}`,
    description: `Elevtips i svenska för ${group.label.toLowerCase()} – strategier och tips för att lyckas.`,
  };
}

export default async function ElevtipsPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;
  const tips = ELEVTIPS[arskurs as AgeGroup] ?? [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
          <GraduationCap className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Elevtips &ndash; {group.label}
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Strategier och tips för att lyckas i svenskämnet, {group.description.toLowerCase()}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {tips.map((tip) => (
          <Link key={tip.slug} href={`/${arskurs}/elevtips/${tip.slug}`}>
            <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
              <CardHeader>
                <div className="mb-2 text-2xl">{tip.emoji}</div>
                <CardTitle>{tip.title}</CardTitle>
                <CardDescription>{tip.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tip.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-neutral-600 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white">
                  Läs mer
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
