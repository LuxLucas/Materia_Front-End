import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  currentTask = signal('');
  listaTarefas = signal<string[]>([]);

  enviar(){
    if(this.currentTask()){
      const tarefa = this.currentTask();
      this.listaTarefas.update((task) => [tarefa, ...task]);
      this.currentTask.set('');
    }
  }
}
