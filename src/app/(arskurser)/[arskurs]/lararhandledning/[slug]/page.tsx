import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, FileText, MonitorPlay, Printer } from "lucide-react";
import { HANDLEDNING_TILLAGG } from "@/lib/data/lararhandledning-remiss";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import {
  TEACHER_GUIDES,
  getGuideBySlug,
} from "@/lib/data/lararhandledningar";
import { ShareToolbar } from "@/components/share-toolbar";

interface Props {
  params: Promise<{ arskurs: string; slug: string }>;
}

export async function generateStaticParams() {
  return TEACHER_GUIDES.map((g) => ({
    arskurs: g.ageGroup,
    slug: g.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { arskurs, slug } = await params;
  const guide = getGuideBySlug(arskurs, slug);
  if (!guide) return {};
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  return {
    title: `${guide.title} – Lärarhandledning ${group?.label ?? ""}`,
    description: guide.description,
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { arskurs, slug } = await params;
  const guide = getGuideBySlug(arskurs, slug);

  if (!guide) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const tillagg = HANDLEDNING_TILLAGG[slug];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Back link */}
      <Link
        href={`/${arskurs}/lararhandledning`}
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Tillbaka till lärarhandledningar
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {guide.title}
        </h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
          {guide.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
            <Clock className="h-4 w-4" />
            <span>{guide.estimatedTime}</span>
          </div>
          {group && (
            <Badge variant="outline">{group.label}</Badge>
          )}
          {guide.topics.map((topic) => (
            <Badge key={topic} variant="secondary">
              {topic}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2 no-print">
          <Link
            href={`/${arskurs}/lararhandledning/${slug}/presentation`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700"
          >
            <MonitorPlay className="h-4 w-4" /> Bilder till lektionen
          </Link>
          <Link
            href={`/${arskurs}/lararhandledning/${slug}/elevblad`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium hover:border-neutral-500 dark:border-neutral-700"
          >
            <FileText className="h-4 w-4" /> Elevblad att skriva ut
          </Link>
        </div>
      </header>

      {/* Syfte */}
      <Section title="Syfte">
        <p className="text-neutral-700 leading-relaxed dark:text-neutral-300">
          {guide.syfte}
        </p>
      </Section>

      {/* Koppling till förslaget till ny kursplan */}
      {tillagg && tillagg.remiss.length > 0 && (
        <Section title="Koppling till förslaget till ny kursplan">
          <p className="mb-2 text-sm text-neutral-500">
            Förslaget till kursplan i svenska för den tioåriga grundskolan (remiss november 2026).{" "}
            <Link href="/ny-kursplan" className="font-medium text-sky-700 hover:underline dark:text-sky-400">
              Läs om vad som ändras
            </Link>
          </p>
          <ul className="list-disc space-y-1 pl-5 text-neutral-700 dark:text-neutral-300">
            {tillagg.remiss.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* Koppling till nuvarande kursplan */}
      <Section title={arskurs === "gymnasiet" ? "Koppling till ämnesplanen" : "Koppling till nuvarande kursplan (Lgr22)"}>
        <p className="text-neutral-700 leading-relaxed dark:text-neutral-300">
          {guide.kopplingKursplan}
        </p>
      </Section>

      {/* Förberedelser */}
      <Section title="Förberedelser">
        <ul className="space-y-2">
          {guide.forberedelser.map((item, i) => (
            <li key={i} className="flex gap-3 text-neutral-700 dark:text-neutral-300">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Genomförande */}
      <Section title="Genomförande">
        <div className="space-y-4">
          {guide.genomforande.map((step, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <h4 className="mb-2 font-semibold text-neutral-900 dark:text-white">
                  {step.steg}
                </h4>
                <p className="text-neutral-700 leading-relaxed dark:text-neutral-300">
                  {step.beskrivning}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Uppföljning */}
      <Section title="Uppföljning">
        <ul className="space-y-2">
          {guide.uppfoljning.map((item, i) => (
            <li key={i} className="flex gap-3 text-neutral-700 dark:text-neutral-300">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Bedömningsstöd */}
      <Section title="Bedömningsstöd">
        <ul className="space-y-2">
          {guide.bedomningsstod.map((item, i) => (
            <li key={i} className="flex gap-3 text-neutral-700 dark:text-neutral-300">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Fortsätt med */}
      {tillagg && tillagg.fortsatt.length > 0 && (
        <Section title="Fortsätt med">
          <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
            Lektionen är en enskild lektion. Vill du arbeta längre med området finns färdiga arbetsområden med förtest, flera lektioner,
            presentation och prov.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {tillagg.fortsatt.map(([titel, sokvag]) => (
              <Link
                key={sokvag}
                href={`/${arskurs}/${sokvag}`}
                className="flex items-center justify-between gap-2 rounded-lg border border-neutral-200 px-4 py-3 text-sm font-medium hover:border-neutral-400 dark:border-neutral-800"
              >
                {titel} <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Share & Copy */}
      <ShareToolbar
        copyText={[
          guide.title,
          "",
          "Syfte: " + guide.syfte,
          "",
          "Genomförande:",
          ...guide.genomforande.map((s) => `• ${s.steg}: ${s.beskrivning}`),
          "",
          "Bedömningsstöd:",
          ...guide.bedomningsstod.map((b) => `• ${b}`),
        ].join("\n")}
        copyLabel="Kopiera handledning"
        className="mt-10 no-print"
      />

      {/* Print hint */}
      <div className="mt-6 border-t border-neutral-200 pt-8 text-center dark:border-neutral-800 no-print">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          <Printer className="mr-1.5 inline-block h-4 w-4" />
          Skriv ut den här sidan med Ctrl+P / Cmd+P
        </p>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}
