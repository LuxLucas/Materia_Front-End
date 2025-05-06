import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-passar-imagens',
  imports: [],
  templateUrl: './passar-imagens.component.html',
  styleUrl: './passar-imagens.component.css'
})

export class PassarImagensComponent {
  indexImagemAtual   = signal(0);
  imagensList   = signal([
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg'
  ]);
  
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
