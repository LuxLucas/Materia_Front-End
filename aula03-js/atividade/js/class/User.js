// Definindo uma classe usuário e tornando-a exportável
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
        this.#id    = this.#generateId();
        this.#name  = name;
        this.#age   = age;
    }

    // Funções 'getters'
    getName()
    {
        return this.#name;
    }

    getAge()
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

    // Métodos 'setters'
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

    // Função de saudação ao usuário - saudarUsuario()
    greetUser()
    {
        let name = this.getName(), age = this.getAge();

        return `Olá, ${name}, você tem ${age} anos.`;
    }
}