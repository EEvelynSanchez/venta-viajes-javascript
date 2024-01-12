import { barcelona, roma, paris, londres } from './ciudades.js'

// obtener los elementos del dom. es una representacion estructurada de un documento HTML, nos permite modificar de forma dinamica la aplicacion.
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// agregar un evento click a cada enlace. escuchador de eventos
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (){
        //remover la clase active de todosl os enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        //agregar active al que corresponda. this se refiere al elemento que estamos trabajando
        this.classList.add('active')

        //obetener el contenido correspondiente segun el enlace. mandamos el this, 
        let contenido = obtenerContenido(this.textContent)

        //mostrar el contenido en el dom. html
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    });
});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };
    return contenido[enlace];
}