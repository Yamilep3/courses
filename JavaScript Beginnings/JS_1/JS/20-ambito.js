'use strict'

// el ambito de las variables

var texto = "Hola soy una variable global";
var numero = 10;

function HolaMundo(texto){
    var elemento = "Estoy adentro";
    console.log(texto);
    console.log(numero);
    console.log(elemento);
}

HolaMundo(texto);

// No se puede llamar fuera de la funcion
console.log(elemento);