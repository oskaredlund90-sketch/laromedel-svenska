/**
 * Lärarskript för /klassrespons – återkoppling på en hel grupps texter.
 *
 *   npm run klassrespons -- status <gruppmapp>
 *       Vilka texter i texter/ som har en färdig återkoppling i analys/ och
 *       vilka som är kvar. Gör att arbetet kan fortsätta om det avbryts.
 *
 *   npm run klassrespons -- bygg <gruppmapp>
 *       Bygger elevlänk och lärarrapport för varje analys/*.json, kör
 *       gruppanalysen och skriver filer för Google Drive i drive/:
 *         oversikt.csv           → kalkylark (elev, länk, Unikum, nästa steg …)
 *         gruppanalys.html       → dokument
 *         elever/<alias>.html    → ett dokument per elev
 *         manifest.json          → vad som ska laddas upp och med vilken titel
 */

import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { byggUnderlag, type Byggresultat } from "./aterkoppling";
import { korGruppanalys, type Grupp } from "./gruppanalys";
import { BAS_URL, esc } from "./html";
import { OMRADE_ETIKETT, hamtaFeltyp } from "../src/lib/aterkoppling/feltyper";
import { delaISegment, placeraKommentarer } from "../src/lib/aterkoppling/typer";
import { allaSynonymer } from "../src/lib/aterkoppling/synonymer";
import { haftenForFeltyp } from "../src/lib/haften";
import type { Sammanstallning } from "../src/lib/aterkoppling/grupp";

function fel(msg: string): never {
  console.error(`Fel: ${msg}`);
  process.exit(1);
}

const TEXTFORMAT = new Set([".txt", ".md"]);

function status(mapp: string) {
  const texter = existsSync(join(mapp, "texter")) ? readdirSync(join(mapp, "texter")).filter((f) => !f.startsWith(".")) : [];
  const klara = new Set(
    existsSync(join(mapp, "analys"))
      ? readdirSync(join(mapp, "analys"))
          .filter((f) => f.endsWith(".json"))
          .map((f) => basename(f, ".json"))
      : [],
  );
  const alias = (f: string) => basename(f, extname(f));
  const kvar = texter.filter((f) => !klara.has(alias(f)));
  console.log(
    JSON.stringify(
      {
        texter: texter.length,
        klara: [...klara].sort(),
        kvar,
        behoverKonverteras: kvar.filter((f) => !TEXTFORMAT.has(extname(f).toLowerCase())),
      },
      null,
      2,
    ),
  );
}

/* ----------------------------- Drive-dokument ----------------------------- */

const FARG: Record<string, string> = { sprak: "#fde68a", struktur: "#bae6fd", innehall: "#ddd6fe", bra: "#a7f3d0" };

function haftenHtml(typ: string | undefined): string {
  const h = typ ? haftenForFeltyp(typ) : [];
  return h.length
    ? `<br>Träna: ${h.map((x) => `<a href="${esc(`${BAS_URL}/ovningshaften/${x.id}`)}">${esc(x.titel)}</a>`).join(" · ")}`
    : "";
}

function elevDokument(r: Byggresultat): string {
  const u = r.underlag;
  const a = u.aterkoppling;
  const { placerade } = placeraKommentarer(a.text, a.kommentarer);
  const nr = new Map(placerade.map((k, i) => [k.index, i + 1]));
  const text = delaISegment(a.text, placerade)
    .map((s) => {
      if (!s.kommentar) return esc(s.text);
      const farg = FARG[s.kommentar.typ ? (hamtaFeltyp(s.kommentar.typ)?.omrade ?? "sprak") : "bra"];
      return `<span style="background-color:${farg}">${esc(s.text)}</span><sup>${nr.get(s.kommentar.index)}</sup>`;
    })
    .join("")
    .replace(/\n/g, "<br>");
  const punkt = (ps: typeof a.bra, medHaften = false) =>
    ps.map((p) => `<li><b>${OMRADE_ETIKETT[p.omrade]}:</b> ${esc(p.text)}${medHaften ? haftenHtml(p.typ) : ""}</li>`).join("");
  const kommentarer = placerade
    .map((k, i) => {
      const etikett = k.typ ? (hamtaFeltyp(k.typ)?.etikett ?? k.typ) : "Bra!";
      return `<li><b>${i + 1}. ${esc(etikett)}:</b> ${esc(k.kommentar)}${k.forslag ? ` → <b>${esc(k.forslag)}</b>` : ""}</li>`;
    })
    .join("");
  const synonymer = allaSynonymer(a.text, a.arskurs, a.synonymer)
    .map((x) => `<li><b>${esc(x.ord)}</b> (${x.antal} ggr): ${esc(x.forslag.join(", "))}</li>`)
    .join("");
  const p = r.profil;

  return `<html><head><meta charset="utf-8"></head><body>
<h1>${esc(u.elev ?? "Elev")} – ${esc(a.titel ?? "Återkoppling")}</h1>
<p>${a.arskurs >= 10 ? `Gymnasiet år ${a.arskurs - 9}` : `Årskurs ${a.arskurs}`}${a.uppgift ? ` · ${esc(a.uppgift)}` : ""}</p>
<p><b>Elevlänk:</b> <a href="${esc(r.lank)}">Öppna elevens återkoppling</a></p>
${a.helhet ? `<p><i>${esc(a.helhet)}</i></p>` : ""}
<h2>Det här fungerar bra</h2><ul>${punkt(a.bra)}</ul>
<h2>Nästa steg</h2><ul>${punkt(a.nasta, true)}</ul>
<h2>Unikum</h2><p>${esc(u.unikum).replace(/\n/g, "<br>")}</p>
${u.lararanteckning ? `<h2>Lärarens anteckning</h2><p>${esc(u.lararanteckning).replace(/\n/g, "<br>")}</p>` : ""}
<h2>Texten med kommentarer</h2><p>${text}</p>
<ol style="list-style:none">${kommentarer}</ol>
${synonymer ? `<h2>Variera orden</h2><ul>${synonymer}</ul>` : ""}
<h2>Läsbarhet</h2><p>${p.antalOrd} ord · ${p.antalMeningar} meningar · LIX ${p.lix} · ${p.meningslangd} ord/mening · ${p.langaOrdProcent} % långa ord${p.ovix !== null ? ` · OVIX ${p.ovix}` : ""}${p.langaMeningar ? ` · ${p.langaMeningar} mening(ar) över 30 ord` : ""}</p>
</body></html>`;
}

function gruppDokument(s: Sammanstallning, g: Grupp, min: number): string {
  const felrader = (lista: Sammanstallning["vanligaStavfel"]) =>
    lista.length
      ? `<table border="1" cellpadding="4"><tr><th>Rätt</th><th>Så skrev eleverna</th><th>Texter</th><th>Elever</th></tr>${lista
          .map((f) => `<tr><td><b>${esc(f.ratt)}</b></td><td>${esc(f.varianter.map((v) => v.fel).join(", "))}</td><td>${f.elever.length}</td><td>${esc(f.elever.join(", "))}</td></tr>`)
          .join("")}</table>`
      : "<p>Inga.</p>";

  return `<html><head><meta charset="utf-8"></head><body>
<h1>Gruppanalys${g.grupp ? ` – ${esc(g.grupp)}` : ""}</h1>
<p>${g.uppgift ? `${esc(g.uppgift)} · ` : ""}${s.antalTexter} texter · ${new Date().toLocaleDateString("sv-SE")}</p>
${(g.omraden ?? [])
  .map(
    (o) => `<h2>${OMRADE_ETIKETT[o.omrade]}</h2><p><b>Det här fungerar bra:</b> ${esc(o.fungerarBra)}</p><p><b>Nästa steg:</b> ${esc(o.nastaSteg)}${haftenHtml(o.typ)}</p>`,
  )
  .join("")}
<h2>Stavfel i fler än ${min - 1} texter</h2>${felrader(s.vanligaStavfel)}
<h2>Andra språkfel i fler än ${min - 1} texter</h2>${felrader(s.vanligaSprakfel)}
${(g.genomgangar ?? []).length ? `<h2>Förslag på genomgångar</h2><ol>${(g.genomgangar ?? [])
  .map((x) => `<li><b>${esc(x.titel)}</b> – ${x.elever?.length ? esc(x.elever.join(", ")) : "hela gruppen"}<br>${esc(x.upplagg)}${haftenHtml(x.typ)}</li>`)
  .join("")}</ol>` : ""}
<h2>Elever med samma nästa steg</h2><ul>${s.nastaPerTyp
  .map((n) => `<li><b>${esc(hamtaFeltyp(n.typ)?.etikett ?? n.typ)}</b> (${n.elever.length}): ${esc(n.elever.join(", "))}${haftenHtml(n.typ)}</li>`)
  .join("")}</ul>
<h2>Feltyper i gruppen</h2><table border="1" cellpadding="4"><tr><th>Feltyp</th><th>Texter</th><th>Förekomster</th></tr>${s.feltyper
  .map((r) => `<tr><td>${esc(r.etikett)}</td><td>${r.antalTexter}</td><td>${r.forekomster}</td></tr>`)
  .join("")}</table>
<h2>Läsbarhet</h2><p>Median: LIX ${s.median.lix} · ${s.median.meningslangd} ord/mening · ${s.median.langaOrdProcent} % långa ord · ${s.median.antalOrd} ord.</p>
<table border="1" cellpadding="4"><tr><th>Elev</th><th>Ord</th><th>LIX</th><th>Ord/mening</th><th>Långa ord</th><th>Längsta mening</th></tr>${s.profiler
  .map(({ elev, profil: p }) => `<tr><td>${esc(elev)}</td><td>${p.antalOrd}</td><td>${p.lix}</td><td>${p.meningslangd}</td><td>${p.langaOrdProcent} %</td><td>${p.langstaMening}</td></tr>`)
  .join("")}</table>
${s.vanligaStavfel.length ? `<h2>Att dela ut till gruppen</h2><p>${esc(g.tillEleverna ?? "Ord som många i gruppen behöver öva på:")}</p><ul>${s.vanligaStavfel.map((f) => `<li>${esc(f.ratt)}</li>`).join("")}</ul>` : ""}
</body></html>`;
}

function csvCell(v: string | number): string {
  const s = String(v);
  return /[";\n,]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function oversiktCsv(resultat: Byggresultat[]): string {
  const rader = [["Elev", "Elevlänk", "Unikum", "Nästa steg", "Övningshäften", "LIX", "Ord", "Kommentarer", "Lärarens anteckning"]];
  for (const r of resultat) {
    const a = r.underlag.aterkoppling;
    rader.push([
      r.underlag.elev ?? "",
      r.lank,
      r.underlag.unikum,
      a.nasta.map((n) => `• ${n.text}`).join("\n"),
      [...new Set(a.nasta.flatMap((n) => (n.typ ? haftenForFeltyp(n.typ) : [])).map((h) => `${h.titel}: ${BAS_URL}/ovningshaften/${h.id}`))].join("\n"),
      String(r.profil.lix),
      String(r.profil.antalOrd),
      String(r.kommentarerPlacerade),
      r.underlag.lararanteckning ?? "",
    ]);
  }
  return rader.map((r) => r.map(csvCell).join(",")).join("\n") + "\n";
}

async function bygg(mapp: string, min: number) {
  const dir = join(mapp, "analys");
  if (!existsSync(dir)) fel(`Hittar inte ${dir}.`);
  const filer = readdirSync(dir).filter((f) => f.endsWith(".json")).sort();

  const resultat: Byggresultat[] = [];
  const problem: { fil: string; fel: string }[] = [];
  for (const f of filer) {
    try {
      const r = await byggUnderlag(join(dir, f));
      if (!r.underlag.elev) r.underlag.elev = basename(f, ".json");
      resultat.push(r);
      if (r.kommentarerSomInteHittades.length || r.okandaFeltyper.length) {
        problem.push({
          fil: f,
          fel: [
            r.kommentarerSomInteHittades.length ? `citat hittades inte: ${r.kommentarerSomInteHittades.join(" | ")}` : "",
            r.okandaFeltyper.length ? `okända feltyper: ${r.okandaFeltyper.join(", ")}` : "",
          ]
            .filter(Boolean)
            .join("; "),
        });
      }
    } catch (e) {
      problem.push({ fil: f, fel: (e as Error).message });
    }
  }
  if (!resultat.length) fel("Inga återkopplingar kunde byggas.");

  const { s, grupp, harSammanfattning, ut } = korGruppanalys(mapp, min);

  const drive = join(mapp, "drive");
  mkdirSync(join(drive, "elever"), { recursive: true });
  writeFileSync(join(drive, "oversikt.csv"), oversiktCsv(resultat));
  writeFileSync(join(drive, "gruppanalys.html"), gruppDokument(s, grupp, min));
  const elever = resultat.map((r) => {
    const fil = join(drive, "elever", `${r.underlag.elev}.html`);
    writeFileSync(fil, elevDokument(r));
    return { fil, titel: `${r.underlag.elev} – ${r.underlag.aterkoppling.titel ?? "Återkoppling"}`, mime: "text/html" };
  });

  const datum = new Date().toLocaleDateString("sv-SE");
  const mappnamn = [grupp.grupp ?? basename(mapp), grupp.uppgift, datum].filter(Boolean).join(" – ");
  const manifest = {
    huvudmapp: "Återkoppling",
    mapp: mappnamn,
    filer: [
      { fil: join(drive, "oversikt.csv"), titel: "Översikt", mime: "text/csv" },
      { fil: join(drive, "gruppanalys.html"), titel: "Gruppanalys", mime: "text/html" },
    ],
    elevmapp: "Elever",
    elever,
  };
  writeFileSync(join(drive, "manifest.json"), JSON.stringify(manifest, null, 2));

  console.log(
    JSON.stringify(
      {
        byggda: resultat.length,
        problem,
        gruppanalys: ut,
        harSammanfattning,
        manifest: join(drive, "manifest.json"),
        driveMapp: mappnamn,
        sammanstallning: {
          vanligaStavfel: s.vanligaStavfel.map((f) => ({ ratt: f.ratt, varianter: f.varianter.map((v) => v.fel), texter: f.elever.length })),
          vanligaSprakfel: s.vanligaSprakfel.map((f) => ({ ratt: f.ratt, typ: f.typ, texter: f.elever.length })),
          feltyper: s.feltyper.map((r) => ({ typ: r.typ, texter: r.antalTexter })),
          nastaPerTyp: s.nastaPerTyp,
          styrkorPerOmrade: s.styrkorPerOmrade,
          median: s.median,
        },
      },
      null,
      2,
    ),
  );
}

const [kommando, mapp, ...rest] = process.argv.slice(2);
const minIndex = rest.indexOf("--min");
const min = minIndex >= 0 ? Number(rest[minIndex + 1]) : 3;
if (kommando === "status" && mapp) status(mapp);
else if (kommando === "bygg" && mapp) void bygg(mapp, min);
else fel("Användning: klassrespons status <gruppmapp> | bygg <gruppmapp> [--min 3]");
