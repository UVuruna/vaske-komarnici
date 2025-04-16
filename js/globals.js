export async function loadGlobals () {
  const ThemeList = ['morning', 'noon', 'afternoon', 'night']

  const currentDate = new Date()
  const minutes = currentDate.getMinutes()
  const Time = currentDate.getHours() + minutes / 60
  
  localStorage.setItem('Time', Time)
  localStorage.setItem('theme', ThemeList[1])

  const ThemeColors = {
    morning: {
      primary: '#36597c',
      secondary: '#cedce9',
      primaryElement: '#437118',
      secondaryElement: '#90a955',
      filterPrimary: 'invert(33%) sepia(69%) saturate(519%) hue-rotate(48deg) brightness(97%) contrast(88%)',
      filterSecondary: 'invert(54%) sepia(59%) saturate(291%) hue-rotate(37deg) brightness(102%) contrast(98%)'
    },
    noon: {
      primary: '#4a4c4a',
      secondary: '#dfdedd',
      primaryElement: '#b28d34',
      secondaryElement: '#f0c42d',
      filterPrimary: 'invert(84%) sepia(61%) saturate(448%) hue-rotate(4deg) brightness(93%) contrast(91%)',
      filterSecondary: 'invert(0%) sepia(40%) saturate(836%) hue-rotate(11deg) brightness(93%) contrast(91%)'
    },
    afternoon: {
      primary: '#6f4e37',
      secondary: '#fff4e5',
      primaryElement: '#6d0016',
      secondaryElement: '#8c2f39',
      filterPrimary: 'invert(65%) sepia(4%) saturate(5800%) hue-rotate(292deg) brightness(54%) contrast(189%)',
      filterSecondary: 'invert(65%) sepia(4%) saturate(5800%) hue-rotate(312deg) brightness(60%) contrast(260%)'
    },
    night: {
      primary: '#524e53',
      secondary: '#d5d3e1',
      primaryElement: '#7151a9',
      secondaryElement: '#8e83aa',
      filterPrimary: 'invert(84%) sepia(12%) saturate(2559%) hue-rotate(220deg) brightness(94%) contrast(90%)',
      filterSecondary: 'invert(18%) sepia(20%) saturate(455%) hue-rotate(216deg) brightness(93%) contrast(91%)'
    }
  }
  return {
    LOGO: document.getElementById('logo'),
    MENU: document.getElementById('menu-icon'),
    BUTTONS: document.querySelectorAll('button'),
    LightFrames: document.querySelectorAll(`
      #about_us,
      .selectFrame > *:not(:first-child),
      #footer,
      .fa-ban
    `),
    ListItems: document.querySelectorAll('li strong'),
    videos: document.querySelectorAll('.video-loop'),
    ThemeList: ThemeList,
    ThemeColors: ThemeColors
  }
}
