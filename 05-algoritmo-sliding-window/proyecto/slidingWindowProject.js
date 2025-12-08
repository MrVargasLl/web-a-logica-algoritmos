
//Buscador de la Palabra Más Larga
function findLongestWord(text) {
const palabras = text.split(' ')
//console.log(palabras);

let longestWord = ''; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < palabras.length; i++) {

         // TODO: Comparar la longitud de la palabra actual con la más larga
        if (palabras[i].length>longestWord.length) {
            longestWord = palabras[i];
        }
    
    }
//console.log(longestWord);
// TODO: Retornar la palabra más larga encontrada
        return longestWord; //Si una función NO usa return, automáticamente devuelve undefined.
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"