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
        set(target, key, value) {
            target[key] = value
            moles[key].removeEventListener('click', addScore)
            if (value) {
                moles[key].addEventListener('click', addScore)
                moles[key].classList.add('up')
            } else {
                moles[key].classList.remove('up')
            }
            return true
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

    const setMole = function (mole, time) {
        molesProxy[mole] = true
        setTimeout(() => {
            if (!timeUp) showRandomMole()
        }, 500)
        setTimeout(() => {
            molesProxy[mole] = false
        }, time)
    }

    function showRandomMole() {
        const mole = Math.floor(Math.random() * moles.length)
        const time = Math.random() * 1000 + 500 // 1000~1500
        if (molesProxy[mole]) return showRandomMole()
        setMole(mole, time)
    }

    function startGame() {
        setScore(0)
        timeUp = false
        showRandomMole()
        setTimeout(() => {
            timeUp = true
            alert('Times Up')
        }, 10000)
    }

    button.addEventListener('click', startGame)
}

whackAMole()