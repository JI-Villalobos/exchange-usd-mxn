
const initDate = document.getElementById("init")
const finalDate = document.getElementById("final")
const button = document.querySelector("button[type='button']")



button.addEventListener("click", async (evt) => {
    evt.preventDefault()

    try {
        const response = await fetchData(splitDash(initDate.value), splitDash(finalDate.value))
        
        const container = document.getElementById("range")

        container.innerHTML = `
            <div class="data">
                ${response.ListaIndicadores.map(data => 
                    `
                        <div class="data-press">
                            <span class="date" slot="date">${data.fecha}</span>
                            <span class="value" slot="value">${data.valor}</span>
                        </div> 
                    `
                ).join('')}
            </div>
        `
        

        console.log(response);
    }catch(error) {
        console.log(error, "No fue posible obtener los datos");
    }

})
