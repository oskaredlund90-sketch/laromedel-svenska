import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { getGuideBySlug } from "@/lib/data/lararhandledningar";
import { fragorISteg, sjalvskattning, stegRubrik } from "@/components/lararhandledning/bilder";
import { SkrivUtKnapp } from "@/components/grammatik/skriv-ut-knapp";

interface Props {
  params: Promise<{ arskurs: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, slug } = await params;
  const g = getGuideBySlug(arskurs, slug);
  return g ? { title: `${g.title} – elevblad` } : {};
}

function Linjer({ antal }: { antal: number }) {
  return (
    <>
      {Array.from({ length: antal }).map((_, i) => (
        <p key={i} className="h-8 border-b border-dotted border-current" />
      ))}
    </>
  );
}

export default async function Elevblad({ params }: Props) {
  const { arskurs, slug } = await params;
  const g = getGuideBySlug(arskurs, slug);
  const group = AGE_GROUPS.find((x) => x.slug === arskurs);
  if (!g || !group) notFound();
  const steg = g.genomforande.map((s) => ({ rubrik: stegRubrik(s.steg), fragor: fragorISteg(s.beskrivning) })).filter((s) => s.fragor.length);
  const kort = arskurs === "lagstadiet";

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 print:max-w-none print:px-0 print:py-0">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-200 p-5 print:hidden dark:border-neutral-800">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
          <Link href={`/${arskurs}/lararhandledning/${slug}`} className="hover:text-neutral-900 dark:hover:text-white">
            {g.title}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-neutral-900 dark:text-white">Elevblad</span>
        </nav>
        <SkrivUtKnapp text="Skriv ut" />
      </div>
      <div className="bok text-[11pt] leading-relaxed">
        <div className="mb-6 flex items-end justify-between gap-6 border-b-2 border-neutral-900 pb-3 dark:border-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{group.label} · Elevblad</p>
            <h1 className="text-3xl font-bold tracking-tight">{g.title}</h1>
          </div>
          <p className="shrink-0 text-[10pt]">Namn: ______________________</p>
        </div>
        {steg.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-3 text-xl font-bold">Under lektionen</h2>
            <ol className="space-y-5">
              {steg.flatMap((s) => s.fragor.slice(0, 2)).map((f, i) => (
                <li key={f} className="break-inside-avoid">
                  <p>
                    {i + 1}. {f}
                  </p>
                  <Linjer antal={kort ? 2 : 3} />
                </li>
              ))}
            </ol>
          </section>
        )}
        <section className="break-inside-avoid">
          <h2 className="mb-3 text-xl font-bold">Hur gick det?</h2>
          <table className="w-full border-collapse text-[10pt]">
            <thead>
              <tr className="border-b-2 border-neutral-900 text-left dark:border-white">
                <th className="py-1.5">Fundera</th>
                <th className="w-16 py-1.5 text-center">Ja</th>
                <th className="w-16 py-1.5 text-center">Delvis</th>
                <th className="w-16 py-1.5 text-center">Inte än</th>
              </tr>
            </thead>
            <tbody>
              {sjalvskattning(g.bedomningsstod).map((b) => (
                <tr key={b} className="border-b border-neutral-300">
                  <td className="py-2 pr-3">{b}</td>
                  <td className="text-center">☐</td>
                  <td className="text-center">☐</td>
                  <td className="text-center">☐</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-5 font-semibold">Det här tar jag med mig från lektionen:</p>
          <Linjer antal={3} />
        </section>
        <p className="mt-6 text-[9pt] text-neutral-500">Steg i lektionen: {g.genomforande.map((s) => stegRubrik(s.steg)).join(" → ")}</p>
      </div>
    </div>
  );
}
