'use strict'

// arrays, arreglos, matrices

var nombre = "Esteban";
var nombres =["Esteban", "Yamile", "Jose", "Julian"];
var lenguajes = new Array("PHP", "Wordpress", "Angular");

/*
//console.log(nombres);
console.log(lenguajes[2]);

var elemento = parseInt(prompt("Cuál elemento del array quieres??", 0));

if (elemento >= nombres.length) {
    alert("Introduce el número correcto menor que " +
        nombres.length);
    }else{
        alert("El usuario seleccionado es: "
        +nombres[elemento]);
    }

alert(nombres[elemento]);

*/

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");

// Esta es una manera de recorrer un array
/*for (var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/

// esta es otra forma de recorrer un array
lenguajes.forEach((elemento, index, data) => {
    document.write("<li>"+elemento+"</li>");
});
document.write("</ul>");