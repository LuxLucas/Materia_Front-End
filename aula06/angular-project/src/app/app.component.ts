import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { PassarImagensComponent } from "./components/passar-imagens/passar-imagens.component";
import { ToDoListComponent } from "./components/to-do-list/to-do-list.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, ContadorComponent, PassarImagensComponent, ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
}
