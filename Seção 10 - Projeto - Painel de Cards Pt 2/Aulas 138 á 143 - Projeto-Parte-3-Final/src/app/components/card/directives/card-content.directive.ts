import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content, [appCardContent]',
  host: { 'class': 'content-balance-card' }
})
export class CardContentDirective {}
