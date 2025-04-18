const version = localStorage.getItem('version')

const colorizeSVGModule = await import(`./colorizeSVG.js?v=${version}`)
const { colorizeSVG } = colorizeSVGModule

const clickHoverModule = await import(`./clickHover.js?v=${version}`)
const { colorChange, hoverTxtColor, configDropdownMenu } = clickHoverModule

let GLOBALS

export function themeCycle() {
    const THEME = localStorage.getItem('theme')
    let currentIndex = GLOBALS.ThemeList.indexOf(THEME)
    let newIndex = (currentIndex + 1) % GLOBALS.ThemeList.length
    localStorage.setItem('theme', GLOBALS.ThemeList[newIndex])

    settingTheme()
}

export function settingThemeOnload(globals) {
    GLOBALS = globals

    const Time = localStorage.getItem('Time')
    GLOBALS.chooseTheme(Time)

    //localStorage.setItem('theme', 'noon') // TESTING PURPOSES
    settingTheme()
}

export function settingTheme() {
    let currentTheme = localStorage.getItem('theme')
    let PresetColors = GLOBALS.ThemeColors[currentTheme]

    colorizeSVG(
        GLOBALS.LOGO,
        PresetColors.primaryElement,
        PresetColors.secondaryElement
    )
    colorizeSVG(
        GLOBALS.MENU,
        PresetColors.primaryElement,
        PresetColors.secondaryElement
    )

    colorChange(
        GLOBALS.LOGO,
        PresetColors.primaryElement,
        PresetColors.secondaryElement,
        colorizeSVG
    )
    colorChange(
        GLOBALS.MENU,
        PresetColors.primaryElement,
        PresetColors.secondaryElement,
        colorizeSVG
    )

    const dropdownMenus = document.querySelectorAll('#header ul')
    // ----------> SINGS <----------
    document.body.style.backgroundColor = PresetColors.primary

    // ----------> LIGHT BG <----------
    GLOBALS.LightFrames.forEach(frame => {
        frame.style.backgroundColor = PresetColors.secondary

        if (frame.tagName !== 'DIV') {
            frame.style.border = `2px solid ${PresetColors.primary}`

            frame.addEventListener('mouseenter', () => {
                frame.style.boxShadow = `4px 4px 7px ${PresetColors.secondaryElement},
                                  -4px -4px 7px ${PresetColors.secondaryElement},
                                    4px -4px 7px ${PresetColors.secondaryElement},
                                    -4px 4px 7px ${PresetColors.secondaryElement}`
            })
            frame.addEventListener('mouseleave', () => {
                frame.style.boxShadow = `2px 2px 4px ${PresetColors.primaryElement},
                                  -2px -2px 4px ${PresetColors.primaryElement},
                                    2px -2px 4px ${PresetColors.primaryElement},
                                    -2px 2px 4px ${PresetColors.primaryElement}`
            })
        }
    })

    // ----------> GLOBALS.BUTTONS <----------
    GLOBALS.BUTTONS.forEach(link => {
        link.style.backgroundColor = PresetColors.primaryElement
        if (link.classList.contains('cta-button')) {
            link.style.boxShadow = `5px 5px 20px ${PresetColors.primaryElement}, -5px -5px 20px ${PresetColors.primaryElement}`

            link.addEventListener('mouseenter', () => {
                link.style.boxShadow = `0 0 25px ${PresetColors.secondaryElement}, 0 0 50px ${PresetColors.secondaryElement}`
            })
            link.addEventListener('mouseleave', () => {
                link.style.boxShadow = `5px 5px 20px ${PresetColors.primaryElement}, -5px -5px 20px ${PresetColors.primaryElement}`
            })
        }
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = PresetColors.secondaryElement
        })
        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = PresetColors.primaryElement
        })
    })

    // ----------> LIST strong Items <----------
    GLOBALS.ListItems.forEach(item => {
        item.style.cursor = 'pointer'
        const theme = localStorage.getItem('theme')
        if (theme !== 'afternoon') {
            item.style.color = PresetColors.primaryElement
            hoverTxtColor(
                item,
                PresetColors.secondaryElement,
                PresetColors.primaryElement
            )
        } else {
            item.style.color = PresetColors.secondaryElement
            hoverTxtColor(
                item,
                PresetColors.primaryElement,
                PresetColors.secondaryElement
            )
        }
        item.style.webkitTextStroke = `0.5px black`

        if (!item.closest('.selectFrame')) {
            item.style.fontSize = '1.2rem'
        }
    })

    // ----------> Navigation Dropdown Menu <----------
    configDropdownMenu(
        dropdownMenus,
        PresetColors.primary,
        PresetColors.primaryElement
    )
}
