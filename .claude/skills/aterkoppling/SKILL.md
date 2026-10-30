---
name: aterkoppling
description: Ge återkoppling på en elevtext i svenska. Kommentarer direkt i texten om alla språkfel, återkoppling på innehåll, struktur och språk (fungerar bra / nästa steg), läsbarhetsprofil (LIX m.m.), förslag på Unikum-kommentar och en elevlänk med övningar. Använd när läraren klistrar in eller pekar på en elevtext, nämner återkoppling, respons, feedback, bedömning av text eller Unikum.
argument-hint: "[årskurs] [text eller fil i lararrum/texter]"
---

# Återkoppling på elevtext

Du hjälper en svensklärare att ge återkoppling på elevtexter. Resultatet blir:
1. en **lärarrapport** (HTML) med allt samlat,
2. en **elevlänk** som visar texten med kommentarer, styrkor, nästa steg och länkar till övningar på elevsajten,
3. ett **Unikum-förslag** att kopiera.

Allt körs lokalt. Elevlänken innehåller återkopplingen i själva länken (efter `#`), så inget sparas på någon server.

## 1. Ta reda på underlaget

- **Text**: inklistrad i chatten eller en fil i `lararrum/texter/`. Läs hela texten.
- **Årskurs**: 1–9, gymnasiet = 10–12. Fråga om den saknas – den styr nivån på allt.
- **Uppgift/texttyp** (t.ex. "Berättande text", "Insändare"): använd om läraren nämner den, annars gissa utifrån texten.
- **Elev**: använd bara **initialer eller ett alias** (t.ex. "EA"). Skriv aldrig ut fullständiga elevnamn i filer eller i chatten.

Kör läsbarhetsprofilen först (spara texten till en fil om den klistrats in):

```bash
npm run -s aterkoppling -- profil lararrum/aterkoppling/<datum>-<alias>.txt <årskurs>
```

Siffrorna är uträknade, inte bedömda – använd dem som underlag, särskilt `langaMeningar` (möjliga meningar utan punkt) och ordförrådet.

## 2. Analysera texten

Läs som en erfaren svensklärare för den årskursen. Utgå från vad som är rimligt att förvänta sig i årskursen (Lgr22 / ämnesplanen för gymnasiet), inte från vuxennormen.

**Kommentarer i texten (`kommentarer`)**
- Markera **alla språkfel**: stavning, särskrivning, stor/liten bokstav, böjning, ordföljd, de/dem, skiljetecken, meningsgränser.
- Kommer samma fel tillbaka många gånger: markera varje förekomst, men skriv bara utförlig kommentar på de första 2–3 – de övriga får en kort kommentar som "Samma som tidigare: dubbel konsonant."
- Lägg även till några kommentarer om struktur och innehåll där det hör hemma, och **2–4 positiva kommentarer** på ställen som fungerar riktigt bra (utan `typ`, eller med den typ som gjorts bra).
- `citat` måste vara en **exakt kopia** av texten i elevtexten (samma stavning, skiljetecken och mellanslag). Håll citaten korta, men så långa att de blir entydiga – eller ange `forekomst` (2 = andra gången citatet förekommer).
- Citat får inte överlappa varandra. Gäller kommentaren en hel mening (t.ex. en mening utan punkt): citera bara ett kort typiskt ställe, som "och sen öppnade", så att ordfelen i samma mening också kan markeras.
- `forslag` = rättad form när det finns en tydlig rättning.
- `typ` = id från feltypslistan nedan. Typen styr färg och övningslänkar.

**Helhet (`bra` och `nasta`)**
- `bra`: 2–4 konkreta styrkor, fördelade över innehåll, struktur och språk. Konkret = peka på något i texten.
- `nasta`: **2–3 prioriterade nästa steg** – de som gör störst skillnad, inte en lista över allt. Varje steg ska säga *hur* eleven gör, och ha en `typ` så att eleven får övningar.
- `helhet`: 2–4 meningar till eleven, varm och ärlig. Avsluta gärna med det viktigaste att jobba med.

**Ton efter ålder**
- Åk 1–3: mycket korta meningar, enkla ord, uppmuntrande. Max 2 nästa steg.
- Åk 4–6: tydligt och konkret, förklara begrepp kort.
- Åk 7–9 och gymnasiet: ämnesbegrepp är ok (t.ex. "sambandsord", "gestaltning", "tes").
- Skriv alltid i du-form till eleven.

**Synonymer (`synonymer`, valfritt)** – sajten räknar själv ut vanliga överanvända ord (bra, sa, gick, kul, jätte-, sen …) och visar synonymer. Lägg bara till egna förslag för ord som eleven upprepar och som inte finns i den listan, eller när texten behöver mer träffsäkra förslag: `[{ "ord": "promenerade", "forslag": ["vandrade", "strosade"] }]`. Egna förslag visas först.

**Övningshäften** – varje `typ` i `nasta` länkas automatiskt till övningssidor och till övningshäften (minst 100 uppgifter, kan skrivas ut med facit) på `/ovningshaften`. Välj därför alltid en `typ` för nästa steg.

**Unikum (`unikum`)** – bara text, inga markdown-tecken. Format:

```
Innehåll
Det här fungerar bra: …
Nästa steg: …

Struktur
Det här fungerar bra: …
Nästa steg: …

Språk
Det här fungerar bra: …
Nästa steg: …
```

**Lärarens anteckning (`lararanteckning`)** – valfri, bara för läraren: kort helhetsbedömning i förhållande till betygskriterierna (åk 6, 9, gymnasiet) eller "godtagbara kunskaper" (åk 1–3), och mönster värda att följa upp. Skriv tydligt att det är ett stöd – läraren gör bedömningen.

## 3. Feltyper

Använd bara dessa id:n för `typ`:

| id | Område | Gäller |
|---|---|---|
| stavning.dubbelteckning | språk | m/mm, n/nn, kort vokal + dubbel konsonant |
| stavning.ljud | språk | sj-, tj-, j-, ng-ljud, o/å, e/ä |
| stavning.sarskrivning | språk | sammansatta ord |
| stavning.stor-bokstav | språk | stor/liten bokstav |
| stavning.ovrigt | språk | annan stavning |
| grammatik.de-dem | språk | de/dem/dom |
| grammatik.genus | språk | en/ett, bestämd form, adjektiv efter en/ett, den/det |
| grammatik.bojning | språk | verb-, adjektiv-, substantivböjning, kongruens |
| grammatik.tempus | språk | växlar tid |
| grammatik.ordfoljd | språk | V2-regeln, BIFF, inversion |
| skiljetecken.punkt | språk | meningsgränser, punkt, frågetecken |
| skiljetecken.komma | språk | kommatering |
| skiljetecken.dialog | språk | repliker, talstreck, citattecken |
| ordval.precision | språk | allmänna/oprecisa ord |
| ordval.upprepning | språk | upprepade ord och meningsbörjan |
| ordval.stilniva | språk | talspråk, fel stilnivå |
| struktur.stycken | struktur | styckeindelning |
| struktur.textbindning | struktur | sambandsord |
| struktur.meningsvariation | struktur | variation i meningsbyggnad |
| struktur.inledning-avslutning | struktur | inledning och avslutning |
| innehall.gestaltning | innehåll | visa i stället för berätta |
| innehall.utveckla | innehåll | detaljer, exempel, förklaringar |
| innehall.argumentation | innehåll | tes, argument, motargument |
| innehall.kallor | innehåll | källor och citat |
| innehall.syfte-mottagare | innehåll | anpassning till syfte och mottagare |

Behövs en typ som saknas: använd närmaste befintliga och föreslå för läraren att lägga till den i `src/lib/aterkoppling/feltyper.ts`.

## 4. Skriv filen och bygg

Spara i `lararrum/aterkoppling/<ÅÅÅÅ-MM-DD>-<alias>.json` (mappen ignoreras av git):

```json
{
  "elev": "EA",
  "aterkoppling": {
    "v": 1,
    "arskurs": 5,
    "titel": "Den hemliga dörren",
    "uppgift": "Berättande text",
    "text": "<elevtexten exakt som den är>",
    "kommentarer": [
      { "citat": "komade", "typ": "grammatik.bojning", "kommentar": "Verbet komma heter kom i dåtid.", "forslag": "kom" },
      { "citat": "Hjärtat bultade", "kommentar": "Snyggt! Här visar du att hon är rädd utan att säga det." }
    ],
    "bra": [{ "omrade": "innehall", "text": "…" }],
    "nasta": [{ "omrade": "sprak", "text": "…", "typ": "skiljetecken.punkt" }],
    "helhet": "…",
    "larare": "Oskar"
  },
  "unikum": "Innehåll\nDet här fungerar bra: …",
  "lararanteckning": "…"
}
```

`text` ska vara elevtexten **oförändrad** (behåll radbrytningar som `\n`). Bygg sedan:

```bash
npm run -s aterkoppling -- bygg lararrum/aterkoppling/<fil>.json
```

Kontrollera utskriften:
- `kommentarerSomInteHittades` måste vara tom – annars rätta citaten (exakt kopia, ingen överlappning) och bygg igen.
- `okandaFeltyper` måste vara tom.

Öppna rapporten för läraren: `open <rapport>`.

## 5. Svara läraren

Kort i chatten:
- 2–3 meningar om textens viktigaste styrkor och utvecklingsområden.
- Elevlänken (hela länken, i ett kodblock så att den inte bryts).
- Att Unikum-texten finns att kopiera i rapporten.

Flera texter på en gång: gör steg 1–4 för varje text, och avsluta med en kort sammanfattning av mönster i gruppen.
