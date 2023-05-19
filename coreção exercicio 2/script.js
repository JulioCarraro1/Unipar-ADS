let inputvlrpeso = document.querySelector("#inputvlrpeso");
let inputqtdpeso = document.querySelector("#inputqtdpeso");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calculartotalproduto() {
    let vlrpeso = Number(inputvlrpeso.value);
    let qtdpeso = Number(inputqtdpeso.value);

    h3resultado.innerHTML  = 
    "valor total do produto ; "+vlrpeso * qtdpeso;
}
   btcalcular.onclick = function(){
    calculartotalproduto();
   }