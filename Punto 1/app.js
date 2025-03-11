const trigger= document.querySelector(".trigger")
const paragraph= document.querySelector("p");
let texto= "Los pájaros vuelan sobre el mar bajo el cielo "

trigger.addEventListener("click", ()=>{
    let textoViejo= paragraph.innerText;
    paragraph.innerText= texto
    texto= textoViejo
})