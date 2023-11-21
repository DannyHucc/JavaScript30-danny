'use strict'

function playVideo() {
    const player = document.querySelector('.player')
    const video = player.querySelector('.viewer')
    const toggle = player.querySelector('.toggle')
    const skipButtons = player.querySelectorAll('.skip')
    const ranges = player.querySelectorAll('.player__slider')
    const progress = player.querySelector('.progress')
    const progressBar = player.querySelector('.progress__filled')

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
        video[this.name] = this.value
    }

    function changePlaybackTime(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
        video.currentTime = scrubTime
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

    let isMousedown = false
    progress.addEventListener('click', changePlaybackTime)
    progress.addEventListener('mousemove', (e) => isMousedown && changePlaybackTime(e))
    progress.addEventListener('mousedown', () => isMousedown = true)
    progress.addEventListener('mouseup', () => isMousedown = false)
}

playVideo()