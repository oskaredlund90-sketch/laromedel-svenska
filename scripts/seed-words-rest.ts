/**
 * Seed words to Supabase using REST API.
 *
 * Prerequisites: Temporary RLS policy must be enabled:
 *   CREATE POLICY "allow_anon_insert" ON words FOR INSERT TO anon WITH CHECK (true);
 *   CREATE POLICY "allow_anon_delete" ON words FOR DELETE TO anon USING (true);
 *
 * Run: npx tsx scripts/seed-words-rest.ts
 */

import { VECKANS_ORD } from "../src/lib/data/veckans-ord";

const SUPABASE_URL = "https://syrlyltcqbrvbgruroam.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5cmx5bHRjcWJydmJncnVyb2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2ODMxNjgsImV4cCI6MjA4OTI1OTE2OH0.LKFe2OZdU89Kw5-WeA_OjwkeNG2XZlRWgE7Qn_IuSNw";

const ageGroupCounters: Record<string, number> = {};

const rows = VECKANS_ORD.map((e) => {
  const ag = e.ageGroup;
  if (!ageGroupCounters[ag]) ageGroupCounters[ag] = 0;
  ageGroupCounters[ag]++;
  return {
    word: e.word,
    definition: e.definition,
    word_class: e.wordClass,
    example: e.example,
    etymology: e.etymology || null,
    difficulty: e.difficulty,
    theme: e.theme,
    age_group: ag,
    week_number: ageGroupCounters[ag],
  };
});

async function seed() {
  console.log(`Seeding ${rows.length} words to Supabase...`);

  // Delete existing words first
  console.log("Deleting existing words...");
  const delRes = await fetch(`${SUPABASE_URL}/rest/v1/words?id=gt.0`, {
    method: "DELETE",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
  });

  if (!delRes.ok) {
    // Try alternative delete
    const delRes2 = await fetch(`${SUPABASE_URL}/rest/v1/words?word=neq.NONEXISTENT`, {
      method: "DELETE",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
    });
    if (!delRes2.ok) {
      console.error("Failed to delete existing words:", await delRes2.text());
      console.log("Continuing with insert anyway...");
    }
  }
  console.log("Deleted existing words.");

  // Insert in batches of 50
  const batchSize = 50;
  let inserted = 0;

  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);
    const res = await fetch(`${SUPABASE_URL}/rest/v1/words`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(batch),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`Batch ${i / batchSize + 1} failed:`, text);
      // Try individual inserts for this batch
      for (const row of batch) {
        const singleRes = await fetch(`${SUPABASE_URL}/rest/v1/words`, {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify(row),
        });
        if (singleRes.ok) {
          inserted++;
        } else {
          console.error(`  Failed to insert "${row.word}":`, await singleRes.text());
        }
      }
    } else {
      inserted += batch.length;
    }
    console.log(`  Inserted ${inserted}/${rows.length}`);
  }

  // Verify
  const countRes = await fetch(`${SUPABASE_URL}/rest/v1/words?select=count`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      Prefer: "count=exact",
    },
  });
  const countHeader = countRes.headers.get("content-range");
  console.log(`\nDone! Content-Range: ${countHeader}`);
  console.log(`Inserted ${inserted} words total.`);
}

seed().catch(console.error);
