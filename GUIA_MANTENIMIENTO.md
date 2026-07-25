# Guía de mantenimiento — Web del Club de Golf de Tecnatom

Web publicada en: https://clubdegolfdetecnatom.github.io
Repositorio: `clubdegolfdetecnatom.github.io` (cuenta GitHub del club)

**Importante:** esta web es independiente del portal del campeonato
(repositorio `campeonato2026`). Nada de lo que se haga aquí afecta al portal.

## Qué fichero es cada página

| Fichero          | Página                          |
|------------------|---------------------------------|
| index.html       | Portada y "Quiénes somos"       |
| historia.html    | Historia, hitos y palmarés      |
| temporadas.html  | Índice de temporadas (por año)  |
| temporada2026.html | Eventos de la temporada 2026  |
| galeria.html     | Galería de fotos                |

## Cómo editar un texto (sin programas, desde el navegador)

1. Entrar en GitHub con la cuenta del club y abrir el repositorio.
2. Pulsar sobre el fichero de la página (p. ej. `index.html`).
3. Pulsar el icono del lápiz ✏️ (arriba a la derecha).
4. Buscar el comentario `<!-- ✏️ EDITAR AQUÍ -->` correspondiente:
   el texto editable está justo debajo, entre `<p>` y `</p>`.
5. Cambiar solo el texto. No borrar los símbolos `<` y `>` ni lo que hay dentro de ellos.
6. Pulsar el botón verde "Commit changes". En 1–2 minutos la web se actualiza sola.

## Cómo añadir un campeón al palmarés

En `historia.html`, localizar la tabla del palmarés y copiar una fila completa,
desde `<tr>` hasta `</tr>`, pegarla debajo y cambiar los datos:

    <tr><td>XXXIV</td><td>2026</td><td>Nombre Apellidos</td><td>Nombre Apellidos</td></tr>

## Cómo añadir una temporada nueva

1. Copiar el fichero `temporada2026.html`, subirlo con el nombre del nuevo año
   (p. ej. `temporada2027.html`) y editar dentro sus eventos.
2. En `temporadas.html`, copiar el bloque que empieza en
   `<a class="temporada actual"` y termina en `</a>`, pegarlo encima del anterior
   y cambiar el año y el enlace al nuevo fichero. A la temporada anterior,
   quitarle la palabra `actual` de su `class` y cambiar su badge a `badge-archivo`.

## Cómo añadir o actualizar un evento de una temporada

En el fichero de la temporada (p. ej. `temporada2026.html`), copiar un bloque
que empieza en `<div class="evento"` y termina en su `</div>` de cierre,
y cambiar nombre, detalle y badge. Badges: `badge-vivo` (En juego),
`badge-prox` (Próximamente), `badge-doc` (Por documentar).
Si el evento tiene página propia o portal, usar `<a class="evento" href="...">`
en lugar de `<div>`.

## Cómo cambiar las fechas del calendario anual

En el fichero de la temporada (p. ej. `temporada2026.html`), al final del todo,
hay una lista llamada `EVENTOS` con una línea por cada día de evento:

    { fecha: '2026-10-01', tipo: 'ryder', tent: true },

- Para cambiar una fecha: editar el texto de `fecha` (formato AAAA-MM-DD).
- Para confirmar una fecha tentativa: borrar `, tent: true` de esa línea.
- Para añadir un día: copiar una línea y cambiar fecha y tipo.
- Tipos válidos: apertura, liga, ryder, clausura, otro.

El calendario de 12 meses se redibuja solo con esos datos.

## Reglas de oro

- Ante la duda, no borrar nada: preguntar antes.
- GitHub guarda todas las versiones anteriores: cualquier error se puede
  deshacer desde la pestaña "History" del fichero.
- Para cambios de diseño o secciones nuevas: pedírselo a Teebot
  (Oficina del CaddIA Master) en Claude.

