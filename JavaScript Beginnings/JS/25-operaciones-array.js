'use strict'

var categorias = ['accion', 'terror', 'miedo'];
var peliculas = ['Torrente', 'Torrente2', 'Torrente3', 'Torrente4'];
var cine = [categorias, peliculas];

//console.log(cine[0][1]);

var elemento = prompt("Introduce tu pelicula:"); // prompt: metodo que muestra un diálogo con mensaje opcional que solicita al usuario que introduzca un texto 
//peliculas.push(elemento); // añade uno o más elementos al final de un array

while(elemento != "acabar"){
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
    }

console.log(peliculas);

/*
    Push: agrega algo a un array
*/

