'use strict'

// Let y Var

// Prueba con var
var numero = 20;
console.log(numero);  // valor 20

// Cambio el valor
if (true){
    numero = 40;
    console.log(numero);  // valor 40
}

console.log(numero);   // valor 40

// prueba con let
var texto =  "Curso de JS";
console.log(texto);  // valor JS

if (true) {
    let texto = "Curso de Angular";
    console.log(texto); // Curso de Angular  
  }
  console.log(texto); // valor JS

  // Con let limitamos una sola y con var definimos una 
  // variable global
  