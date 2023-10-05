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