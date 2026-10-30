/**
 * Lärarskript för /aterkoppling-färdigheten i Claude.
 *
 *   npm run aterkoppling -- profil <textfil> <årskurs>
 *       Skriver ut läsbarhetsprofilen som JSON (räknas, inte AI).
 *
 *   npm run aterkoppling -- bygg <återkoppling.json>
 *       Kontrollerar återkopplingen, bygger elevlänken och skriver en
 *       lärarrapport (.html) bredvid JSON-filen.
 *
 * Elevlänkens bas-URL kan ändras med AT_BASE_URL (standard: sajten på Vercel).
 */

import { readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { lasbarhetsprofil, tolkaProfil, type LasbarhetsProfil } from "../src/lib/aterkoppling/lasbarhet";
import { FELTYPER, OMRADE_ETIKETT, hamtaFeltyp } from "../src/lib/aterkoppling/feltyper";
import { arAterkoppling, delaISegment, placeraKommentarer, type Aterkoppling } from "../src/lib/aterkoppling/typer";
import { packa } from "../src/lib/aterkoppling/kodning";

const BAS = (process.env.AT_BASE_URL ?? "https://laromedel-svenska.vercel.app").replace(/\/$/, "");

/** Det Claude skriver: återkopplingen till eleven + det som bara läraren ser. */
interface Underlag {
  /** Elevens alias/initialer – hamnar bara i lärarrapporten. */
  elev?: string;
  aterkoppling: Aterkoppling;
  /** Förslag på Unikum-kommentar (område / fungerar bra / nästa steg). */
  unikum: string;
  /** Lärarens egna anteckningar, t.ex. bedömning mot kunskapskraven. */
  lararanteckning?: string;
}

function fel(msg: string): never {
  console.error(`Fel: ${msg}`);
  process.exit(1);
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

async function bygg(fil: string) {
  let underlag: Underlag;
  try {
    underlag = JSON.parse(readFileSync(fil, "utf8"));
  } catch (e) {
    fel(`Kunde inte läsa ${fil}: ${(e as Error).message}`);
  }
  const a = underlag.aterkoppling;
  if (!arAterkoppling(a)) fel("'aterkoppling' saknar v: 1, arskurs, text, kommentarer, bra eller nasta.");
  if (typeof underlag.unikum !== "string") fel("'unikum' saknas.");

  const { placerade, saknas } = placeraKommentarer(a.text, a.kommentarer);
  const okandaTyper = [...a.kommentarer, ...a.nasta]
    .map((k) => k.typ)
    .filter((t): t is string => !!t && !hamtaFeltyp(t));

  const kod = await packa(a);
  const lank = `${BAS}/aterkoppling#${kod}`;
  const profil = lasbarhetsprofil(a.text, a.arskurs);

  const rapport = join(dirname(fil), basename(fil, ".json") + ".html");
  writeFileSync(rapport, rapportHtml(underlag, lank, profil, placerade.length, saknas.map((k) => k.citat)));

  console.log(
    JSON.stringify(
      {
        rapport,
        lank,
        lankLangd: lank.length,
        kommentarerPlacerade: placerade.length,
        kommentarerSomInteHittades: saknas.map((k) => k.citat),
        okandaFeltyper: [...new Set(okandaTyper)],
        lix: profil.lix,
      },
      null,
      2,
    ),
  );
}

function profilKommando(fil: string, ak: string) {
  const arskurs = Number(ak);
  if (!arskurs) fel("Ange årskurs som siffra (1–9, gymnasiet 10–12).");
  const p = lasbarhetsprofil(readFileSync(fil, "utf8"), arskurs);
  console.log(JSON.stringify({ ...p, tolkning: tolkaProfil(p) }, null, 2));
}

function rapportHtml(u: Underlag, lank: string, p: LasbarhetsProfil, antalPlacerade: number, saknas: string[]): string {
  const a = u.aterkoppling;
  const { placerade } = placeraKommentarer(a.text, a.kommentarer);
  const nr = new Map(placerade.map((k, i) => [k.index, i + 1]));
  const text = delaISegment(a.text, placerade)
    .map((s) =>
      s.kommentar
        ? `<mark class="${s.kommentar.typ ? (hamtaFeltyp(s.kommentar.typ)?.omrade ?? "sprak") : "bra"}" title="${esc(s.kommentar.kommentar)}">${esc(s.text)}<sup>${nr.get(s.kommentar.index)}</sup></mark>`
        : esc(s.text),
    )
    .join("");
  const kommentarer = placerade
    .map(
      (k, i) =>
        `<li><b>${i + 1}.</b> <span class="typ">${esc(k.typ ? (hamtaFeltyp(k.typ)?.etikett ?? k.typ) : "Bra!")}</span> ${esc(k.kommentar)}${
          k.forslag ? ` <span class="forslag">→ ${esc(k.forslag)}</span>` : ""
        }</li>`,
    )
    .join("");
  const punkter = (ps: Aterkoppling["bra"]) =>
    ps.map((x) => `<li><b>${OMRADE_ETIKETT[x.omrade]}:</b> ${esc(x.text)}</li>`).join("");
  const bed = (b: string) => ({ under: "under spannet", inom: "inom spannet", over: "över spannet" })[b];
  const t = tolkaProfil(p);

  return `<!doctype html>
<html lang="sv"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Återkoppling – ${esc(u.elev ?? a.titel ?? "elevtext")}</title>
<style>
:root{--bg:#fafaf9;--kort:#fff;--text:#1c1917;--dim:#57534e;--linje:#e7e5e4;--accent:#047857}
@media (prefers-color-scheme:dark){:root{--bg:#0c0a09;--kort:#1c1917;--text:#f5f5f4;--dim:#a8a29e;--linje:#292524;--accent:#34d399}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:15px/1.55 system-ui,-apple-system,sans-serif}
main{max-width:1100px;margin:0 auto;padding:32px 16px 64px}h1{font-size:26px;margin:0 0 4px}h2{font-size:17px;margin:0 0 10px}
.dim{color:var(--dim)}.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}
.kort{background:var(--kort);border:1px solid var(--linje);border-radius:12px;padding:18px 20px}
.kopiera{display:flex;gap:8px;align-items:flex-start}.kopiera textarea,.kopiera input{flex:1;font:inherit;padding:8px 10px;border:1px solid var(--linje);border-radius:8px;background:var(--bg);color:var(--text)}
textarea{min-height:190px;resize:vertical}button{font:inherit;font-weight:600;padding:8px 14px;border-radius:8px;border:0;background:var(--accent);color:#fff;cursor:pointer}
.text{font:17px/1.9 Georgia,serif;white-space:pre-wrap}mark{border-radius:3px;padding:0 2px;color:inherit}
mark.sprak{background:#fde68a80}mark.struktur{background:#bae6fd80}mark.innehall{background:#ddd6fe80}mark.bra{background:#a7f3d080}sup{font:700 10px system-ui;margin-left:1px}
ol,ul{padding-left:18px;margin:0}li{margin:6px 0}.typ{font-size:12px;font-weight:600;color:var(--dim)}.forslag{color:var(--accent);font-weight:600}
.varning{border-color:#f59e0b}table{border-collapse:collapse;width:100%}td{padding:4px 0;border-bottom:1px solid var(--linje)}td:last-child{text-align:right}
section{margin-top:16px}
</style></head><body><main>
<p class="dim">${esc(u.elev ?? "Elev")} · ${a.arskurs >= 10 ? `Gymnasiet år ${a.arskurs - 9}` : `Årskurs ${a.arskurs}`}${a.uppgift ? ` · ${esc(a.uppgift)}` : ""}</p>
<h1>${esc(a.titel ?? "Återkoppling")}</h1>
${saknas.length ? `<section class="kort varning"><b>Obs!</b> ${saknas.length} kommentar(er) kunde inte placeras i texten och visas inte för eleven: ${saknas.map((s) => `”${esc(s)}”`).join(", ")}</section>` : ""}
<section class="grid">
  <div class="kort"><h2>Elevlänk</h2><div class="kopiera"><input id="lank" readonly value="${esc(lank)}"><button onclick="kopiera('lank',this)">Kopiera</button></div>
  <p class="dim" style="font-size:13px">Allt ligger i länken – inget sparas. <a href="${esc(lank)}" target="_blank">Öppna som eleven ser den</a></p></div>
  <div class="kort"><h2>Unikum</h2><div class="kopiera"><textarea id="unikum">${esc(u.unikum)}</textarea><button onclick="kopiera('unikum',this)">Kopiera</button></div></div>
</section>
<section class="grid">
  <div class="kort"><h2>Det här fungerar bra</h2><ul>${punkter(a.bra)}</ul></div>
  <div class="kort"><h2>Nästa steg</h2><ul>${punkter(a.nasta)}</ul></div>
</section>
<section class="grid">
  <div class="kort" style="grid-column:1/-1"><h2>Texten (${antalPlacerade} kommentarer)</h2><div class="text">${text}</div></div>
  <div class="kort"><h2>Kommentarer</h2><ol style="list-style:none;padding:0">${kommentarer}</ol></div>
  <div class="kort"><h2>Läsbarhetsprofil</h2><table>
    <tr><td>Ord / meningar</td><td>${p.antalOrd} / ${p.antalMeningar}</td></tr>
    <tr><td>LIX</td><td>${p.lix} <span class="dim">(spann ${p.referens.lix.min}–${p.referens.lix.max})</span></td></tr>
    <tr><td>Ord per mening</td><td>${p.meningslangd} <span class="dim">${bed(p.bedomning.meningslangd)}</span></td></tr>
    <tr><td>Långa ord</td><td>${p.langaOrdProcent} % <span class="dim">${bed(p.bedomning.langaOrd)}</span></td></tr>
    <tr><td>OVIX</td><td>${p.ovix} <span class="dim">${bed(p.bedomning.ovix)}</span></td></tr>
    <tr><td>Längsta mening</td><td>${p.langstaMening} ord${p.langaMeningar ? ` <span class="dim">(${p.langaMeningar} st > 30)</span>` : ""}</td></tr>
  </table><p class="dim" style="font-size:13px">${esc(t.ordforrad)} ${esc(t.meningar)}</p></div>
  ${u.lararanteckning ? `<div class="kort"><h2>Lärarens anteckning</h2><p style="white-space:pre-line">${esc(u.lararanteckning)}</p></div>` : ""}
</section>
</main>
<script>function kopiera(id,b){const el=document.getElementById(id);navigator.clipboard.writeText(el.value).then(()=>{const t=b.textContent;b.textContent='Kopierat!';setTimeout(()=>b.textContent=t,1500)})}</script>
</body></html>`;
}

const [kommando, ...arg] = process.argv.slice(2);
if (kommando === "bygg" && arg[0]) void bygg(arg[0]);
else if (kommando === "profil" && arg[0] && arg[1]) profilKommando(arg[0], arg[1]);
else if (kommando === "feltyper") console.log(FELTYPER.map((f) => `${f.id}\t${f.omrade}\t${f.etikett}`).join("\n"));
else fel("Användning: aterkoppling profil <textfil> <årskurs> | bygg <fil.json> | feltyper");
