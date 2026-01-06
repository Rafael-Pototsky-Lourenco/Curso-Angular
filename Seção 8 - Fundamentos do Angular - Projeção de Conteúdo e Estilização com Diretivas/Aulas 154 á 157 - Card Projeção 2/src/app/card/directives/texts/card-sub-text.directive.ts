import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-sub-text, [appCardSubText]',
  host: { 'class': 'sub-text' }
})
export class CardSubTextDirective {}
