import Link from "next/link";
import { PenLine } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  Templates                                                          */
/* ------------------------------------------------------------------ */

const ALL_TEMPLATES = [
  {
    slug: "berattande-text",
    title: "Berattande text",
    description: "Mall och tips for att skriva noveller, sagor och andra berattelser",
    levels: ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  {
    slug: "argumenterande-text",
    title: "Argumenterande text",
    description: "Struktur for debattartiklar, insandare och argumenterande uppsatser",
    levels: ["mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  {
    slug: "utredande-text",
    title: "Utredande text",
    description: "Mall for utredande och forklarande texter",
    levels: ["hogstadiet", "gymnasiet"],
  },
  {
    slug: "kronika",
    title: "Kronika",
    description: "Tips och struktur for att skriva personliga kronikor",
    levels: ["hogstadiet", "gymnasiet"],
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Skrivverkstad – ${group.label}`,
    description: `Skrivmallar och verktyg for ${group.label.toLowerCase()}.`,
  };
}

export default async function SkrivverkstadArskursPage({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);

  if (!group) {
    notFound();
  }

  const templates = ALL_TEMPLATES.filter((t) => t.levels.includes(arskurs));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href={`/${arskurs}`} className="hover:underline">
          {group.label}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-900 dark:text-white">Skrivverkstad</span>
      </nav>

      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <PenLine className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Skrivverkstad
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Skrivmallar och tips for olika texttyper – anpassade for{" "}
          <strong>{group.label.toLowerCase()}</strong> ({group.description}).
        </p>
      </div>

      {templates.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">
          Inga skrivmallar tillgangliga for denna arskurs an.
        </p>
      ) : (
        <div className="grid gap-4">
          {templates.map((template) => (
            <Link
              key={template.slug}
              href={`/${arskurs}/skrivverkstad/${template.slug}`}
            >
              <Card className="group transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">
                      {template.title}
                    </CardTitle>
                    <Badge variant="secondary">{group.label}</Badge>
                  </div>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
