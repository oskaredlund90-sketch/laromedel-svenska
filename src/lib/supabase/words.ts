import { supabase } from "./client";
import type { AgeGroup, WordRow } from "./types";
import { VECKANS_ORD, type VeckansOrdEntry } from "@/lib/data/veckans-ord";

/* -------------------------------------------------------------------------- */
/*  Supabase data functions for Veckans Ord                                   */
/* -------------------------------------------------------------------------- */

/** Get the word of the week for a given age group */
export async function getWordOfTheWeek(
  ageGroup: AgeGroup,
  weekNumber: number
): Promise<WordRow | null> {
  const { data, error } = await supabase
    .from("words")
    .select("*")
    .eq("age_group", ageGroup)
    .eq("week_number", weekNumber)
    .limit(1)
    .single();

  if (error || !data) return null;
  return data as WordRow;
}

/** Get all words for a given age group, optionally filtered by theme */
export async function getWords(
  ageGroup: AgeGroup,
  theme?: string
): Promise<WordRow[]> {
  let query = supabase
    .from("words")
    .select("*")
    .eq("age_group", ageGroup)
    .order("week_number", { ascending: true });

  if (theme) {
    query = query.eq("theme", theme);
  }

  const { data, error } = await query;
  if (error || !data) return [];
  return data as WordRow[];
}

/** Get all unique themes for a given age group */
export async function getThemes(ageGroup: AgeGroup): Promise<string[]> {
  const { data, error } = await supabase
    .from("words")
    .select("theme")
    .eq("age_group", ageGroup);

  if (error || !data) return [];

  const themes = new Set<string>();
  data.forEach((row: { theme: string }) => themes.add(row.theme));
  return Array.from(themes).sort();
}

/* -------------------------------------------------------------------------- */
/*  Fallback: convert local data to WordRow format                            */
/* -------------------------------------------------------------------------- */

function localEntryToWordRow(entry: VeckansOrdEntry, index: number): WordRow {
  return {
    id: `local-${index}`,
    word: entry.word,
    definition: entry.definition,
    word_class: entry.wordClass,
    example: entry.example,
    etymology: entry.etymology,
    difficulty: entry.difficulty,
    theme: entry.theme,
    age_group: entry.ageGroup as AgeGroup,
    week_number: (index % 40) + 1,
  };
}

/** Get words with Supabase-first, local fallback */
export async function getWordsWithFallback(
  ageGroup: AgeGroup,
  theme?: string
): Promise<WordRow[]> {
  try {
    const words = await getWords(ageGroup, theme);
    if (words.length > 0) return words;
  } catch {
    // Supabase unavailable, fall through to local data
  }

  // Fallback to local data
  let filtered = VECKANS_ORD.filter((w) => w.ageGroup === ageGroup);
  if (theme) {
    filtered = filtered.filter((w) => w.theme === theme);
  }
  return filtered.map(localEntryToWordRow);
}

/** Get themes with Supabase-first, local fallback */
export async function getThemesWithFallback(
  ageGroup: AgeGroup
): Promise<string[]> {
  try {
    const themes = await getThemes(ageGroup);
    if (themes.length > 0) return themes;
  } catch {
    // Supabase unavailable
  }

  // Fallback to local data
  const themes = new Set<string>();
  VECKANS_ORD
    .filter((w) => w.ageGroup === ageGroup)
    .forEach((w) => themes.add(w.theme));
  return Array.from(themes).sort();
}

/** Get word of the week with fallback */
export async function getWordOfTheWeekWithFallback(
  ageGroup: AgeGroup,
  weekNumber: number
): Promise<WordRow | null> {
  try {
    const word = await getWordOfTheWeek(ageGroup, weekNumber);
    if (word) return word;
  } catch {
    // Supabase unavailable
  }

  // Fallback: pick from local data
  const localWords = VECKANS_ORD.filter((w) => w.ageGroup === ageGroup);
  if (localWords.length === 0) return null;
  const index = weekNumber % localWords.length;
  return localEntryToWordRow(localWords[index], index);
}
