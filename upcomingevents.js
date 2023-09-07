let arrayEventos = data.eventos
console.log(arrayEventos)
let fechaActual = data.currentDate
console.log(fechaActual)

let contenedorTarjetas = document.getElementById('contenedorTarjetas')

console.log(contenedorTarjetas)
templateTarjeta = "";

function mostrarTarjetas(unArray) {
    if (unArray.length > 0) {
        for (let i = 0; i < unArray.length; i++) {
            if (unArray[i].date > data.currentDate) {


                templateTarjeta +=
                    `<div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem; height: 25rem;">
    <img src= ${unArray[i].image} style="height: 8.5rem"  class="card-img-top" alt="Cinema">
    <div class="card-body ">
      <h5 class="card-title">${unArray[i].name}</h5>
      <p class="card-text">${unArray[i].description}</p>
      <p class="card-text"> ${unArray[i].date}</p>
      <div class="vermas container-fluid">
       <p class="mb-0 m-1"> $ ${unArray[i].price}</p> 
       <a href="./details.html?id=${unArray[i]._id}" class="btn btn-primary">Details</a>
    </div>
    </div>
    </div>`
            }
        }
    }
    contenedorTarjetas.innerHTML = templateTarjeta;
}
mostrarTarjetas(arrayEventos)