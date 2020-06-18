'use strict'

// arrays dentro de otros arrays
var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];
var lenguajes = ['PHP', 'JAVA', 'C#', 'C', 'PASCAL'];
var cine = [categorias, peliculas];

//console.log(cine); // devuelve los arrays de categorias y peliculas
//console.log(cine [0][1]); // devuelve: de categorias 'terror'
//console.log(cine[1][2]); // devuelve de peliculas 'Gran torino'


// Adicionar elementos al array
/*var elemento = '';
do {
    elemento = prompt('Introduce tu pelicula: ');
    peliculas.push(elemento);
}while (elemento != 'acabar');
*/


// eliminar el útimo elemento en este caso el 'acabar'
//peliculas.pop();
//console.log(peliculas);


// saber cual es el indice que tiene un elemento en un arreglo
/*var indice = peliculas.indexOf('Gran Torino');
if (indice > -1){ // -1 es cuando no se encuentra en el arreglo
    peliculas.splice(indice, 1) // cuantos indices quiero borrar empezando por el último elemento
}
console.log(indice);
*/


// convertir un array a un string
//var peliculas_string = peliculas.join();
//console.log(peliculas_string);


// Convertir una cadena a un array con split recibe como parametros un separador y un limite (opcional)
// que divide la matriz devuelta en la cantidad de elementos impuesta por el limite.
/*var cadena = 'texto1, texto2, texto3';
var cadena_array = cadena.split(', ');
console.log(cadena_array);
*/


// orddenar un array de atras hacia adelante
// peliculas.reverse();


// ordenar alfabeticamente un array
//peliculas.sort();


// recorrer array con 'for in'
/*document.write('<ul>');
for (let lenguaje in lenguajes){
    document.write('<li>'+ lenguajes[lenguaje]+'</li>');
}
document.write('</ul>');
*/


// Realizar búsquedas en un arreglo find o findIndex que enceuntra el indice donde se encuentra el elemento
// con 'find'
//var busqueda = lenguajes.find(lenguaje => lenguaje == 'PHP');


// Realiza búsqueda concreta retorna true o false 'some'

var precios = [10, 20, 30, 50, 80,12];
var busqueda = precios.some(precio => precio < 100);
console.log(busqueda);