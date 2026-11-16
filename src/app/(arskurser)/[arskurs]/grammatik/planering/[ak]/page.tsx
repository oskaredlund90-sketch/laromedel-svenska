import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ChevronRight, MonitorPlay, Printer } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { cn } from "@/lib/utils";
import { AMNEN, AMNEN_PER_STADIUM } from "@/lib/grammatik/amnen";
import { ARSPLAN, arskursFor } from "@/lib/grammatik/arsplan";
import { TYP_ETIKETT, lektionerFor, upplagg, type Lektionstyp } from "@/lib/grammatik/lektioner";
import { sidnummerFor } from "@/lib/grammatik/sidnummer";

interface Props {
  params: Promise<{ arskurs: string; ak: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, ak } = await params;
  const ar = arskursFor(arskurs as AgeGroup, ak);
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!ar || !group) return {};
  return { title: `Grammatik ${ar.titel.toLowerCase()} – lektionsplan`, description: `Lektion för lektion: presentation, bokens sidor och utskrifter för grammatiken i ${ar.titel.toLowerCase()}.` };
}

const FARG: Record<Lektionstyp, string> = {
  startprov: "bg-amber-100 text-amber-900",
  repetition: "bg-violet-100 text-violet-900",
  genomgang: "bg-sky-100 text-sky-900",
  ovning: "bg-emerald-100 text-emerald-900",
  text: "bg-rose-100 text-rose-900",
  kapitelprov: "bg-neutral-200 text-neutral-900",
  slutrepetition: "bg-violet-100 text-violet-900",
  slutprov: "bg-amber-100 text-amber-900",
};

export default async function LektionsplanPage({ params }: Props) {
  const { arskurs, ak } = await params;
  const stadie = arskurs as AgeGroup;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const ar = arskursFor(stadie, ak);
  if (!group || !ar) notFound();
  const lektioner = lektionerFor(stadie, ak);
  const sidor = sidnummerFor(stadie, false);
  const kapNr = (a: string) => AMNEN_PER_STADIUM[stadie].indexOf(a as never) + 1;
  const bas = `/${stadie}/grammatik/planering/${ak}`;
  const pass = stadie === "lagstadiet" ? "pass" : "lektioner";

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href={`/${stadie}/grammatik`} className="hover:text-neutral-900 dark:hover:text-white">
          Grammatik – {group.label}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900 dark:text-white">Lektionsplan {ar.titel.toLowerCase()}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Grammatik – {ar.titel.toLowerCase()}
      </h1>
      <p className="mt-2 max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">{ar.fokus}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {ARSPLAN[stadie].map((a) => (
          <Link
            key={a.ak}
            href={`/${stadie}/grammatik/planering/${a.ak}`}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium",
              a.ak === ak ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300",
            )}
          >
            {a.titel}
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Link href={`${bas}/presentation`} className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 hover:border-neutral-400 dark:border-neutral-800">
          <MonitorPlay className="h-6 w-6 shrink-0 text-sky-600" />
          <span>
            <span className="block font-semibold">Presentationen</span>
            <span className="text-sm text-neutral-500">Alla lektioner – välj lektion i listan</span>
          </span>
        </Link>
        <Link href={`/${stadie}/grammatik/bok?ak=${ak}`} className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 hover:border-neutral-400 dark:border-neutral-800">
          <BookOpen className="h-6 w-6 shrink-0 text-emerald-600" />
          <span>
            <span className="block font-semibold">Elevbok för {ar.titel.toLowerCase()}</span>
            <span className="text-sm text-neutral-500">Årets kapitel + repetition</span>
          </span>
        </Link>
        <Link href={`/${stadie}/grammatik/bok?ak=${ak}&version=larare`} className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 hover:border-neutral-400 dark:border-neutral-800">
          <BookOpen className="h-6 w-6 shrink-0 text-amber-600" />
          <span>
            <span className="block font-semibold">Lärarbok</span>
            <span className="text-sm text-neutral-500">Med facit och prov</span>
          </span>
        </Link>
      </div>

      <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
        {lektioner.length} {pass}. Varje lektion har sina egna bilder i presentationen och ett eget material att skriva ut. Sidnumren gäller
        elevboken för hela stadiet.
      </p>

      <ol className="mt-4 divide-y divide-neutral-200 rounded-xl border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {lektioner.map((l) => {
          const sida = l.amne ? sidor[l.amne] : undefined;
          const harFacit = ["startprov", "repetition", "ovning", "kapitelprov", "slutrepetition", "slutprov"].includes(l.typ);
          return (
            <li key={l.nr} className="grid gap-3 p-4 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
              <span className="text-2xl font-bold tabular-nums text-neutral-400">{l.nr}</span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold", FARG[l.typ])}>{TYP_ETIKETT[l.typ]}</span>
                  <h2 className="font-semibold text-neutral-900 dark:text-white">{l.titel}</h2>
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{upplagg(l.typ, stadie)}</p>
                {(l.amne || l.repetera) && (
                  <p className="mt-1 text-sm text-neutral-500">
                    Boken:{" "}
                    {l.amne
                      ? `kapitel ${kapNr(l.amne)} ${AMNEN[l.amne].titel}${sida ? `, s. ${sida}` : ""}`
                      : l.repetera!.map((a) => `kap. ${kapNr(a)}${sidor[a] ? ` (s. ${sidor[a]})` : ""}`).join(", ")}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                <Link
                  href={`${bas}/presentation?lektion=${l.nr}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-700"
                >
                  <MonitorPlay className="h-4 w-4" /> Bilder
                </Link>
                <Link
                  href={`${bas}/utskrift/${l.nr}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:border-neutral-500 dark:border-neutral-700"
                >
                  <Printer className="h-4 w-4" /> Utskrift
                </Link>
                {harFacit && (
                  <Link
                    href={`${bas}/utskrift/${l.nr}?facit=1`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm hover:border-neutral-500 dark:border-neutral-700"
                  >
                    Facit
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
