export function videoLoop(videos) {
    videos.forEach(video => {
        video.addEventListener('timeupdate', () => {
            if (video.currentTime >= 9.13) {
                video.currentTime = 0
                video.play()
            }
        })
    })
}

export function videoPlay(videos) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const video = entry.target
                if (entry.isIntersecting) {
                    console.log('Pušta video: '+video.title)
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

export function loadVideo(basePath, videoID) {
    const checkElementInterval = setInterval(() => {
        const videoElement = document.getElementById(videoID)
        const version = localStorage.getItem('version')

        if (videoElement) {
            clearInterval(checkElementInterval)

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
    }, 10) // Mora interval jer nekada ne stigne da napravi taj DIV i onda ne moze da ucita
}
