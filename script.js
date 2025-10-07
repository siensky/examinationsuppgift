
const WINES_URL = "https://api.sampleapis.com/wines/reds"

const winesList = document.getElementById("wines-list")

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

const getWines = async () => {

    const response = await fetch(WINES_URL)
    const paresdWines = await response.json()

    for (const wine of paresdWines) {
        const wineDiv = document.createElement("div")

        const wineName = document.createElement("h3")
        wineName.textContent = wine.wine

        const winery = document.createElement("p")
        winery.textContent = wine.winery

        const rating = document.createElement("p")
        rating.textContent = `Rating: ${wine.rating.average}/5 (${wine.rating.reviews})`

        const wineImg = document.createElement("img")
        wineImg.src = wine.image
        wineImg.alt = `Image of ${wineName} wine`

        wineDiv.classList.add("wines-column")




        wineDiv.appendChild(wineImg)
        wineDiv.appendChild(wineName)
        wineDiv.appendChild(winery)
        wineDiv.appendChild(rating)

        winesList.appendChild(wineDiv)

    }


}




getWines()

