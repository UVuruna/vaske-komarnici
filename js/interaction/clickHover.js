export async function colorChange(
    element,
    primaryColor,
    secondaryColor,
    colorizeSVG
) {
    const activate = () => colorizeSVG(element, secondaryColor)
    const deactivate = () => colorizeSVG(element, primaryColor)

    element.addEventListener('mouseenter', activate) // desktop hover
    element.addEventListener('mouseleave', deactivate)

    element.addEventListener('touchstart', activate, { passive: true }) // mobile touch
    element.addEventListener('touchend', deactivate, { passive: true })
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



window.navigationMenu = function (event, button) {
    event.stopPropagation()
    const dropdown = button.nextElementSibling

    if (window.getComputedStyle(dropdown).display === 'none') {
        dropdown.classList.add('show')
        button.setAttribute('aria-expanded', 'true')
    } else {
        dropdown.classList.remove('show')
        button.setAttribute('aria-expanded', 'false')
    }
}

document.body.addEventListener('click', () => {
    document.querySelectorAll('.navigation.show').forEach(dropdown => dropdown.classList.remove('show'))
    document.querySelectorAll('[aria-expanded="true"]').forEach(btn => btn.setAttribute('aria-expanded', 'false'))
})
