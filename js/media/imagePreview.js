const lightbox = document.getElementById('lightbox')
const nextBtn = document.querySelector('.lightbox .next')
const prevBtn = document.querySelector('.lightbox .prev')
let currentSRC
let mediaList = []

nextBtn.addEventListener('click', () => {
    const currentIndex = mediaList.indexOf(currentSRC)
    const nextIndex = (currentIndex + 1) % mediaList.length
    currentSRC = mediaList[nextIndex]
    showLightboxMedia(currentSRC)
})
prevBtn.addEventListener('click', () => {
    const currentIndex = mediaList.indexOf(currentSRC)
    const prevIndex = (currentIndex - 1 + mediaList.length) % mediaList.length
    currentSRC = mediaList[prevIndex]
    showLightboxMedia(currentSRC)
})

function showLightboxMedia(src) {
    const img = document.getElementById('lightbox-image')
    const video = document.getElementById('lightbox-video')

    if (src.endsWith('.mp4') || src.endsWith('.webm')) {
        img.style.display = 'none'
        video.style.display = 'block'
        video.src = src
        video.load()
        video.play()
    } else {
        video.pause()
        video.style.display = 'none'
        img.style.display = 'block'
        img.src = src
    }

    document.getElementById('lightbox').style.display = 'flex'
}

function initLightbox(media) {
    mediaList.push(media.src)
    media.addEventListener('dblclick', () => {
        lightbox.style.display = 'flex'
        currentSRC = media.src
        showLightboxMedia(currentSRC)
    })
}

// INIT
for (const media of document.querySelectorAll('.clickable')) {
    initLightbox(media)
}
