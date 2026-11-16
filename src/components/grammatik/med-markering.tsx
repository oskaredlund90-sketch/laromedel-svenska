import { Fragment } from "react";

/** Visar *ord* som markerade (fetstil och understrykning) i stället för med asterisker. */
export function MedMarkering({ text }: { text: string }) {
  const delar = text.split(/\*([^*]+)\*/);
  return (
    <>
      {delar.map((d, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="underline decoration-2 underline-offset-4">
            {d}
          </strong>
        ) : (
          <Fragment key={i}>{d}</Fragment>
        ),
      )}
    </>
  );
}
