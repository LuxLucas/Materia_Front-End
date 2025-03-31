export class Task{

    // Atributos privados
    #id;
    #description;
    #complete;

    // Último 'id' instanciado pela classe
    static #lastId = 0;

    // Concatena o último 'id'
    #generateId()
    {
        Task.#lastId++;
        return Task.#lastId;
    }

    // Construtor da classe
    constructor(description, complete){
        this.#id            = this.#generateId;
        this.#description   = description;
        this.#complete      = complete;
    }

    // Métodos 'getters'
    isComplete()
    {
        return this.#complete;
    }

    getDescription()
    {
        return this.#description;
    }

    getId()
    {
        return this.#id;
    }

    static getLastId()
    {
        return Task.#lastId;
    }

    // Métodos 'setters'
    changeStatus()
    {
        this.#complete = !this.#complete;
    }

    setDescription(description)
    {
        if(typeof(description) == 'string'){
            this.#description = description;
        }else{
            throw new Error("'description' deve ser uma string");
        }
    }
}
