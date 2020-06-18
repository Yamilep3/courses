'use strict'

/* 
    Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/

// Forma de solucionarlo por Yamile
/*var numero1 = parseInt(prompt('Digita el primer número', 0));
var numero2 = parseInt(prompt('Digita el segundo número', 0));
var esImpar = 0;

document.write("<h1>De "+ numero1 + " a " +numero2+ " se encuentran los siguientes números impares:<h1>")
for (var i = numero1; i <= numero2; i++){
    esImpar = i % 2;

    if (esImpar != 0) {
        document.write(i + "</br>");
    }
}
*/


// Otra manera de solución

var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

while (numero1 < numero2){
    numero1++;
    if (numero1 % 2 != 0) {
        console.log('El '+numero1+ ' es impar');
    }
}
