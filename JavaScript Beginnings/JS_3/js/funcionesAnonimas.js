'use strict'

/**
 * Funciones anónimas: son aquellas que no tienen nombre
 * función calvac: son aquellas que se ejecutan dentro de otras y no tiene nombre, su asignación
 *                 puede ser con => (en nuevos standares de js)
 */

 function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
     var sumar = numero1 + numero2;

     sumaYmuestra(sumar);
     sumaPorDos(sumar);

     return sumar;
 }

 /* canvac */
 sumame(5, 7, function(dato){
     console.log('La suma es: ' + dato);
     }, 
     function(dato){
         console.log('La suma por dos es: ', (dato*2));
     });

/** otra manera de realizar canvac*/
/** 
 * 
 sumame(5, 7, dato => {
     console.log('La suma es: ' + dato);
     }, 
     dato => {
         console.log('La suma por dos es: ', (dato*2));
     });
 */
