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

export function videoPlay() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const video = entry.target
                if (entry.isIntersecting) {
                    video.play()
                } else {
                    video.pause()
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
            <source src="${basePath}img/items/showroom/${videoID}.webm?v=${version}" type="video/webm" />
            <source src="${basePath}img/items/showroom/${videoID}.mp4?v=${version}" type="video/mp4" />
            <source src=".${basePath}img/items/showroom/${videoID}_H264.mp4?v=${version}" type="video/mp4" />
            <source src="${basePath}img/items/showroom/${videoID}.mov?v=${version}" type="video/quicktime" />
        `
    videoElement.load()
}

export async function loadDelay() {
    const lazyElements = document.querySelectorAll('.lazy-media')

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                console.log(entry)
                if (entry.isIntersecting) {
                    const el = entry.target
                    el.src = el.dataset.src
                    obs.unobserve(el)
                }
            })
        },
        {
            rootMargin: '100px',
            threshold: 0.1
        }
    )
    lazyElements.forEach(el => observer.observe(el))
}
