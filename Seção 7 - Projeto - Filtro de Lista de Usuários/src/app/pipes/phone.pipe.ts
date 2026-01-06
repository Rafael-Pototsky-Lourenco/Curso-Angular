import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): any {
    const INVALID_PHONE = !phone || phone.length < 11 || phone.length > 11;

    if(INVALID_PHONE)
    {
      return 'Telefone Indisponível ou Inválido';
    }

    const CELLPHONE = phone.length === 11;

    if(CELLPHONE)
    {
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
    }
  }

}
