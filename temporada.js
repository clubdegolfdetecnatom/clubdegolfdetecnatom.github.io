/* ==========================================================================
   ✏️ EDITAR AQUÍ AL CAMBIAR DE TEMPORADA

   Este archivo lo cargan todas las páginas de la web. Decide a dónde lleva y
   qué año muestra el botón verde "Temporada …" de la cabecera.

   Al abrir una temporada nueva basta con cambiar las dos líneas de abajo:
     anio   → el año de la temporada en curso
     enlace → la dirección de la parte interactiva de esa temporada
   ========================================================================== */
window.TEMPORADA_ACTUAL = {
  anio: 2027,
  enlace: 'https://clubdegolfdetecnatom.github.io/temporada2027.html'   // al abrir el portal 2027: 'https://clubdegolfdetecnatom.github.io/campeonato2027/'
};

/* ---------- a partir de aquí no hace falta tocar nada ---------- */
(function () {
  function ponerBoton() {
    var t = window.TEMPORADA_ACTUAL;
    document.querySelectorAll('.boton-temporada').forEach(function (a) {
      a.href = t.enlace;
      a.setAttribute('aria-label', 'Temporada ' + t.anio);
      var anio = a.querySelector('.anio-temporada');
      if (anio) anio.textContent = t.anio;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ponerBoton);
  else ponerBoton();
})();
