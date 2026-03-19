/**
 * Seed script: Upload Veckans Ord data to Supabase
 *
 * Usage: npx tsx scripts/seed-words.ts
 *
 * Requires NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { resolve } from "path";

// Load .env.local
config({ path: resolve(process.cwd(), ".env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Import word data — we can't use path aliases in scripts, so use relative path
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { VECKANS_ORD } = require("../src/lib/data/veckans-ord");

interface VeckansOrdEntry {
  word: string;
  definition: string;
  wordClass: string;
  example: string;
  etymology?: string;
  difficulty: string;
  theme: string;
  ageGroup: string;
}

async function seed() {
  console.log(`Seeding ${VECKANS_ORD.length} words to Supabase...`);

  // Group words by age group and assign week numbers
  const ageGroupCounters: Record<string, number> = {};

  const rows = VECKANS_ORD.map((entry: VeckansOrdEntry) => {
    const ag = entry.ageGroup;
    if (!ageGroupCounters[ag]) ageGroupCounters[ag] = 0;
    ageGroupCounters[ag]++;
    const weekNumber = ageGroupCounters[ag]; // 1, 2, 3, ... per age group

    return {
      word: entry.word,
      definition: entry.definition,
      word_class: entry.wordClass,
      example: entry.example,
      etymology: entry.etymology ?? null,
      difficulty: entry.difficulty,
      theme: entry.theme,
      age_group: ag,
      week_number: weekNumber,
    };
  });

  // Log stats
  console.log("Words per age group:");
  Object.entries(ageGroupCounters).forEach(([ag, count]) => {
    console.log(`  ${ag}: ${count} words`);
  });

  // Upsert in batches of 50
  const BATCH_SIZE = 50;
  let inserted = 0;
  let errors = 0;

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);

    const { error } = await supabase
      .from("words")
      .upsert(batch, { onConflict: "word,age_group,week_number" });

    if (error) {
      console.error(`Error upserting batch ${i / BATCH_SIZE + 1}:`, error.message);
      errors++;
    } else {
      inserted += batch.length;
    }
  }

  console.log(`\nDone! Inserted/updated ${inserted} words. Errors: ${errors}`);

  // Verify
  const { data, error: countError } = await supabase
    .from("words")
    .select("age_group, theme", { count: "exact" });

  if (!countError && data) {
    console.log(`\nTotal words in Supabase: ${data.length}`);

    // Count themes
    const themeCount = new Map<string, number>();
    data.forEach((row: { theme: string }) => {
      themeCount.set(row.theme, (themeCount.get(row.theme) || 0) + 1);
    });
    console.log("Words per theme:");
    themeCount.forEach((count, theme) => {
      console.log(`  ${theme}: ${count}`);
    });
  }
}

seed().catch(console.error);
