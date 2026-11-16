import type { ReactNode } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AgeGroup } from "@/lib/supabase/types";

/** Byggklossar för grammatikens genomgångar. */

const ORDNING: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];

/** Sant om stadiet är `fran` eller senare. */
export function minst(stadie: AgeGroup, fran: AgeGroup): boolean {
  return ORDNING.indexOf(stadie) >= ORDNING.indexOf(fran);
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">{title}</h2>
      {children}
    </section>
  );
}

export function ExampleCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
      <div className="text-sm text-neutral-700 dark:text-neutral-300">{children}</div>
    </div>
  );
}

export function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
      <div className="text-sm text-neutral-700 dark:text-neutral-300">{children}</div>
    </div>
  );
}

export function Ex({ children }: { children: ReactNode }) {
  return (
    <p className="my-1.5 border-l-4 border-sky-300 bg-neutral-50 py-1.5 pl-3 pr-2 text-sm italic text-neutral-800 dark:border-sky-800 dark:bg-neutral-900 dark:text-neutral-200 print:border-l-2 print:py-0.5">
      {children}
    </p>
  );
}

export function Intro({ children }: { children: ReactNode }) {
  return <p className="mb-6 text-neutral-600 dark:text-neutral-400">{children}</p>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">{children}</p>;
}

/** En mening där delarna är markerade med etiketter, t.ex. satsdelar eller morfem. */
export function Markerad({ delar }: { delar: [string, string?][] }) {
  return (
    <div className="my-2 flex flex-wrap items-end gap-1.5">
      {delar.map(([text, etikett], i) => (
        <span key={i} className="flex flex-col items-center">
          <span
            className={
              etikett
                ? "rounded-md border border-sky-300 bg-sky-50 px-2 py-1 text-sm font-medium text-sky-950 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-100"
                : "px-1 py-1 text-sm text-neutral-700 dark:text-neutral-300"
            }
          >
            {text}
          </span>
          <span className="mt-0.5 h-4 text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">{etikett ?? ""}</span>
        </span>
      ))}
    </div>
  );
}

/** Ordföljdstabell: kolumnrubriker + rader. */
export function Tabell({ rubriker, rader }: { rubriker: string[]; rader: string[][] }) {
  return (
    <div className="my-3 overflow-x-auto print:overflow-visible">
      <table className="w-full min-w-[480px] border-collapse text-sm print:min-w-0">
        <thead>
          <tr>
            {rubriker.map((r) => (
              <th key={r} className="border-b-2 border-neutral-300 px-2 py-1.5 text-left font-semibold text-neutral-900 dark:border-neutral-700 dark:text-white">
                {r}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rader.map((rad, i) => (
            <tr key={i} className="border-b border-neutral-100 dark:border-neutral-800">
              {rad.map((c, j) => (
                <td key={j} className="px-2 py-1.5 text-neutral-700 dark:text-neutral-300">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Länk till ett annat grammatikämne eller en annan del av sajten. */
export function Vidare({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:underline dark:text-sky-400 print:hidden">
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

/** Kort repetition sist i genomgången. */
export function Minneslista({ punkter }: { punkter: ReactNode[] }) {
  return (
    <Card className="mb-10 border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/30">
      <CardContent className="p-6">
        <p className="mb-2 font-semibold text-neutral-900 dark:text-white">Kom ihåg</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-800 dark:text-neutral-200">
          {punkter.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
