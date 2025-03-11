const trigger= document.querySelector(".trigger")
let contador= 0;

trigger.addEventListener("click", ()=>{
    contador++;
    trigger.innerHTML= `${contador} <i>${contador==1?"click":"clicks"}</i>`;
})