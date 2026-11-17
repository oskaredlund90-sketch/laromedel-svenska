/**
 * Skriver ut allt grammatikmaterial som ren text, ett dokument per stadium, så
 * att granskaren (.claude/agents/granskare.md) läser exakt det eleven möter –
 * uppgift, svarsalternativ och facit tillsammans.
 *
 *   npm run granska                    → lararrum/granskning/text/<stadium>.md
 *   npm run granska -- hogstadiet      → bara ett stadium
 *   npm run granska -- --id samband    → bara uppgifter/häften vars id innehåller "samband"
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { AgeGroup } from "@/lib/supabase/types";
import { AMNEN, AMNEN_PER_STADIUM } from "@/lib/grammatik/amnen";
import { getExercisesForTopic, RESONERA_ETIKETT, type GrammarExercise } from "@/lib/data/grammatik-ovningar";
import { STARTPROV_FOR, haftenForKapitel, kapitelprovFor } from "@/lib/grammatik/bok";
import { hamtaHafte } from "@/lib/haften";
import { facitText, utskriftsText, type Hafte } from "@/lib/haften/typer";
import { SKRIV_SJALV } from "@/lib/grammatik/skriv-sjalv";
import { skrivdelFor } from "@/lib/grammatik/prov-skrivdel";
import { arbetsomradenFor } from "@/lib/arbetsomraden";
import type { AoBild, AoFraga, Arbetsomrade } from "@/lib/arbetsomraden/typer";
import { TEACHER_GUIDES } from "@/lib/data/lararhandledningar";
import { HANDLEDNING_PROV } from "@/lib/data/lararhandledning-prov";
import { HANDLEDNING_TILLAGG } from "@/lib/data/lararhandledning-remiss";

const STADIER: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];
const args = process.argv.slice(2);
const idFilter = args.includes("--id") ? args[args.indexOf("--id") + 1] : null;
const valda = STADIER.filter((s) => args.includes(s));
const stadier = valda.length ? valda : STADIER;

function ovning(e: GrammarExercise): string {
  const huvud = `- [${e.id}] ${e.instruction}`;
  switch (e.type) {
    case "multiple-choice":
      return `${huvud}\n  ${e.prompt}\n  Alternativ: ${e.options.map((o, i) => (i === e.correct ? `**${o}**` : o)).join(" | ")}${e.explanation ? `\n  Förklaring: ${e.explanation}` : ""}`;
    case "fill-in-blank":
      return `${huvud}\n  ${e.sentence}\n  Alternativ: ${e.options.join(" | ")} → **${e.correct}**${e.explanation ? `\n  Förklaring: ${e.explanation}` : ""}`;
    case "error-correction":
      return `${huvud}\n  ${e.sentence}\n  Fel: "${e.errorWord}" → Rätt: "${e.correctWord}"${e.correctedSentence ? ` | Rättad: ${e.correctedSentence}` : ""}${e.explanation ? `\n  Förklaring: ${e.explanation}` : ""}`;
    case "categorization":
      return `${huvud}\n  ${e.categories.map((k) => `${k}: ${e.items.filter((i) => e.correctMapping[i] === k).join(", ")}`).join(" | ")}`;
    case "sentence-analysis":
      return `${huvud}\n  ${e.parts.map((p) => `${p.text} = ${p.role}`).join(" · ")}  (val: ${e.roleOptions.join(", ")})`;
    case "markera":
      return `${huvud}\n  ${e.text}  (rätt svar inom [ ])${e.explanation ? `\n  Förklaring: ${e.explanation}` : ""}`;
    case "dela":
      return `${huvud}\n  ${e.word.split("|").join(" | ")}${e.explanation ? `  – ${e.explanation}` : ""}`;
    case "ordna":
      return `${huvud}\n  Facit: ${e.meningar ? e.parts.join(" / ") : e.parts.join(" ") + (e.end ?? "")}`;
    case "resonera":
      return `- [${e.id}] ${RESONERA_ETIKETT[e.variant]}: ${e.instruction}${e.text ? `\n  Underlag: ${e.text.replace(/\n/g, " / ")}` : ""}\n  Exempelsvar: ${e.exempelsvar.replace(/\n/g, " / ")}\n  Checklista: ${e.checklista.join("; ")}`;
  }
}

function hafte(h: Hafte): string {
  const rader = [`### Häfte: ${h.titel} [${h.id}] – ${h.underrubrik} (${h.antalRader} uppgifter)`, `Regel: ${h.regel.join(" ")}`];
  for (const d of h.delar) {
    rader.push(`#### ${d.rubrik} (${d.typ}): ${d.instruktion}`);
    d.uppgifter.forEach((u, i) =>
      rader.push(
        u.typ === "ratta"
          ? `${i + 1}. ${u.fel} ⇒ ${u.ratt.join(" || ")}`
          : `${i + 1}. ${utskriftsText(u)}${u.ledtrad ? ` (${u.ledtrad})` : ""} ⇒ ${facitText(u)}`,
      ),
    );
  }
  return rader.join("\n");
}

function aoFraga(f: AoFraga, i: number): string {
  return `${i + 1}. ${f.fraga}  Alternativ: ${f.alternativ.map((a, j) => (j === f.ratt ? `**${a}**` : a)).join(" | ")}${f.forklaring ? `  (Förklaring: ${f.forklaring})` : ""}`;
}

function aoBild(b: AoBild): string {
  switch (b.typ) {
    case "punkter":
      return `- Bild "${b.rubrik}": ${b.punkter.join(" / ")}`;
    case "jamfor":
      return `- Tabell "${b.rubrik}" (${b.kolumner.join(" | ")}): ${b.rader.map(([a, c]) => `${a} → ${c}`).join(" / ")}`;
    case "fraga":
      return `- Bildfråga: ${aoFraga(b.fraga, 0).slice(3)}`;
    case "uppgift":
      return `- Uppgift "${b.rubrik}": ${b.text}${b.punkter ? " " + b.punkter.join(" / ") : ""}`;
    case "diskutera":
      return `- Diskutera: ${b.fragor.join(" / ")}`;
  }
}

function arbetsomrade(a: Arbetsomrade): string {
  const r: string[] = [`### Arbetsområde: ${a.titel} [${a.id}] – förslag åk/år ${a.arskurs}`, a.ingress, `Kursplan: ${a.kursplan.join(" / ")}`, `Mål: ${a.mal.join(" / ")}`, `Begrepp: ${a.begrepp.map(([t, f]) => `${t} = ${f}`).join(" / ")}`, "#### Förtest", ...a.fortest.map(aoFraga)];
  a.lektioner.forEach((l, i) => {
    r.push(`#### Lektion ${i + 1}: ${l.titel}`, `Mål: ${l.mal}`, `Upplägg: ${l.upplagg.join(" / ")}`, ...l.bilder.map(aoBild));
    for (const t of l.elevtext) r.push(`Elevtext "${t.rubrik}": ${t.stycken.join(" ")}`);
    r.push(`Uppgifter: ${l.uppgifter.join(" / ")}`);
  });
  r.push("#### Prov", ...a.prov.fragor.map(aoFraga), ...a.prov.oppna.map((o) => `Öppen: ${o.fraga} | Bedöm: ${o.bedomning.join("; ")}`), `Tips: ${a.tips.join(" / ")}`);
  return r.join("\n");
}

function handledningar(stadie: AgeGroup): string[] {
  return TEACHER_GUIDES.filter((g) => g.ageGroup === stadie && (!idFilter || g.slug.includes(idFilter))).map((g) => {
    const p = HANDLEDNING_PROV[g.slug];
    const t = HANDLEDNING_TILLAGG[g.slug];
    return [
      `### Lärarhandledning: ${g.title} [${g.slug}]`,
      `Syfte: ${g.syfte}`,
      ...(t?.remiss.length ? [`Koppling till förslaget: ${t.remiss.join(" / ")}`] : []),
      ...g.genomforande.map((x) => `- ${x.steg}: ${x.beskrivning}`),
      `Bedömningsstöd: ${g.bedomningsstod.join(" / ")}`,
      ...(p ? ["Förtest/prov:", ...p.fragor.map(aoFraga), `Bedömningsuppgift: ${p.uppgift}`] : []),
    ].join("\n");
  });
}

const ut = path.join(process.cwd(), "lararrum", "granskning", "text");
mkdirSync(ut, { recursive: true });

for (const stadie of stadier) {
  const delar: string[] = [`# Grammatik – ${stadie}`, "Genomgångarna finns i src/components/grammatik/genomgang-*.tsx (minst(s, …) styr vad som visas per stadium).", ""];
  const sett = new Set<string>();
  AMNEN_PER_STADIUM[stadie].forEach((a, i) => {
    const ovningar = getExercisesForTopic(a, stadie).filter((e) => !idFilter || e.id.includes(idFilter));
    delar.push(`## Kapitel ${i + 1}: ${AMNEN[a].titel} [${a}]`);
    if (SKRIV_SJALV[a][stadie]) delar.push(`Använd i din text: ${SKRIV_SJALV[a][stadie]}`);
    delar.push(...ovningar.map(ovning));
    for (const h of haftenForKapitel(a, stadie)) {
      if (sett.has(h.id) || (idFilter && !h.id.includes(idFilter))) continue;
      sett.add(h.id);
      delar.push("", hafte(h));
    }
    const prov = kapitelprovFor(a, stadie);
    if (prov && (!idFilter || prov.id.includes(idFilter))) {
      delar.push("", hafte(prov));
      const skriv = skrivdelFor(a, stadie);
      if (skriv) delar.push(`Skrivdel: ${skriv.uppgift} | Bedöm: ${skriv.kriterier.join("; ")}`);
    }
    delar.push("");
  });
  const start = hamtaHafte(STARTPROV_FOR[stadie]);
  if (start && (!idFilter || start.id.includes(idFilter))) delar.push("## Startprov (prövar föregående stadium)", hafte(start), "");
  const slut = hamtaHafte(`prov-${stadie}`);
  if (slut && (!idFilter || slut.id.includes(idFilter))) delar.push("## Slutprov", hafte(slut));
  const ao = arbetsomradenFor(stadie).filter((x) => !idFilter || x.id.includes(idFilter));
  if (ao.length) delar.push("", "## Arbetsområden", ...ao.map((x) => arbetsomrade(x) + "\n"));
  const lh = handledningar(stadie);
  if (lh.length) delar.push("", "## Lärarhandledningar", ...lh.map((x) => x + "\n"));
  const fil = path.join(ut, `${stadie}.md`);
  writeFileSync(fil, delar.join("\n") + "\n");
  console.log(`${fil} (${delar.join("\n").split("\n").length} rader)`);
}
