'use strict'

function keyupHandler() {
    const secretCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    const input = []
    function keySequenceDetection(e) {
        input.push(e.keyCode)
        input.splice(0, input.length - secretCode.length)
        if (input.toString() === secretCode.toString()) {
            cornify_add()
        }
    }
    window.addEventListener('keyup', keySequenceDetection)
}

keyupHandler()