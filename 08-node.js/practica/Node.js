// (File System) en Node.js
// Importando el módulo fs
const fs = require('fs');

// Verificando si un archivo existe
const filePath = './08-node.js/practica/';

if (fs.existsSync(filePath)) {
    console.log('El archivo existe.');

} else {
    console.log('El archivo no existe.');
    //console.log(__dirname); //ruta del directorio desde el cual estás ejecutando el código.
}

//métodos síncronos y asíncronos para leer archivos

fs.readFile('./08-node.js/practica/example.txt', 'utf8', (err, data) => {
    if (err) {
    console.error('Error al leer el archivo:', err);
    return;
    }

    console.log('Contenido del archivo:', data);
});

//Escritura de Archivos fs.writeFile y fs.appendFile

//Sobrescribe el contenido existente

fs.writeFile('./08-node.js/practica/example.txt', 'Hola, Node.js!', (err) => {
  if (err) { // manejo de errores
    console.error('Error al escribir en el archivo:', err);
    return;
    }

    console.log('Archivo escrito con éxito.');
});

//Agrega texto al final del archivo
fs.appendFile('./example.txt', '   Hoolaa, Amigo', (err) => {
  if (err) { // manejo de errores
    console.error('Error al escribir en el archivo:', err);
    return;
    }

    console.log('Agregado texto con éxito.');
});

//Eliminar Archivos
/*
fs.unlink('./example.txt', (err) => {
if (err) {
    console.error('Error al eliminar el archivo:', err);
    return;
        }

    console.log('Archivo eliminado con éxito.');

});
*/