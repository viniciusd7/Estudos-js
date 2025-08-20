/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    CalcularGastoPercurso(distanciaKM, precoCombustivel) {
        return distanciaKM * this.gastoMedioKm * precoCombustivel;
    }
}

const Gol = new Carro('Volkswagen', 'Preto', 1/12); 
// 1/12 porque ele faz 12km por litro ou seja, gasta 0.083 litros por km

const gasto = Gol.CalcularGastoPercurso(1260, 5.67);
console.log(`O gasto da viagem sera de R$ ${gasto.toFixed(2)}`);
