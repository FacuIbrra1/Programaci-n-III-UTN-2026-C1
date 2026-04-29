/**
 * @file        01_json.js
 * @description Introducción a JSON (JavaScript Object Notation) en JavaScript:
 *              objetos literales, notaciones de acceso, agregar/quitar propiedades,
 *              JSON.parse(), JSON.stringify(), arrays de objetos y objetos con funciones.
 * @subject     Programación III – UTN
 * @topic       Clase 04 – JSON, POO y Métodos de Arrays
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// OBJETOS LITERALES – NOTACIÓN DE PUNTO Y DE CORCHETES
// =============================================================================

// Un objeto literal es una colección de pares clave-valor entre llaves.
// Las claves (propiedades) pueden estar entre comillas o sin ellas.
const persona = { "nombre" : "Juan", "edad" : 35 };
console.log(persona);

// Acceso con notación de punto: persona.propiedad
let cadenaJSON = `objeto = ${persona.nombre} - ${persona.edad}`;
console.log(cadenaJSON);

// Acceso con notación de corchetes: persona["propiedad"]
// Útil cuando el nombre de la propiedad es dinámico o contiene caracteres especiales
cadenaJSON = `array = ${persona["nombre"]} - ${persona["edad"]}`;
console.log(cadenaJSON);

// =============================================================================
// AGREGAR Y QUITAR PROPIEDADES EN TIEMPO DE EJECUCIÓN
// =============================================================================

// En JS los objetos son dinámicos: se pueden agregar propiedades después de crearlos
persona.apellido = "Perez";      // notación de punto
persona["dni"] = 222;            // notación de corchetes
console.log(persona);

// delete elimina permanentemente la propiedad del objeto
delete persona.dni;
console.log(persona);

// =============================================================================
// JSON.parse() – DE CADENA JSON A OBJETO JS
// =============================================================================

// JSON.parse() recibe un string con formato JSON y lo convierte en un objeto JS.
// El string debe tener comillas dobles obligatoriamente (estándar JSON).
const otraPersona = JSON.parse(`{"prop_1":"valor_1", "prop_2":"valor_2"}`);
console.log(otraPersona);

// Una vez parseado, el objeto JS puede modificarse normalmente
otraPersona.prop_3 = "valor_3";

// =============================================================================
// JSON.stringify() – DE OBJETO JS A CADENA JSON
// =============================================================================

// JSON.stringify() hace el camino inverso: convierte un objeto JS en un string JSON.
// IMPORTANTE: las funciones y los campos undefined son IGNORADOS en la serialización.
let otraCadenaJSON = JSON.stringify(otraPersona);
console.log(otraCadenaJSON);

// =============================================================================
// ARRAYS DE OBJETOS – JSON COMPLEJO
// =============================================================================

// Un array puede contener objetos como elementos: estructura muy común en APIs REST.
const personas = [
    { "nombre" : "Juan",   "edad" : 35 },
    { "nombre" : "Anibal", "edad" : 26 }
];
console.log(personas);

// Recorrido con forEach y fat arrow: conciso para operaciones simples
personas.forEach(p => {
    console.log(p);
});

// Recorrido con for clásico: útil cuando se necesita el índice
for (let index = 0; index < personas.length; index++) {
    const p = personas[index];
    console.log(p);
}

// =============================================================================
// OBJETOS CON FUNCIONES COMO PROPIEDADES
// =============================================================================

// En JS las funciones son valores: pueden ser propiedades de un objeto.
// Dentro del método, 'this' hace referencia al propio objeto.
let cadena = "";

const personaFunc = {
    "nombre"  : "Jorge",
    "edad"    : 23,
    // Método: función definida como propiedad del objeto
    "saludar" : function () {
        return `Hola soy ${this.nombre} y tengo ${this.edad} años.`;
    }
};

cadena = personaFunc.saludar();
console.log(cadena);

// También se pueden agregar propiedades complejas (arrays de objetos) dinámicamente
personaFunc.amigos = [
    { "nombre" : "Juan",   "edad" : 35 },
    { "nombre" : "Anibal", "edad" : 26 }
];

// Método agregado dinámicamente que recorre el array interno con 'this'
personaFunc.saludarAmigos = function () {
    let ret = "";
    for (let i = 0; i < this.amigos.length; i++) {
        ret += `Hola soy ${this.amigos[i].nombre} y tengo ${this.amigos[i].edad} años.\n`;
    }
    return ret;
};

console.log(personaFunc.saludarAmigos());