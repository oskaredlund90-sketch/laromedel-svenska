import type { AgeGroup } from "@/lib/supabase/types";

export const SKOLVERKET_API_BASE = "https://api.skolverket.se/syllabus";

export const SUBJECT_CODES = {
  svenska_grundskola: "GRGRSVE01",
  sva_grundskola: "GRGRSVA01",
  svenska_gymnasium: "SVE",
  sva_gymnasium: "SVA",
} as const;

export const GRADE_RANGES: Record<
  Exclude<AgeGroup, "gymnasiet">,
  { label: string; grades: string }
> = {
  lagstadiet: { label: "Årskurs 1\u20133", grades: "1-3" },
  mellanstadiet: { label: "Årskurs 4\u20136", grades: "4-6" },
  hogstadiet: { label: "Årskurs 7\u20139", grades: "7-9" },
};

export const AGE_GROUPS: { slug: AgeGroup; label: string; description: string }[] = [
  {
    slug: "lagstadiet",
    label: "Lågstadiet",
    description: "Årskurs 1\u20133",
  },
  {
    slug: "mellanstadiet",
    label: "Mellanstadiet",
    description: "Årskurs 4\u20136",
  },
  {
    slug: "hogstadiet",
    label: "Högstadiet",
    description: "Årskurs 7\u20139",
  },
  {
    slug: "gymnasiet",
    label: "Gymnasiet",
    description: "Svenska 1\u20133 m.fl.",
  },
];

export const GYMNASIUM_COURSES = [
  { code: "SVESVE01", name: "Svenska 1", points: 100 },
  { code: "SVESVE02", name: "Svenska 2", points: 100 },
  { code: "SVESVE03", name: "Svenska 3", points: 100 },
] as const;

export const GYMNASIUM_COURSES_SVA = [
  { code: "SVASVA01", name: "Svenska som andraspråk 1", points: 100 },
  { code: "SVASVA02", name: "Svenska som andraspråk 2", points: 100 },
  { code: "SVASVA03", name: "Svenska som andraspråk 3", points: 100 },
] as const;
