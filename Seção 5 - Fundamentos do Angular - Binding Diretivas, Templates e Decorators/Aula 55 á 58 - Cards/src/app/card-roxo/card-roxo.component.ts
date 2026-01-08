import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-roxo',
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.scss',
  //encapsulation: ViewEncapsulation.Emulated,
  // Tive que Comentar o encapsulation do ShadowDow pq ele tava quebrando na hora de declarar uma estilização global (por algum motivo).
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardRoxoComponent {

}
