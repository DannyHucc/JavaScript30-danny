'use strict'

const projects = [
    {
        id: 1,
        title: '01. JS Drum Kit.',
        image: './images/01.png',
        demo: '01-JavaScript-Drum-Kit/index.html'
    },
    {
        id: 2,
        title: '02. JS and CSS Clock.',
        image: './images/02.png',
        demo: '02-JS-and-CSS-Clock/index.html'
    },
    {
        id: 3,
        title: '03. CSS Variables.',
        image: './images/03.png',
        demo: '03-CSS-Variables/index.html'
    },
    {
        id: 4,
        title: '04 Array Cardio Day1',
        image: './images/04.png',
        demo: '04-Array-Cardio-Day1/index.html'
    },
]

const jsThirty = document.querySelector('#js-thirty')

function generateJsThirty() {
    jsThirty.innerHTML = ``

    projects.forEach(project => {
        jsThirty.innerHTML += `
        <div class="card data-id-${project.id}">
            <a href="${project.demo}" rel="nofollow" target="_blank">
                <img src="${project.image}" class="card-img-top" alt="JS Drum Kit">
            
                <div class="card-body">
                    <p class="card-text">${project.title}</p>
                </div>
            </a>
        </div >
        `
    })
}

generateJsThirty()