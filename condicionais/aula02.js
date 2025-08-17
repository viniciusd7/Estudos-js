// faça um programa para calcular o valor de uma viagem.

// 1 - preço do etanol;
// 2 - preço da gasolina;
// 3 - o tipo de combustivel que está no seu carro;
// 4 - gasto médio de combustivel do carro por KM;
// 5 - distância em KM da viagem;

const PrecoGasolina = 6.09;
const PrecoEtanol = 5.39;
const autonomia = 12;
const CombustivelAtual = 'Gasolina';
const DistanciaViajem = 600;

const litrosConsumidos = DistanciaViajem / autonomia;
let valorpago; 

if (CombustivelAtual === 'Gasolina') {
    valorpago = litrosConsumidos * PrecoGasolina;
} else {
    valorpago = litrosConsumidos * PrecoEtanol;
}

console.log(`Valor gasto: R$ ${valorpago.toFixed(2)}`);
