'use strict'


function countdownTimer() {
    const buttons = document.querySelectorAll('.timer__controls > button')
    const input = document.querySelector('#custom')

    let timer
    function startTimer(sec) {
        setInterval(timer)
    }

    function setTimer() {
        const sec = parseInt(this.dataset.time)
        startTimer(sec)
    }

    function submitHandler(e) {
        e.preventDefault()
        const value = parseInt(this.minutes.value)
        if (!value) return
        const min = value * 60
        startTimer(min)
        this.reset()
    }

    buttons.forEach(button => button.addEventListener('click', setTimer))
    input.addEventListener('submit', submitHandler)
}

countdownTimer()