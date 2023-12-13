'use strict'

function stripeFollowAlongNav() {
    const lists = document.querySelectorAll('.cool > li')
    const dropdownBackground = document.querySelector('.dropdownBackground')

    function enterHandler() {
        this.classList.add('trigger-enter')
        setTimeout(() => {
            this.classList.add('trigger-enter-active')
        }, 200)
        dropdownBackground.classList.add('open')

        const dropdownRect = this.querySelector('.dropdown').getBoundingClientRect()
        const navRect = document.querySelector('.top').getBoundingClientRect()

        dropdownBackground.style.width = `${dropdownRect.width}px`
        dropdownBackground.style.height = `${dropdownRect.height}px`
        dropdownBackground.style.top = `${dropdownRect.top - navRect.top}px`
        dropdownBackground.style.left = `${dropdownRect.left - navRect.left}px`
    }

    lists.forEach(list => {
        list.addEventListener('mouseenter', enterHandler)
    })
}

stripeFollowAlongNav()