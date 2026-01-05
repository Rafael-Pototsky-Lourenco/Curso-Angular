import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-subtitle, [appCardTextSubtitle]',
  host: { 'class': 'subtitle' }
})
export class CardTextSubtitleDirective {}
