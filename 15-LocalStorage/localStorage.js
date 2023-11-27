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
    this.reset()
    localStorage.setItem('items', JSON.stringify(items))
    createList(items, itemsList)
}

function toggleItem(e) {
    if (!e.target.matches('input')) return
    const index = e.target.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    createList(items, itemsList)
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleItem)
createList(items, itemsList)