

const content= document.querySelector(".content");
const load= document.querySelector(".load");
const contentToLoad= [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kFzVaWwKDmyhg1fR8omGmnB6Me4hiOhdHA&s",
        title: "Carros",
        description: "Carros de lujo"
    },
    {
        img: "https://i.ytimg.com/vi/DHoV4JMxcHI/sddefault.jpg",
        title: "Efectos",
        description: "Efectos de imagen"
    }
];

load.addEventListener("click", ()=>{
    setTimeout(()=>{
        contentToLoad.forEach((item)=>{
            content.innerHTML+= `
            <div class="card">
            <img src="${item.img}">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            </div>
            `;
        });
    }, 1300)

})