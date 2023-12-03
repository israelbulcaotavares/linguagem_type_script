//classe abstrata
abstract class Celular {
    ligar(){
        console.log('Em ligação')
    }

    abstract acessarRedeMovel(): void 
}
//classe concreta
class Iphone23Pro extends Celular {
    acessarRedeMovel(): void {
        console.log('Usando rede 7G')
    }
}
//classe concreta
class GalaxyS75Ultra extends Celular {
    acessarRedeMovel(): void {
        console.log('Usando rede 12G')
    }

}
let c1 = new GalaxyS75Ultra()
c1.ligar()
c1.acessarRedeMovel()

c1 = new Iphone23Pro()
c1.ligar()
c1.acessarRedeMovel()

export {}