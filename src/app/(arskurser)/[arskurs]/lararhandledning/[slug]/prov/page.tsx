import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { cn } from "@/lib/utils";
import { getGuideBySlug } from "@/lib/data/lararhandledningar";
import { HANDLEDNING_PROV } from "@/lib/data/lararhandledning-prov";
import { SkrivUtKnapp } from "@/components/grammatik/skriv-ut-knapp";

interface Props {
  params: Promise<{ arskurs: string; slug: string }>;
  searchParams: Promise<{ del?: string; facit?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { arskurs, slug } = await params;
  const { del } = await searchParams;
  const g = getGuideBySlug(arskurs, slug);
  return g ? { title: `${g.title} – ${del === "fortest" ? "förtest" : "prov"}` } : {};
}

const bokstav = (i: number) => String.fromCharCode(65 + i);

export default async function HandledningProvPage({ params, searchParams }: Props) {
  const { arskurs, slug } = await params;
  const sp = await searchParams;
  const g = getGuideBySlug(arskurs, slug);
  const p = HANDLEDNING_PROV[slug];
  const group = AGE_GROUPS.find((x) => x.slug === arskurs);
  if (!g || !p || !group) notFound();
  const fortest = sp.del === "fortest";
  const facit = sp.facit === "1";
  const bas = `/${arskurs}/lararhandledning/${slug}/prov`;
  const lank = (d: string, f: boolean) => `${bas}?del=${d}${f ? "&facit=1" : ""}`;
  const val = (aktiv: boolean) =>
    cn("rounded-full px-3 py-1.5 text-sm font-medium", aktiv ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "bg-neutral-100 dark:bg-neutral-800");

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 print:max-w-none print:px-0 print:py-0">
      <div className="mb-8 space-y-3 rounded-xl border border-neutral-200 p-5 print:hidden dark:border-neutral-800">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
          <Link href={`/${arskurs}/lararhandledning/${slug}`} className="hover:text-neutral-900 dark:hover:text-white">
            {g.title}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-neutral-900 dark:text-white">{fortest ? "Förtest" : "Prov"}</span>
        </nav>
        <div className="flex flex-wrap items-center gap-2">
          <Link href={lank("fortest", false)} className={val(fortest && !facit)}>Förtest</Link>
          <Link href={lank("prov", false)} className={val(!fortest && !facit)}>Prov</Link>
          <Link href={lank(fortest ? "fortest" : "prov", true)} className={val(facit)}>Facit</Link>
          <span className="flex-1" />
          <SkrivUtKnapp text="Skriv ut" />
        </div>
        <p className="text-sm text-neutral-500">
          Samma frågor före och efter lektionen – jämför och se vad som har fastnat. Provet har också en bedömningsuppgift.
        </p>
      </div>

      <div className="bok text-[11pt] leading-relaxed">
        <div className="mb-6 flex items-end justify-between gap-6 border-b-2 border-neutral-900 pb-3 dark:border-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {group.label} · {fortest ? "Förtest" : "Prov"}
              {facit ? " · Facit" : ""}
            </p>
            <h1 className="text-3xl font-bold tracking-tight">{g.title}</h1>
          </div>
          {!facit && <p className="shrink-0 text-[10pt]">Namn: ______________________</p>}
        </div>
        {fortest && !facit && <p className="mb-4">Svara så gott du kan – det gör inget om du inte vet. Vi ser vad vi ska lära oss.</p>}
        <ol className="space-y-4">
          {p.fragor.map((q, i) => (
            <li key={q.fraga} className="break-inside-avoid">
              <p className="font-medium">
                {i + 1}. {q.fraga}
              </p>
              {facit ? (
                <p className="pl-4 font-semibold">
                  {bokstav(q.ratt)}. {q.alternativ[q.ratt]}
                </p>
              ) : (
                <ul className="flex flex-wrap gap-x-6 gap-y-0.5 pl-4">
                  {q.alternativ.map((a, j) => (
                    <li key={a}>
                      ☐ {bokstav(j)}. {a}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
        {!fortest && (
          <section className="mt-8 break-inside-avoid">
            <h2 className="mb-2 text-lg font-bold">Bedömningsuppgift</h2>
            <p>{p.uppgift}</p>
            {facit ? (
              <>
                <p className="mt-3 font-semibold">Bedöm med stöd av:</p>
                <ul className="list-disc pl-5">
                  {g.bedomningsstod.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </>
            ) : (
              Array.from({ length: arskurs === "lagstadiet" ? 6 : 12 }).map((_, i) => <p key={i} className="h-8 border-b border-dotted border-current" />)
            )}
          </section>
        )}
      </div>
    </div>
  );
}
