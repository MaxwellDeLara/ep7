function funcaoResposta(){
    var respostaCorreta = "correta"
    var respostaUsuario = document.querySelector('input[name="resposta"]:checked');
    if(respostaUsuario){
        if(respostaUsuario.value === retaCorreta){
            document.getElementById("reo").textContent = "Correto";
        }
        else{
            document.getElementById("retorno").textContent = "";
        }
    }
    else{
        document.getElementById("retorno").textContent = "Escolha uma opção!";
    }
}