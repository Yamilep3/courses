'use strict'

// Transformación de textos

var numero = 444;
var texto1 = 'Bienvenido al curso de JavaScript curso';
var texto2 = 'Es muy buen curso';

var dato = numero.toString();    // convertir entero en string
    dato = texto1.toLowerCase(); // convertir texto en minúsculas
    dato = texto2.toUpperCase(); // convertir texto en mayúsculas

console.log(dato);

// Calcular longitud
var nombre = 'Yamile Peña';
console.log(nombre.length);

// Concatenar - unir textos  
//var textoTotal = texto1+ ' ' +texto2;
//otra forma de concatenar es usando la función "concat"
var textoTotal = texto1.concat(texto2);

console.log(textoTotal);

// Buscar palabras en un texto, también funciona con "search" es decir cambiar indexof por search
//var busqueda = texto1.indexOf('curso');

// conocer donde está la última aparición de la palabra
//var busqueda = texto1.lastIndexOf('curso');

// traer el array con el resultado de lo que encuentre del texto a buscar
//var busqueda = texto1.match('curso'); // asi retorna el  primero que encuentre
//var busqueda = texto1.match(/curso/gi); // así retorna todos las coincidencias del texto

// Extraer parte de un texto 
//var busqueda = texto1.substr(14,5);

// Extraer una letra de una posición específica en el texto
//var busqueda = texto1.charAt(34);

// buscar un texto donde en el caso de encontrar retorna true o false 
//var busqueda = texto1.includes('JavaScript');

// cambiar un texto por otro
//var busqueda = texto1.replace('JavaScript', 'Symfony');

// devolver un texto desde determinada posición se puede solo con un parametro
var busqueda = texto1.slice(14, 22);

// recortar palabras y guardarlas en un array también se puede sin incluir parametro
//var busqueda = texto1.split(' ');

// Quitar espacios al inicio y al final
var busqueda = texto1.trim();



console.log(busqueda);