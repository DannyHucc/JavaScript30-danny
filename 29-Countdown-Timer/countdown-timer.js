'use strict'


function countdownTimer() {
    const buttons = document.querySelectorAll('.timer__controls > button')
    const input = document.querySelector('#custom')

    let timer
    const timeLeft = document.querySelector('.display__time-left')
    const endTime = document.querySelector('.display__end-time')

    function setCountdown(time) {
        timer = setInterval(function () {
            const secLeft = Math.floor((time - Date.now()) / 1000)
            if (secLeft >= 0) {
                const min = Math.floor(secLeft / 60)
                const sec = secLeft % 60
                timeLeft.textContent = `${min}:${sec}`
            } else {
                clearInterval(timer)
            }
        }, 16)
    }

    function showEndTime(time) {
        const endDate = new Date(time)
        const hour = endDate.getHours()
        const min = endDate.getMinutes()
        const sec = endDate.getSeconds()
        endTime.textContent = `Back at ${hour}:${min}:${sec}`
    }

    function startTimer(sec) {
        clearInterval(timer)
        const now = Date.now()
        const end = parseInt(now) + parseInt(sec * 1000)
        // set Countdown
        setCountdown(end)
        // show end time
        showEndTime(end)
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