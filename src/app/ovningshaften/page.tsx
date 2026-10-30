import Link from "next/link";
import type { Metadata } from "next";
import { NotebookPen, Printer } from "lucide-react";
import { HAFTEN, OMRADEN } from "@/lib/haften";

export const metadata: Metadata = {
  title: "Övningshäften",
  description: "Övningshäften i svenska med hundratals uppgifter – stavning, skiljetecken, grammatik och mer. Rättas direkt eller skrivs ut med facit.",
};

export default function OvningshaftenPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <NotebookPen className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Övningshäften</h1>
        <p className="mt-2 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Varje häfte har minst 100 uppgifter. Gör dem här – de rättas direkt och inget sparas – eller skriv ut häftet med facit.
          Steg 1 är lättast.
        </p>
      </div>

      {OMRADEN.map((omrade) => {
        const haften = HAFTEN.filter((h) => h.omrade === omrade).sort((a, b) => a.steg - b.steg);
        if (!haften.length) return null;
        return (
          <section key={omrade} className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">{omrade}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {haften.map((h) => (
                <Link
                  key={h.id}
                  href={`/ovningshaften/${h.id}`}
                  className="group rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
                >
                  <div className="mb-1 flex items-center justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    <span>Steg {h.steg}</span>
                    <span className="inline-flex items-center gap-1">
                      <Printer className="h-3.5 w-3.5" /> {h.antalUppgifter} uppgifter
                    </span>
                  </div>
                  <p className="font-semibold text-neutral-900 group-hover:underline dark:text-white">{h.titel}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{h.underrubrik}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
