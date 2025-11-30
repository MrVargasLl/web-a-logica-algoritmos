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
