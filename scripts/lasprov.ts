/**
 * Lärarskript för /lasprov – läsförståelse med öppna frågor som rättas mot facit.
 * Facit ligger bara lokalt: lararrum/lasforstaelse/facit/steg*.json
 * (skapas från förlagets PDF med kommandot `facit`).
 *
 *   npm run lasprov -- facit                 Tolka facit-PDF:erna (steg1–3) till JSON
 *   npm run lasprov -- texter                Lista alla texter med id
 *   npm run lasprov -- fragor <textId>       Frågor + facit för en text (för rättningen)
 *   npm run lasprov -- mall <textId>         Svarsmall för eleverna (HTML → Google Dokument)
 *   npm run lasprov -- digiexam <pdf> <gruppmapp> [starttext]
 *                                            Dela upp en DigiExam-export per elev och text
 *   npm run lasprov -- bygg <gruppmapp>      Elevlänkar, rapporter, gruppöversikt, Drive-filer
 *
 * Gruppmappen: lararrum/lasprov/<grupp>/ med elevernas svar i svar/ och
 * Claudes rättningar i rattning/<alias>.json.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { LASFORMAGOR, LASRESULTAT_PREFIX, nivaFor, perText, summera, tolkaFacit, type Lasformaga, type Lastext, type Rattning } from "../src/lib/lasprov/typer";
import { packaJson } from "../src/lib/aterkoppling/kodning";
import { BAS_CSS, BAS_URL, KOPIERA_JS, esc } from "./html";

const FACIT = "lararrum/lasforstaelse/facit";

function fel(msg: string): never {
  console.error(`Fel: ${msg}`);
  process.exit(1);
}

function allaTexter(): Lastext[] {
  const filer = existsSync(FACIT) ? readdirSync(FACIT).filter((f) => /^steg\d\.json$/.test(f)).sort() : [];
  if (!filer.length) fel(`Inget facit i ${FACIT}. Kör först: npm run lasprov -- facit`);
  return filer.flatMap((f) => JSON.parse(readFileSync(join(FACIT, f), "utf8")) as Lastext[]);
}

function hamtaText(id: string): Lastext {
  return allaTexter().find((t) => t.id === id) ?? fel(`Okänd text: ${id}. Se npm run lasprov -- texter`);
}

function facit() {
  for (const pdf of readdirSync(FACIT).filter((f) => /^steg\d-facit\.pdf$/.test(f))) {
    const steg = pdf.replace("-facit.pdf", "");
    const txt = join(FACIT, `${steg}.txt`);
    execFileSync("pdftotext", ["-layout", join(FACIT, pdf), txt]);
    const texter = tolkaFacit(readFileSync(txt, "utf8"), steg);
    writeFileSync(join(FACIT, `${steg}.json`), JSON.stringify(texter, null, 2));
    console.log(`${steg}: ${texter.length} texter, ${texter.reduce((n, t) => n + t.fragor.length, 0)} frågor`);
  }
}

function mall(id: string) {
  const t = hamtaText(id);
  const dir = "lararrum/lasforstaelse/mallar";
  mkdirSync(dir, { recursive: true });
  const fil = join(dir, `${id}.html`);
  writeFileSync(
    fil,
    `<html><head><meta charset="utf-8"></head><body>
<h1>${esc(t.titel)}</h1>
<p>Namn: ______________________ &nbsp; Klass: ________</p>
<p><i>Svara under varje fråga. Skriv hela meningar och använd texten när du svarar.</i></p>
${t.fragor.map((f) => `<p><b>${f.nr}. ${esc(f.fraga)}</b> (${f.maxpoang} p)</p><p>Svar: </p><p>&nbsp;</p>`).join("\n")}
</body></html>`,
  );
  console.log(JSON.stringify({ mall: fil, titel: t.titel, fragor: t.fragor.length, maxpoang: t.fragor.reduce((n, f) => n + f.maxpoang, 0) }, null, 2));
}

/** Det Claude skriver per elev. Förmåga, maxpoäng och frågetext fylls i från facit. */
interface TextSvar {
  textId: string;
  svar: { nr: number; poang: number; kommentar?: string }[];
}

interface Underlag {
  elev: string;
  /** Provets namn när eleven svarat på flera texter, t.ex. "Läsförståelse Steg 1". */
  prov?: string;
  /** En text … */
  textId?: string;
  svar?: TextSvar["svar"];
  /** … eller flera texter i ordning. */
  texter?: TextSvar[];
  arskurs?: number;
  helhet?: string;
  larare?: string;
  unikum?: string;
  lararanteckning?: string;
}

interface Bygge {
  u: Underlag;
  r: Rattning;
  lank: string;
  summa: ReturnType<typeof summera>;
  rapport: string;
  /** Frågor eleven inte hann till (räknas inte). */
  ejNadda: number;
}

async function byggElev(fil: string, problem: string[]): Promise<Bygge | null> {
  const u: Underlag = JSON.parse(readFileSync(fil, "utf8"));
  const delar: TextSvar[] = u.texter ?? (u.textId && u.svar ? [{ textId: u.textId, svar: u.svar }] : []);
  if (!delar.length) {
    problem.push(`${basename(fil)}: saknar textId/svar eller texter`);
    return null;
  }
  const flera = delar.length > 1;
  const svar: Rattning["svar"] = [];
  // Elevens egna svar (från `lasprov digiexam`), om de finns.
  const svarsfil = join(dirname(dirname(fil)), "svar", `${u.elev}.json`);
  const elevsvar: { texter: { textId: string; svar: Record<string, string> }[] } | null = existsSync(svarsfil)
    ? JSON.parse(readFileSync(svarsfil, "utf8"))
    : null;
  let ejNadda = 0;
  let steg: string | undefined;
  for (const d of delar) {
    const t = allaTexter().find((x) => x.id === d.textId);
    if (!t) {
      problem.push(`${basename(fil)}: okänd text ${d.textId}`);
      continue;
    }
    steg = t.steg;
    // Maxpoängen gäller hela texten. Frågor efter elevens sista svar har eleven inte hunnit till.
    const sista = Math.max(0, ...d.svar.map((x) => x.nr));
    const egna = elevsvar?.texter.find((x) => x.textId === d.textId)?.svar ?? {};
    for (const f of t.fragor) {
      if (f.nr > sista) ejNadda++;
      const s = d.svar.find((x) => x.nr === f.nr);
      if (s && s.poang > f.maxpoang) problem.push(`${basename(fil)}: ${t.titel} fråga ${f.nr} har ${s.poang} p men max är ${f.maxpoang}`);
      svar.push({
        text: flera ? t.titel : undefined,
        nr: f.nr,
        formaga: f.formaga,
        fraga: f.fraga,
        elevsvar: egna[f.nr] || undefined,
        poang: Math.min(f.maxpoang, Math.max(0, s?.poang ?? 0)),
        maxpoang: f.maxpoang,
        kommentar: s ? s.kommentar : f.nr > sista ? "Hann inte." : "Inget svar.",
      });
    }
  }
  const forstaTitel = allaTexter().find((x) => x.id === delar[0].textId)?.titel ?? "";
  const r: Rattning = {
    v: 1,
    titel: u.prov ?? (flera ? `Läsförståelse – ${delar.length} texter` : forstaTitel),
    steg,
    arskurs: u.arskurs,
    helhet: u.helhet,
    larare: u.larare,
    svar,
  };
  const lank = `${BAS_URL}/lasresultat#${await packaJson(r, LASRESULTAT_PREFIX)}`;
  const summa = summera(r);
  const rapport = fil.replace(/\.json$/, ".html");
  writeFileSync(rapport, elevRapport(u, r, lank, summa, ejNadda));
  return { u, r, lank, summa, rapport, ejNadda };
}

function procent(a: number): string {
  return `${Math.round(a * 100)} %`;
}

function elevRapport(u: Underlag, r: Rattning, lank: string, s: ReturnType<typeof summera>, ejNadda: number): string {
  return `<!doctype html><html lang="sv"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Läsprov – ${esc(u.elev)}</title><style>${BAS_CSS}</style></head><body><main>
<p class="dim">${esc(u.elev)} · ${esc(r.titel)}</p><h1>${s.totalt} av ${s.max} poäng</h1>
${ejNadda ? `<p class="dim">${ejNadda} frågor i slutet hann eleven inte till (0 poäng).</p>` : ""}
<section class="kort"><h2>Per text</h2><table>${perText(r)
    .map((t) => `<tr><td>${esc(t.titel)}</td><td>${t.poang}/${t.maxpoang}</td><td>${procent(t.poang / t.maxpoang)}</td></tr>`)
    .join("")}</table></section>
<section class="grid">
  <div class="kort"><h2>Elevlänk</h2><div class="kopiera"><input id="lank" readonly value="${esc(lank)}"><button onclick="kopiera('lank',this)">Kopiera</button></div>
  <p class="dim" style="font-size:13px"><a href="${esc(lank)}" target="_blank">Öppna som eleven ser den</a></p></div>
  ${u.unikum ? `<div class="kort"><h2>Unikum</h2><div class="kopiera"><textarea id="unikum">${esc(u.unikum)}</textarea><button onclick="kopiera('unikum',this)">Kopiera</button></div></div>` : ""}
</section>
<section class="kort"><h2>Per förmåga</h2><table>${s.perFormaga
    .map((f) => `<tr><td>${LASFORMAGOR[f.formaga].namn}</td><td>${f.poang}/${f.maxpoang}</td><td>${procent(f.andel)}</td></tr>`)
    .join("")}</table></section>
<section class="kort"><h2>Fråga för fråga</h2><table>${r.svar
    .map(
      (x, i, alla) =>
        `${x.text && x.text !== alla[i - 1]?.text ? `<tr><th colspan="3" style="padding-top:18px;font-size:15px;color:inherit">${esc(x.text)}</th></tr>` : ""}<tr><td><b>${x.nr}. ${esc(x.fraga ?? "")}</b>${x.elevsvar ? `<br><i>Elevens svar:</i> ${esc(x.elevsvar)}` : ""}<br><span class="dim">${esc(x.kommentar ?? "")}</span></td><td>${x.formaga}</td><td>${x.poang}/${x.maxpoang}</td></tr>`,
    )
    .join("")}</table></section>
${u.lararanteckning ? `<section class="kort"><h2>Lärarens anteckning</h2><p style="white-space:pre-line">${esc(u.lararanteckning)}</p></section>` : ""}
</main>${KOPIERA_JS}</body></html>`;
}

function gruppRapport(grupp: string, b: Bygge[]): string {
  const formagor = (Object.keys(LASFORMAGOR) as Lasformaga[]).filter((f) => b.some((x) => x.summa.perFormaga.some((p) => p.formaga === f)));
  const andel = (x: Bygge, f: Lasformaga) => x.summa.perFormaga.find((p) => p.formaga === f)?.andel;
  const farg = (a?: number) => (a === undefined ? "" : { trana: "#fde68a", pagang: "#bae6fd", saker: "#a7f3d0" }[nivaFor(a)]);
  // Frågor där gruppen tappade mest poäng
  const perFraga = new Map<string, { fraga: string; formaga: Lasformaga; tappat: number; max: number }>();
  for (const x of b)
    for (const s of x.r.svar) {
      const nyckel = `${s.text ? `${s.text}, fråga ` : ""}${s.nr}`;
      const p = perFraga.get(nyckel) ?? { fraga: s.fraga ?? "", formaga: s.formaga, tappat: 0, max: 0 };
      p.tappat += s.maxpoang - s.poang;
      p.max += s.maxpoang;
      perFraga.set(nyckel, p);
    }
  // Bara frågor som minst två elever har svarat på, så att en enskild elevs miss inte toppar listan.
  const antalSvar = (nyckel: string) =>
    b.filter((x) => x.r.svar.some((s) => `${s.text ? `${s.text}, fråga ` : ""}${s.nr}` === nyckel)).length;
  const svarast = [...perFraga.entries()]
    .filter(([k]) => b.length < 2 || antalSvar(k) >= 2)
    .sort((a, c) => c[1].tappat / c[1].max - a[1].tappat / a[1].max)
    .slice(0, 6);
  const gruppAndel = (f: Lasformaga) => {
    const v = b.map((x) => andel(x, f)).filter((a): a is number => a !== undefined);
    return v.reduce((n, a) => n + a, 0) / Math.max(1, v.length);
  };
  const svagastForGrupp = [...formagor].sort((a, c) => gruppAndel(a) - gruppAndel(c))[0];

  return `<!doctype html><html lang="sv"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Läsprov – ${esc(grupp)}</title><style>${BAS_CSS}</style></head><body><main>
<p class="dim">${esc(b[0]?.r.titel ?? "")} · ${b.length} elever</p><h1>Läsprov – ${esc(grupp)}</h1>
<section class="kort"><h2>Gruppen per förmåga</h2><table><tr><th>Förmåga</th><th>Snitt</th></tr>${formagor
    .map((f) => `<tr><td>${LASFORMAGOR[f].namn}</td><td style="background:${farg(gruppAndel(f))}">${procent(gruppAndel(f))}</td></tr>`)
    .join("")}</table>
${svagastForGrupp ? `<p><b>Mest att träna för gruppen:</b> ${LASFORMAGOR[svagastForGrupp].namn}.</p><ul>${LASFORMAGOR[svagastForGrupp].tips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}</section>
<section class="kort"><h2>Elever</h2><div style="overflow-x:auto"><table><tr><th>Elev</th><th>Poäng</th>${formagor
    .map((f) => `<th>${f}</th>`)
    .join("")}<th></th></tr>${b
    .map(
      (x) =>
        `<tr><td>${esc(x.u.elev)}</td><td>${x.summa.totalt}/${x.summa.max}</td>${formagor
          .map((f) => `<td style="background:${farg(andel(x, f))}">${andel(x, f) === undefined ? "" : procent(andel(x, f)!)}</td>`)
          .join("")}<td><a href="rattning/${esc(basename(x.rapport))}">Rapport</a> · <a href="${esc(x.lank)}" target="_blank">Elevlänk</a></td></tr>`,
    )
    .join("")}</table></div><p class="dim">H = hitta, D = dra slutsatser, S = sammanföra och tolka, G = granska och värdera. Gult = behöver träna, blått = på god väg, grönt = säker.</p></section>
<section class="kort"><h2>Frågor där gruppen tappade mest</h2><ol>${svarast
    .map(([nr, p]) => `<li><b>${esc(nr)}. ${esc(p.fraga)}</b> <span class="dim">(${p.formaga}, ${procent(1 - p.tappat / p.max)} av poängen)</span></li>`)
    .join("")}</ol><p class="dim">Bra att gå igenom tillsammans.</p></section>
</main></body></html>`;
}

function csvCell(s: string | number): string {
  const t = String(s);
  return /[",\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
}

async function bygg(mapp: string) {
  const dir = join(mapp, "rattning");
  if (!existsSync(dir)) fel(`Hittar inte ${dir}.`);
  const problem: string[] = [];
  const byggen = (await Promise.all(readdirSync(dir).filter((f) => f.endsWith(".json")).sort().map((f) => byggElev(join(dir, f), problem)))).filter(
    (x): x is Bygge => x !== null,
  );
  const grupp = basename(mapp);
  const oversikt = join(mapp, "oversikt.html");
  writeFileSync(oversikt, gruppRapport(grupp, byggen));

  const formagor: Lasformaga[] = ["H", "D", "S", "G"];
  const rader = [["Elev", "Text", "Poäng", "Max", ...formagor.map((f) => LASFORMAGOR[f].kort), "Elevlänk", "Unikum"]];
  for (const x of byggen)
    rader.push([
      x.u.elev,
      x.r.titel,
      String(x.summa.totalt),
      String(x.summa.max),
      ...formagor.map((f) => {
        const p = x.summa.perFormaga.find((q) => q.formaga === f);
        return p ? procent(p.andel) : "";
      }),
      x.lank,
      x.u.unikum ?? "",
    ]);
  mkdirSync(join(mapp, "drive"), { recursive: true });
  writeFileSync(join(mapp, "drive", "oversikt.csv"), rader.map((r) => r.map(csvCell).join(",")).join("\n") + "\n");

  console.log(
    JSON.stringify(
      {
        byggda: byggen.length,
        problem,
        oversikt,
        drive: join(mapp, "drive", "oversikt.csv"),
        elever: byggen.map((x) => ({ elev: x.u.elev, poang: `${x.summa.totalt}/${x.summa.max}`, formagor: Object.fromEntries(x.summa.perFormaga.map((p) => [p.formaga, procent(p.andel)])) })),
      },
      null,
      2,
    ),
  );
}

/**
 * Delar upp en DigiExam-export (PDF) per elev och per text. Elevens namn
 * ersätts med initialer. Numreringen som börjar om på 1 = ny text, i den
 * ordning texterna har i häftet (från startText och framåt).
 * Skriver <gruppmapp>/svar/<alias>.json: { elev, texter: [{ textId, svar: { nr: text } }] }.
 */
function digiexam(pdf: string, mapp: string, startText: string) {
  const txt = execFileSync("pdftotext", ["-layout", pdf, "-"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  const alla = allaTexter();
  const start = alla.findIndex((t) => t.id === startText);
  if (start < 0) fel(`Okänd starttext: ${startText}`);
  const elever: { elev: string; texter: { textId: string; svar: Record<number, string> }[] }[] = [];
  let aktuell: (typeof elever)[number] | null = null;
  let iSvar = false;
  let senasteNr = 0;
  let senaste: { svar: Record<number, string> } | null = null;
  let nr = 0;
  for (const rad of txt.split("\n")) {
    const namn = rad.match(/^\s*Fråga\s+1\s{2,}(.+?)\s*$/);
    if (namn) {
      const initialer = namn[1].trim().split(/\s+/).map((d) => d[0]?.toUpperCase() ?? "").join("");
      aktuell = { elev: initialer, texter: [] };
      elever.push(aktuell);
      iSvar = false;
      senasteNr = 0;
      senaste = null;
      continue;
    }
    if (!aktuell) continue;
    if (/^\s*Svar\s*$/.test(rad)) {
      iSvar = true;
      continue;
    }
    if (!iSvar || /Frågan är ej rättad/.test(rad)) continue;
    const m = rad.match(/^\s{0,8}(\d{1,2})\s*[.:]?\s*(?:Svar\s*[:.]\s*)?(.*)$/);
    if (m && Number(m[1]) >= 1 && Number(m[1]) <= 40 && (Number(m[1]) === senasteNr + 1 || Number(m[1]) === 1)) {
      nr = Number(m[1]);
      if (nr === 1 || !senaste) {
        const t = alla[start + aktuell.texter.length];
        if (!t) break;
        senaste = { svar: {} };
        aktuell.texter.push({ textId: t.id, svar: senaste.svar });
      }
      senaste.svar[nr] = m[2].trim();
      senasteNr = nr;
      continue;
    }
    // Rubriker som "Saken är inte biff frågor:" och tomma rader hoppas över.
    const t = rad.trim();
    if (!t || /frågor\s*:?$/i.test(t) || !senaste) continue;
    senaste.svar[nr] = `${senaste.svar[nr] ?? ""} ${t}`.trim();
  }
  const dir = join(mapp, "svar");
  mkdirSync(dir, { recursive: true });
  for (const e of elever) {
    // Tomma svar i slutet av en text (t.ex. "8." "9.") tas bort.
    for (const t of e.texter) for (const [k, v] of Object.entries(t.svar)) if (!v) delete t.svar[Number(k)];
    writeFileSync(join(dir, `${e.elev}.json`), JSON.stringify(e, null, 2));
  }
  console.log(JSON.stringify(elever.map((e) => ({ elev: e.elev, texter: e.texter.map((t) => `${t.textId}: ${Object.keys(t.svar).length} svar`) })), null, 2));
}

const [kommando, arg, arg2, arg3] = process.argv.slice(2);
if (kommando === "facit") facit();
else if (kommando === "texter")
  console.log(
    allaTexter()
      .filter((t) => !arg || t.steg === arg)
      .map((t) => `${t.id}\t${t.titel}\t${t.fragor.length} frågor\t${t.fragor.reduce((n, f) => n + f.maxpoang, 0)} p`)
      .join("\n"),
  );
else if (kommando === "fragor" && arg) console.log(JSON.stringify(hamtaText(arg), null, 2));
else if (kommando === "mall" && arg) mall(arg);
else if (kommando === "bygg" && arg) void bygg(arg);
else if (kommando === "digiexam" && arg && arg2) digiexam(arg, arg2, arg3 ?? "steg1-01");
else fel("Användning: lasprov facit | texter [steg] | fragor <textId> | mall <textId> | digiexam <pdf> <gruppmapp> [starttext] | bygg <gruppmapp>");
