const version = localStorage.getItem('version')


export let LOGO
let ThemeList, ThemeColors, MENU, LightFrames, BUTTONS, ListItems, signs

export function themeCycle (basePath) {
  const THEME = localStorage.getItem('theme')
  let currentIndex = ThemeList.indexOf(THEME)
  let newIndex = (currentIndex + 1) % ThemeList.length
  localStorage.setItem('theme', ThemeList[newIndex])

  settingTheme(true, basePath
  )
}

export function settingThemeOnload (globals, basePath) {
  ThemeColors = globals.ThemeColors
  ThemeList = globals.ThemeList
  LOGO = globals.LOGO
  MENU = globals.MENU
  LightFrames = globals.LightFrames
  BUTTONS = globals.BUTTONS
  ListItems = globals.ListItems
  signs = globals.signs

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

  //localStorage.setItem('theme', 'noon') // TESTING PURPOSES
  settingTheme(null, basePath)
}

export function settingTheme (Hovered, basePath) {
  let currentTheme = localStorage.getItem('theme')
  let PresetColors = ThemeColors[currentTheme]
  let logoType
  const dropdownMenus = document.querySelectorAll('#header ul')

  // ----------> SINGS <----------
  document.body.style.backgroundColor = PresetColors.primary
  signs.forEach(sign => {
    sign.style.color = PresetColors.primaryElement
    sign.style.boxShadow = `2px 2px 7px ${PresetColors.primaryElement},
                           -2px -2px 7px ${PresetColors.primaryElement},
                            2px -2px 7px ${PresetColors.primaryElement},
                            -2px 2px 7px ${PresetColors.primaryElement}`
    sign.style.backgroundColor= `${PresetColors.secondary}`
    sign.style.border= `3px solid ${PresetColors.secondary}`
  })

  // ----------> LIGHT BG <----------
  LightFrames.forEach(frame => {
    frame.style.backgroundColor = PresetColors.secondary
    if (frame.tagName === 'LI') {
      frame.style.border = `3px solid ${PresetColors.primaryElement}`
      frame.style.boxShadow = `0 0 10px ${PresetColors.primaryElement}, 0 0 10px ${PresetColors.primaryElement}`

      frame.addEventListener('mouseover', () => {
        frame.style.boxShadow = `0 0 15px ${PresetColors.secondaryElement}, 0 0 25px ${PresetColors.secondaryElement}`
      })
      frame.addEventListener('mouseout', () => {
        frame.style.boxShadow = `0 0 10px ${PresetColors.primaryElement}, 0 0 10px ${PresetColors.primaryElement}`
      })
    }
  })

  // ----------> BUTTONS <----------
  BUTTONS.forEach(link => {
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
    }
  })

  // ----------> LIST strong Items <----------
  ListItems.forEach(item => {
    item.style.color = PresetColors.primaryElement
    item.style.fontWeight = '700'
    item.style.cursor = 'pointer'
    if (!item.closest('.selectFrame')) {
      item.style.fontSize = '1.3rem'
    }

  })

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

  const Time = localStorage.getItem('Time')
  if (
    (Time >= 6 && Time < 7) ||
    (Time >= 12 && Time < 13) ||
    (Time >= 18 && Time < 19) ||
    Time < 1
  ) {
    if (!Hovered) {
      logoType = 'fire'
    } else {
      logoType = 'simple'
    }
  } else {
    if (!Hovered) {
      logoType = 'simple'
    } else {
      logoType = 'fire'
    }
  }

  LOGO.src = `${basePath}img/logo/logo_${currentTheme}_${logoType}.webp?v=${version}`
  MENU.src = `${basePath}img/other/dropdown-menu-${currentTheme}.svg?v=${version}`
}

export function configDropdown (dropdownMenus, primaryColor, secondaryColor) {
  dropdownMenus.forEach(menu => {
    if (
      !menu.classList.contains('menu') ||
      window.matchMedia('(max-width: 750px)').matches
    ) {
      menu.style.border = `3px solid ${secondaryColor}`
      menu.style.backgroundColor = primaryColor

      const menuElements = Array.from(menu.children)
      menuElements.forEach(element => {
        dropdownEleHoverColor(element, secondaryColor)
      })
    } else {
      menu.style.border = `none`
      menu.style.backgroundColor = ''

      const menuElements = Array.from(menu.children)
      menuElements.forEach(element => {
        dropdownEleHoverColor(element, '')
      })
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
