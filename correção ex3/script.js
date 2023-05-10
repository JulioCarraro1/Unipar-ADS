let primeiro = document.querySelector("#primeiro");

let segundo = document.querySelector("#segundo");

let soma = document.querySelector("#soma");

let resultado = document.querySelector("#resultado");

function somar(){
    let um = parseInt(primeiro.value)
    let dois = parseInt(segundo.value)
    resultado.textContent = um-dois;
}
soma.onclick = function(){
    somar();
}

