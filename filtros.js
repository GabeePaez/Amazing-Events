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
const checked = document.querySelectorAll("input[type='checkbox']:checked")
console.log(checked)
const arrayChecked = Array.from( checked ).map( checkbox => checkbox.value )
console.log(arrayChecked)
if(arrayChecked.length > 0){
    let objetosFiltradosPorCheck = arrayEventos.filter(evento => arrayChecked.includes(evento.category))
    return objetosFiltradosPorCheck
} else{
    console.log(data.eventos)
    return data.eventos
}
}

//$contenedorChecks.addEventListener("input", eventoCheckbox)

$contenedorChecks.addEventListener("change", (e)=> {
    let returnFiltroCruzado = filtroCruzado(data.eventos, $search)
    mostrarTarjetas(returnFiltroCruzado)
})


const $search = document.querySelector('input[type="search"]')
console.log($search)

$search.addEventListener("keyup", () => {
    //const returnFiltroSearch = filtroPorSearch(data.eventos, $search)
    let returnFiltroCruzado = filtroCruzado(data.eventos, $search)
    mostrarTarjetas(returnFiltroCruzado)
})

function filtroPorSearch(eventos, input) {
    console.log(eventos)
    let arrayFiltradosSearch = eventos.filter(evento => evento.name.includes(input.value))
    console.log(arrayFiltradosSearch);
    return arrayFiltradosSearch
}

function filtroCruzado(array, input){
    let returnEventoCheckbox = eventoCheckbox(array)
    let returnFiltroPorSearch = filtroPorSearch(returnEventoCheckbox, input)
    return returnFiltroPorSearch
}
