export class TaskList{
    #list = [];

    legth()
    {
        return this.#list.length;
    }

    // Adiciona uma tarefa ao final da lista - adicionarTarefa()
    add(task)
    {
        if(task.constructor.name == 'Task'){
            this.#list.push(task);
        }else{
            throw new TypeError("O parâmetro não é um objeto de classe 'Task'.");
        }
    }

}
