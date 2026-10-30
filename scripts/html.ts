/** Gemensamt för lärarrapporterna (fristående HTML-filer som öppnas lokalt). */

export const BAS_URL = (process.env.AT_BASE_URL ?? "https://laromedel-svenska.vercel.app").replace(/\/$/, "");

export function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export const BAS_CSS = `
:root{--bg:#fafaf9;--kort:#fff;--text:#1c1917;--dim:#57534e;--linje:#e7e5e4;--accent:#047857}
@media (prefers-color-scheme:dark){:root{--bg:#0c0a09;--kort:#1c1917;--text:#f5f5f4;--dim:#a8a29e;--linje:#292524;--accent:#34d399}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:15px/1.55 system-ui,-apple-system,sans-serif}
main{max-width:1100px;margin:0 auto;padding:32px 16px 64px}h1{font-size:26px;margin:0 0 4px}h2{font-size:17px;margin:0 0 10px}
.dim{color:var(--dim)}.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}
.kort{background:var(--kort);border:1px solid var(--linje);border-radius:12px;padding:18px 20px}
.kopiera{display:flex;gap:8px;align-items:flex-start}.kopiera textarea,.kopiera input{flex:1;font:inherit;padding:8px 10px;border:1px solid var(--linje);border-radius:8px;background:var(--bg);color:var(--text)}
textarea{min-height:190px;resize:vertical}button{font:inherit;font-weight:600;padding:8px 14px;border-radius:8px;border:0;background:var(--accent);color:#fff;cursor:pointer}
a{color:var(--accent)}ol,ul{padding-left:18px;margin:0}li{margin:6px 0}section{margin-top:16px}
table{border-collapse:collapse;width:100%}th,td{padding:6px 8px;border-bottom:1px solid var(--linje);text-align:left;vertical-align:top}th{font-size:12px;color:var(--dim);font-weight:600}
.varning{border-color:#f59e0b}.tagg{display:inline-block;font-size:12px;padding:1px 8px;border-radius:99px;background:var(--bg);border:1px solid var(--linje);margin:2px 4px 2px 0}
@media print{button,.kopiera button{display:none}.kort{break-inside:avoid}}
`;

export const KOPIERA_JS = `<script>function kopiera(id,b){const el=document.getElementById(id);navigator.clipboard.writeText(el.value).then(()=>{const t=b.textContent;b.textContent='Kopierat!';setTimeout(()=>b.textContent=t,1500)})}</script>`;
