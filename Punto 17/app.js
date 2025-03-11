const hero= document.querySelector(".hero");

let x= 0;
let y= 0;
const velocidadInicial= 5;
let velocidad= velocidadInicial;
let aceleracion= 1;
let velocidadMaxima= 14;

let xMaximo= 380;
let yMaximo= 240;

let arriba= false;
let abajo= false;
let izquierda= false;
let derecha= false;

window.addEventListener("keydown", (e)=>{
    switch(e.key){
        case "ArrowUp":
            arriba= true;
            break;
        case "ArrowDown":
            abajo= true;
            break;
        case "ArrowLeft":
            izquierda= true;
            break;
        case "ArrowRight":
            derecha= true;
            break;

    }
})
window.addEventListener("keyup", (e)=>{
    switch(e.key){
        case "ArrowUp":
            arriba= false;
            break;
        case "ArrowDown":
            abajo= false;
            break;
        case "ArrowLeft":
            izquierda= false;
            break;
        case "ArrowRight":
            derecha= false;
            break;

    }
})
let actualizarPosicion= function(){
    hero.style.left= `${x}px`;
    hero.style.top= `${y}px`;
}
setInterval(()=>{
    if(arriba && y - velocidad>0){
        y-= velocidad;
        if(velocidad + aceleracion <= velocidadMaxima){
            velocidad+= aceleracion;
        }
    }else if(arriba){
        y= 0;
        velocidad= velocidadInicial
    }

    if(abajo && y + velocidad < yMaximo){
        y+= velocidad;
        if(velocidad + aceleracion <= velocidadMaxima){
            velocidad+= aceleracion;
        }
    }else if(abajo){
        y= yMaximo;
        velocidad= velocidadInicial
    }

    if(izquierda && x - velocidad > 0){
        x-= velocidad;
        if(velocidad + aceleracion <= velocidadMaxima){
            velocidad+= aceleracion;
        }
    }else if(izquierda){
        x= 0;
        velocidad= velocidadInicial
    }
    if(derecha && x+ velocidad < xMaximo){
        x+= velocidad;
        if(velocidad + aceleracion <= velocidadMaxima){
            velocidad+= aceleracion;
        }
    }else if(derecha){
        x= xMaximo;
        velocidad= velocidadInicial
    }
    actualizarPosicion();
},170)
