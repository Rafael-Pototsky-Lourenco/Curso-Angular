import { Component } from '@angular/core';
import { CardItem } from "../card-item/card-item";

@Component({
  selector: 'app-info-card',
  imports: [CardItem],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {

}
