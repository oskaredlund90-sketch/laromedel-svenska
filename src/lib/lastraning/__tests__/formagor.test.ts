import { describe, it, expect } from "vitest";
import { nivaFor, valjTesttexter, ordPerMinut, raknaOrd, lasplan, MINUTER } from "../formagor";
import { getReadingTexts } from "@/lib/data/lasforstaelse";

describe("nivaFor", () => {
  it("delar in i tre nivåer", () => {
    expect(nivaFor(4, 5)).toBe("saker");
    expect(nivaFor(2, 4)).toBe("pagang");
    expect(nivaFor(1, 4)).toBe("trana");
  });
});

describe("valjTesttexter", () => {
  it("ger minst tre frågor per förmåga i varje stadie", () => {
    for (const stadie of ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"] as const) {
      for (let i = 0; i < 20; i++) {
        const valda = valjTesttexter(getReadingTexts(stadie));
        const qs = valda.flatMap((t) => t.questions);
        expect(valda.length).toBeGreaterThanOrEqual(2);
        expect(valda.length).toBeLessThanOrEqual(4);
        for (const niva of ["hitta", "tolka", "reflektera"]) {
          expect(qs.filter((q) => q.level === niva).length, `${stadie} ${niva}`).toBeGreaterThanOrEqual(3);
        }
      }
    }
  });
});

describe("hastighet", () => {
  it("räknar ord och ord per minut", () => {
    expect(raknaOrd("Det var en gång en räv – som hette Mons-Olle.")).toBe(9);
    expect(ordPerMinut(150, 60000)).toBe(150);
    expect(ordPerMinut(100, 30000)).toBe(200);
  });
});

describe("lasplan", () => {
  it("har sex veckor och minuter för varje vecka", () => {
    expect(lasplan("mellanstadiet")).toHaveLength(6);
    for (const m of Object.values(MINUTER)) expect(m).toHaveLength(6);
  });
});
