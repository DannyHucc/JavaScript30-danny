'use strict'

function whackAMole() {
    let score = 0
    let timeUp = true
    const scoreBoard = document.querySelector('.score')
    const button = document.querySelector('.startGame')
    const moles = [...document.querySelectorAll('.mole')]
    const status = moles.reduce((prev, current, index) => {
        prev[index] = false
        return prev
    }, {})
    const molesProxy = new Proxy(status, {
        get(target, key) {
            return target[key]
        },
        set(target, key, valve) {
            target[key] = valve
            moles[key].removeEventListener('click', addScore)
            if (valve) {
                moles[key].addEventListener('click', addScore)
                moles[key].classList.add('up')
            } else {
                moles[key].classList.remove('up')
            }
        }
    })

    function setScore(s) {
        score = s
        scoreBoard.textContent = score
    }

    function addScore() {
        if (molesProxy[moles.indexOf(this)]) {
            setScore(score + 1)
            molesProxy[moles.indexOf(this)] = false
        }
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