'use strict'

function addingUpTimes() {
    const list = document.querySelectorAll('li')

    const times = [...list].map(item => item.dataset.time)
    /* same as above
    const times = Array.from(list).map(item => item.dataset.time)
    const times = [].map.call(list, item => item.dataset.time)
    const times = [].map.apply(list, [item => item.dataset.time]) 
    */

    const seconds = [...times.map(time => {
        const [min, sec] = time.split(':') // 5:43 => [5, 43]
        return min * 60 + sec * 1
    })]

    const totalSeconds = seconds.reduce((prev, next) => prev + next, 0)

    const sec = totalSeconds % 60
    const min = Math.floor((totalSeconds % 3600) / 60)
    const hour = Math.floor(totalSeconds / 3600)
}

addingUpTimes()