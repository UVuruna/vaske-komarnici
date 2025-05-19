const guideDiv = document.getElementById('guide')

guideDiv.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeBtn()
    }
    if (e.key === 'Tab') {
        e.preventDefault();
        guideDiv.querySelector('button').focus()
    }
})

export async function initGuide() {
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

window.showGuide = function(videoSRC, videoALT = '') {
    const colors = window.ThemeColors[window.theme]
    const version = window.version
    const path = window.path

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
    guideDiv.focus()

    // Auto close on end
    video.onended = () => {
        if (video) {
            video.remove()
        }
        guideDiv.style.display = 'none'
    }
}

window.closeBtn =  function() {
    const guideDiv = document.getElementById('guide')
    const video = guideDiv.querySelector('#guideVideo')
    video.remove()
    guideDiv.style.display = 'none'
}