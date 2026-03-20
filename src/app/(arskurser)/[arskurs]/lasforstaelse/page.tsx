import Link from "next/link";
import { BookOpenCheck } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { AgeGroup } from "@/lib/supabase/types";
import LasforstaelseOvningar from "@/components/lasforstaelse-ovningar";

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
    title: `Läsförståelse – ${group.label}`,
    description: `Interaktiva läsförståelseövningar för ${group.label.toLowerCase()}. Läs texter och svara på frågor med direkt feedback.`,
  };
}

export default async function LasforstaelsePage({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);

  if (!VALID.has(arskurs) || !group) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href={`/${arskurs}`} className="hover:underline">
          {group.label}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-900 dark:text-white">Läsförståelse</span>
      </nav>

      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <BookOpenCheck className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Läsförståelse
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Läs texterna och svara på frågor – träna på att hitta information,
          tolka budskap och reflektera kring det du läst.
        </p>
      </div>

      <LasforstaelseOvningar ageGroup={arskurs as AgeGroup} />
    </div>
  );
}
