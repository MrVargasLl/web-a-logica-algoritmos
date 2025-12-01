// Importamos los arreglos
import { filtrarP } from "./filter.js";
import { productos } from "./arregloObjetosMuestra.js";
import { OrdenarP } from "./sortP.js";

//Arreglo que contiene solo los nombres de los productos.

export const NombresOrdenados = OrdenarP.map(producto => producto.nombre);


//Pruebas adicionales:
//console.log(NombresOrdenados);
//export const NombresOrdenados1 = productos.map(producto => producto.nombre);
//console.log(NombresOrdenados1);
