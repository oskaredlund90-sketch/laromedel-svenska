"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TEACHER_GUIDES } from "@/lib/data/lararhandledningar";
import { TEXTBANK_TEXTS } from "@/lib/data/textbank";
import { VECKANS_ORD } from "@/lib/data/veckans-ord";

/* -------------------------------------------------------------------------- */
/*  Search index – comprehensive content search                               */
/* -------------------------------------------------------------------------- */

interface SearchItem {
  title: string;
  description: string;
  url: string;
  category: string;
  ageGroup?: string;
}

const AGE_GROUPS = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];
const AGE_LABELS: Record<string, string> = {
  lagstadiet: "Lågstadiet",
  mellanstadiet: "Mellanstadiet",
  hogstadiet: "Högstadiet",
  gymnasiet: "Gymnasiet",
};

function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // ── Age group hubs ──
  AGE_GROUPS.forEach((ag) => {
    items.push({
      title: AGE_LABELS[ag],
      description: `Alla resurser för ${AGE_LABELS[ag].toLowerCase()} — kursplan, grammatik, övningar och mer`,
      url: `/${ag}`,
      category: "Årskurser",
      ageGroup: ag,
    });
  });

  // ── Section pages per age group ──
  AGE_GROUPS.forEach((ag) => {
    const label = AGE_LABELS[ag];
    const sections = [
      { title: "Kursplan", desc: "Centralt innehåll och kunskapskrav från Skolverket", path: "kursplan" },
      { title: "Lärarhandledning", desc: "Lektionsplaneringar och pedagogiska guider", path: "lararhandledning" },
      { title: "Elevtips", desc: "Studietekniker och tips för elever", path: "elevtips" },
      { title: "Grammatik", desc: "Ordklasser, meningsbyggnad, skiljetecken och mer", path: "grammatik" },
      { title: "Skrivverkstad", desc: "Mallar och tips för olika texttyper", path: "skrivverkstad" },
      { title: "Övningar", desc: "Interaktiva övningar i svenska", path: "ovningar" },
      { title: "Textbank", desc: "Exempeltexter i olika genrer med analysfrågor", path: "textbank" },
      { title: "Nationella prov", desc: "Information om nationella proven i svenska", path: "nationella-prov" },
      { title: "Litteraturhistoria", desc: "Svensk litteraturhistoria från medeltiden till idag", path: "litteraturhistoria" },
      { title: "Ordkunskap", desc: "Veckans ord och ordövningar", path: "ordkunskap" },
      { title: "AI i svenskan", desc: "Hur du kan använda AI-verktyg i svenskundervisningen", path: "ai-i-svenskan" },
    ];
    sections.forEach((s) => {
      items.push({
        title: `${s.title} — ${label}`,
        description: s.desc,
        url: `/${ag}/${s.path}`,
        category: s.title,
        ageGroup: ag,
      });
    });
  });

  // ── Grammatik topics ──
  const grammarTopics = [
    { slug: "ordklasser", title: "Ordklasser", desc: "Substantiv, verb, adjektiv och de andra ordklasserna" },
    { slug: "meningsbyggnad", title: "Meningsbyggnad", desc: "Huvudsatser, bisatser och hur man bygger meningar" },
    { slug: "skiljetecken", title: "Skiljetecken", desc: "Punkt, komma, semikolon och andra skiljetecken" },
    { slug: "stavning", title: "Stavning", desc: "Vanliga stavningsregler och svåra ord" },
    { slug: "ordbildning", title: "Ordbildning", desc: "Sammansättning, avledning och hur nya ord skapas" },
    { slug: "textbindning", title: "Textbindning", desc: "Sambandsord, referensbindning och hur text hänger ihop" },
    { slug: "stilistik", title: "Stilistik", desc: "Stilfigurer, språknivå och retoriska grepp" },
  ];
  AGE_GROUPS.forEach((ag) => {
    grammarTopics.forEach((t) => {
      items.push({
        title: `${t.title} — ${AGE_LABELS[ag]}`,
        description: t.desc,
        url: `/${ag}/grammatik/${t.slug}`,
        category: "Grammatik",
        ageGroup: ag,
      });
    });
  });

  // ── Skrivverkstad templates ──
  const templates = [
    { slug: "berattande-text", title: "Berättande text", desc: "Mall och tips för att skriva noveller, sagor och berättelser" },
    { slug: "argumenterande-text", title: "Argumenterande text", desc: "Struktur för debattartiklar och argumenterande uppsatser" },
    { slug: "utredande-text", title: "Utredande text", desc: "Mall för utredande och förklarande texter" },
    { slug: "kronika", title: "Krönika", desc: "Tips och struktur för att skriva personliga krönikor" },
  ];
  AGE_GROUPS.forEach((ag) => {
    templates.forEach((t) => {
      items.push({
        title: `${t.title} — ${AGE_LABELS[ag]}`,
        description: t.desc,
        url: `/${ag}/skrivverkstad/${t.slug}`,
        category: "Skrivverkstad",
        ageGroup: ag,
      });
    });
  });

  // ── Lärarhandledningar (from data) ──
  TEACHER_GUIDES.forEach((g) => {
    items.push({
      title: g.title,
      description: g.description,
      url: `/${g.ageGroup}/lararhandledning/${g.slug}`,
      category: "Lärarhandledning",
      ageGroup: g.ageGroup,
    });
  });

  // ── Textbank texts (from data) ──
  TEXTBANK_TEXTS.forEach((t) => {
    items.push({
      title: t.title,
      description: `${t.categoryLabel} — ${t.difficultyLabel}. ${t.content.slice(0, 120)}...`,
      url: `/hogstadiet/textbank/${t.slug}`,
      category: "Textbank",
    });
  });

  // ── Veckans ord (from data) ──
  VECKANS_ORD.forEach((w) => {
    items.push({
      title: w.word,
      description: `${w.wordClass} — ${w.definition}`,
      url: "/hogstadiet/ordkunskap",
      category: "Ordkunskap",
    });
  });

  return items;
}

const SEARCH_INDEX = buildSearchIndex();

const fuse = new Fuse(SEARCH_INDEX, {
  keys: [
    { name: "title", weight: 3 },
    { name: "description", weight: 1 },
    { name: "category", weight: 0.5 },
  ],
  threshold: 0.35,
  includeScore: true,
});

/* -------------------------------------------------------------------------- */
/*  Category colors                                                           */
/* -------------------------------------------------------------------------- */

const CATEGORY_COLORS: Record<string, string> = {
  "Årskurser": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "Grammatik": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "Skrivverkstad": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "Lärarhandledning": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "Textbank": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
  "Ordkunskap": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  "Övningar": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  "Nationella prov": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  "Litteraturhistoria": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function SokPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const fuseResults = fuse.search(query.trim()).map((r) => r.item);
    if (selectedCategory) {
      return fuseResults.filter((r) => r.category === selectedCategory);
    }
    return fuseResults.slice(0, 30);
  }, [query, selectedCategory]);

  // Categories present in results
  const resultCategories = useMemo(() => {
    if (!query.trim()) return [];
    const all = fuse.search(query.trim()).map((r) => r.item);
    const cats = new Map<string, number>();
    all.forEach((item) => {
      cats.set(item.category, (cats.get(item.category) || 0) + 1);
    });
    return Array.from(cats.entries()).sort((a, b) => b[1] - a[1]);
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
          Hitta innehåll på hela sajten — grammatik, texter, övningar, lärarhandledningar och mer.
        </p>
      </div>

      {/* Search input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedCategory(null);
          }}
          placeholder="Sök efter t.ex. ordklasser, argumenterande text, vemod..."
          autoFocus
          className="w-full rounded-lg border border-neutral-200 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-600 dark:focus:ring-neutral-800"
        />
      </div>

      {/* Category filter chips */}
      {resultCategories.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              !selectedCategory
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            }`}
          >
            Alla
          </button>
          {resultCategories.map(([cat, count]) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                cat === selectedCategory
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              {cat} ({count})
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      {!query.trim() && (
        <div className="text-center">
          <p className="text-neutral-500 dark:text-neutral-400">
            Skriv i sökfältet för att söka bland alla resurser.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["ordklasser", "argumenterande text", "nationella prov", "vemod", "lässtrategier"].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setQuery(suggestion)}
                className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-white"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {query.trim() && results.length === 0 && (
        <p className="text-center text-neutral-500 dark:text-neutral-400">
          Inga resultat för &quot;{query}&quot;. Prova ett annat sökord.
        </p>
      )}

      {results.length > 0 && (
        <div className="grid gap-3">
          {results.map((item) => (
            <Link key={item.url + item.title} href={item.url}>
              <Card className="group transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                <CardHeader className="py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-base group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="mt-1 line-clamp-2">
                        {item.description}
                      </CardDescription>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <Badge
                        className={`whitespace-nowrap text-xs ${
                          CATEGORY_COLORS[item.category] || "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                        }`}
                      >
                        {item.category}
                      </Badge>
                      <ArrowRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {results.length > 0 && (
        <p className="mt-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
          {results.length} resultat{selectedCategory ? ` i ${selectedCategory}` : ""}
        </p>
      )}
    </div>
  );
}
