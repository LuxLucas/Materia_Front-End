import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
}
