scrollToTop= document.querySelector(".scroll-to-top");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>100){
        scrollToTop.classList.add("visible");
    }else{
        scrollToTop.classList.remove("visible");
    }
})

scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
