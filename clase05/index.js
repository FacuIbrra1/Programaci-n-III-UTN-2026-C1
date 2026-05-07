/**
 * @file        index.js
 * @description Lógica del índice de navegación de la Clase 05.
 *              - openScript(): genera y abre una página HTML con el script JS cargado.
 *              - Filtro de búsqueda en tiempo real sobre las tarjetas del índice.
 * @subject     Programación III – UTN
 * @topic       Clase 05 – Formularios, DOM, Selectores y Eventos
 * @author      UTN-FRA
 * @version     1.0.0
 * @since       2026
 */

// =============================================================================
// openScript(filename, title)
//
// Genera dinámicamente una página HTML que carga el archivo JS indicado
// con <script src> y muestra instrucciones para usar la consola (F12).
// Usado solo para los archivos JS de la subcarpeta js/.
//
// @param {string} filename  - Ruta relativa del archivo JS (ej: 'js/dom.js')
// @param {string} title     - Título descriptivo para mostrar en la página
// =============================================================================
function openScript(filename, title) {
    const base  = location.href.substring(0, location.href.lastIndexOf('/') + 1);
    const jsUrl = base + filename;

    const scriptOpen  = '<' + 'script src="' + jsUrl + '">';
    const scriptClose = '<' + '/script>';

    const html = [
        '<!DOCTYPE html>',
        '<html lang="es">',
        '<head>',
        '  <meta charset="UTF-8">',
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '  <title>' + title + ' \u2013 Clase 05 JS</title>',
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
        '    h1 { font-size: 1.4rem; color: #2c7a4b; margin-bottom: .75rem; }',
        '    p  { font-size: .95rem; color: #4a5568; line-height: 1.6; margin-bottom: 1rem; }',
        '    kbd {',
        '      background: #edf2f7; border: 1px solid #cbd5e0;',
        '      border-radius: 4px; padding: .15rem .4rem;',
        '      font-size: .9rem; font-family: monospace;',
        '    }',
        '    .filename { font-size: .8rem; color: #a0aec0; margin-top: 1.5rem; }',
        '    a { color: #2c7a4b; text-decoration: none; }',
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

    const blob = new Blob([html], { type: 'text/html' });
    const url  = URL.createObjectURL(blob);
    window.open(url, '_blank');
}

// =============================================================================
// Filtro de búsqueda en tiempo real
// =============================================================================
const searchInput = document.getElementById('search-input');
const cards       = document.querySelectorAll('.card');
const noResults   = document.getElementById('no-results');

searchInput.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach(function (card) {
        const keywords = card.dataset.keywords.toLowerCase();
        const matches  = keywords.includes(query);
        card.classList.toggle('hidden', !matches);
        if (matches) visible++;
    });

    noResults.style.display = visible === 0 ? 'block' : 'none';
});
