import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-title',
  host: { 'class': 'title' }
})
export class CardTextTitleDirective {}
