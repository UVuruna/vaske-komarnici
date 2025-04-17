const version = localStorage.getItem('version')

export async function init(basePath, presentation) {
    const globalsModule = await import(`./globals.js?v=${version}`)
    const themeModule = await import(`./theme.js?v=${version}`)
    const hoverLogoMenuModule = await import(`./hoverLogoMenu.js?v=${version}`)
    const videoModule = await import(`./video.js?v=${version}`)
    const selectModelModule = await import(`./selectModel.js?v=${version}`)
    const promoWidthModule = await import(`./promoWidth.js?v=${version}`)

    const { themeCycle, settingThemeOnload } = themeModule
    const { mouseHoverDropdown } = hoverLogoMenuModule
    const { loadGlobals } = globalsModule
    const { videoLoop, videoPlay, loadVideo } = videoModule
    const { selectModel } = selectModelModule
    const { promoWidth } = promoWidthModule

    window.themeCycle = themeCycle
    window.loadVideo = loadVideo

    const globals = await loadGlobals()

    settingThemeOnload(globals)
    mouseHoverDropdown()

    if (presentation) {
        selectModel()

        setTimeout(() => {
            promoWidth()
            videoPlay(globals.videos)
            videoLoop(globals.videos)
        }, 100)
    }
}
