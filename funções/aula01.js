function CalcularImc (peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc (imc) {
  if(imc < 18.5){
    return('abaixo do peso');
}else if(imc >= 18.5 && 25){
    return('peso normal');
}else if(imc >= 25 && 30){
    return('acima do peso');
}else if(imc >= 30 && 40){
    return('obeso');
}else{
    console.log('obesidade grave');
}  
}

//main
(function (){
    const peso = 83;
const altura = 1.70;

const imc = CalcularImc(peso, altura);
console.log(classificarImc((imc)));
})();

