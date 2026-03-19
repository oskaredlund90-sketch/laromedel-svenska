import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";

/* ------------------------------------------------------------------ */
/*  Grammar topics per level                                           */
/* ------------------------------------------------------------------ */

interface GrammarTopic {
  slug: string;
  title: string;
  description: string;
  level: "basic" | "intermediate" | "advanced";
}

const ALL_TOPICS: GrammarTopic[] = [
  {
    slug: "ordklasser",
    title: "Ordklasser",
    description: "De tio ordklasserna i svenskan",
    level: "basic",
  },
  {
    slug: "skiljetecken",
    title: "Skiljetecken",
    description: "Regler for punkt, komma, kolon och mer",
    level: "basic",
  },
  {
    slug: "meningsbyggnad",
    title: "Meningsbyggnad",
    description: "Huvudsats, bisats och BIFF-regeln",
    level: "intermediate",
  },
  {
    slug: "stavning",
    title: "Stavning",
    description: "Stavningsregler och vanliga fallgropar",
    level: "intermediate",
  },
  {
    slug: "ordbildning",
    title: "Ordbildning",
    description: "Sammansattning, avledning och lanord",
    level: "advanced",
  },
  {
    slug: "textbindning",
    title: "Textbindning",
    description: "Sambandsord och textuell sammanhallning",
    level: "advanced",
  },
  {
    slug: "stilistik",
    title: "Stilistik",
    description: "Stilfigurer, ton och sprakniva",
    level: "advanced",
  },
];

const TOPICS_BY_LEVEL: Record<AgeGroup, string[]> = {
  lagstadiet: ["ordklasser", "skiljetecken"],
  mellanstadiet: ["ordklasser", "skiljetecken", "meningsbyggnad", "stavning"],
  hogstadiet: [
    "ordklasser",
    "meningsbyggnad",
    "skiljetecken",
    "stavning",
    "ordbildning",
    "textbindning",
  ],
  gymnasiet: [
    "ordklasser",
    "meningsbyggnad",
    "skiljetecken",
    "stavning",
    "ordbildning",
    "textbindning",
    "stilistik",
  ],
};

const LEVEL_DESCRIPTIONS: Record<AgeGroup, string> = {
  lagstadiet:
    "Grundlaggande grammatik for arskurs 1-3. Har lar du dig om ordklasser och skiljetecken.",
  mellanstadiet:
    "Grammatik for arskurs 4-6. Bygg vidare med meningsbyggnad och stavning.",
  hogstadiet:
    "Fordjupad grammatik for arskurs 7-9. Ordbildning och textbindning tillkommer.",
  gymnasiet:
    "Avancerad grammatik for gymnasiet. Alla amnen inklusive stilistik.",
};

const LEVEL_BADGE: Record<GrammarTopic["level"], { label: string; className: string }> = {
  basic: {
    label: "Grund",
    className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  intermediate: {
    label: "Mellan",
    className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  advanced: {
    label: "Avancerad",
    className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
};

function getTopicsForLevel(arskurs: AgeGroup): GrammarTopic[] {
  const slugs = TOPICS_BY_LEVEL[arskurs];
  if (!slugs) return [];
  return slugs
    .map((slug) => ALL_TOPICS.find((t) => t.slug === slug))
    .filter((t): t is GrammarTopic => t !== undefined);
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Grammatik - ${group.label}`,
    description: `Grammatikovningar och genomgangar for ${group.label.toLowerCase()}.`,
  };
}

export default async function GrammatikPage({ params }: Props) {
  const { arskurs } = await params;

  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) {
    notFound();
  }

  const topics = getTopicsForLevel(arskurs as AgeGroup);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Grammatik
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {LEVEL_DESCRIPTIONS[arskurs as AgeGroup]}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => {
          const badge = LEVEL_BADGE[topic.level];
          return (
            <Link
              key={topic.slug}
              href={`/${arskurs}/grammatik/${topic.slug}`}
              className="group"
            >
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <Badge variant="secondary" className={badge.className}>
                      {badge.label}
                    </Badge>
                  </div>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
