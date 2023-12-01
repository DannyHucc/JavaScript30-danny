const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')
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

getVideo()
video.addEventListener('canplay', paintCanvas)