
const initDate = document.getElementById("init")
const finalDate = document.getElementById("final")
const button = document.querySelector("button[type='button']")



button.addEventListener("click", async (evt) => {
    evt.preventDefault()

    const range = await fetchData(splitDash(initDate.value), splitDash(finalDate.value))
    
    console.log(range);

})
