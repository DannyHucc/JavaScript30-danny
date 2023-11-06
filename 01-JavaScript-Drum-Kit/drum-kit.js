'use strict'

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!audio) return // if not find audio data-key
    audio.currentTime = 0 // resets the current position to 0
    audio.play()
    key.classList.add('playing')
}

window.addEventListener('keydown', playSound)