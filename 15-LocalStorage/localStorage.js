'use strict'

const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []

function createList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}>
            <label for="item${i}">${plate.text}</label>
        </li>
        `
    }).join('')
}

function addItem(e) {
    e.preventDefault()
    const input = this.querySelector("[name=item]")

    items.push({ text: input.value, done: false })
    localStorage.setItem('items', JSON.stringify(items))
    this.reset()

    createList(items, itemsList)
}

addItems.addEventListener('submit', addItem)
createList(items, itemsList)