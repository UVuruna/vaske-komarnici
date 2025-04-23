export async function loadGlobals(updateManifest) {
    let theme

    if (!sessionStorage.getItem('start')) {
        const Time = getTime()
        theme = chooseTheme(Time)

        updateManifest(
            ThemeColors[theme]['primary'],
            ThemeColors[theme]['primaryElement']
        )
        sessionStorage.setItem('Time', Time)
        sessionStorage.setItem('start', true)

    } else {
        theme = sessionStorage.getItem('theme')
    }
    document.body.style.backgroundColor = ThemeColors[theme]['primary']

    return {
        ThemeList: ThemeList,
        ThemeColors: ThemeColors
    }
}

function chooseTheme(Time) {
    switch (true) {
        case Time >= 4 && Time < 11:
            sessionStorage.setItem('theme', 'morning')
            return 'morning'
        case Time >= 11 && Time < 18:
            sessionStorage.setItem('theme', 'noon')
            return 'noon'
        case Time >= 18 && Time < 21:
            sessionStorage.setItem('theme', 'afternoon')
            return 'afternoon'
        default:
            sessionStorage.setItem('theme', 'night')
            return 'night'
    }
}

function getTime() {
    const currentDate = new Date()
    return currentDate.getHours() + currentDate.getMinutes() / 60
}

const ThemeList = ['morning', 'noon', 'afternoon', 'night']

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
        primary: '#5c462d',
        secondary: '#fff4e5',
        primaryElement: '#840000',
        secondaryElement: '#ba4c5b'
    },
    night: {
        primary: '#524e53',
        secondary: '#d5d3e1',
        primaryElement: '#7151a9',
        secondaryElement: '#8e83aa'
    }
}
