// Definindo uma classe usuário
export class User{
    constructor(id, nome, idade){
        this.id     = id;
        this.nome   = nome;
        this.idade  = idade;
    }

    hello(params) {
        console.log(`Olá, ${this.nome}`);    
    }
}