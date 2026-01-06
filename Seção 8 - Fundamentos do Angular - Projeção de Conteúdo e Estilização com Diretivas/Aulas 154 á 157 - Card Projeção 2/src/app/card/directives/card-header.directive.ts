import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-header',
  host: { 'class': 'header' }
})
export class CardHeaderDirective {}
