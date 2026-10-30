import { describe, it, expect } from "vitest";
import { skolveckor, isoVecka, aktuellLasarsvecka } from "../lasar";
import { skapaForhor, lucka, csv, blanda } from "../forhor";
import { arskursFranSlug, arskursSlug, kontrollera, tolka, type Vecka } from "../typer";

const INST = { startar: 2026, skolstart: 34, hostlov: 44, sportlov: 9, pasklov: 15 };

describe("läsår", () => {
  it("ger 36 skolveckor utan lovveckor", () => {
    const v = skolveckor(INST);
    expect(v).toHaveLength(36);
    expect(v[0]).toMatchObject({ lasarsvecka: 1, kalendervecka: 34, ar: 2026 });
    const kv = v.map((x) => x.kalendervecka);
    for (const lov of [44, 52, 53, 1, 9, 15]) expect(kv).not.toContain(lov);
    expect(v[35].ar).toBe(2027);
  });

  it("räknar ISO-veckor rätt", () => {
    expect(isoVecka(new Date(2026, 9, 30))).toEqual({ ar: 2026, vecka: 44 });
    expect(isoVecka(new Date(2027, 0, 1))).toEqual({ ar: 2026, vecka: 53 });
  });

  it("hoppar till nästa skolvecka under lov", () => {
    // 30 okt 2026 är höstlov (v44) → nästa skolvecka är v45 = läsårsvecka 11
    expect(aktuellLasarsvecka(INST, new Date(2026, 9, 30))).toBe(11);
  });
});

describe("slugs", () => {
  it("översätter årskurs och slug", () => {
    expect(arskursSlug(5)).toBe("ak5");
    expect(arskursSlug(11)).toBe("gy2");
    expect(arskursFranSlug("gy3")).toBe(12);
    expect(arskursFranSlug("ak10")).toBeUndefined();
  });
});

const VECKA: Vecka = {
  nummer: 3,
  tema: "Känslor",
  ord: [
    { ord: "en förväntan", ordklass: "substantiv", forklaring: "Det man hoppas ska hända.", exempel: "Det fanns en stor förväntan i klassen." },
    { ord: "jämföra", ordklass: "verb", forklaring: "Se likheter och skillnader.", exempel: "Vi jämförde två böcker." },
    { ord: "ta ställning", ordklass: "uttryck", forklaring: "Bestämma vad man tycker.", exempel: "Du måste ta ställning i frågan." },
    { ord: "nyfiken", ordklass: "adjektiv", forklaring: "Vill veta mer.", exempel: "Hon var nyfiken på lådan." },
  ],
};

describe("förhör", () => {
  it("gör lucktext av exemplet, även böjt ord och uttryck", () => {
    expect(lucka(VECKA.ord[1])).toEqual({ fore: "Vi ", svar: "jämförde", efter: " två böcker." });
    expect(lucka(VECKA.ord[2])!.svar).toBe("ta ställning");
  });

  it("ger rätt facit för kopplingen och är deterministiskt", () => {
    const f = skapaForhor(VECKA);
    f.koppla.forklaringar.forEach((fk, i) => {
      const ord = VECKA.ord.find((o) => o.forklaring === fk)!;
      expect(f.koppla.facit[i]).toBe(String.fromCharCode(65 + VECKA.ord.indexOf(ord)));
    });
    expect(skapaForhor(VECKA)).toEqual(f);
    expect(f.luckor).toHaveLength(4);
    expect(f.egnaMeningar).toHaveLength(2);
  });

  it("blandar alltid om ordningen", () => {
    expect(blanda([1, 2], 1)).not.toEqual([1, 2]);
  });

  it("exporterar CSV med citattecken", () => {
    const text = csv({ arskurs: 5, veckor: [VECKA] });
    expect(text).toContain('"Det fanns en stor förväntan i klassen."'.replace(/"/g, "") );
    expect(text.split("\n")[0]).toContain("Läsårsvecka");
  });
});

describe("kontrollera", () => {
  it("hittar fel i en ordlista", () => {
    const a = tolka(1, "## 1 | Skolstart\nhund | substantiv | Ett djur. | Katten jamar.\n");
    const fel = kontrollera(a);
    expect(fel.join("\n")).toContain("36");
    expect(fel.join("\n")).toContain("en/ett");
    expect(fel.join("\n")).toContain("innehåller inte ordet");
  });
});
