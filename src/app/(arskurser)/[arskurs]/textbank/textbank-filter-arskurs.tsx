"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TextCategory } from "@/lib/data/textbank";

interface TextPreview {
  slug: string;
  title: string;
  category: TextCategory;
  categoryLabel: string;
  difficulty: string;
  difficultyLabel: string;
  contentPreview: string;
}

interface TextbankFilterByArskursProps {
  filterOptions: { value: TextCategory | "alla"; label: string }[];
  texts: TextPreview[];
  basePath: string;
}

export function TextbankFilterByArskurs({ filterOptions, texts, basePath }: TextbankFilterByArskursProps) {
  const [activeFilter, setActiveFilter] = useState<TextCategory | "alla">("alla");

  const filtered =
    activeFilter === "alla"
      ? texts
      : texts.filter((t) => t.category === activeFilter);

  return (
    <>
      {/* Filter buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setActiveFilter(option.value)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeFilter === option.value
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Text cards */}
      <div className="grid gap-4">
        {filtered.map((text) => (
          <Link key={text.slug} href={`${basePath}/${text.slug}`}>
            <Card className="group transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-base">{text.title}</CardTitle>
                  <div className="flex shrink-0 gap-1.5">
                    <Badge variant="secondary">{text.categoryLabel}</Badge>
                    <Badge variant="outline">{text.difficultyLabel}</Badge>
                  </div>
                </div>
                <CardDescription className="line-clamp-2">
                  {text.contentPreview}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-8 text-center text-neutral-500 dark:text-neutral-400">
          Inga texter hittades i den valda kategorin.
        </p>
      )}
    </>
  );
}
