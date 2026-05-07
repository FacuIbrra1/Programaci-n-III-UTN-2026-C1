/**
 * @file        eventos2.js
 * @description Manejo avanzado de eventos del DOM en JavaScript:
 *              DOMContentLoaded, mouseover/mouseout, lectura de inputs
 *              y select desde JS, modificación de estilos y contenido,
 *              y asignación programada de valores a controles del formulario.
 * @subject     Programación III – UTN
 * @topic       Clase 05 – Formularios, DOM, Selectores y Eventos
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// PUNTO DE ENTRADA: DOMContentLoaded
// =============================================================================
// Se espera a que el HTML esté completamente parseado antes de manipular el DOM.
// Dentro se inicializan todos los manejadores de eventos para evitar
// referencias a elementos que aún no existen.

document.addEventListener("DOMContentLoaded", () => {

    // Inicializa los manejadores de los botones principales
    administrarEventosBotones();

    // ==========================================================================
    // EVENTOS DE RATÓN: mouseover y mouseout sobre todos los <div>
    // ==========================================================================
    // forEach sobre un NodeList permite asignar el mismo manejador a cada elemento.
    // classList.toggle() alterna la clase "error" (agrega si no está, quita si está).
    document.querySelectorAll("div").forEach((div) => {

        // Al pasar el cursor sobre el div: alterna clase CSS y cambia cursor
        div.addEventListener("mouseover", () => {
            div.classList.toggle("error");
            div.style.cursor = "pointer";
        });

        // Al sacar el cursor del div: restaura el cursor
        div.addEventListener("mouseout", () => {
            div.style.cursor = "arrow";
        });
    });

});

// =============================================================================
// INICIALIZACIÓN DE BOTONES
// =============================================================================
// Se agrupa en una función para mantener el bloque DOMContentLoaded limpio.

function administrarEventosBotones() {

    // Botón "Modificar Todos los P": llama a modificarPs() mediante fat arrow
    document.querySelector("#btnModificar").addEventListener("click", () => modificarPs());

    // Botón "Cambiar fondo": modifica el backgroundColor del <body> directamente
    document.querySelector("#btnColorear").addEventListener("click", () => {
        document.body.style.backgroundColor = "#364683";
    });

    // Botón "Test": lee los valores del input de texto y el select,
    // y los muestra dentro del elemento <main> usando innerHTML
    document.querySelector("#btnCargarDatos").addEventListener("click", () => {
        let nombre = document.querySelector("#txtNombre").value;   // .value: texto ingresado
        var opcion = document.querySelector("#cboSeleccion").value; // .value: option seleccionada

        // innerHTML permite insertar HTML como string dentro del elemento
        document.querySelector("main").innerHTML = "Nombre: " + nombre + "<br>Opción: " + opcion;
    });
}

// =============================================================================
// MODIFICAR ESTILO DE TODOS LOS PÁRRAFOS
// =============================================================================
// map() en arrays; forEach en NodeList: aplica la misma operación a cada nodo.

function modificarPs() {
    // Cambia la fuente de todos los <p> del documento
    document.querySelectorAll("p").forEach((p) => p.style.fontFamily = "arial black");
}

// =============================================================================
// ASIGNAR VALORES A CONTROLES DEL FORMULARIO DESDE JS
// =============================================================================
// .value = "..." en un <input> o <select> cambia el valor visible/seleccionado.
// Llamada desde onclick="CambiarDatos()" en el HTML (forma 2 de manejo de eventos).

function CambiarDatos() {

    alert("Cambia de valor la selección ('op2')\ny del nombre ('ROBERTO')");

    // Asigna un nuevo valor al campo de texto
    document.querySelector("#txtNombre").value = "ROBERTO";

    // Selecciona la opción cuyo value="op2" en el <select>
    document.querySelector("#cboSeleccion").value = "op2";
}