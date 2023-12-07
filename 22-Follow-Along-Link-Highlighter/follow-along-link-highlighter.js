'use strict'

function followAlongLinkHighlighter() {
    const links = document.querySelectorAll('a')
    const highlight = document.querySelector('.highlight')
    highlight.style.display = 'none'

    function enterHandler() {
        const rects = this.getBoundingClientRect()
        const position = {
            width: rects.width,
            height: rects.height,
            top: rects.top + window.scrollY,
            left: rects.left + window.scrollX
        }

        highlight.style.display = "block"
        highlight.style.width = `${position.width}px`
        highlight.style.height = `${position.height}px`
        highlight.style.top = `${position.top}px`
        highlight.style.left = `${position.left}px`
    }

    links.forEach(link => {
        link.addEventListener('mouseenter', enterHandler)
    })
}

followAlongLinkHighlighter()