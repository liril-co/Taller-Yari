const trigger= document.querySelector('.trigger');
const tarea= document.querySelector('.tarea');
const tareas= document.querySelector('.tareas');
let listaTareas= [];

trigger.addEventListener('click',()=>{
    let tareaText= tarea.value;
    if(!tareaText) return;
    listaTareas.push(tareaText);
    actualizarTareas();
    tarea.value= "";
});

let actualizarTareas= ()=>{
    tareas.innerHTML= "";
    let tareasHTML= "";
    listaTareas.forEach((tar)=>{
        tareasHTML+= `<li>${tar}<button class="delete">🗑</button></li>`;
    })

    tareas.innerHTML= tareasHTML;

    let botones= document.querySelectorAll('.delete');
    botones.forEach((boton, index)=>{
        boton.addEventListener("click", ()=>{
            listaTareas.splice(index,1);
            actualizarTareas();
        })
    })    
}


