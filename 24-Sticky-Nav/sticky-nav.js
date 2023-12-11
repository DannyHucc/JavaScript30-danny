'use strict'

function stickyNav() {
    const nav = document.querySelector('#main')
    let navOffsetTop = nav.offsetTop

    function resizeNavOffsetTop() {
        navOffsetTop = nav.offsetTop
    }

    function fixedMenu() {
        if (window.scrollY >= navOffsetTop) {
            // fix navbar
            document.body.classList.add("fixedMenu")
            document.body.style.paddingTop = `${nav.offsetHeight}px`
        } else {
            // normal
            document.body.classList.remove("fixedMenu")
            document.body.style.paddingTop = ""
        }
    }

    window.addEventListener('scroll', fixedMenu)
    window.addEventListener('resize', resizeNavOffsetTop)
}

stickyNav()