'use strict'


function handHandler() {
    const secondHand = document.querySelector('.second-hand')
    const minHand = document.querySelector('.min-hand')
    const hourHand = document.querySelector('.hour-hand')

    function setClock() {
        const date = new Date()
        // degree
        const secondDeg = date.getSeconds() * 6 // (360/60)
        const minDeg = date.getMinutes() * 6 + date.getSeconds() * 6 / 60 // (360/60)
        const hourDeg = date.getHours() * 30 + date.getMinutes() * 30 / 60 // (360/12)

        // set rotate to hands
        secondHand.style.transform = `rotate(${secondDeg}deg)`
        minHand.style.transform = `rotate(${minDeg}deg)`
        hourHand.style.transform = `rotate(${hourDeg}deg)`
    }

    function animationHandler() {
        setClock()
        window.requestAnimationFrame(animationHandler)
    }

    setClock() // initial menu

    // timer
    window.requestAnimationFrame(animationHandler)
}

handHandler()