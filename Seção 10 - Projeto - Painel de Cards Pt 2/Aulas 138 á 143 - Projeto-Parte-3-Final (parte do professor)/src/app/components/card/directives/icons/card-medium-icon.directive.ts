import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-medium-icon, [appCardMediumIcon]',
  host: { 'class': 'ca-c-card__medium-icon' }
})
export class CardMediumIconDirective {}
