'use strict'

function clickAndDrag() {
    const items = document.querySelector('.items')

    function starDrag() {
        items.classList.add('active')
    }

    function dragHandler() { }

    function stopDrag() {
        items.classList.remove('active')
    }

    items.addEventListener('mousedown', starDrag)
    items.addEventListener('mousemove', dragHandler)
    items.addEventListener('mouseup', stopDrag)
    items.addEventListener('mouseleave', stopDrag)
}

clickAndDrag()