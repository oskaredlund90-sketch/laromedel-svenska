/**
 * Lärarskript för /gruppanalys-färdigheten i Claude.
 *
 *   npm run gruppanalys -- <gruppmapp> [--min 3]
 *
 * Läser <gruppmapp>/analys/*.json (en per text – antingen en textanalys eller
 * en /aterkoppling-fil) och valfritt <gruppmapp>/grupp.json (Claudes
 * sammanfattning för gruppen). Räknar ihop allt utan AI, skriver
 * <gruppmapp>/gruppanalys.html och skriver ut en sammanställning som JSON.
 *
 * --min = hur många texter ett fel måste finnas i (standard 3 = "fler än 2").
 */

import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { franAterkoppling, sammanstall, type Sammanstallning, type TextAnalys, type VanligtFel } from "../src/lib/aterkoppling/grupp";
import { OMRADE_ETIKETT, hamtaFeltyp, ovningsHref, stadieForArskurs, type Omrade } from "../src/lib/aterkoppling/feltyper";
import type { AgeGroup } from "../src/lib/supabase/types";
import { BAS_CSS, BAS_URL, KOPIERA_JS, esc } from "./html";
import { haftenForFeltyp } from "../src/lib/haften";

/** Claudes sammanfattning för gruppen. */
interface Grupp {
  grupp?: string;
  uppgift?: string;
  omraden?: { omrade: Omrade; fungerarBra: string; nastaSteg: string; typ?: string }[];
  genomgangar?: { titel: string; typ?: string; elever?: string[]; upplagg: string }[];
  /** Kort text till eleverna som delas ut tillsammans med ordlistan. */
  tillEleverna?: string;
}

function fel(msg: string): never {
  console.error(`Fel: ${msg}`);
  process.exit(1);
}

function lasAnalyser(mapp: string): TextAnalys[] {
  const dir = join(mapp, "analys");
  if (!existsSync(dir)) fel(`Hittar inte ${dir}. Lägg en JSON-fil per text där.`);
  const filer = readdirSync(dir).filter((f) => f.endsWith(".json")).sort();
  if (!filer.length) fel(`Inga .json-filer i ${dir}.`);
  return filer.map((f) => {
    const data = JSON.parse(readFileSync(join(dir, f), "utf8"));
    const namn = basename(f, ".json");
    const a: TextAnalys = data.aterkoppling ? franAterkoppling(data, namn) : { ...data, elev: data.elev ?? namn };
    if (typeof a.text !== "string" || typeof a.arskurs !== "number" || !Array.isArray(a.fel)) {
      fel(`${f}: saknar text, arskurs eller fel.`);
    }
    a.styrkor ??= [];
    a.nasta ??= [];
    return a;
  });
}

function ovningar(typ: string | undefined, stadie: AgeGroup): string {
  const ft = hamtaFeltyp(typ);
  if (!ft) return "";
  const sidor = ft.ovningar.map(
    (o) => `<a class="tagg" href="${esc(BAS_URL + ovningsHref(o, stadie))}" target="_blank">${esc(o.titel)}</a>`,
  );
  const haften = haftenForFeltyp(ft.id).map(
    (h) => `<a class="tagg" href="${esc(`${BAS_URL}/ovningshaften/${h.id}`)}" target="_blank">Häfte: ${esc(h.titel)}</a>`,
  );
  return [...haften, ...sidor].join("");
}

function felTabell(lista: VanligtFel[], tom: string): string {
  if (!lista.length) return `<p class="dim">${tom}</p>`;
  return `<table><tr><th>Rätt</th><th>Så skrev eleverna</th><th>Texter</th><th>Elever</th></tr>${lista
    .map(
      (f) =>
        `<tr><td><b>${esc(f.ratt)}</b><br><span class="dim" style="font-size:12px">${esc(hamtaFeltyp(f.typ)?.etikett ?? f.typ)}</span></td>
        <td>${f.varianter.map((v) => `${esc(v.fel)}${v.antal > 1 ? ` <span class="dim">×${v.antal}</span>` : ""}`).join(", ")}</td>
        <td>${f.elever.length}</td><td>${f.elever.map((e) => `<span class="tagg">${esc(e)}</span>`).join("")}</td></tr>`,
    )
    .join("")}</table>`;
}

function matris(s: Sammanstallning, elever: string[], stadie: AgeGroup): string {
  if (!s.feltyper.length) return `<p class="dim">Inga fel registrerade.</p>`;
  const max = Math.max(...s.feltyper.flatMap((r) => Object.values(r.perElev)));
  const cell = (n: number | undefined) =>
    n ? `<td style="text-align:center;background:rgba(217,119,6,${(0.15 + 0.6 * (n / max)).toFixed(2)})">${n}</td>` : `<td></td>`;
  return `<div style="overflow-x:auto"><table><tr><th>Feltyp</th><th>Texter</th>${elever
    .map((e) => `<th style="text-align:center">${esc(e)}</th>`)
    .join("")}<th>Övningar</th></tr>${s.feltyper
    .map(
      (r) =>
        `<tr><td>${esc(r.etikett)}<br><span class="dim" style="font-size:12px">${OMRADE_ETIKETT[r.omrade]}</span></td><td>${r.antalTexter}</td>${elever
          .map((e) => cell(r.perElev[e]))
          .join("")}<td>${ovningar(r.typ, stadie)}</td></tr>`,
    )
    .join("")}</table></div>`;
}

function rapport(s: Sammanstallning, analyser: TextAnalys[], g: Grupp, min: number): string {
  const stadie = stadieForArskurs(s.arskurs);
  const elever = analyser.map((a) => a.elev);
  const ak = s.arskurs >= 10 ? `Gymnasiet år ${s.arskurs - 9}` : `Årskurs ${s.arskurs}`;
  const datum = new Date().toLocaleDateString("sv-SE");

  const ordlista = s.vanligaStavfel.map((f) => f.ratt).sort((a, b) => a.localeCompare(b, "sv"));
  const utdelning = [
    g.tillEleverna ?? "Ord som många i gruppen behöver öva på:",
    "",
    ...ordlista.map((o) => `• ${o}`),
  ].join("\n");

  const omraden = (g.omraden ?? [])
    .map(
      (o) => `<div class="kort"><h2>${OMRADE_ETIKETT[o.omrade]}</h2>
      <p><b>Det här fungerar bra:</b> ${esc(o.fungerarBra)}</p>
      <p><b>Nästa steg:</b> ${esc(o.nastaSteg)}</p>${o.typ ? `<div>${ovningar(o.typ, stadie)}</div>` : ""}</div>`,
    )
    .join("");

  const genomgangar = (g.genomgangar ?? [])
    .map(
      (x) => `<li><b>${esc(x.titel)}</b>${x.elever?.length ? ` – ${x.elever.map((e) => `<span class="tagg">${esc(e)}</span>`).join("")}` : " – hela gruppen"}
      <p style="margin:4px 0;white-space:pre-line">${esc(x.upplagg)}</p>${ovningar(x.typ, stadie)}</li>`,
    )
    .join("");

  const grupperingar = s.nastaPerTyp
    .map(
      (n) =>
        `<tr><td>${esc(hamtaFeltyp(n.typ)?.etikett ?? n.typ)}</td><td>${n.elever.length}</td><td>${n.elever
          .map((e) => `<span class="tagg">${esc(e)}</span>`)
          .join("")}</td><td>${ovningar(n.typ, stadie)}</td></tr>`,
    )
    .join("");

  const ref = s.profiler[0]?.profil.referens;
  const flagga = (b: string) => (b === "under" ? " ↓" : b === "over" ? " ↑" : "");
  const profilrader = s.profiler
    .map(
      ({ elev, profil: p }) =>
        `<tr><td>${esc(elev)}</td><td>${p.antalOrd}</td><td>${p.lix}</td><td>${p.meningslangd}${flagga(p.bedomning.meningslangd)}</td>
        <td>${p.langaOrdProcent} %${flagga(p.bedomning.langaOrd)}</td><td>${p.ovix === null ? "–" : `${p.ovix}${flagga(p.bedomning.ovix)}`}</td>
        <td>${p.langstaMening}${p.langaMeningar ? ` <span style="color:#d97706">(${p.langaMeningar} > 30)</span>` : ""}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="sv"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gruppanalys – ${esc(g.grupp ?? "grupp")}</title><style>${BAS_CSS}</style></head><body><main>
<p class="dim">${ak}${g.uppgift ? ` · ${esc(g.uppgift)}` : ""} · ${s.antalTexter} texter · ${datum}</p>
<h1>Gruppanalys${g.grupp ? ` – ${esc(g.grupp)}` : ""}</h1>

${omraden ? `<section class="grid">${omraden}</section>` : `<section class="kort varning">Ingen sammanfattning (grupp.json) ännu.</section>`}

<section class="kort"><h2>Stavfel i fler än ${min - 1} texter</h2>${felTabell(s.vanligaStavfel, "Inga stavfel förekommer i så många texter.")}</section>
<section class="kort"><h2>Andra språkfel i fler än ${min - 1} texter</h2>${felTabell(s.vanligaSprakfel, "Inga andra språkfel förekommer i så många texter.")}</section>

${ordlista.length ? `<section class="kort"><h2>Att dela ut till gruppen</h2><p class="dim">Utan elevnamn – kopiera till tavlan, Classroom eller ett papper.</p>
<div class="kopiera"><textarea id="utdelning">${esc(utdelning)}</textarea><button onclick="kopiera('utdelning',this)">Kopiera</button></div></section>` : ""}

${genomgangar ? `<section class="kort"><h2>Förslag på genomgångar</h2><ol>${genomgangar}</ol></section>` : ""}

${grupperingar ? `<section class="kort"><h2>Elever med samma nästa steg</h2><table><tr><th>Nästa steg</th><th>Antal</th><th>Elever</th><th>Övningar</th></tr>${grupperingar}</table></section>` : ""}

<section class="kort"><h2>Feltyper per elev</h2>${matris(s, elever, stadie)}</section>

<section class="kort"><h2>Läsbarhet</h2>
<p class="dim">Median för gruppen: LIX ${s.median.lix} · ${s.median.meningslangd} ord/mening · ${s.median.langaOrdProcent} % långa ord · OVIX ${s.median.ovix ?? "–"} · ${s.median.antalOrd} ord.
${ref ? `Spann för årskursen: ${ref.meningslangd.min}–${ref.meningslangd.max} ord/mening, ${ref.langaOrd.min}–${ref.langaOrd.max} % långa ord, OVIX ${ref.ovix.min}–${ref.ovix.max}.` : ""} ↓/↑ = under/över spannet. OVIX visas bara för texter med minst 50 ord.</p>
<div style="overflow-x:auto"><table><tr><th>Elev</th><th>Ord</th><th>LIX</th><th>Ord/mening</th><th>Långa ord</th><th>OVIX</th><th>Längsta mening</th></tr>${profilrader}</table></div></section>
</main>${KOPIERA_JS}</body></html>`;
}

const arg = process.argv.slice(2);
const mapp = arg.find((a) => !a.startsWith("--") && !/^\d+$/.test(a));
const minIndex = arg.indexOf("--min");
const min = minIndex >= 0 ? Number(arg[minIndex + 1]) : 3;
if (!mapp || !min) fel("Användning: gruppanalys <gruppmapp> [--min 3]");

const analyser = lasAnalyser(mapp);
const gruppFil = join(mapp, "grupp.json");
const grupp: Grupp = existsSync(gruppFil) ? JSON.parse(readFileSync(gruppFil, "utf8")) : {};
const s = sammanstall(analyser, min);
const ut = join(mapp, "gruppanalys.html");
writeFileSync(ut, rapport(s, analyser, grupp, min));

const kandaTyper = [...analyser.flatMap((a) => a.fel.map((f) => f.typ)), ...analyser.flatMap((a) => a.nasta.map((n) => n.typ))];
console.log(
  JSON.stringify(
    {
      rapport: ut,
      harSammanfattning: existsSync(gruppFil),
      antalTexter: s.antalTexter,
      arskurs: s.arskurs,
      vanligaStavfel: s.vanligaStavfel.map((f) => ({ ratt: f.ratt, varianter: f.varianter.map((v) => v.fel), texter: f.elever.length })),
      vanligaSprakfel: s.vanligaSprakfel.map((f) => ({ ratt: f.ratt, typ: f.typ, texter: f.elever.length })),
      feltyper: s.feltyper.map((r) => ({ typ: r.typ, texter: r.antalTexter, forekomster: r.forekomster })),
      nastaPerTyp: s.nastaPerTyp,
      styrkorPerOmrade: s.styrkorPerOmrade,
      median: s.median,
      langaMeningar: s.profiler.filter((p) => p.profil.langaMeningar > 0).map((p) => p.elev),
      okandaFeltyper: [...new Set(kandaTyper.filter((t): t is string => !!t && !hamtaFeltyp(t)))],
    },
    null,
    2,
  ),
);
