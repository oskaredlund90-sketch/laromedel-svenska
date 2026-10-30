"use client";

import { useEffect, useState } from "react";
import { BookOpenCheck, CalendarCheck, Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AgeGroup } from "@/lib/supabase/types";
import { Forstaelsetest } from "./forstaelsetest";
import { Lashastighet } from "./lashastighet";
import { Lasplan } from "./lasplan";

const FLIKAR = [
  { id: "test", namn: "Läsförståelse", ikon: BookOpenCheck },
  { id: "hastighet", namn: "Läshastighet", ikon: Timer },
  { id: "plan", namn: "Läsplan", ikon: CalendarCheck },
] as const;

type Flik = (typeof FLIKAR)[number]["id"];

export function LastraningClient({ stadie }: { stadie: AgeGroup }) {
  const [flik, setFlik] = useState<Flik>("test");

  // Flik i adressen (#hastighet) så att läraren kan länka direkt.
  useEffect(() => {
    const fran = () => {
      const h = window.location.hash.slice(1);
      if (FLIKAR.some((f) => f.id === h)) setFlik(h as Flik);
    };
    fran();
    window.addEventListener("hashchange", fran);
    return () => window.removeEventListener("hashchange", fran);
  }, []);

  const byt = (f: Flik) => {
    setFlik(f);
    history.replaceState(null, "", `#${f}`);
  };

  return (
    <div>
      <div role="tablist" className="mb-8 grid grid-cols-3 gap-1 rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800 print:hidden">
        {FLIKAR.map(({ id, namn, ikon: Ikon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={flik === id}
            onClick={() => byt(id)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-lg px-2 py-2.5 text-sm font-medium transition-colors",
              flik === id
                ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-950 dark:text-white"
                : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
            )}
          >
            <Ikon className="hidden h-4 w-4 sm:block" /> {namn}
          </button>
        ))}
      </div>

      {flik === "test" && <Forstaelsetest stadie={stadie} tillPlan={() => byt("plan")} />}
      {flik === "hastighet" && <Lashastighet stadie={stadie} />}
      {flik === "plan" && <Lasplan stadie={stadie} />}
    </div>
  );
}
