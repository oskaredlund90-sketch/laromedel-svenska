import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { cn } from "@/lib/utils";
import { AMNEN, AMNEN_PER_STADIUM, MAL_PER_STADIUM, PROGRESSION, ALLA_AMNEN, type GrammatikAmne } from "@/lib/grammatik/amnen";
import { haftenForKapitel, kapitelprovFor } from "@/lib/grammatik/bok";
import { getExercisesForTopic } from "@/lib/data/grammatik-ovningar";
import { hamtaHafte } from "@/lib/haften";
import { KAPITEL } from "@/components/grammatik/kapitel";
import { OvningarFacit, OvningarPapper } from "@/components/grammatik/utskrift";
import { HaftePapper } from "@/components/haften/hafte-papper";
import { QrKod } from "@/components/grammatik/qr-kod";
import { GrammatikInfografik } from "@/components/infografik/grammatik";
import { SkrivUtKnapp } from "@/components/grammatik/skriv-ut-knapp";

interface Props {
  params: Promise<{ arskurs: string }>;
  searchParams: Promise<{ version?: string; kapitel?: string; haften?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Grammatikboken – ${group.label}`,
    description: `Lärobok och övningsbok i grammatik för ${group.label.toLowerCase()}, att läsa på skärmen eller skriva ut.`,
  };
}

function Val({ href, aktiv, children }: { href: string; aktiv: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      scroll={false}
      className={cn(
        "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
        aktiv
          ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700",
      )}
    >
      {children}
    </Link>
  );
}

export default async function GrammatikbokPage({ params, searchParams }: Props) {
  const { arskurs } = await params;
  const sp = await searchParams;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) notFound();
  const stadie = arskurs as AgeGroup;
  const larare = sp.version === "larare";
  const medHaften = sp.haften === "1";
  const allaKapitel = AMNEN_PER_STADIUM[stadie];
  const valt = allaKapitel.includes(sp.kapitel as GrammatikAmne) ? (sp.kapitel as GrammatikAmne) : null;
  const kapitel = valt ? [valt] : allaKapitel;

  const lank = (andra: Partial<Record<"version" | "kapitel" | "haften", string | null>>) => {
    const q = new URLSearchParams();
    const v = { version: larare ? "larare" : null, kapitel: valt, haften: medHaften ? "1" : null, ...andra };
    for (const [k, val] of Object.entries(v)) if (val) q.set(k, val);
    const s = q.toString();
    return `/${stadie}/grammatik/bok${s ? `?${s}` : ""}`;
  };

  const prov = larare && !valt ? hamtaHafte(`prov-${stadie}`) : undefined;
  const bokTitel = `Grammatik – ${group.label}`;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 print:max-w-none print:px-0 print:py-0">
      {/* ---------- Verktygsrad (skrivs inte ut) ---------- */}
      <div className="mb-8 space-y-4 rounded-xl border border-neutral-200 p-5 print:hidden dark:border-neutral-800">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
          <Link href={`/${stadie}/grammatik`} className="hover:text-neutral-900 dark:hover:text-white">
            Grammatik
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-neutral-900 dark:text-white">Grammatikboken</span>
        </nav>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 text-sm text-neutral-500">Version</span>
          <Val href={lank({ version: null })} aktiv={!larare}>
            Elevbok
          </Val>
          <Val href={lank({ version: "larare" })} aktiv={larare}>
            Lärarbok – med facit och prov
          </Val>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 text-sm text-neutral-500">Innehåll</span>
          <Val href={lank({ kapitel: null })} aktiv={!valt}>
            Hela boken
          </Val>
          {allaKapitel.map((a, i) => (
            <Val key={a} href={lank({ kapitel: a })} aktiv={valt === a}>
              {i + 1}. {AMNEN[a].titel}
            </Val>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 text-sm text-neutral-500">Häften</span>
          <Val href={lank({ haften: null })} aktiv={!medHaften}>
            Utan övningshäften
          </Val>
          <Val href={lank({ haften: "1" })} aktiv={medHaften}>
            Med övningshäften (många sidor)
          </Val>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <SkrivUtKnapp text={valt ? "Skriv ut kapitlet" : "Skriv ut boken"} />
          <p className="text-sm text-neutral-500">
            {larare
              ? "Lärarboken har facit och ett kapitelprov (20 p) efter varje kapitel" + (valt ? "." : " och slutprovet med facit sist.")
              : "Elevboken har inga facit. Varje kapitel har en QR-kod till sajten."}
          </p>
        </div>
      </div>

      {/* ---------- Boken ---------- */}
      <div className="bok text-[11pt] leading-relaxed">
        {!valt && (
          <>
            {/* Titelsida */}
            <section className="flex min-h-[60vh] flex-col justify-between break-after-page border-b border-neutral-200 pb-10 dark:border-neutral-800 print:min-h-[240mm] print:border-0">
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500">Läromedel i Svenska</p>
                <h1 className="mt-4 text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">{bokTitel}</h1>
                <p className="mt-3 text-xl text-neutral-600 dark:text-neutral-400">
                  Lärobok och övningsbok{larare ? " · Lärarupplaga med facit och prov" : ""}
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="mb-2 font-semibold text-neutral-900 dark:text-white">Det här ska du kunna efter {group.label.toLowerCase()}</p>
                  <ul className="list-disc space-y-1 pl-5 text-neutral-700 dark:text-neutral-300">
                    {MAL_PER_STADIUM[stadie].map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
                <QrKod sokvag={`/${stadie}/grammatik`} text="Hela boken finns på sajten – med övningar som rättas direkt" />
                <p className="text-sm text-neutral-500">Namn: ______________________________ Klass: __________</p>
              </div>
            </section>

            {/* Innehåll */}
            <section className="break-after-page py-10 print:py-0">
              <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">Innehåll</h2>
              <ol className="space-y-3">
                {allaKapitel.map((a, i) => (
                  <li key={a} className="flex gap-4 border-b border-dotted border-neutral-300 pb-2 dark:border-neutral-700">
                    <span className="w-8 font-bold">{i + 1}.</span>
                    <span>
                      <span className="font-semibold text-neutral-900 dark:text-white">{AMNEN[a].titel}</span>
                      <span className="block text-sm text-neutral-600 dark:text-neutral-400">{PROGRESSION[a][stadie]}</span>
                    </span>
                  </li>
                ))}
                {larare && (
                  <li className="flex gap-4 border-b border-dotted border-neutral-300 pb-2 dark:border-neutral-700">
                    <span className="w-8 font-bold">✓</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">Kapitelprov med facit efter varje kapitel</span>
                  </li>
                )}
                {larare && (
                  <li className="flex gap-4 border-b border-dotted border-neutral-300 pb-2 dark:border-neutral-700">
                    <span className="w-8 font-bold">✓</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">Slutprov med facit</span>
                  </li>
                )}
              </ol>
            </section>

            {/* Progression (lärarbok) */}
            {larare && (
              <section className="break-after-page py-10 print:py-0">
                <h2 className="mb-2 text-3xl font-bold text-neutral-900 dark:text-white">Progression genom stadierna</h2>
                <p className="mb-5 text-neutral-600 dark:text-neutral-400">
                  Vad eleverna lär sig om varje område på varje stadium. Den markerade kolumnen är den här boken.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-[9pt]">
                    <thead>
                      <tr>
                        <th className="border border-neutral-300 p-1.5 text-left dark:border-neutral-700">Område</th>
                        {AGE_GROUPS.map((g) => (
                          <th
                            key={g.slug}
                            className={cn("border border-neutral-300 p-1.5 text-left dark:border-neutral-700", g.slug === stadie && "bg-sky-50 dark:bg-sky-950/40")}
                          >
                            {g.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ALLA_AMNEN.map((a) => (
                        <tr key={a}>
                          <td className="border border-neutral-300 p-1.5 font-semibold dark:border-neutral-700">{AMNEN[a].titel}</td>
                          {AGE_GROUPS.map((g) => (
                            <td
                              key={g.slug}
                              className={cn("border border-neutral-300 p-1.5 align-top dark:border-neutral-700", g.slug === stadie && "bg-sky-50 font-medium dark:bg-sky-950/40")}
                            >
                              {PROGRESSION[a][g.slug as AgeGroup] ?? "–"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </>
        )}

        {/* Kapitel */}
        {await Promise.all(
          kapitel.map(async (a) => {
            const nr = allaKapitel.indexOf(a) + 1;
            const Genomgang = KAPITEL[a].content;
            const ovningar = getExercisesForTopic(a, stadie);
            const haften = medHaften ? haftenForKapitel(a, stadie) : [];
            const kapprov = larare ? kapitelprovFor(a, stadie) : undefined;
            return (
              <article key={a} className="break-before-page border-t-4 border-neutral-900 pt-8 pb-12 dark:border-white print:border-t-0 print:pt-0">
                <div className="mb-8 flex flex-wrap items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Kapitel {nr}</p>
                    <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">{AMNEN[a].titel}</h2>
                    <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">{PROGRESSION[a][stadie]}</p>
                  </div>
                  <QrKod sokvag={`/${stadie}/grammatik/${a}`} text="Plugga och öva på sajten" />
                </div>

                <div className="break-inside-avoid">
                  <GrammatikInfografik topic={a} stadie={stadie} />
                </div>
                <Genomgang stadie={stadie} />

                <section className="break-before-page">
                  <h3 className="mb-1 text-2xl font-bold text-neutral-900 dark:text-white">Övningar – {AMNEN[a].titel}</h3>
                  <p className="mb-4 text-sm text-neutral-500">
                    {ovningar.length} uppgifter. Samma övningar finns på sajten och rättas direkt där.
                  </p>
                  <OvningarPapper ovningar={ovningar} rubrik="h3" />
                </section>

                {larare && (
                  <section className="mt-8 break-before-page rounded-lg border border-neutral-300 p-5 dark:border-neutral-700 print:rounded-none print:border-0 print:p-0">
                    <h3 className="mb-3 text-xl font-bold">Facit – kapitel {nr}: {AMNEN[a].titel}</h3>
                    <OvningarFacit ovningar={ovningar} />
                  </section>
                )}

                {kapprov && (
                  <section className="mt-10 break-before-page">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">Kapitelprov · lärarmaterial</p>
                    <HaftePapper hafte={kapprov} medFacit synlig />
                  </section>
                )}

                {haften.map((h) => (
                  <section key={h.id} className="mt-10 break-before-page">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">Övningshäfte · kapitel {nr}</p>
                    <HaftePapper hafte={h} medFacit={larare} synlig />
                  </section>
                ))}
              </article>
            );
          }),
        )}

        {prov && (
          <article className="break-before-page border-t-4 border-neutral-900 pt-8 dark:border-white print:border-t-0 print:pt-0">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">Slutprov · lärarmaterial</p>
            <HaftePapper hafte={prov} medFacit synlig />
          </article>
        )}
      </div>
    </div>
  );
}
