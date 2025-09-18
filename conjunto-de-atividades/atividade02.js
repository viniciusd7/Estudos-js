// 2) faça um programa que receba N (quantidade de numeros) e seus respectivos valores 
//imprima o miaor numero par e o menor numero impar 

// Exemplo: 
//        Entrada:
//            5
//            3
//            4
//            1
//           10
//            8

//         saida:
//        Maior numero e par: 10


function principal() {
  const numeros = [3, 4, 1, 10, 8]; // insira os numeros 

  const pares = numeros.filter(n => n % 2 === 0);
  const impares = numeros.filter(n => n % 2 !== 0);

  if (pares.length > 0) {
    console.log("Maior número par:", Math.max(...pares));
  } else {
    console.log("Nenhum numero par encontrado.");
  }

  if (impares.length > 0) {
    console.log("Menor número ímpar:", Math.min(...impares));
  } else {
    console.log("Nenhum número ímpar encontrado.");
  }
}

principal();

