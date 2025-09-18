// faça um programa que receba a media de um aluno.
// caso a média seja <5 imprima "reprovado"
// caso a média seja >= 5 e <7 imprima "recuperação"
// caso a média seja >= 7 imprima "Aprovado"

const media = 6; // coloque aqui a nota do aluno 

if (media < 5) {
    console.log('reprovado');
} else if (media >= 5 && media < 7) {
    console.log('recuperação');
} else if (media >= 7) {
    console.log('Aprovado');
} else {
    console.log('número inválido');
}



