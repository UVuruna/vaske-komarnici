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

export async function settingThemeOnload(Ordering) {
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
    settingTheme(Ordering)
}

window.themeCycle = async function() {
    const Themes = window.ThemeList
    //Get index of current theme and find next theme in list for cycle
    const newTheme = Themes[(Themes.indexOf(window.theme) + 1) % Themes.length]
    const { primaryElement: elementMain, primary: bodyMain } = window.ThemeColors[newTheme]
    window.theme = newTheme
    document.body.style.backgroundColor = bodyMain
    await Promise.all([
        window.updateManifest(bodyMain, elementMain),
        settingTheme(true)
    ])
    
    for (const bold of document.querySelectorAll('.explanation strong'))  window.explanationStyle(bold)
}

async function settingTheme(Ordering) {
    document.cookie = `theme=${window.theme}; path=/`;
    console.log(document.cookie)
    const {
        primaryElement: elementMain,
        secondaryElement: elementSec,
        primary: bodyMain,
        secondary: bodySec
    } = window.ThemeColors[window.theme]
    window.elementMain = elementMain

    const LOGO = document.getElementById('LOGO')
    const MENU = document.getElementById('MENU')

    const promises = [];
    promises.push(pulsingAnimation())
    promises.push(colorizeSVG(LOGO, elementMain, elementSec))
    promises.push(colorizeSVG(MENU, elementMain, elementSec))
    promises.push(colorChange(LOGO, elementMain, elementSec, colorizeSVG))
    promises.push(colorChange(MENU, elementMain, elementSec, colorizeSVG))
    promises.push(lightFrame(document.querySelectorAll('.light'),elementMain,elementSec,bodyMain,bodySec))
    promises.push(buttonsStyle(document.querySelectorAll('button:not(.false)'),elementMain,elementSec,bodyMain))
    promises.push(coloredTextStyle(document.querySelectorAll('li strong,  .categoryText'),hoverTxtColor,elementMain,elementSec))
    promises.push(menuStyle(document.querySelectorAll('#header ul'),bodyMain,elementMain,hoverBgColor))
    if (Ordering) {
        promises.push(tablesStyle(bodySec, elementMain))
        promises.push(formStyle(bodySec, elementMain))
    }
    Promise.all(promises)
}