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
    }

    speed.addEventListener('mousemove', moveHandler)
}

videoSpeedController()