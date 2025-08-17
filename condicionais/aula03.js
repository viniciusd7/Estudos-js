/*

    1) faça um algoritimo que dado a 3 notas tiradas de um aluno em um semestre da faculdade calcule e imprima a sua media e sua classificação conforme a tabela abaixo

    média = (nota 1 + nota 2 + nota 3) / 3;

    classificação:
    -media menor que 5, reprovado
    -media entre 5 e 7, recuperação
    -media acima de 7, aprovado;
*/

const nota1 = 3;
const nota2 = 4;
const nota3 = 5;

let media = (nota1 + nota2 + nota3)/3
if(media < 5){
    console.log("que pena foi reprovado");
}else if(media >= 5 && media <=7){
    console.log("o aluno esta em recuperaçao")
}else{
    console.log("aprovado");
}
    
    