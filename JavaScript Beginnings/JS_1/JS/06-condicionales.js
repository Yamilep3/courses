'use strict'

// Condicional if
// Si A es igual a B entonces haz algo

var edad1 = 20;
var edad2 = 12;

// si pasa esto 
if (edad1 > edad2) {
    //Ejecuta esto
    console.log("edad 1 es mayor que edad2");
    // si no
   }else {
       console.log("edad 1 es inferior");
   }
    /* Operadores racionales 
        Mayor: >
        Menor: <
        mayor o igual: >=
        Menor o igual: <=
        igual: ==
        Distinto: !=
    */

    var edad = 19;
    var nombre = 'Esteban';

    if (edad >= 18){
        //es maypor de edad
        console.log(nombre + " tiene " + edad + " años es mayor de edad");
        if(edad <= 33){
            console.log('Todavía es joven');
        }else if(edad >= 70){
            console.log('Eres anciano');
        }else {
            console.log('Ya no eres joven');
        }
    }else{
        // Es menor de edad
        console.log(nombre + " tiene " + edad + " años es menor de edad");
    }

    // Operadores lógicos
    /*
        AND(Y): &&
        OR(O): ||
        NEGACION: !=
    */

    var year = 2020;

    // NEGACION
    if(year != 2016){
        console.log("El año no es 2016 realmente es: " +year);
    } 

    // AND
    if(year >= 2000 && year <= 2020){
        console.log("Estamos en la era actual");
    }else {
        console.log("Estamos en la era postmoderna");
    }

    // OR
    if(year >= 2008 || year == 2018){
        console.log("El año acaba en 8");
    }