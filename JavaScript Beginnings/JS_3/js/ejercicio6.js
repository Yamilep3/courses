'use strict'

/**
 *  Que nos indique si un número es par o impar
 * 1. Ventana prompt
 * 2. Si no es valido que solicite nuevamente el número  
 */

 /*
 // Forma de realizarlo por yamile
 var numero = parseInt(prompt('Digite número', 0));
 
 if(isNaN(numero)){
     alert('ingrese valores numéricos');
 }else if (numero % 2 == 0){
    console.log(numero + ' Es un número par');
 }else if (numero % 2 != 0){
    console.log(numero + ' Es un número impar');
 }
 */

 // Otra manera de solucionarlo

 var numero = parseInt(prompt('Introduce un número', 0));

 while(isNaN(numero)){
    numero = parseInt(prompt('Introduce un número', 0)); 
 }

 if (numero % 2 == 0){
     alert('Es un número par');
 }else {
     alert('Es un número impar');
 }
