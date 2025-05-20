window.debug = false

async function presentation(version, videoTitles) {
    const {selectModel, promoWidth} = await import('./interaction/selectModel.js?v=' + version)
    await selectModel()
    if (debug) operationOrder(selectModel)
    if (window.innerWidth > 700) {
        window.addEventListener('load', promoWidth)
        if (debug) operationOrder(promoWidth)
    }

    import('./media/media.js?v=' + version).then(module => {
        for (const video of videoTitles) {
            module.loadVideo(video)
            if (debug) operationOrder(module.loadVideo, video)
        }
        module.videoPlay()
        if (debug) operationOrder(module.videoPlay)
        module.videoLoop()
        if (debug) operationOrder(module.videoLoop)
    })
}

async function carousel(version) {
    import('./media/carousel.js?v=' + version)
    import('./media/imagePreview.js?v=' + version)
    if (debug) operationOrder(carousel)
}

async function order(version, priceDict) {
    const {orderTableInit} = await import('./ordering/orderTable.js?v=' + version)
    await orderTableInit(priceDict)
    if (debug) operationOrder(orderTableInit)

    import('./ordering/showPopup.js?v=' + version).then(module => {
        module.showPopup()
        if (debug) operationOrder(module.showPopup)
    })
    import('./ordering/orderMemory.js?v=' + version)
}

async function loadGlobals() {
    if (!sessionStorage.getItem('start')) {
        window.updateManifest(
            window.ThemeColors[window.theme]['primary'],
            window.ThemeColors[window.theme]['primaryElement']
        )
        sessionStorage.setItem('start', true)
    }
}

function removeLoadingScreen() {
    const loader = document.getElementById("loader")
    loader.style.opacity = "0"
    document.querySelector("main").style.opacity = "1"
    setTimeout(() => {
        loader.remove()
    }, 500);
}



export async function init(version, path, config, initDict) {
    let time
    if (debug) {
        let number = 1
        time = performance.now()
        window.operationOrder =  function(func, arg=null) {
            console.log(`${number}. "${func.name}${arg ? ' | '+arg : ''}": ${Math.floor(performance.now()-time)} ms`)
            number++
        }
    }
    
    window.path = path
    window.version = version
    window.ThemeColors = config['ThemeColors']
    window.theme = config['theme']
    window.ThemeList = config['ThemeList']
    
    await import('./style/updateManifest.js?v=' + version)
    await (async () => {
        loadGlobals()
        if (debug) operationOrder(loadGlobals)

        const {settingThemeOnload} = await import('./style/theme.js?v=' + version)
        await settingThemeOnload()
        if (debug) operationOrder(settingThemeOnload)

        import('./media/guide.js?v=' + version).then(module => {
            module.initGuide()
            if (debug) operationOrder(module.initGuide)
        })
    })()

    const promises = []
    let showcase = false

    if (initDict['presentation']) {
        promises.push(
            presentation(version, initDict['presentation'])
        )
        showcase = true
    }
    if (initDict['carousel']) {
        promises.push(carousel(version))
        if (showcase) {
            promises.push(
                (async () => {
                    import('./media/media.js?v=' + version).then(module => {
                        module.loadDelay()
                        if (debug) operationOrder(module.loadDelay)
                    })
                })()
            )
            
        } else {
            promises.push(
                (async () => {
                    import('./media/media.js?v=' + version).then(module => {
                        module.loadDelay()
                        if (debug) operationOrder(module.loadDelay)
                        module.videoLoop()
                        if (debug) operationOrder(module.videoLoop)
                        module.videoPlay()
                        if (debug) operationOrder(module.videoPlay)
                    })
                })()
            )
        }
    }
    if (initDict['order']) {
        promises.push(order(version, initDict['order']))  
    }
    await Promise.all(promises)
    removeLoadingScreen()
    
    if (debug) {
        operationOrder(removeLoadingScreen)
        console.log(`>>>\n\tWidth: ${window.innerWidth}px | Height: ${window.innerHeight}px`)
        console.log(`>>>\n\tPage loaded in: ${(performance.now() - time).toFixed(2)} ms`)
    }
    
}