let number = 1
window.debug = true
window.operationOrder =  function(func) {
    console.log(`${number}. "${func.name}": ${Math.floor(performance.now()-window.time)} ms`)
    number++
}

async function presentation(version, videoTitles) {
    const { selectModel, promoWidth } = await import(
        './interaction/selectModel.js?v=' + version
    )
    selectModel() ; if (debug) operationOrder(selectModel)
    if (window.innerWidth > 700) {promoWidth() ;  if (debug) operationOrder(promoWidth)}
       

    const { videoLoop, videoPlay, loadVideo } = await import(
        './media/media.js?v=' + version
    )
    for (const video of videoTitles) {loadVideo(video) ; if (debug) operationOrder(loadVideo)}
    videoPlay() ; if (debug) operationOrder(videoPlay)
    videoLoop() ; if (debug) operationOrder(videoLoop)
    
}

async function carousel(version) {
    import('./media/carousel.js?v=' + version)
    import('./media/imagePreview.js?v=' + version)
    if (debug) operationOrder(carousel)
}

async function order(version, priceDict) {
    const { orderTableInit } = await import(
        './ordering/orderTable.js?v=' + version
    )
    orderTableInit(priceDict) ;  if (debug) operationOrder(orderTableInit)
   

    const { showPopup } = await import('./ordering/showPopup.js?v=' + version)
    import('./ordering/orderMemory.js?v=' + version)
    showPopup() ; if (debug) operationOrder(showPopup)
    
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

    await loadGlobals() ; if (debug) operationOrder(loadGlobals)
    

    await (async () => {
        await settingThemeOnload() ; if (debug) operationOrder(settingThemeOnload)
       

        if (window.innerWidth <= 800) {
            let mobileMenu
            await import('./interaction/clickHover.js?v=' + version).then(module => {
                mobileMenu = module.mobileMenu
            })
            mobileMenu() ; if (debug) operationOrder(mobileMenu)
            
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
    let showcase = false

    // ----------> Showcase elements <----------
    if (initDict['presentation']) {
        promises.push(
            presentation(version, initDict['presentation'])
        )
        showcase = true
    }

    // ----------> Slideshow elements <----------
    if (initDict['carousel']) {
        promises.push(carousel(version))
        if (showcase) {
            promises.push(
                (async () => {
                    const { loadDelay } = await import('./media/media.js?v=' + version)
                    loadDelay() ; if (debug) operationOrder(loadDelay)
                })()
            )
            
        } else {
            promises.push(
                (async () => {
                    const { loadDelay, videoLoop, videoPlay } = await import('./media/media.js?v=' + version)
                    loadDelay() ; if (debug) operationOrder(loadDelay)
                    videoLoop() ; if (debug) operationOrder(videoLoop)
                    videoPlay() ; if (debug) operationOrder(videoPlay)
                })()
            )
        }
    }

    // ----------> Ordering table and form <----------
    if (initDict['order']) {
        promises.push(order(version, initDict['order']))  
    }

    // Kada su sve funkcije dodate u promises, izvrši ih pomoću Promise.all
    await Promise.all(promises)

    // ----------> Remove Loading Screen <----------
    removeLoadingScreen() ; if (debug) promises.push(operationOrder(removeLoadingScreen))
    console.log(`Screen => Width: ${window.innerWidth}px | Height: ${window.innerHeight}px`)
    console.log(`>>>>\n\tPage loaded in: ${Math.floor(performance.now()-window.time)} ms`)
    
}

function removeLoadingScreen() {
    const main = document.querySelector("main")
    const loader = document.getElementById("loader");
    main.style.transition = "opacity 0.5s ease";
    loader.style.transition = "opacity 0.5s ease";
    main.style.opacity = "1";
    loader.style.opacity = "0";
    
    setTimeout(() => {
        loader.remove();
    }, 500);
}