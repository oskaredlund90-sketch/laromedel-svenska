import type { ReactNode } from "react";
import type { AoBild, AoFraga, AoLektion, Arbetsomrade } from "@/lib/arbetsomraden/typer";
import { FragaBild, Overrad, PunktBild, Rubrik, TitelBild, UppgiftBild } from "@/components/grammatik/lektionsbilder";

function JamforBild({ overrad, rubrik, kolumner, rader }: { overrad: string; rubrik: string; kolumner: [string, string]; rader: [string, string][] }) {
  return (
    <div className="flex h-full flex-col">
      <Overrad>{overrad}</Overrad>
      <Rubrik>{rubrik}</Rubrik>
      <table className={`w-full border-collapse leading-snug ${rader.length > 4 ? "text-[1.85cqw]" : "text-[2.3cqw]"}`}>
        <thead>
          <tr className="border-b-[0.3cqw] border-sky-700 text-left">
            <th className="w-[38%] py-[0.8cqw] pr-[2cqw]">{kolumner[0]}</th>
            <th className="py-[0.8cqw]">{kolumner[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rader.map(([a, b]) => (
            <tr key={a} className="border-b border-neutral-300 align-top">
              <td className={`${rader.length > 4 ? "py-[0.55cqw]" : "py-[0.9cqw]"} pr-[2cqw] font-semibold`}>{a}</td>
              <td className={rader.length > 4 ? "py-[0.55cqw]" : "py-[0.9cqw]"}>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DiskuteraBild({ overrad, fragor }: { overrad: string; fragor: string[] }) {
  return (
    <div className="flex h-full flex-col">
      <Overrad>{overrad}</Overrad>
      <Rubrik>Diskutera</Rubrik>
      <ol className="space-y-[2cqw]">
        {fragor.map((f, i) => (
          <li key={f} className="flex gap-[2cqw] text-[3cqw] leading-snug">
            <span className="flex h-[5cqw] w-[5cqw] shrink-0 items-center justify-center rounded-full bg-amber-400 text-[2.4cqw] font-bold text-amber-950">{i + 1}</span>
            <span>{f}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function fraga(f: AoFraga, id: string) {
  return { id, fraga: f.fraga, alternativ: f.alternativ, ratt: f.ratt, forklaring: f.forklaring };
}

function bild(b: AoBild, overrad: string, nr: number): ReactNode {
  switch (b.typ) {
    case "punkter":
      return <PunktBild overrad={overrad} rubrik={b.rubrik} punkter={b.punkter} />;
    case "jamfor":
      return <JamforBild overrad={overrad} rubrik={b.rubrik} kolumner={b.kolumner} rader={b.rader} />;
    case "fraga":
      return <FragaBild overrad={overrad} fraga={fraga(b.fraga, `f${nr}`)} nr={nr} />;
    case "uppgift":
      return <UppgiftBild overrad={overrad} rubrik={b.rubrik} text={b.text} punkter={b.punkter} />;
    case "diskutera":
      return <DiskuteraBild overrad={overrad} fragor={b.fragor} />;
  }
}

/** Bilderna för förtestet: en fråga per bild. */
export function fortestBilder(ao: Arbetsomrade): ReactNode[] {
  const overrad = `${ao.titel} · Förtest`;
  return [
    <TitelBild key="t" lektion={{ titel: "Vad vet du redan?" }} overrad={overrad} idag={`${ao.fortest.length} frågor. Svara på papper – det gör inget om du inte vet. Vi ser vad vi behöver lära oss.`} />,
    ...ao.fortest.map((f, i) => <FragaBild key={i} overrad={overrad} fraga={fraga(f, `ft${i}`)} nr={i + 1} />),
  ];
}

export function lektionsBilder(ao: Arbetsomrade, l: AoLektion, nr: number): ReactNode[] {
  const overrad = `${ao.titel} · Lektion ${nr}`;
  let fragnr = 0;
  return [
    <TitelBild key="t" lektion={{ titel: l.titel }} overrad={overrad} idag={l.mal} />,
    ...l.bilder.map((b, i) => <div key={i} className="contents">{bild(b, overrad, b.typ === "fraga" ? ++fragnr : 0)}</div>),
  ];
}
