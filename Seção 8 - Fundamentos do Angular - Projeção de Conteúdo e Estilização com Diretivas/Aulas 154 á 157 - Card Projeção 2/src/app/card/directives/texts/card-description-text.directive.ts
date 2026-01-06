import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-description-text, [appCardDescriptionText]',
  host: { 'class': 'description-text' }
})
export class CardDescriptionTextDirective {}
