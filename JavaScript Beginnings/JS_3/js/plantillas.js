'use strict'

// Plantillas de texto

var nombre = prompt('INGRESA TU NOMBRE');
var apellido = prompt('INGRESA TUS APELLIDOS');

//ingresar texto grande con comillas invertidas, hace parte de los últimos estandares de JS
var texto = `
        <h1>Hola que tal<h1>
        <h3>Mi nombre es: ${nombre}<h3>
        <h3>Mi apellido es: ${apellido}<h3>
        `;

document.write(texto);