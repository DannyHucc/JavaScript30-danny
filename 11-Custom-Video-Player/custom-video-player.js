'use strict'

function playVideo() {
    const player = document.querySelector('.player')
    const video = player.querySelector('.viewer')
    const toggle = player.querySelector('.toggle')

    function togglePlay() {
        const method = video.paused ? 'play' : 'pause'
        video[method]()
    }

    function changeButton() {
        const icon = this.paused ? '►' : '❚ ❚'
        console.log(icon)
        toggle.textContent = icon
    }

    video.addEventListener('click', togglePlay)
    toggle.addEventListener('click', togglePlay)
    video.addEventListener('play', changeButton)
    video.addEventListener('pause', changeButton)
}

playVideo()