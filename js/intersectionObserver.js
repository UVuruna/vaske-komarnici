document.addEventListener('DOMContentLoaded', () => {
    const lazyElements = document.querySelectorAll('.lazy-media')

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target

                    if (el.tagName === 'IMG') {
                        el.src = el.dataset.src
                    }
                    if (el.tagName === 'VIDEO') {
                        const sources = el.querySelectorAll('source')
                        sources.forEach(source => {
                            source.src = source.dataset.src
                        })
                        el.load()
                    }
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
})
