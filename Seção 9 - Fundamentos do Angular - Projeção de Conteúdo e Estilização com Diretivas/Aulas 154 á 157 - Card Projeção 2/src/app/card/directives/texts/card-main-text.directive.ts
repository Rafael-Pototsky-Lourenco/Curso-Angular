import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-main-text, [appCardMainText]',
  host: { 'class': 'main-text' }
})
export class CardMainTextDirective {}
