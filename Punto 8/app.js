contador= document.querySelector('.contador');

let numero= 10;
let intervalo= setInterval(function(){
    numero--
    contador.innerText= numero;
    if(numero==0){
        clearInterval(intervalo);
        alert('Fin');
    }
}, 1000)