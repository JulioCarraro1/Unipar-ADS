let inputvlr1 = document.querySelector("#inputvlr1");
let inputvlr2 = document.querySelector("#inputvlr2");
let inputvlr3 = document.querySelector("#inputvlr3");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado")

function calcularmedias(){
    let vlr1 = Number(inputvlr1.value);
    let vlr2 = Number(inputvlr2.value);
    let vlr3 = Number(inputvlr3.value);

    let mediaaritmetica = (vlr1 + vlr2 +vlr3)/3;

    let somavlrpeso = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somapesos = 3 + 2 + 5;
    let mediaponderada = somavlrpeso / somapesos;

    let somamedias = mediaaritmetica +  mediaponderada;

    let mediamedias = somamedias / 2;


    h3resultado.innerHTML = 
    "media aritmetica: "+ mediaaritmetica + "<br>"+
    "media ponderado: "+ mediaponderada + "<br>" +
    "soma das medias:" + somamedias + "<br>" +
    "medias das medias: " + mediamedias + "<br>";

}

btcalcular.onclick = function(){
    calcularmedias();
}