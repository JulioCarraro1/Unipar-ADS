let inputvlr = document.querySelector("#inputvlr");
let btverificar = document.querySelector("#btverificar");
let h3resultado = document.querySelector("#h3resultado");

function verificarimpar(){
    let valor = Number(inputvlr.value);
    
    if(valor % 2 !=0 ){
        h3resultado.innerHTML = 
        "este numero e impar!!";
    }else{
        h3resultado.innerHTML = 
        "este numero não e impar!!";
    }
}

btverificar.onlcick = function(){
verificarimpar();
}