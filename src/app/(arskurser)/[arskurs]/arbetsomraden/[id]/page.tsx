import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ChevronRight, ClipboardCheck, ExternalLink, MonitorPlay, Printer } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { arEtikett, hamtaArbetsomrade, underlag } from "@/lib/arbetsomraden";

interface Props {
  params: Promise<{ arskurs: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, id } = await params;
  const ao = hamtaArbetsomrade(arskurs as AgeGroup, id);
  return ao ? { title: `${ao.titel} – arbetsområde`, description: ao.ingress } : {};
}

function Knapp({ href, children, primar }: { href: string; children: React.ReactNode; primar?: boolean }) {
  return (
    <Link
      href={href}
      className={
        primar
          ? "inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-700"
          : "inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:border-neutral-500 dark:border-neutral-700"
      }
    >
      {children}
    </Link>
  );
}

export default async function ArbetsomradePage({ params }: Props) {
  const { arskurs, id } = await params;
  const stadie = arskurs as AgeGroup;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const ao = hamtaArbetsomrade(stadie, id);
  if (!group || !ao) notFound();
  const bas = `/${stadie}/arbetsomraden/${ao.id}`;
  const rubrik = "mb-3 mt-10 text-xl font-bold text-neutral-900 dark:text-white";

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
        <Link href={`/${stadie}`} className="hover:text-neutral-900 dark:hover:text-white">
          {group.label}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/${stadie}/arbetsomraden`} className="hover:text-neutral-900 dark:hover:text-white">
          Arbetsområden
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900 dark:text-white">{ao.titel}</span>
      </nav>

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
        Arbetsområde · förslag: {arEtikett(stadie, ao.arskurs)} · {ao.lektioner.length + 1} lektioner
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{ao.titel}</h1>
      <p className="mt-3 max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">{ao.ingress}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Link href={`${bas}/presentation`} className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 hover:border-neutral-400 dark:border-neutral-800">
          <MonitorPlay className="h-6 w-6 shrink-0 text-sky-600" />
          <span>
            <span className="block font-semibold">Presentationen</span>
            <span className="text-sm text-neutral-500">Förtest och alla lektioner</span>
          </span>
        </Link>
        <Link href={`${bas}/utskrift/elev`} className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 hover:border-neutral-400 dark:border-neutral-800">
          <BookOpen className="h-6 w-6 shrink-0 text-emerald-600" />
          <span>
            <span className="block font-semibold">Elevhäftet</span>
            <span className="text-sm text-neutral-500">Alla texter och uppgifter</span>
          </span>
        </Link>
        <Link href={`${bas}/utskrift/prov`} className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 hover:border-neutral-400 dark:border-neutral-800">
          <ClipboardCheck className="h-6 w-6 shrink-0 text-amber-600" />
          <span>
            <span className="block font-semibold">Prov</span>
            <span className="text-sm text-neutral-500">Med facit och bedömningsstöd</span>
          </span>
        </Link>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">Koppling till {stadie === "gymnasiet" ? "ämnesplanen" : "kursplanen"}</h2>
          <p className="mb-2 text-sm text-neutral-500">Utifrån {underlag(stadie)}.</p>
          <ul className="list-disc space-y-1 pl-5 text-neutral-700 dark:text-neutral-300">
            {ao.kursplan.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">Eleverna ska kunna</h2>
          <ul className="list-disc space-y-1 pl-5 text-neutral-700 dark:text-neutral-300">
            {ao.mal.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>
      </div>

      <h2 className={rubrik}>Lektion för lektion</h2>
      <ol className="divide-y divide-neutral-200 rounded-xl border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        <li className="grid gap-3 p-4 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
          <span className="text-2xl font-bold tabular-nums text-neutral-400">1</span>
          <div>
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-900">Förtest</span>
            <h3 className="mt-1 font-semibold text-neutral-900 dark:text-white">Vad vet eleverna redan?</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {ao.fortest.length} frågor (10 min) i början av första lektionen. Visa frågorna på bilderna eller dela ut dem. Spara resultatet och jämför med provet.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <Knapp href={`${bas}/presentation?lektion=1`} primar>
              <MonitorPlay className="h-4 w-4" /> Bilder
            </Knapp>
            <Knapp href={`${bas}/utskrift/fortest`}>
              <Printer className="h-4 w-4" /> Utskrift
            </Knapp>
            <Knapp href={`${bas}/utskrift/fortest?facit=1`}>Facit</Knapp>
          </div>
        </li>
        {ao.lektioner.map((l, i) => (
          <li key={l.titel} className="grid gap-3 p-4 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
            <span className="text-2xl font-bold tabular-nums text-neutral-400">{i + 1}</span>
            <div className="min-w-0">
              <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-900">Lektion {i + 1}</span>
              <h3 className="mt-1 font-semibold text-neutral-900 dark:text-white">{l.titel}</h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                <strong>Mål:</strong> {l.mal}
              </p>
              <ol className="mt-1 list-decimal space-y-0.5 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
                {l.upplagg.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ol>
              {l.lankar && (
                <p className="mt-1 text-sm">
                  På sajten:{" "}
                  {l.lankar.map(([t, s], j) => (
                    <span key={s}>
                      {j > 0 && " · "}
                      <Link href={`/${stadie}/${s}`} className="font-medium text-sky-700 hover:underline dark:text-sky-400">
                        {t}
                      </Link>
                    </span>
                  ))}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <Knapp href={`${bas}/presentation?lektion=${i + 2}`} primar>
                <MonitorPlay className="h-4 w-4" /> Bilder
              </Knapp>
              <Knapp href={`${bas}/utskrift/${i + 1}`}>
                <Printer className="h-4 w-4" /> Elevmaterial
              </Knapp>
            </div>
          </li>
        ))}
        <li className="grid gap-3 p-4 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
          <span className="text-2xl font-bold tabular-nums text-neutral-400">{ao.lektioner.length + 1}</span>
          <div>
            <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-semibold text-neutral-900">Prov</span>
            <h3 className="mt-1 font-semibold text-neutral-900 dark:text-white">Prov på arbetsområdet</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {ao.prov.fragor.length} flervalsfrågor och {ao.prov.oppna.length} öppna frågor med bedömningsstöd. Stryk eller lägg till frågor efter vad ni har hunnit.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <Knapp href={`${bas}/utskrift/prov`}>
              <Printer className="h-4 w-4" /> Utskrift
            </Knapp>
            <Knapp href={`${bas}/utskrift/prov?facit=1`}>Facit</Knapp>
          </div>
        </li>
      </ol>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">Viktiga begrepp</h2>
          <dl className="space-y-1.5 text-sm">
            {ao.begrepp.map(([t, f]) => (
              <div key={t}>
                <dt className="inline font-semibold text-neutral-900 dark:text-white">{t}</dt> <dd className="inline text-neutral-600 dark:text-neutral-400">– {f}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">Tips och anpassningar</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            {ao.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <h3 className="mb-2 mt-6 font-semibold text-neutral-900 dark:text-white">På sajten</h3>
          <ul className="space-y-1 text-sm">
            {ao.lankar.map(([t, s]) => (
              <li key={s}>
                <Link href={`/${stadie}/${s}`} className="inline-flex items-center gap-1 font-medium text-sky-700 hover:underline dark:text-sky-400">
                  {t} <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
