import { describe, it, expect } from "vitest";
import { sammanstall, franAterkoppling, type TextAnalys } from "../grupp";

function analys(elev: string, fel: [string, string, string][], extra: Partial<TextAnalys> = {}): TextAnalys {
  return {
    elev,
    arskurs: 5,
    text: "Det var en gång en katt. Den hette Måns och tyckte om fisk.",
    fel: fel.map(([f, ratt, typ]) => ({ fel: f, ratt, typ })),
    styrkor: [],
    nasta: [],
    ...extra,
  };
}

describe("sammanstall", () => {
  const grupp = [
    analys("A", [["komade", "kom", "grammatik.bojning"], ["glas", "glass", "stavning.dubbelteckning"], ["dom", "de", "grammatik.de-dem"]]),
    analys("B", [["Glas", "glass", "stavning.dubbelteckning"], ["glas", "glass", "stavning.dubbelteckning"], ["dom", "de", "grammatik.de-dem"]]),
    analys("C", [["glaas", "glass", "stavning.dubbelteckning"], ["dom", "de", "grammatik.de-dem"], ["komade", "kom", "grammatik.bojning"]]),
    analys("D", [["jätte bra", "jättebra", "stavning.sarskrivning"]]),
  ];

  it("hittar stavfel i fler än 2 texter och slår ihop varianter", () => {
    const s = sammanstall(grupp);
    expect(s.vanligaStavfel).toHaveLength(1);
    const glass = s.vanligaStavfel[0];
    expect(glass.ratt).toBe("glass");
    expect(glass.elever).toEqual(["A", "B", "C"]);
    expect(glass.forekomster).toBe(4);
    expect(glass.varianter).toEqual([
      { fel: "glas", antal: 3 },
      { fel: "glaas", antal: 1 },
    ]);
  });

  it("listar övriga språkfel separat och respekterar gränsen", () => {
    const s = sammanstall(grupp);
    expect(s.vanligaSprakfel.map((f) => f.ratt)).toEqual(["de"]);
    expect(sammanstall(grupp, 2).vanligaSprakfel.map((f) => f.ratt)).toEqual(["de", "kom"]);
  });

  it("räknar feltyper per elev", () => {
    const rad = sammanstall(grupp).feltyper.find((r) => r.typ === "stavning.dubbelteckning")!;
    expect(rad.antalTexter).toBe(3);
    expect(rad.perElev).toEqual({ A: 1, B: 2, C: 1 });
    expect(sammanstall(grupp).feltyper[0].antalTexter).toBe(3);
  });
});

describe("franAterkoppling", () => {
  it("återanvänder kommentarer med typ som fel", () => {
    const t = franAterkoppling(
      {
        aterkoppling: {
          arskurs: 4,
          text: "x",
          kommentarer: [
            { citat: "komade", typ: "grammatik.bojning", forslag: "kom" },
            { citat: "Snyggt", },
          ],
          bra: [],
          nasta: [],
        },
      },
      "fil-1",
    );
    expect(t.elev).toBe("fil-1");
    expect(t.fel).toEqual([{ fel: "komade", ratt: "kom", typ: "grammatik.bojning" }]);
  });
});
