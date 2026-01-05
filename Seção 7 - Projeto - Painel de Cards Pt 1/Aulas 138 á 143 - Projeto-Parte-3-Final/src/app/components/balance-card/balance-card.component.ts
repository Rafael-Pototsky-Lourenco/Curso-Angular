import { Component } from '@angular/core';
import { CardItem } from '../card-item/card-item';
import { CardTitleComponent } from "../card-title/card-title.component";

@Component({
  selector: 'app-balance-card',
  imports: [CardItem, CardTitleComponent],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {

}
