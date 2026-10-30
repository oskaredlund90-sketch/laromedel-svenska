"use client";

import { Printer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { AgeGroup } from "@/lib/supabase/types";
import { MINUTER, lasplan } from "@/lib/lastraning/formagor";

const DAGAR = ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];

export function Lasplan({ stadie }: { stadie: AgeGroup }) {
  const plan = lasplan(stadie);
  const minuter = MINUTER[stadie];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Läsplan i 6 veckor</h2>
          <p className="mt-1 max-w-2xl text-neutral-700 dark:text-neutral-300">
            Bygg läskondition, läsflyt och tempo – och träna att sammanfatta och resonera. Läs varje dag och bocka av. Skriv ut planen och sätt upp den hemma.
          </p>
        </div>
        <Button variant="outline" onClick={() => window.print()} className="print:hidden">
          <Printer className="h-4 w-4" /> Skriv ut
        </Button>
      </div>

      {plan.map((v, i) => (
        <Card key={v.vecka} className="break-inside-avoid">
          <CardContent className="space-y-3 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Vecka {v.vecka}: {v.fokus}
              </h3>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{minuter[i]} minuter om dagen</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{v.syfte}</p>
            <ul className="list-disc space-y-1 pl-5 text-neutral-800 dark:text-neutral-200">
              {v.aktiviteter.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              {DAGAR.map((d) => (
                <label key={d} className="flex cursor-pointer items-center gap-1.5 rounded-md border border-neutral-200 px-2.5 py-1.5 text-sm dark:border-neutral-700">
                  <input type="checkbox" className="accent-emerald-600" /> {d}
                </label>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="break-inside-avoid">
        <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">Sammanfatta – checklista</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
              <li>Har jag med det viktigaste – och bara det?</li>
              <li>Skriver jag med egna ord?</li>
              <li>Berättelse: vem, var, problem och lösning?</li>
              <li>Faktatext: huvudtanke och några viktiga detaljer?</li>
              <li>Förstår någon som inte läst texten vad den handlar om?</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">Resonera – meningsstartare</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
              <li>Jag tror att … eftersom det står att …</li>
              <li>Det här påminner mig om …</li>
              <li>Om jag hade varit … skulle jag …</li>
              <li>Författaren vill nog visa att …</li>
              <li>Jag håller med/håller inte med, för att …</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
