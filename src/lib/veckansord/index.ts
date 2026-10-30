import { tolka, type Arskursord } from "./typer";
import ak1 from "./data/ak1";
import ak2 from "./data/ak2";
import ak3 from "./data/ak3";
import ak4 from "./data/ak4";
import ak5 from "./data/ak5";
import ak6 from "./data/ak6";
import ak7 from "./data/ak7";
import ak8 from "./data/ak8";
import ak9 from "./data/ak9";
import gy1 from "./data/gy1";
import gy2 from "./data/gy2";
import gy3 from "./data/gy3";

const KALLOR = [ak1, ak2, ak3, ak4, ak5, ak6, ak7, ak8, ak9, gy1, gy2, gy3];

/** Ordlistor för årskurs 1–9 och gymnasiet 1–3 (arskurs 10–12). */
export const ARSKURSORD: Arskursord[] = KALLOR.map((text, i) => tolka(i + 1, text));

export function hamtaArskurs(arskurs: number): Arskursord | undefined {
  return ARSKURSORD.find((a) => a.arskurs === arskurs);
}
