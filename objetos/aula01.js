// trabalhando com objetos e metodos

class pessoa {
    nome
    idade
}

const pessoa = {
    nome: 'vinicius dev',
    idade: 21,

    descrever: function (){
        console.log(`meu nome é  ${this.nome} e minha idade é ${this.idade}`);
    }

};

pessoa.descrever();