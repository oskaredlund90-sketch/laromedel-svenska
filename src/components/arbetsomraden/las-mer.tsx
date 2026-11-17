import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { AgeGroup } from "@/lib/supabase/types";
import { hamtaArbetsomrade } from "@/lib/arbetsomraden";

/**
 * Faktatexterna ur ett arbetsområde på en elevsida – så att eleven kan läsa
 * själv – med länk till arbetsområdet (lektioner, förtest och prov).
 */
export function LasMer({ stadie, id }: { stadie: AgeGroup; id?: string }) {
  const ao = id ? hamtaArbetsomrade(stadie, id) : undefined;
  if (!ao) return null;
  return (
    <section className="my-10 rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-sky-700 dark:text-sky-400">
        <BookOpen className="h-4 w-4" /> Läs och lär
      </p>
      <h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">{ao.titel}</h2>
      <div className="mt-4 space-y-2">
        {ao.lektioner.map((l, i) => (
          <details key={l.titel} className="group rounded-lg border border-neutral-200 p-4 dark:border-neutral-800" open={i === 0}>
            <summary className="cursor-pointer font-semibold text-neutral-900 dark:text-white">
              {i + 1}. {l.titel}
            </summary>
            {l.elevtext.map((t) => (
              <div key={t.rubrik} className="mt-3">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{t.rubrik}</h3>
                {t.stycken.map((s) => (
                  <p key={s} className="mt-1.5 leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {s}
                  </p>
                ))}
              </div>
            ))}
          </details>
        ))}
      </div>
      <Link href={`/${stadie}/arbetsomraden/${ao.id}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:underline dark:text-sky-400">
        För läraren: lektioner, förtest och prov <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
