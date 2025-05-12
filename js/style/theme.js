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
            ; (hoverTxtColor = module.hoverTxtColor),
                (hoverBgColor = module.hoverBgColor)
    })
    await import('./changeStyle.js?v=' + version).then(module => {
        ; (lightFrame = module.lightFrame),
            (buttonsStyle = module.buttonsStyle),
            (coloredTextStyle = module.coloredTextStyle),
            (menuStyle = module.menuStyle),
            (tablesStyle = module.tablesStyle),
            (formStyle = module.formStyle),
            (pulsingAnimation = module.pulsingAnimation)
    })
    settingTheme(sessionStorage.getItem('theme'))

    if (localStorage.getItem('version') !== version)
        localStorage.setItem('version', version)
}

export async function themeCycle() {
    const Themes = window.ThemeList
    //Get index of current theme and find next theme in list for cycle
    const newTheme = Themes[(Themes.indexOf(sessionStorage.getItem('theme')) + 1) % Themes.length]
    const { primaryElement: elementMain, primary: bodyMain } =
        window.ThemeColors[newTheme]

    await Promise.all([
        window.updateManifest(bodyMain, elementMain),
        settingTheme(newTheme)
    ])
    document.body.style.backgroundColor = bodyMain
    sessionStorage.setItem('theme', newTheme)
}

export async function settingTheme(currentTheme) {
    const {
        primaryElement: elementMain,
        secondaryElement: elementSec,
        primary: bodyMain,
        secondary: bodySec
    } = window.ThemeColors[currentTheme]
    window.elementMain = elementMain

    const LOGO = document.getElementById('LOGO')
    const MENU = document.getElementById('MENU')

    const promises = [];

    // ----------> Pulsing Actions <----------
    promises.push(pulsingAnimation()) ; if (window.debug) promises.push(window.operationOrder(pulsingAnimation))

    // ----------> Set Color LOGO & MENU <----------
    promises.push(colorizeSVG(LOGO, elementMain, elementSec)) ; if (window.debug) promises.push(window.operationOrder(colorizeSVG))
    promises.push(colorizeSVG(MENU, elementMain, elementSec)) ; if (window.debug) promises.push(window.operationOrder(colorizeSVG))

    // ----------> Hover effect LOGO & MENU <----------
    promises.push(colorChange(LOGO, elementMain, elementSec, colorizeSVG)) ; if (window.debug) promises.push(window.operationOrder(colorChange))
    promises.push(colorChange(MENU, elementMain, elementSec, colorizeSVG)) ; if (window.debug) promises.push(window.operationOrder(colorChange))

    // ----------> Configure LIGHT BG frames <----------
    promises.push(lightFrame(document.querySelectorAll('.light'),elementMain,elementSec,bodyMain,bodySec)) ; if (window.debug) promises.push(window.operationOrder(lightFrame))

    // ----------> Configure all BUTTONS <----------
    promises.push(buttonsStyle(document.querySelectorAll('button, .guide'),elementMain,elementSec,bodyMain)) ; if (window.debug) promises.push(window.operationOrder(buttonsStyle))

    // ----------> Configure all LIST STRONG Items <----------
    promises.push(coloredTextStyle(document.querySelectorAll('li strong,  .categoryText'),hoverTxtColor,elementMain,elementSec,currentTheme)) ; if (window.debug) promises.push(window.operationOrder(coloredTextStyle))

    // ----------> Navigation Dropdown Menu <----------
    promises.push(menuStyle(document.querySelectorAll('#header ul'),bodyMain,elementMain,hoverBgColor)) ; if (window.debug) promises.push(window.operationOrder(menuStyle))

    // ----------> Table & Form <----------
    promises.push(tablesStyle(bodySec, elementMain)) ; if (window.debug) promises.push(window.operationOrder(tablesStyle))
    promises.push(formStyle(bodySec, elementMain)) ; if (window.debug) promises.push(window.operationOrder(formStyle))

    // Kada su sve funkcije dodate u promises, izvrši ih pomoću Promise.all
    await Promise.all(promises)
}