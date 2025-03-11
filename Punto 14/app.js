const container= document.querySelector('.container');

setTimeout(()=>{
    container.innerHTML+= 
    `<div class="alert">
        <b>¡Hola!</b> Este es un mensaje de error.
    </div>`;
    container.querySelector(".alert").classList.add("visible");
    setTimeout(()=>{
        container.querySelector(".alert").classList.remove("visible");
        setTimeout(()=>{
            container.querySelector(".alert").remove();
        }, 1000)
    }, 3000)
}, 2200)