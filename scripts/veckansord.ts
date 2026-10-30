/**
 * Kontrollerar ordlistorna för veckans ord.
 *
 *   npm run veckansord -- kontrollera <ak1…ak9|gy1…gy3>   (en årskurs)
 *   npm run veckansord -- kontrollera alla
 */

import { existsSync } from "node:fs";
import { join } from "node:path";
import { arskursFranSlug, arskursSlug, grundord, kontrollera, tolka } from "../src/lib/veckansord/typer";

const ALLA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

async function kontrolleraEn(arskurs: number): Promise<string[]> {
  const slug = arskursSlug(arskurs);
  const fil = join(__dirname, "../src/lib/veckansord/data", `${slug}.ts`);
  if (!existsSync(fil)) return [`${slug}: filen saknas`];
  const text: string = (await import(fil)).default;
  try {
    return kontrollera(tolka(arskurs, text)).map((f) => `${slug}: ${f}`);
  } catch (e) {
    return [`${slug}: ${(e as Error).message}`];
  }
}

async function main() {
  const [kommando, vilken] = process.argv.slice(2);
  if (kommando !== "kontrollera" || !vilken) {
    console.error("Användning: veckansord kontrollera <ak1…ak9|gy1…gy3|alla>");
    process.exit(1);
  }
  const arskurser = vilken === "alla" ? ALLA : [arskursFranSlug(vilken)];
  if (arskurser.some((a) => a === undefined)) {
    console.error(`Okänd årskurs: ${vilken}`);
    process.exit(1);
  }
  const fel = (await Promise.all(arskurser.map((a) => kontrolleraEn(a!)))).flat();

  // Samma ord i flera årskurser inom samma stadium är inte fel, men bra att veta.
  if (vilken === "alla") {
    const stadium = (a: number) => (a <= 3 ? "låg" : a <= 6 ? "mellan" : a <= 9 ? "hög" : "gy");
    const sedda = new Map<string, { arskurs: number; kategori: string }>();
    for (const a of ALLA) {
      const slug = arskursSlug(a);
      const fil = join(__dirname, "../src/lib/veckansord/data", `${slug}.ts`);
      if (!existsSync(fil)) continue;
      for (const v of tolka(a, (await import(fil)).default).veckor)
        for (const o of v.ord) {
          // Vanliga stavningsord får återkomma i flera årskurser.
          if (o.kategori === "stavning") continue;
          const k = `${stadium(a)}:${grundord(o.ord).toLowerCase()}`;
          const forst = sedda.get(k);
          // Ämnesord får återkomma i flera årskurser (begreppen fördjupas) – temaord ska inte upprepas.
          if (forst && !(forst.kategori === "amne" && o.kategori === "amne")) {
            console.log(`OBS: "${o.ord}" finns i både ${arskursSlug(forst.arskurs)} och ${slug}`);
          } else if (!forst) sedda.set(k, { arskurs: a, kategori: o.kategori });
        }
    }
  }

  if (fel.length) {
    console.log(fel.join("\n"));
    process.exit(1);
  }
  console.log("OK");
}

void main();
