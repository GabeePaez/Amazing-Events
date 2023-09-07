console.log(document)

let categorias = arrayEventos.map(evento => evento.category)
console.log(categorias)

const $contenedorChecks = document.getElementById('contenedorChecks')
console.log($contenedorChecks);

const catSinRep = [...new Set(arrayEventos.map(evento => evento.category))]

function crearEstructuraChecks(string) {
    console.log(string)
    let template = ""
    template = `
    <div class="form-check form-check-inline">${string}
    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio5"
        value="${string}">
    <label class="form-check-label" for="inlineRadio5"></label>
    `
    return template
}

function imprimirChecksEnHTML(array, elementoHTML) {
    let estructura = ""
    array.forEach(categoria => {
        estructura += crearEstructuraChecks(categoria)
    });
    elementoHTML.innerHTML = estructura
}
imprimirChecksEnHTML(catSinRep, $contenedorChecks)




function eventoCheckbox(){
const checked = document.querySelectorAll('input[type=checkbox]:checked')
const arrayChecked = Array.from( checked ).map( checkbox => checkbox.value )
console.log(arrayChecked)
console.log(data.eventos)
}

$contenedorChecks.addEventListener("input", eventoCheckbox)

$contenedorChecks.addEventListener("change", (e)=> {
    let array = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(check => check.value)
    let objetosFiltradosPorCheck = arrayEventos.filter(evento => array.includes(evento.category))
    mostrarTarjetas(objetosFiltradosPorCheck, contenedorTarjetas)
})


const $search = document.querySelector('input[type="search"]')
console.log($search)

$search.addEventListener("keyup", () => {
    const returnFiltroSearch = filtroPorSearch(data.eventos, $search)
    mostrarTarjetas(returnFiltroSearch)
})

function filtroPorSearch(eventos, input) {
    console.log(eventos)
    let arrayFiltradosSearch = eventos.filter(evento => evento.name.includes(input.value))
    console.log(arrayFiltradosSearch);
    return arrayFiltradosSearch
}


