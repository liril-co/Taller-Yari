form= document.querySelector('form');
password= document.querySelector('#password');
reveal= document.querySelector(".reveal")

reveal.addEventListener('click', function(event){
    event.preventDefault();
    if(password.getAttribute("type")=="password"){
        password.setAttribute("type","text")
        reveal.classList.add("hide")
    }else{
        password.setAttribute("type", "password")
        reveal.classList.remove("hide")
    }
})