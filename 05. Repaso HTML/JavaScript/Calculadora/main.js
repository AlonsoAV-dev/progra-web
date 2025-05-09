let numeroActual = '';
let numeroAnterior = '';
let operacion = null;

function visualizacion(num1){
    let pantalla = document.getElementById("resultado-h1"); 
    if(pantalla.innerHTML == "0"){
        numeroActual = numeroActual + String(num1);
        pantalla.innerHTML = String(num1);
    }else if (pantalla.innerHTML != "0" ){
        numeroActual = numeroActual + String(num1);
        pantalla.innerHTML = numeroActual;
    }
}
function boton_limpiar(){
    let pantalla = document.getElementById("resultado-h1");
    pantalla.innerHTML= "0";
    numeroActual = " ";
}
function boton_operacion(ope){
    numeroAnterior = parseInt(numeroActual);
    numeroActual = " "; 
    operacion = ope;
}
function boton_igual(){
    switch(operacion){
        case '+':
            suma();
            break;
        case '−':
            resta();
            break;
        case 'x':
            multiplicacion();
            break;
        case '÷':
            division();
            break;
    }
}
function suma(){
    let numero1=parseInt(numeroActual);
    let numero2=parseInt(numeroAnterior);
    let resultado=String(numero2)+String(numero1);
    document.getElementById("resultado-h1").innerHTML = String(resultado);
}
function resta(){
    let numero1=parseInt(numeroActual);
    let numero2=parseInt(numeroAnterior);
    let resultado=numero2-numero1;
    document.getElementById("resultado-h1").innerHTML = String(resultado);
}
function multiplicacion(){
    let numero1=parseInt(numeroActual);
    let numero2=parseInt(numeroAnterior);
    let resultado=numero2*numero1;
    document.getElementById("resultado-h1").innerHTML = String(resultado);
}
function division(){
    let numero1=parseInt(numeroActual);
    let numero2=parseInt(numeroAnterior);
    let resultado=numero2/numero1;
    document.getElementById("resultado-h1").innerHTML = String(resultado);
}

function boton_numero(numero){
    visualizacion(numero)
}

