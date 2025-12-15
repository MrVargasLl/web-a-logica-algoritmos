function  FindMax (arr) {
    debugger
    if (arr.length === 1) {
        return arr[0]
    }

    //Divide el arreglo para ser analizado
    const mid = Math.floor(arr.length/2);
    const Left = arr.slice(0,mid);
    const Right = arr.slice(mid);

    //Conquistar: Encontramos el max. de cada mitad

    const MaxLeft = FindMax(Left);
    const MaxRight = FindMax(Right);

    //Combinar devolvemos el mayor de los dos maximos

    return Math.max(MaxLeft,MaxRight);

}

const Arr = [10, 5, 2, 9, 1, 7];
console.log(FindMax(Arr));



function sumArray(arr) {

  // Caso base: Si el arreglo tiene un solo elemento

    if (arr.length === 1) {
        return arr[0];
    }

    //Dividir: Dividimos el arreglo en dos mitades
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    //Conquistar: Calculamos la suma de cada mitad recursivamente

    const leftSum = sumArray(left);
    const rightSum = sumArray(right);

    // Combinar: Sumamos los resultados

    return leftSum + rightSum;

}

// Ejemplo de uso

const numbers = [1, 2, 3, 4, 5];

console.log(sumArray(numbers)); // Salida: 15

////////////////////////

function mergeSort(arr) {
    debugger
    if (arr.length <= 1) return arr; // Caso base
    // Dividir
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    // Combinar
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    // Añadimos elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Ejemplo de uso

const array = [5, 2, 9, 1, 5, 6];

console.log(mergeSort(array)); // Salida: [1, 2, 5, 5, 6, 9]
