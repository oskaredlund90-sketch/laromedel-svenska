@AGENTS.md

## Lärarverktyg i Claude (lokalt, ingen API-kostnad)

- AI-delarna körs som färdigheter i Claude Code: `.claude/skills/` (t.ex. `/aterkoppling`). Sajten själv har ingen AI.
- Elevtexter och rapporter ligger i `lararrum/` (gitignorerad – får aldrig committas). Använd alias/initialer, aldrig fullständiga elevnamn.
- Gemensam logik i `src/lib/aterkoppling/`: `feltyper.ts` (feltyper → övningslänkar), `lasbarhet.ts` (LIX, OVIX, spann per årskurs), `kodning.ts` (återkoppling packad i länkens #-del).
- `npm run aterkoppling -- profil|bygg|feltyper` – se `scripts/aterkoppling.ts`.
- `/gruppanalys`: `lararrum/grupper/<grupp>/{texter,analys}/` → `npm run gruppanalys -- <mapp>`. All räkning (fel i ≥3 texter, matriser) i `src/lib/aterkoppling/grupp.ts`, inte i AI:n.
- Veckans ord: `src/lib/veckansord/data/<ak1…ak9|gy1…gy3>.ts` (36 veckor, gemensamma teman i `typer.ts`). Kontrollera med `npm run veckansord -- kontrollera alla` (format, antal, inga dubbletter inom stadium).
- `/lasprov`: läsförståelse med öppna frågor rättas mot förlagets facit. Facit och texter ligger BARA i `lararrum/lasforstaelse/` (upphovsrätt – får aldrig publiceras eller committas). `npm run lasprov -- texter|fragor|mall|bygg`. Elevlänk: `/lasresultat#L1.…`.
