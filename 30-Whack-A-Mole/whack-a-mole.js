'use strict'

function whackAMole() {
    const scoreBoard = document.querySelector('.score')
    const button = document.querySelector('.startGame')

    let score = 0

    function setScore(s) {
        score = s
        scoreBoard.textContent = score
    }

    function startGame() {
        setScore(0)
    }

    button.addEventListener('click', startGame)
}

whackAMole()