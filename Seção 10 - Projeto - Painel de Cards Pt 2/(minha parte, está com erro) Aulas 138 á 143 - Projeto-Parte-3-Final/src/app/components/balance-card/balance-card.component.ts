import { Component } from '@angular/core';
import { CardItem } from '../card-item/card-item';
import { CardTitleComponent } from "../card-title/card-title.component";
import { CardComponent } from "../card/card.component";
import { CardHeaderDirective } from "../card/directives/card-header.directive";

@Component({
  selector: 'app-balance-card',
  imports: [CardItem, CardTitleComponent, CardComponent, CardHeaderDirective],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {

}
