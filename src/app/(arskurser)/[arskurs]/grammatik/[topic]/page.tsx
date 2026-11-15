import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BookA, BookOpen, ChevronRight, ClipboardCheck, Dumbbell, NotebookPen, Printer } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { GrammatikOvningar, type GrammarTopic } from "@/components/grammatik-ovningar";
import { AMNEN_PER_STADIUM, PROGRESSION, type GrammatikAmne } from "@/lib/grammatik/amnen";
import { haftenForKapitel, kapitelprovFor } from "@/lib/grammatik/bok";
import { GrammatikInfografik } from "@/components/infografik/grammatik";
import { KAPITEL } from "@/components/grammatik/kapitel";

/* ------------------------------------------------------------------ */
/*  Level-based topic filtering                                        */
/* ------------------------------------------------------------------ */

const TOPICS_BY_LEVEL = AMNEN_PER_STADIUM as Record<AgeGroup, string[]>;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string; topic: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, topic } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const t = KAPITEL[topic];
  if (!group || !t) return {};
  return {
    title: `${t.title} - Grammatik - ${group.label}`,
    description: `${PROGRESSION[topic as GrammatikAmne]?.[arskurs as AgeGroup] ?? t.description} Grammatik för ${group.label.toLowerCase()}.`,
  };
}

export default async function GrammatikTopicPage({ params }: Props) {
  const { arskurs, topic } = await params;

  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) {
    notFound();
  }

  const allowedTopics = TOPICS_BY_LEVEL[arskurs as AgeGroup];
  if (!allowedTopics || !allowedTopics.includes(topic)) {
    notFound();
  }

  const t = KAPITEL[topic];
  if (!t) {
    notFound();
  }

  const Content = t.content;
  const haften = haftenForKapitel(topic as GrammatikAmne, arskurs as AgeGroup);
  const kapprov = kapitelprovFor(topic as GrammatikAmne, arskurs as AgeGroup);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400"
      >
        <Link
          href={`/${arskurs}`}
          className="hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          {group.label}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link
          href={`/${arskurs}/grammatik`}
          className="hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          Grammatik
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-neutral-900 dark:text-white font-medium">
          {t.title}
        </span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <BookA className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {t.title}
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {PROGRESSION[topic as GrammatikAmne]?.[arskurs as AgeGroup] ?? t.description}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2 print:hidden">
        <Link
          href={`/${arskurs}/grammatik/bok?kapitel=${topic}`}
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          <BookOpen className="h-4 w-4" /> Kapitlet i grammatikboken – skriv ut
        </Link>
        <Link
          href={`/${arskurs}/grammatik/bok?kapitel=${topic}&version=larare`}
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          <Printer className="h-4 w-4" /> Lärarversion med facit
        </Link>
      </div>

      <GrammatikInfografik topic={topic} stadie={arskurs as AgeGroup} />

      {/* Content */}
      <Content stadie={arskurs as AgeGroup} />

      {/* Interactive exercises */}
      <div className="mt-12 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <Dumbbell className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Övningar
          </h2>
          <Link
            href={`/${arskurs}/grammatik/${topic}/utskrift`}
            className="ml-auto inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            <Printer className="h-4 w-4" /> Skriv ut med facit
          </Link>
        </div>
        <GrammatikOvningar topic={topic as GrammarTopic} ageGroup={arskurs as AgeGroup} />
      </div>

      {haften.length > 0 && (
        <div className="mt-12 border-t border-neutral-200 pt-10 dark:border-neutral-800">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <NotebookPen className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
            </div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Övningshäften</h2>
          </div>
          <p className="mb-5 text-neutral-600 dark:text-neutral-400">
            Fler uppgifter att göra här på sajten – eller skriva ut med facit.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {haften.map((h) => (
              <Link
                key={h.id}
                href={`/ovningshaften/${h.id}`}
                className="rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
              >
                <p className="font-semibold text-neutral-900 dark:text-white">{h.titel}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{h.underrubrik}</p>
                <p className="mt-1 text-xs text-neutral-500">
                  Steg {h.steg} · {h.antalUppgifter} uppgifter
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {kapprov && (
        <div className="mt-12 border-t border-neutral-200 pt-10 dark:border-neutral-800">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/40">
              <ClipboardCheck className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Kapitelprov</h2>
          </div>
          <p className="mb-5 text-neutral-600 dark:text-neutral-400">
            20 uppgifter som inte finns bland övningarna – ett kvitto på vad du har lärt dig i kapitlet. Gör provet här och få det rättat direkt,
            eller skriv ut det med facit.
          </p>
          <Link
            href={`/ovningshaften/${kapprov.id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            <ClipboardCheck className="h-4 w-4" /> {kapprov.titel}
          </Link>
        </div>
      )}
    </div>
  );
}
