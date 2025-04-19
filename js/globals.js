function chooseTheme(Time) {
    switch (true) {
        case (Time >= 6 && Time < 10):
            sessionStorage.setItem('theme', 'morning');
            return 'morning'
        case (Time >= 10 && Time < 18):
            sessionStorage.setItem('theme', 'noon');
            return 'noon'
        case (Time >= 18 && Time < 22):
            sessionStorage.setItem('theme', 'afternoon');
            return 'afternoon'
        default:
            sessionStorage.setItem('theme', 'night');
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


export async function loadGlobals() {
    const updateManifestModule = await import(`./updateManifest.js?v=${version}`)
    const { updateManifest } = updateManifestModule

    

    let theme
    if (!sessionStorage.getItem('start')) {
        const Time = getTime()   
        theme = chooseTheme(Time)

        sessionStorage.setItem('Time', Time)
        sessionStorage.setItem('start', true)
    } else {
        theme = sessionStorage.getItem('theme')
    }

    const bodyColor = ThemeColors[theme]['primary']
    document.body.style.backgroundColor = bodyColor
    updateManifest(
        bodyColor,
        ThemeColors[theme]['primaryElement']
    )

    return {
        ThemeList : ThemeList,
        ThemeColors : ThemeColors,
        updateManifest : updateManifest
    }
}
