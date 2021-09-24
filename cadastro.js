let readlineSync = require('readline-sync');

var nomePeca;
var pesoPeca;
var capacidade = 9;

nomePeca = readlineSync.question("Digite o nome da Peca: ");
pesoPeca = readlineSync.question("Digite o peso da Peca: ");

if(pesoPeca > 100){
    //condição verdadeira
    if(capacidade > 10){
        //condição verdadeira
        console.log("Não cadastrar, capacidade maxima atingida!");
    }else if(nomePeca.length < 3){
        console.log("Não cadastrar nome inválido!");
    }else{
        console.log("Peca cadastrada com Sucesso!!");
    }
}else{
    //condição falsa
    console.log("Não cadastrar Peso insuficiente!");
} 
