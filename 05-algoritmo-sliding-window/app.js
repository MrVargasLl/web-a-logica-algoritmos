//Ejemplo practico de ventana fija

function maxSumaConsecutiva(arr, k) {
    let maxSuma = 0;
    let sumaActual = 0;

    // Paso 1: Calcula la suma inicial para los primeros 'k' elementos
    for (let i = 0; i < k; i++) {
        sumaActual += arr[i];
    }

    maxSuma = sumaActual;

    // Paso 2: Desliza la ventana a lo largo del arreglo
    for (let i = k; i < arr.length; i++) {
        sumaActual += arr[i] - arr[i - k]; // Agrega el nuevo elemento y elimina el primero
        maxSuma = Math.max(maxSuma, sumaActual); // Actualiza el máximo si es necesario
    }

    return maxSuma;
}

console.log(maxSumaConsecutiva([2, 1, 5, 1, 3, 2], 3)); // Resultado: 9

//Ventana Variable

function maxSumaConsecutiva(arr, k) {
    let maxSuma = 0;
    let sumaActual = 0;

    // Paso 1: Calcula la suma inicial para los primeros 'k' elementos
    for (let i = 0; i < k; i++) {
        sumaActual += arr[i];
    }

    maxSuma = sumaActual;

    // Paso 2: Desliza la ventana a lo largo del arreglo
    for (let i = k; i < arr.length; i++) {
        sumaActual += arr[i] - arr[i - k]; // Agrega el nuevo elemento y elimina el primero
        maxSuma = Math.max(maxSuma, sumaActual); // Actualiza el máximo si es necesario
    }

    return maxSuma;
}

console.log(maxSumaConsecutiva([2, 1, 5, 1, 3, 2], 3)); // Resultado: 9

//Encuentra la longitud de la subcadena más larga sin caracteres repetidos.

function subcadenaSinRepetir(texto) {
    let set = new Set();
    let inicio = 0;
    let maxLongitud = 0;

    for (let fin = 0; fin < texto.length; fin++) {

    // ESTE ES EL WHILE CLAVE  
    while (set.has(texto[fin])) {
        set.delete(texto[inicio]);
        inicio++;
    }

    set.add(texto[fin]);
    maxLongitud = Math.max(maxLongitud, fin - inicio + 1);
    }

    return maxLongitud;
}

console.log(subcadenaSinRepetir("abcabcbb")); // 3 