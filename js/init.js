import { themeCycle, settingThemeOnload } from './theme.js?v=1.0'
import { mouseHoverLogo, mouseHoverDropdown } from './hoverLogoMenu.js?v=1.0'
import { callContact } from './callContact.js?v=1.0'
import { loadGlobals } from './globals.js?v=1.0'
import { videoLoop, videoPlay, loadVideo } from './video.js?v=1.0'
import { selectModel } from './selectModel.js?v=1.0'

async function loadHTML (id,basePath) {
  const response = await fetch(`${basePath}html/${id}.html`)
  const html = await response.text()
  document.getElementById(id).innerHTML = html
}

export async function init (initParams, basePath) {
  console.log("Init params:", initParams);
  console.log("Base path:", basePath);

  if (initParams) {
    for (const page of initParams) {
      await loadHTML(page,basePath);
    }
  }

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