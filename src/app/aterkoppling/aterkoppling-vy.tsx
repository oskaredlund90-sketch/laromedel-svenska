"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Dumbbell,
  Lock,
  NotebookPen,
  MessageSquareText,
  Printer,
  Replace,
  Sprout,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { packaUpp } from "@/lib/aterkoppling/kodning";
import type { HaftesKatalog } from "@/lib/haften";
import { allaSynonymer, type SynonymForslag } from "@/lib/aterkoppling/synonymer";
import {
  delaISegment,
  placeraKommentarer,
  type Aterkoppling,
  type Punkt,
} from "@/lib/aterkoppling/typer";
import {
  OMRADE_ETIKETT,
  hamtaFeltyp,
  ovningsHref,
  stadieForArskurs,
  type Omrade,
} from "@/lib/aterkoppling/feltyper";
import {
  lasbarhetsprofil,
  tolkaProfil,
  type LasbarhetsProfil,
  type Spann,
} from "@/lib/aterkoppling/lasbarhet";

type Status = { lage: "laddar" } | { lage: "fel"; meddelande: string } | { lage: "klar"; data: Aterkoppling };

type Farg = "bra" | Omrade;

const OMRADE_FARG: Record<Farg, { mark: string; prick: string; text: string }> = {
  bra: {
    mark: "bg-emerald-100 decoration-emerald-500 dark:bg-emerald-900/40",
    prick: "bg-emerald-500",
    text: "text-emerald-700 dark:text-emerald-300",
  },
  sprak: {
    mark: "bg-amber-100 decoration-amber-500 dark:bg-amber-900/40",
    prick: "bg-amber-500",
    text: "text-amber-700 dark:text-amber-300",
  },
  struktur: {
    mark: "bg-sky-100 decoration-sky-500 dark:bg-sky-900/40",
    prick: "bg-sky-500",
    text: "text-sky-700 dark:text-sky-300",
  },
  innehall: {
    mark: "bg-violet-100 decoration-violet-500 dark:bg-violet-900/40",
    prick: "bg-violet-500",
    text: "text-violet-700 dark:text-violet-300",
  },
};

/** Kommentarer utan feltyp är beröm och visas gröna. */
function fargFor(typ: string | undefined): Farg {
  if (!typ) return "bra";
  return hamtaFeltyp(typ)?.omrade ?? "sprak";
}

function arskursEtikett(ak: number) {
  return ak >= 10 ? `Gymnasiet år ${ak - 9}` : `Årskurs ${ak}`;
}

export function AterkopplingVy({ katalog }: { katalog: HaftesKatalog }) {
  const [status, setStatus] = useState<Status>({ lage: "laddar" });

  useEffect(() => {
    const las = () => {
      const hash = window.location.hash;
      if (!hash || hash.length < 4) {
        setStatus({ lage: "fel", meddelande: "Länken saknar återkoppling. Kontrollera att du har kopierat hela länken." });
        return;
      }
      packaUpp(hash)
        .then((data) => setStatus({ lage: "klar", data }))
        .catch(() =>
          setStatus({
            lage: "fel",
            meddelande: "Länken kunde inte läsas. Den kan ha klippts av – be din lärare skicka den igen.",
          }),
        );
    };
    las();
    window.addEventListener("hashchange", las);
    return () => window.removeEventListener("hashchange", las);
  }, []);

  if (status.lage === "laddar") {
    return <div className="mx-auto max-w-5xl px-4 py-16 text-neutral-500 sm:px-6">Laddar återkoppling …</div>;
  }
  if (status.lage === "fel") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <h1 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-white">Återkoppling</h1>
        <p className="text-neutral-600 dark:text-neutral-400">{status.meddelande}</p>
      </div>
    );
  }
  return <Visning data={status.data} katalog={katalog} />;
}

function Visning({ data, katalog }: { data: Aterkoppling; katalog: HaftesKatalog }) {
  const [aktiv, setAktiv] = useState<number | null>(null);
  const stadie = stadieForArskurs(data.arskurs);
  const { placerade } = useMemo(() => placeraKommentarer(data.text, data.kommentarer), [data]);
  const segment = useMemo(() => delaISegment(data.text, placerade), [data.text, placerade]);
  const nummer = useMemo(() => new Map(placerade.map((k, i) => [k.index, i + 1])), [placerade]);
  const profil = useMemo(() => lasbarhetsprofil(data.text, data.arskurs), [data]);
  const synonymer = useMemo(() => allaSynonymer(data.text, data.arskurs, data.synonymer), [data]);

  const valj = (index: number) => {
    setAktiv(index);
    document.getElementById(`kommentar-${index}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 print:max-w-none print:py-0">
      {/* Rubrik */}
      <header className="mb-8">
        <p className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {arskursEtikett(data.arskurs)}
          {data.uppgift ? ` · ${data.uppgift}` : ""}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {data.titel || "Återkoppling på din text"}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 print:hidden">
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Printer className="h-4 w-4" /> Skriv ut
          </Button>
          <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
            <Lock className="h-3.5 w-3.5" /> Återkopplingen finns bara i din länk – inget sparas på sajten.
          </span>
        </div>
      </header>

      {data.helhet && (
        <Card className="mb-8 border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40">
          <CardContent className="p-6">
            <p className="whitespace-pre-line text-neutral-800 dark:text-neutral-200">{data.helhet}</p>
            {data.larare && <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">/ {data.larare}</p>}
          </CardContent>
        </Card>
      )}

      {/* Bra + Nästa steg */}
      <div className="mb-10 grid gap-6 md:grid-cols-2">
        <PunktLista
          titel="Det här fungerar bra"
          ikon={<CheckCircle2 className="h-5 w-5 text-emerald-600" />}
          punkter={data.bra}
        />
        <NastaSteg punkter={data.nasta} stadie={stadie} katalog={katalog} />
      </div>

      {/* Text med kommentarer */}
      <section className="mb-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
            <MessageSquareText className="h-5 w-5" /> Din text med kommentarer
          </h2>
          <div className="flex gap-4 text-xs text-neutral-600 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1.5">
              <span className={cn("h-2.5 w-2.5 rounded-full", OMRADE_FARG.bra.prick)} /> Bra!
            </span>
            {(Object.keys(OMRADE_ETIKETT) as Omrade[]).map((o) => (
              <span key={o} className="inline-flex items-center gap-1.5">
                <span className={cn("h-2.5 w-2.5 rounded-full", OMRADE_FARG[o].prick)} /> {OMRADE_ETIKETT[o]}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <Card>
            <CardContent className="p-6 sm:p-8">
              <p className="whitespace-pre-wrap font-serif text-[17px] leading-8 text-neutral-900 dark:text-neutral-100">
                {segment.map((s, i) => {
                  if (!s.kommentar) return <span key={i}>{s.text}</span>;
                  const k = s.kommentar;
                  const farg = OMRADE_FARG[fargFor(k.typ)];
                  return (
                    // span i stället för button så att markeringen kan radbrytas med texten
                    <span
                      key={i}
                      role="button"
                      tabIndex={0}
                      onClick={() => valj(k.index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          valj(k.index);
                        }
                      }}
                      className={cn(
                        "cursor-pointer rounded-sm px-0.5 underline decoration-2 underline-offset-4 [box-decoration-break:clone] focus-visible:outline-2",
                        farg.mark,
                        aktiv === k.index && "outline-2 outline-neutral-900 dark:outline-white",
                      )}
                      aria-label={`Kommentar ${nummer.get(k.index)}: ${k.kommentar}`}
                    >
                      {s.text}
                      <sup className="ml-0.5 font-sans text-[10px] font-bold">{nummer.get(k.index)}</sup>
                    </span>
                  );
                })}
              </p>
            </CardContent>
          </Card>

          <ol className="space-y-3 lg:max-h-[75vh] lg:overflow-y-auto lg:pr-1 print:max-h-none">
            {placerade.length === 0 && (
              <li className="text-sm text-neutral-500">Inga kommentarer i texten.</li>
            )}
            {placerade.map((k, i) => {
              const typ = hamtaFeltyp(k.typ);
              const farg = OMRADE_FARG[fargFor(k.typ)];
              return (
                <li key={k.index} id={`kommentar-${k.index}`}>
                  <button
                    type="button"
                    onClick={() => setAktiv(k.index)}
                    className={cn(
                      "w-full rounded-lg border bg-white p-4 text-left text-sm transition-colors dark:bg-neutral-900",
                      aktiv === k.index
                        ? "border-neutral-900 dark:border-white"
                        : "border-neutral-200 hover:border-neutral-400 dark:border-neutral-800",
                    )}
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <span className={cn("flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white", farg.prick)}>
                        {i + 1}
                      </span>
                      <span className={cn("text-xs font-medium", farg.text)}>{typ ? typ.etikett : "Bra!"}</span>
                    </div>
                    <p className="text-neutral-800 dark:text-neutral-200">{k.kommentar}</p>
                    {k.forslag && (
                      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                        <span className="line-through decoration-red-400">{k.citat}</span>{" "}
                        <ArrowRight className="inline h-3.5 w-3.5" />{" "}
                        <span className="font-medium text-emerald-700 dark:text-emerald-400">{k.forslag}</span>
                      </p>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {synonymer.length > 0 && <Synonymer lista={synonymer} />}

      <Profil profil={profil} />
    </div>
  );
}

function PunktLista({ titel, ikon, punkter }: { titel: string; ikon: React.ReactNode; punkter: Punkt[] }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {ikon} {titel}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {punkter.map((p, i) => (
          <div key={i}>
            <p className={cn("text-xs font-semibold uppercase tracking-wide", OMRADE_FARG[p.omrade].text)}>
              {OMRADE_ETIKETT[p.omrade]}
            </p>
            <p className="text-neutral-800 dark:text-neutral-200">{p.text}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function NastaSteg({
  punkter,
  stadie,
  katalog,
}: {
  punkter: Punkt[];
  stadie: ReturnType<typeof stadieForArskurs>;
  katalog: HaftesKatalog;
}) {
  return (
    <Card className="border-neutral-300 dark:border-neutral-700">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sprout className="h-5 w-5 text-emerald-600" /> Nästa steg
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {punkter.map((p, i) => {
          const typ = hamtaFeltyp(p.typ);
          return (
            <div key={i}>
              <p className={cn("text-xs font-semibold uppercase tracking-wide", OMRADE_FARG[p.omrade].text)}>
                {OMRADE_ETIKETT[p.omrade]}
              </p>
              <p className="text-neutral-800 dark:text-neutral-200">{p.text}</p>
              {typ && (
                <>
                  <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                    <BookOpen className="mr-1 inline h-3.5 w-3.5" />
                    {typ.elevtips}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 print:hidden">
                    {typ.ovningar.map((o) => (
                      <Link
                        key={o.sokvag}
                        href={ovningsHref(o, stadie)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                      >
                        <Dumbbell className="h-3.5 w-3.5" /> {o.titel}
                      </Link>
                    ))}
                    {(katalog[typ.id] ?? []).map((h) => (
                      <Link
                        key={h.id}
                        href={`/ovningshaften/${h.id}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200"
                      >
                        <NotebookPen className="h-3.5 w-3.5" /> Häfte: {h.titel}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

function Synonymer({ lista }: { lista: SynonymForslag[] }) {
  return (
    <section className="mb-10 break-inside-avoid">
      <h2 className="mb-1 flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
        <Replace className="h-5 w-5" /> Variera dina ord
      </h2>
      <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
        De här orden använder du ofta. Pröva att byta ut några av dem mot ett annat ord.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {lista.map((s) => (
          <Card key={s.ord}>
            <CardContent className="space-y-2 p-5">
              <p className="font-semibold text-neutral-900 dark:text-white">
                {s.ord}
                {s.antal > 0 && <span className="ml-2 text-sm font-normal text-neutral-500">{s.antal} gånger</span>}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.forslag.map((f) => (
                  <span key={f} className="rounded-full bg-sky-50 px-2.5 py-0.5 text-sm text-sky-900 dark:bg-sky-950/50 dark:text-sky-200">
                    {f}
                  </span>
                ))}
              </div>
              {s.tips && <p className="text-sm text-neutral-600 dark:text-neutral-400">{s.tips}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Profil({ profil }: { profil: LasbarhetsProfil }) {
  const tolkning = tolkaProfil(profil);
  const r = profil.referens;
  return (
    <section className="break-inside-avoid">
      <h2 className="mb-1 text-xl font-semibold text-neutral-900 dark:text-white">Din textprofil</h2>
      <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
        {profil.antalOrd} ord · {profil.antalMeningar} meningar · LIX {profil.lix}. Det gröna fältet visar vad som är
        vanligt i din årskurs.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="space-y-5 p-6">
            <p className="font-medium text-neutral-900 dark:text-white">Ordförråd</p>
            <Matare etikett="Långa ord" varde={profil.langaOrdProcent} enhet="%" spann={r.langaOrd} max={45} />
            {profil.ovix !== null && <Matare etikett="Ordvariation (OVIX)" varde={profil.ovix} spann={r.ovix} max={100} />}
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{tolkning.ordforrad}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-5 p-6">
            <p className="font-medium text-neutral-900 dark:text-white">Meningar</p>
            <Matare etikett="Ord per mening" varde={profil.meningslangd} spann={r.meningslangd} max={35} />
            <Matare etikett="Längsta meningen" varde={profil.langstaMening} enhet=" ord" spann={{ min: 0, max: 30 }} max={60} />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{tolkning.meningar}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Matare({ etikett, varde, enhet = "", spann, max }: { etikett: string; varde: number; enhet?: string; spann: Spann; max: number }) {
  const pct = (v: number) => `${Math.min(100, Math.max(0, (v / max) * 100))}%`;
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="text-neutral-600 dark:text-neutral-400">{etikett}</span>
        <span className="font-semibold tabular-nums text-neutral-900 dark:text-white">
          {varde}
          {enhet}
        </span>
      </div>
      <div className="relative h-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
        <div
          className="absolute inset-y-0 rounded-full bg-emerald-200 dark:bg-emerald-900"
          style={{ left: pct(spann.min), width: `calc(${pct(spann.max)} - ${pct(spann.min)})` }}
        />
        <div
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-neutral-900 shadow dark:border-neutral-900 dark:bg-white"
          style={{ left: pct(varde) }}
        />
      </div>
    </div>
  );
}
