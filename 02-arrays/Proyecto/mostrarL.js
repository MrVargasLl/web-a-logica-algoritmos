// Importar la lista de compras desde el archivo donde se define
import { listaDeCompras } from './agregarP.js';

// Función para mostrar todos los productos de la lista
export const mostrarLista = () => {
    listaDeCompras.forEach(producto => {
        console.log(producto);
    });
};