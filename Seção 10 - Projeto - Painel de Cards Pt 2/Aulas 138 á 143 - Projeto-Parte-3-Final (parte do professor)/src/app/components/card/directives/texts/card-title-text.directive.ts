import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-title-text, [appCardTitleText]',
  host: { 'class': 'ca-c-card__title-text' }
})
export class CardTitleTextDirective {}
