import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { getGuidesForAgeGroup } from "@/lib/data/lararhandledningar";

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
    title: `Lärarhandledning ${group.label}`,
    description: `Lärarhandledningar i svenska för ${group.label.toLowerCase()} – lektionsplaneringar, tips och bedömningsstöd.`,
  };
}

export default async function LararhandledningPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;
  const guides = getGuidesForAgeGroup(arskurs);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Lärarhandledning &ndash; {group.label}
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Lektionsplaneringar, tips och bedömningsstöd för{" "}
          {group.description.toLowerCase()}
        </p>
      </div>

      <div className="grid gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/${arskurs}/lararhandledning/${guide.slug}`}
          >
            <Card className="group transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <CardTitle className="group-hover:text-neutral-700 dark:group-hover:text-neutral-200">
                      {guide.title}
                    </CardTitle>
                    <CardDescription className="mt-1.5">
                      {guide.description}
                    </CardDescription>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 dark:text-neutral-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{guide.estimatedTime}</span>
                  </div>
                  <span className="text-neutral-300 dark:text-neutral-700">
                    &middot;
                  </span>
                  {guide.topics.map((topic) => (
                    <Badge key={topic} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
