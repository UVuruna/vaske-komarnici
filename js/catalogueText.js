const textDict = {
    Dark: `
        Tamna mreža komarnika unosi dozu elegancije i sofisticiranosti u prostor, posebno kada je u pitanju enterijer sa modernim ili minimalističkim stilom.
        Njena tamna nijansa manje ističe sitne nečistoće i prašinu, što je praktično u svakodnevnoj upotrebi. Osim estetske vrednosti,
        tamna mreža može doprineti blagom zatamnjivanju prostora, što je posebno korisno u sobama okrenutim ka jugu, gde je tokom dana prisutna jaka svetlost
        čime se postiže manji stepen zagrevanja prostora, bez potrebe za dodatnim sredstvima za zatamnjivanje
        `,
    Light: `
        Svetla mreža komarnika idealna je za prostore gde je cilj maksimiziranje prirodne svetlosti i stvaranje osećaja prostranosti.
        Njena svetla nijansa dodatno doprinosi čistom i osveženom izgledu enterijera, posebno u prostorijama sa svetlijim zidovima i nameštajem.
        Ovakva mreža omogućava neometan prolaz svetlosti, čime se smanjuje osećaj zatvorenosti i povećava energija prostora, dok istovremeno pruža efikasnu zaštitu od insekata.
        `,
    Antracite: `
        Antracit boja rama je savršen izbor za moderne i minimalističke enterijere. Ova boja odiše sofisticiranošću i lako se kombinuje s drugim neutralnim tonovima,
        čime doprinosi stvaranju harmoničnog i elegantnog ambijenta. Antracit okvir dodatno naglašava linije i strukturu komarnika, 
        što ga čini atraktivnim izborom za one situacije gde se teži isticanju estetskog aspekta uz istovremenu funkcionalnost.
        `,
    Brown: `
        Braon boja rama simbolizuje toplinu i prirodnost, te se posebno preporučuje za tradicionalnije ili rustikalne enterijere. 
        Ova nijansa se savršeno uklapa u ambijente sa drvenim detaljima i toplim tonovima, pružajući skladnu sinergiju između funkcije i estetike. 
        Braon okvir dodaje autentičnost i klasični šarm, što ga čini idealnim za domaćinstva koja teže udobnosti i prirodnoj eleganciji.
        `,
    White: `
        Bela boja rama je bezvremenski izbor koji odiše čistoćom i elegancijom. Idealan je za moderne, minimalističke prostore, kao i za klasične ambijente,
        gde stvara utisak urednosti i prostora. Bela nijansa reflektuje svetlost, čime dodatno pojačava osvetljenje u sobi, 
        te se preporučuje u situacijama gde se želi postići svetla i prozračna atmosfera, a istovremeno se postiže vizuelna harmonija sa ostatkom enterijera.
        `,
    Fixed: `
        Fiksni komarnik predstavlja jednostavno i efikasno rešenje za zaštitu unutrašnjih prostora. Njegov stabilan i trajni dizajn omogućava dugotrajnu upotrebu uz minimalno održavanje. 
        Idealan je za prozore i otvore koji se ne koriste za direktan prolaz ili ne zahtevaju često uklanjanje komarnika, jer se jednom postavljen komarnik ne može lako ukloniti 
        bez dodatnog alata. Ovo ga čini pogodnim za prostore gde je prozračivanje umerenog intenziteta dovoljno i gde nije potrebna potpuna otvorenost otvora.
        `,
    FixedOne: `
        Jednostrani fiksni komarnik je praktično rešenje kada je dovoljno da samo jedan deo prozora ili vrata bude zaštićen. 
        Tako se omogućava neometano provetravanje kroz deo sa komarnikom, dok drugi ostaje dostupan za svakodnevne aktivnosti,
        poput izlaska na terasu ili korišćenja spoljnog prostora. Idealan je za situacije gde balansiraš između zaštite i funkcionalnosti svakodnevnog korišćenja.
        `,
    FixedBoth: `
        Obostrani fiksni komarnik je odličan izbor za dvokrilne prozore ili vrata kada je željena vizuelna ravnoteža i potpuna zaštita. 
        Pruža ujednačen izgled i omogućava simetrično provetravanje sa obe strane, bez potrebe za pomeranjem ili uklanjanjem. 
        Zahvaljujući jednostavnom dizajnu i trajnoj montaži, predstavlja praktično i estetski usklađeno rešenje za stabilne otvore koji se ne koriste za prolaz.
        `,
    Plise_Door: `
        Plisirani komarnik za vrata predstavlja savršeno rešenje za zaštitu ulaznih prostora, nudeći moderan izgled i izuzetnu funkcionalnost. 
        Njegov inovativni dizajn omogućava lako uvlačenje i izvlačenje, što je odlično za visoko frekventirane ulazne tačke. 
        Ova vrsta komarnika kombinuje jednostavnost korišćenja sa estetskim vrednostima, čime se postiže optimalna zaštita od insekata uz očuvanje pristupačnosti i udobnosti prostora.
        `,
    PliseOne_Door: `
        Jednostrani plise komarnik je savršeno rešenje za jednokrilna vrata, omogućavajući jednostavno otvaranje i zatvaranje bez zauzimanja prostora. 
        Zahvaljujući plise sistemu, komarnik se sklapa na kompaktan način, čime je idealan za prozore i vrata koja se koriste često, a istovremeno pruža efikasnu zaštitu od insekata.
        `,
    PliseBoth_Door: `
        Dvostrani plise komarnik je idealno rešenje za dvokrilna vrata, omogućavajući nesmetan prolaz i jednostavno korišćenje oba krila. 
        Zbog svog plise dizajna, komarnik se može lako sklapanje sa obe strane, čime se štedi prostor i omogućava lako otvaranje i zatvaranje. 
        Ovaj sistem pruža efikasnu zaštitu od insekata, a istovremeno čuva estetiku i funkcionalnost vrata.
        `,
    Plise_Window: `
        Plisirani komarnik za prozor pruža visoku efikasnost u zaštiti od insekata, a istovremeno omogućava jednostavno upravljanje i prilagođavanje korisničkim potrebama. 
        Njegov moderan dizajn i kompaktne dimenzije čine ga savršenim rešenjem za prozore različitih veličina i oblika, nudeći optimalan balans između funkcionalnosti i estetike. 
        Dodatna prednost ovog modela je jednostavno čišćenje i minimalno održavanje, što ga čini praktičnim rešenjem u dinamičnim urbanim okruženjima.
        `,
    PliseOne_Window: `
        Jednostrani plisirani komarnik za prozor je posebno pogodan za situacije gde je pristup komarniku omogućen sa jedne strane, kao i za jednokrilne prozore. 
        Njegova konstrukcija omogućava jednostavno upravljanje i brzu instalaciju, čime se postiže efikasna zaštita prozorskih otvora. 
        Idealno je rešenje za stambene jedinice ili kancelarijske prostore gde je potreban jednostavan, ali efikasan sistem odbrane od insekata.
        `,
    PliseBoth_Window: `
        Obostrani plise komarnik za prozor pruža potpunu zaštitu sa obe strane prozora, omogućavajući jednostavno otvaranje i zatvaranje sa obe strane. 
        Idealno je rešenje za dvokrilne prozore ili prozore koji zahtevaju efikasnu zaštitu i funkcionalnost sa svih strana. 
        Njegov plise dizajn omogućava kompaktnu sklapanje, čime se štedi prostor, dok moderni sistem omogućava lako upravljanje, čišćenje i održavanje. 
        Savršen je za stambene ili poslovne prostore koji zahtevaju balans između zaštite od insekata i vizuelne estetike.
        `,
    Rolo: `
       Rolo komarnik za prozor je praktično i efikasno rešenje koje omogućava lako otvaranje i zatvaranje komarnika sa jednostavnim pomeranjem rolo sistema. 
       Njegov kompaktan dizajn čini ga idealnim za prozore svih veličina, jer se lako sklapa i ne zauzima puno prostora kada nije u upotrebi. 
       Rolo komarnik pruža odličnu zaštitu od insekata, a istovremeno se savršeno uklapa u različite vrste enterijera, pružajući balans između funkcionalnosti i estetike. 
       Jednostavan za instalaciju i održavanje, predstavlja savršen izbor za dinamične prostore i moderni dizajn.
        `
}

export function catalogueText(text) {
    console.log(text)
}