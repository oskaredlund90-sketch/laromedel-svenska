import { notFound } from "next/navigation";
import { Quote } from "lucide-react";
import type { Metadata } from "next";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { getOrdsprakExercises } from "@/lib/data/ordsprak-ovningar";
import { OrdsprakOvningar } from "@/components/ordsprak-ovningar";

/* ------------------------------------------------------------------ */
/*  Validation                                                         */
/* ------------------------------------------------------------------ */

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

/* ------------------------------------------------------------------ */
/*  Level descriptions                                                 */
/* ------------------------------------------------------------------ */

const LEVEL_DESCRIPTIONS: Record<AgeGroup, string> = {
  lagstadiet:
    "Lär dig enkla uttryck och jämförelser som \"tyst som en mus\" och \"hungrig som en varg\".",
  mellanstadiet:
    "Vanliga svenska ordspråk som \"övning ger färdighet\" och \"morgonstund har guld i mund\".",
  hogstadiet:
    "Svenska idiom och deras betydelser — från \"att kasta pärlor för svin\" till \"att göra en höna av en fjäder\".",
  gymnasiet:
    "Fördjupning i svenska ordspråk och idiom med litterärt och historiskt ursprung.",
};

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Ordspråk och idiom – ${group.label}`,
    description: `Svenska ordspråk och idiom anpassade för ${group.label.toLowerCase()}.`,
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function OrdsprakPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const level = arskurs as AgeGroup;
  const exercises = getOrdsprakExercises(level);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Quote className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Ordspråk och idiom
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {LEVEL_DESCRIPTIONS[level]}
        </p>
      </div>

      {/* Intro text */}
      <div className="mb-8 rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-2 text-sm font-semibold text-neutral-900 dark:text-white">
          Vad är ordspråk och idiom?
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <strong>Ordspråk</strong> är korta, visa uttryck som har använts i
          generationer, till exempel &ldquo;övning ger färdighet&rdquo;.{" "}
          <strong>Idiom</strong> är uttryck vars betydelse inte går att förstå
          bara genom att läsa orden, till exempel &ldquo;att ha en räv bakom
          örat&rdquo; (att vara listig). Att kunna ordspråk och idiom gör dig
          bättre på att förstå och använda svenska.
        </p>
      </div>

      {/* Exercises */}
      {exercises.length > 0 && (
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
            Testa dina kunskaper
          </h2>
          <p className="mb-6 text-neutral-600 dark:text-neutral-400">
            Övningar med flerval, para ihop och fyll i det saknade ordet.
          </p>
          <OrdsprakOvningar exercises={exercises} ageGroup={level} />
        </div>
      )}
    </div>
  );
}
