
const initDate = document.getElementById("init")
const finalDate = document.getElementById("final")
const button = document.querySelector("button[type='button']")



button.addEventListener("click", async (evt) => {
    evt.preventDefault()

    try {
        const response = await fetchData(splitDash(initDate.value), splitDash(finalDate.value))
        
        const container = document.getElementById("range")

        container.innerHTML = `
            <div>
                ${response.ListaIndicadores.map(data => 
                    `
                        <my-data>
                            <span slot="date">${data.fecha}</span>
                            <span slot="value">${data.valor}</span>
                        </my-data> 
                    `
                ).join('')}
            </div>
        `
        

        console.log(response);
    }catch(error) {
        console.log(error, "No fue posible obtener los datos");
    }

})
