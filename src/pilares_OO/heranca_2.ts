interface Entidade {
  id: number;
}

interface Vendavel {
  nome: string;
  preco: number;
  desconto: number;
}

class Produto implements Entidade, Vendavel {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desconto: number
  ) {}

  get precoFinal(){
    return this.preco * (1 - this.desconto)
  }
}

class Servico implements Entidade, Vendavel {
    constructor(
        readonly id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desconto: number
      ) {}
}

console.log("PRODUTO")
const p1 = new Produto(123, "joao", 34.5, 0.1);
console.log(p1);
console.log(p1.precoFinal);

let v1: Vendavel = new Produto(1, 'Caneta', 10,0)
console.log(v1)

v1 = new Servico(2, 'Montar TV', 32.9, 0.2)
console.log(v1)
console.log(v1.preco)
export {};
