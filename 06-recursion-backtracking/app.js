function generateCombinations(letters, current, index, results) {
    debugger
    // Agregar la combinación actual al resultado
    results.push(current);

    // Iterar a partir del índice actual
    for (let i = index; i < letters.length; i++) {
        // Llamar recursivamente añadiendo la letra actual
        generateCombinations(letters, current + letters[i], i + 1, results);
    }
}

function findAllCombinations(letters) {
    const results = [];
    generateCombinations(letters, '', 0, results);
    return results;
}

// Ejemplo de uso
const letters = ['a', 'b', 'c'];
console.log(findAllCombinations(letters));

/*
Salida esperada:

[
    '',        'a',       'ab',

    'abc',     'ac',      'b',

    'bc',      'c'
]
*/

function factorial(n) {
    // Caso base: si n es 0, el factorial es 1
    if (n === 0) {
        return 1;
    }

    // Llamada recursiva: multiplicar n por el factorial de n-1
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Salida: 120


let cuentaAtras = (num) => {
    
  //Caso base
    if(num === 0){
    return 0
    }
    console.log(num)
  //Llamada recursiva
    return cuentaAtras(num-1)
}
console.log(cuentaAtras(5))



function factorial (n) {
    debugger
    if(n === 0){
    return 1
    }
  return n * factorial(n-1)
}
console.log(factorial (5))


//Este codigo no es recursivo por que se ejecuta una sola vez

function parImpar(num) {

    let aux = num % 2

    if(aux === 0) {
        return "par"
    } 
    
    if(aux === 1) {
        return "impar"
    } 
    
    return parImpar(num - 2);
}

console.log( parImpar(9));



function parImpar(num) {

    if(num === 0) {
        return "par"
    } 
    if(num === 1) {
        return "impar"
    } 
    
    return parImpar(num - 2);
}

console.log( parImpar(9));



function invertirString (str){
  //debugger
  //Caso base 
  if( str.length <= 1 ) return str
  //Llamada recursiva
  return str[str.length-1] + invertirString( str.slice(0,-1) ) 
}
console.log(invertirString ("hola"))




//Ejemplo 5: Encontrar determinado caracter en un string
let programa = (cadena, letra, index = 0, count = 0) => {
    //Caso base
    if (index === cadena.length) return count;
    if (cadena[index] === letra) count++;
    //Llamada recursiva
    return programa(cadena, letra, index + 1, count);
};

console.log(programa("JavaScript", "a")); // Salida: 2