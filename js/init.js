const version = localStorage.getItem('version')

export async function init(presentation) {
    const t0 = performance.now()

    // MAIN COMPONENTS
    const globalsModule = await import(`./globals.js?v=${version}`)
    const { loadGlobals } = globalsModule
    const globals = await loadGlobals()

    const themeModule = await import(`./theme.js?v=${version}`)
    const { themeCycle, settingThemeOnload } = themeModule

    const promoWidthModule = await import(`./promoWidth.js?v=${version}`)
    const { promoWidth } = promoWidthModule
    
    const videoModule = await import(`./video.js?v=${version}`)
    const { videoLoop, videoPlay, loadVideo } = videoModule
    window.loadVideo = loadVideo

    // USER INTERACTION
    const clickHoverModule = await import(`./clickHover.js?v=${version}`)
    const { mobileMenu } = clickHoverModule

    const selectModelModule = await import(`./selectModel.js?v=${version}`)
    const { selectModel } = selectModelModule


    settingThemeOnload(globals) // LOADING SCREEN

    window.themeCycle = themeCycle // Logo Interaction
    mobileMenu()
    if (presentation) {
        selectModel()

        setTimeout(() => {
            promoWidth()
            videoPlay(globals.videos)
            videoLoop(globals.videos)
        }, 100)
    }
    console.log(`Loading Page: ${performance.now()-t0} ms`)
}
