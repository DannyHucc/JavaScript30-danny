'use strict'

function addingUpTimes() {
    const li = document.querySelectorAll('li')

    const lists = [...li].map(item => item.dataset.time)
    /* same as above
    const lists = Array.from(li).map(item => item.dataset.time)
    const lists = [].map.call(li, item => item.dataset.time)
    const lists = [].map.apply(li, [item => item.dataset.time]) 
    */
}

addingUpTimes()