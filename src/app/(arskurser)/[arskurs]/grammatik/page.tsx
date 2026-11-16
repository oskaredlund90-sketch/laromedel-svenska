import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, ClipboardCheck, Download, GraduationCap, NotebookPen, Printer, Target } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { AMNEN, MAL_PER_STADIUM, PROGRESSION, delarForStadium } from "@/lib/grammatik/amnen";
import { STARTPROV_FOR, haftenForKapitel, kapitelprovFor } from "@/lib/grammatik/bok";
import { hamtaHafte } from "@/lib/haften";
import { getExercisesForTopic } from "@/lib/data/grammatik-ovningar";

const PDF_VERSION = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "lokal";
import { pdfFinns, pdfSokvag } from "@/lib/grammatik/pdf";

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Grammatik – ${group.label}`,
    description: `Grammatikbok för ${group.label.toLowerCase()} i tre delar – ordet, meningen och texten. Genomgångar, övningar som rättas direkt, övningshäften och prov. Ladda ner som PDF.`,
  };
}

const CHIP =
  "rounded-full border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800";

export default async function GrammatikPage({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) notFound();

  const stadie = arskurs as AgeGroup;
  const delar = delarForStadium(stadie);
  const pdfElev = pdfSokvag(stadie, false);
  const pdfLarare = pdfSokvag(stadie, true);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Grammatikboken</p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Grammatik – {group.label}</h1>
        <p className="mt-2 max-w-3xl text-neutral-600 dark:text-neutral-400">
          En lärobok och övningsbok i tre delar: ordet, meningen och texten. Välj ett kapitel nedan – varje kapitel har en genomgång,
          övningar som rättas direkt, övningshäften och ett kapitelprov.
        </p>
      </div>

      {/* Boken: läsa, ladda ner, skriva ut */}
      <div className="mb-12 grid gap-3 sm:grid-cols-3">
        <Link
          href={`/${arskurs}/grammatik/bok`}
          className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
        >
          <BookOpen className="h-7 w-7 shrink-0 text-sky-600" />
          <span>
            <span className="block font-semibold text-neutral-900 dark:text-white">Hela boken</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Läs eller skriv ut – välj kapitel</span>
          </span>
        </Link>
        {pdfFinns(pdfElev) ? (
          <a
            href={pdfElev}
            download
            className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <Download className="h-7 w-7 shrink-0 text-sky-600" />
            <span>
              <span className="block font-semibold text-neutral-900 dark:text-white">Elevbok (PDF)</span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Genomgångar, övningar och ordlista</span>
            </span>
          </a>
        ) : (
          <Link
            href={`/${arskurs}/grammatik/bok`}
            className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800"
          >
            <Printer className="h-7 w-7 shrink-0 text-sky-600" />
            <span className="block font-semibold text-neutral-900 dark:text-white">Skriv ut elevboken</span>
          </Link>
        )}
        {pdfFinns(pdfLarare) ? (
          <a
            href={pdfLarare}
            download
            className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <GraduationCap className="h-7 w-7 shrink-0 text-emerald-600" />
            <span>
              <span className="block font-semibold text-neutral-900 dark:text-white">Lärarbok (PDF)</span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Med handledning, facit och prov</span>
            </span>
          </a>
        ) : (
          <Link
            href={`/${arskurs}/grammatik/bok?version=larare`}
            className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800"
          >
            <GraduationCap className="h-7 w-7 shrink-0 text-emerald-600" />
            <span className="block font-semibold text-neutral-900 dark:text-white">Lärarbok</span>
          </Link>
        )}
      </div>

      {(() => {
        const start = hamtaHafte(STARTPROV_FOR[stadie]);
        return start ? (
          <Link
            href={`/ovningshaften/${start.id}`}
            className="-mt-6 mb-10 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 transition-colors hover:border-amber-400 dark:border-amber-900 dark:bg-amber-950/30"
          >
            <ClipboardCheck className="h-7 w-7 shrink-0 text-amber-600" />
            <span>
              <span className="block font-semibold text-neutral-900 dark:text-white">{start.titel}</span>
              <span className="block text-sm text-neutral-600 dark:text-neutral-400">
                {start.underrubrik} · {start.antalUppgifter} poäng. Kartlägg gruppen innan ni börjar – varje del motsvarar ett kapitel.
              </span>
            </span>
          </Link>
        ) : null;
      })()}

      <p className="-mt-8 mb-12 text-sm text-neutral-500">
        Alla övningshäften samlade:{" "}
        <a href={`/api/bok-pdf?stadie=${stadie}&haften=bara&v=${PDF_VERSION}`} className="font-medium text-sky-700 hover:underline dark:text-sky-400">
          elevversion (PDF)
        </a>{" "}
        ·{" "}
        <a href={`/api/bok-pdf?stadie=${stadie}&haften=bara&version=larare&v=${PDF_VERSION}`} className="font-medium text-sky-700 hover:underline dark:text-sky-400">
          med facit (PDF)
        </a>
        . Välj kapitel och version själv under <Link href={`/${arskurs}/grammatik/bok`} className="font-medium text-sky-700 hover:underline dark:text-sky-400">Hela boken</Link>.
      </p>

      {/* Delar och kapitel */}
      <div className="space-y-12">
        {delar.map((d) => (
          <section key={d.nr} aria-labelledby={`del-${d.nr}`}>
            <div className="mb-4 flex items-baseline gap-3 border-b-2 border-neutral-900 pb-2 dark:border-white">
              <span className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Del {d.nr}</span>
              <h2 id={`del-${d.nr}`} className="text-2xl font-bold text-neutral-900 dark:text-white">
                {d.titel}
              </h2>
              <span className="hidden text-sm text-neutral-500 sm:inline">{d.beskrivning}</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {d.kapitel.map(({ amne, nr }) => {
                const bas = `/${arskurs}/grammatik/${amne}`;
                const antalOvningar = getExercisesForTopic(amne, stadie).length;
                const antalHaften = haftenForKapitel(amne, stadie).length;
                const prov = kapitelprovFor(amne, stadie);
                return (
                  <div
                    key={amne}
                    className="group flex flex-col rounded-xl border border-neutral-200 p-5 transition-shadow hover:shadow-md dark:border-neutral-800"
                  >
                    <Link href={bas} className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Kapitel {nr}</p>
                      <p className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-white">
                        {AMNEN[amne].titel}
                        <ArrowRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1" />
                      </p>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{PROGRESSION[amne][stadie] ?? AMNEN[amne].beskrivning}</p>
                    </Link>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <Link href={`${bas}#genomgang`} className={CHIP}>
                        Genomgång
                      </Link>
                      <Link href={`${bas}#ovningar`} className={CHIP}>
                        Öva ({antalOvningar})
                      </Link>
                      {antalHaften > 0 && (
                        <Link href={`${bas}#haften`} className={CHIP}>
                          Häften ({antalHaften})
                        </Link>
                      )}
                      {prov && (
                        <Link href={`/ovningshaften/${prov.id}`} className={CHIP}>
                          Kapitelprov
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Slutprov, mål och fler häften */}
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Link
          href={`/ovningshaften/prov-${stadie}`}
          className="flex items-center gap-4 rounded-xl border border-emerald-300 p-5 transition-shadow hover:shadow-md dark:border-emerald-800"
        >
          <ClipboardCheck className="h-7 w-7 shrink-0 text-emerald-600" />
          <span className="flex-1">
            <span className="block font-semibold text-neutral-900 dark:text-white">Slutprov – hela boken</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">100 uppgifter, 100 poäng. Passar också som förtest.</span>
          </span>
          <ArrowRight className="h-5 w-5 text-emerald-600" />
        </Link>
        <Link
          href={`/ovningshaften?stadium=${stadie}`}
          className="flex items-center gap-4 rounded-xl border border-neutral-200 p-5 transition-shadow hover:shadow-md dark:border-neutral-800"
        >
          <NotebookPen className="h-7 w-7 shrink-0 text-neutral-600" />
          <span className="flex-1">
            <span className="block font-semibold text-neutral-900 dark:text-white">Alla övningshäften</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Minst 100 uppgifter per häfte – på sajten eller utskrivna.</span>
          </span>
          <ArrowRight className="h-5 w-5 text-neutral-400" />
        </Link>
      </div>

      <details className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/30">
        <summary className="flex cursor-pointer items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <Target className="h-5 w-5 text-sky-600" /> Det här tränar du i boken
        </summary>
        <ul className="mt-3 grid gap-1 text-neutral-800 sm:grid-cols-2 dark:text-neutral-200">
          {MAL_PER_STADIUM[stadie].map((m) => (
            <li key={m} className="flex gap-2">
              <span className="text-sky-600">✓</span> {m}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
