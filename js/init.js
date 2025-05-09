async function presentation(version, videoTitles) {
    const { selectModel, promoWidth } = await import(
        './interaction/selectModel.js?v=' + version
    )
    const { videoLoop, videoPlay, loadVideo, loadDelay } = await import(
        './media/media.js?v=' + version
    )

    promoWidth()
    loadDelay()
    selectModel()

    for (const video of videoTitles) loadVideo(video)
    videoPlay()
    videoLoop()
}

async function carousel(version) {
    import('./media/carousel.js?v=' + version)
    import('./media/imagePreview.js?v=' + version)
}

async function order(version, priceDict) {
    const { orderTableInit } = await import(
        './ordering/orderTable.js?v=' + version
    )
    const { showPopup } = await import('./ordering/showPopup.js?v=' + version)
    import('./ordering/orderMemory.js?v=' + version)

    orderTableInit(priceDict)
    showPopup()
}

export async function init(version, path, initDict) {
    window.time = performance.now()
    window.path = path
    window.version = version
    
    let loadGlobals,
        themeCycle,
        settingThemeOnload,
        initGuide,
        showGuide,
        closeBtn

    await import('./globals.js?v=' + version).then(module => {
        loadGlobals = module.loadGlobals
    })
    await import('./style/updateManifest.js?v=' + version).then(module => {
        window.updateManifest = module.updateManifest
    })
    await import('./style/theme.js?v=' + version).then(module => {
        ; (themeCycle = module.themeCycle),
            (settingThemeOnload = module.settingThemeOnload)
    })

    await loadGlobals() // LOADING GLOBALS

    await (async () => {
        settingThemeOnload() // SETTING THEME ONLOAD

        if (window.innerWidth <= 800) {
            let mobileMenu
            await import('./interaction/clickHover.js?v=' + version).then(module => {
                mobileMenu = module.mobileMenu
            })
            mobileMenu()
        }
        await import('./media/guide.js?v=' + version).then(module => {
            initGuide = module.initGuide
            showGuide = module.showGuide
            closeBtn = module.closeBtn
        })
        initGuide(sessionStorage.getItem('theme'))
        window.showGuide = showGuide
        window.closeBtn = closeBtn
        window.themeCycle = themeCycle
    })()

    const promises = []
    if (initDict['presentation']) {
        promises.push(
            presentation(version, initDict['presentation'])
        )
    }
    if (initDict['carousel']) {
        promises.push(carousel(version))
    }
    if (initDict['order']) {
        promises.push(order(version, initDict['order']))
    }
    await Promise.all(promises)
    console.log(`Screen => Width: ${window.innerWidth}px | Height: ${window.innerHeight}px`)
}
