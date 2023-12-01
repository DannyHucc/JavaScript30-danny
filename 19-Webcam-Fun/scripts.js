const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const snap = document.querySelector('.snap')
const strip = document.querySelector('.strip')
const ctx = canvas.getContext('2d')

function getVideo() {
    const constraints = { video: true, audio: false }
    navigator.mediaDevices.getUserMedia(constraints)
        .then(localMediaStream => {
            video.srcObject = localMediaStream
            video.play()
        })
        .catch(err => {
            console.error(err)
        })
}

function paintCanvas() {
    const width = video.videoWidth
    const height = video.videoHeight
    canvas.width = width
    canvas.height = height

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height)

        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height)

        // mess with them
        // pixels = redEffect(pixels)
        // pixels = rgbSplit(pixels)
        pixels = greenScreen(pixels)

        // put them back
        ctx.putImageData(pixels, 0, 0)
    }, 16)
}

function takePhoto() {
    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg')
    const link = document.createElement('a')
    link.href = data
    link.setAttribute('download', 'photo')
    link.innerHTML = `<img src="${data}" alt="photo" />`
    strip.insertBefore(link, strip.firstChild)

    // played the sound
    snap.currentTime = 0
    snap.play()
}

function redEffect(pixels) {
    const pixelsData = pixels.data
    for (let i = 0; i < pixelsData.length; i += 4) {
        pixelsData[i + 0] = pixelsData[i + 0] + 100 // RED
        pixelsData[i + 1] = pixelsData[i + 1] - 50 // GREEN
        pixelsData[i + 2] = pixelsData[i + 2] * 0.5 // Blue
    }
    return pixels
}

function rgbSplit(pixels) {
    const pixelsData = pixels.data
    for (let i = 0; i < pixelsData.length; i += 4) {
        pixelsData[i - 150] = pixelsData[i + 0] // RED
        pixelsData[i + 500] = pixelsData[i + 1] // GREEN
        pixelsData[i - 550] = pixelsData[i + 2] // Blue
    }
    return pixels
}

function greenScreen(pixels) {
    const pixelsData = pixels.data
    const levels = {}

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    })

    for (i = 0; i < pixelsData.length; i = i + 4) {
        red = pixelsData[i + 0]
        green = pixelsData[i + 1]
        blue = pixelsData[i + 2]
        alpha = pixelsData[i + 3]

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            // take it out!
            pixelsData[i + 3] = 0;
        }
    }

    return pixels
}

getVideo()
video.addEventListener('canplay', paintCanvas)