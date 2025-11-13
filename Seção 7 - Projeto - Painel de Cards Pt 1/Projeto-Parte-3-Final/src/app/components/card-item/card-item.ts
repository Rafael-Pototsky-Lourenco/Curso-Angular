import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  imports: [],
  templateUrl: './card-item.html',
  styleUrl: './card-item.scss',
})
export class CardItem {
  @Input({ required: true }) text: string = '';
  @Input({ required: true }) value: string = '';;
}
