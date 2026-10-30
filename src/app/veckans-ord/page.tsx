import Link from "next/link";
import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { ARSKURSORD } from "@/lib/veckansord";
import { arskursNamn, arskursSlug } from "@/lib/veckansord/typer";

export const metadata: Metadata = {
  title: "Veckans ord",
  description: "Veckans ord för varje skolvecka, årskurs 1–9 och gymnasiet. Veckoblad, förhör med facit och export.",
};

const STADIER = [
  { namn: "Lågstadiet", arskurser: [1, 2, 3] },
  { namn: "Mellanstadiet", arskurser: [4, 5, 6] },
  { namn: "Högstadiet", arskurser: [7, 8, 9] },
  { namn: "Gymnasiet", arskurser: [10, 11, 12] },
];

export default function VeckansOrdPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <CalendarDays className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Veckans ord</h1>
        <p className="mt-2 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Nya ord varje skolvecka hela läsåret – för varje årskurs. Varje vecka har ett veckoblad, övningar, ett förhör med facit
          och en mall för hur eleverna arbetar med orden.
        </p>
      </div>
      {STADIER.map((s) => (
        <section key={s.namn} className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">{s.namn}</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {s.arskurser.map((ak) => {
              const a = ARSKURSORD.find((x) => x.arskurs === ak);
              const antal = a?.veckor.reduce((n, v) => n + v.ord.length, 0) ?? 0;
              return (
                <Link
                  key={ak}
                  href={`/veckans-ord/${arskursSlug(ak)}`}
                  className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
                >
                  <p className="font-semibold text-neutral-900 dark:text-white">{arskursNamn(ak)}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {a?.veckor.length ?? 0} veckor · {antal} ord
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
