import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { AlertTriangle, ChevronLeft, MessageSquareQuote, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FORMAGESIDOR, hamtaFormagesida } from "@/lib/lasprov/formagesidor";
import { Ovning } from "./ovning";

interface Props {
  params: Promise<{ formaga: string }>;
}

export function generateStaticParams() {
  return FORMAGESIDOR.map((f) => ({ formaga: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const f = hamtaFormagesida((await params).formaga);
  return f ? { title: `${f.rubrik} – Läsförmågor`, description: f.ingress } : {};
}

export default async function FormagaPage({ params }: Props) {
  const f = hamtaFormagesida((await params).formaga);
  if (!f) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link href="/lasformagor" className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
        <ChevronLeft className="h-4 w-4" /> Alla läsförmågor
      </Link>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{f.rubrik}</h1>
      <p className="mt-2 text-lg text-neutral-700 dark:text-neutral-300">{f.ingress}</p>

      <section className="mt-8">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
          <Search className="h-5 w-5" /> Så känner du igen frågan
        </h2>
        <div className="flex flex-wrap gap-2">
          {f.signalord.map((s) => (
            <span key={s} className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-900 dark:bg-sky-950/50 dark:text-sky-200">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">Så här gör du – steg för steg</h2>
        <ol className="space-y-3">
          {f.steg.map((s, i) => (
            <li key={s.rubrik} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white dark:bg-white dark:text-neutral-900">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white">{s.rubrik}</p>
                <p className="text-neutral-700 dark:text-neutral-300">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30">
          <CardContent className="p-5">
            <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
              <AlertTriangle className="h-4 w-4 text-amber-600" /> Vanliga misstag
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-800 dark:text-neutral-200">
              {f.misstag.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
              <MessageSquareQuote className="h-4 w-4 text-sky-600" /> Så kan du börja svaret
            </p>
            <ul className="space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
              {f.meningsstartare.map((m) => (
                <li key={m} className="italic">
                  {m}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mt-10">
        <h2 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">Svagt eller starkt svar?</h2>
        <Card>
          <CardContent className="space-y-3 p-6">
            <p className="font-medium text-neutral-900 dark:text-white">{f.exempel.fraga}</p>
            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-3 text-sm dark:bg-red-950/30">
              <span className="font-semibold">Svagt: </span>
              {f.exempel.svagt}
            </div>
            <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-3 text-sm dark:bg-emerald-950/30">
              <span className="font-semibold">Starkt: </span>
              {f.exempel.starkt}
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{f.exempel.varfor}</p>
          </CardContent>
        </Card>
      </section>

      <Ovning ovning={f.ovning} />

      <div className="mt-10 flex flex-wrap gap-2">
        {FORMAGESIDOR.filter((x) => x.slug !== f.slug).map((x) => (
          <Link key={x.slug} href={`/lasformagor/${x.slug}`} className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
            {x.rubrik}
          </Link>
        ))}
      </div>
    </div>
  );
}
