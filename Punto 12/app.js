const colorFondo= document.querySelector('#color-fondo');
const body= document.querySelector('body');

body.style.backgroundColor= colorFondo.value;

colorFondo.addEventListener('change', ()=>{
    body.style.backgroundColor= colorFondo.value;
})
