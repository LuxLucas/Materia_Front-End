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
    
    // Remove uma tarefa por seu 'id' - removerTarefa()
    removeById(id)
    {
        let task = this.searchById(id);
        if(typeof task != "undefined"){
            let position = this.#list.indexOf(task);
            this.#list.splice(position, 1);
        }
    }

    // Altera o estado de uma tarefa pelo 'id' - marcarComoCompleta()
    changeStatusTaskById(id)
    {
        let task = this.searchById(id);
        if(typeof task != "undefined"){
            for(let item of this.#list){
                if (id == item.getId()){
                    item.changeStatus();
                }
            }
        }
    }

    // Mostra as informações das tarefas guardadas - listarTarefas()
    showTasks()
    {
        this.#list.forEach(element => console.log(element.show() + '\n'));
    }
}
