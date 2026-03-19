export type AgeGroup = "lagstadiet" | "mellanstadiet" | "hogstadiet" | "gymnasiet";

export type Subject = "svenska" | "sva";

export type ContentType =
  | "lararhandledning"
  | "elevtips"
  | "ai-guide"
  | "grammatik"
  | "skrivmall";

export interface ContentRow {
  id: string;
  type: ContentType;
  title: string;
  slug: string;
  body: string;
  age_group: AgeGroup;
  subject: Subject;
  topics: string[];
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface CurriculumCacheRow {
  id: string;
  subject_code: string;
  data: Record<string, unknown>;
  fetched_at: string;
}

export interface WordRow {
  id: string;
  word: string;
  definition: string;
  word_class: string;
  example: string;
  age_group: AgeGroup;
  week_number: number;
  etymology?: string;
  difficulty: "enkel" | "medel" | "avancerad";
  theme: string;
}
