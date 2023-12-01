const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')
const ctx = canvas.getContext('2d')

async function getVideo() {
    try {
        const constraints = { video: true, audio: false }
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        video.srcObject = stream
        video.play()
    } catch (err) {
        console.error(err)
    }
}

getVideo()