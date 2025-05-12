const textDict = {
    Dark: "<strong>Tamna mreža</strong> komarnika unosi eleganciju i sofisticiranost, idealna za moderne i minimalističke enterijere. Njena tamna nijansa efikasno prikriva prašinu i sitne nečistoće, a blago zatamnjivanje prostora omogućava optimalno regulisanje dnevne svetlosti, posebno u sobama sa jakom sunčevom svetlošću.",
    Light: "<strong>Svetla mreža</strong> maksimizira prirodnu svetlost i stvara osećaj prostranosti. Savršena za svetle enterijere, daje čist i osvežen izgled. Omogućava neometan prolaz svetlosti uz efikasnu zaštitu od insekata.",
    Antracite: "Moderan izgled <strong>Antracit</strong> okvira savršeno se uklapa u minimalističke dizajne. Njegov sofisticirani ton naglašava linije i strukturu komarnika, pružajući estetski sklad sa ostalim neutralnim bojama u prostoru.",
    Brown: "<strong>Braon boja</strong> okvira unosi toplinu i prirodnost, čineći ovaj izbor idealnim za tradicionalnije i rustikalne enterijere. Dobro se kombinuje sa drvenim detaljima i toplim bojama, što doprinosi klasičnom šarmu doma.",
    White: "<strong>Bela boja</strong> okvira je bezvremenska, simbol čistoće i elegancije. Pojačava osvetljenje reflektujući svetlost, pogodna za svetle i prozračne prostore, uz vizuelnu harmoniju.",
    Fixed: "<strong>Fiksni komarnik</strong> nudi trajnu zaštitu uz minimalno održavanje. Stabilan i jednostavan, idealan je za prozore i otvore bez potrebe za prolazom ili čestim uklanjanjem.",
    Fixed_One: "<strong>Jednostrani fiksni komarnik</strong> štiti jedan deo otvora, ostavljajući drugi slobodan za upotrebu. Praktičan za provetravanje i svakodnevne aktivnosti poput izlaska na terasu.",
    Fixed_Both: "<strong>Obostrani fiksni</strong> komarnik pruža potpunu zaštitu dvokrilnih otvora. Simetričan dizajn omogućava ravnomerno provetravanje i estetsku usklađenost.",
    PliseDoor: "<strong>Plisirani komarnik</strong> za vrata je moderan i funkcionalan, sa lako uvlačivim dizajnom. Pogodan za česte ulaze, kombinuje zaštitu od insekata i jednostavnost korišćenja.",
    PliseDoor_One: "<strong>Jednostrani plise komarnik</strong> za vrata sklapa se u jednom pravcu, štedeći prostor. Idealan za jednokrilna vrata, nudi praktičnu zaštitu uz kompaktan dizajn.",
    PliseDoor_Both: "<strong>Dvostrani plise komarnik</strong> za vrata omogućava sklapanje sa obe strane, potpuno zatvarajući dvokrilna vrata. Pruža nesmetan prolaz i efikasnu zaštitu.",
    PliseWindow: "<strong>Plisirani komarnik</strong> za prozor je moderan i jednostavan za upravljanje. Kompaktan i estetski, savršen za različite prozore uz lako održavanje.",
    PliseWindow_One: "<strong>Jednostrani plise komarnik</strong> za prozor sklapa se u jednom pravcu, idealan za jednokrilne prozore. Nudi brzu instalaciju i efikasnu zaštitu.",
    PliseWindow_Both: "<strong>Obostrani plise komarnik</strong> za prozor zatvara dvokrilne prozore sa obe strane. Kompaktan i moderan, omogućava lako korišćenje i potpunu zaštitu.",
    Rolled: "<strong>Rolo komarnik</strong> se spušta odozgo nadole uz jednostavan sistem pomoću kanapa. Kompaktan kada se sklopi, pruža zaštitu i uklapa se u moderne enterijere uz minimalno održavanje."
}

function strongStyle(strongText) {
    strongText.style.fontSize = '1.1rem'
    strongText.style.color = window.elementMain
    strongText.style.webkitTextStroke = '0.5px #222222'
}
function changeText(text, element) {
    if (text !== 'empty') {
        if (text !== 'titles') {
            if (getComputedStyle(element).display === 'none') {
                element.style.display = ''
            }
            const oldText = element.textContent.trim()
            const newText = textDict[text]
            if (oldText !== newText.replace(/<[^>]*>/g, '').trim()) {
                element.innerHTML = newText
                element.style.animation = 'none'
                element.offsetHeight // Trik da resetuje animaciju
                element.style.animation = 'slide-in 0.5s ease-out forwards'
                strongStyle(element.querySelector('strong'))
            }
        } else {
            element.forEach(el => {el.style.display = ''})
        }
    } else {
        element.forEach(el => {el.style.display = 'none'})
    }
}

export function catalogueText(parts) {
    for (const [text, element] of Object.entries(parts)) changeText(text,element)
}
