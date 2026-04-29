/**
 * @file        06_ejemplo.js
 * @description Ejemplo integrador de map(), filter() y reduce() sobre un
 *              array de objetos generado con una IIFE (Immediately Invoked
 *              Function Expression). Demuestra encadenamiento de métodos
 *              y uso combinado en un caso real.
 * @subject     Programación III – UTN
 * @topic       Clase 04 – JSON, POO y Métodos de Arrays
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// IIFE (Immediately Invoked Function Expression) COMO FUENTE DE DATOS
// =============================================================================
// Una IIFE es una función que se define y se ejecuta en el mismo momento.
// Se usa para encapsular lógica y evitar contaminar el scope global.
// Aquí simula una fuente de datos externa (como una API).
const DATA = (() => {
    const d = [
        { "nombre": "Juana",   "sexo": "F", "edad": 25 },
        { "nombre": "Roberto", "sexo": "M", "edad": 40 },
        { "nombre": "Julian",  "sexo": "M", "edad": 35 }
    ];
    return d;
})();

// Alias para usar el array de forma más descriptiva en el resto del código
const usuarios = DATA;

// =============================================================================
// RECORRIDO CON for CLÁSICO
// =============================================================================
// Acceso por índice: notación de punto para leer cada propiedad del objeto
for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nombre + " - " + usuarios[i].sexo + " - " + usuarios[i].edad);
}

// =============================================================================
// map() – EXTRAER SOLO LOS NOMBRES
// =============================================================================
// map() transforma cada objeto en solo su propiedad 'nombre'
// Resultado: nuevo array de strings con los nombres
const soloNombres = usuarios.map((item, i, usuarios) => item.nombre);
console.log(soloNombres);

// =============================================================================
// filter() – FILTRAR POR INICIAL
// =============================================================================
// String.startsWith() devuelve true si el string comienza con el argumento.
// filter() retorna solo los objetos cuyo nombre empieza con "J".
const inicialJota = usuarios.filter(usuario => usuario.nombre.startsWith("J"));
console.log(inicialJota);

// =============================================================================
// reduce() – CALCULAR LA SUMA DE EDADES
// =============================================================================
// reduce() acumula la propiedad 'edad' de cada objeto.
// 'anterior' arranca en 0 (valor inicial) y suma la edad de cada usuario.
const edadUsuarios = usuarios.reduce((anterior, siguiente) => anterior + siguiente.edad, 0);
console.log(edadUsuarios);

// =============================================================================
// ENCADENAMIENTO: filter() + map()
// =============================================================================
// Se pueden encadenar métodos de array: el resultado de uno es la entrada del siguiente.
// Aquí: primero filtramos los usuarios femeninos, luego extraemos solo sus nombres.
// La función flecha sin parámetros usa () y retorna el resultado del encadenamiento.
const nombresUsuariosFemeninos = () => {
    return DATA
        .filter(user => user.sexo === 'F')  // paso 1: solo los de sexo 'F'
        .map(user => user.nombre);           // paso 2: de esos, solo el nombre
};

console.log(nombresUsuariosFemeninos());
