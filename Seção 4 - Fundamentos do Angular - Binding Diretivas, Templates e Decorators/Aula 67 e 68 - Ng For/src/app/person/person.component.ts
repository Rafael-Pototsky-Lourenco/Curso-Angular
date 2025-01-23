import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  personSelectedIndex: number | undefined;
  listPessoas = [
    { name: 'Felipe Freitas', age: 26, },
    { name: 'Fulano da Silva', age: 34, },
    { name: 'Jorginho Carvalho', age: 55, },
    { name: 'Joãozinho da Silva', age: 18, },
  ];

  selectPerson(index: number)
  {
    console.log(index);
    this.personSelectedIndex = index;
  }
}
