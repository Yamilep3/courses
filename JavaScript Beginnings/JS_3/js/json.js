'use strict'

// JSON: JavaScript Object Notacion

var pelicula = {
    titulo: 'Batman vs Superman',
    pais: 'Estados Unidos',
    year: 2017
}

var peliculas = [
    {titulo: 'La verdad duele', year: 2016, pais: 'Francia'},
    pelicula
];

var caja_peliculas = document.querySelector('#peliculas');
var index;
for(index in peliculas){
    var p = document.createElement('p');
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}