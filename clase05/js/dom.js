/**
 * @file        dom.js
 * @description Introducción al Document Object Model (DOM) con JavaScript.
 *              Cada región muestra cómo seleccionar, recorrer, manipular,
 *              agregar y quitar elementos del árbol DOM usando la API nativa
 *              del navegador. Todos los bloques están comentados para
 *              descomentarlos y probarlos de a uno.
 * @subject     Programación III – UTN
 * @topic       Clase 05 – Formularios, DOM, Selectores y Eventos
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// SELECTORES – OBTENER EL PRIMER ELEMENTO QUE COINCIDA
// =============================================================================
// querySelector(selector) devuelve el PRIMER elemento del DOM que coincide
// con el selector CSS. Si no existe, devuelve null.

//#region OBTENGO EL PRIMER ELEMENTO

// let primerParrafo = document.querySelector("p");     // primer <p> del documento
// console.log(primerParrafo);

// let primerDiv = document.querySelector("div");       // primer <div> del documento
// console.log(primerDiv);

// let h3 = document.querySelector("h3");               // primer <h3> del documento
// console.log(h3);

//#endregion

// =============================================================================
// SELECTORES – OBTENER TODOS LOS ELEMENTOS QUE COINCIDAN
// =============================================================================
// querySelectorAll(selector) devuelve un NodeList (similar a un array)
// con TODOS los elementos que coinciden con el selector CSS.

//#region OBTENGO TODOS LOS ELEMENTOS

// let todosParrafos = document.querySelectorAll("p");          // todos los <p>
// console.log(todosParrafos);

// let todosDivs = document.querySelectorAll("div");            // todos los <div>
// console.log(todosDivs);

// let elementosClase = document.querySelectorAll(".cursiva");  // todos los que tienen clase "cursiva"
// console.log(elementosClase);

//#endregion

// =============================================================================
// SELECTORES – OBTENER UN ELEMENTO POR SU ID (ÚNICO)
// =============================================================================
// El selector "#id" en querySelector es equivalente a getElementById("id").

//#region OBTENGO ELEMENTO Único

// let divId = document.querySelector("#divId");  // elemento con id="divId"
// console.log(divId);

//#endregion

// =============================================================================
// RECORRER UNA LISTA DE ELEMENTOS
// =============================================================================
// NodeList admite forEach() directamente (sin necesidad de convertirlo a Array).

//#region RECORRIENDO ELEMENTOS

// let parrafos = document.querySelectorAll("p");
// parrafos.forEach( (p) => console.log(p) );  // imprime cada nodo <p> en consola

//#endregion

// =============================================================================
// MANIPULAR CONTENIDO Y ESTILOS DE UN ELEMENTO
// =============================================================================
// innerHTML: permite leer o escribir el HTML interno del elemento.
// style.propiedad: modifica estilos inline en camelCase (fontSize, no font-size).
// item(n): accede al n-ésimo elemento de un NodeList (base 0).

//#region MANIPULANDO ELEMENTOS

// let segundoParrafo = document.querySelectorAll("p").item(1);  // índice 1 = segundo <p>

// segundoParrafo.innerHTML = "Agrego texto desde js";           // reemplaza el contenido

// segundoParrafo.style.background = "#ff0033";                  // fondo rojo
// segundoParrafo.style.fontSize = "18px";                       // tamaño de fuente (camelCase)

// segundoParrafo.innerHTML += " y estilos";                     // agrega texto al existente

//#endregion

// =============================================================================
// MANIPULAR CLASES CSS DE UN ELEMENTO
// =============================================================================
// classList.add(): agrega una o más clases
// classList.remove(): elimina una clase
// classList.toggle(): alterna: agrega si no está, quita si ya está

//#region AGREGO Y QUITO CLASES

// document.querySelector("h3").classList.add("titulo", "error");    // agrega dos clases
// document.querySelector(".cursiva").classList.remove("cursiva");   // quita la clase
// document.querySelector("p").classList.toggle("cursiva");          // alterna la clase

//#endregion

// =============================================================================
// CREAR Y AGREGAR ELEMENTOS AL DOM
// =============================================================================
// createElement(tag): crea un nuevo nodo elemento (sin agregarlo al DOM todavía)
// createTextNode(texto): crea un nodo de texto
// appendChild(nodo): agrega un nodo hijo al final del elemento padre
// setAttribute(nombre, valor): asigna un atributo HTML al elemento

//#region AGREGO ELEMENTOS AL DOM

// let a = document.createElement("a");                          // crea <a>
// let nodoTexto = document.createTextNode("Ir a Google");       // crea texto

// a.appendChild(nodoTexto);                                     // <a>Ir a Google</a>
// a.setAttribute("href", "http://www.google.com.ar");           // <a href="...">
// document.querySelector("#divId").appendChild(a);              // inserta dentro de #divId


// let p = document.createElement("p");                          // crea <p>
// let nTexto = document.createTextNode("Esto es un texto nuevo");

// p.appendChild(nTexto);                                        // <p>Esto es un texto nuevo</p>
// p.setAttribute("class", "centrado");                          // agrega clase CSS
// document.querySelector("body").appendChild(p);                // inserta al final del <body>

//#endregion

// =============================================================================
// QUITAR ELEMENTOS Y ATRIBUTOS DEL DOM
// =============================================================================
// removeChild(nodo): quita un nodo hijo del elemento padre
// removeAttribute(nombre): elimina un atributo HTML del elemento

//#region QUITO ELEMENTOS DEL DOM

// document.body.removeChild(document.querySelector("h3"));              // elimina el <h3> del body
// document.querySelectorAll("p").item(2).removeAttribute("class");      // quita el atributo class del tercer <p>

//#endregion
