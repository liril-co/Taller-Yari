bannerImg= document.querySelector(".banner img")

bannerImg.addEventListener("mouseover", ()=>{
    if(bannerImg.src != "resources/arbol2.png"){
        bannerImg.src= "resources/arbol2.png"
    }
})
bannerImg.addEventListener("mouseout", ()=>{
    if(bannerImg.src != "resources/Copia-de-arboles.png"){
        bannerImg.src= "resources/Copia-de-arboles.png"
    }
})