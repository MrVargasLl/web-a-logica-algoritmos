// Función para calcular el costo del viaje
export const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    } else if (destino === "Lisboa") {
        costoBase = 450;
    } else if (destino === "Caracas") {
        costoBase = 640;
    } else if (destino === "Bogota") {
        costoBase = 340;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Barco") {
        costoBase += 75;
    } else if (transporte === "Autobus") {
        costoBase += 55;
    }

    return costoBase;
}