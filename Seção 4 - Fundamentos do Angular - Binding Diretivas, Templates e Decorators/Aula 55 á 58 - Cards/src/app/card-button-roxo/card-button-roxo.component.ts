import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button-roxo',
  templateUrl: './card-button-roxo.component.html',
  styleUrl: './card-button-roxo.component.scss'
})
export class CardButtonRoxoComponent {
  @Input({ transform: booleanAttribute }) buttonDisabled: boolean = false;

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick()
  {
    console.log('No Wayayayayay');

    this.buttonClickEmitter.emit(true);
  }
}
