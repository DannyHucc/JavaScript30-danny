'use strict'

function eventCaptureAndBubbling() {
    const buttons = document.querySelector('button')
    const divs = document.querySelectorAll('div')

    function clickHandler() {
        console.log('click button')
    }

    function divHandler(e) {
        e.stopPropagation()
        console.log(e.composedPath())
        console.log(this.className)
    }

    buttons.addEventListener('click', clickHandler, { capture: false, once: false })
    divs.forEach(div =>
        div.addEventListener('click', divHandler, { capture: false }))
}

eventCaptureAndBubbling()