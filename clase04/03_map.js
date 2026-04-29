/**
 * @file        03_map.js
 * @description Método Array.map() en JavaScript:
 *              transforma cada elemento de un array y retorna un NUEVO array
 *              del mismo tamaño. Comparación entre forma tradicional (for),
 *              map con function expression y map con fat arrow.
 * @subject     Programación III – UTN
 * @topic       Clase 04 – JSON, POO y Métodos de Arrays
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// Array.map() – TRANSFORMACIÓN DE CADA ELEMENTO
// =============================================================================
// map() recorre el array original, aplica la función a cada elemento
// y devuelve un NUEVO array con los resultados. El array original NO se modifica.
// Firma: array.map(function(elemento, indice, arrayOriginal) { ... })

// #1 – CALCULAR EL CUADRADO DE CADA ELEMENTO
const numeros = [1, 2, 3, 4, 5];
let cuadrados = [];

// a) Forma tradicional con for: manual, verboso
for (let i = 0; i < numeros.length; i++) {
    cuadrados[i] = numeros[i] * numeros[i];
}
console.log(cuadrados);

// b) Con map y function expression: más declarativo
cuadrados = numeros.map(function (numero) {
    return numero * numero;
});
console.log(cuadrados);

// c) Con map y fat arrow: conciso, una sola expresión con retorno implícito
cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);

// =============================================================================
// map() SOBRE ARRAY DE OBJETOS – EXTRAER UNA PROPIEDAD
// =============================================================================

// #2 – OBTENER SOLO LOS NOMBRES DE LOS PRODUCTOS
// map() recibe (elemento, índice, arrayCompleto); índice y array son opcionales
const productos = [
    { id: "1", nombre: "Remera",     categoria: "Ropa" },
    { id: "2", nombre: "Zapatillas", categoria: "Accesorios" },
    { id: "3", nombre: "Zapatos",    categoria: "Accesorios" },
    { id: "4", nombre: "Shorts",     categoria: "Ropa" },
    { id: "5", nombre: "Corbata",    categoria: "Ropa" }
];

// a) Forma tradicional
let nombreDeProductos = [];
for (let i = 0; i < productos.length; i++) {
    nombreDeProductos.push(productos[i].nombre);
}
console.log(nombreDeProductos);

// b) Con map y function expression (usando los 3 parámetros disponibles)
nombreDeProductos = productos.map(function (producto, index, array) {
    return producto.nombre;
});
console.log(nombreDeProductos);

// c) Con map y fat arrow: solo se usa el primer parámetro, los demás se omiten
nombreDeProductos = productos.map((producto, index, array) => producto.nombre);
console.log(nombreDeProductos);
