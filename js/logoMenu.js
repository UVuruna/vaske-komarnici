export function logoMenu() {
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
