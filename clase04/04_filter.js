/**
 * @file        04_filter.js
 * @description Método Array.filter() en JavaScript:
 *              selecciona elementos de un array que cumplen una condición
 *              y retorna un NUEVO array (puede ser más pequeño o vacío).
 *              Comparación entre forma tradicional (for), filter con
 *              function expression y filter con fat arrow.
 * @subject     Programación III – UTN
 * @topic       Clase 04 – JSON, POO y Métodos de Arrays
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// Array.filter() – SELECCIÓN DE ELEMENTOS POR CONDICIÓN
// =============================================================================
// filter() recorre el array y llama a la función por cada elemento.
// Si la función retorna true, el elemento SE INCLUYE en el nuevo array.
// Si retorna false, se descarta. El array original NO se modifica.
// Firma: array.filter(function(elemento, indice, arrayOriginal) { ... })

// #1 – OBTENER TODOS LOS NÚMEROS IMPARES
const valores = [1, 2, 3, 4, 5];
let impares = [];

// a) Forma tradicional: se necesita un contador manual para el índice del resultado
for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2 === 1) {  // % 2 === 1 significa que es impar
        impares.push(valores[i]);
    }
}
console.log(impares);

// b) Con filter y function expression: más legible, sin índice manual
impares = valores.filter(function (numero) {
    return numero % 2 === 1;
});
console.log(impares);

// c) Con filter y fat arrow: conciso, retorno implícito de la condición
impares = valores.filter(numero => numero % 2 === 1);
console.log(impares);

// =============================================================================
// filter() SOBRE ARRAY DE OBJETOS – FILTRAR POR PROPIEDAD
// =============================================================================

// #2 – OBTENER SOLO LOS PRODUCTOS DE LA CATEGORÍA 'ACCESORIOS'
// Notar que 'var' en el for tradicional tiene ámbito de función (no de bloque)
const productosStock = [
    { id: "1", nombre: "Remera",     categoria: "Ropa",       stock: 150 },
    { id: "2", nombre: "Zapatillas", categoria: "Accesorios", stock: 500 },
    { id: "3", nombre: "Zapatos",    categoria: "Accesorios", stock: 200 },
    { id: "4", nombre: "Shorts",     categoria: "Ropa",       stock: 950 },
    { id: "5", nombre: "Corbata",    categoria: "Ropa",       stock: 800 }
];

// a) Forma tradicional con for (usa var, con ámbito más amplio que let)
let productosAccesorios = [];
for (var i = 0; i < productosStock.length; i++) {
    if (productosStock[i].categoria === "Accesorios") {
        productosAccesorios.push(productosStock[i]);
    }
}
console.log(productosAccesorios);

// b) Con filter y function expression (parámetros: elemento, índice, array completo)
productosAccesorios = productosStock.filter(function (producto, index, array) {
    return producto.categoria === "Accesorios";
});
console.log(productosAccesorios);

// c) Con filter y fat arrow: expresión de condición directa como retorno implícito
productosAccesorios = productosStock.filter(producto => producto.categoria === "Accesorios");
console.log(productosAccesorios);
