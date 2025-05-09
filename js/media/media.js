const videos = document.querySelectorAll('.video-loop')

function videoLoopSetup(video) {
    video.addEventListener('loadedmetadata', () => {
        video.addEventListener('timeupdate', () => {
            if (video.currentTime >= video.duration - 0.1) {
                video.currentTime = 0
                video.play()
            }
        })
    })
}
export function videoLoop() {
    for (const video of videos) {
        videoLoopSetup(video)
    }
}

function videoPlayManipulate(entry) {
    const video = entry.target
    if (entry.isIntersecting) {
        if (video.paused) {
            setTimeout(() => video.play().catch(() => { }), 0)
        }
    } else {
        if (!video.paused) {
            setTimeout(() => video.pause(), 0)
        }
    }
}
export async function videoPlay() {
    const observer = new IntersectionObserver(
        entries => {
            for (const entry of entries) videoPlayManipulate(entry)
        },
        {
            threshold: 0.5
        }
    )
    for (const video of videos) {
        video.pause()
        observer.observe(video)
    }
}

export async function loadVideo(videoID) {
    const version = window.version
    const basePath = window.path
    const videoElement = document.getElementById(videoID)
    
    if (videoID === 'showcase') {
        if (window.innerWidth >= 1000) {
            videoID = videoID + '_PC'
        } else {
            videoID = videoID + '_Mobile'
        }
    }
    videoElement.innerHTML = `
            <source data-src="${basePath}img/items/showroom/${videoID}.mp4?v=${version}" type="video/mp4" />
            <source data-src="${basePath}img/items/showroom/${videoID}.webm?v=${version}" type="video/webm" />
            <source data-src=".${basePath}img/items/showroom/${videoID}_H264.mp4?v=${version}" type="video/mp4" />
        `
    loadDelay(videoElement)
}

function loadDelayedVideo(entry, obs) {
    if (entry.isIntersecting) {
        const element = entry.target
        const sources = element.querySelectorAll('source')

        for (const source of sources) {
            if (source.dataset.src) source.src = source.dataset.src
        }
        element.load()
        obs.unobserve(element)
    }
}

export async function loadDelay(target = null) {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            for (const entry of entries) loadDelayedVideo(entry, obs)
        },
        {
            rootMargin: '200px',
            threshold: 0.1
        }
    )
    if (target) {
        observer.observe(target)
    } else {
        const carouselVideo = document.querySelectorAll('.lazy-media')
        carouselVideo.forEach(el => observer.observe(el))
    }
}
