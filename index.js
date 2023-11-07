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
]

const jsThirty = document.querySelector('#js-thirty')

function generateJsThirty() {
    jsThirty.innerHTML = ``

    projects.forEach(project => {
        jsThirty.innerHTML += `
        <div class="card project-id-${project.id}" style="width: 18rem;">
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