let Inputcomprimento = document.querySelector("#Inputcomprimento");
let Inputlargura = document.querySelector("#Inputlargura");
let btarea = document.querySelector("#btarea");
let resultadoarea = document.querySelector("#resultadoarea");

function calculararea(){
    let comprimento = Number(Inputcomprimento.value);
    let largura = Number(Inputlargura.value);

    resultadoarea.innerHTML = "Area do terreno:"+comprimento * largura
}

btarea.onclick = function(){
    calculararea();
}

///exercicio 2________________

let Inputquantcavalos = document.querySelector("#Inputquantcavalos");
let btferraduras = document.querySelector("#btferraduras");
let resultadoferraduras = document.querySelector("#resultadoferraduras");


function calcularferraduras(){
    let qtdcavalos = Number(Inputquantcavalos.value);
    let qtdferraduras = qtdcavalos*4;

    resultadoferraduras.innerHTML = "A quantidade de ferraduras necessarias serão:"+ qtdferraduras

}

btferraduras.onclick = function(){
    calcularferraduras()
}

///Ex 3

let Inputquantidadepao = document.querySelector("#Inputquantidadepao");
let Inputquantidadebroas = document.querySelector("#Inputquantidadebroas");
let btcalcularvendas = document.querySelector("#btcalcularvendas");
let h3resultadovendas = document.querySelector("#h3resultadovendas");
let h3poupança = document.querySelector("#h3poupança");

function Calcularfaturamento(){
    let qtdpão = Number(Inputquantidadepao.value);
    let qtdbroas = Number(Inputquantidadebroas.value);
    let valorpao = qtdpão * 0.12;
    let valorbroa = qtdbroas * 1.50;
    let valortotal = valorpao + valorbroa;
    let valorpoupança = (valortotal * 0.1).toFixed(2);
    h3resultadovendas.innerHTML = "O valor arrecadado no dia foi: " + valortotal + "R$";
    h3poupança.innerHTML = "O valor deixado na poupança será: " + valorpoupança + "R$";
}

btcalcularvendas.onclick = function(){
    Calcularfaturamento();
}


///Ex 4

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

///ex 5

let InputPreçolitro = document.querySelector("#InputPreçolitro");
let Inputvalorcolocado = document.querySelector("#Inputvalorcolocado");
let btcalcularlitro = document.querySelector("#btcalcularlitro");
let h3resultadolitro = document.querySelector("#h3resultadolitro");

function calcularlitros(){
    let preçolitro = Number(InputPreçolitro.value);
    let valorcolocado = Number(Inputvalorcolocado.value);
    let calcular = valorcolocado/preçolitro.toFixed(1);
    h3resultadolitro.innerHTML = "O valor colocado de "+valorcolocado+" R$ deu "+calcular.toFixed(3)+" em litros."

}

btcalcularlitro.onclick = function(){
    calcularlitros();
}

///ex 6

    let inputkgprato = document.querySelector("#inputkgprato");
    let btcalcularquilos = document.querySelector("#btcalcularquilos");
    let h3resultadoquilos = document.querySelector("#h3resultadoquilos");

    function calcularvalorkg() {
      let kgprato = Number(inputkgprato.value);
      let calcularkg = kgprato * 12.00;
      h3resultadoquilos.innerHTML = "O valor a ser pago será: R$" + calcularkg.toFixed(2);
    }

    btcalcularquilos.onclick = function() {
      calcularvalorkg();
    }