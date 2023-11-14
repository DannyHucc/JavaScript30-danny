'use strict'


function searchCities() {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const cities = []

    async function getCities() {
        const blob = await fetch(endpoint)
        const data = await blob.json()
        cities.push(...data)
    }

    function findMatches(keyword, cities) {
        return cities.filter(place => {
            const regex = new RegExp(keyword, "gi")
            return place.city.match(regex) || place.state.match(regex)
        })
    }

    function inputHandler() {
        const matchArray = findMatches(this.value, cities)
    }

    const search = document.querySelector('.search')
    search.addEventListener('keyup', inputHandler)

    getCities()
}

searchCities()