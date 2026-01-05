import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-text-description',
  host: { 'class': 'description' }
})
export class CardTextDescriptionDirective {
  @Input()
  @HostBinding('style.color') color: string = '';
}
