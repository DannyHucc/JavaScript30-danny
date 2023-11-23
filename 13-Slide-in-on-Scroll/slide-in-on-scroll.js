'use strict'

function debounce(func, wait = 20, immediate = true) {
    var timeout
    return function () {
        var context = this, args = arguments

        var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }

        if (timeout) return
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (immediate) func.apply(context, args)
    }
}

function scrollWindow() {
    function scrollHandler() {
        const images = document.querySelectorAll('img')
        const windowTop = window.scrollY
        const windowBottom = windowTop + window.innerHeight

        images.forEach(image => {
            const imageMiddle = image.offsetTop + image.height * 3 / 5
            if (windowTop < imageMiddle && imageMiddle < windowBottom) {
                image.classList.add('active')
            } else {
                image.classList.remove('active')
            }
        })
    }

    window.addEventListener('scroll', debounce(scrollHandler))
}

scrollWindow()