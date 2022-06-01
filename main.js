const inputTareas = document.querySelector('.input');
const botonLista = document.querySelector('.boton-lista');
const listaTareas = document.querySelector('.lista-tareas');

let nombreusuario = prompt("Ingrese su nombre de Usuario");
if(nombreusuario!=null){ 
document.write("Bienvenido, " + nombreusuario);
}
else{
    alert("No has intruducido ningun nombre");
}

botonLista.addEventListener("click", anadirtarea);

// Arrays

let diasDelMes = [
    {numero:1, dia:"Lunes"},
    {numero:2, dia:"Martes"},
    {numero:3, dia:"Miercoles"},
    {numero:4, dia:"Jueves"},
    {numero:5, dia:"Viernes"},
    {numero:6, dia:"Sabado"},
    {numero:7, dia:"Domingo"}  
]
//Añade un objeto al Array
diasDelMes.push("Fin de la semana")
//Busqueda mediante IndexOf
let x= 0;
x=prompt("")
//Muestra el Array entero
diasDelMes.forEach(element => {
    console.log(element)
});
//Muestra un objeto a eleccion del Array
let i=0;
i=prompt("Que espacio del array quiere revisar (del 0 al 7)");
console.log(diasDelMes[i])



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