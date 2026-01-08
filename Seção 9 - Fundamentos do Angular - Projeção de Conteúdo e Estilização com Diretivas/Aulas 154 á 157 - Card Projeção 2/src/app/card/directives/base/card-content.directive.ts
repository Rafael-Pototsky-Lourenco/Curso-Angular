import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content',
  host: { 'class': 'content' }
})
export class CardContentDirective {}
