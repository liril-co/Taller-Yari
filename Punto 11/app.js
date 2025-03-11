const filtrar= document.querySelector("#filtrar")
const items= document.querySelectorAll(".item")

filtrar.addEventListener("input", ()=>{
    let busqueda= filtrar.value.toLowerCase()
    items.forEach((item)=>{
        if(item.innerText.toLowerCase().includes(busqueda) && busqueda!=""){
            item.classList.remove("hidden")
        }else{
            item.classList.add("hidden")
        }
    })
})