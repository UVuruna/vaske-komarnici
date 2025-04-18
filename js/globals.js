export function chooseTheme(Time) {
    switch (true) {
        case (Time >= 4 && Time < 10):
            localStorage.setItem('theme', 'morning');
            return 'morning'
        case (Time >= 10 && Time < 16):
            localStorage.setItem('theme', 'noon');
            return 'noon'
        case (Time >= 16 && Time < 22):
            localStorage.setItem('theme', 'afternoon');
            return 'afternoon'
        default:
            localStorage.setItem('theme', 'night');
            return 'night'
    }
}

function getTime() {
    const currentDate = new Date()
    return currentDate.getHours() + currentDate.getMinutes() / 60
}

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

const ThemeList = [
    'morning', 
    'noon', 
    'afternoon', 
    'night'
]

export async function loadGlobals() {
    const updateManifestModule = await import(`./updateManifest.js?v=${version}`)
    const { updateManifest } = updateManifestModule

    const Time = getTime()
    localStorage.setItem('Time', Time)
    console.log(Time)

    const theme = chooseTheme(Time)
    updateManifest( ThemeColors[theme]['primary'], ThemeColors[theme]['primaryElement'] )

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
        ThemeColors: ThemeColors,
        chooseTheme: chooseTheme
    }
}
