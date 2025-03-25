/*
Teste de import
import { add, pi } from './Users.mjs';


// Import the function and constant

console.log(add(2, 3)); // Output: 5
console.log(pi);        // Output: 3.14159
*/

// Definindo uma classe usuário
class User{
    constructor(id, nome, idade){
        this.id     = id;
        this.nome   = nome;
        this.idade  = idade;
    }
}

class Task{
    constructor(id, description, complete){
        this.id             = id;
        this.description    = description;
        this.complete       = complete;
    }
}

/*
    Para tornar uma variável privada no JS utiliza-se # antes da variável
*/

class TaskList{
    #taskList = [1];
    #limite = 0;

    constructor(limite){
        this.#limite = limite;
    }
}

let list = new TaskList(2);

console.log(list.limite);