import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  sumIncrement  = signal(0);

  incrementar(){
    this.sumIncrement.update((value) => ++value);
  }

  decrementar(){
    this.sumIncrement.update((value) => --value);
  }
}
