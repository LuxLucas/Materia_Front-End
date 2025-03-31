import { TaskList } from "./TaskList.js";

export class LimitedTaskList extends TaskList{
    #limite;

    constructor(limite = 25)
    {
        super();
        this.#limite = limite;
    }

    addTask(task)
    {
        if(this.legth() < this.#limite){
            this.add(task);
        }else{
            console.log("Você atingiu o limite de tarefas.");
        }
    }
}