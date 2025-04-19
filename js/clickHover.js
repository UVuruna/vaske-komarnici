export async function mobileMenu() {
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



export async function colorChange(element, primaryColor, secondaryColor, colorizeSVG) {
    const activate = () => colorizeSVG(element, secondaryColor)
    const deactivate = () => colorizeSVG(element, primaryColor)

    element.addEventListener('mouseenter', activate) // desktop hover
    element.addEventListener('mouseleave', deactivate)

    element.addEventListener('touchstart', activate) // mobile touch
    element.addEventListener('touchend', deactivate)
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