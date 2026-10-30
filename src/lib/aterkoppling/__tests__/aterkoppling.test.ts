import { describe, it, expect } from "vitest";
import { lasbarhetsprofil, delaIMeningar } from "../lasbarhet";
import { FELTYPER, ovningsHref, stadieForArskurs } from "../feltyper";
import { placeraKommentarer, delaISegment, type Aterkoppling } from "../typer";
import { packa, packaUpp } from "../kodning";
import { allaSynonymer, synonymForslag } from "../synonymer";

describe("lasbarhetsprofil", () => {
  it("räknar LIX som meningslängd + andel långa ord", () => {
    // 10 ord, 2 meningar, 2 långa ord (> 6 bokstäver): 5 + 20 = 25
    const p = lasbarhetsprofil("Jag har en fotboll. Vi spelar på eftermiddagen ute idag.", 5);
    expect(p.antalOrd).toBe(10);
    expect(p.antalMeningar).toBe(2);
    expect(p.lix).toBe(25);
  });

  it("flaggar långa meningar utan punkt", () => {
    const text = Array.from({ length: 40 }, () => "och sen").join(" ");
    const p = lasbarhetsprofil(text, 3);
    expect(p.langaMeningar).toBe(1);
    expect(p.bedomning.meningslangd).toBe("over");
  });

  it("delar på stycken även utan skiljetecken", () => {
    expect(delaIMeningar("Rubrik\n\nDet var en gång en katt.")).toHaveLength(2);
  });
});

describe("feltyper", () => {
  it("har unika id:n och minst en övning var", () => {
    const ids = FELTYPER.map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const f of FELTYPER) expect(f.ovningar.length).toBeGreaterThan(0);
  });

  it("faller tillbaka till närmaste stadie som har övningen", () => {
    const stavning = { sokvag: "grammatik/stavning", titel: "", stadier: ["mellanstadiet", "hogstadiet"] as const };
    expect(ovningsHref({ ...stavning, stadier: [...stavning.stadier] }, "lagstadiet")).toBe("/mellanstadiet/grammatik/stavning");
    expect(ovningsHref({ ...stavning, stadier: [...stavning.stadier] }, "hogstadiet")).toBe("/hogstadiet/grammatik/stavning");
    expect(stadieForArskurs(10)).toBe("gymnasiet");
  });
});

describe("kommentarer", () => {
  it("placerar rätt förekomst och hoppar över överlapp", () => {
    const text = "Vi åt glas. Sen åt vi glas igen.";
    const { placerade, saknas } = placeraKommentarer(text, [
      { citat: "glas", forekomst: 2, kommentar: "glass" },
      { citat: "glas igen", kommentar: "överlapp" },
      { citat: "finns inte", kommentar: "x" },
    ]);
    expect(placerade).toHaveLength(1);
    expect(placerade[0].start).toBe(text.lastIndexOf("glas"));
    expect(saknas).toHaveLength(2);
    expect(delaISegment(text, placerade).map((s) => s.text).join("")).toBe(text);
  });
});

describe("kodning", () => {
  it("packar och packar upp med å, ä och ö", async () => {
    const a: Aterkoppling = {
      v: 1,
      arskurs: 4,
      text: "Det var en gång en räv som åt öl.",
      kommentarer: [{ citat: "räv", kommentar: "Bra ordval!" }],
      bra: [{ omrade: "innehall", text: "Spännande början." }],
      nasta: [{ omrade: "sprak", text: "Dubbelteckning", typ: "stavning.dubbelteckning" }],
    };
    const kod = await packa(a);
    expect(kod).toMatch(/^1\.[A-Za-z0-9_-]+$/);
    expect(await packaUpp("#" + kod)).toEqual(a);
  });
});

describe("synonymer", () => {
  const text = "Det var bra. Maten var bra och filmen var bra. Han sa hej. Hon sa nej. Jag sa ok. Det var jättekul och jättebra.";
  it("hittar överanvända ord med förslag efter ålder", () => {
    const s = synonymForslag(text, 4);
    expect(s.map((x) => x.ord)).toEqual(expect.arrayContaining(["bra", "sa", "jätte-"]));
    expect(s.find((x) => x.ord === "bra")!.antal).toBe(3);
    expect(synonymForslag(text, 8).find((x) => x.ord === "sa")!.forslag).toContain("utbrast");
  });
  it("visar lärarens egna förslag först", () => {
    const s = allaSynonymer(text, 4, [{ ord: "bra", forslag: ["toppen"] }]);
    expect(s[0]).toEqual({ ord: "bra", antal: 3, forslag: ["toppen"] });
    expect(s.filter((x) => x.ord === "bra")).toHaveLength(1);
  });
});
