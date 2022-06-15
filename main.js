const inputTareas = document.querySelector('.input');
const botonLista = document.querySelector('.boton-lista');
const listaTareas = document.querySelector('.lista-tareas');

let nombre = sessionStorage.getItem("nombre");
if(!nombre){
    nombre = prompt("Ingrese su Nombre");
    sessionStorage.setItem("nombre", JSON.stringify (nombre));
}

//let nombre = prompt("Ingrese su nombre");
const h2 = document.getElementsByTagName("h2")[0];
h2.innerText = `Bienvenido a tu libreta ${nombre}! `;
//sessionStorage.setItem("nombreUsuario", JSON.stringify(nombre));


let modoPantalla = localStorage.getItem("modo");

if(!modoPantalla)
{
     modoPantalla = "ligth";
     nuevoModo="dark";
}

//Event Listener
botonLista.addEventListener("click", anadirtarea);
listaTareas.addEventListener("click", borrarCheckear)

// Funciones

function anadirtarea(event){
    //Evitar que se refresque la pagina
    event.preventDefault();
    // Div de Tareas
    const divtareas = document.createElement('div');
    divtareas.classList.add('tarea');
    // Lista
    const nuevatarea = document.createElement('li');
    nuevatarea.innerText = inputTareas.value;
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
    inputTareas.value = "";
} 

//Modo Oscuro   `<i class="fa-solid fa-circle-half-stroke"></i>`
const botonmodo = document.createElement("button");
botonmodo.innerText =`<i class="fa-solid fa-circle-half-stroke"></i>`;
botonmodo.addEventListener("click", ()=>{
    setMode(modoPantalla);
    });
document.body.appendChild(botonmodo);    
    
function setMode(modoActual){

    if(modoActual==="ligth")
    {
        document.body.setAttribute("style", "background-color:black;color:white");
        localStorage.setItem("modo", "dark");
    }
    else
    {
        document.body.setAttribute("style", "background-color:white;color:black");
        localStorage.setItem("modo", "ligth");
    }   
}


function borrarCheckear(event){
    const item = event.target;
    //Check Tarea
    if(item.classList[0] === 'btn-compl')
        {
            const tarea = item.parentElement;
            tarea.classList.toggle("completado");
        }
    //Borrar Tarea  
    if(item.classList[0] === 'btn-tach') 
        {
            const tarea = item.parentElement;
            tarea.remove();
        }

}
