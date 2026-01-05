import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-small, [appCardAvatarSmall]',
  host: { 'class': 'avatar-small' }
})
export class CardAvatarSmallDirective {}
