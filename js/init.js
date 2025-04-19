export async function init(path, presentation) {
    const t0 = performance.now()
    const version = localStorage.getItem('version')

    // MAIN COMPONENTS
    const globalsModule = await import(`./globals.js?v=${version}`)
    const { loadGlobals } = globalsModule
    const globals = await loadGlobals()

    // LOADING Theme
    const themeModule = await import(`./theme.js?v=${version}`)
    const { themeCycle, settingThemeOnload } = themeModule
    settingThemeOnload(globals) 

    const promoWidthModule = await import(`./promoWidth.js?v=${version}`)
    const { promoWidth } = promoWidthModule
    promoWidth()
    
    // Interaction
    await (async () => {
        const clickHoverModule = await import(`./clickHover.js?v=${version}`)
        const { mobileMenu } = clickHoverModule

        window.themeCycle = themeCycle
        mobileMenu()

        if (presentation) { 
            const selectModelModule = await import(`./selectModel.js?v=${version}`)
            const { selectModel } = selectModelModule
            const videoModule = await import(`./media.js?v=${version}`)
            const { videoLoop, videoPlay, loadVideo, intersection } = videoModule

            loadDelay()
            selectModel() 

            presentation.forEach(video => {
                loadVideo(path, video)
            })
            videoPlay(globals.videos)
            videoLoop(globals.videos)
        }
    })()
    console.log(`Loading Page: ${performance.now()-t0} ms`)
}
