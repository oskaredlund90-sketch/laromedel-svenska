import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ClipboardCheck, NotebookPen, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { AMNEN, AMNEN_PER_STADIUM, MAL_PER_STADIUM } from "@/lib/grammatik/amnen";

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Grammatik – ${group.label}`,
    description: `Grammatikens viktigaste delar för ${group.label.toLowerCase()}, steg för steg – med övningar, häften och prov.`,
  };
}

export default async function GrammatikPage({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) notFound();

  const stadie = arskurs as AgeGroup;
  const amnen = AMNEN_PER_STADIUM[stadie];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Grammatik – {group.label}</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Följ stegen i ordning. Varje steg har en genomgång och övningar. Avsluta med grammatikprovet för att se vad du kan.
        </p>
      </div>

      <Card className="mb-10 border-sky-200 bg-sky-50 dark:border-sky-900 dark:bg-sky-950/30">
        <CardContent className="p-6">
          <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <Target className="h-5 w-5 text-sky-600" /> Det här ska du kunna efter {group.label.toLowerCase()}
          </p>
          <ul className="grid gap-1 text-neutral-800 sm:grid-cols-2 dark:text-neutral-200">
            {MAL_PER_STADIUM[stadie].map((m) => (
              <li key={m} className="flex gap-2">
                <span className="text-sky-600">✓</span> {m}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <ol className="relative space-y-4 border-l-2 border-neutral-200 pl-8 dark:border-neutral-800">
        {amnen.map((slug, i) => (
          <li key={slug} className="relative">
            <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white dark:bg-white dark:text-neutral-900">
              {i + 1}
            </span>
            <Link href={`/${arskurs}/grammatik/${slug}`} className="group block">
              <Card className="transition-shadow group-hover:shadow-md">
                <CardContent className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-lg font-semibold text-neutral-900 dark:text-white">{AMNEN[slug].titel}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{AMNEN[slug].beskrivning}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
        <li className="relative">
          <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
            <ClipboardCheck className="h-4 w-4" />
          </span>
          <Link href={`/ovningshaften/prov-${stadie}`} className="group block">
            <Card className="border-emerald-300 transition-shadow group-hover:shadow-md dark:border-emerald-800">
              <CardContent className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-lg font-semibold text-neutral-900 dark:text-white">Grammatikprov – {group.label.toLowerCase()}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">100 uppgifter från alla steg. Max 100 poäng.</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-emerald-600 transition-transform group-hover:translate-x-1" />
              </CardContent>
            </Card>
          </Link>
        </li>
      </ol>

      <Link
        href="/ovningshaften"
        className="mt-10 flex items-center gap-3 rounded-xl border border-neutral-200 p-5 transition-colors hover:border-neutral-400 dark:border-neutral-800"
      >
        <NotebookPen className="h-5 w-5 text-neutral-600" />
        <span>
          <span className="block font-semibold text-neutral-900 dark:text-white">Behöver du mer träning?</span>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">Övningshäften med minst 100 uppgifter – att göra här eller skriva ut.</span>
        </span>
      </Link>
    </div>
  );
}
