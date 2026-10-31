import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Glasses } from "lucide-react";
import { FORMAGESIDOR } from "@/lib/lasprov/formagesidor";
import { LASFORMAGOR } from "@/lib/lasprov/typer";

export const metadata: Metadata = {
  title: "Läsförmågor",
  description: "De fyra läsförmågorna – hitta, dra slutsatser, tolka och granska – och hur du tränar var och en.",
};

export default function LasformagorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Glasses className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Läsförmågor</h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          När du läser använder du fyra olika förmågor – från att hitta det som står i texten till att granska hur texten är skriven. Frågorna i
          läsförståelseprov tränar en förmåga i taget. Här lär du dig känna igen dem och hur du svarar.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {FORMAGESIDOR.map((f, i) => (
          <Link
            key={f.slug}
            href={`/lasformagor/${f.slug}`}
            className="group rounded-xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Förmåga {i + 1} · {f.formaga}
            </p>
            <p className="text-lg font-semibold text-neutral-900 group-hover:underline dark:text-white">{LASFORMAGOR[f.formaga].namn}</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{f.ingress}</p>
            <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-sky-700 dark:text-sky-400">
              Träna <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
