import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sumIncrement  = signal(0);
  indexImagemAtual   = signal(0);
  imagensList   = signal([
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg'
  ]);

  // To Do variáveis

  currentTask = signal('');
  listaTarefas = signal<string[]>([]);

  incrementar(){
    this.sumIncrement.update((value) => ++value);
  }

  decrementar(){
    this.sumIncrement.update((value) => --value);
  }

  retrocederImagem(){
    this.indexImagemAtual.update((value) => --value);
    if(this.indexImagemAtual() < 0){
      this.indexImagemAtual.update((value) => this.imagensList().length -1);
    }
  }

  procederImagem(){    
    this.indexImagemAtual.update((value) => ++value);
    if(this.indexImagemAtual() > this.imagensList().length -1){
      this.indexImagemAtual.update((value) => 0);
    }
  }

  //ToDo funções

  enviar(){
    if(this.currentTask()){
      const tarefa = this.currentTask();
      this.listaTarefas.update((task) => [tarefa, ...task]);
      this.currentTask.set('');
    }
  }
}
