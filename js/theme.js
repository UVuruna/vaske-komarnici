let GLOBALS,
    updateMANIFEST,
    colorizeSVG,
    colorChange,
    hoverTxtColor,
    hoverBgColor,
    lightFrame,
    buttonsStyle,
    listItemsStyle,
    menuStyle

import { colorizeSVG as colorizeSVGDelay } from './colorizeSVG.js'
import {
    colorChange as colorChangeDelay,
    hoverTxtColor as hoverTxtColorDelay,
    hoverBgColor as hoverBgColorDelay
} from './clickHover.js'
import {
    lightFrame as lightFrameDelay,
    buttonsStyle as buttonsStyleDelay,
    listItemsStyle as listItemsStyleDelay,
    menuStyle as menuStyleDelay
} from './changeStyle.js'

colorizeSVG = colorizeSVGDelay
colorChange = colorChangeDelay
hoverTxtColor = hoverTxtColorDelay
hoverBgColor = hoverBgColorDelay
lightFrame = lightFrameDelay
buttonsStyle = buttonsStyleDelay
listItemsStyle = listItemsStyleDelay
menuStyle = menuStyleDelay

export async function settingThemeOnload(
    version,
    updateTrue,
    updateManifest,
    updateJS,
    globals
) {
    if (updateTrue) {
        const modules = await updateJS(
            ['colorizeSVG', 'clickHover', 'changeStyle'],
            version
        )

        colorizeSVG = modules.colorizeSVG.colorizeSVG
        colorChange = modules.clickHover.colorChange
        hoverTxtColor = modules.clickHover.hoverTxtColor
        hoverBgColor = modules.clickHover.hoverBgColor
        lightFrame = modules.changeStyle.lightFrame
        buttonsStyle = modules.changeStyle.buttonsStyle
        listItemsStyle = modules.changeStyle.listItemsStyle
        menuStyle = modules.changeStyle.menuStyle
    }
    GLOBALS = globals
    updateMANIFEST = updateManifest
    settingTheme(sessionStorage.getItem('theme'))
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
        listItemsStyle(currentTheme, ListItems, hoverTxtColor, PresetColors),

        // ----------> Navigation Dropdown Menu <----------
        menuStyle(
            dropdownMenus,
            PresetColors.primary,
            PresetColors.primaryElement,
            hoverBgColor
        )
    ])
}
