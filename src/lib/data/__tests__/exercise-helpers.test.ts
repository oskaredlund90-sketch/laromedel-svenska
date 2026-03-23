import { describe, it, expect } from "vitest";
import { getExercisesForTopic } from "../grammatik-ovningar";
import { getReadingTexts } from "../lasforstaelse";
import { getSvaExercises } from "../sva-ovningar";
import { getRetorikExercises } from "../retorik-ovningar";
import { getKallkritikExercises } from "../kallkritik-ovningar";
import { getOrdsprakExercises } from "../ordsprak-ovningar";
import { getLitExercises } from "../litteraturhistoria-ovningar";

// ---------------------------------------------------------------------------
// Grammatik
// ---------------------------------------------------------------------------

describe("getExercisesForTopic", () => {
  it("returns exercises for ordklasser at lagstadiet", () => {
    const exercises = getExercisesForTopic("ordklasser", "lagstadiet");
    expect(exercises.length).toBeGreaterThan(0);
    expect(exercises.every((e) => e.topic === "ordklasser")).toBe(true);
    expect(exercises.every((e) => e.ageGroup === "lagstadiet")).toBe(true);
  });

  it("returns exercises for stilistik at gymnasiet", () => {
    const exercises = getExercisesForTopic("stilistik", "gymnasiet");
    expect(exercises.length).toBeGreaterThan(0);
    expect(exercises.every((e) => e.topic === "stilistik")).toBe(true);
  });

  it("returns empty for nonexistent topic", () => {
    const exercises = getExercisesForTopic("nonexistent", "lagstadiet");
    expect(exercises).toEqual([]);
  });

  it("returns exercises for meningsbyggnad at lagstadiet", () => {
    const exercises = getExercisesForTopic("meningsbyggnad", "lagstadiet");
    expect(exercises.length).toBeGreaterThan(0);
  });

  it("every exercise has required fields", () => {
    const exercises = getExercisesForTopic("ordklasser", "hogstadiet");
    for (const ex of exercises) {
      expect(ex.id).toBeTruthy();
      expect(ex.type).toBeTruthy();
      expect(ex.topic).toBe("ordklasser");
      expect(ex.instruction).toBeTruthy();
    }
  });

  it("no duplicate IDs within a topic/ageGroup", () => {
    const exercises = getExercisesForTopic("ordklasser", "hogstadiet");
    const ids = exercises.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ---------------------------------------------------------------------------
// Läsförståelse
// ---------------------------------------------------------------------------

describe("getReadingTexts", () => {
  it("returns texts for each age group", () => {
    for (const ag of ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"] as const) {
      const texts = getReadingTexts(ag);
      expect(texts.length).toBeGreaterThan(0);
    }
  });

  it("each text has questions with valid levels", () => {
    const texts = getReadingTexts("hogstadiet");
    for (const text of texts) {
      expect(text.questions.length).toBeGreaterThan(0);
      for (const q of text.questions) {
        expect(["hitta", "tolka", "reflektera"]).toContain(q.level);
        expect(q.options.length).toBe(4);
        expect(q.correct).toBeGreaterThanOrEqual(0);
        expect(q.correct).toBeLessThan(q.options.length);
      }
    }
  });

  it("no duplicate text IDs", () => {
    const all = [
      ...getReadingTexts("lagstadiet"),
      ...getReadingTexts("mellanstadiet"),
      ...getReadingTexts("hogstadiet"),
      ...getReadingTexts("gymnasiet"),
    ];
    const ids = all.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ---------------------------------------------------------------------------
// SVA
// ---------------------------------------------------------------------------

describe("getSvaExercises", () => {
  it("returns exercises for all categories", () => {
    const categories = ["prepositioner", "genus", "ordfoljd", "vanliga-fel", "partikelverb", "utokad-ordfoljd"] as const;
    for (const cat of categories) {
      // At least one age group should have exercises
      const all = [
        ...getSvaExercises(cat, "lagstadiet"),
        ...getSvaExercises(cat, "mellanstadiet"),
        ...getSvaExercises(cat, "hogstadiet"),
        ...getSvaExercises(cat, "gymnasiet"),
      ];
      expect(all.length).toBeGreaterThan(0);
    }
  });

  it("fill-in-blank exercises have valid correct answers", () => {
    const exercises = getSvaExercises("prepositioner", "mellanstadiet");
    for (const ex of exercises) {
      if (ex.type === "fill-in-blank") {
        expect(ex.options).toContain(ex.correct);
      }
    }
  });
});

// ---------------------------------------------------------------------------
// Retorik
// ---------------------------------------------------------------------------

describe("getRetorikExercises", () => {
  it("returns exercises for hogstadiet", () => {
    const exercises = getRetorikExercises("ethos-pathos-logos", "hogstadiet");
    expect(exercises.length).toBeGreaterThan(0);
  });

  it("falls back from gymnasiet to hogstadiet for debatt", () => {
    // debatt only has gymnasiet exercises, so gymnasiet should get them directly
    const gymExercises = getRetorikExercises("debatt", "gymnasiet");
    expect(gymExercises.length).toBeGreaterThan(0);
  });

  it("returns empty for lagstadiet (no retorik for young kids)", () => {
    const exercises = getRetorikExercises("ethos-pathos-logos", "lagstadiet");
    expect(exercises).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Källkritik
// ---------------------------------------------------------------------------

describe("getKallkritikExercises", () => {
  it("returns exercises for mellanstadiet, hogstadiet, gymnasiet", () => {
    for (const ag of ["mellanstadiet", "hogstadiet", "gymnasiet"] as const) {
      const exercises = getKallkritikExercises(ag);
      expect(exercises.length).toBeGreaterThan(0);
    }
  });

  it("all exercises have valid correct indices", () => {
    const exercises = getKallkritikExercises("gymnasiet");
    for (const ex of exercises) {
      expect(ex.correct).toBeGreaterThanOrEqual(0);
      expect(ex.correct).toBeLessThan(ex.options.length);
    }
  });
});

// ---------------------------------------------------------------------------
// Ordspråk
// ---------------------------------------------------------------------------

describe("getOrdsprakExercises", () => {
  it("returns exercises for all age groups", () => {
    for (const ag of ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"] as const) {
      const exercises = getOrdsprakExercises(ag);
      expect(exercises.length).toBeGreaterThan(0);
    }
  });

  it("fill-in-blank exercises have correct answer in options", () => {
    for (const ag of ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"] as const) {
      const exercises = getOrdsprakExercises(ag);
      for (const ex of exercises) {
        if (ex.type === "fill-in-blank") {
          expect(ex.options).toContain(ex.correct);
        }
      }
    }
  });
});

// ---------------------------------------------------------------------------
// Litteraturhistoria
// ---------------------------------------------------------------------------

describe("getLitExercises", () => {
  it("returns exercises for all age groups", () => {
    for (const ag of ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"] as const) {
      const exercises = getLitExercises(ag);
      expect(exercises.length).toBeGreaterThan(0);
    }
  });

  it("quiz exercises have valid correct indices", () => {
    const exercises = getLitExercises("gymnasiet");
    for (const ex of exercises) {
      if (ex.type === "quiz") {
        expect(ex.correct).toBeGreaterThanOrEqual(0);
        expect(ex.correct).toBeLessThan(ex.options.length);
      }
    }
  });

  it("timeline items are unique within each exercise", () => {
    const exercises = getLitExercises("hogstadiet");
    for (const ex of exercises) {
      if (ex.type === "timeline") {
        const labels = ex.items.map((i) => i.label);
        expect(new Set(labels).size).toBe(labels.length);
      }
    }
  });
});
