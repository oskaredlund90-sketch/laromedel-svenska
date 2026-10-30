import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Gauge } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { LastraningClient } from "./lastraning-client";

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
    title: `Lästräning – ${group.label}`,
    description: `Testa din läsförståelse och läshastighet och följ en läsplan – för ${group.label.toLowerCase()}. Ingen inloggning, inget sparas.`,
  };
}

export default async function LastraningPage({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <nav className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href={`/${arskurs}`} className="hover:underline">
          {group.label}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-900 dark:text-white">Lästräning</span>
      </nav>

      <div className="mb-8">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Gauge className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Lästräning</h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Ta reda på vad du är bra på och vad du kan träna mer på. Ingen inloggning – och inget du gör sparas.
        </p>
      </div>

      <LastraningClient stadie={arskurs as AgeGroup} />
    </div>
  );
}
