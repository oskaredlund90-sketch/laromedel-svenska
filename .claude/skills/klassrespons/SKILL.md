---
name: klassrespons
description: Återkoppling på en hel klass texter på en gång (t.ex. 30 texter) – individuell återkoppling med elevlänk och Unikum för varje elev, gruppanalys med stavfel i fler än 2 texter, och allt strukturerat i en mapp i Google Drive. Använd när läraren lägger in många texter samtidigt, nämner en hel klass/grupp eller vill ha återkopplingen i Drive.
argument-hint: "[gruppmapp i lararrum/grupper] [årskurs] [uppgift]"
---

# Klassrespons – många texter på en gång

Resultatet:
- **Varje elev**: återkoppling med kommentarer i texten, styrkor, nästa steg med övningar och övningshäften, synonymer, Unikum-förslag och elevlänk (precis som `/aterkoppling`).
- **Gruppen**: gruppanalys (som `/gruppanalys`).
- **Google Drive**: `Återkoppling / <grupp> – <uppgift> – <datum> /` med kalkylarket *Översikt*, dokumentet *Gruppanalys* och mappen *Elever* med ett dokument per elev.

Läs `.claude/skills/aterkoppling/SKILL.md` (hur en enskild återkoppling skrivs) och `.claude/skills/gruppanalys/SKILL.md` (avsnitt 4, gruppens sammanfattning) – den här färdigheten bygger på dem.

## 1. Förbered

Gruppmapp: `lararrum/grupper/<grupp>/` med elevtexterna i `texter/`, en fil per elev. Filnamnet (utan ändelse) är elevens alias – använd initialer, aldrig fullständiga namn. Står fullständiga namn i filnamnen: föreslå för läraren att byta.

Fråga efter **årskurs**, **uppgift/texttyp** och **gruppens namn** (t.ex. "5B") om de saknas. Fråga också om läraren har **bedömningskriterier eller en matris** för uppgiften – de ska då användas av alla.

Kör:

```bash
npm run -s klassrespons -- status lararrum/grupper/<grupp>
```

- `behoverKonverteras`: läs filerna (docx/pdf) och spara texten som `texter/<alias>.txt`. Ta bort eller flytta originalet när texten är sparad.
- `kvar`: texterna som behöver återkoppling. Är något redan klart (`klara`) görs det inte om – så kan arbetet fortsätta om det avbrutits.

## 2. Återkoppling på alla texter – parallellt

Dela upp texterna i `kvar` i omgångar om **5–6 texter** och starta en arbetare (Agent, general-purpose) per omgång, alla samtidigt. Varje arbetare får i sin uppgift:

- sökvägarna till sina texter och var resultatet ska sparas: `lararrum/grupper/<grupp>/analys/<alias>.json`,
- årskurs, uppgift, lärarens namn och eventuella bedömningskriterier,
- instruktionen: *"Läs .claude/skills/aterkoppling/SKILL.md och följ avsnitt 2–4 för varje text: kör profil-kommandot, analysera texten, skriv JSON-filen (med `elev` = alias) och kör `npm run -s aterkoppling -- bygg <fil>` tills `kommentarerSomInteHittades` och `okandaFeltyper` är tomma. Skapa inga andra filer. Svara kort med vilka filer som är klara och eventuella problem."*

Håll samma nivå och ton i alla omgångar – ge arbetarna samma instruktioner ordagrant.

När alla är klara: kör `status` igen. Finns det texter kvar, starta en ny omgång för dem.

## 3. Bygg allt och skriv gruppens sammanfattning

```bash
npm run -s klassrespons -- bygg lararrum/grupper/<grupp>
```

- `problem` måste vara tom. Rätta annars de filerna (oftast ett citat som inte är exakt) och bygg igen.
- Läs `sammanstallning` och skriv `lararrum/grupper/<grupp>/grupp.json` enligt gruppanalys-färdigheten (avsnitt 4): `grupp`, `uppgift`, `omraden` (område – fungerar bra – nästa steg), `genomgangar` och `tillEleverna`. Läs gärna några texter igen för konkreta exempel.
- Kör `bygg` igen så att sammanfattningen kommer med.

## 4. Lägg upp i Google Drive

Läs `drive/manifest.json`. Använd Drive-verktygen (`search_files`, `create_file`):

1. Leta upp mappen **Återkoppling** i Min enhet: `title = 'Återkoppling' and mimeType = 'application/vnd.google-apps.folder' and parentId = 'root'`. Finns den inte, skapa den: `create_file` med `title: "Återkoppling"` och `contentMimeType: "application/vnd.google-apps.folder"` (inget innehåll). Mappar skapas likadant med `parentId`.
2. Skapa undermappen `manifest.mapp` i den, och i den mappen **Elever**.
3. Ladda upp `Översikt` (innehållet i `oversikt.csv`, `contentMimeType: "text/csv"`) och `Gruppanalys` (innehållet i `gruppanalys.html`, `contentMimeType: "text/html"`) till gruppens mapp. De blir automatiskt ett kalkylark och ett dokument. Filernas innehåll ska skickas oförändrat. Fler än 10 elever: låt en arbetare göra den här uppladdningen, eftersom översikten blir stor (varje elevlänk är cirka 2 000 tecken).
4. Elevdokumenten (`manifest.elever`, `text/html` → dokument i mappen Elever):
   - upp till 8 elever: ladda upp dem själv,
   - fler: dela upp på arbetare (8–10 per arbetare) som var och en läser sina html-filer och laddar upp dem med `create_file` (`parentId` = Elever-mappens id, `title` från manifestet, `contentMimeType: "text/html"`). Ge dem mappens id och fillistan.
5. Kontrollera med `search_files` (`parentId = '<Elever-mappens id>'`) att alla elevdokument finns.

Lägg inte upp något annat i Drive, och dela ingenting med någon.

## 5. Svara läraren

Kort i chatten:
- Länk till Drive-mappen.
- Gruppens viktigaste styrkor och utvecklingsområden, och de vanligaste stavfelen i fler än 2 texter.
- Vilken genomgång du föreslår först.
- Att alla elevlänkar och Unikum-texter finns i kalkylarket *Översikt* (och i `lararrum/grupper/<grupp>/analys/*.html` lokalt).

Om användningsgränsen tar slut mitt i: säg hur långt du kom. Nästa gång räcker det att köra `/klassrespons` på samma mapp – `status` visar vad som är kvar.
