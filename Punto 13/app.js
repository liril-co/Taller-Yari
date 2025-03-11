const nombre= document.querySelector("#nombre")
const apellido= document.querySelector("#apellido")
const correo= document.querySelector("#correo")
const telefono= document.querySelector("#telefono")
const documento= document.querySelector("#documento")
const form= document.querySelector("form")
const tableBody= document.querySelector("table tbody")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let name= nombre.value
    let surname= apellido.value
    let email= correo.value
    let phone= telefono.value
    let doc= documento.value
    tableBody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${surname}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${doc}</td>
        </tr>
    `;
    nombre.value= ""
    apellido.value= ""
    correo.value= ""
    telefono.value= ""
    documento.value= ""

})