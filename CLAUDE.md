@AGENTS.md

## Lärarverktyg i Claude (lokalt, ingen API-kostnad)

- AI-delarna körs som färdigheter i Claude Code: `.claude/skills/` (t.ex. `/aterkoppling`). Sajten själv har ingen AI.
- Elevtexter och rapporter ligger i `lararrum/` (gitignorerad – får aldrig committas). Använd alias/initialer, aldrig fullständiga elevnamn.
- Gemensam logik i `src/lib/aterkoppling/`: `feltyper.ts` (feltyper → övningslänkar), `lasbarhet.ts` (LIX, OVIX, spann per årskurs), `kodning.ts` (återkoppling packad i länkens #-del).
- `npm run aterkoppling -- profil|bygg|feltyper` – se `scripts/aterkoppling.ts`.
