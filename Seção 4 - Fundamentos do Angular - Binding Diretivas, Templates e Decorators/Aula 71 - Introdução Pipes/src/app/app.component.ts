import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = 'Feef';
  pessoa =
  {
    name: 'Geeg',
    status: 1,
  };

  pessoa2 =
  {
    name: 'Jooj',
    status: 2,
  };

  pessoa3 =
  {
    name: 'Kook',
    status: 3,
  };

  getStyle(status: number)
  {
    console.log('getStyle');

    return {
      'active': status === 1,
      'partial': status === 2,
      'blocked': status === 3,
    }
  }
}
