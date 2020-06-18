'use strict'

/**
 *  Tabla de multiplicar de un número introducido por pantalla
 */

 /*
 // Forma de solución por Yamile
 var numero = parseInt(prompt('Ingrese el número de tabla de multiplicar', 0));

 document.write("<h1>Tabla de múltiplicar del número "+ numero+"<h1>" + "<br>");
 document.write(numero+ " x 1 = "+numero*1+"<br>");
 document.write(numero+ " x 2 = "+numero*2+"<br>");
 document.write(numero+ " x 3 = "+numero*3+"<br>");
 document.write(numero+ " x 4 = "+numero*4+"<br>");
 document.write(numero+ " x 5 = "+numero*5+"<br>");
 document.write(numero+ " x 6 = "+numero*6+"<br>");
 document.write(numero+ " x 7 = "+numero*7+"<br>");
 document.write(numero+ " x 8 = "+numero*8+"<br>");
 document.write(numero+ " x 9 = "+numero*9+"<br>");
 document.write(numero+ " x 10 = "+numero*10+"<br>");
*/

// Otra manera de solucionarlo

var numero = parseInt(prompt('¿De cuál número quieres la tabla?', 1));

document.write("<h1>Tabla del "+ numero + "<h1>");
for (var i = 1; i <= 10; i++){
    document.write(i + " x "+ numero + " = "+(i*numero)+ "<br>");
}

// Todas las tablas de multiplicar
for (var c = 1; c <= 15; c++){
    document.write("<h1>Tabla del "+ c + "<h1>");
    for(var i = 1; i <= 10; i++){
        document.write(i + " x " + c + " = "+(i*c)+ "<br>");
    }
}