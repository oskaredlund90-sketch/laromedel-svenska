import type { ReactNode } from "react";
import type { TeacherGuide } from "@/lib/data/lararhandledningar";
import { PunktBild, TitelBild, UppgiftBild } from "@/components/grammatik/lektionsbilder";

/** Stegets rubrik utan tidsangivelse: "Före läsningen (5–10 min)" → "Före läsningen". */
export const stegRubrik = (steg: string) => steg.replace(/\s*\([^)]*\)\s*$/, "").trim();

/** Frågor till eleverna som står i stegets beskrivning. */
export function fragorISteg(beskrivning: string): string[] {
  return beskrivning
    .split(/(?<=[.?!])\s+/)
    .filter((m) => m.trim().endsWith("?"))
    .map((m) => m.split(":").pop()!.replace(/^[\s"”'„]+|[\s"”'„]+$/g, "").trim())
    .filter((m) => m.length > 8 && m.length < 140)
    .map((m) => m.charAt(0).toUpperCase() + m.slice(1));
}

/** Bedömningsstödet som elevens självskattning: "Kan eleven …?" → "Kan jag …?" */
export function sjalvskattning(bedomning: string[]): string[] {
  return bedomning.map((b) =>
    b
      .replace(/\beleven\b/g, "jag")
      .replace(/\belevens\b/g, "min")
      .replace(/\bhen\b/g, "jag")
      .replace(/\bsin\b/g, "min")
      .replace(/\bsitt\b/g, "mitt")
      .replace(/\bsina\b/g, "mina")
      .replace(/\bhen tänker\b/g, "jag tänker")
      .replace("till min samhälleliga", "till sin samhälleliga"),
  );
}

export function handledningsBilder(g: TeacherGuide): ReactNode[] {
  const overrad = `Lektion · ${g.title}`;
  const ut: ReactNode[] = [
    <TitelBild key="t" lektion={{ titel: g.title }} overrad={g.topics.join(" · ")} idag={g.description} />,
    <PunktBild key="a" overrad={overrad} rubrik="Dagens lektion" punkter={g.genomforande.map((s) => stegRubrik(s.steg))} />,
  ];
  g.genomforande.forEach((s, i) => {
    const fragor = fragorISteg(s.beskrivning);
    if (fragor.length) ut.push(<PunktBild key={`s${i}`} overrad={`${overrad} · ${stegRubrik(s.steg)}`} rubrik="Fundera och prata" punkter={fragor.slice(0, 4)} />);
  });
  ut.push(<UppgiftBild key="sj" overrad={overrad} rubrik="Hur gick det?" text="Tänk efter och svara för dig själv:" punkter={sjalvskattning(g.bedomningsstod).slice(0, 5)} />);
  return ut;
}
