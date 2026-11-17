import type { ReactNode } from "react";
import type { AgeGroup } from "@/lib/supabase/types";
import { AMNEN, AMNEN_PER_STADIUM, type GrammatikAmne } from "@/lib/grammatik/amnen";
import { kapitelprovFor, STARTPROV_FOR } from "@/lib/grammatik/bok";
import { SKRIV_SJALV } from "@/lib/grammatik/skriv-sjalv";
import { skrivdelFor } from "@/lib/grammatik/prov-skrivdel";
import { hamtaHafte } from "@/lib/haften";
import {
  TYP_ETIKETT,
  fragorForLektion,
  hafteForOvning,
  malFor,
  reglerFor,
  type Fraga,
  type Lektion,
} from "@/lib/grammatik/lektioner";
import { MedMarkering } from "./med-markering";
import { Svarsalternativ } from "./presentation";
import QRCode from "qrcode";
import { SAJT } from "./qr-kod";

/* -------------------------------- Bildtyper -------------------------------- */

export function Overrad({ children }: { children: ReactNode }) {
  return <p className="mb-[1.2cqw] text-[1.7cqw] font-semibold uppercase tracking-[0.25em] text-sky-700">{children}</p>;
}

export function Rubrik({ children }: { children: ReactNode }) {
  return <h2 className="mb-[2.5cqw] text-[4.4cqw] font-bold leading-tight tracking-tight">{children}</h2>;
}

export function TitelBild({ lektion, overrad, idag }: { lektion: { titel: string }; overrad: string; idag: string }) {
  return (
    <div className="flex h-full flex-col justify-center border-l-[1.2cqw] border-sky-700 pl-[4cqw]">
      <Overrad>{overrad}</Overrad>
      <h1 className="text-[6.2cqw] font-bold leading-[1.05] tracking-tight">{lektion.titel}</h1>
      <p className="mt-[3cqw] max-w-[80%] text-[2.6cqw] leading-snug text-neutral-600">{idag}</p>
    </div>
  );
}

export function PunktBild({ overrad, rubrik, punkter }: { overrad: string; rubrik: string; punkter: string[] }) {
  return (
    <div className="flex h-full flex-col">
      <Overrad>{overrad}</Overrad>
      <Rubrik>{rubrik}</Rubrik>
      <ul className="space-y-[1.8cqw]">
        {punkter.map((p) => (
          <li key={p} className="flex gap-[1.6cqw] text-[2.7cqw] leading-snug">
            <span className="mt-[1cqw] h-[1.2cqw] w-[1.2cqw] shrink-0 rounded-full bg-sky-700" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FragaBild({ overrad, fraga, nr }: { overrad: string; fraga: Fraga; nr: number }) {
  return (
    <div className="flex h-full flex-col">
      <Overrad>
        {overrad} · Fråga {nr}
      </Overrad>
      {fraga.instruktion && <p className="mb-[1.2cqw] text-[2.1cqw] text-neutral-500">{fraga.instruktion}</p>}
      <p className="mb-[3cqw] text-[3.4cqw] font-semibold leading-snug">
        <MedMarkering text={fraga.fraga.replace(/_{3,}/g, "______")} />
      </p>
      <Svarsalternativ alternativ={fraga.alternativ} ratt={fraga.ratt} forklaring={fraga.forklaring} />
    </div>
  );
}

export function UppgiftBild({
  overrad,
  rubrik,
  text,
  punkter,
  qr,
}: {
  overrad: string;
  rubrik: string;
  text: string;
  punkter?: string[];
  qr?: { sokvag: string; text: string };
}) {
  return (
    <div className="flex h-full flex-col">
      <Overrad>{overrad}</Overrad>
      <Rubrik>{rubrik}</Rubrik>
      <div className="flex flex-1 items-start justify-between gap-[4cqw]">
        <div className="min-w-0 flex-1">
          <p className="text-[2.8cqw] leading-snug">{text}</p>
          {punkter && punkter.length > 0 && (
            <ul className="mt-[2.5cqw] space-y-[1.2cqw]">
              {punkter.map((p) => (
                <li key={p} className="flex gap-[1.4cqw] text-[2.3cqw] leading-snug text-neutral-700">
                  <span className="shrink-0 font-bold text-sky-700">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
        {qr && (
          <div className="shrink-0 text-center">
            <QrBild sokvag={qr.sokvag} />
            <p className="mt-[0.8cqw] max-w-[18cqw] text-[1.4cqw] leading-tight text-neutral-500">{qr.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/** QR-kod som skalar med bilden. */
async function QrBild({ sokvag }: { sokvag: string }) {
  const svg = await QRCode.toString(`${SAJT}${sokvag}`, { type: "svg", margin: 2, errorCorrectionLevel: "L" });
  return <div className="mx-auto h-[16cqw] w-[16cqw] bg-white [&_svg]:h-full [&_svg]:w-full" dangerouslySetInnerHTML={{ __html: svg }} />;
}

/* ------------------------------ Lektionernas bilder ------------------------------ */

function sidaText(sidor: Record<string, number>, amne: GrammatikAmne): string {
  return sidor[amne] ? `grammatikboken s. ${sidor[amne]}` : "grammatikboken";
}

/** Bilderna till en lektion. `sidor` = elevbokens sidnummer (hela boken). */
export function bilderForLektion(stadie: AgeGroup, ak: string, lektion: Lektion, sidor: Record<string, number>): ReactNode[] {
  const kapNr = (a: GrammatikAmne) => AMNEN_PER_STADIUM[stadie].indexOf(a) + 1;
  const overrad = lektion.amne ? `Lektion ${lektion.nr} · Kapitel ${kapNr(lektion.amne)} ${AMNEN[lektion.amne].titel}` : `Lektion ${lektion.nr}`;
  const fragor = (amne: GrammatikAmne, n: number) => fragorForLektion(stadie, ak, lektion, n, amne);
  const ut: ReactNode[] = [];

  switch (lektion.typ) {
    case "startprov":
    case "slutprov": {
      const prov = hamtaHafte(lektion.typ === "startprov" ? STARTPROV_FOR[stadie] : `prov-${stadie}`);
      ut.push(<TitelBild lektion={lektion} overrad={overrad} idag={prov ? `${prov.underrubrik}. ${prov.antalUppgifter} poäng.` : ""} />);
      if (prov)
        ut.push(
          <UppgiftBild
            overrad={overrad}
            rubrik="Så gör du"
            text={prov.regel[0] ?? ""}
            punkter={[...prov.regel.slice(1), "Arbeta enskilt och i lugn och ro.", "Hoppa över en uppgift du inte kan och gå tillbaka till den sist."]}
          />,
        );
      break;
    }

    case "repetition":
    case "slutrepetition": {
      const kap = lektion.repetera ?? [];
      ut.push(
        <TitelBild
          lektion={lektion}
          overrad={`${overrad} · ${TYP_ETIKETT[lektion.typ]}`}
          idag={`I dag repeterar vi ${kap.map((a) => AMNEN[a].titel.toLowerCase()).join(", ")}. Ingen ny genomgång – bara det viktigaste och några frågor.`}
        />,
      );
      for (const a of kap) {
        const r = reglerFor(a, stadie).slice(0, 3);
        if (r.length) ut.push(<PunktBild overrad={`Kom ihåg · Kapitel ${kapNr(a)}`} rubrik={AMNEN[a].titel} punkter={r} />);
        fragor(a, 1).forEach((f) => ut.push(<FragaBild overrad={`Repetition · ${AMNEN[a].titel}`} fraga={f} nr={1} />));
      }
      ut.push(
        <UppgiftBild
          overrad={overrad}
          rubrik="Nu: repetitionsuppgifter"
          text="Gör repetitionsuppgifterna på papperet. Är du osäker? Bläddra tillbaka till kapitlet i boken."
          punkter={kap.map((a) => `Kapitel ${kapNr(a)} ${AMNEN[a].titel} – ${sidaText(sidor, a)}`)}
        />,
      );
      break;
    }

    case "genomgang": {
      const a = lektion.amne!;
      const regler = reglerFor(a, stadie);
      const minDel = regler.filter((_, i) => Math.floor((i * lektion.av) / Math.max(regler.length, 1)) === lektion.del - 1);
      ut.push(
        <TitelBild
          lektion={lektion}
          overrad={overrad}
          idag={lektion.del === 1 ? `Det här lär du dig: ${malFor(a, stadie)}` : "Vi fortsätter med kapitlets regler – och tränar på dem tillsammans."}
        />,
      );
      if (lektion.del > 1 && regler.length)
        ut.push(<PunktBild overrad="Förra lektionen" rubrik="Kom ihåg" punkter={regler.slice(0, Math.min(2, regler.length))} />);
      // Högst cirka 260 tecken per bild, så att texten får plats i stor stil.
      const grupper: string[][] = [];
      for (const r of minDel) {
        const sista = grupper[grupper.length - 1];
        if (sista && sista.join("").length + r.length <= 260) sista.push(r);
        else grupper.push([r]);
      }
      grupper.forEach((g, i) => ut.push(<PunktBild overrad={overrad} rubrik={i === 0 ? "Så här fungerar det" : "Mer att veta"} punkter={g} />));
      fragor(a, 3).forEach((f, i) => ut.push(<FragaBild overrad={`Testa dig · ${AMNEN[a].titel}`} fraga={f} nr={i + 1} />));
      ut.push(
        <UppgiftBild
          overrad={overrad}
          rubrik="Läs mer och öva"
          text={`Genomgången och övningarna finns i ${sidaText(sidor, a)}. Börja med de första övningarna.`}
          qr={{ sokvag: `/${stadie}/grammatik/${a}`, text: "Öva på sajten – rättas direkt" }}
        />,
      );
      break;
    }

    case "ovning": {
      const a = lektion.amne!;
      const hafte = hafteForOvning(a, stadie, lektion.del);
      ut.push(<TitelBild lektion={lektion} overrad={overrad} idag={hafte ? `I dag: övningshäftet ”${hafte.titel}”.` : `I dag: övningarna i kapitlet, ${sidaText(sidor, a)}.`} />);
      fragor(a, 2).forEach((f, i) => ut.push(<FragaBild overrad={`Starta · ${AMNEN[a].titel}`} fraga={f} nr={i + 1} />));
      ut.push(
        <UppgiftBild
          overrad={overrad}
          rubrik="Dagens arbete"
          text={hafte ? `Övningshäfte: ${hafte.titel} – ${hafte.underrubrik}.` : `Övningarna i kapitel ${kapNr(a)}, ${sidaText(sidor, a)}.`}
          punkter={["Läs regeln överst först.", "Arbeta på papperet eller på sajten – där rättas uppgifterna direkt.", "Fastnar du? Titta i genomgången i boken."]}
          qr={{ sokvag: hafte ? `/ovningshaften/${hafte.id}` : `/${stadie}/grammatik/${a}`, text: "Gör uppgifterna på sajten" }}
        />,
      );
      break;
    }

    case "text": {
      const a = lektion.amne!;
      const uppgift = SKRIV_SJALV[a][stadie];
      const kriterier = skrivdelFor(a, stadie)?.kriterier ?? reglerFor(a, stadie).slice(0, 3);
      ut.push(<TitelBild lektion={lektion} overrad={overrad} idag="I dag använder du kapitlets regler i en egen text." />);
      ut.push(<UppgiftBild overrad={overrad} rubrik="Skriv" text={uppgift ?? "Skriv en kort text där du använder det du har lärt dig i kapitlet."} />);
      ut.push(<UppgiftBild overrad={overrad} rubrik="Kontrollera din text" text="Läs igenom texten. Har du tänkt på det här?" punkter={kriterier} />);
      break;
    }

    case "kapitelprov": {
      const a = lektion.amne!;
      const prov = kapitelprovFor(a, stadie);
      const skriv = skrivdelFor(a, stadie);
      ut.push(<TitelBild lektion={lektion} overrad={overrad} idag={prov ? `${prov.antalUppgifter} poäng${skriv ? " och en skrivdel som bedöms för sig" : ""}.` : ""} />);
      ut.push(
        <UppgiftBild
          overrad={overrad}
          rubrik="Så gör du"
          text="Läs instruktionen för varje del innan du börjar."
          punkter={["Arbeta enskilt.", "Läs igenom dina svar när du är klar.", ...(skriv ? [`Skrivdel: ${skriv.uppgift}`] : [])]}
        />,
      );
      break;
    }
  }
  return ut;
}
