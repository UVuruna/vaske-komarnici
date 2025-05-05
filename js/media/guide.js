let version = null
let path = null


export function showGuide(Version, Path, videoSRC, videoALT = '') {
    if (!version) {
        version = Version
        path = Path

    }
    const guideDiv = document.getElementById('guide');
    guideDiv.style.display = 'flex'
    guideDiv.insertAdjacentHTML('afterbegin', `
        <video id="guideVideo" playsinline controls autoplay aria-label="Upustva za korišćenje funkcija ${videoALT}">
            <source src="${path}img/guide/${videoSRC}.mp4?v=${version}" type="video/mp4">
            <source src="${path}img/guide/${videoSRC}.webm?v=${version}" type="video/webm">
            <source src="${path}img/guide/${videoSRC}_H264.mp4?v=${version}" type="video/mp4">
        </video>
    `);

    // Auto close on end
    const video = guideDiv.querySelector('#guideVideo');
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

