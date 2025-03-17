import { Directive, HostListener } from "@angular/core";

@Directive({
     selector: '[appListener]',
})
export class ListenerDirective {
     @HostListener('click')
     onClick() {
          console.log('ZEHAHAHAHAHA');
     }

     @HostListener('keyup', ['$event', '"HIHIHA irk HIHIHA"'])
     onKeyUp(event: KeyboardEvent, param2: string) {
          // console.log('WIHAHAHAHA', event);
          console.log(param2);
          const FullText = (event.target as HTMLInputElement).value;

          console.log('WIHAHAHAHA', FullText);
     }
}