'use strict'

// DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color;    
}

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja"); // de esta manera reemplaza la línea anterior

caja.innerHTML = "¡Texto en la caja desde JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";
console.log(caja);


// conseguir los elementos por su etiqueta 
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
    if (typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);  // append añade un separador (linea) después
        seccion.append(parrafo);
        //document.querySelector("#miseccion").prepend(parrafo);  // prepend añade antes separador linea    
    }
}
seccion.append(hr);


// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = 'yellow'

var div;
for(div in divsRojos){
    if(divsRojos[div].className == 'rojo'){
        divsRojos[div].style.background = 'red';
    }
}