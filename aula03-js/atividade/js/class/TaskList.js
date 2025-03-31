export class TaskList{
    #limite;
    #list = [];

    constructor(limite = 25)
    {
        this.#limite = limite;
    }

    legth()
    {
        return this.#list.length;
    }
}
