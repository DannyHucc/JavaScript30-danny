'use strict'

function panelController() {
    const panels = document.querySelectorAll('.panel')

    function clickHandler() {
        this.classList.toggle('open')
    }

    panels.forEach(panel => {
        panel.addEventListener('click', clickHandler)
    })
}

panelController()
