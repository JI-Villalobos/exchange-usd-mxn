
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
const p = document.getElementsByClassName("p")


const data = async () => {
    const getData = await fetchData()
    console.log(getData.ListaIndicadores[0].valor);
}


button.addEventListener("click", () => {

})


window.addEventListener("load", () => {
    console.log("cargando");
    data()
})
/*chrome.runtime.onInstalled.addListener(() => {

    //chrome.storage.sync.set({ CURRENT_DOLLAR_INDEX })
    console.log("path:" + `: ${CURRENT_DOLLAR_INDEX}`);
})*/