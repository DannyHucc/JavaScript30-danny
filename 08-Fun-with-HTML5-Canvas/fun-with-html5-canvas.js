'use strict'

function drawHandler() {
    const canvas = document.querySelector('#draw')
    const ctx = canvas.getContext('2d')

    let X = 0
    let Y = 0
    let color = 0
    let direction = true
    let isDrawing = false

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    ctx.lineWidth = 10
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = "hsl(0, 100%, 50%)"

    function changeXY(e) {
        [X, Y] = [e.offsetX, e.offsetY]
    }

    function changeColor() {
        color > 360 ? color = 0 : color++
    }

    function changeLineWidth() {
        if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) direction = !direction
        direction ? ctx.lineWidth++ : ctx.lineWidth--
    }

    function draw(e) {
        if (!isDrawing) return
        ctx.strokeStyle = `hsl(${color}, 100%, 50%)`

        ctx.beginPath()
        ctx.moveTo(X, Y)
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()

        changeXY(e)
        changeColor()
        changeLineWidth()
    }

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true
        changeXY(e)
    })
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', () => isDrawing = false)
    canvas.addEventListener('mouseleave', () => isDrawing = false)
}

drawHandler()