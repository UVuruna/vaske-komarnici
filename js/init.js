const version = localStorage.getItem('version')

export async function init(basePath, presentation) {
  const globalsModule = await import(`./globals.js?v=${version}`);
  const themeModule = await import(`./theme.js?v=${version}`);
  const hoverLogoMenuModule = await import(`./hoverLogoMenu.js?v=${version}`);
  const videoModule = await import(`./video.js?v=${version}`);
  const selectModelModule = await import(`./selectModel.js?v=${version}`);

  const { themeCycle, settingThemeOnload } = themeModule;
  const { mouseHoverLogo, mouseHoverDropdown } = hoverLogoMenuModule;
  const { loadGlobals } = globalsModule;
  const { videoLoop, videoPlay, loadVideo } = videoModule;
  const { selectModel } = selectModelModule;


  window.themeCycle = themeCycle;
  window.loadVideo = loadVideo;

  const globals = await loadGlobals();
  settingThemeOnload(globals, basePath);
  mouseHoverLogo(globals.LOGO);
  mouseHoverDropdown();

  if (presentation) {
    videoPlay(globals.videos);
    videoLoop(globals.videos);
    selectModel(presentation);
  }
}