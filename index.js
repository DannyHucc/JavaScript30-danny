'use strict'

function displayProjects() {
    const jsonPath = './json/projects.json'
    const projects = []

    function generateJsThirty() {
        const jsThirty = document.querySelector('#js-thirty')

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

    async function logProjects() {
        try {
            const response = await fetch(jsonPath)
            const data = await response.json()
            projects.push(...data.projects)
            generateJsThirty()
        } catch (error) {
            console.error("Error:", error)
        }
    }
    
    logProjects()
}

displayProjects()