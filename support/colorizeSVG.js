
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

function getBrightness(color) {

}

// Function for CREATING COLORED PALLETE from 2 COLORS and GRADIENT number
function createColoredPallete(color, gradients, colorFrequency) {
    let Pallete = []

    const minBrightness = hexToSUM(gradients[0])
    const maxBrightness = hexToSUM(gradients[gradients.length - 1])
    let midBrightness = 0
    let count = colorFrequency.sum
    gradients.forEach(gradient => {
        midBrightness += hexToSUM(gradient)*colorFrequency[gradient] / count
    })

    const MIN = minBrightness/midBrightness
    const MAX = maxBrightness/midBrightness

    if (gradients==1) {
        return (Pallete.push(color))
    }

    const range = gradients.length
    const increment = (MAX-MIN) / (range-1)
    for (let i = 0; i<range; i++) {
        Pallete.push(changeBrightness(color,MIN+increment*i))
    }
    return Pallete
}

// Function for Extracting GRAY Pallete from SVG
function exctractColorSVG(element) {
    const elements = element.querySelectorAll(
        'linearGradient, radialGradient'
    )
    const colorOrder = new Set()
    const Stops = []
    const colorFrequency = {sum:0}

    elements.forEach(element => {
        const stops = element.querySelectorAll('stop')
        stops.forEach(stop => {
            Stops.push(stop)
            const color = stop.getAttribute('stop-color')
            colorOrder.add(color)
            if (color in colorFrequency) {
                colorFrequency[color] ++
                
            } else {
                colorFrequency[color] = 1
            }
            colorFrequency.sum ++
        })
    })
    const sortedColors = [...colorOrder].sort((a, b) => hexToSUM(a) - hexToSUM(b))
    return [Stops, sortedColors, colorFrequency]
}

// MAIN Function that changes from GRAY to COLORED
function colorizeSVG(SVG, color) {
    const t0 = performance.now()
    const [stopElements, grayPalette, colorFrequency] = exctractColorSVG(SVG)

    const colorPallete = createColoredPallete(color, grayPalette, colorFrequency)  

    stopElements.forEach(element => {
        const newColor = colorPallete[grayPalette.indexOf(element.getAttribute('stop-color'))]
        element.setAttribute('stop-color', newColor)
    })
 
    console.log(`Colorize SVG executed in ${performance.now()-t0} ms`)
}

window.colorizeSVG = colorizeSVG