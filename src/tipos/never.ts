function falhar(msg: string): never { /* para nunca retornar um valor */
    throw new Error(msg) 
}

falhar('Descrição muito pequena')