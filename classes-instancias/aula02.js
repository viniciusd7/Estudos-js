
//trabalhando e entendendo co constructor 
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

const vitor = new pessoa('Vitor', 25); //sempre ao ser chamado, ele vai chamar primeiro o construtor 

const marcelo = new pessoa('Marcelo', 30);

console.log(vitor);
