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
    BUTTONS.forEach(button => {
        button.style.backgroundColor = PresetColors.primaryElement
        if (button.classList.contains('cta-button')) {
            button.style.boxShadow = `5px 5px 20px ${PresetColors.primaryElement}, -5px -5px 20px ${PresetColors.primaryElement}`

            button.addEventListener('mouseenter', () => {
                button.style.boxShadow = `0 0 25px ${PresetColors.secondaryElement}, 0 0 50px ${PresetColors.secondaryElement}`
            })
            button.addEventListener('mouseleave', () => {
                button.style.boxShadow = `5px 5px 20px ${PresetColors.primaryElement}, -5px -5px 20px ${PresetColors.primaryElement}`
            })
        }
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = PresetColors.secondaryElement
        })
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = PresetColors.primaryElement
        })
    })
}
// ----------> LIST strong Items <----------
export async function listItemsStyle(
    ListItems,
    hoverTxtColor,
    PresetColors
) {
    ListItems.forEach(item => {
        item.style.color = PresetColors.primaryElement
        item.style.fontSize = '1.2rem'
        item.style.webkitTextStroke = `0.025em #222222`
        hoverTxtColor(
            item,
            PresetColors.secondaryElement,
            PresetColors.primaryElement
        )
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
    const tables = document.querySelectorAll('table')
    if (!tables.length) return

    tables.forEach(TABLE => {
        TABLE.style.border = `2px solid ${elementColor}`
        TABLE.style.borderRadius = '1.5rem'
        TABLE.style.backgroundColor = bgColor
        TABLE.style.overflow = 'hidden'
    })

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
        input.style.borderRadius = '1rem'
    })
}
