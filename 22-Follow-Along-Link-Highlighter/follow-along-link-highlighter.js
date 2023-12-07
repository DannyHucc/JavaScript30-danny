'use strict'

function followAlongLinkHighlighter() {
    let now = null
    const links = document.querySelectorAll('a')
    const highlight = document.querySelector('.highlight')
    highlight.style.display = 'none'

    function setPosition() {
        if (!now) return
        console.log('end', now)
        const rects = now.getBoundingClientRect()
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

    function enterHandler() {
        now = this
        setPosition()
    }

    links.forEach(link => {
        link.addEventListener('mouseenter', enterHandler)
    })
    window.addEventListener('resize', setPosition)
}

followAlongLinkHighlighter()