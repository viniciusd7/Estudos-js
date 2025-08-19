
class pessoa { //classe uma definição do que irá ser  
    nome;
    idade;
    
    descrever() {
        console.log(`meu nome é  ${this.nome} e minha idade é ${this.idade}`);
    }
}


// a instancia e uma ocorrencia de uma pessoa neste caso
const vitor = new pessoa();

console.log('vitor');
vitor.nome = 'Vitor';
vitor.idade = 25;

console.log('marcelo');
const marcelo = new pessoa();
marcelo.nome = 'Marcelo';
marcelo.idade = 30;

console.log(vitor);
console.log(marcelo);   