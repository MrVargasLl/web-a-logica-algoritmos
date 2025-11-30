// Importamos el arreglo de productos desde otro módulo

import { productos } from "./arregloObjetosMuestra.js";

// Filtrar productos que cuesten menos de $100

const filtrarP = productos.filter(producto => producto.precio < 100);

console.log(filtrarP);