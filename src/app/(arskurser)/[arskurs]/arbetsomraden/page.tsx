import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ChevronRight } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { STADIESPANN, arEtikett, arbetsomradenFor, underlag } from "@/lib/arbetsomraden";

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const g = AGE_GROUPS.find((x) => x.slug === arskurs);
  return g ? { title: `Arbetsområden – ${g.label}`, description: "Färdiga arbetsområden med lektioner, presentationer, förtest och prov." } : {};
}

export default async function ArbetsomradenPage({ params }: Props) {
  const { arskurs } = await params;
  const stadie = arskurs as AgeGroup;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) notFound();
  const omraden = arbetsomradenFor(stadie);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href={`/${stadie}`} className="hover:text-neutral-900 dark:hover:text-white">
          {group.label}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900 dark:text-white">Arbetsområden</span>
      </nav>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Arbetsområden – {group.label.toLowerCase()}</h1>
      <p className="mt-2 max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
        Färdiga arbetsområden utifrån {underlag(stadie)} ({STADIESPANN[stadie]}). Varje område har förtest, lektioner med
        presentation och elevmaterial att skriva ut samt ett prov med facit. Ta bort det du inte behöver.
      </p>
      {omraden.length === 0 ? (
        <p className="mt-8 rounded-xl border border-neutral-200 p-6 text-neutral-600 dark:border-neutral-800">
          Det finns inga arbetsområden för {group.label.toLowerCase()} än. Grammatiken har egna lektionsplaner under Grammatik.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {omraden.map((ao) => (
            <Link
              key={ao.id}
              href={`/${stadie}/arbetsomraden/${ao.id}`}
              className="group flex flex-col rounded-2xl border border-neutral-200 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
                Förslag: {arEtikett(stadie, ao.arskurs)} · {ao.lektioner.length} lektioner
              </p>
              <h2 className="mt-1 text-xl font-bold text-neutral-900 dark:text-white">{ao.titel}</h2>
              <p className="mt-2 flex-1 text-sm text-neutral-600 dark:text-neutral-400">{ao.ingress}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 dark:text-white">
                Öppna planeringen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
