export async function init(version, path, presentation, carousel) {
    const t0 = performance.now()
    console.log(`${window.screen.width}x${window.screen.height} | ${window.innerWidth}x${window.innerHeight}`)

    let loadGlobals, themeCycle, settingThemeOnload, updateManifest

    await import('./globals.js?v=' + version).then(module => {loadGlobals = module.loadGlobals})
    await import('./style/updateManifest.js?v=' + version).then(module => {updateManifest = module.updateManifest})
    await import('./style/theme.js?v=' + version).then(module => {
        themeCycle = module.themeCycle,
        settingThemeOnload = module.settingThemeOnload
    })
    const globals = await loadGlobals(updateManifest) // LOADING GLOBALS
    
    await (async () => {
        settingThemeOnload(version, updateManifest, globals, t0) // SETTING THEME ONLOAD

        if (window.innerWidth < 800) {
            let mobileMenu
            await import('./interaction/clickHover.js?v=' + version).then(module => {mobileMenu = module.mobileMenu})
            mobileMenu()
        }
        if (presentation) {
            let promoWidth, selectModel, videoLoop, videoPlay, loadVideo, loadDelay

            await import('./interaction/selectModel.js?v=' + version).then(module => {
                selectModel = module.selectModel
                promoWidth = module.promoWidth
            })
            await import('./media/media.js?v=' + version).then(module => {
                videoLoop = module.videoLoop,
                videoPlay = module.videoPlay,
                loadVideo = module.loadVideo,
                loadDelay = module.loadDelay
            })
            promoWidth()
            loadDelay()
            selectModel(version)

            presentation.forEach(video => {
                loadVideo(version, path, video)
            })
            videoPlay(globals.videos)
            videoLoop(globals.videos)
        }
        if (carousel) {
            setTimeout(() => {
                import('./media/carousel.js?v=' + version)
                import('./media/imagePreview.js?v=' + version)
            }, 0)
        }
        window.themeCycle = themeCycle
    })() 
}
