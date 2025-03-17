import { Directive, HostBinding } from "@angular/core";

@Directive({
     selector: '[appStyle]',
})
export class StyleDirective {
     // @HostBinding('attr.style') attrStyle = 'background-color: fuchsia; color: purple';

     // @HostBinding('style') propStyle = 'background-color: fuchsia; color: purple';

     // @HostBinding('style') propStyleObj = {
     //      backgroundColor: 'fuchsia',
     //      color: 'purple',
     // }

     @HostBinding('style.backgroundColor') bgColor = 'fuchsia';
     @HostBinding('style.color') Color = 'purple';
}