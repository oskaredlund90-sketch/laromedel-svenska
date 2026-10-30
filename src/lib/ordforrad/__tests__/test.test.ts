import { describe, it, expect } from "vitest";
import { skapaFraga, nastaNiva, uppskatta, type Testord, type Svar } from "../test";

const bank: Testord[] = [];
for (let n = 1; n <= 12; n++)
  for (let i = 0; i < 6; i++) bank.push({ ord: `ord${n}-${i}`, ordklass: i % 2 ? "verb" : "adjektiv", forklaring: `förklaring ${n}-${i}`, niva: n });

function slump(fro: number) {
  let s = fro;
  return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
}

describe("ordförrådstest", () => {
  it("skapar en fråga med fyra unika alternativ och rätt index", () => {
    const f = skapaFraga(bank, 5, new Set(), slump(1))!;
    expect(f.alternativ).toHaveLength(4);
    expect(new Set(f.alternativ).size).toBe(4);
    expect(f.alternativ[f.ratt]).toBe(f.ord.forklaring);
    expect(f.ord.niva).toBe(5);
  });

  it("använder inte samma ord två gånger", () => {
    const anv = new Set(bank.filter((o) => o.niva === 3).map((o) => o.ord).slice(0, 5));
    const f = skapaFraga(bank, 3, anv, slump(2))!;
    expect(anv.has(f.ord.ord)).toBe(false);
  });

  it("går upp vid rätt och ner vid fel, inom gränserna", () => {
    expect(nastaNiva(5, true)).toBe(6);
    expect(nastaNiva(1, false)).toBe(1);
    expect(nastaNiva(12, true)).toBe(12);
  });

  it("uppskattar nivån där eleven har de flesta rätt", () => {
    const svar: Svar[] = [];
    for (let n = 4; n <= 9; n++) {
      for (let k = 0; k < 2; k++) {
        const f = skapaFraga(bank, n, new Set(svar.map((s) => s.fraga.ord.ord)), slump(n * 10 + k))!;
        svar.push({ fraga: f, val: n <= 7 ? f.ratt : -1 });
      }
    }
    const r = uppskatta(svar);
    expect(r.niva).toBe(7);
    expect(r.missade).toHaveLength(4);
  });
});
