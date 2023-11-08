'use strict'

function inputHandler() {
    const inputs = document.querySelectorAll('.controls input')

    function changeHandler() {
        const unit = this.dataset.sizing || ''
        const propertyName = `--${this.id}`
        const value = `${this.value}${unit}`

        const docElement = document.documentElement
        /*  same as 
            document.querySelector('html'), 
            document.querySelector(':root'), 
            document.documentElement */
        docElement.style.setProperty(propertyName, value)
    }

    inputs.forEach(input => {
        input.addEventListener('input', changeHandler)
    })
}

inputHandler()