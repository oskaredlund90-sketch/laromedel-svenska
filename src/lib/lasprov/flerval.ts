/**
 * Flervalsfrågor i läsproven. Facit anger bara det rätta alternativet
 * ("Svar: B, egenkär (2p)"). Texten till de andra alternativen hämtas ur
 * gruppens egna svar ("C: kärleksfull", "A klok B egenkär C …") så att
 * eleven kan se vad hen valde – inte bara bokstaven.
 */

const BOKSTAV = "A-F";

/** Det rätta alternativet ur facit, eller null om frågan inte är en flervalsfråga. */
export function rattAlternativ(facit: string): { bokstav: string; text: string } | null {
  const m = facit.match(new RegExp(`^\\s*Svar:\\s*([${BOKSTAV}])\\s*[,.:]\\s*([^(\\n]+?)\\s*(?:\\(|$)`, "m"));
  return m ? { bokstav: m[1], text: m[2].trim() } : null;
}

const stad = (s: string) =>
  s
    .replace(/\s+([.,!?])/g, "$1")
    .replace(/[\s.,!?:;–-]+$/g, "")
    .replace(/^[\s:;=,–-]+/, "")
    .trim()
    .toLowerCase();

/** Alternativ som eleven har skrivit ut, t.ex. "B: egenkär" eller en inklistrad lista "A klok B egenkär …". */
export function alternativIText(svar: string): Record<string, string> {
  const ut: Record<string, string> = {};
  const s = svar
    .replace(/-?\s*(?:eller\s+)?rätt\b\??/gi, " ")
    .replace(/\s*text\s*\d+\s*:?\s*$/i, "");
  // Inklistrad lista: minst tre fristående versaler A–F i ordning.
  const lista = [...s.matchAll(new RegExp(`(?:^|\\s)([${BOKSTAV}])\\s+([^${BOKSTAV}]*?[a-zåäö][^${BOKSTAV}]*?)(?=\\s[${BOKSTAV}]\\s|$)`, "g"))];
  if (lista.length >= 3) {
    for (const [, b, t] of lista) if (stad(t)) ut[b] = stad(t);
    return ut;
  }
  const m = s.match(new RegExp(`^\\s*\\(?([${BOKSTAV}])\\)?\\s*[:=,/–-]\\s*([^()]{2,40}?)\\s*\\)?\\s*[.!]?\\s*$`));
  if (m && stad(m[2])) ut[m[1]] = stad(m[2]);
  const p = s.match(new RegExp(`\\(([${BOKSTAV}])\\s*/\\s*([^)]{2,40})\\)`));
  if (p && stad(p[2])) ut[p[1]] = stad(p[2]);
  return ut;
}

/** Vilken bokstav eleven valde, eller null om det inte går att avgöra. */
export function valdBokstav(svar: string, alternativ: Record<string, string>): string | null {
  const s = svar.trim();
  // Inklistrad lista där eleven skrivit "- rätt" efter sitt val ("- eller rätt?" räknas inte).
  const rattMarkerad = s.match(new RegExp(`(?:^|\\s)([${BOKSTAV}])\\s+[^${BOKSTAV}]*?-\\s*rätt\\b(?!\\?)`));
  if (rattMarkerad) return rattMarkerad[1];
  // En inklistrad lista utan tydlig markering går inte att tolka.
  if ([...s.matchAll(new RegExp(`(?:^|\\s)[${BOKSTAV}]\\s`, "g"))].length >= 3) return null;
  const monster = [
    new RegExp(`^([${BOKSTAV}a-f])\\s*(?:$|[.:=,/)?–-]|\\s)`),
    new RegExp(`\\(([${BOKSTAV}])\\s*[/)]`),
    new RegExp(`alternativ\\s*\\(?([${BOKSTAV}])\\b`, "i"),
    new RegExp(`(?:^|\\s)([${BOKSTAV}])[.?!]?\\s*$`),
  ];
  for (const m of monster) {
    const t = s.match(m);
    if (t) return t[1].toUpperCase();
  }
  // Bara ordet ("Egenkär", "roman"): matcha mot kända alternativ.
  const traff = Object.entries(alternativ).filter(([, t]) => t.length >= 3 && s.toLowerCase().includes(t));
  return traff.length === 1 ? traff[0][0] : null;
}

/** Bygger bokstav → text per fråga ur facit och alla elevsvar. Vanligaste stavningen vinner. */
export function samlaAlternativ(facit: string, svar: string[]): Record<string, string> {
  const rakna: Record<string, Map<string, number>> = {};
  for (const s of svar)
    for (const [b, t] of Object.entries(alternativIText(s))) {
      rakna[b] ??= new Map();
      rakna[b].set(t, (rakna[b].get(t) ?? 0) + 1);
    }
  const ut: Record<string, string> = {};
  for (const [b, m] of Object.entries(rakna)) ut[b] = [...m.entries()].sort((x, y) => y[1] - x[1])[0][0];
  const ratt = rattAlternativ(facit);
  if (ratt) {
    // Skrivs det rätta alternativet med stor bokstav i facit är alternativen namn (t.ex. gudar).
    const namn = /^[A-ZÅÄÖ]/.test(ratt.text);
    for (const b of Object.keys(ut)) if (namn) ut[b] = ut[b].charAt(0).toUpperCase() + ut[b].slice(1);
    ut[ratt.bokstav] = ratt.text;
  }
  return ut;
}

/** "B – egenkär" (eller bara "B" om texten saknas). */
export function visaAlternativ(bokstav: string, alternativ: Record<string, string>): string {
  return alternativ[bokstav] ? `${bokstav} – ${alternativ[bokstav]}` : bokstav;
}
