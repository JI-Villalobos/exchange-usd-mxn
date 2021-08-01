
const initDate = document.getElementById("init")
const finalDate = document.getElementById("final")
const button = document.querySelector("button[type='button']")






button.addEventListener("click", async (evt) => {
    evt.preventDefault()

    //const range = await fetchData(initDate.value, finalDate.value)
    
    console.log(initDate.value + ":" + finalDate.value);

})
