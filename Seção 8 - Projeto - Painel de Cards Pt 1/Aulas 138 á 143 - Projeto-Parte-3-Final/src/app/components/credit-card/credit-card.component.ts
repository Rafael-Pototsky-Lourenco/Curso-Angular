import { Component } from '@angular/core';
import { CardItem } from "../card-item/card-item";
import { CardTitleComponent } from "../card-title/card-title.component";

@Component({
  selector: 'app-credit-card',
  imports: [CardItem, CardTitleComponent],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {

}
