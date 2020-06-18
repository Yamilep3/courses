'use strict'

/*
    Hacer un programa que muestre todos los números entre dos números introducidos por el usuario
*/

/*
// Esta forma de hacerla por Yamile
var numero1 = parseInt(prompt('Primer número: ', 0));
var numero2 = parseInt(prompt('Segundo número: ', 0));

var contador = 0;

if (numero1 < numero2) {
    for (var i = numero1+1; i <= numero2-1; i++){
        alert(i);
    }
}else if (numero2 < numero1) {
  for (var i = numero1-1; i >= numero2+1; i--){
        alert(i);
  }
}
*/

// Otra forma de hacerla
var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

document.write("<h1>De "+numero1+" a "+numero2+" están estos números:</h1>")
for(var i = numero1; i <= numero2; i++){
    document.write(i + "</br>");
}