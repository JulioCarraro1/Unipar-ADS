let Inputquantcavalos = document.querySelector("#Inputquantcavalos");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");


function calcularferraduras(){
    let qtdcavalos = Number(Inputquantcavalos.value);
    let qtdferraduras = qtdcavalos*4;

    h3resultado.innerHTML = "A quantidade de ferraduras necessarias serão:"+ qtdferraduras

}

btcalcular.onclick = function(){
    calcularferraduras()
}