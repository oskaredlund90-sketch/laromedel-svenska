"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

/* -------------------------------------------------------------------------- */
/*  Search index – all major pages                                            */
/* -------------------------------------------------------------------------- */

interface SearchItem {
  title: string;
  description: string;
  url: string;
  category: string;
}

const SEARCH_INDEX: SearchItem[] = [
  // Grammatik (6)
  { title: "Ordklasser", description: "Substantiv, verb, adjektiv och de andra ordklasserna", url: "/grammatik/ordklasser", category: "Grammatik" },
  { title: "Meningsbyggnad", description: "Huvudsatser, bisatser och hur man bygger meningar", url: "/grammatik/meningsbyggnad", category: "Grammatik" },
  { title: "Skiljetecken", description: "Punkt, komma, semikolon och andra skiljetecken", url: "/grammatik/skiljetecken", category: "Grammatik" },
  { title: "Stavning", description: "Vanliga stavningsregler och svåra ord", url: "/grammatik/stavning", category: "Grammatik" },
  { title: "Ordbildning", description: "Sammansättning, avledning och hur nya ord skapas", url: "/grammatik/ordbildning", category: "Grammatik" },
  { title: "Textbindning", description: "Sambandsord, referensbindning och hur text hänger ihop", url: "/grammatik/textbindning", category: "Grammatik" },

  // Skrivverkstad (4)
  { title: "Berättande text", description: "Mall och tips för att skriva noveller, sagor och andra berättelser", url: "/skrivverkstad/berattande-text", category: "Skrivverkstad" },
  { title: "Argumenterande text", description: "Struktur för debattartiklar, insändare och argumenterande uppsatser", url: "/skrivverkstad/argumenterande-text", category: "Skrivverkstad" },
  { title: "Utredande text", description: "Mall för utredande och förklarande texter", url: "/skrivverkstad/utredande-text", category: "Skrivverkstad" },
  { title: "Krönika", description: "Tips och struktur för att skriva personliga krönikor", url: "/skrivverkstad/kronika", category: "Skrivverkstad" },

  // Nationella prov (5)
  { title: "Nationella prov", description: "Information, tips och förberedelser för nationella proven i svenska", url: "/nationella-prov", category: "Nationella prov" },
  { title: "Nationella prov årskurs 3", description: "Läsa, skriva och tala – grundläggande färdigheter bedöms", url: "/nationella-prov/arskurs-3", category: "Nationella prov" },
  { title: "Nationella prov årskurs 6", description: "Läsförståelse, skrivande och muntlig framställning", url: "/nationella-prov/arskurs-6", category: "Nationella prov" },
  { title: "Nationella prov årskurs 9", description: "Avancerad läsförståelse, argumentation och analys", url: "/nationella-prov/arskurs-9", category: "Nationella prov" },
  { title: "Nationella prov gymnasiet", description: "Svenska 1 och Svenska 3 – PM-skrivande, retorik och litteraturanalys", url: "/nationella-prov/gymnasiet", category: "Nationella prov" },

  // AI-labbet (3)
  { title: "Promptguide", description: "Lär dig skriva bra promptar med KRAFT-modellen", url: "/ai-labbet/promptguide", category: "AI-labbet" },
  { title: "Skrivhjälp med AI", description: "Använd AI som verktyg i skrivprocessen – brainstorming, disposition och feedback", url: "/ai-labbet/skrivhjalp", category: "AI-labbet" },
  { title: "Källkritik och AI", description: "Granska AI-genererad text kritiskt – identifiera felaktigheter och hallucineringar", url: "/ai-labbet/kallkritik", category: "AI-labbet" },

  // Årskurser (4)
  { title: "Lågstadiet", description: "Resurser för årskurs 1–3 i svenska och svenska som andraspråk", url: "/lagstadiet", category: "Årskurser" },
  { title: "Mellanstadiet", description: "Resurser för årskurs 4–6 i svenska och svenska som andraspråk", url: "/mellanstadiet", category: "Årskurser" },
  { title: "Högstadiet", description: "Resurser för årskurs 7–9 i svenska och svenska som andraspråk", url: "/hogstadiet", category: "Årskurser" },
  { title: "Gymnasiet", description: "Resurser för gymnasiet i svenska och svenska som andraspråk", url: "/gymnasiet", category: "Årskurser" },

  // Övningar (1)
  { title: "Övningar", description: "Interaktiva övningar i ordklasser, sambandsord, skiljetecken och stavning", url: "/ovningar", category: "Övningar" },

  // Litteraturtips (1)
  { title: "Litteraturtips", description: "Bokrekommendationer för alla åldrar – från lågstadiet till gymnasiet", url: "/litteraturtips", category: "Litteraturtips" },
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
          Sök
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Hitta innehåll på hela sajten.
        </p>
      </div>

      {/* Search input */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Sök efter grammatik, skrivmallar, nationella prov..."
          autoFocus
          className="w-full rounded-lg border border-neutral-200 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-600 dark:focus:ring-neutral-800"
        />
      </div>

      {/* Results */}
      {!query.trim() && (
        <p className="text-center text-neutral-500 dark:text-neutral-400">
          Skriv i sökfältet för att söka
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
