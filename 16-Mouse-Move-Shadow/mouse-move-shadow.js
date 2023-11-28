'use strict'

function renderTextShadow() {
    const hero = document.querySelector('.hero')

    function mousemoveHandler(e) {
        const text = document.querySelector('h1')
        const length = 300
        const blurRadius = 1
        const opacity = 0.6
        
        let { offsetX, offsetY } = e
        if (e.target !== this) {
            offsetX += e.target.offsetLeft
            offsetY += e.target.offsetTop
        }

        const lengthX = Math.floor(offsetX / this.offsetWidth * length) * 2 - length
        const lengthY = Math.floor(offsetY / this.offsetHeight * length) * 2 - length

        text.style.textShadow = `
            ${lengthX}px ${lengthY}px ${blurRadius}px rgba(255,0,255,${opacity}),
            ${lengthX * -1}px ${lengthY}px ${blurRadius}px rgba(0,255,255,${opacity}),
            ${lengthY}px ${lengthX * -1}px ${blurRadius}px rgba(0,255,0,${opacity}),
            ${lengthY * -1}px ${lengthX}px ${blurRadius}px rgba(0,0,255,${opacity})
        `
    }
    
    hero.addEventListener('mousemove', mousemoveHandler)
}

renderTextShadow()