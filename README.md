# Programación III – UTN

Repositorio de clases y ejemplos prácticos de la materia **Programación III** de la Universidad Tecnológica Nacional (UTN-FRA).

📄 [Ver índice general en GitHub Pages](https://rgplazas.github.io/Programaci-n-III-UTN-2026-C1/)

---

## Contenido del repositorio

| Clase | Tema | Estado |
|-------|------|--------|
| [Clase 01](./clase01/index.html) | Introducción a HTML5 | ✅ Disponible |
| [Clase 02](./clase02/index.html) | Introducción a CSS3 | ✅ Disponible |
| [Clase 03](./clase03/index.html) | Introducción a JavaScript | ✅ Disponible |
| [Clase 04](./clase04/index.html) | JSON, POO y Métodos de Arrays | ✅ Disponible |
| Clase 05 | Formularios, DOM, Selectores y Eventos | 🔧 En desarrollo |
| Clase 06 | HTTP, AJAX y XMLHttpRequest | 🔧 En desarrollo |
| Clase 07 | fetch, Promesas, async/await y CORS | 🔧 En desarrollo |
| Clase 08 | Bootstrap: grillas, Flexbox y clases utilitarias | 🔧 En desarrollo |

---

## Detalle de clases

### ✅ Clase 01 – Introducción a HTML5

Estructura semántica de documentos web con los elementos fundamentales de HTML5.

**Archivos:**
- `clase01_01.html` – Estructura básica: `header`, `nav`, `main`, `footer`
- `clase01_02.html` – Formatos de texto, párrafos y separadores
- `clase01_03.html` – Imágenes y mapas de imagen (`<map>`)
- `clase01_04.html` – Multimedia: `<audio>`, `<video>` e `<iframe>`
- `clase01_05.html` – Listas: `<ul>`, `<ol>` y `<dl>`
- `clase01_06.html` – Tablas con `<thead>`, `<tbody>`, `<tfoot>` y celdas combinadas
- `clase01_07.html` – Contenedores: `<div>` (bloque) vs `<span>` (línea)
- `clase01_08.html` – Tags semánticos: `<strong>`, `<em>`, `<b>`, `<i>` y metas
- `clase01_09.html` – Estructura semántica completa con `<aside>` y `<section>`

---

### ✅ Clase 02 – Introducción a CSS3

Aplicación de estilos, selectores, layouts y animaciones con CSS3.

**Archivos:**
- `clase02-01.html` – Formas de aplicar CSS: inline, `<style>`, externo e `@import`
- `clase02-02.html` – Selectores de clase
- `clase02-03.html` – Selectores ID y pseudoclases (`:link`, `:hover`, `:visited`)
- `clase02-04.html` – Combinando múltiples clases
- `clase02-05.html` – Selectores descendentes
- `clase02-06.html` – Unidades viewport (`vw`, `vh`)
- `clase02-07.html` – Media queries y diseño responsivo
- `clase02-08.html` – Flexbox: `flex-direction`, `justify-content`, `flex-wrap`
- `clase02-09.html` – Colores: nombres, hexadecimal y `rgba()`
- `clase02-10.html` – Bordes redondeados (`border-radius`)
- `clase02-11.html` – Animaciones CSS (`@keyframes`)
- `animacion1.html` – Animación con propiedad abreviada `animation`
- `animacion2.html` – Animación con propiedades individuales `animation-*`

**Hojas de estilo externas (`CSS/`):**
- `Estilos.css`, `Estilos2.css`, `EstilosClases.css`, `EstilosID-Pseudo.css`, `Estilos-contenedores.css`

---

### ✅ Clase 03 – Introducción a JavaScript

Variables, tipos de datos, estructuras y funciones en JavaScript ES6+.

**Archivos:**
- `01_datos.js` – `var`, `let`, `const`, tipos primitivos, `==` vs `===`, template literals
- `02_datos.js` – Arrays: `forEach`, `push`, `pop`, `shift`, `join`, `indexOf`, `includes`
- `03_funciones.js` – Funciones: declaración, first-class, parámetros default y rest
- `04_fatArrow.js` – Funciones flecha (`=>`): cuerpo conciso y cuerpo en bloque

---

### ✅ Clase 04 – JSON, POO y Métodos de Arrays

Objetos JSON, Programación Orientada a Objetos con clases ES6+ y métodos funcionales de arrays.

**Archivos:**
- `01_json.js` – Objetos literales, notación de punto/corchetes, `JSON.parse()`, `JSON.stringify()`, arrays de objetos y métodos
- `02_clases.js` – Clases: `constructor`, propiedades privadas (`#`), `get`/`set`, `static`, herencia con `extends`/`super` y clases abstractas
- `03_map.js` – `Array.map()`: transformación de cada elemento; comparación con `for`, function expression y fat arrow
- `04_filter.js` – `Array.filter()`: selección por condición; comparación con `for`, function expression y fat arrow
- `05_reduce.js` – `Array.reduce()`: acumulación en un único valor; visualización del acumulador paso a paso
- `06_ejemplo.js` – Ejemplo integrador: IIFE como fuente de datos, encadenamiento `filter().map()` y `reduce()`

---

### 🔧 Clase 05 – Formularios, DOM, Selectores y Eventos *(próximamente)*

- Formularios HTML y elementos asociados: `<input>`, `<select>`, `<textarea>`, validación
- Document Object Model (DOM): árbol de nodos, acceso y modificación
- Selectores: `getElementById`, `querySelector`, `querySelectorAll`
- Eventos: `addEventListener`, propagación, delegación de eventos

---

### 🔧 Clase 06 – HTTP, AJAX y XMLHttpRequest *(próximamente)*

- ¿Qué es una petición HTTP? Métodos GET, POST, PUT, DELETE
- AJAX: comunicación asíncrona sin recargar la página
- Tecnologías y métodos disponibles
- El objeto `XMLHttpRequest`: ciclo de vida y manejo de respuestas

---

### 🔧 Clase 07 – fetch, Promesas, async/await y CORS *(próximamente)*

- API `fetch`: sintaxis y opciones
- Promesas en JavaScript: `then()`, `catch()`, `finally()`, `Promise.all()`
- `async` / `await`: código asíncrono con sintaxis sincrónica
- CORS: qué es, por qué ocurre y cómo manejarlo

---

### 🔧 Clase 08 – Bootstrap *(próximamente)*

- Generalidades: qué es Bootstrap y cuándo usarlo
- ¿Dónde obtener Bootstrap? CDN vs instalación local
- Sistema de grillas: filas, columnas y breakpoints
- Flexbox con Bootstrap: clases utilitarias `d-flex`, `justify-content-*`, `align-items-*`
- Clases utilitarias: espaciado, tipografía, colores y componentes

---

## Tecnologías utilizadas

- **HTML5** – Estructura semántica
- **CSS3** – Estilos, animaciones y layouts
- **JavaScript ES6+** – Lógica e interactividad
- **Bootstrap** *(Clase 08)* – Framework CSS

## Cómo usar este repositorio

1. Clonar o descargar el repositorio
2. Abrir `index.html` en la raíz con cualquier navegador, o usar la extensión **Live Server** de VS Code
3. Navegar entre clases usando los botones del encabezado de cada página
4. Para los archivos `.js` de la Clase 03, abrir la consola del navegador con **F12 → Console**

## Autor

**UTN-FRA** – Programación III · 2026
