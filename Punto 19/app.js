const container= document.querySelector(".container");

const totalResumen= document.querySelector(".total")
const cantidadResumen= document.querySelector(".cantidadTotal")

let total= 0;
let productosComprados= 0;

let productos= [
    {
        nombre: "Naranja",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnECkVtkHM7lWF9hbFlc9OxzK5zewTJYvu8g&s",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        precio: 3500
    },
    {
        nombre: "Tomate de árbol",
        img: "https://img.pikbest.com/wp/202420/kumquat-fruit-flat-design-vector-illustration-isolated-on-a-white-background_10566574.jpg!sw800",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        precio: 3700
    },
    {
        nombre: "Sandía",
        img: "https://png.pngtree.com/png-clipart/20221023/original/pngtree-watermelon-illustration-fruit-flat-design-png-image_8716037.png",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        precio: 4300
    },
    {
        nombre: "Cereza",
        img: "https://www.creativefabrica.com/wp-content/uploads/2021/07/02/simple-cherry-fruit-icon-flat-design-art-Graphics-14172372-1-1-580x387.png",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        precio: 7000
    }
]

productos.forEach((producto, index)=>{
    container.innerHTML+=
   `<div class="producto">
        <h1>${producto.nombre}</h1>
        <img src="${producto.img}" alt="">
        <p>${producto.descripcion}</p>
        <span class="precio">${producto.precio}</span>
        <div class="comprar">
            <input type="number" class="cantidad" value="1" autocomplete="off">
            <button class="add-to-cart" data-id="${index}">🛒</button>
        </div>
    </div>`
})

const addToCartButtons= document.querySelectorAll(".add-to-cart");

let actualizarResumen= function(){
    totalResumen.innerHTML= total;
    cantidadResumen.innerHTML= productosComprados;
}

addToCartButtons.forEach(button=>{
    button.addEventListener("click", ()=>{
        const producto= productos[button.getAttribute("data-id")];
        const cantidad= button.parentElement.querySelector(".cantidad").value;
        total+= producto.precio * cantidad
        productosComprados+= Number(cantidad);
        actualizarResumen();
    })
})