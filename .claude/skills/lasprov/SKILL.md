---
name: lasprov
description: Rätta elevernas svar på läsförståelse med öppna frågor mot facit (Läsförståelse Steg 1–3). Poäng per fråga, resultat per läsförmåga (hitta, dra slutsatser, tolka, granska), elevlänk med träningsförslag, Unikum och gruppöversikt. Använd när läraren vill rätta läsförståelse, läsprov eller svar på frågor till en text, eller skapa svarsmallar för en text.
argument-hint: "[gruppmapp i lararrum/lasprov] [textId]"
---

# Läsprov – rätta öppna frågor mot facit

Texterna och facit är förlagets material. De ligger **bara lokalt** i `lararrum/lasforstaelse/` (facit i `facit/`, texterna avskrivna ur elevhäftet i `texter/`) och får aldrig publiceras, laddas upp på sajten eller committas. Eleverna läser texten på papper (eller i förlagets material) och skriver sina svar digitalt.

Resultatet:
- **varje elev**: poäng per fråga med en kort kommentar, resultat per läsförmåga och en elevlänk (`/lasresultat#…`) med tips och träning för de förmågor som behöver tränas,
- **gruppen**: översikt per förmåga, elevmatris och de frågor där gruppen tappade mest,
- **Unikum**-förslag och en översikt för Google Drive.

Läsförmågorna (PIRLS): **H** hitta efterfrågad information, **D** dra enkla slutsatser, **S** sammanföra och tolka, **G** granska och värdera.

## Före provet: svarsmall till eleverna

```bash
npm run -s lasprov -- texter            # lista alla texter med id (steg1-01 …)
npm run -s lasprov -- mall <textId>     # skapar lararrum/lasforstaelse/mallar/<textId>.html
```

Erbjud läraren att ladda upp mallen som ett Google Dokument i Drive (Drive-verktyget `create_file` med innehållet och `contentMimeType: "text/html"`). Läraren delar den sedan i Classroom med "Gör en kopia för varje elev". Mallen innehåller bara frågorna, inte texten eller facit.

## Efter provet: rätta

1. **Underlag.** Gruppmapp `lararrum/lasprov/<grupp>/` med elevernas svar i `svar/`.
   - **DigiExam-export (PDF med alla elever):** kör `npm run -s lasprov -- digiexam <pdf> lararrum/lasprov/<grupp> <första textId>`. Den delar upp svaren per elev (initialer) och per text och skriver `svar/<alias>.json`. Rätta utifrån de filerna – elevernas svar visas sedan automatiskt i rapporten och elevlänken.
   - Annars: en fil per elev (Google Dokument nedladdade som docx/pdf, DigiExam-export eller text). Filnamnet eller initialer = elevens alias. Aldrig fullständiga namn i filer eller chatten. Fråga efter årskurs om den saknas.

2. **Läs hela texten och facit.** `npm run -s lasprov -- fragor <textId>` ger `text` (hela texten med pratbubblor, bildbeskrivningar, faktarutor och ordlista) och frågorna med `facit`.
   - **Läs hela texten först, innan du rättar en enda fråga.** Facit visar bara exempelsvar – ett elevsvar kan vara rätt fast det inte står i facit, och bara texten avgör det (t.ex. att dottern kritiserar juicen längre fram i serien). Pröva varje svar mot texten: står det där, eller stöds det av den?
   - Läs varje frågas `facit` noggrant – den anger poängnivåer (t.ex. "4p om både … och …, 2p om antingen …") och exempelsvar.
   - **Saknas texten** (`textSaknas`): skriv av den först till `lararrum/lasforstaelse/texter/<textId>.md` ur elevhäftet (inskannad PDF, t.ex. `~/Downloads/Läsförståelse - Steg 1  - Ny version.pdf` – läs sidorna som bilder med Read och `pages`). Samma format som de befintliga filerna: Text ordagrant, Bilder (vad som syns + all text i pratbubblor ruta för ruta), Faktarutor, Ordlista. Fråga läraren efter häftet om det inte hittas. Rätta aldrig utan texten.
   - Skriv aldrig "kunde inte kontrollera mot texten" – kontrollera.

3. **Rätta varje elev** och skriv `lararrum/lasprov/<grupp>/rattning/<alias>.json`:

```json
{
  "elev": "EA",
  "textId": "steg1-03",
  "arskurs": 7,
  "svar": [
    { "nr": 1, "poang": 2, "kommentar": "Rätt – du hittade svaret i texten." },
    { "nr": 2, "poang": 1, "kommentar": "Du har med ett exempel, men frågan ber om två. Leta i stycke tre." }
  ],
  "helhet": "2–3 meningar till eleven: vad som gick bra och vad nästa steg är.",
  "larare": "Oskar",
  "unikum": "Läsförståelse – <titel>\nDet här fungerar bra: …\nNästa steg: …",
  "lararanteckning": "Valfritt: mönster, frågor att följa upp."
}
```

**Flera texter per elev** (t.ex. en DigiExam-export där eleven svarat på texterna i tur och ordning): använd `texter` i stället för `textId`/`svar`, och `prov` som namn:

```json
{ "elev": "NE", "prov": "Läsförståelse Steg 1", "arskurs": 7,
  "texter": [ { "textId": "steg1-01", "svar": [ … ] }, { "textId": "steg1-02", "svar": [ … ] } ], … }
```

Så känner du igen texterna i en export: numreringen börjar om på 1 när en ny text börjar, i samma ordning som i häftet (se `texter`). Kontrollera mot frågorna – svaren ska passa ihop med frågan med samma nummer. Har en elev svarat på en fråga under fel nummer: ge poäng där svaret hör hemma om det är tydligt, och nämn det i lärarens anteckning.

**Maxpoäng** = alla frågor i de texter eleven har påbörjat. Frågor efter elevens sista svar i en text blir 0 med kommentaren "Hann inte". Ta bara med de frågor eleven har svarat på i `svar`; en hoppad fråga mitt i blir 0 ("Inget svar").

Regler för rättningen:
- **Följ facit.** Ge poäng enligt facits nivåer. Exempelsvar är exempel – godta andra svar som uppfyller samma krav. Var konsekvent mellan eleverna.
- **Granska varje exempel – räkna inte bara.** När frågan ber om t.ex. fyra exempel: kontrollera att varje exempel är korrekt, faktiskt står i (eller stöds av) texten och svarar på frågan. Felaktiga eller påhittade exempel räknas inte. Skriv i kommentaren vilket exempel som inte godkändes och varför.
- **Räkna exempel, inte meningar.** Elever skriver ofta flera exempel i en och samma mening, bundna med *och, samt, men, eller, dessutom* eller komma ("Juicen innehåller mycket socker och grönsallad är inte särskilt nyttigt" = två exempel). Dela först upp svaret i påståenden och pröva varje påstående för sig. Ett exempel som är korrekt men formulerat kort eller inbakat i en annan mening räknas fullt ut. Ge bara delpoäng för "för få exempel" när du kan peka ut vilket exempel som saknas eller underkänns – och skriv i kommentaren vilka exempel du godkände ("Du har med X – men Y står inte i texten"), så att eleven ser att båda lästes.
- **Flervalsfrågor:** jämför bokstaven/alternativet med facit. Bara rätt alternativ ger poäng.
- Stavning och språk ger inte poängavdrag i läsförståelse, så länge svaret går att förstå.
- Svar som saknas = 0 poäng med kommentaren "Inget svar".
- **Kommentaren** (1–2 meningar, till eleven, i du-form): vid full poäng kort bekräftelse; annars vad som saknades och ett tips (t.ex. "Frågan ber om tre exempel – du har två").
- Skriv inte ut facits exempelsvar ordagrant i kommentaren.
- Förmåga, maxpoäng och frågetext fylls i automatiskt från facit.
- Många elever: dela upp rättningen på parallella arbetare (6–8 elever per arbetare) med samma instruktioner ordagrant – men låt en och samma arbetare rätta ett par elever först så att nivån kan kalibreras, och skicka med exempel på hur gränsfall bedömts.

4. **Bygg** elevlänkar och rapporter:

```bash
npm run -s lasprov -- bygg lararrum/lasprov/<grupp>
```

`problem` ska vara tomt (saknade frågor eller för höga poäng). Öppna `oversikt.html` för läraren (`open …`).

**Flervalsfrågor:** elevlänken visar elevens val med text ("B – egenkär") och rätt svar. Facit har bara det rätta alternativet – övriga hämtas ur alla gruppers elevsvar och ur `lararrum/lasforstaelse/alternativ.json`. Kör `npm run -s lasprov -- alternativ steg1` för att uppdatera filen och se vilka alternativ som saknar text. Fyll i dem själv från elevhäftet (t.ex. `~/Downloads/Läsförståelse - Steg 1  - Ny version.pdf` – inskannat, så läs uppgiftssidorna som bilder med Read och `pages`; uppgifterna står efter varje text). Text 1–6 i Steg 1 är redan ifyllda. Fråga läraren om häftet inte hittas. Bygg sedan om.

5. **Drive** (om läraren vill): ladda upp `drive/oversikt.csv` som kalkylark "Läsprov – <titel>" i mappen `Återkoppling/<grupp> – Läsprov – <datum>` (som i /klassrespons).

## Svara läraren

Kort i chatten: gruppens snitt per förmåga, vilken förmåga som behöver mest träning, 2–3 frågor att gå igenom tillsammans och var översikten finns. Elevlänkarna och Unikum-texterna finns i elevrapporterna och i oversikt.csv.
