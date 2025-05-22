const debug = true
let initStart

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

async function setManifest(primary, primaryElement) {
    if (!sessionStorage.getItem('start')) {
        updateManifest(primary,primaryElement)
        sessionStorage.setItem('start', JSON.stringify(true))
    }
}

function removeLoadingScreen() {
    const loader = document.getElementById("loader")
    loader.style.opacity = "0"
    document.querySelector("main").style.opacity = "1"
    setTimeout(() => {loader.remove()}, 0)
}


export async function init(phpStart, version, path, config, initDict) {
    if (debug) initStart = Date.now()
    window.path = path
    window.version = version
    window.ThemeColors = config['ThemeColors']
    window.theme = config['theme']
    window.ThemeList = config['ThemeList']
    const Showcase = initDict['presentation'] ? true : false
    const Carousel = initDict['carousel'] ? true : false
    const Ordering = initDict['order'] ? true : false

    await import('./style/theme.js?v=' + version).then(module => module.settingThemeOnload(Ordering))

    const promises = []
    if (Showcase) promises.push(presentation(version, initDict['presentation']))
    if (Carousel) promises.push(carousel(version))
    if (Carousel && Showcase) promises.push(import('./media/media.js?v=' + version).then(module => module.loadDelay()))
    if (Carousel && !Showcase) promises.push(import('./media/media.js?v=' + version).then(module => {module.loadDelay(); module.videoLoop(); module.videoPlay()}))
    if (Ordering) promises.push(order(version, initDict['order']))
    await Promise.all(promises)

    removeLoadingScreen()

    await import('./style/updateManifest.js?v=' + version)
    setManifest(window.ThemeColors[window.theme]['primary'],window.ThemeColors[window.theme]['primaryElement'])
    import('./media/guide.js?v=' + version).then(module => module.initGuide())
    
    if (debug) {
        const now = Date.now()
        const pageLoaded = (now-phpStart)
        const initLoaded = (now-initStart)
        console.log(`Page load: ${pageLoaded} ms`)
        console.log(`JS execute: ${initLoaded} ms (${((initLoaded/pageLoaded)*100).toFixed(2)}%)`)
        console.log(`Width: ${window.innerWidth}px | Height: ${window.innerHeight}px`)
    }
}