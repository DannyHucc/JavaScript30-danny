'use strict'

function stickyNav() {
    const nav = document.querySelector('#main')

    function fixedMenu() {
        if (window.scrollY >= nav.offsetTop) {
            // fix navbar
            document.body.classList.add("fixedMenu")
        } else {
            // normal
            document.body.classList.remove("fixedMenu")
        }
    }

    window.addEventListener('scroll', fixedMenu)
}

stickyNav()