import { themeCycle, settingThemeOnload } from './theme.js?v=1.0'
import { mouseHoverLogo, mouseHoverDropdown } from './hoverLogoMenu.js?v=1.0'
import { callContact } from './callContact.js?v=1.0'
import { loadGlobals } from './globals.js?v=1.0'
import { videoLoop, videoPlay, loadVideo } from './video.js?v=1.0'
import { selectModel } from './selectModel.js?v=1.0'

export async function init (basePath) {
  const globals = loadGlobals()

  settingThemeOnload(globals, basePath)
  mouseHoverLogo(globals.LOGO)
  mouseHoverDropdown()
  videoPlay(globals.videos)
  videoLoop(globals.videos)
  selectModel()
}

window.themeCycle = themeCycle
window.callContact = callContact
window.loadVideo = loadVideo