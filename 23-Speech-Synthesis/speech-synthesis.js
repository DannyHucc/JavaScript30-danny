'use strict'

const msg = new SpeechSynthesisUtterance()
let voices = []
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

speechSynthesis.addEventListener('voiceschanged', displayVoicesOption)