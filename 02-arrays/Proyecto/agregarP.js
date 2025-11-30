// Conjunto para agregar los productos sin duplicados
export const listaDeCompras = new Set();

// Función para agregar un producto a la lista
export const agregarProducto = (producto) => {
    listaDeCompras.add(producto);
};