import {User} from "./class/User.js";
import {Task} from "./class/Task.js";
import {TaskList} from "./class/TaskList.js";

let lucas = new User("Lucas", 19); 
let tarefa = new Task("Comer");
let lista = new TaskList();

console.log(tarefa.show());
console.log(lucas.greetUser());

lista.add(tarefa);

console.log(lucas.constructor.name);