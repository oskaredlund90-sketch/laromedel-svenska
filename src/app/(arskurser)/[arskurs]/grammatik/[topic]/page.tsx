import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpen, ChevronRight, ClipboardCheck, Dumbbell, NotebookPen, PenLine, Printer } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { GrammatikOvningar, type GrammarTopic } from "@/components/grammatik-ovningar";
import { AMNEN, AMNEN_PER_STADIUM, PROGRESSION, delForAmne, type GrammatikAmne } from "@/lib/grammatik/amnen";
import { SKRIV_SJALV } from "@/lib/grammatik/skriv-sjalv";
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
  const amne = topic as GrammatikAmne;
  const stadie = arskurs as AgeGroup;
  const haften = haftenForKapitel(amne, stadie);
  const kapprov = kapitelprovFor(amne, stadie);
  const skriv = SKRIV_SJALV[amne][stadie];
  const ordning = AMNEN_PER_STADIUM[stadie];
  const nr = ordning.indexOf(amne) + 1;
  const del = delForAmne(amne);
  const forra = ordning[nr - 2];
  const nasta = ordning[nr];

  const meny: [string, string][] = [
    ["genomgang", "Genomgång"],
    ["ovningar", "Öva"],
    ...(skriv ? ([["skriv", "Skriv själv"]] as [string, string][]) : []),
    ...(haften.length > 0 ? ([["haften", "Häften"]] as [string, string][]) : []),
    ...(kapprov ? ([["prov", "Kapitelprov"]] as [string, string][]) : []),
  ];
  const KNAPP =
    "inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800";

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href={`/${arskurs}`} className="transition-colors hover:text-neutral-900 dark:hover:text-white">
          {group.label}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/${arskurs}/grammatik`} className="transition-colors hover:text-neutral-900 dark:hover:text-white">
          Grammatik
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900 dark:text-white">{t.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Del {del.nr} · {del.titel} — Kapitel {nr} av {ordning.length}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{t.title}</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{PROGRESSION[amne]?.[stadie] ?? t.description}</p>
      </div>

      {/* Kapitelmeny – följer med när man scrollar */}
      <div className="sticky top-14 z-40 -mx-4 mb-8 border-y border-neutral-200 bg-white/95 px-4 py-2 backdrop-blur-sm print:hidden sm:-mx-6 sm:px-6 dark:border-neutral-800 dark:bg-neutral-950/95">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
          {meny.map(([id, namn]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-md px-2.5 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              {namn}
            </a>
          ))}
          <span className="ml-auto flex gap-1.5">
            <Link href={`/${arskurs}/grammatik/bok?kapitel=${topic}`} className={KNAPP} title="Kapitlet som det ser ut i boken – skriv ut eller spara som PDF">
              <Printer className="h-4 w-4" /> <span className="hidden sm:inline">Skriv ut</span>
            </Link>
            <Link href={`/${arskurs}/grammatik/bok?kapitel=${topic}&version=larare`} className={KNAPP} title="Kapitlet med facit och kapitelprov">
              <BookOpen className="h-4 w-4" /> <span className="hidden sm:inline">Med facit</span>
            </Link>
          </span>
        </div>
      </div>

      <div id="genomgang" className="scroll-mt-32">
        <GrammatikInfografik topic={topic} stadie={stadie} />
        <Content stadie={stadie} />
      </div>

      {/* Interactive exercises */}
      <section id="ovningar" className="mt-12 scroll-mt-32 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <Dumbbell className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Öva</h2>
        </div>
        <GrammatikOvningar topic={topic as GrammarTopic} ageGroup={stadie} />
      </section>

      {skriv && (
        <section id="skriv" className="mt-12 scroll-mt-32 rounded-xl border-2 border-neutral-900 p-6 dark:border-white">
          <p className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-white">
            <PenLine className="h-5 w-5" /> Använd i din text
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">{skriv}</p>
        </section>
      )}

      {haften.length > 0 && (
        <section id="haften" className="mt-12 scroll-mt-32 border-t border-neutral-200 pt-10 dark:border-neutral-800">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <NotebookPen className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
            </div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Övningshäften</h2>
          </div>
          <p className="mb-5 text-neutral-600 dark:text-neutral-400">Fler uppgifter att göra här på sajten – eller skriva ut med facit. Passar som läxa.</p>
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
                  Steg {h.steg} · {h.antalRader} uppgifter
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {kapprov && (
        <section id="prov" className="mt-12 scroll-mt-32 border-t border-neutral-200 pt-10 dark:border-neutral-800">
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
        </section>
      )}

      {/* Föregående och nästa kapitel */}
      <nav aria-label="Kapitel" className="mt-14 grid gap-3 border-t border-neutral-200 pt-8 sm:grid-cols-2 print:hidden dark:border-neutral-800">
        {forra ? (
          <Link href={`/${arskurs}/grammatik/${forra}`} className="group rounded-xl border border-neutral-200 p-4 hover:border-neutral-400 dark:border-neutral-800">
            <span className="flex items-center gap-1 text-xs text-neutral-500">
              <ArrowLeft className="h-3.5 w-3.5" /> Kapitel {nr - 1}
            </span>
            <span className="font-semibold text-neutral-900 dark:text-white">{AMNEN[forra].titel}</span>
          </Link>
        ) : (
          <Link href={`/${arskurs}/grammatik`} className="rounded-xl border border-neutral-200 p-4 hover:border-neutral-400 dark:border-neutral-800">
            <span className="flex items-center gap-1 text-xs text-neutral-500">
              <ArrowLeft className="h-3.5 w-3.5" /> Innehåll
            </span>
            <span className="font-semibold text-neutral-900 dark:text-white">Alla kapitel</span>
          </Link>
        )}
        {nasta ? (
          <Link href={`/${arskurs}/grammatik/${nasta}`} className="rounded-xl border border-neutral-200 p-4 text-right hover:border-neutral-400 dark:border-neutral-800">
            <span className="flex items-center justify-end gap-1 text-xs text-neutral-500">
              Kapitel {nr + 1} <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="font-semibold text-neutral-900 dark:text-white">{AMNEN[nasta].titel}</span>
          </Link>
        ) : (
          <Link href={`/ovningshaften/prov-${stadie}`} className="rounded-xl border border-emerald-300 p-4 text-right hover:border-emerald-500 dark:border-emerald-800">
            <span className="flex items-center justify-end gap-1 text-xs text-neutral-500">
              Sist i boken <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="font-semibold text-neutral-900 dark:text-white">Slutprov</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
