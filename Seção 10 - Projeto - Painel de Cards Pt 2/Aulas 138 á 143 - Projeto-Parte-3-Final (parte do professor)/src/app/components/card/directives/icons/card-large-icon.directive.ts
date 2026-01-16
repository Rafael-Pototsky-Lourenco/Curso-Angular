import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-large-icon, [appCardLargeIcon]',
  host: { 'class': 'ca-c-card__large-icon' }
})
export class CardLargeIconDirective {}
