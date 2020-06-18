'use strict'

/**
 *  Calculadora:
 * - Pida dos números por pantalla
 * - Si metemos uno mal que nos los vuelva a pedir
 * - En el cuerpo de la página, en una alerta y por la consola muestre el resultado de sumar, restar, multiplicar
 *   y dividir esas dos cifras
 */

// Solución de Yamile
/*
var numero1 = parseInt(prompt('Introduzca el primer número',0));
var numero2 = parseInt(prompt('Introduzca el segundo número', 0));

while (isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt('Introduzca el primer número',0));
    var numero2 = parseInt(prompt('Introduzca el segundo número', 0));
}

// Suma
document.write('<h1>La suma de los números es: '+ (numero1 + numero2) + "<h1>");
alert('La suma de los números es: '+ (numero1 + numero2));
console.log('La suma e los números es: '+ (numero1 + numero2));

// Resta
document.write('<h1>La resta de los números es: '+ (numero1 - numero2) + "<h1>");
alert('La resta de los números es: '+ (numero1 - numero2));
console.log('La resta e los números es: '+ (numero1 - numero2));

// Multiplicación
document.write('<h1>La multiplicación de los números es: '+ (numero1 * numero2) + "<h1>");
alert('La multiplicación de los números es: '+ (numero1 * numero2));
console.log('La multiplicación de los números es: '+ (numero1 * numero2));

// División 
document.write('<h1>La división de los números es: '+ (numero1 / numero2) + "<h1>");
alert('La división de los números es: '+ (numero1 / numero2));
console.log('La división de los números es: '+ (numero1 / numero2));
*/

// Otra manera de solucionar

var numero1 = parseInt(prompt('Introduzca el primer número', 0));
var numero2 = parseInt(prompt('introduzca el segundo número', 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduzca el primer número', 0));
    numero2 = parseInt(prompt('Introduzca el segundo número', 0));
}

var resultado = 'La suma es: '+ (numero1 + numero2)+ '<br>'+
                'La resta es: '+ (numero1 - numero2)+ '<br>'+
                'La multiplicación es: '+ (numero1 * numero2)+ '<br>' +
                'La división es: ' + (numero1 / numero2)+ '<br>';

var resultadoCMD = 'La suma es: '+ (numero1 + numero2)+ '\n'+
                   'La resta es: '+ (numero1 - numero2)+ '\n'+
                   'La multiplicación es: '+ (numero1 * numero2)+ '\n'+
                   'La división es: '+ (numero1 / numero2)+ '\n';

document.write(resultado);
alert(resultadoCMD);                   
console.log(resultadoCMD);