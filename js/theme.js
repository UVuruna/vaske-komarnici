const version = localStorage.getItem('version')

const colorizeSVGModule = await import(`./colorizeSVG.js?v=${version}`)
const { colorizeSVG } = colorizeSVGModule

let GLOBALS

function colorChange(element, primaryColor, secondaryColor) {
  console.log(element)
  colorizeSVG(element, primaryColor)

  element.addEventListener('mouseenter', () => {
    colorizeSVG(element, secondaryColor)
    console.log('mouseenter')
  })

  element.addEventListener('mouseleave', () => {
    colorizeSVG(element, primaryColor)
    console.log('mouseleave')
  })
}

export function themeCycle() {
  const THEME = localStorage.getItem('theme')
  let currentIndex = GLOBALS.ThemeList.indexOf(THEME)
  let newIndex = (currentIndex + 1) % GLOBALS.ThemeList.length
  localStorage.setItem('theme', GLOBALS.ThemeList[newIndex])

  settingTheme()
}

export function settingThemeOnload (globals) {
  GLOBALS = globals

  const Time = localStorage.getItem('Time')

  if (Time >= 4 && Time < 9) {
    localStorage.setItem('theme', 'morning')
  } else if (Time >= 9 && Time < 16) {
    localStorage.setItem('theme', 'noon')
  } else if (Time >= 16 && Time < 21) {
    localStorage.setItem('theme', 'afternoon')
  } else {
    localStorage.setItem('theme', 'night')
  }

  localStorage.setItem('theme', 'afternoon') // TESTING PURPOSES
  settingTheme()
}

export function settingTheme() {
  let currentTheme = localStorage.getItem('theme')
  let PresetColors = GLOBALS.ThemeColors[currentTheme]

  colorChange(GLOBALS.LOGO, PresetColors.primaryElement, PresetColors.secondaryElement)
  colorChange(GLOBALS.MENU, PresetColors.primaryElement, PresetColors.secondaryElement)

  const dropdownMenus = document.querySelectorAll('#header ul')
  // ----------> SINGS <----------
  document.body.style.backgroundColor = PresetColors.primary

  // ----------> LIGHT BG <----------
  GLOBALS.LightFrames.forEach(frame => {
    frame.style.backgroundColor = PresetColors.secondary

    if (frame.tagName === 'LI' || frame.tagName === 'I') {
      frame.style.border = `3px solid ${PresetColors.secondary}`
      frame.style.boxShadow = `2px 2px 4px ${PresetColors.primaryElement},
                                -2px -2px 4px ${PresetColors.primaryElement},
                                  2px -2px 4px ${PresetColors.primaryElement},
                                  -2px 2px 4px ${PresetColors.primaryElement}`

      frame.addEventListener('mouseover', () => {
        frame.style.boxShadow = `4px 4px 7px ${PresetColors.secondaryElement},
                                  -4px -4px 7px ${PresetColors.secondaryElement},
                                    4px -4px 7px ${PresetColors.secondaryElement},
                                    -4px 4px 7px ${PresetColors.secondaryElement}`
      })
      frame.addEventListener('mouseout', () => {
        frame.style.boxShadow = `2px 2px 4px ${PresetColors.primaryElement},
                                  -2px -2px 4px ${PresetColors.primaryElement},
                                    2px -2px 4px ${PresetColors.primaryElement},
                                    -2px 2px 4px ${PresetColors.primaryElement}`
      })
    }
  })

  // ----------> GLOBALS.BUTTONS <----------
  GLOBALS.BUTTONS.forEach(link => {
    link.style.backgroundColor = PresetColors.primaryElement
    if (link.classList.contains('cta-button')) {
      link.style.boxShadow = `5px 5px 20px ${PresetColors.primaryElement}, -5px -5px 20px ${PresetColors.primaryElement}`

      link.addEventListener('mouseover', () => {
        link.style.boxShadow = `0 0 25px ${PresetColors.secondaryElement}, 0 0 50px ${PresetColors.secondaryElement}`
        link.style.backgroundColor = PresetColors.secondaryElement
      })
      link.addEventListener('mouseout', () => {
        link.style.boxShadow = `5px 5px 20px ${PresetColors.primaryElement}, -5px -5px 20px ${PresetColors.primaryElement}`
        link.style.backgroundColor = PresetColors.primaryElement
      })
    } else {
      link.addEventListener('mouseover', () => {
        link.style.backgroundColor = PresetColors.secondaryElement
      })
      link.addEventListener('mouseout', () => {
        link.style.backgroundColor = PresetColors.primaryElement
      })
    }
  })

  // ----------> LIST strong Items <----------
  GLOBALS.ListItems.forEach(item => {
    item.style.color = PresetColors.primaryElement
    item.style.cursor = 'pointer'
    if (!item.closest('.selectFrame')) {
      item.style.fontSize = '1.15rem'
    }
  })

  // ----------> Navigation Dropdown Menu <----------
  configDropdown(
    dropdownMenus,
    PresetColors.primary,
    PresetColors.primaryElement
  )
  window.addEventListener('resize', () => {
    configDropdown(
      dropdownMenus,
      PresetColors.primary,
      PresetColors.primaryElement
    )
  })
}

export function configDropdown (dropdownMenus, primaryColor, secondaryColor) {
  dropdownMenus.forEach(menu => {
    if (
      !menu.classList.contains('menu') ||
      window.matchMedia('(max-width: 800px)').matches
    ) {
      menu.style.border = `3px solid ${secondaryColor}`
      menu.style.backgroundColor = primaryColor

      const menuElements = Array.from(menu.children)
      menuElements.forEach(element => {
        dropdownEleHoverColor(element, secondaryColor)
      })
    } else {
      menu.style.border = 'none'
    }
  })
}

export function dropdownEleHoverColor (element, color) {
  element.addEventListener('mouseover', () => {
    element.style.backgroundColor = color
  })
  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = ''
  })
}
