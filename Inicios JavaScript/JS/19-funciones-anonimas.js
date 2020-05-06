'use strict'

// funciones y callback

// Es una funcion que no tiene nombre

var pelicula = nombre => {
    return "La pelicula es: "+nombre;
}

// un callback 
// Es una funcion que ejecuta otra funcion dentro

function sumame(numero1, numero2){
    var sumar = numero1 + numero2;

    return sumar;
}

console.log(sumame (4,5));

// funcion flecha =>
// en lugar de usar function usamos =>