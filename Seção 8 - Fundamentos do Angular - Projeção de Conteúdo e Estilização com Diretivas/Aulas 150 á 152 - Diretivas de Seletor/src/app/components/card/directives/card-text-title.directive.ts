import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-title, [appCardTextTitle]',
  host: { 'class': 'title' }
})
export class CardTextTitleDirective {}
