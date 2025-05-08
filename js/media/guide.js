let path,
    version,
    colorDict

export async function initGuide(Path, Version, ColorDict) {
    path = Path;
    version = Version;
    colorDict = ColorDict;
}

export function showGuide(videoSRC, videoALT = '') {
    const colors = colorDict[sessionStorage.getItem('theme')]

    const guideDiv = document.getElementById('guide');
    guideDiv.style.display = 'flex'
    guideDiv.insertAdjacentHTML('afterbegin', `
        <video id="guideVideo" playsinline controls autoplay aria-label="Upustva za korišćenje funkcija ${videoALT}">
            <source src="${path}img/guide/${videoSRC}.mp4?v=${version}" type="video/mp4">
            <source src="${path}img/guide/${videoSRC}.webm?v=${version}" type="video/webm">
            <source src="${path}img/guide/${videoSRC}_H264.mp4?v=${version}" type="video/mp4">
        </video>
    `);
    const video = guideDiv.querySelector('#guideVideo');
    video.style.border = `0.75rem ridge ${colors.primaryElement}`

    // Auto close on end
    video.onended = () => {
        if (video) {
            video.remove();
        }
        guideDiv.style.display = 'none';
    };
}

export function closeBtn() {
    const guideDiv = document.getElementById('guide');
    const video = guideDiv.querySelector('#guideVideo');
    video.remove()
    guideDiv.style.display = 'none';
}

