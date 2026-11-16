import type { NextRequest } from "next/server";
import { AMNEN_PER_STADIUM, type GrammatikAmne } from "@/lib/grammatik/amnen";
import type { AgeGroup } from "@/lib/supabase/types";

/**
 * Grammatikboken som PDF – exakt det urval som är valt på boksidan (version,
 * kapitel, övningshäften). Sidan skrivs ut med en headless Chromium på servern
 * och svaret cachas i CDN:en, så varje urval skapas bara en gång per version av sajten.
 *
 *   /api/bok-pdf?stadie=hogstadiet&version=larare&kapitel=ordklasser&haften=1
 */
export const runtime = "nodejs";
export const maxDuration = 60;

const STADIER: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];
const LOKAL_CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function startaWebblasare() {
  const puppeteer = (await import("puppeteer-core")).default;
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    const chromium = (await import("@sparticuz/chromium")).default;
    return puppeteer.launch({ args: chromium.args, executablePath: await chromium.executablePath(), headless: true });
  }
  return puppeteer.launch({ executablePath: LOKAL_CHROME, headless: true });
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const stadie = q.get("stadie") as AgeGroup;
  if (!STADIER.includes(stadie)) return new Response("Okänt stadium", { status: 400 });
  const larare = q.get("version") === "larare";
  const kapitel = q.get("kapitel");
  if (kapitel && !AMNEN_PER_STADIUM[stadie].includes(kapitel as GrammatikAmne)) return new Response("Okänt kapitel", { status: 400 });
  const haften = q.get("haften");
  if (haften && haften !== "1" && haften !== "bara") return new Response("Okänt val", { status: 400 });

  const sok = new URLSearchParams();
  if (larare) sok.set("version", "larare");
  if (kapitel) sok.set("kapitel", kapitel);
  if (haften) sok.set("haften", haften);
  const url = `${req.nextUrl.origin}/${stadie}/grammatik/bok${sok.size ? `?${sok}` : ""}`;

  const namn = ["grammatik", stadie, haften === "bara" ? "ovningshaften" : null, kapitel, larare ? "larare" : "elev", haften === "1" ? "med-haften" : null]
    .filter(Boolean)
    .join("-");

  const webblasare = await startaWebblasare();
  try {
    const sida = await webblasare.newPage();
    await sida.goto(url, { waitUntil: "networkidle0", timeout: 45_000 });
    await sida.emulateMediaType("print");
    // Symboltypsnitten laddas först när ett tecken behöver dem – vänta in dem.
    await sida.evaluate(() => document.fonts.ready);
    const pdf = await sida.pdf({ preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
    return new Response(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${namn}.pdf"`,
        "Cache-Control": "public, max-age=0, must-revalidate, s-maxage=31536000",
      },
    });
  } catch (fel) {
    console.error("bok-pdf", url, fel);
    return new Response("Det gick inte att skapa PDF:en. Försök igen, eller använd Skriv ut → Spara som PDF.", { status: 500 });
  } finally {
    await webblasare.close();
  }
}
