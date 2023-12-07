'use strict'

function followAlongLinkHighlighter() {
    const links = document.querySelectorAll('a')
    const highlight = document.querySelector('.highlight')
    highlight.style.display = 'none'

    function enterHandler() {

    }

    links.forEach(link => {
        link.addEventListener('mouseenter', enterHandler)
    })
}

followAlongLinkHighlighter()