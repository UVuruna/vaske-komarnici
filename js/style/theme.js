let GLOBALS,
    updateMANIFEST,
    colorizeSVG,
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

export async function settingThemeOnload(version, updateManifest, globals, time) {
    await import('./colorizeSVG.js?v=' + version).then(module => { colorizeSVG = module.colorizeSVG })
    await import('../interaction/clickHover.js?v=' + version).then(module => {
        colorChange = module.colorChange
        hoverTxtColor = module.hoverTxtColor,
        hoverBgColor = module.hoverBgColor
    })
    await import('./changeStyle.js?v=' + version).then(module => {
        lightFrame = module.lightFrame,
            buttonsStyle = module.buttonsStyle,
            coloredTextStyle = module.coloredTextStyle,
            menuStyle = module.menuStyle,
            tablesStyle = module.tablesStyle,
            formStyle = module.formStyle,
            pulsingAnimation = module.pulsingAnimation
    })

    GLOBALS = globals
    updateMANIFEST = updateManifest
    settingTheme(sessionStorage.getItem('theme'), time)

    if (localStorage.getItem('version') !== version) localStorage.setItem('version', version)
}

export async function themeCycle() {
    const theme = sessionStorage.getItem('theme')
    const newTheme = GLOBALS.ThemeList[(GLOBALS.ThemeList.indexOf(theme) + 1) % GLOBALS.ThemeList.length]
    const {
        primaryElement: elementMain,
        primary: bodyMain
    } = GLOBALS.ThemeColors[newTheme];

    await Promise.all([
        updateMANIFEST(bodyMain, elementMain),
        settingTheme(newTheme)
    ])
    document.body.style.backgroundColor = bodyMain
    sessionStorage.setItem('theme', newTheme)
}

export async function settingTheme(currentTheme, time=null) {

    const {
        primaryElement: elementMain,
        secondaryElement: elementSec,
        primary: bodyMain,
        secondary: bodySec
    } = GLOBALS.ThemeColors[currentTheme];

    const LOGO = document.getElementById('LOGO')
    const MENU = document.getElementById('MENU')

    await Promise.all(
        [
            // ----------> Pulsing Actions <----------
            pulsingAnimation(),
            // ----------> Set Color LOGO & MENU <----------
            colorizeSVG(LOGO, elementMain, elementSec),
            colorizeSVG(MENU, elementMain, elementSec),
            // ----------> Hover effect LOGO & MENU <----------
            colorChange(LOGO, elementMain, elementSec, colorizeSVG),
            colorChange(MENU, elementMain, elementSec, colorizeSVG),
            // ----------> Configure LIGHT BG frames <----------
            lightFrame(document.querySelectorAll('.light'), elementMain, elementSec, bodyMain, bodySec),
            // ----------> Configure all BUTTONS <----------
            buttonsStyle(document.querySelectorAll('button, .guide'), elementMain, elementSec, bodyMain),
            // ----------> Configure all LIST STRONG Items <----------
            coloredTextStyle(document.querySelectorAll('li strong,  .categoryText'), hoverTxtColor, elementMain, elementSec, currentTheme),
            // ----------> Navigation Dropdown Menu <----------
            menuStyle(document.querySelectorAll('#header ul'), bodyMain, elementMain, hoverBgColor),
            // ----------> Table & Form <----------
            tablesStyle(bodySec, elementMain),
            formStyle(bodySec, elementMain)
        ]
    )
    if (time) console.log(`Loading Page: ${Math.floor(performance.now() - time)} ms`)
}