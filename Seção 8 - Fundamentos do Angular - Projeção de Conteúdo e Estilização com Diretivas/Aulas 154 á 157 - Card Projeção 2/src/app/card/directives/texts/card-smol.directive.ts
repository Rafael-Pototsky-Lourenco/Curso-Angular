import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-smol, [appCardSmol]',
  host: { 'class': 'smol' }
})
export class CardSmolDirective {}
