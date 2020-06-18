'use strict'

// Arrays, arreglos, matrices

var nombre = 'Yamile Peña';
var nombres = ['Yamile Peña', 'Esteban Pulido Peña', 'Blanca Romero', 'Pepito Perez', 52, true];
var lenguaje = new Array('PHP', 'JS', 'Go', 'Java', 'C#', 'C', 'Pascal');
/*
var elemento = parseInt(prompt('Que elemento del array quieres??', 0));
if (elemento >= nombres.length) {
    alert('Introduce el número correcto menor que '+ nombres.length);
}else{
    alert('El usuario seleccionado es: '+ nombres[elemento]);
}
*/

document.write('<h1>Lenguajes de programación del 2018</h1>');
document.write('<ul>');

/*
for(var i = 0; i < lenguaje.length; i++){
    document.write('<li>'+ lenguaje[i]+'</li>');
}
document.write('</ul>');
*/

// Recorrer array con forEach y con funcion flecha (canvac)
lenguaje.forEach((elemento, index, data) => {
    document.write('<li>'+ elemento + '</li>');
});
document.write('</ul>');
