/**
 * @file        03_funciones.js
 * @description Funciones en JavaScript ES6+: declaración clásica, funciones
 *              como valores de primera clase, parámetros opcionales,
 *              parámetros predeterminados (default parameters) y
 *              parámetros rest (...rest).
 * @subject     Programación III – UTN
 * @topic       Clase 03 – Introducción a JavaScript
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// FUNCIONES BÁSICAS
// =============================================================================

// Declaración de función con la palabra clave function (function declaration)
// Disponible en todo el ámbito gracias al hoisting

/** Suma dos números y devuelve el resultado. */
function sumar(a, b) {
    return a + b;
}

/** Devuelve un saludo personalizado usando template literal. */
function saludar(nombre) {
    return `Hola ${nombre}`;
}

/** Imprime una despedida en consola (no devuelve valor → undefined). */
function despedir() {
    console.log("Chau!");
}

// =============================================================================
// FUNCIONES COMO VARIABLES (First-class functions)
// =============================================================================

// En JS las funciones son objetos: pueden asignarse a variables,
// pasarse como argumentos y devolverse como resultado

const miFuncion = sumar;         // miFuncion apunta a la misma función que sumar
console.log(miFuncion(5, 4));    // 9

// Función anónima asignada a una variable (function expression)
const miVariable = function () {
    console.log("hola");
};
miVariable(); // "hola"

// despedir() no devuelve nada → varDespedir = undefined
// llamar varDespedir() generaría TypeError: no es una función
const varDespedir = despedir();
// console.log(varDespedir()); // TypeError: varDespedir is not a function

const miOtraFuncion = saludar;
console.log(miOtraFuncion("Juan")); // "Hola Juan"

// =============================================================================
// PARÁMETROS OPCIONALES
// =============================================================================

// En JavaScript TODOS los parámetros son opcionales:
// si no se pasan, su valor es undefined (falsy → se puede verificar con if)

/**
 * Devuelve nombre y apellido juntos, o solo el nombre si el apellido no se pasa.
 * @param {string} nombre
 * @param {string} [apellido] - Parámetro opcional
 */
function nombreApellido(nombre, apellido) {
    if (apellido) {
        return `${nombre}  ${apellido}`;
    } else {
        return nombre;
    }
}

let nombre     = nombreApellido("Juan", "Perez"); // "Juan  Perez"
let otroNombre = nombreApellido("Juan");          // "Juan"

console.log(nombre);
console.log(otroNombre);

// =============================================================================
// PARÁMETROS PREDETERMINADOS (Default Parameters – ES6)
// =============================================================================

// Si el argumento no se pasa (o es undefined), se usa el valor por defecto

/**
 * Genera el nombre completo, opcionalmente con cada parte capitalizada.
 * @param {string}  nombre
 * @param {string}  apellido
 * @param {boolean} [capitalizado=false] - Valor por defecto: false
 */
function generarNombreCompleto(nombre, apellido, capitalizado = false) {
    let cadena;
    if (capitalizado)
        cadena = capitalizar(nombre) + " " + capitalizar(apellido);
    else
        cadena = nombreApellido(nombre, apellido);

    return cadena;
}

/**
 * Capitaliza una cadena: primera letra en mayúscula, el resto en minúscula.
 * @param {string} cadena
 * @returns {string}
 */
function capitalizar(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
}

console.log(generarNombreCompleto("tony", "stark", true)); // "Tony Stark"

// =============================================================================
// PARÁMETROS REST (...rest) – ES6
// =============================================================================

// El operador rest (...) agrupa todos los argumentos extra en un array
// Debe ser el ÚLTIMO parámetro de la función

/**
 * Arma el nombre completo uniendo el primer parámetro con los restantes.
 * @param {string}    nombre               - Primer nombre
 * @param {...string} losDemasParametros    - Resto de nombres/apellidos
 * @returns {string}
 */
function completarNombreApellido(nombre, ...losDemasParametros) {
    return nombre + " " + losDemasParametros.join(" ");
}

// Nota: en el código original se llama CompletarNombreApellido (mayúscula)
// lo que generaría ReferenceError. Se corrige a minúscula para que funcione.
let superman = completarNombreApellido("Clark", "Joseph", "Kent");
let ironman  = completarNombreApellido("Anthony", "Edward", "Tony", "Stark");

console.log(superman); // "Clark Joseph Kent"
console.log(ironman);  // "Anthony Edward Tony Stark"
