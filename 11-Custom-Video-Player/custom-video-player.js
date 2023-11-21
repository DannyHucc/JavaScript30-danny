'use strict'

function playVideo() {
    const player = document.querySelector('.player')
    const video = player.querySelector('.viewer')
    const toggle = player.querySelector('.toggle')
    const skipButtons = player.querySelectorAll('.skip')
    const ranges = player.querySelectorAll('.player__slider')

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

    //volume, playbackRate
    function changeRange() {
        video[this.name] = this.value;
    }

    // togglePlay
    video.addEventListener('click', togglePlay)
    toggle.addEventListener('click', togglePlay)

    // changeButton
    video.addEventListener('play', changeButton)
    video.addEventListener('pause', changeButton)

    // skip
    skipButtons.forEach(button => button.addEventListener('click', skip))

    // volume, playbackRate
    ranges.forEach(range => range.addEventListener('change', changeRange))
    ranges.forEach(range => range.addEventListener('mousemove', changeRange))
}

playVideo()