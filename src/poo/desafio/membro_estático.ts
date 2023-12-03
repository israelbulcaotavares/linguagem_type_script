class DesafioEstatico {
  nota : number = 1000; // atributo de instancia
  static notaEstatica: number = 7.9 //atributo de instancia

  // método de class estático
  static executar() {
    // imprimir o valor de nota no console
    const instancia = new DesafioEstatico()
    console.log('')
    console.log(instancia.nota)
    console.log(this.notaEstatica)
  }
} 
DesafioEstatico.executar()