/**
 * @file        01_datos.js
 * @description Tipos de datos y variables en JavaScript ES6+:
 *              var / let / const, tipos primitivos (string, number, boolean,
 *              null, undefined, symbol), operadores de igualdad (== vs ===),
 *              diferencia de ámbito entre var y let, y plantillas literales.
 * @subject     Programación III – UTN
 * @topic       Clase 03 – Introducción a JavaScript
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// DECLARACIÓN DE VARIABLES
// =============================================================================

var variable = "hola";      // var: ámbito de función (o global si está fuera)
let otraVariable = 'chau';  // let: ámbito de bloque (recomendado sobre var)
const PI = 3.141592;        // const: ámbito de bloque, valor inmutable

console.log(variable);
console.log(otraVariable);
console.log(PI);

// PI = 0; // Error: Assignment to constant variable
// console.log(variable + " " + otraVariable);
// console.log(`${variable} ${otraVariable}`);

// =============================================================================
// TIPOS DE DATOS PRIMITIVOS
// =============================================================================

// typeof devuelve el tipo del operando como string
console.log(typeof(variable));     // "string"
console.log(typeof(otraVariable)); // "string"
console.log(typeof(PI));           // "number"

// boolean: true / false
let esVerdad = true;
// esVerdad = 0;       // JavaScript permite reasignar a otro tipo con let
// esVerdad = "false"; // (tipado dinámico)
console.log(typeof(esVerdad)); // "boolean"

// Subtipos numéricos: decimal, hexadecimal (0x), binario (0b), octal (0o)
let entero  = 1;
let decimal = 10.59;
let hexa    = 0xFF55AA;   // hexadecimal → 16733610 en decimal
let binario = 0b1001001;  // binario     → 73 en decimal
let octal   = 0o7125;     // octal       → 3669 en decimal

console.log(entero + " - " + decimal + " - " + hexa + " - " + binario + " - " + octal);

// null: ausencia intencional de valor (typeof devuelve "object", comportamiento histórico de JS)
let obj = null;
// undefined: variable declarada pero sin valor asignado
let indefinido;
// symbol: valor único e irrepetible, útil como clave de propiedades
let simbolo = Symbol("es un símbolo");

console.log(obj        + " - " + typeof(obj));               // "null - object"
console.log(indefinido + " - " + typeof(indefinido));        // "undefined - undefined"
console.log(simbolo.toString() + " - " + typeof(simbolo));   // "Symbol(es un símbolo) - symbol"

// =============================================================================
// OPERADOR == (igualdad abstracta) vs OPERADOR === (igualdad estricta)
// =============================================================================

// == realiza coerción de tipo antes de comparar
if (entero == "1") {
    console.log("son iguales (==): coerción numérico → string");
}

if (entero == 1) {
    console.log("son iguales (==): mismo tipo y valor");
}

// === no realiza coerción: exige mismo tipo Y mismo valor
if (entero === "1") {
    console.log("son idénticos (===)");
} else {
    console.log("no son idénticos (===): distinto tipo (number vs string)");
}

if (entero === 1) {
    console.log("son idénticos (===): mismo tipo y valor");
}

// =============================================================================
// LET vs VAR – DIFERENCIA DE ÁMBITO
// =============================================================================

// var tiene ámbito de función: la redeclaración dentro del if afecta al ámbito externo
var a = 123;
console.log(a); // 123

if (true) {
    var a = 456;        // sobreescribe la var externa
    console.log(a);     // 456
}
console.log(a);         // 456 (la var externa fue modificada)

// let tiene ámbito de bloque: la redeclaración dentro del if es una variable nueva
let b = 123;
console.log(b); // 123

if (true) {
    let b = 456;        // variable nueva, solo vive dentro de este bloque
    console.log(b);     // 456
}
console.log(b);         // 123 (la let externa no fue modificada)

// =============================================================================
// PLANTILLAS LITERALES (Template Literals)
// =============================================================================

// JavaScript es de tipado dinámico: una variable puede cambiar de tipo
let cosa = "algo";
cosa = 10;
cosa = true;

// Cadenas con comillas dobles, simples o tilde invertida (backtick)
let cadena      = "hola";
let otraCadena  = 'mundo';
let masCadenas  = `con tilde invertido`;

console.log(cadena);
console.log(otraCadena);
console.log(masCadenas);

// Concatenación tradicional con el operador +
let sinTemplate = cadena + " " + otraCadena + " " + masCadenas + "\n" + cosa + ".";
console.log(sinTemplate);

// Template literal: interpolación de variables con ${expresión} y saltos de línea con \n
let template = `concatenando: ${cadena} ${otraCadena} ${masCadenas}.\n${cosa}.`;
console.log(template);