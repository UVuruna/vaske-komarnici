export function promoWidth () {
  const promoContainers = document.querySelectorAll('.promo')
  let maxWidth = 0

  promoContainers.forEach(container => {
    const width = container.offsetWidth
    if (width > maxWidth) {
      maxWidth = width
    }
  })

  promoContainers.forEach(container => {
    container.style.width = `${maxWidth}px`
  })
}
