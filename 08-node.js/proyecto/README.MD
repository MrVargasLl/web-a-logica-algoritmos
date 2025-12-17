# Gestor de Notas en Node.js

Este proyecto permite gestionar notas personales utilizando Node.js y el módulo `fs` para leer y escribir en un archivo JSON.

## Funciones

### `agregarNota(titulo, contenido)`

Agrega una nueva nota al archivo `notas.json`. Si el archivo no existe, se creará automáticamente.

**Parámetros:**
- `titulo` (string): El título de la nota.
- `contenido` (string): El contenido de la nota.

### `listarNotas()`

Lista todas las notas almacenadas en el archivo `notas.json`. Si no hay notas, muestra un mensaje indicándolo.

### `eliminarNota(titulo)`

Elimina una nota específica por su título del archivo `notas.json`.

**Parámetros:**
- `titulo` (string): El título de la nota a eliminar.

## Manejo de Errores

Cada función incluye bloques `try` y `catch` para manejar posibles errores durante la lectura y escritura de archivos, asegurando que cualquier problema se notifique adecuadamente.

## Uso

Puedes invocar las funciones según tus necesidades:
- `agregarNota('Título de ejemplo', 'Contenido de ejemplo')`
- `listarNotas()`
- `eliminarNota('Título de ejemplo')`

---

¡Y con esto tienes un resumen completo de cómo usar el gestor de notas! Si necesitas algún ajuste o agregar algo más, me dices.




