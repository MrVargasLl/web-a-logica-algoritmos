const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

function agregarNota(titulo, contenido) {
    let notas = [];

    if (fs.existsSync(filePath)) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        notas = JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    try {
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log('Nota agregada con éxito.');
    } catch (err) {
    console.error('Error al guardar las notas:', err);
    }
}

// Ejemplo de uso
//agregarNota('Compras', 'Comprar leche y pan.');



/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    if (fs.existsSync(filePath)) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const notas = JSON.parse(data);
        if (notas.length === 0) {
        console.log('No hay notas guardadas.');
        } else {
        console.log('Notas guardadas:');
        notas.forEach((nota, index) => {
            console.log(`${index + 1}. Título: ${nota.titulo}, Contenido: ${nota.contenido}`);
        });
        }
    } catch (err) {
        console.error('Error al leer las notas:', err);
    }
    } else {
    console.log('No hay notas guardadas.');
    }
}

// Ejemplo de uso
//listarNotas();

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        let notas = JSON.parse(data);

      // Filtramos las notas para eliminar la que coincida con el título.
        const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

        if (notasRestantes.length === notas.length) {
        console.log(`No se encontró una nota con el título "${titulo}".`);
        } else {
        // Sobrescribimos el archivo con las notas restantes.
        fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
        console.log(`Nota con título "${titulo}" eliminada.`);
        }
    } catch (err) {
        console.error('Error al leer el archivo:', err);
    }
    } else {
    console.log('No hay notas para eliminar.');
    }
}

// Ejemplo de uso
//eliminarNota('Compras');


// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Trabajo', 'Terminar reporte semanal.');
listarNotas();
eliminarNota('Compras');
