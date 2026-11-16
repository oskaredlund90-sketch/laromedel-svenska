"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Laddar ner det valda urvalet som PDF utan utskriftsrutan. Finns en färdig PDF
 * (`direkt`) hämtas den direkt, annars skapas PDF:en på servern.
 */
export function LaddaNerPdf({ api, direkt, filnamn, text }: { api: string; direkt?: string; filnamn: string; text: string }) {
  const [laddar, setLaddar] = useState(false);
  const [fel, setFel] = useState(false);

  if (direkt)
    return (
      <a href={direkt} download={filnamn} className="inline-flex h-10 items-center gap-2 rounded-lg bg-sky-600 px-4 text-sm font-semibold text-white hover:bg-sky-700">
        <Download className="h-4 w-4" /> {text}
      </a>
    );

  const hamta = async () => {
    setLaddar(true);
    setFel(false);
    try {
      const svar = await fetch(api);
      if (!svar.ok) throw new Error(String(svar.status));
      const blob = await svar.blob();
      const lank = document.createElement("a");
      lank.href = URL.createObjectURL(blob);
      lank.download = filnamn;
      lank.click();
      setTimeout(() => URL.revokeObjectURL(lank.href), 10_000);
    } catch {
      setFel(true);
    } finally {
      setLaddar(false);
    }
  };

  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      <Button onClick={hamta} disabled={laddar} className="bg-sky-600 hover:bg-sky-700">
        {laddar ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />} {laddar ? "Skapar PDF …" : text}
      </Button>
      {laddar && <span className="text-sm text-neutral-500">Det kan ta upp till en halv minut första gången.</span>}
      {fel && <span className="text-sm text-red-600">Det gick inte att skapa PDF:en. Försök igen, eller använd Skriv ut → Spara som PDF.</span>}
    </span>
  );
}
