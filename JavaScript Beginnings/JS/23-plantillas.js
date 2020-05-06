'use strict'

// Plantillas de texto, plantilla de JavaScript

var nombre = prompt("INTRODUCE TU NOMBRE");
var apellido = prompt("INTRODUCE TUS APELLIDOS");
//var texto = "Mi nombre es: "+nombre+ "<br/> mis apellidos son: " +apellido;

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h1>Mi apellido es: ${apellido}</h1>
`;
document.write(texto);

// ESTO ES NUEVO EN JAVASCRIPT 6