console.log("Intro a ECMAScript")

//Ejemplo práctico del Symbol
const ID_INTERNO = Symbol("idInterno")
const usuario = {
    nombre: "pepe",
    edad: 30,
  [ID_INTERNO]: 12345 //Propiedad única
}
//console.log(usuario[ID_INTERNO])
for (let key in usuario){
    console.log(key)
}

function cargarDatos() {
    return new Promise( (resolve, reject) => {
    setTimeout( () => {
        const exito = true
        if(exito){
        resolve("Datos fueron cargados correctamente")
        }else{
        reject("Error al cargar los datos")
        }
    }, 4000 )
    } )
}
cargarDatos()
.then( (mensaje) => console.log(mensaje) )
.catch( (error) => console.log(error) )