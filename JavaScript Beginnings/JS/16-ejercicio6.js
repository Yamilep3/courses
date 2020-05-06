'use strict'

/* Cálculadora
- solicite los números por pantalla
- si ingresamos mal el número, vuelva a solicitarlo
- Mostrar en el cuerpo de la página el resultado de sumar
  restar, multiplicar y dividir esas dis cifras
*/

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) ||
    isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer número', 0));
    numero2 = parseInt(prompt('introduce el segundo número', 0));
}

var resultado = "la suma es: " + (numero1 + numero2) + "<br/>" +
    "La resta es: " + (numero1 - numero2) + "<br/>" +
    "La multiplicación es: " + (numero1 * numero2) + "<br/>" +
    "La división es: " + (numero1 / numero2) + "<br/>";

document.write(resultado);