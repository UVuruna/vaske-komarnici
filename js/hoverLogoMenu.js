export function mouseHoverDropdown () {
  const menuIcon = document.getElementById('menu-icon')
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
