let Valordokg = document.querySelector("#Valordokg");
let pesodoproduto = document.querySelector("#pesodoproduto");
let total = document.querySelector("#total");
let btcalcular = document.querySelector("#btcalcular");

function calcularvalor(){
    let vlrdokg = Number(Valordokg.value)
    let vlrproduto = Number(pesodoproduto.value)
     
    total.innerHTML = "valor total sera:" +vlrdokg *vlrproduto;
}

btcalcular.onclick = function(){
    calcularvalor();
}