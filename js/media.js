const videos = document.querySelectorAll('.video-loop')

export function videoLoop() {
    videos.forEach(video => {
        video.addEventListener('timeupdate', () => {
            if (video.currentTime >= 9.13) {
                video.currentTime = 0
                video.play()
            }
        })
    })
}

export async function videoPlay() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
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
            })
        },
        {
            threshold: 0.5
        }
    )
    videos.forEach(video => {
        video.pause()
        observer.observe(video)
    })
}

export async function loadVideo(version, basePath, videoID) {
    const videoElement = document.getElementById(videoID)
    if (videoID === 'showcase') {
        if (window.innerWidth >= 750) {
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

export async function loadDelay(target = null) {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target
                    const sources = element.querySelectorAll('source')
                    sources.forEach(source => {
                        if (source.dataset.src) {
                            source.src = source.dataset.src
                        }
                    })
                    element.load()
                    obs.unobserve(element)
                }
            })
        },
        {
            rootMargin: '200px',
            threshold: 0.1
        }
    )
    if (target) {
        observer.observe(target)
    } else {
        document.querySelectorAll('.lazy-media').forEach(el => observer.observe(el))
    }
}
