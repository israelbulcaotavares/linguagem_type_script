type OperacaoDeFuncoes = (a: number, b: number) => number;
  
let operacao: OperacaoDeFuncoes;
 
// let operacao: (a: number, b: number) => number;

function somar(n1: number, n2: number): number {
  return n1 + n2;
}
 
function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}

function dividir(n1: number, n2: number): number {
  return n1 / n2;
}


operacao = somar 

console.log(operacao(2,5))

operacao = multiplicar 
console.log(operacao(2,5))

operacao = dividir 
console.log(operacao(2,5))