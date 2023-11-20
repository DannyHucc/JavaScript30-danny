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
        title: '04. Array Cardio Day1',
        image: './images/04.png',
        demo: '04-Array-Cardio-Day1/index.html'
    },
    {
        id: 5,
        title: '05. Flex Panel Gallery',
        image: './images/05.png',
        demo: '05-Flex-Panel-Gallery/index.html'
    },
    {
        id: 6,
        title: '06. Type Ahead',
        image: './images/06.png',
        demo: '06-Type-Ahead/index.html'
    },
    {
        id: 7,
        title: '07. Array Cardio Day 2',
        image: './images/07.png',
        demo: '07-Array-Cardio-Day2/index.html'
    },
    {
        id: 8,
        title: '08. Fun with HTML5 Canvas',
        image: './images/08.png',
        demo: '08-Fun-with-HTML5-Canvas/index.html'
    },
    {
        id: 9,
        title: '09. Dev Tools Domination',
        image: './images/09.png',
        demo: '09-Dev-Tools-Domination/index.html'
    },
    {
        id: 10,
        title: '10. Hold Shift and Check Checkboxes',
        image: './images/09.png',
        demo: '10-Hold-Shift-and-Check-Checkboxes/index.html'
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