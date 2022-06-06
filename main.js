const inputTareas = document.querySelector('.input');
const botonLista = document.querySelector('.boton-lista');
const listaTareas = document.querySelector('.lista-tareas');

let nombre = prompt("Ingrese su nombre");
const h2 = document.getElementsByTagName("h2")[0];
h2.innerText = `Bienvenido a tu libreta ${nombre}! `;


// Funciones

function anadirtarea(event){
    //Evitar que se refresque la pagina
    event.preventDefault();
    // Div de Tareas
    const divtareas = document.createElement('div');
    divtareas.classList.add('tarea');
    // Lista
    const nuevatarea = document.createElement('li');
    nuevatarea.innerText = 'nueva tarea';
    nuevatarea.classList.add('item-tarea');
    divtareas.appendChild(nuevatarea);
    //Botones
    const botoncompletado = document.createElement('boton');
    botoncompletado.innerHTML = `<i class="fas fa-check"></i>`;
    botoncompletado.classList.add("btn-compl");
    divtareas.appendChild(botoncompletado);

    const botontachar = document.createElement('boton');
    botontachar.innerHTML = `<i class="fas fa-trash"></i>`;
    botontachar.classList.add("btn-tach");
    divtareas.appendChild(botontachar);
    //Añadir a la lista
    listaTareas.appendChild(divtareas);
}   

//function ordenar = () => {
//    const completada = [];
//    const porhacer = [];
//    divtareas.childnodes.array.forEach(element => {
//        element.classList.contains('completada') ? completada.push(element) : porhacer.push(el)
//    });
//    return [completada, porhacer];
//}