'use strict'

function eventCaptureAndBubbling() {
    const buttons = document.querySelector('button')
    const divs = document.querySelectorAll('div')
    const links = document.querySelectorAll('a')
    const ul = document.querySelector('ul')

    function clickHandler() {
        console.log('click button')
    }

    function divHandler(e) {
        e.stopPropagation()
        console.log(e.composedPath())
        console.log(this.className)
    }

    function linkHandler() {
        console.log("Binding a click:", this)
    }

    function ulHandler(e) {
        const target = e.target
        if (target.nodeName === 'A') {
            console.log("Delegate a click:", target)
        }
    }

    buttons.addEventListener('click', clickHandler, { capture: false, once: false })
    divs.forEach(div =>
        div.addEventListener('click', divHandler, { capture: false }))
    links.forEach(link =>
        link.addEventListener('click', linkHandler, { capture: false }))
    ul.addEventListener('click', ulHandler, { capture: false, once: false })
}

eventCaptureAndBubbling()