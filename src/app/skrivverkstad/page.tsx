import Link from "next/link";
import { PenLine } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skrivverkstad",
  description: "Skrivmallar och verktyg för berättande, argumenterande och utredande texter.",
};

const TEMPLATES = [
  {
    slug: "berattande-text",
    title: "Berättande text",
    description: "Mall och tips för att skriva noveller, sagor och andra berättelser",
    levels: ["Alla nivåer"],
  },
  {
    slug: "argumenterande-text",
    title: "Argumenterande text",
    description: "Struktur för debattartiklar, insändare och argumenterande uppsatser",
    levels: ["Mellanstadiet", "Högstadiet", "Gymnasiet"],
  },
  {
    slug: "utredande-text",
    title: "Utredande text",
    description: "Mall för utredande och förklarande texter",
    levels: ["Högstadiet", "Gymnasiet"],
  },
  {
    slug: "kronika",
    title: "Krönika",
    description: "Tips och struktur för att skriva personliga krönikor",
    levels: ["Högstadiet", "Gymnasiet"],
  },
];

export default function SkrivverkstadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <PenLine className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Skrivverkstad
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Skrivmallar och tips för olika texttyper. Välj en mall nedan.
        </p>
      </div>

      <div className="grid gap-4">
        {TEMPLATES.map((template) => (
          <Link key={template.slug} href={`/skrivverkstad/${template.slug}`}>
            <Card className="group transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{template.title}</CardTitle>
                  <div className="flex gap-1">
                    {template.levels.map((level) => (
                      <Badge key={level} variant="secondary">
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
