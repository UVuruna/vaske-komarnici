async function presentation(version, videoTitles) {
    const {selectModel, promoWidth} = await import('./interaction/selectModel.js?v=' + version)
    await selectModel()
    if (window.innerWidth > 700) window.addEventListener('load', promoWidth)

    import('./media/media.js?v=' + version).then(module => {
        for (const video of videoTitles) module.loadVideo(video)
        module.videoPlay()
        module.videoLoop()
    })
}

async function carousel(version) {
    import('./media/carousel.js?v=' + version)
    import('./media/imagePreview.js?v=' + version)
}

async function order(version, priceDict) {
    const {orderTableInit} = await import('./ordering/orderTable.js?v=' + version)
    await orderTableInit(priceDict)
    import('./ordering/showPopup.js?v=' + version).then(module => module.showPopup())
    import('./ordering/orderMemory.js?v=' + version)
}

async function loadGlobals() {
    if (!sessionStorage.getItem('start')) {
        window.updateManifest(window.ThemeColors[window.theme]['primary'],window.ThemeColors[window.theme]['primaryElement'])
        sessionStorage.setItem('start', true)
    }
}

function removeLoadingScreen() {
    const loader = document.getElementById("loader")
    loader.style.opacity = "0"
    document.querySelector("main").style.opacity = "1"
    setTimeout(() => {loader.remove()}, 500)
}


export async function init(phpStart, version, path, config, initDict) {
    const initStart = Date.now()
    window.path = path
    window.version = version
    window.ThemeColors = config['ThemeColors']
    window.theme = config['theme']
    window.ThemeList = config['ThemeList']
    
    await import('./style/updateManifest.js?v=' + version)
    await (async () => {
        loadGlobals()
        await import('./style/theme.js?v=' + version).then(module => module.settingThemeOnload())
        import('./media/guide.js?v=' + version).then(module => module.initGuide())
    })()

    const promises = []
    let showcase = false
    if (initDict['presentation']) {
        promises.push(presentation(version, initDict['presentation']))
        showcase = true
    }
    if (initDict['carousel']) {
        promises.push(carousel(version))
        if (showcase) {
            promises.push((async () => {import('./media/media.js?v=' + version).then(module => module.loadDelay())})())
        } else {
            promises.push((async () => {import('./media/media.js?v=' + version).then(module => {module.loadDelay(); module.videoLoop(); module.videoPlay()})})())
        }
    }
    if (initDict['order']) {promises.push(order(version, initDict['order']))}

    await Promise.all(promises)
    removeLoadingScreen()
    
    
    const now = Date.now();
    const pageLoaded = (now-phpStart)
    const initLoaded = (now-initStart)
    console.log(`Page load: ${pageLoaded} ms`)
    console.log(`JS execute: ${initLoaded} ms (${((initLoaded/pageLoaded)*100).toFixed(2)}%)`)
    console.log(`Width: ${window.innerWidth}px | Height: ${window.innerHeight}px`)
}