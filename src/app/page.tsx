import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  ClipboardCheck,
  GraduationCap,
  Lightbulb,
  MonitorPlay,
  NotebookPen,
  Search,
  Sparkles,
  Telescope,
  TrendingUp,
} from "lucide-react";
import { VeckansOrd } from "@/components/veckans-ord";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { getWordsWithFallback } from "@/lib/supabase/words";
import { ARSPLAN } from "@/lib/grammatik/arsplan";
import { cn } from "@/lib/utils";

const STADIUM: Record<
  AgeGroup,
  { kort: string; ingress: string; farg: { band: string; ikon: string; ring: string; chip: string }; lankar: [string, string][] }
> = {
  lagstadiet: {
    kort: "Åk 1–3",
    ingress: "Läsa, skriva och leka med språket – från bokstav till mening.",
    farg: { band: "bg-sky-500", ikon: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300", ring: "hover:ring-sky-300 dark:hover:ring-sky-700", chip: "hover:bg-sky-50 dark:hover:bg-sky-950/40" },
    lankar: [
      ["Grammatik", "grammatik"],
      ["Skrivverkstad", "skrivverkstad"],
      ["Lästräning", "lastraning"],
      ["Ordspråk och uttryck", "ordsprak"],
    ],
  },
  mellanstadiet: {
    kort: "Åk 4–6",
    ingress: "Grammatik, läsförståelse och texter med tydlig struktur.",
    farg: { band: "bg-emerald-500", ikon: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", ring: "hover:ring-emerald-300 dark:hover:ring-emerald-700", chip: "hover:bg-emerald-50 dark:hover:bg-emerald-950/40" },
    lankar: [
      ["Grammatik", "grammatik"],
      ["Skrivverkstad", "skrivverkstad"],
      ["Läsförståelse", "lasforstaelse"],
      ["Nationella prov", "nationella-prov"],
    ],
  },
  hogstadiet: {
    kort: "Åk 7–9",
    ingress: "Argumentera, analysera och skriva för olika mottagare.",
    farg: { band: "bg-violet-500", ikon: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", ring: "hover:ring-violet-300 dark:hover:ring-violet-700", chip: "hover:bg-violet-50 dark:hover:bg-violet-950/40" },
    lankar: [
      ["Grammatik", "grammatik"],
      ["Skrivverkstad", "skrivverkstad"],
      ["Textbank", "textbank"],
      ["Nationella prov", "nationella-prov"],
    ],
  },
  gymnasiet: {
    kort: "Svenska 1–3",
    ingress: "Litteratur, retorik, språkhistoria och vetenskapligt skrivande.",
    farg: { band: "bg-amber-500", ikon: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300", ring: "hover:ring-amber-300 dark:hover:ring-amber-700", chip: "hover:bg-amber-50 dark:hover:bg-amber-950/40" },
    lankar: [
      ["Grammatik", "grammatik"],
      ["Litteraturhistoria", "litteraturhistoria"],
      ["Retorik", "retorik"],
      ["Språkhistoria", "sprakhistoria"],
    ],
  },
};

const IKON: Record<AgeGroup, typeof BookOpen> = {
  lagstadiet: BookOpen,
  mellanstadiet: Telescope,
  hogstadiet: GraduationCap,
  gymnasiet: Sparkles,
};

const VERKTYG = [
  { href: "/ovningshaften", titel: "Övningshäften", text: "Hundratals uppgifter som rättas direkt – eller skrivs ut med facit.", Ikon: NotebookPen },
  { href: "/veckans-ord", titel: "Veckans ord", text: "Nya ord varje vecka för varje årskurs, med förklaring och exempel.", Ikon: BookOpenCheck },
  { href: "/ordforrad", titel: "Testa ditt ordförråd", text: "Ett snabbt test som visar hur stort ditt ordförråd är.", Ikon: TrendingUp },
  { href: "/lasformagor", titel: "Läsförmågor", text: "Träna att hitta, tolka och granska information i texter.", Ikon: Search },
  { href: "/bli-battre", titel: "Bli bättre på svenska", text: "Konkreta tips för att läsa, skriva och tala bättre.", Ikon: Lightbulb },
  { href: "/varfor-svenska", titel: "Varför svenska?", text: "Därför lönar det sig att bli bättre på språket.", Ikon: Sparkles },
];

export default async function HomePage() {
  const wordsByGroup = await Promise.all(
    (["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"] as AgeGroup[]).map(async (ag) => ({ ageGroup: ag, words: await getWordsWithFallback(ag) })),
  );

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-b from-sky-50 to-white dark:border-neutral-800 dark:from-sky-950/30 dark:to-neutral-950">
        <div className="hero-dot-pattern absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-sm font-medium text-sky-800 animate-fade-in-up dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Öppet och gratis – för elever och lärare
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-neutral-900 animate-fade-in-up delay-100 dark:text-white sm:text-5xl lg:text-6xl">
              Svenska för <span className="text-sky-700 dark:text-sky-400">hela skolan</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600 animate-fade-in-up delay-200 dark:text-neutral-400">
              Grammatikbok, övningshäften, skrivverkstad och läsning – från årskurs 1 till gymnasiet. Övningarna rättas direkt och allt går att
              skriva ut.
            </p>

            <p className="mt-8 text-sm font-semibold text-neutral-900 animate-fade-in-up delay-300 dark:text-white">Välj stadium</p>
            <div className="mt-3 grid grid-cols-2 gap-2 animate-fade-in-up delay-300 sm:grid-cols-4">
              {AGE_GROUPS.map((g) => {
                const s = STADIUM[g.slug];
                return (
                  <Link
                    key={g.slug}
                    href={`/${g.slug}`}
                    className={cn(
                      "group relative overflow-hidden rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900",
                      s.farg.chip,
                    )}
                  >
                    <span className={cn("absolute inset-x-0 top-0 h-1", s.farg.band)} />
                    <span className="block font-semibold text-neutral-900 dark:text-white">{g.label}</span>
                    <span className="text-sm text-neutral-500">{s.kort}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm animate-fade-in-up delay-400">
              <Link href="/bli-battre" className="font-medium text-sky-700 hover:underline dark:text-sky-400">
                Hur blir jag bättre på svenska? →
              </Link>
              <Link href="/ordforrad" className="font-medium text-sky-700 hover:underline dark:text-sky-400">
                Testa ditt ordförråd →
              </Link>
            </div>
          </div>

          {/* Illustration: bok, häfte och veckans ord */}
          <div className="relative hidden h-[400px] lg:block" aria-hidden>
            <div className="absolute right-8 top-2 w-72 rotate-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Kapitel 6 · Meningsbyggnad</p>
              <p className="mt-2 text-xl font-bold text-neutral-900 dark:text-white">BIFF</p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Bisats – Inte Före Finit verb</p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="rounded-lg bg-neutral-50 px-3 py-2 dark:bg-neutral-800">Jag gillar <b>inte</b> fisk.</p>
                <p className="rounded-lg bg-violet-50 px-3 py-2 dark:bg-violet-950/40">… eftersom jag <b>inte</b> gillar fisk.</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-0 w-64 -rotate-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">Övningshäfte</p>
              <p className="mt-2 font-semibold text-neutral-900 dark:text-white">Glass eller glas?</p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="flex items-center justify-between rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 dark:border-emerald-800 dark:bg-emerald-950/40">
                  Vi äter glass <span className="font-bold text-emerald-700">Rätt!</span>
                </p>
                <p className="rounded-lg border border-neutral-200 px-3 py-1.5 dark:border-neutral-700">Hon hoppar hopprep</p>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div className="h-full w-2/3 rounded-full bg-emerald-500" />
              </div>
            </div>
            <div className="absolute bottom-24 right-0 w-48 rotate-6 rounded-2xl bg-amber-400 p-4 text-amber-950 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">Veckans ord</p>
              <p className="mt-1 text-2xl font-bold">nyfiken</p>
              <p className="text-sm">som vill veta mer</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ---------- Stadier ---------- */}
        <section className="py-16">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Allt för ditt stadium</h2>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">Gå direkt till det du behöver.</p>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AGE_GROUPS.map((g, i) => {
              const s = STADIUM[g.slug];
              const Ikon = IKON[g.slug];
              return (
                <AnimateOnScroll key={g.slug} delay={i * 80}>
                  <div
                    className={cn(
                      "flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white ring-2 ring-transparent transition-shadow hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900",
                      s.farg.ring,
                    )}
                  >
                    <div className={cn("h-1.5", s.farg.band)} />
                    <div className="flex flex-1 flex-col p-5">
                      <div className={cn("mb-3 flex h-11 w-11 items-center justify-center rounded-xl", s.farg.ikon)}>
                        <Ikon className="h-5 w-5" />
                      </div>
                      <Link href={`/${g.slug}`} className="text-lg font-bold text-neutral-900 hover:underline dark:text-white">
                        {g.label}
                      </Link>
                      <p className="text-sm text-neutral-500">{s.kort}</p>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{s.ingress}</p>
                      <ul className="mt-4 space-y-1 border-t border-neutral-100 pt-3 text-sm dark:border-neutral-800">
                        {s.lankar.map(([titel, sokvag]) => (
                          <li key={sokvag}>
                            <Link
                              href={`/${g.slug}/${sokvag}`}
                              className="flex items-center justify-between rounded-md px-2 py-1.5 text-neutral-700 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-800"
                            >
                              {titel} <ArrowRight className="h-3.5 w-3.5 opacity-40" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link href={`/${g.slug}`} className="mt-auto pt-4 text-sm font-semibold text-neutral-900 dark:text-white">
                        Allt på {g.label.toLowerCase()} →
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>

        {/* ---------- Verktyg ---------- */}
        <section className="border-t border-neutral-200 py-16 dark:border-neutral-800">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Öva och utvecklas</h2>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">För alla stadier.</p>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VERKTYG.map(({ href, titel, text, Ikon }, i) => (
              <AnimateOnScroll key={href} delay={i * 60}>
                <Link
                  href={href}
                  className="group flex h-full gap-4 rounded-2xl border border-neutral-200 p-5 transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:hover:border-neutral-700"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-sky-100 group-hover:text-sky-700 dark:bg-neutral-800 dark:text-neutral-300">
                    <Ikon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">{titel}</p>
                    <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">{text}</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* ---------- För lärare ---------- */}
        <section className="py-4">
          <AnimateOnScroll>
            <div className="overflow-hidden rounded-3xl bg-neutral-900 px-6 py-10 text-white sm:px-10 dark:bg-neutral-800">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">För lärare</p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight">Färdiga lektioner och arbetsområden</h2>
                  <p className="mt-3 text-neutral-300">
                    En lektionsplan per årskurs med presentation, sidor i boken och material att skriva ut – lektion för lektion. Börja stadiet med
                    ett startprov och se vad gruppen behöver.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { Ikon: MonitorPlay, titel: "Lektionsplaner", text: "Presentation och utskrift för varje lektion" },
                    { Ikon: ClipboardCheck, titel: "Startprov", text: "50 minuter i början av varje stadium" },
                    { Ikon: BookOpen, titel: "Arbetsområden", text: "Språkhistoria, dialekter, källkritik med mera – med förtest och prov" },
                  ].map(({ Ikon, titel, text }) => (
                    <div key={titel} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <Ikon className="h-5 w-5 text-amber-400" />
                      <p className="mt-2 font-semibold">{titel}</p>
                      <p className="mt-0.5 text-sm text-neutral-400">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {AGE_GROUPS.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/${g.slug}/grammatik/planering/${ARSPLAN[g.slug][0].ak}`}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
                  >
                    Lektionsplaner – {g.label.toLowerCase()}
                  </Link>
                ))}
                {(["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"] as const).map((s) => (
                  <Link key={s} href={`/${s}/arbetsomraden`} className="rounded-full bg-amber-400/90 px-4 py-2 text-sm font-medium text-amber-950 hover:bg-amber-300">
                    Arbetsområden – {AGE_GROUPS.find((g) => g.slug === s)?.label.toLowerCase()}
                  </Link>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        {/* ---------- Veckans ord ---------- */}
        <section className="py-16">
          <AnimateOnScroll>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Veckans ord</h2>
                <p className="mt-1 text-neutral-600 dark:text-neutral-400">Ett nytt ord för varje stadium.</p>
              </div>
              <Link href="/veckans-ord" className="shrink-0 text-sm font-semibold text-sky-700 hover:underline dark:text-sky-400">
                Alla veckans ord →
              </Link>
            </div>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {wordsByGroup.map(({ ageGroup, words }, i) => (
              <AnimateOnScroll key={ageGroup} delay={i * 80}>
                <h3 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">{AGE_GROUPS.find((g) => g.slug === ageGroup)?.label}</h3>
                <VeckansOrd words={words} />
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
