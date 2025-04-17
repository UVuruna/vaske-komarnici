export async function loadGlobals() {
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
            secondaryElement: '#90a955'
        },
        noon: {
            primary: '#4a4c4a',
            secondary: '#dfdedd',
            primaryElement: '#b28d34',
            secondaryElement: '#f0c42d'
        },
        afternoon: {
            primary: '#6f4e37',
            secondary: '#fff4e5',
            primaryElement: '#6d0016',
            secondaryElement: '#8c2f3c'
        },
        night: {
            primary: '#524e53',
            secondary: '#d5d3e1',
            primaryElement: '#7151a9',
            secondaryElement: '#8e83aa'
        }
    }
    return {
        LOGO: document.getElementById('LOGO'),
        MENU: document.getElementById('MENU'),
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
