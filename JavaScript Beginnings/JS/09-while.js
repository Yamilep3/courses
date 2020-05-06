'use strict'

// Modo infinito 
// Bucle While, mientras que

var year = 2020

// Operador de incremento
while(year <= 2051) {
    // Ejecuta esto
    console.log("Estamos en el año: " +year);

    // Parar un bucle
    if(year == 2020){
        break;
    }

    year ++;
}

// Ahora el ejemplo anterior pero restando
while(year != 1998) {
    // Ejecuta esto
    console.log("Estamos en el año: " +year);

    year --;
}


// Do while
// Ejecutar y comprobar después

var years = 30;

do{
    alert("Solo cuando sea diferente a 20");
    years--;
}while(years > 25)