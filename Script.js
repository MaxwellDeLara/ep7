function funcaoResposta(){
    var respostaCorreta = "correta";
    var respostaUsuario = document.querySelector('input[name="resposta"]:checked');
    if(respostaUsuario){
        if(respostaUsuario.value === respostaCorreta){
            document.getElementById("retorno").textContent = "Correto!";
        }
        else{
            document.getElementById("retorno").textContent = "Errado!";
        }
    }
    else{
        document.getElementById("retorno").textContent = "Escolha uma opção!";
    }
}