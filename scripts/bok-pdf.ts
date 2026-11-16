/**
 * Skapar grammatikboken som PDF (elevbok och lärarbok per stadium) i public/pdf
 * och sidnummer till innehållsförteckningen i src/lib/grammatik/sidnummer.json.
 *
 *   1. Bygg och starta sajten:  npm run build && npx next start -p 3123
 *   2. Kör:                      npm run bok:pdf -- http://localhost:3123
 *
 * Varje bok skrivs ut två gånger med Chrome: första gången för att se var
 * kapitlen hamnar, andra gången med sidnumren i innehållsförteckningen.
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import type { AgeGroup } from "@/lib/supabase/types";
import { AMNEN_PER_STADIUM, delarForStadium } from "@/lib/grammatik/amnen";

const BAS = process.argv[2] ?? "http://localhost:3000";
const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const STADIER: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];
const tmp = mkdtempSync(path.join(tmpdir(), "bok-pdf-"));

function skrivUt(url: string, fil: string) {
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=10000", `--print-to-pdf=${fil}`, url], {
    stdio: "ignore",
  });
}

function sidtexter(fil: string): string[] {
  return execFileSync("pdftotext", ["-layout", fil, "-"], { maxBuffer: 1 << 28 }).toString("utf8").split("\f");
}

/** Första sidan (1-baserad) efter `fran` där texten matchar. */
function hitta(sidor: string[], re: RegExp, fran = 2): number | undefined {
  for (let i = fran; i < sidor.length; i++) if (re.test(sidor[i])) return i + 1;
  return undefined;
}

function sidnummer(stadie: AgeGroup, sidor: string[]): Record<string, number> {
  const ut: Record<string, number> = {};
  AMNEN_PER_STADIUM[stadie].forEach((a, i) => {
    const s = hitta(sidor, new RegExp(`—\\s*KAPITEL\\s+${i + 1}\\b`, "i"));
    if (s) ut[a] = s;
  });
  for (const d of delarForStadium(stadie)) {
    const s = hitta(sidor, new RegExp(`Repetition – del ${d.nr}[\\s\\S]*Blandade uppgifter från alla kapitel i delen\\.`));
    if (s) ut[`repetition-${d.nr}`] = s;
  }
  const extra: [string, RegExp][] = [
    ["handledning", /Förslag på arbetsgång per kapitel/],
    ["ordlista", /SLÅ UPP/],
    ["facit", /Numreringen följer övningarna i varje kapitel\./],
    ["prov", /Ett kapitelprov på 20 poäng per kapitel och ett slutprov/],
  ];
  for (const [nyckel, re] of extra) {
    const s = hitta(sidor, re);
    if (s) ut[nyckel] = s;
  }
  return ut;
}

const utmapp = path.join(process.cwd(), "public", "pdf");
mkdirSync(utmapp, { recursive: true });
const jsonFil = path.join(process.cwd(), "src", "lib", "grammatik", "sidnummer.json");
const alla: Record<string, Record<string, number>> = JSON.parse(readFileSync(jsonFil, "utf8"));

for (const stadie of STADIER) {
  for (const version of ["elev", "larare"] as const) {
    const url = `${BAS}/${stadie}/grammatik/bok${version === "larare" ? "?version=larare" : ""}`;
    const forsta = path.join(tmp, `${stadie}-${version}.pdf`);
    skrivUt(url + (version === "larare" ? "&" : "?") + "sidor=e30", forsta); // e30 = {} – utan sparade sidnummer
    const sidor = sidtexter(forsta);
    const karta = sidnummer(stadie, sidor);
    const kod = Buffer.from(JSON.stringify(karta)).toString("base64url");
    const slut = path.join(utmapp, `grammatik-${stadie}-${version}.pdf`);
    skrivUt(`${url}${version === "larare" ? "&" : "?"}sidor=${kod}`, slut);
    alla[`${stadie}-${version}`] = karta;
    const antal = sidtexter(slut).length - 1;
    console.log(`${stadie} ${version}: ${antal} sidor, ${Object.keys(karta).length} sidhänvisningar`);
  }
}

writeFileSync(jsonFil, JSON.stringify(alla, null, 2) + "\n");
console.log("Klart: public/pdf/ och src/lib/grammatik/sidnummer.json");
