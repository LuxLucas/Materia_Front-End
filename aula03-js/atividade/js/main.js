import {User} from "./class/User.js";
import {Task} from "./class/Task.js";
import {LimitedTaskList} from "./class/LimitedTaskList.js";

// Instanciando usuário e lista de tarefas
let user = new User("João", 38);
let list = new LimitedTaskList();

// Instanciando tarefas
list.addTask(new Task("Estudar"));
list.addTask(new Task("Comprar leite"));
list.addTask(new Task("Ler livro"));
list.addTask(new Task("Fazer exercício"));
list.addTask(new Task("Estudar matemática"));
list.addTask(new Task("Fazer almoço"));
list.addTask(new Task("Limpar a casa"));
list.addTask(new Task("Assistir a uma série"));
list.addTask(new Task("Trabalhar no projeto"));
list.addTask(new Task("Organizar a agenda"));
list.addTask(new Task("Responder e-mails"));
list.addTask(new Task("Estudar inglês"));
list.addTask(new Task("Fazer compras"));
list.addTask(new Task("Cuidar do jardim"));
list.addTask(new Task("Revisar o código"));
list.addTask(new Task("Planejar a viagem"));
list.addTask(new Task("Jogar vídeo game"));
list.addTask(new Task("Lavar a roupa"));
list.addTask(new Task("Ler notícias"));
list.addTask(new Task("Cozinhar jantar"));
list.addTask(new Task("Fazer backup dos arquivos"));
list.addTask(new Task("Meditar"));
list.addTask(new Task("Tocar guitarra"));
list.addTask(new Task("Fazer uma caminhada"));
list.addTask(new Task("Organizar o quarto"));

// Concluindo tarefas
list.changeStatusTaskById(5);
list.changeStatusTaskById(10);
list.changeStatusTaskById(15);
list.changeStatusTaskById(20);
list.changeStatusTaskById(25);

// Saundando usuário
console.log(user.greetUser());

// Mostrando tarefas
list.showTasks();

// Tentando adicionar uma tarefa acima do limite
list.addTask("Entregar trabalho");