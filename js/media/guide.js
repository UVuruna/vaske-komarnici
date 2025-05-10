let theme

export async function initGuide(Theme) {
    theme = Theme

    for (const guide of document.querySelectorAll('#header .guide')) {
        guide.onclick = function () {
            showGuide('header', 'prezentacija slika sa terena')
        }
    }
    for (const guide of document.querySelectorAll('.catalogue .guide')) {
        guide.onclick = function () {
            showGuide('catalogue', 'slika kataloga')
        }
    }
    for (const guide of document.querySelectorAll('.carouselHeader .guide')) {
        guide.onclick = function () {
            showGuide('slideshow', 'tabela za naručivanje komarnika')
        }
    }
    for (const guide of document.querySelectorAll('#contact_us .guide')) {
        guide.onclick = function () {
            showGuide('order', 'prezentacija slika sa terena')
        }
    }
}

export function showGuide(videoSRC, videoALT = '') {
    const Theme = sessionStorage.getItem('theme')
    const colors = window.ThemeColors[Theme ? Theme : theme]
    const version = window.version
    const path = window.path

    const guideDiv = document.getElementById('guide')
    guideDiv.style.display = 'flex'
    guideDiv.insertAdjacentHTML(
        'afterbegin',
        `
        <video id="guideVideo" playsinline controls autoplay aria-label="Upustva za korišćenje funkcija ${videoALT}">
            <source src="${path}img/guide/${videoSRC}.mp4?v=${version}" type="video/mp4">
            <source src="${path}img/guide/${videoSRC}.webm?v=${version}" type="video/webm">
            <source src="${path}img/guide/${videoSRC}_H264.mp4?v=${version}" type="video/mp4">
        </video>
    `
    )
    const video = guideDiv.querySelector('#guideVideo')
    video.style.border = `0.75rem ridge ${colors.primaryElement}`

    // Auto close on end
    video.onended = () => {
        if (video) {
            video.remove()
        }
        guideDiv.style.display = 'none'
    }
}


export function closeBtn() {
    const guideDiv = document.getElementById('guide')
    const video = guideDiv.querySelector('#guideVideo')
    video.remove()
    guideDiv.style.display = 'none'
}
