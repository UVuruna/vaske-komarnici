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
                        setTimeout(() => video.play().catch(() => {}), 0)
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

export async function loadVideo(basePath, videoID) {
    const videoElement = document.getElementById(videoID)
    const version = localStorage.getItem('version')

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
    /*videoElement.innerHTML = `
            <source src="${basePath}img/items/showroom/${videoID}.mp4?v=${version}" type="video/mp4" />
            <source src="${basePath}img/items/showroom/${videoID}.webm?v=${version}" type="video/webm" />
            <source src=".${basePath}img/items/showroom/${videoID}_H264.mp4?v=${version}" type="video/mp4" />
        `
    videoElement.load()*/
}

export async function loadDelay(target = null) {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                
                if (entry.isIntersecting) {
                    const el = entry.target
                    if (el.tagName === 'IMG') {
                        console.log(el)
                        el.src = el.dataset.src
                    }
                    if (el.tagName === 'VIDEO') {
                        console.log(el)
                        const sources = el.querySelectorAll('source')
                        sources.forEach(source => {
                            if (source.dataset.src) {
                                source.src = source.dataset.src
                            }
                        })
                        el.load()
                    }
                    obs.unobserve(el)
                }
            })
        },
        {
            rootMargin: '1200px',
            threshold: 0.1
        }
    )

    if (target) {
        observer.observe(target)
    } else {
        const lazyElements = document.querySelectorAll('.lazy-media')
        lazyElements.forEach(el => observer.observe(el))
    }
}
