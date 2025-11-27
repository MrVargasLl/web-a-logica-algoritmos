//Uso de modulos

import {calcularCosto} from './costo.js';

// Array para guardar los destinos
let destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte) => {
    // TODO: Crear un objeto con los datos del destino
    let nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
    
};

// Exportar la variable destinos y la función
export { destinos };