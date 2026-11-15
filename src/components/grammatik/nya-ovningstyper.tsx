"use client";

import { useMemo, useState } from "react";
import { CheckCircle, RotateCcw, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { DelaExercise, MarkeraExercise, OrdnaExercise } from "@/lib/data/grammatik-ovningar";
import { delaMarkera, delningar } from "@/lib/grammatik/ovningar/bygg";

interface Props<T> {
  exercise: T;
  answered: boolean;
  isCorrect: boolean;
  onAnswer: (correct: boolean) => void;
}

function Instruktion({ children }: { children: React.ReactNode }) {
  return <h4 className="mb-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">{children}</h4>;
}

function Resultat({ ratt, children }: { ratt: boolean; children?: React.ReactNode }) {
  return (
    <div
      aria-live="polite"
      className={cn(
        "mt-4 rounded-lg px-4 py-3 text-sm",
        ratt ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200" : "bg-red-50 text-red-900 dark:bg-red-950/50 dark:text-red-200",
      )}
    >
      <p className="flex items-center gap-2 font-semibold">
        {ratt ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />} {ratt ? "Rätt!" : "Inte riktigt."}
      </p>
      {children && <div className="mt-1">{children}</div>}
    </div>
  );
}

/* ---- Markera ord i en text ---- */

export function MarkeraRenderer({ exercise, answered, isCorrect, onAnswer }: Props<MarkeraExercise>) {
  const bitar = useMemo(() => delaMarkera(exercise.text), [exercise.text]);
  const antal = bitar.filter((b) => b.ratt).length;
  const [valda, setValda] = useState<Set<number>>(new Set());

  const vaxla = (i: number) => {
    if (answered) return;
    setValda((v) => {
      const n = new Set(v);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  };
  const kontrollera = () => onAnswer(bitar.every((b, i) => b.ratt === valda.has(i)));

  return (
    <div>
      <Instruktion>{exercise.instruction}</Instruktion>
      <p className="mb-2 text-xs text-neutral-500">
        Hitta {antal} {antal === 1 ? "ställe" : "ställen"}. Klicka igen för att ångra.
      </p>
      <p className="text-lg leading-[2.4rem] text-neutral-800 dark:text-neutral-200">
        {bitar.map((b, i) => {
          const vald = valda.has(i);
          const stil = !answered
            ? vald
              ? "bg-amber-200 text-amber-950 dark:bg-amber-500/40 dark:text-amber-100"
              : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            : b.ratt && vald
              ? "bg-emerald-200 text-emerald-950 dark:bg-emerald-600/40 dark:text-emerald-100"
              : b.ratt
                ? "outline-2 outline-dashed outline-emerald-500"
                : vald
                  ? "bg-red-200 text-red-950 line-through dark:bg-red-600/40 dark:text-red-100"
                  : "";
          return (
            <span key={i}>
              {b.fore}
              <button
                type="button"
                onClick={() => vaxla(i)}
                disabled={answered}
                aria-pressed={vald}
                className={cn("rounded px-0.5 transition-colors", stil)}
              >
                {b.ord}
              </button>
              {b.efter}{" "}
            </span>
          );
        })}
      </p>
      {!answered && (
        <Button className="mt-4" size="sm" onClick={kontrollera} disabled={valda.size === 0}>
          Kontrollera
        </Button>
      )}
      {answered && (
        <Resultat ratt={isCorrect}>
          {!isCorrect && <p>Orden med streckad ram är de rätta.</p>}
          {exercise.explanation && <p>{exercise.explanation}</p>}
        </Resultat>
      )}
    </div>
  );
}

/* ---- Dela ett ord i morfem ---- */

export function DelaRenderer({ exercise, answered, isCorrect, onAnswer }: Props<DelaExercise>) {
  const { ord, grans } = useMemo(() => delningar(exercise.word), [exercise.word]);
  const bokstaver = [...ord];
  const [valda, setValda] = useState<Set<number>>(new Set());

  const vaxla = (k: number) => {
    if (answered) return;
    setValda((v) => {
      const n = new Set(v);
      if (n.has(k)) n.delete(k);
      else n.add(k);
      return n;
    });
  };
  const kontrollera = () => onAnswer(valda.size === grans.length && grans.every((g) => valda.has(g)));
  const ratt = exercise.word.split("|");

  return (
    <div>
      <Instruktion>{exercise.instruction}</Instruktion>
      <div className="flex flex-wrap items-center justify-center py-4 font-mono text-3xl font-semibold text-neutral-900 dark:text-white">
        {bokstaver.map((b, i) => (
          <span key={i} className="flex items-center">
            {i > 0 && (
              <button
                type="button"
                onClick={() => vaxla(i)}
                disabled={answered}
                aria-label={`Dela mellan ${bokstaver[i - 1]} och ${b}`}
                aria-pressed={valda.has(i)}
                className={cn(
                  "mx-0.5 flex h-11 w-4 items-center justify-center rounded text-2xl transition-colors",
                  valda.has(i)
                    ? answered && !grans.includes(i)
                      ? "text-red-500"
                      : "text-amber-600 dark:text-amber-400"
                    : "text-transparent hover:bg-neutral-100 hover:text-neutral-300 dark:hover:bg-neutral-800",
                  answered && grans.includes(i) && !valda.has(i) && "text-emerald-500",
                )}
              >
                |
              </button>
            )}
            <span>{b}</span>
          </span>
        ))}
      </div>
      {!answered && (
        <div className="flex gap-2">
          <Button size="sm" onClick={kontrollera}>
            Kontrollera
          </Button>
          <Button size="sm" variant="outline" onClick={() => setValda(new Set())} disabled={valda.size === 0}>
            <RotateCcw className="h-4 w-4" /> Börja om
          </Button>
        </div>
      )}
      {answered && (
        <Resultat ratt={isCorrect}>
          <p className="font-mono text-base">{ratt.join(" + ")}</p>
          {exercise.explanation && <p className="mt-1">{exercise.explanation}</p>}
        </Resultat>
      )}
    </div>
  );
}

/* ---- Ordna delar till en mening eller en text ---- */

function blanda<T>(lista: T[]): T[] {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function OrdnaRenderer({ exercise, answered, isCorrect, onAnswer }: Props<OrdnaExercise>) {
  // Blanda tills ordningen skiljer sig från den rätta.
  const start = useMemo(() => {
    const index = exercise.parts.map((_, i) => i);
    let b = blanda(index);
    for (let n = 0; n < 10 && b.every((x, i) => x === i); n++) b = blanda(index);
    return b;
  }, [exercise.parts]);
  const [svar, setSvar] = useState<number[]>([]);
  const kvar = start.filter((i) => !svar.includes(i));
  const lagg = (i: number) => !answered && setSvar((s) => [...s, i]);
  const ta = (i: number) => !answered && setSvar((s) => s.filter((x) => x !== i));

  const godkanda = [exercise.parts, ...(exercise.alternatives ?? [])].map((g) => g.join(" ").toLowerCase());
  const kontrollera = () => onAnswer(godkanda.includes(svar.map((i) => exercise.parts[i]).join(" ").toLowerCase()));

  const visa = (delar: string[]) => {
    const t = delar.join(" ");
    return t.charAt(0).toUpperCase() + t.slice(1) + (exercise.end ?? "");
  };

  const chip = "rounded-lg border px-3 py-2 text-left transition-colors";
  const lista = exercise.meningar ? "flex flex-col gap-2" : "flex flex-wrap gap-2";

  return (
    <div>
      <Instruktion>{exercise.instruction}</Instruktion>
      <div
        className={cn(
          "min-h-[56px] rounded-xl border-2 border-dashed p-3",
          answered ? (isCorrect ? "border-emerald-400" : "border-red-400") : "border-neutral-300 dark:border-neutral-700",
          lista,
        )}
      >
        {svar.length === 0 && <span className="self-center text-sm text-neutral-400">Klicka på delarna nedan i rätt ordning.</span>}
        {svar.map((i, n) => (
          <button
            key={i}
            type="button"
            onClick={() => ta(i)}
            disabled={answered}
            className={cn(chip, "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900")}
          >
            {exercise.meningar && <span className="mr-2 text-xs opacity-60">{n + 1}.</span>}
            {exercise.parts[i]}
          </button>
        ))}
      </div>
      {!answered && (
        <div className={cn("mt-3", lista)}>
          {kvar.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => lagg(i)}
              className={cn(chip, "border-neutral-300 bg-white hover:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900")}
            >
              {exercise.parts[i]}
            </button>
          ))}
        </div>
      )}
      {!answered && (
        <div className="mt-4 flex gap-2">
          <Button size="sm" onClick={kontrollera} disabled={kvar.length > 0}>
            Kontrollera
          </Button>
          <Button size="sm" variant="outline" onClick={() => setSvar([])} disabled={svar.length === 0}>
            <RotateCcw className="h-4 w-4" /> Börja om
          </Button>
        </div>
      )}
      {answered && (
        <Resultat ratt={isCorrect}>
          {!isCorrect && (
            <p className={exercise.meningar ? "whitespace-pre-line" : ""}>
              Rätt ordning: {exercise.meningar ? "\n" + exercise.parts.map((p, n) => `${n + 1}. ${p}`).join("\n") : visa(exercise.parts)}
            </p>
          )}
          {exercise.explanation && <p className="mt-1">{exercise.explanation}</p>}
        </Resultat>
      )}
    </div>
  );
}
