import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-big, [appCardBig]',
  host: { 'class': 'big' }
})
export class CardBigDirective {}
