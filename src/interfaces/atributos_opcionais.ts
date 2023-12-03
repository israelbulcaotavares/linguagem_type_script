interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string; //atributo opcional com "?", para que o atributo nao seja obrigatorio
}

const usuarioLogado: Usuario = {
  id: 1,
  nome: "Israel",
  email: "israel@zmail.com",
};

console.log(usuarioLogado);

export {};
