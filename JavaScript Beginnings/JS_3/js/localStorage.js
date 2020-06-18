'use strict'

// localStorage

// Comprobar disponibilidad del localStorage
if(typeof(Storage) !== 'undefined'){
    console.log('LocalStorage disponible');
}else {
    console.log('Incompatible con localstorage');
}

// Guardar datos en el localStorage
localStorage.setItem('titulo', 'Curso JavaScript');

// Recuperar elementos
document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo');

// Guardar objetos
var usuario = {
    nombre: 'Yamile Peña',
    email:'yamile@correo.com',
    web: 'yamilepena.com'
};

localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem('usuario'));

console.log(userjs);
document.querySelector('#peliculas').append(' ' +userjs.web+' - '+userjs.nombre);