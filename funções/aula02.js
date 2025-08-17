function Escreva(nome){
    return("seu nome é " + nome);
}

function VerificarIdade(idade){
    if (idade >= 18){
        console.log(Escreva('vinicius') + ' você e maior');
    }else{
        console.log('você e menor');
    }
}

VerificarIdade(18);