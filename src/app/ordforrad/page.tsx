import type { Metadata } from "next";
import { Brain } from "lucide-react";
import { ARSKURSORD } from "@/lib/veckansord";
import type { Testord } from "@/lib/ordforrad/test";
import { Ordforradstest } from "./ordforradstest";

export const metadata: Metadata = {
  title: "Ordförrådstest",
  description: "Hur stort är ditt ordförråd? Testa dig och se vilken nivå du ligger på – för låg-, mellan- och högstadiet och gymnasiet.",
};

/** Ett urval ord per årskurs (fast urval, så att sidan blir liten). */
function ordbank(perArskurs = 80): Testord[] {
  return ARSKURSORD.flatMap((a) => {
    // Stavningsord är vanliga vardagsord och säger lite om ordförrådet.
    const alla = a.veckor.flatMap((v) => v.ord).filter((o) => o.kategori !== "stavning");
    const steg = Math.max(1, Math.floor(alla.length / perArskurs));
    return alla
      .filter((_, i) => i % steg === 0)
      .slice(0, perArskurs)
      .map((o) => ({ ord: o.ord, ordklass: o.ordklass, forklaring: o.forklaring, niva: a.arskurs }));
  });
}

export default function OrdforradPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Brain className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Ordförrådstest</h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Hur många ord kan du? Du får 50 ord ett i taget. Välj den förklaring som stämmer. Svarar du rätt blir orden svårare, svarar du
          fel blir de lättare. Ingen inloggning – och inget sparas.
        </p>
      </div>
      <Ordforradstest bank={ordbank()} />
    </div>
  );
}
