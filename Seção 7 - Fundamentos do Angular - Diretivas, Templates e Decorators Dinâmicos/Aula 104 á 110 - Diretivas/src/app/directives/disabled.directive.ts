import { Directive, Host, HostBinding } from "@angular/core";

@Directive({
     selector: '[appDisabled]',
})
export class DisabledDirective { 
     // O hostBinding é simplesmente uma maneira de vincular propriedades de um elemento host a propriedades de uma diretiva. Porém não é muito recomendado usar (dependendo de qual for o seu objetivo), por exemplo, se você quisesse não desabilitar o botão, você teria que usar o 'disabled' sozinho e não o 'attr.disabled'.
     // @HostBinding('attr.disabled') isDisabled = true;
     @HostBinding('disabled') propDisabled = false;
}