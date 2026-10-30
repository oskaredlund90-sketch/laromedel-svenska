"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Ungefärliga värden: tyst läsning ~150 ord/min, en ungdomsbok ~40 000 ord.
const ORD_PER_MINUT = 150;
const ORD_PER_BOK = 40000;

function format(n: number): string {
  return Math.round(n).toLocaleString("sv-SE");
}

export function Lasraknare() {
  const [minuter, setMinuter] = useState(20);
  const ordPerAr = minuter * ORD_PER_MINUT * 365;
  const bocker = ordPerAr / ORD_PER_BOK;
  const timmar = (minuter * 365) / 60;

  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        <label className="block">
          <span className="mb-2 block font-medium text-neutral-900 dark:text-white">
            Om jag läser <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{minuter}</span> minuter om dagen …
          </span>
          <input
            type="range"
            min={0}
            max={60}
            step={5}
            value={minuter}
            onChange={(e) => setMinuter(Number(e.target.value))}
            className="w-full accent-emerald-600"
            aria-label="Minuter läsning per dag"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-bold tabular-nums text-neutral-900 dark:text-white">{format(ordPerAr)}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">ord på ett år</p>
          </div>
          <div>
            <p className="text-3xl font-bold tabular-nums text-neutral-900 dark:text-white">ca {Math.round(bocker)}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">böcker på ett år</p>
          </div>
          <div>
            <p className="text-3xl font-bold tabular-nums text-neutral-900 dark:text-white">{format(timmar)}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">timmars träning för hjärnan</p>
          </div>
        </div>
        <p className="text-xs text-neutral-500">
          En försiktig uträkning: {ORD_PER_MINUT} ord per minut och {format(ORD_PER_BOK)} ord per bok. Det viktigaste är inte siffrorna – utan att varje
          minut räknas.
        </p>
      </CardContent>
    </Card>
  );
}
