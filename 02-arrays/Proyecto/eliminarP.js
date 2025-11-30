// Importar la lista de compras desde el archivo donde se define
import { listaDeCompras } from './agregarP.js';

// Función para eliminar un producto de la lista
export const eliminarProducto = (producto) => {
    listaDeCompras.delete(producto);
};