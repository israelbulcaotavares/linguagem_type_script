interface Usuario {
  id?: number; //atributo opcional
  nome: string;
  email?: string;
  senha?: string;
}

const usuarioLogado: Usuario = {
  id: 1,
  nome: "Israel",
  email: "israel@zmail.com",
  senha: "12312",
};

console.log(usuarioLogado);

export {};

const usuarioOpcional: Partial<Usuario> = {
  //Nao obriga que TODA a interface Usuário seja inserida
  id: 123,
  nome: "Jaime",
  senha: "3423",
};
console.log(usuarioLogado.id);
console.log(usuarioLogado.nome);
console.log(usuarioLogado.senha);

const usuarioCompleto: Required<Usuario> = { //propriedades obrigatorias 
    id:123,
  nome: "Ana",
  email: "ana@zmail.com",
  senha:'123423'
};

console.log(usuarioCompleto.id)
console.log(usuarioCompleto.nome)
console.log(usuarioCompleto.email)
console.log(usuarioCompleto.senha)

const usuarioCompletoImutavel: Readonly<Usuario> = { //propriedades imutáveis
    id:123,
  nome: "Ana",
  email: "ana@zmail.com",
  senha:'123423'
};

console.log(usuarioCompletoImutavel.id)
console.log(usuarioCompletoImutavel.nome)
console.log(usuarioCompletoImutavel.email)
console.log(usuarioCompletoImutavel.senha)

export {};
