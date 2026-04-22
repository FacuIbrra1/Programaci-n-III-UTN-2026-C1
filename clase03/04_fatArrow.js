/**
 * @file        04_fatArrow.js
 * @description Funciones flecha (Fat Arrow / Arrow Functions) en ES6+:
 *              equivalencia con function expressions, sintaxis de cuerpo
 *              conciso (implicit return) y cuerpo en bloque.
 * @subject     Programación III – UTN
 * @topic       Clase 03 – Introducción a JavaScript
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// FUNCIÓN EXPRESSION vs FUNCIÓN FLECHA – FORMAS EQUIVALENTES
// =============================================================================

// Forma 1: function expression clásica
// El cuerpo entre llaves debe usar return explícitamente
const f1 = function (i) { return i * i; };
console.log(f1(2)); // 4

// Forma 2: función flecha con cuerpo conciso (implicit return)
// Cuando el cuerpo es una sola expresión, se omiten las llaves y el return
// (i) => i * i  es exactamente equivalente a  function(i) { return i * i; }
const f2 = (i) => i * i;
console.log(f2(2)); // 4

// =============================================================================
// FUNCIÓN EXPRESSION vs FUNCIÓN FLECHA – CON CUERPO EN BLOQUE
// =============================================================================

// Forma 3: function expression con cuerpo en bloque (varias sentencias)
// El operador ternario (condición ? valorSiTrue : valorSiFalse)
// es equivalente a un if-else de una sola expresión
const f3 = function () {
    let algo    = 3;
    let mensaje = algo % 2 ? "es par" : "es impar"; // 3 % 2 = 1 (truthy) → "es par"
    console.log(mensaje);
};
f3();

// Forma 4: función flecha con cuerpo en bloque
// Cuando hay varias sentencias se usan llaves; el return debe ser explícito si se necesita
const f4 = () => {
    let algo    = 3;
    let mensaje = algo % 2 ? "es par" : "es impar";
    console.log(mensaje);
};
f4();
