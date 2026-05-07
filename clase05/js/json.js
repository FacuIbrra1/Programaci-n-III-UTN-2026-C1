/**
 * @file        json.js
 * @description Captura de datos de un formulario HTML con FormData y
 *              conversión a objeto JS plano usando Object.fromEntries().
 *              Demuestra cómo prevenir el comportamiento por defecto del
 *              submit y leer todos los campos del formulario de una vez.
 * @subject     Programación III – UTN
 * @topic       Clase 05 – Formularios, DOM, Selectores y Eventos
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// Esperar a que el DOM esté listo antes de buscar elementos
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#btnEnviar").addEventListener("click", (e) => {

        // e.preventDefault() cancela el comportamiento nativo del submit
        // (que recarga la página o navega a la action del formulario)
        e.preventDefault();

        // document.forms es una HTMLCollection con todos los <form> del documento.
        // item(0) devuelve el primero (index base 0).
        let form = document.forms.item(0);

        // FormData recorre automáticamente todos los campos del formulario
        // con atributo 'name' y captura sus valores actuales.
        const data = new FormData(form);

        // Object.fromEntries() convierte los pares [key, value] del FormData
        // en un objeto JS plano { campo: valor, ... }, listo para enviar como JSON.
        const dataObject = Object.fromEntries(data.entries());

        // Mostrar el objeto en consola para inspeccionarlo (F12 → Console)
        console.log(dataObject);

    });

});