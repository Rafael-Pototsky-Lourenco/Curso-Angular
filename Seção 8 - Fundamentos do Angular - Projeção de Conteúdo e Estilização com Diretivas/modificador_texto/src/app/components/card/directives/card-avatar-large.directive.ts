import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-large, [appCardAvatarLarge]',
  host: { 'class': 'avatar-large' }
})
export class CardAvatarLargeDirective {}
