interface Usuario {
  id: number;
  nome: string;
  email: string;
}

const usuarioLogado: Usuario = {
  id: 1,
  nome: "Israel",
  email: "israel@zmail.com",
};

console.log(usuarioLogado);

export {};
