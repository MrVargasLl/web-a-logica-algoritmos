//Ejemplo 3: Cuantas veces aparece un núemero en un array
function encontrarNumeros (arr, numero){
  //Caso base 1: cuando el arreglo no tiene elementos internos
    if( arr.length === 0 ) return 0
  //Caso base 2: Si el arreglo tiene un solo elemento, lo comparamos con el target
    if( arr.length === 1 ) return arr[0] === numero ? 1 : 0
  //Dividir
    const medio = Math.floor(arr.length/2);
    const left = arr.slice(0,medio);
    const right = arr.slice(medio);
  //Conquistar
    const a = encontrarNumeros(left,numero);
    const b = encontrarNumeros(right,numero);
    
  //Combinar (Llamado recursivo)

    return a + b
}

console.log(encontrarNumeros([ 1,2,3,5,5,5,6,9],5));
