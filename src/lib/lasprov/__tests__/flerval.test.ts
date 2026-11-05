import { describe, it, expect } from "vitest";
import { rattAlternativ, samlaAlternativ, valdBokstav, visaAlternativ } from "../flerval";

const FACIT = "Svar: B, egenkär (2p)";

describe("flerval", () => {
  it("läser rätt alternativ ur facit", () => {
    expect(rattAlternativ(FACIT)).toEqual({ bokstav: "B", text: "egenkär" });
    expect(rattAlternativ("Exempelsvar: Han blir rädd. (2p)")).toBeNull();
  });

  it("samlar alternativens text ur gruppens svar", () => {
    const alt = samlaAlternativ(FACIT, ["C: Kärleksfull", "A klok B egenkär - rätt C kärleksfull D hämndlysten", "B"]);
    expect(alt).toEqual({ A: "klok", B: "egenkär", C: "kärleksfull", D: "hämndlysten" });
  });

  it("tolkar elevens val på olika sätt att skriva", () => {
    const alt = { A: "klok", B: "egenkär", C: "kärleksfull", D: "hämndlysten" };
    expect(valdBokstav("B", alt)).toBe("B");
    expect(valdBokstav("d.", alt)).toBe("D");
    expect(valdBokstav("Alternativ C.", alt)).toBe("C");
    expect(valdBokstav("Jag väljer (C) för att …", alt)).toBe("C");
    expect(valdBokstav("Egenkär", alt)).toBe("B");
    expect(valdBokstav("A klok B egenkär - rätt C kärleksfull D hämndlysten", alt)).toBe("B");
    // Två alternativ markerade med frågetecken – går inte att avgöra.
    expect(valdBokstav("A klok B egenkär - rätt? C kärleksfull D hämndlysten - rätt?", alt)).toBeNull();
    expect(visaAlternativ("C", alt)).toBe("C – kärleksfull");
    expect(visaAlternativ("E", alt)).toBe("E");
  });
});
