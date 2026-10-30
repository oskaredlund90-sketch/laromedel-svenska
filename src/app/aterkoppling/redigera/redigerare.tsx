"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Copy, ExternalLink, Pencil, Plus, Trash2, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { packa, packaUpp } from "@/lib/aterkoppling/kodning";
import { delaISegment, placeraKommentarer, type Aterkoppling, type Punkt, type TextKommentar } from "@/lib/aterkoppling/typer";
import { FELTYPER, OMRADE_ETIKETT, hamtaFeltyp, type Omrade } from "@/lib/aterkoppling/feltyper";

const FARG: Record<string, string> = {
  bra: "bg-emerald-100 dark:bg-emerald-900/40",
  sprak: "bg-amber-100 dark:bg-amber-900/40",
  struktur: "bg-sky-100 dark:bg-sky-900/40",
  innehall: "bg-violet-100 dark:bg-violet-900/40",
};

function fargFor(typ?: string) {
  return typ ? FARG[hamtaFeltyp(typ)?.omrade ?? "sprak"] : FARG.bra;
}

/** Vilken förekomst av citatet som börjar på position start (1 = första). */
function forekomstVid(text: string, citat: string, start: number): number {
  let n = 0;
  let pos = -1;
  while ((pos = text.indexOf(citat, pos + 1)) !== -1 && pos <= start) n++;
  return Math.max(1, n);
}

type Markering = { start: number; slut: number; citat: string };

export function Redigerare() {
  const [data, setData] = useState<Aterkoppling | null>(null);
  const [fel, setFel] = useState<string | null>(null);
  const [redigerar, setRedigerar] = useState<number | null>(null);
  const [ny, setNy] = useState<Markering | null>(null);
  const [lank, setLank] = useState<string | null>(null);
  const [kopierat, setKopierat] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    packaUpp(window.location.hash)
      .then(setData)
      .catch(() => setFel("Länken kunde inte läsas. Öppna redigeringen från lärarrapporten."));
  }, []);

  const placering = useMemo(() => (data ? placeraKommentarer(data.text, data.kommentarer) : null), [data]);

  if (fel) return <div className="mx-auto max-w-3xl px-4 py-16 text-neutral-600">{fel}</div>;
  if (!data || !placering) return <div className="mx-auto max-w-3xl px-4 py-16 text-neutral-500">Laddar …</div>;

  const andra = (f: (a: Aterkoppling) => Aterkoppling) => {
    setData((d) => (d ? f(d) : d));
    setLank(null);
  };
  const andraKommentar = (index: number, k: Partial<TextKommentar>) =>
    andra((a) => ({ ...a, kommentarer: a.kommentarer.map((x, i) => (i === index ? { ...x, ...k } : x)) }));
  const taBort = (index: number) => andra((a) => ({ ...a, kommentarer: a.kommentarer.filter((_, i) => i !== index) }));

  /** Läser markerad text i elevtexten och räknar ut var den börjar. */
  const lasMarkering = () => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !textRef.current) return;
    const r = sel.getRangeAt(0);
    if (!textRef.current.contains(r.startContainer)) return;
    const fore = document.createRange();
    fore.selectNodeContents(textRef.current);
    fore.setEnd(r.startContainer, r.startOffset);
    const start = fore.toString().length;
    const citat = sel.toString();
    if (!citat.trim()) return;
    const slut = start + citat.length;
    if (data.text.slice(start, slut) !== citat) return;
    const krock = placering.placerade.some((k) => start < k.slut && slut > k.start);
    setNy(krock ? null : { start, slut, citat });
    if (krock) alert("Markeringen överlappar en befintlig kommentar. Ändra den kommentaren i stället.");
  };

  const skapaLank = async () => {
    const kod = await packa(data);
    setLank(`${window.location.origin}/aterkoppling#${kod}`);
  };

  const segment = delaISegment(data.text, placering.placerade);
  const nummer = new Map(placering.placerade.map((k, i) => [k.index, i + 1]));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium text-neutral-500">Lärarläge · inget sparas på sajten</p>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Redigera återkopplingen</h1>
      <p className="mt-2 max-w-3xl text-neutral-600 dark:text-neutral-400">
        Markera ord i texten för att lägga till en kommentar. Klicka på pennan för att ändra en kommentar, eller på papperskorgen för att ta
        bort den. Skapa sedan en ny elevlänk – den gamla länken påverkas inte.
      </p>

      <Card className="mt-6 border-emerald-300 dark:border-emerald-800">
        <CardContent className="flex flex-wrap items-center gap-3 p-5">
          <Button onClick={skapaLank}>
            <Check className="h-4 w-4" /> Skapa ny elevlänk
          </Button>
          {lank && (
            <>
              <input readOnly value={lank} className="min-w-0 flex-1 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900" />
              <Button
                variant="outline"
                onClick={() =>
                  navigator.clipboard.writeText(lank).then(() => {
                    setKopierat(true);
                    setTimeout(() => setKopierat(false), 1500);
                  })
                }
              >
                <Copy className="h-4 w-4" /> {kopierat ? "Kopierat!" : "Kopiera"}
              </Button>
              <Button variant="ghost" asChild>
                <a href={lank} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> Förhandsgranska
                </a>
              </Button>
            </>
          )}
          {!lank && <span className="text-sm text-neutral-500">{data.kommentarer.length} kommentarer</span>}
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <div
                ref={textRef}
                onMouseUp={lasMarkering}
                className="whitespace-pre-wrap font-serif text-[17px] leading-8 text-neutral-900 selection:bg-sky-200 dark:text-neutral-100"
              >
                {segment.map((s, i) =>
                  s.kommentar ? (
                    <mark
                      key={i}
                      onClick={() => setRedigerar(s.kommentar!.index)}
                      title={s.kommentar.kommentar}
                      className={cn("cursor-pointer rounded-sm text-inherit", fargFor(s.kommentar.typ), redigerar === s.kommentar.index && "outline-2 outline-neutral-900")}
                    >
                      {s.text}
                    </mark>
                  ) : (
                    <span key={i}>{s.text}</span>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <Helhet data={data} andra={andra} />
        </div>

        <div className="space-y-3 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-1">
          {ny && (
            <NyKommentar
              markering={ny}
              avbryt={() => setNy(null)}
              spara={(k) => {
                andra((a) => ({
                  ...a,
                  kommentarer: [...a.kommentarer, { ...k, citat: ny.citat, forekomst: forekomstVid(a.text, ny.citat, ny.start) }],
                }));
                setNy(null);
                window.getSelection()?.removeAllRanges();
              }}
            />
          )}
          {!ny && (
            <p className="flex items-center gap-2 rounded-lg border border-dashed border-neutral-300 p-3 text-sm text-neutral-500 dark:border-neutral-700">
              <Plus className="h-4 w-4" /> Markera ord i texten för att lägga till en kommentar.
            </p>
          )}
          {placering.placerade.map((k) => (
            <KommentarKort
              key={k.index}
              nr={nummer.get(k.index)!}
              kommentar={k}
              oppen={redigerar === k.index}
              oppna={() => setRedigerar(redigerar === k.index ? null : k.index)}
              andra={(x) => andraKommentar(k.index, x)}
              taBort={() => {
                taBort(k.index);
                setRedigerar(null);
              }}
            />
          ))}
          {placering.saknas.length > 0 && (
            <p className="text-sm text-amber-700">{placering.saknas.length} kommentar(er) kunde inte placeras i texten.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function TypVal({ varde, satt }: { varde?: string; satt: (t?: string) => void }) {
  return (
    <select
      value={varde ?? ""}
      onChange={(e) => satt(e.target.value || undefined)}
      className="w-full rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-sm dark:border-neutral-700 dark:bg-neutral-900"
    >
      <option value="">Beröm (Bra!)</option>
      {(Object.keys(OMRADE_ETIKETT) as Omrade[]).map((o) => (
        <optgroup key={o} label={OMRADE_ETIKETT[o]}>
          {FELTYPER.filter((f) => f.omrade === o).map((f) => (
            <option key={f.id} value={f.id}>
              {f.etikett}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}

const falt = "w-full rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-sm dark:border-neutral-700 dark:bg-neutral-900";

function NyKommentar({
  markering,
  avbryt,
  spara,
}: {
  markering: Markering;
  avbryt: () => void;
  spara: (k: Omit<TextKommentar, "citat">) => void;
}) {
  const [kommentar, setKommentar] = useState("");
  const [forslag, setForslag] = useState("");
  const [typ, setTyp] = useState<string | undefined>("stavning.ovrigt");
  return (
    <Card className="border-sky-400">
      <CardContent className="space-y-2 p-4">
        <p className="text-sm font-semibold">Ny kommentar på ”{markering.citat}”</p>
        <TypVal varde={typ} satt={setTyp} />
        <textarea autoFocus value={kommentar} onChange={(e) => setKommentar(e.target.value)} placeholder="Kommentar till eleven" className={cn(falt, "min-h-20")} />
        <input value={forslag} onChange={(e) => setForslag(e.target.value)} placeholder="Rättat förslag (valfritt)" className={falt} />
        <div className="flex gap-2">
          <Button size="sm" disabled={!kommentar.trim()} onClick={() => spara({ kommentar: kommentar.trim(), forslag: forslag.trim() || undefined, typ })}>
            Lägg till
          </Button>
          <Button size="sm" variant="ghost" onClick={avbryt}>
            Avbryt
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function KommentarKort({
  nr,
  kommentar: k,
  oppen,
  oppna,
  andra,
  taBort,
}: {
  nr: number;
  kommentar: TextKommentar;
  oppen: boolean;
  oppna: () => void;
  andra: (k: Partial<TextKommentar>) => void;
  taBort: () => void;
}) {
  return (
    <Card className={cn(oppen && "border-neutral-900 dark:border-white")}>
      <CardContent className="space-y-2 p-4 text-sm">
        <div className="flex items-start justify-between gap-2">
          <p>
            <b>{nr}.</b> <span className="text-neutral-500">{k.typ ? (hamtaFeltyp(k.typ)?.etikett ?? k.typ) : "Bra!"}</span> – ”{k.citat}”
          </p>
          <div className="flex shrink-0 gap-1">
            <button onClick={oppna} aria-label="Ändra" className="rounded p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {oppen ? <X className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
            </button>
            <button onClick={taBort} aria-label="Ta bort" className="rounded p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
        {oppen ? (
          <>
            <TypVal varde={k.typ} satt={(t) => andra({ typ: t })} />
            <textarea value={k.kommentar} onChange={(e) => andra({ kommentar: e.target.value })} className={cn(falt, "min-h-20")} />
            <input value={k.forslag ?? ""} onChange={(e) => andra({ forslag: e.target.value || undefined })} placeholder="Rättat förslag" className={falt} />
          </>
        ) : (
          <p className="text-neutral-700 dark:text-neutral-300">
            {k.kommentar}
            {k.forslag && <span className="text-emerald-700"> → {k.forslag}</span>}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function PunktRedigerare({ rubrik, punkter, satt }: { rubrik: string; punkter: Punkt[]; satt: (p: Punkt[]) => void }) {
  return (
    <div className="space-y-2">
      <p className="font-semibold">{rubrik}</p>
      {punkter.map((p, i) => (
        <div key={i} className="flex gap-2">
          <select
            value={p.omrade}
            onChange={(e) => satt(punkter.map((x, j) => (j === i ? { ...x, omrade: e.target.value as Omrade } : x)))}
            className="rounded-md border border-neutral-300 bg-white px-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          >
            {(Object.keys(OMRADE_ETIKETT) as Omrade[]).map((o) => (
              <option key={o} value={o}>
                {OMRADE_ETIKETT[o]}
              </option>
            ))}
          </select>
          <textarea
            value={p.text}
            onChange={(e) => satt(punkter.map((x, j) => (j === i ? { ...x, text: e.target.value } : x)))}
            className={cn(falt, "min-h-16")}
          />
          <button onClick={() => satt(punkter.filter((_, j) => j !== i))} aria-label="Ta bort" className="self-start rounded p-1 text-red-600 hover:bg-red-50">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
      <Button size="sm" variant="ghost" onClick={() => satt([...punkter, { omrade: "sprak", text: "" }])}>
        <Plus className="h-4 w-4" /> Lägg till
      </Button>
    </div>
  );
}

function Helhet({ data, andra }: { data: Aterkoppling; andra: (f: (a: Aterkoppling) => Aterkoppling) => void }) {
  return (
    <Card className="mt-6">
      <CardContent className="space-y-5 p-6 text-sm">
        <div className="space-y-2">
          <p className="font-semibold">Hälsning till eleven</p>
          <textarea value={data.helhet ?? ""} onChange={(e) => andra((a) => ({ ...a, helhet: e.target.value }))} className={cn(falt, "min-h-24")} />
        </div>
        <PunktRedigerare rubrik="Det här fungerar bra" punkter={data.bra} satt={(p) => andra((a) => ({ ...a, bra: p }))} />
        <PunktRedigerare rubrik="Nästa steg" punkter={data.nasta} satt={(p) => andra((a) => ({ ...a, nasta: p }))} />
      </CardContent>
    </Card>
  );
}
