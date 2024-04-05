//GUIA04

// a) Identificar si un correo es valido

/* function validarCorreo ( correo)
 {
    var regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return regex.test(correo) ? "Valido " : " Invalido"
 }

 var correo = "example@servidorcorreo.com"
 console.log("El correo electronico ingresado es: " + validarCorreo(correo))

 // b) realizar el mismo programa pero validando el dui

 function validarDui ( dui)
 {
    var regex = /^\d{8}-\d{1}$/g
    //return regex.test(dui) ?"valido " : "Invalido"

    if (regex.test(dui)){
        return true // Dui valido 
    }else{
        return false // Dui invalido
    }
 }

 var dui = "06592583-3"
 if (validarDui(dui)) {
    console.log("Se a ingresado el DUI exitosamente")
 }else{
    console.log("El DUI es invalido")
 }
 console.log("El DUI ingresado es :" + validarDui(dui)) */

 //EJERCICIO 02
// realizar un programa que genere contraseñas aleatorias

/* function generarPasword (longitud){
    var caracters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    var password = ""

    //crear un bucle aleatorio
    for(var i = 0; i  < longitud; i++){
        password += caracters.charAt(Math.floor(Math.random() * caracters.length))
    }

    return password
}

var longitud = 8
alert("Tu contraseña nueva es: " + generarPasword(longitud)) */

