import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  // Nessa linha, é definido que o IUser é um objeto vazio, PORÉM, se caso no HTML, tentar puxar um dado do próprio IUser, ele retornará undefined, pois o objeto está vazio.
  @Input({ required: true }) user: IUser = { } as IUser;
  // Nessa linha, é definido que o objeto pode receber os valores das propriedades de IUser.
  // @Input() user: Partial<IUser> = { };
}
