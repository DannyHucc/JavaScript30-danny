'use strict'

function playVideo() {
    const player = document.querySelector('.player')
    const video = player.querySelector('.viewer')
    const toggle = player.querySelector('.toggle')
    const skipButtons = player.querySelectorAll('.skip')

    function togglePlay() {
        const method = video.paused ? 'play' : 'pause'
        video[method]()
    }

    function changeButton() {
        const icon = this.paused ? '►' : '❚ ❚'
        toggle.textContent = icon
    }

    function skip() {
        video.currentTime += parseFloat(this.dataset.skip)
    }

    // togglePlay
    video.addEventListener('click', togglePlay)
    toggle.addEventListener('click', togglePlay)

    // changeButton
    video.addEventListener('play', changeButton)
    video.addEventListener('pause', changeButton)

    // skip
    skipButtons.forEach(button => button.addEventListener('click', skip))
}

playVideo()