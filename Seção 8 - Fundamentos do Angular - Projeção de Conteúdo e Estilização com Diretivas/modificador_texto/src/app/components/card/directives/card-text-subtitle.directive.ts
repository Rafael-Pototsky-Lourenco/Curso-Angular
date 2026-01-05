import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-subtitle',
  host: { 'class': 'subtitle' }
})
export class CardTextSubtitleDirective {}
