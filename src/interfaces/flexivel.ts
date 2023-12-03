interface Flexivel {
  nome: string;
  [chave: string] : number | string //ou seja, desde que tenha propriedades com numeros ou strings
}

const f1: Flexivel = {
  nome: "Teste",
  idade: 44,
  salario: 234234,
  senha: '345njk43#$'
};

console.log(f1);

export {};
