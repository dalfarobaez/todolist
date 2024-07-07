listaHTML = document.querySelector(".lista-tareas")
nuevaTarea = document.querySelector(".nueva-tarea")
btnNueva = document.querySelector(".recibir-tarea-nueva")
resumen = document.querySelector(".resumen-tareas")

const lista = [
    {id:0, nombre:"Pasear al perro", completa:false},
    {id:1, nombre:"Cocinar", completa:false},
    {id:2, nombre:"Dormir 8 horas", completa:false}
]

function renderTareas() {
    let html = '<tr><th>Id</th><th>Tarea</th><th>Completar Tareas</th><th>Eliminar Tareas</th></tr>'
    lista.forEach(element => {
        html += `
            <tr><td>${element.id}</td>
            <td class="${element.completa ? 'completa' : ''}">${element.nombre}</td>
            <td><button id="${element.id}"  class="completar">Completar</button></td>
            <td><button id="${element.id}"  class="eliminar">Eliminar</button></td></tr>`
    });
    listaHTML.innerHTML = html

    let resumenHTML = `
        <tr><td>Total: </td><td>${lista.length}</td></tr>
        <tr><td>Completas: </td><td>${lista.filter((elemento)=>elemento.completa == true).length}</td></tr>
        <tr><td>Eliminadas: </td><td>${eliminadas}</td></tr>`

    resumen.innerHTML = resumenHTML
    completarTareas()
    eliminarTareas()
}

btnNueva.addEventListener("click",()=>{
    const nombreNuevaTarea = nuevaTarea.value
    if (nuevaTarea.value != '') {
        lista.push({id:lista.length+eliminadas,nombre:nombreNuevaTarea,completa:false,eliminada:false})
    }
    nuevaTarea.value = ''
    renderTareas()
})

const completarTareas = ()=> {
    const btnCompletar = document.querySelectorAll (".lista-tareas .completar")
    btnCompletar.forEach((btn)=> {
        btn.addEventListener('click', ()=>{
            const index = lista.findIndex((tarea)=> tarea.id == btn.id)
            lista[index].completa = !lista[index].completa
            renderTareas()        
        })
    })
}

let eliminadas = 0
const eliminarTareas = ()=> {
    const btnEliminar = document.querySelectorAll (".lista-tareas .eliminar")
    btnEliminar.forEach((btn)=> {
        btn.addEventListener('click', ()=>{
            const index = lista.findIndex((tarea)=> tarea.id == btn.id)
            lista.splice(index,1)
            eliminadas += 1
            renderTareas()        
        })
    })
}

renderTareas()