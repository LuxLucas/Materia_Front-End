// Definindo uma classe usuário
export class User{

    // Atributos privados
    #id;
    #nome;
    #idade;

    // último 'id' instanciado pela classe
    static #lastId = 0;

    newId(){
        User.#lastId++;
        return User.#lastId;
    }

    constructor(nome, idade){
        this.#id     = newId();
        this.#nome   = nome;
        this.#idade  = idade;
    }
}