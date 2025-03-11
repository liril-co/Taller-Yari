const trigger= document.querySelector('.trigger');
const body= document.querySelector('body');

trigger.addEventListener('click', function(){
    if(body.classList.contains("claro")){
        body.classList.remove("claro")
        body.classList.add("oscuro")
        trigger.innerText= "Tema claro 🌞"
    }else{
        body.classList.remove("oscuro")
        body.classList.add("claro")
        trigger.innerText= "Tema oscuro 🌙"
    }
})