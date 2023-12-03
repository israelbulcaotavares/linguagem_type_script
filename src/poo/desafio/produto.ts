/* 
nome (2 - 250) caracteres
preco (> 0)
desc (0 - 0.8)
precoFinal 
*/

class Produto {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desc: number=0 
  ) {
    if(id <= 0) throw new Error('Id inválido')
    if(nome.length < 2) throw new Error('Nome pequeno')
    if(nome.length > 250) throw new Error('Nome grande')
    if(preco <= 0) throw new Error('Preço inválido')
    if(desc < 0 || desc > 0.8) throw new Error('Desconto inválido') 
  }

//   precoFinal() {
//     return this.preco * ( 1 - this.desc)
//   }
 get precoFinal() {
    return this.preco * ( 1 - this.desc)
  }

}
console.log("\nPRODUTOS")
const p1 = new Produto(1, 'Caneta', 12.50, 0.1)
// console.log(p1.nome, p1.precoFinal()) //com precoFinal() como função recebe função
console.log(p1.nome, p1.precoFinal)  // com o get, "precoFinal" vira uma espécie de atributo
const p2 = new Produto(2, 'Notebook', 7860.78)
console.log(p2.nome, p2.preco)
