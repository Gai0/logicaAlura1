showMsgInitial();

let tentativas = 3;

let numeroSecreto = numeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}


function numeroAleatorio() {

    return parseInt(Math.random() * 10 );        

    }     
  

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    }


function reiniciarJogo() {
    
    numeroSecreto = numeroAleatorio();
    limparCampo();
    showMsgInitial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    tentativas = 3;
}


function showMsgInitial() {

    exibirTextoNaTela('h1', 'Jogo de numeros aleatorios! gab');
    exibirTextoNaTela('p', 'Escreva um numero de 1 a 10!');    
    
}

document.getElementById('botaoChute').removeAttribute('disabled'); 

function verificarChute(){

    let chute = document.querySelector('input').value;
   

    if (chute == numeroSecreto) {        

        exibirTextoNaTela('h1', 'Voce acertou!')
        exibirTextoNaTela('p', ' PARABENS!')
        document.getElementById('reiniciar').removeAttribute('disabled'); 
        //document.getElementById('botaoChute').setAttribute('disabled', 'true');                              
        
        }   else {

                if (tentativas == 0){

                    exibirTextoNaTela('h1', 'Acabou as tentativas!');
                    exibirTextoNaTela('p', '');
                    document.getElementById('reiniciar').removeAttribute('disabled');
                    reiniciarJogo();

                    }

                    else {

                        exibirTextoNaTela('h1','Errou !');
                        exibirTextoNaTela('p', 'voce tem mais ' + tentativas );
                        
                    }
                    
            limparCampo();        
                    
            tentativas = tentativas - 1 ;
        }                 
      

            
}  









