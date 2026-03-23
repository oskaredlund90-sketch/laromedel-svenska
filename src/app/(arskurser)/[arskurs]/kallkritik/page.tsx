import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { getKallkritikExercises } from "@/lib/data/kallkritik-ovningar";
import KallkritikOvningar from "@/components/kallkritik-ovningar";

const VALID_AGE_GROUPS = new Set(AGE_GROUPS.map((g) => g.slug));

const LEVEL_DESCRIPTIONS: Record<AgeGroup, string> = {
  lagstadiet: "",
  mellanstadiet:
    "Lär dig att bedöma om information är trovärdig. Vem har skrivit texten? Kan du lita på källan?",
  hogstadiet:
    "Träna på att granska källor kritiskt. Jämför källor, upptäck vinkling och faktagranska påståenden.",
  gymnasiet:
    "Avancerad källkritik med CARS-modellen, intressekonfliktanalys och granskning av vetenskaplig kommunikation.",
};

interface Props {
  params: Promise<{ arskurs: string }>;
}

export function generateStaticParams() {
  return AGE_GROUPS.filter((g) => g.slug !== "lagstadiet").map((g) => ({
    arskurs: g.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Källkritik - ${group.label}`,
    description: `Källkritiska övningar anpassade för ${group.label.toLowerCase()}.`,
  };
}

export default async function KallkritikPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs as AgeGroup) || arskurs === "lagstadiet") {
    notFound();
  }

  const level = arskurs as AgeGroup;
  const exercises = getKallkritikExercises(level);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <ShieldCheck className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Källkritik
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {LEVEL_DESCRIPTIONS[level]}
        </p>
      </div>

      <KallkritikOvningar exercises={exercises} ageGroup={level} />
    </div>
  );
}
