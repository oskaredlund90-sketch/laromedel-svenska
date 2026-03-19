import { notFound } from "next/navigation";
import { BarChart3 } from "lucide-react";
import type { Metadata } from "next";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { ProgressDashboard } from "@/components/progress-dashboard";

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Mina framsteg - ${group.label}`,
    description: `Se dina framsteg i svenska för ${group.label.toLowerCase()}.`,
  };
}

export default async function FramstegPage({ params }: Props) {
  const { arskurs } = await params;

  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <BarChart3 className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Mina framsteg
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Här ser du hur det går! Dina quizresultat, inlärda ord och aktiva
          svit sparas lokalt i din webbläsare.
        </p>
      </div>

      <ProgressDashboard />
    </div>
  );
}
