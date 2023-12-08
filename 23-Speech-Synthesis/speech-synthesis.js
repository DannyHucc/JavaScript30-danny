'use strict'

let voices = []
const utterance = new SpeechSynthesisUtterance()
utterance.text = document.querySelector('[name="text"]').value

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

function setVoice() {
    utterance.voice = voices.find(voice => voice.name.toString() === this.value.toString())
}

function speakToggle(startOver = true) {
    speechSynthesis.cancel()
    if (startOver) {
        speechSynthesis.speak(utterance)
    }
}

speechSynthesis.addEventListener('voiceschanged', displayVoicesOption)
voicesDropdown.addEventListener('change', setVoice)
speakButton.addEventListener('click', speakToggle)
stopButton.addEventListener('click', () => speakToggle(false))