import { notFound } from "next/navigation";
import Link from "next/link";
import { BookText, ArrowLeft, PenLine } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TEXTBANK_TEXTS } from "@/lib/data/textbank";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { ShareToolbar } from "@/components/share-toolbar";

interface Props {
  params: Promise<{ arskurs: string; slug: string }>;
}

export async function generateStaticParams() {
  const results: { arskurs: string; slug: string }[] = [];
  for (const group of AGE_GROUPS) {
    for (const text of TEXTBANK_TEXTS) {
      results.push({ arskurs: group.slug, slug: text.slug });
    }
  }
  return results;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const text = TEXTBANK_TEXTS.find((t) => t.slug === slug);
  if (!text) return {};
  return {
    title: `${text.title} – Textbank`,
    description: `${text.categoryLabel}: ${text.title}. Exempeltext med analysfragor och tips.`,
  };
}

export default async function TextDetailArskursPage({ params }: Props) {
  const { arskurs, slug } = await params;
  const text = TEXTBANK_TEXTS.find((t) => t.slug === slug);

  if (!text) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Back link */}
      <Link
        href={`/${arskurs}/textbank`}
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Tillbaka till Textbanken
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{text.categoryLabel}</Badge>
          <Badge variant="outline">{text.difficultyLabel}</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {text.title}
        </h1>
      </div>

      {/* Full text */}
      <article className="mb-12 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          {text.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Analysis questions */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
          Analysera texten
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="space-y-3">
              {text.analysisQuestions.map((question, i) => (
                <li key={i} className="flex gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                    {i + 1}
                  </span>
                  {question}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Structure */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
          Textens uppbyggnad
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {text.structure}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Language features */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
          Sprakliga drag
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {text.languageFeatures}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Share & Copy */}
      <ShareToolbar
        copyText={text.content}
        copyLabel="Kopiera texten"
        className="mb-10"
      />

      {/* Link to skrivverkstad */}
      <section>
        <Link
          href={`/${arskurs}${text.skrivverkstadLink}`}
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <PenLine className="h-4 w-4" />
          {text.skrivverkstadLabel}
          <span className="text-neutral-400">&mdash; Lär dig skriva denna texttyp</span>
        </Link>
      </section>
    </div>
  );
}
