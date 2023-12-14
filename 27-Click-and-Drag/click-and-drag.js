'use strict'

function clickAndDrag() {
    const items = document.querySelector('.items')
    let startX = 0

    function starDrag(e) {
        items.classList.add('active')
        startX = e.pageX
    }

    function dragHandler(e) {
        if (items.classList.contains('active')) {
            const endX = e.pageX
            const move = endX - startX
            items.scrollLeft -= move
        }
    }

    function stopDrag() {
        items.classList.remove('active')
    }

    items.addEventListener('mousedown', starDrag)
    items.addEventListener('mousemove', dragHandler)
    items.addEventListener('mouseup', stopDrag)
    items.addEventListener('mouseleave', stopDrag)
}

clickAndDrag()