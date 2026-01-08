import { Component } from '@angular/core';
import { CardItem } from "../card-item/card-item";
import { CardTitleComponent } from "../card-title/card-title.component";

@Component({
  selector: 'app-info-card',
  imports: [CardItem, CardTitleComponent],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {

}
