//funçoes recebendo objetos

class pessoa { //classe uma definição do que irá ser 
    nome;
    idade;
    AnoDeNascimento;

    constructor(nome,idade,AnoDeNascimento){ //digamos que ele ira servir como o que acontece com uma pessoa quando e instanciada no codigo 
        this.nome = nome;
        this.idade = idade;
        this.AnoDeNascimento = 2025 - idade;
    }
   
    descrever() {
        console.log(`meu nome é  ${this.nome} e minha idade é ${this.idade}`);
    }
}

function CompararPessoas(P1, P2) {
    if (P1.idade > P2.idade) {
        console.log(`${P1.nome} é mais velho que ${P2.nome}.`);
    } else if (P1.idade < P2.idade) {
        console.log(`${P1.nome} é mais novo que ${P2.nome}.`);
    } else {
        console.log(`${P1.nome} e ${P2.nome} têm a mesma idade.`);
    }
}

const vitor = new pessoa('Vitor', 25);
const renan = new pessoa('Renan', 30);

CompararPessoas(vitor, renan);