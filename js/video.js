export function videoLoop(videos) {
  videos.forEach(video => {
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= 9) {
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
          video.play()
        } else {
          video.pause()
        }
      })
    },
    {
      threshold: 1
    }
  )

  videos.forEach(video => {
    video.pause()
    observer.observe(video)
  })
}

export function loadVideo(basePath, videoID, videoName = null) {
  const checkElementInterval = setInterval(() => {
    const videoElement = document.getElementById(videoID)
    const version = localStorage.getItem('version')

    if (videoElement) {
      clearInterval(checkElementInterval)

      if (!videoName) {
        if (window.innerWidth >=750) {
          videoName = 'showcase-PC'
        } else {
          videoName = 'showcase-Mobile'
        }
      }
      videoElement.innerHTML = `
                    <source src="${basePath}img/items/showroom/${videoName}.webm?v=${version}" type="video/webm" />
                    <source src="${basePath}img/items/showroom/${videoName}.mp4?v=${version}" type="video/mp4" />
                    <source src=".${basePath}img/items/showroom/${videoName}_H264.mp4?v=${version}" type="video/mp4" />
                    <source src="${basePath}img/items/showroom/${videoName}.mov?v=${version}" type="video/quicktime" />
                `
      videoElement.load()
    }
  }, 50) // Mora interval jer nekada ne stigne da napravi taj DIV i onda ne moze da ucita
}
