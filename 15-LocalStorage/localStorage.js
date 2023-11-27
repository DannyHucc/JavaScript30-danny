'use strict'

const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(e) {
    e.preventDefault()
    const input = this.querySelector("[name=item]")

    items.push({ text: input.value, done: false })
    localStorage.setItem('items', JSON.stringify(items))
    this.reset()
}
addItems.addEventListener('submit', addItem)