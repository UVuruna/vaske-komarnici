let colorizeSVG,
    colorChange,
    hoverTxtColor,
    hoverBgColor,
    lightFrame,
    buttonsStyle,
    coloredTextStyle,
    menuStyle,
    tablesStyle,
    formStyle,
    pulsingAnimation

export async function settingThemeOnload() {
    const version = window.version

    await import('./colorizeSVG.js?v=' + version).then(module => {
        colorizeSVG = module.colorizeSVG
    })
    await import('../interaction/clickHover.js?v=' + version).then(module => {
        colorChange = module.colorChange
        hoverTxtColor = module.hoverTxtColor
        hoverBgColor = module.hoverBgColor
    })
    await import('./changeStyle.js?v=' + version).then(module => {
        lightFrame = module.lightFrame
        buttonsStyle = module.buttonsStyle
        coloredTextStyle = module.coloredTextStyle
        menuStyle = module.menuStyle
        tablesStyle = module.tablesStyle
        formStyle = module.formStyle
        pulsingAnimation = module.pulsingAnimation
    })
    settingTheme(true)
}

window.themeCycle = async function() {
    //const time = performance.now()
    const Themes = window.ThemeList
    //Get index of current theme and find next theme in list for cycle
    const newTheme = Themes[(Themes.indexOf(window.theme) + 1) % Themes.length]
    const { primaryElement: elementMain, primary: bodyMain } = window.ThemeColors[newTheme]
    window.theme = newTheme
    document.body.style.backgroundColor = bodyMain
    window.elementMain = elementMain

    await Promise.all([
        window.updateManifest(bodyMain, elementMain),
        settingTheme(false)
    ])
    
    document.cookie = `theme=${newTheme}; path=/`;
    for (const bold of document.querySelectorAll('.explanation strong'))  window.explanationStyle(bold)

    //if (window.debug) console.log(`>>>>\nTheme swapped in: ${(performance.now() - time).toFixed(2)} ms`)
}

async function settingTheme(load) {
    //window.debug = window.debug && load
    const {
        primaryElement: elementMain,
        secondaryElement: elementSec,
        primary: bodyMain,
        secondary: bodySec
    } = window.ThemeColors[window.theme]

    const LOGO = document.getElementById('LOGO')
    const MENU = document.getElementById('MENU')

    await tablesStyle(bodySec, elementMain)
    await formStyle(bodySec, elementMain)

    const promises = [];
    promises.push(pulsingAnimation())
    promises.push(colorizeSVG(LOGO, elementMain, elementSec))
    promises.push(colorizeSVG(MENU, elementMain, elementSec))
    promises.push(colorChange(LOGO, elementMain, elementSec, colorizeSVG))
    promises.push(colorChange(MENU, elementMain, elementSec, colorizeSVG))
    promises.push(lightFrame(document.querySelectorAll('.light'),elementMain,elementSec,bodyMain,bodySec))
    promises.push(buttonsStyle(document.querySelectorAll('button, .guide'),elementMain,elementSec,bodyMain))
    promises.push(coloredTextStyle(document.querySelectorAll('li strong,  .categoryText'),hoverTxtColor,elementMain,elementSec))
    promises.push(menuStyle(document.querySelectorAll('#header ul'),bodyMain,elementMain,hoverBgColor))
    promises.push(tablesStyle(bodySec, elementMain))
    promises.push(formStyle(bodySec, elementMain))
    Promise.all(promises)
}