//Encuentra los Invitados que Pueden Sentarse Juntos

const invitados = ["Ana", "Carlos", "Carolina", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Compara el actual con el siguiente
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        }
        // Mueve ambos punteros para comparar el siguiente par consecutivo
        inicio++;
        siguiente++;
    }
    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Carolina"]