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
*/
const ValorProduto = 899.90;
const FormaDePagamento = 1;

if(FormaDePagamento === 1){
    console.log(ValorProduto - (ValorProduto * 0.1));
}else if(FormaDePagamento === 2){
    console.log(ValorProduto - (ValorProduto * 0.15));
}else if(FormaDePagamento === 3){
    console.log(ValorProduto);
}else{
    console.log(ValorProduto + (ValorProduto * 0.1));
}

