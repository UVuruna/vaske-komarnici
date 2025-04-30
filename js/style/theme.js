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
    tableStyle,
    formStyle

export async function settingThemeOnload(version, updateManifest, globals, t0) {
    await import('./colorizeSVG.js?v=' + version).then(module => {colorizeSVG = module.colorizeSVG})
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
        tableStyle = module.tableStyle,
        formStyle = module.formStyle
    })

    GLOBALS = globals
    updateMANIFEST = updateManifest
    settingTheme(sessionStorage.getItem('theme'))

    const oldVersion = localStorage.getItem('version')
    console.log(`Version:${version} update:${!(version===oldVersion)} | Loading Page: ${Math.floor(performance.now() - t0)} ms`)
    if (oldVersion !== version) localStorage.setItem('version', version)
}

export async function themeCycle() {
    const theme = sessionStorage.getItem('theme')
    const currentIndex = GLOBALS.ThemeList.indexOf(theme)
    const newIndex = (currentIndex + 1) % GLOBALS.ThemeList.length
    const newTheme = GLOBALS.ThemeList[newIndex]

    await Promise.all([
        updateMANIFEST(
            GLOBALS.ThemeColors[newTheme]['primary'],
            GLOBALS.ThemeColors[newTheme]['primaryElement']
        ),
        settingTheme(newTheme)   
    ])
    document.body.style.backgroundColor = GLOBALS.ThemeColors[newTheme]['primary']
    sessionStorage.setItem('theme', newTheme)
}

export async function settingTheme(currentTheme) {
    let PresetColors = GLOBALS.ThemeColors[currentTheme]
    const LOGO = document.getElementById('LOGO')
    const MENU = document.getElementById('MENU')

    await Promise.all([
        // ----------> Set Color LOGO & MENU <----------
        colorizeSVG(
            LOGO,
            PresetColors.primaryElement,
            PresetColors.secondaryElement
        ),
        colorizeSVG(
            MENU,
            PresetColors.primaryElement,
            PresetColors.secondaryElement
        ),

        // ----------> Hover effect LOGO & MENU <----------
        colorChange(
            LOGO,
            PresetColors.primaryElement,
            PresetColors.secondaryElement,
            colorizeSVG
        ),
        colorChange(
            MENU,
            PresetColors.primaryElement,
            PresetColors.secondaryElement,
            colorizeSVG
        ),
        // ----------> Configure LIGHT BG frames <----------
        lightFrame(document.querySelectorAll('.light'), PresetColors),

        // ----------> Configure all BUTTONS <----------
        buttonsStyle(document.querySelectorAll('button'), PresetColors),

        // ----------> Configure all LIST STRONG Items <----------
        coloredTextStyle(
            document.querySelectorAll('li strong, .categoryText'),
            hoverTxtColor,
            PresetColors,
            currentTheme
        ),

        // ----------> Navigation Dropdown Menu <----------
        menuStyle(
            document.querySelectorAll('#header ul'),
            PresetColors.primary,
            PresetColors.primaryElement,
            hoverBgColor
        ),

        // ----------> Table & Form <----------
        tableStyle(PresetColors.secondary, PresetColors.primaryElement),

        formStyle(PresetColors.secondary, PresetColors.primaryElement)
    ])
}
