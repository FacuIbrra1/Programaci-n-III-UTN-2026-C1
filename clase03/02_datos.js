/**
 * @file        02_datos.js
 * @description Arrays en JavaScript ES6+: declaración, acceso por índice,
 *              recorrido con for clásico y forEach, métodos de modificación
 *              (push, pop, shift) y métodos de búsqueda (indexOf, includes, join).
 * @subject     Programación III – UTN
 * @topic       Clase 03 – Introducción a JavaScript
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// ARRAYS EN JAVASCRIPT
// =============================================================================

// Un array puede contener elementos de distintos tipos (tipado dinámico)
const vec = [1, true, "hola"];
console.log(vec); // [1, true, 'hola']

// FOR CLÁSICO – recorre el array usando el índice numérico
for (let i = 0; i < vec.length; i++) {
    const elemento = vec[i];
    console.log(elemento);
}

// =============================================================================
// CONSTRUCCIÓN DINÁMICA DE UN ARRAY
// =============================================================================

const vector = [];  // array vacío
vector[0] = 1;      // asignación directa por índice
vector[1] = 2;
vector.push(3);     // push: agrega un elemento al final del array

// forEach – itera cada elemento ejecutando una función callback
// La fat arrow (=>) es la forma compacta de escribir una función anónima
vector.forEach(elemento => {
    console.log(elemento);
});

// =============================================================================
// MÉTODOS COMUNES DEL ARRAY
// =============================================================================

const numeros      = [1, 2, 3, 4];
const otrosNumeros = [1, 2, 3]; // declarado para referencia futura

// pop(): elimina y devuelve el ÚLTIMO elemento
let eliminado = numeros.pop();
console.log(eliminado); // 4 → numeros = [1, 2, 3]

// shift(): elimina y devuelve el PRIMER elemento
eliminado = numeros.shift();
console.log(eliminado); // 1 → numeros = [2, 3]

// push(): agrega un elemento al final
numeros.push(5);
console.log(numeros); // [2, 3, 5]

// join(): une todos los elementos en un string usando el separador indicado
let todosJuntos = numeros.join(" - ");
console.log(todosJuntos); // "2 - 3 - 5"

// indexOf(): devuelve el índice de la primera ocurrencia; -1 si no existe
let indice = numeros.indexOf(2);
if (indice != -1) {
    console.log(`El índice es ${indice}`);
} else {
    console.log("No se encontró...");
}

// includes(): devuelve true si el elemento existe en el array
if (numeros.includes(1)) {
    console.log("Se encontró...");
} else {
    console.log("No se encontró...");
}
