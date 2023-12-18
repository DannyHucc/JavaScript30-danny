'use strict'


function countdownTimer() {
    const buttons = document.querySelectorAll('.timer__controls > button')
    const input = document.querySelector('#custom')

    function setTimer() {
        const sec = parseInt(this.dataset.time)
    }

    function submitHandler(e) {
        e.preventDefault()
        const value = parseInt(this.minutes.value)
        if (!value) return
        const min = value * 60
        this.reset()
    }

    buttons.forEach(button => button.addEventListener('click', setTimer))
    input.addEventListener('submit', submitHandler)
}

countdownTimer()