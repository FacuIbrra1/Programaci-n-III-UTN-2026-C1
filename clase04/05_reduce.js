/**
 * @file        05_reduce.js
 * @description Método Array.reduce() en JavaScript:
 *              "reduce" (acumula) todos los elementos de un array en UN ÚNICO
 *              valor (número, string, objeto, etc.). Comparación entre forma
 *              tradicional, reduce con function expression y con fat arrow.
 *              Incluye visualización paso a paso del acumulador.
 * @subject     Programación III – UTN
 * @topic       Clase 04 – JSON, POO y Métodos de Arrays
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// Array.reduce() – ACUMULACIÓN EN UN ÚNICO VALOR
// =============================================================================
// reduce() recorre el array y acumula un resultado.
// Firma: array.reduce(function(acumulador, elementoActual, indice, array) { ... }, valorInicial)
// - 'acumulador': valor que se arrastra de iteración en iteración
// - 'elementoActual': elemento procesado en la iteración actual
// - 'valorInicial': valor del acumulador en la primera iteración (recomendado siempre)

// #1 – SUMAR TODOS LOS NÚMEROS
const nums = [1, 2, 3, 4, 5];
let total = 0;

// a) Forma tradicional: acumula manualmente con +=
for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}
console.log(total);

// b) Con reduce y function expression: 'anterior' es el acumulador, 'actual' el elemento
total = nums.reduce(function (anterior, actual) {
    return anterior + actual;
}, 0); // 0 es el valor inicial del acumulador
console.log(total);

// Visualización del funcionamiento interno de reduce:
// cada iteración muestra cómo evoluciona el acumulador
total = nums.reduce(function (anterior, actual, index) {
    var valor = anterior + actual;
    console.log("Valor anterior: " + anterior + "; valor actual: " + actual +
        "; iteración nro.: " + (index + 1));
    return valor;
}, 0);
console.log(total);

// c) Con reduce y fat arrow: expresión concisa para acumulaciones simples
total = nums.reduce((anterior, actual) => anterior + actual, 0);
console.log(total);

// =============================================================================
// reduce() SOBRE ARRAY DE OBJETOS – SUMAR UNA PROPIEDAD
// =============================================================================

// #2 – OBTENER EL STOCK TOTAL DE TODOS LOS PRODUCTOS
// reduce() accede a una propiedad del objeto en cada iteración
const productosInventario = [
    { id: "1", nombre: "Remera",     categoria: "Ropa",       stock: 150 },
    { id: "2", nombre: "Zapatillas", categoria: "Accesorios", stock: 500 },
    { id: "3", nombre: "Zapatos",    categoria: "Accesorios", stock: 200 },
    { id: "4", nombre: "Shorts",     categoria: "Ropa",       stock: 950 },
    { id: "5", nombre: "Corbata",    categoria: "Ropa",       stock: 800 }
];

// a) Forma tradicional (productosTotal se declara pero no se usa en este ejemplo)
let productosTotal = [];
let totalStock = 0;
for (let i = 0; i < productosInventario.length; i++) {
    totalStock += productosInventario[i].stock; // suma la propiedad 'stock' de cada objeto
}
console.log(totalStock);

// b) Con reduce: 'actual.stock' accede a la propiedad del objeto en cada iteración
totalStock = productosInventario.reduce(function (anterior, actual, index, array) {
    return anterior + actual.stock;
}, 0);
console.log(totalStock);

// c) Con reduce y fat arrow
totalStock = productosInventario.reduce((anterior, actual, index, array) => anterior + actual.stock, 0);
console.log(totalStock);