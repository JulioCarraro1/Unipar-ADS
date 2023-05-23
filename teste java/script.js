let valordoproduto = document.querySelector("#valordoproduto");
let valorpago = document.querySelector("#valorpago");
let calculartroco = document.querySelector("#calculartroco");
let h3valor = document.querySelector("#h3valor");


function valordotroco(){
    let vlrdoproduto = Number(valordoproduto.value);
    let vlrpago= Number(valorpago.value);

    h3valor.innerHTML =
    "troco:" + (vlrdoproduto - vlrpago);
}

calculartroco.onclick = function(){
    valordotroco();

}