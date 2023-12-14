'use strict'

function clickAndDrag() {
    const items = document.querySelector('.items')

    function starDrag() { }

    function dragHandler() { }

    function stopDrag() { }

    items.addEventListener('mousedown', starDrag)
    items.addEventListener('mousemove', dragHandler)
    items.addEventListener('mouseup', stopDrag)
    items.addEventListener('mouseleave', stopDrag)
}

clickAndDrag()