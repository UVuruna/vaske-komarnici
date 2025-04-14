const textDict = {
    Dark: `
        Tamna mreža komarnika unosi eleganciju i sofisticiranost, idealna za 
        moderne i minimalističke enterijere. Njena tamna nijansa efikasno prikriva 
        prašinu i sitne nečistoće, a blago zatamnjivanje prostora omogućava 
        optimalno regulisanje dnevne svetlosti, posebno u sobama sa jakom sunčevom svetlošću.
        `,
    Light: `
        Svetla mreža maksimizira prirodnu svetlost i stvara osećaj prostranosti. 
        Savršena za svetle enterijere, daje čist i osvežen izgled. 
        Omogućava neometan prolaz svetlosti uz efikasnu zaštitu od insekata.
        `,
    Antracite: `
        Moderan izgled antracit okvira savršeno se uklapa u minimalističke dizajne. 
        Njegov sofisticirani ton naglašava linije i strukturu komarnika, 
        pružajući estetski sklad sa ostalim neutralnim bojama u prostoru.
        `,
    Brown: `
        Braon boja okvira unosi toplinu i prirodnost, čineći ovaj izbor idealnim 
        za tradicionalnije i rustikalne enterijere. Dobro se kombinuje sa drvenim 
        detaljima i toplim bojama, što doprinosi klasičnom šarmu doma.
        `,
    White: `
       Bela boja okvira je bezvremenska, simbol čistoće i elegancije. 
       Pojačava osvetljenje reflektujući svetlost, pogodna za svetle i prozračne prostore, uz vizuelnu harmoniju.
        `,
    Fixed: `
        Fiksni komarnik nudi trajnu zaštitu uz minimalno održavanje. 
        Stabilan i jednostavan, idealan je za prozore i otvore bez potrebe za prolazom ili čestim uklanjanjem.
        `,
    Fixed_One: `
        Jednostrani fiksni komarnik štiti jedan deo otvora, ostavljajući drugi slobodan za upotrebu. 
        Praktičan za provetravanje i svakodnevne aktivnosti poput izlaska na terasu.
        `,
    Fixed_Both: `
        Obostrani fiksni komarnik pruža potpunu zaštitu dvokrilnih otvora. 
        Simetričan dizajn omogućava ravnomerno provetravanje i estetsku usklađenost.
        `,
    PliseDoor: `
        Plisirani komarnik za vrata je moderan i funkcionalan, sa lako uvlačivim dizajnom. 
        Pogodan za česte ulaze, kombinuje zaštitu od insekata i jednostavnost korišćenja.
        `,
    PliseDoor_One: `
        Jednostrani plise komarnik za vrata sklapa se u jednom pravcu, štedeći prostor. 
        Idealan za jednokrilna vrata, nudi praktičnu zaštitu uz kompaktan dizajn.
        `,
    PliseDoor_Both: `
        Dvostrani plise komarnik za vrata omogućava sklapanje sa obe strane, 
        potpuno zatvarajući dvokrilna vrata. Pruža nesmetan prolaz i efikasnu zaštitu.
        `,
    PliseWindow: `
        Plisirani komarnik za prozor je moderan i jednostavan za upravljanje. 
        Kompaktan i estetski, savršen za različite prozore uz lako održavanje.
        `,
    PliseWindow_One: `
        Jednostrani plise komarnik za prozor sklapa se u jednom pravcu, idealan 
        za jednokrilne prozore. Nudi brzu instalaciju i efikasnu zaštitu.
        `,
    PliseWindow_Both: `
        Obostrani plise komarnik za prozor zatvara dvokrilne prozore sa obe strane. 
        Kompaktan i moderan, omogućava lako korišćenje i potpunu zaštitu.
        `,
    Rolled: `
       Rolo komarnik se spušta odozgo nadole uz jednostavan sistem pomoću kanapa. 
       Kompaktan kada se sklopi, pruža zaštitu i uklapa se u moderne enterijere uz minimalno održavanje.
        `
}

export function catalogueText(parts) {
    for (const [text, element] of Object.entries(parts)) {
        if (text !== 'empty') {
            if (text !== 'titles') {
                if (getComputedStyle(element).display === 'none') {
                    element.style.display = ''
                }
                element.innerHTML = textDict[text]
            } else {
                element.forEach(el => {
                    el.style.display = ''
                })
            }
        } else {
            element.forEach(el => {
                el.style.display = 'none'
            })
        }
    }
}
