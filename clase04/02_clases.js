/**
 * @file        02_clases.js
 * @description Programación Orientada a Objetos (POO) en JavaScript ES6+:
 *              clases, constructor, propiedades públicas y privadas (#),
 *              getters, setters, métodos de instancia, miembros estáticos
 *              y ejemplos comentados de herencia y clases abstractas.
 * @subject     Programación III – UTN
 * @topic       Clase 04 – JSON, POO y Métodos de Arrays
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// CLASE Usuario – PROPIEDADES PÚBLICAS, PRIVADAS, GET/SET Y ESTÁTICAS
// =============================================================================

class Usuario {

    nombre;          // público: accesible y modificable desde fuera de la clase
    #dni;            // Protejido (#): solo accesible dentro de esta clase y las clases hijas
    _edad;           // privado (_): expuesto de forma controlada con get/set
    static estatico; // estático: pertenece a la CLASE, no a cada instancia

    // El constructor se ejecuta automáticamente al hacer new Usuario(...).
    // Recibe los parámetros iniciales e inicializa las propiedades de la instancia.
    constructor(nombre, dni) {
      this.nombre = nombre;            // asigna propiedad pública
      this.#dni = dni;                 // asigna propiedad Protejida
      this._edad = 0;                  // valor inicial de propiedad privada
      Usuario.estatico = "valor estático"; // modifica propiedad de la clase
    }
  
    // getter: permite leer _edad como si fuera una propiedad (obj.edad)
    get edad() {
      return this._edad;
    }

    // setter: permite asignar obj.edad = valor con validación opcional
    set edad(value) {
      this._edad = value;
    }

    // getter sin setter: #dni es de solo lectura desde fuera de la clase
    get dni() {
      return this.#dni;
    }

    set dni(value){
      this.#dni = value;
    }

    // Método de instancia: tiene acceso a todas las propiedades incluso las privadas
    saludar() {
      console.log(`Hola ${this.nombre}!!! tu dni es: ${this.#dni} y tu edad es ${this._edad}.`);
    }

    // Método estático: se llama como Usuario.saludarEstatico(obj), no como obj.saludarEstatico()
    // No puede usar 'this' para acceder a propiedades de instancia
    static saludarEstatico(obj) {
      obj.saludar();
    }
}


// =============================================================================
// USO DE LA CLASE
// =============================================================================

// new crea una nueva instancia y llama al constructor
const obj = new Usuario("Juan", 222);

// Las líneas siguientes causan SyntaxError porque _edad privado y #dni Protegido:
//console.log(obj._edad);
//console.log(obj.#dni);

// Acceso a propiedades públicas y getters (sin paréntesis, como si fueran propiedades)
console.log(obj.nombre); // propiedad pública
console.log(obj.dni);    // getter de #dni
console.log(obj.edad);   // getter de _edad

// Las propiedades públicas se pueden modificar directamente
obj.nombre = "Pepe";
console.log(obj.nombre);

// Intento de asignar a un getter sin setter: en modo estricto lanza TypeError,
// en modo normal simplemente no hace nada
console.log(obj.dni);
obj.dni = 0; // NO modifica #dni: no existe setter para 'dni'
console.log(obj.dni);

obj.edad = 35;
obj.dni = "35.678.468";
obj.saludar();


// =============================================================================
// EJEMPLO COMENTADO: clase Auto con toString()
// =============================================================================
// Descomentá este bloque para ver el ejemplo de una clase con método toString().

// class Auto
// {
//   precio;     // público
//   color;      // público
//   _patente;   // privado

//   constructor(patente, color, precio) {
//     this._patente = patente;
//     this.color    = color;
//     this.precio   = precio;
//   }

//   // toString() es convención de JS: lo llaman automáticamente en interpolaciones
//   toString() {
//     return `PATENTE:${this._patente} - COLOR:${this.color} - PRECIO:${this.precio}`;
//   }
// }

// const auto = new Auto("abc123cde", "rojo", 500);
// console.log(auto.toString());


// =============================================================================
// EJEMPLO COMENTADO: HERENCIA con extends y super
// =============================================================================
// 'extends' establece la relación padre-hijo entre clases.
// 'super()' llama al constructor del padre para inicializar sus propiedades.
// 'super.metodo()' llama a un método del padre desde el hijo.

// class Vehiculo {
//   _marca;

//   constructor(marca) {
//     this._marca = marca;
//   }

//   get marca() {
//     return this._marca;
//   }

//   toString() {
//     return `MARCA: ${this._marca}`;
//   }
// }

// class Auto extends Vehiculo {
//   color;

//   constructor(marca, color) {
//     super(marca);      // OBLIGATORIO: llamar al constructor del padre antes de usar 'this'
//     this.color = color;
//   }

//   toString() {
//     return `${super.toString()} - COLOR: ${this.color} ${super.marca}`;
//   }
// }

// const auto = new Auto("ford", "rojo");
// console.log(auto.toString());


// =============================================================================
// EJEMPLO COMENTADO: CLASE ABSTRACTA (patrón en JS puro)
// =============================================================================
// JS no tiene clases abstractas nativas como Java/C#.
// El patrón consiste en lanzar un Error en el constructor si 'this.constructor'
// apunta a la propia clase abstracta (señal de instanciación directa).

// class Abstracta {
//   constructor() {
//     // Impide instanciar Abstracta directamente; solo sus subclases
//     if (this.constructor === Abstracta) {
//       throw new Error("No se puede instanciar una clase abstracta.");
//     }
//   }
// }

// class Concreta extends Abstracta {
//   constructor() {
//     super(); // llama al constructor de Abstracta (pasa la guardia porque this.constructor === Concreta)
//   }
// }

// const objConc = new Concreta(); // OK
// const objAbst = new Abstracta(); // Error: No se puede instanciar una clase abstracta.