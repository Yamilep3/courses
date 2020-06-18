'use strict'

// Parametros REST y SPREAD

// REST
function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(restoDeFrutas);
}

listadoFrutas('Naranja', 'manzana', 'sandia', 'melón', 'kiwi', 'pera', 'coco');

// SPREAD
var frutas = ['naranja', 'manzana'];
listadoFrutas(...frutas, 'sandia', 'pera', 'melon','coco');