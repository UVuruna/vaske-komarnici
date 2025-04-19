const version = localStorage.getItem('version')

const colorizeSVGModule = await import(`./colorizeSVG.js?v=${version}`)
const { colorizeSVG } = colorizeSVGModule

const clickHoverModule = await import(`./clickHover.js?v=${version}`)
const { colorChange, hoverTxtColor, hoverBgColor } = clickHoverModule

const changeStyleModule = await import(`./changeStyle.js?v=${version}`)
const { lightFrame, buttonsStyle, listItemsStyle, menuStyle } =
    changeStyleModule

let GLOBALS

export async function settingThemeOnload(globals) {
    GLOBALS = globals
    settingTheme(sessionStorage.getItem('theme'))
}

export async function themeCycle() {
    const theme = sessionStorage.getItem('theme')
    let currentIndex = GLOBALS.ThemeList.indexOf(theme)
    let newIndex = (currentIndex + 1) % GLOBALS.ThemeList.length

    const newTheme = GLOBALS.ThemeList[newIndex]
    sessionStorage.setItem('theme', newTheme)

    const bodyColor = GLOBALS.ThemeColors[newTheme]['primary']
    document.body.style.backgroundColor = bodyColor

    await Promise.all([
        settingTheme(newTheme),
        GLOBALS.updateManifest(
            bodyColor,
            GLOBALS.ThemeColors[newTheme]['primaryElement']
        )
    ])
}

export async function settingTheme(currentTheme) {
    let PresetColors = GLOBALS.ThemeColors[currentTheme]
    
    const dropdownMenus = document.querySelectorAll('#header ul')
    const LOGO = document.getElementById('LOGO')
    const MENU = document.getElementById('MENU')
    const BUTTONS = document.querySelectorAll('button')
    const ListItems = document.querySelectorAll('li strong')
    const LightFrames = document.querySelectorAll(`
        #about_us,
        .selectFrame > *:not(:first-child),
        #footer,
        .fa-ban
    `)

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
        lightFrame(LightFrames, PresetColors),

        // ----------> Configure all BUTTONS <----------
        buttonsStyle(BUTTONS, PresetColors),

        // ----------> Configure all LIST STRONG Items <----------
        listItemsStyle(
            currentTheme,
            ListItems,
            hoverTxtColor,
            PresetColors
        ),

        // ----------> Navigation Dropdown Menu <----------
        menuStyle(
            dropdownMenus,
            PresetColors.primary,
            PresetColors.primaryElement,
            hoverBgColor
        )
    ])
}
