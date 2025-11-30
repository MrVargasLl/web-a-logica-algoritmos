
import { agregarProducto } from './agregarP.js';
import { eliminarProducto } from './eliminarP.js';
import { mostrarLista } from './mostrarL.js';

// Iniciar la aplicación
const iniciarApp =()=> {
    //Ejemplo de agregar producto
    agregarProducto('jabon');
    agregarProducto('pollo');
    agregarProducto('cerdo');
    agregarProducto('pollo');
    agregarProducto('cebolla');
    eliminarProducto('cerdo');
    // Mostrar lista
    mostrarLista();

    /*
    agregarProducto('cerdo');
    mostrarLista();*/ // Para Validar EliminarProducto 

}
// Ejecutar la aplicación
iniciarApp();