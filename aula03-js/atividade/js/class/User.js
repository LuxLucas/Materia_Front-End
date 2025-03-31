// Definindo uma classe usuário
export class User{

    // Atributos privados
    #id;
    #name;
    #age;

    // Último 'id' instanciado pela classe
    static #lastId = 0;

    // Concatena o último 'id'
    #generateId()
    {
        User.#lastId++;
        return User.#lastId;
    }

    // Método construtor
    constructor(name, age)
    {
        this.#id     = this.#generateId();
        this.#name   = name;
        this.#age  = age;
    }

    // Funções 'geters'
    getName()
    {
        return this.#name;
    }

    getage()
    {
        return this.#age;
    }

    getId()
    {
        return this.#id;
    }

    static getLastId()
    {
        return User.#lastId;
    }

    // Métodos 'seters'
    setName(name)
    {
        if(typeof(name) == 'string'){
            this.#name = name;
        }else{
            throw new Error("'name' deve ser uma string.");
        }
    }

    setAge(age)
    {
        if(typeof(age) == 'number' && age % 1 == 0 && age >= 0){
            this.#age = age;
        }else{
            throw new Error("'age' deve ser um inteiro positivo.");
        }
    }
    
}