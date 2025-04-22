// ----------> LIGHT BG <----------
export async function lightFrame(LightFrames, PresetColors) {
    LightFrames.forEach(frame => {
        frame.style.backgroundColor = PresetColors.secondary
        frame.style.color = '#222222'

        if (frame.tagName !== 'DIV' || frame.classList.contains('border')) {
            if (frame.classList.contains('border')) {
                frame.style.color = PresetColors.primaryElement
            }
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
}
// ----------> GLOBALS.BUTTONS <----------
export async function buttonsStyle(BUTTONS, PresetColors) {
    BUTTONS.forEach(link => {
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
}
// ----------> LIST strong Items <----------
export async function listItemsStyle(
    theme,
    ListItems,
    hoverTxtColor,
    PresetColors
) {
    ListItems.forEach(item => {
        item.style.cursor = 'pointer'
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
}

// ----------> DROPDOWN MENU <----------
export async function menuStyle(
    dropdownMenus,
    bgColor,
    secondaryColor,
    hoverBgColor
) {
    dropdownMenus.forEach(menu => {
        if (
            !menu.classList.contains('menu') ||
            window.matchMedia('(max-width: 800px)').matches
        ) {
            menu.style.border = `3px solid ${secondaryColor}`
            menu.style.backgroundColor = bgColor

            const menuElements = Array.from(menu.children)
            menuElements.forEach(element => {
                hoverBgColor(element, secondaryColor)
            })
        } else {
            menu.style.border = 'none'
        }
    })
}

export async function tableStyle(bgColor, elementColor) {
    const TABLE = document.querySelector('table')
    if (!TABLE) return

    TABLE.style.border = `2px solid ${elementColor}`
    TABLE.style.borderRadius = '1.5rem'
    TABLE.style.backgroundColor = bgColor
    TABLE.style.overflow = 'hidden'

    const headers = document.querySelectorAll('th')
    const borderFrames = document.querySelectorAll('.width, .height')

    headers.forEach(header => {
        header.style.backgroundColor = elementColor
        header.style.color = '#ffffff'
    })
    borderFrames.forEach(borderFrame => {
        borderFrame.style.border = `2px solid ${elementColor}`
    })
    
}

export async function formStyle(bgColor, elementColor) {
    const FORM = document.querySelector('form')
    if (!FORM) return

    const Inputs = FORM.querySelectorAll('input, textarea')

    Inputs.forEach(input => {
        input.style.backgroundColor = bgColor
        input.style.border = `2px solid ${elementColor}`
        input.style.borderRadius = '1.5rem'
    })
}
