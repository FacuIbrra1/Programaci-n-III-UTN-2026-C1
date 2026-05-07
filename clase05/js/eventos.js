/**
 * @file        eventos.js
 * @description Introducción a los eventos del DOM en JavaScript.
 *              Muestra tres formas de asignar un manejador de evento:
 *              1) atributo inline onclick en el HTML
 *              2) referencia a una función desde onclick
 *              3) addEventListener desde JS (manejador semántico)
 *              Incluye ejemplo con window.onload y DOMContentLoaded.
 * @subject     Programación III – UTN
 * @topic       Clase 05 – Formularios, DOM, Selectores y Eventos
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// Función referenciada desde el atributo onclick="mostrar()" en el HTML.
// Forma 2 de manejar eventos: la función existe en el scope global y el HTML
// la llama por nombre desde el atributo.
function mostrar() {
    console.log("click desde función");
}

// =============================================================================
// MANEJADOR SEMÁNTICO – window.onload + addEventListener
// =============================================================================
// window.onload garantiza que el DOM y todos los recursos (imágenes, CSS)
// estén completamente cargados antes de ejecutar el código.
// addEventListener("click", fn) asigna el manejador desde JS sin modificar el HTML:
// separación entre estructura (HTML) y comportamiento (JS).

//#region MANEJADOR SEMÁNTICO

// window.onload = (() => {
    // Asigna el manejador de click al botón con id="btnMostrar" desde JS puro
//     document.querySelector("#btnMostrar").addEventListener("click", mostrar);
// });

//#endregion

// =============================================================================
// ALTERNATIVA: DOMContentLoaded (más eficiente que window.onload)
// =============================================================================
// DOMContentLoaded se dispara cuando el HTML fue parseado y el DOM está listo,
// SIN esperar a que carguen imágenes ni hojas de estilo.
// Es preferible a window.onload cuando no se necesitan los recursos externos.

//#region MANEJADOR SEMÁNTICO 2

 document.addEventListener("DOMContentLoaded", () => {

//     // Función anónima como manejador: no hace falta declararla aparte
     document.querySelector("#btnMostrar").addEventListener("click", () => {
         console.log("click desde manejador semántico");
     });

 });

//#endregion
