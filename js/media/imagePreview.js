const lightbox = document.getElementById('lightbox');
const closeBtn = lightbox.querySelector('.close');
const nextBtn = lightbox.querySelector('.next');
const prevBtn = lightbox.querySelector('.prev');

const focusableElements = [closeBtn, nextBtn, prevBtn];
let opened = false
let currentSRC
let mediaList = []




lightbox.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox()
    }

    if (e.key === 'Tab') {
        e.preventDefault();
        const focusedIndex = focusableElements.indexOf(document.activeElement);
        const index = 
            (e.shiftKey) 
            ? (focusedIndex - 1 + focusableElements.length) % focusableElements.length
            : (focusedIndex + 1) % focusableElements.length
        
        focusableElements[index].focus();
    }
});

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

window.closeLightbox = function() {
    lightbox.style.display = 'none'
    opened = false
}

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

    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'flex';
    if (!opened) {
        lightbox.focus()
        opened = true
    }
}

function showLightbox(src) {
    lightbox.style.display = 'flex'
    showLightboxMedia(src)
}

// INIT
for (const media of document.querySelectorAll('.clickable')) {
    const SRC = media.src
    mediaList.push(SRC)
    media.addEventListener('dblclick', () => {showLightbox(SRC)})
    media.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showLightboxMedia(SRC);
        }
    })
}
