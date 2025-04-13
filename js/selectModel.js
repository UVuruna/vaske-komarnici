const catalogueTextModule = await import(`./catalogueText.js?v=${version}`);
const {catalogueText} = catalogueTextModule

export function selectModel () {
  const version = localStorage.getItem('version')
  const type = ['Both', 'One']
  const color = ['White', 'Brown', 'Antracite']
  const shade = ['Light', 'Dark']

  document.querySelectorAll('.selectFrame img, .selectFrame i').forEach(selector => {
    
    selector.onclick = function () {
      // VAR declaration
      const promo = this.closest('.promo');
      const image = promo.querySelector('.promoImage');
      let imageSRC = image.getAttribute('src')
      image.style.opacity = 0
      
      setTimeout(() => {
        // Normal Situation ==> Changing Selected Part (net,frame,type)
        if (this.tagName !== 'I') {
          const name = this.getAttribute('src').split('/').pop().split('.')[0] // White,Brown,Antracite,Light,Dark,Both,One

          if (!imageSRC.includes('_')) {
            // testing
            catalogueText('White Light')
            imageSRC = imageSRC.replace(`.webp?v=${version}`, '') + `_White-Light.webp?v=${version}`
          }

          const list = [type, color, shade].find(list => list.includes(name))
          if (list) {
            const change = list.find(item => imageSRC.includes(item))
            if (change) {
              // testing
              catalogueText(change)
              image.src = imageSRC.replace(change, name)
            }
          }
        // Open Window PHOTO
        } else {
          const parts = imageSRC.split('/')
          const change = parts.pop().split('.')[0].split('_')[0]
          const newSRC = parts.join('/')
          // testing
          catalogueText(change)
          image.src = `${newSRC}/${change}.webp?v=${version}`
        }

        setTimeout(() => {
          image.style.opacity = 1
        }, 100)
      }, 500)
    }
  })
}
