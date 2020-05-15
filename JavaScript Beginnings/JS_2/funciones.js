// una forma de hacerlo
/*function mensaje(msj) {
    console.log(msj);
}

var msj = 'Mensaje de la función';
mensaje(msj);
*/

// Otra forma de hacerlo
/*function mensaje() {
    return 'Mensaje como devolución de la función';
}

var msj = mensaje();
console.log(msj);
*/

// Argumento de una función
/*function sumar(a, b, c=3) {
    return a + b + c;
}

var result = sumar(4,5,8);
var result1 = sumar(3,7);
console.log(result);
console.log(result1);
*/

// Funciones recursivas
/*
var factorial = function(n) {
    if ((n == 0) || (n == 1))
        return 1;
    else
        return (n * factorial(n - 1));
}

console.log(factorial(4));
*/

// Arreglos
var nombres = ['Grover', 'Carlos', 'Esteban', 'Blanca'];
var vegetales = ['Tomate', 'Lechuga', 'Zanahoria'];

/*console.log(nombres[3]);
console.log(vegetales[1]);

nombres[0] = 'Yamile';
vegetales[1] = 'Nabo';

console.log(nombres[0]);
console.log(vegetales[1]);
*/
/*console.log(nombres.length);
for (var i = 0; i <= nombres.length - 1; i++){
    console.log(nombres[i]);
}

vegetales.forEach(function(elemento, indice){
    console.log(elemento, indice)
})
*/

nombres.push('Pedro'); // Agrega un elemento al final del arreglo
console.log(nombres);

nombres.unshift('Lili'); // Agrega un elemnto al innicio del arreglo
console.log(nombres);

nombres.pop(); // quita el último elemento del arreglo
console.log(nombres);

nombres.splice(1, 2); // elimina un elemento del arreglo en este caso a partir del elemento 1, 2 elementos
console.log(nombres);