//FUNCIONES
// EJEMPLO 01

/* function saludo(){
    console.log("hola")

}
saludo() */

//EJEMPLO 02

/* function verMensaje(nombre, text) {
    alert (nombre + ": " + text)
}

verMensaje("Luis", "Hola")
verMensaje("Silvia", "¿Como estas ?" ) */

//EJEMPLO 3 CONSTRUCTORES


/* function Perro (nombre, raza, edad){
    this.nombre = nombre
    this.raza = raza
    this.edad = edad
}

var perro1 = new Perro ("sans", "chaoChao", 3)
var perro2 = new Perro ("Maylo", "husky" , 1)
var perro3 = new Perro("Oso", "Pastor Aleman", 2)

console.table(perro1 )
console.table(perro2)
console.table(perro3)
 */

// evento onechange para mostrar el valor seleccionado de un elemento <select>

function mostrarSeleccion(){
    //Se obtendra el valor que se elija de elemnto
    var seleccion =  document.getElementById("seleccion").value

    //Obtener el elemnto de mensaje 
    var mensaje = document.getElementById("mensaj")

    //Mostrar resultado 
    mensaje.textContent= "La seleccion que ha hecho es:" + seleccion
}


