async function presentation(path, version, videoTitles, globals) {
    const { selectModel, promoWidth } = await import('./interaction/selectModel.js?v=' + version)
    const { videoLoop, videoPlay, loadVideo, loadDelay } = await import('./media/media.js?v=' + version)

    promoWidth()
    loadDelay()
    selectModel(version)

    videoTitles.forEach(video => {
        loadVideo(version, path, video)
    })
    videoPlay(globals.videos)
    videoLoop(globals.videos)
}

async function carousel(version) {
    import('./media/carousel.js?v=' + version),
    import('./media/imagePreview.js?v=' + version)
} 

async function order(path, version, priceDict) {
    const { orderTableInit } = await import('./ordering/orderTable.js?v=' + version)
    const { showPopup } = await import('./ordering/showPopup.js?v=' + version)
    import('./ordering/orderMemory.js?v=' + version)

    orderTableInit(priceDict)
    showPopup(path)
} 

export async function init(version, path, initDict) {
    const t0 = performance.now()
    console.log(`Screen => Width: ${window.innerWidth}px | Height: ${window.innerHeight}px`)

    let loadGlobals, themeCycle, settingThemeOnload, updateManifest, initGuide, showGuide, closeBtn

    await import('./globals.js?v=' + version).then(module => {loadGlobals = module.loadGlobals})
    await import('./style/updateManifest.js?v=' + version).then(module => {updateManifest = module.updateManifest})
    await import('./style/theme.js?v=' + version).then(module => {
        themeCycle = module.themeCycle,
        settingThemeOnload = module.settingThemeOnload
    })
    const globals = await loadGlobals(updateManifest) // LOADING GLOBALS

    await (async () => {
        settingThemeOnload(version, updateManifest, globals, t0) // SETTING THEME ONLOAD

        if (window.innerWidth <= 800) {
            let mobileMenu
            await import('./interaction/clickHover.js?v=' + version).then(module => {mobileMenu = module.mobileMenu})
            mobileMenu()
        }
        import('./media/guide.js?v=' + version).then(module => {
            initGuide = module.initGuide,
            initGuide(path,version,globals.ThemeColors)

            showGuide = module.showGuide,
            window.showGuide = showGuide

            closeBtn = module.closeBtn
            window.closeBtn = closeBtn
            
        })
        window.themeCycle = themeCycle
    })()

    const promises = []
    if (initDict['presentation']) { promises.push(presentation(path, version, initDict['presentation'], globals)) }
    if (initDict['carousel']) { promises.push(carousel(version)) }
    if (initDict['order']) { promises.push(order(path, version, initDict['order'])) }
    await Promise.all(promises)
}
