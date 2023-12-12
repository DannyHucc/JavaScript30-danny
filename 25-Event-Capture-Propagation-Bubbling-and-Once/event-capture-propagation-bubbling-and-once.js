'use strict'

function eventCaptureAndBubbling() {
    const buttons = document.querySelector('button')

    function clickHandler() {
        console.log('click button')
    }

    buttons.addEventListener('click', clickHandler, { capture: false, once: false })
}

eventCaptureAndBubbling()