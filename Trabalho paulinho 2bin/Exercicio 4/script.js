let inputnome = document.querySelector("#inputnome");
let inputidade = document.querySelector("#inputidade");
let btcalculardias = document.querySelector("#btcalculardias");
let h3resultadodias = document.querySelector("#h3resultadodias");

function calculardias(){
    let nome = inputnome.value;
    let idade = inputidade.value;
    let calcular = idade * 365;

    h3resultadodias.innerHTML = "Sr(a) " + nome + ", você já viveu " + calcular + " dias na terra.";
}

btcalculardias.onclick = function(){
    calculardias();
}
