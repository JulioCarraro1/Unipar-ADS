let Inputquantidadepao = document.querySelector("#Inputquantidadepao");
let Inputquantidadebroas = document.querySelector("#Inputquantidadebroas");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");
let h3poupança = document.querySelector("#h3poupança");

function Calcularfaturamento(){
    let qtdpão = Number(Inputquantidadepao.value);
    let qtdbroas = Number(Inputquantidadebroas.value);
    let valorpao = qtdpão * 0.12;
    let valorbroa = qtdbroas * 1.50;
    let valortotal = valorpao + valorbroa;
    let valorpoupança = (valortotal * 0.1).toFixed(2);
    h3resultado.innerHTML = "O valor arrecadado no dia foi: " + valortotal + "R$";
    h3poupança.innerHTML = "O valor deixado na poupança será: " + valorpoupança + "R$";
}

btcalcular.onclick = function(){
    Calcularfaturamento();
}
