import { describe, it, expect } from "vitest";
import { HAFTEN } from "../index";
import { arRatt, arRattMening, tolkaRad, utskriftsText, facitText } from "../typer";
import { hamtaFeltyp } from "@/lib/aterkoppling/feltyper";

describe("tolkaRad", () => {
  it("tolkar val med ett rätt alternativ", () => {
    const u = tolkaRad("Jag ser {*en|ett} hund.", "val", "x");
    expect(u.typ).toBe("val");
    if (u.typ === "ratta") return;
    expect(u.bitar).toEqual(["Jag ser ", { svar: ["en"], alternativ: ["en", "ett"] }, " hund."]);
    expect(utskriftsText(u)).toBe("Jag ser ____ (en / ett) hund.");
    expect(facitText(u)).toBe("Jag ser en hund.");
  });

  it("tolkar skriv med ledtråd och flera godkända svar", () => {
    const u = tolkaRad("Igår {sprang} jag. (springa)", "skriv", "x");
    if (u.typ === "ratta") throw new Error();
    expect(u.ledtrad).toBe("springa");
    const v = tolkaRad("{De/Dom} kom hem.", "skriv", "y");
    if (v.typ === "ratta") throw new Error();
    expect(v.bitar[0]).toEqual({ svar: ["De", "Dom"] });
  });

  it("kräver exakt ett rätt alternativ", () => {
    expect(() => tolkaRad("{en|ett} hund", "val", "x")).toThrow();
    expect(() => tolkaRad("utan lucka", "val", "x")).toThrow();
  });

  it("rättar tolerant men noga", () => {
    expect(arRatt(" Bilen ", ["bilen"], false)).toBe(true);
    expect(arRatt("Bilen", ["bilen"], true)).toBe(false);
    expect(arRattMening("- Hej, sa hon.", ["– Hej, sa hon."])).toBe(true);
    expect(arRattMening("igår åt vi glass.", ["Igår åt vi glass."])).toBe(false);
  });
});

describe("alla häften", () => {
  it("har unika id:n", () => {
    const ids = HAFTEN.map((h) => h.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  for (const h of HAFTEN) {
    it(`${h.id}: minst 100 uppgifter, kända feltyper, inga dubbletter`, () => {
      expect(h.antalUppgifter).toBeGreaterThanOrEqual(100);
      for (const f of h.feltyper) expect(hamtaFeltyp(f), f).toBeDefined();
      for (const d of h.delar) {
        const texter = d.uppgifter.map((u) => (u.typ === "ratta" ? u.fel : utskriftsText(u)));
        expect(new Set(texter).size, `dubbletter i ${d.rubrik}`).toBe(texter.length);
        // Rätta-uppgifter måste faktiskt innehålla ett fel.
        for (const u of d.uppgifter) if (u.typ === "ratta") expect(u.ratt).not.toContain(u.fel);
      }
    });
  }
});
