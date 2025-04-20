const catalogueTextModule = await import(`./catalogueText.js?v=${version}`)
const { catalogueText } = catalogueTextModule

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

function getParts(imageStr) {
    return new Set(imageStr.split('/').pop().split('.')[0].split('_'))
}

function findElements(imageStringList, imageLink) {
    const containter = imageLink.closest('.promoContainer')
    let returningDict = {}
    let mainType

    imageStringList.forEach(str => {
        for (const [element, strFinder] of Object.entries(TYPES)) {
            if (strFinder.includes(str)) {
                if (element === 'type') {
                    mainType = str
                }

                if (element !== 'sides') {
                    returningDict[str] = containter.querySelector(`.${element}`)
                } else {
                    let extendedStr = [mainType, str].join('_')
                    returningDict[extendedStr] = containter.querySelector(`.${element}`)
                }
            }
        }
    })

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

// <<<------------->>> MAIN FUNCTION <<<------------->>>

export function selectModel(version) {
    const seenPromos = new Set()

    // 42 Combination of text ( Rolled: 6, PliseDoor:12, PliseWindow:12, Fixed:12 )

    document
        .querySelectorAll('.selectFrame img, .selectFrame i')
        .forEach(selector => {
            // INITIALIZATION Configuring Interactive Text elements
            const promo = selector.closest('.promo')
            if (!seenPromos.has(promo)) {
                const image = promo.querySelector('.promoImage')
                const imageSRC = image.getAttribute('src')
                const nameList = getParts(imageSRC)
                catalogueText(findElements(nameList, selector))
                seenPromos.add(promo)
            }

            selector.onclick = function () {
                // VAR declaration
                const promo = this.closest('.promo')
                const image = promo.querySelector('.promoImage')
                let imageSRC = image.getAttribute('src')
                image.style.opacity = 0

                setTimeout(() => {
                    // Normal Situation ==> Changing Selected Part (net,frame,sides)
                    if (this.tagName !== 'I') {
                        const name = this.getAttribute('src').split('/').pop().split('.')[0] // White,Brown,Antracite,Light,Dark,Both,One

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
                                let nameList = getParts(newName)
                                catalogueText(findElements(nameList, this))
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
                        let nameList = getParts(newName)
                        catalogueText(findElements(nameList, this))
                    }

                    setTimeout(() => {
                        image.style.opacity = 1
                    }, 100)
                }, 500)
            }
        })
}
