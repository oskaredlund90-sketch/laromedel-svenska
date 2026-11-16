import QRCode from "qrcode";

export const SAJT = "https://laromedel-svenska.vercel.app";

/** QR-kod (SVG, skapas på servern) + adressen i klartext, så att eleven kan gå från pappret till sajten. */
export async function QrKod({ sokvag, text, storlek = 88, kompakt = false }: { sokvag: string; text?: string; storlek?: number; kompakt?: boolean }) {
  const url = `${SAJT}${sokvag}`;
  // Fyra modulers vit marginal (krävs av QR-standarden) och låg felkorrigering ger
  // färre och större moduler – lättare för mobilkameran att läsa på papper.
  const svg = await QRCode.toString(url, { type: "svg", margin: 4, errorCorrectionLevel: "L", color: { dark: "#000000", light: "#ffffff" } });
  if (kompakt)
    return (
      <div className="flex flex-col items-center gap-1 break-inside-avoid">
        <div className="shrink-0 bg-white" style={{ width: storlek, height: storlek }} dangerouslySetInnerHTML={{ __html: svg }} />
        <p className="text-center text-[7.5pt] leading-tight">Öva på sajten</p>
      </div>
    );
  return (
    <div className="flex items-center gap-3 break-inside-avoid">
      <div className="shrink-0 bg-white" style={{ width: storlek, height: storlek }} dangerouslySetInnerHTML={{ __html: svg }} />
      <div className="text-[9pt] leading-snug">
        {text && <p className="font-semibold">{text}</p>}
        <p className="break-all">{url.replace(/^https:\/\//, "")}</p>
      </div>
    </div>
  );
}
