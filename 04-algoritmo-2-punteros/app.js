const numeros = [1, 2, 3, 4, 6];

const objetivo = 6;

function dosPunterosSuma(arr, objetivo) {
    let inicio = 0; // Primer puntero
    let fin = arr.length - 1; // Segundo puntero

    while (inicio < fin) {
        const suma = arr[inicio] + arr[fin];

        if (suma === objetivo) {
            return [arr[inicio], arr[fin]]; // Regresamos los números que cumplen la condición
        }

        if (suma < objetivo) {
            inicio++; // Si la suma es menor, movemos el puntero del inicio a la derecha
        } else {
            fin--; // Si la suma es mayor, movemos el puntero del fin a la izquierda
        }
    }

    return null; // No se encontró ninguna pareja
}

console.log(dosPunterosSuma([1, 2, 3, 4, 6], 6)); // [2, 4]

//Encontrar un Palíndromo

function esPalindromo(palabra) {
    let inicio = 0;
    let fin = palabra.length - 1;

    while (inicio < fin) {
        if (palabra[inicio] !== palabra[fin]) {
            return false; // Si no coinciden, no es un palíndromo
        }
        inicio++;
        fin--;
    }
    return true; // Es un palíndromo
}

console.log(esPalindromo("radar")); // true
console.log(esPalindromo("javascript")); // false

//Eliminar Duplicados en un Arreglo Ordenado

function eliminarDuplicados(arr) {
    let puntero = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[puntero]) {
            puntero++;
            arr[puntero] = arr[i];
        }
    }
    return arr.slice(0, puntero + 1);
}

console.log(eliminarDuplicados([1, 1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

//Comparar Dos Listas ordenadas 

function encontrarInterseccion(lista1, lista2) {
    let puntero1 = 0;
    let puntero2 = 0;
    const interseccion = [];

    while (puntero1 < lista1.length && puntero2 < lista2.length) {
        if (lista1[puntero1] === lista2[puntero2]) {
            interseccion.push(lista1[puntero1]);
            puntero1++;
            puntero2++;
        } else if (lista1[puntero1] < lista2[puntero2]) {
            puntero1++;
        } else {
            puntero2++;
        }
    }
    return interseccion;
}

console.log(encontrarInterseccion([1, 2, 4, 5], [2, 3, 4, 6])); // [2, 4]


// Algoritmo de los dos punteros:

// Buscar los pares de números que sumen una cantidad objetivo
let arr = [2, 7, 11, 15, 18]
let obj = 9

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === obj) {
//         console.log(`Par encontrado: ${arr[i]} + ${arr[j]} = ${obj}`)
//     } }
// }

function sumaObjetivo(arr, target) {

    let left = 0
    let right = arr.length - 1

while (left < right) {

    const suma = arr[left] + arr[right]

    if (suma === target) {
    return [arr[left], arr[right]]
    }

    if (suma < target) {
    left++
    } else {
    right--
    }
}

  return null //no pued estar dentro del while por q lo termina en la primera lectura
}

console.log(
    sumaObjetivo(arr, obj));

// [1, 2, 3, 3, 3, 3]  ->  [1, 2, 3]

function eliminaDuplicado(arr) {
    let slow = 0

    for (let fast = 1; fast < arr.length; fast++) {
    if (arr[slow] !== arr[fast]) {
        slow++
        arr[slow] = arr[fast]
    }
    }

    return arr.slice(0, slow + 1)
}

console.log(eliminaDuplicado([1, 2, 3, 3, 3, 3, 3, 4, 4, 5, 6]))