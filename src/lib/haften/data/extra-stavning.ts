import type { HafteKalla } from "../typer";

export const EXTRA_STAVNING: HafteKalla[] = [
  {
    id: "stavning-8-o-a",
    titel: "Problem eller pråblem?",
    underrubrik: "o eller å, e eller ä",
    omrade: "Stavning",
    steg: 2,
    feltyper: ["stavning.ljud"],
    regel: [
      "Å-ljudet stavas ofta med o, särskilt när ljudet är kort: komma, sommar, kort, tolv, folk, problem, och, doktor.",
      "Men många ord stavas med å precis som de låter: gå, båt, många, någon, också.",
      "E och ä kan låta nästan likadant. Det finns ingen enkel regel – lär dig ordbilden: mer, ner, fel, vecka – men även, själv, väg, kännas, där.",
      "Är du osäker: tänk på ett släktord (känna – kännas, väg – vägar) eller slå upp ordet.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Vi har ett stort {pråblem|*problem}.
          Kan du {*komma|kåmma} hit en stund?
          I {såmmar|*sommar} ska vi resa till Grekland.
          Jag skrev ett {*kort|kårt} till mormor.
          Klockan är {tålv|*tolv}.
          Det var mycket {*folk|fålk} på torget.
          Mamma {*och|åch} pappa är hemma.
          Jag måste gå till {dåktorn|*doktorn}.
          Jag vill {*sova|såva} länge på lördag.
          Vi spelade {båll|*boll} på rasten.
          I sagan bor ett {*troll|tråll} under bron.
          Vi grillade {kårv|*korv} i skogen.
          Hon har en {*dotter|dåtter} och en son.
          Vill du ha {såcker|*socker} i teet?
          På {*onsdag|ånsdag} har vi idrott.
          Jag drack en {kåpp|*kopp} te.
          Hon plockade en {*blomma|blåmma}.
          Han sprang väldigt {fårt|*fort}.
          Vilken {*sport|spårt} tycker du om?
          Det är {*många|monga} som vill vara med.
          Är det {nogon|*någon} hemma?
          Jag vill {*också|ocksa} följa med.
          Vi ska {oka|*åka} buss till stan.
          Får jag {*låna|lona} din penna?
          Filmen var {trokig|*tråkig}.
          Kan du {*hålla|holla} i den här?
          Det känns {*lätt|lett} nu.
          Jag är {sjelv|*själv} hemma.
          Det ska {kennas|*kännas} bra.
          Hon kan {*även|even} spela piano.
          Vi gick längs en lång {veg|*väg}.
          Jag vill ha {*mer|mär} mjölk.
          Vi ses om en {*vecka|väcka}.
          Kan du {hjelpa|*hjälpa} mig?
          Jag ska {*berätta|beretta} något.
          Jag sover i min {seng|*säng}.
          Det blev {*fel|fäl} svar.
          Hon är {best|*bäst} i klassen.
          Vår {lerare|*lärare} heter Anna.
          Jag åker {*gärna|gerna} med.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv den bokstav som fattas. Välj mellan bokstäverna i parentesen.",
        typ: "skriv",
        rader: `
          Det var inget pr{o}blem. (o/å)
          Vi ska k{o}mma i tid. (o/å)
          Jag längtar till s{o}mmaren. (o/å)
          Håret är k{o}rt. (o/å)
          Han fyller t{o}lv år. (o/å)
          Det var mycket f{o}lk i affären. (o/å)
          Jag dricker mjölk {o}ch saft. (o/å)
          Hon vill bli d{o}ktor. (o/å)
          Bebisen ska s{o}va nu. (o/å)
          Vi sprang efter b{o}llen. (o/å)
          Vi åt k{o}rv med bröd. (o/å)
          Han kom f{o}rt hem. (o/å)
          Vi har idrott på t{o}rsdag. (o/å)
          Det finns m{o}ln på himlen. (o/å)
          Han ritade en bl{o}mma. (o/å)
          Vi ses i m{o}rgon. (o/å)
          Vi g{å}r till skolan. (o/å)
          Vi åkte b{å}t över sjön. (o/å)
          Hon har m{å}nga vänner. (o/å)
          Har n{å}gon sett min mössa? (o/å)
          Jag vill ocks{å} ha glass. (o/å)
          Vi ska {å}ka tåg. (o/å)
          Han gjorde två m{å}l i matchen. (o/å)
          Jag ska l{å}na en bok. (o/å)
          Det var en tr{å}kig dag. (o/å)
          Jag har en l{å}ng väg hem. (o/å)
          Det ska k{ä}nnas skönt. (e/ä)
          Jag kan klara det sj{ä}lv. (e/ä)
          Jag vill {ä}ven ha saft. (e/ä)
          Vilken v{ä}g ska vi ta? (e/ä)
          Får jag lite m{e}r? (e/ä)
          Vi gick n{e}r till sjön. (e/ä)
          Det var f{e}l av mig. (e/ä)
          Nästa v{e}cka har vi lov. (e/ä)
          Kan du hj{ä}lpa mig med läxan? (e/ä)
          Hon ska ber{ä}tta en saga. (e/ä)
          Boken ligger d{ä}r. (e/ä)
          H{ä}r bor jag. (e/ä)
          Det var l{ä}tt att förstå. (e/ä)
          Jag hjälper g{ä}rna till. (e/ä)
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Det finns ett stavfel i varje mening. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Det är inget pråblem. => Det är inget problem.
          Jag kåmmer snart. => Jag kommer snart.
          I såmmar badar vi. => I sommar badar vi.
          Hon skrev ett kårt till mig. => Hon skrev ett kort till mig.
          Vi slutar klockan tålv. => Vi slutar klockan tolv.
          Det var mycket fålk på stranden. => Det var mycket folk på stranden.
          Jag åch du är bästa vänner. => Jag och du är bästa vänner.
          Han vill såva hela dagen. => Han vill sova hela dagen.
          Vi spelade båll i parken. => Vi spelade boll i parken.
          Jag fick en kåpp varm choklad. => Jag fick en kopp varm choklad.
          Det är monga som gillar glass. => Det är många som gillar glass.
          Har nogon sett min katt? => Har någon sett min katt?
          Jag vill ocksa ha en bulle. => Jag vill också ha en bulle.
          Filmen var trokig. => Filmen var tråkig.
          Jag gjorde det sjelv. => Jag gjorde det själv.
          Hur ska det kennas? => Hur ska det kännas?
          Hon kan even simma. => Hon kan även simma.
          Vi gick vilse på vegen. => Vi gick vilse på vägen.
          Jag vill ha mär saft. => Jag vill ha mer saft.
          Kan du hjelpa mig? => Kan du hjälpa mig?
          Vi ses nästa väcka. => Vi ses nästa vecka.
          Min lerare är snäll. => Min lärare är snäll.
        `,
      },
    ],
  },
  {
    id: "stavning-9-vanliga-ord",
    titel: "Ord som ofta blir fel",
    underrubrik: "Vanliga ord med svår ordbild",
    omrade: "Stavning",
    steg: 2,
    feltyper: ["stavning.ovrigt"],
    regel: [
      "Vissa ord stavas inte som de låter. Då måste man lära sig ordbilden – hur ordet ser ut.",
      "Tänk på släktord: lugn – lugnt, möjlig – omöjlig, själv – självklart, intresse – intressant.",
      "Dela upp långa ord: till-sam-mans, e-gent-li-gen, näm-li-gen, un-ge-fär.",
      "Skriv ordet några gånger och titta på det. Då fastnar ordbilden.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Det var {lungt|*lugnt} i klassrummet.
          Jag gjorde läxan {*själv|sjelv}.
          Vi kommer {kansje|*kanske} i morgon.
          Vänta en {*sekund|sekunt}!
          Hon vill {ävven|*även} följa med.
          Ta på dig jackan, {anars|*annars} fryser du.
          Det var en {*hemsk|hämsk} film.
          Uppgiften var {omöjli|*omöjlig}.
          Vad betyder det {*egentligen|egentlien}?
          Boken var väldigt {intresant|*intressant}.
          Det tar {*ungefär|ungefer} en timme.
          Han kommer {altid|*alltid} för sent.
          Vi gjorde arbetet {*tillsammans|tilsammans}.
          Jag kan inte, jag är {nämlien|*nämligen} sjuk.
          {*Självklart|Sjävklart} får du följa med!
          Hon bor {fortfarnde|*fortfarande} kvar.
          Det var {*väldigt|väldit} kallt.
          Det fanns {ingeting|*ingenting} att göra.
          Jag har {*dessutom|desutom} glömt nyckeln.
          {Tyverr|*Tyvärr} kan jag inte komma.
          Det är {*ganska|gansa} långt dit.
          Han gjorde det {*ändå|endå}.
          Jag stannade hemma {därfor|*därför}.
          Hon har {faktist|*faktiskt} rätt.
          Det blev {*ordentligt|ordentlit} gjort.
          Du måste skriva {tydlit|*tydligt}.
          Vi kom {*tillbaka|tilbaka} sent.
          {Entligen|*Äntligen} är det fredag.
          Det finns en stor {skilnad|*skillnad}.
          Jag läste det i {*tidningen|tidingen}.
          Han är {mycke|*mycket} snäll.
          Det var {*precis|presis} rätt.
          Jag tänker {aldri|*aldrig} göra om det.
          Skriv din {adres|*adress} här.
          Det var {*särskilt|särskillt} roligt idag.
          Vi har {*olika|ollika} åsikter.
          Det är {*förmodligen|förmodlien} stängt.
          Jag var {*verkligen|värkligen} trött.
          Jag tycker om {*choklad|schoklad}.
          Det var ett bra {*tillfälle|tilfälle} att fråga.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv de bokstäver som fattas. Ledtråden i parentesen visar vad du ska välja mellan.",
        typ: "skriv",
        rader: `
          Sov l{ugn}t! (ung/ugn)
          Hon cyklade hem sj{ä}lv. (e/ä)
          Det är sj{ä}lvklart att du får vara med. (e/ä)
          Han kan{sk}e kommer i morgon. (sk/sj)
          Det tog bara en sek{und}. (unt/und)
          Jag vill {ä}ven läsa den boken. (e/ä)
          Skynda dig, a{nn}ars missar du bussen. (n/nn)
          Det var he{m}ska nyheter. (m/mm)
          Det är o{m}öjligt att hinna. (m/mm)
          Vem är du e{g}entligen? (g/j)
          Föredraget var intre{ss}ant. (s/ss)
          Det var ung{e}fär tio personer där. (e/ä)
          Det kostar unge{f}är hundra kronor. (f/v)
          Hon är a{ll}tid glad. (l/ll)
          Vi åt mat ti{ll}sammans. (l/ll)
          Vi spelade tillsa{mm}ans. (m/mm)
          Jag kan inte i dag, jag ska näm{l}igen träna. (l/ll)
          Han är fortfa{r}ande sjuk. (r/rr)
          Det var väldi{g}t gott. (g/j)
          Menar du verkli{g}en det? (g/j)
          Vi ses de{ss}utom på fredag. (s/ss)
          Tyv{ä}rr hann jag inte. (e/ä)
          Det är ga{n}ska varmt. (n/nn)
          Jag följde med än{d}å. (d/dd)
          Hon har fakti{sk}t vunnit. (sk/s)
          Städa ditt rum ordentli{g}t! (g/j)
          Skriv tydli{g}t, tack. (g/j)
          Kom ti{ll}baka hit! (l/ll)
          Äntli{g}en är det lov! (g/j)
          Vad är ski{ll}naden? (l/ll)
          Pappa läser ti{d}ningen. (d/dd)
          Tack så my{ck}et! (k/ck)
          Det var pre{c}is så det var. (s/c)
          Jag har a{ld}rig varit i Paris. (l/ld)
          Vad är din a{dr}ess? (dr/ddr)
          Jag gillar särski{l}t matte. (l/ll)
          Vi har o{l}ika färger på tröjorna. (l/ll)
          Han kommer förmodli{g}en sent. (g/j)
          Jag vill ha varm ch{o}klad. (o/å)
          Vi väntar på ett bättre ti{ll}fälle. (l/ll)
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Det finns ett stavfel i varje mening. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Det var lungt i skogen. => Det var lugnt i skogen.
          Jag gjorde det sjelv. => Jag gjorde det själv.
          Kansje kommer hon i morgon. => Kanske kommer hon i morgon.
          Vänta en sekunt! => Vänta en sekund!
          Hon kan ävven sjunga. => Hon kan även sjunga.
          Spring, anars missar du bussen. => Spring, annars missar du bussen.
          Det var en hämsk film. => Det var en hemsk film.
          Det är omöjlit att hinna. => Det är omöjligt att hinna.
          Vad vill du egentlien? => Vad vill du egentligen?
          Boken var intresant. => Boken var intressant.
          Det tar ungefer en timme. => Det tar ungefär en timme.
          Han är altid glad. => Han är alltid glad.
          Vi lekte tilsammans. => Vi lekte tillsammans.
          Jag är nämlien sjuk. => Jag är nämligen sjuk.
          Det är sjävklart att du får komma. => Det är självklart att du får komma.
          Hon bor fortfarnde kvar. => Hon bor fortfarande kvar.
          Det var väldit varmt. => Det var väldigt varmt.
          Tyverr kan jag inte komma. => Tyvärr kan jag inte komma.
          Hon har faktist rätt. => Hon har faktiskt rätt.
          Vi kom tilbaka sent. => Vi kom tillbaka sent.
          Vad är skilnaden? => Vad är skillnaden?
          Tack så myket! => Tack så mycket!
        `,
      },
    ],
  },
];
