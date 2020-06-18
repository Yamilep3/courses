'use strict'

// Eventos del ratón

function cambiarColor(){
    console.log('Me has dado click');

    var bg = boton.style.background;

    if(bg =='green'){
        boton.style.background = 'red';
    }else{
        boton.style.background = 'green';
    }

    boton.style.padding = '10px';
    boton.style.border = '1px solid #ccc';

    return true;
}

var boton = document.querySelector('#boton');

// Evento click
boton.addEventListener('click', function(){
    cambiarColor();
});

// mouse over --- efecto del pasar el mouse sobre un botton
boton.addEventListener('mouseover', function(){
    boton.style.background = 'black';
});

// mouseout --- captura o lanza el evento al sallir del botón
boton.addEventListener('mouseout', function(){
    boton.style.background = '#ccc';
});

// Focus --- hacer foco en el campo
var input = document.querySelector('#campo_nombre');
input.addEventListener('focus', function(){
    console.log('[focus] Estas dentro del input');
});

// Blur --- cuando salimos del foco
input.addEventListener('blur', function(){
    console.log('[blur] Saliste del input');
});

// keydown  --- sucede cuando se pulsa una tecla
input.addEventListener('keydown', function(event){
    console.log('[keydown] estas pulsando esta tecla', String.fromCharCode(event.keyCode));
});

// keypress   --- tecal presionada
input.addEventListener('keypress', function(event){
    console.log('[keypress] tecla presionada', String.fromCharCode(event.keyCode));
})

// keyup  --- permite capturar el evento cuando levanatamos el dedo de la tecla
input.addEventListener('keyup', function(event){
    console.log('[keyup] tecla soltada', String.fromCharCode(event.keyCode));
})
