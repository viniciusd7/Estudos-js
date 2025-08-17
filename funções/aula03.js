/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código Condição de pagamento:

- À vista Débito, recebe 10% de desconto;

- À vista no Dinheiro ou PIX, recebe 15% de desconto;

- Em duas vezes, preço normal de etiqueta sem juros;

- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

- utilize funçoes 
*/

function AplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function AplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)));
}

const ValorProduto = 500;
const FormaDePagamento = 4;

if(FormaDePagamento === 1){
    console.log(AplicarDesconto(ValorProduto, 10));
}else if(FormaDePagamento === 2){
    console.log(AplicarDesconto(ValorProduto, 15));
}else if(FormaDePagamento === 3){
    console.log(ValorProduto);
}else{
    console.log(AplicarJuros(ValorProduto, 10));
}