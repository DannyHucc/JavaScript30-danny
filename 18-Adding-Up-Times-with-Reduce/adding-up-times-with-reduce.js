'use strict'

function addingUpTimes() {
    const list = document.querySelectorAll('li')

    const times = [...list].map(item => item.dataset.time)
    /* same as above
    const times = Array.from(list).map(item => item.dataset.time)
    const times = [].map.call(list, item => item.dataset.time)
    const times = [].map.apply(list, [item => item.dataset.time]) 
    */
}

addingUpTimes()