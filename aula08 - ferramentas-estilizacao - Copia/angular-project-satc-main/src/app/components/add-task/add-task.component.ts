import { Component, inject, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-task',
  imports: [CardModule, 
            FloatLabel, 
            InputText, 
            SelectModule, 
            ButtonModule, 
            FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  messageService = inject(MessageService);
  typesTask   = signal(['Trabalho', 'Faculdade', 'Pessoal', 'Social']);

  description = signal('');
  type        = signal<any>(null);

  isInvalidButton(){
    return !this.description() || !this.type();
  }

  save(){
    const task = {
      description: this.description(),
      type: this.type(),
      id: new Date().getTime(),
      craetAt: new Date()
    }

    console.log(task);
    this.description.set('');
    this.type.set(null);

    this.messageService.add({
      severity: 'success',
      summary: 'Salvo',
      detail: 'Task salva com sucesso!'
  })
  }
}
