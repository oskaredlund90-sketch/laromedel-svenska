import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ChevronRight, PenLine, QrCode, Repeat, Lightbulb, Dumbbell } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { cn } from "@/lib/utils";
import { AMNEN, AMNEN_PER_STADIUM, MAL_PER_STADIUM, PROGRESSION, ALLA_AMNEN, delarForStadium, type GrammatikAmne } from "@/lib/grammatik/amnen";
import { haftenForKapitel, kapitelprovFor, repetitionForDel } from "@/lib/grammatik/bok";
import { SKRIV_SJALV } from "@/lib/grammatik/skriv-sjalv";
import { skrivdelFor } from "@/lib/grammatik/prov-skrivdel";
import { ordlistaFor } from "@/lib/grammatik/ordlista";
import { sidnummerFor } from "@/lib/grammatik/sidnummer";
import { pdfFinns, pdfSokvag } from "@/lib/grammatik/pdf";
import { getExercisesForTopic } from "@/lib/data/grammatik-ovningar";
import { hamtaHafte } from "@/lib/haften";
import type { Hafte } from "@/lib/haften/typer";
import { KAPITEL } from "@/components/grammatik/kapitel";
import { OvningarFacit, OvningarPapper } from "@/components/grammatik/utskrift";
import { HafteFacit, HafteUppgifter } from "@/components/haften/hafte-papper";
import { QrKod } from "@/components/grammatik/qr-kod";
import { GrammatikInfografik } from "@/components/infografik/grammatik";
import { SkrivUtKnapp } from "@/components/grammatik/skriv-ut-knapp";
import { minst } from "@/components/grammatik/delar";

// Ny adress för PDF:en vid varje ny version av sajten, så att ingen cache lämnar ut en gammal fil.
const PDF_VERSION = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "lokal";
import { LaddaNerPdf } from "@/components/grammatik/ladda-ner-pdf";

interface Props {
  params: Promise<{ arskurs: string }>;
  searchParams: Promise<{ version?: string; kapitel?: string; haften?: string; sidor?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const { version } = await searchParams;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Grammatikboken – ${group.label}${version === "larare" ? " – lärarbok" : ""}`,
    description: `Lärobok och övningsbok i grammatik för ${group.label.toLowerCase()}, att läsa på skärmen, skriva ut eller ladda ner som PDF.`,
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

/** Rubrik för en av bokens stora delar (ordlista, facit, prov …). */
function DelRubrik({ overrad, titel, text }: { overrad: string; titel: string; text?: string }) {
  return (
    <div className="mb-6 border-b-2 border-neutral-900 pb-3 dark:border-white">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{overrad}</p>
      <h2 className="rubrik-med-plats text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{titel}</h2>
      {text && <p className="mt-1 text-neutral-600 dark:text-neutral-400">{text}</p>}
    </div>
  );
}

function InnehallsRad({ nr, titel, text, sida, fet }: { nr?: string; titel: string; text?: string; sida?: number; fet?: boolean }) {
  return (
    <li className="flex items-baseline gap-3 py-1">
      <span className="w-7 shrink-0 text-right font-bold tabular-nums">{nr}</span>
      <span className="min-w-0 flex-1">
        <span className={cn("text-neutral-900 dark:text-white", fet && "font-semibold")}>{titel}</span>
        {text && <span className="block text-[9.5pt] leading-snug text-neutral-500">{text}</span>}
      </span>
      {sida !== undefined && (
        <>
          <span className="hidden flex-1 translate-y-[-3px] border-b border-dotted border-neutral-400 sm:block print:block" />
          <span className="w-8 shrink-0 text-right tabular-nums">{sida}</span>
        </>
      )}
    </li>
  );
}

export default async function GrammatikbokPage({ params, searchParams }: Props) {
  const { arskurs } = await params;
  const sp = await searchParams;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) notFound();
  const stadie = arskurs as AgeGroup;
  const larare = sp.version === "larare";
  const baraHaften = sp.haften === "bara";
  const medHaften = sp.haften === "1" || baraHaften;
  const allaKapitel = AMNEN_PER_STADIUM[stadie];
  const valt = allaKapitel.includes(sp.kapitel as GrammatikAmne) ? (sp.kapitel as GrammatikAmne) : null;
  const helaBoken = !valt;
  const delar = delarForStadium(stadie);

  // Sidnummer i innehållsförteckningen: från PDF-skriptet (?sidor=) eller sparade sidnummer.
  const sidor: Record<string, number> = (() => {
    if (!helaBoken) return {};
    if (sp.sidor) {
      try {
        return JSON.parse(Buffer.from(sp.sidor, "base64url").toString("utf8"));
      } catch {
        return {};
      }
    }
    if (medHaften) return {};
    return sidnummerFor(stadie, larare);
  })();

  const lank = (andra: Partial<Record<"version" | "kapitel" | "haften", string | null>>) => {
    const q = new URLSearchParams();
    const v = { version: larare ? "larare" : null, kapitel: valt, haften: sp.haften === "1" || baraHaften ? sp.haften! : null, ...andra };
    for (const [k, val] of Object.entries(v)) if (val) q.set(k, val);
    const s = q.toString();
    return `/${stadie}/grammatik/bok${s ? `?${s}` : ""}`;
  };

  const slutprov = larare && helaBoken && !baraHaften ? hamtaHafte(`prov-${stadie}`) : undefined;
  const repetitioner = helaBoken && !baraHaften ? delar.map((d) => ({ del: d, hafte: repetitionForDel(stadie, d) })) : [];
  const repetitionFor = (nr: number) => repetitioner.find((r) => r.del.nr === nr)?.hafte;
  const kapitelprov = larare && !baraHaften ? (valt ? [valt] : allaKapitel).map((a) => ({ amne: a, prov: kapitelprovFor(a, stadie) })).filter((k): k is { amne: GrammatikAmne; prov: Hafte } => !!k.prov) : [];
  const extraHaften = medHaften
    ? (valt ? [valt] : allaKapitel).flatMap((a) => haftenForKapitel(a, stadie).map((h) => ({ amne: a, hafte: h })))
    : [];
  const unikaExtra = extraHaften.filter((x, i) => extraHaften.findIndex((y) => y.hafte.id === x.hafte.id) === i);
  const ordlista = ordlistaFor(stadie);
  const nrFor = (a: GrammatikAmne) => allaKapitel.indexOf(a) + 1;

  const apiSok = new URLSearchParams({ stadie, ...(larare ? { version: "larare" } : {}), ...(valt ? { kapitel: valt } : {}), ...(medHaften ? { haften: baraHaften ? "bara" : "1" } : {}), v: PDF_VERSION }).toString();
  const filnamn = ["grammatik", stadie, baraHaften ? "ovningshaften" : null, valt, larare ? "larare" : "elev", medHaften && !baraHaften ? "med-haften" : null].filter(Boolean).join("-");
  const pdfElev = pdfSokvag(stadie, false);
  const pdfLarare = pdfSokvag(stadie, true);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 print:max-w-none print:px-0 print:py-0">
      {/* ---------- Verktygsrad (skrivs inte ut) ---------- */}
      <div className="mb-10 space-y-4 rounded-xl border border-neutral-200 p-5 print:hidden dark:border-neutral-800">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
          <Link href={`/${stadie}/grammatik`} className="hover:text-neutral-900 dark:hover:text-white">
            Grammatik – {group.label}
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
            Lärarbok – med handledning, facit och prov
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
          <span className="w-20 text-sm text-neutral-500">Extra</span>
          <Val href={lank({ haften: null })} aktiv={!medHaften}>
            Utan övningshäften
          </Val>
          <Val href={lank({ haften: "1" })} aktiv={medHaften && !baraHaften}>
            Med övningshäften sist (många sidor)
          </Val>
          <Val href={lank({ haften: "bara" })} aktiv={baraHaften}>
            Bara övningshäften
          </Val>
        </div>
        <div className="flex flex-wrap items-center gap-3 border-t border-neutral-200 pt-4 dark:border-neutral-800">
          <LaddaNerPdf
            api={`/api/bok-pdf?${apiSok}`}
            direkt={helaBoken && !medHaften && pdfFinns(larare ? pdfLarare : pdfElev) ? (larare ? pdfLarare : pdfElev) : undefined}
            filnamn={`${filnamn}.pdf`}
            text="Ladda ner som PDF"
          />
          <SkrivUtKnapp text="Skriv ut" />
          <p className="w-full text-sm text-neutral-500">
            PDF:en innehåller det du har valt ovan: {larare ? "lärarbok" : "elevbok"}, {valt ? `kapitel ${nrFor(valt)}` : "hela boken"}
            {baraHaften ? " – bara övningshäftena" : medHaften ? " med övningshäften" : ""}.
          </p>
        </div>
      </div>

      {/* ---------- Boken ---------- */}
      <div className="bok text-[11pt] leading-relaxed">
        {baraHaften && (
          <>
            <section className="bok-titel flex flex-col justify-between gap-10 break-after-page pb-12 print:pb-0">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Läromedel i Svenska</p>
                <div className="mt-10 border-l-8 border-neutral-900 pl-6 dark:border-white">
                  <h1 className="text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">Övningshäften</h1>
                  <p className="mt-2 text-3xl font-semibold text-neutral-700 dark:text-neutral-300">Grammatik – {group.label}</p>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                    {larare ? "Med facit sist" : "Extra träning till grammatikbokens kapitel – för lektionen eller som läxa"}
                  </p>
                </div>
              </div>
              <QrKod sokvag={`/${stadie}/grammatik`} text="Alla häften finns också på sajten – där rättas de direkt" storlek={88} />
            </section>
            <section className="break-after-page py-10 print:py-0">
              <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white">Innehåll</h2>
              <ol className="columns-1 gap-8 text-[10pt] sm:columns-2 print:columns-2">
                {unikaExtra.map(({ amne, hafte }) => (
                  <li key={hafte.id} className="mb-2 break-inside-avoid">
                    <span className="font-semibold">{hafte.titel}</span>
                    <span className="block text-[9pt] text-neutral-500">
                      Kapitel {nrFor(amne)} {AMNEN[amne].titel} · {hafte.antalRader} uppgifter{sidor[`hafte-${hafte.id}`] ? ` · s. ${sidor[`hafte-${hafte.id}`]}` : ""}
                    </span>
                  </li>
                ))}
              </ol>
              {larare && <p className="mt-4 font-semibold">Facit finns sist.</p>}
            </section>
          </>
        )}

        {helaBoken && !baraHaften && (
          <>
            {/* Titelsida */}
            <section className="bok-titel flex flex-col justify-between gap-10 break-after-page pb-12 print:pb-0">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Läromedel i Svenska</p>
                <div className="mt-10 border-l-8 border-neutral-900 pl-6 dark:border-white">
                  <h1 className="text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">Grammatik</h1>
                  <p className="mt-2 text-3xl font-semibold text-neutral-700 dark:text-neutral-300">{group.label}</p>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                    {larare ? "Lärarbok – med handledning, facit och prov" : "Lärobok och övningsbok"}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 print:grid-cols-3">
                {delar.map((d) => (
                  <div key={d.nr} className="rounded-lg border-2 border-neutral-900 p-4 dark:border-white">
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Del {d.nr}</p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">{d.titel}</p>
                    <ul className="mt-2 space-y-0.5 text-[10pt] text-neutral-700 dark:text-neutral-300">
                      {d.kapitel.map((k) => (
                        <li key={k.amne}>
                          {k.nr}. {AMNEN[k.amne].titel}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <p className="mb-2 font-semibold text-neutral-900 dark:text-white">Det här tränar du i boken</p>
                <ul className="grid list-disc gap-x-8 gap-y-1 pl-5 text-neutral-700 sm:grid-cols-2 dark:text-neutral-300 print:grid-cols-2">
                  {MAL_PER_STADIUM[stadie].map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-end justify-between gap-6 border-t border-neutral-300 pt-5 dark:border-neutral-700">
                <QrKod sokvag={`/${stadie}/grammatik`} text="Hela boken finns på sajten – övningarna rättas direkt" storlek={88} />
                {!larare && <p className="text-[10pt]">Namn: ______________________ Klass: ________</p>}
              </div>
            </section>

            {/* Innehåll + så använder du boken */}
            <section className="break-after-page py-10 print:py-0">
              <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white">Innehåll</h2>
              <ol className="text-[10.5pt]">
                {delar.map((d) => (
                  <li key={d.nr} className="mt-3 list-none">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      Del {d.nr} · {d.titel}
                    </p>
                    <ol>
                      {d.kapitel.map((k) => (
                        <InnehallsRad key={k.amne} nr={`${k.nr}`} titel={AMNEN[k.amne].titel} sida={sidor[k.amne]} fet />
                      ))}
                      {repetitionFor(d.nr) && <InnehallsRad nr="↻" titel={`Repetition – del ${d.nr}`} sida={sidor[`repetition-${d.nr}`]} />}
                    </ol>
                  </li>
                ))}
                <li className="mt-3 list-none">
                  <ol>
                    <InnehallsRad nr="Ö" titel="Ordlista – grammatiska termer A–Ö" sida={sidor["ordlista"]} fet />
                    {larare && <InnehallsRad nr="✓" titel="Lärarhandledning och progression" sida={sidor["handledning"]} fet />}
                    {larare && <InnehallsRad nr="✓" titel="Facit till övningar och repetition" sida={sidor["facit"]} fet />}
                    {larare && <InnehallsRad nr="✓" titel="Kapitelprov (20 poäng) och slutprov – med facit" sida={sidor["prov"]} fet />}
                  </ol>
                </li>
              </ol>

              <div className="mt-8 rounded-lg border border-neutral-300 p-5 dark:border-neutral-700">
                <p className="mb-3 font-semibold text-neutral-900 dark:text-white">Så är varje kapitel uppbyggt</p>
                <div className="grid gap-x-6 gap-y-3 text-[10pt] sm:grid-cols-2 print:grid-cols-2">
                  {[
                    [BookOpen, "Genomgång", "Regler och exempel, steg för steg. Läs den först."],
                    [Lightbulb, "Kom ihåg", "Det viktigaste i några rader – bra att repetera inför prov."],
                    [Dumbbell, "Öva", "Övningar från lätt till svårare. Samma övningar rättas direkt på sajten."],
                    [PenLine, "Använd i din text", "Skriv själv och använd det du har lärt dig i en egen text."],
                    [Repeat, "Repetition", "Efter varje del: blandade uppgifter från alla kapitel i delen."],
                    [QrCode, "QR-kod", "Skanna koden för att öva på kapitlet på sajten."],
                  ].map(([Ikon, rubrik, text]) => {
                    const I = Ikon as typeof BookOpen;
                    return (
                      <div key={rubrik as string} className="flex gap-3">
                        <I className="mt-0.5 h-5 w-5 shrink-0" />
                        <p>
                          <strong>{rubrik as string}.</strong> {text as string}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

          </>
        )}

        {/* ---------- Delar och kapitel ---------- */}
        {!baraHaften && delar.map((d) =>
          d.kapitel
            .filter((k) => helaBoken || k.amne === valt)
            .map((k, i) => {
              const a = k.amne;
              const Genomgang = KAPITEL[a].content;
              const ovningar = getExercisesForTopic(a, stadie);
              const skriv = SKRIV_SJALV[a][stadie];
              const sistIDel = helaBoken && i === d.kapitel.length - 1;
              const rep = sistIDel ? repetitionFor(d.nr) : undefined;
              return (
                <div key={a}>
                  <article className="kapitel break-before-page pt-10 print:pt-0" data-sida={a}>
                    <div className="mb-6 flex items-start justify-between gap-6 border-b-2 border-neutral-900 pb-4 dark:border-white">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                          Del {d.nr} · {d.titel} — Kapitel {k.nr}
                        </p>
                        <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">{AMNEN[a].titel}</h2>
                        <p className="mt-2 max-w-xl text-[10.5pt] text-neutral-600 dark:text-neutral-400">
                          <strong>Det här lär du dig:</strong> {PROGRESSION[a][stadie]}
                        </p>
                      </div>
                      <div className="hidden shrink-0 sm:block print:block">
                        <QrKod sokvag={`/${stadie}/grammatik/${a}`} storlek={88} kompakt />
                      </div>
                    </div>

                    <div className="infografik-bok">
                      <GrammatikInfografik topic={a} stadie={stadie} />
                    </div>
                    <Genomgang stadie={stadie} />

                    <section className="mt-6 border-t-2 border-neutral-900 pt-4 dark:border-white">
                      <div className="mb-3 flex items-baseline justify-between gap-4">
                        <h3 className="rubrik-med-plats text-2xl font-bold text-neutral-900 dark:text-white">Öva – {AMNEN[a].titel}</h3>
                        <p className="text-[9pt] text-neutral-500">{ovningar.length} uppgifter · rättas direkt på sajten</p>
                      </div>
                      <OvningarPapper ovningar={ovningar} rubrik="h3" />
                    </section>

                    {skriv && (
                      <section className="mt-4 break-inside-avoid rounded-lg border-2 border-neutral-900 p-4 dark:border-white">
                        <p className="mb-1 flex items-center gap-2 font-bold">
                          <PenLine className="h-4 w-4" /> Använd i din text
                        </p>
                        <p>{skriv}</p>
                      </section>
                    )}
                  </article>

                  {rep && (
                    <section className="break-before-page pt-10 print:pt-0" data-sida={`repetition-${d.nr}`}>
                      <DelRubrik overrad={`Del ${d.nr} · ${d.titel}`} titel={`Repetition – del ${d.nr}`} text="Blandade uppgifter från alla kapitel i delen." />
                      <HafteUppgifter hafte={rep} utanRubrik />
                    </section>
                  )}
                </div>
              );
            }),
        )}

        {/* ---------- Ordlista ---------- */}
        {helaBoken && !baraHaften && (
          <section className="break-before-page pt-10 print:pt-0" data-sida="ordlista">
            <DelRubrik overrad="Slå upp" titel="Ordlista – grammatiska termer" />
            <dl className="columns-1 gap-8 text-[9pt] leading-snug sm:columns-2 print:columns-2">
              {ordlista.map((t) => (
                <div key={t.term} className="mb-1.5 break-inside-avoid">
                  <dt className="font-bold">{t.term}</dt>
                  <dd>
                    {t.forklaring}
                    {t.exempel && <em className="block text-neutral-600 dark:text-neutral-400">{t.exempel}</em>}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* ---------- Lärarhandledning (sist, så att sidnumren stämmer med elevboken) ---------- */}
        {larare && !baraHaften && (
          <section className="break-before-page pt-10 print:pt-0" data-sida="handledning">
            <DelRubrik overrad="Lärarmaterial" titel="Lärarhandledning" />
            <div className="space-y-3 text-[10.5pt]">
              <p>
                Boken har tre delar som går från ordet, via meningen, till texten. Kapitlen bygger på varandra – ta dem gärna i ordning.
                Lärarboken har samma sidnummer som elevboken fram till ordlistan. Handledning, facit och prov ligger sist.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-2">
                <div>
                  <p className="font-semibold">Förslag på arbetsgång per kapitel</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>Gå igenom genomgången tillsammans (helklass).</li>
                    <li>Eleverna gör övningarna – på papper eller på sajten, där de rättas direkt.</li>
                    <li>Använd i din text: eleverna skriver och använder strukturen i en egen text.</li>
                    <li>Övningshäftena passar som läxa eller som extra träning.</li>
                    <li>Avsluta med kapitelprovet (20 poäng).</li>
                  </ol>
                  <p className="mt-2">Räkna med ungefär 2–4 lektioner per kapitel.</p>
                </div>
                <div>
                  <p className="font-semibold">Repetition och bedömning</p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Repetitionen efter varje del blandar kapitlen. Blandad repetition ger bättre långtidsminne än att öva ett område i taget.</li>
                    <li>Slutprovet kan användas både som förtest i början och som eftertest – då syns elevernas utveckling.</li>
                    <li>Kapitelproven innehåller nya uppgifter som inte finns bland övningarna.</li>
                    <li>Grammatiken syns till sist i elevernas egna texter – följ upp med skrivuppgifterna och med återkoppling på texter.</li>
                  </ul>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-2">
                <div>
                  <p className="font-semibold">Fördelning över stadiet</p>
                  <p>
                    {stadie === "hogstadiet"
                      ? "Ett förslag: del 1 (Ordet) i årskurs 7, del 2 (Meningen) i årskurs 8 och del 3 (Texten) i årskurs 9. Ta repetitionen efter varje del i början av nästa termin, och använd slutprovet som förtest i årskurs 7 och eftertest i årskurs 9."
                      : stadie === "gymnasiet"
                        ? "Ett förslag: del 1 och 2 i Svenska 1, del 3 i Svenska 2 – med repetition av del 1–2 i början av Svenska 2. Slutprovet fungerar som diagnos vid kursstart."
                        : "Ett förslag: en del per termin, med repetitionen i början av nästa termin. Slutprovet kan användas som förtest och eftertest."}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Elever med svenska som andraspråk</p>
                  <p>
                    {minst(stadie, "hogstadiet")
                      ? "Lägg extra tid på det som skiljer sig mellan språk: verbet på plats två och BIFF (Meningsbyggnad), kongruens och en/ett, sin eller hans/hennes samt partikelverb (Ordklasser). "
                      : "Lägg extra tid på det som skiljer sig mellan språk: verbet på plats två (Meningsbyggnad), en/ett och att adjektivet passar ihop med substantivet (Ordklasser). "}
                    Låt eleverna jämföra med sitt modersmål och säga meningarna högt – ordföljd sitter i örat.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Resonera och skriv – återkoppling</p>
                  <p>
                    De öppna uppgifterna har exempelsvar och en checklista i facit. Låt eleverna bocka av checklistan på sitt eget eller en kamrats
                    svar och skriva en sak som saknas. Ge sedan återkoppling på en punkt i taget – helst i elevens egen text.
                  </p>
                </div>
                {stadie === "lagstadiet" ? (
                  <div>
                    <p className="font-semibold">Slutprovet</p>
                    <p>
                      Slutprovet prövar också sådant som tränas i hela svenskundervisningen i årskurs 1–3, till exempel alfabetet, vokaler och
                      konsonanter samt motsatsord och synonymer. Använd det gärna som en bredare diagnos.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="font-semibold">Skrivdelen i proven</p>
                    <p>
                      Varje kapitelprov har en skrivdel utanför de 20 poängen. Bedöm den med kriterierna i facit: kan eleven använda grammatiken
                      – inte bara känna igen den?
                    </p>
                  </div>
                )}
              </div>
              <p className="text-[9.5pt] text-neutral-500">
                Tänk på att sajten är öppen utan inloggning – lärarboken med facit och prov går att nå där.
              </p>
            </div>

            <h3 className="mb-2 mt-8 text-xl font-bold">Progression genom stadierna</h3>
            <p className="mb-3 text-[10pt] text-neutral-600 dark:text-neutral-400">Kolumnen med fet text är den här boken.</p>
            <table className="w-full table-fixed border-collapse text-[8.5pt] leading-snug">
              <thead>
                <tr>
                  <th className="w-[16%] border border-neutral-400 p-1.5 text-left">Område</th>
                  {AGE_GROUPS.map((g) => (
                    <th key={g.slug} className={cn("border border-neutral-400 p-1.5 text-left", g.slug === stadie && "bg-sky-50 dark:bg-sky-950/40")}>
                      {g.label}
                      {g.slug === stadie && <span className="block text-[7.5pt] font-normal">den här boken</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALLA_AMNEN.map((a) => (
                  <tr key={a}>
                    <td className="border border-neutral-400 p-1.5 font-semibold">{AMNEN[a].titel}</td>
                    {AGE_GROUPS.map((g) => (
                      <td key={g.slug} className={cn("border border-neutral-400 p-1.5 align-top", g.slug === stadie && "bg-sky-50 font-semibold dark:bg-sky-950/40")}>
                        {PROGRESSION[a][g.slug as AgeGroup] ?? "–"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
        {/* ---------- Extra övningshäften ---------- */}
        {unikaExtra.map(({ amne, hafte }, i) => (
          <section key={hafte.id} className="break-before-page pt-10 print:pt-0" data-sida={`hafte-${hafte.id}`}>
            {i === 0 && !baraHaften && <DelRubrik overrad="Extra träning" titel="Övningshäften" text="Fler uppgifter till kapitlen – för lektionen eller som läxa." />}
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Övningshäfte · kapitel {nrFor(amne)} {AMNEN[amne].titel}
            </p>
            <HafteUppgifter hafte={hafte} />
          </section>
        ))}

        {/* ---------- Facit (lärarbok) ---------- */}
        {larare && (
          <section className="break-before-page pt-10 print:pt-0" data-sida="facit">
            <DelRubrik overrad="Lärarmaterial" titel="Facit" text="Numreringen följer övningarna i varje kapitel." />
            <div className="space-y-6">
              {(baraHaften ? [] : valt ? [valt] : allaKapitel).map((a) => (
                <div key={a}>
                  <h3 className="mb-1 border-b border-neutral-400 pb-0.5 text-[12pt] font-bold">
                    Kapitel {nrFor(a)}: {AMNEN[a].titel}
                  </h3>
                  <OvningarFacit ovningar={getExercisesForTopic(a, stadie)} />
                </div>
              ))}
              {repetitioner.map(({ del, hafte }) =>
                hafte ? (
                  <div key={del.nr}>
                    <h3 className="mb-1 border-b border-neutral-400 pb-0.5 text-[12pt] font-bold">Repetition – del {del.nr}</h3>
                    <HafteFacit hafte={hafte} />
                  </div>
                ) : null,
              )}
              {unikaExtra.map(({ hafte }) => (
                <div key={hafte.id}>
                  <h3 className="mb-1 border-b border-neutral-400 pb-0.5 text-[12pt] font-bold">Övningshäfte: {hafte.titel}</h3>
                  <HafteFacit hafte={hafte} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------- Prov (lärarbok) ---------- */}
        {kapitelprov.map(({ amne, prov }, i) => (
          <section key={prov.id} className="break-before-page pt-10 print:pt-0" data-sida={i === 0 ? "prov" : undefined}>
            {i === 0 && <DelRubrik overrad="Lärarmaterial" titel="Prov" text="Ett kapitelprov på 20 poäng per kapitel och ett slutprov. Facit efter proven." />}
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Kapitel {nrFor(amne)}</p>
            <HafteUppgifter hafte={prov} />
            {skrivdelFor(amne, stadie) && (
              <div className="mt-4 break-inside-avoid rounded-lg border-2 border-neutral-900 p-4 dark:border-white">
                <p className="font-bold">Skrivdel – bedöms separat, ingår inte i de 20 poängen</p>
                <p className="mt-1">{skrivdelFor(amne, stadie)!.uppgift}</p>
                {Array.from({ length: 8 }).map((_, r) => (
                  <p key={r} className="h-7 border-b border-dotted border-current" />
                ))}
              </div>
            )}
          </section>
        ))}
        {slutprov && (
          <section className="break-before-page pt-10 print:pt-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Slutprov – hela boken</p>
            <HafteUppgifter hafte={slutprov} />
          </section>
        )}
        {kapitelprov.length > 0 && (
          <section className="break-before-page pt-10 print:pt-0">
            <DelRubrik overrad="Lärarmaterial" titel="Facit till proven" />
            <div className="space-y-6">
              {kapitelprov.map(({ amne, prov: p }) => {
                const skriv = skrivdelFor(amne, stadie);
                return (
                  <div key={p.id}>
                    <h3 className="mb-1 border-b border-neutral-400 pb-0.5 text-[12pt] font-bold">{p.titel}</h3>
                    <HafteFacit hafte={p} />
                    {skriv && (
                      <p className="text-[9.5pt]">
                        <strong>Skrivdelen – bedöm:</strong> {skriv.kriterier.join(" · ")}
                      </p>
                    )}
                  </div>
                );
              })}
              {slutprov && (
                <div>
                  <h3 className="mb-1 border-b border-neutral-400 pb-0.5 text-[12pt] font-bold">{slutprov.titel}</h3>
                  <HafteFacit hafte={slutprov} />
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
