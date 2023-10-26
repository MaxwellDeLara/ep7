function mudar(objeto, imagem){// Função para mudar a imagem de um objeto com transição suave.
    porta.src = imagem;// Atualiza a imagem do objeto "porta".
}

function mudar(objeto, imagem){// Função para trocar uma imagem com transição suave e definir opacidade.

    var elemento = document.getElementById(objeto);

    if (elemento) {
        elemento.style.opacity = 0; // Define a opacidade para 0 para iniciar a transição.
        setTimeout(function() {
            elemento.src = imagem;  // Altera a imagem após um pequeno atraso.
            elemento.style.opacity = 1; // Define a opacidade de volta para 1 para a transição suave.
    }, 300);    // Atraso de 300 milissegundos (0,3 segundos) antes da troca de imagem.
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

function adicao(){
    fernanda.value = parseInt(aram1.value) + parseInt(aram2.value);
}
function subtrair(){
    fernanda.value = parseInt(aram1.value) - parseInt(aram2.value);
}
function multiplicacao(){
    fernanda.value = parseInt(aram1.value) * parseInt(aram2.value);
}
function divisao(){
    if(aram2.value == 0);// Evita divisão por zero, mas não faz nada.

    else{
        fernanda.value = parseInt(aram1.value) / parseInt(aram2.value);
    }
}