// trabalhando com objetos e metodos

const pessoa = {
    nome: 'vinicius dev',
    idade: 21,

    descrever: function (){
        console.log(`meu nome é  ${this.nome} e minha idade é ${this.idade}`);
    }

};

pessoa.descrever();
const atributo = 'descrever';
