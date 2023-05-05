let inputnome = document.querySelector("#inputnome")
let inputsobrenome = document.querySelector("#inputsobrenome")
let btexibir = document.querySelector("#btexibir")
let H1nomesobrenome = document.querySelector("#H1nomesobrenome")

function exibirNomesobrenome(){
let nome = String(inputnome.value)
let sobrenome = String(inputsobrenome.value)
//textcontent = somente texto
H1nomesobrenome.textContent = nome+' '+sobrenome;

//innerHTML = reconhece tags html
H1nomesobrenome.innerHTML = nome+' '+sobrenome+"<hr>"

//adicionando formatação css
H1nomesobrenome.style.color = 'green'
}

btexibir.onclick = function(){
    exibirNomesobrenome()
}