export function mobileMenu() {
    const menuIcon = document.getElementById('MENU')
    const pagesSpans = document.querySelector('.menu')

    menuIcon.addEventListener('click', e => {
        e.stopPropagation()
        pagesSpans.classList.toggle('show')
    })

    document.body.addEventListener('click', () => {
        pagesSpans.classList.remove('show')
    })

    document.querySelector('nav').addEventListener('click', e => {
        e.stopPropagation()
    })
}

export function configDropdownMenu(dropdownMenus, primaryColor, secondaryColor) {
    dropdownMenus.forEach(menu => {
        if (
            !menu.classList.contains('menu') ||
            window.matchMedia('(max-width: 800px)').matches
        ) {
            menu.style.border = `3px solid ${secondaryColor}`
            menu.style.backgroundColor = primaryColor

            const menuElements = Array.from(menu.children)
            menuElements.forEach(element => {
                hoverBgColor(element, secondaryColor)
            })
        } else {
            menu.style.border = 'none'
        }
    })
}

export function hoverBgColor(element, color) {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = color
    })
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = ''
    })
}

export function hoverTxtColor(element, colorIN, colorOUT) {
    element.addEventListener('mouseenter', () => {
        element.style.color = colorIN
    })
    element.addEventListener('mouseleave', () => {
        element.style.color = colorOUT
    })
}

export function colorChange(element, primaryColor, secondaryColor, colorizeSVG) {
    const activate = () => colorizeSVG(element, secondaryColor)
    const deactivate = () => colorizeSVG(element, primaryColor)

    element.addEventListener('mouseenter', activate) // desktop hover
    element.addEventListener('mouseleave', deactivate)

    element.addEventListener('touchstart', activate) // mobile touch
    element.addEventListener('touchend', deactivate)
}