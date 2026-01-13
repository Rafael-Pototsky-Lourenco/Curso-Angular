import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-header, [appCardHeader]',
  host: { class: 'header-balance-card' }
})
export class CardHeaderDirective {}
