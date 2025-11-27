import { registrarDestino } from './destinos.js';
import { mostrarItinerario } from './Itinerario.js';

// Iniciar la aplicación
const iniciarApp =()=> {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("Caracas", "2026-07-01", "Barco");
    registrarDestino("Lisboa", "2026-07-01", "Autobus");
    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();