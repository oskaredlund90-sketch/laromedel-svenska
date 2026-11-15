import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { AMNEN, finnsPaStadium, type GrammatikAmne } from "@/lib/grammatik/amnen";
import { getExercisesForTopic } from "@/lib/data/grammatik-ovningar";
import { GrammatikUtskrift } from "@/components/grammatik/utskrift";

interface Props {
  params: Promise<{ arskurs: string; topic: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, topic } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const amne = AMNEN[topic as GrammatikAmne];
  if (!group || !amne) return {};
  return { title: `Utskrift: ${amne.titel} – ${group.label}`, description: `Alla övningar i ${amne.titel.toLowerCase()} att skriva ut, med facit.` };
}

export default async function GrammatikUtskriftPage({ params }: Props) {
  const { arskurs, topic } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const amne = AMNEN[topic as GrammatikAmne];
  if (!group || !amne || !finnsPaStadium(topic, arskurs as AgeGroup)) notFound();
  const ovningar = getExercisesForTopic(topic, arskurs as AgeGroup);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 print:max-w-none print:px-0 print:py-0">
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-neutral-500 print:hidden dark:text-neutral-400">
        <Link href={`/${arskurs}/grammatik`} className="hover:text-neutral-900 dark:hover:text-white">
          Grammatik
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/${arskurs}/grammatik/${topic}`} className="hover:text-neutral-900 dark:hover:text-white">
          {amne.titel}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900 dark:text-white">Utskrift</span>
      </nav>
      <GrammatikUtskrift titel={amne.titel} stadium={group.label} ovningar={ovningar} />
    </div>
  );
}
