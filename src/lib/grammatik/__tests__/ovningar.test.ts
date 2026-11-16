import { describe, expect, it } from "vitest";
import { getExercisesForTopic, type GrammarExercise } from "@/lib/data/grammatik-ovningar";
import { ALLA_AMNEN } from "../amnen";

const STADIER = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"] as const;
const alla = new Map<string, GrammarExercise>();
for (const a of ALLA_AMNEN) for (const s of STADIER) for (const e of getExercisesForTopic(a, s)) alla.set(e.id, e);

describe("grammatikövningarna", () => {
  it("rätta-uppgifter har ett verkligt fel som finns i meningen", () => {
    for (const e of alla.values()) {
      if (e.type !== "error-correction") continue;
      expect(e.errorWord, e.id).not.toBe(e.correctWord);
      expect(e.sentence, e.id).toContain(e.errorWord);
    }
  });
  it("flervalsfrågor har unika alternativ och ett giltigt rätt svar", () => {
    for (const e of alla.values()) {
      if (e.type !== "multiple-choice") continue;
      expect(new Set(e.options).size, e.id).toBe(e.options.length);
      expect(e.options[e.correct], e.id).toBeDefined();
    }
  });
  it("luckuppgifter har en lucka och rätt svar bland alternativen", () => {
    for (const e of alla.values()) {
      if (e.type !== "fill-in-blank") continue;
      expect(e.sentence, e.id).toContain("____");
      expect(e.options, e.id).toContain(e.correct);
    }
  });
  it("inga asterisker eller ord utan å, ä och ö i uppgifterna", () => {
    const strippade = /(?<!\p{L})(pa|nar|fran|ocksa|mjolk|kandes|forsenat|battre|varfor)(?!\p{L})/u;
    for (const e of alla.values()) {
      const text = JSON.stringify(e);
      expect(text, e.id).not.toMatch(strippade);
    }
  });
});
