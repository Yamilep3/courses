'use strict'

/*
    1- pida 5 números por pantalla y los incluya en un array
    2- Mostrar el array entero (todos sus elementos) en el cuerpo
       de la página y en la consola
    3- Ordenarlo y mostrarlo
    4- invertir su orden y mostrarlo 
    5- Mostrar cuantos elementos tiene el array
*/

function mostrarArray(elementos, texto = "") {
    // mostrar en el cuerpo de la página
    document.write("<h1>Contenido del array " + texto + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });

    document.write("</ul>");
}

var numeros = new Array(5); 

// Pedir números
for(var i = 0; i <= 4; i++){
    numeros[i] = parseInt(prompt("Introduce un número", 0));
}

// Mostrar en el cuerpo de la página
mostrarArray(numeros);

// mostrar el array en la consola
console.log(numeros);

// ordenar y mostrar
// sort: ordena los elementos de un array, devuelve el arregloordenado
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, 'ordenado');

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

// contar lo elemnetos del array
document.write("<h1>El array tiene: "+numeros.length+"</h1>");