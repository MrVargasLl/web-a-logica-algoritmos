//find - devuelve el primer elemento encontrado que cumple una condicion

const numeros = [10, 20, 30, 40];
const resultado = numeros.find(num => num >25)

console.log(resultado); // 30

//map - crea un arreglo aplicando una funcion

const numbers =[1,2,3,4];
const cuadrados = numbers.map(num => num **2); 
console.log(cuadrados); // [1, 4, 9, 16]

//filter() - arreglo que contiene todos los elementos que cumplen una condición

const numberz =[5, 10, 15, 20];
const mayores = numberz.filter( num => num > 10);
console.log(mayores); //[15,20]

//forEach -No devuelve un nuevo arreglo ni modifica el original.

const frutas = ["manzana", "platano", "naranja"];
frutas.forEach(frutas => console.log(frutas));

const libros =['Iliada', '100 a#os de soledad', 'Do#a Barbara'];
libros.forEach(libros =>console.log(libros));

const proteinas =["Cerdo", "pollo", "pescado"]
proteinas.forEach(proteinas=>console.log(proteinas)
);

//includes() se utiliza para verificar si un arreglo contiene un elemento específico.

const contactos = ["Ana", "Luis", "Carlos"];
const existeAna = contactos.includes("Ana");
console.log(existeAna); // true

const existePedro = contactos.includes('Pedro');
console.log(existePedro);

//every(): Este método devuelve true solo si todos los elementos del arreglo cumplen con la condición que le pasamos.

const numeeros = [1, 2, 3, 4];
const todosPositivos = numeeros.every(num => num > 0);
console.log(todosPositivos); // true

const negativosTodos = numeeros.every(num => num < 0);
console.log(negativosTodos);//false

//some() devuelve true si al menos un elemento cumple con la condición.

const numerros = [1, 3, 5, 6];
const hayPar = numerros.some(num => num % 2 === 0);
console.log(hayPar); // true

const hayImpar = numerros.some(num => num % 2!==0);
console.log(hayImpar);//True

//El método reduce() es muy poderoso para realizar cálculos o acumular valores en un arreglo.
// puede usarse para sumar elementos, concatenar cadenas, crear objetos, o realizar operaciones más complejas. 

const numros = [1, 2, 3, 4];
const suma = numros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(suma); // 10

const numero = 5;

const factorial = Array.from({ length: numero }, (_, i) => i + 1)
  .reduce((acumulador, valor) => acumulador * valor, 1);

console.log(factorial); // 120

//Sort ordenar los elementos de un arreglo

const nummeros = [30, 5, 20, 10];

nummeros.sort((a, b) => a - b); // Orden ascendente

console.log(nummeros); // [5, 10, 20, 30]


// Ejemplo de objeto: imprimir y agregar materias de un estudiante

/*let estudiante = {
  nombre: "Ana",
  calificaciones: [],
  materias: ["Matemáticas", "Historia", "Ciencias"],

  // Método para agregar una nueva materia
  agregarMateria: function (materiaNueva) {
    this.materias.push(materiaNueva);
  },

  // Método para eliminar una materia por índice
  eliminarMateria: function (indice) {
    this.materias.splice(indice, 1);
  },

  // Método para imprimir las materias
  mostrarMaterias: function () {
    console.log("Las materias de " + this.nombre + " son:");
    this.materias.forEach(m => console.log("- " + m));
  }
};


// ----------------------
// PRUEBA DEL OBJETO
// ----------------------

// Mostrar materias iniciales
estudiante.mostrarMaterias();

// Agregar materia nueva
estudiante.agregarMateria("Programación");

// Mostrar materias actualizadas
estudiante.mostrarMaterias();

// Eliminar una materia (por índice)
estudiante.eliminarMateria(1);

// Mostrar materias nuevamente
estudiante.mostrarMaterias();

/*let estudiante = {
  nombre: "Ana",
  calificaciones: [],
  materias: ["Matemáticas", "Historia", "Ciencias"],
  agregarMateria: (mat) => {
    return this.materia.push(mat)
  }
}*/


let estudiante = {
  nombre: "Ana",
  calificaciones: [18, 20, 15, 19],
  materias: ["Matemáticas", "Historia", "Ciencias"],

  // Agregar materia
  agregarMateria: function(materiaNueva) {
    this.materias.push(materiaNueva);
  },

  // Método 1: Imprimir todas las materias
  imprimirMaterias: function () {
    console.log("Materias registradas:");
    this.materias.forEach(m => console.log("- " + m));
  },

  // Método 2: Sacar promedio de notas
  promedioNotas: function () {
  if (this.calificaciones.length === 0) return 0;

  const suma = this.calificaciones.reduce((acc, nota) => acc + nota, 0);
  return suma / this.calificaciones.length;
},

  // Método 3: Contar materias registradas
  contarMaterias: function () {
    return this.materias.length;
  },

  // Método 4: Eliminar materia con filter()
  eliminarMateria: function (materiaAEliminar) {
    this.materias = this.materias.filter(m => m !== materiaAEliminar);
  }
};


// ---------------------------
// EJEMPLOS DE USO
// ---------------------------

estudiante.imprimirMaterias();

console.log("Promedio:", estudiante.promedioNotas());

console.log("Total de materias:", estudiante.contarMaterias());

estudiante.eliminarMateria("Historia");

estudiante.imprimirMaterias();