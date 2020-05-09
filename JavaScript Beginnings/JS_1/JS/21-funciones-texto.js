'use strict'

// Transformacion de texto

/*
    to: Sirve para indicar  que quieres transformar un texto 
    toString: Convierte a string
*/

var numero = 444;
var texto1 = "Bienvenido a JavaScript";
var texto2 = "Estoy aprendiendo mucho";
var dato = numero.toString();
    dato = texto1.toUpperCase();

console.log(dato);

// Calcular longitud

/*
    length: Sirve para saber si hay algo en la variable
*/

var nombre = "Esteban";

console.log(nombre.length);

// Concatenar o unir textos
//var textoTotal = texto1+ " " +texto2;
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);
