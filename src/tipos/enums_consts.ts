const Erros = {
  NOME_NULO: "nome_nulo",
  EMAIL_NAO_ENCONTRADO: "email_nao_encontrado",
  ID_CANCELADA: "id_cancelada",
} as const 

let erro: string 
erro = Erros.NOME_NULO  
erro = 'cpf_invalido' 

console.log(erro )
