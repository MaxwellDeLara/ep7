function mudar(objeto, imagem){
    porta.src = imagem;
}

function mudar(objeto, imagem) {

var elemento = document.getElementById(objeto);

if (elemento) {
elemento.style.opacity = 0;/* Define a opacidade para 0 para iniciar a transição */
setTimeout(function() {
elemento.src = imagem;/* Altera a imagem após um pequeno atraso */
elemento.style.opacity = 1;/* Define a opacidade de volta para 1 para a transição suave */
}, 300);/* Atraso de 500 milissegundos (0,5 segundos) */
}
else {
console.error("Elemento não encontrado com o ID: " + objeto);
}
}
function funcaoResposta(){
    var respostaCorreta = "correta";
    var respostaUsuario = document.querySelector('input[name="resposta"]:checked');
    if(respostaUsuario){
        if(respostaUsuario.value === respostaCorreta){
            alert("Correto");
        }
        else{
            alert("Errado");
        }
    }
    else{
        alert("Escolha uma opção");
    }
}

function equacao1grau(){
    var a = vara.value;
    var b = varb.value;
    var x = varx.value;

    var resposta = -b/a;

    if(a == 0){
        alert("a deve ser diferente de 0");
    }
    else{
        if(x == resposta){
            alert("acertou");
        }
        else{
            alert("errou");
        }
    }
}