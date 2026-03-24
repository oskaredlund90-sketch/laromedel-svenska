import Link from "next/link";
import { PenLine, Type, Palette, Pilcrow, ArrowLeftRight, MessageSquareQuote } from "lucide-react";
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
    title: "Berättande text",
    description: "Mall och tips för att skriva noveller, sagor och andra berättelser",
    levels: ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  {
    slug: "argumenterande-text",
    title: "Argumenterande text",
    description: "Struktur för debattartiklar, insändare och argumenterande uppsatser",
    levels: ["mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  {
    slug: "utredande-text",
    title: "Utredande text",
    description: "Mall för utredande och förklarande texter",
    levels: ["hogstadiet", "gymnasiet"],
  },
  {
    slug: "kronika",
    title: "Krönika",
    description: "Tips och struktur för att skriva personliga krönikor",
    levels: ["hogstadiet", "gymnasiet"],
  },
  {
    slug: "faktatext",
    title: "Faktatext",
    description: "Mall och tips för att skriva tydliga faktatexter med korrekta källor",
    levels: ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  {
    slug: "historisk-text",
    title: "Historisk text",
    description: "Skriv om historiska händelser i berättande form",
    levels: ["mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  {
    slug: "poesi",
    title: "Poesi",
    description: "Rim, rytm och bildspråk – skriv egna dikter",
    levels: ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  {
    slug: "recension",
    title: "Recension",
    description: "Granska och bedöm böcker, filmer och spel",
    levels: ["mellanstadiet", "hogstadiet", "gymnasiet"],
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
    description: `Skrivmallar och verktyg för ${group.label.toLowerCase()}.`,
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
          Skrivmallar och tips för olika texttyper – anpassade för{" "}
          <strong>{group.label.toLowerCase()}</strong> ({group.description}).
        </p>
      </div>

      {templates.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">
          Inga skrivmallar tillgängliga för denna årskurs än.
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

      {/* Interactive writing exercises */}
      <div className="mt-12 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Interaktiva övningar
        </h2>
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          Träna praktiska skrivfärdigheter med dessa interaktiva övningar.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href={`/${arskurs}/skrivverkstad/skiljetecken`}>
            <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                  <Type className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                </div>
                <CardTitle className="text-base">Placera ut skiljetecken</CardTitle>
                <CardDescription>
                  Läs texter utan skiljetecken och placera ut punkt, komma, frågetecken och mer
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href={`/${arskurs}/skrivverkstad/gestaltning`}>
            <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                  <Palette className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                </div>
                <CardTitle className="text-base">Gestaltning &ndash; lägg till beskrivningar</CardTitle>
                <CardDescription>
                  Fyll i egna adjektiv, beskrivningar och gestaltningar i texter
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href={`/${arskurs}/skrivverkstad/styckeindelning`}>
            <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                  <Pilcrow className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                </div>
                <CardTitle className="text-base">Styckeindelning</CardTitle>
                <CardDescription>
                  Dela in texter i stycken och lär dig när det är dags för ny rad
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href={`/${arskurs}/skrivverkstad/meningsvariation`}>
            <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                  <ArrowLeftRight className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                </div>
                <CardTitle className="text-base">Meningsvariation</CardTitle>
                <CardDescription>
                  Omformulera meningar för att skapa bättre flöde och variation i din text
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href={`/${arskurs}/skrivverkstad/citatteknik`}>
            <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                  <MessageSquareQuote className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                </div>
                <CardTitle className="text-base">Citatteknik</CardTitle>
                <CardDescription>
                  Öva på att skriva direkt och indirekt tal med rätt citattecken
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
