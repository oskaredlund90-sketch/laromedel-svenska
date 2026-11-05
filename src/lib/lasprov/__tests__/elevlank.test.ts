import { describe, it, expect } from "vitest";
import { forElevlank, nummerspann, summera, type Rattning } from "../typer";

const R: Rattning = {
  v: 1,
  elev: "AB",
  titel: "Prov",
  svar: [
    { nr: 1, formaga: "H", fraga: "Vad heter hon?", elevsvar: "Ali", poang: 2, maxpoang: 2, kommentar: "Rätt." },
    { nr: 2, formaga: "D", fraga: "Varför?", elevsvar: "För att …", poang: 1, maxpoang: 2, kommentar: "Ett exempel saknas." },
    { nr: 3, formaga: "S", fraga: "Vilket ord?", val: "A – klok", ratt: "B – egenkär", poang: 0, maxpoang: 2, kommentar: "Läs igen." },
    { nr: 4, formaga: "G", fraga: "Vad tycker du?", poang: 0, maxpoang: 2, kommentar: "Hann inte." },
  ],
};

describe("elevlänk", () => {
  it("tar bara med det eleven behöver", () => {
    const l = forElevlank(R);
    expect(l.elev).toBeUndefined();
    expect(l.svar[0]).toEqual({ nr: 1, formaga: "H", poang: 2, maxpoang: 2 });
    expect(l.svar[1].fraga).toBe("Varför?");
    expect(l.svar[1].elevsvar).toBeUndefined();
    expect(l.svar[2].val).toBe("A – klok");
    expect(l.svar[2].ratt).toBe("B – egenkär");
    expect(l.svar[3].fraga).toBeUndefined();
    expect(l.svar[3].kommentar).toBe("Hann inte.");
    expect(summera(l)).toEqual(summera(R));
  });

  it("skriver nummer som spann", () => {
    expect(nummerspann([5, 1, 2, 3, 7, 8])).toBe("1–3, 5, 7, 8");
    expect(nummerspann([4])).toBe("4");
  });
});
