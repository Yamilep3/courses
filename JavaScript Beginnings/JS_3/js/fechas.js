'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth() + 1; //tener en cuenta que empieza a contar desde 0
var dia = fecha.getDay();
var hora = fecha.getHours();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
`;


console.log(textoHora);