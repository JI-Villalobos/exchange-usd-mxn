
const CURRENT_DOLLAR_INDEX = "https://sidofqa.segob.gob.mx/dof/sidof/indicadores/158/"

let date = new Date()
const formatedDate = (date) => {
    let formated = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    
    return formated
}

const fetchData = async () => {
    const currentDate = formatedDate(date)
    const apiUrl = `${CURRENT_DOLLAR_INDEX}${currentDate}/${currentDate}`
   
    try {
        const response = await fetch(apiUrl)

        const data = await response.json()
    
        return data
    } catch (error) {
        console.log('fetch error', error);
    }

}


const button = document.querySelector("button[type='button']")
const currentPrice = document.getElementById("price")

const data = async () => {
    
    const getData = await fetchData()
    
    const showData = document.createElement('div')
    showData.innerHTML = `
        <p class="current-symbol">$</p>
        <p class="current-price-update">USD-MXN: ${getData.ListaIndicadores[0].valor}</p>
    
        `
    showData.className = "current-price"   

    return showData
}


button.addEventListener("click", () => {

})


window.addEventListener("load", async (evt) => {
    evt.preventDefault()
    console.log("cargando");
    const node = await data()

    currentPrice.appendChild(node)
})
