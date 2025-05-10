let colorizeSVG,
    colorChange,
    hoverTxtColor,
    hoverBgColor,
    lightFrame,
    buttonsStyle,
    coloredTextStyle,
    menuStyle,
    tablesStyle,
    formStyle,
    pulsingAnimation

export async function settingThemeOnload() {
    const version = window.version

    await import('./colorizeSVG.js?v=' + version).then(module => {
        colorizeSVG = module.colorizeSVG
    })
    await import('../interaction/clickHover.js?v=' + version).then(module => {
        colorChange = module.colorChange
            ; (hoverTxtColor = module.hoverTxtColor),
                (hoverBgColor = module.hoverBgColor)
    })
    await import('./changeStyle.js?v=' + version).then(module => {
        ; (lightFrame = module.lightFrame),
            (buttonsStyle = module.buttonsStyle),
            (coloredTextStyle = module.coloredTextStyle),
            (menuStyle = module.menuStyle),
            (tablesStyle = module.tablesStyle),
            (formStyle = module.formStyle),
            (pulsingAnimation = module.pulsingAnimation)
    })
    settingTheme(sessionStorage.getItem('theme'), true)

    if (localStorage.getItem('version') !== version)
        localStorage.setItem('version', version)
}

export async function themeCycle() {
    const Themes = window.ThemeList
    //Get index of current theme and find next theme in list for cycle
    const newTheme = Themes[(Themes.indexOf(sessionStorage.getItem('theme')) + 1) % Themes.length]
    const { primaryElement: elementMain, primary: bodyMain } =
        window.ThemeColors[newTheme]

    await Promise.all([
        window.updateManifest(bodyMain, elementMain),
        settingTheme(newTheme)
    ])
    document.body.style.backgroundColor = bodyMain
    sessionStorage.setItem('theme', newTheme)
}

export async function settingTheme(currentTheme, load=false) {
    const {
        primaryElement: elementMain,
        secondaryElement: elementSec,
        primary: bodyMain,
        secondary: bodySec
    } = window.ThemeColors[currentTheme]

    const LOGO = document.getElementById('LOGO')
    const MENU = document.getElementById('MENU')

    await Promise.all([
        // ----------> Pulsing Actions <----------
        pulsingAnimation(),
        // ----------> Set Color LOGO & MENU <----------
        colorizeSVG(LOGO, elementMain, elementSec),
        colorizeSVG(MENU, elementMain, elementSec),
        // ----------> Hover effect LOGO & MENU <----------
        colorChange(LOGO, elementMain, elementSec, colorizeSVG),
        colorChange(MENU, elementMain, elementSec, colorizeSVG),
        // ----------> Configure LIGHT BG frames <----------
        lightFrame(
            document.querySelectorAll('.light'),
            elementMain,
            elementSec,
            bodyMain,
            bodySec
        ),
        // ----------> Configure all BUTTONS <----------
        buttonsStyle(
            document.querySelectorAll('button, .guide'),
            elementMain,
            elementSec,
            bodyMain
        ),
        // ----------> Configure all LIST STRONG Items <----------
        coloredTextStyle(
            document.querySelectorAll('li strong,  .categoryText'),
            hoverTxtColor,
            elementMain,
            elementSec,
            currentTheme
        ),
        // ----------> Navigation Dropdown Menu <----------
        menuStyle(
            document.querySelectorAll('#header ul'),
            bodyMain,
            elementMain,
            hoverBgColor
        ),
        // ----------> Table & Form <----------
        tablesStyle(bodySec, elementMain),
        formStyle(bodySec, elementMain)
    ])
    
    if (load) {
        console.log(`Page loaded in: ${Math.floor(performance.now()-window.time)} ms`)
        removeLoadingScreen()  
    }
}

function removeLoadingScreen() {
    const loader = document.getElementById("loader");
    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = "0";
    
    setTimeout(() => {
        loader.remove();
    }, 500);
}