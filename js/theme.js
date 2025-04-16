const version = localStorage.getItem('version')

let ThemeList,
  ThemeColors,
  LOGO,
  MENU,
  LightFrames,
  BUTTONS,
  ListItems

export function colorChange(element, primaryColor, secondaryColor) {
  console.log(primaryColor)
  console.log(secondaryColor)
  element.style.filter = primaryColor;

  element.addEventListener('mouseover', () => {
    element.style.filter = secondaryColor;
  })
  element.addEventListener('mouseout', () => {
    element.style.filter = primaryColor;
  })
}

export function themeCycle (basePath) {
  const THEME = localStorage.getItem('theme')
  let currentIndex = ThemeList.indexOf(THEME)
  let newIndex = (currentIndex + 1) % ThemeList.length
  localStorage.setItem('theme', ThemeList[newIndex])

  settingTheme(basePath)
}

export function settingThemeOnload (globals, basePath, mouseHoverMenu) {
  ThemeColors = globals.ThemeColors
  ThemeList = globals.ThemeList
  LOGO = globals.LOGO
  MENU = globals.MENU
  LightFrames = globals.LightFrames
  BUTTONS = globals.BUTTONS
  ListItems = globals.ListItems

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
  settingTheme(basePath)
}

export function settingTheme (basePath) {
  let currentTheme = localStorage.getItem('theme')
  let PresetColors = ThemeColors[currentTheme]
  const dropdownMenus = document.querySelectorAll('#header ul')


  // ----------> SINGS <----------
  document.body.style.backgroundColor = PresetColors.primary

  // ----------> LIGHT BG <----------
  LightFrames.forEach(frame => {
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
  ListItems.forEach(item => {
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

  colorChange(LOGO, PresetColors.filterPrimary, PresetColors.filterSecondary)
  MENU.src = `${basePath}img/other/dropdown-menu-${currentTheme}.svg?v=${version}`
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
