'use strict'


function countdownTimer() {
    const buttons = document.querySelectorAll('.timer__controls > button')

    function setTimer() {
        const sec = parseInt(this.dataset.time)
    }

    buttons.forEach(button => button.addEventListener('click', setTimer))
}

countdownTimer()