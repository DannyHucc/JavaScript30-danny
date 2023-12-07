'use strict'

function followAlongLinkHighlighter() {
    const links = document.querySelectorAll('a')
    links.forEach(link => {
        link.addEventListener('mouseenter', enterHandler)
    })
}

followAlongLinkHighlighter()