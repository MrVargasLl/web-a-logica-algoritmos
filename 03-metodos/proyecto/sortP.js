// Importamos la función 'filtrarP' desde el módulo 'filter.js' para aplicar filtros a los productos.
import { filtrarP } from "./filter.js";

// Importamos el arreglo completo de productos desde el módulo 'arregloObjetosMuestra.js'.

import { productos } from "./arregloObjetosMuestra.js";

export const OrdenarP = [...filtrarP].sort((a, b) => a.nombre.localeCompare(b.nombre));

//Pruebas adicionales:
//export const OrdenarP1 = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
//console.log(OrdenarP);
//console.log(OrdenarP1);
