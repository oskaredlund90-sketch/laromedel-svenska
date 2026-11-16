import { cn } from "@/lib/utils";
import { facitText, utskriftsText, type Hafte } from "@/lib/haften/typer";

/**
 * Ett övningshäfte på papper. Standard: syns bara vid utskrift (häftessidan).
 * Med `synlig` visas det även på skärmen (grammatikboken).
 */
export function HaftePapper({
  hafte,
  medFacit,
  synlig = false,
}: {
  hafte: Hafte;
  medFacit: boolean;
  synlig?: boolean;
}) {
  return (
    <div
      className={cn(
        "text-[11pt] leading-relaxed",
        synlig ? "block" : "hidden text-black print:block",
      )}
    >
      <HafteUppgifter hafte={hafte} />
      {medFacit && (
        <div className="break-before-page">
          <h1 className="mb-2 text-[16pt] font-bold">Facit – {hafte.titel}</h1>
          <HafteFacit hafte={hafte} />
        </div>
      )}
    </div>
  );
}

/** Bara uppgifterna (utan facit). */
export function HafteUppgifter({
  hafte,
  utanRubrik = false,
}: {
  hafte: Hafte;
  utanRubrik?: boolean;
}) {
  return (
    <>
      {!utanRubrik && (
        <div className="mb-4 flex justify-between border-b border-current pb-2">
          <div>
            <p className="text-[9pt]">
              {hafte.omrade} · Steg {hafte.steg} · {hafte.antalUppgifter}{" "}
              uppgifter
            </p>
            <h1 className="text-[18pt] font-bold">{hafte.titel}</h1>
            <p>{hafte.underrubrik}</p>
          </div>
          <div className="self-end text-right text-[10pt]">
            <p>Namn: ______________________</p>
            {/prov$/i.test(hafte.omrade) && (
              <p className="mt-2">Poäng: ______ / {hafte.antalUppgifter}</p>
            )}
          </div>
        </div>
      )}
      <div className="mb-4 border border-current p-3">
        <p className="font-semibold">Kom ihåg</p>
        <ul className="list-disc pl-5">
          {hafte.regel.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
      {hafte.delar.map((d) => (
        <section key={d.rubrik} className="mb-4">
          <h2 className="mt-2 text-[13pt] font-bold">{d.rubrik}</h2>
          <p className="mb-2 italic">{d.instruktion}</p>
          <ol
            className={cn(
              "list-decimal pl-6",
              d.typ !== "ratta" && "columns-2 gap-8",
            )}
          >
            {d.uppgifter.map((u) => (
              <li key={u.id} className="mb-1 break-inside-avoid">
                {u.typ === "ratta" ? (
                  <>
                    {u.fel}
                    <br />
                    <span className="mt-2 block border-b border-dotted border-current">
                      &nbsp;
                    </span>
                  </>
                ) : (
                  <>
                    {utskriftsText(u)}
                    {u.ledtrad && ` (${u.ledtrad})`}
                  </>
                )}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </>
  );
}

/** Bara facit, i samma numrering som uppgifterna. */
export function HafteFacit({ hafte }: { hafte: Hafte }) {
  return (
    <>
      {hafte.delar.map((d) => (
        <section key={d.rubrik} className="mb-3">
          <h2 className="font-bold">{d.rubrik}</h2>
          <ol className="list-decimal columns-3 gap-6 pl-6 text-[9pt]">
            {d.uppgifter.map((u) => (
              <li key={u.id} className="break-inside-avoid">
                {facitText(u)}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </>
  );
}
