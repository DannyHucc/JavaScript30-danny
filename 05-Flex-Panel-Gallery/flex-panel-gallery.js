'use strict'

function panelController() {
    const panels = document.querySelectorAll('.panel')

    function clickHandler() {
        this.classList.toggle('open')
    }

    function transitionHandler(e) {
        if (e.propertyName.includes('flex-grow')) {
            this.classList.toggle('open-active')
        }
    }

    panels.forEach(panel => {
        panel.addEventListener('click', clickHandler)
        panel.addEventListener('transitionend', transitionHandler)
    })
}

panelController()
