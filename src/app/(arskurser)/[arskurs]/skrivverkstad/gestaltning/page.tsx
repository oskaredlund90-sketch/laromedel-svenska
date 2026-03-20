import { notFound } from "next/navigation";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { Metadata } from "next";
import { GestaltningClient } from "./gestaltning-client";
import type { AgeGroup } from "@/lib/supabase/types";

const VALID = new Set<string>(AGE_GROUPS.map((g) => g.slug));

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
    title: `Gestaltning \u2013 ${group.label}`,
    description: `Utveckla texter med beskrivningar och adjektiv \u2013 interaktiv \u00f6vning f\u00f6r ${group.label.toLowerCase()}.`,
  };
}

export default async function GestaltningPage({ params }: Props) {
  const { arskurs } = await params;
  if (!VALID.has(arskurs)) notFound();
  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Gestaltning &ndash; l&auml;gg till beskrivningar
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {group.label} &middot; Fyll i egna adjektiv, beskrivningar och gestaltningar
        </p>
      </div>
      <GestaltningClient ageGroup={arskurs as AgeGroup} />
    </div>
  );
}
