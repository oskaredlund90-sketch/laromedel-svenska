import Link from "next/link";
import { notFound } from "next/navigation";
import { BookText } from "lucide-react";
import { TEXTBANK_TEXTS, CATEGORY_LABELS, type TextCategory, type DifficultyLevel } from "@/lib/data/textbank";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { TextbankFilterByArskurs } from "./textbank-filter-arskurs";
import type { Metadata } from "next";

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

const FILTER_OPTIONS: { value: TextCategory | "alla"; label: string }[] = [
  { value: "alla", label: "Alla" },
  { value: "berattande", label: "Berättande" },
  { value: "faktatext", label: "Faktatexter" },
  { value: "kronika", label: "Kronikor" },
  { value: "argumenterande", label: "Argumenterande" },
  { value: "novell", label: "Noveller" },
  { value: "historisk", label: "Historiska" },
  { value: "utredande", label: "Utredande" },
];

/**
 * Map age-group slug to which difficulty levels should be shown.
 *   lagstadiet   -> only the simplest texts (mellanstadiet difficulty)
 *   mellanstadiet -> mellanstadiet + hogstadiet difficulty
 *   hogstadiet   -> all difficulties
 *   gymnasiet    -> all difficulties
 */
const ALLOWED_DIFFICULTIES: Record<string, Set<DifficultyLevel>> = {
  lagstadiet: new Set<DifficultyLevel>(["lagstadiet", "mellanstadiet"]),
  mellanstadiet: new Set<DifficultyLevel>(["lagstadiet", "mellanstadiet", "hogstadiet"]),
  hogstadiet: new Set<DifficultyLevel>(["mellanstadiet", "hogstadiet", "gymnasiet"]),
  gymnasiet: new Set<DifficultyLevel>(["mellanstadiet", "hogstadiet", "gymnasiet"]),
};

const ARSKURS_LABELS: Record<string, string> = {
  lagstadiet: "Lågstadiet",
  mellanstadiet: "Mellanstadiet",
  hogstadiet: "Högstadiet",
  gymnasiet: "Gymnasiet",
};

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
    title: `Textbank - ${group.label}`,
    description: `Exempeltexter i olika genrer anpassade för ${group.label.toLowerCase()}. Modelltexter med analysfrågor och tips.`,
  };
}

export default async function TextbankArskursPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const allowed = ALLOWED_DIFFICULTIES[arskurs] ?? ALLOWED_DIFFICULTIES.hogstadiet;
  const filteredTexts = TEXTBANK_TEXTS.filter((t) => allowed.has(t.difficulty));

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;

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
          Anpassade för {group.label.toLowerCase()}.
        </p>
      </div>

      <TextbankFilterByArskurs
        filterOptions={FILTER_OPTIONS}
        basePath={`/${arskurs}/textbank`}
        texts={filteredTexts.map((t) => ({
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
