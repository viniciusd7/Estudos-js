const etanol = 5.79;
const autonomia = 8;
const DistanciaViajem = 100;
const litrosConsumidos = DistanciaViajem / autonomia;
const valorpago = litrosConsumidos * etanol;
console.log(valorpago.toFixed(2));


