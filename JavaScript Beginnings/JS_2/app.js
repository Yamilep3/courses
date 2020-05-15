// Uso de variables
/*var nombre = 'Peña';
console.log(nombre);
console.log(typeof(nombre));

var edad = 35;
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);
puestoDeTrabajo = null;
console.log(puestoDeTrabajo);
*/

// Operadores matemáticos
/*var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2020;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana ' + yearAna);
console.log('Año en que nació Maria ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2);
*/

// Operadores lógicos, unarios y de asignación
// Lógicos < > <= >= ==
/*var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna =! (edadAna == edadMaria);
console.log(mayorAna);*/  

// Unarios, ++Incremento, --Decremento 
//edadAna++;
/*console.log(++edadAna);
console.log(edadAna);*/

//Asignación, +=, -=, *=, /=, %=
/*var a = 11;
var b = 5;
var c = a % 5; // Residuo o resto de una división
console.log(c);

a += b;
console.log(a);
*/

// Sentencia if ... else
/*var nombre = 'Yamile'
var esCasada = false;

if (esCasada == true) {
    console.log(nombre + ' es casada');
} else {
    console.log(nombre + ' es soltera');
}
*/

// Sentencia if .. else
/*var nombre = 'Esteban';
var edad = 60;
*/

// edad < 12 es un niño
// edad > 11, es < 18 es un adolescente
// edad > 17, es < 60 es un adulto
// edad > 60 es un anciano

/*if (edad < 12) {
    console.log(nombre + ' es un niño');
} else if ((edad > 11) && (edad < 18)) {
    console.log(nombre + ' es un adolescente');
} else if ((edad > 17) && (edad < 60)) {
    console.log(nombre + ' es un adulto');
}else {
    console.log(nombre + ' es un anciano'); 
}
*/

// Sentencia Switch
/*var mes = 5;

switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    default:
        console.log('Mes no encontrado');
    }
    */

// Sentencia For
/*for (var i=1; i<=25; i+=5) {
    console.log(i);
}
*/

// Sentencia While, Do while
/*var i = 1;
while(i <= 10) {
    console.log(i);
}
*/

// Sentencia Do .. while
var i = 11;
do{
    console.log(i);
    //i++;
}while(i <= 10){
console.log(i);
}
