export class TaskList{
    #list = [];

    // Retorna a quantidade de tarefas na lista
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

    // Procura uma tarefa por seu 'id'
    searchById(id)
    {
        for(let task of this.#list){
            if(task.getId() === id){
                return task;
            }
        }
    }
}
