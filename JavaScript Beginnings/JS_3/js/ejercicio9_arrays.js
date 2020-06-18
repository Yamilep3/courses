'use strict'
/**
 * 1. Pida 6 números  por pantalla y los incluya en un array
 * 2. Mostrar el array entrero (todos sus elementos) en el cuerpo de la página y en la consola
 * 3. ordenarlo y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuántos elementos tiene al array
 * 6. Busqueda de un valor introducido  por el usuario, que nos diga si lo encuentra y su indice
 * (Se valorará el  uso de funciones)
 */

 /*
 var numeros = [];
 var numero = parseInt(prompt('Ingrese número ', 0));
   
 document.write('<h1>'+'La lista del array es: '+'</h1>');
 for (var i = 0; i <= 5; i++){
    if(isNaN(numero)){
        alert('Ingrese solo valores numericos');
    }else {
        numero = parseInt(prompt('Ingrese número ', 0));
        numeros.push(numero);
    }
}

console.log(numeros);
numeros.sort();
document.write('<ul>');
document.write('<li>'+numeros.sort()+'</li>');
document.write('<li>'+numeros.reverse()+'</li>');
document.write('</ul>');
document.write('<h1>El array tiene '+ numeros.length + ' elementos</h1>');       
*/


// Otra forma de solucionar elejercicio
function mostrarArray(elementos, textoCustom = ""){
    document.write('<h1>Contenido del array '+textoCustom+'</h1>');
    document.write('<ul>');
    elementos.forEach((elemento, index) => {
        document.write('<li>'+elemento+'</li>');
    });
    document.write('</ul>');
}

// pedir 6 números
var numeros = [];
for(var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt('Introduce un número', 0))); // push para adicionar al array
}

// Mostrar en el cuerpo de la página
mostrarArray(numeros);

// Mostrar array en la consola
console.log(numeros);

// ordenar y mostrar
numeros.sort(function(a, b){return a-b}); /// ordenamiento por orden númerico ascendente (b-a orden descendente)
mostrarArray(numeros, 'ordenado');

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

// cuántos elementos tiene un array
document.write('<h1>El array tiene: '+numeros.length+' elementos');

// Búsqueda
var busqueda = parseInt(prompt('Buscar un número', 0));
var posicion = numeros.findIndex(numero => numero == busqueda);  //findindex para encontrar el indice de un elemento de un array

if (posicion && posicion != -1){
    document.write('<hr/><h1>ENCONTRADO</h1>');
    document.write('<h1>Posición de la búsqueda: '+posicion+'</h1><hr/>');
}else{
    document.write('<hr/><h1>NO ENCONTRADO</h1>');
}