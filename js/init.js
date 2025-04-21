const t0 = performance.now()

let loadGlobals,
    themeCycle,
    settingThemeOnload,
    promoWidth,
    mobileMenu,
    selectModel,
    videoLoop,
    videoPlay,
    loadVideo,
    loadDelay,
    updateManifest

// Import modules initially
import { updateJS } from './updateJS.js'
import { loadGlobals as importedLoadGlobals } from './globals.js'
import {
    themeCycle as importedThemeCycle,
    settingThemeOnload as importedSettingThemeOnload
} from './theme.js'
import { mobileMenu as importedMobileMenu } from './clickHover.js'
import { promoWidth as importedPromoWidth } from './promoWidth.js'
import { selectModel as importedSelectModel } from './selectModel.js'
import {
    videoLoop as importedVideoLoop,
    videoPlay as importedVideoPlay,
    loadVideo as importedLoadVideo,
    loadDelay as importedLoadDelay
} from './media.js'
import { updateManifest as updateManifestDelay } from './updateManifest.js'

// Initially assign the imported functions to variables
loadGlobals = importedLoadGlobals
themeCycle = importedThemeCycle
settingThemeOnload = importedSettingThemeOnload
mobileMenu = importedMobileMenu
promoWidth = importedPromoWidth
selectModel = importedSelectModel
videoLoop = importedVideoLoop
videoPlay = importedVideoPlay
loadVideo = importedLoadVideo
loadDelay = importedLoadDelay
updateManifest = updateManifestDelay

export async function init(version, path, presentation) {
    const update = localStorage.getItem('version') !== version

    if (update) {
        const modules = await updateJS(
            ['globals', 'theme', 'updateManifest'],
            version
        )

        loadGlobals = modules.globals.loadGlobals
        themeCycle = modules.theme.themeCycle
        settingThemeOnload = modules.theme.settingThemeOnload
        updateManifest = modules.updateManifest.updateManifest
    }

    const globals = await loadGlobals(updateManifest)
    settingThemeOnload(version, update, updateManifest, updateJS, globals)

    await (async () => {
        if (update) {
            const modules = await updateJS(['promoWidth', 'clickHover'], version)

            promoWidth = modules.promoWidth.promoWidth
            mobileMenu = modules.clickHover.mobileMenu
        }
        mobileMenu()
        promoWidth()

        if (presentation) {
            if (update) {
                const modules = await updateJS(['selectModel', 'media'], version)

                selectModel = modules.selectModel.selectModel
                videoLoop = modules.media.videoLoop
                videoPlay = modules.media.videoPlay
                loadVideo = modules.media.loadVideo
                loadDelay = modules.media.loadDelay
            }
            loadDelay()
            selectModel(version, update, updateJS)

            presentation.forEach(video => {
                loadVideo(version, path, video)
            })
            videoPlay(globals.videos)
            videoLoop(globals.videos)
        }
        window.themeCycle = themeCycle
    })()
    localStorage.setItem('version', version)
    console.log(
        `Version:${version} | Loading Page: ${Math.floor(
            performance.now() - t0
        )} ms`
    )
}
