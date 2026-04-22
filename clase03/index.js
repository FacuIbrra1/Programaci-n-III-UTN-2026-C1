/**
 * @file        index.js
 * @description Lógica del índice de navegación de la Clase 03.
 *              - openScript(): genera y abre una página HTML con el script cargado.
 *              - Filtro de búsqueda en tiempo real sobre las tarjetas del índice.
 * @subject     Programación III – UTN
 * @topic       Clase 03 – Introducción a JavaScript
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// openScript(filename, title)
//
// Genera dinámicamente una página HTML completa que carga el archivo .js
// indicado con un tag <script src> y muestra instrucciones para usar la
// consola del navegador (F12).
//
// Usa URL.createObjectURL(Blob) para abrir la página en una nueva pestaña
// sin necesidad de un servidor web ni archivos extra.
//
// @param {string} filename  - Nombre del archivo JS (ej: '01_datos.js')
// @param {string} title     - Título descriptivo para mostrar en la página
// =============================================================================
function openScript(filename, title) {
    // Construir la ruta absoluta del .js a partir de la URL actual del índice
    const base  = location.href.substring(0, location.href.lastIndexOf('/') + 1);
    const jsUrl = base + filename;

    // Apertura y cierre del tag script separados para que el parser HTML
    // de este archivo externo no los interprete como marcado
    const scriptOpen  = '<' + 'script src="' + jsUrl + '">';
    const scriptClose = '<' + '/script>';

    // HTML completo de la página que ejecutará el script seleccionado
    const html = [
        '<!DOCTYPE html>',
        '<html lang="es">',
        '<head>',
        '  <meta charset="UTF-8">',
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '  <title>' + title + ' \u2013 Clase 03 JS</title>',
        '  <style>',
        '    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }',
        '    body {',
        '      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;',
        '      background: #f0f4f8; color: #1a202c;',
        '      display: flex; flex-direction: column;',
        '      align-items: center; justify-content: center;',
        '      min-height: 100vh; padding: 2rem; text-align: center;',
        '    }',
        '    .box {',
        '      background: #fff; border-radius: 12px;',
        '      box-shadow: 0 4px 20px rgba(0,0,0,.1);',
        '      padding: 2.5rem 3rem; max-width: 520px; width: 100%;',
        '    }',
        '    h1 { font-size: 1.4rem; color: #2b4c7e; margin-bottom: .75rem; }',
        '    p  { font-size: .95rem; color: #4a5568; line-height: 1.6; margin-bottom: 1rem; }',
        '    kbd {',
        '      background: #edf2f7; border: 1px solid #cbd5e0;',
        '      border-radius: 4px; padding: .15rem .4rem;',
        '      font-size: .9rem; font-family: monospace;',
        '    }',
        '    .filename { font-size: .8rem; color: #a0aec0; margin-top: 1.5rem; }',
        '    a { color: #2b4c7e; text-decoration: none; }',
        '    a:hover { text-decoration: underline; }',
        '  </style>',
        '</head>',
        '<body>',
        '  <div class="box">',
        '    <h1>' + title + '</h1>',
        '    <p>El script <strong>' + filename + '</strong> ya se est\u00e1 ejecutando en esta p\u00e1gina.</p>',
        '    <p>',
        '      Abr\u00ed la consola del navegador con <kbd>F12</kbd>',
        '      y seleccion\u00e1 la pesta\u00f1a <strong>Console</strong>',
        '      para ver los resultados de <code>console.log()</code>.',
        '    </p>',
        '    <p class="filename">Archivo: ' + jsUrl + '</p>',
        '    <p><a href="javascript:window.close()">\u2190 Cerrar esta pesta\u00f1a</a></p>',
        '  </div>',
        '  ' + scriptOpen + scriptClose,
        '</body>',
        '</html>'
    ].join('\n');

    // Crear un Blob con el HTML generado y abrirlo en una nueva pestaña
    const blob = new Blob([html], { type: 'text/html' });
    const url  = URL.createObjectURL(blob);
    window.open(url, '_blank');
}

// =============================================================================
// Filtro de búsqueda en tiempo real
//
// Compara el texto del input con el atributo data-keywords de cada tarjeta
// y oculta las que no coinciden. Muestra un mensaje si no hay resultados.
// =============================================================================
const searchInput = document.getElementById('search-input');
const cards       = document.querySelectorAll('.card');
const noResults   = document.getElementById('no-results');

searchInput.addEventListener('input', function () {
    const query  = this.value.trim().toLowerCase();
    let visible  = 0;

    cards.forEach(function (card) {
        // data-keywords contiene palabras clave de la tarjeta para la búsqueda
        const keywords = card.dataset.keywords.toLowerCase();
        const matches  = keywords.includes(query);

        // toggle: agrega 'hidden' si NO coincide, la quita si SÍ coincide
        card.classList.toggle('hidden', !matches);

        if (matches) visible++;
    });

    // Mostrar aviso solo cuando ninguna tarjeta es visible
    noResults.style.display = visible === 0 ? 'block' : 'none';
});
