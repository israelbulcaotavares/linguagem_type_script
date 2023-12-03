interface Usuario {
    id: number 
    nome:string
    email:string 
    senha?: string
}

interface CasoDeUso {
    executar(entrada: any ): any    
}
 
class RegistrarUsuario implements CasoDeUso {
    executar(usuario: Usuario) {
        console.log('Executando registrar usuário')
        console.log(usuario)
    }
}



const u1: Usuario =  {
    id: 321, 
    nome: 'Maria',
    email: 'maria@zmail.com',
    senha: '23423f3'
}
const casoDeUso: CasoDeUso = new RegistrarUsuario()
casoDeUso.executar(u1)

export {}