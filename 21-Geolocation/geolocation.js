'use strict'

const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

// watch over time
navigator.geolocation.watchPosition((data) => {
    speed.content = data.coords.speed
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
    console.error(err)
})