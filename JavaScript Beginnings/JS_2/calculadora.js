const botonNumeros = document.getElementsByName('data-number'); // arreglos
const botonOpera = document.getElementsByName('data-opera');  // arreglo
const botonIgual = document.getElementsByName('data-igual')[0]; //arreglo y especificamente obtenemos el indice 0
const botondelete = document.getElementsByName('data-delete')[0]; //areglo y especificamnete obtenemos el indice 0
var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value = opeActual;
}

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperation(boton.innerText);
    })
});

function selectOperation(op){
    if(opeActual == '') return;
    if(opeAnterior != ''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch(operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default: 
            return;
    } 
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botondelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

