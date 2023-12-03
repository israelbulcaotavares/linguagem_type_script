import { profileEnd } from "console";

//Nome, Preco, Desconto (0-1), Função PrecoComDesconto
type Produto = {
    nome: string;
    preco: number;
    desconto: number;
    precoComDesconto: () => number;
  };
  
 let produto: Produto = {
    nome: "Tv",
    preco: 23.4,
    desconto: 0.1,
    precoComDesconto() {
      return this.preco * (1 - this.desconto);
    },
  };


// let produto: {
//   nome: string;
//   preco: number;
//   desconto: number;
//   precoComDesconto: () => number;
// };

// produto = {
//   nome: "Tv",
//   preco: 23.4,
//   desconto: 0.1,
//   precoComDesconto() {
//     return this.preco * (1 - this.desconto);
//   },
// };

console.log('')
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);
console.log(produto.precoComDesconto())
