import type { AgeGroup } from "@/lib/supabase/types";
import type { GrammarExercise, ResoneraExercise } from "@/lib/data/grammatik-ovningar";
import type { GrammatikAmne } from "../amnen";
import { bygg } from "./bygg";

/**
 * "Resonera och skriv": öppna uppgifter på en högre nivå än flerval – eleven
 * förklarar fel, skriver om, bygger ut, jämför, granskar och skriver vidare.
 * Uppgifterna är ordnade så att de leder mot elevens eget skrivande.
 *
 * Format: [variant, uppgift, underlag eller null, exempelsvar, checklista]
 */
type Rad = [ResoneraExercise["variant"], string, string | null, string, string[]];

const UPPGIFTER: Record<AgeGroup, Partial<Record<GrammatikAmne, Rad[]>>> = {
  /* ================================ Lågstadiet ================================ */
  lagstadiet: {
    ordklasser: [
      ["bygg-ut", "Gör meningen roligare att läsa. Sätt in två adjektiv som beskriver hunden och bollen.", "Hunden jagar bollen.", "Den lilla bruna hunden jagar den röda bollen.", ["Jag har två adjektiv", "Adjektiven beskriver hunden och bollen"]],
      ["forklara", "Linus säger att ”springa” är ett substantiv. Förklara varför han har fel.", null, "Springa är ett verb. Det är något man gör. Man kan säga jag springer. Man kan inte säga en springa om det man gör.", ["Jag skriver att springa är ett verb", "Jag förklarar med testet: jag springer"]],
    ],
    morfem: [
      ["forklara", "Vad betyder ordet ”glassbil”? Förklara hur du vet det.", null, "En glassbil är en bil som säljer glass. Det sista ordet, bil, säger vad det är.", ["Jag förklarar vad ordet betyder", "Jag skriver att bil säger vad det är"]],
      ["skriv-om", "Skriv meningen så att det handlar om flera katter.", "Katten sover i soffan.", "Katterna sover i soffan.", ["Jag har ändrat katten till katterna"]],
    ],
    stavning: [
      ["granska", "Hitta två stavfel och skriv meningarna rätt.", "Jag har en kat. Den gilar mjölk.", "Jag har en katt. Den gillar mjölk.", ["katt med två t", "gillar med två l"]],
      ["forklara", "Varför stavas ”boll” med två l?", null, "O:et i boll låter kort. Efter en kort vokal skriver man ofta två konsonanter.", ["Jag skriver att vokalen är kort", "Jag skriver att det då blir två konsonanter"]],
    ],
    satsdelar: [
      ["forklara", "Varför är ”Springer i parken.” ingen hel mening?", null, "Det saknas någon som gör något. Vem springer? Man behöver skriva till exempel Elsa springer i parken.", ["Jag skriver att det saknas vem som gör något", "Jag skriver en hel mening"]],
      ["bygg-ut", "Skriv tre meningar om en dag i skolan. Varje mening ska ha någon som gör något och något som händer.", null, "Ali läser en bok. Läraren skriver på tavlan. Vi äter lunch.", ["Tre meningar", "Varje mening har vem och vad som händer"]],
    ],
    meningsbyggnad: [
      ["skriv-om", "Dela upp den långa meningen i tre meningar med stor bokstav och punkt.", "jag vaknade och jag åt frukost och sedan gick jag till skolan", "Jag vaknade. Jag åt frukost. Sedan gick jag till skolan.", ["Tre meningar", "Stor bokstav i början", "Punkt i slutet"]],
      ["fortsatt", "Skriv två meningar till. Börja inte med ”Jag”.", "Jag gick ut i skogen.", "Där hörde jag en fågel. Plötsligt såg jag en räv.", ["Två meningar", "Ingen mening börjar med jag"]],
    ],
    samband: [
      ["bygg-ut", "Skriv klart meningarna. Berätta varför.", "Jag tar på mig stövlar eftersom …\nVi är glada eftersom …", "Jag tar på mig stövlar eftersom det regnar. Vi är glada eftersom det är lov.", ["Jag har skrivit klart båda meningarna", "Jag har berättat varför"]],
      ["forklara", "Vad är skillnaden mellan meningarna?", "Jag är trött eftersom jag sprang.\nJag sprang, så jag är trött.", "Båda handlar om samma sak. I den första står orsaken sist, efter eftersom. I den andra står följden sist, efter så.", ["Jag ser att de handlar om samma sak", "Jag förklarar eftersom och så"]],
    ],
    skiljetecken: [
      ["skriv-om", "Sätt ut rätt tecken i slutet: punkt, frågetecken eller utropstecken.", "Vad heter du\nAj, det gör ont\nJag heter Mia", "Vad heter du? Aj, det gör ont! Jag heter Mia.", ["Frågetecken efter frågan", "Utropstecken efter aj", "Punkt efter påståendet"]],
      ["forklara", "Varför ska det vara frågetecken efter ”Vill du leka”?", null, "Det är en fråga. Den som läser ska svara. Därför sätter man frågetecken.", ["Jag skriver att det är en fråga"]],
    ],
    textbindning: [
      ["skriv-om", "Byt ut namnet och ordet hunden så att de inte upprepas. Använd han och den.", "Sam har en hund. Sam går ut med hunden. Sam gillar hunden.", "Sam har en hund. Han går ut med den. Han gillar den.", ["Jag har bytt Sam mot han", "Jag har bytt hunden mot den", "Sam och hunden står bara en gång var"]],
      ["fortsatt", "Skriv fortsättningen. Använd först, sedan och till sist.", "Så här bakar du en kaka:", "Först blandar du mjöl och socker. Sedan häller du i ägg och mjölk. Till sist gräddar du kakan i ugnen.", ["Jag använder först, sedan och till sist", "Det står i rätt ordning"]],
    ],
  },

  /* =============================== Mellanstadiet ============================== */
  mellanstadiet: {
    ordklasser: [
      ["forklara", "Förklara vad som är fel i meningen och skriv den rätt.", "Huset var stor och vacker.", "Hus är ett ett-ord. Då ska adjektiven få -t: Huset var stort och vackert.", ["Jag förklarar att hus är ett ett-ord", "Jag skriver stort och vackert"]],
      ["bygg-ut", "Bygg ut meningen med minst tre adjektiv så att läsaren ser bilden framför sig.", "En katt satt på ett tak.", "En mager, grå katt satt på ett gammalt, rostigt tak.", ["Minst tre adjektiv", "Adjektiven passar ihop med substantiven (en grå katt, ett rostigt tak)"]],
      ["granska", "Texten blandar nu och då. Skriv om den så att allt står i preteritum (då-form).", "I går gick vi till stranden. Vi badar och äter glass. Sedan cyklade vi hem.", "I går gick vi till stranden. Vi badade och åt glass. Sedan cyklade vi hem.", ["badade i stället för badar", "åt i stället för äter"]],
    ],
    morfem: [
      ["forklara", "Vad betyder ordet ”omålad”? Dela ordet och förklara hur du kan lista ut betydelsen.", null, "o + mål + ad. Roten är mål (måla). O- betyder inte. Omålad betyder alltså att något inte är målat.", ["Jag delar ordet", "Jag förklarar vad o- betyder"]],
      ["jamfor", "Vilket ord är stavat rätt – ”kännd” eller ”känd”? Motivera med roten.", null, "Känd. Det kommer av känna, men före en annan konsonant blir det bara ett n: känd, kände.", ["Jag väljer känd", "Jag förklarar med roten känna"]],
      ["bygg-ut", "Gör så många nya ord som du kan av roten ”lek” med prefix, suffix och sammansättning. Skriv en mening med två av dem.", null, "lekfull, lekande, lekplats, lekte, leksak. Vi hittade en leksak på lekplatsen.", ["Minst fyra ord", "En mening med två av orden"]],
    ],
    ordbildning: [
      ["forklara", "Förklara skillnaden mellan ”en brunhårig sjuksköterska” och ”en brun hårig sjuk sköterska”.", null, "Skrivet ihop är det en sjuksköterska med brunt hår. Isär blir det en sköterska som är brun, hårig och sjuk. Särskrivning kan ändra betydelsen.", ["Jag förklarar båda betydelserna", "Jag skriver att det heter särskrivning"]],
      ["bygg-ut", "Hitta på tre nya sammansatta ord för saker som inte finns. Förklara vad de betyder.", null, "läxrobot – en robot som hjälper till med läxor. regnhatt – en hatt som är ett paraply. snabbcykel – en cykel som går extra fort.", ["Tre sammansatta ord", "Varje ord har en förklaring"]],
      ["forklara", "Varför skrivs ”fotbollsmatch” med s i mitten?", null, "Det är ett foge-s. Det binder ihop fotboll och match. Man hör s:et när man säger ordet.", ["Jag skriver att det är ett foge-s", "Jag förklarar att det binder ihop orden"]],
    ],
    stavning: [
      ["granska", "Stycket har tre stavfel. Skriv om det rätt och förklara ett av felen.", "Jag åkte till stokholm med min mormor. Vi tittade på slotet och åt glas.", "Jag åkte till Stockholm med min mormor. Vi tittade på slottet och åt glass. Stockholm är ett namn och ska ha stor bokstav.", ["Stockholm med stor bokstav och ck", "slottet och glass med dubbelteckning", "Jag förklarar ett fel"]],
      ["forklara", "Varför stavas ”hoppa” med två p men ”hopa” bara med ett?", null, "I hoppa är o:et kort, och då blir det dubbel konsonant. I hopa (lägga i en hög) är o:et långt.", ["Jag jämför kort och lång vokal"]],
    ],
    satsdelar: [
      ["forklara", "Ella säger att subjektet i ”I morgon åker vi till Göteborg” är ”I morgon”. Förklara varför hon har fel.", null, "Subjektet är den som gör något. Fråga: vem åker? – Vi. I morgon säger när, så det är ett adverbial.", ["Jag skriver att vi är subjekt", "Jag förklarar att i morgon är adverbial (när)"]],
      ["skriv-om", "Skriv meningen på två andra sätt genom att flytta satsdelarna.", "Vi åt glass på stranden i går.", "I går åt vi glass på stranden. På stranden åt vi glass i går.", ["Två nya meningar", "Verbet står på plats två i båda"]],
      ["bygg-ut", "Bygg ut meningen med ett objekt och två adverbial (när och var).", "Mormor bakade.", "Mormor bakade bullar i köket i lördags.", ["Ett objekt (vad bakade hon?)", "Ett adverbial för var och ett för när"]],
    ],
    meningsbyggnad: [
      ["forklara", "Förklara vad som är fel och skriv meningen rätt.", "I går jag spelade fotboll.", "Verbet ska stå på plats två. När i går står först kommer verbet direkt efter: I går spelade jag fotboll.", ["Jag förklarar regeln om verbet på plats två", "Jag skriver meningen rätt"]],
      ["skriv-om", "Alla meningar börjar likadant. Skriv om stycket så att minst två meningar börjar på ett annat sätt.", "Jag vaknade tidigt. Jag åt frukost. Jag cyklade till skolan. Jag träffade Lova.", "Jag vaknade tidigt. Efter frukosten cyklade jag till skolan. Där träffade jag Lova.", ["Minst två meningar börjar på nytt sätt", "Verbet står på plats två"]],
      ["fortsatt", "Skriv tre meningar till där minst en mening har en bisats (med när, eftersom eller att).", "Det var mörkt i stugan.", "Ingen sa något. När jag tände ficklampan såg jag en skugga. Jag visste att något var fel.", ["Tre meningar", "Minst en bisats"]],
    ],
    samband: [
      ["bygg-ut", "Skriv tre meningar: en med orsak (eftersom), en med följd (därför) och en med villkor (om).", "Använd orden: regn – paraply – utflykten ställs in", "Hon tog med paraply eftersom det regnade. Det regnade hela dagen. Därför ställdes utflykten in. Om det regnar i morgon också stannar vi inne.", ["En mening med eftersom", "En med därför", "En med om"]],
      ["forklara", "Vad är fel i meningen? Förklara och skriv den rätt.", "Vi stannade inne därför det regnade.", "Därför pekar fram mot följden. Här kommer orsaken efter, så det ska vara eftersom: Vi stannade inne eftersom det regnade.", ["Jag förklarar skillnaden mellan därför och eftersom", "Jag skriver meningen rätt"]],
      ["fortsatt", "Skriv tre meningar som förklarar varför man ska borsta tänderna. Använd minst två olika sambandsord.", null, "Man ska borsta tänderna eftersom det finns bakterier i munnen. Bakterierna gör hål i tänderna. Därför ska man borsta både morgon och kväll.", ["Tre meningar", "Minst två olika sambandsord"]],
    ],
    skiljetecken: [
      ["skriv-om", "Skriv dialogen med talstreck eller citattecken.", "Kom nu sa mamma. Jag kommer svarade Leo.", "– Kom nu! sa mamma.\n– Jag kommer, svarade Leo.", ["Varje replik på ny rad", "Talstreck eller citattecken", "Rätt tecken efter repliken"]],
      ["forklara", "Förklara varför det ska vara komma i meningen.", "Vi köpte mjölk, bröd, ost och äpplen.", "Det är en uppräkning. Mellan sakerna sätts komma, men inte före och i sista ledet.", ["Jag skriver att det är en uppräkning", "Jag nämner att det inte blir komma före och"]],
    ],
    textbindning: [
      ["skriv-om", "Skriv om stycket så att det inte upprepas. Använd pronomen och andra ord för katten.", "Katten heter Misse. Katten är svart. Katten sover mest hela dagen. Katten gillar fisk.", "Katten heter Misse. Hon är svart och sover mest hela dagen. Den lilla sömntutan gillar fisk.", ["Katten står bara en eller två gånger", "Jag använder pronomen", "Det går att förstå vem det handlar om"]],
      ["forklara", "Var ska det börja ett nytt stycke? Förklara varför.", "Vi åkte till landet på morgonen. Det tog två timmar. På kvällen kom ett oväder. Blixtarna lyste upp hela himlen.", "Nytt stycke vid ”På kvällen”. Tiden byts och det börjar något nytt – ovädret.", ["Jag pekar ut var stycket börjar", "Jag förklarar att tiden byts"]],
      ["fortsatt", "Skriv ett stycke på fyra meningar om ett djur. Använd minst tre sambandsord.", null, "Igelkotten sover hela vintern. Först gör den ett bo av löv. Sedan sover den i flera månader. När våren kommer vaknar den hungrig.", ["Fyra meningar", "Minst tre sambandsord"]],
    ],
  },

  /* ================================ Högstadiet ================================ */
  hogstadiet: {
    ordklasser: [
      ["forklara", "Förklara vad som är fel och skriv meningen rätt.", "Moa och sin bror åkte till Kiruna.", "Sin syftar tillbaka på subjektet och kan inte själv stå i subjektet. Det ska vara: Moa och hennes bror åkte till Kiruna.", ["Jag förklarar att sin inte kan stå i subjektet", "Jag skriver hennes"]],
      ["skriv-om", "Skriv om meningarna till passiv form. När passar passiv bättre än aktiv?", "Forskarna analyserade proverna. Kommunen stängde badhuset.", "Proverna analyserades av forskarna. Badhuset stängdes av kommunen. Passiv passar när det viktiga är vad som händer, inte vem som gör det – till exempel i en labbrapport.", ["Båda meningarna i passiv", "Jag förklarar när passiv passar"]],
      ["granska", "Stycket har tre fel med kongruens och tempus. Rätta och förklara ett av felen.", "Fönstret var öppen när vi kom hem. Katterna låg på soffan och såg trött ut. Sedan går vi och lade oss.", "Fönstret var öppet när vi kom hem. Katterna låg på soffan och såg trötta ut. Sedan gick vi och lade oss. Fönster är ett ett-ord, därför öppet.", ["öppet", "trötta", "gick", "Jag förklarar ett fel"]],
    ],
    morfem: [
      ["forklara", "Du möter ordet ”oersättlig” i en text. Visa hur du kan lista ut vad det betyder genom att dela ordet.", null, "o + er + sätt + lig. Roten är sätt (ersätta = byta ut). -lig gör det till ett adjektiv och o- betyder inte. Oersättlig = som inte går att ersätta.", ["Jag delar ordet i morfem", "Jag förklarar prefix, rot och suffix", "Jag skriver vad ordet betyder"]],
      ["jamfor", "”Glad – glatt”, ”känna – kände”. Förklara vad orden visar om hur roten påverkar stavningen.", null, "Roten stavas oftast likadant, men ljuden kan ändras när ändelser läggs till: d + t blir tt i glatt, och nn blir n före en annan konsonant i kände.", ["Jag förklarar glatt", "Jag förklarar kände", "Jag drar en slutsats om roten"]],
      ["bygg-ut", "Välj roten ”skriv”. Bilda minst fem ord med böjning, avledning och sammansättning och sortera dem.", null, "Böjning: skriver, skrev. Avledning: beskriva, skrivare. Sammansättning: skrivbord, skrivregler.", ["Minst fem ord", "Jag sorterar i böjning, avledning och sammansättning"]],
    ],
    ordbildning: [
      ["forklara", "Förklara varför det är fel att skriva ”IT avdelning” och ”rök fri”.", null, "Båda är sammansatta ord och ska skrivas ihop. Med förkortningar sätts bindestreck: IT-avdelning. Rökfri betyder utan rök, men rök fri kan läsas som att röken är gratis.", ["IT-avdelning med bindestreck", "rökfri ihop", "Jag förklarar att särskrivning kan ändra betydelsen"]],
      ["jamfor", "Välj de tre lånord du tycker passar sämst i en formell text och föreslå svenska ord i stället. Motivera.", "deadline, feedback, mejl, nice, meeting", "deadline → sista dag, nice → trevlig, meeting → möte. Mejl och feedback är så vanliga att de går bra – men nice och meeting är vardagliga och har bra svenska ord.", ["Tre ord med svenska förslag", "Jag motiverar valet"]],
    ],
    stavning: [
      ["forklara", "Varför stavas ”rum” med ett m men ”damm” med två?", null, "Ord som slutar på m skrivs oftast med ett m (rum, hem). Damm har två m eftersom roten har dubbelteckning i andra former: dammet, dammig. Fråga dig hur ordet låter när det böjs.", ["Jag förklarar regeln om ett m i slutet", "Jag förklarar med de böjda formerna"]],
      ["granska", "Läs stycket och hitta de fyra felen med stor och liten bokstav. Skriv om och förklara ett av felen.", "På Måndag ska vi läsa en Roman av Astrid lindgren. Den heter Bröderna Lejonhjärta och handlar om två Svenska bröder.", "På måndag ska vi läsa en roman av Astrid Lindgren. Den heter Bröderna Lejonhjärta och handlar om två svenska bröder. Veckodagar skrivs med liten bokstav.", ["måndag", "roman", "Lindgren", "svenska", "Jag förklarar ett fel"]],
    ],
    satsdelar: [
      ["forklara", "Förklara skillnaden mellan ”Hon blev läkare” och ”Hon träffade en läkare”.", null, "I hon blev läkare är läkare predikativ – det beskriver subjektet, hon är läkaren. I hon träffade en läkare är läkaren någon annan, ett objekt.", ["Jag använder orden predikativ och objekt", "Jag förklarar vem som är läkare"]],
      ["bygg-ut", "Bygg ut subjektet till en lång nominalfras med attribut både före och efter huvudordet.", "Stugan brann ner.", "Den gamla röda stugan vid sjön, som min morfar byggde, brann ner.", ["Attribut före huvudordet", "Attribut efter huvudordet", "Verbet passar fortfarande ihop med subjektet"]],
      ["skriv-om", "Skriv meningen så att olika satsdelar betonas. Förklara vad som framhävs i varje version.", "Vi åkte till Rom i påskas.", "I påskas åkte vi till Rom (tiden framhävs). Till Rom åkte vi i påskas (platsen framhävs – kanske i stället för någon annanstans).", ["Två nya versioner", "Jag förklarar vad som betonas"]],
    ],
    meningsbyggnad: [
      ["forklara", "Förklara vad som är fel och skriv meningen rätt.", "Jag förstår inte varför hon kommer aldrig i tid.", "I bisatser står satsadverbial som aldrig före det finita verbet (BIFF): … varför hon aldrig kommer i tid.", ["Jag nämner BIFF eller bisatsens ordföljd", "Jag skriver meningen rätt"]],
      ["skriv-om", "Skriv om stycket så att det känns spännande. Använd korta meningar och variera meningsbörjan.", "Jag gick in i det mörka huset och jag hörde ett ljud och jag blev rädd och sprang ut igen.", "Huset var mörkt. Jag gick in. Ett ljud. Någon andades. Jag vände mig om och sprang.", ["Korta meningar", "Varierad meningsbörjan", "Ingen och-kedja"]],
      ["jamfor", "Vilken version passar bäst i en instruktion och vilken i en berättelse? Motivera.", "A: Häll i mjölet. Rör om. Låt degen vila.\nB: Hon hällde långsamt i mjölet och rörde om medan regnet smattrade mot fönstret.", "A passar i en instruktion: korta meningar i imperativ, en sak i taget. B passar i en berättelse: längre mening med bisats som skapar stämning.", ["Jag kopplar A till instruktion", "Jag kopplar B till berättelse", "Jag motiverar med meningsbyggnaden"]],
    ],
    samband: [
      ["skriv-om", "Uttryck samma orsak på tre olika sätt: med bisats, med ”på grund av” och med ett verb.", "Det snöade. Tåget blev försenat.", "Tåget blev försenat eftersom det snöade. Tåget blev försenat på grund av snöovädret. Snöovädret ledde till att tåget blev försenat.", ["Bisats med eftersom", "På grund av + nominalfras", "Ett verb som leder till eller orsakade"]],
      ["forklara", "Vad är fel i resonemanget? Förklara.", "Glassförsäljningen ökar på sommaren. Samtidigt ökar antalet drunkningsolyckor. Alltså leder glass till drunkning.", "Två saker som hänger ihop behöver inte orsaka varandra. Båda beror på en tredje sak: varmt väder, då fler äter glass och fler badar.", ["Jag skriver att samband inte är samma sak som orsak", "Jag pekar ut den bakomliggande orsaken"]],
      ["fortsatt", "Skriv ett argumenterande stycke med en tes och två skäl. Använd minst ett orsakssamband och ett villkor.", "Tes: Skoldagen borde börja senare.", "Skoldagen borde börja senare. Tonåringar sover sämre tidigt på morgonen eftersom deras dygnsrytm förskjuts. Det leder till att många är trötta på första lektionen. Om skolan började klockan nio skulle fler orka koncentrera sig.", ["Tesen står först", "Två skäl", "Ett orsakssamband och ett villkor"]],
    ],
    skiljetecken: [
      ["forklara", "Förklara skillnaden i betydelse mellan meningarna.", "Eleverna som hade läst boken fick gå tidigare.\nEleverna, som hade läst boken, fick gå tidigare.", "Utan komma: bara de elever som hade läst boken fick gå. Med komma: alla elever hade läst boken och alla fick gå. Kommat gör bisatsen till extra information.", ["Jag förklarar meningen utan komma", "Jag förklarar meningen med komma"]],
      ["granska", "Stycket har satsradning och saknar kolon. Skriv om det med rätt skiljetecken.", "Det regnade hela dagen, vi stannade inne. Vi behövde tre saker filtar, te och en bra film.", "Det regnade hela dagen, så vi stannade inne. Vi behövde tre saker: filtar, te och en bra film.", ["Satsradningen är rättad (så, punkt eller semikolon)", "Kolon före uppräkningen"]],
    ],
    textbindning: [
      ["skriv-om", "Skriv om stycket så att det hänger ihop. Lägg till sambandsmarkörer och syftningar.", "Många unga sover för lite. Mobilen används sent på kvällen. Unga är trötta i skolan. Skolor borde informera om sömn.", "Många unga sover för lite. En orsak är att mobilen används sent på kvällen. Därför är många trötta i skolan. Skolorna borde alltså informera mer om sömn.", ["Minst tre sambandsmarkörer", "Meningarna hänger ihop", "Inga onödiga upprepningar"]],
      ["forklara", "Vem är ”hon” i texten? Förklara problemet och skriv om så att det blir tydligt.", "Sara mötte Lina på stationen. Hon var arg.", "Det går inte att veta om Sara eller Lina var arg. Skriv: Sara mötte Lina på stationen. Lina var arg.", ["Jag förklarar att syftningen är otydlig", "Jag skriver om så att det blir tydligt"]],
      ["fortsatt", "Skriv ett stycke till med en tydlig kärnmening först. Låt det nya i en mening bli det kända i nästa (tematisk bindning).", "Plast hamnar i haven varje år.", "Plasten bryts sakta ner till mikroplast. Mikroplasten äts av fiskar och fåglar. De i sin tur kan hamna på våra tallrikar. Därför angår plasten i haven oss alla.", ["Kärnmening först", "Det nya i en mening tas upp i nästa", "Minst fyra meningar"]],
    ],
    stilistik: [
      ["skriv-om", "Skriv om sms:et så att det passar i ett mejl till rektorn.", "Tja! Kan vi typ få längre lunch? Det e skitkort nu asså.", "Hej! Vi undrar om det är möjligt att förlänga lunchrasten. Många elever upplever att den är för kort för att hinna äta i lugn och ro. Vänliga hälsningar, klass 8B", ["Hälsning och avslutning", "Inga slangord", "Ett tydligt skäl"]],
      ["forklara", "Vilken stilfigur används? Förklara vilken effekt den har.", "Vi kämpar för klimatet. Vi kämpar för framtiden. Vi kämpar för våra barn.", "Det är en anafor: samma ord inleder varje mening. Upprepningen ger rytm och kraft och gör att budskapet fastnar.", ["Jag namnger stilfiguren", "Jag förklarar effekten"]],
      ["fortsatt", "Skriv en inledning till ett tal om något du tycker är viktigt. Använd minst två stilfigurer och skriv vilka.", null, "Tänk dig en skola utan stress. En skola där alla får växa. En skola där ingen sitter ensam. (Anafor och tretal.) Är det för mycket begärt? (Retorisk fråga.)", ["Minst två stilfigurer", "Jag skriver vilka stilfigurer jag använt"]],
    ],
  },

  /* ================================= Gymnasiet ================================ */
  gymnasiet: {
    ordklasser: [
      ["forklara", "Förklara varför meningen är dubbeltydig och skriv två entydiga versioner.", "Han lovade Erik att han skulle komma.", "Han kan syfta på personen som lovade eller på Erik. Entydigt: Han lovade Erik att själv komma. / Han lovade att Erik skulle få komma.", ["Jag förklarar dubbeltydigheten", "Två entydiga versioner"]],
      ["jamfor", "Jämför aktiv och passiv i meningarna. Vilken passar i en debattartikel och vilken i en metoddel? Motivera.", "A: Regeringen har fattat ett felaktigt beslut.\nB: Ett felaktigt beslut har fattats.", "A passar i en debattartikel – där vill man visa vem som är ansvarig. B passar i en metoddel där handlingen är viktigare än vem som utförde den. I debatt kan passiv dölja ansvar.", ["Jag kopplar A till debatt", "Jag kopplar B till metod", "Jag tar upp att passiv kan dölja ansvar"]],
      ["granska", "Rätta kongruensfelen och förklara vad som lurar skribenten.", "Resultatet av de många undersökningarna var tydliga. Varje deltagare fick ta med deras dator.", "Resultatet … var tydligt (huvudordet är resultatet, inte undersökningarna). Varje deltagare fick ta med sin dator (varje är singular). Det som lurar är ord i närheten som står i plural.", ["tydligt", "sin dator", "Jag förklarar att huvudordet styr"]],
    ],
    morfem: [
      ["forklara", "Visa med morfemanalys vad ordet ”interkulturell” betyder.", null, "inter- (mellan, latin) + kultur + -ell (adjektiv). Interkulturell = som sker mellan kulturer.", ["Jag delar ordet", "Jag förklarar lånmorfemen", "Jag skriver betydelsen"]],
      ["bygg-ut", "Välj ett fackord från ett annat ämne. Dela det i morfem och skriv en förklaring som en elev i årskurs 7 förstår.", null, "fotosyntes: foto (ljus) + syntes (sammansättning). Växterna bygger ihop socker med hjälp av ljus.", ["Ett fackord", "Morfemanalys", "En enkel förklaring"]],
    ],
    ordbildning: [
      ["jamfor", "Nominalstil eller verbalstil? Skriv om meningen i verbalstil och motivera vilken som passar en populärvetenskaplig text.", "Genomförandet av en utvärdering av effekterna av reformen ägde rum under våren.", "I våras utvärderade man hur reformen hade fungerat. Verbalstil är lättare att läsa och passar bättre för en bred läsekrets.", ["Verbalstil med verb i stället för substantiv", "Jag motiverar med läsaren"]],
      ["forklara", "Förklara hur ordet ”klimatsmart” är bildat och varför sådana ord blir vanliga.", null, "Sammansättning av klimat + smart. Förledet anger området. Sammansättningar är ett snabbt sätt att skapa ord för nya företeelser – svenskan kan bilda nästan obegränsat många.", ["Jag förklarar sammansättningen", "Jag förklarar varför sådana ord bildas"]],
    ],
    stavning: [
      ["granska", "Korrekturläs stycket enligt skrivreglerna. Rätta och förklara två av felen.", "Enligt SCB:s rapport från 2023 ökade andelen med 5% mellan Januari och Mars. Läs mer på s 12 i rapporten.", "Enligt SCB:s rapport från 2023 ökade andelen med 5 procent mellan januari och mars. Läs mer på s. 12 i rapporten. Månader skrivs med liten bokstav, och förkortningar som s. har punkt.", ["procent eller 5 % med mellanrum", "januari och mars med liten bokstav", "s. med punkt", "Jag förklarar två fel"]],
      ["forklara", "Varför kan särskrivning vara ett större problem än ett vanligt stavfel? Ge exempel.", null, "Särskrivning kan ändra betydelsen: en kycklinglever (lever från kyckling) blir en kyckling lever (en kyckling som lever). Läsaren kan missförstå, inte bara reta sig.", ["Jag förklarar att betydelsen kan ändras", "Ett eget exempel"]],
    ],
    satsdelar: [
      ["forklara", "Gör en satsanalys och förklara vilken funktion bisatsen har.", "Att så många valde att avstå förvånade forskarna.", "Att så många valde att avstå = subjekt (bisats). förvånade = predikat. forskarna = objekt. Bisatsen fungerar som subjekt – vad förvånade forskarna?", ["Satsanalys", "Jag förklarar att bisatsen är subjekt"]],
      ["skriv-om", "Skriv om meningen med formellt subjekt och förklara vilken effekt det får.", "En ny studie om ungas sömn finns.", "Det finns en ny studie om ungas sömn. Det formella subjektet gör att den nya informationen hamnar sist, där den får fokus.", ["Det finns …", "Jag förklarar slutfokus"]],
    ],
    meningsbyggnad: [
      ["skriv-om", "Meningen är lång och tung. Dela upp den och placera det viktigaste sist.", "Det faktum att det är många faktorer som påverkar elevernas resultat, bland annat sömn, kost och skärmtid, är något som skolan bör ta hänsyn till.", "Elevernas resultat påverkas av många faktorer, bland annat sömn, kost och skärmtid. Det bör skolan ta hänsyn till.", ["Två meningar", "Onödiga ord borta", "Det viktigaste sist"]],
      ["forklara", "Vad gör utbrytningen i meningen? Jämför med en vanlig mening.", "Det var bristen på finansiering som stoppade projektet.", "Utbrytningen (det var … som) lyfter fram bristen på finansiering – inte något annat – som orsaken. En vanlig mening, Bristen på finansiering stoppade projektet, betonar inte på samma sätt.", ["Jag förklarar att något framhävs", "Jag jämför med en vanlig mening"]],
    ],
    samband: [
      ["forklara", "Vilka slutsatser kan dras av studien – och vilka kan inte dras? Formulera dig försiktigt.", "En studie visar att elever som äter frukost har bättre betyg.", "Studien visar ett samband, inte att frukost orsakar bättre betyg. Det kan finnas andra förklaringar, till exempel att familjer med goda rutiner både äter frukost och stöttar skolarbetet. Försiktigt: Det finns ett samband mellan …", ["Samband – inte orsak", "En möjlig annan förklaring", "En försiktig formulering"]],
      ["fortsatt", "Skriv ett resonerande stycke med ett medgivande (visserligen … men) och ett villkor.", "Fråga: Bör mobiler förbjudas i skolan?", "Visserligen kan mobilen vara ett hjälpmedel i undervisningen, men den stör ofta mer än den hjälper. Om skolan erbjuder datorer när de behövs, finns det få skäl att ha mobilen framme på lektionerna.", ["Ett medgivande", "Ett villkor", "Ett tydligt ställningstagande"]],
    ],
    skiljetecken: [
      ["granska", "Rätta citatet och källhänvisningen enligt skrivreglerna.", "Enligt Skolverket ”ska undervisningen främja elevernas lust att lära.” (Skolverket 2022)", "Enligt Skolverket ”ska undervisningen främja elevernas lust att lära” (Skolverket 2022). Punkten sätts efter parentesen när meningen fortsätter med källhänvisningen.", ["Punkten efter parentesen", "Citattecknen runt citatet"]],
      ["forklara", "Förklara skillnaden mellan tankstreck och bindestreck och ge ett exempel på varje.", null, "Tankstreck (–) är längre och används för inskott, paus och i betydelsen till: 1990–2020. Bindestreck (-) är kortare och används i sammansättningar: FN-möte, e-post.", ["Tankstreck med exempel", "Bindestreck med exempel"]],
    ],
    textbindning: [
      ["skriv-om", "Lägg till metatext och sammanfattande referenser så att läsaren hittar i resonemanget.", "Arbetslösheten ökade. Konsumtionen minskade. Företagen gick sämre. Fler förlorade jobbet.", "I det här avsnittet beskrivs en ond cirkel. Arbetslösheten ökade, vilket fick konsumtionen att minska. Den minskade konsumtionen drabbade företagen, och den utvecklingen ledde till att ännu fler förlorade jobbet.", ["Metatext", "Minst en sammanfattande referens (den utvecklingen …)", "Tydliga samband"]],
      ["forklara", "Analysera den tematiska bindningen i stycket. Vad är tema och rema i de två första meningarna?", "Vi köpte en karta. Kartan visade en stig. Stigen ledde till sjön.", "Mening 1: tema vi, rema en karta. Mening 2: tema kartan (från rema i mening 1), rema en stig. Det nya blir det kända i nästa mening – en kedja som för texten framåt.", ["Tema och rema i två meningar", "Jag beskriver kedjan"]],
    ],
    stilistik: [
      ["jamfor", "Vilken text passar i en krönika och vilken i en nyhetsartikel? Analysera ordval och meningsbyggnad.", "A: Kommunen har beslutat att stänga simhallen från och med 1 maj.\nB: Så var det slut. Simhallen – stadens vardagsrum i femtio år – får stänga. Och ingen verkar bry sig.", "A är nyhetsartikel: neutralt, sakligt, viktigast först. B är krönika: personlig ton, korta meningar, tankstreck för betoning och en värderande slutkläm.", ["Jag kopplar A och B till genre", "Jag analyserar ordval", "Jag analyserar meningsbyggnad"]],
      ["fortsatt", "Skriv inledningen till en krönika om något i vardagen. Använd minst tre retoriska grepp och markera dem.", null, "Kön till mikron. Varje dag samma sak. Tjugo elever, en mikro, tio minuter – går det ihop? (asyndes, tretal, retorisk fråga)", ["Minst tre grepp", "Greppen är markerade"]],
    ],
  },
};

export const RESONERA: GrammarExercise[] = (Object.entries(UPPGIFTER) as [AgeGroup, Partial<Record<GrammatikAmne, Rad[]>>][]).flatMap(
  ([stadie, kapitel]) =>
    (Object.entries(kapitel) as [GrammatikAmne, Rad[]][]).flatMap(([amne, rader]) => {
      const b = bygg(amne, stadie, "r");
      for (const [variant, uppgift, text, svar, lista] of rader) b.x(variant, uppgift, text, svar, lista);
      return b.ovningar;
    }),
);
