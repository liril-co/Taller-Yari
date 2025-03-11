const previo= document.querySelector(".previo");
const siguiente= document.querySelector(".siguiente");
const imagenes= document.querySelectorAll(".galeria img")

let index= 0;

previo.addEventListener("click", ()=>{
    if(index>0){
        index--;
    }else{
        index= imagenes.length-1;
    }
    imagenes[index].scrollIntoView({behavior: "smooth"});
})
siguiente.addEventListener("click", ()=>{
    if(index<imagenes.length-1){
        index++;
    }else{
        index= 0;
    }
    imagenes[index].scrollIntoView({behavior: "smooth"});
})
