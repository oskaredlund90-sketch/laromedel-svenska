"use client";

import { useState } from "react";
import { BookOpen, Check, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Formagesida } from "@/lib/lasprov/formagesidor";

/** Öva: läs en kort text, svara på flervalsfrågor (rättas direkt) och en öppen fråga med modellsvar. */
export function Ovning({ ovning }: { ovning: Formagesida["ovning"] }) {
  const [val, setVal] = useState<Record<number, number>>({});
  const [eget, setEget] = useState("");
  const [visaModell, setVisaModell] = useState(false);
  const [bockar, setBockar] = useState<Record<number, boolean>>({});

  return (
    <section className="mt-12">
      <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
        <BookOpen className="h-5 w-5" /> Öva
      </h2>
      <Card>
        <CardContent className="p-6 sm:p-8">
          <p className="whitespace-pre-line font-serif text-[17px] leading-8 text-neutral-800 dark:text-neutral-200">{ovning.text}</p>
        </CardContent>
      </Card>

      <ol className="mt-6 space-y-5">
        {ovning.flerval.map((q, i) => {
          const besvarad = val[i] !== undefined;
          return (
            <li key={q.fraga}>
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">
                {i + 1}. {q.fraga}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {q.alternativ.map((a, ai) => (
                  <button
                    key={a}
                    disabled={besvarad}
                    onClick={() => setVal((v) => ({ ...v, [i]: ai }))}
                    className={cn(
                      "rounded-lg border px-4 py-2 text-left text-sm",
                      !besvarad && "border-neutral-300 hover:border-neutral-500 dark:border-neutral-700",
                      besvarad && ai === q.ratt && "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40",
                      besvarad && val[i] === ai && ai !== q.ratt && "border-red-500 bg-red-50 dark:bg-red-950/40",
                      besvarad && val[i] !== ai && ai !== q.ratt && "border-neutral-200 text-neutral-400 dark:border-neutral-800",
                    )}
                  >
                    {a}
                  </button>
                ))}
              </div>
              {besvarad && <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{q.forklaring}</p>}
            </li>
          );
        })}
      </ol>

      <Card className="mt-8">
        <CardContent className="space-y-3 p-6">
          <p className="font-medium text-neutral-900 dark:text-white">Skrivuppgift: {ovning.oppen.fraga}</p>
          <textarea
            value={eget}
            onChange={(e) => setEget(e.target.value)}
            placeholder="Skriv ditt svar här …"
            className="min-h-28 w-full rounded-md border border-neutral-300 bg-white p-3 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
          <div>
            <p className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">Kolla ditt svar</p>
            {ovning.oppen.checklista.map((c, i) => (
              <label key={c} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <input type="checkbox" checked={!!bockar[i]} onChange={(e) => setBockar((b) => ({ ...b, [i]: e.target.checked }))} className="accent-emerald-600" />
                {c}
              </label>
            ))}
          </div>
          {!visaModell ? (
            <Button variant="outline" size="sm" onClick={() => setVisaModell(true)} disabled={eget.trim().length < 10}>
              <Eye className="h-4 w-4" /> Jämför med ett modellsvar
            </Button>
          ) : (
            <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-3 text-sm dark:bg-emerald-950/30">
              <p className="mb-1 flex items-center gap-1 font-semibold">
                <Check className="h-4 w-4" /> Modellsvar
              </p>
              {ovning.oppen.modellsvar}
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">Ditt svar behöver inte se likadant ut – men har du med samma delar?</p>
            </div>
          )}
          <p className="text-xs text-neutral-500">Inget sparas.</p>
        </CardContent>
      </Card>
    </section>
  );
}
