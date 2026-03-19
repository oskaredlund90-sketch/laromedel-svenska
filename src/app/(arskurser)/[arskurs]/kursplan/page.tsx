import { notFound } from "next/navigation";
import { AGE_GROUPS, GRADE_RANGES } from "@/lib/skolverket/constants";
import { getSvenskaGrundskola, getSvaGrundskola, getSvenskaGymnasium, getSvaGymnasium } from "@/lib/skolverket/client";
import { CurriculumDisplay } from "@/components/kursplan/curriculum-display";
import { SubjectToggle } from "@/components/kursplan/subject-toggle";
import type { AgeGroup } from "@/lib/supabase/types";

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

interface Props {
  params: Promise<{ arskurs: string }>;
  searchParams: Promise<{ amne?: string }>;
}

export async function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Kursplan ${group.label}`,
    description: `Kursplan i svenska för ${group.label.toLowerCase()} från Skolverket – centralt innehåll och kunskapskrav.`,
  };
}

export default async function KursplanPage({ params, searchParams }: Props) {
  const { arskurs } = await params;
  const { amne } = await searchParams;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;
  const isSva = amne === "sva";

  let subject;
  try {
    if (arskurs === "gymnasiet") {
      subject = isSva ? await getSvaGymnasium() : await getSvenskaGymnasium();
    } else {
      subject = isSva ? await getSvaGrundskola() : await getSvenskaGrundskola();
    }
  } catch {
    subject = null;
  }

  const gradeRange = arskurs !== "gymnasiet"
    ? GRADE_RANGES[arskurs as Exclude<AgeGroup, "gymnasiet">]
    : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Kursplan &ndash; {group.label}
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {gradeRange ? gradeRange.label : "Gymnasiet"} &middot; Från Skolverkets öppna API
        </p>
      </div>

      <SubjectToggle currentSubject={isSva ? "sva" : "svenska"} />

      {subject ? (
        <CurriculumDisplay
          subject={subject}
          gradeFilter={gradeRange?.grades}
        />
      ) : (
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-neutral-600 dark:text-neutral-400">
            Kunde inte hämta kursplansdata just nu. Försök igen senare.
          </p>
        </div>
      )}
    </div>
  );
}
