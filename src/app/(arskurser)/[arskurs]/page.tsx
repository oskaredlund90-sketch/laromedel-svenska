import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, GraduationCap, Lightbulb, Users, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

const SECTIONS = [
  {
    slug: "kursplan",
    title: "Kursplan",
    description: "Centralt innehåll och kunskapskrav från Skolverket",
    icon: BookOpen,
  },
  {
    slug: "lararhandledning",
    title: "Lärarhandledning",
    description: "Lektionsplaneringar, tips och bedömningsstöd",
    icon: Users,
  },
  {
    slug: "elevtips",
    title: "Elevtips",
    description: "Strategier och tips för att lyckas i svenskämnet",
    icon: GraduationCap,
  },
  {
    slug: "ai-i-svenskan",
    title: "AI i svenskan",
    description: "Hur du kan använda AI-verktyg i undervisningen",
    icon: Sparkles,
  },
];

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `${group.label} (${group.description})`,
    description: `Läromedel i svenska för ${group.label.toLowerCase()} – kursplan, lärarhandledningar, elevtips och AI-verktyg.`,
  };
}

export default async function AgeGroupPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          {group.label}
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {group.description} &ndash; Svenska och svenska som andraspråk
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.slug} href={`/${arskurs}/${section.slug}`}>
              <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-neutral-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
