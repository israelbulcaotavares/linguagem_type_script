//movimentarConta(numConta: number, valor: number)

// console.log(...)

//type ContaCorrente (numero, saldo, movimentar)
type ContaCorrente = {
  numero: number;
  saldo: number;
  movimentar: (valor: number) => void;
};
//type Cliente (nome, email, contas[])
type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

function movimentar(this: ContaCorrente, valor: number) {
  this.saldo += valor;
}
//const clientes = Cliente[] = [ ... ]
const clientes: Cliente[] = [
  {
    nome: "Ana",
    email: "ana@zmail.com",
    contas: [
      {
        numero: 1234,
        saldo: 0,
        /*  movimentar(valor: number) {
          this.saldo += valor;
        }, */
        movimentar,
      },
      {
        numero: 3232,
        saldo: 670.12,
        /* movimentar(valor: number) {
            this.saldo += valor;
          }, */
        movimentar,
      },
    ],
  },
];

function movimentarConta(numConta: number, valor: number) {
  // const contas = clientes.map(cli => cli.contas)
  const conta = clientes.map((cli) => {
      return cli.contas.find((cc) => cc.numero === numConta);
    })
    .filter((c) => c)[0];
  conta?.movimentar(valor); 
}
function consultarSaldo(numConta: number): number | null {
  // const contas = clientes.map(cli => cli.contas)
  const conta = clientes.map((cli) => {
      return cli.contas.find((cc) => cc.numero === numConta);
    }).filter((c) => c)[0] 
  return conta?.saldo ?? null 
}

movimentarConta(3232, 678.90);
console.log(consultarSaldo(3232))
