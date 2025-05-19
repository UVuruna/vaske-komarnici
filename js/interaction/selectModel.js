let catalogueText

const type = ['Rolled', 'PliseDoor', 'PliseWindow', 'Fixed']
const sides = ['Both', 'One']
const frame = ['White', 'Brown', 'Antracite']
const net = ['Light', 'Dark']
const TYPES = {
    type: type,
    sides: sides,
    frame: frame,
    net: net
}

// Make equal width of promo containers
// This function is used to set the width of all promo containers to the maximum width found among them.
export async function promoWidth() {
    const promoContainers = document.querySelectorAll('.promo')
    let maxWidth = 0

    for (const container of promoContainers) {
        const width = container.offsetWidth
        if (width > maxWidth) {
            maxWidth = width
        }
    }
    for (const container of promoContainers) {
        container.style.width = `${maxWidth}px`
    }
}

// <<<------------->>> MAIN FUNCTION <<<------------->>>

export async function selectModel() {
    const version = window.version

    await import('./catalogueText.js?v=' + version).then(module => {
        catalogueText = module.catalogueText
    })

    const seenPromos = new Set()
    function changeModel(selector) {
        // INITIALIZATION Configuring Interactive Text elements
        const promo = selector.closest('.promo')
        if (!seenPromos.has(promo)) {
            const image = promo.querySelector('.promoImage')
            const imageSRC = image.getAttribute('src')
            catalogueText(findElements(getParts(imageSRC), selector))
            seenPromos.add(promo)
        }

        selector.parentElement.onclick = function () {
            // VAR declaration
            const promo = selector.closest('.promo')
            const image = promo.querySelector('.promoImage')
            let imageSRC = image.getAttribute('src')
            image.style.opacity = 0

            setTimeout(() => {
                // Normal Situation ==> Changing Selected Part (net,frame,sides)
                if (selector.tagName !== 'I') {
                    const name = selector.getAttribute('src').split('/').pop().split('.')[0] // White,Brown,Antracite,Light,Dark,Both,One

                    // This is if actual photo is without INSECT SCREEN
                    if (!(imageSRC.includes('Light') || imageSRC.includes('Dark'))) {
                        imageSRC =
                            imageSRC.replace(`.webp?v=${version}`, '') +
                            `_White_Light.webp?v=${version}`
                    }

                    const list = [sides, frame, net].find(list => list.includes(name))
                    if (list) {
                        const change = list.find(item => imageSRC.includes(item))
                        if (change) {
                            const newName = imageSRC.replace(change, name)
                            image.src = newName

                            // Configuring Interactive Text elements
                            catalogueText(findElements(getParts(newName), selector))
                        }
                    }
                    // Open Window PHOTO
                } else {
                    const parts = imageSRC.split('/')
                    const pop = parts.pop().split('.')[0].split('_')
                    let change
                    if (pop.includes('Rolled')) {
                        change = pop[0]
                    } else {
                        change = pop.slice(0, 2).join('_')
                    }
                    const newSRC = parts.join('/')

                    const newName = `${newSRC}/${change}.webp?v=${version}`
                    image.src = newName

                    // Configuring Interactive Text elements
                    catalogueText(findElements(getParts(newName), selector))
                }
                setTimeout(() => {
                    image.style.opacity = 1
                }, 100)
            }, 500)
        }
    }

    // 42 Combination of text ( Rolled: 6, PliseDoor:12, PliseWindow:12, Fixed:12 )
    for (const selector of document.querySelectorAll('.selectFrame img, .selectFrame i')) changeModel(selector)
}

function getParts(imageStr) {
    return new Set(imageStr.split('/').pop().split('.')[0].split('_'))
}

function findElements(imageStringList, imageLink) {
    const containter = imageLink.closest('.promoContainer')
    let returningDict = {}
    let mainType

    function getImgParts(element, str) {
        if (element === 'type') mainType = str

        if (element !== 'sides') {
            returningDict[str] = containter.querySelector(`.${element}`)
        } else {
            let extendedStr = [mainType, str].join('_')
            returningDict[extendedStr] = containter.querySelector(`.${element}`)
        }
    }

    for (const str of imageStringList) {
        for (const [element, strFinder] of Object.entries(TYPES)) {
            if (strFinder.includes(str)) getImgParts(element, str)
        }
    }

    if (Object.keys(returningDict).length <= 2) {
        returningDict['empty'] = [
            containter.querySelector(`.frame`),
            containter.querySelector(`.net`),
            containter.querySelector(`.frameTitle`),
            containter.querySelector(`.netTitle`)
        ]
    } else {
        returningDict['titles'] = [
            containter.querySelector(`.frameTitle`),
            containter.querySelector(`.netTitle`)
        ]
    }

    return returningDict
}
