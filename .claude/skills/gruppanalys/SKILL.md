---
name: gruppanalys
description: Analysera en hel grupps elevtexter i svenska. Tar fram stavfel och språkfel som finns i fler än 2 texter, feltyper per elev, läsbarhet, vad som fungerar bra och nästa steg för gruppen per område, elever med samma nästa steg och förslag på genomgångar. Använd när läraren vill analysera en klass, grupp eller flera texter samtidigt, eller frågar efter vanliga fel i gruppen.
argument-hint: "[gruppmapp i lararrum/grupper] [årskurs]"
---

# Gruppanalys

Resultatet är en lärarrapport (`gruppanalys.html`) med:
- **Stavfel i fler än 2 texter** (och andra vanliga språkfel), med elevernas felvarianter.
- En **ordlista att dela ut** till gruppen, utan elevnamn.
- **Per område** (innehåll, struktur, språk): vad som fungerar bra och nästa steg för gruppen.
- **Elever med samma nästa steg**, som underlag för genomgångar i mindre grupper.
- **Förslag på genomgångar** med länkar till övningar på elevsajten.
- Feltyper per elev och läsbarhet per text.

Allt som räknas (hur många texter ett fel finns i, medianer, matriser) görs av skriptet, inte av dig. Din uppgift är att läsa texterna noggrant och skriva analysen.

## 1. Underlag

Gruppens mapp: `lararrum/grupper/<grupp>/` (t.ex. `lararrum/grupper/5B-berattelse/`).
- Elevtexterna ligger i `texter/`, en fil per elev. Är de i andra format (docx, pdf, inklistrade): läs dem och spara som `.txt` där.
- **Alias**: använd filnamnet eller initialer som elevens alias. Skriv aldrig fullständiga namn i filer eller i chatten. Står elevens namn i filnamnet: föreslå för läraren att byta till initialer.
- Fråga efter **årskurs** och gärna **uppgift** om de saknas.

Finns det redan `/aterkoppling`-filer för texterna (`lararrum/aterkoppling/*.json`): kopiera dem till `analys/` i stället för att analysera på nytt. Skriptet läser båda formaten.

## 2. Analysera varje text

Läs hela texten. Skriv `analys/<alias>.json`:

```json
{
  "elev": "EA",
  "arskurs": 5,
  "text": "<elevtexten oförändrad, radbrytningar som \\n>",
  "fel": [
    { "fel": "komade", "ratt": "kom", "typ": "grammatik.bojning" },
    { "fel": "glas", "ratt": "glass", "typ": "stavning.dubbelteckning" }
  ],
  "styrkor": [{ "omrade": "innehall", "text": "Spännande inledning som väcker frågor." }],
  "nasta": [{ "omrade": "sprak", "text": "Sätt punkt i stället för 'och sen'.", "typ": "skiljetecken.punkt" }]
}
```

Regler för `fel`:
- Ta med **alla språkfel**, en rad per förekomst (samma fel tre gånger = tre rader). Det är så skriptet räknar.
- `fel` = exakt som eleven skrev. `ratt` = korrekt form av **samma ord eller fras**, i grundform om böjningen inte är felet (t.ex. "glass", inte "glassen" om eleven skrev "glasen"). Samma `ratt` för samma ord i alla texter, annars slås felen inte ihop.
- Fel som inte gäller ett enskilt ord (t.ex. meningar utan punkt, styckeindelning) läggs inte i `fel`. De syns i `nasta` och i läsbarheten.
- `typ`: id från feltypslistan i `.claude/skills/aterkoppling/SKILL.md` (avsnitt 3). Kör `npm run -s aterkoppling -- feltyper` för att se dem.

`styrkor`: 1–3 per elev. `nasta`: 1–3 per elev, prioriterade, alltid med `typ`.

## 3. Kör sammanställningen

```bash
npm run -s gruppanalys -- lararrum/grupper/<grupp>
```

Läs JSON-utskriften. Den visar vanliga fel, feltyper, vilka elever som har samma nästa steg, medianer och vilka elever som har mycket långa meningar. `okandaFeltyper` måste vara tom.

## 4. Skriv gruppens sammanfattning

Utgå från sammanställningen **och** din läsning av texterna. Skriv `grupp.json` i gruppmappen:

```json
{
  "grupp": "5B",
  "uppgift": "Berättande text",
  "omraden": [
    { "omrade": "innehall", "fungerarBra": "…", "nastaSteg": "…", "typ": "innehall.gestaltning" },
    { "omrade": "struktur", "fungerarBra": "…", "nastaSteg": "…", "typ": "struktur.stycken" },
    { "omrade": "sprak", "fungerarBra": "…", "nastaSteg": "…", "typ": "skiljetecken.punkt" }
  ],
  "genomgangar": [
    { "titel": "Punkt eller och sen?", "typ": "skiljetecken.punkt", "upplagg": "10 min: …" },
    { "titel": "De eller dem", "typ": "grammatik.de-dem", "elever": ["AB", "CD", "EF"], "upplagg": "…" }
  ],
  "tillEleverna": "Ord som många av oss behöver öva på:"
}
```

- `omraden`: ett per område. Konkret, med exempel ur texterna (utan elevnamn), och skrivet så att det kan klistras in i en pedagogisk planering eller Unikum.
- `genomgangar`: 2–4 förslag, prioriterade efter hur många elever de gäller. Hela gruppen om felet finns hos många, annars `elever` med deras alias. `upplagg`: kort lektionsupplägg (tid, aktivitet, exempelmeningar ur texterna som eleverna själva kan rätta). Basera dig på `nastaPerTyp` och `feltyper`.

Kör skriptet igen och öppna rapporten: `open lararrum/grupper/<grupp>/gruppanalys.html`.

## 5. Svara läraren

Kort i chatten:
- Gruppens 2–3 tydligaste styrkor och utvecklingsområden.
- De vanligaste stavfelen (fler än 2 texter).
- Vilken genomgång du föreslår först.

Vill läraren även ha individuell återkoppling: erbjud att köra `/aterkoppling` för varje text. Analysfilerna kan då användas som underlag.
