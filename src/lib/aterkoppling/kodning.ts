/**
 * Packar en återkoppling till en kort sträng för länkens #-del och tillbaka.
 * JSON → deflate → base64url. Fungerar i både webbläsare och Node 18+.
 */

import { arAterkoppling, type Aterkoppling } from "./typer";

const PREFIX = "1.";

async function kor(data: Uint8Array, stream: CompressionStream | DecompressionStream): Promise<Uint8Array> {
  const ut = new Blob([data as BlobPart]).stream().pipeThrough(stream);
  return new Uint8Array(await new Response(ut).arrayBuffer());
}

function tillBase64url(bytes: Uint8Array): string {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function franBase64url(s: string): Uint8Array {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(b64 + "=".repeat((4 - (b64.length % 4)) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

export async function packa(a: Aterkoppling): Promise<string> {
  const json = new TextEncoder().encode(JSON.stringify(a));
  return PREFIX + tillBase64url(await kor(json, new CompressionStream("deflate-raw")));
}

export async function packaUpp(kod: string): Promise<Aterkoppling> {
  const ren = kod.replace(/^#/, "").trim();
  if (!ren.startsWith(PREFIX)) throw new Error("Okänt länkformat");
  const bytes = await kor(franBase64url(ren.slice(PREFIX.length)), new DecompressionStream("deflate-raw"));
  const data: unknown = JSON.parse(new TextDecoder().decode(bytes));
  if (!arAterkoppling(data)) throw new Error("Länken innehåller ingen giltig återkoppling");
  return data;
}
