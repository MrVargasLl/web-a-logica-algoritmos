import { destinos } from './destinos.js';

// Función para mostrar el itinerario de los viajes registrados

export const mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    destinos.forEach(({ destino, fecha, transporte, costo }) => {
        console.log("Destino: " + destino);
        console.log("Fecha: " + fecha);
        console.log("Transporte: " + transporte);
        console.log("Costo: $" + costo);
        console.log("---------------------------");
    });
};