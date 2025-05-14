
export async function lightFrame(LightFrames, elementMain, elementSec, bodyMain, bodySec) {

    function borderFrames(frame) {
        if (frame.classList.contains('border')) {
            frame.style.color = elementMain
        }
        frame.style.border = `2px solid ${elementMain}`

        frame.addEventListener('mouseenter', () => {
            frame.style.boxShadow = `4px 4px 7px ${elementSec},-4px -4px 7px ${elementSec},4px -4px 7px ${elementSec},-4px 4px 7px ${elementSec}`
        })
        frame.addEventListener('mouseleave', () => {
            frame.style.boxShadow = 'none'
        })
    }

    for (const frame of LightFrames) {
        frame.style.backgroundColor = bodySec
        frame.style.color = '#222222'

        if (frame.tagName !== 'DIV' || frame.classList.contains('border')) borderFrames(frame)
    }
}

export async function buttonsStyle(BUTTONS, elementMain, elementSec, bodyMain) {

    function buttonStyle(button) {
        if (button.tagName === 'BUTTON') {
            button.style.backgroundColor = elementMain
            button.style.color = '#ffffff'
            if (button.classList.contains('cta-button')) {
                button.style.boxShadow = `5px 5px 20px ${elementMain}, -5px -5px 20px ${elementMain}`
            }
        } else {
            button.style.color = elementMain
            button.style.backgroundColor = '#ffffff'
        }
    }
    function buttoneHover(button) {
        if (button.tagName === 'BUTTON') {
            button.style.backgroundColor = elementSec
            button.style.color = bodyMain
        } else {
            button.style.color = elementSec
            button.style.backgroundColor = bodyMain
        }
    }

    for (const button of BUTTONS) {
        const pulsing = button.classList.contains('pulse')

        buttonStyle(button)

        button.addEventListener('mouseenter', () => {
            if (pulsing) button.classList.remove('pulse')
            buttoneHover(button)
        })
        button.addEventListener('mouseleave', () => {
            if (pulsing) button.classList.add('pulse')
            buttonStyle(button)
        })
    }
}

export async function coloredTextStyle(coloredTextItems, hoverTxtColor, elementMain, elementSec) {

    function coloredText(item) {
        item.style.color = elementMain
        item.style.fontSize = '1.25rem'
        item.style.webkitTextStroke = '0.75px #222222'

    }

    for (const item of coloredTextItems) {
        coloredText(item)
        hoverTxtColor(item, elementSec, elementMain)
    }
}

export async function menuStyle(dropdownMenus, bgColor, secondaryColor, hoverBgColor) {

    function androidMenu(menu) {
        menu.style.border = `3px solid ${secondaryColor}`
        menu.style.backgroundColor = bgColor

        for (const element of Array.from(menu.children)) hoverBgColor(element, secondaryColor)
    }

    for (const menuItem of dropdownMenus) {
        if (!menuItem.classList.contains('menu') || window.innerWidth <= 800) {
            androidMenu(menuItem)
        } else {
            menuItem.style.border = 'none'
        }
    }
}

export async function tablesStyle(bgColor, elementMain) {

    const tables = document.querySelectorAll('table')
    if (!tables.length) return

    function tableStyle(table) {
        table.style.border = `2px solid ${elementMain}`
        table.style.borderRadius = '1.5rem'
        table.style.backgroundColor = bgColor
        table.style.overflow = 'hidden'
    }

    for (const table of tables) tableStyle(table)
    for (const header of document.querySelectorAll('th')) {
        header.style.backgroundColor = elementMain
        header.style.color = '#ffffff'
    }
    for (const borderFrame of document.querySelectorAll('.width, .height')) borderFrame.style.border = `2px solid ${elementMain}`
}

export async function formStyle(bgColor, elementMain) {

    const FORM = document.querySelector('form')
    if (!FORM) return

    function inputStyle(input) {
        input.style.backgroundColor = bgColor
        input.style.border = `2px solid ${elementMain}`
        input.style.borderRadius = '1rem'
    }

    for (const input of FORM.querySelectorAll('input, textarea')) inputStyle(input)
}

export function pulsingAnimation(time = 2) {
    const style = document.createElement('style')
    style.innerHTML = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.13);
            }
        }
  
        .pulse {
            animation: pulse ${time}s infinite;
            transition: transform 0.5s;
        }
    `
    document.head.appendChild(style)
}
