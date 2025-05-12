const carousel = document.querySelector('.carousel')
const track = document.querySelector('.carousel-track')
let isDragging = false
let startX = 0
let currentX = 0
let translateX = 0
let prevTranslate = 0
let velocity = 0
let lastX = 0
let lastTime = 0
let maxTranslateX

// Function to Prevent dragging if it's at the leftmost or rightmost position
function translateBorder(distance) {
    if (distance > 0) distance = 0 // prevent dragging left beyond the first item
    if (distance < -maxTranslateX) distance = -maxTranslateX // prevent dragging right beyond the last item
    return distance
}

// Set the maxTranslateX based on the width of the carousel items
function updateMaxTranslate() {
    const carouselWidth = carousel.clientWidth
    const itemWidth = document.querySelector('.carousel-item').clientWidth
    const totalWidth = itemWidth * track.children.length
    maxTranslateX = totalWidth - carouselWidth // the maximum translate value based on total content width
}

// Function to get the current mouse/touch position on X-axis
function getX(e) {
    if (e.type.includes('mouse')) {
        return e.pageX
    } else {
        return e.touches[0].clientX
    }
}

// Function to start dragging
// Set the initial values when the user starts dragging
function start(e) {
    isDragging = true
    startX = getX(e)
    lastX = startX
    lastTime = Date.now()
}

// Function to move the carousel
// Update the translateX value based on the current mouse/touch position
function move(e) {
    if (!isDragging) return
    const currentTime = Date.now()

    currentX = getX(e)
    translateX = prevTranslate + currentX - startX
    translateX = translateBorder(translateX)

    const deltaTime = currentTime - lastTime
    if (deltaTime > 0) {
        velocity = (currentX - lastX) / deltaTime
        lastX = currentX
        lastTime = currentTime
    }

    track.style.transform = `translateX(${translateX}px)`
}

// Function to end dragging
// Reset the translateX value and apply inertia if necessary
function end() {
    isDragging = false
    prevTranslate = translateX

    // Add inertia effect and move the carousel further based on the velocity
    const momentumDistance = velocity * 200 // multiplier for more or less momentum
    let target = translateX + momentumDistance
    target = translateBorder(target)

    track.style.transition = 'transform 0.5s ease-out'
    track.style.transform = `translateX(${target}px)`
    prevTranslate = target

    // Reset transition nakon animacije
    setTimeout(() => {
        track.style.transition = 'none'
    }, 500)
}

// Function for moving CAROUSEL with Mouse Wheel
function onWheel(e) {
    translateX -= e.deltaY
    translateX = translateBorder(translateX)

    prevTranslate = translateX
    track.style.transform = `translateX(${translateX}px)`
}

updateMaxTranslate()

// Mouse Wheel
track.addEventListener('wheel', onWheel, { passive: false })

// Mouse
track.addEventListener('mousedown', start)
track.addEventListener('mousemove', move)
track.addEventListener('mouseup', end)
track.addEventListener('mouseleave', end)

// Touch
track.addEventListener('touchstart', start)
track.addEventListener('touchmove', move)
track.addEventListener('touchend', end)
