import QRCode from "qrcode";

export const SAJT = "https://laromedel-svenska.vercel.app";

/** QR-kod (SVG, skapas på servern) + adressen i klartext, så att eleven kan gå från pappret till sajten. */
export async function QrKod({ sokvag, text, storlek = 72 }: { sokvag: string; text?: string; storlek?: number }) {
  const url = `${SAJT}${sokvag}`;
  const svg = await QRCode.toString(url, { type: "svg", margin: 0, errorCorrectionLevel: "M", color: { dark: "#000000", light: "#ffffff" } });
  return (
    <div className="flex items-center gap-3 break-inside-avoid">
      <div className="shrink-0 bg-white p-1" style={{ width: storlek, height: storlek }} dangerouslySetInnerHTML={{ __html: svg }} />
      <div className="text-[9pt] leading-snug">
        {text && <p className="font-semibold">{text}</p>}
        <p className="break-all">{url.replace(/^https:\/\//, "")}</p>
      </div>
    </div>
  );
}
