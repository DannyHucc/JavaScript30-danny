'use strict'

function playVideo() {
    const player = document.querySelector('.player')
    const video = player.querySelector('.viewer')
    const toggle = player.querySelector('.toggle')

    function togglePlay() {
        const method = video.paused ? 'play' : 'pause'
        video[method]()
    }

    video.addEventListener('click', togglePlay)
    toggle.addEventListener('click', togglePlay)
}

playVideo()