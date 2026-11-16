import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, PenLine } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { cn } from "@/lib/utils";
import { AMNEN, AMNEN_PER_STADIUM, type GrammatikAmne } from "@/lib/grammatik/amnen";
import { arskursFor } from "@/lib/grammatik/arsplan";
import { STARTPROV_FOR, kapitelprovFor, repetitionForDel } from "@/lib/grammatik/bok";
import { TYP_ETIKETT, hafteForOvning, lektionerFor, reglerFor } from "@/lib/grammatik/lektioner";
import { SKRIV_SJALV } from "@/lib/grammatik/skriv-sjalv";
import { skrivdelFor } from "@/lib/grammatik/prov-skrivdel";
import { getExercisesForTopic } from "@/lib/data/grammatik-ovningar";
import { hamtaHafte } from "@/lib/haften";
import type { Hafte } from "@/lib/haften/typer";
import { KAPITEL } from "@/components/grammatik/kapitel";
import { GrammatikInfografik } from "@/components/infografik/grammatik";
import { OvningarFacit, OvningarPapper } from "@/components/grammatik/utskrift";
import { HafteFacit, HafteUppgifter } from "@/components/haften/hafte-papper";
import { SkrivUtKnapp } from "@/components/grammatik/skriv-ut-knapp";

interface Props {
  params: Promise<{ arskurs: string; ak: string; nr: string }>;
  searchParams: Promise<{ facit?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, ak, nr } = await params;
  const l = lektionerFor(arskurs as AgeGroup, ak).find((x) => String(x.nr) === nr);
  return l ? { title: `Lektion ${l.nr}: ${l.titel} – utskrift` } : {};
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

export default async function LektionsutskriftPage({ params, searchParams }: Props) {
  const { arskurs, ak, nr } = await params;
  const facit = (await searchParams).facit === "1";
  const stadie = arskurs as AgeGroup;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const ar = arskursFor(stadie, ak);
  const lektion = lektionerFor(stadie, ak).find((l) => String(l.nr) === nr);
  if (!group || !ar || !lektion) notFound();
  const kapNr = (a: GrammatikAmne) => AMNEN_PER_STADIUM[stadie].indexOf(a) + 1;
  const a = lektion.amne;

  // Vad lektionen skriver ut
  let hafte: Hafte | undefined;
  let innehall: React.ReactNode = null;
  switch (lektion.typ) {
    case "startprov":
      hafte = hamtaHafte(STARTPROV_FOR[stadie]);
      break;
    case "slutprov":
      hafte = hamtaHafte(`prov-${stadie}`);
      break;
    case "repetition":
    case "slutrepetition": {
      const kap = lektion.repetera ?? [];
      hafte = repetitionForDel(stadie, { nr: lektion.nr, titel: TYP_ETIKETT[lektion.typ], kapitel: kap.map((k) => ({ amne: k, nr: kapNr(k) })) });
      if (hafte) hafte = { ...hafte, titel: lektion.titel, underrubrik: "Blandade uppgifter från kapitlen" };
      if (!facit)
        innehall = (
          <div className="mb-6 grid gap-3 sm:grid-cols-2 print:grid-cols-2">
            {kap.map((k) => (
              <div key={k} className="break-inside-avoid rounded-lg border border-neutral-300 p-3 text-[10pt]">
                <p className="font-bold">
                  Kapitel {kapNr(k)}: {AMNEN[k].titel}
                </p>
                <ul className="list-disc space-y-0.5 pl-4">
                  {reglerFor(k, stadie)
                    .slice(0, 3)
                    .map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        );
      break;
    }
    case "genomgang": {
      if (lektion.del === 1) {
        const Genomgang = KAPITEL[a!].content;
        innehall = facit ? (
          <p>Genomgången har inget facit. Facit till kapitlets övningar finns under övningslektionen.</p>
        ) : (
          <>
            <div className="infografik-bok">
              <GrammatikInfografik topic={a!} stadie={stadie} />
            </div>
            <Genomgang stadie={stadie} />
          </>
        );
      } else {
        const ovningar = getExercisesForTopic(a!, stadie);
        innehall = facit ? <OvningarFacit ovningar={ovningar} /> : <OvningarPapper ovningar={ovningar} rubrik="h3" />;
      }
      break;
    }
    case "ovning": {
      hafte = hafteForOvning(a!, stadie, lektion.del);
      if (!hafte) {
        const ovningar = getExercisesForTopic(a!, stadie);
        innehall = facit ? <OvningarFacit ovningar={ovningar} /> : <OvningarPapper ovningar={ovningar} rubrik="h3" />;
      }
      break;
    }
    case "text": {
      const uppgift = SKRIV_SJALV[a!][stadie];
      const kriterier = skrivdelFor(a!, stadie)?.kriterier ?? reglerFor(a!, stadie).slice(0, 3);
      innehall = (
        <div className="rounded-lg border-2 border-neutral-900 p-5">
          <p className="mb-1 flex items-center gap-2 font-bold">
            <PenLine className="h-4 w-4" /> Använd i din text
          </p>
          <p className="mb-4">{uppgift ?? "Skriv en kort text där du använder det du har lärt dig i kapitlet."}</p>
          <Linjer antal={16} />
          <p className="mt-5 font-semibold">Kontrollera din text</p>
          <ul className="mt-1 space-y-1">
            {kriterier.map((k) => (
              <li key={k}>☐ {k}</li>
            ))}
          </ul>
        </div>
      );
      break;
    }
    case "kapitelprov": {
      hafte = kapitelprovFor(a!, stadie);
      const skriv = skrivdelFor(a!, stadie);
      if (skriv)
        innehall = facit ? (
          <p className="mt-4 text-[10pt]">
            <strong>Skrivdelen – bedöm:</strong> {skriv.kriterier.join(" · ")}
          </p>
        ) : (
          <div className="mt-6 break-inside-avoid rounded-lg border-2 border-neutral-900 p-4">
            <p className="font-bold">Skrivdel – bedöms separat</p>
            <p className="mt-1">{skriv.uppgift}</p>
            <Linjer antal={8} />
          </div>
        );
      break;
    }
  }

  const bas = `/${stadie}/grammatik/planering/${ak}`;
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 print:max-w-none print:px-0 print:py-0">
      <div className="mb-8 space-y-3 rounded-xl border border-neutral-200 p-5 print:hidden dark:border-neutral-800">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
          <Link href={bas} className="hover:text-neutral-900 dark:hover:text-white">
            Lektionsplan {ar.titel.toLowerCase()}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-neutral-900 dark:text-white">
            Lektion {lektion.nr}: {lektion.titel}
          </span>
        </nav>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`${bas}/utskrift/${lektion.nr}`}
            className={cn("rounded-full px-3 py-1.5 text-sm font-medium", !facit ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "bg-neutral-100 dark:bg-neutral-800")}
          >
            Elevens material
          </Link>
          <Link
            href={`${bas}/utskrift/${lektion.nr}?facit=1`}
            className={cn("rounded-full px-3 py-1.5 text-sm font-medium", facit ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "bg-neutral-100 dark:bg-neutral-800")}
          >
            Facit
          </Link>
          <span className="flex-1" />
          <Link href={`${bas}/presentation?lektion=${lektion.nr}`} className="text-sm font-medium text-sky-700 hover:underline dark:text-sky-400">
            Lektionens bilder
          </Link>
          <SkrivUtKnapp text="Skriv ut" />
        </div>
      </div>

      <div className="bok text-[11pt] leading-relaxed">
        <div className="mb-5 flex items-end justify-between gap-6 border-b-2 border-neutral-900 pb-3 dark:border-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {group.label} · {ar.titel} · Lektion {lektion.nr} · {TYP_ETIKETT[lektion.typ]}
              {facit ? " · Facit" : ""}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{lektion.titel}</h1>
            {a && <p className="text-neutral-600 dark:text-neutral-400">Grammatikboken, kapitel {kapNr(a)}</p>}
          </div>
          {!facit && !hafte && <p className="shrink-0 text-[10pt]">Namn: ______________________</p>}
        </div>

        {lektion.typ !== "kapitelprov" && innehall}
        {hafte && (facit ? <HafteFacit hafte={hafte} /> : <HafteUppgifter hafte={hafte} />)}
        {lektion.typ === "kapitelprov" && innehall}
      </div>
    </div>
  );
}
