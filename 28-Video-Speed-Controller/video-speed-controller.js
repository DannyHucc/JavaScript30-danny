'use strict'

function videoSpeedController() {
    const speed = document.querySelector('.speed')

    function moveHandler(e) {
        // speedBar style
        const speedBar = document.querySelector('.speed-bar')
        const Y = e.pageY - speedBar.offsetTop
        const percent = Y / this.offsetHeight // 0~1
        const height = `${Math.round(percent * 100)}%`
        speedBar.style.height = height

        // speedBar textContent
        const max = 10
        const min = 0.25
        let range = Math.round((percent * (max - min) + min) * 100) / 100 // 0.25~10
        range = range > max ? max : range < min ? min : range
        speedBar.textContent = `${range}x`

        // video playbackRate
        const video = document.querySelector('video')
        video.playbackRate = range
    }

    speed.addEventListener('mousemove', moveHandler)
}

videoSpeedController()