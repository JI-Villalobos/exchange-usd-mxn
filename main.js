const CURRENT_DOLLAR_INDEX = "https://sidofqa.segob.gob.mx/dof/sidof/indicadores/158/"
const currentPrice = document.getElementById("price")
const onError = {
    "messageCode": 200,
    "response": "OK",
    "ListaIndicadores": [{
        "codIndicador": 31659,
        "codTipoIndicador": 158,
        "fecha": new Date(),
        "valor": "N/A"
    }],
    "TotalIndicadores": 1
}


const formatedDate = () => {
    let formated = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()

    return formated

}



const fetchData = async (initial, final) => {
    
    const apiUrl = `${CURRENT_DOLLAR_INDEX}${initial}/${final}`

    try {
        const response = await fetch(apiUrl)

        const data = await response.json()


        return data


    } catch (error) {
        console.log('fetch error', error);
    }

}




let date = new Date()
const data = async () => {

    try {
        const getData = await fetchData(formatedDate(date), formatedDate(date))

        if (getData.messageCode == 404) {
            const errorData = document.createElement('div')
            errorData.innerHTML = `
            <p class="current-symbol">$</p>
            <p class="current-price-update">Datos no disponibles</p> 
            `
            errorData.className = "current-price"

            return errorData
        } else {
            const showData = document.createElement('div')
            showData.innerHTML = `
                <p class="current-symbol">$</p>
                <p class="current-price-update">USD-MXN: ${getData.ListaIndicadores[0].valor}</p>
            `
            showData.className = "current-price"

            return showData
        }
    } catch (error) {
        console.log(error, "Los datos no se encuentran disponibles");
    }
}


window.addEventListener("load", async (evt) => {
    evt.preventDefault()
    const node = await data()

    currentPrice.appendChild(node)
})