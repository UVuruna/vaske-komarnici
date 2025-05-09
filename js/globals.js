export async function loadGlobals() {
    let theme

    if (!sessionStorage.getItem('start')) {
        const Time = getTime()
        theme = chooseTheme(Time)

        window.updateManifest(
            ThemeColors[theme]['primary'],
            ThemeColors[theme]['primaryElement']
        )
        sessionStorage.setItem('theme', theme)
        sessionStorage.setItem('Time', Time)
        sessionStorage.setItem('start', true)
    } else {
        theme = sessionStorage.getItem('theme')
    }
    document.body.style.backgroundColor = ThemeColors[theme]['primary']
    window.delayedCall = delayedCall
}

function delayedCall(func, args=[]) {
    if (document.readyState !== 'loading') {
        func(...args);
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            func(...args);
        });
    }
}

function chooseTheme(Time) {
    switch (true) {
        case Time >= 4 && Time < 12:
            return 'morning'
        case Time >= 12 && Time < 20:
            return 'noon'
        case Time >= 20 && Time < 24:
            return 'afternoon'
        default:
            return 'night'
    }
}

function getTime() {
    const currentDate = new Date()
    return currentDate.getHours() + currentDate.getMinutes() / 60
}
window.ThemeList = ['morning', 'noon', 'afternoon', 'night']

window.ThemeColors = {
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
    night: {
        primary: '#5c462d',
        secondary: '#fff4e5',
        primaryElement: '#840000',
        secondaryElement: '#ba4c5b'
    },
    afternoon: {
        primary: '#524e53',
        secondary: '#d5d3e1',
        primaryElement: '#7151a9',
        secondaryElement: '#8e83aa'
    }
}
