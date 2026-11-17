import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { cn } from "@/lib/utils";
import { hamtaArbetsomrade } from "@/lib/arbetsomraden";
import type { AoFraga, AoLektion, Arbetsomrade } from "@/lib/arbetsomraden/typer";
import { SkrivUtKnapp } from "@/components/grammatik/skriv-ut-knapp";

interface Props {
  params: Promise<{ arskurs: string; id: string; del: string }>;
  searchParams: Promise<{ facit?: string }>;
}

function delTitel(ao: Arbetsomrade, del: string): string | undefined {
  if (del === "fortest") return "Förtest – vad vet du redan?";
  if (del === "prov") return `Prov: ${ao.titel}`;
  if (del === "elev") return `Elevhäfte: ${ao.titel}`;
  const l = ao.lektioner[Number(del) - 1];
  return l ? `Lektion ${del}: ${l.titel}` : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, id, del } = await params;
  const ao = hamtaArbetsomrade(arskurs as AgeGroup, id);
  const t = ao && delTitel(ao, del);
  return t ? { title: t } : {};
}

const bokstav = (i: number) => String.fromCharCode(65 + i);

function Fragor({ fragor, facit, start = 1 }: { fragor: AoFraga[]; facit: boolean; start?: number }) {
  return (
    <ol className="space-y-3" start={start}>
      {fragor.map((f, i) => (
        <li key={i} className="break-inside-avoid">
          <p className="font-medium">
            {start + i}. {f.fraga}
          </p>
          {facit ? (
            <p className="pl-4 text-[10pt]">
              <strong>
                {bokstav(f.ratt)}. {f.alternativ[f.ratt]}
              </strong>
              {f.forklaring ? ` – ${f.forklaring}` : ""}
            </p>
          ) : (
            <ul className="flex flex-wrap gap-x-6 gap-y-0.5 pl-4">
              {f.alternativ.map((a, j) => (
                <li key={j}>
                  ☐ {bokstav(j)}. {a}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
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

function Lektionsmaterial({ l, nr }: { l: AoLektion; nr: number }) {
  return (
    <section className="break-inside-avoid-page">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Lektion {nr}</p>
      <h2 className="mb-3 text-2xl font-bold">{l.titel}</h2>
      {l.elevtext.map((t) => (
        <div key={t.rubrik} className="mb-4">
          <h3 className="mb-1 text-lg font-semibold">{t.rubrik}</h3>
          {t.stycken.map((s) => (
            <p key={s} className="mb-2">
              {s}
            </p>
          ))}
        </div>
      ))}
      <div className="mt-4 rounded-lg border-2 border-neutral-900 p-4 dark:border-white">
        <p className="mb-2 font-bold">Uppgifter</p>
        <ol className="space-y-4">
          {l.uppgifter.map((u, i) => (
            <li key={u} className="break-inside-avoid">
              <p>
                {i + 1}. {u}
              </p>
              <Linjer antal={4} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default async function AoUtskriftPage({ params, searchParams }: Props) {
  const { arskurs, id, del } = await params;
  const facit = (await searchParams).facit === "1";
  const stadie = arskurs as AgeGroup;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const ao = hamtaArbetsomrade(stadie, id);
  const titel = ao && delTitel(ao, del);
  if (!group || !ao || !titel) notFound();
  const bas = `/${stadie}/arbetsomraden/${ao.id}`;
  const harFacit = del === "fortest" || del === "prov";

  let innehall: React.ReactNode;
  if (del === "fortest") innehall = <Fragor fragor={ao.fortest} facit={facit} />;
  else if (del === "prov")
    innehall = (
      <>
        {!facit && <p className="mb-4 text-[10pt]">Del A: välj det svar som stämmer bäst. Del B: svara med hela meningar.</p>}
        <h2 className="mb-2 text-lg font-bold">Del A</h2>
        <Fragor fragor={ao.prov.fragor} facit={facit} />
        <h2 className="mb-2 mt-6 text-lg font-bold">Del B</h2>
        <ol className="space-y-5">
          {ao.prov.oppna.map((o, i) => (
            <li key={o.fraga} className="break-inside-avoid">
              <p className="font-medium">
                {ao.prov.fragor.length + i + 1}. {o.fraga}
              </p>
              {facit ? (
                <p className="pl-4 text-[10pt]">
                  <strong>Bedöm:</strong> {o.bedomning.join(" · ")}
                </p>
              ) : (
                <Linjer antal={7} />
              )}
            </li>
          ))}
        </ol>
        {facit && (
          <p className="mt-6 text-[10pt] text-neutral-600">
            Förslag: Del A ger 1 poäng per rätt svar. Del B bedöms med punkterna ovan (0–3 poäng per fråga). Jämför gärna med förtestet.
          </p>
        )}
      </>
    );
  else if (del === "elev")
    innehall = (
      <>
        <div className="mb-6 rounded-lg border border-neutral-300 p-4 text-[10pt]">
          <p className="mb-1 font-bold">Viktiga begrepp</p>
          <dl className="grid gap-x-6 gap-y-1 sm:grid-cols-2 print:grid-cols-2">
            {ao.begrepp.map(([t, f]) => (
              <div key={t}>
                <dt className="inline font-semibold">{t}</dt> <dd className="inline">– {f}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="space-y-10">
          {ao.lektioner.map((l, i) => (
            <div key={l.titel} className={cn(i > 0 && "break-before-page pt-2")}>
              <Lektionsmaterial l={l} nr={i + 1} />
            </div>
          ))}
        </div>
      </>
    );
  else innehall = <Lektionsmaterial l={ao.lektioner[Number(del) - 1]} nr={Number(del)} />;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 print:max-w-none print:px-0 print:py-0">
      <div className="mb-8 space-y-3 rounded-xl border border-neutral-200 p-5 print:hidden dark:border-neutral-800">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
          <Link href={bas} className="hover:text-neutral-900 dark:hover:text-white">
            {ao.titel}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-neutral-900 dark:text-white">{titel}</span>
        </nav>
        <div className="flex flex-wrap items-center gap-2">
          {harFacit && (
            <>
              <Link
                href={`${bas}/utskrift/${del}`}
                className={cn("rounded-full px-3 py-1.5 text-sm font-medium", !facit ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "bg-neutral-100 dark:bg-neutral-800")}
              >
                Elevens version
              </Link>
              <Link
                href={`${bas}/utskrift/${del}?facit=1`}
                className={cn("rounded-full px-3 py-1.5 text-sm font-medium", facit ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "bg-neutral-100 dark:bg-neutral-800")}
              >
                Facit
              </Link>
            </>
          )}
          <span className="flex-1" />
          <SkrivUtKnapp text="Skriv ut" />
        </div>
      </div>

      <div className="bok text-[11pt] leading-relaxed">
        <div className="mb-6 flex items-end justify-between gap-6 border-b-2 border-neutral-900 pb-3 dark:border-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {group.label} · {ao.titel}
              {facit ? " · Facit" : ""}
            </p>
            <h1 className="text-3xl font-bold tracking-tight">{titel}</h1>
          </div>
          {!facit && <p className="shrink-0 text-[10pt]">Namn: ______________________</p>}
        </div>
        {innehall}
      </div>
    </div>
  );
}
