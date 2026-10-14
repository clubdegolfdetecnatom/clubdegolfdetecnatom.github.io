# Guía de mantenimiento — Web del Club de Golf de Tecnatom

Web publicada en: https://clubdegolfdetecnatom.github.io
Repositorio: `clubdegolfdetecnatom.github.io` (cuenta GitHub del club)

**Importante:** esta web es independiente del portal del campeonato
(repositorio `campeonato2026`). Nada de lo que se haga aquí afecta al portal.
La portada lee datos del portal (inscritos, clasificación y fotos), pero solo
en lectura.

## Qué fichero es cada cosa

| Fichero              | Qué es                                                        |
|----------------------|---------------------------------------------------------------|
| index.html           | Portada: temporada actual, clasificación, calendario, club    |
| historia.html        | Historia, hitos y palmarés                                    |
| temporadas.html      | Índice de temporadas (por año)                                |
| temporadaAAAA.html   | Eventos y calendario de cada temporada                        |
| galeria.html         | Galería de fotos (se alimenta sola desde el portal)           |
| **estilos.css**      | Aspecto de TODA la web: colores, letra, cabecera, tarjetas    |
| **temporada.js**     | Año y enlace del botón verde "Temporada …" de la cabecera     |
| escudo.jpg           | Escudo del club                                               |

Desde octubre de 2026 el diseño ya no está repetido dentro de cada página:
está en `estilos.css`. Las páginas solo contienen su texto.

## Cómo cambiar un color o la letra en toda la web

En `estilos.css`, al principio, está el bloque "Colores y letra". Cambiando un
valor ahí cambia en todas las páginas a la vez. Por ejemplo, `--verde` es el
color principal y `--oro` el de los botones y etiquetas destacadas.

## Cómo editar un texto (sin programas, desde el navegador)

1. Entrar en GitHub con la cuenta del club y abrir el repositorio.
2. Pulsar sobre el fichero de la página (p. ej. `index.html`).
3. Pulsar el icono del lápiz ✏️ (arriba a la derecha).
4. Buscar el comentario `<!-- ✏️ EDITAR AQUÍ -->` correspondiente:
   el texto editable está justo debajo, entre `<p>` y `</p>`.
5. Cambiar solo el texto. No borrar los símbolos `<` y `>` ni lo que hay dentro de ellos.
6. Pulsar el botón verde "Commit changes". En 1–2 minutos la web se actualiza sola.

## La portada (index.html)

La portada se actualiza sola:

- **Próxima cita.** La elige ella misma a partir del calendario escrito en el
  bloque `TEMPORADA` (casi al final del fichero, marcado con
  `✏️ EDITAR AQUÍ CADA TEMPORADA`). Cuando una cita pasa, muestra la siguiente.
  Cuando ya no queda ninguna, el bloque verde pasa a ser el resumen de la
  temporada con los campeones de Liga.
- **Inscritos, clasificación de la Liga y fotos.** Se leen en directo del
  portal. Si la base de datos no responde, se muestran los valores del bloque
  `RESPALDO`, que conviene poner al día de vez en cuando.
- **Foto de portada.** Por defecto, la primera foto del evento más reciente.
  Para fijar una concreta, escribir su ruta en `FOTO_PORTADA`.

Para cambiar una fecha, un campo o añadir una cita, editar la lista `eventos`
del bloque `TEMPORADA` (fechas en formato AAAA-MM-DD).

## Cómo abrir una temporada nueva

Se hace en dos pasos.

**1. Temporada en preparación** (hecho para 2027 el 14-10-2026):

- `temporadaAAAA.html` con las competiciones previstas y «Fecha por definir».
- En `temporadas.html`, su tarjeta con `class="temporada actual"` y el badge
  `badge-prox` «En preparación».
- En `temporada.js`, `anio` el nuevo año y `enlace` esa página
  (p. ej. `https://clubdegolfdetecnatom.github.io/temporada2027.html`).
- La portada sigue mostrando el resumen de la temporada anterior, con un enlace
  «Temporada AAAA en preparación».

Cuando se aprueben fechas: en `temporadaAAAA.html`, cambiar el detalle y el
badge de cada competición y añadir sus días a la lista `EVENTOS` del final.

**2. Temporada en marcha** (cuando abra el portal del nuevo año):

1. En `temporada.js`, cambiar `enlace` a la dirección del portal
   (p. ej. `https://clubdegolfdetecnatom.github.io/campeonato2027/`).
2. En `index.html`, sustituir el bloque `TEMPORADA` (año, edición y eventos con
   sus fechas) y poner al día `RESPALDO`. Los accesos de la portada van solos al
   portal `campeonatoAAAA` de ese año.
3. En `temporadas.html`, cambiar el badge de la temporada a `badge-vivo`.

## Cierre de una temporada

Al terminar la Clausura, la página `temporadaAAAA.html` se convierte en el archivo
definitivo de la temporada: palmarés, clasificaciones completas de cada competición,
resultados jornada a jornada, fotos, jugadores con su hándicap final y cuotas. Se
genera a partir de los datos del portal y del palmarés oficial; pedírselo a Teebot.
La temporada 2026 se cerró el 13 de octubre de 2026 (copia de seguridad del portal en
la carpeta de Drive "Archivos historico del club estraidos por Claude").

### Qué se hizo al cerrar 2026 (para repetirlo en 2027)

1. **Copia de seguridad del portal** (todas las tablas) en Drive, carpeta
   "Cierre temporada 2026", comprobada tabla a tabla.
2. **Página de archivo** `temporada2026.html`: palmarés oficial, clasificaciones
   completas, jornada a jornada, Ryder, Clausura, fotos, jugadores con hándicap
   final y cuotas.
3. **Portada, Historia y Temporadas** al día: la portada muestra el resumen de
   la temporada y enlaza al archivo.
4. **Portal congelado** (14-10-2026): el portal `campeonato2026` queda solo de
   consulta. Sin inscripciones, cuotas, subida de fotos ni Administración; la
   contraseña y las licencias ya no están en la página. Lo hace la línea
   `const TEMPORADA_CERRADA = true;` del portal y un aviso con enlace al archivo.
5. **Base de datos solo de lectura** (si se aplica `bd_cerrar_escrituras_2026.sql`,
   guardado en la carpeta de Drive junto con el que lo deshace).

## El portal de la temporada (repositorio `campeonatoAAAA`)

- Es la parte interactiva: inscripción, resultados, hándicaps, calendario,
  fotos y administración. Lee y escribe en la base de datos (Supabase).
- Desde octubre de 2026 tiene el mismo aspecto que la web (misma cabecera,
  colores y letra). Sus estilos están dentro del propio fichero, no en
  `estilos.css`, para que un cambio en la web no pueda romper el portal.
- Su cabecera usa el `temporada.js` de la web, así que el botón verde siempre
  lleva a la temporada en curso.
- Una temporada cerrada se congela con `TEMPORADA_CERRADA = true` (ver arriba).

## Cómo añadir un año al palmarés

En `historia.html`, copiar una tarjeta `<div class="card">` completa, cambiar el
título y las filas de eventos. Cada fila es:

    <tr><td class="ev">EVENTO</td><td>SEDE</td><td>GANADOR</td></tr>

## Cómo añadir o actualizar un evento de una temporada

En el fichero de la temporada (p. ej. `temporada2026.html`), copiar un bloque
que empieza en `<div class="evento"` y termina en su `</div>` de cierre,
y cambiar nombre, detalle y badge. Badges: `badge-vivo` (En juego),
`badge-prox` (Próximamente), `badge-doc` (Celebrado / Por documentar).
Si el evento tiene página propia o portal, usar `<a class="evento" href="...">`
en lugar de `<div>`.

## Cómo cambiar las fechas del calendario anual de una temporada

En el fichero de la temporada (p. ej. `temporada2026.html`), al final del todo,
hay una lista llamada `EVENTOS` con una línea por cada día de evento:

    { fecha: '2026-10-01', tipo: 'ryder', tent: true },

- Para cambiar una fecha: editar el texto de `fecha` (formato AAAA-MM-DD).
- Para confirmar una fecha tentativa: borrar `, tent: true` de esa línea.
- Para añadir un día: copiar una línea y cambiar fecha y tipo.
- Tipos válidos: apertura, liga, ryder, clausura, otro.

El calendario de 12 meses se redibuja solo con esos datos.

## Cómo crear una página nueva con el mismo aspecto

Copiar una página existente del mismo tipo. Lo que le da el aspecto común es:

- en `<head>`, las líneas que enlazan las tipografías y `estilos.css`;
- el bloque `<header class="cabecera">` … `</header>`;
- el bloque `<footer class="pie">` … `</footer>`;
- la línea `<script src="temporada.js"></script>` antes de `</body>`.

## Reglas de oro

- Ante la duda, no borrar nada: preguntar antes.
- GitHub guarda todas las versiones anteriores: cualquier error se puede
  deshacer desde la pestaña "History" del fichero.
- Para cambios de diseño o secciones nuevas: pedírselo a Teebot
  (Oficina del CaddIA Master) en Claude.
