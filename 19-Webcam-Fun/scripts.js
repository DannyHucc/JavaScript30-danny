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

getVideo()
video.addEventListener('canplay', paintCanvas)