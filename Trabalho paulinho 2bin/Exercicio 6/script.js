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