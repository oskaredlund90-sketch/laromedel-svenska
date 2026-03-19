"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

/* -------------------------------------------------------------------------- */
/*  Search index – all major pages (using new age-group routes)               */
/* -------------------------------------------------------------------------- */

interface SearchItem {
  title: string;
  description: string;
  url: string;
  category: string;
}

const AGE_GROUPS = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];
const AGE_LABELS: Record<string, string> = {
  lagstadiet: "Lagstadiet",
  mellanstadiet: "Mellanstadiet",
  hogstadiet: "Hogstadiet",
  gymnasiet: "Gymnasiet",
};

// Generate entries for each age group
const SEARCH_INDEX: SearchItem[] = [
  // Age group hubs
  ...AGE_GROUPS.map((ag) => ({
    title: AGE_LABELS[ag],
    description: `Alla resurser for ${AGE_LABELS[ag].toLowerCase()} - kursplan, grammatik, ovningar och mer`,
    url: `/${ag}`,
    category: "Arskurser",
  })),

  // Grammatik topics (linked to hogstadiet as default)
  { title: "Ordklasser", description: "Substantiv, verb, adjektiv och de andra ordklasserna", url: "/hogstadiet/grammatik/ordklasser", category: "Grammatik" },
  { title: "Meningsbyggnad", description: "Huvudsatser, bisatser och hur man bygger meningar", url: "/hogstadiet/grammatik/meningsbyggnad", category: "Grammatik" },
  { title: "Skiljetecken", description: "Punkt, komma, semikolon och andra skiljetecken", url: "/hogstadiet/grammatik/skiljetecken", category: "Grammatik" },
  { title: "Stavning", description: "Vanliga stavningsregler och svara ord", url: "/hogstadiet/grammatik/stavning", category: "Grammatik" },
  { title: "Ordbildning", description: "Sammansattning, avledning och hur nya ord skapas", url: "/hogstadiet/grammatik/ordbildning", category: "Grammatik" },
  { title: "Textbindning", description: "Sambandsord, referensbindning och hur text hanger ihop", url: "/hogstadiet/grammatik/textbindning", category: "Grammatik" },

  // Skrivverkstad
  { title: "Berattande text", description: "Mall och tips for att skriva noveller, sagor och andra berattelser", url: "/hogstadiet/skrivverkstad/berattande-text", category: "Skrivverkstad" },
  { title: "Argumenterande text", description: "Struktur for debattartiklar, insandare och argumenterande uppsatser", url: "/hogstadiet/skrivverkstad/argumenterande-text", category: "Skrivverkstad" },
  { title: "Utredande text", description: "Mall for utredande och forklarande texter", url: "/hogstadiet/skrivverkstad/utredande-text", category: "Skrivverkstad" },
  { title: "Kronika", description: "Tips och struktur for att skriva personliga kronikor", url: "/hogstadiet/skrivverkstad/kronika", category: "Skrivverkstad" },

  // Nationella prov
  ...AGE_GROUPS.map((ag) => ({
    title: `Nationella prov - ${AGE_LABELS[ag]}`,
    description: `Information om nationella proven i svenska for ${AGE_LABELS[ag].toLowerCase()}`,
    url: `/${ag}/nationella-prov`,
    category: "Nationella prov",
  })),

  // Section pages per age group
  ...AGE_GROUPS.flatMap((ag) => [
    { title: `Ovningar - ${AGE_LABELS[ag]}`, description: `Interaktiva ovningar i svenska for ${AGE_LABELS[ag].toLowerCase()}`, url: `/${ag}/ovningar`, category: "Ovningar" },
    { title: `Textbank - ${AGE_LABELS[ag]}`, description: `Exempeltexter i olika genrer for ${AGE_LABELS[ag].toLowerCase()}`, url: `/${ag}/textbank`, category: "Textbank" },
    { title: `Kursplan - ${AGE_LABELS[ag]}`, description: `Centralt innehall och kunskapskrav fran Skolverket`, url: `/${ag}/kursplan`, category: "Kursplan" },
    { title: `Ordkunskap - ${AGE_LABELS[ag]}`, description: `Veckans ord och ordovningar for ${AGE_LABELS[ag].toLowerCase()}`, url: `/${ag}/ordkunskap`, category: "Ordkunskap" },
  ]),

  // Litteraturhistoria
  { title: "Litteraturhistoria", description: "Svensk litteraturhistoria fran medeltiden till idag", url: "/hogstadiet/litteraturhistoria", category: "Litteraturhistoria" },

  // AI
  ...AGE_GROUPS.map((ag) => ({
    title: `AI i svenskan - ${AGE_LABELS[ag]}`,
    description: `Hur du kan anvanda AI-verktyg i svenskundervisningen`,
    url: `/${ag}/ai-i-svenskan`,
    category: "AI i svenskan",
  })),
];

const fuse = new Fuse(SEARCH_INDEX, {
  keys: [
    { name: "title", weight: 2 },
    { name: "description", weight: 1 },
    { name: "category", weight: 0.5 },
  ],
  threshold: 0.4,
  includeScore: true,
});

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function SokPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query.trim()).map((r) => r.item);
  }, [query]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Search className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Sok
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Hitta innehall pa hela sajten.
        </p>
      </div>

      {/* Search input */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Sok efter grammatik, skrivmallar, nationella prov..."
          autoFocus
          className="w-full rounded-lg border border-neutral-200 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-600 dark:focus:ring-neutral-800"
        />
      </div>

      {/* Results */}
      {!query.trim() && (
        <p className="text-center text-neutral-500 dark:text-neutral-400">
          Skriv i sokfaltet for att soka
        </p>
      )}

      {query.trim() && results.length === 0 && (
        <p className="text-center text-neutral-500 dark:text-neutral-400">
          Inga resultat
        </p>
      )}

      {results.length > 0 && (
        <div className="grid gap-4">
          {results.map((item) => (
            <Link key={item.url} href={item.url}>
              <Card className="group transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                      {item.category}
                    </span>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
