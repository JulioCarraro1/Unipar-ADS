let inputmedia = document.querySelector("#inputmedia");
let btverificamedia = document.querySelector("#btverificamedia");
 
function verificamedia(){
    let media = Number(inputmedia.value)
if(media > 60){
    alert('o aluno esta APROVADO');
}   else if(media > 20  && media <=59){
    alert('o aluno devera fazer SUB');
}else{
    alert('o aluno esta REPROVADO');
}
}
btverificamedia.onclick = function(){
    verificamedia();
}