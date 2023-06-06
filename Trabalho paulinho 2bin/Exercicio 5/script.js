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