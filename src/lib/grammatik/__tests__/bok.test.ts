import { describe, it, expect } from "vitest";
import { AMNEN_PER_STADIUM } from "../amnen";
import { HAFTEN_PER_KAPITEL, haftenForKapitel } from "../bok";
import { getExercisesForTopic } from "@/lib/data/grammatik-ovningar";
import { hamtaHafte } from "@/lib/haften";
import type { AgeGroup } from "@/lib/supabase/types";

describe("grammatikboken", () => {
  for (const [stadie, kapitel] of Object.entries(AMNEN_PER_STADIUM) as [AgeGroup, string[]][]) {
    it(`${stadie}: varje kapitel har övningar och övningshäften`, () => {
      for (const k of kapitel) {
        expect(getExercisesForTopic(k, stadie).length, `${k}: övningar`).toBeGreaterThanOrEqual(8);
        const haften = haftenForKapitel(k as never, stadie);
        const minst = stadie === "lagstadiet" ? 1 : 2;
        expect(haften.length, `${stadie}/${k}: häften`).toBeGreaterThanOrEqual(minst);
      }
    });
  }

  it("alla häften i kopplingen finns och inget kapitel saknas i stadiets lista", () => {
    for (const [stadie, kap] of Object.entries(HAFTEN_PER_KAPITEL) as [AgeGroup, Record<string, string[]>][]) {
      for (const [k, ids] of Object.entries(kap)) {
        expect(AMNEN_PER_STADIUM[stadie], `${stadie}: ${k}`).toContain(k);
        for (const id of ids) expect(hamtaHafte(id), id).toBeDefined();
      }
    }
  });
});
