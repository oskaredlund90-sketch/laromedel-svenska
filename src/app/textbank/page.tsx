import Link from "next/link";
import { BookText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TEXTBANK_TEXTS, CATEGORY_LABELS, type TextCategory } from "@/lib/data/textbank";
import type { Metadata } from "next";
import { TextbankFilter } from "./textbank-filter";

export const metadata: Metadata = {
  title: "Textbank",
  description: "Samling av exempeltexter i olika genrer: krönikor, argumenterande texter, noveller, historiska texter och utredande texter.",
};

const FILTER_OPTIONS: { value: TextCategory | "alla"; label: string }[] = [
  { value: "alla", label: "Alla" },
  { value: "kronika", label: "Krönikor" },
  { value: "argumenterande", label: "Argumenterande" },
  { value: "novell", label: "Noveller" },
  { value: "historisk", label: "Historiska" },
  { value: "utredande", label: "Utredande" },
];

export default function TextbankPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <BookText className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Textbank
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Exempeltexter i olika genrer med analysfrågor och tips om texternas uppbyggnad.
          Perfekta att använda som modelltexter i undervisningen.
        </p>
      </div>

      <TextbankFilter
        filterOptions={FILTER_OPTIONS}
        texts={TEXTBANK_TEXTS.map((t) => ({
          slug: t.slug,
          title: t.title,
          category: t.category,
          categoryLabel: t.categoryLabel,
          difficulty: t.difficulty,
          difficultyLabel: t.difficultyLabel,
          contentPreview: t.content.slice(0, 150).trim() + "\u2026",
        }))}
      />
    </div>
  );
}
