'use strict'

function whackAMole() {
    const scoreBoard = document.querySelector('.score')
    const button = document.querySelector('.startGame')

    let score = 0
    let timeUp = true

    function setScore(s) {
        score = s
        scoreBoard.textContent = score
    }

    function startGame() {
        setScore(0)
        timeUp = false
        setTimeout(() => {
            timeUp = true
            alert('Times Up')
        }, 10000)
    }

    button.addEventListener('click', startGame)
}

whackAMole()