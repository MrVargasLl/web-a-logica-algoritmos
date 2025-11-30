console.log("Arrays")

let frutas = ["limón", "mango", "fresa"];
const personajes = ["Rick", "Morty", "Beth"];

// console.log(frutas)
// frutas = ["moras"]
// console.log(frutas)

console.log(personajes);
console.log(personajes[1]);


personajes[1] = "Jerry";
console.log(personajes[1]);
console.log(personajes.length);

// for (let i=0; i < personajes.length; i++) {
//     console.log(personajes[i]); //Accede al elemento en la posicion i
    
// }

console.log(frutas);
frutas.push("banano");
console.log(frutas);
frutas.unshift("coco");
console.log(frutas);

/* ctrl + / (múltiples comentarios de una sola línea) */
/* alt + shift + a (comentario de bloque) */

// console.log(frutas)
// frutas = ["moras"]


const invitados = [
    { nombre: "Ana", disfraz: "Vampiro" },
    { nombre: "Luis", disfraz: "Pirata" },
    { nombre: "María", disfraz: "Superhéroe" }
];

// Nombre que queremos buscar
const usuarioBuscado = "Luis";

// Usamos find() para localizar al invitado
const invitado = invitados.find(persona => persona.nombre === usuarioBuscado);
    console.log(invitado);

    //map
    personajes.map ( char => {
        console.log(char +'🎅');
        
    })

    //filter
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(ElementoN => ElementoN % 2 === 0);
console.log(pares); // Output: [2, 4]

//forEach

const nombres = ['Anita', 'Juanito', 'Pedrito']
nombres.forEach(nombrecito => {
    console.log('Hoolaa, ' + nombrecito + "!!!");
})

//sort

const Numbers = [3, 1, 4, 2]

Numbers.sort((a,b) => (a -b)); // Orden ascendente
console.log(Numbers);// output: [ ]

// Este ejemplo ilustra el comportamiento básico de una lista estática

let listaDeTareas = ["Comprar pan", "Llamar a mamá", "Enviar correo"];

listaDeTareas.push("Ir al gimnasio");  // Añadir una tarea a la lista

console.log(listaDeTareas);

// Nodo de lista ligada básico

function Nodo(valor) {
    this.valor = valor;
  this.siguiente = null;  // Enlace al siguiente nodo
}

// Crear una lista ligada simple
let nodo1 = new Nodo("Página 1");
let nodo2 = new Nodo("Página 2")
let nodo3 = new Nodo("Página 3");

// Enlazar los nodos
nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;
console.log(nodo1.siguiente.valor);  // Imprime "Página 2"

//Ejemplo de uso de un "bag":

let carritoDeCompras = new Set();  // Usamos Set para evitar duplicados
carritoDeCompras.add("Zapatos");
carritoDeCompras.add("Camiseta");
carritoDeCompras.add("Zapatos");  // No se agregará porque "Zapatos" ya está en el conjunto
console.log(carritoDeCompras);  // Imprime Set {"Zapatos", "Camiseta"}

//Ejemplo de uso de una tabla hash:

let usuarios = new Map();

usuarios.set("juan123", "password123");

usuarios.set("ana456", "password456");

console.log(usuarios.get("juan123"));  // Imprime "password123"

//Colas de Prioridad (Priority Queues)

class ColaDePrioridad {
    constructor() {
    this.items = [];
    }

    agregar(item, prioridad) {
    this.items.push({ item, prioridad });
    this.items.sort((a, b) => b.prioridad - a.prioridad);  // Ordena por prioridad
    }

    extraer() {
    return this.items.shift();  // Extrae el primer elemento (el de mayor prioridad)
    }
}

let cola = new ColaDePrioridad();
cola.agregar("Tarea urgente", 1);
cola.agregar("Tarea normal", 3);
console.log(cola.extraer());  // Imprime { item: "Tarea normal", prioridad: 3 }