export class Task{

    // Atributos privados
    #id;
    #description;
    #status;

    // Último 'id' instanciado pela classe
    static #lastId = 0;

    // Concatena o último 'id'
    #generateId()
    {
        Task.#lastId++;
        return Task.#lastId;
    }

    // Construtor da classe
    constructor(description){
        this.#id            = this.#generateId();
        this.#description   = description;
        this.#status        = false;
    }

    // Métodos 'getters'
    isComplete()
    {
        return this.#status;
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

    // Muda o estado da tarefa
    changeStatus()
    {
        this.#status = !this.#status;
    }

    setDescription(description)
    {
        if(typeof(description) == 'string'){
            this.#description = description;
        }else{
            throw new TypeError("'description' deve ser uma string");
        }
    }

    // Mostra os detalhes da tarefa
    show()
    {
        // Como o enunciado pede, estou usando 'destructuring assignment'
        let [id, description, status] = [this.getId(), this.getDescription(), 
        this.isComplete() ? 'Completo' : 'Incompleto'];

        return `Id: ${id} | Tarefa: ${description} | Status: ${status}`;
    }
}
