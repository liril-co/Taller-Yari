cantidad= document.querySelector(".cantidad");
total= document.querySelector(".valor-total");
let precio= 5000;

cantidad.addEventListener("input", function(){
    total.innerText= `$${cantidad.value*precio}`;
})