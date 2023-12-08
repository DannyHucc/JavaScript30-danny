'use strict'

let voices = []
const msg = new SpeechSynthesisUtterance()
msg.text = document.querySelector('[name="text"]').value

const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const stopButton = document.querySelector('#stop')
const speakButton = document.querySelector('#speak')

function displayVoicesOption() {
    voices = this.getVoices()
    voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('')
}

function speak() {
    speechSynthesis.cancel()
    speechSynthesis.speak(msg)
}

speechSynthesis.addEventListener('voiceschanged', displayVoicesOption)
speakButton.addEventListener('click', speak)