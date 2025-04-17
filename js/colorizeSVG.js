
// Function that gives SUM of PERCEPTIVE BRIGHTNESS of COLOR with given COEF (R:29.9% ; G:58.7% ; B:11.4%)
function hexToSUM(hex) {
    hex = hex.slice(1)
    const bigint = parseInt(hex, 16)
    return (
        parseInt((bigint >> 16) & 255)*0.299 +
        parseInt((bigint >> 8) & 255)*0.587 +
        parseInt(bigint & 255)*0.114
    )
}

// Function to give RGB Dict values with INT from HEX value (#ffffff)
function hexToRGB(hex) {
    hex = hex.slice(1)
    const bigint = parseInt(hex, 16)
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    }
}

// Function to gives HEX Value (#ffffff) from DICT that has R,G,B INT values
function rgbToHEX({ r, g, b }) {
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
}

// Function for finding FLOAT MIDPOINT of 2 COLORS
function interpolateColor(color1, color2, factor) {
    const c1 = hexToRGB(color1)
    const c2 = hexToRGB(color2)

    const result = {
        r: Math.round(c1.r + (c2.r - c1.r) * factor),
        g: Math.round(c1.g + (c2.g - c1.g) * factor),
        b: Math.round(c1.b + (c2.b - c1.b) * factor)
    }

    return rgbToHEX(result)
}

// Function for changing BRIGHTNESS based on given Float for increase or decrease
function changeBrightness(color, gradient) {
    const colorRGB = hexToRGB(color)
    for (const [rgb, value] of Object.entries(colorRGB)) {
        colorRGB[rgb] = Math.round(Math.min(255, Math.max(0, value * gradient)))
    }
    return rgbToHEX(colorRGB)
}

// Function for CREATING COLORED PALLETE from 2 COLORS and GRADIENT number
function createColoredPallete(color, gradients, range) {
    let Pallete = []
    const min = 1-range

    if (gradients==1) {
        return (Pallete.push(color))
    }

    for (let i = 0; i<gradients; i++) {
        let increment = i*(2*range) / (gradients-1)
        Pallete.push(changeBrightness(color,min+increment))
    }

    return Pallete
}

// Function for Extracting GRAY Pallete from SVG
function exctractColorSVG(element) {
    const elements = document.querySelectorAll(
        `${element} linearGradient, ${element} radialGradient`
    )

    const colorOrder = new Set()
    const foundColors = {}

    elements.forEach(element => {
        const stops = element.querySelectorAll('stop')
        const ID = element.getAttribute('id')
        foundColors[ID] = {}
        stops.forEach(stop => {
            const offset = stop.getAttribute('offset')
            const color = stop.getAttribute('stop-color')
            if (offset === '0' || offset === '1') {
                colorOrder.add(color)
                foundColors[ID][offset] = color
            }
        })
    })
    const sortedColors = [...colorOrder].sort((a, b) => hexToSUM(a) - hexToSUM(b))
    return [sortedColors, foundColors]
}

// MAIN Function that changes from GRAY to COLORED
export function colorizeSVG(SVG, color, range=0.5) {
    const t0 = performance.now()

    const [grayPalette, elements] = exctractColorSVG(`#${SVG.getAttribute('id')}`)

    const colorPallete = createColoredPallete(color, grayPalette.length, range)
    

    for (let id in elements) {

        const stops = SVG.querySelectorAll(`#${id} stop`)
        stops.forEach(stop => {
            const offset = stop.getAttribute('offset')
            const grayToColor = {}
            grayPalette.forEach((color, i) => grayToColor[color] = colorPallete[i])
            
            if (offset==='0' || offset==='1') {
                const NewColor = grayToColor[elements[id][offset]]
                stop.setAttribute('stop-color', NewColor)
            } else {
                const midColor = interpolateColor(
                    grayToColor[elements[id]['0']],
                    grayToColor[elements[id]['1']],
                    parseFloat(offset),
                )
                stop.setAttribute('stop-color', midColor)
            }
        })
    }
    console.log(`Colorizing SVG executed in ${performance.now()-t0} ms`)
}